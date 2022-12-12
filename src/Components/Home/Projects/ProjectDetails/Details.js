import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailedProject from './DetailedProject/DetailedProject';
import Slider from './Slider/Slider';


const Details = () => {
    const {id} = useParams()
const [projects,setProjects] = useState([])
useEffect(()=>{
    fetch(`https://portfolio-server-bay.vercel.app/details/${id}`)
    .then(res => res.json())
    .then(data => {
        setProjects(data)
        console.log(data)
    })
},[id])
const images = projects?.map(project =>project.image)
console.log(images)
    return (
        <div>
            <div>
         {
            <Slider images={images[0]}></Slider>
         }
        </div>
        <div>
        <div>
        <DetailedProject id={id}></DetailedProject>
        </div>
        </div>
        </div>
    );
};

export default Details;