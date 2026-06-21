const AllReferralsHeader = ({
  sortByOptions,
  activeOptionId,
  setActiveOptionId,
  searchInput,
  setSearchInput,
  setCurrentPage,
}) => {
  const onChangeDropdown = (e) => {
    setActiveOptionId(e.target.value);
    setCurrentPage(1);
  };

  const onChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="w-12/12  bg-blue-100  rounded-lg p-10">
      <h1 className="text-2xl font-bold mb-5 ">All referrals</h1>
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <label htmlFor="searchInput" className="font-bold">Search</label>
          <input
            type="text"
            placeholder="Name or Service"
            id="searchInput"
            value={searchInput}
            onChange={onChangeSearchInput}
            className="border bg-white border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="flex gap-4 items-center">
          <label htmlFor="dropDown" className="w-full font-bold">
            Sort by date
          </label>
          <select
            id="dropDown"
            value={activeOptionId}
            onChange={onChangeDropdown}
            className="border bg-white border-gray-300 rounded-md p-2 w-full"
          >
            {sortByOptions.map((each) => (
              <option key={each.optionId} value={each.optionId}>
                {each.displayText}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AllReferralsHeader;
