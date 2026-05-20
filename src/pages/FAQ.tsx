import { motion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Who can join Twende Zambia UK?",
    a: "Membership is open to all Zambians living in the United Kingdom, as well as their children. We are a community-focused organization dedicated to supporting our fellow nationals."
  },
  {
    q: "How long before I qualify for the £10,000 support?",
    a: "Members must be active and in good standing for at least 6 months before becoming eligible for the full £10,000 repatriation support fund."
  },
  {
    q: "What does the £10,000 support cover?",
    a: "The fund is primarily intended to cover the costs associated with funeral services and the repatriation of the deceased member back to Zambia, ensuring dignity for the family during their time of loss."
  },
  {
    q: "How are the contributions managed?",
    a: "When a bereavement occurs within the eligible membership, we call for a £30 contribution from each of our 335 members. These funds are pooled and distributed directly to the bereaved family's chosen funeral directors or responsible party."
  },
  {
    q: "Is the organization political or partisan?",
    a: "No. Twende Zambia UK is strictly independent, non-partisan, and non-profit. Our only mission is community support and empowerment through collective action."
  },
  {
    q: "What are the membership fees used for?",
    a: "The annual membership fees (£10 for adults, £5 for children) are used for administrative costs, maintaining our website and communication systems, and legal compliance. They are distinct from the £30 repatriation contributions."
  },
  {
    q: "How do I join the WhatsApp group?",
    a: "Once your annual membership fee is successfully paid and verified, you will be invited to join the exclusive WhatsApp group by an administrator."
  }
];

export default function FAQ() {
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
            <h1 className="text-5xl md:text-7xl">Frequently Asked Questions</h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              Find answers to common questions about membership, contributions, and how we support our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-slate-200 rounded-2xl px-6 overflow-hidden bg-slate-50/50">
                <AccordionTrigger className="text-left text-lg font-serif font-bold py-6 hover:text-primary transition-colors hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-lg font-light leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Further Assistance */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 text-center space-y-8">
           <h2 className="text-3xl">Couldn't find what you were looking for?</h2>
           <p className="text-slate-600">Our team is always here to help you with any specific queries you might have.</p>
           <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/10 transition-all active:scale-95">
             Contact Support
           </button>
        </div>
      </section>
    </div>
  );
}
