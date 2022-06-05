import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(2);
  const {name,job,image,text} = people[index];
  const checkNumber = (number) =>{
    if(number > people.length - 1){
      return 0;
    }
    if(number < 0){
      return people.length - 1; 
    }
    return number; 
  };

  const nextPerson = ()=> {
    setIndex((index) => {
      let newindex = index + 1;
      return checkNumber(newindex);
    });
  };
  // const nextPerson = ()=> {
  //   setIndex(index+1);
  // };
  const prevPerson = ()=> {
    setIndex((index) => {
      let newindex = index - 1;
      return checkNumber(newindex);
    });
  };

  const randomPerson = () => {
    let radnomNumber = Math.floor(Math.random() * people.length);
    if(radnomNumber ===  index){
      radnomNumber = index + 1;
    }
     setIndex(checkNumber(radnomNumber));
  };
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className = 'person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className="button-container">
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft></FaChevronLeft>
      </button>
      <button className='prev-btn' onClick={nextPerson}>
        <FaChevronRight></FaChevronRight>
      </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>Surprise ME</button>
    </article>
  );
};

export default Review;
