import logo from '../images/Roomy-logos_white.png'
import blackLogo from '../images/Roomy-logos_black.png'

const Nav = ({scale}) => {
    return (
        <nav>
            <div className='logo-container'>
                <img className='logo' src={scale ? blackLogo : logo} width="200" alt=''/>
            </div>
        </nav>
    )
}
export default Nav