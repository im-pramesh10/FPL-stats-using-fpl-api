import "./card.css"

const card = ({ animate, player })=>{

    return (
        <div key={ animate } className="card-container">
        <div className="card">
        <div className="card-front">
                <div>Name: { player.name }</div>
           
                <div>Team: { player.team }</div>
           
            
                { (player.status==="a")&&<div>Status: <span style={{ color: "white", background: "green", padding: "2px", borderRadius: "6px" }}>Available</span></div>}
                { (player.status!=="a")&&<div>Status: <span style={{ color: "white", background: "red", padding: "2px", borderRadius: "6px" }}>Unavailable</span></div>}
            
            
                <div>{ player.selected_by }% Ownership</div>
        
                <table>
                    <thead>
                    <tr>
                        <td>Goals</td>
                        <td>{player.goals}</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Assists</td>
                        <td>{player.assists}</td>
                    </tr>
                    <tr>
                        <td>xG</td>
                        <td>{player.xG}</td>
                    </tr>
                    <tr>
                        <td>xA</td>
                        <td>{player.xA}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>xGp90</td>
                        <td>{player.xGp90}</td>
                    </tr>
                    <tr>
                        <td>xAp90</td>
                        <td>{player.xAp90}</td>
                    </tr>
                    <tr>
                        <td>xGI90</td>
                        <td>{player.xGIp90}</td>
                    </tr>
                    </tbody>
                </table>
                {/* <div>Position: {player.elements_type}</div> */}
           
            <div className="info">Hover for more info</div>
           
            </div>
            <div className="card-back">
                <div>Name: { player.name }</div>
                <div>Position: { player.elements_type }</div>
                <table>
                    <thead>
                    <tr>
                        <td></td>
                        <td>&nbsp;</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Total Points</td>
                        <td>{player.total_points}</td>
                    </tr>
                    <tr>
                        <td>Starts</td>
                        <td>{player.starts}</td>
                    </tr>
                    <tr>
                        <td>Minutes</td>
                        <td>{player.minutes}</td>
                    </tr>
                    <tr>
                        <td>Clean Sheets</td>
                        <td>{player.clean_sheets}</td>
                    </tr>
                    <tr>
                        <td>Goals Conceded</td>
                        <td>{player.goals_conceded}</td>
                    </tr>
                    <tr>
                        <td>Saves</td>
                        <td>{player.saves}</td>
                    </tr>
                    <tr>
                        <td>Yellows</td>
                        <td>{player.yellows}</td>
                    </tr>
                    <tr>
                        <td>Reds</td>
                        <td>{player.reds}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>

        
    );

}

export default card;