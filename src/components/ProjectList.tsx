import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Fade from "react-reveal/Fade";

const p1 = require("../assets/project/Morney.png");
const p2 = require("../assets/project/ZL.png");
const p3 = require("../assets/avatar.png");

const ProjectListWrapper = styled.div`
    margin-top: 80px;
    > ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
         > li{                      
            margin: 0 auto 125px auto;
            > a{
              display: inline-flex;
              justify-content: space-between;
              .cover{
                > img{
                  width: 145px;
                  border-radius: 10px;
                }
              }
              .projectBrief{
                text-align: left;
                padding-left: 15px;
                > h3{
                  font-size: 1.8rem;
                  color: rgb(51, 51, 51);
                }
                > p{
                  padding: 8px 0px;
                  color: rgba(0, 0, 0, 0.7);
                  font-size: 1.4rem;
                  line-height: 1.8;
                }
                .tag{
                  display: flex;
                  justify-content: flex-start;
                  flex-wrap: wrap;
                  > span{
                    color: rgba(0, 0, 0, 0.55);
                    font-size: 14px;
                  }
                  > span:not(:last-child)::after {
                    content: "•";
                    padding: 0px 0.5em;
                  }
                }
              }
            }
         }
      }
`;

function ProjectList({dataSource}: any) {
   return (
       <ProjectListWrapper>
          <ul>
             {
                dataSource && dataSource.map((item: any, index: number) =>
                    <Fade {...(index % 2 === 0 ? {left: true} : {right: true})}>
                       <li key={item.id}>
                          <Link to={`/projects/${item.id}`}>
                             <div className="cover">
                                <img src={item.id === 1 ? p1 : item.id === 2 ? p2 : p3} alt={"Project"}/>
                             </div>
                             <div className="projectBrief">
                                <h3>{item.title}</h3>
                                <p>{item.brief}</p>
                             </div>
                          </Link>
                       </li>
                    </Fade>
                )
             }
          </ul>
       </ProjectListWrapper>
   );
}

export default ProjectList;