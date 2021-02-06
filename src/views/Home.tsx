import React from "react";
import styled from "styled-components";
import ProjectList from "components/ProjectList";
import projectData from "../projects.json";
import Fade from "react-reveal/Fade";
import {Button} from "../components/Button";
import Github from "../components/Github";
import Linkedin from "../components/Linkedin";
import {ThemeEnum} from "../utils/context";

const avatar = require("../assets/avatar.png");

const HomeWrapper = styled.div`
    flex: 1;
    width: 700px;
    height: 100%;
    max-width: 100%;
    margin: 0 auto;
    .brief{
       display: flex;
       text-align: center;
       margin: 0 auto;
       @media(max-width: 992px) {
          flex-direction: column;
       };
       .image{
         align-self: flex-end;
         flex-shrink: 0;
         @media(max-width: 992px) {
            height: 100%;
            align-self: center;
         };
         h2{
           padding: 12px 0px;
           font-size: 20px;
           color: ${props => props.theme === ThemeEnum.light? "rgb(44, 49, 55)" : "#80B1EC"};
         }
         img{
           width: 250px;
           max-width: 100%;
           height: 250px;
           border-radius: 120px;
           margin-top: 20px;
         }
         ul{
           display: flex;
           justify-content: center;
            li{
              padding: 6px 10px;
              background: rgba(87, 199, 255, 0.1);
              margin: 12px 5px;
              border-radius: 3px;
              color:${props => props.theme === ThemeEnum.light? "rgb(44, 49, 55)" : "#80B1EC"};
           }      
         }
         p{
           padding: 12px 0px;
           color: ${props => props.theme === ThemeEnum.light? "rgba(0, 0, 0, 0.7)" : "#EAEAEA"};
         }
       }
       .description{
          align-self: center;
          margin-top: 20px;
          margin-left: 80px;
          font-size: 1.8rem;
          line-height: 1.5;
          font-weight: 100;
          color: ${props => props.theme === ThemeEnum.light? "rgba(0, 0, 0, 0.7)" : "#EAEAEA"};
          text-align: left;
          @media(max-width: 992px) {
             margin-top: 0;
             margin-left: 0;
             text-align: center;
             width: 600px;
             max-width: 100%;
             font-size: 1.6rem;
          };
          .icon{
            display: flex;
            margin-top: 20px;
            margin-left: -15px;
            @media(max-width: 992px) {
             justify-content: center;
            };
            > div{
              padding: 0 10px;
            }
          }
       }
     }
     .project{
        text-align: center;
        padding-top: 40px;
        padding-bottom: 50px;
        .title{
          h2{
            font-size: 3.0rem;
            padding-bottom: 12px;
            color: ${props => props.theme === ThemeEnum.light? "rgb(3, 37, 108)" : "#80B2ED"};
            font-weight: 800;
            line-height: 1.4;
            text-align: center;
            @media(max-width: 992px) {
                font-size: 2.0rem;
            };
          }
        }
        .projectList{
            @media(max-width: 992px) {
                margin: 0 auto;
            };
        }
        p{
          color: rgb(3, 37, 108);
        }
    }
`;

function Home(props: any) {
   return (
       <HomeWrapper theme={props.theme}>
          <section className="brief" >
             <div className="image">
                <img src={avatar} alt={"Jepson"}/>
                <h2>Zipeng Liang (Jepson)</h2>
                <ul>
                   <li>Software Engineer</li>
                   <li>UBC Student</li>
                </ul>
             </div>
             <div className="description">
                <p>I am a <strong>full stack engineer</strong> that builds
                   <strong> modern software apps.</strong></p>
                <div className="icon">
                   <div><a href="https://github.com/zipengliang21" target="_blank" rel="noreferrer"><Github/></a></div>
                   <div><a href="https://www.linkedin.com/in/zipeng-liang/" target="_blank" rel="noreferrer"><Linkedin/></a></div>
                </div>
             </div>

          </section>

          <section className="project">
             <Fade top>
                <div className="title">
                   <h2>Recent Projects</h2>
                </div>
             </Fade>
             <ProjectList theme={props.theme} className="projectList" dataSource={projectData.data}/>
             <Fade bottom>
                <Button theme={props.theme} to="/projects">See all projects</Button>
             </Fade>
          </section>
       </HomeWrapper>
   );
}

export default Home;