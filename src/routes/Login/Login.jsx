import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './Login.css'

const Login = () => {
  const { setCurrentUser } = useContext(UserContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  /* Local Storage */
  const onSubmit = (data) => {
    localStorage.setItem('currentUser', JSON.stringify(data))
    setCurrentUser(data)
    navigate('/')
  }

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <div className='sign-in-container'>
      <span><strong>Ingresa con tu usuario y contraseña</strong></span>
      <form className='sign-in-form' onSubmit={handleSubmit(onSubmit)}>
        <input
          className='input-form'
          type="text"
          placeholder='Nombre de usuario'
          {...register('username', {
              required : 'Debe ingresar su nombre de usuario'
            }
          )
        } />
        <p className="errors__show">{errors.username?.message}</p>
        <input
          className='input-form'
          type='password'
          placeholder='Contraseña'
          {...register(
              'password',
              {
                required : 'Debe ingresar su contraseña'
              }
            )
          }
        />
        <p className="errors__show">{errors.password?.message}</p>
        <div className="buttons">
          <span className="nav-link-cancel" onClick={handleSignOut}>
            Cancelar
          </span>
          <button className='btn-form' type='submit'>
            Iniciar Sesión
          </button>
        </div>      
      </form>
    </div>
  )
}

export default Login; 