import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getPositions } from "../actions/admin/PositionAction";

const HospitalContext = createContext();

const HospitalProvider = ({ children }) => {
  // Theme
  const [theme, setTheme] = useState("dark");
  const setMode = (mode) => {
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    savedTheme ? setTheme(savedTheme) : setMode("dark");
  }, [theme]);

  //=================================//

  // Preset

  const [colorPicker, setColorPicker] = useState();

  const setColorPreset = (color) => {
    localStorage.setItem("color", color);
    setColorPicker(color);
  };

  useEffect(() => {
    const savedColorPicker = localStorage.getItem("color");
    setColorPicker(savedColorPicker ? savedColorPicker : "secondary");
  }, [colorPicker]);

  // ===============================//

  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfos"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  }, [navigate]);


  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    getPositions(setSearchResult);
  }, [searchResult]);

  return (
    <HospitalContext.Provider
      value={{
        searchResult,
        setUser,
        user,
        setMode,
        theme,
        setTheme,
        setColorPreset,
        colorPicker,
        setColorPicker,
      }}>
      {children}
    </HospitalContext.Provider>
  );
};

export const HospitalState = () => {
  return useContext(HospitalContext);
};

export default HospitalProvider;
