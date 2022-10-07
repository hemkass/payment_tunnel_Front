import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../customTypes/actions.type";
import { FetchCart } from "../../store/carts/carts.action";
import { TestBox } from "./cart.style";

const Cart = () => {
  const dispatch = useDispatch();
  let id = "08c00329-a7a7-460b-85c2-d35edb885203";
  const [cart, setCart] = useState(null);
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

  const currentCart = useSelector((state: RootState) => {
    return state.carts.currentCart;
  });

  console.log("mycart", currentCart);
  return <TestBox>hello</TestBox>;
};

export default Cart;
