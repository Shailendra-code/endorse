import React, { useState, useRef } from "react";
import bgImg from "../asset/logo/Background_img.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import QuestionPage from "./QuestionPage";
import logo from '../asset/logo/logo.png'

function RecordingLogin() {
    const [recordingStarted, setRecordingStarted] = useState(false);
    const [formData, setFormData] = useState([
        { label: "Name", value: "", error: "" },
        { label: "Email ID", value: "", error: "" },
    ]);
    const firstInputRef = useRef(null);

    const startRecording = () => {
        const isFormValid = formData.every(field => field.value.trim() !== "");
        if (isFormValid) {
            setRecordingStarted(true);
        } else {
            const updatedFormData = formData.map(field => ({
                ...field,
                error: field.value.trim() === "" ? `${field.label} is required` : ""
                // error: alert("empty field")
            }));
            setFormData(updatedFormData);
            const firstInvalidField = updatedFormData.find(field => field.error !== "");
            if (firstInvalidField && firstInputRef.current) {
                firstInputRef.current.focus();
            }
        }
    };

    const handleInputChange = (index, value) => {
        const updatedFormData = [...formData];
        updatedFormData[index].value = value;
        updatedFormData[index].error = ""; 
        setFormData(updatedFormData);
    };

    return (
        <>
            <div
                className="h-full w-full absolute top-0 left-0 z-[-1] bg-contain hidden md:block"
                style={{
                    background: `url(${bgImg})`,
                    backgroundPosition: "center", backgroundSize: "contain",
                    opacity: "1",
                }}
            ></div>
            <section className="bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center items-center px-6 lg:px-8">
                {!recordingStarted ? (
                    <div className="flex flex-col gap-14 md:items-center">
                        <div>
                            <div className="flex justify-center items-center p-4">
                               <img src={logo} alt="" className="h-[3.5rem]"/>
                            </div>

                            <div className="mt-8  py-12  lg:shadow-lg lg:px-8 md:bg-white md:px-1 md:pt-2  md:rounded-3xl mx-auto md:shadow-2xl sm:shadow-sm">
                                <div className="flex  justify-center">
                                    <h3 className="my-6 w-[75%] text-center text-[1.3rem] lg:font-medium font-[500] tracking-tight text-gray-900 px-5">
                                        Thank you for taking your time to record
                                    </h3>
                                </div>

                                <div className="flex-col flex w-full gap-[1rem]">
                                    {formData.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <input
                                                ref={index === 0 ? firstInputRef : null}
                                                type="text"
                                                placeholder={item.label}
                                                className="block  rounded-full text-gray-900 shadow-sm placeholder:text-[#696969] sm:text-m sm:leading-6 px-6 py-[1.2rem] border-[1px] border-gray-200 bg-slate-200 lg:bg-white"
                                                value={item.value}
                                                onChange={(e) => handleInputChange(index, e.target.value)}
                                            />
                                              {/* {item.error && (
                                                <p className="text-red-500">
                                                    {item.error}
                                                </p>
                                            )} */}
                                        </React.Fragment>
                                    ))}

                                    {/* Start Recording Button */}
                                    <button
                                        className="flex w-full items-center justify-center rounded-full bg-black  px-3 py-[1.3rem] text-sm font-normal leading-6 text-white shadow-lg shadow-[#424141] mt-3 lg:mt-0"
                                        onClick={startRecording}
                                    >
                                        <span className="text-[1.2rem]">Start Recording</span>
                                        <span className="px-2 pt-1">
                                            <HiOutlineArrowNarrowRight className="text-[1.3rem] font-extralight" />
                                        </span>
                                    </button>

                                    <p className="text-xs text-[#696969] w-full text-center">
                                        5 question to answer. Takes about 5
                                        minutes
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="mt-10">
                            <h5 className="text-[0.9rem] font-[500] text-center">
                                Any queries? Reach out to
                            </h5>
                            <h5 className="text-[1rem] font-[300] text-center">
                                endorse.live@gmail.com
                            </h5>
                        </div>
                    </div>
                ) : (
                    <QuestionPage />
                )}
            </section>
        </>
    );
}

