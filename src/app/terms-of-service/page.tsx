import React from 'react';
import Head from 'next/head';

const TermsOfService = () => {
  const termsSections = [
    {
      title: 'Terms of Service',
      content: 'Last updated: June 29, 2025\n\nWelcome to Mothers Meal Catering Services. These Terms of Service (“Terms”) govern your access to and use of our website, mobile application, and any related services (collectively, the “Service”).\n\nBy accessing or using our Service, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our Service.',
    },
    {
      title: '1. Use of Our Service',
      content: '1.1 Eligibility\nYou must be at least 18 years old to use our Service. By using the Service, you represent that you have the legal capacity to enter into this agreement.\n\n1.2 Account Information\nYou may be required to create an account to place orders. You agree to provide true, accurate, and complete information and keep it up to date.\n\n1.3 Responsible Use\nYou agree to use our Service only for lawful purposes. You shall not misuse our Service or attempt unauthorized access to our systems.',
    },
    {
      title: '2. Orders & Payments',
      content: '2.1 Placing Orders\nBy placing an order through our Service, you agree to provide accurate delivery information and pay the applicable charges.\n\n2.2 Pricing\nAll prices are listed in INR and include applicable taxes unless stated otherwise. Prices and menu items may change without prior notice.\n\n2.3 Payment\nPayments must be made through our secure payment gateways. We do not store your payment card details.\n\n2.4 Cancellation & Refunds\nCancellations may be accepted only within a limited time window. Refunds will be processed according to our Refund Policy.',
    },
    {
      title: '3. Delivery',
      content: '3.1 Service Area\nMothers Meal Catering Services currently delivers only within select localities in Hyderabad, Telangana, India.\n\n3.2 Timeliness\nWe aim to deliver your meals on time, but delays may occur due to factors beyond our control (traffic, weather, unforeseen events).',
    },
    {
      title: '4. User Content',
      content: '4.1 Feedback & Reviews\nAny feedback, reviews, or suggestions you provide may be used by us to improve our Service. You grant us a non-exclusive right to use this content.\n\n4.2 Prohibited Content\nYou shall not post or transmit any content that is unlawful, defamatory, harassing, or infringes any intellectual property rights.',
    },
    {
      title: '5. Intellectual Property',
      content: 'All content on our website and app, including logos, text, images, and graphics, is the property of Mothers Meal Catering Services or its licensors and is protected by copyright and trademark laws. You may not use our content without prior written permission.',
    },
    {
      title: '6. Limitation of Liability',
      content: 'Mothers Meal Catering Services shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service. Our total liability shall not exceed the amount paid by you for the specific order giving rise to the claim.',
    },
    {
      title: '7. Indemnification',
      content: 'You agree to indemnify and hold harmless Mothers Meal Catering Services and its directors, employees, and partners from any claims, damages, or demands arising from your misuse of the Service or violation of these Terms.',
    },
    {
      title: '8. Termination',
      content: 'We may suspend or terminate your access to the Service at any time if we believe you have violated these Terms.',
    },
    {
      title: '9. Changes to These Terms',
      content: 'We may update these Terms from time to time. We will post the updated Terms on our website with the revised “Last updated” date. Continued use of the Service constitutes acceptance of the new Terms.',
    },
    {
      title: '10. Governing Law',
      content: 'These Terms shall be governed by and construed under the laws of India. Any disputes shall be resolved in the courts of Hyderabad, Telangana.',
    },
    {
      title: '11. Contact Us',
      content: '📧 Email: support@mothersmeal.in\n📞 Phone: +91 90304 99393\n📍 Address: Hyderabad, Telangana, India',
    },
  ];

  return (
    <>
      <Head>
        <title>Terms of Service - Mother Meals</title>
        <meta name="description" content="Read the terms and conditions for using Mother Meals' services." />
        <meta name="keywords" content="terms of service, Mother Meals, food delivery terms" />
        <meta property="og:title" content="Terms of Service - Mother Meals" />
        <meta property="og:description" content="Read the terms and conditions for using Mother Meals' services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mothermeals.com/terms-of-service" />
        <meta property="og:image" content="/og-image-terms-of-service.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service - Mother Meals" />
        <meta name="twitter:description" content="Read the terms and conditions for using Mother Meals' services." />
        <meta name="twitter:image" content="/og-image-terms-of-service.jpg" />
      </Head>
      <div className="termsOfServicePage bg-gray-50 min-h-screen py-10 px-6">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-[#ff3700] mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Please read these Terms of Service carefully before using our services.
          </p>
        </div>

        {/* Terms of Service Content */}
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          {termsSections.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h2>
              <p className="text-gray-600 whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TermsOfService;