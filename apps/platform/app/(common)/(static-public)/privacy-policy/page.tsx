import AdUnit from "@/components/common/adsense";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, FileLock, Server, UserCheck, Eye, Lock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { appConfig } from "~/project.config";

export const metadata: Metadata = {
  title: "Privacy Policy | Nerdy Network",
  description:
    "How Nerdy Network collects, uses, and protects your data. We treat your data like we treat our production secrets—carefully.",
  robots: { index: true, follow: true },
};

// --- Helper for the sticky sidebar ---
const TableOfContents = () => {
  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "collection", title: "Data Logs (Collection)" },
    { id: "usage", title: "System Operations (Usage)" },
    { id: "cookies", title: "Cookies & Ads" },
    { id: "analytics", title: "Analytics" },
    { id: "rights", title: "User Permissions (Rights)" },
    { id: "security", title: "Security Protocols" },
    { id: "contact", title: "Contact Admin" },
  ];

  return (
    <nav className="hidden lg:block sticky top-24 h-fit w-64 pr-8">
      <h4 className="mb-4 text-sm font-semibold tracking-tight text-primary">System Index</h4>
      <ScrollArea className="h-[calc(100vh-10rem)]">
        <ul className="space-y-2 border-l border-border/40 ml-1">
          {sections.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className="block border-l-2 border-transparent pl-4 text-xs font-medium text-muted-foreground hover:border-primary hover:text-foreground transition-all"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </nav>
  );
};

