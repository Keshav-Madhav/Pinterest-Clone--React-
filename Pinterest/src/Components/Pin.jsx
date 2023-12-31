import React from 'react'
import { styled } from 'styled-components'

function Pin(props) {
    let {urls}=props;
    return (
        <Wrapper>
            <Container>
                <img src={urls?.regular} alt="pin" />
            </Container>
        </Wrapper>
    )
}

export default Pin;

const Wrapper=styled.div`
    display:inline-flex;
    padding: 8px;

`

const Container=styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    width: 236px;

    img{
        display: flex;
        cursor: zoom-in;
        width: 100%;
        border-radius: 16px;
        object-fit: cover;
    }
`