import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { InputHTMLAttributes, useState } from "react";
import { UseFormRegister } from "react-hook-form"
import { InputComponent, InputContainer } from "./styles";

interface TypeInput extends InputHTMLAttributes<HTMLInputElement> {
    textLabel: string;
    type: string;
    placeholder: string;
    register: UseFormRegister<any>;
    registerName: "email" | "password" | "passwordConfirme";
    value?: string | undefined;
}

export function Input({ textLabel, type, register, registerName, ...rest }: TypeInput) {
    const [passWordEye, setPassWordEye] = useState(false);

    function handleEye(value: boolean) {
        setPassWordEye(value)
    }

    return (
            <InputContainer>
                <label htmlFor="">{textLabel}</label>
                {type === "text" && (
                    <div>
                        <InputComponent 
                            type={type}
                            {...register(registerName)}
                            {...rest}
                        />
                    </div>
                )}
                {type === "password" && (
                    <div>
                        <InputComponent 
                            type={!passWordEye ? "password" : "text"}
                            {...register(registerName)}
                            {...rest}
                        />
                        {!passWordEye 
                            ? <AiOutlineEye onClick={() => handleEye(true)} />
                            : <AiOutlineEyeInvisible onClick={() => handleEye(false)} />
                        }
                    </div>
                )}
            </InputContainer>
    )
}