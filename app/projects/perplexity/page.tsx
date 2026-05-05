import ProjectDetailLayout from "@/components/ProjectDetailLayout";
import { PerplexityContent } from "@/components/PerplexityContent";

export const metadata = {
  title: "Perplexity AI Strategy · Sukriti Dubey",
};

export default function PerplexityPage() {
  return (
    <ProjectDetailLayout title="Perplexity AI · Strategic Growth Plan">
      <PerplexityContent showBackLink />
    </ProjectDetailLayout>
  );
}
