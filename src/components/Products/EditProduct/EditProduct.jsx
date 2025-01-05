import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";
import { updateProduct } from "../../../redux/slices/productsSlice";

export const EditProduct = ({ product, onCancel }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [available, setAvailable] = useState(product.available);

  useEffect(() => {
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setAvailable(product.available);
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = { name, description, price, available };
    dispatch(updateProduct({ id: product.id, updatedProduct }));
    onCancel();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 400,
          margin: "0 auto",
        }}
      >
        <TextField
          label="Product Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
          sx={{
            "& .MuiInputBase-input": {
              color: "var(--black)",
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
          rows={4}
          sx={{
            "& .MuiInputBase-input": {
              color: "var(--black)",
            },
          }}
        />
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
              color: "var(--black)",
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
        <Button type="submit" variant="contained" color="primary">
          Update Product
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={onCancel}
          sx={{ marginTop: 2 }}
        >
          Cancel
        </Button>
      </Box>
    </form>
  );
};
