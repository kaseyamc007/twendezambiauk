import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Users, 
  CreditCard, 
  History, 
  Bell, 
  ArrowUpRight, 
  Wallet,
  Clock,
  ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function Dashboard() {
  const [user, setUser] = useState<{ fullName: string; email: string; plan: string; status: string } | null>(null);
  const [contributions, setContributions] = useState<Array<{ name: string; date: string; amount: string; status: string }>>([
    { name: "Annual Membership Fee", date: "Feb 10, 2026", amount: "-£10.00", status: "Completed" },
    { name: "Funeral Support Contribution", date: "Jan 12, 2026", amount: "-£30.00", status: "Completed" },
  ]);
  const [contributionTotal, setContributionTotal] = useState(30);

  useEffect(() => {
    const savedUser = localStorage.getItem("twende_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleContribute = () => {
    const newCont = {
      name: "Active Bereavement Contribution",
      date: new Date().toLocaleDateString("en-GB", { day: 'numeric', month: 'short', year: 'numeric' }),
      amount: "-£30.00",
      status: "Completed"
    };
    setContributions([newCont, ...contributions]);
    setContributionTotal(prev => prev + 30);
    toast.success("Thank you for your timely contribution of £30 to support a bereaved community family!");
  };

  const name = user?.fullName || "Mwenya Mukuka";
  const userPlan = user?.plan || "adult";

  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div className="space-y-1">
            <h1 className="text-4xl text-slate-900">Member Dashboard</h1>
            <p className="text-slate-500 font-light">Welcome back, {name}. Your {userPlan} membership is in good standing.</p>
          </div>
          <div className="flex items-center gap-3">
             <Button variant="outline" className="rounded-xl border-slate-200 bg-white" onClick={() => toast.info("No new notifications at this time.")}>
                <Bell className="w-5 h-5" />
             </Button>
             <Button className="rounded-xl bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-2" onClick={() => toast.success("Membership card downloaded successfully!")}>
                Download Membership Card <ArrowUpRight className="w-4 h-4" />
             </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Status", value: "Active", icon: ShieldCheck, color: "text-primary", bg: "bg-primary/10", sub: "Verified UK Member" },
            { label: "Eligibility", value: "6 Months", sub: "Fully Eligible", icon: Clock, color: "text-emerald-600", bg: "bg-emerald-50" },
            { label: "Your Contributions", value: `£${contributionTotal}`, icon: Wallet, color: "text-slate-900", bg: "bg-slate-100", sub: "Total contributed" },
            { label: "Community Goal", value: "312", sub: "Active of 335 members", icon: Users, color: "text-secondary", bg: "bg-orange-50" },
          ].map((stat) => (
            <Card key={stat.label} className="border-none shadow-sm rounded-3xl group transition-all hover:shadow-xl">
               <CardContent className="p-6 flex items-center gap-4">
                  <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center shrink-0`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{stat.label}</div>
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    {stat.sub && <div className="text-xs text-slate-500">{stat.sub}</div>}
                  </div>
               </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Announcements */}
            <Card className="border-none shadow-sm rounded-[2rem] overflow-hidden">
              <CardHeader className="px-8 pt-8 flex flex-row items-center justify-between border-b border-slate-50 pb-6">
                <div className="space-y-1">
                  <CardTitle className="text-2xl">Community Announcements</CardTitle>
                  <CardDescription>Stay updated with latest news and initiatives.</CardDescription>
                </div>
                <Button variant="ghost" className="text-primary font-bold">See all</Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-50">
                   {[
                     { title: "Quarterly Member Meeting", date: "May 25, 2026", cat: "Event", color: "bg-blue-50 text-blue-600" },
                     { title: "New Partnership with Repatriation Ltd", date: "May 12, 2026", cat: "News", color: "bg-primary/10 text-primary" },
                     { title: "Support Goal Progress Update", date: "May 08, 2026", cat: "Financial", color: "bg-amber-50 text-amber-600" },
                   ].map((item, i) => (
                     <div key={i} className="p-8 hover:bg-slate-50/50 transition-colors flex items-center justify-between group">
                        <div className="flex gap-6 items-center">
                           <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${item.color}`}>
                             {item.cat[0]}
                           </div>
                           <div>
                              <div className="font-bold text-lg text-slate-900">{item.title}</div>
                              <div className="text-sm text-slate-500 font-light">{item.date} • {item.cat}</div>
                           </div>
                        </div>
                        <ArrowUpRight className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                     </div>
                   ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment History */}
            <Card className="border-none shadow-sm rounded-[2rem] overflow-hidden">
               <CardHeader className="px-8 pt-8">
                  <CardTitle className="text-2xl">Recent Transactions</CardTitle>
               </CardHeader>
               <CardContent className="px-8 pb-8">
                  <div className="space-y-4">
                     {contributions.map((pay, i) => (
                       <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 shadow-inner-sm">
                          <div className="flex gap-4 items-center">
                             <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center">
                               <History className="w-4 h-4" />
                             </div>
                             <div>
                               <div className="font-bold text-slate-900">{pay.name}</div>
                               <div className="text-xs text-slate-500">{pay.date}</div>
                             </div>
                          </div>
                          <div className="text-right">
                             <div className="font-bold text-slate-900">{pay.amount}</div>
                             <div className="text-[10px] text-primary font-bold uppercase tracking-widest">{pay.status}</div>
                          </div>
                       </div>
                     ))}
                  </div>
                  <Button className="w-full mt-6 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold py-6" onClick={() => toast.info("Showing complete transaction history.")}>
                    View Full Payment History
                  </Button>
               </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card className="bg-primary text-white border-none shadow-xl rounded-[2rem] overflow-hidden p-8 space-y-6 relative">
               <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-tl-[5rem] -mb-8 -mr-8" />
               <div className="relative z-10 space-y-6">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                     <CreditCard className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl">Quick Contribution</h3>
                  <p className="text-primary-foreground/80 font-light text-sm">
                    A bereavement call is active. Support your community with your £30 contribution.
                  </p>
                  <Button className="w-full bg-white text-primary hover:bg-slate-100 rounded-xl font-bold h-12" onClick={handleContribute}>
                    Contribute Now
                  </Button>
               </div>
            </Card>

            <Card className="border-none shadow-sm rounded-[2rem] p-8 space-y-6">
               <h3 className="text-xl font-bold">Community Group</h3>
               <p className="text-sm text-slate-500 font-light">
                 Access the official Twende Zambia UK WhatsApp group for active members.
               </p>
               <Button variant="outline" asChild className="w-full rounded-xl flex items-center justify-center gap-2 h-12 border-slate-200">
                  <Link to="/whatsapp">
                    Go to WhatsApp Group <ArrowUpRight className="w-4 h-4" />
                  </Link>
               </Button>
            </Card>

            <div className="text-center space-y-2">
               <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Support Contact</div>
               <div className="text-sm font-medium text-slate-900">+44 7376 575093</div>
               <div className="text-xs text-primary font-bold">info@twendezambia.co.uk</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
