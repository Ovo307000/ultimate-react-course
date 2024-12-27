import {useState}  from "react";
import Button      from "./components/button/Button.jsx";
import StepMessage from "./components/Text/StepMessage.jsx";

export default function App()
{
    const taskDescriptions = [
        "Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑",
    ];

    const buttonStyle = {
        backgroundColor: '#7950f2',
        color          : 'white',
        userSelect     : 'none'
    }

    const [ step, setStep ] = useState( 1 );
    const [ isVisible, setIsVisible ] = useState( true );

    function moveBackward()
    {
        if (step > 1)
        {
            setStep( currentStep => currentStep - 1 );
        }
    }

    function moveToNextStep()
    {
        if (step < taskDescriptions.length)
        {
            setStep( currentStep => currentStep + 1 );
        }
    }

    function toggleVisibility()
    {
        setIsVisible( currentIsOpen => !currentIsOpen );
    }

    return <>
        <button
            className = "close"
            onClick = { () => toggleVisibility() }
        >
            &times;
        </button>
        { isVisible && <div className = "steps">
            <div className = "numbers">
                <span className = { step >= 1 ? 'active' : '' }>1</span>
                <span className = { step >= 2 ? 'active' : '' }>2</span>
                <span className = { step >= 3 ? 'active' : '' }>3</span>
            </div>


            <StepMessage
                className = { "message" }
                currentStep = { step }
            >
                { taskDescriptions[step - 1] }
                <Button onClick = { () => alert( ` Learn more about ${ taskDescriptions[step - 1] }` ) }>
                    Learn
                </Button>
            </StepMessage>

            <div className = "buttons">
                <Button
                    textColor = { buttonStyle.color }
                    backgroundColor = { buttonStyle.backgroundColor }
                    onClick = { moveBackward }
                >
                    <span>
                        👈 Previous
                    </span>
                </Button>
                <Button
                    textColor = { buttonStyle.color }
                    backgroundColor = { buttonStyle.backgroundColor }
                    onClick = { moveToNextStep }
                >
                    <span>
                        Next 👉
                    </span>
                </Button>
            </div>
        </div> }
    </>
}
