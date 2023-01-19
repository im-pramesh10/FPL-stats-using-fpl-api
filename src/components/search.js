import "./search.css";

const search = ({ handleKeyUp }) => {
    return (
        <div className="search-wrapper">
            <input 
                onKeyUp={() => handleKeyUp() } 
                type="search" 
                id="search" 
                placeholder="Search..." 
            />
        </div>    
        );
}

export default search;