import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
interface progress {
  setProgress: Dispatch<SetStateAction<number>>;
}
function NotFound({ setProgress }: progress) {
  setProgress(10);
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  useEffect(() => {
    setProgress(100);
  });
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
