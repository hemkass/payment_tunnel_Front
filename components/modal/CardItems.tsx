import { useSelector } from "react-redux";
import { RootState } from "../../customTypes/actions.type";
import { PRODUCT_ON_CART_TS, PRODUCT_TS } from "../../customTypes/DB.types";
import {
  CardBox,
  ImageBox,
  Price,
  QuantityBox,
  Subtitle,
  Title,
} from "../Products/product.style";
import QuantityCounter from "../Products/QuantityCounter";
import { CardItemStyle } from "./cardItems.style";
import { ProductsCartBox } from "./Cart-modal.style";

const CardItem = ({ product }: { product: PRODUCT_TS }) => {
  const currentCart = useSelector((state: RootState) => {
    return state.carts.currentCart;
  });
  let quantity = 0;

  const findQuantity = (elem: PRODUCT_TS) => {
    if (currentCart && currentCart.products) {
      const exist = currentCart.products.find((item) => {
        return elem.id === item.productId;
      });

      if (exist) {
        quantity = exist.quantityInCart;
      } else {
        quantity = 0;
      }
    }
  };
  findQuantity(product);
  return (
    <CardItemStyle>
      <CardBox key={product.id}>
        <ImageBox>
          {product.pictures && (
            <img
              className="img"
              width="100%"
              height="100%"
              src={product.pictures[0].src}
            ></img>
          )}
        </ImageBox>
        <div>
          <Price>{product.price} €</Price>
          <Title>{product.title}</Title>{" "}
          <QuantityBox>
            <QuantityCounter product={product} quantity={quantity} />
          </QuantityBox>
        </div>
      </CardBox>
    </CardItemStyle>
  );
};

export default CardItem;
