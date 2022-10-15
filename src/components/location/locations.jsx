import Location from "./location";
import "./locations.css";
import { LocationContext } from "../../contexts/LocationContext";
import { useContext } from "react";
import { FiltersContext } from "../../contexts/FiltersContext";

const Locations = () => {
  const { locations } = useContext(LocationContext);
  const { filters, setFilters } = useContext(FiltersContext);

  const filteredLocations = locations.filter((location) => {
    if (filters.filter === "") {
      return true;
    }
    return location.name.toLowerCase().includes(filters.filter.toLowerCase());
  });

  let handleChange = (e) => {
    const search = e.target.value;
    setFilters({ ...filters, filter: search });
  };

  return (
    <section className="" >
      <div className="input__busqueda">
        <input
          className="search__input "
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
