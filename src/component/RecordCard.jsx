import React, { useState } from "react";
import { BsUpload, BsTrash } from "react-icons/bs";
import { IoVideocam } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import { AiOutlineRedo } from "react-icons/ai";
import { ReactMediaRecorder } from "react-media-recorder";

function RecordCard() {
    const [permission, setPermission] = useState(false);
    const [isRecording, setIsRecording] = useState(false);

    const handleUpload = (event) => {
        const file = event.target.files[0];
        console.log("Uploaded file:", file);
    };

    const getCameraPermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                setPermission(true);
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    return (
        <>
        
            {permission ? (
                <ReactMediaRecorder
                    video
                    render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                        <div className="rounded-3xl md:shadow-2xl relative">
                            {/* {status === "stopped" && <video src={mediaBlobUrl} controls autoPlay loop className="w-[36rem] h-[31rem] rounded-3xl" />} */}
                            <video src={mediaBlobUrl} controls autoPlay loop className="w-[36rem] h-full rounded-3xl" />
                            <div className="flex justify-center">
                                {status !== "recording" ? (
                                    <>
                                        <button
                                            onClick={() => {
                                                startRecording();
                                                setIsRecording(true);
                                            }}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-2"
                                        >
                                            {isRecording ? "Recording..." : "Start Recording"}
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={stopRecording}
                                            className="text-[4rem] text-white font-bold rounded absolute top-[50%] translate-y-[-50%]"
                                        >
                                            <FaCirclePlay />
                                        </button>
                                        <button
                                            onClick={handleUpload}
                                            className="text-white text-[1.5rem] font-bold rounded absolute top-5 right-5"
                                        >
                                            <BsTrash />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                />
            ) : (
                <div className="relative px-6 py-10 md:bg-white md:rounded-3xl mx-auto md:shadow-2xl" style={{ width: "35rem", height: "31rem" }}>
                    <div className="m-18  md:mt-20 ">
                        <div>
                            <h3 className="font-[400] text-center text-[1.2rem]">
                                I want to
                            </h3>
                        </div>
                        <div className="mt-14 flex flex-row justify-center space-x-6">
                            <div className="text-center">
                                <div className="rounded-lg p-8 bg-white shadow-md shadow-[#919090]">
                                    <input
                                        type="file"
                                        id="uploadInput"
                                        style={{ display: "none" }}
                                        accept="video/photo*"
                                        onChange={handleUpload}
                                    />
                                    <label htmlFor="uploadInput">
                                        <BsUpload className="text-[1.8rem] cursor-pointer" />
                                    </label>
                                </div>
                                <div className="mt-5 font-medium">
                                    Upload
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="rounded-lg p-8 flex items-center justify-center bg-white shadow-md shadow-[#919090]">
                                    <button onClick={getCameraPermission}>
                                        <IoVideocam className="text-[1.8rem] cursor-pointer" />
                                    </button>
                                </div>
                                <div className="mt-5 font-medium">
                                    Record
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default RecordCard;
