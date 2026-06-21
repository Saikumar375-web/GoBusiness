const ServiceSummary = ({ serviceSummary, isLoading }) => {
  return (
    <div className=" w-12/12 mx-auto mb-5 p-10 bg-blue-100  shadow-md rounded-lg">
      <h1 className="text-2xl font-bold">Service Summary</h1>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className=" w-12/12 flex gap-4 justify-around items-center mt-5 flex-wrap">
          <div className="flex flex-col justify-center shadow gap-4 p-6 rounded-lg w-1/5 h-35 hover:shadow-lg bg-slate-100 transition-all">
            <p className="font-bold">SERVICE</p>
            <p className="text-slate-500 font-bold">{serviceSummary.service}</p>
          </div>
          <div className="flex flex-col justify-center shadow gap-4 p-6 rounded-lg w-1/5 h-35 hover:shadow-lg bg-slate-100 transition-all">
            <p className="font-bold">YOUR REFERRALS</p>
            <p className="text-slate-500 font-bold">{serviceSummary.yourReferrals}</p>
          </div>
          <div className="flex flex-col justify-center shadow gap-4 p-6 rounded-lg w-1/5 h-35 hover:shadow-lg bg-slate-100 transition-all">
            <p className="font-bold">ACTIVE REFERRALS</p>
            <p className="text-slate-500 font-bold">{serviceSummary.activeReferrals}</p>
          </div>
          <div className="flex flex-col justify-center shadow gap-4 p-6 rounded-lg w-1/5 h-35 hover:shadow-lg bg-slate-100 transition-all">
            <p className="font-bold">TOTAL REF. EARNINGS</p>
            <p className="text-slate-500 font-bold">{serviceSummary.totalRefEarnings}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceSummary;
