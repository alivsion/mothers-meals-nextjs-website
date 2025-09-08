'use client';

import React from 'react';
import Head from 'next/head';

interface PolicySection {
  title: string;
  content: string;
}

const PrivacyPolicy: React.FC = () => {
  const policySections: PolicySection[] = [
    {
      title: 'Privacy Policy',
      content: 'Last updated: June 29, 2025\n\nMothers Meal Catering Services (“we”, “our”, or “us”) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile app, place orders, or interact with our services in any way.\n\nPlease read this Privacy Policy carefully. By using our services, you agree to the collection and use of information in accordance with this policy.',
    },
    {
      title: '1. Information We Collect',
      content: 'We collect several types of information to provide and improve our service for you:\n\n1.1 Personal Identification Information\n- Full name\n- Email address\n- Phone number\n- Delivery address\n- Payment information (processed securely via third-party gateways)\n\n1.2 Usage Data\n- IP address\n- Browser type and version\n- Device information\n- Pages you visit and time spent\n- Referring URLs\n\n1.3 Cookies & Tracking Technologies\nWe use cookies and similar tracking technologies to monitor site activity and store certain information to improve your experience.',
    },
    {
      title: '2. How We Use Your Information',
      content: 'To process and deliver your orders accurately.\nTo communicate with you regarding your orders, updates, offers, or any issues.\nTo improve our products, services, and customer experience.\nTo send promotional materials, newsletters, or marketing communications you have opted in to receive.\nTo monitor and analyze usage to detect, prevent, and address technical issues or fraud.',
    },
    {
      title: '3. How We Share Your Information',
      content: 'We do not sell your personal information. However, we may share information in the following ways:\n\n- With trusted service providers: Such as payment processors, delivery partners, and analytics providers who help us operate our service.\n- For legal compliance: If required by law or in response to valid requests by public authorities.\n- In business transfers: If we are involved in a merger, acquisition, or asset sale, your personal data may be transferred.',
    },
    {
      title: '4. How We Protect Your Data',
      content: 'Your privacy and security are important to us. We implement a variety of technical and organizational measures to maintain the safety of your personal data:\n\n- Secure servers and encrypted connections (HTTPS/SSL).\n- Payments processed via trusted, PCI-compliant payment gateways.\n- Limited access to personal data by authorized staff only.\n- Regular monitoring for potential vulnerabilities.\n\nHowever, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure. We cannot guarantee absolute security, but we work hard to protect your data.',
    },
    {
      title: '5. Your Rights',
      content: 'Depending on your location, you may have the following rights:\n\n- The right to access and obtain a copy of your personal data.\n- The right to update or correct any inaccurate or incomplete data.\n- The right to request deletion of your data when it is no longer needed.\n- The right to withdraw consent for marketing communications.\n- The right to complain to a data protection authority if you believe your privacy rights have been violated.\n\nTo exercise any of these rights, please contact us at the email below.',
    },
    {
      title: '6. Third-Party Services',
      content: 'Our website and app may contain links to third-party sites or use third-party services, such as:\n\n- Payment gateways (e.g., Razorpay, Stripe, PayPal)\n- Analytics tools (e.g., Google Analytics)\n- Social media plugins (e.g., Facebook, Instagram)\n\nPlease note that we do not control and are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies.',
    },
    {
      title: '7. Children’s Privacy',
      content: 'Our service is not intended for children under the age of 13. We do not knowingly collect personally identifiable information from children. If we become aware that we have collected data from children without parental consent, we will take steps to remove that information from our servers.',
    },
    {
      title: '8. Changes to This Privacy Policy',
      content: 'We may update our Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the “Last updated” date.\n\nYou are advised to review this Privacy Policy periodically for any changes.',
    },
    {
      title: '9. Contact Us',
      content: 'If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:\n\n📧 Email: support@mothersmeal.in\n📞 Phone: +91 90304 99393\n📍 Address: Hyderabad, Telangana, India',
    },
  ];

  return (
    <>
      <Head>
        <title>Privacy Policy - Mother Meals</title>
        <meta name="description" content="Learn how we collect, use, and protect your personal data at Mother Meals." />
        <meta name="keywords" content="privacy policy, data protection, Mother Meals" />
        <meta property="og:title" content="Privacy Policy - Mother Meals" />
        <meta property="og:description" content="Learn how we collect, use, and protect your personal data at Mother Meals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mothermeals.com/privacy-policy" />
        <meta property="og:image" content="/og-image-privacy-policy.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - Mother Meals" />
        <meta name="twitter:description" content="Learn how we collect, use, and protect your personal data at Mother Meals." />
        <meta name="twitter:image" content="/og-image-privacy-policy.jpg" />
      </Head>
      <div className="privacyPolicyPage bg-gray-50 min-h-screen py-10 px-6">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-[#ff3700] mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          {policySections.map((section, index) => (
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

export default PrivacyPolicy;