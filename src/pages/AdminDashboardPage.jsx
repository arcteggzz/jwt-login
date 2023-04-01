import React from "react";
import Layout from "../utils/Layout";
import AdminsList from "./Components/AdminsList";

function AdminDashboardPage() {
  return (
    <>
      <main className="main_container">
        <Layout
          children={
            <>
              <AdminsList />
            </>
          }
        />
      </main>
    </>
  );
}

export default AdminDashboardPage;
