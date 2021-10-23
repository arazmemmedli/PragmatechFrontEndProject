import React from 'react'
import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import "./Registration.css"

const packages = [
    {
        name: "Basic"
    },
    {
        name: "Standart"
    },
    {
        name: "Premium"
    }
]

function Register() {
    const [firstName, setFirstName] = useState(null)
    const [step, setStep] = useState(1);
    const [step2Complation, setStep2Complation] = useState(-1);


    const nextStepOne = () => {
        if (step === 1) {
            setStep(step + 1);
        }
    }

    const nextStepTwo = () => {
        if (step2Complation == -1) {
            alert("Choose One of the packages")
        }
        else if (step === 2) {
            setStep(step + 1);
        }
    }

    const nextStep = () => {
        setStep(step + 1)
    }


    const StepOf = () => {
        if (step === 1) {
            return <Step1 onClick={() => { nextStepOne() }} />
        } else if (step === 2) {
            return <Step2 onClick={() => { nextStepTwo() }} setstate={setStep2Complation} packages={packages} />
        } else if (step === 3) {
            return <Step3 onClick={() => { nextStep() }} setFirstName={setFirstName} />
        } else if (step === 4) {
            return <Step4 packagename={packages[step2Complation].name} firstName={firstName} />
        }
    }

    return (
        <div className="register__slider">
            {StepOf()}
        </div>
    )
}

export default Register;