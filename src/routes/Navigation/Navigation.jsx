import { useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import palettoLogo from '../../assets/logo.png';
import './Navigation.css';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate()

  /* Local Storage */
  useEffect(() => {
    const userStored = localStorage.getItem('currentUser')
    console.log({userStored})
    if (userStored) {
      setCurrentUser(JSON.parse(userStored))
    }
  }, [])

  const handleSignOut = () => {
    setCurrentUser(null);
    localStorage.clear();
    navigate('/')
  };

  return (
    <>
    <div className='navigation'>
      <Link className='logo-container' to='/'>
        <img src={palettoLogo} alt='Logo' className='logo' />
      </Link>
      <div className='nav-links-container'> 
        {currentUser ? (
          <Link className='nav-link-habilitado' to='/location/create'>
          Nueva Ubiación
          </Link>
        ) : ( 
          <span className='nav-link-deshabilitado'>Nueva Ubicación</span>
        )}
        
        {currentUser ? (
          <span className='nav-link-cerar' onClick={handleSignOut}>
            Cerrar Sesión
          </span> 
        ) : (
          <Link className='nav-link sign-in' to='/login'>
            Iniciar Sesión
          </Link>  
        )}
      </div>
    </div>
    <Outlet/>
  </>
  );
};
  
export default Navigation;