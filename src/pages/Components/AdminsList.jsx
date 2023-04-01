import { useState, useEffect } from "react";
import axios from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

function AdminsList() {
  const [admins, setAdmins] = useState();
  const axiosPrivate = useAxiosPrivate();

  //use axios to fetch all admins
  //note you can use axios here because it's not a protected route
  useEffect(() => {
    let isMounted = true;
    // const controller = new AbortController();

    const getAdmins = async () => {
      try {
        const response = await axios.get("/admins");
        console.log(response.data);
        isMounted && setAdmins(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    getAdmins();

    return () => {
      isMounted = false;
      // controller.abort();
    };
  }, []);

  //use axios Private for routes that are protected
  // useEffect(() => {
  //   let isMounted = true;
  //   // const controller = new AbortController();

  //   const getAdmins = async () => {
  //     try {
  //       const response = await axiosPrivate.get("/admins");
  //       console.log(response.data);
  //       isMounted && setAdmins(response.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   getAdmins();

  //   return () => {
  //     isMounted = false;
  //     // controller.abort();
  //   };
  // }, []);

  return (
    <>
      <main className="">
        {admins?.length ? (
          <>
            <p>{admins[0]?.username}</p>
            <p>{admins[0]?.email}</p>
            <p>{admins[0]?.personalCode}</p>
          </>
        ) : (
          <>
            <div>No admins found</div>
          </>
        )}
      </main>
    </>
  );
}

export default AdminsList;
