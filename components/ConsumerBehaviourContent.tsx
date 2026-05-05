"use client";

import { StyledTable, BulletList } from "@/components/ProjectDetailHelpers";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5 sm:mb-6">
      <p
        className="text-[10px] sm:text-[11px] uppercase tracking-widest font-playfair font-medium mb-2"
        style={{ color: "#A4918D" }}
      >
        {title}
      </p>
      <div
        className="font-lato text-[13px] sm:text-sm leading-relaxed"
        style={{ color: "#9A8480" }}
      >
        {children}
      </div>
    </div>
  );
}

export function ConsumerBehaviourContent() {
  return (
    <div className="font-lato">
      <p
        className="text-[10px] uppercase tracking-widest font-playfair font-medium mb-3"
        style={{ color: "#D4948A" }}
      >
        Data · Machine learning · Classification
      </p>
      <h2
        className="font-playfair mb-4 sm:mb-5 text-xl sm:text-2xl leading-tight"
        style={{ color: "#2A1A18" }}
      >
        Customer behaviour prediction
      </h2>

      <Section title="What it is">
        <p>
          A machine learning project that predicts whether a customer will purchase a product based on
          demographic and financial features. Four classification models are built and compared: Naive
          Bayes, Support Vector Machine, Decision Tree, and Neural Network.
        </p>
      </Section>

      <Section title="Dataset">
        <p className="mb-3">
          <strong style={{ color: "#2A1A18" }}>Source:</strong> Customer Behaviour Dataset (Kaggle).
          <br />
          <strong style={{ color: "#2A1A18" }}>Size:</strong> 400 rows × 5 columns.
        </p>
        <StyledTable
          headers={["Feature", "Type", "Description"]}
          rows={[
            [
              "User ID",
              "int",
              "Unique identifier (dropped before modeling)",
            ],
            [
              "Gender",
              "categorical",
              "Male / Female, encoded as 0 / 1",
            ],
            ["Age", "int", "Customer age (18 to 60)"],
            [
              "EstimatedSalary",
              "int",
              "Annual estimated salary (15k to 150k)",
            ],
            ["Purchased", "int", "Target: 0 (no) or 1 (yes)"],
          ]}
        />
        <p className="mt-3">
          Class distribution: about 64% did not purchase, about 36% purchased.
        </p>
      </Section>

      <Section title="Methodology">
        <p className="font-medium mb-2" style={{ color: "#2A1A18" }}>
          1. Data preparation
        </p>
        <BulletList
          items={[
            "Dropped User ID (not predictive).",
            "Encoded gender: Male → 0, Female → 1.",
            "Confirmed no missing values.",
          ]}
        />
        <p className="font-medium mt-4 mb-2" style={{ color: "#2A1A18" }}>
          2. Exploratory data analysis (EDA)
        </p>
        <p className="mb-2">
          KDE plots for Age and EstimatedSalary by purchase decision and gender.
        </p>
        <p className="font-medium mb-1" style={{ color: "#2A1A18" }}>
          Key findings
        </p>
        <BulletList
          items={[
            "Customers over 43 are more likely to purchase regardless of salary.",
            "Customers earning over $100k tend to purchase regardless of age.",
            "Gender has minimal influence on purchasing behavior.",
            "Highest correlation with target: Age (0.62).",
          ]}
        />
        <p className="font-medium mt-4 mb-2" style={{ color: "#2A1A18" }}>
          3. Models
        </p>
        <StyledTable
          headers={["Model", "Test accuracy", "Notes"]}
          rows={[
            [
              "Naive Bayes (MultinomialNB)",
              "~81%",
              "Baseline; EstimatedSalary scaled to (18, 60) range for compatibility",
            ],
            [
              "Support Vector Machine (SVC)",
              "~94%",
              "RBF kernel; best overall performance",
            ],
            ["Decision Tree", "~90%", "Good interpretability"],
            [
              "Neural Network (MLPClassifier)",
              "~93%",
              "2 hidden layers (64 → 32), ReLU, Adam optimizer",
            ],
          ]}
        />
        <p className="font-medium mt-4 mb-2" style={{ color: "#2A1A18" }}>
          4. Model improvement
        </p>
        <BulletList
          items={[
            "Tested multiple train or test split sizes (0.1, 0.15, 0.2, 0.3): 0.2 performed best.",
            "Used K fold cross validation (k = 10) to identify and remove outlier folds.",
            "Removed about 80 problematic data points, improving Naive Bayes accuracy from 78% to 81%.",
          ]}
        />
      </Section>

      <Section title="Key insights">
        <BulletList
          items={[
            "Age is the strongest predictor of purchase behavior (correlation 0.62).",
            "SVM outperforms all other models at 94% accuracy on this dataset.",
            "Naive Bayes, while fast, is limited here due to mixed feature types and scale sensitivity.",
            "The dataset is small (400 rows): sklearn MLPClassifier is recommended over TensorFlow or Keras for the neural network to avoid kernel crashes.",
          ]}
        />
      </Section>

      <div className="flex flex-wrap gap-3 mt-5 sm:mt-6">
        <a
          href="https://github.com/Sukritidubey31/ConsumerModeling"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-[13px] px-3.5 py-2 sm:px-4 font-lato"
          style={{
            backgroundColor: "#D4948A",
            color: "#fff",
            borderRadius: "20px",
          }}
        >
          GitHub ↗
        </a>
      </div>
    </div>
  );
}
