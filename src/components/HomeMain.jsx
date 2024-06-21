import poster from '../assets/img/poster.jpg';

const HomeMain = () => {
  return (
    <div className='mx-5'>
        <div>
        <h2 className='section-title text-center'>Overview</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minus voluptas, commodi velit reprehenderit alias laudantium itaque fugit eaque blanditiis culpa incidunt odio vero amet animi. Ullam quam provident commodi doloremque dolorem eos nulla quo odio perferendis, eius at natus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, rerum. Est ab facilis laudantium possimus, eligendi modi corporis quae. Repudiandae libero, omnis itaque est eum illo placeat cumque soluta. Quaerat, magni veniam recusandae iusto quam quod molestias, maxime amet ex vitae molestiae. Quia cupiditate reprehenderit hic rerum facere pariatur vero?</p>
        </div>
        <div className='d-sm-flex align-items-start'>
            <section className='col-6'>
                <h2 className='section-title'>Speakers</h2>
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
            <h2 className='section-title'>Organizing Committee</h2>
            <ul>
                <li>Sergej Monavari (EPFL, Lausanne, CH)</li>
                <li>Eric Chen (EPFL, Lausanne, CH)</li>
            </ul>
        </section>
        <section>
            <h2 className='section-title'>Sponsors</h2>
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