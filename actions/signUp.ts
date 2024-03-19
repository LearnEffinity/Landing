'use server'
import { Resend } from "resend";

export async function signUp (formData: FormData) {
    const email = formData.get('email');

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { data } = await resend.contacts.create({
            email: email as string,
            audienceId: process.env.RESEND_AUD as string,
        });
        console.log(data);
    } catch (error) {
        console.error(error);
    }

}