import React from 'react';

export default function Button({ text, onClick, disabled }) {
  return (
    <button
      className="bg-brand text-white rounded-lg py-2 px-4 hover:brightness-110"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
