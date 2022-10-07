import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../customTypes/actions.type";
import { CartBox, HeaderMenu, HeaderWrapper } from "./header.style";

const Header = () => {
  const currentCart = useSelector((state: RootState) => {
    return state.carts.currentCart;
  });
  console.log("mycart", currentCart);
  return (
    <HeaderWrapper>
      <HeaderMenu>
        <Image src="/logo.jpg" width={70} height={70}></Image>
        <CartBox> hello </CartBox>
      </HeaderMenu>
    </HeaderWrapper>
  );
};

export default Header;
