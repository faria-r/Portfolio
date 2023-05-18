import React from 'react';
import img1 from '../../assets/img/js.jpg'
import img2 from '../../assets/img/html.png'
const Skills = () => {
    return (
        <div>
        <div className="card  h-48 w-96 bg-base-100 shadow-xl mt-24 image-full -rotate-[19deg]">

<div className="card-body grid grid-cols-4 gap-3">
<div className='rounded-full'>
    <img src={img1} className='w-[48px]'></img>
</div>
<div className='rounded-full'>
    <img src={img1} className='w-[48px]'></img>
</div>
<div className='rounded-full'>
    <img src={img1} className='w-[48px]'></img>
</div>
<div className='rounded-full'>
    <img src={img1} className='w-[48px]'></img>
</div>
<div className='rounded-full'>
    <img src={img1} className='w-[48px]'></img>
</div>
<div className='rounded-full'>
    <img src={img1} className='w-[48px]'></img>
</div>
<div className='rounded-full'>
    <img src={img1} className='w-[48px]'></img>
</div>

</div>
</div>
    </div>
    );
};

export default Skills;