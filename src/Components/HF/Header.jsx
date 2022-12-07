import React from "react";
import { Heading,Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <Heading>
            <Link to="/" >title</Link>
            <Button><Link to="/" >Page1</Link></Button>
            <Button><Link to="/page2" >Page2</Link></Button>
            <Button><Link to="/page3" >Page3</Link></Button>
            <Button><Link to="/page4" >Page4</Link></Button>
            <Button><Link to="/page5" >Page5</Link></Button>
        </Heading>
    )
};