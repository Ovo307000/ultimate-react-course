import React, { useCallback, useState } from "react";

export default function App()
{
    const [step, setStep] = useState( 0 );
    const [count, setCount] = useState( 0 );
    const [minStep, maxStep] = [0, 100];

    const onInputChange = useCallback(
        ( event: React.ChangeEvent<HTMLInputElement> ) =>
        {
            if (Number( event.target.value ) > maxStep)
            {
                event.target.value = maxStep.toString();
            }

            if (Number( event.target.value ) < minStep)
            {
                event.target.value = minStep.toString();
            }

            setStep( () => Number( event.target.value ) );
        },
        [minStep, maxStep]
    );
    const handleInputChange = useCallback(
        ( event: React.ChangeEvent<HTMLInputElement> ) =>
        {
            if (event.target.value === '')
            {
                event.target.value = '0';
            }

            // 正则表达式判断
            if (/^\d+$/.test( event.target.value ))
            {
                setCount( () => Number( event.target.value ) );
            }

            if (event.target.value === '0')
            {
                setCount( () => 1 );
            }
        },
        []
    );

    function shouldDisplayResetButton()
    {
        // 当 count === 0 && step === 0 时,不显示 reset 按钮
        return count !== 0 || step !== 1;
    }

    const resetHandler = useCallback(
        ( event: React.MouseEvent<HTMLButtonElement> ) =>
        {
            event.preventDefault();

            if (count === 0 && step === 0)
            {
                return;
            }

            if (window.confirm( "Are you sure you want to reset count?" ))
            {
                setCount( () => 0 );
                setStep( () => 0 );
            }
        },
        [count, step]
    );
    const handleCountIncrement = useCallback(
        ( event: React.MouseEvent<HTMLButtonElement> ) =>
        {
            event.preventDefault();

            setCount( prevCount => prevCount + step );
        },
        [step]
    );
    const handleCountDecrement = useCallback(
        ( event: React.MouseEvent<HTMLButtonElement> ) =>
        {
            event.preventDefault();

            if (count === 0)
            {
                return;
            }

            setCount( prevCount => prevCount - step );
        },
        [count, step]
    );


    const date = new Date();

    date.setDate( date.getDate() + count );

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
            <input
                type = { "range" }
                min = { 0 }
                max = { 100 }
                value = { step }
                onChange = { onInputChange }
            />

            <span>{ step }</span>
        </div>


        <div>
            <button onClick = { handleCountIncrement }>
                <span>Count +</span>
            </button>

            <input
                type = { "text" }
                value = { count }
                onChange = { handleInputChange }
            />

            {/* disabled if step is 0 */ }
            <button onClick = { handleCountDecrement }>
                <span>Count -</span>
            </button>
        </div>

        <span>{ formatDateMessage() }{ date.toDateString() }</span>

        { shouldDisplayResetButton() ? null : <>
            <button
                type = { "reset" }
                onClick = { resetHandler }
            >
                Reset
            </button>
        </> }


        <hr/>

        <small>
            NOTE: The date is based on the current date + the COUNT

            <br/>
            Step: For each click, the step will be increased by 1. <br/>
            Count: For each click, the count will be increased by the step.
        </small>
    </>;
}

