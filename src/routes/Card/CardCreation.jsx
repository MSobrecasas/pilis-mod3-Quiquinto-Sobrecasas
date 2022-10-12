import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../../contexts/LocationContext";
import { getClima } from "../../service";
import "./CardCreation.css";

const CardCreation = () => {
  const { locations, setTarjeta } = useContext(LocationContext); //context
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    getAux(data);
    navigate("/");
  };

  let getAux = (formData) => {
    getClima(formData.locationlatitude, formData.locationlongitude)
      .then((data) => {
        const locationNew = {
          id: 1,
          name: formData.locationName,
          latitude: data.latitude,
          longitude: data.longitude,
          current_weather: data.current_weather,
          daily: data.daily,
          imagen: formData.imagen,
          deleted: false,
        };
        if (locations.length !== 0) {
         locationNew.id = locations[locations.length -1 ].id + 1;
        }
        setTarjeta([...locations, locationNew]);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="location-new-container">
      <span>Crea una nueva ubicación</span>
      <form className="location-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-location-name-form"
          type="text"
          placeholder="Nombre de la ubicacion"
          {...register("locationName", {
            required: "Debe ingresar un nombre",
          })}
        />
        <p>{errors.locationName?.message}</p>
        <input
          type="text"
          placeholder="Latitude"
          {...register("locationlatitude", {
            required: "Debe ingresar una lalitud",
          })}
        />
        <p>{errors.locationlatitude?.message}</p>
        <input
          type="text"
          placeholder="Longitude"
          {...register("locationlongitude", {
            required: "Debe ingresar una longitud",
          })}
        />
        <p>{errors.locationlongitude?.message}</p>
        <input
          type="text"
          placeholder="Ingresar URL de imagen"
          {...register("imagen", {
            required: "Ingresar URL de imagen",
          })}
        />
        <p>{errors.imagen?.message}</p>
        <button className="btn-form" type="submit">
          Crear Ubicación
        </button>
      </form>
    </div>
  );
};

export default CardCreation;
