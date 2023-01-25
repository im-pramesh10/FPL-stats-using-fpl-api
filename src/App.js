import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/search';
import SearchDisplay from './components/searchDisplay';
import Card from './components/card';
import { useFetchData } from './useFetchData.js';

function App() {
  const [players, setPlayers] = useState([]);
  const [displayValue, setDisplayValue] = useState("none");
  const [random, setRandom]= useState(true);
  const [animate, setAnimate]=useState(true);

  const [ error, data, fetchData ] = useFetchData("https://corsproxy.io/?https%3A%2F%2Ffantasy.premierleague.com%2Fapi%2Fbootstrap-static%2F");

  useEffect(()=>{
    fetchData();
  },[random]);


  const Randomize = () => {
    setRandom(!random);
    setAnimate(!animate);
  }

  const handleBlur = () => {
    setTimeout(()=>{
        setDisplayValue("none")
    },180)
  }

  const handleClick = (val) => {
    // console.log("val is "+val);
    // console.log(players)
    let arr = [];
    let player = players.find((prevPlayers)=> {
        if(prevPlayers.id === val){
           return prevPlayers;
            // console.log(players);
        } 
       });
    setAnimate(!animate);
    arr.push(player);
    setPlayers(arr);
  }

  const addToPlayers = (player, team) => {

    setPlayers((prevPlayers) => [
      ...prevPlayers,
      {
        id: player.id,
        name: player.web_name,
        team: team,
        status: player.status,
        xG: parseFloat(player.expected_goals).toFixed(3),
        xA: parseFloat(player.expected_assists).toFixed(3),
        xGp90: parseFloat(player.expected_goals_per_90).toFixed(3),
        xAp90: parseFloat(player.expected_assists_per_90).toFixed(3),
        xGIp90: parseFloat(player.expected_assists_per_90+player.expected_goals_per_90).toFixed(3),
        goals: player.goals_scored,
        assists: player.assists,
        selected_by: player.selected_by_percent,
        minutes: player.minutes,
        total_points: player.total_points,
        clean_sheets: player.clean_sheets,
        saves: player.saves,
        goals_conceded: player.goals_conceded,
        elements_type: player.element_type === 1 ? "GK" : 
        player.element_type === 2 ? "DF" : 
        player.element_type === 3 ? "MD" : 
        player.element_type === 4 ? "FW" : "unknown",
        starts: player.starts,
        yellows: player.yellow_cards,
        reds: player.red_cards,
      }
    ]);
  }

  // useEffect(() => {
  //   fetch("https://corsproxy.io/?https%3A%2F%2Ffantasy.premierleague.com%2Fapi%2Fbootstrap-static%2F")
  //   .then(response => response.json())
  //   .then((data) => {
  //     setData(data);
  //     initializePlayers(data);
  //   })
  //   .catch(err => alert(err));
  // },[random]);

  

  

  function initializePlayers(data) {
    setDisplayValue("none");
    setPlayers([]);
    if (data != null) {
      let randomPlayer = data.elements[Math.floor(Math.random() * data.elements.length)];
      let team = data.teams[randomPlayer.team - 1].name;
      addToPlayers(randomPlayer, team);
    }
  }

  const handleSearchKeyStroke = () => {
    setPlayers([]);
    setAnimate(!animate);
    let searchString = document.getElementById('search').value;

    if(searchString.length === 0){
      setPlayers([]);
      setDisplayValue("none");
      Randomize();
    } else {
      setDisplayValue(null);
    }

    data.elements.forEach(player => {
      let pattern = new RegExp(`.*${searchString}.*`,'i');
      if (pattern.test(player.web_name)) {
        let team = data.teams[player.team-1].name;
        addToPlayers(player, team);
    }
    });
} 
return (
    <div className="App">
      <div className="header-wrapper">
        {/* <img src='https://fantasy.premierleague.com/static/media/player-comp-5-1x.84357501.png' style={{ width: "360px",height: "240px" }}></img> */}
        <h1 className="title">Welcome</h1>
        <h1 className="title">To</h1>
        <h1 className="title">FPL Statistics</h1>
      </div>
      
      { (players.length !== 0 ) && <SearchDisplay handleClick={ handleClick } displayvalue={ displayValue } players={ players }/>}
      <Search handleKeyUp={ handleSearchKeyStroke }  onBlur={ handleBlur }/>
      
      { (players.length !== 0 ) && <Card animate={animate} player={ players[0] }/>}
       <button className='rand' onClick={ Randomize }>Randomize</button>
  </div>
);
}

export default App;