import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { navData } from "../../Constants/data";

const Component = styled(Box)`
  display: flex;
  margin: 55px 130px;
  justify-content: space-between;
`;
const Container = styled(Box)`
  padding: 12px 8px;
  text-align:center;
`;
const Text = styled(Typography)`
  font-size:14px;
  font-weight:bold;
  font-family:inherit;
  text-align:center;
`;

const Navbar = () => {
  return (
    <>
      <Component>
        {navData.map((curElem, index) => {
          return (
            <Container >
              <img src={curElem.url} alt="img..." style={{ width: "64px" }} />
              <Text>{curElem.text}</Text>
            </Container>
          );
        })}
      </Component>
    </>
  );
};

export default Navbar;
