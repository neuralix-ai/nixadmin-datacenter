import { postContactInfo } from "@/lib/api/contact/client"
import { FormInput } from "@/lib/api/contact/types"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"

export const usePostContact = () => {
    return useMutation({
        mutationKey: ['contact-details'],
        mutationFn: (data: FormInput) => postContactInfo(data),
    })
}