import { Link } from "react-router";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-4xl">404</h1>
      <p className="text-gray-500">Page not found</p>
     <Link to="/"> <p className="text-blue-500 hover:underline">
        Back to dashboard
      </p>
      </Link>
    </div>
  );
};
export default NotFound;
