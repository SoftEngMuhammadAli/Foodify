import React from "react";

export const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy for Foodify</h1>
      <p className="mb-4 text-sm text-gray-500">Last Updated: October 2023</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          1. Information We Collect
        </h2>
        <p className="mb-2">
          When you use Foodify, we collect information that you provide directly
          to us, including:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Account details: Name, email address, and phone number.</li>
          <li>Delivery details: Physical addresses and GPS location data.</li>
          <li>Order history: Your past purchases and dietary preferences.</li>
          <li>
            Payment information: Securely processed via our payment partners.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          2. How We Use Your Information
        </h2>
        <p className="mb-2">
          We use your data to provide a seamless food delivery experience:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Processing and fulfilling your food orders.</li>
          <li>Providing personalized restaurant recommendations.</li>
          <li>Communicating order status updates and promotional offers.</li>
          <li>Improving our platform's performance and user interface.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Cookies and Tracking</h2>
        <p>
          Foodify uses cookies to maintain your session, remember your login
          details, and analyze site traffic to provide a better user experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Data Sharing</h2>
        <p>
          We share necessary information with restaurant partners and delivery
          personnel to complete your orders. We do not sell your personal data
          to third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Your Security</h2>
        <p>
          We implement robust security measures to protect your personal
          information. However, please note that no method of electronic
          transmission is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact
          our privacy team at{" "}
          <span className="font-medium">privacy@foodify.com</span>.
        </p>
      </section>
    </div>
  );
};
