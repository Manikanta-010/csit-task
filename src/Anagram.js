import React, { useState } from 'react';

function Anagram() {
    // State to store the user input and the result
    const [input, setInput] = useState('');
    const [result, setResult] = useState([]);

    // Update the input value as the user types
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    // Function to group anagrams
    const groupAnagrams = (strs) => {
        const map = {}; // Initialize an empty map
        for (let str of strs) {
            const sorted = str.trim().split('').sort().join(''); // Trim and sort each word
            if (!map[sorted]) {
                map[sorted] = [];
            }
            map[sorted].push(str.trim()); // Add the word to the corresponding anagram group
        }
        return Object.values(map); // Return the grouped anagrams
    };

    // Handle the form submission
    const handleSubmit = () => {
        if (input.trim() === '') {
            alert('Please enter at least one word.');
            return;
        }
        const words = input.split(','); // Split input by commas
        setResult(groupAnagrams(words)); // Group anagrams and update the result
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: '#4CAF50' }}>Group Anagrams</h2>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Enter words separated by commas"
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
                Group Anagrams
            </button>
            <div style={{ marginTop: '20px' }}>
                {result.length > 0 && (
                    <ul style={{ listStyleType: 'none', padding: '0' }}>
                        {result.map((group, index) => (
                            <li
                                key={index}
                                style={{
                                    margin: '5px 0',
                                    background: '#ecf0f1',
                                    padding: '10px',
                                    borderRadius: '5px',
                                }}
                            >
                                {group.join(', ')}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Anagram;
