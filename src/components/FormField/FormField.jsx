// src/components/FormField/FormField.js
import React, { useState, useEffect } from 'react';

function FormField({ type, name, value, onChange, placeholder, patternError, errorMessage }) {
    const [error, setError] = useState("")
    const validateField = (fieldValue) => {
        if (patternError && errorMessage && fieldValue != "") {
            if (!patternError.test(fieldValue)) {
                setError(errorMessage);
            } else {
                setError(null);
            }
        } else {
            setError(null);
        }
    };

    useEffect(() => {
        validateField(value);
    }, [value, patternError, errorMessage]); 

    const handleChange = (e) => {
        onChange(e);
        validateField(e.target.value);
    };

  return (
    <div>
        {error &&(
            <p className="text-red-300">{error}</p>
        )}
      <input
        className="w-full p-3 border rounded-md text-black"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormField;