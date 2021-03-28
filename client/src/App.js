import React from 'react'
import GoogleLogin from 'react-google-login';

function App() {
 const responseGoogle=(response)=>{
    console.log(response)
    console.log(response.profileObj)
  }
  return (
    <div>
    <GoogleLogin
    clientId="your-clientId"
    buttonText="Login"
    onSuccess={(response)=>responseGoogle(response)}
    onFailure={(response)=>responseGoogle()}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  )
}

export default App
