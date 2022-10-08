import { CART_TS } from "@customTypes/DB.types";
import CardItem from "./CardItems";
import { ProductsCartBox } from "./Cart-modal.style";

const CartContent = ({ currentCart }: { currentCart: CART_TS }) => {
  return (
    <>
      {" "}
      <ProductsCartBox>
        {currentCart.products?.map((product) => {
          return (
            <div key={product.id}>
              {product.product && <CardItem product={product.product} />}
            </div>
          );
        })}
      </ProductsCartBox>
    </>
  );
};

export default CartContent;
