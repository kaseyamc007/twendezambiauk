import { motion } from "motion/react";
import { MessageCircle, CheckCircle2, Shield, BellRing, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsApp() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-secondary/10 skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-8"
          >
            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-primary shadow-xl rotate-3">
              <MessageCircle className="w-10 h-10 fill-current" />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif">WhatsApp Community</h1>
            <p className="text-xl text-primary-foreground/90 font-light leading-relaxed">
              Our exclusive WhatsApp Paid Members Group is the heartbeat of our community. Stay informed, stay connected, and stand together in real-time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
               <h2 className="text-4xl leading-tight">Why Join the Members Group?</h2>
               
               <div className="space-y-8">
                 {[
                   {
                     title: "Real-time Bereavement Alerts",
                     desc: "Instant notifications when our community needs to mobilize for a repatriation call.",
                     icon: BellRing,
                     color: "bg-red-50 text-red-600"
                   },
                   {
                     title: "Formal Announcements",
                     desc: "Direct updates from the executive committee regarding organization milestones and financials.",
                     icon: Shield,
                     color: "bg-primary/10 text-primary"
                   },
                   {
                     title: "Community Networking",
                     desc: "Connect with Zambian professionals and families across different regions of the UK.",
                     icon: CheckCircle2,
                     color: "bg-secondary/10 text-secondary"
                   }
                 ].map((benefit) => (
                   <div key={benefit.title} className="flex gap-6">
                      <div className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center ${benefit.color}`}>
                        <benefit.icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold">{benefit.title}</h3>
                        <p className="text-slate-600 text-sm">{benefit.desc}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="bg-slate-900 rounded-[3rem] p-12 text-white space-y-8 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
               <div className="relative z-10 space-y-8">
                 <div className="space-y-2">
                   <h3 className="text-3xl">Access Requirements</h3>
                   <div className="h-1 w-20 bg-secondary rounded-full" />
                 </div>
                 
                 <ul className="space-y-6">
                    <li className="flex items-center gap-4 text-slate-300">
                       <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                       <span>Active paid membership (£10/year for adults)</span>
                    </li>
                    <li className="flex items-center gap-4 text-slate-300">
                       <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                       <span>Verified contact number</span>
                    </li>
                    <li className="flex items-center gap-4 text-slate-300">
                       <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                       <span>Adherence to community group rules</span>
                    </li>
                 </ul>

                 <div className="pt-8">
                    <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 h-16 rounded-2xl text-xl font-bold shadow-lg shadow-secondary/10 flex items-center gap-3">
                       <LinkIcon className="w-6 h-6" /> Request Group Link
                    </Button>
                    <p className="text-center text-xs text-slate-500 mt-4 italic">
                      * Membership will be verified by an administrator before access is granted.
                    </p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Rules Preview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-12">
           <h2 className="text-4xl text-slate-900">Group Etiquette & Rules</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                "No political or partisan discussions allowed.",
                "Mutual respect is mandatory at all times.",
                "No promotional spam or unrelated advertisements.",
                "Verify information before sharing to avoid misinformation.",
                "Keep discussions relevant to the Zambian community in UK.",
                "Strictly follow bereavement call instructions."
              ].map((rule, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-slate-700 text-sm">{rule}</span>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
