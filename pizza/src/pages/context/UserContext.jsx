import { useEffect, useState } from "react";
import { MyContext } from "./MyContext";
import axios from "axios";

const token = localStorage.getItem("token");

export default function UserContext({ children }) {
  const [user, setUser] = useState({
    message: "",
    id: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/checkauth", {
          headers: {
            Authorization: token,
          },
        });
        setUser({ message: response.data.message, id: response.data.id });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
}
