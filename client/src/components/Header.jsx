import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "boxicons";
import { logo } from "../assets";
import { preview } from "../assets";
import Button from "./Button";

import { useAuth } from "../contexts/AuthContext";
import { doSignOut } from "../firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const { currentUser, userLoggedIn } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    img: "",
    name: "",
    email: "",
  });

  useEffect(() => {
      setUser((pervUser) => ({
        ...pervUser,
        name: currentUser ? currentUser.displayName || currentUser.email : "unknown",
        img: currentUser ? currentUser.photoURL : preview,
        email: currentUser ? currentUser.email : "unknown@gmail.com"
      }));
      console.log(user.img);
      
    
  }, [currentUser]);

  const handleDropDown = () => {
    setIsOpen((perv) => !perv);
  };
  const gotoLogin = () => {
    navigate("/login");
    setIsOpen((perv) => !perv);
  };
  return (
    <header className="w-full flex justify-between items-center bg-white border-b border-b-[#e6ebf4] sm:px-8 px-4 py-4">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      <div className="inline-flex gap-2 items-center">
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white rounded-md px-4 py-2">
          Create
        </Link>

        <div className="relative">
          <box-icon
            name="dots-vertical-rounded"
            flip="vertical"
            onClick={handleDropDown}></box-icon>
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } absolute top-10 right-0 border-slate-200 bg-slate-100 border-2 p-4 rounded-lg flex-col min-w-[250px] divide-y-2`}>
            <div className="flex items-center gap-2 mb-3">
              <img
                src={user.img || preview}
                alt="userImg"
                className="w-10 rounded-full object-cover"
              />
              <div>
                <h1>{user.name}</h1>
                <p className="text-xs">{user.email}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 py-2 items-start">
            <Button name="Light" icon="sun"/>
            <Button name="Dark" icon="moon"/>
            </div>

            {userLoggedIn ? (
                <Button customStyles="pt-2" name="Logout" icon="log-out" handleClick={doSignOut}/>
            ) : (
                <Button customStyles="pt-2" name="Login" icon="log-in" handleClick={gotoLogin}/>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
