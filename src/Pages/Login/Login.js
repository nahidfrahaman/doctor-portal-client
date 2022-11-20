import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";

const Login = () => {
  const {login}= useContext(AuthContext)
  const navigate= useNavigate()
  const location= useLocation()
  const from= location.state?.from?.pathname || '/'
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    login(data.email, data.password)
    .then(result=> {
      const user= result.user
      toast.success('user login success fully')
      console.log(user)
      navigate(from, {replace: true})
    })
    .catch((er)=>{
      toast.error(er.message)
    })
  };


  

  return (
    <div className="w-5/6 lg:w-1/3 mx-auto shadow-lg p-6  rounded-lg bg-white">
      <h2 className="text-2xl text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email",{ required: 'emial field is required' })}
            className="input input-bordered w-full "
          />{" "}
           {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
          <br></br>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", 
            { required: 'password field is required',
            minLength: {
              value: 6,
              message: "password must be 6 characters"
            }
            
          })}
            className="input input-bordered w-full "
          />{" "}
          {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
        </div>
        <p>forgate password?</p>
        {/* loging handle */}
        <input type="Submit" defaultValue='login' className="btn btn-accent w-full mt-5"/>
        <p className="text-center mt-1">New to doctors portal ? <span className="text-primary underline"><Link to='/signin'>create a accoutn</Link></span></p>
        <div className="divider">OR</div>
        {/* google */}
        <div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
