import './ErrorPopUp.css'
const ErrorPopUp = ({display, errormessage, close}) => {
    return (  
        <div className="error-pop-up" style={{display: display}}>
            <div className='errdiv'>
                <button className='close' onClick={close}>X</button>
                <div className='error-content-div'>
                    <div className='errorMessage'>
                        {errormessage}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ErrorPopUp;