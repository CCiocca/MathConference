import { Button } from 'react-bootstrap'

const HeroSection = () => {
  return (
    // img changes in each page
    <div className='hero-section text-center mb-5 text-white ff-msr'> 
        <h3 className='fw-bold'>2-5 May 2023</h3>
        <div className='my-3'>
            <h1 className='d-inline-block border border-5 border-white p-4 px-5 rounded-3 fw-bold'>Math Conference</h1>
        </div>
        <h2 className='fw-bold'>SISSA, Trieste</h2>
        <Button className='register-btn px-4 py-2 mt-4'>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSceurhndWKw2h7N9nw_2xmBXcCTZU1h-UbUC5QsEPtXlgPapA/viewform?usp=sf_link' className='fw-bold'>Register Now</a>
        </Button>
    </div>
  )
}

export default HeroSection