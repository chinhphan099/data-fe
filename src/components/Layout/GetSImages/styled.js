import styled from 'styled-components'
import { Title } from '../AddSpreadsheet/styled'
import theme from '../../../themes'

const Wrapper = styled.div`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleStyled = styled(Title)`
  text-transform: uppercase;
  color: ${theme.color.text.main};
`

const List = styled.div`
  background-color: white;
  box-shadow: ${theme.color.boxShadow.box};
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`

const ImageRow = styled.div`
  background-color: white;
  box-shadow: ${theme.color.boxShadow.box};
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: calc(100% / 10);
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  padding: 10px;
`

const ImageName = styled.div`
  width: 100%;
`

const Image = styled.img`
  max-width: 100%;
`

const Email = styled.p`
  font-weight: 400;
  color: ${theme.color.text.gray}
  font-size: ${theme.fontSize.small_text_1};
`

const Link = styled.a`
  &:hover {
    opacity: 0.9;
  }
`

export { TitleStyled, List, Email, Wrapper, Image, ImageRow, Link, ImageName }
