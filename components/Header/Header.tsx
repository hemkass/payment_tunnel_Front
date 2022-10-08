import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../customTypes/actions.type";
import { CartBox, HeaderMenu, HeaderWrapper } from "./header.style";
import { useState } from "react";
import CartModal from "../modal/Cart-Modal";

const Header = () => {
  const router = useRouter();
  const [modal, setModal] = useState<boolean>(false);

  const currentCart = useSelector((state: RootState) => {
    return state.carts.currentCart;
  });

  return (
    <div>
      <HeaderWrapper>
        <HeaderMenu>
          <Image
            onClick={() => {
              router.push("/");
            }}
            src="/logo.jpg"
            width={70}
            height={70}
          ></Image>
          {router.asPath === "/" && (
            <CartBox
              onClick={() => {
                setModal(true);
              }}
            >
              <FontAwesomeIcon icon={faCartShopping} className="cartIcon" />
              {currentCart?.total} €{" "}
            </CartBox>
          )}
        </HeaderMenu>
      </HeaderWrapper>
      {modal && <CartModal setModal={setModal} />}
    </div>
  );
};

export default Header;
