import { useState } from "react";

export default function App()
{
    const [step, setStep] = useState( 0 );
    const [count, setCount] = useState( 0 );


    const date = new Date();

    date.setDate( date.getDate() + count );


    function incrementStep()
    {
        setStep( step => step + 1 );
    }

    function decrementStep()
    {
        if (step === 0)
        {
            return;
        }

        setStep( step => step - 1 );
    }

    function incrementCount()
    {
        setCount( count => count + step );
    }

    function decrementCount()
    {
        setCount( count => count - step );
    }

    function formatDateMessage()
    {
        if (count === 0)
        {
            return 'Today is ';
        } else if (count > 0)
        {
            return `${ count } days In `;
        } else
        {
            return `${ Math.abs( count ) } days Ago is `;
        }
    }

    return <>
        <div>
            <button onClick = { incrementStep }>
                <span>Step +</span>
            </button>
            <span>{ step }</span>
            <button onClick = { decrementStep }>
                <span>Step -</span>
            </button>
        </div>

        <div>
            <button onClick = { incrementCount }>
                <span>Count +</span>
            </button>
            <span>{ count }</span>
            <button onClick = { decrementCount }>
                <span>Count -</span>
            </button>
        </div>

        <span>{ formatDateMessage() }{ date.toDateString() }</span>

        <hr/>

        <small>
            NOTE: The date is based on the current date + the COUNT

            <br/>
            Step: For each click, the step will be increased by 1. <br/>
            Count: For each click, the count will be increased by the step.
        </small>
    </>;
}

