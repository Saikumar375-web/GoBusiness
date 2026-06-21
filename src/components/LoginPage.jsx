import { useState } from "react";
import { useNavigate, Navigate } from "react-router";
import Cookies from "js-cookie";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const onSubmitSuccess = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    navigate("/", { replace: true });
  };

  const onSubmitFailure = (message) => {
    setShowSubmitError(true);
    setErrorMsg(message);
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    const userDetails = { email, password };
    const url =
      "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) {
      onSubmitSuccess(data.data.token);
    } else {
      onSubmitFailure(data.message);
    }
  };

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken !== undefined) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-2/5 p-5 rounded-2xl shadow-lg">
        <form className="flex flex-col gap-5 p-2.5" onSubmit={onSubmitForm}>
          <h1 className="text-blue-400 font-bold text-4xl">Go Business</h1>
          <p className="text-gray-500">
            Sign in to open your referral dashboard
          </p>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="border border-gray-300 rounded-md p-2 w-full"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Sign In
          </button>
          {showSubmitError && <p className="text-red-500">{errorMsg}</p>}
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
