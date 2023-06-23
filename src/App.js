import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import { UserContext } from "./contexts/userContext";
import Footer from "./components/footers/footer";
import NavBar from "./components/navigations/navBar";
import CrewInfo from "./pages/crewInfo";
import LoginPage from "./pages/login";
import NotFoundPage from "./pages/notFound";

function App() {
  return (
    <UserContext.Provider
      value={{ id: null, nickname: "guest", picture: null }}
    >
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<LayoutWithTopBarAndFooter />}>
              <Route path="/" element={<MainPage />} />
              <Route path="/crews/:crewId/info" element={<CrewInfo />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

const LayoutWithTopBarAndFooter = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
