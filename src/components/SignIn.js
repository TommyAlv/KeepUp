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
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';

// function LoginSignUp() {
//   return (
//     <section className='vh-100'>
//       <form>
//         <div className='form-inner'>
//           <h2>Login</h2>
//           {/* ERROR! */}
//           <label htmlFor='name'>Name</label>
//           <input type='text' name='name' id='name' />
//         </div>
//         <div className='form-group'>
//           <label htmlFor='email'>Email</label>
//           <input type='email' name='email' id='email' />
//         </div>
//         <div className='form-group'>
//           <label htmlFor='password'>Password</label>
//           <input type='password' name='password' id='password' />
//         </div>
//       </form>

//     </section>

//   )
// }

// export default LoginSignUp;

function SignIn() {
  return (
    <div>

      <MDBContainer fluid className='vh-100' id='signInBackground'>

        <MDBRow className='d-flex justify-content-center align-items-center h-100 opacity-98'>
          <MDBCol col='12'>

            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
              <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Please enter your login and password!</p>

                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" className='text-white'/>
                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" className='text-white'/>

                <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                  Login
                </MDBBtn>

      

                <div>
                  <p className="mb-0 mt-5">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>

                </div>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </div>
  );

}
export default SignIn;
