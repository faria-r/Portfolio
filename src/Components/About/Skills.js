import React from 'react';
import img1 from '../../assets/img/js.png'
import img2 from '../../assets/img/html.png'
import img3 from '../../assets/img/M.png'
import img4 from '../../assets/img/c.png'
import img5 from '../../assets/img/n.png'
import img6 from '../../assets/img/e.png'
import img7 from '../../assets/img/logo192.png'
import img8 from '../../assets/img/t.png'
import style from './style/animation.css'
const Skills = () => {
    return (
        <div>
        <div className="card  h-48 w-96 bg-white shadow-xl mt-24 image-full -rotate-[19deg]">

<div className="card-body grid grid-cols-4 gap-3">
<div className='rounded-full'>
    <img src={img7} className='w-[48px] spiner'></img>
</div>
<div className='rounded-full'>
    <img src={img3} className='w-[48px] spiner'></img>
</div>
<div className='rounded-full'>
    <img src={img5} className='w-[64px] spiner'></img>
</div>
<div className='rounded-full'>
    <img src={img6} className='w-[52px] spiner'></img>
</div>
<div className='rounded-full'>
    <img src={img8} className='w-[48px] spiner'></img>
</div>
<div className='rounded-full'>
    <img src={img1} className='w-[85px] spiner'></img>
</div>
<div className='rounded-full'>
    <img src={img4} className='w-[48px] spiner'></img>
</div>
<div className='rounded-full'>
    <img src={img2} className='w-[48px] spiner'></img>
</div>

</div>
</div>
    </div>
    );
};

export default Skills;