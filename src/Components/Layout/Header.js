import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header flex flex-rows items-center gap-10">
      <h1 className="title text-black text-4xl">Header</h1>
      <div className="">
        <Link className="text-xl" to="/">
          Click to Home page
        </Link>
      </div>
      <div className="">
        <Link className="text-xl" to="/programs">
          Click to Programs page
        </Link>
      </div>
    </div>
  );
};

export default Header;
