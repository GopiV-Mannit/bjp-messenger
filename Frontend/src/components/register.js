import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLocationPin, faKey, faEnvelope, faBriefcase, faPhone, faEye, faEyeSlash, faMessage, faLock, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { SERVER_URL } from './config';
import logo from '../assets/sidebarlogo.jpg';
// import wp from '../assets/wp.png';
function Register() {
  const navigate = useNavigate();
  const [user, userchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  var    [mobile, mobilechange] = useState("");
  const [posting, postingchange] = useState("");
  const [msgCount, msgCountChange] = useState("");
  const [password, passwordchange] = useState("");
  const [conformpassword, conformpasswordchange] = useState("");
  const [dob, setBirthDate] = useState("");
  const [location, locationchange] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };
  const IsValidate = () => {
    let isproceed = true;
    if (user === '' && name === '' && email === '' && mobile === '' && posting === '' && password === '' && msgCount === '' && conformpassword === '' && dob === '' && location === '') {
      isproceed = false;
    }
    else if(password!==conformpassword)
    {
      isproceed = false;
      toast.warning("Password Aren't Match", { autoClose: 1000 });
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      isproceed = false;
      toast.warning("Invalid Email Address", { autoClose: 1000 });
    }
    return isproceed;
  }
  const handleSubmit = (e) => {
    mobile="91"+mobile;
    
    e.preventDefault();
    let dobj = {
      user,
      mobile,
      email,
      posting,
      msgCount,
      password,
      location,
      dob,
    };
    if (IsValidate()) {
      fetch(`${SERVER_URL}api/register`, {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(dobj)
      }).then((res) => {
        if (res.status === 204) {
          toast.error('User Exists', { autoClose: 1000 });
        }
        else if (res.status === 200) {
          toast.success('Registered successfully.', { autoClose: 1000 });
          userchange("");
          namechange("");
          mobilechange("");
          emailchange("");
          postingchange("");
          msgCountChange("");
          passwordchange("");
          conformpasswordchange("");
          setBirthDate("");
          locationchange("");
        }
      }).catch((err) => {
        toast.error('Failed :' + err.message);
      });
    }
  }
  return (
    <div className="cont bjpimage">
      <div className="flex flex-row justify-end items-center h-screen mx-20">
        {/* <img src={wp} className='w-[300px] h-[300px]' alt='img'/> */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mt-3 pb-3  h-full w-[350px] items-center bg-[#00a650] rounded-3xl shadow-5xl border-r-0 border-b-0 border-opacity-30">
            <div className="flex flex-col items-center justify-center  ">
              <div className=" p-1 rounded-full m-2">
                <div className="rounded-full m-1">
                  <img className="h-10 w-15 p-2 rounded-full shadow-[0px_0px_15px] shadow-white" src={logo} alt="user" />
                </div>
              </div>
              <div className="p-3">
                <p className="text-[18px] text-[#fff]"> Register Here</p>
              </div>
            </div>
            <div className="flex flex-col space-y-[24px] mt-5">
              <div className=' flex flex-row space-x-3'>

                <FontAwesomeIcon icon={faUser} className='text-[#fff] mt-1' />

                <input value={user} onChange={e => userchange(e.target.value)} type="text" placeholder="Enter username" className="text-[15px] w-[215px]  text-sm   text-[#fff] placeholder-[#fff] bg-transparent focus:outline-none border-b-[1px] border-[#fff] required"
                  required
                  pattern=".*\S+.*"
                />
              </div>
              <div className="flex flex-row space-x-3">

                <FontAwesomeIcon icon={faCalendarDays} className='text-[#fff] mt-1' />
                <div className="relative">
                  <DatePicker
                    selected={dob}
                    onChange={date => setBirthDate(date)}
                    placeholderText="Date of Onboarding"
                    showYearDropdown
                    showMonthDropdown
                    scrollableMonthYearDropdown={false}
                    scrollableYearDropdown={false}
                    dateFormat="dd/MM/yyyy"
                    className="text-[15px] w-[215px] text-sm text-[#fff] placeholder-[#fff] bg-transparent focus:outline-none border-b-[1px] border-[#fff]"
                  />
                </div>
              </div>
              <div className="flex flex-row space-x-3">

                <FontAwesomeIcon icon={faEnvelope} className='text-[#fff] mt-1' />

                <input value={email} onChange={e => emailchange(e.target.value)} type="text"  placeholder="Enter email" className="w-[215px] text-sm text-[#fff] placeholder-[#fff] bg-transparent focus:outline-none border-b-[1px] border-[#fff]"
                  required
                  pattern=".*\S+.*"
                />
              </div>
              <div className="flex flex-row space-x-3">

                <FontAwesomeIcon icon={faPhone} className='text-[#fff] mt-1' />

                <input value={mobile} onChange={e => mobilechange(e.target.value)} required type="text"  maxLength={10} placeholder="Enter Mobile Number"  className="w-[215px] text-sm text-[#fff]  placeholder-[#fff] bg-transparent focus:outline-none border-b-[1px] border-[#fff]" />
              </div>
              <div className="flex flex-row space-x-3">

                <FontAwesomeIcon icon={faBriefcase} className='text-[#fff] mt-1' />

                <input value={posting} onChange={e => postingchange(e.target.value)} type="text" placeholder="Enter Posting" className="w-[215px] text-sm text-[#fff] placeholder-[#fff]  bg-transparent focus:outline-none border-b-[1px] border-[#fff]" />
              </div>
              <div className="flex flex-row space-x-3">
                <FontAwesomeIcon icon={faLock} className='text-[#fff] mt-1' />
                <div>
                  <input value={password} onChange={e => passwordchange(e.target.value)}  placeholder="Password" type={showPassword1 ? 'text' : 'password'} className="w-52 text-sm  text-[#fff]  placeholder-[#fff] bg-transparent focus:outline-none  border-b-[1px] border-[#fff]" />
                  <button
                    type="button"
                    className=" absolute   top-1/10  transform -translate-y-[1.5px]   cursor-pointer  focus:outline-none border-b-[1px] border-[#fff]"
                    onClick={togglePasswordVisibility1}
                  >
                    <FontAwesomeIcon
                      icon={showPassword1 ? faEyeSlash : faEye}
                      className="text-[#fff] h-3"
                    />
                  </button>
                </div>
              </div>
              <div className="flex flex-row space-x-3">

                <FontAwesomeIcon icon={faKey} className='text-[#fff] mt-1' />
                <div>
                  <input value={conformpassword} onChange={e => conformpasswordchange(e.target.value)} type={showPassword ? 'text' : 'password'} placeholder="Conform Password" className=" w-52 text-sm text-[#fff]  placeholder-[#fff] bg-transparent focus:outline-none border-b-[1px] border-[#fff] " />
                  <button
                    type="button"
                    className=" absolute   top-1/10  transform -translate-y-[1.5px]   cursor-pointer  focus:outline-none border-b-[1px] border-[#fff]"
                    onClick={togglePasswordVisibility}
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      className="text-[#fff] h-3"
                    />
                  </button>
                </div>
              </div>
              <div className="flex flex-row space-x-3">
  <FontAwesomeIcon icon={faMessage} className='text-[#fff] mt-1' />
  
  <select value={msgCount} onChange={e => msgCountChange(e.target.value)} className="text-sm text-[#fff] placeholder-[#fff] bg-transparent focus:outline-none border-b-[1px] border-[#fff]">
    <option className='text-black' value="">Select Message Count</option>
    <option className='text-black' value="300">300 - Onboarding</option>
    <option className='text-black' value="500">500 - Silver</option>
    <option className='text-black' value="1100">1100 - Gold</option>
    <option className='text-black' value="3000">3000 - Platinum</option>
    <option className='text-black' value="6500">6500 - Diamond</option>
    <option className='text-black' value="15000">15000 - VIP</option>
  </select>
</div>

              <div className="flex flex-row space-x-3">

                <FontAwesomeIcon icon={faLocationPin} className='text-[#fff] mt-1' />
                <input value={location} onChange={e => locationchange(e.target.value)} type="text" placeholder="Location" className=" w-[225px] text-sm text-[#fff] placeholder-[#fff]  bg-transparent focus:outline-none border-b-[1px] border-[#fff]" />
              </div>
            </div>
            <div className="mt-7">
              <button className="text-[#fff] font-bold  h-8 w-40 ml-12 text-sm cursor-pointer font-poppins rounded-sm  px-5 bg-[#fb660d]" >
                Create Account
              </button>
              <div className='flex flex-row  p-4 space-x-[10px]'>
                <p className='text-[#fff] text-sm'>Already Have an account?</p>
                <button className=' text-sm text-[#fff]' onClick={() => { navigate('/') }}>Click here</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
