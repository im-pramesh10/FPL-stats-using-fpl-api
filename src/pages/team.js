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
          min={'0'}
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
    else { //first else
        if(loadingManager){ //nested
            renderElement = <>
            <div className='App'>
                <div className='loading'></div>
            </div></>
        }
        else{ // main that runs when there is id and notloading
            renderElement = <>
                <div className='Manager-div'>
                <section>Name: {managerData.player_first_name+' '+managerData.player_last_name}</section>
                <section>Team Name: {managerData.name}</section>
                <section>Total Points: {managerData.summary_overall_points}</section>
                <section>Rank: {managerData.summary_overall_rank}</section>
                <section>Country: {managerData.player_region_name}</section>
                </div>
                <button className='btn' style={{marginTop: '1em'}} onClick={changeID}>Change ID</button>
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
 