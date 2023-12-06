import React from 'react'

function Gallery() {
  return (
    <>
        <body class="main-layout inner_page">
  
      <div class="loader_bg">
         <div class="loader"><img src="images/loading.gif" alt="#"/></div>
      </div>
 

      <div class="full_bg">
       
         <div class="top_section">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-sm-12  logo_section">
                     <div class="full">
                        <div class="center-desk">
                           <div class="logo">
                              <a href="index.html"><img src="images/logo.png" alt="#" /></a>
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
                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                     </button>
                     <div class="collapse navbar-collapse" id="navbarsExample04">
                     <ul class="navbar-nav mr-auto">
                           <li class="nav-item active">
                              <a class="nav-link" href="/">Home</a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" href="/about">About</a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" href="/couple">Our Team</a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" href="/gallery">Gallery</a>
                           </li>
                           
                           <li class="nav-item">
                              <a class="nav-link" href="/contact">Contact Us</a>
                           </li>
                        </ul>
                     </div>
                  </nav>
               </div>
               <div class="col-md-2">
                  <div class="sealo">
                     <ul>
                        <li><a href="Javascript:void(0)"><i class="fa fa-search"></i></a></li>
                        <li><a href="Javascript:void(0)">Login</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   

      <div class="gallery">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Portfolio</h2>
                  </div>
               </div>
            </div>
            <div class="tz-gallery">
               <div class="row">
                  <div class="col-md-4">
                     <div class="row">
                        <div class="col-md-12 ma_bottom30">
                           <div class="lightbox">
                              <img src="images/G1.avif" alt="Bridge"></img>
                              <div class="view_main">
                                 <h3>Couple</h3>
                                 <a class="view_btn" href="images/g1.jpg"><i class="fa fa-search-plus" aria-hidden="true"></i></a>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-12 ma_bottom30">
                           <div class="lightbox">
                              <img src="images/G2.avif" alt="Bridge"></img>
                              <div class="view_main">
                                 <h3>Couple</h3>
                                 <a class="view_btn" href="images/g4.jpg"><i class="fa fa-search-plus" aria-hidden="true"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="row">
                        <div class="col-md-12 ma_bottom30">
                           <div class="lightbox">
                              <img src="images/G3.avif" alt="Bridge"></img>
                              <div class="view_main">
                                 <h3>Couple</h3>
                                 <a class="view_btn" href="images/g2.jpg"><i class="fa fa-search-plus" aria-hidden="true"></i></a>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-12 ma_bottom30">
                           <div class="lightbox">
                              <img src="images/G4.avif" alt="Bridge"></img>
                              <div class="view_main">
                                 <h3>Couple</h3>
                                 <a class="view_btn" href="images/g5.jpg"><i class="fa fa-search-plus" aria-hidden="true"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="row">
                        <div class="col-md-12 ma_bottom30">
                           <div class="lightbox">
                              <img src="images/G5.avif" alt="Bridge"></img>
                              <div class="view_main">
                                 <h3>Couple</h3>
                                 <a class="view_btn" href="images/g3.jpg"><i class="fa fa-search-plus" aria-hidden="true"></i></a>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-12 ma_bottom30">
                           <div class="lightbox">
                              <img src="images/G6.avif" alt="Bridge"></img>
                              <div class="view_main">
                                 <h3>Couple</h3>
                                 <a class="view_btn" href="images/g6.jpg"><i class="fa fa-search-plus" aria-hidden="true"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
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
  )
}

export default Gallery
