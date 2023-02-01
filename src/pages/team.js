import { useRef, useState } from 'react';
import ErrorPopUp from '../components/ErrorPopUp';
import './team.css';

export default function Team() {
    const [change,setChange] = useState(false);
    const [popUp,setPopUp] = useState('none');
    const teamID=localStorage.getItem('teamID');
    const [errormessage,setErrorMessage]=useState('');
    const idRef = useRef();
    let renderElement;
    const closeErrorPopUp=()=>{
        setPopUp('none');
    }
    const handleIdClick = ()=>{
        if (idRef.current.value!==""){
            localStorage.setItem('teamID',idRef.current.value);
            setChange(!change);
        } else {
            setErrorMessage("Please, Only enter number as ID.");
            setPopUp('flex');
        }
    }

    const handleKeyUp=(e)=>{
        // console.log(e);
        if (e.code==="Enter"){
            handleIdClick();
            // console.log(idRef.current.value)
        }
    }
    const changeID=()=>{
        localStorage.removeItem('teamID');
        setChange(!change);
    }

    if (teamID===null){
        renderElement =   <>
        
        <h2>Enter Your ID:</h2>
          <input 
          ref={idRef}
          className='searchfield'
          type='number'
          placeholder="Enter your team's ID..."
          onKeyUp={handleKeyUp}
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
       renderElement = <>
       {teamID}
            <button className='btn' onClick={changeID}>Change ID</button>
       </>
    }
    
    return (  
        <>
        <ErrorPopUp display={popUp} errormessage={errormessage} close={closeErrorPopUp}/>
        <div className='Team'>
            {renderElement}
        </div>
        </>
    );
}
 