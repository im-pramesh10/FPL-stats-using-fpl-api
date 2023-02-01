import './team.css'
const team = () => {
    return (  
        <div className='Team'>
            
            <>
                <h2>Enter Your ID:</h2>
                <input 
                    className='searchfield'
                    type='search'
                    placeholder="Enter your team's ID..."
                />
            </>
            <>
                <h2>Search By Name:</h2>
                <input 
                    className='searchfield'
                    type='search'
                    placeholder="Search your team's name..."
                />
            </>
        
        </div>
    );
}
 
export default team;