import React from 'react';
import img1 from '../../../assets/images/people1.png';
import img2 from '../../../assets/images/people2.png';
import img3 from '../../../assets/images/people3.png';
import Review from './Review';

const Reviews = () => {
    const datas= [
        {
            id: 1,
            img:img1 ,
            discirption: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            authorName: 'Winson Herry' ,
            location: 'califonia'
        },
        {
            id: 2,
            img:img2 ,
            discirption: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            authorName: 'Liplse' ,
            location: 'califonia'
        },
        {
            id: 3,
            img:img3 ,
            discirption: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            authorName: 'Angle', 
            location: 'brasil'
        },
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                datas.map(data=> <Review
                data={data}
                key={data.id}></Review>)
            }
        </div>
    );
};

export default Reviews;