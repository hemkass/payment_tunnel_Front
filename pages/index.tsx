import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DomosShop:Tunnel Payment</title>
        <meta name="Payment Tunnel" content="Payment tunnel module" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Products />
    </div>
  );
};

export default Home;
