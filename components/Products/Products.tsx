import { useEffect, useState } from "react";
import {
  ProductsBox,
  ProductContainer,
  CardBox,
  Title,
  Price,
  ImageBox,
  AddProductBox,
  Subtitle,
  QuantityBox,
  Wrapper,
} from "./product.style";
import axios from "axios";
import { DataProduct, Product } from "../customType/customType";
import { useDispatch, useSelector } from "react-redux";
import { FetchCart } from "../../store/carts/carts.action";
import { RootState } from "../../customTypes/actions.type";
import {
  CART_TS,
  PRODUCT_ON_CART_TS,
  PRODUCT_TS,
} from "../../customTypes/DB.types";
import {
  AddProductOnCart,
  RemoveProductOnCart,
} from "../../store/products/products.action";
import QuantityCounter from "./QuantityCounter";

const Products = () => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState(null);
  const [data, setData] = useState<null | DataProduct>(null);
  const [productsList, setProductsList] = useState<null | Product>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/products`);
        setProductsList(response.data.products);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  /*   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/carts/${id}`);

        setCart(response.data);
        console.log("response", response);
        dispatch(FetchCart(response.data));
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []); */

  /*   const handleAddProduct = (elem: PRODUCT_TS) => {
    console.log("elem", elem);
    dispatch(AddProductOnCart(elem));
  };

  const handleRemoveProduct = (elem: PRODUCT_TS) => {
    console.log("ici", elem);
    dispatch(RemoveProductOnCart(elem));
  }; */
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

  if (productsList) {
    return (
      <Wrapper>
        <ProductContainer>
          <ProductsBox>
            {productsList.map((elem) => {
              {
                findQuantity(elem);
              }
              return (
                <CardBox key={elem.id}>
                  <ImageBox>
                    {" "}
                    <QuantityBox>
                      <QuantityCounter product={elem} quantity={quantity} />
                    </QuantityBox>
                    <img
                      src={elem.pictures[0].src}
                      width="100%"
                      height="100%"
                    ></img>
                  </ImageBox>
                  <Price>{elem.price} €</Price>
                  <Title>{elem.title}</Title>
                  <Subtitle>{elem.description}</Subtitle>{" "}
                </CardBox>
              );
            })}{" "}
          </ProductsBox>
        </ProductContainer>
      </Wrapper>
    );
  } else {
    return <div>Chargement en cours </div>;
  }
};

export default Products;
