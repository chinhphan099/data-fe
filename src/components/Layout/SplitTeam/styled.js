import styled from 'styled-components'
import { Title } from '../AddSpreadsheet/styled'
import theme from '../../../themes'

const Wrapper = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleStyled = styled(Title)`
  text-transform: uppercase;
  color: ${theme.color.text.main};
`

const Iframe = styled.iframe`
  width: 100%;
  height: 700px;
  border: none;
`;

const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #f1f1f1;
  color: black;
  border: 1px solid #ddd;
`;

export { TitleStyled, Wrapper, Iframe, Link }
