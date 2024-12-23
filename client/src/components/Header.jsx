import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import "boxicons";
import { logo } from "../assets";
import { preview } from "../assets";
import Button from "./Button";
import ThemeChangeButton from "./ThemeChangeButton";

import { useAuth } from "../contexts/AuthContext";
import { doSignOut } from "../firebase/auth";

const Header = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { currentUser, userLoggedIn } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    img: preview,
    name: "",
    email: "",
  });

  useEffect(() => {
    if (currentUser) {
      setUser((prevUser) => ({
        ...prevUser,
        name: currentUser.displayName || currentUser.email || "Please Login",
        img: currentUser.photoURL || preview,
        email: currentUser.email || "to view details",
      }));
    } else {
      setUser({
        name: "Please Login",
        img: preview,
        email: "to view details",
      });
    }
  }, [currentUser]);
  

  const handleDropDown = () => {
    setIsOpen((perv) => !perv);
  };
  const gotoLogin = () => {
    navigate("/login");
    setIsOpen((perv) => !perv);
  };
  return (
    <header className="w-full flex justify-between items-center bg-[#fff] dark:bg-primary-dark border-b border-b-light-border dark:border-b-dark-border sm:px-8 px-4 py-4 fixed top-0 right-0 left-0 z-10">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain dark:invert" />
      </Link>
      <div className="inline-flex gap-2 items-center">
        <Link
          to="/create-post"
          className="btn-primary ">
          Create
        </Link>

        <div className="relative">
          <box-icon
            name={isOpen ? "x" : "dots-vertical-rounded"}
            flip="vertical"
            onClick={handleDropDown} color={theme == 'dark' ? 'white' : 'black'} className='dark:white'></box-icon>
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } absolute top-10 right-0 border-primary-border bg-card-bg text-blue-950 border p-4 rounded-lg flex-col min-w-[250px] divide-y divide-primary-border`}>
            <div className="flex items-center gap-2 mb-3">
              <img
                src={currentUser?.photoURL || preview}
                alt="userImg"
                className="w-10 rounded-full object-cover"
              />
              <div>
                <h1>{user.name}</h1>
                <p className="text-xs text-slate-700">{user.email}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-start">
            <ThemeChangeButton />
            </div>

            {userLoggedIn ? (
                <Button name="Logout" icon="log-out" handleClick={doSignOut}/>
            ) : (
                <Button name="Login" icon="log-in" handleClick={gotoLogin}/>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
