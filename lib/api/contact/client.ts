import { FormInput } from "./types";

export const postContactInfo = (data: FormInput) =>
    fetch('/api/contact-us', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })