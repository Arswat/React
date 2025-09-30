import React from "react";

interface ButtonComponentProps {
    title: string;
    eventHandler: () => void;
}

const ButtonComponent = ({title, eventHandler}: ButtonComponentProps) => {

    console.log(`ButtonComponent rendering for ${title}`)

    return (
        <button onClick={eventHandler}>{title}</button>
    )

}

export default React.memo(ButtonComponent);