import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/search';
import SearchDisplay from './components/searchDisplay';
import Card from './components/card';
import { useFetchData } from './useFetchData.js';

export default function App() {

    const [players, setPlayers] = useState([]);
    const [ error, data, fetchData ] = useFetchData("https://corsproxy.io/?https%3A%2F%2Ffantasy.premierleague.com%2Fapi%2Fbootstrap-static%2F");

    useEffect(()=>{
        fetchData();
    },[]);
    

    console.log(data);
    return <p>Hello</p>


}