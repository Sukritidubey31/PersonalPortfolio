import ProjectDetailLayout from "@/components/ProjectDetailLayout";
import { ChurnLensContent } from "@/components/ChurnLensContent";

export const metadata = {
  title: "ChurnLens · Sukriti Dubey",
};

export default function ChurnLensPage() {
  return (
    <ProjectDetailLayout title="ChurnLens">
      <ChurnLensContent showBackLink />
    </ProjectDetailLayout>
  );
}
