import { Dispatch, SetStateAction, useEffect } from "react";

interface ProgressProps {
  setProgress: Dispatch<SetStateAction<number>>;
  child: React.ReactNode;
}
function HandleChange({ setProgress, child }: ProgressProps) {
  useEffect(() => {
    setProgress(10);
  });

  return child;
}

export default HandleChange;
