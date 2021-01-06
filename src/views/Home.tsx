import React from "react";
import styled from "styled-components";
import ProjectList from "components/ProjectList";
import projectData from "../projects.json";
import Fade from "react-reveal/Fade";
import {Button} from "../components/Button";
import Github from "../components/Github";
import Linkedin from "../components/Linkedin";

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
       .image{
         align-self: flex-end;
         flex-shrink: 0;
         h2{
           padding: 12px 0px;
           font-size: 20px;
           color: rgb(44, 49, 55);
         }
         img{
           width: 250px;
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
              color: rgb(3, 37, 108);
           }      
         }
         p{
           padding: 12px 0px;
           color: rgba(0, 0, 0, 0.7);
         }
       }
       .description{
          align-self: center;
          margin-top: 20px;
          margin-left: 80px;
          font-size: 1.8rem;
          line-height: 1.5;
          font-weight: 100;
          color: rgb(44, 49, 55);
          text-align: left;
          .icon{
            display: flex;
            margin-top: 20px;
            margin-left: -15px;
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
            color: rgb(3, 37, 108);
            font-weight: 800;
            line-height: 1.4;
            text-align: center;
          }
        }
        p{
          color: rgb(3, 37, 108);
        }
    }
`;

function Home() {
   return (
       <HomeWrapper>
          <section className="brief">
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
                   <div><Github/></div>
                   <div><Linkedin/></div>
                </div>
             </div>

          </section>

          <section className="project">
             <Fade top>
                <div className="title">
                   <h2>Recent Projects</h2>
                </div>
             </Fade>
             <ProjectList dataSource={projectData.data}/>
             <Fade bottom>
                <Button to="/projects">See all projects</Button>
             </Fade>
          </section>
       </HomeWrapper>
   );
}

export default Home;