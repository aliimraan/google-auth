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
    clientId="1009479810415-el4gr20tfk4dlt22ggj5agouaj6afrj2.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={(response)=>responseGoogle(response)}
    onFailure={(response)=>responseGoogle()}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  )
}

export default App
