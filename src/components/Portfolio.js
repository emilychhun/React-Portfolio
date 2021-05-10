import React from 'react';
import './Portfolio.css';
import PortfolioItem from './PortfolioItem';
// import Picture1 from 'images/img-9.jpg'

function Portfolio() {
  return (
    <div className='cards cards1' id="Port">
      <h1 className="text1">Portfolio</h1>
      <div className='cards__container cards__container1'>
        <div className='cards__wrapper cards__wrapper1'>
          <ul className='cards__items cards__items1'>
            

          {/* <a href="https://github.com/alexreveles/movie-hunt-app"> */}
            <PortfolioItem
          
          a href="https://github.com/alexreveles/movie-hunt-app"  
          src='images/img-9.jpg'
              text='Movie hunt is an application where users can input a search of a movie title 
              and receive relevant information. Some of the information returned from the search
               includes the movie plot, year of release, rating, genre, and movie poster. This will 
               allow users to find the perfect movie to watch, however when an user is unsure of multiple
                movie searches they can refer back to the movie history and select a previous search to 
                retrieve the relevant information again. This application was made to help those movie 
                fanatics pick the right movie at home during COVID-19.'
              label='Movie Hunt App'
              path='/Portfolio'
    
            />
          
            <PortfolioItem 
              src='images/img-2.jpg'
              text=' Movie Thumbs is an application where users can rate movie selections and can add 
              liked movie to their personal list. Some of the information returned from the search includes
               the movie title, votes, and comments. This will allow users to find their favorite movie to 
               watch, when an user can go to "This or That" page. This application was made to help those movie 
               fanatics pick the right movie at home during COVID-19.'
              label='Movie Thumbs'
              path='/Portfolio'
            />
          </ul>
          <ul className='cards__items1' id="cards__items3">
            <PortfolioItem
              src='images/img-3.jpg'
              text=' Note Taker is simple note taking application. It designed to allows you to create an application
               that can be used to write, save and delete notes, and saving and retrieving note data from 
               a JSON file by using express backend.'
              label='Note Taker'
              path='/Portfolio'
            />
            <PortfolioItem
              src='images/img-4.jpg'
              text='This challenge is to build the front back end for an social network api that design by NoSQL
               databases that allow users to easily store and retrieve unstructured data, which can significantly
                improve performance for some application -- especially those that use a lot of data.'
              label='Social NetWork API'
              path='/Portfolio'
            />
            <PortfolioItem
              src='images/img-8.jpg'
              text='This challenge is to build the front end and back end for an MVC TechBlog site. 
              CMS-style blog site similar to a Wordpress site, where developers can publish their
               blog posts and comment on other developers’ posts as well. User will take a working 
               Express.js API and configure it to use Sequelize to interact with a MySQL database.'
              label='MVC Tech Blog'
              path='/Portfolio'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
