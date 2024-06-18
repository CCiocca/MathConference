import poster from '../assets/img/poster.jpg';

const HomeMain = () => {
  return (
    <div className='mx-5'>
        <div className="intro">
            <p>The main theme of this workshop is Enumerative Geometry, with particular emphasis on the geometry of moduli spaces and their refined invariants. The workshop consists in several plenary talks given by international experts, and aims to foster the collaboration among researchers interested in Enumerative Geometry in a broad sense.</p>
            <p>There will be a special journal section in RIMUT (Rendiconti dell’Istituto di Matematica dell’Università di Trieste. An International Journal of Mathematics), dedicated to the themes of the conference. Everyone is welcome to contribute (submissions go through the usual refereeing system, see https://rendiconti.dmi.units.it). The deadline for paper submissions is January 31, 2024.</p>
        </div>
        <div className='d-sm-flex align-items-start'>
            <section className='col-6'>
                <h2 className='ff-msr'>Speakers</h2>
                <h3>Mini-courses</h3>
                <ul>
                    <li>Denis Nesterov (University of Vienna)</li>
                    <li>Alexei Oblomkov (University of Massachusetts)</li>
                </ul>
                <h3>Talks</h3>
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
            </section>
            <div className="poster">
                <img src={poster} alt="conference poster"/>
            </div>
        </div>
        <section>
            <h2 className='ff-msr'>Organizing Committee</h2>
            <ul>
                <li>Sergej Monavari (EPFL, Lausanne, CH)</li>
                <li>Eric Chen (EPFL, Lausanne, CH)</li>
            </ul>
        </section>
        <section>
            <h2 className='ff-msr'>Sponsors</h2>
            <ul>
                <li>Bernoulli Center for Fundamental Studies</li>
                <li>Swiss National Science Foundation</li>
                <li>École Polytechnique Fédérale de Lausanne</li>
            </ul>
            <div className="sponsor-img">
                <img src="" alt="" />
            </div>
            
        </section>

    </div>
  )
}

export default HomeMain