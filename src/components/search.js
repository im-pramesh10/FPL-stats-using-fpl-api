import "./search.css";

const search = ({ handleKeyUp, onBlur }) => {
    return (
        <div className="search-wrapper">
            <input 
                onKeyUp={() => handleKeyUp() } 
                type="search" 
                id="search" 
                placeholder="Search..." 
                onBlur={onBlur}
            />
        </div>    
        );
}

export default search;