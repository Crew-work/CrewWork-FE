import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import userImg from "../../assets/images/user.png";
import ButtonOutline from "../buttons/buttonOutline";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";

function NavBar() {
  const userContext = useContext(UserContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-light sticky top-0 z-50">
      <div className="container mx-auto flex items-center h-14 py-3">
        <Link to={"/"} className="h-full">
          <img src={logo} className="h-full" alt="logo" />
        </Link>
        <Link to={"/join-board"} className="ml-5 text-sm">
          크루원 모집
        </Link>

        <div className="ml-auto h-full">
          {userContext.id === null ? (
            <Link to={"/login"}>
              <ButtonOutline
                text={"로그인"}
                borderColor={"border-gray-light"}
                textColor={"text-black"}
              />
            </Link>
          ) : (
            <div className="h-full relative">
              <img
                src={userContext.picture || userImg}
                className="h-full rounded-full bg-gray-light p-1 cursor-pointer"
                alt="profile"
                onClick={handleToggleMenu}
              />

              {isMenuOpen && (
                <div className="absolute w-60 mt-2 right-0 bg-white border border-gray rounded-md">
                  <ul>
                    <li className="py-2 px-3 border-b border-gray">Menu 1</li>
                    <li className="py-2 px-3 border-b border-gray">Menu 2</li>
                    <li className="py-2 px-3">Menu 3</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
