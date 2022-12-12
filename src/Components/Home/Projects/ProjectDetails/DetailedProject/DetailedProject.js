import React, { useEffect, useState } from 'react';

const DetailedProject = ({id}) => {
const [projects,setProjects] = useState([])
useEffect(()=>{
    fetch(`https://portfolio-server-bay.vercel.app/details/${id}`)
    .then(res => res.json())
    .then(data => {
        setProjects(data)
        console.log(data)
    })
},[id])
const projectData = projects?.map(project => project)
const singleData = projectData[0]
console.log(singleData)
// const {ClientCode,LiveSite,ServerCode,about,name} = singleData
    return (
        <div>
       
       <div className="hero">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">{singleData?.name}</h1>
      <p className="py-6">{singleData?.about}</p>
<a className='text-2xl text-green-600 ' href={singleData?.LiveSite} target="_blank">Live Site | </a> 
<a className='text-2xl text-green-600 ' href={singleData?.ClientCode} target="_blank">Client-Side Code | </a> 
<a  className='text-2xl text-green-600 ' href={singleData?.ServerCode} target="_blank">Server-Side Code</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default DetailedProject;