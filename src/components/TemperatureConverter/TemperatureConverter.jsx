import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const c = e.target.value;
    setCelsius(c);
    setFahrenheit(c !== "" ? ((parseFloat(c) * 9) / 5 + 32).toFixed(2) : "");
  };

  const handleFahrenheitChange = (e) => {
    const f = e.target.value;
    setFahrenheit(f);
    setCelsius(f !== "" ? (((parseFloat(f) - 32) * 5) / 9).toFixed(2) : "");
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4" gutterBottom>
        Temperature Converter
      </Typography>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <TextField
          label="Celsius"
          variant="outlined"
          value={celsius}
          onChange={handleCelsiusChange}
        />
        <TextField
          label="Fahrenheit"
          variant="outlined"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </Grid>
    </Grid>
  );
};
