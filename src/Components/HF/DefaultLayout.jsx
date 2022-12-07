import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const DefaultLayout = (props) => {
    const {children} = props;
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}