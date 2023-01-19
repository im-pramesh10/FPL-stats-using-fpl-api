import "./searchDisplay.css";

const searchDisplay = ({ displayvalue, players }) => {
    // console.log(players);
    return(
        <div 
            id="search-display"
            style={{ display: displayvalue }}
            >
            {/* { web_name_return({players}) } */}
            <>
            {players.map(player => {
                return <div key={player.id}>{player.name}</div>
            })}
        </>
        </div>
    );
}
// const web_name_return = ({players}) => {
//     return (
//         <>
//             {players.map(player => {
//                 return <div key={player.id}>{player.name}</div>
//             })}
//         </>
//     );
// }
export default searchDisplay;