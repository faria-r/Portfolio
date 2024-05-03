import React, { useEffect, useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

const FeaturedProjects = () => {
    const [projects,setProjects] = useState([]);
    useEffect(()=>{
        fetch('details.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
   
    return (
        <div>
            {
                projects.map(p => <ProjectCard key={p._id} p={p}></ProjectCard> )
            }
           
        </div>
    );
};

export default FeaturedProjects;