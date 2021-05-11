import React from 'react';
import './Portfolio.css';
import PortfolioItem from './PortfolioItem';
// import Picture1 from 'images/img-9.jpg'

function Portfolio() {
  return (
    <>
    <section class="wrapper">
    <div class="container-fostrap">
        <div>
            
            <h1 class="heading">
                Portfolio
            </h1>
        </div>
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-6">
                        <div class="card">
                            <a class="img-card" href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
                            <img src="../../images/img-9.jpg" />
                          </a>
                            <div class="card-content">
                                <h4 class="card-title">
                                    <a href="https://github.com/alexreveles/movie-hunt-app"> Movie Hunt App
                                  </a>
                                </h4>
                                <p class="">
                                html
                                <br></br>
                                css 
                                <br></br>
                                 materialize
                                <br></br>
                                javascript
                                <br></br>
                                Jquery
                                <br></br>
                                Server side APIs
                                </p>
                            </div>
                            <div class="card-read-more">
                                <a href="https://github.com/alexreveles/movie-hunt-app" class="btn btn-link btn-block">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                   
                   
                    <div class="col-xs-12 col-sm-6">
                        <div class="card">
                            <a class="img-card" href="https://github.com/GRech17/Movie-Thumbs">
                            <img src="../../images/img-2.jpg" />
                          </a>
                            <div class="card-content">
                                <h4 class="card-title">
                                    <a href="https://github.com/GRech17/Movie-Thumbs"> Movie Thumbs
                                  </a>
                                </h4>
                                <p class="">
                                Node &  Express
                                
                                <br></br>
                                MySQL &  Sequelize
                               <br></br>
                               Handlebars
                               <br></br>
                                Bcrypt & Dotenv
                                <br></br>
                              express-session
                              <br></br>
                               connect-session-sequelize
                                </p>
                            </div>
                            <div class="card-read-more">
                                <a href="https://codepen.io/wisnust10/full/ZWERZK/" class="btn btn-link btn-block">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
    
</section>



<section class="wrapper">
    <div class="container-fostrap">
       
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <a class="img-card" href="https://github.com/emilychhun/Note-Taker">
                            <img src="../../images/img-3.jpg" />
                          </a>
                            <div class="card-content">
                                <h4 class="card-title">
                                    <a href="https://github.com/emilychhun/Note-Taker"> Note Taker
                                  </a>
                                </h4>
                                <p class="">
                                nodemon
                                <br></br>
                                npm express
                                <br></br>
                                npm package called "uuid
                                <br></br>
                               
                                </p>
                            </div>
                            <div class="card-read-more">
                                <a href="https://github.com/alexreveles/movie-hunt-app" class="btn btn-link btn-block">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                   
                   
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <a class="img-card" href="https://github.com/emilychhun/socail-network-api">
                            <img src="../../images/img-4.jpg" />
                          </a>
                            <div class="card-content">
                                <h4 class="card-title">
                                    <a href="https://github.com/emilychhun/socail-network-api"> Social NetWork Api
                                  </a>
                                </h4>
                                <p class="">
                               
                                npm install
                                <br></br>
                                npm install mongoose
                               <br></br>
                               Express packages
                               <br></br>
                              
                                </p>
                            </div>
                            <div class="card-read-more">
                                <a href="https://codepen.io/wisnust10/full/ZWERZK/" class="btn btn-link btn-block">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <a class="img-card" href="https://github.com/emilychhun/mvc-tech-blog-chhun">
                            <img src="../../images/img-8.jpg" />
                          </a>
                            <div class="card-content">
                                <h4 class="card-title">
                                    <a href="https://github.com/emilychhun/mvc-tech-blog-chhun">MVC Tech Blog 
                                  </a>
                                </h4>
                                <p class="">
                                mysql2 &  sequelize
                              <br></br>
                                dotenv
                                <br></br>
                                express-handlebars
                                </p>
                            </div>
                            <div class="card-read-more">
                                <a href="https://github.com/emilychhun/mvc-tech-blog-chhun" class="btn btn-link btn-block">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</section>
</>
  );
}

export default Portfolio;
