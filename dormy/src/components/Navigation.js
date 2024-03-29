import whiteLogo from '../images/Roomy-logos_white.png'
import blackLogo from '../images/Roomy-logos_black.png'

const Nav = ({scale, authenticated, showModal, setShowModal}) => {

    const handleClicking = () => {
        setShowModal(true)
    }

    return (
        <nav>
            <div className='logo-container'>
                <img className='logo' src={scale ? blackLogo : whiteLogo} width="200px" height="40px" alt=''/>
            </div>
            
            {!authenticated && !scale && 
                <button className='navigation-button' onClick={handleClicking} disabled={showModal}>
                    Log In
                </button>
            }

        </nav>
    )
}
export default Nav