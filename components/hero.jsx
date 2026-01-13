import Link from "next/link";
import { Button } from "./ui/button";

const HeroSection = () => {
  return <section className="relative z-10 w-full pt-60 md:pt-48 pb-10 text-foreground">
    <div className="mx-auto max-w-4xl px-6 text-center space-y-8">
       <div className="space-y-7">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            An AI Career Operating System for
            <br />
            Skill Planning and Growth
        </h1>
        <p className="text-lg text-muted-foreground">
            CareerOS offers personalized guidance, interview preparation, and AI-powered tools to support structured career growth.
        </p>
        </div> 

        <div className="flex justify-center gap-5">
          <Link href="/dashboard">
           <Button size="lg" className="px-8">
            Get Started - Free
           </Button>
          </Link>

          <Link href="/dashboard">
           <Button size="lg" className="px-8" variant="outline">
            View Demo
           </Button>
          </Link>
        </div>
    </div>
  </section>;
};

export default HeroSection;