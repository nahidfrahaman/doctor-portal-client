import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../BookinModal/BookingModal';
import ApointmentOption from './ApointmentOption';

const AvailAbleAppointment = ({selectedDate}) => {
  
//   const [options, setOptions]= useState([]);
  const [treatment,setTreatment] = useState(null)
  
  const {data: options=[]}=useQuery({
    queryKey:['option'],
    queryFn:()=>fetch('http://localhost:5000/option')
    .then(res=> res.json())
  })


//    useEffect(()=>{
//      fetch('http://localhost:5000/option')
//      .then(res=> res.json())
//      .then(data=> {
        
//        setOptions(data)})
 
//     } ,[])


    

    return (
        <div>
            <p className='text-secondary text-center mt-12'>You selected date:{format(selectedDate, "PP")}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-5/6 mx-auto'>
               {
                options.map(option=> <ApointmentOption
                    setTreatment={setTreatment}
                    
                    data={option}
                key={option._id}
                ></ApointmentOption>)
               }
            </div>
            {
                treatment &&
                <BookingModal
                setTreatment={setTreatment}
            selectedDate={selectedDate}
            treatment={treatment}
            ></BookingModal>
            }
        </div>
    );
};

export default AvailAbleAppointment;