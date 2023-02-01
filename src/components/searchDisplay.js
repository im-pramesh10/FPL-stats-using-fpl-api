import "./searchDisplay.css";

const searchDisplay = ({ displayvalue, players, handleClick }) => {
    return(
        <div 
            id="search-display"
            style={{ display: displayvalue }}
            >
            <>
            {players.map(player => {
                return( 
                <button 
                className="button" 
                key={player.id.toString()} 
                onClick={()=>handleClick(player.id) } 
                >
                {player.name}
                </button>);
            })}
        </>
        </div>
    );
}
export default searchDisplay;