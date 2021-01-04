import React from "react";
import styled from "styled-components";
import ProjectList from "../components/ProjectList";
import projectData from "../projects.json"

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
       color: rgba(0,0,0,.8);
       font-weight: 400;
     }
     p{
      color: rgba(0, 0, 0, 0.7);
     }
   }
`;

function Projects() {
   return (
       <ProjectsWrapper>
          <div className="title">
             <h3>Recent Projects</h3>
             <p>A collection of different things I have worked on.</p>
          </div>
          <ProjectList dataSource ={projectData.data}/>
       </ProjectsWrapper>
   );
}

export default Projects;