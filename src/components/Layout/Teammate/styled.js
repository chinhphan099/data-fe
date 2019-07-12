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

const List = styled.div`
  background-color: white;
  box-shadow: ${theme.color.boxShadow.box};
  width: 40vw;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`

const Item = styled.div`
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(100, 100, 100, 0.08);
  width: 50%;
`

const Name = styled.p`
  font-weight: 500;
  color: ${theme.color.text.main}
  font-size: calc(${theme.fontSize.text} + 2px);
  margin-bottom: 0;
`

const Email = styled.p`
  font-weight: 400;
  color: ${theme.color.text.gray}
  font-size: ${theme.fontSize.small_text_1};
`

export { TitleStyled, List, Item, Name, Email, Wrapper }
