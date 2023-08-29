import axios from "axios";

export const login = async (
  username,
  password,
  navigate,
  setErr,
  setSucceed,
  handleSnackbarOpenSuccess,
  handleSnackbarOpenError
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/user/login",
      { username, password },
      config
    );
    localStorage.setItem("userInfos", JSON.stringify(data));
    navigate("/home");
    setSucceed("WELCOME BACK!");
    handleSnackbarOpenSuccess();
  } catch (error) {
    setErr("Email and password are invalid");
    handleSnackbarOpenError();
    navigate("/");
  }
};
