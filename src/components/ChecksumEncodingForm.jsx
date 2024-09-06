import { useState } from "react";
import { checksumLogic } from "../utils/encodingLogic";

const ChecksumEncodingForm = () => {
    const [ encodingData, setEncodingData ] = useState(false),
    [ notEqualBinaryStringsLength, setNotEqualBinaryStringsLength ] = useState(false),
    [ invalidEncodeData, setInvalidEncodeData ] = useState(false);

    const [ formData, setFormData ] = useState({firstEncodeData: "", secondEncodeData: ""}),
    [ encodedValue, setEncodedValue ] = useState(null);

    const changeHandler = event => {
        const { name, value } = event.target;
        setEncodedValue(null);
        setNotEqualBinaryStringsLength(false);

        if (["0", "1", undefined].includes(value[value.length - 1])) {
            setInvalidEncodeData(false);
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
        } else {
            setInvalidEncodeData(true);
            setTimeout(() => setInvalidEncodeData(false), 800);
        }
    };

    const submitHandler = event => {
        event.preventDefault();
        
        if (formData.firstEncodeData.trim().length > 0 && formData.secondEncodeData.trim().length > 0) {
            setInvalidEncodeData(false);
            
            if (formData.firstEncodeData.trim().length === formData.secondEncodeData.trim().length) {
                setEncodingData(true);
                
                setTimeout( () => {
                    setEncodingData(false);
                    const checkSumEncodedValue =  checksumLogic(formData.firstEncodeData, formData.secondEncodeData);
                    setEncodedValue(checkSumEncodedValue);
                }, 1000);
            } else {
                setNotEqualBinaryStringsLength(true);
            }
        }
    };

     return (
        <form onSubmit={submitHandler}>
            <input type="number" name="firstEncodeData" value={formData.firstEncodeData} placeholder="Enter First Binary String" className="w-full h-[3.5rem] border border-gray-500 rounded-[5px] indent-[0.5rem] mb-[1rem]" onChange={changeHandler} required />
            <input type="number" name="secondEncodeData" value={formData.secondEncodeData} placeholder="Enter Second Binary String" className="w-full h-[3.5rem] border border-gray-500 rounded-[5px] indent-[0.5rem]" onChange={changeHandler} required />
            <button className={`w-full h-[3.5rem] bg-black text-white my-[1.5rem] rounded-[5px] font-medium mode-transition ${encodingData ? "opacity-25" : "opacity-100"}`} disabled={encodingData}>{encodingData ? "Encoding..." : "Encode"}</button>
            {invalidEncodeData && <p className="text-center text-[red] font-medium">You can only enter 0s and 1s.</p>}
            {notEqualBinaryStringsLength && <p className="text-center text-[red] font-medium">The length of both Binary Strings must be equal.</p>}
            {encodedValue && <p className="text-center mode-transition">The encoded value is <span className="font-medium">{encodedValue}</span>.</p>}
        </form>
    );
};

export default ChecksumEncodingForm;