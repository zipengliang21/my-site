import React from "react";
import styled from "styled-components";
import ProjectList from "../components/ProjectList";
import projectData from "../projects.json"
import axios from 'axios';
import {ThemeEnum} from "../utils/context";

const ProjectsWrapper = styled.div`
   flex: 1;
   width: 70%;
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

function Projects(props: any) {
   let projects;
   axios.get('https://zipeng-my-site.herokuapp.com/v1/projects').then((response: any) => {
      projects = response;
   })
   return (
       <ProjectsWrapper theme={props.theme}>
          <div className="title">
             <h3>Recent Projects</h3>
             <p>A collection of different things I have worked on.</p>
          </div>
          <ProjectList theme={props.theme} dataSource={projectData.data}/>
       </ProjectsWrapper>
   );
}

export default Projects;