import React from "react";
import {NavLink, Route, Switch} from "react-router-dom";
import styled from "styled-components";
import Home from "./views/Home";
import NoMatch from "./views/NoMatch";
import Projects from "./views/Projects";
import ProjectDetail from "./views/ProjectDetail";
import {ThemeEnum, useTheme} from "hooks/context";
import ThemeSwitch from "components/ThemeSwitch";
import {useProjects} from "./hooks/useProjects";

const AppWrapper = styled.div`
  //background: #051221;
  background: ${props => props.theme === ThemeEnum.light? "#FBFAF6" : "#051221"};
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme === ThemeEnum.light? "#FBFAF6" : "#051221"};
  border-bottom: 2px solid ${props => props.theme === ThemeEnum.light? "#f2f2f2" : "#051221"};
  height: 60px;
  @media(max-width: 576px) {
    height: 250px;
  };
  .selected{
      color: #5758BB!important;
      padding-bottom: 5px;
      border-bottom: 3px solid #5758BB;
    }
  .box{
      width: 70%;
      height: 100%;
      margin: 0 auto;
      padding: 0 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media(max-width: 576px) {
        flex-direction: column;
        justify-content: center;
      };
      a:hover { 
        text-decoration:none; 
      }
      .boxLeft{
          font-family: Poppins, sans-serif;
          line-height: 1.8;
          text-transform: uppercase;
          color: ${props => props.theme === ThemeEnum.light? "rgb(3, 37, 108)" : "#80B1EC"};
          font-size: 1.4em;
          @media(max-width: 576px) {
            margin: 10px 0 10px 0;
          };
      }
      .boxLeft::after {
        @media(max-width: 992px) {
            content: "";
            margin-left: 0;
        };
        content: "◦◦◦";
        margin-left: 0.5em;
        color: #80B2ED;
      }
      .boxRight{
        display: inline-flex;
        justify-content: flex-start;
        @media(max-width: 576px) {
            margin-right: 0;
            margin-bottom: 15px;
            flex-direction: column;
            justify-content: center;
        };
        p{
          margin: 0px 35px;
          font-size: 1.2em;
          font-family: Poppins, sans-serif;
          line-height: 1.8;
          font-weight: 200;
          color: ${props => props.theme === ThemeEnum.light? "rgb(3, 37, 108)" : "#80B1EC"};
          @media(max-width: 992px) {
              margin: 0 20px;
              text-align: center;
          };
          @media(max-width: 576px) {
              margin: 0 2px;
              text-align: center;
          };
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  color: ${props => props.theme === ThemeEnum.light? "rgb(3, 37, 108)" : "#80B0EB"};
  background: ${props => props.theme === ThemeEnum.light? "#FBFAF6" : "#051221"};
  border-top: 2px solid ${props => props.theme === ThemeEnum.light? "#D2DFED" : "#051221"};
  font-size: 1.2rem;
  @media(max-width: 992px) {
      display: flex;
      flex-direction: column;
  };
  > div{
      padding-right: 30px;
      @media(max-width: 992px) {
          padding-right: 0;
      };
  }
  .list{
       > ul{
       display: flex;
       justify-content: center;
       align-items: center;
       padding: 25px 0;  
       @media(max-width: 576px) {
          display: inline;
          text-align: center;
       };
         > li{
           padding: 0 8px;
           color: ${props => props.theme === ThemeEnum.light? "rgb(3, 37, 108)" : "#80B0EB"};
           line-height: 1.8;
         }
     }
  }
`;

const project = (dataSource: any, id: string) => {
   return dataSource.data.filter((project: any) => {
      console.log(project.id)
      return project.id === parseInt(id);
   })[0];
};

const ModifiedThemeSwitch: any = styled(ThemeSwitch)`
    border-radius: 50px;
    min-width: 50px;
    margin-left: 50px;
    display: flex;
    align-items: center;

    @media(max-width: 576px) {
        margin-left: 0;
    };
`;

function App() {
   const { theme, toggleTheme } = useTheme();
   const {projects} = useProjects();
   return (
       <AppWrapper theme={theme}>
          <HeaderWrapper theme={theme}>
             <div className="box">
                <NavLink to="/">
                   <div className="boxLeft"><span style={{fontWeight: 800}}>Zipeng</span> Liang</div>
                </NavLink>
                <div className="boxRight">
                   <NavLink exact to="/" activeClassName="selected">
                      <p>Home</p>
                   </NavLink>
                   <NavLink exact to="/projects" activeClassName="selected">
                      <p>Projects</p>
                   </NavLink>
                   <a href="https://drive.google.com/file/d/1xq6ytQPKb9tBqY7l99Nd2bnLyz70HHr1/view?usp=sharing"
                      target="_blank" rel="noreferrer"><p>Resume</p></a>
                </div>
                <ModifiedThemeSwitch theme={theme} onChange={toggleTheme} />
             </div>
          </HeaderWrapper>
          <ContentWrapper>
             <Switch>
                <Route exact path="/">
                   <Home theme={theme}/>
                </Route>
                <Route exact path="/projects">
                   <Projects theme={theme}/>
                </Route>
                <Route exact path="/projects/:id"
                       render={(props) => {
                          return <ProjectDetail theme={theme} project={project(projects, props.match.params.id)}/>;
                       }}/>
                <Route path="*">
                   <NoMatch/>
                </Route>
             </Switch>
          </ContentWrapper>
          <Footer theme={theme}>
             <div>© 2021 Zipeng Liang</div>
             <div className="list">
                <ul>
                   <li><a href="https://github.com/zipengliang21" target="_blank" rel="noreferrer">Github</a></li>
                   <li><a href="https://www.linkedin.com/in/zipeng-liang/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                   <li><a href="mailto:zipengliang21@gmail.com">Email</a></li>
                </ul>
             </div>
          </Footer>
       </AppWrapper>
   );
}

export default App;
