import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
height: 10rem;
width: 15rem;
padding: 0.6rem;
box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`

const Box = (props) => {
  return (
    <Wrapper>{props.value}</Wrapper>
  )
}

export default Box