import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Livestock from "./pages/Livestock";
import CCTV from "./pages/CCTV";
import Weather from "./pages/Weather";
import Actuators from "./pages/Actuators";
import AGV from "./pages/AGV";
import UAV from "./pages/UAV";
import Profile from "./pages/Profile";
import Farmers from "./pages/Farmers";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/livestock" element={<Livestock />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/cctv" element={<CCTV />} />
      <Route path="/actuators" element={<Actuators />} />
      <Route path="/agv" element={<AGV />} />
      <Route path="/uav" element={<UAV />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/farmers" element={<Farmers />} />
    </Routes>
  );
}
export default App;
