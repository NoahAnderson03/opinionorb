import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AppLogo } from '@/components/icons';
import { BarChart, Search, Rocket } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <AppLogo className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold tracking-tight">
            Demand Decoder
          </span>
        </Link>
        <Button asChild>
          <Link href="/dashboard">Get Started</Link>
        </Button>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-20 text-center sm:py-24 md:py-32">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Stop Guessing. Start Building.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Demand Decoder scours Reddit for untapped product ideas, feature requests, and user frustrations, so you can build what the market actually wants.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/dashboard">Decode Your First Idea</Link>
            </Button>
          </div>
        </section>

        <section className="bg-secondary py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <FeatureCard
                icon={<Search className="h-8 w-8 text-primary" />}
                title="Discover Untapped Needs"
                description="Our AI analyzes thousands of Reddit comments to find pain points and 'I wish there was an app that...' moments, giving you a goldmine of validated ideas."
              />
              <FeatureCard
                icon={<BarChart className="h-8 w-8 text-primary" />}
                title="Validate with Data"
                description="Go beyond gut feelings. We surface common complaints and feature requests, showing you exactly where the demand lies in any niche."
              />
              <FeatureCard
                icon={<Rocket className="h-8 w-8 text-primary" />}
                title="Build with Confidence"
                description="Launch products people are already asking for. Get a head start with a clear understanding of user needs and build a solution that sells itself."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto flex items-center justify-between p-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <AppLogo className="h-5 w-5" />
          <span>Demand Decoder</span>
        </div>
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="text-center">
      <CardHeader>
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          {icon}
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
