import { AiFillCloseCircle } from "react-icons/ai";
import { VscStarEmpty } from "react-icons/vsc";
import { useVisibilityContext } from "../hooks/VisibilityContext";
import { motion } from "framer-motion";

function Cart() {
  const { setVisibility } = useVisibilityContext();
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.1 }}
      className="w-2/6  z-20 flex flex-col h-[100vh] absolute top-0 right-0 bg-slate-300 dark:bg-slate-800 text-black dark:text-white px-5"
    >
      <div className="flex items-center mt-5 justify-between">
        <h1 className="font-bold  text-3xl">Cart</h1>
        <button
          onClick={() => {
            setVisibility(false);
          }}
          className="text-3xl"
        >
          <AiFillCloseCircle />
        </button>
      </div>
      <div className="h-screen">
        <div className="block w-fit p-2 m-auto mt-[30vh] ">
          <div className="flex flex-col items-center text-2xl">
            <VscStarEmpty className="" />
            <h1>No Items in Cart</h1>
            <button className="mt-5 p-2 rounded-full px-10 text-white bg-rose-500 text-sm">
              Explore products
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Cart;
