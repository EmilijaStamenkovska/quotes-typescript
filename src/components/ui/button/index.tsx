// Core
import React from 'react';
// Styles
import styles from './style.module.css';


interface ButtonProps {
    children: any;
    onClick: any;
    customClassName: string;
    type: any;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, customClassName, type }) => {

    return (
        <button
            className={`${styles.button} ${customClassName}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};