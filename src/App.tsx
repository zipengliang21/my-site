import React from "react";
import {
   NavLink, Route, Switch
} from "react-router-dom";
import styled from "styled-components";
import Home from "./views/Home";
import NoMatch from "./views/NoMatch";

const AppWrapper = styled.div`
  //background: #051221;
  //color: #FFFFFF;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const HeaderWrapper = styled.header`
  background-color: rgb(250, 250, 250);
  height: 60px;
  .selected{
      color: #333!important;
      padding-bottom: 5px;
      border-bottom: 3px solid #333;
    }
  .box{
      width: 70%;
      height: 100%;
      margin: 0px auto;
      padding: 0px 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      a:hover { 
        text-decoration:none; 
      }
      .boxLeft{
            text-transform: uppercase;
        font-size: 1.8em;
        color: rgb(51, 51, 51);
      }
      .boxLeft::after {
        content: "◦◦◦";
        margin-left: 0.5em;
      }
      .boxRight{
        display: inline-flex;
        justify-content: flex-start;
        p{
          margin: 0px 35px;
          font-size: 1.5em;
          color: rgb(102, 102, 102);
        }
      }
   div{
     cursor: pointer;
   }
 }
`;

const ContentWrapper = styled.section`
  text-align: center;
  flex: 1;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 30px 0;
  color: #555;
  background: #fafafa;
  border-top: 1px solid #f2f2f2;
  > p{
    padding: 2px 0;  
  }
`;

function App() {
   return (
       <AppWrapper>
          <HeaderWrapper>
             <div className="box">
                <NavLink to="/">
                   <div className="boxLeft">Zipeng Liang</div>
                </NavLink>
                <div className="boxRight">
                   <NavLink exact to="/" activeClassName="selected">
                      <p >Home</p>
                   </NavLink>
                   <NavLink exact to="/projects" activeClassName="selected">
                      <p>Projects</p>
                   </NavLink>
                   <NavLink exact to="/resume" activeClassName="selected">
                      <p>Resume</p>
                   </NavLink>
                </div>
             </div>
          </HeaderWrapper>
          <ContentWrapper>
                <Switch>
                   <Route exact path="/">
                      <Home/>
                   </Route>
                   <Route exact path="/projects">
                   </Route>
                   <Route exact path="/resume">
                   </Route>
                   <Route path="*">
                      <NoMatch/>
                   </Route>
                </Switch>
          </ContentWrapper>
          <Footer>
             <p>© <b>2021 Zipeng Liang</b></p>
             <p>Jepson</p>
          </Footer>
       </AppWrapper>
   );
}

export default App;
