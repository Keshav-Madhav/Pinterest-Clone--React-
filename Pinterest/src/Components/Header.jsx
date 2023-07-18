import React from 'react';
import styled from "styled-components"
import PinterestIcon from '@mui/icons-material/Pinterest';
import IconButtons from "@mui/material/IconButton"

function Header() {
    return (
        <Wrapper>

            <LogoWrapper>
                <IconButtons>
                    <PinterestIcon />
                </IconButtons>
            </LogoWrapper>

            <HomePageButton>
                <a href="">Homepage</a>
            </HomePageButton>

            <FollowingButton>
                <a href="">Following</a>
            </FollowingButton>

            <SearchWrapper>
                <SearchBarWrapper>
                    <IconButtons>
                        <SeacrhIcon />
                    </IconButtons>

                    <form>
                        <input type="text"/>
                        <button type="submit"></button>
                    </form>
                </SearchBarWrapper>
            </SearchWrapper>

            {/*<IconsWrapper>

            </IconsWrapper> */}
            
        </Wrapper>
    )
}

export default Header                                  

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    height:56px;
    padding: 12px 4px 4px 16px;
    color: black;
    background-color:white;
`

const LogoWrapper = styled.div`
    .MuiSvgIcon-root{
        color: #e60023;
        font-size:32px;
        cursor:pointer;
    }
`

const HomeButtons=styled.div`
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
    a{
        text-decoration: none;
        font-weight: 700;
    }
`

const HomePageButton=styled(HomeButtons)`
    background-color: rgb(17,17,17);
    a{
        color: white;
    }
`

const FollowingButton=styled(HomeButtons)`
    background-color: white;
    &:hover {
        background-color: #e1e1e1;
    }
    a{
        color: black;
    }
`

const SearchBarWrapper=styled.div`

`