import React, { useEffect, useState } from 'react';
import Project from '../Project';



const AllProjects = () => {
    const [projects,setProjects] = useState([]);
    useEffect(()=>{
        fetch('details.json')
        .then(res => res.json())
        .then(data => {
            console.log(data,'all')
            setProjects(data)
        })
    },[projects])
    return (
        <div>
            {
                projects.map(project => <Project
                key={project.id}
                project={project}
                ></Project>)
            }
           
            
        </div>
    );
};

export default AllProjects;