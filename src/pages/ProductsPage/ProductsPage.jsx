import { Container } from "@mui/material";
import { useState } from "react";
import { Title } from "../../shared/Title/Title";
import { AddProduct, EditProduct, ProductList } from "../../components";

export const ProductsPage = () => {
  const [editingProduct, setEditingProduct] = useState(null);
  return (
    <Container>
      <Title title={"Каталог продуктов"} />
      {editingProduct ? (
        <EditProduct product={editingProduct} />
      ) : (
        <AddProduct />
      )}
      <ProductList setEditingProduct={setEditingProduct} />
    </Container>
  );
};
