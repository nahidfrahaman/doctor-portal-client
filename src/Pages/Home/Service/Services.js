import React from 'react';
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import Service from './Service';

const Sevices = () => {
    const Servicesdatas = [
        {
            id: 1,
            img:cavity,
            name:"Cavity Filling",
            discription: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            bgClass:'bg-primary' 
        },
        {
            id: 2,
            img:whitening,
            name:"Teeth Whitening",
            discription: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            bgClass:'bg-accent'
        },
        {
            id: 3,
            img:fluoride,
            name:"Fluoride Treatment",
            discription: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            bgClass:'bg-primary'
        },
    ]
    return (
        <div className='mt-8'>
            <div className='text-center'>
                <h2 className='text-xl text-[#19D3AE] font-bold text-center'>OUR SERVICES</h2>
                <p className='text-4xl '>Services We Provide</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
            {
              Servicesdatas.map(srdata => <Service
              srdata={srdata}
              key={srdata.id}></Service>)  
            }
        </div>
        </div>
    );
};

export default Sevices;