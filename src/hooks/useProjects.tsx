import {useEffect, useState} from "react";
import axios from "axios";

const useProjects = () => {
   const [projects, setProjects] = useState([]);
   useEffect(() => {
      axios.get('https://zipeng-my-site.herokuapp.com/v1/projects').then((response: any) => {
         setProjects(response)
         // console.log(projects)
      });
   }, []);

   return {projects};
}

export {useProjects};