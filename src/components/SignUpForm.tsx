import { signUp } from "../../actions/signUp";
import { useState } from "react";

export default function SignUpButton() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        setTimeout(async () => {
            try {
                await signUp(formData);
                setSubmitted(true);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        } , 500)
    };

    return (
        <form className="flex items-center justify-center mx-auto mt-8" onSubmit={handleSubmit}>
            {submitted ? (
                <div className="text-lg w-[360px] h-[56px] md:w-[576px] md:h-[64px] rounded-2xl bg-gradient-to-r from-decorative-blue to-decorative-red bg-clip-border p-[3px]">
                    <div className="bg-surface-secondary w-full h-full rounded-xl flex justify-center items-center">
                        <p>You've joined the waitlist!</p>
                    </div>
                </div>
            ) : (
                <div className="relative w-[360px] h-[56px] md:w-[576px] md:h-[64px]">
                    <input
                        className="block ps-3 w-full h-full text-sm text-gray-90 rounded-xl focus:border-2 focus:border-brand-accent focus:outline-none bg-surface-secondary placeholder-text-tertiary"
                        placeholder="Email Address..."
                        name="email"
                    />
                    <button
                        type="submit"
                        className="text-white absolute w-[122px] h-[40px] end-4 bottom-[9.5px] md:bottom-[12px] bg-brand-accent hover:bg-brand-primary font-medium rounded-lg text-sm px-5 py-2"
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="animate-spin h-4 w-4 border-t-2 border-b-2 border-white rounded-full mx-auto"></div> 
                        ) : (
                            'Join Beta!' 
                        )}
                    </button>
                </div>
            )}
        </form>
    );
}


