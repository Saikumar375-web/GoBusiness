import Cookies from "js-cookie";
import { useNavigate } from "react-router";
const Header = () => {
    const navigate = useNavigate();
    const onClickLogout = () => {
        Cookies.remove("jwt_token");
        navigate("/login");
    }
    return (
        <div className="w-12/12 mx-auto mb-5 p-5 bg-white flex items-center justify-between shadow-md rounded-lg">
            <nav className="flex items-center justify-between w-full">
                <h1 className="text-2xl font-bold text-blue-400">Go Business</h1>
                <div className="flex gap-4">
                    <button className= "text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md hover:cursor-pointer">Try for free</button>
                    <button className="text-red-500 bg-transparent border border-red-500 hover:bg-red-500 hover:text-white py-2 px-4 rounded-md hover:cursor-pointer" onClick={onClickLogout}>Logout</button>
                </div>
            </nav>
        </div>
    )
}
export default Header;