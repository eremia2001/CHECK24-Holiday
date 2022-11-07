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
            </div>
            
        </div>
        
    )
}

export default SearchField