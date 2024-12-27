import PropTypes from "prop-types";

export default function StepMessage( {
                                         children,
                                         currentStep
                                     } )
{
    return <>
        <p className = "message">
            <h3> Step { currentStep } :</h3>

            { children }
        </p>
    </>;
}

StepMessage.propTypes = {
    children: PropTypes.node.isRequired,
    currentStep: PropTypes.number.isRequired,
};