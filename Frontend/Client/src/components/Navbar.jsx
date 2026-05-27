
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LogoutApi } from '../services/api';

const Navbar = () => {
  const navigate=useNavigate();
const storedAuth=JSON.parse(localStorage.getItem("auth"));
const handleLogout=async()=>{
  try{
    const response=await axios.post(LogoutApi,{},{
      withCredentials:true
    });
    if(!response){
      alert(response.data.message);
      return;
    }
   localStorage.removeItem(
      "auth"
    );
    alert("logout successfull");
    navigate("/");
  }catch(error){
    alert(error.response?.data?.message || "logout failed");
  }
  
}


  return (
    <div className='navbar-container'>

      <div className='left-navbar-container'>
        <img src="https://i.pinimg.com/originals/2b/8d/71/2b8d71511521494caa1b5160324e3838.jpg?nii=t" alt="img not found" />
        <h2>Welcome {storedAuth.user.name}</h2>
      </div>
      <div className='right-navbar-container'>
        <button className='logout-btn' onClick={handleLogout}>logout</button>
      </div>
      
    </div>
  )
  
}

export default Navbar
