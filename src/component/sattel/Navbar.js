import React from "react";

function Navbar() {
  return (
    <>
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
                      <a class="nav-link" href="index.html">
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
                        Couple
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/gallery">
                        Gallery
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="Javascript:void(0)">
                        RSVP
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="Javascript:void(0)">
                        Best People
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="Javascript:void(0)">
                        Gifts
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
