import { Fragment, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type ParamFn = {
  callback: Function;
};

const LacationForm = ({ callback }: ParamFn) => {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [errors, setErrors] = useState({
    lat: "",
    lng: "",
  });

  const isValidCoordinate = (coord: string) => {
    const pattern = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/;
    return pattern.test(coord);
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const validLat = !isValidCoordinate(lat);
    const validLng = !isValidCoordinate(lng);
    let currentErrors = {
      lat: "",
      lng: "",
    };

    if (validLat) {
      currentErrors = {
        ...currentErrors,
        lat: "Invalid Latitude",
      };
    }

    if (validLng) {
      currentErrors = {
        ...currentErrors,
        lng: "Invalid Longitude",
      };
    }
    setErrors(currentErrors);
    if (validLat || validLng) return;

    callback({ lat, lng });
  };

  const setCoordinate = (e: any, param: string) => {
    if (param === "lat") {
      setLat(e.target.value);
      setErrors({ ...errors, lat: "" });
    }
    if (param === "lng") {
      setLng(e.target.value);
      setErrors({ ...errors, lng: "" });
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleFormSubmit}>
        <div className="d-flex flex-direction-row">
          <TextField
            label="Latitude"
            value={lat}
            onChange={(e) => setCoordinate(e, "lat")}
            error={!!errors.lat}
            helperText={errors.lat}
            size="small"
            className="mr-1"
            fullWidth
          />
          <TextField
            label="Longitude"
            value={lng}
            onChange={(e) => setCoordinate(e, "lng")}
            error={!!errors.lng}
            helperText={errors.lng}
            size="small"
            fullWidth
          />
          <div className="d-flex align-items-start flex-direction-column pl-1">
            <Button
              type="submit"
              className="w-100"
              variant="contained"
              color="primary"
            >
              Search
            </Button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default LacationForm;
