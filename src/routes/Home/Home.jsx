import './Home.css';
import Locations from '../../components/location/locations';

const Home = () => {
  return (
    <>
      <h1 className='grid-tarjetas'>Tarjetas de Ubicación</h1>
      <div className='main-container'>
        <Locations/>
      </div>
    </>
  );
};

export default Home;