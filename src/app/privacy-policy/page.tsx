import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen text-white font-sans flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-[#1a1a2e] p-8 rounded-xl neon-box">
        <h1 className="text-4xl mb-6 font-bold neon-text text-center">
          Privacy Policy
        </h1>
        <p className="mb-4 text-lg text-purple-300">
          Welcome to our gaming universe! Your privacy is super important to us.
          {"Here's"} how we handle your data:
        </p>

        <h2 className="text-2xl font-semibold neon-text mt-6">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside text-purple-200 mt-2">
          <li>Account information (email, username)</li>
          <li>Game statistics and progress</li>
          <li>Device & browser data</li>
        </ul>

        <h2 className="text-2xl font-semibold neon-text mt-6">
          2. How We Use Your Info
        </h2>
        <p className="text-purple-200 mt-2">
          We use your info to make the game better, provide personalized
          features, and keep things secure. We never sell your data.
        </p>

        <h2 className="text-2xl font-semibold neon-text mt-6">
          3. Third-Party Services
        </h2>
        <p className="text-purple-200 mt-2">
          We might use tools like Google Analytics or payment gateways. They
          have their own privacy practices.
        </p>

        <h2 className="text-2xl font-semibold neon-text mt-6">
          4. Your Rights
        </h2>
        <p className="text-purple-200 mt-2">
          You can access, update, or delete your info anytime. Just contact us.
        </p>

        <h2 className="text-2xl font-semibold neon-text mt-6">5. Updates</h2>
        <p className="text-purple-200 mt-2">
          This policy might change. If we do, we’ll notify you through the
          platform.
        </p>

        <p className="mt-8 text-center text-pink-400 font-semibold">
          Got questions? Hit us up at{" "}
          <a
            href="mailto:support@yourgame.com"
            className="underline hover:text-pink-300"
          >
            support@yourgame.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
