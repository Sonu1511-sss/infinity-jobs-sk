import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Top Half - Header */}
      <div className="bg-blue-500 py-12 text-center">
        <h1 className="text-4xl font-semibold">Privacy & Policy</h1>
        <p className="mt-4 text-lg">Last modified: March 27, 2024 (view archived versions)</p>
      </div>

      {/* Introduction Section */}
      <div className="py-12 px-6 md:px-12">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          Thanks for using our products and services ("Services"). The Services are provided by Pixeel Ltd. ("Olink"),
          located at 153 Williamson Plaza, Maggieberg, MT 09514, England, United Kingdom.
        </p>
        <p className="mt-4">
          By using our Services, you are agreeing to these terms. Please read them carefully. Our Services are very
          diverse, so sometimes additional terms or product requirements (including age requirements) may apply. Additional
          terms will be available with the relevant Services, and those additional terms become part of your agreement with
          us if you use those Services.
        </p>
      </div>

      {/* Terms Section */}
      <div className="bg-gray-800 py-12 px-6 md:px-12">
        <h3 className="text-xl font-semibold mb-4">1. Using our services</h3>
        <p>
          You must follow any policies made available to you within the Services. Don't misuse our Services. For example,
          don't interfere with our Services or try to access them using a method other than the interface and the
          instructions that we provide.
        </p>
        <p className="mt-4">
          Using our Services does not give you ownership of any intellectual property rights in our Services or the
          content you access. You may not use content from our Services unless you obtain permission from its owner or are
          otherwise permitted by law. These terms do not grant you the right to use any branding or logos used in our
          Services.
        </p>
      </div>

      {/* Personal Data Section */}
      <div className="py-12 px-6 md:px-12">
        <h3 className="text-xl font-semibold mb-4">A. Personal Data that we collect about you.</h3>
        <p>
          Personal Data is any information that relates to an identified or identifiable individual. The Personal Data that
          you provide directly to us through our Sites will be apparent from the context in which you provide the data.
        </p>
        <ul className="list-disc pl-8 mt-4">
          <li>When you register for an Olink account, we collect your full name, email address, and account log-in credentials.</li>
          <li>When you fill out our online form to contact our sales team, we collect your full name, work email, country, and anything else you tell us about your project, needs, and timeline.</li>
          <li>When you use the "Remember Me" feature of Olink Checkout, we collect your email address, payment card number, CVC code, and expiration date.</li>
          <li>When you respond to Olink emails or surveys, we collect your email address, name, and any other information you choose to include in the body of your email or responses.</li>
        </ul>
      </div>

      {/* Privacy and Copyright Protection */}
      <div className="bg-gray-800 py-12 px-6 md:px-12">
        <h3 className="text-xl font-semibold mb-4">2. Privacy and copyright protection</h3>
        <p>
          Olink's privacy policies explain how we treat your personal data and protect your privacy when you use our
          Services. By using our Services, you agree that Olink can use such data in accordance with our privacy policies.
        </p>
        <p className="mt-4">
          We respond to notices of alleged copyright infringement and terminate accounts of repeat infringers according to
          the process set out in the U.S. Digital Millennium Copyright Act.
        </p>
      </div>

      {/* Your Content in Our Services */}
      <div className="py-12 px-6 md:px-12">
        <h3 className="text-xl font-semibold mb-4">3. Your content in our services</h3>
        <p>
          Some of our Services allow you to upload, submit, store, send or receive content. You retain ownership of any
          intellectual property rights that you hold in that content. In short, what belongs to you stays yours.
        </p>
        <p className="mt-4">
          When you upload, submit, store, send or receive content to or through our Services, you give Olink (and those we
          work with) a worldwide license to use, host, store, reproduce, modify, create derivative works, communicate, publish,
          publicly perform, publicly display and distribute such content. The rights you grant in this license are for the
          limited purpose of operating, promoting, and improving our Services, and to develop new ones.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
