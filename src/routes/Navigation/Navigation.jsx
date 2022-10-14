import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import palettoLogo from "../../assets/logo.png";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

  /* Local Storage */
  useEffect(() => {
    const userStored = localStorage.getItem("currentUser");
    console.log({ userStored });
    if (userStored) {
      setCurrentUser(JSON.parse(userStored));
    }
  }, []);

  const handleSignOut = () => {
    setCurrentUser(null);
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={palettoLogo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-links-container" state={isNavOpen ? 1 : 0}>
          <div className="toggle">
            {isNavOpen ? (
              <MdClose onClick={() => setIsNavOpen(false)} className="icon__close"/>
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setIsNavOpen(true);
                }}
                className="hamburger__icon"
              />
            )}
          </div>
          <div className="group-user">
            <div className={`links ${isNavOpen ? "show" : ""}`}>
              {
                isNavOpen ? (
                  <div className="menu__title"> Menu </div>
                ): (
                  console.log("cerradp")
                )
              } 
              {currentUser ? (
                <Link className="nav-link-habilitado" to="/location/create">
                  Nueva Ubicación
                </Link>
              ) : (
                <span className="nav-link-deshabilitado">Nueva Ubicación</span>
              )}

              {currentUser ? (
                <span className="nav-link-cerar" onClick={handleSignOut}>
                  Cerrar Sesión
                </span>
              ) : (
                <Link className="nav-link sign-in" to="/login">
                  Iniciar Sesión
                </Link>
              )}
            </div>

            <div className="text-user">
              {currentUser ? (
                <input className="input-user" type="text" value={currentUser.username} disabled/>
              ) : (
                <input type="text" value={""}/>
              )}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navigation;
