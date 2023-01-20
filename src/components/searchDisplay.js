import "./searchDisplay.css";

const searchDisplay = ({ displayvalue, players, handleClick }) => {
    // console.log(players);
    return(
        <div 
            id="search-display"
            style={{ display: displayvalue }}
            >
            {/* { web_name_return({players}) } */}
            <>
            {players.map(player => {
                return( 
                <div 
                className="button" 
                key={player.id.toString()} 
                onClick={()=>handleClick(player.id) } 
                >
                {player.name}
                </div>);
            })}
        </>
        </div>
    );
}
export default searchDisplay;