import bc from "../assets/img/Bernoulli-Center-Logo-Black-Subtitle_1@4x.png";
import snsf from "../assets/img/SNF_logo_standard_web_color_pos_e.png";
import epfl from "../assets/img/EPFL_logo.png"

function FooterSponsors() {
  return (
    <div className='container'>
        <div className='logos row d-flex justify-content-around align-items-center'>
            <div className='col-2 logo'>
                <img src={bc} alt="Bernoulli Center logo" />
            </div>
            <div className='col-2 logo pt-4 pt-md-0'>
                <img src={snsf} alt="Swiss National Science Foundation logo" />
            </div>
            <div className='col-2 logo'>
                <img src={epfl} alt="École Polytechnique Fédérale de Lausanne logo" />
            </div>
        </div>
    </div>
  )
}

export default FooterSponsors