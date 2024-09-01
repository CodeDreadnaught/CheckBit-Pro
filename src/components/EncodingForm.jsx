import { useState } from "react";

const EncodingForm = props => {
    const [ encodingData, setEncodingData ] = useState(false),
    [ invalidEncodeData, setInvalidEncodeData ] = useState(false),
    [ notAcceptableCharacterLength, setNotAcceptableCharacterLength ] = useState(false),
    [ reachedMaximumCharacterLength, setReachedMaximumCharacterLength ] = useState(false);

    const [ formData, setFormData ] = useState(""),
    [ encodedValue, setEncodedValue ] = useState(null);

    const changeHandler = event => {
        const { value } = event.target;
        setEncodedValue(null);

        if (value.length < 5) {
            if (["0", "1", undefined].includes(value[value.length - 1])) {
                setInvalidEncodeData(false);
                setReachedMaximumCharacterLength(false);
                setFormData(value);
            } else {
                setInvalidEncodeData(true);
            }
        } else {
            setReachedMaximumCharacterLength(true);
            setTimeout(() => setReachedMaximumCharacterLength(false), 1000);
        }
    };

    const submitHandler = event => {
        event.preventDefault();
        setInvalidEncodeData(false);

        if (formData.trim().length > 3) {
            setEncodingData(true);

            setTimeout( () => {
                setEncodingData(false);
                setEncodedValue("CDNLKM");
            }, 1000);
        } else {
            setNotAcceptableCharacterLength(true);
            setTimeout(() => setNotAcceptableCharacterLength(false), 1000);
        }
    };

     return (
        <form onSubmit={submitHandler} className="mode-transition">
            <input type="number" name="encodeData" value={formData} placeholder="Enter Data (bit)..." className="w-full h-[3.5rem] border border-gray-500 rounded-[5px] indent-[0.5rem]" onChange={changeHandler} />
            <button className={`w-full h-[3.5rem] bg-black text-white my-[1.5rem] rounded-[5px] font-medium mode-transition ${encodingData ? "opacity-25" : "opacity-100"}`} disabled={encodingData}>{encodingData ? "Encoding..." : "Encode"}</button>
            {invalidEncodeData && <p className="text-center text-[red] font-medium">You can only enter 0s and 1s.</p>}
            {reachedMaximumCharacterLength && <p className="text-center text-[red] font-medium">You can only enter a maximum of 4 characters.</p>}
            {notAcceptableCharacterLength && <p className="text-center text-[red] font-medium">The entered data must be up to 4 characters.</p>}
            {encodedValue && <p className="text-center mode-transition">The encoded value is <span className="font-medium">{encodedValue}</span>.</p>}
        </form>
    );
};

export default EncodingForm;