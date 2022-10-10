import Location from "./location";
import "./locations.css";
import { LocationContext } from "../../contexts/LocationContext";
import { useContext } from "react";

const Locations = ({}) => {
  const locations = useContext(LocationContext);  
  console.log("dashboiard Vale" + JSON.stringify(locations));
  console.log("dashboiard le Vale: " + locations.tarjeta.length);
  
  
  const locationsCopy = locations;
  console.log("copy "+ JSON.stringify( locationsCopy))
  //const { tarjeta, setTarjeta } = useContext(LocationContext)
  let handleChange = (e) => {
     const search = e.target.value;
    console.log(e.target.value)
   /*  setTarjeta(locationsCopy.tarjeta.filter((location) => {
     location.name.toLowerCase().includes(search.toLowerCase());
    }) ) */
  };

  return (
    <section>
      <div className="input__busqueda">
        <input
          type="text"
          placeholder="Ingresar ciudad"
          onChange={e =>handleChange(e)}
        />
      </div>
      <div className="grid">
        {locations.tarjeta.length > 0 ? (
          locations.tarjeta.map((location) => (
            <Location key={location.id} location={location} />
          ))
        ) : (
          <div>
            <h1 className="mensaje-agregar-tarjeta">
              agregar tarjeta de ubicación...
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Locations;
