import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import Cookies from "js-cookie";

const ReferralDetailsPage = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        setErrorMsg("");

        const jwtToken = Cookies.get("jwt_token");
        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        };
        const response = await fetch(`/api/referral/${id}`, options);

        if (!response.ok) {
          throw new Error("Unable to load referral details.");
        }

        const data = await response.json();
        setUserData(data.data || data.referral || data);
      } catch (error) {
        setErrorMsg(error.message || "Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserData();
  }, [id]);

  return (
    <div className="min-h-screen bg-blue-100 px-4 py-8">
      <div className="mx-auto w-full max-w-3xl rounded-lg bg-white p-6 shadow-md">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-slate-900">Referral details</h1>
          <Link
            to="/"
            className="rounded-md border border-blue-300 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm hover:bg-blue-600 hover:text-white"
          >
            Back
          </Link>
        </div>

        {isLoading ? (
          <p className="text-gray-600">Loading...</p>
        ) : errorMsg ? (
          <p className="text-red-600">{errorMsg}</p>
        ) : (
          <div className="space-y-3 text-sm text-slate-700">
            <p><span className="font-semibold">ID:</span> {userData?.id || id}</p>
            <p><span className="font-semibold">Name:</span> {userData?.name || "-"}</p>
            <p><span className="font-semibold">Service:</span> {userData?.serviceName || "-"}</p>
            <p><span className="font-semibold">Date:</span> {userData?.date || "-"}</p>
            <p><span className="font-semibold">Profit:</span> {userData?.profit || "-"}</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default ReferralDetailsPage;
