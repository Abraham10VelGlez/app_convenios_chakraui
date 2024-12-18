
import { AspectRatio, Box } from "@chakra-ui/react"
import { Theme } from "@chakra-ui/react"
import '../../public/css/style.css'
import '../../public/css/responsive.css'
import '../../public/css/bootstrap.css'
import Drawer from "./Drawer"

export default function Welcome_site() {

    return (

        <>
            <div className="top_container">

                <header className="header_section">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            <a className="navbar-brand" href="index.html">
                                <span>
                                    IGECEM
                                </span>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                    <ul className="navbar-nav  ">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="index.html"> Home <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="nav-link" href="about.html"> About </a>
                                        </li>

                                        <li className="nav-item ">
                                            <a className="nav-link" href="admission.html"> Admission </a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="why.html"> Why Us </a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.html">Contact Us</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>

                <section className="hero_section ">
                    <div className="hero-container container">
                        <div className="hero_detail-box">
                            <h1>
                                PORTAL DE GESTIÓN DE CONVENIOS
                            </h1>
                            <p>
                                Instituto de Información e Investigación Geográfica, Estadística y Catastral del Estado de México IGECEM
                            </p>
                            <div className="hero_btn-continer">
                               <Drawer></Drawer>
                            </div>
                        </div>
                        <div className="hero_img-container">
                            <div>
                                <img src="https://www.boletin.ai/wp-content/uploads/2024/06/convenio-de-la-haya-paises-firmantes.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            {/*  <div className="common_style">

                <section className="about_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="about_img-container">
                                    <img src="images/about.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about_detail-box">
                                    <h3>
                                        About our School
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    </p>
                                    <div className="">
                                        <a href="" className="call_to-btn btn_white-border">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="admission_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="admission_detail-box">
                                    <h3>
                                        Admission open
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    </p>
                                    <div className="">
                                        <a href="" className="call_to-btn btn_white-border">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="admission_img-container">
                                    <img src="images/admission.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="why_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="why_img-container">
                                    <img src="images/why.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="why_detail-box">
                                    <h3>
                                        Why learn on Fanadesh
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    </p>
                                    <div className="">
                                        <a href="" className="call_to-btn btn_white-border">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="determine_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="determine_detail-box">
                                    <h3>
                                        Datermine the right for you
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    </p>
                                    <div className="">
                                        <a href="" className="call_to-btn btn_white-border">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="determine_img-container">
                                    <img src="images/determine.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </div>


            <section className="client_section layout_padding">
                <h2 className="">
                    Testimonial
                </h2>
                <div className="container">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="client_img-box">
                                            <img src="images/client.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="client_detail-box">
                                            <h5>
                                                Alex Du
                                            </h5>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="client_img-box">
                                            <img src="images/client.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="client_detail-box">
                                            <h5>
                                                Alex Du
                                            </h5>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="client_img-box">
                                            <img src="images/client.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="client_detail-box">
                                            <h5>
                                                Alex Du
                                            </h5>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>



            <section className="contact_section ">

                <div className="container">

                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex justify-content-center d-md-block">
                                <h2>
                                    Contact Us
                                </h2>
                            </div>
                            <form action="">
                                <div className="contact_form-container">
                                    <div>
                                        <div>
                                            <input type="text" placeholder="Name" />
                                        </div>
                                        <div>
                                            <input type="email" placeholder="Email" />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Phone Number" />
                                        </div>
                                        <div className="mt-5">
                                            <input type="text" placeholder="Message" />
                                        </div>
                                        <div className="mt-5">
                                            <button type="submit">
                                                send
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </form>
                        </div>
                        <div className="col-md-6">
                            <div className="contact_img-box">
                                <img src="images/students.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
*/}
            <section className="info_section layout_padding-top">
                <div className="info_logo-box">
                    <h2>
                        Fanadesh
                    </h2>
                </div>
                <div className="container layout_padding2">
                    <div className="row">
                        <div className="col-md-3">
                            <h5>
                                About Us
                            </h5>
                            <p>
                                dolor sit amet, consectetur magna aliqua. Ut enim ad minim veniam, quisdotempor incididunt r
                            </p>
                        </div>
                        <div className="col-md-3">
                            <h5>
                                Useful Link
                            </h5>
                            <ul>
                                <li>
                                    <a href="">
                                        Video games
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Remote control
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        3d controller
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>
                                Contact Us
                            </h5>
                            <p>
                                dolor sit amet, consectetur magna aliqua. quisdotempor incididunt ut e
                            </p>
                        </div>
                        <div className="col-md-3">

                            <div className="subscribe_container">
                                <h5>
                                    Newsletter
                                </h5>
                                <div className="form_container">
                                    <form action="">
                                        <input type="email" placeholder="Enter your email" />
                                        <button type="submit">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="social_container">

                        <div className="social-box">
                            <a href="">
                                <img src="images/fb.png" alt="" />
                            </a>

                            <a href="">
                                <img src="images/twitter.png" alt="" />
                            </a>
                            <a href="">
                                <img src="images/linkedin.png" alt="" />
                            </a>
                            <a href="">
                                <img src="images/instagram.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="container-fluid footer_section">
                <p>
                    Copyright &copy; 2019 All Rights Reserved By
                    <a href="https://html.design/">Free Html Templates</a>
                </p>
            </section>




        </>


    );
}
