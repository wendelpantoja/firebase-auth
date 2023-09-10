import { z } from "zod";

export const createUserFormShema = z.object({
    email: z.string()
    .nonempty("O e-mail é obrigatorio")
    .email("Formato de e-email inválido"),
    password: z.string()
    .min(6, "No minimo 6 caracteres"),
})

export type CreateUserFormData = z.infer<typeof createUserFormShema>