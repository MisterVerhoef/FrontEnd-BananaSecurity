import React from "react";

const TextInputField = ({textLabel, textValue, onChange}) => {
    return (
        <label htmlFor={textLabel}> {textLabel}:
            <input type="text"
                   id={textLabel}
                   name={textLabel}
                   value={textValue}
                   onChange={onChange}
            />
        </label>
    );
};

export default TextInputField;
