const ReferFriends = ({ referral, isLoading }) => {
  return (
    (<div className=" w-12/12 mx-auto mb-5 p-10 bg-blue-100 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold">Refer Friends and earn more</h1>
      <div className="flex items-center">
        <div className="flex flex-col gap-4 mt-5 w-[50%]">
          <label htmlFor="referralLink" className="font-bold">Your Referral Link</label>
          <div className="flex gap-2">
            <input
              className="w-full bg-white"
              type="text"
              value={isLoading ? "" :referral.link}
              id="referralLink"
              readOnly
              className="border bg-white border-gray-300 rounded-md p-2 w-full"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 ml-2 hover:cursor-pointer">
              Copy
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-5 w-[50%] ml-5">
          <label htmlFor="referralEarnings" className="font-bold">Your Referral Code</label>
          <div className="flex gap-2 ">
            <input
              type="text"
              id="referralEarnings"
              value={isLoading ? "" : referral.code}
              readOnly
              className="border bg-white border-gray-300 rounded-md p-2 w-full"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 ml-2 hover:cursor-pointer">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>)
  );
};

export default ReferFriends;
