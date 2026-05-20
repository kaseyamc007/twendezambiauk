import { motion } from "motion/react";
import { Mail, Phone, Facebook, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Contact() {
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
            <h1 className="text-5xl md:text-7xl">Get in Touch</h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              Have questions or need assistance? Our team is here to support you. Reach out through any of our channels.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl">Contact Information</h2>
                <p className="text-slate-600">Our dedicated team is available to assist you with membership queries, bereavement support, and community coordination.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3 p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-start group hover:bg-primary hover:text-white transition-all">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-2 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="font-bold">Email Us</div>
                  <div className="text-sm opacity-80">info@twendezambia.co.uk</div>
                </div>

                <div className="space-y-3 p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-start group hover:bg-secondary hover:text-white transition-all">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm mb-2 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="font-bold">Call Us</div>
                  <div className="text-sm opacity-80">+44 7376 575093</div>
                </div>

                <div className="space-y-3 p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-start group hover:bg-slate-900 hover:text-white transition-all">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-sm mb-2 group-hover:scale-110 transition-transform">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <div className="font-bold">Facebook</div>
                  <div className="text-sm opacity-80">Twende Zambia UK</div>
                </div>

                <div className="space-y-3 p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-start group hover:bg-primary hover:text-white transition-all text-slate-900">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-2 group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div className="font-bold">Website</div>
                  <div className="text-sm opacity-80">www.twendezambia.co.uk</div>
                </div>
              </div>

               <div className="p-8 bg-emerald-900 rounded-[2rem] text-white space-y-4">
                  <h3 className="text-2xl font-serif">Community Notice</h3>
                  <p className="text-emerald-100/80 font-light italic">
                    "During times of mourning, Twende Zambia UK was created so that no family has to face the burden of repatriation alone. We prioritized your dignity above all."
                  </p>
               </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="rounded-[3rem] p-4 md:p-12 shadow-2xl border-none ring-1 ring-slate-100">
                <CardHeader className="space-y-4 text-center md:text-left mb-8">
                  <CardTitle className="text-4xl">Send us a Message</CardTitle>
                  <CardDescription className="text-lg">Fill out the form below and we'll get back to you within 24-48 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" className="h-12 rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" className="h-12 rounded-xl" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="h-12 rounded-xl" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Membership Query" className="h-12 rounded-xl" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">How can we help?</Label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Type your message here..."
                      />
                    </div>

                    <Button type="submit" className="w-full h-14 rounded-full bg-primary hover:bg-primary/90 text-lg font-bold flex items-center gap-2">
                      Send Message <Send className="w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
