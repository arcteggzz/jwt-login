import React from "react";
import "./LandingPage.css";
import Layout from "../utils/Layout";

function LandingPage() {
  return (
    <>
      <main className="main_container">
        <Layout
          children={
            <>
              <div>Landing Page Boss</div>
            </>
          }
        />
      </main>
    </>
  );
}

export default LandingPage;
