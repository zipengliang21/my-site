import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    flex: 1;
    .box{
        width: 650px;
        margin: 0px auto;
        padding: 40px 0px;
        .title{
            h1{
                font-size: 24px;
            }
            p{
                color: #999;
                padding-top: 8px;
                font-size: 13px;
            }
        }
        .content{
            padding: 20px 0px;
            p{
                padding-top: 10px;
                line-height: 2;
            }
        }
    }
`;

function ProjectDetail(props: any) {
   const project = props.project;
   return (
       <Wrapper>
          <div className="box">
             <div className="title">
                <h1>{project.title}</h1>
             </div>
             <section className="content">
                {project.descriptions.map((description: string, index: number) => {
                   return <p key={index}>{description}</p>;
                })}
                {project.preview? <p>{`Preview Link: ` + project.preview}</p> : null}
                {project.sourceCode? <p>{`Source Code Link: ` + project.sourceCode}</p> : null}
             </section>
          </div>
       </Wrapper>
   );
}

export default ProjectDetail;