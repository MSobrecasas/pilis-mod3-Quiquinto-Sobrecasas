import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import palettoLogo from "../../assets/logo.png";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { navAnimation } from "../../animation";
import { useScroll } from "../../components/controls/UseScroll";

const Navigation = () => {
  const [element, controls] = useScroll();
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

  /* Local Storage */
  useEffect(() => {
    const userStored = localStorage.getItem("currentUser");
    if (userStored) {
      setCurrentUser(JSON.parse(userStored));
    }
  }, []);

  const handleSignOut = () => {
    setCurrentUser(null);
    localStorage.clear();
    setIsNavOpen(false);
    navigate("/");
  };

  return (
    <motion.nav
    ref={element}
    variants={navAnimation}
    animate={controls}
    transition={{
      delay: 0.03,
      type: "tween",
      duration: 0.8,
    }}>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <motion.img src={palettoLogo} alt="Logo" className="logo" 
           animate={{ rotate: 360 }}
           transition={{ duration: 2 }}/>
        </Link>
        <div className="nav-links-container" state={isNavOpen ? 1 : 0}>
          <div className="toggle">
            {isNavOpen ? (
              <MdClose
                onClick={() => setIsNavOpen(false)}
                className="icon__close"
              />
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
              {isNavOpen ? (
                <div className="menu__title"> Menu </div>
              ) : (
                <div></div>
              )}
              {currentUser ? (
                <Link className="nav-link-habilitado" to="/location/create" onClick={() => setIsNavOpen(false)}>
                  Nueva Ubicación
                </Link>
              ) : (
                <span className="nav-link-deshabilitado" onClick={() => setIsNavOpen(false)}>Nueva Ubicación</span>
              )}

              {currentUser ? (
                <span className="nav-link-cerar" onClick={handleSignOut}>
                  Cerrar Sesión
                </span>
              ) : (
                <Link className="nav-link sign-in" to="/login" onClick={() => setIsNavOpen(false)}>
                  Iniciar Sesión
                </Link>
              )}
              <div className="text-user">
                {currentUser ? (
                  <span className="input-user">
                    {"Bienvenido " + currentUser.username + " !"}
                  </span>
                ) : (
                  <span className="input-user">"Inicia sesion!"</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </motion.nav>
  );
};

export default Navigation;
