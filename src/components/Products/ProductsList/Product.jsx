import { Button, Card, CardContent, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  removeProduct,
  toggleAvailability,
} from "../../../redux/slices/productsSlice";

export const Product = ({ product, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeProduct(product.id));
  };

  const handleToggleAvailability = () => {
    dispatch(toggleAvailability(product.id));
  };

  return (
    <Card
      variant="outlined"
      sx={{
        marginBottom: 2,
        backgroundColor: "var(--gray)",
        color: "var(--black)",
        transition: "var(--transition)",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            color: "var(--black)",
          }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "var(--dark)",
          }}
        >
          {product.description}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "var(--dark)",
          }}
        >
          Price: ${product.price}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "var(--dark)",
          }}
        >
          Available: {product.available ? "Yes" : "No"}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleToggleAvailability}
          sx={{ marginRight: 1 }}
        >
          Toggle Availability
        </Button>
        <Button variant="outlined" color="error" onClick={handleDelete}>
          Delete
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => onEdit(product)}
          sx={{ marginLeft: 1 }}
        >
          Edit
        </Button>
      </CardContent>
    </Card>
  );
};
