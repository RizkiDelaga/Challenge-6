import React, { useEffect } from 'react';
import './Home.css';
import logo from '../assets/icons/logo.png';
import Toggler from '../assets/icons/Toggler.png';
import img_car from '../assets/images/img_car.png';
import img_service from '../assets/images/img_service.png';
import icon_professional from '../assets/icons/icon_professional.png';
import icon_24hrs from '../assets/icons/icon_24hrs.png';
import icon_price from '../assets/icons/icon_price.png';
import icon_complete from '../assets/icons/icon_complete.png';
import facebook from '../assets/icons/icon_facebook.png';
import instagram from '../assets/icons/icon_instagram.png';
import twitter from '../assets/icons/icon_twitter.png';
import mail from '../assets/icons/icon_mail.png';
import twitch from '../assets/icons/icon_twitch.png';
import { Link } from 'react-router-dom';


function Home() {
    useEffect(() => {
        document.title = "Rental Cars | Home";
    }, []);
      
    return (
        <React.Fragment>
            <div className="container-fluid">
                <section className="header-section">
                    <div className="container">
                        {/* <!-- ---------- NAVIGATION SECTION BEGIN ---------- --> */}
                        <section className="navigation-section">
                            <nav className="navbar navbar-expand-lg justify-content-end">
                                <div className="container fixed-position p-0">
                                    {/* <!-- Logo --> */}
                                    <Link className="navbar-brand nav-position ms-2" to="/"><img src={logo} alt="Logo" /></Link>
                                    {/* <!-- Toggle Navigate Interface Mobile --> */}
                                    <button className="navbar-toggler mt-5" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#mynavbar">
                                        <img src={Toggler} alt="" />
                                    </button>
                                    {/* <!-- Navbar List --> */}
                                    <div className="collapse navbar-collapse justify-content-end" id="mynavbar">
                                        <ul className="navbar-nav nav ms-auto navbar-right">
                                            <li className="nav-item ms-4">
                                                <a className="nav-link nav-position" href="#our-services-section">Our Services</a>
                                            </li>
                                            <li className="nav-item ms-4">
                                                <a className="nav-link nav-position" href="#why-us-section">Why Us</a>
                                            </li>
                                            <li className="nav-item ms-4">
                                                <a className="nav-link nav-position" href="#testimony-section">Testimonial</a>
                                            </li>
                                            <li className="nav-item ms-4">
                                                <a className="nav-link nav-position" href="#faq-section">FAQ</a>
                                            </li>
                                            <li className="nav-item ms-4">
                                                <Link to={'/register'}><button className="btn-register">Register</button></Link>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </nav>
                        </section>
                        {/* <!-- ---------- NAVIGATION SECTION END ---------- --> */}

                        {/* <!-- ---------- HERO SECTION BEGIN ---------- --> */}
                        <section className="hero-section">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 hero-desc">
                                    <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
                                        terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                                    <button className="btn-rent-now">Mulai Sewa Mobil</button>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 text-center p-0">
                                    {/* <!-- <div className="hero-image"> --> */}
                                    <img src={img_car} className="img-car" alt="Mobil" />
                                    {/* <!-- </div> --> */}

                                </div>
                            </div>
                        </section>
                        {/* <!-- ---------- HERO SECTION END ---------- --> */}
                    </div>
                </section>
            </div>


            <div className="container">
                {/* <!-- ---------- OUR SERVICES SECTION BEGIN ---------- --> */}
                <section className="our-services-section" id="our-services-section">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="img-service">
                                <img src={img_service} alt="our service" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 v-center">
                            <div className="desc-service">
                                <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                                <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang
                                    lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                                    wedding, meeting, dll.</p>
                                <ul>
                                    <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                                    <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                                    <li>Sewa Mobil Jangka Panjang Bulanan</li>
                                    <li>Gratis Antar - Jemput Mobil di Bandara</li>
                                    <li>Layanan Airport Transfer / Drop In Out</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ---------- OUR SERVICES SECTION END ---------- --> */}

                {/* <!-- ---------- WHY US SECTION BEGIN ---------- --> */}
                <section className="why-us-section" id="why-us-section">
                    <h2>Why Us?</h2>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4 center-div">
                            <div className="card why-us-card">
                                <img src={icon_complete} className="icon-why-us" alt="icon complete" />
                                <h4>Mobil Lengkap</h4>
                                <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4 center-div">
                            <div className="card why-us-card">
                                <img src={icon_price} className="icon-why-us" alt="icon Price" />
                                <h4>Harga Murah</h4>
                                <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4 center-div">
                            <div className="card why-us-card">
                                <img src={icon_24hrs} className="icon-why-us" alt="icon 24hours" />
                                <h4>Layanan 24 Jam</h4>
                                <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4 center-div">
                            <div className="card why-us-card">
                                <img src={icon_professional} className="icon-why-us" alt="icon professional" />
                                <h4>Sopir Profesional</h4>
                                <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ---------- WHY US SECTION END ---------- --> */}
            </div>

            <div className="container">
                {/* <!-- ---------- CTA BANNER SECTION BEGIN ---------- --> */}
                <section className="cta-banner-section">
                    <div className="row">
                        <div className="col-12">
                            <div className="call-to-action text-center">
                                <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.</p>
                                <button className="btn-rent-now">Mulai Sewa Mobil</button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ---------- CTA BANNER SECTION END ---------- --> */}

                {/* <!-- ---------- FAQ SECTION BEGIN ---------- --> */}
                <section className="faq-section" id="faq-section">
                    <div className="row">
                        {/* <!-- Text Opening --> */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="faq-intro">
                                <h2>Frequently Asked Question</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </div>
                        {/* <!-- Questions List --> */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="list-questions">
                                <div className="accordion accordion-flush" id="accordionFlushExample">

                                    <div className="accordion-box">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                                    aria-expanded="false" aria-controls="flush-collapseOne">
                                                    Apa saja syarat yang dibutuhkan?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse"
                                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Lorem ipsum dolor sit amet consectetur, adipisicing
                                                    elit. Perspiciatis dicta, aspernatur eum quas magnam quisquam facilis
                                                    quibusdam
                                                    molestiae adipisci amet voluptatibus dolore velit consequatur a nobis,
                                                    tempora
                                                    cumque qui vero! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Obcaecati nostrum eius corrupti, modi voluptates dolorum odio blanditiis
                                                    dicta
                                                    numquam, architecto ut beatae eos? Fugit quasi, consequatur itaque voluptas
                                                    autem ipsum.</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-box">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingTwo">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                                    aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    Berapa hari minimal sewa mobil lepas kunci?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                                aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Vel alias obcaecati aut voluptatum explicabo numquam dolorum dolores
                                                    laudantium
                                                    dolorem! Vitae debitis nobis molestiae minus adipisci quo iste in eum aut?
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-box">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingThree">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                                    aria-expanded="false" aria-controls="flush-collapseThree">
                                                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse"
                                                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Modi dolore, asperiores beatae dolores consequatur possimus facere? Modi quo
                                                    cupiditate quidem amet itaque nihil. Vero fugiat reprehenderit, odit
                                                    excepturi
                                                    sint amet.</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-box">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingFour">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                                    aria-expanded="false" aria-controls="flush-collapseFour">
                                                    Apakah Ada biaya antar-jemput?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseFour" className="accordion-collapse collapse"
                                                aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing
                                                    elit. Modi voluptatum reiciendis in, nisi saepe, velit veritatis dolorum qui
                                                    numquam eius tenetur rerum. Velit qui accusantium numquam itaque fuga. Quas,
                                                    beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
                                                    maiores
                                                    temporibus aperiam! Illum quod fugit, ipsum commodi assumenda dolorem est
                                                    eligendi, natus eveniet nisi soluta amet? Facilis quos ullam fuga. Lorem
                                                    ipsum
                                                    dolor sit amet consectetur, adipisicing elit. Earum nam, perspiciatis
                                                    aperiam
                                                    facere rem omnis non, nulla placeat veritatis quod totam nihil ut sit est.
                                                    Possimus, cupiditate adipisci. Nobis, cupiditate!</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-box">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingFive">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                                    aria-expanded="false" aria-controls="flush-collapseFive">
                                                    Bagaimana jika terjadi kecelakaan?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseFive" className="accordion-collapse collapse"
                                                aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Quae delectus blanditiis explicabo est recusandae. Repellendus perspiciatis
                                                    sunt
                                                    blanditiis ab perferendis asperiores beatae rem nostrum magnam molestiae,
                                                    dignissimos possimus, cupiditate quisquam.</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ---------- FAQ SECTION END ---------- --> */}

                {/* <!-- ---------- FOOTER SECTION BEGIN ---------- --> */}
                <section className="footer-section">
                    <div className="row">
                        {/* <!-- Address --> */}
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                            <div className="address">
                                <h5>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h5>
                                <h5>binarcarrental@gmail.com</h5>
                                <h5>081-233-334-808</h5>
                            </div>
                        </div>
                        {/* <!-- Navigation --> */}
                        <div className="col-lg-2 col-md-6 col-sm-12 mb-4">
                            <div className="navigation">
                                <ul>
                                    <li>
                                        <Link to="#our-services-section">Our services</Link>
                                    </li>
                                    <li>
                                        <Link to="#why-us-section">Why Us</Link>
                                    </li>
                                    <li>
                                        <Link to="#testimony-section">Testimonial</Link>
                                    </li>

                                    <li>
                                        <Link to="#faq-section">FAQ</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Sosmed --> */}
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                            <div className="sosmed">
                                <h5>Connect with us</h5>
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/"><img src={facebook} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/"><img src={instagram} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/"><img src={twitter} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="/"><img src={mail} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitch.tv/"><img src={twitch} alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Copyright --> */}
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="copyright">
                                <h5>Copyright Binar 2022</h5>
                                <img src={logo} alt="Binar Academy" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ---------- FOOTER SECTION END ---------- --> */}
            </div>
        </React.Fragment>
    );
}

export default Home;
