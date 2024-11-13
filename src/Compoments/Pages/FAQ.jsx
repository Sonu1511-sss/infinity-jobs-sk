import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-collapse';

const FAQPage = () => {
  const [isOpen, setIsOpen] = useState({
    basics: true,
    syncing: false,
    privacy: false,
    billing: false,
    troubleshooting: false,
  });

  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      {/* Top Section with Blue Background */}
      <div className="bg-blue-500 text-white flex flex-col justify-center items-center dark:text-gray-100 h-[20rem]">
        <h1 className="text-3xl font-bold">How Can We Help?</h1>
        <div className="mt-4 text-gray-700">
          <input
            type="text"
            id="question"
            placeholder="Ask a Question:"
            className="w-[34rem] mt-2 p-2 border border-gray-500 rounded-lg dark:bg-gray-700 text-gray-700 dark:border-gray-200 dark:text-gray-700 placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-full"
          />
        </div>

        {/* Popular Help Topics Links */}
        <div className="mt-4 flex flex-col justify-center items-center">
          <h2 className="font-semibold">Popular help topics:</h2>
          <div className="flex space-x-4 mt-2 flex-wrap justify-center">
            <Link to="/pricing" className="text-blue-200 hover:text-blue-100">Pricing</Link>
            <Link to="/upgrade" className="text-blue-200 hover:text-blue-100">Upgrade</Link>
            <Link to="/hosting" className="text-blue-200 hover:text-blue-100">Hosting</Link>
            <Link to="/membership" className="text-blue-200 hover:text-blue-100">Membership</Link>
          </div>
        </div>
      </div>

      {/* FAQ Categories Section */}
      <div className="p-8 dark:bg-gray-800 flex flex-col justify-center dark:text-gray-100 mt-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold flex justify-center items-center text-blue-500 mb-4">Frequently Asked Questions</h2>

        {/* Basics Section */}
        <div className="mt-4 flex flex-col justify-center items-center bg-gray-700 p-3 rounded-lg">
          <h3
            className="font-bold text-xl cursor-pointer hover:text-blue-400 flex items-center"
            onClick={() => toggleSection('basics')}
            aria-expanded={isOpen.basics ? 'true' : 'false'}
            aria-controls="basics-section"
          >
            Basics
            <span className={`ml-2 transform transition-transform ${isOpen.basics ? 'rotate-45' : ''}`}>+</span>
          </h3>
          <Collapse isOpened={isOpen.basics} id="basics-section">
            <div className="mt-2 space-y-4 text-lg">
              <p>What is your service?</p>
              <p>We offer a subscription-based service providing access to premium features including syncing, privacy controls, and advanced troubleshooting options.</p>
              <p>How do I sign up?</p>
              <p>To sign up, simply click on the 'Sign Up' button on the top right of the homepage, fill in your details, and follow the on-screen instructions.</p>
              <p>What are the subscription options?</p>
              <p>We offer monthly and yearly subscription options. You can choose the plan that best fits your needs during the sign-up process.</p>
            </div>
          </Collapse>
        </div>

        {/* Syncing Section */}
        <div className="mt-4 flex flex-col justify-center items-center bg-gray-700 p-3 rounded-lg">
          <h3
            className="font-bold text-xl cursor-pointer hover:text-blue-400 flex items-center"
            onClick={() => toggleSection('syncing')}
            aria-expanded={isOpen.syncing ? 'true' : 'false'}
            aria-controls="syncing-section"
          >
            Syncing
            <span className={`ml-2 transform transition-transform ${isOpen.syncing ? 'rotate-45' : ''}`}>+</span>
          </h3>
          <Collapse isOpened={isOpen.syncing} id="syncing-section">
            <div className="mt-2 space-y-4 text-lg">
              <p>How do I sync my account?</p>
              <p>To sync your account, go to the 'Settings' page, select 'Sync Account,' and follow the instructions to connect to your devices.</p>
              <p>What happens if syncing fails?</p>
              <p>If syncing fails, please ensure your internet connection is stable, and try syncing again. If the issue persists, contact support for assistance.</p>
            </div>
          </Collapse>
        </div>

        {/* Account Privacy Section */}
        <div className="mt-4 flex flex-col justify-center items-center bg-gray-700 p-3 rounded-lg">
          <h3
            className="font-bold text-xl cursor-pointer hover:text-blue-400 flex items-center"
            onClick={() => toggleSection('privacy')}
            aria-expanded={isOpen.privacy ? 'true' : 'false'}
            aria-controls="privacy-section"
          >
            Account Privacy
            <span className={`ml-2 transform transition-transform ${isOpen.privacy ? 'rotate-45' : ''}`}>+</span>
          </h3>
          <Collapse isOpened={isOpen.privacy} id="privacy-section">
            <div className="mt-2 space-y-4 text-lg">
              <p>How is my data protected?</p>
              <p>We use encryption to protect your personal data and ensure your account is secure. All data is stored in compliance with industry standards.</p>
              <p>Can I delete my account?</p>
              <p>Yes, you can delete your account by going to 'Account Settings' and clicking on 'Delete Account.' Please note that this action is irreversible.</p>
            </div>
          </Collapse>
        </div>

        {/* Billing Section */}
        <div className="mt-4 flex flex-col justify-center items-center bg-gray-700 p-3 rounded-lg">
          <h3
            className="font-bold text-xl cursor-pointer hover:text-blue-400 flex items-center"
            onClick={() => toggleSection('billing')}
            aria-expanded={isOpen.billing ? 'true' : 'false'}
            aria-controls="billing-section"
          >
            Billing
            <span className={`ml-2 transform transition-transform ${isOpen.billing ? 'rotate-45' : ''}`}>+</span>
          </h3>
          <Collapse isOpened={isOpen.billing} id="billing-section">
            <div className="mt-2 space-y-4 text-lg">
              <p>What payment methods do you accept?</p>
              <p>We accept credit cards, debit cards, and PayPal. You can select your preferred payment method during checkout.</p>
              <p>How can I update my payment information?</p>
              <p>To update your payment information, go to 'Account Settings' and select 'Billing Info.' From there, you can edit your payment details.</p>
              <p>When will I be charged?</p>
              <p>You will be charged based on your chosen subscription plan: monthly or yearly. Charges will occur at the beginning of each billing cycle.</p>
            </div>
          </Collapse>
        </div>

        {/* Troubleshooting Section */}
        <div className="mt-4 flex flex-col justify-center items-center bg-gray-700 p-3 rounded-lg">
          <h3
            className="font-bold text-xl cursor-pointer hover:text-blue-400 flex items-center"
            onClick={() => toggleSection('troubleshooting')}
            aria-expanded={isOpen.troubleshooting ? 'true' : 'false'}
            aria-controls="troubleshooting-section"
          >
            Troubleshooting
            <span className={`ml-2 transform transition-transform ${isOpen.troubleshooting ? 'rotate-45' : ''}`}>+</span>
          </h3>
          <Collapse isOpened={isOpen.troubleshooting} id="troubleshooting-section">
            <div className="mt-2 space-y-4 text-lg">
              <p>What should I do if my app crashes?</p>
              <p>If the app crashes, try restarting your device or reinstalling the app. If the issue continues, contact our support team.</p>
              <p>How do I clear my browser cache?</p>
              <p>To clear your cache, go to your browser settings, find 'Privacy' or 'History,' and select 'Clear Browsing Data.'</p>
              <p>What to do if I forget my password?</p>
              <p>If you forget your password, click on 'Forgot Password' on the login page, and follow the instructions to reset it.</p>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
