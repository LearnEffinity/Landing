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
    }, 500);
  };

  return (
    <form
      className="mx-auto mt-8 flex items-center justify-center"
      onSubmit={handleSubmit}
    >
      {submitted ? (
        <div className="h-[56px] w-[360px] rounded-2xl bg-gradient-to-r from-decorative-blue to-decorative-red bg-clip-border p-[3px] text-lg md:h-[64px] md:w-[576px]">
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-surface-secondary">
            <p>You&apos;ve joined the waitlist!</p>
          </div>
        </div>
      ) : (
        <div className="relative h-[56px] w-[360px] md:h-[64px] md:w-[576px]">
          <input
            className="text-gray-90 block h-full w-full rounded-xl bg-surface-secondary ps-3 text-sm placeholder-text-tertiary focus:border-2 focus:border-brand-accent focus:outline-none"
            placeholder="Email Address..."
            name="email"
          />
          <button
            type="submit"
            className="absolute bottom-[9.5px] end-4 h-[40px] w-[122px] rounded-lg bg-brand-accent px-5 py-2 text-sm font-medium text-white hover:bg-brand-primary md:bottom-[12px]"
            disabled={loading}
          >
            {loading ? (
              <div className="mx-auto h-4 w-4 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
            ) : (
              "Join Beta!"
            )}
          </button>
        </div>
      )}
    </form>
  );
}
