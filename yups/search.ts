import * as Yup from "yup";

export const formSchema = Yup.object().shape({
    value: Yup.string()
        .required("Search is required.")
        .max(250, "Search cannot exceed more than 250 characters.")
        .default("").matches(/[\w _=>()&-*]+/g, "Matches any word character (equivalent to [a-zA-Z0-9_ =>()&-*])."),
}).required();

export type FormData = Yup.InferType<typeof formSchema>;