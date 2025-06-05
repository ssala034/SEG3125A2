import React from 'react';

function InputField({ label, type = "text", value, onChange, placeholder }) {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={{
                    padding: '0.5rem',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    width: '100%'
                }}
            />
        </div>
    );
}

export default InputField;
