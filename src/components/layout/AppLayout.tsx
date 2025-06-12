'use client'

import Footer from "../footer/Footer";
import Header from '../header/Header';
import MobileNavigationBar from "../mobile-navigation/MobileNavigationBar";
// import Sticky from "@component/sticky/Sticky";
// import Topbar from "@component/topbar/Topbar";
import Head from "next/head";
import React from "react";

type Props = {
  title?: string;
  navbar?: React.ReactNode;
  children: React.ReactNode;
};

const AppLayout: React.FC<Props> = ({
  children,
  navbar,
  title = "React Next.js Ecommerce Template",
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

   {/* <Topbar /> */}

    <div className="shadow-md">
  <Header />
</div>


    {navbar ? (
      <div className="section-after-sticky">{navbar}</div>
    ) : (
      <div className="section-after-sticky">{children}</div>
    )}

    <MobileNavigationBar />
    <Footer />
  </>
);

export default AppLayout;
