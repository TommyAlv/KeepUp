// Sign Up Requirements
// Username
// Email
// Password

// Login Requirements:
// Username
// Password

// -- ABEL

import React from 'react'
import { form } from 'react'

function LoginSignUp() {
  return (
    <form>
        <div className='form-inner'>
            <h2>Login</h2>
            {/* ERROR! */}
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name'/>
        </div>
        <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email'/>
        </div>
        <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password'/>
        </div>
        <input type='submit' value='LOGIN'/>
    </form>
  )
}

export default LoginSignUp;