import ProjectDetailLayout from "@/components/ProjectDetailLayout";
import { AnimalHackathonContent } from "@/components/AnimalHackathonContent";

export const metadata = {
  title: "Animal Health Hackathon · Sukriti Dubey",
};

export default function AnimalHackathonPage() {
  return (
    <ProjectDetailLayout title="Animal Health Hackathon">
      <AnimalHackathonContent showBackLink />
    </ProjectDetailLayout>
  );
}
