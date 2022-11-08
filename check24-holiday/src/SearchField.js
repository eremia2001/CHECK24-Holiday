import "./SearchField.css"

function SearchField()
{
    return(
        <div className="mainBody">

            <div className="searchField">
                <div className="searchField-horInput">

                    <div className="inputContainer">
                    <input className="input" type="text" placeholder="Alle Reiseziele zum entdecken" />
                    </div>

                    <div className="inputContainer">
                    <input className="input" type="text" placeholder="Deutschland - alle Flughäfen" />
                    </div>

                    <div className="inputContainer">
                    <input className="input" type="text" placeholder="Alle Reiseziele zum entdecken" />
                    </div> 
                </div>
  
                <div className="searchField-horInput">
                    <div className="inputContainer">
                    <input className="input" type="text" placeholder="Reisedauer" />
                    </div>

                    <p>zwischen</p>

                    <div className="inputContainer">
                    <input className="input" type="text" placeholder="früheste Hinreise" />
                    </div>
                    <p>und</p>

                    <div className="inputContainer">
                    <input className="input" type="text" placeholder="späteste Hinreise" />
                    </div> 

                    <button className="searchField-button">Reise finden</button>
                    
                </div>



            </div>
            
        </div>
        
    )
}

export default SearchField