import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment,setTreatment, selectedDate }) => {
  const date = format(selectedDate, "PP");
    
  const name= treatment?.name
  const slots= treatment?.slots
  
  const handlesumbmit=(event)=>{
    event.preventDefault();
    const form= event.target;
    const fullName= form.fullname.value
    const phone= form.phone.value
    const email = form.email.value
    const slots= form.slots.value;
    
    const orderData= {
      patientName: fullName,
      treatment: name,
      time: date,
      slots: slots,
      phone: phone,
      email: email,

    }
    //to do send data to the server and mongodb
    console.log(orderData)
    setTreatment(null)
  }
  

  
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div  className="modal">
        <div   className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handlesumbmit} className="grid grid-cols-1 gap-3 mt-5">
            <input
           
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full "
            />
            <select name="slots"  className="select select-bordered w-full ">
              
              {
                slots.map((slot,i)=> <option  value={slot}
                key={i} >
                    {slot}
                  </option> )
              }
            </select>
            <input
              name="fullname"
              type="text"
              placeholder="full Name"
              className="input input-bordered w-full "
            />
            <input
              name="phone"
              type="text"
              placeholder="Phonenumber"
              className="input input-bordered w-full "
            />
            <input
              name='email'
              type="email"
              placeholder="Email here"
              className="input input-bordered w-full "
              required
            />
            <input type="submit" className="w-full btn btn-accent" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
