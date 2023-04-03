import React from "react";
import { useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import Layout from "../utils/Layout";
import AdminsList from "./Components/AdminsList";
import useAuth from "../hooks/useAuth";
// import axios from "axios";
import axios from "../api/axios";

const LOGOUT_URL = "/auth/logout";

function AdminDashboardPage() {
  const logout = useLogout();
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   withCredentials: true,
  // };

  // const signOut = async () => {
  //   function logout() {
  //     axios
  //       .post("/api/my-endpoint", { data: "my-data" }, config)
  //       .then((response) => {
  //         // handle success
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         // handle error
  //         console.log(error);
  //       });
  //   }
  // };

  const handleLogout = async () => {
    try {
      const response = await axios.post(LOGOUT_URL, JSON.stringify({}), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(response.data);
      setAuth({});
    } catch (err) {
      console.log(err);
    }
  };

  // const handleLogout = async () => {
  //   await logout();
  //   console.log(auth);
  //   navigate("/login");
  // };

  return (
    <>
      <main className="main_container">
        <Layout
          children={
            <>
              <AdminsList />
              <button onClick={handleLogout}>Logout</button>
            </>
          }
        />
      </main>
    </>
  );
}

export default AdminDashboardPage;
