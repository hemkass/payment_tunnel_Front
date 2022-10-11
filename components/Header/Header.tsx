import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../customTypes/actions.type";
import { CartBox, HeaderMenu, HeaderWrapper } from "./header.style";
import { useState, useEffect } from "react";
import CartModal from "../modal/Cart-Modal";

const Header = () => {
  const router = useRouter();
  const [modal, setModal] = useState<boolean>(false);
  const [total, setTotal] = useState<number | null>(null);

  const currentCart = useSelector((state: RootState) => {
    return state.carts.currentCart;
  });

  useEffect(() => {
    const fetchData = async () => {
      if (currentCart) {
        setTotal(currentCart.total);
      }
    };
    fetchData();
  }, [currentCart]);

  return (
    <HeaderWrapper>
      <HeaderMenu>
        <Image
          onClick={() => {
            router.push("/");
          }}
          src="/logo.jpg"
          width={70}
          height={70}
        ></Image>{" "}
        {router.asPath === "/" && currentCart && currentCart.total > 0 && (
          <CartBox
            onClick={() => {
              setModal(true);
            }}
          >
            <FontAwesomeIcon icon={faCartShopping} className="cartIcon" />
            {currentCart?.total} €{" "}
          </CartBox>
        )}
        {/*         {router.asPath === "/" && total ? (
          <CartBox
            onClick={() => {
              setModal(true);
            }}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              className="cartIcon"
              width={30}
            />
            {total} €
          </CartBox>
        ) : (
          <div></div>
        )} */}
      </HeaderMenu>
      {modal && <CartModal setModal={setModal} />}
    </HeaderWrapper>
  );
};

export default Header;
