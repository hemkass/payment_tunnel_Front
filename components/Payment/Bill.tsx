import CardItem from "@components/modal/CardItems";
import { CardItemStyle } from "@components/modal/cardItems.style";
import { ProductsCartBox } from "@components/modal/Cart-modal.style";
import {
  CardBox,
  ImageBox,
  Price,
  QuantityBox,
  Subtitle,
  Title,
} from "@components/Products/product.style";
import { RootState } from "@customTypes/actions.type";
import { PRODUCT_TS } from "@customTypes/DB.types";
import { useSelector } from "react-redux";
import { BillContainer } from "./Bill.style";

const Bill = ({ paymentData }: { paymentData: string }) => {
  let quantity = 0;
  const currentCart = useSelector((state: RootState) => {
    return state.carts.currentCart;
  });

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

  return (
    <BillContainer>
      <Title>Merci de votre achat</Title>
      <Subtitle>N° de commande: {paymentData}</Subtitle>
      {currentCart && (
        <ProductsCartBox>
          {currentCart.products?.map((product) => {
            return (
              <div key={product.id}>
                {product.product && (
                  <CardItemStyle>
                    <CardBox key={product.id}>
                      <ImageBox>
                        {product.product.pictures && (
                          <img
                            className="img"
                            width="100%"
                            height="100%"
                            src={product.product.pictures[0].src}
                          ></img>
                        )}
                      </ImageBox>
                      <Price>{product.product.price} €</Price>
                      <Title>{product.product.title}</Title>{" "}
                      <Price>Quantity: {product.quantityInCart}</Price>
                    </CardBox>
                  </CardItemStyle>
                )}
              </div>
            );
          })}
        </ProductsCartBox>
      )}
    </BillContainer>
  );
};

export default Bill;
