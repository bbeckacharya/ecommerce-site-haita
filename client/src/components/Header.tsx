import { FaSearch } from "react-icons/fa";
import HeaderListMl from "./mini/HeaderListXl";
import HeaderListMb from "./mini/HeaderListMb";
import MiniControls from "./mini/MiniControls";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-slate-100 flex justify-evenly dark:bg-slate-950 items-center border-b-2 dark:border-b-slate-700 ">
      <Link to={"/"}>
        <h1 className="font-bold text-4xl pb-2 text-rose-500">MyShop</h1>
      </Link>

      <div className="flex text-black dark:text-white items-center">
        <HeaderListMl />
        <HeaderListMb />
      </div>
      <div className="flex border-2  border-rose-500 rounded-md items-center">
        <input
          type="text"
          className=" outline-none text-md px-2 py-[3px] rounded-xl bg-transparent text-black dark:text-white w-[20vw]"
          placeholder="Find the product that.."
        />
        <button className="flex items-center  p-2  bg-rose-500 dark:border-rose-500 text-white">
          <FaSearch />
        </button>
      </div>
      <MiniControls />
    </div>
  );
}

export default Header;
