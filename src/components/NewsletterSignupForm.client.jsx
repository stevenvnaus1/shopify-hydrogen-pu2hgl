export default function NewsletterSignupForm() {
  return (
    <>
      <label for="emailInput" className="sr-only">
        Email
      </label>
      <input
        className="border border-black border-solid p-2 text-sm"
        type="text"
        id="emailInput"
        name="email"
        placeholder="Email"
      />
      <button
        className="bg-black text-white p-2 text-sm uppercase border border-black border-solid"
        onClick={() => {
          /* TODO */
        }}
      >
        Sign me up
      </button>
    </>
  );
}
