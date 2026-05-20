import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, DollarSign, Users, MessageSquare, CreditCard } from "lucide-react";

const STEPS = [
  {
    title: "Register as a Member",
    desc: "Create an account for yourself or your children. Provide basic details to start your journey with Twende Zambia UK.",
    icon: Users,
    detail: "Open to all Zambians and their families living in the UK."
  },
  {
    title: "Pay Annual Membership Fee",
    desc: "Pay a minimal annual fee (£10 for adults, £5 for children) to cover administrative costs and maintain the organization.",
    icon: CreditCard,
    detail: "Fees are used for organizational maintenance, not the repatriation fund."
  },
  {
    title: "Join the WhatsApp Group",
    desc: "Gain access to our exclusive paid members group for real-time community engagement and formal announcements.",
    icon: MessageSquare,
    detail: "The primary hub for community communication and bereavement alerts."
  },
  {
    title: "Contribute When Required",
    desc: "When the community needs to raise funds for a repatriation, each member contributes £30 to reach the payout goal.",
    icon: DollarSign,
    detail: "Collective responsibility means a small contribution from many creates a large impact for one."
  },
  {
    title: "Qualify for Support",
    desc: "After being an active member for 6 months, you are fully eligible for the £10,000 funeral support fund.",
    icon: CheckCircle2,
    detail: "Continuous membership ensures the sustainability of our support system."
  }
];

export default function HowItWorks() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-6"
          >
            <h1 className="text-5xl md:text-7xl">How It Works</h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              Our community is built on mutual support and collective responsibility. Follow these simple steps to become a part of the TZ UK family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps List */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-12 mb-24 last:mb-0 items-center"
              >
                <div className={`w-full md:w-1/2 ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="relative">
                    <div className="text-[12rem] font-serif font-black text-slate-50 absolute -left-12 -top-24 select-none">
                      0{i + 1}
                    </div>
                    <div className="relative z-10 space-y-6">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20">
                         <step.icon className="w-8 h-8" />
                      </div>
                      <h2 className="text-3xl md:text-4xl">{step.title}</h2>
                      <p className="text-xl text-slate-600 font-light leading-relaxed">
                        {step.desc}
                      </p>
                      <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-secondary text-sm font-medium text-slate-700">
                        {step.detail}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                   <div className="aspect-video bg-slate-100 rounded-[2rem] overflow-hidden shadow-inner flex items-center justify-center">
                      <div className="text-slate-400 font-bold uppercase tracking-tighter text-4xl opacity-10">Twende Zambia UK</div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payout Logic */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-[3rem] bg-black/10 p-12 md:p-20 text-center space-y-8">
             <h2 className="text-4xl text-white">The Power of 335</h2>
             <p className="text-xl text-primary-foreground/90 font-light leading-relaxed">
               Once our community reaches 335 active members, each contributing £30 during a bereavement call, we generate a total of approximately <span className="font-bold text-white">£10,000</span>. This fund is then immediately available to assist the eligible family with funeral and repatriation costs.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
               <div className="flex flex-col items-center">
                 <span className="text-4xl font-serif font-bold">335</span>
                 <span className="text-xs uppercase tracking-widest text-primary-foreground/70">Members</span>
               </div>
               <div className="text-3xl font-light opacity-50">×</div>
               <div className="flex flex-col items-center">
                 <span className="text-4xl font-serif font-bold">£30</span>
                 <span className="text-xs uppercase tracking-widest text-primary-foreground/70">Contribution</span>
               </div>
               <div className="text-3xl font-light opacity-50">=</div>
               <div className="flex flex-col items-center px-8 py-4 bg-secondary rounded-2xl">
                 <span className="text-4xl font-serif font-bold">£10,000</span>
                 <span className="text-xs uppercase tracking-widest text-white/90">Support Fund</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl">Ready to Join Us?</h2>
            <p className="text-slate-600 text-lg">
              Start your application today and become part of a community that stands together.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-white rounded-full px-10 h-14">
                 <Link to="/membership">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-14">
                 <Link to="/faq">View FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
