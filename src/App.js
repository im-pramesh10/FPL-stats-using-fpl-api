import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/search';
import SearchDisplay from './components/searchDisplay';

function App() {
  let searchstr = "";
  const playersArray = [];
  const [players, setPlayers] = useState(playersArray);
  const [data, setData] = useState(null);
  const [displayvalue, setDV] = useState(null);

  useEffect(() => {
    fetch("https://corsproxy.io/?https%3A%2F%2Ffantasy.premierleague.com%2Fapi%2Fbootstrap-static%2F")
    .then(response => response.json())
    .then(data => setData(data))
    .catch(err => alert(err))
    console.log("effect");
    
  },[])
  console.log(data);

  const searchkeystroke = () => {
    setPlayers(playersArray);
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

  const addToPlayers = (id,web_name,team,status1,expected_goals,expected_assists,expected_assists_per_90,expected_goals_per_90,goals_scored,assists,selected_by_percent) => {
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      {
        id: id,
        name: web_name,
        team: team,
        status: status1,
        xG: expected_goals,
        xA: expected_assists,
        xGp90: expected_goals_per_90,
        xAp90: expected_assists_per_90,
        xGIp90: expected_assists_per_90+expected_goals_per_90,
        goals: goals_scored,
        assists: assists,
        selected_by: selected_by_percent,
      }
    
    ]);
  }
  
  return (
      <div className="App">
        <div className="header-wrapper">
          <h1 className="title">Welcome</h1>
          <h1 className="title">To</h1>
          <h1 className="title">FPL Statistics</h1>
        </div>
        <Search handleKeyUp={ searchkeystroke }/>
        <SearchDisplay displayvalue={ displayvalue } players={ players }/>
    </div>
  );
}

export default App;
