import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, ListTodo, TrendingUp, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4">
      {/* Hero Section */}
      <section className="w-full py-20 lg:py-32 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 animate-clay-float-slow opacity-20 pointer-events-none">
          <Sparkles className="h-24 w-24 text-clay-accent" />
        </div>

        <div className="mx-auto max-w-4xl space-y-8 relative z-10">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] font-heading clay-text-gradient">
            Track Jobs <br /> in 3D Clay
          </h1>
          <p className="text-xl md:text-2xl text-clay-muted font-medium max-w-2xl mx-auto leading-relaxed">
            Never apply to the same job twice. Keep track of every application
            in a tactile, marshmallow-soft world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
            <Link href="/add-job" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-xl px-10 h-16 shadow-clayButtonHover">
                Add a Job
              </Button>
            </Link>
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-xl px-10 h-16 bg-white/50">
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-7xl py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:scale-105 transition-transform">
            <CardContent className="pt-8 text-center space-y-6">
              <div className="mx-auto bg-gradient-to-br from-blue-400 to-blue-600 w-20 h-20 rounded-2xl shadow-clayButton flex items-center justify-center animate-clay-breathe">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold font-heading">Duplicate Detector</h3>
                <p className="text-clay-muted leading-relaxed">
                  Instantly know if you've already applied. We prevent duplicate entries to keep your tracker clean.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:scale-105 transition-transform" style={{ animationDelay: '200ms' }}>
            <CardContent className="pt-8 text-center space-y-6">
              <div className="mx-auto bg-gradient-to-br from-purple-400 to-purple-600 w-20 h-20 rounded-2xl shadow-clayButton flex items-center justify-center animate-clay-breathe">
                <ListTodo className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold font-heading">Tactile Dashboard</h3>
                <p className="text-clay-muted leading-relaxed">
                  See all applications at a glance. Filter by status, company, or platform in a volume-rich UI.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:scale-105 transition-transform" style={{ animationDelay: '400ms' }}>
            <CardContent className="pt-8 text-center space-y-6">
              <div className="mx-auto bg-gradient-to-br from-pink-400 to-pink-600 w-20 h-20 rounded-2xl shadow-clayButton flex items-center justify-center animate-clay-breathe">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold font-heading">Stage Tracking</h3>
                <p className="text-clay-muted leading-relaxed">
                  Update statuses from "Applied" to "Interviewing" and "Offer" with satisfying visual feedback.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
