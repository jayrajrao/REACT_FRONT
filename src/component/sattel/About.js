import React from "react";

function About() {
  return (
    <>
      <body class="main-layout inner_page">
        <div class="loader_bg">
          <div class="loader">
            <img src="images/loading.gif" alt="#" />
          </div>
        </div>

        <div class="full_bg">
          <div class="top_section">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-12  logo_section">
                  <div class="full">
                    <div class="center-desk">
                      <div class="logo">
                        <a href="index.html">
                          <img src="images/logo.png" alt="#" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="myHeader" class="header diki">
          <div class="container">
            <div class="row">
              <div class="col-md-10 col-sm-12">
                <nav class="navigation navbar navbar-expand-md navbar-dark ">
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample04"
                    aria-controls="navbarsExample04"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarsExample04">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="/">
                          Home
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/about">
                          About
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/couple">
                        Our Team
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/gallery">
                          Gallery
                        </a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href="/contact">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div class="col-md-2">
                <div class="sealo">
                  <ul>
                    <li>
                      <a href="Javascript:void(0)">
                        <i class="fa fa-search"></i>
                      </a>
                    </li>
                    <li>
                      <a href="Javascript:void(0)">Login</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="about">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="titlepage text_align_center">
                  <h2>About Us</h2>
                </div>
              </div>
              <div class="col-md-10 offset-md-1">
                <div class="about_img text_align_center">
                  <figure>
                    <img src="images/mul2.jpg" alt="#" />
                  </figure>
                </div>
              </div>
              <div class="col-md-8 offset-md-2">
                <div class="about_img text_align_center">
                  <p style={{fontSize:25,    marginTop:150, color: "black", fontWeight:"bold"}}>
                    Siddhivinayak Infotech founded in 2012 as a Software Development
                    company having expertise in Technologies like PHP, .NET,
                    Android, iOS, Design, Front End Development, Database,
                    Python. We are having professional team of Full Stack
                    Developer, Web Designer, Web Content Strategist, SEO
                    Specialist, Project Manager with a wealth of experience in
                    successfully deploying complex website projects in a wide
                    variety of business sectors. We are doing Each and every
                    project with full enthusiasm and effectiveness. Our
                    experience and professional team work with fresh an d
                    innovative ideas. Our team has specialization in development
                    and maintenance of desktop Applications, Mobile Application,
                    websites, encompassing an array of technologies. We build
                    imaginative and innovative solutions for web based on rising
                    internet and web technologies in a moderate cost. Manifest
                    Infotech stand for providing quality services and solutions
                    for completing our clients goal and also for our people who
                    make possible to achieve future goals.Our technical support
                    and services are always with our client during project and
                    also after completing the project in the form of technical
                    support, maintenance and consulting services.
                  </p>
                  <a class="read_more" href="about.html">
                    About More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer">
            <div class="container">
               <div class="row border_bo1 ">
                  <div class="col-md-4">
                     <a class="logof" href="index.html"><img src="images/logo.png" alt="#"/></a> 
                     <form class="form_subscri">
                        <div class="row">
                           <div class="col-md-12">
                              <h3>Subscribe Now</h3>
                           </div>
                           {/* <div class="col-md-12">
                              <input class="subsrib" placeholder="Enter your email" type="text" name="Enter your email">
                           </div> */}
                           <div class="col-md-12">
                              <button class="subsci_btn">subscribe</button>
                           </div>
                        </div>
                     </form>
                  </div>
                  <div class="col-lg-2 col-md-4 col-sm-6">
                     <div class="infoma">
                        <h3>Technologies</h3>
                        <ul>
                           <li>Python</li>
                           <li>PHP</li>
                           <li>ASP.Net</li>
                           <li>Web design </li>
                           <li>Core java </li>
                           <li>Android</li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-lg-2 col-md-4 col-sm-6">
                     <div class="infoma">
                        <h3>Open Source</h3>
                        <ul>
                           <li>Express js</li>
                           <li>React js</li>
                           <li>Angular </li>
                           <li>Nest js  </li>
                           <li>Wordpress</li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-lg-2 col-md-4 col-sm-6">
                     <div class="infoma">
                        <h3>Strategies</h3>
                        <ul>
                           <li>Analyse & planning </li>
                           <li>Design & HTML</li>
                           <li>Development</li>
                           <li>Implementation </li>
                           <li>QA & Deploy </li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-lg-2 col-md-4 col-sm-6">
                     <div class="infoma">
                        <h3>Contact Us</h3>
                        <ul class="conta">
                           <li><i class="fa fa-map-marker" aria-hidden="true"></i>Locations 
                           </li>
                           <li><i class="fa fa-volume-control-phone" aria-hidden="true"></i>+91 9691253625</li>
                           <li> <i class="fa fa-envelope" aria-hidden="true"></i><a href="Javascript:void(0)"> jotgah@gmail.com</a></li>
                        </ul>
                        <ul class="social_icon">
                           <li><a href="Javascript:void(0)"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                           <li><a href="Javascript:void(0)"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                           <li><a href="Javascript:void(0)"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                           <li><a href="Javascript:void(0)"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div class="copyright">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <p>© 2023 All Rights Reserved__<a href="https://html.design/">--JAYRAJ RAO</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </body>
    </>
  );
}

export default About;
