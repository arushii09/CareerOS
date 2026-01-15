import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return <section className="relative z-10 w-full pt-40 md:pt-48 pb-20 text-foreground">
  <div className="mx-auto max-w-7xl px-6">

    {/* TWO COLUMN LAYOUT */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE — TEXT + BUTTONS */}
      <div className="space-y-7">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          An AI Career Operating System 
          <br />
          for Skill Planning and Growth
        </h1>

        <p className="text-lg text-muted-foreground max-w-xl">
          CareerOS offers personalized guidance, interview preparation, and
          AI-powered tools to support structured career growth.
        </p>

        <div className="flex gap-5 pt-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started – Free
            </Button>
          </Link>

          <Link href="/dashboard">
            <Button size="lg" variant="outline" className="px-8">
              View Demo
            </Button>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE — IMAGES ONLY */}
      <div className="relative h-[420px] md:h-[520px]">

        {/* IMAGE 1 (TOP RIGHT) */}
        <Image
          src="/banner1.png"
          alt="Dashboard Preview"
          width={900}
          height={600}
          priority
          className="absolute top-0 right-0 w-[95%] rounded-xl border shadow-2xl"
        />

        {/* IMAGE 2 (BOTTOM LEFT) */}
        <Image
          src="/banner2.png"
          alt="Analytics Preview"
          width={750}
          height={550}
          className="absolute bottom-0 left-0 w-[85%] rounded-xl border shadow-xl"
        />
      </div>

    </div>
  </div>
</section>

};

export default HeroSection;