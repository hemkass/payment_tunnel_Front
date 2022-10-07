import { useNavigate } from "react-router-dom";
/* import Cookies from "js-cookie"; */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fonts-icons.css";
import { useEffect, useState } from "react";
import axios from "axios";

/* Modal d'affichage du panier dans le Header */
const CartModal = () => {
  let id: string;
  const navigate = useNavigate();
  /*   let Myadress = Cookies.get("MyAdress"); */
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/carts/${id}`);
        setCart(response.data);
        console.log("response", response);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="cart">
      {/*  <div className="result-content">
        <div
          className="icon"
          onClick={() => {
            setPrintCart(false);
            navigate("/cart");
          }}
        >
          <FontAwesomeIcon icon="expand-alt" />
        </div>
        {cart?.length > 0 ? (
          <div>
            <h2>Panier d'achat</h2>
            {cart.map((item, index) => {
              return (
                <div className="Search-result-box" key={index}>
                  <div className="miniature">
                    <img
                      src={item.thumbnail}
                      alt="de présentation du produit"
                    ></img>
                  </div>{" "}
                  <div className="info">
                    <div className="productName">
                      <p className="ellipse">{item.name}</p>
                    </div>
                    <div>
                      <span className="price">
                        {(
                          Number(item.price.amount) * item.takenQuantity
                        ).toFixed(2) +
                          " " +
                          item.price.currency}
                      </span>
                    </div>
                  </div>
                  <div>
                    <button onClick={() => substractFromCart(item)}>-</button>
                    <span className="quantity">{item.takenQuantity}</span>
                    {item.quantity > 0 && (
                      <button onClick={() => addToCart(item)}>+</button>
                    )}
                  </div>
                </div>
              );
            })}
            <div className="caisse">
              <button
                onClick={() => {
                  setPrintCart(false);

                  navigate("/checkout", {
                    state: {
                      cart: { cart },
                      Total: { Total },
                    },
                  });
                }}
              >
                <div>
                  <span className="icon-payment"></span>
                  <span className="PayText">caisse:</span>
                </div>
                {cart[0]?.price && (
                  <div>
                    <p className="total ">
                      {Total} {cart[0].price.currency}
                    </p>

                    <p className="tax">dont 1.80 € de frais de livraison</p>
                  </div>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div>PANIER VIDE</div>
        )}
      </div> */}
    </div>
  );
};

export default CartModal;
