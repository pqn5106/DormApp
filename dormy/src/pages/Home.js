import Nav from "../components/Navigation"
const Home = () => {

    const authenticated = false
    const handleClicking = () => {
        console.log('clicked')
    }
    return (
        <>
        <Nav scale={false} authenticated={authenticated}/>
        <div className="home">
            <h1>Swipe Right</h1>
            <button className="main-button" onClick={handleClicking}>
                {authenticated ? 'Signout' : 'Create Account'}
            </button>
        </div>
        </>
    )
}
export default Home