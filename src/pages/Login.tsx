import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { LogIn, UserPlus, Fingerprint, Mail, Lock, ArrowRight } from "lucide-react";
import logoImg from "@/assets/images/zambian_community_uk_1779202184111.png";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-50 flex items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="rounded-[2.5rem] shadow-2xl border-none ring-1 ring-slate-100 overflow-hidden">
          <CardHeader className="text-center pt-10 pb-4">
            <Link to="/" className="inline-flex items-center space-x-2 mb-6 mx-auto">
              <img 
                src={logoImg} 
                alt="Twende Zambia UK logo" 
                className="w-10 h-10 object-contain rounded-full bg-slate-50 p-0.5" 
                referrerPolicy="no-referrer"
              />
              <span className="font-serif font-bold text-xl text-slate-900">Twende Zambia UK</span>
            </Link>
            <CardTitle className="text-3xl font-serif">
              {isLogin ? "Welcome Back" : "Create Account"}
            </CardTitle>
            <CardDescription className="text-slate-500 font-light">
              {isLogin 
                ? "Enter your credentials to access your member dashboard." 
                : "Join our community and stand together with your fellow Zambians."}
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-4 px-8">
            <AnimatePresence mode="wait">
              <motion.form
                key={isLogin ? "login" : "register"}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <div className="relative">
                       <Input id="fullName" placeholder="Enter your full name" className="h-12 pl-10 rounded-xl" />
                       <UserPlus className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
                    </div>
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Input id="email" type="email" placeholder="john@example.com" className="h-12 pl-10 rounded-xl" />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    {isLogin && (
                      <Link to="#" className="text-xs text-primary font-bold hover:underline">Forgot password?</Link>
                    )}
                  </div>
                  <div className="relative">
                    <Input id="password" type="password" placeholder="••••••••" className="h-12 pl-10 rounded-xl" />
                    <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
                  </div>
                </div>

                <Button className="w-full h-12 bg-primary hover:bg-primary/90 rounded-xl text-lg font-bold flex items-center justify-center gap-2">
                  {isLogin ? (
                    <>Sign In <LogIn className="w-5 h-5" /></>
                  ) : (
                    <>Join Community <ArrowRight className="w-5 h-5" /></>
                  )}
                </Button>
              </motion.form>
            </AnimatePresence>

            <div className="relative my-8">
               <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-200"></span>
               </div>
               <div className="relative flex justify-center text-xs uppercase tracking-widest text-slate-400 bg-white px-2 font-bold">
                  Or continue with
               </div>
            </div>

            <Button variant="outline" className="w-full h-12 rounded-xl flex items-center justify-center gap-3 border-slate-200 font-medium text-slate-700">
               <Fingerprint className="w-5 h-5 text-slate-400" /> Google Account Integration
            </Button>
          </CardContent>

          <CardFooter className="pb-10 pt-6 justify-center text-sm font-medium">
            <span className="text-slate-500">
              {isLogin ? "New to the community?" : "Already a member?"}
            </span>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-primary hover:underline font-bold"
            >
              {isLogin ? "Sign up now" : "Back to login"}
            </button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
