import React, { useState } from "react";
import Layout from "../utils/Layout";
import axios from "../api/axios";
import { axiosPrivate } from "../api/axios";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const REGISTER_URL = "/admins";

function AdminUpdatePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [newPersonalCode, setNewPersonalCode] = useState("");
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
  const [errorSecretCodeMessage, setErrorSecretCodeMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const resetFields = () => {
    setNewPassword("");
    setNewPersonalCode("");
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    const id = auth._id;
    const username = auth._username;
    const personalCode = auth._personalCode;
    try {
      const response = await axiosPrivate.patch(
        REGISTER_URL,
        JSON.stringify({ id, username, password: newPassword, personalCode }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      setErrorPasswordMessage(response.data.message);
      setSuccess(true);
      resetFields();
      //logout the user here and send him back to the login page
      //do this bevause he has changed password and should hence be required to reauthenticate
    } catch (error) {
      console.log(error);
      setErrorPasswordMessage(error.message);
      setSuccess(false);
    }
  };

  const updateSecretCode = async (e) => {
    e.preventDefault();
    const id = auth._id;
    const username = auth._username;
    try {
      const response = await axiosPrivate.patch(
        REGISTER_URL,
        JSON.stringify({ id, username, personalCode: newPersonalCode }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      setErrorSecretCodeMessage(response.data.message);
      setSuccess(true);
      resetFields();
      //logout the user here and send him back to the login page
      //do this bevause he has changed password and should hence be required to reauthenticate
    } catch (error) {
      console.log(error);
      setErrorSecretCodeMessage(error.message);
      setSuccess(false);
    }
  };

  return (
    <>
      <main className="main_container">
        <Layout
          children={
            <>
              <form className="" onSubmit={updatePassword}>
                <h1 className="">Update Password</h1>

                <label htmlFor="password" className="">
                  Password
                </label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  value={newPassword}
                />

                <button className="" type="submit">
                  Update Password
                </button>

                {errorPasswordMessage ? (
                  <>
                    <h6>{errorPasswordMessage}</h6>
                  </>
                ) : (
                  <></>
                )}
              </form>
              <form className="" onSubmit={updateSecretCode}>
                <h1 className="">Update Secret Code</h1>

                <label htmlFor="secretCode" className="">
                  Secret Code
                </label>
                <input
                  name="secretCode"
                  id="secretCode"
                  type="text"
                  placeholder="Enter your Secret Code"
                  onChange={(e) => setNewPersonalCode(e.target.value)}
                  required
                  value={newPersonalCode}
                />

                <button className="" type="submit">
                  Update Secret Code
                </button>

                {errorSecretCodeMessage ? (
                  <>
                    <h6>{errorSecretCodeMessage}</h6>
                  </>
                ) : (
                  <></>
                )}
              </form>
            </>
          }
        />
      </main>
    </>
  );
}

export default AdminUpdatePassword;
