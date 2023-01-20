import "./card.css"

const card = ({ player })=>{

    return (
        <div className="card">
            <div className="row">
                <div className="card-item">Name: { player.name }</div>
            </div>
            <div>
                <div className="card-item">Team: { player.team }</div>
            </div>
            <div className="row">
                { (player.status==="a")&&<div className="card-item">Status: <span style={{ color: "white", background: "green", padding: "2px", borderRadius: "6px" }}>Available</span></div>}
                { (player.status!=="a")&&<div className="card-item">Status: <span style={{ color: "white", background: "red", padding: "2px", borderRadius: "6px" }}>Unavailable</span></div>}
            </div>
            <div className="row">
                <div className="card-item">{ player.selected_by }% Ownership</div>
            </div>
            <div className="card-item"></div>
            <div className="row">
                <div className="card-item">Goals: {player.goals}</div>
                <div className="card-item">Assists: {player.assists}</div>
            </div>
            <div className="row">
                <div className="card-item">xG: {player.xG}</div>
                <div className="card-item">xA: {player.xA}</div>
            </div>
            <div className="row">
                <div className="card-item">xGp90: {player.xGp90}</div>
                <div className="card-item">xAp90: {player.xAp90}</div>
            </div>
            <div className="row">
                <div className="card-item">xGIp90: {player.xGIp90}</div>
                {/* <div className="card-item">LIV</div> */}
            </div>
        </div>
    );

}

export default card;