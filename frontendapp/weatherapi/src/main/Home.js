import React from 'react';
import img from '../images/homeimg.png';

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <img src={img} alt="homepage" width="1450" height="600" />
      <div style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'orange', fontSize: '40px' ,fontWeight:'bolder'}}>
          Clima Cast
       
      </div><br/><br/><br/>
      <div style={{ position: 'absolute', top: '60%', left: '10%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', fontSize: '40px' ,fontWeight:'bolder'}}>
      our Weather, Your Way
       
      </div>
    </div>
  );
}
