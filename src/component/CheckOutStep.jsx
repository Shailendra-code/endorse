import { useEffect, useRef, useState } from "react";
import { FiCheck } from "react-icons/fi";

const CheckoutStepper = ({
    stepsConfig = [],
    currentStep,
    setSubmissionComplete,
    handleNextStep,
    setCurrentStep,
}) => {
    const [isComplete, setIsComplete] = useState(false);
    const [height, setHeight] = useState({
        marginTop: 0,
        marginBottom: 0,
    });

    const stepRef = useRef([]);

    const handleNext = () => {
        if (currentStep === stepsConfig.length - 1) {
            setIsComplete(true);
            setSubmissionComplete();
        } else {
            handleNextStep();
        }
    };

    useEffect(() => {
        // Calculate the margin top and bottom for progress bar positioning
        setHeight({
            marginTop: stepRef.current[0].offsetHeight / 2, 
            marginBottom:
                stepRef.current[stepsConfig.length - 1].offsetHeight / 2,
        });
    }, [stepRef, stepsConfig.length]);

    if (!stepsConfig.length) {
        return <></>;
    }

    const calculateProgressBarHeight = () => {
        return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
    };

    const handlePrev = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    return (
        <>
            <div className="relative flex flex-col gap-3 overflow-hidden">
                {stepsConfig.map((step, index) => {
                    return (
                        <div
                            key={step.name}
                            ref={(el) => (stepRef.current[index] = el)}
                            className={`flex gap-2 items-center ${
                                currentStep > index + 1 || isComplete
                                    ? "complete"
                                    : ""
                            } ${currentStep === index + 1 ? "active" : ""} `}
                        >
                            <div className="w-[30px] h-[30px] rounded-[50%] bg-black flex items-center justify-center z-[2]">
                                {currentStep <= index && (
                                    <FiCheck className="text-white font-extrabold text-[1.4rem]" />
                                )}
                            </div>
                            <div className="lg:text-[1.7rem] font-[200] w-[60%] ">
                                {step.question}
                            </div>
                        </div>
                    );
                })}
                <div
                    className="absolute w-[2.5px]  h-full left-[1.7%] bg-black"
                    style={{
                        height: `calc(100% - ${
                            height.marginTop + height.marginBottom
                        }px)`,
                        marginTop: height.marginTop,
                        marginBottom: height.marginBottom,
                    }}
                >
                    <div
                        style={{
                            height: `${calculateProgressBarHeight()}%`,
                        }}
                    ></div>
                </div>
            </div>

            {!isComplete && (
                <div className="absolute bottom-12 flex justify-start gap-4 items-start md:justify-items-start">
                    {currentStep > 0 && (
                        <button
                            className="flex justify-center rounded-lg bg-white px-14 py-2 text-m font-medium leading-6 border-2 border-black text-black  shadow-c1"
                            onClick={handlePrev}
                        >
                            Previous
                        </button>
                    )}
                    <button
                        className="flex justify-center rounded-lg bg-black px-16 py-2 text-m font-medium leading-6 text-white  shadow-c1"
                        onClick={handleNext}
                    >
                        {currentStep === stepsConfig.length - 1
                            ? "Submit"
                            : "Next"}
                    </button>
                </div>
            )}
        </>
    );
};

export default CheckoutStepper;
