import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[25vh]">
        <h1 className="font-bold text-5xl">404 Not Found</h1>
        <p className="text-gray-500">
          Ahh! I'm sorry but that page was not found.
        </p>
        <button
          onClick={goHome}
          className="bg-rose-500 text-white px-5 mt-2 py-1 rounded-xl"
        >
          Go to home page
        </button>
      </div>
    </>
  );
}

export default NotFound;
