const Tweet = ({username, name, date, message}) => (
    <div>
        <p>username: {username}</p>
        <p>name: {name}</p>
        <p>date: {date}</p>
        <p>message: {message}</p>
    </div>
)

const App = () => {
    let nowDate = new Date();
    let year = nowDate.getFullYear();
    let month = nowDate.getMonth();
    let day = nowDate.getDate();
return(
    <div>
        <Tweet username="Earth" name="Ellen" date={`${month}/${day}/${year}`} message="Hi, this is my first tweet"/>
        <Tweet username="Fire" name="Finny" date={`${month}/${day}/${year}`} message="Hi, this is my second tweet"/>
        <Tweet username="Water" name="Wanda" date={`${month}/${day}/${year}`} message="Hi, this is my third tweet"/>
    </div>
)
}

ReactDOM.render(<App />, document.getElementById("root"))