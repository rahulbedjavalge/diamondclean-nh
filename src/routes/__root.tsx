import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider } from "../lib/i18n";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { ScrollProgress } from "../components/site/ScrollProgress";
import { BackToTop } from "../components/site/BackToTop";
import { WhatsAppButton } from "../components/site/WhatsAppButton";
import { Toaster } from "../components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-extrabold text-primary">404</h1>
        <h2 className="mt-4 font-display text-xl font-bold text-navy">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-bold tracking-tight text-navy">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-bold text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_TITLE =
  "Diamond Clean NH — Premium Cleaning Services in Berlin";
const SITE_DESC =
  "Reliable, professional and detail-oriented cleaning for offices, apartments and commercial spaces across Berlin. Request your free quote today.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "author", content: "Diamond Clean NH" },
      { name: "theme-color", content: "#0F1235" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Diamond Clean NH" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Lovable App" },
      { property: "og:title", content: "Lovable App" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "description", content: "Professionelle Reinigungsdienste in Berlin" },
      { property: "og:description", content: "Professionelle Reinigungsdienste in Berlin" },
      { name: "twitter:description", content: "Professionelle Reinigungsdienste in Berlin" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/JPSNeSUjbeVK4ueYCxGurkgtw3q1/social-images/social-1783254228727-WhatsApp_Image_2026-07-04_at_20.06.30.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/JPSNeSUjbeVK4ueYCxGurkgtw3q1/social-images/social-1783254228727-WhatsApp_Image_2026-07-04_at_20.06.30.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CleaningService",
          name: "Diamond Clean NH",
          description: SITE_DESC,
          areaServed: "Berlin, Germany",
          address: {
            "@type": "PostalAddress",
            streetAddress: "An der Villa Bolle 9A",
            postalCode: "12557",
            addressLocality: "Berlin",
            addressCountry: "DE",
          },
          telephone: "+491746747501",
          email: "diamondclean.nh@gmail.com",
          openingHours: "Mo-Fr 08:00-18:00",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <div className="flex min-h-dvh flex-col">
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">
            {/* Required: nested routes render here. */}
            <Outlet />
          </main>
          <Footer />
          <BackToTop />
          <WhatsAppButton />
        </div>
        <Toaster position="top-right" richColors />
      </I18nProvider>
    </QueryClientProvider>
  );
}
