import Nav from "../components/Navigation"
import AuthModal from "../components/AuthModal"
import { useState } from "react"

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const authenticated = false
    const handleClicking = () => {
        console.log('clicked')
        setShowModal(true)
    }
    return (
        <div className="nav-overlay">
        <Nav scale={false} authenticated={authenticated} setShowModal={setShowModal} showModal={showModal}/>
        <div className="home">
            <h1>Swipe Right</h1>
            <button className="main-button" onClick={handleClicking}>
                {authenticated ? 'Signout' : 'Create Account'}
            </button>

            {showModal && (
                <AuthModal setShowModal={setShowModal}/>
            )}

        </div>
        </div>
    )
}
export default Home