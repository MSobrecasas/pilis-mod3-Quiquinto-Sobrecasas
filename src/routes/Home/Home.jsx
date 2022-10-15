import "./Home.css";
import Locations from "../../components/location/locations";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="home__container">
      <motion.h1
        className="grid-tarjetas"
        animate={{ x: [0, 150, 0], opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        Registro de Clima - Jujuy
      </motion.h1>
      <div className="main-container">
        <Locations />
      </div>
    </section>
  );
};

export default Home;
