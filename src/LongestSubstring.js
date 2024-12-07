import React, { useState } from 'react';

function LongestSubstring() {
    // State to handle user input and result
    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);

    // Update the input value as the user types
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    // Function to find the length of the longest substring without repeating characters
    const lengthOfLongestSubstring = (s) => {
        let charSet = new Set();
        let left = 0, maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            // Remove characters from the set until there are no duplicates
            while (charSet.has(s[right])) {
                charSet.delete(s[left]);
                left++;
            }
            charSet.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    };

    // Handle the calculation when the user clicks the button
    const handleSubmit = () => {
        if (input.trim() === '') {
            alert('Please enter a valid string.');
            return;
        }
        setResult(lengthOfLongestSubstring(input));
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: '#4CAF50' }}>Longest Substring Without Repeating Characters</h2>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Enter a string"
                style={{
                    padding: '10px',
                    width: '300px',
                    marginRight: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                }}
            />
            <button
                onClick={handleSubmit}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Find Longest Substring
            </button>
            <div style={{ marginTop: '20px' }}>
                {result > 0 && (
                    <p style={{
                        fontSize: '18px',
                        color: '#333',
                        background: '#f9f9f9',
                        padding: '10px',
                        borderRadius: '5px',
                    }}>
                        Longest Substring Length: <strong>{result}</strong>
                    </p>
                )}
            </div>
        </div>
    );
}

export default LongestSubstring;