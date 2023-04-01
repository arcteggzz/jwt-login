import React from "react";
import Layout from "../utils/Layout";

function RandomPublicPage() {
  return (
    <>
      <main className="main_container">
        <Layout
          children={
            <>
              <div>RandomPublicPage</div>
            </>
          }
        />
      </main>
    </>
  );
}

export default RandomPublicPage;
