import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const ProjectListWrapper = styled.div`
    > ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
         > li{
            width: 45%;            
            margin-bottom: 45px;
            > a{
              display: inline-flex;
              justify-content: space-between;
              .cover{
                > img{
                  width: 100px;
                  border-radius: 5px;
                }
              }
              .projectBrief{
                text-align: left;
                padding-left: 15px;
                > h3{
                  font-size: 18px;
                  color: rgb(51, 51, 51);
                }
                > p{
                  padding: 8px 0px;
                  color: rgba(0, 0, 0, 0.7);
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
                dataSource && dataSource.map((item:any) =>
                    <li key={item.id}>
                       <Link to={`/projects/${item.id}`}>
                          <div className="cover">
                             <img src={item.cover} alt={"Project"}/>
                          </div>
                          <div className="projectBrief">
                             <h3>{item.title}</h3>
                             <p>{item.brief}</p>
                             <div className="tag">
                                {item.tags && item.tags.map((i:any) => <span key={i}>{i}</span>)}
                             </div>
                          </div>
                       </Link>
                    </li>
                )
             }
          </ul>
       </ProjectListWrapper>
   );
}

export default ProjectList;