import { useRef, useState } from 'react';
import './team.css';

export default function Team() {
    const [change,setChange] = useState(false);
    const teamID=localStorage.getItem('teamID');
    const idRef = useRef();
    let renderElement;
    const handleIdClick = ()=>{
        localStorage.setItem('teamID',idRef.current.value);
        setChange(!change);
    }

    if (teamID===null){
        renderElement =   <>
        
        <h2>Enter Your ID:</h2>
          <input 
          ref={idRef}
          className='searchfield'
          type='search'
          placeholder="Enter your team's ID..."
          />
          <button className='btn' onClick={handleIdClick}>GO</button>
    
        <h2>Search By Name:</h2>
        <input 
            className='searchfield'
            type='search'
            placeholder="Search your team's name..."
        />
        <button className='btn'>Search</button>
    </>
    }
    else {
       renderElement = <p>Hello your id is {teamID}</p>
    }
    
    return (  
        <div className='Team'>
            {renderElement}
        </div>
    );
}
 