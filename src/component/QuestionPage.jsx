import { useState } from "react";
import CheckoutStepper from "./CheckOutStep";
import RecordCard from "./RecordCard";
import SubmitPage from "./SubmitPage";
import logo from '../asset/logo/logo.png'

const CHECKOUT_steps = [
    {
        question: "Pick a quiet and well-lit place",
        tips: [
            "Find a spot with minimal distractions.",
            "Ensure there's enough light to see clearly.",
            "Choose a comfortable seating arrangement.",
        ],
    },
    {
        question: "Pick a quiet and well-lit place question 2nd",
        tips: [
            "Find a spot with minimal distractions.",
            "Ensure there's enough light to see clearly.",
            "Choose a comfortable seating arrangement.",
        ],
    },
    {
        question: "Pick a quiet and well-lit place question 3nd",
        tips: [
            "Find a spot with minimal distractions.",
            "Ensure there's enough light to see clearly.",
            "Choose a comfortable seating arrangement.",
        ],
    },
];

function QuestionPage() {
    const [submissionComplete, setSubmissionComplete] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const handleSubmissionComplete = () => {
        setSubmissionComplete(true);
    };

    const handleNextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };
    
    const currentQuestion = CHECKOUT_steps[currentStep];

    return (
        <section className="z-10 h-screen flex flex-col lg:px-6 lg:py-2 w-full">
            <div className="flex min-h-full flex-col justify-center px-2 py-12 lg:px-8">
                <div className="lg:flex items-center justify-center mb-5 md:mb-10 hidden">
                   <img src={logo} alt="" className="h-[3.5rem]" />
                </div>
                <>
                    {submissionComplete ? (
                        <SubmitPage />
                    ) : (
                        <div className="h-screen md:p-6 relative lg:block flex flex-col">
                            <div className="md:flex md:flex-auto md:h-3/6">
                                <div className="flex-initial md:w-7/12">
                                    <div className="block rounded-lg bg-white  shadow border md:bg-transparent md:shadow-none md:border-none">
                                        <div className="mb-2 text-xs md:text-lg">
                                            <span className="lg:font-medium font-[600] text-[1rem]">
                                                Questions &nbsp;{" "}
                                            </span>
                                            <span className=" text-gray-700 font-[500]">
                                                {currentStep + 1} /{" "}
                                                {CHECKOUT_steps.length}
                                            </span>
                                        </div>
                                        <h4 className="lg:text-[2rem] font-[700] ">
                                            {currentQuestion.question}
                                        </h4>
                                    </div>

                                    <div className="mt-0 mb-5  rounded-lg bg-white py-6 shadow border md:bg-transparent md:shadow-none md:border-none flex flex-col gap-6">
                                        <h4 className="font-medium text-[1.5rem]">
                                            Tips :
                                        </h4>
                                        <ul className="h-[30vh] ">
                                            <CheckoutStepper
                                                stepsConfig={CHECKOUT_steps}
                                                setSubmissionComplete={
                                                    handleSubmissionComplete
                                                }
                                                handleNextStep={handleNextStep}
                                                currentStep={currentStep}
                                                setCurrentStep={setCurrentStep}
                                            />
                                        </ul>
                                    </div>
                                </div>

                                <div className="video-section md:bg-transparent md:grow  mx-auto ">
                                    <RecordCard />
                                </div>
                            </div>
                        </div>
                    )}
                </>
            </div>

            {/* <div className="absolute top-0 bg-red-400 w-full h-screen"></div> */}
        </section>
    );
}

export default QuestionPage;
