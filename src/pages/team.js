import { useEffect, useRef, useState } from 'react';
import ErrorPopUp from '../components/ErrorPopUp';
import { useFetchData } from '../hooks/useFetchData';
import './team.css';

export default function Team() {
    const [change,setChange] = useState(false);
    const [popUp,setPopUp] = useState('none');
    const teamID=localStorage.getItem('teamID');
    const [errormessage,setErrorMessage]=useState('');
    const [loadingManager, errorManager, managerData, fetchManagerData]=useFetchData(`https://corsproxy.io/?`+  encodeURIComponent(`https://fantasy.premierleague.com/api/entry/${teamID}/`));
    const idRef = useRef();
    let renderElement;

    useEffect(()=>{
        if(teamID!==null){
        fetchManagerData();
        }
    },[teamID])
    console.log(managerData);

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
          <h2>How to Get your ID?</h2>
          <ul>
          <li>Login to your Fantasy Premier League account and go to your points section. Then the url should look like below: </li>
          <p style={{color: 'limegreen'}}>https://fantasy.premierleague.com/entry/$id/event/21</p>
          <li>Now copy the number in place of $id which your team's id.</li>
          </ul>
    </>
    }
    else {
        if(loadingManager){
            renderElement = <>
            <div className='App'>
                <div className='loading'></div>
            </div></>
        }
        else{
            renderElement = <>
            {teamID}
                    <button className='btn' onClick={changeID}>Change ID</button>
       </>}
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
 