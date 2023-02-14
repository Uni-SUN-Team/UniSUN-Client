import * as Yup from "yup";

export const formSchema = Yup.object().shape({
    email: Yup.string().email().required("E-mail is required."),
    password: Yup.string().required("Password is required.").matches(/.{8,}/, "Must contain at least 8 characters.").matches(/(\W{1,})/, "Must contain at least 1 special character (equivalent to [^a-zA-Z0-9_]).").matches(/(?=.*\d)/, "Must contain at least 1 numeric character.").matches(/(?=.*[a-z])/, "Must contain lowercase letters.").matches(/(?=.*[A-Z])/, "Must contain uppercase letters."),
}).required();

export type FormData = Yup.InferType<typeof formSchema>;