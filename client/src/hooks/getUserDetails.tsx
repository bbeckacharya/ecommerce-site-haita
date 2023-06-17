import { useRef } from "react";

interface userDataInterface {
  data: object;
}

const useGetUserDetails = ({ data }: userDataInterface) => {
  const dataRef = useRef(data);
  const getUserDetails = () => {
    const userDetailsString = localStorage.getItem("userDetails");
    if (userDetailsString) {
      dataRef.current = JSON.parse(userDetailsString);
    }
    return dataRef.current;
  };
  return getUserDetails;
};

export default useGetUserDetails;
