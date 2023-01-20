import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/search';
import SearchDisplay from './components/searchDisplay';
import Card from './components/card';

function App() {
  let searchstr = "";
  const [players, setPlayers] = useState([]);
  const [data, setData] = useState(null);
  const [displayvalue, setDV] = useState(null);

  const addToPlayers = (id,web_name,team,status1,expected_goals,expected_assists,expected_assists_per_90,expected_goals_per_90,goals_scored,assists,selected_by_percent) => {
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      {
        id: id,
        name: web_name,
        team: team,
        status: status1,
        xG: parseFloat(expected_goals).toFixed(3),
        xA: parseFloat(expected_assists).toFixed(3),
        xGp90: parseFloat(expected_goals_per_90).toFixed(3),
        xAp90: parseFloat(expected_assists_per_90).toFixed(3),
        xGIp90: parseFloat(expected_assists_per_90+expected_goals_per_90).toFixed(3),
        goals: goals_scored,
        assists: assists,
        selected_by: selected_by_percent,
      }
    
    ]);
  }

  // console.log(players != playersArray);
  // console.log(players.length);

  useEffect(() => {
    fetch("https://corsproxy.io/?https%3A%2F%2Ffantasy.premierleague.com%2Fapi%2Fbootstrap-static%2F")
    .then(response => response.json())
    .then((data) => {
      setData(data)
      initialilePlayers(data)
    })
    // .then(()=> initialilePlayers()) 
    .catch(err => alert(err))
     

    console.log("effect");
    
  },[])

  function initialilePlayers(data) {
    setDV("none");
    if (data != null) {
      let elem = data.elements[Math.floor(Math.random() * data.elements.length)];
      let team = data.teams[elem.team - 1].name;

      addToPlayers(elem.id, elem.web_name, team, elem.status, elem.expected_goals, elem.expected_assists, elem.expected_assists_per_90, elem.expected_goals_per_90, elem.goals_scored, elem.assists, elem.selected_by_percent);
      console.log("pl");
    }
  }
  console.log(data);

  const searchkeystroke = () => {
    setPlayers([]);
    searchstr = document.getElementById('search').value;
    console.log(searchstr);
    if(searchstr===""){
      setDV("none");
    } else {
      setDV(null);
    }
    data.elements.forEach(elem => {
      let name = searchstr;
      let pattern = new RegExp(`.*${name}.*`,'i');
      if (pattern.test(elem.web_name))
      {
        console.log("inside")
        let team = data.teams[elem.team-1].name;

        addToPlayers(elem.id, elem.web_name, team, elem.status, elem.expected_goals, elem.expected_assists, elem.expected_assists_per_90, elem.expected_goals_per_90, elem.goals_scored, elem.assists, elem.selected_by_percent)
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
        
        { (players.length !== 0 ) && <SearchDisplay displayvalue={ displayvalue } players={ players }/>}
        <Search handleKeyUp={ searchkeystroke }/>
        
        { (players.length !== 0 ) && <Card player={ players[0] }/>}
    </div>
  );
}

export default App;
