import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
  const { auth, setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    try {
      const response = await axios.post("/auth/logout", {
        //setting with Credentials to true is how we send back the jwt cookie to the backend
        withCredentials: true,
      });
      console.log(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};

export default useLogout;
