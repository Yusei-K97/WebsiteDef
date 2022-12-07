import React from "react";
import { Heading, Spacer, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <Center h="20" color="white" bg="black">
        <Spacer/>
        <Heading size="2xl"><Link to="/" >title</Link></Heading>
            <Spacer/>
            <Heading size="lg" p={6}><Link to="/" >Page1</Link></Heading>
            <Heading size="lg" p={6}><Link to="/page2" >Page2</Link></Heading>
            <Heading size="lg" p={6}><Link to="/page3" >Page3</Link></Heading>
            <Heading size="lg" p={6}><Link to="/page4" >Page4</Link></Heading>
            <Heading size="lg" p={6}><Link to="/page5" >Page5</Link></Heading>
        </Center>
    )
};