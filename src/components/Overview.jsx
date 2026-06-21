import {
  FaBriefcase,
  FaUserGroup,
  FaCircleCheck,
  FaSackDollar,
  FaChartLine,
  FaCalendarDays,
  FaHandshake,
  FaShieldHalved,
} from "react-icons/fa6";

const Overview = ({ metrics = [], isLoading }) => {
  const getIcon = (metric) => {
    const label = `${metric.label || ""} ${metric.id || ""}`.toLowerCase();

    if (label.includes("service")) return FaBriefcase;
    if (label.includes("your referrals")) return FaUserGroup;
    if (label.includes("active")) return FaCircleCheck;
    if (label.includes("earning")) return FaSackDollar;
    if (label.includes("date")) return FaCalendarDays;
    if (label.includes("partner")) return FaHandshake;
    if (label.includes("secure") || label.includes("safe"))
      return FaShieldHalved;
    return FaChartLine;
  };

  return (
    <div className="w-12/12 mx-auto mb-5 rounded-lg bg-blue-100 p-10 shadow-md">
      <h1 className="text-2xl font-bold">Overview</h1>
      <div className="mt-5 flex w-12/12 flex-wrap items-center justify-around gap-4">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          metrics.map((metric) => (
            <div
              key={metric.id}
              className="flex h-25 w-1/5 flex-col justify-center gap-2 rounded-lg bg-slate-100 p-4 shadow transition-all hover:shadow-lg"
            >
              {(() => {
                const Icon = getIcon(metric);
                return <Icon className="text-4xl text-blue-600" />;
              })()}
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                {metric.id}
              </p>
              <p className="text-2xl font-bold text-slate-500 leading-none">
                {metric.value}
              </p>
              <p className="text-sm text-slate-500">{metric.label}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Overview;
