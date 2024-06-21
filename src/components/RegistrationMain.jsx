
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fas, far, fal } from '@awesome.me/kit-KIT_CODE/icons';


const RegistrationMain = () => {
  return (
    <div className='mx-5'>
        <h2 className='ff-msr'>Registration</h2>
        <p>The registration to the event is free but mandatory, please follow the <a href="https://docs.google.com/forms/d/e/1FAIpQLSceurhndWKw2h7N9nw_2xmBXcCTZU1h-UbUC5QsEPtXlgPapA/viewform?usp=sf_link">link</a>.
        <br /> We have limited funds to cover travel and accommodation expenses for young participants.</p>
        
        <div className='mt-5 d-flex align-items-center'>
            <div className="col-2">
                <i className="fa-solid fa-triangle-exclamation fa-beat"></i>
            </div>
            <div className="col-10 fst-italic">
                <h4 className='fw-bold'>Travel scam warning:</h4>
                <p>Some participants have been contacted by scammers pretending to be the "Travel Host Team" at EPFL and offering to arrange travel+accommodation in exchange for a fee. Please do not respond to these scam emails and always double check the sender of any email pertaining to this conference!</p>
            </div>
        </div>
                

        
    </div>  
    )
}

export default RegistrationMain