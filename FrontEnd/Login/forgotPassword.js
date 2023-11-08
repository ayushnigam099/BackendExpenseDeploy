async function forgetPassword(e){
    e.preventDefault();
    
  try{
    const details={
        email: e.target.email.value
    }
    const response= await axios.post("http://54.197.148.201:3000/password/forgotpassword", details);
    if(response.status === 200)     
    {    
      
        alert("Reset Link Has Been Sent To Your Mail!")
    }
  }
  catch(err)
  {
    // console.log(err);
    if(err.response.status== 404)
    {
      alert(`${err.response.data.message}`);
       
    } else{
      alert(`${err}`);
      }
  }
}
