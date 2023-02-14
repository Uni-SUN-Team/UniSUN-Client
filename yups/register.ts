import * as Yup from "yup";

export const formSchema = Yup.object().shape({
    name: Yup.string()
        .required("Username is required.")
        .max(250, "Username cannot exceed more than 250 characters.")
        .default(""),
    email: Yup.string().email().required("E-mail is required."),
    brithday: Yup.date(),
    gender: Yup.string(),
    telephone: Yup.string().required("Telephone is required.").matches(/\d*/g, "Must contain at a digit (equivalent to [0-9])"),
    password: Yup.string().required("Password is required.").matches(/.{8,}/, "Must contain at least 8 characters.").matches(/(\W{1,})/, "Must contain at least 1 special character (equivalent to [^a-zA-Z0-9_]).").matches(/(?=.*\d)/, "Must contain at least 1 numeric character.").matches(/(?=.*[a-z])/, "Must contain lowercase letters.").matches(/(?=.*[A-Z])/, "Must contain uppercase letters."),
    confirm_password: Yup.string().required("Confirm password is required.").matches(/.{8,}/, "Must contain at least 8 characters.").matches(/(\W{1,})/, "Must contain at least 1 special character (equivalent to [^a-zA-Z0-9_]).").matches(/(?=.*\d)/, "Must contain at least 1 numeric character.").matches(/(?=.*[a-z])/, "Must contain lowercase letters.").matches(/(?=.*[A-Z])/, "Must contain uppercase letters.").oneOf([Yup.ref("password")], "Password do not match."),
    accept_consent: Yup.bool().required("Accept consent is required.").isTrue("Must accept consent contain at TRUE."),
}).required();

export type FormData = Yup.InferType<typeof formSchema>;