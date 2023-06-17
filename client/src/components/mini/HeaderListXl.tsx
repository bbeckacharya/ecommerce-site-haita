import { Link } from "react-router-dom";

function HeaderListXl() {
  return (
    <div className="hidden xl:flex gap-3 items-center text-md list-none w-[40vw]">
      <li>
        <Link className="hover:text-rose-500" to={"/category/women"}>
          Women's fashion
        </Link>
      </li>
      <li>
        <Link className="hover:text-rose-500" to={"category/men"}>
          Man's fashion
        </Link>
      </li>
      <li>
        <Link className="hover:text-rose-500" to={"category/helth-and-beauty"}>
          Health & Beauty
        </Link>
      </li>
      <li>
        <Link className="hover:text-rose-500" to={"category/helth-and-beauty"}>
          Find More
        </Link>
      </li>
    </div>
  );
}

export default HeaderListXl;
