import { Layout } from "@/components/layout/Layout";
import { Suspense, lazy } from "react";

// Lazy-load page sections for performance
const HeroSection = lazy(() => import("@/pages/HeroSection"));
const AboutSection = lazy(() => import("@/pages/AboutSection"));
const SkillsSection = lazy(() => import("@/pages/SkillsSection"));
const ProjectsSection = lazy(() => import("@/pages/ProjectsSection"));
const ExperienceSection = lazy(() => import("@/pages/ExperienceSection"));
const BlogSection = lazy(() => import("@/pages/BlogSection"));
const ContactSection = lazy(() => import("@/pages/ContactSection"));

function SectionSkeleton() {
  return (
    <div className="py-24 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<SectionSkeleton />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <BlogSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ContactSection />
      </Suspense>
    </Layout>
  );
}
