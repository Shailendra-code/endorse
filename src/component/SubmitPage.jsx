import React from "react";

function SubmitPage() {
    return (
        <div className="flex justify-between items-center flex-col gap-10 mt-[3.2rem] mb-[5rem]">
            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-4xl font-bold text-center">
                    Congratulations &#127881;
                </h1>
                <h3 className="text-xl font-[400] w-[75%] text-center">
                    Your response has been recorded &#129395;&#129395;&#129395;
                </h3>
            </div>

            <div className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Company"
                    className="block w-full text-[1rem] rounded-full text-gray-900 shadow-sm placeholder:text-[#696969] sm:text-sm sm:leading-6 px-4 py-4 bg-[#e3e3e3]"
                />
                <input
                    type="text"
                    placeholder="Designation"
                    className="block w-full text-[1rem] rounded-full text-gray-900 shadow-sm placeholder:text-[#696969] sm:text-sm sm:leading-6 px-4 py-4 bg-[#e3e3e3]"
                />

                <div className="flex gap-4 items-center justify-center">
                    <input type="checkbox" id="checkbox"  className="h-10 w-4"/>
                    <label
                        htmlFor="checkbox"
                        className="text-[1rem] text-slate-500 "
                    >
                        I submit my consent to share this video
                    </label>
                </div>

                <button className="flex w-full justify-center items-center rounded-full bg-black px-4 py-4 text-[1rem] font-normal leading-6 text-white hover:bg-black-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-lg shadow-[#424141]">
                    Submit Video
                </button>
            </div>
        </div>
    );
}

export default SubmitPage;
