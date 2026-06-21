import Header from "./Header";
import Overview from "./Overview";
import ServiceSummary from "./ServiceSummary";
import AllReferralsPage from "./AllReferralsPage";
import Footer from "./Footer";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import ReferFriends from "./ReferFriends";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState({});
  const jwtToken = Cookies.get("jwt_token");
  useEffect(() => {
    const fetchMetrics = async () => {
      const jwtToken = Cookies.get("jwt_token");
      const url = "/api/referrals";
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);

      setData(data.data);
      setIsLoading(false);
    };
    fetchMetrics();
  }, []);
  console.log(data);

  return (
    <div className="w-5/6 mx-auto p-8 flex flex-col gap-5 justify-center">
      <Header />
      <div>
        <h1 className="text-3xl font-bold text-black-500 mb-3 text-left">
          Referral Dashboard
        </h1>
        <p className="text-gray-600 text-left">
          Track your referrals earnings, and partner activity in one place.
        </p>
      </div>
      <Overview metrics={data.metrics} isLoading={isLoading} />
      <ServiceSummary
        serviceSummary={data.serviceSummary}
        isLoading={isLoading}
      />
      <ReferFriends referral={data.referral} isLoading={isLoading} />
      <AllReferralsPage referrals={data.referrals} isLoading={isLoading} />
      <Footer />
    </div>
  );
};
export default Home;
