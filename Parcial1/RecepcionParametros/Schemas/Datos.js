import z from "zod";

const dataSchema = z.object({
    nombre: z.string(),
    apellido: z.string(),
    edad: z.number().int().positive().min(1).max(100),
    comida: z.string(),
});

export function validarDatos(object) {
    return dataSchema.safeParse(object);
}
