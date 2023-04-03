import React, { useEffect, useState } from "react";
import Layout from "../utils/Layout";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

const LOGIN_URL = "/auth";

function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const { setAuth, persist, setPersist } = useAuth();

  //these are needed to control the forward navigation
  //basically take the user to where he is comming from when before he got redirected to the login page because he was not logged in
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      //save the user login into the auth state
      setAuth(response.data);
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const togglePersist = () => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);

  return (
    <>
      <main className="main_container">
        <Layout
          children={
            <form className="" onSubmit={handleSubmit}>
              <h1 className="">Welcome Back</h1>

              <label htmlFor="email" className="">
                Email
              </label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="password" className="">
                Password
              </label>
              <input
                name="password"
                id="password"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPasword(e.target.value)}
                required
              />

              <button className="" type="submit">
                Sign in
              </button>

              <div>
                <input
                  type="checkbox"
                  id="persist"
                  onChange={togglePersist}
                  checked={persist}
                />
                <label htmlFor="persist">Trust this device?</label>
              </div>
            </form>
          }
        />
      </main>
    </>
  );
}

export default AdminLoginPage;
