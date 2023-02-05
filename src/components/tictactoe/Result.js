function Result({winner}) {
    console.log(winner())
    if (winner()) {
        return (
            <div>The winner is {winner()}!</div>
        )
    } else {
        return (<></>)
    }
}

export default Result;