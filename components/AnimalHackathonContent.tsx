"use client";

import {
  SectionHeader,
  Body,
  NumberedList,
  BulletList,
  MetricBadge,
} from "@/components/ProjectDetailHelpers";

export function AnimalHackathonContent({ showBackLink = false }: { showBackLink?: boolean }) {
  return (
    <>
      {/* Hero */}
      <div className="mb-10">
        <p
          className="text-[10px] uppercase tracking-widest font-playfair font-medium mb-3"
          style={{ color: "#D4948A" }}
        >
          Product Development · AI/ML · Healthcare · January 2025
        </p>
        <h1
          className="font-playfair mb-4 leading-tight"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", color: "#2A1A18" }}
        >
          Building a One-Stop Solution for Pet Health Management
        </h1>
        <Body>
          In January 2025, I participated in the Animal Health Hackathon
          organized by Cornell University and the College of Veterinary
          Medicine. As part of the event, our team developed an idea for an
          application designed to be a one-stop solution for pet parents to
          track and manage their pets&apos; health. The experience we had and
          the process we followed is explained below.
        </Body>
        <div className="flex flex-wrap gap-2 mt-5">
          <MetricBadge label="Cornell University" color="blue" />
          <MetricBadge label="College of Veterinary Medicine" color="blue" />
          <MetricBadge label="January 2025" color="green" />
        </div>
      </div>

      {/* Section 1 */}
      <SectionHeader number={1} title="Understanding User Pain Points" />
      <Body>
        We spoke with several veterinarians, mentors, and judges at the
        hackathon to better understand the major challenges animals and pet
        parents face.
      </Body>
      <div className="mt-4 mb-2">
        <p
          className="text-[9px] uppercase tracking-widest font-playfair font-medium mb-3"
          style={{ color: "#A4918D" }}
        >
          Key insights from conversations with vets
        </p>
      </div>
      <NumberedList
        items={[
          <span key="1">
            <strong style={{ color: "#2A1A18" }}>Pet obesity is a major concern</strong> : Over half of pet dogs and cats are overweight or obese today.
          </span>,
          <span key="2">
            <strong style={{ color: "#2A1A18" }}>Body Condition Score (BCS) underestimation</strong> : The BCS is an initial method used to determine whether a dog or cat is at a healthy weight. Although BCS can be assessed at home using a simple chart, pet parents often underestimate their pet&apos;s condition.
          </span>,
          <span key="3">
            <strong style={{ color: "#2A1A18" }}>Diet management struggles</strong> : Pet parents often struggle with managing their pets&apos; diets. This leads to them overfeeding their pets.
          </span>,
          <span key="4">
            <strong style={{ color: "#2A1A18" }}>Scattered resources with limited awareness</strong> : While there are many resources available online to help take care of pets, all of them are scattered and there&apos;s limited awareness about it, making it difficult to find reliable resources.
          </span>,
        ]}
      />

      {/* Section 2 */}
      <SectionHeader number={2} title="Defining Problem Statement and Mission" />
      <div className="space-y-4">
        <div
          className="rounded-card px-5 py-4"
          style={{ border: "0.5px solid #F2E2DA", backgroundColor: "#FAF3EF" }}
        >
          <p
            className="text-[9px] uppercase tracking-widest font-playfair font-medium mb-2"
            style={{ color: "#A4918D" }}
          >
            Problem Statement
          </p>
          <p className="font-lato" style={{ fontSize: "13px", color: "#2A1A18" }}>
            Pet parents struggle to manage their pets&apos; health due to
            scattered resources, limited awareness, and difficulty in
            recognizing signs of obesity.
          </p>
        </div>
        <div
          className="rounded-card px-5 py-4"
          style={{ border: "0.5px solid #EDD4CC", backgroundColor: "#FAF0EC" }}
        >
          <p
            className="text-[9px] uppercase tracking-widest font-playfair font-medium mb-2"
            style={{ color: "#D4948A" }}
          >
            Mission
          </p>
          <p className="font-lato" style={{ fontSize: "13px", color: "#A06058" }}>
            We want to help pet parents better track and manage their
            pets&apos; health, particularly in recognizing and preventing
            obesity, by creating a centralized and accessible solution with
            reliable resources.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <SectionHeader number={3} title="Ideation" />
      <Body>
        We brainstormed ideas for the application:
      </Body>
      <div className="mt-4">
        <NumberedList
          items={[
            "Body Condition Score and weight estimation through image recognition.",
            "Personalized plans for diet and exercise.",
            "Food, exercise and medicine tracker with alerts.",
            "Platform with reliable resources and a community platform to talk to other pet parents and experts.",
            "Weight tracker along with medical history of the pet.",
          ]}
        />
      </div>

      {/* Section 4 */}
      <SectionHeader number={4} title="Implementation" />
      <Body>
        For the hackathon, we built a prototype of the application. If I were
        to develop it further into a fully functional product, I would implement
        the following steps:
      </Body>
      <div className="mt-4 mb-4">
        <NumberedList
          items={[
            "Get dataset of dog images with their body condition score and weight to train the AI estimation model.",
            "Collect data for diet and exercise recommender based on weight and body condition score of the pet.",
            "Research and consolidate the resources available online for pet care.",
            "Plan to onboard experts on the application for the community platform.",
          ]}
        />
      </div>
      <div
        className="rounded-card px-4 py-3 mt-4"
        style={{ border: "0.5px solid #EDD4CC", backgroundColor: "#FAF0EC" }}
      >
        <p className="font-lato" style={{ fontSize: "12px", color: "#9A8480" }}>
          For the implementation, collaboration with veterinary experts is
          essential to get dataset for the AI model, to get resources and to
          facilitate their onboarding onto the community platform.
        </p>
      </div>

      {/* Section 5 */}
      <SectionHeader number={5} title="Launch and Testing" />
      <div className="space-y-5">
        {[
          {
            phase: "Pre-Launch",
            items: [
              "Identifying early adopters: these will be pet parents and also vets recommending this to their patients.",
              "Launching a beta version for testing and feedback.",
              "Demo sessions to onboard veterinary experts.",
              "Partner with vet clinics or pet brands to co-promote.",
            ],
          },
          {
            phase: "During Launch",
            items: [
              "Encouraging users to post feedback directly on the app.",
              "Host live sessions with veterinarians and experts in the app's community section.",
            ],
          },
          {
            phase: "Post-Launch",
            items: [
              "Monitor user feedback and customer engagement analytics such as number of new users, feature usage and ratings.",
              "Start a referral program to increase engagement.",
              "Maintenance of application by adding any new resource or data and enhancing the accuracy of the estimation and recommendation system if required.",
            ],
          },
        ].map((phase) => (
          <div key={phase.phase}>
            <p
              className="font-playfair font-medium mb-2"
              style={{ fontSize: "12px", color: "#2A1A18" }}
            >
              {phase.phase}
            </p>
            <BulletList items={phase.items} />
          </div>
        ))}
      </div>

      {/* Section 6 */}
      <SectionHeader number={6} title="Revenue Model" />
      <div
        className="rounded-card px-5 py-4"
        style={{ border: "0.5px solid #F2E2DA", backgroundColor: "#FAF3EF" }}
      >
        <p className="font-lato" style={{ fontSize: "13px", color: "#9A8480" }}>
          Subscription-based model with one month free trial. Vet partnership
          tier for premium referrals.
        </p>
      </div>

      {showBackLink && (
      <div className="mt-12 pt-8" style={{ borderTop: "0.5px solid #F2E2DA" }}>
        <a
          href="/projects"
          className="text-[11px] font-lato px-4 py-2"
          style={{
            border: "0.5px solid #F2E2DA",
            borderRadius: "20px",
            color: "#9A8480",
          }}
        >
          ← Back to Projects
        </a>
      </div>
      )}
    </>
  );
}

