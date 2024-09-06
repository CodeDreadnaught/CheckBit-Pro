import { useState } from "react";
import EncodingNavigation from "./EncodingNavigation";
import ChecksumEncodingForm from "./ChecksumEncodingForm";
import HammingEncodingForm from "./HammingEncodingForm";

const Main = () => {
    const [ checksumEncodingMethod, setChecksumEncodingMethod ] = useState(true);

    return (
        <main className="min-h-[85vh] center">
            <div className="w-[32rem] lg:w-[45rem] min-h-[20rem] p-[1.5rem] rounded-[10px] shadow-[0_0_2px_rgba(0,0,0,0.7)] mode-transition">
                <EncodingNavigation checksumEncodingMethod={checksumEncodingMethod} setChecksumEncodingMethod={setChecksumEncodingMethod} />
                {checksumEncodingMethod ? <ChecksumEncodingForm /> : <HammingEncodingForm />}
            </div>
        </main>
    );
};

export default Main;