const EncodingNavigation = props => {
    return (
        <>
            <section className="text-center">Encoding Method: <span className="font-bold mode-transition">{props.checksumEncodingMethod ? "Checksum" : "Hamming"}</span></section>
            <section className="w-full mb-[2rem] rounded-[5px] center font-medium"><button onClick={() => props.setChecksumEncodingMethod(!props.checksumEncodingMethod)}>Change Encoding Method</button></section>
        </>
    );
};

export default EncodingNavigation;