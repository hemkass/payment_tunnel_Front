import { PRODUCT_TS } from "../../customTypes/DB.types";
import { AddProductBox, AddProductBoxQuantity } from "./product.style";
import {
  AddProductOnCart,
  RemoveProductOnCart,
} from "../../store/products/products.action";
import { useDispatch } from "react-redux";

const QuantityCounter = ({
  product,
  quantity,
}: {
  product: PRODUCT_TS;
  quantity: number;
}) => {
  const dispatch = useDispatch();
  const handleAddProduct = (product: PRODUCT_TS) => {
    dispatch(AddProductOnCart(product));
  };

  const handleRemoveProduct = (product: PRODUCT_TS) => {
    dispatch(RemoveProductOnCart(product));
  };
  return (
    <>
      {quantity > 0 && (
        <AddProductBox
          onClick={() => {
            handleRemoveProduct(product);
          }}
        >
          -
        </AddProductBox>
      )}
      <AddProductBoxQuantity>{quantity}</AddProductBoxQuantity>
      <AddProductBox
        onClick={() => {
          handleAddProduct(product);
        }}
      >
        +
      </AddProductBox>
    </>
  );
};

export default QuantityCounter;
