import { useState } from "react";
import { useSelector } from "react-redux";
import { Product } from "./Product";
import { EditProduct } from "../EditProduct";
import cls from "./productsList.module.scss";
import { Title } from "../../../shared/Title/Title";

export const ProductList = () => {
  const [editingProduct, setEditingProduct] = useState(null);
  const products = useSelector((state) => state.products.products);

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  return (
    <div className={cls.productsList}>
      {products.length !== 0 && (
        <Title title={"Список добавленных продуктов"} Tag={"h3"} />
      )}
      {editingProduct ? (
        <EditProduct product={editingProduct} onCancel={handleCancelEdit} />
      ) : (
        products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onEdit={handleEditProduct}
          />
        ))
      )}
    </div>
  );
};
