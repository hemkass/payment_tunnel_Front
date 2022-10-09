import { PRODUCT_TS } from "../../customTypes/DB.types";
import { AddProductBox, AddProductBoxQuantity } from "./product.style";
import {
  AddProductOnCart,
  CreateCart,
  RemoveProductOnCart,
} from "../../store/products/products.action";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@customTypes/actions.type";

const QuantityCounter = ({
  product,
  quantity,
}: {
  product: PRODUCT_TS;
  quantity: number;
}) => {
  const dispatch = useDispatch();

  const currentCart = useSelector((state: RootState) => {
    return state.carts.currentCart;
  });

  const handleAddProduct = (product: PRODUCT_TS) => {
    if (currentCart) {
      let productWithCart = { product: product, cart: currentCart };
      dispatch(AddProductOnCart(productWithCart));
    } else {
      console.log("first cart");
      dispatch(CreateCart(product));
    }
  };

  const handleRemoveProduct = (product: PRODUCT_TS) => {
    if (currentCart) {
      let productWithCart = { product: product, cart: currentCart };
      dispatch(RemoveProductOnCart(productWithCart));
    }
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
