import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  font-size: 20px;
  background-color: black;
  color: white;
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  border: 1px solid black;
  &:hover {
    color: black;
    background-color: white;
  }
`

const Item = styled.span`
`

export { Wrapper, Button, Item }
