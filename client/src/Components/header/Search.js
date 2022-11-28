import styled from '@emotion/styled';
import { InputBase,Box } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background:#fff;
    width:38%;
    border-radius:2px;
    margin-left:10px
`;
const InputSearchBase = styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset;
`;
const SearchIconWrapper = styled(SearchIcon)`
    color:blue;
    padding-top:3px;
`;

const Search = () => {
  return (
    <>
    <SearchContainer style={{display:"flex"}}>
        <InputSearchBase
        placeholder="Search for products,brands and more"
    />
    <Box>
    <SearchIconWrapper />
    </Box>
    </SearchContainer>
    </>
  )
}

export default Search