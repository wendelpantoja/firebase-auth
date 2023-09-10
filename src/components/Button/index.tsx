import { ButtonHTMLAttributes } from "react";
import { ButtonComponent } from "./styles"

interface TypeButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string | JSX.Element;
}

export function Button({ text, ...rest }: TypeButton) {
    return (
        <ButtonComponent {...rest}>{ text }</ButtonComponent>
    )
}