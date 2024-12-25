import {useState} from "react";

function App()
{
    const messages = [
        "Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑",
    ];

    const buttonStyle = {
        backgroundColor: '#7950f2',
        color          : 'white',
        userSelect     : 'none'
    }

    const [step, setStep] = useState( 1 );
    const [isVisible, setIsVisible] = useState( true );

    function handlePrevious()
    {
        if (step > 1)
        {
            setStep( currentStep => currentStep - 1 );
        }
    }

    function handleNext()
    {
        if (step < messages.length)
        {
            setStep( currentStep => currentStep + 1 );
        }
    }

    function handleClose()
    {
        setIsVisible( currentIsOpen => !currentIsOpen );
    }

    return <>
        <button
            className = "close"
            onClick = { () => handleClose() }
        >
            &times;
        </button>
        { isVisible && <div className = "steps">
            <div className = "numbers">
                <span className = { step >= 1 ? 'active' : '' }>1</span>
                <span className = { step >= 2 ? 'active' : '' }>2</span>
                <span className = { step >= 3 ? 'active' : '' }>3</span>
            </div>

            <p className = "message">
                { messages[step - 1] }
            </p>

            <div className = "buttons">
                <button
                    style = { buttonStyle }
                    onClick = { handlePrevious }
                >
                    Previous
                </button>
                <button
                    style = { buttonStyle }
                    onClick = { handleNext }
                >
                    Next
                </button>
            </div>
        </div> }
    </>
}

export default App