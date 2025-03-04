import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router";

// Pages
import Homepage from "./pages/homepage/Homepage";
import Shipments from "./pages/shipments/Shipments";
import { GlobalProvider } from "./contexts/GlobalContext";

function App() {
  return (
    <>
      <GlobalProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shipments" element={<Shipments />} />
        </Routes>
      </GlobalProvider>
    </>
  );
}

export default App;
