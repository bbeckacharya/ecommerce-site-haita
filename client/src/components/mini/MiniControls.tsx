import { FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";
import useThemeData from "../../hooks/useThemeData";
import { useVisibilityContext } from "../../hooks/VisibilityContext";

function MiniControls() {
  const { theme, saveThemeData } = useThemeData();
  const { setVisibility } = useVisibilityContext();

  return (
    <div className="flex items-center gap-4 text-xl p-2 text:black text-rose-500">
      <button
        onClick={() => {
          setVisibility(true);
        }}
      >
        <FaShoppingCart />
      </button>

      {theme === "light" ? (
        <button
          onClick={() => {
            saveThemeData("dark");
          }}
        >
          <FaMoon />
        </button>
      ) : (
        <button
          onClick={() => {
            saveThemeData("light");
          }}
        >
          <FaSun />
        </button>
      )}
      <button className="bg-rose-500 px-5 flex p-1 text-white rounded-full">
        Login
      </button>
    </div>
  );
}

export default MiniControls;
