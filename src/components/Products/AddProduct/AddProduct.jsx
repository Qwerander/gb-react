import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid2,
} from "@mui/material";
import { addProduct } from "../../../redux/slices/productsSlice";
import { Title } from "../../../shared/Title/Title";

export const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name,
      description,
      price,
      available,
    };
    dispatch(addProduct(newProduct));
    setName("");
    setDescription("");
    setPrice("");
    setAvailable(true);
  };

  return (
    <>
      <Title title={"Добавить новый продукт"} Tag={"h3"} />
      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={2}>
          <Grid2 item="true" xs={12} sm={6}>
            <TextField
              label="Product Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
              sx={{
                "& .MuiInputBase-input": {
                  color: "var(--black)"
                },
              }}
            />

            <TextField
              label="Description"
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              required
              multiline
              rows={2}
              sx={{
                "& .MuiInputBase-input": {
                  color: "var(--black)"
                },
              }}
            />
          </Grid2>
          <Grid2 item="true" xs={12} sm={6}>
            <TextField
              label="Price"
              variant="outlined"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              fullWidth
              required
              sx={{
                "& .MuiInputBase-input": {
                  color: "var(--black)"
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={available}
                  onChange={(e) => setAvailable(e.target.checked)}
                />
              }
              label="Available"
            />
          </Grid2>
        </Grid2>
        <Button type="submit" variant="contained" color="primary">
          Add Product
        </Button>
      </form>
    </>
  );
};
