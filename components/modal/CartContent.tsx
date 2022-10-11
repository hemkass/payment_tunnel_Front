import { Subtitle } from "@components/Products/product.style";
import { CART_TS } from "@customTypes/DB.types";
import { DeleteCart } from "@store/carts/carts.action";
import axios from "axios";
import Router from "next/router";
import { useDispatch } from "react-redux";
import CardItem from "./CardItems";
import { ProductsCartBox } from "./Cart-modal.style";
import { useRouter } from "next/router";

const CartContent = ({
  currentCart,
  setModal,
}: {
  currentCart: CART_TS;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSuppressCart = (cartId: string) => {
    try {
      const fetchData = async () => {
        try {
          const response = await axios.delete(
            `http://localhost:4000/carts/delete/${cartId}`
          );

          dispatch(DeleteCart());
          router.push("/");
          setModal(false);
        } catch (error: any) {
          console.log(error.message);
        }
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };
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
        <Subtitle
          onClick={() => {
            handleSuppressCart(currentCart.id);
          }}
        >
          supprimer mon panier
        </Subtitle>
      </ProductsCartBox>
    </>
  );
};

export default CartContent;
