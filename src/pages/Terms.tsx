import { motion } from "motion/react";

export default function Terms() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl space-y-8">
        <h1 className="text-4xl md:text-6xl mb-8">Terms of Service</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed font-light">
          <p className="font-bold text-slate-900 italic">Effective Date: May 19, 2026</p>
          <p>
            By joining Twende Zambia UK, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-2xl font-serif font-bold text-slate-900 pt-6">1. Membership Eligibility</h2>
          <p> Membership is open to Zambians living in the UK and their immediate families. All members must be verified by the community executive committee. </p>

          <h2 className="text-2xl font-serif font-bold text-slate-900 pt-6">2. Contributions</h2>
          <p> Members agree to contribute £30 upon a formal bereavement call for an eligible community member. Failure to contribute may affect your own eligibility status. </p>

          <h2 className="text-2xl font-serif font-bold text-slate-900 pt-6">3. Eligibility for Payout</h2>
          <p> To qualify for the £10,000 support fund, you must have been an active, contributing member for a minimum of 6 continuous months. </p>

          <h2 className="text-2xl font-serif font-bold text-slate-900 pt-6">4. Non-Partisan Conduct</h2>
          <p> Twende Zambia UK is a non-political organization. Members must refrain from introducing political or partisan discussions into official community channels. </p>

          <h2 className="text-2xl font-serif font-bold text-slate-900 pt-6">5. Contact</h2>
          <p> For all official communication, please use info@twendezambia.co.uk. </p>
        </div>
      </div>
    </div>
  );
}
