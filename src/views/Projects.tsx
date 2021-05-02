import React from "react";
import styled from "styled-components";
import ProjectList from "../components/ProjectList";
import {ThemeEnum} from "../hooks/context";
import {useProjects} from "../hooks/useProjects";

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
   return (
       <ProjectsWrapper theme={props.theme}>
          <div className="title">
             <h3>Recent Projects</h3>
             <p>A collection of different things I have worked on.</p>
          </div>
          <ProjectList theme={props.theme} dataSource={projects}/>
       </ProjectsWrapper>
   );
}

export default Projects;