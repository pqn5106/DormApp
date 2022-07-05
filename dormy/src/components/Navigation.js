import whiteLogo from '../images/Roomy-logos_white.png'
import blackLogo from '../images/Roomy-logos_black.png'

const Nav = ({scale, authenticated}) => {
    return (
        <nav>
            <div className='logo-container'>
                <img className='logo' src={scale ? blackLogo : whiteLogo} width="200px" height="40px" alt=''/>
            </div>
            
            {!authenticated && <button className='navigation-button'>Log In</button>}

        </nav>
    )
}
export default Nav