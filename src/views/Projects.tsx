import React from "react";
import styled from "styled-components";
import ProjectList from "../components/ProjectList";
import {ThemeEnum} from "../hooks/context";
import {useProjects} from "../hooks/useProjects";
import Spinner from "../components/Spinner";

const ProjectsWrapper = styled.div`
   flex: 1;
   max-width: 700px;
   margin: 0px auto;
   text-align: center;
   padding-top: 40px;
   padding-bottom: 25px;
   .title{
      padding-bottom: 40px;
     h3{
       font-size: 30px;
       padding-bottom: 12px;
       color: ${props => props.theme === ThemeEnum.light? "#343434" : "#EAEAEA"};
       font-weight: 400;
     }
     p{
      color: ${props => props.theme === ThemeEnum.light? "#343434" : "#EAEAEA"};
     }
   }
`;

const Projects = (props: any) => {
   const {projects} = useProjects();
   let projectWrapper = <Spinner theme={props.theme}/>;
   if(projects.length !== 0) {
      projectWrapper = <ProjectList theme={props.theme} className="projectList" dataSource={projects}/>
   }
   return (
       <ProjectsWrapper theme={props.theme}>
          <div className="title">
             <h3>Recent Projects</h3>
             <p>A collection of different things I have worked on.</p>
          </div>
          {projectWrapper}
       </ProjectsWrapper>
   );
}

export default Projects;