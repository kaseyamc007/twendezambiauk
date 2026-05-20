import { motion } from "motion/react";
import { Shield, Target, Award, Users, Heart } from "lucide-react";

export default function About() {
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
            <h1 className="text-5xl md:text-7xl">About Our Community</h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              Twende Zambia UK is an independent, non-partisan, non-profit community organization that supports Zambians living in the United Kingdom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex py-1 px-4 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest">Our Story</div>
              <h2 className="text-4xl md:text-5xl leading-tight">Why We Were Founded</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  During times of mourning, many individuals in our community encounter the challenging task of bringing their loved ones back home due to financial limitations.
                </p>
                <p>
                  Twende Zambia UK was created so that no family has to face this burden alone. We believe that every individual deserves a dignified farewell in their homeland, regardless of their financial circumstances at the time of their passing.
                </p>
                <p>
                  As an independent and non-partisan organization, our focus remains strictly on community support and empowerment, ensuring that the bonds between Zambians in the UK remain strong and supportive.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden rotate-3 shadow-2xl">
                 <div className="absolute inset-0 bg-primary/5 p-12 flex items-center justify-center">
                    <p className="text-3xl font-serif text-center italic text-slate-800 leading-relaxed">
                      "To unite Zambians in the UK and provide financial support during times of mourning."
                    </p>
                 </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary rounded-full -z-10 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl">Our Core Values</h2>
            <p className="text-slate-600">The pillars that guide our organization and every decision we make for our community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Unity", desc: "Zambians in the UK standing together as one family.", icon: Users, color: "text-primary" },
              { title: "Compassion", desc: "Supporting each other through empathy and real action.", icon: Heart, color: "text-secondary" },
              { title: "Dignity", desc: "Ensuring proper repatriation for our deceased loved ones.", icon: Award, color: "text-accent" },
              { title: "Support", desc: "A practical financial mechanism that anyone can benefit from.", icon: Shield, color: "text-slate-900" },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 shadow-inner`}>
                   <value.icon className={`w-7 h-7 ${value.color}`} />
                </div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 flex flex-col p-12 bg-primary rounded-[3rem] text-white">
              <Target className="w-12 h-12 mb-4" />
              <h2 className="text-4xl text-white">Our Mission</h2>
              <p className="text-xl leading-relaxed text-primary-foreground/90 font-light">
                To unite Zambians in the UK and provide financial support during times of mourning, ensuring that families can bring their loved ones home with dignity and without the stress of financial barriers.
              </p>
            </div>
            <div className="space-y-6 flex flex-col p-12 bg-slate-900 rounded-[3rem] text-white">
              <Award className="w-12 h-12 mb-4 text-secondary" />
              <h2 className="text-4xl text-secondary">Our Vision</h2>
              <p className="text-xl leading-relaxed text-slate-400 font-light">
                A thriving, connected Zambian community in the UK where no individual is left to face the logistical and financial burdens of loss alone, regardless of their background or political affiliation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
