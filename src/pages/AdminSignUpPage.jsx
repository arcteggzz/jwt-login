import React, { useState } from "react";
import Layout from "../utils/Layout";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const REGISTER_URL = "/admins";

function AdminSignUpPage() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [personalCode, setPersonalCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const resetFields = () => {
    setUserName("");
    setEmail("");
    setPassword("");
    setPersonalCode("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ username, email, password, personalCode }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      setErrorMessage(response.data.message);
      setSuccess(true);
      resetFields();
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
      setSuccess(false);
    }
  };

  return (
    <>
      <main className="main_container">
        <Layout
          children={
            <form className="" onSubmit={handleSubmit}>
              <h1 className="">Create Account</h1>

              <label htmlFor="userName" className="">
                Username
              </label>
              <input
                name="userName"
                id="userName"
                type="text"
                placeholder="Enter your userName"
                onChange={(e) => setUserName(e.target.value)}
                required
                value={username}
              />

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
                value={email}
              />

              <label htmlFor="password" className="">
                Password
              </label>
              <input
                name="password"
                id="password"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
                value={password}
              />

              <label htmlFor="secretCode" className="">
                Secret Code
              </label>
              <input
                name="secretCode"
                id="secretCode"
                type="text"
                placeholder="Enter your Secret Code"
                onChange={(e) => setPersonalCode(e.target.value)}
                required
                value={personalCode}
              />

              <button className="" type="submit">
                Register
              </button>

              {errorMessage ? (
                <>
                  <h6>{errorMessage}</h6>
                </>
              ) : (
                <></>
              )}

              {success ? (
                <>
                  <Link to={"/login"}>Go to Login Page</Link>
                </>
              ) : (
                <></>
              )}
            </form>
          }
        />
      </main>
    </>
  );
}

export default AdminSignUpPage;
