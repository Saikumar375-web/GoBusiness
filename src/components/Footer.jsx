const Footer = () => {
  return (
    <div>
      <div className="w-12/12 mx-auto mb-5 p-5 bg-white flex items-center justify-between shadow-md rounded-lg">
        <nav className="flex items-center justify-between w-full">
          <h1 className="text-2xl font-bold text-blue-400">Go Business</h1>
          <div className="flex gap-4">
            <p>About </p>
            <p>Contact</p>
            <p>Privacy</p>
            <p>Terms</p>
          </div>
          <div className="flex gap-4">
            <p className="text-gray-500">© 2024 Go Business,Inc</p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
