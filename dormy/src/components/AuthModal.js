import {useState} from 'react'
const AuthModal = ({setShowModal}) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordConfirmation, setPasswordConfirmation] = useState(null)
    const [error, setError] = useState(null)
    const signup = true;
    console.log(email, password, passwordConfirmation)
    const handleClicking = () => {
        setShowModal(false)
    }
    const handleSubmission = (page) => {
        page.preventDefault()
        try{
            if(signup && (password !== passwordConfirmation)){
                setError('Your passwords do not match')
            }
        } catch (error) {
            console.log(error)
        }
    }
    const accReturn = true;
    return (
        <div className="modal-auth">
            <div className="exit-icon" onClick={handleClicking}>X</div>
            <h2>{accReturn ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
            <form onSubmit={handleSubmission}>
                <input
                    type = "Email"
                    id = "Email"
                    name="Email"
                    placeholder="Email"
                    required={true}
                    onChange={(page) => setEmail(page.target.value)}
                />
                <input
                    type = "Password"
                    id = "Password"
                    name="Password"
                    placeholder="Password"
                    required={true}
                    onChange={(page) => setPassword(page.target.value)}
                />
                {signup && <input
                    type = "Password"
                    id = "Password-Confirmation"
                    name="Password-Confirmation"
                    placeholder="Password Confirmation"
                    required={true}
                    onChange={(page) => setPasswordConfirmation(page.target.value)}
                />}
                <input className='submission-button' type="submit"/>
                <p>{error}</p>

            </form>
            MODAL
        </div>
    )
}
export default AuthModal