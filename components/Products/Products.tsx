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
  let id = "08c00329-a7a7-460b-85c2-d35edb885203";
  useEffect(() => {
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
  }, []);

  const handleAddProduct = (elem: PRODUCT_TS) => {
    console.log("elem", elem);
    dispatch(AddProductOnCart(elem));
  };

  const handleRemoveProduct = (elem: PRODUCT_TS) => {
    console.log("ici", elem);
    dispatch(RemoveProductOnCart(elem));
  };
  const currentCart = useSelector((state: RootState) => {
    return state.carts.currentCart;
  });

  console.log("mycart", currentCart);
  if (productsList) {
    let quantity = 0;
    return (
      <ProductContainer>
        <ProductsBox>
          {productsList.map((elem) => {
            {
              if (currentCart && currentCart.products) {
                const exist = currentCart.products.find((item) => {
                  return elem.id === item.productId;
                });

                if (exist) {
                  quantity = exist.quantityInCart;
                }
              }
            }
            return (
              <CardBox key={elem.id}>
                <ImageBox>
                  {" "}
                  <QuantityBox>
                    <AddProductBox
                      onClick={() => {
                        handleRemoveProduct(elem);
                      }}
                    >
                      -
                    </AddProductBox>
                    <AddProductBox>{quantity}</AddProductBox>
                    <AddProductBox
                      onClick={() => {
                        handleAddProduct(elem);
                      }}
                    >
                      +
                    </AddProductBox>{" "}
                  </QuantityBox>
                  <img className="img" src={elem.pictures[0].src}></img>
                </ImageBox>
                <Price>{elem.price} €</Price>
                <Title>{elem.title}</Title>
                <Subtitle>{elem.description}</Subtitle>{" "}
              </CardBox>
            );
          })}{" "}
        </ProductsBox>
      </ProductContainer>
    );
  } else {
    return <div>Chargement en cours </div>;
  }
};

export default Products;
