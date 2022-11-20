import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";

const SignIN = () => {
  const { createUser,  upDateUser } = useContext(AuthContext);
  const { register,handleSubmit,formState: { errors },} = useForm();
  const navigate= useNavigate()

  const handleSignUP = (data) => {
    createUser(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success('CreateUser successfully')
        console.log(user);
        navigate('/')
        const userInfo={
           displayName: data.name
        }
        //update user is not working
        upDateUser(userInfo)
        .then(()=>{
         console.log('user is udapted')
         toast.success('user update succesfully')
         
        })
        .catch(er=>{
          toast.error(er.message)
          console.log(er)})
        // ...
      })
      .catch((error) => {
        console.log(error.message)
        
        // ..
      });
  };
 
  return (
    <div className="w-5/6 lg:w-1/3 mx-auto shadow-lg rounded-lg p-8 bg-white mb-8 ">
      <h2 className="text-2xl text-center">SignUp</h2>
      <form onSubmit={handleSubmit(handleSignUP)}>
        {/* register your input into the hook by invoking the "register" function */}

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            {...register("name", { required: true })}
            className="input input-bordered w-full "
          />
          {errors?.name && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            {...register("email", { required: "must be email required" })}
            className="input input-bordered w-full "
          />
          {errors?.email && (
            <span className="text-red-600">{errors?.email?.message}</span>
          )}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="text"
            {...register("password", {
              required: "required this field",
              minLength: {
                value: 6,
                message: "password must be 6 characteres",
              },
              pattern: {
                value:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#$@!%&*?]).{8,}$/,
                message:
                  "password at least 1 uppercase, 1 lowercase, 1 special character,1 numeric number",
              },
            })}
            className="input input-bordered w-full "
          />
          {errors?.password && (
            <span className="text-red-600">{errors?.password?.message}</span>
          )}
        </div>

        <input
          type="Submit"
          defaultValue="Signup"
          className="btn btn-accent w-full mt-5"
        />
        <p className="text-center mt-1">
          Already have account ?{" "}
          <span className="text-primary underline">
            <Link to="/login">login plz</Link>
          </span>
        </p>
      </form>
      <div className="divider">OR</div>
      {/* google */}
      <div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignIN;
