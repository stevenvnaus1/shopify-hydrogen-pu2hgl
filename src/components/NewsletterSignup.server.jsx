import NewsletterSignupForm from "./NewsletterSignupForm.client";

export default function NewsletterSignup() {
  return (
    <div>
      <p className="text-sm mb-2">
        Sign up for our newsletter to never miss out on latest news and product
        drops!
      </p>
      <NewsletterSignupForm />
    </div>
  );
}