const LastUpdated = () => {
  const d = new Date();
  const dateString = d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return <span className="font-mono text-xs">{dateString}</span>;
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(#80808012_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]" />

      <main className="container relative z-10 mx-auto max-w-7xl px-4 py-12 md:py-20">
        
        {/* --- Header --- */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="rounded-full py-1 border-primary/20 bg-primary/5 text-primary">
              <ShieldCheck className="mr-1.5 size-3" />
              Protocol: PRIVACY_V1
            </Badge>
            <span className="text-xs text-muted-foreground">
              Last Patch: <LastUpdated />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We value transparency. This document explains how <strong>Nerdy Network</strong> collects, uses, 
            and safeguards your data. In short: we don't sell your secrets, and we encrypt the important stuff.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar (Desktop) */}
          <div className="shrink-0">
             <TableOfContents />
          </div>

          {/* Main Content */}
          <article className="flex-1 prose prose-zinc dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            
            <section id="intro">
              <h2>Who We Are</h2>
              <p>
                We are a student-run platform for developers, designers, and builders. 
                Our goal is to connect you with peers, not to harvest your soul.
                Contact the admin team at <a href={`mailto:${appConfig.contact || "hello@nerdynet.co"}`}>hello@nerdynet.co</a>.
              </p>

              <h3>Scope</h3>
              <p>
                This Policy covers all properties we operate, including the main website and 
                any related tools, APIs, or "beta" features that link to this Policy.
              </p>
            </section>

            <Separator className="my-8 opacity-50" />

            <section id="collection">
              <h2>Data Logs (Information We Collect)</h2>
              <div className="grid sm:grid-cols-2 gap-4 not-prose">
                <InfoCard title="Device Telemetry" icon={Server}>
                  IP address, browser type, OS version, and timestamps. Standard server logs used for debugging.
                </InfoCard>
                <InfoCard title="Cookies" icon={Eye}>
                   Identifiers to remember your session, theme preference (Dark Mode obviously), and auth state.
                </InfoCard>
                <InfoCard title="User Profile" icon={UserCheck}>
                   Name, email, GitHub handle, skills, and project details you voluntarily provide.
                </InfoCard>
                <InfoCard title="Security Events" icon={Lock}>
                   Login attempts and API usage logs used to detect brute-force attacks or abuse.
                </InfoCard>
              </div>
            </section>

            <section id="usage" className="mt-8">
              <h2>System Operations (How We Use Data)</h2>
              <ul>
                <li><strong>Matchmaking:</strong> To suggest relevant teammates based on your tech stack.</li>
                <li><strong>Gamification:</strong> To calculate House Points and maintain Leaderboards.</li>
                <li><strong>Core Functionality:</strong> To allow you to post updates, create projects, and chat.</li>
                <li><strong>Improvement:</strong> To analyze which features are actually being used (and which ones are buggy).</li>
                <li><strong>Security:</strong> To detect, prevent, and respond to security incidents.</li>
                <li><strong>Compliance:</strong> To comply with legal obligations.</li>
              </ul>
            </section>

            <Separator className="my-8 opacity-50" />

            <section id="cookies">
              <h2>Cookies & Ads</h2>
              <p>
                We use cookies to keep you logged in and to keep the lights on.
              </p>
              
              <div className="bg-muted/30 p-6 rounded-xl border border-border/50 not-prose my-6">
                  <h3 className="text-lg font-semibold mb-2">Google AdSense</h3>
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
                    <li>
                        Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website.
                    </li>
                    <li>
                        Google’s advertising cookies enable it and its partners to serve ads to you based on your visit to our sites and/or other sites on the Internet.
                    </li>
                    <li>
                        You can opt out of personalized advertising from Google via{" "}
                        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Ads Settings
                        </a>.
                    </li>
                    <li>
                         For broader industry opt-out choices, visit{" "}
                        <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        aboutads.info/choices
                        </a>.
                    </li>
                  </ul>
              </div>

              <div className="my-8 not-prose">
                 <AdUnit adSlot="multiplex" key={"privacy-policy-page-ad"} />
              </div>
            </section>

            <section id="analytics">
              <h2>Analytics</h2>
              <p>
                We may use privacy-respecting analytics tools to understand traffic. 
                We want to know if people are actually using the "Build Streak" feature or if we should deprecate it.
                We do not track you across the internet; we only care about what you do here.
              </p>
            </section>

            <Separator className="my-8 opacity-50" />

            <section id="rights">
               <h2>User Permissions (Your Rights)</h2>
               <p>
                 You own your data. We are just hosting it.
               </p>
               <h3>Your Choices</h3>
               <ul>
                 <li><strong>Export Data:</strong> You can request a copy of your profile data.</li>
                 <li><strong>Delete Account:</strong> You can delete your account at any time. This will wipe your profile from the public directory.</li>
                 <li><strong>Cookie Controls:</strong> You can block cookies in your browser, though the site might break.</li>
               </ul>
            </section>

            <section id="security">
               <h2>Security Protocols</h2>
               <p>
                 We use industry-standard encryption (HTTPS/TLS) for data in transit. 
                 We salt and hash passwords (obviously). 
                 We restrict access to databases to only essential maintainers.
               </p>
               <p>
                 However, no system is unhackable. If we detect a breach, we will notify you via email and public announcement.
               </p>
            </section>
            
            <Separator className="my-8 opacity-50" />

            <section id="contact">
               <h2>Contact Admin</h2>
               <p>
                 We may push updates to this policy. Significant changes will be mentioned in the changelog.
               </p>
               <div className="not-prose mt-6 flex flex-col gap-2">
                 <p className="text-sm font-medium">Questions or Concerns?</p>
                 <a 
                   href={`mailto:${appConfig.contact || "hello@nerdynetwork.com"}`}
                   className="inline-flex items-center justify-center w-fit px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-transform hover:scale-105"
                 >
                   Email Support
                 </a>
               </div>
            </section>

            <div className="mt-12 p-4 bg-muted/50 border-l-4 border-amber-500 rounded-r-md not-prose">
               <p className="text-sm text-muted-foreground italic">
                 <strong>Disclaimer:</strong> This is a community project. While we take security seriously, use the platform responsibly. 
                 Don't upload your private keys or sensitive personal documents.
               </p>
            </div>

            <div className="mt-8 not-prose">
               <AdUnit adSlot="multiplex" key={"privacy-policy-page-ad-footer"} />
            </div>

          </article>
        </div>
      </main>
    </div>
  );
}

// --- Component for Grid Items ---
function InfoCard({ title, children, icon: Icon }: { title: string; children: React.ReactNode; icon?: any }) {
    return (
        <div className="rounded-lg border border-border/50 bg-card p-4 hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2 mb-2">
                {Icon && <Icon className="size-4 text-primary" />}
                <h4 className="font-semibold text-sm text-foreground">{title}</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
                {children}
            </p>
        </div>
    )
}