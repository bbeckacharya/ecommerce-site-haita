import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="absolute w-screen bottom-0">
        <div className="dark:bg-slate-950 bg-slate-200 dark:text-slate-500 pl-10 flex items-start py-3">
          <div>
            <Link to={"/"}>
              <h1 className="font-bold text-4xl text-rose-500">MyShop</h1>
            </Link>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
          <div className="flex justify-between w-[70vw] ml-20">
            <div>
              <h1 className="font-bold text-xl">Explore MyShop</h1>
              <div className="text-sm mt-1">
                <li className="list-none">
                  <a href="https://www.asdf/asdf">View on GitHub</a>
                </li>
                <li className="list-none">
                  <a href="https://www.asdf/asdf">View on GitHub</a>
                </li>{" "}
                <li className="list-none">
                  <a href="https://www.asdf/asdf">View on GitHub</a>
                </li>{" "}
                <li className="list-none">
                  <a href="https://www.asdf/asdf">View on GitHub</a>
                </li>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl">Useful Links</h1>
              <div className="text-sm mt-1">
                <li className="list-none">
                  <a href="https://www.asdf/asdf">View on GitHub</a>
                </li>{" "}
                <li className="list-none">
                  <a href="https://www.asdf/asdf">View on GitHub</a>
                </li>{" "}
                <li className="list-none">
                  <a href="https://www.asdf/asdf">View on GitHub</a>
                </li>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl">About Company</h1>
              <div className="text-sm mt-1">
                <li className="list-none">
                  <a href="https://www.asdf/asdf">View on GitHub</a>
                </li>{" "}
                <li className="list-none">
                  <a href="https://www.asdf/asdf">View on GitHub</a>
                </li>{" "}
                <li className="list-none">
                  <a href="https://www.asdf/asdf">View on GitHub</a>
                </li>
                <li className="list-none">
                  <a href="https://www.asdf/asdf">View on GitHub</a>
                </li>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="/images/payments.png"
                className="w-[16vw] mt-2  dark:bg-slate-700 rounded-xl"
              />
              <div className="text-center mt-[2px] mb-1 dark:text-slate-500 text-slate-800">
                Crafted with &hearts; by
                <a href="https://www.github.com/HariAcharya80"> Hari Acharya</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
