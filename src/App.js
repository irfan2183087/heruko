import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./app.scss";
import AppRoutes from "./AppRoutes";
import MainAlert from "./components/MainAlert";
import { Helmet } from "react-helmet";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { AuthProvider } from "./firebase/AuthProvider";

function App() {
  const [value, setValue] = useState(true);
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <BrowserRouter>
      <Helmet>
        <title>Asset Management</title>
      </Helmet>

      <AuthProvider>
        <MainAlert newalert={alert} />
        <div className="home">
          {value && <Sidebar showAlert={showAlert} />}
          <div className="homeContainer">
            {value && <Navbar />}
            <AppRoutes setValue={setValue} showAlert={showAlert} />
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
