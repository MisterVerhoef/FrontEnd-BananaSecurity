import React from "react";

const TextInputField = ({typeValue, textLabel, textValue, onChange}) => {
    return (
        <label htmlFor={textLabel}> {textLabel}:
            <input type={typeValue}
                   id={textLabel}
                   name={textLabel}
                   value={textValue}
                   onChange={onChange}
            />
        </label>
    );
};

export default TextInputField;
