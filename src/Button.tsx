import React from "react";

const style: React.CSSProperties = {
    fontSize: "1.5rem",
    background: "none",
    border: "2px solid white",
    borderRadius: "4px",
    color: "white",
    margin: "2rem"
}

interface IButtonProps {
    color: string;
    onClick: () => void;
}

export const Button: React.SFC<IButtonProps> = ({children, color, onClick}) => {
    let finalStyle: React.CSSProperties = {
        ...style,
        borderColor: color,
        color: color
    };

    return <button style={ finalStyle } onClick={ onClick }>{ children }</button>;
}