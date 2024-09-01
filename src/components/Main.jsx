import { useState } from "react";
import EncodingNavigation from "./EncodingNavigation";
import EncodingForm from "./EncodingForm";

const Main = () => {
    const [ checksumEncodingMethod, setChecksumEncodingMethod ] = useState(true);

    return (
        <main className="min-h-[85vh] center">
            <div className="w-[32rem] lg:w-[45rem] min-h-[20rem] p-[1.5rem] rounded-[10px] shadow-[0_0_2px_rgba(0,0,0,0.7)]">
                <EncodingNavigation checksumEncodingMethod={checksumEncodingMethod} setChecksumEncodingMethod={setChecksumEncodingMethod} />
                <EncodingForm />
            </div>
        </main>
    );
};

export default Main;