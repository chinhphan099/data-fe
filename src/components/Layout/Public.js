import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

// Components
import AddSpreadsheet from '../../containers/Dashboards/AddSpreadsheet'
// import GoogleVerify from '../../containers/Dashboards/GoogleVerify'
import SearchContent from '../../containers/Dashboards/SearchContent'
// import NeedUpdates from '../../containers/Dashboards/NeedUpdates'
import SearchOnProject from '../../components/Layout/SearchOnProject'
import SmartTranslator from '../../components/Layout/SmartTranslator'

import Teammate from '../../containers/Dashboards/Teammate'
import GetSImages from '../../containers/Dashboards/GetSImages'
import SplitTeam from '../../containers/Dashboards/SplitTeam'
import DeleteAllSpreadSheets from '../../containers/Dashboards/DeleteAllSpreadSheets'
import ScrollTopButton from '../../containers/ScrollTopButton'

const Wrapper = styled.div`
  display: flex;
`

const Container = styled.div`
  max-height: 100vh;
  width: 86vw;
  overflow: scroll;
  padding: 6px 40px;
  background-color: #f9f9fa;
  flex-grow: 1;
  box-sizing: border-box;
`

export default ({ user, onScroll, displayScrollButton }) => (
  <Wrapper>
    <Container id="scollTopDiv" onScroll={onScroll}>
      {/* <Route exact path="/google-verify" component={GoogleVerify} /> */}
      <Route exact path="/dashboard" component={AddSpreadsheet} />
      <Route exact path="/searchcontent" component={SearchContent} />
      <Route exact path="/users" component={Teammate} />
      <Route exact path="/split-team" component={SplitTeam} />
      <Route exact path="/images" component={GetSImages} />
      <Route exact path="/deleteallspreadsheets" component={DeleteAllSpreadSheets} />
      <Route exact path="/searchonproject" component={SearchOnProject} />
      <Route exact path="/smarttranslator" component={SmartTranslator} />
    </Container>
    <ScrollTopButton on="scollTopDiv" isVisible={displayScrollButton} />
  </Wrapper>
)
