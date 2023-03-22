import { createContext, useState } from "react";

const AppContext = createContext();

const Provider = ({ children }) => {
  const [accessToken, setAccessToken] = useState("");

  const intialState = {
    accessToken,
    setAccessToken,
  };

  return (
    <AppContext.Provider value={intialState}>{children}</AppContext.Provider>
  );
};

export { Provider };
export default AppContext;