export default RecordingLogin;



// import React, { useState, useRef } from "react";
// import bgImg from "../asset/logo/Background_img.png";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import QuestionPage from "./QuestionPage";
// import logo from '../asset/logo/logo.png'

// function RecordingLogin() {
//     const [recordingStarted, setRecordingStarted] = useState(false);
//     const [formData, setFormData] = useState([
//         { label: "Name", value: "", error: "" },
//         { label: "Email ID", value: "", error: "" },
//     ]);
//     const firstInputRef = useRef(null);

//     const startRecording = () => {
//         const isFormValid = formData.every(field => field.value.trim() !== "");
//         if (isFormValid) {
//             setRecordingStarted(true);
//         } else {
//             const updatedFormData = formData.map(field => ({
//                 ...field,
//                 error: field.value.trim() === "" ? `${field.label} is required` : ""
//             }));
//             setFormData(updatedFormData);
//             const firstInvalidField = updatedFormData.find(field => field.error !== "");
//             if (firstInvalidField && firstInputRef.current) {
//                 firstInputRef.current.focus();
//             }
//         }
//     };

//     const handleInputChange = (index, value) => {
//         const updatedFormData = [...formData];
//         updatedFormData[index].value = value;
//         updatedFormData[index].error = ""; 
//         setFormData(updatedFormData);
//     };

//     return (
//         <>
//             <div
//                 className="h-full w-full absolute top-0 left-0 z-[-1] bg-contain"
//                 style={{
//                     background: `url(${bgImg})`,
//                     backgroundPosition: "center",
//                     backgroundSize: "cover",
//                     opacity: "0.7", // Reduced opacity for better readability of content
//                 }}
//             ></div>

//             <section className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center items-center">
//                 {!recordingStarted ? (
//                     <div className="flex flex-col gap-4 md:gap-14 w-full max-w-md p-4 md:p-0">
//                         <div className="flex justify-center items-center">
//                             <img src={logo} alt="" className="h-16 md:h-24" />
//                         </div>

//                         <div className="mt-8 md:mt-16 w-full md:w-[30rem] max-w-md bg-white rounded-3xl shadow-xl px-6 py-8">
//                             <h3 className="my-6 text-center text-lg md:text-2xl font-medium text-gray-900">
//                                 Thank you for taking your time to record
//                             </h3>

//                             <div className="flex flex-col gap-4">
//                                 {formData.map((item, index) => (
//                                     <input
//                                         key={index}
//                                         ref={index === 0 ? firstInputRef : null}
//                                         type="text"
//                                         placeholder={item.label}
//                                         className="rounded-full text-gray-900 shadow-sm placeholder-gray-400 py-3 px-4 border border-gray-200"
//                                         value={item.value}
//                                         onChange={(e) => handleInputChange(index, e.target.value)}
//                                     />
//                                 ))}

//                                 <button
//                                     className="rounded-full bg-black text-white py-3 px-4 flex items-center justify-center shadow-lg"
//                                     onClick={startRecording}
//                                 >
//                                     <span className="text-lg">Start Recording</span>
//                                     <HiOutlineArrowNarrowRight className="ml-2 text-xl" />
//                                 </button>

//                                 <p className="text-xs text-gray-600 text-center">
//                                     5 questions to answer. Takes about 5 minutes
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="mt-10 text-center">
//                             <h5 className="text-sm font-semibold">Any queries? Reach out to</h5>
//                             <h5 className="text-sm text-gray-600">endorse.live@gmail.com</h5>
//                         </div>
//                     </div>
//                 ) : (
//                     <QuestionPage />
//                 )}
//             </section>
//         </>
//     );
// }

// export default RecordingLogin;


