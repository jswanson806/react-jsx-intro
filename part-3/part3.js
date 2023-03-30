const Person = (props) => {
    let msg;
    let name;

    if(props.age >= 18) {
        msg = "Please go vote!"
    } else if (props.age < 18) {
        msg = "You must be 18"
    }

    if(props.name.length > 8){
        name = props.name.slice(0, 6)
    } else {
        name = props.name
    }



    return (
    <div>
        <p>Learn some information about this person.</p>
        <h3>{msg}</h3>
        <h3>Name: {name}</h3>
        <h3>Hobbies</h3>
        <ul>{props.hobbies.map(h => 
            (
                <li>{h}</li>
            )
        )}</ul>
    </div>
)};

const App = () => (
        <div>
            <Person name="Wanda" age={18} hobbies={["spacewalking", "basket weaving", "marble hunting"]} />
            <Person name="Fleetwood" age={16} hobbies={["Phase Shifting", "Flying", "Lasers"]} />
            <Person name="Fernando" age={25} hobbies={["Paper Airplanes", "Model Trains", "Stargazing"]} />
        </div>
    )

ReactDOM.render(<App />, document.getElementById("root"))