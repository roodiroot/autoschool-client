import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Введите имя (минимум 2 символа)")
    .max(60, "Слишком длинное имя"),
  phone: z
    .string()
    .trim()
    .min(6, "Введите телефон")
    .max(25, "Слишком длинный телефон")
    // можно ослабить/усилить маску как нужно
    .regex(
      /^[0-9+\-()\s]+$/,
      "Телефон может содержать только цифры и символы + - ( ) пробел"
    ),

  sale: z.coerce.boolean(),

  privacy: z.literal(true, {
    message: "Нужно согласиться с политикой",
  }),
});
