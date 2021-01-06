import React from "react";
import {NavLink, Route, Switch} from "react-router-dom";
import styled from "styled-components";
import Home from "./views/Home";
import NoMatch from "./views/NoMatch";
import Projects from "./views/Projects";
import ProjectDetail from "./views/ProjectDetail";
import projectData from "projects.json";

const AppWrapper = styled.div`
  //background: #051221;
  background: #FBFAF6;
  //color: #FFFFFF;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const HeaderWrapper = styled.header`
  background-color: #FBFAF6;
  border-bottom: 2px solid #f2f2f2;
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
          font-family: Poppins, sans-serif;
          line-height: 1.8;
          text-transform: uppercase;
          color: rgb(3, 37, 108);
          font-size: 1.4em;
        //color: #051221;
      }
      .boxLeft::after {
        content: "◦◦◦";
        margin-left: 0.5em;
        color: #80B2ED;
      }
      .boxRight{
        display: inline-flex;
        justify-content: flex-start;
        p{
          margin: 0px 35px;
          font-size: 1.2em;
          font-family: Poppins, sans-serif;
          line-height: 1.8;
          font-weight: 200;
          color: rgb(3, 37, 108);
        }
      }
   div{
     cursor: pointer;
   }
 }
`;

const ContentWrapper = styled.section`
  flex: 1;
`;

const Footer = styled.footer`
  display: block;
  text-align: center;
  padding: 20px 0;
  color: #555;
  background: #FBFAF6;
  border-top: 2px solid #D2DFED;
  .list{
       > ul{
       display: flex;
       justify-content: center;
       align-items: center;
       padding: 25px 0;  
         > li{
           padding: 0 8px;
           color: rgb(3, 37, 108);
           font-size: 1.2rem;
           line-height: 1.8;
         }
     }
  }
`;

const project = (dataSource: any, id: string) => {
   return dataSource.filter((project: any) => {
      return project.id === parseInt(id);
   })[0];
};

function App() {
   return (
       <AppWrapper>
          <HeaderWrapper>
             <div className="box">
                <NavLink to="/">
                   <div className="boxLeft"><span style={{ fontWeight: 800 }}>Zipeng</span> Liang</div>
                </NavLink>
                <div className="boxRight">
                   <NavLink exact to="/" activeClassName="selected">
                      <p>Home</p>
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
                   <Projects/>
                </Route>
                <Route exact path="/projects/:id"
                       render={(props) => {
                          return <ProjectDetail project={project(projectData.data, props.match.params.id)}/>;
                       }}/>
                <Route exact path="/resume">
                </Route>
                <Route path="*">
                   <NoMatch/>
                </Route>
             </Switch>
          </ContentWrapper>
          <Footer>
             <div className="list">
                <ul>
                   <li>© 2021 Zipeng Liang</li>
                   <li><a href="https://github.com/zipengliang21" target="_blank">Github</a></li>
                   <li>LinkedIn</li>
                   <li>Email</li>
                </ul>
             </div>
          </Footer>
       </AppWrapper>
   );
}

export default App;
