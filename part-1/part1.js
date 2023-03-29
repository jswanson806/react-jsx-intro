const FirstComponent = () => (
    <h1>My very first component!</h1>
)

const NamedComponent = ({name}) => (
    <p>My name is {name}.</p>
)

const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Jake" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))