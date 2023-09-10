import { Link, useNavigate } from "react-router-dom";
import { HeaderForm } from "../../components/HeaderForm";
import { Input } from "../../components/Input";
import { Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { HandleSpin } from "../../components/Spin";
import { CreateUserFormData, createUserFormShema } from "./validationZod";
import { FirebaseError } from "firebase/app";

export function Register() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormShema)
    });
    const auth = useAuth()
    const navigate = useNavigate()

    async function getUser(data: CreateUserFormData) {
        if(data.password === data.passwordConfirme) {
            try {
                await auth.createUser(data.email, data.password)
                reset()
                navigate("/login")
            } catch (error) {
                if(error instanceof FirebaseError) {
                    await auth.fireBaseErrors(error.code)
                }
            }
        } else {
            auth.notificationGlobal({
                message: "Senhas incopatíveis",
                type: "info",
                description: "Verifique se as senhas são iguais"
            })
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(getUser)}>
                <HeaderForm text="Crie sua conta"/>
                <div className="inputs_container">
                    <Input
                        textLabel="E-mail"
                        type="text"
                        placeholder="Digite seu e-mail"
                        register={register}
                        registerName="email"
                    />
                    { errors.email && <span>{ errors.email.message }</span> }
                    <Input
                        textLabel="Senha"
                        type="password"
                        placeholder="Digite sua senha"
                        register={register}
                        registerName="password"
                    />
                    { errors.password && <span>{ errors.password.message }</span> }
                    <Input
                        textLabel="Confirme sua senha"
                        type="password"
                        placeholder="Digite sua senha"
                        register={register}
                        registerName="passwordConfirme"
                    />
                    { errors.password && <span>{ errors.password.message }</span> }
                </div>
                <Button 
                    type="submit" 
                    text={auth.handleSpinState ? <HandleSpin /> : "Cadastrar"}
                />
                <p className="account">Já tem uma conta? <Link to="/login">Faça login</Link></p>
            </Form>
        </Container>
    )
}