import { useEffect, useState } from "react";
import { Link } from "react-router";
import AllReferralsHeader from "./AllReferralsHeader";
import Pagination from "./Pagination";

const sortByOptions = [
  {
    optionId: "desc",
    displayText: "Newest first",
  },
  {
    optionId: "asc",
    displayText: "Oldest first",
  },
];

const AllReferralsPage = ({ referrals, isLoading }) => {
  const [activeOptionId, setActiveOptionId] = useState(
    sortByOptions[0].optionId,
  );
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const normalizeText = (value) => value.toLowerCase().trim();

  const getSortedReferrals = (referralList) => {
    const referralsCopy = [...referralList];

    referralsCopy.sort((firstReferral, secondReferral) => {
      const firstDate = new Date(firstReferral.date).getTime();
      const secondDate = new Date(secondReferral.date).getTime();

      if (activeOptionId === "asc") {
        return firstDate - secondDate;
      }

      return secondDate - firstDate;
    });

    return referralsCopy;
  };

  const getFilteredReferrals = (referralList) => {
    const searchText = normalizeText(searchInput);

    if (searchText === "") {
      return referralList;
    }

    return referralList.filter((eachReferral) => {
      const name = normalizeText(eachReferral.name || "");
      const serviceName = normalizeText(eachReferral.serviceName || "");

      return name.includes(searchText) || serviceName.includes(searchText);
    });
  };

  const allReferrals = isLoading ? [] : referrals || [];
  const filteredReferrals = getFilteredReferrals(allReferrals);
  const sortedReferrals = getSortedReferrals(filteredReferrals);
  const totalPages = Math.ceil(sortedReferrals.length / rowsPerPage);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
    if (totalPages === 0 && currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const lastRowIndex = currentPage * rowsPerPage;
  const firstRowIndex = lastRowIndex - rowsPerPage;

  const currRows = sortedReferrals.slice(firstRowIndex, lastRowIndex);

  return (
    <div className="bg-blue-100 px-4 py-4">
      <AllReferralsHeader
        sortByOptions={sortByOptions}
        activeOptionId={activeOptionId}
        setActiveOptionId={setActiveOptionId}
        searchInput={searchInput}
        setSearchInput={(value) => {
          setSearchInput(value);
          setCurrentPage(1);
        }}
        setCurrentPage={setCurrentPage}
      />
      <div className="my-6 w-full">
        {!isLoading ? (
          <table className="table-auto w-full">
            <thead className="bg-blue-50">
              <tr>
                <th className="border border-gray-300 px-4 py-2">NAME</th>
                <th className="border border-gray-300 px-4 py-2">SERVICE</th>
                <th className="border border-gray-300 px-4 py-2">DATE</th>
                <th className="border border-gray-300 px-4 py-2">PROFIT</th>
              </tr>
            </thead>
            <tbody className="bg-blue-50">
              {currRows.length > 0 ? (
                currRows.map((each) => (
                  <tr className="text-center" key={each.id}>
                    <td className="border border-gray-300 px-4 py-2 ">
                      <Link
                        to={`/referral/${each.id}`}
                        className="font-medium text-blue-700 hover:underline"
                      >
                        {each.name}
                      </Link>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 ">
                      {each.serviceName}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {each.date}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 ">
                      {each.profit}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="border border-gray-300 px-4 py-6 text-center text-gray-500"
                  >
                    No referrals found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        ) : null}
        <Pagination
          rowsPerPage={rowsPerPage}
          totalRows={sortedReferrals.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default AllReferralsPage;
