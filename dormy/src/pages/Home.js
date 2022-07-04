import Nav from "../components/Navigation"
const Home = () => {

    const authToken = false
    const handleClicking = () => {
        console.log('clicked')
    }
    return (
        <>
        <Nav/>
        <div className="home">
            <h1>Swipe Right</h1>
            <button className="main-button" onClick={handleClicking}>
                {authToken ? 'Signout' : 'Create Account'}
            </button>
        </div>
        </>
    )
}
export default Home