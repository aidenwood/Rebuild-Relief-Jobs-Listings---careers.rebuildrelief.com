import { getActiveJobs } from "@/lib/jobs";
import { JobCard } from "@/components/job-card";
import {
  Briefcase,
  Users,
  Home,
  TrendingUp,
  CheckCircle2,
  XCircle,
  ArrowRight,
  MapPin,
  DollarSign,
  Zap,
  Shield,
  Target,
} from "lucide-react";

export default function HomePage() {
  const jobs = getActiveJobs();

  return (
    <>
      {/* Hero — full-width video background */}
      <section className="relative flex items-center overflow-hidden bg-[#001B51]">
        {/* Video — cover fills area, CSS mask fades left+right edges */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="relative z-[2] w-full px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Now Hiring Across NSW &amp; QLD
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Build Your Career.
              <br />
              <span className="text-white/80">Rebuild Communities.</span>
            </h1>
            <p className="max-w-lg text-lg text-white/70 sm:text-xl">
              Join one of Australia&apos;s fastest-growing storm recovery
              companies. Help families restore their homes while earning a
              six-figure income.
            </p>
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Home className="h-4 w-4" />
                3,000+ homes restored
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Users className="h-4 w-4" />
                70+ team members
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <TrendingUp className="h-4 w-4" />
                $150M+ claims approved
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#positions"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-cyan px-7 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-brand-cyan-bright"
              >
                View Open Positions
              </a>
              <a
                href="https://www.youtube.com/watch?v=x2vBglRBMYw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-white/10 px-7 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Watch Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 sm:grid-cols-4 sm:px-6">
          {[
            { label: "Base Salary", value: "$70k+" },
            { label: "OTE First Year", value: "$100–150k" },
            { label: "Top Month Earnings", value: "$20k+" },
            { label: "Full Training", value: "Provided" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Listings */}
      <section id="positions" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mb-8 flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight">
              Open Positions
            </h2>
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-primary">
              {jobs.length}
            </span>
          </div>

          {jobs.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed p-12 text-center">
              <Briefcase className="mx-auto h-10 w-10 text-muted-foreground/50" />
              <p className="mt-4 text-lg font-medium">No open positions</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Check back soon — we&apos;re always growing.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* === HORMOZI-STYLE SEO SECTIONS === */}

      {/* The Offer — what you actually get */}
      <section className="bg-muted/40 border-y">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Most Sales Jobs Pay You Less Than You&apos;re Worth.
              <br />
              <span className="text-primary">This One Doesn&apos;t.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Here&apos;s exactly what a storm damage sales career at Rebuild
              Relief looks like — no fluff, no vague promises.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: DollarSign,
                title: "$70,000 Base Salary",
                desc: "Paid while you learn. No commission-only gamble. Your base is locked in from day one while you build your pipeline.",
                color: "text-brand-saffron",
              },
              {
                icon: TrendingUp,
                title: "Uncapped Commissions",
                desc: "Most first-year reps earn $100k–$150k. Top performers clear $20k+ in a single month. There is no ceiling on what you take home.",
                color: "text-brand-green",
              },
              {
                icon: Shield,
                title: "Full Training Provided",
                desc: "Roof inspections, hail damage identification, insurance claim processes, lead generation, sales scripts — we train you on everything.",
                color: "text-brand-cyan",
              },
              {
                icon: Target,
                title: "Company-Generated Leads",
                desc: "We send you to storm-affected areas with qualified leads. You're not cold-calling strangers — homeowners need this service.",
                color: "text-brand-cyan-bright",
              },
              {
                icon: Users,
                title: "Leadership Track",
                desc: "We're opening new locations across NSW and QLD. Top reps move into team leader and management roles as we scale.",
                color: "text-primary",
              },
              {
                icon: Zap,
                title: "Storm Travel Opportunities",
                desc: "Travel with your team to major storm zones across Australia. High-damage areas mean high-earning trips — some of our biggest months come from storm chasing.",
                color: "text-brand-orange",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border bg-card p-6 space-y-3"
              >
                <item.icon className={`h-6 w-6 ${item.color}`} />
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What this is NOT — objection killing */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-6">
                What You <span className="text-destructive">Won&apos;t</span>{" "}
                Be Doing
              </h2>
              <ul className="space-y-4">
                {[
                  "Cold-calling people who don't want to hear from you",
                  "Asking homeowners for credit cards or upfront money",
                  "Selling overpriced products nobody needs",
                  "Sitting behind a desk sending emails all day",
                  "Working alone with zero support or training",
                  "Begging people to buy charity subscriptions or solar",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 mt-0.5 shrink-0 text-destructive/70" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-6">
                What You <span className="text-brand-green">Will</span> Be
                Doing
              </h2>
              <ul className="space-y-4">
                {[
                  "Inspecting roofs for hail and storm damage in areas we send you to",
                  "Offering homeowners a free inspection — they pay nothing",
                  "Helping families access insurance-funded repairs they didn't know they could claim",
                  "Working outdoors with a competitive, high-energy team",
                  "Earning commissions on every deal you close — no cap, ever",
                  "Building a real career with clear progression into leadership",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-brand-green" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for — self-qualification */}
      <section className="bg-gradient-to-br from-[#001B51] via-[#001B51] to-[#0a2a5e] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              This Role Isn&apos;t for Everyone.
              <br />
              <span className="text-brand-cyan">
                It&apos;s for People Like This.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {[
              "You come from trades, solar, door-to-door, real estate, or fitness",
              "You'd rather be outside talking to people than stuck behind a screen",
              "You're competitive — you want to be the top earner, not the average",
              "You're comfortable on a roof and not afraid of physical work",
              "You want a $100k+ income and you're willing to earn it",
              "You believe in helping people, not pressuring them",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg bg-white/5 px-4 py-3"
              >
                <ArrowRight className="h-4 w-4 mt-1 shrink-0 text-brand-cyan" />
                <p className="text-sm text-white/80">{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#positions"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-cyan px-8 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-cyan-bright"
            >
              Apply Now — View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Where we're hiring — location SEO */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3">
            Where We&apos;re Hiring Right Now
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Rebuild Relief has storm damage recovery roles open across New South
            Wales and Queensland. We go where the storms go — and right now,
            these areas need us most.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <a
                key={job.id}
                href={`/jobs/${job.slug}`}
                className="group flex items-start gap-3 rounded-xl border bg-card p-5 transition-all hover:shadow-md hover:border-primary/30"
              >
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    {job.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {job.location}
                  </p>
                  <p className="text-sm font-medium text-primary mt-1">
                    {job.salary_range}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* The math — Hormozi-style "here's the deal" */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-6">
              Let&apos;s Do The Maths
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Your base salary is <strong className="text-foreground">$70,000</strong>.
                That&apos;s what you earn while you learn the ropes — roof
                inspections, hail damage identification, how insurance claims
                work in Australia.
              </p>
              <p>
                On top of that, you earn{" "}
                <strong className="text-foreground">
                  uncapped commissions
                </strong>{" "}
                on every deal you close. Most first-year reps at Rebuild Relief
                earn between $100,000 and $150,000. Our top performers
                consistently clear $20,000+ in a single month.
              </p>
              <p>
                You&apos;re not selling something people don&apos;t want.
                Homeowners across NSW and QLD have storm-damaged roofs right
                now. Their insurance covers the repairs. In many cases, Rebuild
                Relief even covers up to $600 of their excess. Your job is to
                help them access what they&apos;re already entitled to.
              </p>
              <p>
                That&apos;s why this isn&apos;t a hard sell. It&apos;s a
                conversation with a homeowner who already has the problem and
                already has the solution — they just need someone to show them
                how to claim it.
              </p>
              <p className="text-foreground font-medium pt-2">
                If you&apos;re doing $50k–$70k in a traditional sales job,
                retail, or trades — and you want to double your income within
                12 months without going back to uni — this is how.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-style SEO — common search queries */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
            Common Questions About Working at Rebuild Relief
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                q: "Do I need experience in storm damage or roofing?",
                a: "No. We provide full training on roof inspections, hail damage identification, insurance claim processes, and sales techniques. Many of our top performers came from completely unrelated industries — trades, fitness, hospitality, retail. What matters is your attitude, not your resume.",
              },
              {
                q: "What does a storm damage sales representative actually do?",
                a: "You visit properties in storm-affected areas, inspect roofs for hail damage, explain our free service to homeowners, and help them start an insurance claim for repairs. You're outdoors, talking to real people, solving a real problem. No cold calling. No desk.",
              },
              {
                q: "Is this a commission-only role?",
                a: "No. You get a $70,000 base salary from day one — paid while you train and build your pipeline. Commissions are on top of your base and are completely uncapped. There's no ceiling on what you can earn.",
              },
              {
                q: "Where are Rebuild Relief jobs located?",
                a: "We're currently hiring across New South Wales and Queensland — including Penrith (Sydney), Gold Coast (Arundel), Gympie, Hervey Bay, Fraser Coast, Gatton, Somerset, and the Lockyer Valley. We also send teams to major storm zones across Australia for high-earning travel trips.",
              },
              {
                q: "What's the difference between this and door-to-door sales?",
                a: "In door-to-door sales, you're typically selling something people didn't ask for. Here, you're offering homeowners a free roof inspection and helping them access insurance-funded repairs they're already entitled to. We often cover up to $600 of their excess. You're not asking for money — you're giving them money.",
              },
              {
                q: "How quickly can I start earning commissions?",
                a: "Most reps start closing deals within their first few weeks after training. You'll be paired with experienced team members, given company-generated leads, and sent to areas with confirmed storm damage. The opportunity is there from the start.",
              },
            ].map((faq) => (
              <div key={faq.q} className="space-y-2">
                <h3 className="font-semibold text-lg">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#001B51] via-[#001B51] to-[#0a2a5e] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Stop Trading Your Time for Someone Else&apos;s Ceiling
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Rebuild Relief is hiring motivated people across NSW and QLD who
            want to earn what they&apos;re actually worth. $70k base.
            Uncapped commissions. Full training. Real career progression.
          </p>
          <a
            href="#positions"
            className="mt-8 inline-flex h-12 items-center gap-2 justify-center rounded-lg bg-brand-cyan px-8 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-cyan-bright"
          >
            View Open Positions
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
