import React from "react";
import {
   HashRouter as Router,
   Switch,
   Route,
   NavLink
} from "react-router-dom";
import Home from "./views/Home";
import NoMatch from "./views/NoMatch";
import styled from "styled-components";

const AppWrapper = styled.div`
  background: #051221;
  color: #FFFFFF;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const HeaderWrapper = styled.header`
  height: 60px;
  .selected{
      color: #1D78E0!important;
      padding-bottom: 5px;
      border-bottom: 3px solid #5563EE;
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
        color: #1D78E0;
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
          color: #1D78E0;
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
          </ContentWrapper>
          <Footer>
             <p>© <b>2021 Zipeng Liang</b></p>
             <p>Jepson</p>
          </Footer>
       </AppWrapper>
   );
}

export default App;
