import React from 'react';

interface TextFieldProps {
    label: string;
    placeholder: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    value?: string;
}

const TextField: React.FC<TextFieldProps> = ({
    label,
    placeholder,
    onChange,
    onBlur,
    value,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 2 }}>
      <label htmlFor={label.toLowerCase()} style={{ fontWeight: 600, fontSize: '18px', marginBottom: '4px' }}>{label}</label>
      <input
        name={label.toLowerCase()}
        id={label.toLowerCase()} 
        style={{ borderRadius: '5px', padding: '4px' }} 
        type='text' 
        placeholder={placeholder} 
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </div>
  );
};

export default TextField;
