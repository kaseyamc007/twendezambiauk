import { motion } from "motion/react";

export default function Privacy() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl space-y-8">
        <h1 className="text-4xl md:text-6xl mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed font-light">
          <p className="font-bold text-slate-900 italic">Effective Date: May 19, 2026</p>
          <p>
            Twende Zambia UK is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you join our community and use our services.
          </p>
          
          <h2 className="text-2xl font-serif font-bold text-slate-900 pt-6">1. Information We Collect</h2>
          <p> We collect information that you provide directly to us during the registration process, including: </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and contact details (email, phone number).</li>
            <li>Proof of residency or Zambian nationality (if required for verification).</li>
            <li>Payment information handled securely through our processing partners (Stripe/PayPal).</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-slate-900 pt-6">2. Use of Information</h2>
          <p> Your information is used strictly for community administration, bereavement support coordination, and communication of organization updates. We do not sell or share your data with third-party marketers. </p>

          <h2 className="text-2xl font-serif font-bold text-slate-900 pt-6">3. Data Security</h2>
          <p> We implement a variety of security measures to maintain the safety of your personal information. Our database is secured with industry-standard encryption. </p>

          <h2 className="text-2xl font-serif font-bold text-slate-900 pt-6">4. Contact Us</h2>
          <p> If you have any questions about this Privacy Policy, please contact us at info@twendezambia.co.uk. </p>
        </div>
      </div>
    </div>
  );
}
