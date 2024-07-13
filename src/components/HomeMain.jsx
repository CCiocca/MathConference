import poster from '../assets/img/poster.jpg';

const HomeMain = () => {
  return (
    <div className='main'>
        <div>
        <h2 className='section-title text-center'>Overview</h2>
            <p>This one-week workshop aims to foster exchange of ideas between mathematicians and physicists working on the various aspects of algebraic/symplectic geometry, mathematical physics and related themes, as well as to bring together both world experts and aspiring young researchers working in the area(s).
            </p>
        </div>
        <div className='d-sm-flex align-items-start'>
            <section className='col-6'>
                <div className='home-section'>
                    <h2 className='section-title'>Speakers</h2>
                    <h3 className='color-blue'>Mini-courses</h3>
                    <ul>
                        <li>Denis Nesterov (University of Vienna)</li>
                        <li>Alexei Oblomkov (University of Massachusetts)</li>
                    </ul>
                    <h3 className='color-blue'>Talks</h3>
                    <ul>    
                        <li>Anna Barbieri (University of Verona)</li>
                        <li>Tommaso Botta (Columbia University)</li>
                        <li>Ben Davison (University of Edinburgh)</li>
                        <li>Veronica Fantini (IHES)</li>
                        <li>Nadir Fasola (University of Sheffield)</li>
                        <li>Oscar Kivinen (Aalto University)</li>
                        <li>Ana Peón-Nieto (University of Birmingham)</li>
                        <li>Yannik Schuler (University of Sheffield)</li>
                    </ul>
                </div>
                <div className='home-section'>
                    <h2 className='section-title'>Organizing Committee</h2>
                    <ul>
                        <li>Sergej Monavari (EPFL, Lausanne, CH)</li>
                        <li>Eric Chen (EPFL, Lausanne, CH)</li>
                    </ul>
                </div>
                <div className='home-section'>
                    <h2 className='section-title'>Sponsors</h2>
                    <ul>
                        <li>Bernoulli Center for Fundamental Studies</li>
                        <li>Swiss National Science Foundation</li>
                        <li>École Polytechnique Fédérale de Lausanne</li>
                    </ul>
                </div>
            </section>

            <div className="poster">
                <img src={poster} alt="conference poster"/>
            </div>


        </div>
        
    </div>
  )
}

export default HomeMain