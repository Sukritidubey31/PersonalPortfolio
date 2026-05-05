import ProjectDetailLayout from "@/components/ProjectDetailLayout";
import { TalentHackathonContent } from "@/components/TalentHackathonContent";

export const metadata = {
  title: "Talent 2.0 · J&J Hackathon · Sukriti Dubey",
};

export default function TalentHackathonPage() {
  return (
    <ProjectDetailLayout title="Talent 2.0 · J&J Hackathon">
      <TalentHackathonContent showBackLink />
    </ProjectDetailLayout>
  );
}
