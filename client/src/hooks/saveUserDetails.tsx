import { useRef } from "react";

interface userDataInterface {
  data: object;
}

const useSaveUserDetails = ({ data }: userDataInterface) => {
  const dataRef = useRef(data);
  dataRef.current = data;
  const saveUserDetails = () => {
    let DataToSave = JSON.stringify(data);
    localStorage.setItem("userDetails", DataToSave);
  };
  return saveUserDetails;
};
export default useSaveUserDetails;
