import './App.css';
import data from './data.json';
import { BsArrowDown } from 'react-icons/bs';
import { Rating } from '@mui/material'
import { useState } from 'react';

function App() {


  const [state, setState] = useState(0);
  
  const [degree, setDegree] = useState([200, 235, 270, 305, 340]);


  const handlePreviousRotation = () =>
  {
    const interviewer = document.querySelectorAll('.interviewer');
    interviewer.forEach((curr, index) => 
    {
      degree[index] = degree[index] - 35;
      if (degree[index] < 200) {
        degree[index] = 340;
      }
      curr.style.transform = `rotate(+${degree[index]}deg) translateX(300px)`;
    });
  }


  const handleNextRotation = () => 
  {
    const interviewer = document.querySelectorAll('.interviewer');
    interviewer.forEach((curr, index) => 
    {
      degree[index] = degree[index] + 35;
      if (degree[index] >= 360) degree[index] = 200;
      curr.style.transform = `rotate(+${degree[index]}deg) translateX(300px)`;
    });
  }

  
  const userRotationPrev = () => 
  {
    const profile = document.querySelector('.interviewer-info');
    profile.style.transition = 'all 0.5s ease-in-out';
    profile.style.transform = 'translate(-50%, 50%) rotate(-50deg) scale(0.7)';
    profile.classList.add('fade');
    setTimeout(() => 
    {
      profile.style.transform = 'translate(-50%, 50%) rotate(0deg) scale(1)';
    }, 500);
  }


  const userRotationNext = () => 
  {
    const profile = document.querySelector('.interviewer-info');
    profile.style.transition ='all 0.5s ease-in-out';
    profile.style.transform ='translate(-50%, 50%) rotate(50deg) scale(0.7)';
    profile.classList.add('fade');
    setTimeout(() => 
    {
      profile.style.transform = 'translate(-50%, 50%) rotate(0deg) scale(1)';
    }, 500);
  }

  
  const previousSlider = () => 
  {
    const interviewerName = document.querySelector('.slider-name');
    interviewerName.style.transition = 'all 0.5s ease-in-out';
    interviewerName.style.transform = 'translate(-50%, 270%) translateX(-100%)';
    interviewerName.classList.add('fade');
    setTimeout(() => 
    {
      interviewerName.style.transform = 'translate(-50%, 270%) translateX(0%)';
      interviewerName.classList.remove('fade');
    }, 500);
  }


  const nextSlider = () => 
  {
    const interviewerName = document.querySelector('.slider-name');
    interviewerName.style.transition = 'all 0.5s ease-in-out';
    interviewerName.style.transform = 'translate(-50%, 270%) translateX(100%)';
    interviewerName.classList.add('fade');
    setTimeout(() => 
    {
      interviewerName.style.transform = 'translate(-50%, 270%) translateX(0%)';
      interviewerName.classList.remove('fade');
    }, 500);
  }

  
  const downArrow = () => 
  {
    handlePreviousRotation();
    userRotationPrev();
    previousSlider();
    setTimeout(() => setState((state + 1) % data.length), 500);
    
  }


  const upArrow = () => 
  {
    handleNextRotation();
    userRotationNext();
    nextSlider();
    setTimeout(() => setState((state - 1 + 5) % data.length));
  }



  return (
    <div className="App">
      <div className='left-container'>
        <h2 className='rating'
        >{data[state]?.rating}</h2>
        <div className='rating-star'>
          <Rating name="read-only" value={data[state]?.star} precision={0.5} readOnly />
        </div>
        <h4 className='interviewer-name'>{data[state]?.name}</h4>
        <h5 className='interviewer-title'>{data[state]?.company}</h5>
        <p className='interviewer-bio'>{data[state]?.desc}</p>
        <button className='btn'>Book a session</button>
      </div>
      <div className='right-lower'>
        <div className='interviewer-info'                       >
          <img
            src={data[state]?.pic}
            alt={data[state]?.name}
            className='curr-interviewer-img'
          />
        </div>
        <div className='slider-name'                  >
          <h2 className='curr-interviewer-name'>{data[state]?.name}</h2>
        </div>
      </div>
      <div className='right-upper'>
        <div className='img-border'>
          <div className='interviewer'>
            <img
              src={data[3].pic}
              alt={data[3].name}
              className='interviewer-image '
            />
          </div>
          <div className='interviewer'>
            <img
              src={data[4].pic}
              alt={data[4].name}
              className='interviewer-image '
            />
          </div>
          <div className='interviewer'>
            <img
              src={data[0].pic}
              alt={data[0].name}
              className='interviewer-image '
            />
          </div>
          <div className='interviewer'>
            <img
              src={data[1].pic}
              alt={data[1].name}
              className='interviewer-image '
            />
          </div>
          <div className='interviewer'>
            <img
              src={data[2].pic}
              alt={data[2].name}
              className='interviewer-image '
            />
          </div>
        </div>
      </div>
      <div className='right-lower'>
        <div className='img-border-overlay'>
          <div className='img-border-inner-left'
            onClick={downArrow}>
            <BsArrowDown className='arrow-down' />
          </div>
          <div className='img-border-inner-right'
            onClick={upArrow}>
            <BsArrowDown className='arrow-down' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
