import { Dispatch, SetStateAction, useEffect } from "react";

interface progress {
  setProgress?: Dispatch<SetStateAction<number>>;
}
function Home({ setProgress }: progress) {
  // setProgress(10);
  // useEffect(() => {
  //   setProgress(100);
  // });
  return (
    <>
      <div className="dark:text-white">Home</div>
    </>
  );
}

export default Home;
