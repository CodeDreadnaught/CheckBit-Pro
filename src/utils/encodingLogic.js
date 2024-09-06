const checksumLogic = (a, b) => {
    let length = a.length;
    let sum = '';
    let complement = '';
    let carry = '0';

    // Perform binary addition from right to left
    for (let i = length - 1; i >= 0; i--) {
        const bitA = a[i];
        const bitB = b[i];

        let result;

        // Determine the result and carry based on the current bits and carry
        if (bitA === '0' && bitB === '0' && carry === '0') {
            result = '0';
            carry = '0';
        } else if (bitA === '0' && bitB === '0' && carry === '1') {
            result = '1';
            carry = '0';
        } else if (bitA === '0' && bitB === '1' && carry === '0') {
            result = '1';
            carry = '0';
        } else if (bitA === '0' && bitB === '1' && carry === '1') {
            result = '0';
            carry = '1';
        } else if (bitA === '1' && bitB === '0' && carry === '0') {
            result = '1';
            carry = '0';
        } else if (bitA === '1' && bitB === '0' && carry === '1') {
            result = '0';
            carry = '1';
        } else if (bitA === '1' && bitB === '1' && carry === '0') {
            result = '0';
            carry = '1';
        } else if (bitA === '1' && bitB === '1' && carry === '1') {
            result = '1';
            carry = '1';
        }

        sum = result + sum;
    }

    // Calculate the complement
    for (let i = 0; i < length; i++) {
        complement += (sum[i] === '0') ? '1' : '0';
    }

    // Toggle carry for checksum
    carry = (carry === '1') ? '0' : '1';
    return (carry + complement);
};

const hammingLogic = binaryString => {
    let data = [];
    
    // Prompt user to enter 4 bits of data
    for (let i = 0; i < 4; i++) {
        data.push(binaryString[i]);
    }

    let encoded = new Array(7);
    encoded[0] = data[0];
    encoded[1] = data[1];
    encoded[2] = data[2];
    encoded[4] = data[3];
    encoded[3] = encoded[0] ^ encoded[1] ^ encoded[2];
    encoded[5] = encoded[0] ^ encoded[1] ^ encoded[4];
    encoded[6] = encoded[0] ^ encoded[2] ^ encoded[4];

    return (encoded.join(''));
};

export { checksumLogic, hammingLogic };