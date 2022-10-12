import Location from "./location";
import "./locations.css";
import { LocationContext } from "../../contexts/LocationContext";
import { useContext } from "react";
import { FiltersContext } from "../../contexts/FiltersContext";
import { useEffect, useState } from "react";

const Locations = () => {
  const { locations } = useContext(LocationContext);
  const { filters, setFilters } = useContext(FiltersContext);

  //console.log("dashboiard Vale " + JSON.stringify(locations));
  //console.log("dashboiard le Vale : " + locations.length);

const filteredLocations = locations.filter((location) =>{
   if(filters.filter === ''){
    return true
   } 
    return location.name.toLowerCase().includes(filters.filter.toLowerCase())
})

  let handleChange = (e) => {
    const search = e.target.value;
    setFilters({...filters, filter : search})
  };

  return (
    <section>
      <div className="input__busqueda">
        <input
          type="text"
          placeholder="Ingresar ciudad"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="grid">
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location) => (
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
