import { Button } from 'react-bootstrap'

const HeroSection = () => {
  return (
    // img changes in each page
    <div className='hero-section text-center mb-5 text-white ff-msr'> 
        <h3 className='fw-bold'>September 24-27, 2024</h3>
        <div className='my-3'>
            <h1 className='d-inline-block border border-5 border-white p-4 px-5 rounded-3 fw-bold'>Duality, Geometry and Physics</h1>
        </div>
        <h2 className='fw-bold text-white'>EPFL (Bernoulli Center), Lausanne</h2>
        <Button className='register-btn px-4 py-2 mt-4'>
          <a href='/registration' className='fw-bold'>Register Now</a>
        </Button>
    </div>
  )
}

export default HeroSection