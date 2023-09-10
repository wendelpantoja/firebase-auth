import { auth } from "../fireBaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export async function createUserAcess(email: string, password: string) {
        return await createUserWithEmailAndPassword(auth, email, password)
}

export async function singInUserAcess(email: string, password: string) {
        return await signInWithEmailAndPassword(auth, email, password)
}