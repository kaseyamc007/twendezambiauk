import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Users, Heart, ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import logoImg from "@/assets/images/zambian_community_uk_1779202184111.png";
import heroBg from "@/assets/images/hero_gathering_bg_1779259091939.png";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-slate-900 text-white">
        {/* Background Image Placeholder/Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroBg}
            alt="Zambian Community UK Celebration and Support"
            className="w-full h-full object-cover opacity-35 scale-102"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md pl-2 pr-5 py-1.5 rounded-full border border-white/20">
                <img 
                  src={logoImg}
                  alt="Logo"
                  className="w-8 h-8 object-contain rounded-full bg-white p-0.5"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-200">Zambians in the UK</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                Are You a Zambian <br />
                <span className="text-secondary italic">Living in the UK?</span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
                Join Twende Zambia UK and stand together with your community during life's most difficult moments. We ensure families can bring their loved ones home with dignity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/95 text-white text-lg h-14 px-8 rounded-full shadow-lg shadow-primary/20">
                  <Link to="/membership">Join Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/5 hover:bg-white/10 border-white/20 text-white text-lg h-14 px-8 rounded-full backdrop-blur-sm">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="hidden lg:flex lg:col-span-5 justify-center relative"
            >
              {/* Glowing backing element */}
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-75 animate-pulse" />
              <div className="relative bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/15 shadow-2xl max-w-sm w-full text-center">
                <img 
                  src={logoImg}
                  alt="Twende Zambia UK Council Crest"
                  className="w-60 h-60 mx-auto object-contain bg-white rounded-[2rem] p-4 shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-6 space-y-1">
                  <h3 className="text-white text-xl font-bold font-serif">Twende Zambia UK</h3>
                  <p className="text-slate-300 text-xs tracking-widest uppercase font-sans font-semibold">Empowering Community, Embracing Unity</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <ArrowRight className="w-6 h-6 rotate-90" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Contribution", value: "£30", sub: "Variable Contribution", icon: Heart },
              { label: "Members Goal", value: "335", sub: "Active Community", icon: Users },
              { label: "Support Fund", value: "£10,000", sub: "Repatriation Assistance", icon: Shield },
              { label: "Eligibility", value: "6 Months", sub: "Active Membership", icon: CheckCircle2 },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center space-y-2 p-6 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-serif font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Preview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-4xl md:text-5xl">How Our Community Works</h2>
              <p className="text-slate-600 text-lg">
                Twende Zambia UK was created so that no family has to face the burden of repatriation alone. Here is how we support each other.
              </p>
            </div>
            <Button asChild variant="link" className="text-primary font-bold text-lg p-0 h-auto">
              <Link to="/how-it-works" className="flex items-center gap-2">
                View Full Process <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Register & Join",
                desc: "Sign up as an adult or child member. Pay a small annual administration fee to keep the organization running.",
              },
              {
                step: "02",
                title: "Active Participation",
                desc: "Join our exclusive members WhatsApp group and stay active for at least 6 months to qualify for support.",
              },
              {
                step: "03",
                title: "Collective Support",
                desc: "When a bereavement occurs, members contribute £30 each. Total funds provide up to £10,000 for the family.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group"
              >
                <div className="text-6xl font-serif font-black text-slate-50 absolute -right-4 -top-4 transition-colors group-hover:text-primary/5">
                  {step.step}
                </div>
                <h3 className="text-2xl mb-4 relative z-10">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Callout */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary/20 skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-primary shrink-0 rotate-3">
              <MessageCircle className="w-12 h-12 fill-current" />
            </div>
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-4xl text-white">Join Our WhatsApp Community</h2>
              <p className="text-primary-foreground/90 text-xl font-light">
                Connect with fellow Zambians across the UK. Get real-time updates, community support, and access to exclusive resources.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-slate-100 rounded-full px-10 h-14 font-bold text-lg">
                <Link to="/whatsapp">Join WhatsApp Group</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl">Community Voices</h2>
            <p className="text-slate-600">Hear from our members who have found support and solidarity within Twende Zambia UK.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mwenya M.",
                location: "London",
                text: "During times of mourning, the financial burden of repatriation is immense. Twende Zambia UK gave us the peace of mind we needed.",
              },
              {
                name: "Chanda K.",
                location: "Birmingham",
                text: "It's more than just a fund; it's a family. The WhatsApp group is a great place to connect and support each other.",
              },
              {
                name: "Lubuto S.",
                location: "Manchester",
                text: "An incredible initiative. Dignity for our loved ones is our priority, and this organization makes it possible.",
              },
            ].map((t, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                <p className="italic text-slate-700 leading-relaxed">"{t.text}"</p>
                <div className="pt-4 border-t border-slate-200">
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-secondary">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-slate-900 relative">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl text-white">Stand Together When It <br /><span className="text-secondary italic">Matters Most</span></h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            No family should have to face the burden of repatriation alone. Join our community today and ensure dignity for all.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-12 h-16 text-xl shadow-xl shadow-secondary/20">
            <Link to="/membership">Join Our Community Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
