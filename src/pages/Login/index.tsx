import { Link, Navigate, useNavigate } from "react-router-dom"
import { HeaderForm } from "../../components/HeaderForm"
import { Input } from "../../components/Input"
import { ContainerForm, Form } from "./styles"
import { Button } from "../../components/Button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import ImageSingIn from "../../assets/img/log-in.jpg"
import { useAuth } from "../../context/AuthProvider/useAuth"
import { HandleSpin } from "../../components/Spin"
import { CreateUserFormData, createUserFormShema } from "./validationZod"
import { FirebaseError } from "firebase/app"

export const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormShema)
    });
    const navigate = useNavigate()
    const auth = useAuth()

    if(auth.user) {
        return <Navigate to="/dash" replace/>
    }

    async function getUser(data: CreateUserFormData) {
        
        try {
            await auth.authenticate(data.email, data.password)
            reset()
            navigate("/dash")
        } catch (error) {
            if(error instanceof FirebaseError) {
                await auth.fireBaseErrors(error.code)
            }
        }
        
    }

    return(
        <ContainerForm>
            <Form onSubmit={handleSubmit(getUser)}>
                <HeaderForm 
                    text="Faça seu login"
                    image={ImageSingIn}
                    description="Entre com suas informações de cadastro."
                />
                <div className="inputs_container">
                    <Input
                        textLabel="E-mail"
                        type="text"
                        placeholder="Digite seu e-mail"
                        register={register}
                        registerName="email"
                    />
                    {errors.email && <span>{ errors.email.message }</span>}
                    <Input
                        textLabel="Senha"
                        type="password"
                        placeholder="Digite sua senha"
                        register={register}
                        registerName="password"
                    />
                    {errors.password && <span>{ errors.password.message }</span>}
                </div>
                <Button 
                    type="submit" 
                    text={auth.handleSpinState ? <HandleSpin /> : "Entrar"}
                />
                <p className="not_account">Ainda não tem uma conta? <Link to="/register">Registre-se</Link></p>
            </Form>
        </ContainerForm>
    )
}

