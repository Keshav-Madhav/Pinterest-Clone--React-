import React, {useState} from 'react';
import styled from "styled-components";
import PinterestIcon from '@mui/icons-material/Pinterest';
import IconButtons from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextsmsIcon from "@mui/icons-material/Textsms";
import FaceIcon from "@mui/icons-material/Face";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"


function Header(props) {
    const [input, setInput]=useState("");

    const onSeachSubmit= (e)=>{
        e.preventDefault()
        props.onSubmit(input);
        console.log("Input: ",input);

    }
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
                        <SearchIcon />
                    </IconButtons>

                    <form>
                        <input type="text" onChange={(e) =>setInput(e.target.value)}/>
                        <button type="submit" onClick={onSeachSubmit}></button>
                    </form>
                </SearchBarWrapper>
            </SearchWrapper>

            <IconsWrapper>
                <IconButtons>
                    <NotificationsIcon/>
                </IconButtons>

                <IconButtons>
                    <TextsmsIcon/>
                </IconButtons>

                <IconButtons>
                    <FaceIcon/>
                </IconButtons>

                <IconButtons>
                    <KeyboardArrowDownIcon/>
                </IconButtons>
            </IconsWrapper>
            
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

const SearchWrapper=styled.div`
    flex:1;
`

const SearchBarWrapper=styled.div`
    background-color: #efefef;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius:50px;
    border: none;
    padding-left: 10px;
    form{
        display:flex;
        flex:1;
    }

    form >input{
        background-color: transparent;
        border: none;
        width:100%;
        margin-left:5px;
        font-size: 16px;
    }

    form > button{
        display: none;
    }

    input:focus {
        outline: none;
    }
`

const IconsWrapper=styled.div``