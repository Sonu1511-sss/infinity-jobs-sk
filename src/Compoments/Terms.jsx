import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="text-sm text-gray-400 mb-6">Effective Date: 1 January 2020</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Welcome to Olink</h2>
          <p className="text-gray-300 mb-4">
            Thank you for using our products and services ("Services"). These Services are provided by <strong>Pixeel Ltd.</strong> ("Olink"), located at 153 Williamson Plaza, Maggieberg, MT 09514, England, United Kingdom.
          </p>
          <p className="text-gray-300 mb-4">
            By using our Services, you agree to these terms. Please read them carefully. Additional terms may apply to specific Services and will be provided with the relevant Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Using Our Services</h2>
          <ul className="list-inside list-disc text-gray-300">
            <li>You must follow any policies available within the Services.</li>
            <li>Do not misuse our Services. This includes trying to interfere with our Services or access them through unauthorized methods.</li>
            <li>You may only use our Services as permitted by law, including applicable export and re-export control laws and regulations.</li>
            <li>We may suspend or stop providing Services if you fail to comply with these terms or if we are investigating misconduct.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">A. Personal Data that We Collect About You</h2>
          <p className="text-gray-300 mb-4">
            Personal Data is any information that relates to an identified or identifiable individual. The Personal Data that you provide directly to us through our Sites will be apparent from the context in which you provide the data.
          </p>
          <ul className="list-inside list-disc text-gray-300">
            <li>When you register for an Olink account, we collect your full name, email address, and account login credentials.</li>
            <li>When you fill in our online form to contact our sales team, we collect your full name, work email, country, and other details.</li>
            <li>When you use the "Remember Me" feature of Olink Checkout, we collect your email address, payment card number, CVC code, and expiration date.</li>
            <li>When you respond to Olink emails or surveys, we collect your email address, name, and any other information you choose to include.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Privacy and Copyright Protection</h2>
          <p className="text-gray-300 mb-4">
            Olink's privacy policies explain how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that Olink can use such data in accordance with our privacy policies.
          </p>
          <p className="text-gray-300 mb-4">
            We respond to notices of alleged copyright infringement and terminate accounts of repeat infringers according to the process set out in the U.S. Digital Millennium Copyright Act.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Your Content in Our Services</h2>
          <p className="text-gray-300 mb-4">
            Some of our Services allow you to upload, submit, store, send, or receive content. You retain ownership of any intellectual property rights that you hold in that content. In short, what belongs to you stays yours.
          </p>
          <p className="text-gray-300 mb-4">
            When you upload, submit, store, send, or receive content to or through our Services, you grant Olink (and those we work with) a worldwide license to use, host, store, reproduce, modify, create derivative works, communicate, publish, perform, and distribute such content for the limited purpose of operating, promoting, and improving our Services.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
