import React from 'react';
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import Information from './Information';


const Informations = ({data}) => {
   
    const datas = [
        {
            id: 1,
            img:clock,
            name:"Opening Hours",
            discription: 'Lorem Ipsum is simply dummy text of the pri',
            bgClass:'bg-primary' 
        },
        {
            id: 2,
            img:marker,
            name:"Visit our location",
            discription: 'Brooklyn, NY 10036, United States',
            bgClass:'bg-accent'
        },
        {
            id: 3,
            img:phone,
            name:"Contact us now",
            discription: '+000 123 456789',
            bgClass:'bg-primary'
        },
    ]


    return (
        <div className='grid lg:grid-cols-3 gap-6 mt-6'>
            {
                datas.map(data=> <Information 
                data={data}
                key={data.id}
                ></Information>)
            }
        </div>
    );
};

export default Informations;