import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Page1 } from "./Components/Pages/Page1";
import { Page2 } from "./Components/Pages/Page2";
import { Page3 } from "./Components/Pages/Page3";
import { Page4 } from "./Components/Pages/Page4";
import { Page5 } from "./Components/Pages/Page5";
import { DefaultLayout } from "./Components/HF/DefaultLayout";

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout><Page1 /></DefaultLayout>}/> 
                <Route path="/page2" element={<DefaultLayout><Page2 /></DefaultLayout>}/>
                <Route path="/page3" element={<DefaultLayout><Page3 /></DefaultLayout>}/>
                <Route path="/page4" element={<DefaultLayout><Page4 /></DefaultLayout>}/>
                <Route path="/page5" element={<DefaultLayout><Page5 /></DefaultLayout>}/>
            </Routes>
        </BrowserRouter>
    );
}