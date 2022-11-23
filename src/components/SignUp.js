import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBRow
}
    from 'mdb-react-ui-kit';

function SignUp() {
    return (
        <div>

            <MDBContainer fluid className='vh-100' id='signUpBackground'>
                <MDBRow className='d-flex justify-content-center align-items-center h-100 opacity-9'>
                    <MDBCard className='m-5 bg-white opacity-95' style={{ maxWidth: '600px' }}>
                        <MDBCardBody className='px-5'>
                            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                            <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' />
                            <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form1' type='text' />
                            <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
                            <MDBInput wrapperClass='mb-4' label='Username' size='lg' id='form3' type='text' />
                            <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form4' type='password' />
                            <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form5' type='password' />
                            <div className='d-flex flex-row justify-content-center mb-4'>
                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                            </div>
                            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default SignUp;