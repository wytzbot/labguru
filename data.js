const LAB_DATA = {
  settings:{
    freeLimit:5,
    premiumPrice:2.5,
    premiumCurrency:"USD",
    premiumDurationDays:60, // renews every 2 months
    // TODO: paste your Flutterwave PUBLIC key here (starts with FLWPUBK_ — test keys start FLWPUBK_TEST-)
    flutterwavePublicKey:"FLWPUBK_TEST-f3da861ee43126611124e75d502c73d4-X",
    verifyEndpoint:"https://labguru-five.vercel.app/api/verify-payment",
    // House-ad screenshots (WyNote promo). List them here in whatever order
    // and under whatever filename/path they actually land at in your repo —
    // no need to rename or move them into one folder. Add, remove, or
    // reorder entries any time; the ad carousel just reads this array.
    // Each entry is the path GitHub/Vercel serves that file at, e.g. if the
    // file sits at the repo root it's just "/Screenshot_whatever.jpg".
    adImages:[
      "/ad-1.jpg",
      "/ad-2.jpg",
      "/ad-3.jpg",
      "/ad-4.jpg",
      "/ad-5.jpg"
    ]
  },
  perks:[
    "🚫 No ads, ever",
    "🔓 Unlimited analyses — no daily read limit",
    "🧮 Full unit converter for lab values",
    "📊 Personal progress dashboard by unit",
    "🔔 Study reminders & new-content alerts",
    "📴 Full offline access, synced across your devices",
    "🆕 All future units and analyses as they're added"
  ],
  units:[
        // ==========================================
  // UNIT 2: CLINICAL CHEMISTRY (10 ANALYSES)
  // ==========================================
  {
    id: "clinical_chemistry",
    name: "Clinical Chemistry",
    analyses: [
      {
        id: "fbg",
        title: "Fasting Blood Glucose (FBG)",
        intro: "Fasting Blood Glucose (FBG) measures the concentration of glucose in the blood after an overnight fast of at least 8 to 12 hours. It serves as a primary diagnostic indicator for carbohydrate metabolic disorders, specifically Diabetes Mellitus.\n\nIn physiological conditions, blood glucose levels are tightly regulated within narrow limits by pancreatic hormones: insulin (which promotes cellular glucose uptake and glycogenesis) and glucagon (which stimulates glycogenolysis and gluconeogenesis).\n\nIn Medical Laboratory Science, accurate enzymatic estimation of FBG is critical for diagnosing type 1 and type 2 diabetes, detecting gestational diabetes, and monitoring glycemic control in diabetic management programs.",
        aim: "To quantitatively determine the concentration of glucose in plasma or serum using the Glucose Oxidase-Peroxidase (GOD-POD) enzymatic method.",
        principles: "Glucose is oxidized by Glucose Oxidase (GOD) to form Gluconate and Hydrogen Peroxide (H₂O₂). The formed H₂O₂ then reacts with 4-aminoaminophenazone and phenol in the presence of Peroxidase (POD) to yield a pink/red quinoneimine dye. The intensity of the color formed is directly proportional to the glucose concentration in the sample and is measured spectrophotometrically at 500–540 nm.",
        materials: [
          "Fluoride-oxalate anticoagulated plasma or serum sample",
          "Glucose reagent (containing GOD, POD, 4-aminoaminophenazone, and phenol buffer)",
          "Glucose standard solution (e.g., 100 mg/dL or 5.55 mmol/L)",
          "Spectrophotometer or semi-automated chemistry analyzer",
          "Cuvettes and precision micropipettes (10 µL, 1000 µL)",
          "Water bath or incubator maintained at 37°C"
        ],
        procedure: [
          "1. Set up three clean cuvettes/test tubes labeled: Blank, Standard, and Test.",
          "2. Pipette 1,000 µL (1.0 mL) of GOD-POD working reagent into all three tubes.",
          "3. Add 10 µL of distilled water to the Blank tube.",
          "4. Add 10 µL of Glucose Standard to the Standard tube.",
          "5. Add 10 µL of patient sample (plasma/serum) to the Test tube.",
          "6. Mix the contents of each tube thoroughly by gentle inversion.",
          "7. Incubate all tubes in a 37°C water bath for exactly 10 minutes (or 20 minutes at room temperature 20–25°C).",
          "8. Zero the spectrophotometer at 500 nm using the Blank solution.",
          "9. Read and record the absorbance values of the Standard (Abs_Std) and Test (Abs_Test).",
          "10. Calculate result: Glucose Concentration (mg/dL) = (Abs_Test / Abs_Std) × Concentration of Standard."
        ],
        result: "Fasting plasma glucose ≥ 126 mg/dL (7.0 mmol/L) on two separate occasions is diagnostic for Diabetes Mellitus. Values between 100–125 mg/dL indicate Impaired Fasting Glucose (Pre-diabetes). Low levels (< 70 mg/dL) indicate Hypoglycemia.",
        normal: "Fasting Normal Range: 70 – 99 mg/dL (3.9 – 5.5 mmol/L)",
        safety: [
          "Handle blood specimens as potentially infectious biohazards.",
          "Fluoride oxalate tubes contain potassium oxalate; wear chemical-resistant gloves.",
          "Calibrate and zero the spectrophotometer prior to every analytical batch."
        ],
        tips: "Sodium fluoride in grey-top tubes inhibits glycolysis by blocking the enzyme enolase. If serum tubes without glycolysis inhibitors are used, plasma/serum must be separated within 30 minutes to avoid falsely low glucose results."
      },
      {
        id: "creatinine",
        title: "Serum Creatinine Estimation (Jaffé Method)",
        intro: "Creatinine is a nitrogenous breakdown byproduct of creatine phosphate metabolism in skeletal muscle. It is produced at a relatively constant rate proportional to muscle mass and excreted freely by the renal glomeruli without significant tubular reabsorption.\n\nSerum creatinine is the most widely utilized biomarker for assessing renal excretory function and estimating Glomerular Filtration Rate (eGFR).\n\nMeasurement of serum creatinine helps detect acute kidney injury (AKI), monitor chronic kidney disease (CKD) progression, and evaluate nephrotoxic drug administration risks.",
        aim: "To quantitatively measure serum creatinine concentration using the alkaline picrate (Jaffé) colorimetric reaction.",
        principles: "Creatinine reacts with picric acid in an alkaline medium to form a yellow-orange creatinine-picrate complex. The rate of complex formation (kinetic method) or endpoint color intensity is directly proportional to the creatinine concentration and is measured spectrophotometrically at 490–520 nm.",
        materials: [
          "Non-hemolyzed serum or heparinized plasma",
          "Picric acid reagent (Reagent 1)",
          "Sodium hydroxide buffer (Reagent 2)",
          "Creatinine standard (e.g., 2.0 mg/dL or 177 µmol/L)",
          "Spectrophotometer with kinetic measuring capability (500 nm)"
        ],
        procedure: [
          "1. Prepare working reagent by mixing equal volumes of Picric Acid and Sodium Hydroxide.",
          "2. Set spectrophotometer wavelength to 500 nm and adjust temperature to 37°C.",
          "3. Pipette 1.0 mL of working reagent into clean cuvettes labeled Standard and Test.",
          "4. Add 100 µL of Creatinine Standard to the Standard cuvette, mix, and start timer instantly.",
          "5. Record absorbance at 30 seconds (A1) and at 90 seconds (A2) to calculate change in absorbance (ΔA_Std = A2 - A1).",
          "6. Add 100 µL of Patient Serum to the Test cuvette, mix immediately, and start timer.",
          "7. Record absorbance at 30 seconds (A1) and 90 seconds (A2) to obtain change in absorbance (ΔA_Test = A2 - A1).",
          "8. Calculate: Serum Creatinine (mg/dL) = (ΔA_Test / ΔA_Std) × Standard Concentration."
        ],
        result: "Elevated serum creatinine indicates impaired Glomerular Filtration Rate (renal failure, urinary tract obstruction, severe dehydration). Low levels may reflect reduced muscle mass or muscle wasting conditions.",
        normal: "Adult Male: 0.7 – 1.3 mg/dL (62 – 115 µmol/L)\nAdult Female: 0.5 – 1.1 mg/dL (44 – 97 µmol/L)",
        safety: [
          "Picric acid is toxic and explosive when dry; handle liquid solutions carefully and wipe spills immediately.",
          "Sodium hydroxide is caustic; avoid skin or eye contact."
        ],
        tips: "Use the kinetic Jaffé method rather than the endpoint method to minimize interference from non-creatinine chromogens like protein, ketoacids, bilirubin, and cephalosporins."
      },
      {
        id: "urea",
        title: "Serum Urea Estimation (Berthelot Method)",
        intro: "Urea is the chief end-product of protein nitrogen catabolism synthesized exclusively in the liver through the urea cycle and excreted principally by the kidneys.\n\nEvaluation of blood urea nitrogen (BUN) or serum urea is routine in assessing renal function, monitoring renal replacement therapy, and differentiating pre-renal, renal, and post-renal azotemia.",
        aim: "To quantitatively determine serum urea concentration using the enzymatic Berthelot reaction.",
        principles: "Urea is hydrolyzed by the enzyme Urease into ammonia and carbon dioxide. The liberated ammonia reacts with hypochlorite and phenol in the presence of sodium nitroprusside (catalyst) to form a blue indophenol dye. The intensity of the blue color is measured spectrophotometrically at 560–580 nm and is directly proportional to the urea concentration.",
        materials: [
          "Serum or lithium heparin plasma sample",
          "Urease reagent",
          "Phenol/Nitroprusside reagent (Reagent A)",
          "Sodium Hypochlorite reagent (Reagent B)",
          "Urea standard (e.g., 50 mg/dL or 8.3 mmol/L)",
          "Spectrophotometer (570 nm) and water bath (37°C)"
        ],
        procedure: [
          "1. Label tubes: Blank, Standard, and Test.",
          "2. Add 10 µL of distilled water, Standard, and Serum into Blank, Standard, and Test tubes respectively.",
          "3. Add 100 µL of Urease reagent to all tubes and mix gently.",
          "4. Incubate at 37°C for 5 minutes to complete urea conversion to ammonia.",
          "5. Pipette 1.0 mL of Reagent A (Phenol) into all tubes.",
          "6. Pipette 1.0 mL of Reagent B (Hypochlorite) into all tubes.",
          "7. Mix thoroughly and incubate at 37°C for 10 minutes.",
          "8. Zero spectrophotometer at 570 nm using Blank.",
          "9. Read absorbance of Standard and Test.",
          "10. Calculate: Serum Urea (mg/dL) = (Abs_Test / Abs_Std) × Standard Concentration."
        ],
        result: "Elevated urea (Uremia/Azotemia) occurs in renal dysfunction, GI hemorrhage, high protein intake, or dehydration. Decreased urea occurs in liver failure, severe starvation, or pregnancy.",
        normal: "Adults: 15 – 45 mg/dL (2.5 – 7.5 mmol/L)",
        safety: ["Phenol and sodium hypochlorite are hazardous chemicals; avoid inhalation and skin contact."],
        tips: "Do not use ammonium heparin or sodium fluoride tubes; fluoride inhibits urease enzyme activity, yielding falsely low results."
      },
      {
        id: "bilirubin",
        title: "Total & Direct Bilirubin Estimation (Jendrassik-Grof)",
        intro: "Bilirubin is the principal breakdown pigment derived from the catabolism of hemoglobin heme moieties in the reticuloendothelial system.\n\nSerum bilirubin testing differentiates unconjugated (indirect) hyperbilirubinemia from conjugated (direct) hyperbilirubinemia, aiding in the diagnosis of hemolytic anemia, hepatic cell injury, and biliary tree obstruction.",
        aim: "To determine total and direct (conjugated) serum bilirubin levels using the Jendrassik-Grof diazo method.",
        principles: "Direct (conjugated) bilirubin reacts rapidly with diazotized sulfanilic acid in an acidic medium to form red azobilirubin. Total bilirubin determination requires an accelerator (Caffeine-Sodium Benzoate) to release unconjugated bilirubin from albumin, allowing all bilirubin to react with the diazo reagent. Addition of tartrate reagent converts red azobilirubin into a blue complex measured at 600 nm.",
        materials: [
          "Serum sample (protected from direct light)",
          "Sulfanilic acid reagent",
          "Sodium nitrite reagent (forms diazo reagent when combined)",
          "Caffeine accelerator reagent",
          "Alkaline Tartrate reagent",
          "Spectrophotometer (600 nm)"
        ],
        procedure: [
          "1. Label tubes for Total Bilirubin and Direct Bilirubin.",
          "2. Prepare fresh Diazo reagent by mixing Sulfanilic acid and Sodium Nitrite.",
          "3. **Total Bilirubin:** Add caffeine accelerator (1.0 mL), serum (200 µL), and diazo reagent (500 µL). Incubate for 10 minutes.",
          "4. Add alkaline tartrate reagent (1.0 mL) to stop reaction and turn solution blue.",
          "5. **Direct Bilirubin:** Omit caffeine accelerator; mix serum (200 µL) with saline and diazo reagent (500 µL). Incubate for 5 minutes.",
          "6. Add alkaline tartrate reagent (1.0 mL).",
          "7. Read absorbance at 600 nm against corresponding specimen blanks.",
          "8. Calculate concentration using standard calibration factors."
        ],
        result: "Predominant direct hyperbilirubinemia indicates post-hepatic obstructive jaundice or cholestasis. Predominant indirect hyperbilirubinemia indicates pre-hepatic hemolysis or Gilbert syndrome.",
        normal: "Total Bilirubin: 0.2 – 1.2 mg/dL\nDirect Bilirubin: 0.0 – 0.3 mg/dL",
        safety: ["Protect samples from light. Bilirubin degrades rapidly when exposed to direct sunlight or ambient room light."],
        tips: "Indirect Bilirubin is calculated by subtracting Direct Bilirubin from Total Bilirubin: Indirect = Total - Direct."
      },
      {
        id: "alt",
        title: "Alanine Aminotransferase (ALT / SGPT) Assay",
        intro: "Alanine Aminotransferase (ALT), formerly SGPT, is an intracellular enzyme found predominantly in hepatocytes. Small amounts are also present in kidney and heart tissue.\n\nALT release into the bloodstream serves as a highly specific enzyme biomarker for hepatocellular damage, acute hepatitis, and liver disease toxicity.",
        aim: "To measure serum ALT activity using a kinetic UV enzymatic method.",
        principles: "ALT catalyzes the transamination of L-alanine and α-ketoglutarate to produce pyruvate and L-glutamate. In an indicator reaction, Lactate Dehydrogenase (LDH) reduces pyruvate to lactate while oxidizing NADH to NAD+. The rate of decrease in absorbance at 340 nm due to NADH oxidation is directly proportional to ALT activity.",
        materials: [
          "Unhemolyzed serum sample",
          "ALT working reagent (containing L-alanine, α-ketoglutarate, NADH, and LDH buffer)",
          "Spectrophotometer with temperature control at 37°C (340 nm)"
        ],
        procedure: [
          "1. Pre-warm ALT working reagent to 37°C.",
          "2. Pipette 1.0 mL of ALT working reagent into a clean temperature-controlled cuvette.",
          "3. Add 100 µL of serum sample and mix instantly.",
          "4. Place cuvette into spectrophotometer set at 340 nm and 37°C.",
          "5. Record initial absorbance after 1 minute, then start timer.",
          "6. Read absorbance values at exactly 1, 2, and 3 minutes.",
          "7. Calculate mean change in absorbance per minute (ΔA/min).",
          "8. Calculate ALT activity (U/L) = ΔA/min × Kinetic Factor (1746)."
        ],
        result: "Markedly elevated ALT (> 10x upper limit) occurs in acute viral hepatitis, toxic liver injury (paracetamol overdose), or ischemic hepatitis. Moderate elevation occurs in fatty liver disease, cirrhosis, and chronic hepatitis.",
        normal: "Adult Males: < 45 U/L\nAdult Females: < 34 U/L",
        safety: ["Avoid hemolyzed samples. RBCs contain minor amounts of ALT that can artifactually alter values."],
        tips: "Reagents containing NADH are sensitive to light and heat; keep reagents refrigerated at 2–8°C."
      },
      {
        id: "ast",
        title: "Aspartate Aminotransferase (AST / SGOT) Assay",
        intro: "Aspartate Aminotransferase (AST), formerly SGOT, is a pyridoxal phosphate-dependent enzyme present in cardiac muscle, liver tissue, skeletal muscle, kidneys, and erythrocytes.\n\nWhile less liver-specific than ALT, AST measurement evaluated alongside ALT (De Ritis ratio) aids in evaluating myocardial injury, liver cirrhosis, and skeletal muscle trauma.",
        aim: "To quantitatively determine serum AST activity using a kinetic UV spectrophotometric assay.",
        principles: "AST transfers an amino group from L-aspartate to α-ketoglutarate, forming oxaloacetate and L-glutamate. Malate Dehydrogenase (MDH) then reduces oxaloacetate to malate while oxidizing NADH to NAD+. The rate of decrease in absorbance measured at 340 nm is proportional to AST activity.",
        materials: [
          "Clear serum specimen",
          "AST working reagent (L-aspartate, α-ketoglutarate, NADH, MDH)",
          "UV spectrophotometer (340 nm, 37°C)"
        ],
        procedure: [
          "1. Incubate AST working reagent at 37°C prior to testing.",
          "2. Pipette 1.0 mL of working reagent into a cuvette.",
          "3. Add 100 µL of unhemolyzed serum sample and mix immediately.",
          "4. Insert cuvette into spectrophotometer calibrated at 340 nm.",
          "5. Record initial absorbance after 60 seconds.",
          "6. Take consecutive readings at 1, 2, and 3 minutes.",
          "7. Determine average absorbance change per minute (ΔA/min).",
          "8. Calculate AST Activity (U/L) = ΔA/min × Kinetic Factor."
        ],
        result: "Elevated AST occurs in myocardial infarction, acute hepatitis, alcoholic liver disease, muscular dystrophy, and severe tissue necrosis. De Ritis ratio (AST/ALT) > 2.0 strongly suggests alcoholic liver injury.",
        normal: "Adults: < 35 U/L",
        safety: ["Hemolysis must be strictly avoided; erythrocytes contain 15 times higher AST activity than serum."],
        tips: "Always check for specimen hemolysis before running AST assays."
      },
      {
        id: "alp",
        title: "Alkaline Phosphatase (ALP) Estimation",
        intro: "Alkaline Phosphatase (ALP) represents a family of zinc metalloenzymes that hydrolyze phosphate esters under alkaline pH conditions. It is concentrated in hepatobiliary osteoblasts, placental tissue, and renal tubules.\n\nSerum ALP measurement serves as a primary marker for hepatobiliary obstruction and metabolic bone disorders.",
        aim: "To determine serum ALP enzyme activity using p-Nitrophenylphosphate (pNPP) kinetic method.",
        principles: "ALP hydrolyzes p-Nitrophenylphosphate (pNPP) in an alkaline buffer (pH 10.4) to yield p-Nitrophenol and inorganic phosphate. The rate of yellow p-Nitrophenol formation is measured spectrophotometrically at 405 nm and is directly proportional to ALP activity.",
        materials: [
          "Serum sample",
          "ALP Substrate Buffer (pNPP in Diethanolamine or AMP buffer, pH 10.4)",
          "Spectrophotometer (405 nm, 37°C)"
        ],
        procedure: [
          "1. Pipette 1.0 mL of pre-warmed pNPP reagent into a cuvette.",
          "2. Add 20 µL of serum sample and mix well.",
          "3. Load cuvette into spectrophotometer set at 405 nm and 37°C.",
          "4. Record initial absorbance after 1 minute.",
          "5. Measure absorbance at 1, 2, and 3 minutes.",
          "6. Calculate mean ΔA/min.",
          "7. Calculate ALP Activity (U/L) = ΔA/min × Factor (2760)."
        ],
        result: "Marked ALP elevation occurs in biliary tract obstruction (gallstones, pancreatic head mass), Paget's disease, osteomalacia, and bone metastases. Physiological elevations occur during childhood bone growth and pregnancy.",
        normal: "Adults: 40 – 129 U/L (Varies by age and growth phase)",
        safety: ["Avoid EDTA or Oxalate anticoagulants; they chelate zinc/magnesium ions required for ALP enzyme activity."],
        tips: "Ensure proper collection tubes are used; complexing anticoagulants artificially inhibit ALP."
      },
      {
        id: "tp_alb",
        title: "Total Protein & Albumin Estimation",
        intro: "Serum total protein consists primarily of Albumin and Globulin fractions. Albumin, synthesized solely by the liver, maintains plasma oncotic pressure and transports endogenous/exogenous compounds.\n\nEvaluation of Total Protein, Albumin, and the calculated Albumin/Globulin (A/G) ratio aids in diagnosing liver disease, nephrotic syndrome, nutritional status, and plasma cell dyscrasias.",
        aim: "To quantify total serum protein using the Biuret reaction and albumin using the Bromocresol Green (BCG) dye-binding method.",
        principles: "Total Protein: Cupric ions in an alkaline Biuret reagent react with peptide bonds in proteins to form a violet-colored coordination complex measured at 540 nm. Albumin: Bromocresol Green dye selectively binds albumin at pH 4.2 to form a green-blue complex measured spectrophotometrically at 630 nm.",
        materials: [
          "Serum specimen",
          "Biuret Reagent & BCG Reagent",
          "Protein Standard & Albumin Standard",
          "Spectrophotometer (540 nm & 630 nm)"
        ],
        procedure: [
          "1. **Total Protein:** Pipette 1.0 mL Biuret reagent into Blank, Standard, Test tubes. Add 20 µL serum to Test, 20 µL Standard to Standard. Incubate 10 mins at 37°C. Read at 540 nm.",
          "2. **Albumin:** Pipette 1.0 mL BCG reagent into Blank, Standard, Test. Add 10 µL serum to Test, 10 µL Albumin Standard to Standard. Incubate 5 mins at RT. Read at 630 nm.",
          "3. Calculate Total Protein and Albumin concentrations using standard formulas.",
          "4. Calculate Globulin = Total Protein - Albumin.",
          "5. Calculate A/G Ratio = Albumin / Globulin."
        ],
        result: "Hypoalbuminemia occurs in hepatic failure, nephrotic syndrome (protein loss), and malnutrition. Hyperglobulinemia occurs in multiple myeloma and chronic infections.",
        normal: "Total Protein: 6.0 – 8.3 g/dL\nAlbumin: 3.5 – 5.0 g/dL\nA/G Ratio: 1.1 – 2.2",
        safety: ["Biuret contains strong sodium hydroxide; avoid contact with eyes or skin."],
        tips: "Do not leave BCG reactions standing too long; globulins slowly bind dye after extended incubation times."
      },
      {
        id: "electrolytes",
        title: "Serum Electrolytes (Sodium & Potassium via ISE)",
        intro: "Sodium ($Na^+$) and Potassium ($K^+$) are major extracellular and intracellular cations, respectively. They maintain osmolality, neuromuscular excitability, cardiac rhythm, and acid-base equilibrium.\n\nElectrolyte profiling is critical in emergency medicine, renal monitoring, endocrine pathology, and fluid replacement management.",
        aim: "To measure serum sodium and potassium concentrations using Ion-Selective Electrode (ISE) potentiometry.",
        principles: "Ion-Selective Electrodes contain specialized membranes (e.g., crown-ether/valinomycin for potassium, selective glass for sodium) that develop an electrical potential proportional to the activity of specific ions in solution. The potential difference relative to a reference electrode is converted into electrolyte concentration via the Nernst equation.",
        materials: [
          "Non-hemolyzed serum or heparinized plasma",
          "ISE Electrolyte Analyzer",
          "Calibrator Solutions A and B",
          "Cleaning and conditioning reagents"
        ],
        procedure: [
          "1. Perform routine daily calibration of ISE analyzer using Calibrators A and B.",
          "2. Ensure slope values for $Na^+$ and $K^+$ fall within accepted quality control bounds.",
          "3. Aspirate 100 µL of serum sample into the analyzer probe.",
          "4. Allow the system to measure electrical potential across selective membranes.",
          "5. Record digital concentrations displayed for $Na^+$ and $K^+$ in mmol/L."
        ],
        result: "Hyponatremia ($Na^+ < 135$) / Hypernatremia ($Na^+ > 145$) indicate hydration/renal disorders. Hypokalemia ($K^+ < 3.5$) / Hyperkalemia ($K^+ > 5.0$) pose severe risks for cardiac arrhythmias.",
        normal: "Sodium ($Na^+$): 135 – 145 mmol/L\nPotassium ($K^+$): 3.5 – 5.0 mmol/L",
        safety: ["Avoid even minimal hemolysis. Red blood cells contain $20\times$ higher potassium than serum, causing falsely high potassium readings."],
        tips: "In cases of marked hyperkalemia, inspect the serum sample for hemolysis or prolonged delay in serum separation."
      },
      {
        id: "lipid_panel",
        title: "Total Cholesterol Estimation (CHOD-PAP Method)",
        intro: "Cholesterol is a sterol lipophilic compound synthesized by hepatocytes and absorbed from dietary sources. It serves as a precursor for steroid hormones, bile acids, and cellular membrane structure.\n\nMeasurement of total serum cholesterol forms a core component of cardiovascular risk assessment and dyslipidemia classification.",
        aim: "To quantitatively determine total serum cholesterol using the enzymatic CHOD-PAP endpoint method.",
        principles: "Cholesterol esters are hydrolyzed by Cholesterol Esterase into free cholesterol and fatty acids. Cholesterol Oxidase (CHOD) oxidizes free cholesterol to Cholesten-3-one and Hydrogen Peroxide ($H_2O_2$). Peroxidase (PAP) then couples $H_2O_2$ with 4-aminoantipyrine and phenol to form a pink quinoneimine dye measured at 500 nm.",
        materials: [
          "Fasting serum sample",
          "CHOD-PAP enzymatic reagent",
          "Cholesterol standard (200 mg/dL)",
          "Spectrophotometer (500 nm, 37°C)"
        ],
        procedure: [
          "1. Label tubes: Blank, Standard, Test.",
          "2. Add 1.0 mL CHOD-PAP reagent to each tube.",
          "3. Add 10 µL distilled water to Blank, 10 µL Standard to Standard, and 10 µL Serum to Test.",
          "4. Mix gently and incubate at 37°C for 10 minutes.",
          "5. Zero instrument at 500 nm using Blank.",
          "6. Read absorbance of Standard and Test.",
          "7. Calculate Total Cholesterol (mg/dL) = (Abs_Test / Abs_Std) × 200."
        ],
        result: "Desirable: < 200 mg/dL. Borderline High: 200 – 239 mg/dL. High: ≥ 240 mg/dL (increased risk of atherosclerosis and coronary artery disease).",
        normal: "Desirable Level: < 200 mg/dL (< 5.2 mmol/L)",
        safety: ["Serum specimens should be collected after a 12-hour overnight fast for accurate baseline lipid evaluation."],
        tips: "Ensure patient fasts overnight prior to sampling to avoid postprandial chylomicronemia interference."
      }
    ]
  },

  // ======================================================
  // UNIT 3: MEDICAL MICROBIOLOGY & PARASITOLOGY (10 ANALYSES)
  // ======================================================
  {
    id: "microbiology",
    name: "Medical Microbiology & Parasitology",
    analyses: [
      {
        id: "gram_stain",
        title: "Gram Staining Technique",
        intro: "Gram staining is the single most essential differential staining procedure in clinical bacteriology. Developed by Hans Christian Gram in 1884, it classifies bacteria into two broad structural groups: Gram-positive and Gram-negative.\n\nThe differential response depends upon fundamental structural differences in bacterial cell walls: Gram-positive bacteria possess a thick layer of peptidoglycan, while Gram-negative bacteria have a thin peptidoglycan layer enclosed by an outer lipopolysaccharide membrane.\n\nGram staining provides rapid diagnostic guidance for initiating empirical antimicrobial therapy in suspected bacterial infections.",
        aim: "To differentiate bacterial isolates based on cell wall composition and observe bacterial cell morphology, arrangement, and staining characteristics under oil immersion light microscopy.",
        principles: "Bacteria are stained with primary dye Crystal Violet and treated with Gram's Iodine (mordant) to form an insoluble Crystal Violet-Iodine (CV-I) complex inside the cell. Decolorizer (95% Ethanol or Acetone-Alcohol) is applied: Gram-positive cell walls dehydrate, shrinking pores and trapping the CV-I complex (retaining purple color). Gram-negative cell walls lose their lipid outer membrane and peptidoglycan pores dissolve, releasing the CV-I complex. The counterstain (Safranin or Dilute Carbol Fuchsin) stains decolorized Gram-negative cells pink/red.",
        materials: [
          "Glass slides with bacterial smear",
          "Crystal Violet (Primary Stain)",
          "Gram's Iodine (Mordant)",
          "Decolorizer (95% Ethanol or Acetone-Alcohol mixture)",
          "Safranin or Neutral Red (Counterstain)",
          "Bunsen burner / spirit lamp",
          "Microscope with 100x oil immersion objective"
        ],
        procedure: [
          "1. Prepare a thin bacterial smear on a clean slide, air dry completely, and heat-fix by passing quickly through a flame 2–3 times.",
          "2. Place slide on staining rack and flood with Crystal Violet for 60 seconds.",
          "3. Gently rinse off primary stain with clean running tap water.",
          "4. Flood slide with Gram's Iodine mordant for 60 seconds.",
          "5. Rinse slide gently with water.",
          "6. Decolorize by tilting slide and adding 95% Ethanol dropwise for 5–10 seconds until solvent runs clear. Immediately rinse with water to stop decolorization.",
          "7. Counterstain by flooding slide with Safranin for 45–60 seconds.",
          "8. Gently rinse with water, blot dry with bibulous paper, and air dry.",
          "9. Examine under microscope using 100x oil immersion objective."
        ],
        result: "Gram-positive bacteria stain Deep Purple/Blue (e.g., Staphylococcus aureus, Streptococcus pneumoniae). Gram-negative bacteria stain Pink/Red (e.g., Escherichia coli, Pseudomonas aeruginosa).",
        normal: "Sterile body fluids (CSF, blood, pleural fluid) should show no organisms on Gram stain.",
        safety: [
          "Fix slides carefully to prevent shedding viable pathogens during staining.",
          "Flammable alcohols must be kept away from open Bunsen burner flames."
        ],
        tips: "Decolorization is the most critical step. Over-decolorization turns Gram-positive cells red (false negative), while under-decolorization leaves Gram-negative cells purple (false positive)."
      },
      {
        id: "zn_stain",
        title: "Ziehl-Neelsen (ZN) Staining for Acid-Fast Bacilli",
        intro: "Ziehl-Neelsen (ZN) staining is a specialized differential acid-fast staining technique used to detect Mycobacteria species, most notably *Mycobacterium tuberculosis*.\n\nMycobacterial cell walls contain complex mycolic acids and high lipid content, making them resistant to standard Gram stains. Acid-fast organisms retain primary stain even after intensive acid-alcohol decolorization.",
        aim: "To demonstrate Acid-Fast Bacilli (AFB) in clinical specimens like sputum.",
        principles: "Concentrated Carbol Fuchsin primary stain is driven into the lipid mycolic acid cell wall using heat. Acid-Alcohol decolorizer is applied: non-acid-fast bacteria lose color, while acid-fast bacilli resist decolorization. Methylene Blue counterstain stains background cellular debris and non-acid-fast bacteria light blue.",
        materials: [
          "Sputum smear slide",
          "Strong Carbol Fuchsin stain",
          "3% Acid-Alcohol decolorizer (3% HCl in 95% Ethanol)",
          "0.3% Methylene Blue counterstain",
          "Bunsen burner / spirit lamp"
        ],
        procedure: [
          "1. Prepare thin sputum smear, air dry, and heat fix.",
          "2. Place slide on staining rack and flood completely with Carbol Fuchsin.",
          "3. Heat underside of slide gently with flame until steam rises (do not boil) for 5 minutes, maintaining stain volume.",
          "4. Rinse slide gently with tap water.",
          "5. Decolorize with 3% Acid-Alcohol for 2–3 minutes until smear appears pale pink.",
          "6. Rinse with water.",
          "7. Counterstain with Methylene Blue for 1 minute.",
          "8. Rinse, blot dry, and examine under 100x oil immersion objective.",
          "9. Screen at least 100 fields before reporting AFB negative."
        ],
        result: "Acid-Fast Bacilli (AFB) appear as bright red/pink thin rods against a blue background. Non-acid-fast organisms stain blue.",
        normal: "Negative: No Acid-Fast Bacilli seen in 100 oil immersion fields.",
        safety: ["Handle sputum samples in Biosafety Cabinet Class II to prevent tuberculosis aerosol inhalation."],
        tips: "Never let Carbol Fuchsin dry out during the heating step; add extra stain if necessary."
      },
      {
        id: "mp_microscopy",
        title: "Malaria Parasite Microscopy (Thick & Thin Smears)",
        intro: "Malaria parasite microscopy remains the reference gold standard for definitive diagnosis, species identification, and parasite density quantification of Plasmodium species (P. falciparum, P. vivax, P. malariae, P. ovale, P. knowlesi).\n\nMicroscopic examination involves two complementary techniques on the same slide: a Thick Blood Film (optimized for high detection sensitivity) and a Thin Blood Film (optimized for species identification and morphological detail).\n\nPrompt diagnosis is crucial for preventing severe malaria complications, particularly in Plasmodium falciparum infections.",
        aim: "To detect, identify species, and calculate parasite density of Plasmodium parasites in blood specimens using Field's or Giemsa staining.",
        principles: "Field's stain and Giemsa stain are polychromatic Romanowsky stains containing methylene blue and eosin. In thick films, red blood cells are lysed (dehemoglobinized) by water during staining, concentrating parasites for easy detection. In thin films, methanol fixes erythrocytes intact, allowing observation of intracytoplasmic parasite morphology and erythrocyte inclusion bodies (Schüffner's/Maurer's dots).",
        materials: [
          "Whole blood (capillary fingerstick or EDTA blood)",
          "Clean grease-free glass slides",
          "Absolute Methanol (for fixing thin film only)",
          "Giemsa stain (diluted 1:10 with buffer pH 7.2) or Field's Stain A and B",
          "Phosphate buffer water (pH 7.1–7.2)",
          "Microscope with 100x oil immersion lens"
        ],
        procedure: [
          "1. Place a small drop of blood for thin film and a larger drop (3 µL) for thick film on the same clean slide.",
          "2. Spread thin film using a spreader slide at a 30° angle; spread thick film into a uniform circle of ~1 cm diameter using a slide corner.",
          "3. Air dry slide thoroughly in a horizontal position for at least 30 minutes (do not heat thick film!).",
          "4. Fix ONLY the thin film by dipping it briefly into absolute methanol for 5–10 seconds (protect thick film from methanol vapors).",
          "5. Stain with diluted Giemsa (10% solution) for 20 minutes (or use rapid Field's staining: Field's A 5s, water wash, Field's B 5s, water wash).",
          "6. Wash gently with phosphate buffer water (pH 7.2) and air dry standing vertically.",
          "7. Examine thick film under 100x oil immersion objective for presence of parasites (screen at least 100 fields before reporting negative).",
          "8. If positive, examine thin film under 100x oil immersion to identify species and developmental stages (trophozoites, schizonts, gametocytes).",
          "9. Calculate parasite density: (Parasites Counted / WBCs Counted [usually 200]) × Patient Total WBC Count (or standard 8,000/µL)."
        ],
        result: "Positive slide exhibits malaria parasites: Plasmodium falciparum shows delicate ring forms (double chromatin dots) and banana-shaped gametocytes. Parasite density reported as parasites/µL of blood.",
        normal: "Negative: No malaria parasites seen (NPS) after examining 100 high-power thick fields.",
        safety: [
          "Always handle unfixed thick blood films with gloves as potential biohazards.",
          "Dispose of lancets and stained slides in appropriate biohazard containers."
        ],
        tips: "Buffer pH must be kept strictly between 7.1 and 7.2. Acidic buffer prevents proper chromatin staining, making parasites difficult to detect."
      },
      {
        id: "urine_analysis",
        title: "Routine Urine Microscopy & Chemical Urinalysis",
        intro: "Urinalysis is a fundamental diagnostic screening tool evaluating renal function, urinary tract infections, metabolic status (e.g., diabetes mellitus), and liver conditions.",
        aim: "To perform physical, chemical, and microscopic examination of urine.",
        principles: "Chemical evaluation uses reagent strip dipsticks containing specific enzyme pads (e.g., glucose oxidase, leukocyte esterase). Microscopic analysis evaluates centrifuged urine sediment to detect cellular elements, casts, crystals, and microorganisms.",
        materials: [
          "Fresh midstream urine sample",
          "10-parameter urinalysis dipstick strips",
          "Centrifuge and conical centrifuge tubes",
          "Glass slides, coverslips, microscope"
        ],
        procedure: [
          "1. Inspect urine for color and clarity.",
          "2. Dip reagent strip into uncentrifuged urine, remove immediately, and wipe edge against tube rim.",
          "3. Read strip reactions at designated time intervals against color chart.",
          "4. Pour 10 mL urine into centrifuge tube and spin at 2,000 rpm for 5 minutes.",
          "5. Decant supernatant, resuspend sediment button in remaining 0.5 mL urine.",
          "6. Transfer a drop of sediment to slide, cover with coverslip, and examine under 10x and 40x objectives."
        ],
        result: "Pyuria (>5 WBC/HPF) and Nitrituria indicate UTI. Proteinuria indicates glomerular pathology. Casts reflect renal tubular pathology.",
        normal: "WBC: 0-4/HPF; RBC: 0-2/HPF; Protein/Glucose: Negative",
        safety: ["Handle urine samples as biohazards; wear nitrile gloves."],
        tips: "Examine urine sediment promptly. Alkaline urine causes cellular breakdown on standing."
      },
      {
        id: "stool_wet_mount",
        title: "Stool Microscopy for Ova & Parasites (Wet Mount)",
        intro: "Stool direct wet mount examination detects intestinal protozoa cysts, trophozoites, and helminth ova in gastrointestinal parasite infections.",
        aim: "To identify intestinal parasites in fecal specimens using saline and iodine wet preparations.",
        principles: "Saline preparations preserve protozoan trophozoite motility. Iodine preparations stain protozoan nuclear structures and glycogen vacuoles, aiding identification.",
        materials: [
          "Fresh stool specimen",
          "0.85% Normal Saline & Lugol's Iodine",
          "Glass slides, coverslips, wooden applicator sticks"
        ],
        procedure: [
          "1. Place a drop of Saline on left side of slide and Iodine on right side.",
          "2. Using applicator stick, mix a tiny amount of stool (~2 mg) into saline and iodine drops to form uniform suspensions.",
          "3. Place coverslips over each suspension.",
          "4. Examine under 10x and 40x objectives."
        ],
        result: "Identifies parasites such as *Entamoeba histolytica* cysts/trophozoites, *Giardia lamblia*, and helminth eggs (*Ascaris*, Hookworm).",
        normal: "No parasites seen (NPS).",
        safety: ["Wear gloves and lab coat; stool contains enteric pathogens."],
        tips: "Examine saline mounts immediately to observe active motility of trophozoites."
      },
      {
        id: "formal_ether",
        title: "Formal-Ether Stool Concentration Technique",
        intro: "Concentration methods increase detection sensitivity for intestinal parasites when parasite density is low in unconcentrated wet mounts.",
        aim: "To concentrate helminth eggs, larvae, and protozoan cysts from fecal samples.",
        principles: "Formalin preserves parasite morphology, while Ethyl Acetate (or Ether) dissolves fecal fats and debris. Centrifugation separates parasites into the bottom sediment.",
        materials: [
          "10% Formol-Saline solution",
          "Ethyl Acetate / Ether",
          "Gauze strainer, centrifuge tubes, centrifuge"
        ],
        procedure: [
          "1. Emulsify 1 g stool in 7 mL 10% Formol-saline.",
          "2. Strain suspension through wet gauze into centrifuge tube.",
          "3. Add 3 mL Ethyl Acetate, stopper tube, and shake vigorously for 1 minute.",
          "4. Centrifuge at 3,000 rpm for 1 minute.",
          "5. Four layers form: top solvent layer, fatty plug, formalin layer, and bottom sediment.",
          "6. Loosen fatty plug with stick and decant top 3 layers.",
          "7. Transfer sediment drop to slide, add iodine, cover, and examine microscopically."
        ],
        result: "High-yield concentration of eggs and cysts in bottom sediment.",
        normal: "No ova or cysts seen.",
        safety: ["Ether and Ethyl Acetate are highly flammable; use in a well-ventilated area."],
        tips: "Do not shake tubes near open flames."
      },
      {
        id: "koh_prep",
        title: "Potassium Hydroxide (KOH) Fungal Preparation",
        intro: "KOH preparation dissolves keratinous material in skin, hair, and nail specimens, allowing rapid visualization of fungal elements.",
        aim: "To detect fungal hyphae, pseudohyphae, and budding yeast cells in superficial mycotic infections.",
        principles: "10-20% KOH digests human keratin and proteinaceous debris without damaging chitinous fungal cell walls.",
        materials: [
          "Skin scrapings, hair clips, or nail clippings",
          "10–20% KOH solution",
          "Glass slides, coverslips, slide burner"
        ],
        procedure: [
          "1. Place specimen on a clean glass slide.",
          "2. Add 1-2 drops of 10% KOH solution.",
          "3. Apply coverslip and warm slide gently over flame (do not boil).",
          "4. Allow to sit for 15-30 minutes for complete keratin digestion.",
          "5. Examine under 10x and 40x objectives."
        ],
        result: "Fungal elements appear as clear, refractile branching septate hyphae or budding yeast cells.",
        normal: "No fungal elements observed.",
        safety: ["KOH is strongly caustic; avoid direct skin contact."],
        tips: "Do not boil KOH; boiling creates crystal artifacts that mask fungal hyphae."
      },
      {
        id: "ast_kirby_bauer",
        title: "Antimicrobial Susceptibility Testing (Kirby-Bauer)",
        intro: "Antimicrobial susceptibility testing guides clinical selection of effective antibiotic therapy against isolated pathogenic bacteria.",
        aim: "To evaluate bacterial susceptibility to specific antibiotic discs using agar disc diffusion.",
        principles: "Antibiotics diffuse outward from paper discs into Mueller-Hinton agar inoculated with a standardized bacterial lawn (0.5 McFarland standard). Inhibitory zone diameters correlate with bacterial sensitivity or resistance.",
        materials: [
          "Bacterial isolate culture",
          "0.5 McFarland turbidity standard",
          "Mueller-Hinton Agar (MHA) plates",
          "Antibiotic disc dispenser and discs",
          "Calipers/Ruler"
        ],
        procedure: [
          "1. Prepare bacterial suspension to match 0.5 McFarland standard.",
          "2. Dip sterile cotton swab into suspension and streak evenly across MHA plate in 3 directions to form a complete lawn.",
          "3. Apply antibiotic discs firmly onto agar surface.",
          "4. Incubate plate inverted at 35–37°C for 16–18 hours.",
          "5. Measure zone of inhibition diameters in mm and interpret as Sensitive, Intermediate, or Resistant using CLSI guidelines."
        ],
        result: "Measures bacterial inhibition zones around antibiotic discs.",
        normal: "Interpret against CLSI standard tables.",
        safety: ["Standard biohazard precautions for bacterial cultures apply."],
        tips: "Ensure agar depth is strictly 4 mm. Excessively thick agar causes artificially smaller zones."
      },
      {
        id: "blood_culture",
        title: "Blood Culture Technique",
        intro: "Blood cultures isolate systemic bacterial and fungal pathogens from patients with suspected bacteremia, sepsis, or infective endocarditis.",
        aim: "To recover viable microbial pathogens from circulating blood.",
        principles: "Blood is inoculated into enriched broth media (e.g., Tryptic Soy Broth) under aseptic conditions and incubated to facilitate organism proliferation.",
        materials: [
          "Blood culture bottles (Aerobic and Anaerobic)",
          "70% Alcohol & Chlorhexidine/Iodine antiseptics",
          "Venipuncture equipment"
        ],
        procedure: [
          "1. Clean venipuncture site rigorously with 70% alcohol followed by Chlorhexidine/Iodine; allow to dry 60 seconds.",
          "2. Disinfect rubber tops of blood culture bottles.",
          "3. Draw 10–20 mL blood per set in adults.",
          "4. Inoculate blood directly into aerobic and anaerobic culture bottles (1:10 blood-to-broth ratio).",
          "5. Incubate bottles at 35–37°C for up to 5–7 days, observing daily for turbidity, hemolysis, or gas production.",
          "6. Perform subcultures on solid media when growth is flagged."
        ],
        result: "Growth indicates bacteremia/sepsis. Growth requires subculture, Gram stain, and AST identification.",
        normal: "No growth after 5–7 days incubation.",
        safety: ["Aseptic skin preparation is vital to prevent skin flora contamination (*S. epidermidis*)."],
        tips: "Maintain a 1:10 blood-to-broth volume ratio to neutralize natural blood antibacterial factors."
      },
      {
        id: "widal_test",
        title: "Widal Agglutination Test for Typhoid Fever",
        intro: "The Widal test measures serum agglutinating antibodies against Salmonella enterica serovars Typhi and Paratyphi antigens in suspected enteric fever.",
        aim: "To detect O (somatic) and H (flagellar) antibodies against *Salmonella* species.",
        principles: "Patient serum antibodies react with standardized dead *Salmonella* bacterial suspensions (O and H antigens) to yield visible agglutination clumps.",
        materials: [
          "Patient serum",
          "Salmonella Typhi O, H, Paratyphi AH, BH antigen suspensions",
          "Agglutination slide / test tubes"
        ],
        procedure: [
          "1. **Slide Screen:** Place 1 drop of serum in 4 slide circles; add 1 drop of O, H, AH, BH antigens.",
          "2. Mix each circle and rock slide for 1 minute; observe for agglutination.",
          "3. **Tube Titration:** If positive, prepare serial dilutions of serum (1:20 to 1:320) in saline.",
          "4. Add equal volume of antigen to each tube.",
          "5. Incubate tubes at 37°C for 4 hours (O antigen) or overnight (H antigen).",
          "6. Examine for visible agglutination flakes."
        ],
        result: "Significant antibody titers (O titer ≥ 1:160, H titer ≥ 1:160) support diagnosis of active typhoid fever in endemic regions.",
        normal: "Titers < 1:80",
        safety: ["Treat serum samples as biohazards."],
        tips: "Paired serum samples collected 10 days apart showing a 4-fold rise in titer provide definitive diagnostic proof."
      }
    ]
  },

  // =================================================================
  // UNIT 4: BLOOD TRANSFUSION & IMMUNOHEMATOLOGY (10 ANALYSES)
  // =================================================================
  {
    id: "blood_transfusion",
    name: "Blood Transfusion & Immunohematology",
    analyses: [
      {
        id: "abo_rh",
        title: "ABO & Rh (Rhesus) Blood Grouping",
        intro: "ABO and Rhesus (Rh) blood grouping is the foundation of pre-transfusion safety, forensic testing, and obstetric care. The ABO system categorizes blood into groups A, B, AB, and O based on inherited carbohydrate antigens on the erythrocyte surface and naturally occurring reciprocal IgM antibodies in serum.\n\nThe Rh system primary clinical focus is the D antigen (RhD). Individuals possessing the D antigen are classified RhD-positive, while those lacking it are RhD-negative.\n\nMatching donor and recipient ABO and RhD types prevents life-threatening acute intravascular hemolytic transfusion reactions and Hemolytic Disease of the Fetus and Newborn (HDFN).",
        aim: "To determine the ABO blood group and Rh (D) status of an individual using forward (cell) grouping and reverse (serum) grouping techniques.",
        principles: "Forward grouping tests patient red blood cells with known commercial monoclonal antisera (Anti-A, Anti-B, Anti-D) to detect corresponding cell membrane antigens. Reverse grouping tests patient serum/plasma with known standard A1 and B red blood cells to detect circulating antibodies. Specific antigen-antibody reaction produces visible agglutination (clumping) of red cells.",
        materials: [
          "Patient EDTA anticoagulated whole blood or cell suspension",
          "Monoclonal Anti-A, Anti-B, and Anti-D (Rh) reagents",
          "Standard A1 and B reagent red blood cell suspensions (for reverse grouping)",
          "Clean white ceramic tile or glass slides / glass test tubes",
          "Applicator sticks and timer"
        ],
        procedure: [
          "1. **Forward Grouping (Tile Method):** Place 3 separate drops of 10-20% patient red cell suspension on a clean white tile labeled A, B, and D.",
          "2. Add 1 drop of Anti-A reagent to circle A, 1 drop of Anti-B to circle B, and 1 drop of Anti-D to circle D.",
          "3. Mix each circle using a clean, separate applicator stick.",
          "4. Rock the tile gently back and forth for 2 minutes while observing for hemagglutination under direct light.",
          "5. **Reverse Grouping (Tube Method):** Label two tubes A-cells and B-cells.",
          "6. Add 2 drops of patient serum/plasma into each tube.",
          "7. Add 1 drop of Standard A1 red cell suspension to tube A, and 1 drop of Standard B red cell suspension to tube B.",
          "8. Mix gently and centrifuge at 1,000 g for 1 minute (or incubate at room temperature for 15 minutes).",
          "9. Gently resuscitate the cell button and inspect visually for agglutination or hemolysis."
        ],
        result: "Agglutination in Anti-A = Group A. Agglutination in Anti-B = Group B. Agglutination in both = Group AB. No agglutination in either = Group O. Agglutination in Anti-D = Rh Positive. Reverse grouping results must confirm forward grouping findings.",
        normal: "N/A (Normal phenotype depends on individual genetics: A, B, AB, or O; RhD Positive or Negative).",
        safety: [
          "Treat all blood samples as potentially infectious for hepatitis, HIV, and other bloodborne pathogens.",
          "Dispose of blood-contaminated tiles, sticks, and tubes in biohazard sharp boxes."
        ],
        tips: "Always perform reverse grouping alongside forward grouping in adult samples. Discrepancies between forward and reverse grouping must be resolved before releasing blood for transfusion."
      },
      {
        id: "crossmatch",
        title: "Crossmatching / Compatibility Testing",
        intro: "Crossmatching is the final serological safeguard performed prior to blood transfusion to ensure compatibility between donor red cells and recipient serum.",
        aim: "To demonstrate serological compatibility between donor red cells and recipient serum before blood administration.",
        principles: "Major Crossmatch tests recipient serum against donor red blood cells. Minor Crossmatch tests recipient red blood cells against donor serum. The Indirect Antiglobulin Test (AHG phase) detects non-agglutinating IgG antibodies.",
        materials: [
          "Recipient serum and donor red cell suspension (3-5%)",
          "Anti-Human Globulin (AHG / Coombs) reagent",
          "22% Bovine Serum Albumin (BSA) or LISS",
          "Test tubes, 37°C incubator, centrifuge"
        ],
        procedure: [
          "1. **Saline Phase:** Mix 2 drops recipient serum with 1 drop donor cell suspension in a test tube. Centrifuge at 1,000 rpm for 1 min; observe for hemagglutination or hemolysis.",
          "2. **Thermolabile Phase:** Add 2 drops 22% BSA/LISS to tube and incubate at 37°C for 15-30 minutes.",
          "3. Centrifuge and examine for agglutination.",
          "4. **AHG Phase:** Wash cells 3 times with isotonic saline.",
          "5. Add 2 drops AHG reagent, centrifuge, and check for macroscopic and microscopic agglutination."
        ],
        result: "Absence of agglutination/hemolysis at all phases indicates donor blood is COMPATIBLE for recipient.",
        normal: "Compatible crossmatch.",
        safety: ["Incompatible transfusions can trigger acute hemolytic reactions and acute renal failure."],
        tips: "Always confirm negative AHG results by adding IgG-coated check cells (Coombs control cells)."
      },
      {
        id: "dat",
        title: "Direct Antiglobulin Test (DAT / Direct Coombs)",
        intro: "The Direct Antiglobulin Test detects in vivo sensitization of red blood cells by autoantibodies, alloantibodies, or complement components.",
        aim: "To detect antibodies or complement bound *in vivo* to patient erythrocytes.",
        principles: "Patient red cells are washed to remove unbound serum proteins. Anti-Human Globulin (AHG) reagent is added. If red cells are coated with IgG or C3d, AHG bridges adjacent cells, causing visible agglutination.",
        materials: [
          "Patient EDTA blood sample",
          "Polyspecific Anti-Human Globulin (AHG) reagent",
          "Isotonic saline, centrifuge, test tubes"
        ],
        procedure: [
          "1. Prepare a 3-5% suspension of patient red blood cells.",
          "2. Wash red cells 3–4 times with clean isotonic saline, decanting completely after each wash.",
          "3. Add 2 drops AHG reagent to 1 drop washed cell button.",
          "4. Centrifuge at 1,000 rpm for 1 minute.",
          "5. Resuspend cell button gently and read for macro/microscopic agglutination."
        ],
        result: "Positive DAT indicates Autoimmune Hemolytic Anemia (AIHA), Hemolytic Disease of Newborn (HDFN), or Transfusion Reaction.",
        normal: "Negative DAT (No agglutination).",
        safety: ["Inadequate cell washing causes false-negative results due to neutralization of AHG by unbound serum globulins."],
        tips: "Always wash red cells thoroughly before adding AHG reagent."
      },
      {
        id: "iat",
        title: "Indirect Antiglobulin Test (IAT / Indirect Coombs)",
        intro: "The Indirect Antiglobulin Test detects unexpected circulating anti-red cell antibodies present *in vitro* in patient serum or plasma.",
        aim: "To screen recipient serum for irregular IgG red cell antibodies prior to transfusion or during prenatal testing.",
        principles: "Patient serum is incubated at 37°C with commercial reagent red blood cells. If unexpected IgG antibodies are present, they bind *in vitro* to cell membrane antigens. Unbound antibodies are washed away, and AHG is added to induce agglutination.",
        materials: [
          "Patient serum sample",
          "Standard screening red cell panel (O cells)",
          "LISS / 22% BSA",
          "AHG reagent, 37°C incubator, centrifuge"
        ],
        procedure: [
          "1. Add 2 drops patient serum and 1 drop screening red cells into test tube.",
          "2. Add 2 drops LISS enhancement media.",
          "3. Incubate at 37°C for 15 minutes.",
          "4. Wash red cells 3 times with saline.",
          "5. Add 2 drops AHG reagent, centrifuge 1 minute, and inspect for agglutination."
        ],
        result: "Positive IAT indicates presence of irregular IgG red cell antibodies (e.g., Anti-D, Anti-K, Anti-Fya).",
        normal: "Negative IAT.",
        safety: ["Prevent contamination of AHG reagent with serum proteins."],
        tips: "Add Coombs control cells to all negative tubes to validate test accuracy."
      },
      {
        id: "rh_titration",
        title: "Rh Antibody Titration",
        intro: "Rh antibody titration quantifies the concentration of circulating Anti-D antibodies in maternal serum to assess risk of Hemolytic Disease of the Fetus and Newborn (HDFN).",
        aim: "To determine the highest serum dilution containing detectable Anti-D antibodies.",
        principles: "Maternal serum is serially diluted in saline and tested against $Rh(D)$-positive $O$ indicator red blood cells using the Indirect Antiglobulin technique.",
        materials: [
          "RhD-negative maternal serum",
          "O RhD-positive red cell suspension (3%)",
          "Isotonic saline, AHG reagent, test tubes, 37°C incubator"
        ],
        procedure: [
          "1. Set up a row of 10 test tubes labeled 1:1 to 1:512.",
          "2. Perform doubling serial dilutions of maternal serum in saline across tubes.",
          "3. Add 1 drop $O\ Rh(D)$-positive red cells to each tube.",
          "4. Incubate at 37°C for 30 minutes.",
          "5. Wash cells 3 times with saline, add AHG reagent, centrifuge, and read agglutination.",
          "6. Record highest serum dilution showing $1+$ agglutination as the antibody titer."
        ],
        result: "Titer $\ge 1:16$ is critical, requiring close fetal monitoring via Doppler ultrasound.",
        normal: "No antibody detected (Titer 0).",
        safety: ["Handle blood specimens with standard biohazard care."],
        tips: "Always test current sample alongside previous frozen sample to confirm true titer changes."
      },
      {
        id: "weak_d",
        title: "Weak D ($D^u$) Testing",
        intro: "Weak D testing identifies variants of the RhD antigen that show reduced antigen expression and fail to agglutinate directly with standard Anti-D reagent in immediate spin testing.",
        aim: "To confirm RhD status in individuals showing negative or weak direct agglutination with Anti-D antiserum.",
        principles: "Red blood cells incubated with monoclonal Anti-D antiserum at 37°C bind anti-D IgG molecules if Weak D antigen is present. Addition of AHG reagent after washing crosslinks cell-bound IgG, causing agglutination.",
        materials: [
          "Patient 3% red cell suspension",
          "IgG Anti-D reagent",
          "AHG reagent, 37°C incubator, centrifuge"
        ],
        procedure: [
          "1. Mix 1 drop cell suspension with 1 drop IgG Anti-D reagent in a test tube.",
          "2. Incubate at 37°C for 15–30 minutes.",
          "3. Wash cells 3 times with isotonic saline.",
          "4. Add 2 drops AHG reagent, centrifuge, and read for agglutination.",
          "5. If agglutination occurs, report as Weak D Positive (Rh Positive)."
        ],
        result: "Agglutination at AHG phase = Weak D Positive (Rh Positive). No agglutination = Rh Negative.",
        normal: "N/A (Phenotypic variant).",
        safety: ["Blood donors who test Weak D Positive must be classified as Rh Positive."],
        tips: "If DAT is positive, Weak D testing cannot be interpreted accurately."
      },
      {
        id: "vdrl_rpr",
        title: "Syphilis Screening (RPR / VDRL Test)",
        intro: "Rapid Plasma Reagin (RPR) and VDRL tests screen blood donors and patients for non-treponemal antibodies generated during *Treponema pallidum* (Syphilis) infection.",
        aim: "To screen blood units and serum for reagin antibodies associated with syphilis.",
        principles: "Reagin antibodies in patient serum bind carbon-conjugated cardiolipin-lecithin-cholesterol antigen particles, causing macroscopic flocculation.",
        materials: [
          "Serum or plasma sample",
          "RPR cardiolipin antigen suspension",
          "RPR card, rotator (100 rpm), micro-dispensing needle"
        ],
        procedure: [
          "1. Dispense 50 µL serum onto test circle on RPR card.",
          "2. Add 1 drop (~17 µL) RPR antigen using needle.",
          "3. Place card on mechanical rotator at 100 rpm for 8 minutes.",
          "4. Inspect immediately under direct light for black charcoal flocculation clumps."
        ],
        result: "Flocculation clumps = Reactive (Screen positive). Smooth suspension = Non-reactive.",
        normal: "Non-reactive.",
        safety: ["Reactive donor blood units must be discarded to prevent transfusion-transmitted syphilis."],
        tips: "All reactive non-treponemal RPR screens require confirmatory testing using specific treponemal assays (e.g., TPHA or FTA-ABS)."
      },
      {
        id: "hbsag",
        title: "Hepatitis B Surface Antigen (HBsAg) Screening",
        intro: "Hepatitis B Surface Antigen (HBsAg) screening is a mandatory pre-transfusion safety test used to identify and discard infectious blood units.",
        aim: "To screen blood donors for active Hepatitis B Virus (HBV) infection.",
        principles: "Rapid immunochromatographic assay using membrane strip coated with Anti-HBsAg antibodies. $HBsAg$ in serum binds conjugated antibodies to form a visible colored line.",
        materials: [
          "Serum or plasma specimen",
          "HBsAg rapid test cassettes",
          "Sample diluent buffer"
        ],
        procedure: [
          "1. Place test cassette on flat surface.",
          "2. Dispense 2-3 drops (~80 µL) serum into sample well.",
          "3. Wait 15 minutes.",
          "4. Read lines: Two lines (Control + Test) = Reactive; One line (Control only) = Non-reactive."
        ],
        result: "Two colored bands = Reactive (HBV positive). One band at C line = Non-reactive.",
        normal: "Non-reactive.",
        safety: ["HBV is highly infectious; handle serum with biohazard containment."],
        tips: "Do not read test strips after 20 minutes to prevent false-positive readings."
      },
      {
        id: "hcv",
        title: "Hepatitis C Virus (HCV) Antibody Screening",
        intro: "Screening blood donors for anti-HCV antibodies prevents transfusion-transmitted Hepatitis C virus infection and subsequent liver cirrhosis.",
        aim: "To detect antibodies against Hepatitis C Virus in serum or plasma.",
        principles: "Lateral flow immunochromatographic assay utilizing recombinant HCV antigens bound to membrane test zones to capture circulating anti-HCV antibodies.",
        materials: [
          "Serum, plasma, or whole blood",
          "HCV rapid test device",
          "Assay buffer solution"
        ],
        procedure: [
          "1. Add 10 µL serum to sample well of HCV cassette.",
          "2. Add 2 drops buffer solution.",
          "3. Incubate at room temperature for 15 minutes.",
          "4. Observe control (C) and test (T) line region."
        ],
        result: "Bands at Control and Test = Reactive. Band at Control only = Non-reactive.",
        normal: "Non-reactive.",
        safety: ["Discard reactive donor units immediately following biohazard waste protocols."],
        tips: "Always verify presence of Control line before reporting valid results."
      },
      {
        id: "hiv_rapid",
        title: "HIV 1/2 Rapid Screening Assay",
        intro: "Mandatory screening of all donated blood units for HIV-1 and HIV-2 antibodies/antigens prevents transfusion-transmitted Acquired Immunodeficiency Syndrome (AIDS).",
        aim: "To screen blood donors for antibodies against HIV-1 and HIV-2.",
        principles: "Qualitative membrane immunochromatographic assay utilizing synthetic HIV-1 and HIV-2 envelope antigens (gp41, gp120, gp36) to capture anti-HIV antibodies.",
        materials: [
          "Serum, plasma, or whole blood sample",
          "HIV 1/2 rapid test cassette",
          "Assay buffer"
        ],
        procedure: [
          "1. Dispense 50 µL serum into sample port.",
          "2. Add 1 drop buffer.",
          "3. Read result at 15 minutes.",
          "4. Observe for appearance of Control and Test line bands."
        ],
        result: "Two lines (C and T) = Reactive for HIV antibodies. Single line (C) = Non-reactive.",
        normal: "Non-reactive.",
        safety: ["Strict adherence to Universal Precautions is mandatory."],
        tips: "Follow national testing algorithm guidelines (e.g., serial or parallel testing) for diagnostic confirmation."
      }
    ]
  },
        // ======================================================
  // UNIT 5: HEMATOLOGY & HEMOSTASIS (10 ANALYSES)
  // ======================================================
  {
    id: "hematology",
    name: "Hematology & Hemostasis",
    analyses: [
      {
        id: "cbc",
        title: "Complete Blood Count (CBC / FBC)",
        intro: "A Complete Blood Count (CBC) or Full Blood Count (FBC) evaluates cellular components of circulating blood: Erythrocytes (RBCs), Leukocytes (WBCs), and Thrombocytes (Platelets). It provides core quantitative indices including Hemoglobin (Hb), Hematocrit (HCT), Mean Corpuscular Volume (MCV), Mean Corpuscular Hemoglobin (MCH), and Mean Corpuscular Hemoglobin Concentration (MCHC).\n\nCBC testing is fundamental in clinical hematology for diagnosing anemias, leukemias, bone marrow disorders, severe systemic infections, and hemostatic impairment.",
        aim: "To quantitatively analyze cellular blood elements and red cell indices using automated electrical impedance or optical flow cytometry.",
        principles: "Automated cell counters utilize electrical impedance (Coulter principle) where blood cells suspended in an electrolyte diluent pass through a micro-aperture. Cells act as non-conductive particles, creating voltage pulses proportional to cell volume. Hemoglobin is measured photometrically at 540 nm following conversion to cyanmethemoglobin or sodium lauryl sulfate (SLS) hemoglobin.",
        materials: [
          "EDTA anticoagulated venous blood sample (purple-top tube)",
          "Automated hematology analyzer",
          "System isotonic diluent, lysing agent, and cleaner",
          "Commercial low, normal, and high control blood samples"
        ],
        procedure: [
          "1. Mix EDTA blood sample thoroughly on a mechanical tube roller for at least 5 minutes.",
          "2. Perform daily automated background checks and run quality control (QC) samples.",
          "3. Aspirate 20–50 µL of mixed sample into analyzer aspiration probe.",
          "4. Allow system to perform automated dilution, cell counting, differential gating, and Hb spectrophotometry.",
          "5. Record output parameters: RBC, WBC, PLT, Hb, HCT, MCV, MCH, MCHC, and RDW.",
          "6. Review flags and verify abnormal findings via peripheral blood smear examination."
        ],
        result: "Provides complete cell counts and erythrocyte indices. Microcytic hypochromic indices indicate iron deficiency or thalassemia; macrocytic indices suggest vitamin B12 or folate deficiency.",
        normal: "Hb: Male 13.0–17.5 g/dL, Female 12.0–15.5 g/dL\nWBC: 4.0–11.0 × 10⁹/L\nPlatelets: 150–450 × 10⁹/L",
        safety: ["Process blood within 4–6 hours of venipuncture to avoid cellular swelling and morphological artifacts."],
        tips: "Always check EDTA blood tubes for micro-clots prior to analysis; clots falsely lower platelet and WBC counts."
      },
      {
        id: "pcv",
        title: "Packed Cell Volume (PCV) / Hematocrit (HCT)",
        intro: "Packed Cell Volume (PCV), or Hematocrit (HCT), measures the volume percentage of red blood cells relative to total blood volume following centrifugation.",
        aim: "To determine Packed Cell Volume using the microhematocrit method.",
        principles: "Anticoagulated whole blood in a capillary tube is centrifuged at high speed to pack erythrocytes at the bottom. The ratio of packed RBC column height to total blood column height is determined using a microhematocrit reader.",
        materials: [
          "EDTA blood or capillary blood",
          "Plain microhematocrit capillary tubes (heparinized if fingerstick)",
          "Microhematocrit sealant clay",
          "Microhematocrit centrifuge and reader card"
        ],
        procedure: [
          "1. Fill two capillary tubes approximately 2/3 to 3/4 full with well-mixed blood.",
          "2. Seal clean dry end of tubes with clay sealant.",
          "3. Place tubes in microhematocrit centrifuge with sealed ends facing outward against rubber rim.",
          "4. Centrifuge at 12,000 g for 5 minutes.",
          "5. Place tubes on microhematocrit reader card: align bottom of RBC column at 0% line and top of plasma column at 100% line.",
          "6. Read line corresponding to top of packed red cell column."
        ],
        result: "Determines proportion of RBCs in blood. Decreased PCV indicates anemia or hemodilution; elevated PCV indicates polycythemia or dehydration.",
        normal: "Adult Males: 40% – 54% (0.40 – 0.54)\nAdult Females: 36% – 48% (0.36 – 0.48)",
        safety: ["Ensure microhematocrit lid is locked securely prior to centrifugation."],
        tips: "Avoid including the buffy coat layer (WBCs and platelets) when reading packed red cell height."
      },
      {
        id: "hb_cyanm",
        title: "Hemoglobin Concentration (Cyanmethemoglobin Method)",
        intro: "The cyanmethemoglobin (hemiglobincyanide) method is the international reference manual procedure for determining total blood hemoglobin concentration.",
        aim: "To quantitatively measure hemoglobin concentration in blood spectrophotometrically.",
        principles: "Ferrous ions ($Fe^{2+}$) in hemoglobin are oxidized by Potassium Ferricyanide to ferric ions ($Fe^{3+}$), forming methemoglobin. Methemoglobin then combines with Potassium Cyanide to form stable Cyanmethemoglobin, measured at 540 nm.",
        materials: [
          "EDTA whole blood specimen",
          "Drabkin's Reagent (contains Potassium Ferricyanide, Potassium Cyanide, Sodium Bicarbonate)",
          "Cyanmethemoglobin reference standard",
          "Spectrophotometer (540 nm) and precision micropipettes"
        ],
        procedure: [
          "1. Pipette 5.0 mL Drabkin's reagent into clean test tubes.",
          "2. Add 20 µL well-mixed whole blood into reagent (1:251 dilution).",
          "3. Rinse micropipette tip with reagent 3 times to ensure complete blood transfer.",
          "4. Mix well and incubate at room temperature for 10 minutes.",
          "5. Zero spectrophotometer at 540 nm using Drabkin's reagent blank.",
          "6. Read absorbance of standard ($A_{std}$) and test ($A_{test}$).",
          "7. Calculate: $Hb\ (g/dL) = (A_{test} / A_{std}) \times Standard\ Conc.$"
        ],
        result: "Provides precise measurement of hemoglobin level in g/dL.",
        normal: "Adult Male: 13.0 – 17.5 g/dL\nAdult Female: 12.0 – 15.5 g/dL",
        safety: ["Drabkin's reagent contains cyanide; avoid acid contact (liberates toxic $HCN$ gas) and handle with gloves."],
        tips: "Turbid blood samples caused by severe hyperlipidemia or high WBC counts cause falsely high Hb readings."
      },
      {
        id: "diff_wbc",
        title: "Differential Leukocyte Count & Smear Examination",
        intro: "A differential leukocyte count determines relative percentages of distinct white blood cell types (neutrophils, lymphocytes, monocytes, eosinophils, basophils) and screens for abnormal cell morphology.",
        aim: "To identify and enumerate 100 white blood cells on a Leishman-stained blood smear.",
        principles: "Romanowsky stains (Leishman stain) differentiate leukocyte nuclear and cytoplasmic components: basic methylene blue stains acidic structures blue/purple (DNA/RNA), while acidic eosin stains basic granules orange/red.",
        materials: [
          "EDTA blood or fresh capillary blood",
          "Glass slides and spreader slide",
          "Leishman stain powder dissolved in absolute methanol",
          "Buffered water (pH 6.8)",
          "Microscope with 100x oil immersion objective"
        ],
        procedure: [
          "1. Spread a thin blood film with a smooth feather edge on a clean slide.",
          "2. Air dry smear completely.",
          "3. Flood slide with Leishman stain for 2 minutes (methanol fixes cells).",
          "4. Add double volume of pH 6.8 buffer water; blow gently to mix until metallic scum forms.",
          "5. Allow to stain for 10 minutes.",
          "6. Rinse gently with tap water, wipe slide underside, and air dry.",
          "7. Examine under 100x oil immersion in monolayer area using longitudinal or battlement counting pattern across 100 WBCs."
        ],
        result: "Reports percentages of Neutrophils, Lymphocytes, Monocytes, Eosinophils, and Basophils.",
        normal: "Neutrophils: 40–75%, Lymphocytes: 20–45%, Monocytes: 2–10%, Eosinophils: 1–6%, Basophils: 0–1%",
        safety: ["Wear gloves when preparing blood smears."],
        tips: "Avoid examining thick areas or extreme thin tail edges where cell distribution is distorted."
      },
      {
        id: "esr",
        title: "Erythrocyte Sedimentation Rate (Westergren Method)",
        intro: "Erythrocyte Sedimentation Rate (ESR) measures the distance in millimeters that red blood cells settle in uncoagulated blood over 1 hour, serving as a non-specific marker of inflammation.",
        aim: "To measure ESR using the standard Westergren tube technique.",
        principles: "In inflammatory states, elevated plasma acute-phase proteins (fibrinogen, globulins) neutralize negative surface charges (zeta potential) on RBCs, promoting rouleaux formation and accelerating sedimentation.",
        materials: [
          "Sodium citrate blood (4 parts blood to 1 part 3.8% trisodium citrate) or EDTA blood",
          "Westergren tube (300 mm length, 2.5 mm internal diameter)",
          "Westergren rack placed strictly vertical"
        ],
        procedure: [
          "1. Dilute EDTA blood 4:1 with 0.9% saline or use sodium citrate tube.",
          "2. Aspirate blood into Westergren tube exactly up to 0 mm mark.",
          "3. Mount tube vertically in Westergren rack away from vibration, direct sunlight, and draft.",
          "4. Set timer for exactly 1 hour.",
          "5. Read top level of red cell sediment column in millimeters."
        ],
        result: "Marked elevation (> 100 mm/hr) indicates severe infection, autoimmune vasculitis, tuberculosis, or multiple myeloma.",
        normal: "Men < 50 yrs: < 15 mm/hr; Women < 50 yrs: < 20 mm/hr",
        safety: ["Handle filled tubes carefully to prevent blood leakage."],
        tips: "Ensure Westergren rack is perfectly level; even a 3° tilt can artifactually increase ESR by 30%."
      },
      {
        id: "pt_inr",
        title: "Prothrombin Time (PT) & INR Assay",
        intro: "Prothrombin Time (PT) measures the integrity of extrinsic and common coagulation pathways (Factors I, II, V, VII, X). It is converted to International Normalized Ratio (INR) for oral anticoagulant (warfarin) monitoring.",
        aim: "To measure plasma prothrombin time and calculate INR.",
        principles: "Tissue factor (thromboplastin) and calcium chloride are added to citrated platelet-poor plasma. The time taken in seconds for fibrin clot formation is measured manually or photometrically.",
        materials: [
          "Platelet-poor citrated plasma (3.2% sodium citrate 9:1 blood-to-anticoagulant ratio)",
          "Thromboplastin reagent with Calcium Chloride ($CaCl_2$)",
          "Water bath at 37°C / coagulation analyzer",
          "Reagent International Sensitivity Index (ISI) value"
        ],
        procedure: [
          "1. Centrifuge citrated blood at 2,000 g for 15 minutes to obtain platelet-poor plasma.",
          "2. Pre-warm Thromboplastin-$CaCl_2$ reagent at 37°C.",
          "3. Pipette 100 µL plasma into test tube and incubate at 37°C for 3 minutes.",
          "4. Add 200 µL pre-warmed Thromboplastin reagent and start stopwatch instantly.",
          "5. Record time in seconds at initial fibrin web formation.",
          "6. Calculate: $INR = (Patient\ PT / Mean\ Normal\ PT)^{ISI}$"
        ],
        result: "Prolonged PT/INR indicates Warfarin therapy, Vitamin K deficiency, liver disease, or Factor VII deficiency.",
        normal: "PT: 11.0 – 13.5 seconds; Target INR for Warfarin: 2.0 – 3.0",
        safety: ["Blood-to-citrate ratio must be exact (9:1); underfilling tube causes false PT prolongation."],
        tips: "Ensure plasma is tested within 4 hours of collection."
      },
      {
        id: "aptt",
        title: "Activated Partial Thromboplastin Time (APTT)",
        intro: "APTT evaluates the intrinsic and common coagulation pathways (Factors VIII, IX, XI, XII, V, X, II, I) and monitors unfractionated heparin therapy.",
        aim: "To evaluate intrinsic coagulation cascade activation time.",
        principles: "Plasma is incubated with a contact activator (kaolin, silica, or ellagic acid) and partial thromboplastin (phospholipid). Calcium Chloride is added to initiate clotting, and time to fibrin formation is recorded.",
        materials: [
          "Citrated platelet-poor plasma",
          "APTT Reagent (Phospholipid + Activator)",
          "0.025 M Calcium Chloride ($CaCl_2$) solution pre-warmed to 37°C",
          "Water bath / coagulometer"
        ],
        procedure: [
          "1. Pipette 100 µL plasma and 100 µL APTT reagent into test tube.",
          "2. Mix and incubate at 37°C for exactly 3 to 5 minutes.",
          "3. Add 100 µL pre-warmed $CaCl_2$ and start timer immediately.",
          "4. Record clotting time in seconds."
        ],
        result: "Prolonged APTT occurs in Hemophilia A (Factor VIII deficiency), Hemophilia B (Factor IX deficiency), Lupus Anticoagulant, or heparin therapy.",
        normal: "25 – 35 seconds",
        safety: ["Do not collect sample through intravenous line containing heparin."],
        tips: "Avoid hemolyzed or lipemic plasma samples."
      },
      {
        id: "retic_count",
        title: "Reticulocyte Count (Supravital Staining)",
        intro: "Reticulocytes are immature non-nucleated erythrocytes containing residual ribosomal RNA. Counting them reflects bone marrow erythropoietic activity.",
        aim: "To quantify reticulocyte percentage using supravital staining.",
        principles: "Living, unfixed erythrocytes are stained with supravital dyes (New Methylene Blue or Brilliant Cresyl Blue). The dye precipitates residual cytoplasmic RNA into visible dark blue reticular networks.",
        materials: [
          "EDTA blood",
          "1% New Methylene Blue stain in isotonic saline",
          "Test tubes, glass slides, microscope (100x oil objective)"
        ],
        procedure: [
          "1. Mix 2 drops EDTA blood with 2 drops New Methylene Blue stain in a small tube.",
          "2. Incubate mixture at 37°C for 15 minutes.",
          "3. Make thin smears from incubated mixture and air dry.",
          "4. Examine under 100x oil immersion objective.",
          "5. Count reticulocytes among 1,000 total RBCs.",
          "6. Calculate: $Reticulocyte\ \% = (Reticulocytes\ counted / 1000) \times 100$."
        ],
        result: "Reticulocytosis occurs in acute hemolysis or post-hemorrhage recovery. Reticulocytopenia occurs in aplastic anemia or bone marrow suppression.",
        normal: "Adults: 0.5% – 2.0% of total RBCs",
        safety: ["Treat blood samples with universal biohazard precautions."],
        tips: "Differentiate reticulocyte granules from Heinz bodies or Howell-Jolly bodies."
      },
      {
        id: "sickling_test",
        title: "Sickling Test (Sodium Metabisulfite Method)",
        intro: "The sickling test screens for Sickle Cell Hemoglobin (HbS) in red blood cells under reduced oxygen tension conditions.",
        aim: "To demonstrate red cell sickling in the presence of HbS.",
        principles: "Sodium Metabisulfite is a strong reducing agent that deoxygenates hemoglobin. In the presence of HbS, deoxygenated molecules polymerize into rigid tactile rods (tactoids), distorting erythrocytes into characteristic sickle shapes.",
        materials: [
          "EDTA blood",
          "2% Freshly prepared Sodium Metabisulfite solution ($Na_2S_2O_5$)",
          "Glass slides, coverslips, petroleum jelly/paraffin wax"
        ],
        procedure: [
          "1. Mix 1 drop EDTA blood with 1 drop fresh 2% Sodium Metabisulfite on a slide.",
          "2. Cover with coverslip and seal edges completely with petroleum jelly to prevent oxygen entry.",
          "3. Incubate at room temperature (or 37°C) and examine under 40x objective at 30 minutes, 2 hours, and 24 hours."
        ],
        result: "Sickling of > 25% cells indicates presence of HbS (Sickle Trait HbAS or Sickle Disease HbSS).",
        normal: "Negative (RBCs remain smooth and biconcave disc shaped).",
        safety: ["Sodium Metabisulfite degrades rapidly; prepare solution fresh daily."],
        tips: "Sickling test cannot differentiate HbAS trait from HbSS disease; positive screens must be confirmed by Hemoglobin Electrophoresis or HPLC."
      },
      {
        id: "bt_ct",
        title: "Bleeding Time (Ivy Method) & Clotting Time",
        intro: "Bleeding Time measures primary hemostasis (platelet plug formation and vascular integrity), while Clotting Time evaluates secondary hemostasis (intrinsic coagulation path).",
        aim: "To assess primary and secondary hemostatic responses.",
        principles: "Bleeding Time: Standard superficial skin incision capillary bleeding time until cessation. Clotting Time (Lee-White): Whole blood glass tube exposure time required for solid fibrin clot formation.",
        materials: [
          "Blood pressure cuff, lancet (Ivy device), filter paper discs, stopwatch",
          "Glass test tubes (Lee-White method), 37°C water bath"
        ],
        procedure: [
          "1. **Bleeding Time (Ivy):** Place BP cuff on upper arm at 40 mmHg. Disinfect forearm and make 1 mm deep incision. Start stopwatch. Blot blood drop with filter paper every 30 seconds without touching wound until bleeding stops.",
          "2. **Clotting Time (Lee-White):** Draw 3 mL non-anticoagulated blood into glass tubes. Place in 37°C water bath. Tilt tube gently every 30 seconds until tube can be inverted without blood spilling. Record total time."
        ],
        result: "Prolonged BT indicates thrombocytopenia, von Willebrand disease, or aspirin use. Prolonged CT indicates severe hemophilia or heparin presence.",
        normal: "Ivy Bleeding Time: 2 – 8 minutes; Lee-White Clotting Time: 5 – 11 minutes",
        safety: ["Avoid applying excessive pressure with filter paper during bleeding time."],
        tips: "Invasive coagulation automated tests (PT/APTT) have largely replaced Lee-White CT in clinical practice."
      }
    ]
  },

  // =================================================================
  // UNIT 6: HISTOPATHOLOGY & CYTOPATHOLOGY (10 ANALYSES)
  // =================================================================
  {
    id: "histopathology",
    name: "Histopathology & Cytopathology",
    analyses: [
      {
        id: "tissue_processing",
        title: "Tissue Processing & Paraffin Embedding",
        intro: "Tissue processing prepares surgical tissue specimens for microscopic analysis through a sequence of steps: Fixation, Dehydration, Clearing, Impregnation, and Embedding.",
        aim: "To convert soft biological tissues into rigid paraffin blocks suitable for microtomy sectioning.",
        principles: "Fixation preserves cellular structure. Alcohol removes water (dehydration). Xylene removes alcohol and renders tissue translucent (clearing). Molten paraffin wax infiltrates tissue interstices (impregnation) and solidifies into a block (embedding).",
        materials: [
          "10% Neutral Buffered Formalin (NBF)",
          "Graded Ethanol series (70%, 80%, 95%, 100%)",
          "Xylene solvent",
          "Molten Paraffin Wax (56–58°C)",
          "Tissue cassettes and embedding center"
        ],
        procedure: [
          "1. **Fixation:** Immersion in 10% NBF for 12–24 hours.",
          "2. **Dehydration:** Pass tissue cassettes through ascending ethanol series (70% -> 80% -> 95% -> 3 changes 100% Ethanol), 1 hour each.",
          "3. **Clearing:** Transfer through 2 changes of Xylene, 1 hour each.",
          "4. **Impregnation:** Immerse in 2 changes of molten paraffin wax at 58°C, 2 hours each.",
          "5. **Embedding:** Orient tissue in metal mold filled with molten wax and chill on cold plate to solidify into block."
        ],
        result: "Yields a firm paraffin-embedded tissue block suitable for section cutting.",
        normal: "N/A (Surgical tissue preparation).",
        safety: ["Xylene is toxic and volatile; perform clearing steps inside a fume hood."],
        tips: "Complete dehydration is critical; residual water prevents paraffin infiltration, producing soft, un-cuttable tissue blocks."
      },
      {
        id: "microtomy",
        title: "Microtomy (Paraffin Tissue Sectioning)",
        intro: "Microtomy uses high-precision microtome instruments to cut paraffin-embedded tissue blocks into ultra-thin sections (3–5 µm) for microscopic staining.",
        aim: "To produce uniform thin tissue sections mounted on glass slides.",
        principles: "A paraffin block mounted on a microtome advances against a razor-sharp steel or disposable microtome blade at preset micrometer increments, yielding continuous ribbon sections.",
        materials: [
          "Paraffin embedded tissue blocks (pre-chilled on ice)",
          "Rotary microtome and disposable blades",
          "Flotation water bath set at 45°C (containing gelatin adhesive)",
          "Glass microscope slides, slide drying oven (60°C)"
        ],
        procedure: [
          "1. Trim paraffin block at 15–20 µm to expose full tissue surface.",
          "2. Chill block face on ice plate for 15 minutes.",
          "3. Set microtome section thickness to 4 µm.",
          "4. Cut continuous ribbon sections.",
          "5. Transfer ribbon carefully onto flotation water bath (45°C) to flatten wrinkles.",
          "6. Mount selected section onto clean glass slide.",
          "7. Drain slide vertically and bake in drying oven at 60°C for 30 minutes to fix tissue to glass."
        ],
        result: "Produces flat, wrinkle-free tissue sections attached to glass slides.",
        normal: "N/A.",
        safety: ["Keep hands away from microtome blade edge; lock handwheel when adjusting blocks."],
        tips: "Chilling blocks on ice hydrates tissue, allowing smoother, artifact-free sectioning."
      },
      {
        id: "he_stain",
        title: "Routine Hematoxylin & Eosin (H&E) Staining",
        intro: "Hematoxylin and Eosin (H&E) is the principal routine stain in diagnostic histopathology, providing structural contrast between cell nuclei and cytoplasm.",
        aim: "To demonstrate nuclear and cytoplasmic architecture in tissue sections.",
        principles: "Harris Hematoxylin (basic dye) binds acidic nuclear chromatin (DNA/RNA) to stain nuclei blue/purple. Acid alcohol differentiates excess dye. Eosin Y (acidic dye) stains basic cytoplasmic proteins and extracellular collagen pink/red.",
        materials: [
          "Paraffin tissue slides",
          "Xylene, absolute ethanol, graded alcohols",
          "Harris Hematoxylin, 1% Acid Alcohol (1% HCl in 70% ethanol)",
          "Ammonia water / Scott's tap water substitute (bluing agent)",
          "Eosin Y stain solution, Mounting medium (DPX) and coverslips"
        ],
        procedure: [
          "1. **Deparaffinize:** Xylene I & II, 5 mins each.",
          "2. **Rehydrate:** Absolute Ethanol -> 95% -> 70% -> Water, 2 mins each.",
          "3. **Nuclear Stain:** Harris Hematoxylin for 5–8 minutes.",
          "4. Rinse in running tap water.",
          "5. **Differentiation:** Dip in 1% Acid Alcohol for 3–5 seconds, then rinse.",
          "6. **Bluing:** Immerse in Scott's tap water substitute for 1 minute until nuclei turn bright blue.",
          "7. **Cytoplasmic Stain:** Eosin Y for 2 minutes.",
          "8. **Dehydrate & Clear:** Ascending alcohols -> Xylene I & II.",
          "9. Mount slide with DPX resin and coverslip."
        ],
        result: "Nuclei stain Deep Blue/Purple. Cytoplasm, collagen, and muscle stain shades of Pink and Red.",
        normal: "Allows histopathological evaluation of normal vs malignant tissue architecture.",
        safety: ["Perform xylene mounting inside a fume hood."],
        tips: "Monitor acid alcohol differentiation closely under microscope to prevent nuclear over-decolorization."
      },
      {
        id: "masson_trichrome",
        title: "Masson's Trichrome Staining",
        intro: "Masson's Trichrome is a connective tissue stain used to differentiate collagen fibers from smooth muscle and muscle pathology.",
        aim: "To selectively stain collagen blue against muscle tissue.",
        principles: "Anionic dyes with different molecular weights selectively bind tissues: smaller dye molecules stain cytoplasm and muscle red, while larger phosphomolybdic acid-treated collagen fibers bind Aniline Blue dye.",
        materials: [
          "Bouin's fluid (mordant), Weigert's Iron Hematoxylin",
          "Biebrich Scarlet-Acid Fuchsin, Phosphomolybdic/Phosphotungstic acid",
          "Aniline Blue solution, 1% Acetic acid"
        ],
        procedure: [
          "1. Deparaffinize and hydrate tissue slides to water.",
          "2. Mordant in Bouin's fluid at 56°C for 1 hour.",
          "3. Stain nuclei with Weigert's Iron Hematoxylin for 10 minutes; wash in water.",
          "4. Stain cytoplasm/muscle with Biebrich Scarlet-Acid Fuchsin for 5 minutes.",
          "5. Differentiate in Phosphomolybdic acid for 10 minutes.",
          "6. Stain collagen with Aniline Blue for 5 minutes.",
          "7. Treat with 1% Acetic acid for 2 minutes, dehydrate, clear, and mount with DPX."
        ],
        result: "Collagen fibers stain Bright Blue. Muscle fibers, cytoplasm, and keratin stain Red. Nuclei stain Black/Brown.",
        normal: "Quantifies liver fibrosis/cirrhosis and cardiac infarction scarring.",
        safety: ["Bouin's fluid contains explosive picric acid; handle wet solution carefully."],
        tips: "Iron hematoxylin must be used instead of alum hematoxylin because acidic trichrome reagents dissolve alum hematoxylin."
      },
      {
        id: "pas_stain",
        title: "Periodic Acid-Schiff (PAS) Staining",
        intro: "Periodic Acid-Schiff (PAS) demonstrates glycogen, mucins, basement membranes, and fungal cell walls in tissues.",
        aim: "To detect glycogen and complex carbohydrates in tissue sections.",
        principles: "Periodic acid oxidizes 1,2-glycol groups in carbohydrates to form dialdehydes. Schiff reagent (leuco-fuchsin) reacts with aldehydes to produce a magenta/pink color.",
        materials: [
          "0.5% Periodic Acid solution",
          "Schiff Reagent",
          "Harris Hematoxylin counterstain",
          "Deparaffinized slides"
        ],
        procedure: [
          "1. Deparaffinize and hydrate slides to water.",
          "2. Oxidize in 0.5% Periodic Acid for 5 minutes.",
          "3. Rinse well in distilled water.",
          "4. Immerse in Schiff Reagent for 15 minutes in dark.",
          "5. Wash in lukewarm running tap water for 10 minutes to develop magenta color.",
          "6. Counterstain nuclei with Hematoxylin for 2 minutes.",
          "7. Dehydrate, clear, and mount in DPX."
        ],
        result: "Glycogen, mucin, fungal cell walls, and basement membranes stain Magenta/Pink. Nuclei stain Blue.",
        normal: "Evaluates renal glomerular basement membrane thickening and fungal infections.",
        safety: ["Schiff reagent must be kept tightly closed in refrigerator."],
        tips: "Include a diastase-digested control slide to confirm glycogen specificity."
      },
      {
        id: "pap_smear",
        title: "Papanicolaou (Pap) Staining for Cervical Cytology",
        intro: "Papanicolaou (Pap) staining is a multichromatic cytological stain used for cervical cancer screening and evaluating cellular dysplasia.",
        aim: "To stain exfoliated cervical cells for dysplastic and malignant cytological evaluation.",
        principles: "Harris Hematoxylin stains nuclear chromatin. OG-6 stains keratinized cytoplasm orange. EA-50 or EA-65 (Eosin, Light Green, Bismarck Brown) stains superficial and basal epithelial cell cytoplasm pink and green/blue.",
        materials: [
          "Alcohol-fixed cervical smear slides (95% ethanol fixative)",
          "Harris Hematoxylin, OG-6 stain solution, EA-50 stain solution",
          "Graded alcohols, xylene, DPX mountant"
        ],
        procedure: [
          "1. Immerse fixed cervical smears in 95% ethanol -> 70% ethanol -> Water.",
          "2. Stain nuclei with Harris Hematoxylin for 3 minutes.",
          "3. Rinse in water, differentiate in 0.5% acid alcohol, blue in Scott's tap water.",
          "4. Dehydrate through 70% and 95% ethanol.",
          "5. Stain with OG-6 for 2 minutes.",
          "6. Rinse in 2 changes 95% ethanol.",
          "7. Stain with EA-50 for 3 minutes.",
          "8. Dehydrate in absolute ethanol, clear in xylene, and mount with DPX."
        ],
        result: "Nuclei stain Blue/Black. Superficial squamous cells stain Pink/Red. Basal/Intermediate cells stain Blue/Green. Keratinized cells stain Bright Orange.",
        normal: "Normal cervical cytology displays uniform superficial and intermediate cells without nuclear atypia.",
        safety: ["Fix slides immediately upon collection to prevent air-drying distortion."],
        tips: "Air-drying prior to fixation causes cell swelling and loss of nuclear detail."
      },
      {
        id: "fnac",
        title: "Fine Needle Aspiration Cytology (FNAC) Processing",
        intro: "FNAC is a rapid, minimally invasive diagnostic technique collecting cellular aspirates from palpable masses (breast, thyroid, lymph nodes) using fine needles.",
        aim: "To process fine needle aspirates for rapid cytological interpretation.",
        principles: "Cellular aspirates spread on slides are either air-dried for Giemsa staining (highlighting cytoplasmic/stromal detail) or wet-fixed in 95% alcohol for Pap/H&E staining (highlighting nuclear detail).",
        materials: [
          "21–25 gauge needles and 10 mL syringes",
          "Glass slides, 95% Ethanol fixative",
          "May-Grünwald Giemsa (MGG) or Papanicolaou stain"
        ],
        procedure: [
          "1. Perform needle aspiration of target lesion; expel aspirate drop onto glass slides.",
          "2. Spread aspirate smoothly using a secondary slide.",
          "3. **Air-dried smears:** Air dry rapidly for May-Grünwald Giemsa (MGG) staining.",
          "4. **Wet-fixed smears:** Place slide instantly into 95% ethanol for Pap staining.",
          "5. Stain, clear, mount, and examine microscopically."
        ],
        result: "Differentiates benign neoplastic, malignant neoplastic, and inflammatory masses.",
        normal: "Normal tissue aspirate shows regular cell clusters without pleomorphism.",
        safety: ["Handle needles carefully; do not recap needles manually."],
        tips: "Fixing slides within seconds prevents air-drying nuclear distortion on wet-fixed Pap smears."
      },
      {
        id: "frozen_section",
        title: "Frozen Section / Cryostat Microtomy",
        intro: "Frozen section preparation provides rapid intraoperative histological diagnosis while a patient is under anesthesia in the operating room.",
        aim: "To rapidly freeze, section, and stain unfixed tissue within 10–15 minutes.",
        principles: "Fresh unfixed tissue is rapidly frozen in liquid matrix at -20°C inside a cryostat cabinet. Ice acts as an embedding medium, allowing thin sectioning without chemical processing.",
        materials: [
          "Cryostat instrument (-20°C)",
          "OCT (Optimal Cutting Temperature) embedding compound",
          "Cryostat microtome blades, cold slides",
          "Rapid H&E staining setup"
        ],
        procedure: [
          "1. Place fresh tissue fragment in OCT compound on metal specimen chuck.",
          "2. Freeze rapidly on cryostat freezing bar (-30°C).",
          "3. Mount chuck in cryostat microtome maintained at -20°C.",
          "4. Cut 5–6 µm sections and transfer directly onto warm slide.",
          "5. Fix slide immediately in 95% ethanol for 30 seconds.",
          "6. Perform rapid H&E staining (1 minute hematoxylin, brief eosin).",
          "7. Clear, mount, and read immediately."
        ],
        result: "Delivers intraoperative surgical margin and malignancy report in under 15 minutes.",
        normal: "Diagnostic tissue accuracy comparable to paraffin sections.",
        safety: ["Unfixed frozen tissues carry live infectious risk; disinfect cryostat regularly."],
        tips: "Avoid slow freezing, which forms large ice crystals that tear tissue morphology."
      },
      {
        id: "decalcification",
        title: "Tissue Decalcification Technique",
        intro: "Decalcification removes calcium salts from bone and calcified tissues prior to paraffin processing to protect microtome blades and enable sectioning.",
        aim: "To remove bone mineral matrix while preserving tissue antigenicity and morphology.",
        principles: "Strong mineral acids (HCl, Nitric acid) or chelating agents (EDTA) solubilize calcium hydroxyapatite crystals into soluble calcium ions.",
        materials: [
          "10% Nitric Acid or 14% Neutral EDTA solution",
          "10% Neutral Buffered Formalin fixed bone specimen",
          "Chemical end-point test reagents (Ammonium Hydroxide + Ammonium Oxalate)"
        ],
        procedure: [
          "1. Fix tissue specimen thoroughly in 10% NBF.",
          "2. Suspend bone in decalcifying fluid (1:20 tissue-to-fluid ratio).",
          "3. Change fluid daily.",
          "4. Check endpoint daily using chemical test: mix 5 mL used fluid with ammonium hydroxide and ammonium oxalate; absence of turbidity indicates complete decalcification.",
          "5. Wash decalcified bone in running water for 4 hours before routine processing."
        ],
        result: "Yields pliable bone tissue suitable for standard paraffin sectioning.",
        normal: "N/A.",
        safety: ["Acid fumes are corrosive; handle decalcifying fluids in fume hood."],
        tips: "Over-decalcification with strong acids destroys nuclear staining detail."
      },
      {
        id: "sputum_cytology",
        title: "Sputum Cytology for Malignant Cells",
        intro: "Sputum cytology evaluates exfoliated tracheobronchial cells for diagnosing bronchogenic carcinoma and pulmonary fungal/granulomatous disease.",
        aim: "To identify malignant cytological features in sputum specimens.",
        principles: "Deep-cough sputum containing alveolar macrophages is selected for bloody/flecked particles, smeared onto slides, alcohol-fixed, and Pap stained.",
        materials: [
          "Early morning deep-cough sputum specimen",
          "Petri dish, wooden applicator sticks",
          "Glass slides, 95% Ethanol fixative, Pap stain kit"
        ],
        procedure: [
          "1. Pour sputum into Petri dish over dark background.",
          "2. Select bloody, dense, or opaque threads using wooden sticks.",
          "3. Spread evenly onto glass slides.",
          "4. Fix immediately in 95% ethanol for 30 minutes (do not air dry).",
          "5. Perform standard Papanicolaou staining procedure.",
          "6. Screen slide under microscopy for malignant squamous or oat-cell carcinoma features."
        ],
        result: "Detects dysplastic/malignant respiratory cells and alveolar macrophages (confirming deep specimen).",
        normal: "Normal ciliated columnar cells and alveolar macrophages present; no malignant cells.",
        safety: ["Sputum may contain viable *M. tuberculosis*; handle with biosafety precautions."],
        tips: "Absence of alveolar macrophages indicates specimen is saliva, requiring sample recollection."
      }
    ]
  },

  // =================================================================
  // UNIT 7: CLINICAL IMMUNOLOGY & SEROLOGY (10 ANALYSES)
  // =================================================================
  {
    id: "immunology",
    name: "Clinical Immunology & Serology",
    analyses: [
      {
        id: "rf_latex",
        title: "Rheumatoid Factor (RF) Latex Agglutination",
        intro: "Rheumatoid Factors (RF) are autoantibodies (predominantly IgM) directed against the Fc region of human IgG molecules, elevated in Rheumatoid Arthritis (RA).",
        aim: "To screen and quantify Rheumatoid Factor autoantibodies in serum.",
        principles: "Latex particles coated with human IgG react with RF IgM autoantibodies in patient serum, producing visible macroscopic latex agglutination.",
        materials: [
          "Patient serum specimen",
          "RF Latex Reagent (IgG-coated polystyrene beads)",
          "Positive and negative control sera",
          "Test slide card and stir sticks"
        ],
        procedure: [
          "1. Place 50 µL patient serum, positive control, and negative control into separate test card circles.",
          "2. Add 1 drop of well-shaken RF Latex reagent to each circle.",
          "3. Mix thoroughly using clean applicator sticks.",
          "4. Rock test card continuously for 2 minutes.",
          "5. Observe for macroscopic agglutination under direct light.",
          "6. If positive, perform serial dilutions (1:2, 1:4, 1:8...) in saline to determine antibody titer."
        ],
        result: "Visible agglutination = Positive (RF concentration $\ge 8–12\ IU/mL$). Smooth suspension = Negative.",
        normal: "Negative (< 8 IU/mL)",
        safety: ["Treat serum samples as potentially biohazardous."],
        tips: "Avoid reading test beyond 2 minutes; drying produces false-positive peripheral flaking."
      },
      {
        id: "crp_assay",
        title: "C-Reactive Protein (CRP) Assay",
        intro: "C-Reactive Protein (CRP) is an acute-phase reactant synthesized by hepatocytes during acute inflammatory states, tissue injury, and bacterial infections.",
        aim: "To detect and quantify serum CRP levels.",
        principles: "Latex particles coated with anti-human CRP antibodies agglutinate when mixed with serum containing elevated CRP concentrations.",
        materials: [
          "Patient serum",
          "Anti-CRP coated latex reagent",
          "Glycine buffer solution, reaction card"
        ],
        procedure: [
          "1. Add 50 µL serum to reaction circle.",
          "2. Add 1 drop Anti-CRP latex reagent.",
          "3. Mix with stick and rotate card gently for 2 minutes.",
          "4. Inspect for visible agglutination.",
          "5. Quantify by serial dilution if screen is positive ($Titer \times Cutoff\ [6\ mg/L]$)."
        ],
        result: "Agglutination indicates elevated CRP ($> 6\ mg/L$), reflecting active infection or tissue inflammation.",
        normal: "Negative (< 6 mg/L)",
        safety: ["Handle human serum reagents carefully."],
        tips: "CRP levels rise rapidly within 6–8 hours of acute tissue injury and fall quickly upon resolution."
      },
      {
        id: "aso_titration",
        title: "Antistreptolysin O (ASO) Titration Test",
        intro: "Antistreptolysin O (ASO) measures serum antibodies produced against Streptolysin O toxin secreted by Group A *Streptococcus* (*S. pyogenes*).",
        aim: "To detect post-streptococcal sequelae such as Rheumatic Fever and Glomerulonephritis.",
        principles: "Latex particles coated with Streptolysin O antigen aggregate in the presence of specific ASO antibodies in serum.",
        materials: [
          "Serum specimen",
          "Streptolysin O latex reagent",
          "Control sera, test card"
        ],
        procedure: [
          "1. Pipette 50 µL serum onto test slide.",
          "2. Add 1 drop ASO latex reagent.",
          "3. Mix and rock slide for 2 minutes.",
          "4. Observe for agglutination."
        ],
        result: "Agglutination indicates elevated ASO antibody titer ($> 200\ IU/mL$), supporting recent Group A Streptococcal infection.",
        normal: "< 200 IU/mL",
        safety: ["Wear gloves during manual pipetting."],
        tips: "A rising ASO titer over 2–4 weeks is more clinically significant than a single test result."
      },
      {
        id: "ana_iif",
        title: "Anti-Nuclear Antibody (ANA) Screening (IIF)",
        intro: "Anti-Nuclear Antibodies (ANA) target nuclear autoantigens and serve as a primary screening tool for systemic autoimmune diseases like Systemic Lupus Erythematosus (SLE).",
        aim: "To detect circulating ANA autoantibodies using Indirect Immunofluorescence (IIF).",
        principles: "Patient serum is incubated on substrate slides (HEp-2 human epithelial cells). Antinuclear antibodies bind nuclear antigens. Fluorescein-conjugated anti-human IgG (FITC) is added, and nuclear immunofluorescence patterns are visualized under a fluorescence microscope.",
        materials: [
          "Patient serum",
          "HEp-2 cell substrate slides",
          "FITC-conjugated anti-human IgG conjugate",
          "Phosphate Buffered Saline (PBS), fluorescence microscope"
        ],
        procedure: [
          "1. Dilute serum 1:80 in PBS.",
          "2. Add diluted serum to HEp-2 slide wells; incubate in humid chamber for 30 minutes.",
          "3. Wash slide 3 times with PBS.",
          "4. Add FITC conjugate to wells and incubate 30 minutes in dark.",
          "5. Wash with PBS, apply mounting medium and coverslip.",
          "6. Examine under UV fluorescence microscope at 400x magnification."
        ],
        result: "Bright apple-green nuclear fluorescence indicates positive ANA. Staining patterns (homogeneous, speckled, nucleolar, centromere) correlate with specific autoimmune conditions.",
        normal: "Negative at 1:80 serum dilution.",
        safety: ["Avoid direct UV eye exposure from fluorescence microscope light sources."],
        tips: "Homogeneous nuclear patterns are strongly associated with anti-dsDNA in Active SLE."
      },
      {
        id: "elisa_hiv",
        title: "ELISA for Infectious Markers (Direct/Indirect/Sandwich)",
        intro: "Enzyme-Linked Immunosorbent Assay (ELISA) quantifies antigens or antibodies in serum using enzyme-labeled reagents and spectrophotometric substrate conversion.",
        aim: "To detect specific viral antigens or antibodies (e.g., HIV, HBV) using microplate sandwich ELISA.",
        principles: "Microtiter wells coated with capture antigen/antibody bind target analytes in serum. An enzyme-conjugated secondary antibody (e.g., Horseradish Peroxidase) is added. Chromogenic substrate (TMB) is converted by enzyme into a colored product measured at 450 nm.",
        materials: [
          "Patient serum",
          "Antigen/Antibody coated 96-well microplate",
          "Enzyme Conjugate solution (HRP)",
          "Wash Buffer concentrate",
          "TMB Substrate & Stop Solution ($1N\ H_2SO_4$)",
          "Microplate washer and ELISA plate reader (450 nm)"
        ],
        procedure: [
          "1. Add 100 µL calibrators, controls, and patient serum into designated microplate wells.",
          "2. Incubate at 37°C for 30–60 minutes.",
          "3. Wash wells 5 times with wash buffer using automated plate washer.",
          "4. Add 100 µL Enzyme Conjugate to all wells; incubate 30 minutes.",
          "5. Wash wells 5 times.",
          "6. Add 100 µL TMB Substrate; incubate in dark for 15 minutes (blue color develops).",
          "7. Add 100 µL Stop Solution ($H_2SO_4$) to turn reaction yellow.",
          "8. Read absorbance values at 450 nm within 15 minutes."
        ],
        result: "Absorbance values above calculated Cut-off Value indicate Reactive sample.",
        normal: "Non-reactive (Absorbance < Cut-off Value).",
        safety: ["Stop solution contains sulfuric acid; avoid skin contact."],
        tips: "Incomplete microplate washing causes false-positive background signal elevation."
      },
      {
        id: "vdrl_rpr_serology",
        title: "Syphilis Serology (TPHA / TP-PA Confirmation)",
        intro: "Treponema Pallidum Hemagglutination Assay (TPHA) is a specific treponemal confirmation test for *Treponema pallidum* antibodies.",
        aim: "To confirm reactive non-treponemal (RPR/VDRL) screening tests for syphilis.",
        principles: "Avian/fungal erythrocytes coated with *T. pallidum* antigens agglutinate in the presence of specific anti-treponemal antibodies in serum, forming a smooth mat in microtiter wells.",
        materials: [
          "Patient serum (absorbed to eliminate non-specific antibodies)",
          "TPHA Test Cells (coated with *T. pallidum* antigens)",
          "Control Cells (uncoated)",
          "Microtiter U-bottom plate"
        ],
        procedure: [
          "1. Dilute patient serum 1:80 in absorbing diluent.",
          "2. Add diluted serum to two wells (Test and Control).",
          "3. Add Control Cells to well 1 and TPHA Test Cells to well 2.",
          "4. Mix gentle and incubate at room temperature undisturbed for 1 hour.",
          "5. Observe settling pattern: smooth carpet covering well bottom = Positive; tight button = Negative."
        ],
        result: "Smooth erythrocyte carpet = Positive (Confirms Syphilis infection). Compact red cell button = Negative.",
        normal: "Negative (No agglutination carpet).",
        safety: ["Dispose of microtiter plates in biohazard waste."],
        tips: "Treponemal tests remain positive for life even after successful antibiotic treatment of syphilis."
      },
      {
        id: "hcg_rapid",
        title: "Serum/Urine hCG Rapid Immunoassay",
        intro: "Human Chorionic Gonadotropin (hCG) is a glycoprotein hormone secreted by placental syncytiotrophoblasts shortly after implantation.",
        aim: "To detect hCG for early pregnancy diagnosis.",
        principles: "Lateral flow immunochromatographic assay using monoclonal anti-hCG antibodies conjugated to colloidal gold particles to capture hCG in urine or serum.",
        materials: [
          "First-morning urine or serum sample",
          "hCG test cassette"
        ],
        procedure: [
          "1. Dispense 3 drops of urine/serum into sample port.",
          "2. Wait 3–5 minutes.",
          "3. Observe control (C) and test (T) line bands."
        ],
        result: "Two lines (Control + Test) = Positive (hCG $\ge 25\ mIU/mL$). One line (Control only) = Negative.",
        normal: "Non-pregnant: Negative (< 5 mIU/mL)",
        safety: ["Treat serum/urine specimens as biohazards."],
        tips: "Dilute early morning urine if suspected false-negative occurs due to hook effect in extremely high hCG levels."
      },
      {
        id: "dengue_rapid",
        title: "Dengue NS1 Antigen & IgG/IgM Rapid Test",
        intro: "Dengue NS1 antigen and IgG/IgM antibodies differentiate acute primary vs secondary Dengue virus infections.",
        aim: "To diagnose early acute Dengue infection.",
        principles: "Immuno-chromatographic dual test: NS1 captures viral non-structural protein 1 during early fever; IgG/IgM lines capture host immune response antibodies.",
        materials: [
          "Serum or whole blood",
          "Dengue NS1/IgG-IgM combo test cassette",
          "Assay diluent"
        ],
        procedure: [
          "1. Add 3 drops serum to NS1 well.",
          "2. Add 1 drop serum + 2 drops diluent to IgG/IgM well.",
          "3. Read results at 15–20 minutes."
        ],
        result: "NS1 positive = Early acute infection (Days 1–9). IgM positive = Primary acute infection. IgG positive = Secondary or past infection.",
        normal: "Non-reactive across all lines.",
        safety: ["Handle fresh blood specimens carefully."],
        tips: "NS1 detection remains highly sensitive during the first 5 days of fever onset before antibodies develop."
      },
      {
        id: "rose_bengal",
        title: "Rose Bengal Test for Brucellosis",
        intro: "The Rose Bengal test screens human and livestock sera for anti-*Brucella* antibodies in suspected Brucellosis (Undulant Fever).",
        aim: "To screen serum for antibodies against *Brucella abortus* and *Brucella melitensis*.",
        principles: "Acidified Rose Bengal-stained *Brucella* antigen (pH 3.6) agglutinates when mixed with serum containing specific anti-*Brucella* antibodies.",
        materials: [
          "Patient serum",
          "Rose Bengal Antigen suspension (pH 3.65)",
          "White ceramic plate / glass slide"
        ],
        procedure: [
          "1. Mix 30 µL serum with 30 µL Rose Bengal antigen on a white slide.",
          "2. Rock slide gently for 4 minutes.",
          "3. Observe under bright light for visible agglutination clumps."
        ],
        result: "Agglutination = Positive screen for Brucellosis. Smooth pink suspension = Negative.",
        normal: "Negative.",
        safety: ["Brucella is a high-risk laboratory aerosol hazard; wear protective gloves and lab coat."],
        tips: "Low pH (3.6) inhibits non-specific agglutinins, increasing assay specificity."
      },
      {
        id: "complement_c3_c4",
        title: "Complement C3 & C4 Quantification (Nephelometry)",
        intro: "Complement components C3 and C4 participate in the immune complement cascade; consumption occurs in active immune-complex autoimmune diseases.",
        aim: "To quantify serum C3 and C4 levels.",
        principles: "Fixed-time immunonephelometry measures light scatter caused by insoluble immune complexes formed when serum C3/C4 reacts with specific anti-C3/C4 antisera.",
        materials: [
          "Fresh serum specimen",
          "Nephelometer analyzer",
          "Anti-human C3 and C4 antisera",
          "Calibrators and controls"
        ],
        procedure: [
          "1. Load serum into automated nephelometric analyzer.",
          "2. System mixes serum with anti-C3 or anti-C4 antiserum.",
          "3. Incident light scatter measured at 840 nm.",
          "4. Concentration interpolated automatically from standard calibration curve."
        ],
        result: "Decreased C3/C4 levels reflect complement consumption in active SLE, glomerulonephritis, or hereditary angioedema.",
        normal: "C3: 90 – 180 mg/dL; C4: 10 – 40 mg/dL",
        safety: ["Freeze serum at -70°C if testing is delayed to prevent complement degradation."],
        tips: "Hemolyzed samples cause false elevation in nephelometric light scatter readings."
      }
    ]
  },
        // =================================================================
  // UNIT 8: BLOOD BANKING & TRANSFUSION MEDICINE (10 ANALYSES)
  // =================================================================
  {
    id: "blood_banking",
    name: "Blood Banking & Transfusion Medicine",
    analyses: [
      {
        id: "abo_rh_typing",
        title: "ABO & Rh Blood Grouping (Forward & Reverse)",
        intro: "ABO and Rh blood grouping determines surface erythrocyte antigens and corresponding plasma antibodies prior to blood transfusion to prevent lethal hemolytic transfusion reactions.",
        aim: "To accurately identify ABO red cell antigens and plasma antibodies along with Rh D factor status.",
        principles: "Forward grouping tests patient erythrocytes against known Anti-A, Anti-B, and Anti-D monoclonal antibodies (agglutination indicates antigen presence). Reverse grouping tests patient serum against known A1 and B screening red cells (agglutination indicates antibody presence).",
        materials: [
          "Patient EDTA whole blood or un-clotted blood sample",
          "Anti-A, Anti-B, Anti-D monoclonal reagents",
          "Known A1 and B reagent 3% red cell suspensions",
          "Glass slides / serological tubes, centrifuge"
        ],
        procedure: [
          "1. **Forward Grouping:** Label 3 tubes (A, B, D). Add 1 drop Anti-A, Anti-B, Anti-D to respective tubes. Add 1 drop 3% patient RBC suspension to each. Mix and centrifuge at 1,000 g for 1 minute.",
          "2. **Reverse Grouping:** Label 2 tubes (A1, B). Add 2 drops patient serum to each. Add 1 drop A1 cells to A1 tube and 1 drop B cells to B tube. Centrifuge 1 minute.",
          "3. Gently agitate tube cell buttons and grade agglutination (1+ to 4+)."
        ],
        result: "Forward and reverse results must match. Example: Forward A+, Reverse A = Blood Group A Positive.",
        normal: "N/A (Identifies blood group: A, B, AB, or O; Rh Positive or Negative).",
        safety: ["Never perform blood typing without tube confirmation or reverse grouping verification."],
        tips: "Discrepancy between forward and reverse grouping requires investigation before issuing blood products."
      },
      {
        id: "crossmatching",
        title: "Major & Minor Crossmatching",
        intro: "Crossmatching verifies serological compatibility between donor red cells and recipient serum before blood unit release.",
        aim: "To prevent acute immune-mediated hemolytic transfusion reactions.",
        principles: "Major Crossmatch tests donor RBCs against recipient serum. Minor Crossmatch tests recipient RBCs against donor serum. Incompatibility produces agglutination or hemolysis during immediate spin, 37°C incubation, or Anti-Human Globulin (AHG) phase.",
        materials: [
          "Recipient serum and donor segment red cells",
          "22% Bovine Serum Albumin (BSA) or LISS",
          "Anti-Human Globulin (AHG / Coombs) reagent",
          "37°C water bath / dry heat block, centrifuge"
        ],
        procedure: [
          "1. **Immediate Spin:** Mix 2 drops recipient serum with 1 drop 3% donor RBC suspension. Centrifuge 15 sec at 1,000 g; check for agglutination/hemolysis.",
          "2. **37°C Phase:** Add 2 drops 22% BSA or LISS, incubate at 37°C for 15–30 minutes, centrifuge and observe.",
          "3. **AHG Phase:** Wash cells 3 times with isotonic saline. Add 2 drops AHG, centrifuge, and read for agglutination.",
          "4. Add Coombs Control Cells (Check Cells) to all negative AHG tubes to confirm valid washing."
        ],
        result: "Absence of agglutination and hemolysis at all phases indicates Compatible unit.",
        normal: "Compatible (No agglutination).",
        safety: ["Verify all tube labels against patient request forms at every step."],
        tips: "Negative AHG phase reactions must be confirmed positive by adding IgG-coated Check Cells."
      },
      {
        id: "direct_coombs",
        title: "Direct Antiglobulin Test (DAT / Direct Coombs)",
        intro: "The Direct Antiglobulin Test (DAT) detects immunoglobulins (IgG) or complement components ($C3d$) attached *in vivo* to patient red blood cells.",
        aim: "To diagnose Autoimmune Hemolytic Anemia (AIHA), Hemolytic Disease of the Fetus and Newborn (HDFN), or Transfusion Reactions.",
        principles: "Patient RBCs coated in vivo with IgG/complement agglutinate directly upon adding polyspecific Anti-Human Globulin (AHG) reagent.",
        materials: [
          "EDTA blood sample from patient",
          "Polyspecific Anti-Human Globulin (Anti-IgG + Anti-C3d)",
          "Isotonic saline, glass tubes, centrifuge"
        ],
        procedure: [
          "1. Prepare 3% patient RBC suspension.",
          "2. Wash RBCs 4 times thoroughly with saline to remove unbound plasma proteins.",
          "3. Add 2 drops polyspecific AHG reagent to 1 drop washed RBCs.",
          "4. Centrifuge at 1,000 g for 20 seconds.",
          "5. Gently re-suspend cell button and examine for agglutination.",
          "6. Confirm negative results with Coombs check cells."
        ],
        result: "Agglutination indicates in vivo antibody/complement sensitization of red cells.",
        normal: "Negative (No agglutination).",
        safety: ["Adequate washing is essential; residual plasma neutralizes AHG reagent giving false negatives."],
        tips: "Always test EDTA blood to avoid in vitro complement binding caused by clotted specimens."
      },
      {
        id: "indirect_coombs",
        title: "Indirect Antiglobulin Test (IAT / Indirect Coombs)",
        intro: "The Indirect Antiglobulin Test (IAT) detects unexpected circulating anti-red cell antibodies *in vitro* in patient serum.",
        aim: "To perform antibody screening in prenatal care and pre-transfusion testing.",
        principles: "Patient serum is incubated at 37°C with commercial reagent RBCs. If unexpected IgG antibodies are present, they bind to target red cell antigens. Addition of AHG bridges antibody-coated cells causing macroscopic agglutination.",
        materials: [
          "Patient serum",
          "Commercial 3-cell antibody screening panel (Type O)",
          "LISS reagent, AHG reagent, Coombs check cells",
          "37°C incubator, centrifuge"
        ],
        procedure: [
          "1. Add 2 drops serum and 1 drop screening RBCs into test tubes.",
          "2. Add 2 drops LISS enhancement media.",
          "3. Incubate at 37°C for 15 minutes.",
          "4. Centrifuge and check for 37°C agglutination.",
          "5. Wash cells 4 times with isotonic saline.",
          "6. Add 2 drops AHG reagent, centrifuge 20 seconds, and grade agglutination.",
          "7. Validate negative tubes with Coombs check cells."
        ],
        result: "Agglutination indicates presence of unexpected circulating red cell alloantibodies.",
        normal: "Negative (No unexpected antibodies detected).",
        safety: ["Maintain strict temperature control at 37°C."],
        tips: "If screen is positive, antibody identification panel must be performed to identify specific antibody."
      },
      {
        id: "rh_weak_d",
        title: "Weak D (Du) Testing",
        intro: "Weak D testing identifies reduced expression of the Rh D antigen on red blood cells that appear falsely Rh-negative in immediate spin tube testing.",
        aim: "To detect weak D antigen expression on donor or patient RBCs.",
        principles: "RBCs non-reactive with Anti-D at immediate spin are incubated at 37°C and tested with AHG reagent to detect low-density D antigens.",
        materials: [
          "Immediate spin Anti-D negative red cells",
          "Monoclonal Anti-D reagent (IgG compatible)",
          "AHG reagent, 37°C incubator, centrifuge"
        ],
        procedure: [
          "1. Incubate negative Anti-D tube test at 37°C for 15–30 minutes.",
          "2. Wash cells 3 times with saline.",
          "3. Add 2 drops AHG reagent, centrifuge for 20 seconds.",
          "4. Read for agglutination.",
          "5. Add IgG check cells to negative tubes."
        ],
        result: "Agglutination after AHG phase indicates Weak D Positive.",
        normal: "Weak D Negative.",
        safety: ["Weak D positive blood donors must be classified as Rh Positive to prevent sensitizing Rh Negative recipients."],
        tips: "Weak D positive pregnant women are generally managed as Rh Negative for RhIG prophylaxis."
      },
      {
        id: "blood_prep",
        title: "Blood Component Preparation (PRBCs, FFP, Platelets)",
        intro: "Blood component separation fractionates whole blood into Packed Red Blood Cells (PRBCs), Fresh Frozen Plasma (FFP), and Platelet Concentrates.",
        aim: "To separate whole blood into targeted components for optimal component therapy.",
        principles: "Differential centrifugation separates blood components based on cellular density differences under controlled speeds and temperatures.",
        materials: [
          "Triple or quadruple blood collection bags (CPDA-1 or SAGM)",
          "Refrigerated blood centrifuge",
          "Plasma expressor and dielectric tube sealer"
        ],
        procedure: [
          "1. **Soft Spin:** Centrifuge whole blood at low speed ($2,000\ g$, 10 mins at 22°C) to yield platelet-rich plasma (PRP) and packed RBCs.",
          "2. Express PRP into satellite bag.",
          "3. **Hard Spin:** Centrifuge PRP at high speed ($4,000\ g$, 10 mins at 22°C) to separate platelet concentrate button from cell-free plasma.",
          "4. Express plasma into secondary satellite bag and freeze rapidly at $-30^\circ C$ to make Fresh Frozen Plasma (FFP).",
          "5. Store PRBCs at 2–6°C, FFP at $-18^\circ C$ or lower, Platelets at 20–24°C with continuous agitation."
        ],
        result: "Yields PRBCs, FFP, and Platelet Concentrates from a single donor unit.",
        normal: "N/A.",
        safety: ["FFP must be frozen within 8 hours of collection to maintain Factor VIII stability."],
        tips: "Maintain strict room temperature (20–24°C) prior to platelet separation."
      },
      {
        id: "transfusion_investigation",
        title: "Hemolytic Transfusion Reaction Investigation",
        intro: "Investigating acute hemolytic transfusion reactions identifies blood incompatibility and prevents further adverse patient outcomes.",
        aim: "To systematically evaluate suspected acute transfusion reaction samples.",
        principles: "Post-transfusion blood and urine samples are compared with pre-transfusion samples for serological incompatibility, hemolysis, and immune destruction signs.",
        materials: [
          "Pre-transfusion and post-transfusion patient blood samples",
          "Transfused blood bag remnants and tubing segment",
          "Post-reaction urine sample",
          "Centrifuge, ABO/Rh antisera, AHG reagent"
        ],
        procedure: [
          "1. Inspect post-reaction spun plasma for pink/red hemoglobinemia.",
          "2. Re-type ABO/Rh on pre-transfusion, post-transfusion, and donor unit samples.",
          "3. Repeat major crossmatch using pre- and post-transfusion serum.",
          "4. Perform Direct Antiglobulin Test (DAT) on post-transfusion sample.",
          "5. Test post-reaction urine sample for hemoglobinuria."
        ],
        result: "Positive DAT, serum hemolysis, or crossmatch breakdown confirms acute hemolytic reaction.",
        normal: "No serological or visual evidence of hemolysis/incompatibility.",
        safety: ["Stop transfusion immediately upon suspicion of adverse reaction."],
        tips: "Clerical error (sample mislabeling) remains the leading cause of fatal transfusion reactions."
      },
      {
        id: "saline_wash",
        title: "Red Cell Washing Technique",
        intro: "Washing red blood cells removes plasma proteins, antibodies, and microaggregates that cause recurrent allergic or febrile transfusion reactions.",
        aim: "To prepare washed red blood cells for sensitized recipients.",
        principles: "Repeated washing with sterile 0.9% saline removes residual plasma proteins while preserving RBC integrity.",
        materials: [
          "PRBC unit or blood sample",
          "Sterile 0.9% Sodium Chloride solution",
          "Refrigerated centrifuge, transfer packs"
        ],
        procedure: [
          "1. Add sterile 0.9% saline to red cells in 1:2 to 1:3 ratio.",
          "2. Centrifuge at 3,000 rpm for 5 minutes.",
          "3. Express supernatant saline and plasma buffy layer.",
          "4. Repeat washing cycle 3 times.",
          "5. Resuspend washed cells in sterile saline to desired hematocrit."
        ],
        result: "Yields > 99% plasma-protein-free washed red blood cells.",
        normal: "N/A.",
        safety: ["Open-system washed cells expire within 24 hours stored at 2–6°C due to contamination risk."],
        tips: "Indicated for patients with severe IgA deficiency or recurrent severe anaphylactic allergic reactions."
      },
      {
        id: "cold_agglutinin",
        title: "Cold Agglutinin Titer Assay",
        intro: "Cold agglutinins are autoantibodies (typically IgM) that react optimal with red cell antigens at temperatures below 37°C, causing Cold Agglutinin Disease or post-*Mycoplasma* anemia.",
        aim: "To quantify cold-reacting red cell autoantibodies.",
        principles: "Serial dilutions of patient serum are incubated with Type O adult red blood cells at 4°C and evaluated for reversible cold agglutination.",
        materials: [
          "Patient serum (separated at 37°C)",
          "3% Group O adult red cell suspension",
          "Isotonic saline, test tubes, 4°C refrigerator, 37°C water bath"
        ],
        procedure: [
          "1. Prepare 2-fold serial dilutions of serum in saline (1:2 to 1:2048).",
          "2. Add 1 drop Group O RBCs to each tube.",
          "3. Incubate tubes at 4°C overnight.",
          "4. Read agglutination immediately upon removal from 4°C.",
          "5. Transfer tubes to 37°C water bath for 30 minutes and re-read to confirm reversibility."
        ],
        result: "Titer is the highest dilution showing 1+ agglutination at 4°C that dissipates at 37°C.",
        normal: "Titer < 1:64",
        safety: ["Sample must be drawn and kept at 37°C until serum is separated from clot."],
        tips: "Pathological titers often exceed 1:512 and cause autoagglutination at room temperature."
      },
      {
        id: "kleihauer_betke",
        title: "Kleihauer-Betke Acid Elution Test",
        intro: "The Kleihauer-Betke (KB) test quantifies fetal maternal hemorrhage (FMH) to calculate required Rh Immune Globulin (RhIG) dosing in Rh-negative mothers.",
        aim: "To calculate the volume of fetal blood entering maternal circulation.",
        principles: "Fetal hemoglobin (HbF) is resistant to acid elution, while adult hemoglobin (HbA) is leached out of RBCs. Staining leaves fetal cells dark pink while adult cells appear as ghost cells.",
        materials: [
          "Maternal EDTA blood smear",
          "Citrate-phosphate buffer (pH 3.3)",
          "Erythrosin B / Shepard stain, Hematoxylin counterstain",
          "Microscope (40x objective)"
        ],
        procedure: [
          "1. Prepare thin blood smear from maternal blood; air dry and fix in 80% ethanol.",
          "2. Immerse slide in acid citrate-phosphate buffer (pH 3.3) at 37°C for 5 minutes.",
          "3. Wash in distilled water.",
          "4. Stain with Erythrosin B for 3 minutes, counterstain with Hematoxylin.",
          "5. Count fetal cells among 2,000 total red blood cells under microscope.",
          "6. Calculate: $\% Fetal\ Cells = (Fetal\ Cells / 2000) \times 100$."
        ],
        result: "Calculates volume of FMH in mL ($% Fetal\ Cells \times 50$). Directs additional RhIG vials required.",
        normal: "< 0.05% fetal cells in maternal blood.",
        safety: ["Buffer pH (3.3) must be exact; wrong pH causes improper elution."],
        tips: "1 vial of 300 µg RhIG protects against 30 mL whole fetal blood (15 mL fetal RBCs)."
      }
    ]
  },

  // =================================================================
  // UNIT 9: PARASITOLOGY & MYCOLOGY (10 ANALYSES)
  // =================================================================
  {
    id: "parasitology",
    name: "Parasitology & Mycology",
    analyses: [
      {
        id: "stool_wet_mount",
        title: "Stool Direct Wet Mount (Saline & Iodine)",
        intro: "Direct wet mount examination of stool detects motile protozoan trophozoites, cysts, helminth ova, and larvae.",
        aim: "To identify intestinal parasites microscopically.",
        principles: "Saline wet mounts preserve motile trophozoites. Lugol's iodine stains nuclear structures and glycogen vacuoles in cysts for species identification.",
        materials: [
          "Fresh stool specimen",
          "0.85% Normal Saline, Lugol's Iodine solution",
          "Glass slides, coverslips, microscope (10x, 40x objectives)"
        ],
        procedure: [
          "1. Place 1 drop saline on left side of slide and 1 drop iodine on right side.",
          "2. Emulsify a matchhead-sized stool sample into each drop.",
          "3. Apply coverslips carefully without air bubbles.",
          "4. Systematically scan entire saline mount under 10x objective.",
          "5. Switch to 40x objective to examine nuclear details in iodine mount."
        ],
        result: "Identifies protozoans (e.g., *E. histolytica*, *G. lamblia*) and helminth eggs (e.g., *Ascaris*, *Hookworm*).",
        normal: "No parasites seen.",
        safety: ["Handle stool samples using universal biohazard precautions."],
        tips: "Examine fresh unpreserved stool within 30 minutes to catch motile trophozoites."
      },
      {
        id: "formalin_ether",
        title: "Formalin-Ether Concentration Technique",
        intro: "Formalin-Ethyl Acetate concentration increases parasite detection sensitivity in light stool infections by concentrating cysts, ova, and larvae.",
        aim: "To concentrate intestinal parasites from stool samples.",
        principles: "Formalin fixes parasite morphology. Ethyl acetate dissolves fecal fats and debris. Centrifugation separates parasites into a sediment pellet bottom layer.",
        materials: [
          "10% Formalin, Ethyl Acetate",
          "Gauze mesh, centrifuge tubes, centrifuge"
        ],
        procedure: [
          "1. Emulsify 1 g stool in 10 mL 10% formalin; let stand 10 minutes.",
          "2. Strain suspension through 2 layers of wet gauze into centrifuge tube.",
          "3. Add 3 mL ethyl acetate, cap tube, and shake vigorously for 30 seconds.",
          "4. Centrifuge at 500 g for 5 minutes.",
          "5. Decant upper 3 layers (ether, debris plug, formalin).",
          "6. Resuspend bottom sediment drop and examine under saline and iodine mounts."
        ],
        result: "Concentrates helminth ova and protozoan cysts into high-yield sediment.",
        normal: "No ova or cysts observed.",
        safety: ["Ethyl acetate is highly flammable; keep away from open flames."],
        tips: "Trohozoites are destroyed by concentration methods; use direct wet mounts for live trophozoites."
      },
      {
        id: "thick_thin_malaria",
        title: "Thick & Thin Blood Smears for Malaria",
        intro: "Thick and thin blood films are the gold standard for malaria diagnosis, parasite quantification, and *Plasmodium* species identification.",
        aim: "To detect, quantify, and speciate *Plasmodium* malaria parasites.",
        principles: "Thick film de-hemoglobinizes RBCs to concentrate parasites 20–40 fold for sensitive screening. Thin film fixes RBC morphology allowing species identification.",
        materials: [
          "EDTA or fingerstick whole blood",
          "Methanol (thin film fixative)",
          "10% Giemsa stain in pH 7.2 buffer",
          "Microscope with 100x oil objective"
        ],
        procedure: [
          "1. **Thick film:** Spread 3 drops blood in 1.5 cm circle; air dry (do not fix).",
          "2. **Thin film:** Spread thin feather-edge smear; air dry and fix in absolute methanol for 1 minute.",
          "3. Stain both films in 10% Giemsa (pH 7.2) for 20 minutes.",
          "4. Wash gently, air dry, and examine under 100x oil immersion."
        ],
        result: "Identifies *P. falciparum*, *P. vivax*, *P. malariae*, or *P. ovale* and calculates % parasitemia.",
        normal: "No malaria parasites seen.",
        safety: ["Stain buffer pH must be exactly 7.2 to observe characteristic Schüffner's/Maurer's dots."],
        tips: "Examine at least 100 thick fields before declaring a malaria smear negative."
      },
      {
        id: "modified_afb_protozoa",
        title: "Modified Acid-Fast Stain for Coccidia",
        intro: "Modified Acid-Fast (Kinyoun) staining identifies intestinal coccidian parasites (*Cryptosporidium*, *Cystoisospora*, *Cyclospora*) in stool.",
        aim: "To detect acid-fast coccidian oocysts in diarrhea specimens.",
        principles: "Oocyst walls contain lipid-rich compounds that retain Carbol Fuchsin dye after decolorization with weak 1% sulfuric acid.",
        materials: [
          "Stool smear (air-dried and heat-fixed)",
          "Kinyoun Carbol Fuchsin, 1% Sulfuric Acid decolorizer",
          "0.3% Methylene Blue or Malachite Green counterstain"
        ],
        procedure: [
          "1. Flood slide with Kinyoun Carbol Fuchsin for 5 minutes.",
          "2. Rinse with tap water.",
          "3. Decolorize with 1% Sulfuric Acid for 20–30 seconds.",
          "4. Rinse with water.",
          "5. Counterstain with Methylene Blue for 1 minute.",
          "6. Rinse, air dry, and examine under 100x oil immersion."
        ],
        result: "Coccidian oocysts stain Bright Red/Pink against a Blue/Green background.",
        normal: "No acid-fast oocysts seen.",
        safety: ["Handle liquid diarrheal specimens in biosafety cabinet."],
        tips: "*Cryptosporidium* oocysts are small (4–6 µm) and round with dark pink staining."
      },
      {
        id: "scotch_tape",
        title: "Scotch Tape (Cellophane) Prep for Pinworm",
        intro: "The Cellophane Tape test collects *Enterobius vermicularis* (pinworm) ova from the perianal skin folds.",
        aim: "To diagnose pinworm infection.",
        principles: "Female pinworms migrate to perianal skin at night to deposit ova. Clear adhesive tape lifts eggs directly from skin fold surfaces.",
        materials: [
          "Clear adhesive cellophane tape",
          "Glass slide, microscope (10x objective)"
        ],
        procedure: [
          "1. Collect sample early in morning before bathing or bowel movement.",
          "2. Press sticky side of clear tape firmly against perianal skin folds.",
          "3. Smooth tape sticky-side-down onto glass microscope slide.",
          "4. Examine under low power (10x) objective for asymmetric ova."
        ],
        result: "Identifies characteristic D-shaped *E. vermicularis* eggs with a flattened side.",
        normal: "No *Enterobius vermicularis* ova seen.",
        safety: ["Pinworm eggs are highly infectious; handle slides carefully."],
        tips: "Do not use translucent or frosted tape, which obscures microscopic vision."
      },
      {
        id: "koh_prep",
        title: "KOH Direct Preparation for Fungi",
        intro: "Potassium Hydroxide (KOH) preparation dissolves human cellular material in skin, hair, and nail specimens to visualize fungal elements.",
        aim: "To detect fungal hyphae, pseudohyphae, and budding yeast in clinical samples.",
        principles: "10–20% KOH digests keratin and cellular debris without destroying fungal chitin cell walls.",
        materials: [
          "Skin scrapings, nail clippings, or hair shafts",
          "10%–20% Potassium Hydroxide (KOH) solution",
          "Glass slide, coverslip, gentle heat source, microscope"
        ],
        procedure: [
          "1. Place skin/nail scrapings onto clean glass slide.",
          "2. Add 1–2 drops KOH solution.",
          "3. Apply coverslip and pass slide gently over flame to warm (do not boil).",
          "4. Allow to clear for 10–15 minutes.",
          "5. Examine under 10x and 40x objectives with reduced light condenser."
        ],
        result: "Refractile branching hyphae, arthrospores, or budding yeasts visible.",
        normal: "No fungal elements observed.",
        safety: ["KOH is strongly corrosive; avoid skin/eye contact."],
        tips: "Adding Calcofluor White dye allows rapid fluorescent visualization under UV light."
      },
      {
        id: "germ_tube",
        title: "Germ Tube Test for Candida albicans",
        intro: "The germ tube test rapidly differentiates *Candida albicans* and *Candida dubliniensis* from other *Candida* yeast species.",
        aim: "To identify *Candida albicans* within 3 hours.",
        principles: "When incubated in mammalian serum at 37°C for 2–3 hours, *C. albicans* cells form filamentous germ tube projections without constriction at the origin point.",
        materials: [
          "Yeast colony from culture plate",
          "Human or fetal bovine serum (0.5 mL)",
          "Test tubes, glass slide, coverslip, microscope"
        ],
        procedure: [
          "1. Inoculate 0.5 mL serum with a small portion of yeast colony.",
          "2. Incubate at 35–37°C for exactly 2 to 3 hours.",
          "3. Place 1 drop suspension on slide, cover with coverslip.",
          "4. Examine under 40x objective for germ tubes."
        ],
        result: "Parallel-sided filamentous projections without constriction at junction = *Candida albicans* Positive.",
        normal: "Negative (No germ tube formation).",
        safety: ["Treat serum medium with biological precautions."],
        tips: "Do not incubate beyond 3 hours; true hyphae with constrictions develop, leading to false positives."
      },
      {
        id: "india_ink",
        title: "India Ink Preparation for Cryptococcus",
        intro: "India Ink negative staining visualizes the large polysaccharide capsule surrounding *Cryptococcus neoformans* in cerebrospinal fluid (CSF).",
        aim: "To diagnose cryptococcal meningitis.",
        principles: "India ink particles cannot penetrate the thick mucopolysaccharide capsule of *C. neoformans*, creating a clear halo around yeast cells against a dark background.",
        materials: [
          "Centrifuged CSF sediment",
          "India Ink or Nigrosin reagent",
          "Glass slide, coverslip, microscope (40x objective)"
        ],
        procedure: [
          "1. Mix 1 drop CSF sediment with 1 drop India ink on a glass slide.",
          "2. Apply coverslip carefully.",
          "3. Scan under reduced light under 10x and 40x objectives."
        ],
        result: "Spherical budding yeast cells surrounded by a distinct clear halo against black background.",
        normal: "Negative (No encapsulated yeast cells).",
        safety: ["Cryptococcal CSF specimens carry neurological pathogen risk."],
        tips: "Red blood cells or air bubbles can mimic capsule halos; check for internal budding cells."
      },
      {
        id: "lactophenol_blue",
        title: "Lactophenol Cotton Blue (LPCB) Mount",
        intro: "Lactophenol Cotton Blue (LPCB) wet mounts clear and stain cultured mold structures for morphological identification.",
        aim: "To identify saprophytic and dermatophytic mold morphology.",
        principles: "Phenol kills organisms, Lactic acid preserves structures, Glycerol prevents drying, and Cotton Blue stains fungal chitin in cell walls intense blue.",
        materials: [
          "Fungal mold colony on Sabouraud Dextrose Agar (SDA)",
          "Lactophenol Cotton Blue reagent",
          "Clear adhesive tape or mounting needles, glass slide"
        ],
        procedure: [
          "1. Place 1 drop LPCB reagent on glass slide.",
          "2. Touch clear tape sticky side gently to perimeter of mold colony.",
          "3. Adhere tape onto slide over LPCB drop.",
          "4. Examine under 10x and 40x objectives for conidia, sporangia, and hyphal arrangement."
        ],
        result: "Visualizes characteristic fungal fruiting bodies and hyphal structures stained in blue.",
        normal: "N/A (Culture identification).",
        safety: ["Perform mold tape preps inside a biological safety cabinet to prevent spore inhalation."],
        tips: "Tease mount gently to keep sporangia intact for identification."
      },
      {
        id: "sda_culture",
        title: "Sabouraud Dextrose Agar (SDA) Fungal Culture",
        intro: "Sabouraud Dextrose Agar (SDA) is the primary selective isolation medium for culturing pathogenic yeasts and molds.",
        aim: "To isolate and culture pathogenic fungi from clinical specimens.",
        principles: "High dextrose concentration (4%) and acidic pH (5.6) favor fungal growth while inhibiting bacterial contamination.",
        materials: [
          "Clinical specimen (tissue, nail, hair, sputum)",
          "SDA slants/plates (with and without Chloramphenicol/Cycloheximide)",
          "Incubator set at 25–30°C and 37°C"
        ],
        procedure: [
          "1. Inoculate specimen onto duplicate SDA tubes.",
          "2. Incubate one set at 25–30°C (room temperature) and duplicate set at 37°C.",
          "3. Inspect cultures twice weekly for up to 4 weeks.",
          "4. Examine macro morphology (colony color, texture, reverse pigmentation) and micro structure."
        ],
        result: "Yields characteristic mold or yeast colonies.",
        normal: "No growth of pathogenic fungi.",
        safety: ["Never open plates with suspect *Coccidioides* or systemic dimorphic molds on open bench."],
        tips: "Cycloheximide added to SDA inhibits saprophytic fungi but can also inhibit *Cryptococcus*."
      }
    ]
  },

  // =================================================================
  // UNIT 10: MOLECULAR DIAGNOSTICS & QUALITY CONTROL (10 ANALYSES)
  // =================================================================
  {
    id: "molecular_qc",
    name: "Molecular Diagnostics & Quality Control",
    analyses: [
      {
        id: "dna_extraction",
        title: "Genomic DNA Extraction (Spin Column Method)",
        intro: "Genomic DNA extraction isolates high-purity DNA from whole blood or tissues for downstream molecular diagnostics.",
        aim: "To extract purified double-stranded DNA.",
        principles: "Cells are lysed with Proteinase K and chaotropic salts. DNA selectively binds to silica-gel membranes in high salt. Impurities are washed away, and DNA is eluted in low-salt TE buffer.",
        materials: [
          "Whole blood specimen",
          "Lysis buffer, Proteinase K solution",
          "Silica spin column, Wash Buffers 1 & 2, Elution Buffer (TE)",
          "Microcentrifuge, 56°C heat block"
        ],
        procedure: [
          "1. Mix 200 µL blood with 20 µL Proteinase K and 200 µL Lysis Buffer.",
          "2. Incubate at 56°C for 10 minutes.",
          "3. Add 200 µL 100% ethanol and transfer mixture into silica spin column.",
          "4. Centrifuge 1 minute at 8,000 g; discard flow-through.",
          "5. Wash column with Wash Buffer 1 (centrifuge, discard flow-through).",
          "6. Wash column with Wash Buffer 2 (centrifuge at maximum 14,000 g to dry column).",
          "7. Transfer column to clean tube, add 50 µL Elution Buffer, incubate 2 mins, centrifuge to collect purified DNA."
        ],
        result: "Yields purified genomic DNA ready for PCR analysis.",
        normal: "A260/A280 purity ratio = 1.8 – 2.0.",
        safety: ["Chaotropic buffers contain guanidine salts; do not mix with bleach."],
        tips: "Drying spin column membrane before elution removes residual ethanol that inhibits PCR."
      },
      {
        id: "pcr_amplification",
        title: "Polymerase Chain Reaction (PCR) Amplification",
        intro: "Polymerase Chain Reaction (PCR) exponentially amplifies specific target DNA sequences millions-fold *in vitro*.",
        aim: "To amplify specific target gene regions using thermal cycling.",
        principles: "Repeated cycles of Denaturation (95°C), Primer Annealing (55–65°C), and Extension (72°C) driven by $Taq$ DNA Polymerase double target DNA each cycle.",
        materials: [
          "Extracted target DNA template",
          "Forward and Reverse target primers",
          "Master Mix (Taq Polymerase, dNTPs, $MgCl_2$, Buffer)",
          "Nuclease-free water, Thermal Cycler"
        ],
        procedure: [
          "1. Assemble PCR reaction mix: 12.5 µL Master Mix + 1 µL Forward Primer + 1 µL Reverse Primer + 5 µL Template DNA + 5.5 µL Water.",
          "2. Load tube into thermal cycler.",
          "3. Run program: Initial denaturation 95°C for 5 mins; 35 cycles of [95°C for 30s, 58°C for 30s, 72°C for 45s]; Final extension 72°C for 5 mins.",
          "4. Hold at 4°C."
        ],
        result: "Generates millions of specific DNA amplicon copies.",
        normal: "N/A.",
        safety: ["Prepare PCR master mixes in a dedicated pre-PCR clean hood to prevent contamination."],
        tips: "Always run a No-Template Control (NTC) to rule out reagent DNA contamination."
      },
      {
        id: "agarose_gel",
        title: "Agarose Gel Electrophoresis",
        intro: "Agarose gel electrophoresis separates amplified PCR DNA fragments based on molecular size under an electric field.",
        aim: "To visualize and size amplified PCR products.",
        principles: "Negatively charged DNA phosphate backbones migrate toward the positive anode through an agarose matrix. Smaller DNA fragments move faster than larger fragments.",
        materials: [
          "Agarose powder, 1X TAE or TBE Buffer",
          "Ethidium Bromide or GelRed DNA stain",
          "Gel casting tray, comb, power supply",
          "DNA ladder (size marker), UV/Blue light transilluminator"
        ],
        procedure: [
          "1. Dissolve 1.5 g agarose in 100 mL 1X TAE buffer by microwave heating (1.5% gel).",
          "2. Cool to 50°C, add GelRed stain, pour into casting tray with comb, and solidify.",
          "3. Submerge gel in electrophoresis tank filled with 1X TAE buffer.",
          "4. Load DNA ladder in lane 1 and PCR samples mixed with loading dye in subsequent lanes.",
          "5. Run electrophoresis at 100 V for 45 minutes.",
          "6. Visualize fluorescent DNA bands under UV transilluminator."
        ],
        result: "Identifies presence and specific base-pair size of PCR amplicons.",
        normal: "Band observed at expected target base-pair size.",
        safety: ["Ethidium Bromide is a potent mutagen; handle with dedicated gloves or use safer alternatives like GelRed."],
        tips: "Ensure gel is submerged completely under buffer before applying voltage."
      },
      {
        id: "qpcr_assay",
        title: "Real-Time Quantitative PCR (qPCR)",
        intro: "Real-Time qPCR quantifies viral load or gene expression levels simultaneously during thermal cycling using fluorescent probes or dyes.",
        aim: "To determine exact target DNA/RNA copy numbers (e.g., Viral Load monitoring).",
        principles: "Fluorescence increases proportionally with DNA amplification during each cycle. The Cycle Threshold ($C_t$) value—where fluorescence exceeds background—is inversely proportional to starting target copy number.",
        materials: [
          "Sample DNA/RNA template",
          "TaqMan fluorescent probe / SYBR Green master mix",
          "Real-time quantitative PCR instrument"
        ],
        procedure: [
          "1. Prepare qPCR reaction plates with standards, controls, and test samples.",
          "2. Seal plate with optically clear film.",
          "3. Program qPCR instrument for thermal cycling and real-time fluorescence acquisition.",
          "4. Run program and generate standard curve from known concentration standards.",
          "5. Calculate starting sample copy concentration from interpolated $C_t$ values."
        ],
        result: "Provides precise quantitative target DNA/RNA copy concentration (e.g., $1.5 \times 10^5\ copies/mL$).",
        normal: "Undetectable / Below limit of quantification.",
        safety: ["Avoid touching optical clear plate film with bare hands; smudges interfere with laser light signal."],
        tips: "Lower $C_t$ values represent higher initial target nucleic acid amounts."
      },
      {
        id: "westgard_rules",
        title: "Levey-Jennings Charting & Westgard Rules Analysis",
        intro: "Levey-Jennings (L-J) charts and Westgard multi-rules monitor daily analytical quality control precision and detect systematic or random laboratory errors.",
        aim: "To evaluate daily quality control data for analytical run acceptance or rejection.",
        principles: "Daily control values are plotted against the calculated Mean ($\mu$) and Standard Deviations ($\pm 1s, \pm 2s, \pm 3s$). Specific statistical rule violations flag systematic drift or random errors.",
        materials: [
          "Commercial control material results (Normal and Abnormal levels)",
          "Levey-Jennings graph software or plot sheets"
        ],
        procedure: [
          "1. Analyze control samples daily alongside patient runs.",
          "2. Plot control values on L-J chart containing mean and $\pm 1s, 2s, 3s$ control limit lines.",
          "3. Evaluate plot against Westgard Rules:\n   - **$1_{2s}$**: 1 control value exceeds $\pm 2s$ (Warning rule).\n   - **$1_{3s}$**: 1 control exceeds $\pm 3s$ (Reject run: Random error).\n   - **$2_{2s}$**: 2 consecutive controls exceed same $+2s$ or $-2s$ limit (Reject: Systematic error).\n   - **$R_{4s}$**: Difference between 2 controls in run exceeds $4s$ (Reject: Random error).\n   - **$10_x$**: 10 consecutive control values fall on one side of mean (Reject: Systematic shift)."
        ],
        result: "Determines whether analytical batch is Accepted or Rejected.",
        normal: "Control values fall within $\pm 2s$ limits.",
        safety: ["Never release patient results if Westgard rejection rules are triggered."],
        tips: "A $1_{2s}$ violation is a warning signal; inspect other rules before rejecting the run."
      },
      {
        id: "spectrophotometer_calibration",
        title: "Spectrophotometer Wavelength & Absorbance Calibration",
        intro: "Wavelength and absorbance calibration ensures optical photometers maintain accurate light wavelength selection and linearity.",
        aim: "To verify spectrophotometer optical performance.",
        principles: "Holmium Oxide filters possess sharp absorption peaks at known wavelengths (e.g., 361 nm, 536 nm). Potassium Dichromate solutions provide standardized absorbance values at 257 nm and 350 nm.",
        materials: [
          "Holmium Oxide glass filter",
          "Potassium Dichromate ($K_2Cr_2O_7$) standard solutions",
          "UV-Vis Spectrophotometer, quartz cuvettes"
        ],
        procedure: [
          "1. Insert Holmium Oxide filter into light path.",
          "2. Perform wavelength scan across 300–600 nm; verify observed absorption peaks match certified standard values ($\pm 1\ nm$).",
          "3. Prepare standard dilutions of Potassium Dichromate.",
          "4. Measure absorbance at 257 nm and 350 nm against blank.",
          "5. Construct absorbance vs concentration graph to confirm photometric linearity."
        ],
        result: "Confirms wavelength accuracy ($\pm 1\ nm$) and linear absorbance response.",
        normal: "Wavelength accuracy within $\pm 1$ nm; Linearity $R^2 \ge 0.999$.",
        safety: ["Potassium Dichromate is carcinogenic and toxic; handle with extreme care."],
        tips: "Clean quartz cuvettes thoroughly; fingerprints absorb strongly in the UV spectrum."
      },
      {
        id: "pipette_calibration",
        title: "Micropipette Calibration (Gravimetric Method)",
        intro: "Gravimetric micropipette calibration measures pipetting accuracy and precision by weighing dispensed volumes of ultra-pure water.",
        aim: "To calibrate and verify micropipette performance.",
        principles: "The mass of distilled water dispensed by a micropipette is converted to volume using the temperature-dependent density of water ($Z$-factor).",
        materials: [
          "Micropipette (10–100 µL or 100–1000 µL) and tips",
          "Analytical balance (0.0001 g sensitivity)",
          "Deionized water (equilibrated to room temperature)",
          "Thermometer"
        ],
        procedure: [
          "1. Record deionized water temperature to determine $Z$-factor density correction.",
          "2. Pre-wet micropipette tip 3 times with deionized water.",
          "3. Dispense target volume onto weighing pan on analytical balance; record weight.",
          "4. Repeat measurement 10 times at 10%, 50%, and 100% nominal volume settings.",
          "5. Convert weight to volume: $Volume = Mass \times Z$.",
          "6. Calculate Inaccuracy (% Systematic Error) and Imprecision (% CV)."
        ],
        result: "Determines pipette accuracy and precision against manufacturer tolerances.",
        normal: "Inaccuracy $< 1.0\%$; Imprecision ($CV$) $< 0.5\%$.",
        safety: ["Avoid draft currents or static electricity near microbalance pan."],
        tips: "Use consistent smooth plunger depressing technique during testing."
      },
      {
        id: "deionized_water_qc",
        title: "Laboratory Water Quality Testing (Resistivity & pH)",
        intro: "Monitoring clinical laboratory reagent water (CLRW) quality prevents ion or bacterial contamination from interfering with clinical assays.",
        aim: "To test laboratory water for resistivity, pH, and microbial contamination.",
        principles: "Electrical resistivity (in $M\Omega\cdot cm$) measures ionic purity (higher resistivity indicates lower ion content). Bacterial colony counts assess microbial contamination.",
        materials: [
          "Type I Clinical Laboratory Reagent Water (CLRW)",
          "Inline resistivity meter, calibrated pH meter",
          "R2A Agar plates, incubator (35°C)"
        ],
        procedure: [
          "1. Measure inline electrical resistivity of freshly dispensed water.",
          "2. Calibrate pH meter using pH 4.0, 7.0, and 10.0 buffers.",
          "3. Measure water pH.",
          "4. Pipette 1.0 mL water onto R2A agar plate, incubate at 35°C for 48 hours, and count colonies (CFU/mL)."
        ],
        result: "Evaluates compliance with Type I CLRW specifications.",
        normal: "Resistivity $> 10\ M\Omega\cdot cm$ at 25°C; Bacterial count $< 10\ CFU/mL$; pH 6.5–7.5.",
        safety: ["Store Type I water in inert containers; standard plastic or glass leaches ions over time."],
        tips: "Type I water resistivity degrades rapidly upon air exposure due to $CO_2$ absorption."
      },
      {
        id: "centrifuge_calibration",
        title: "Laboratory Centrifuge Speed & Timer Calibration",
        intro: "Centrifuge calibration verifies rotational speed (RPM) and timer accuracy to ensure proper cellular separation.",
        aim: "To calibrate centrifuge rotational speed and timing functions.",
        principles: "A digital photo-tachometer measures reflected light pulses from a reflective tape marker attached to the centrifuge rotor.",
        materials: [
          "Digital optical photo-tachometer",
          "Reflective tape",
          "NIST-certified digital stopwatch",
          "Laboratory centrifuge"
        ],
        procedure: [
          "1. Attach a strip of reflective tape onto centrifuge rotor head.",
          "2. Close transparent lid.",
          "3. Set centrifuge to target speeds (e.g., 2,000 rpm, 4,000 rpm, 10,000 rpm).",
          "4. Aim photo-tachometer laser beam through lid onto reflective tape.",
          "5. Record measured RPM values.",
          "6. Set centrifuge timer to 5 minutes; simultaneously start certified digital stopwatch.",
          "7. Compare tachometer and timer readings against preset panel values."
        ],
        result: "Verifies whether centrifuge speed and timing fall within acceptable error margins.",
        normal: "Speed accuracy within $\pm 2\%$; Timer accuracy within $\pm 1\%$.",
        safety: ["Ensure rotor is perfectly balanced before running speed tests."],
        tips: "Recalibrate centrifuges annually or following motor maintenance."
      },
      {
        id: "biological_safety_cabinet",
        title: "Biosafety Cabinet Airflow & HEPA Filter Verification",
        intro: "Biological Safety Cabinet (BSC) airflow testing verifies operator protection and containment of hazardous bio-aerosols.",
        aim: "To measure inflow velocity and downflow velocity in Class II BSCs.",
        principles: "A thermo-anemometer measures laminar air flow velocity in feet per minute (fpm) across cabinet intake grills and working faces.",
        materials: [
          "Calibrated thermo-anemometer",
          "Class II Type A2 Biosafety Cabinet"
        ],
        procedure: [
          "1. Turn on BSC blower and allow air to stabilize for 15 minutes.",
          "2. Measure inflow velocity at cabinet front sash opening at multiple grid points using thermo-anemometer.",
          "3. Calculate average inflow velocity.",
          "4. Measure vertical downflow velocity 4 inches above work surface across grid points.",
          "5. Calculate average downflow velocity."
        ],
        result: "Confirms safe containment and HEPA filter performance.",
        normal: "Average Inflow Velocity: 100 fpm ($\pm 10$ fpm); Downflow Velocity: 55–65 fpm.",
        safety: ["Do not perform infectious work in a BSC that fails velocity certification."],
        tips: "Never block front intake grills with arms or paper, as this disrupts containment air barriers."
      }
    ]
  }
  ],

  // =====================================================================
  // FREQUENTLY ASKED QUESTIONS
  // =====================================================================
  faqs: [
    { q: "Is LabGuru free to use?", a: "Yes — you get free access to a limited number of analyses. Upgrade to Premium for unlimited access to every unit, the full converter, and offline sync." },
    { q: "Does LabGuru work offline?", a: "Yes. Once a page has loaded, LabGuru is a Progressive Web App (PWA) and continues to work without an internet connection, including your saved bookmarks and reminders." },
    { q: "How do I install LabGuru on my phone?", a: "Open LabGuru in your mobile browser, then choose \"Add to Home Screen\" (Safari) or \"Install App\" (Chrome) from the browser menu." },
    { q: "What does Premium include?", a: "Premium removes the daily analysis limit, unlocks the full unit converter, gives you a personal progress dashboard, study reminders, and full offline access synced across your devices." },
    { q: "How do I cancel my Premium subscription?", a: "Premium renews automatically every 2 months via Flutterwave. You can cancel anytime from your Flutterwave subscription management email or by contacting support." },
    { q: "Are the normal reference ranges suitable for clinical use?", a: "The ranges provided are for educational/study purposes and may vary slightly between laboratories, analyzers, and reagent kits. Always confirm against your own lab's validated reference intervals for clinical decisions." }
  ],

  // =====================================================================
  // MEDICAL LABORATORY REFERENCE NORMAL RANGES
  // =====================================================================
  normalRanges: [
  // Hematology & Coagulation
  { test: "Hemoglobin (Adult Male)", range: "13.0 – 17.5 g/dL", unit: "g/dL" },
  { test: "Hemoglobin (Adult Female)", range: "12.0 – 15.5 g/dL", unit: "g/dL" },
  { test: "Hematocrit / PCV (Male)", range: "40 – 54 %", unit: "%" },
  { test: "Hematocrit / PCV (Female)", range: "36 – 48 %", unit: "%" },
  { test: "Total Leukocyte Count (WBC)", range: "4.0 – 11.0 × 10⁹/L", unit: "×10⁹/L" },
  { test: "Platelet Count", range: "150 – 450 × 10⁹/L", unit: "×10⁹/L" },
  { test: "RBC Count (Male)", range: "4.5 – 5.9 × 10¹²/L", unit: "×10¹²/L" },
  { test: "RBC Count (Female)", range: "4.1 – 5.1 × 10¹²/L", unit: "×10¹²/L" },
  { test: "MCV (Mean Corpuscular Volume)", range: "80 – 100 fL", unit: "fL" },
  { test: "MCH (Mean Corpuscular Hemoglobin)", range: "27 – 33 pg", unit: "pg" },
  { test: "MCHC", range: "32 – 36 g/dL", unit: "g/dL" },
  { test: "Reticulocyte Count", range: "0.5 – 2.0 %", unit: "%" },
  { test: "ESR (Westergren) - Male <50 yrs", range: "< 15 mm/hr", unit: "mm/hr" },
  { test: "ESR (Westergren) - Female <50 yrs", range: "< 20 mm/hr", unit: "mm/hr" },
  { test: "Prothrombin Time (PT)", range: "11.0 – 13.5 seconds", unit: "seconds" },
  { test: "INR (Normal Target)", range: "0.8 – 1.1", unit: "ratio" },
  { test: "INR (Warfarin Therapy Target)", range: "2.0 – 3.0", unit: "ratio" },
  { test: "APTT", range: "25 – 35 seconds", unit: "seconds" },
  { test: "Bleeding Time (Ivy)", range: "2 – 8 minutes", unit: "minutes" },
  { test: "Clotting Time (Lee-White)", range: "5 – 11 minutes", unit: "minutes" },

  // Clinical Chemistry
  { test: "Fasting Blood Glucose", range: "70 – 99 mg/dL", unit: "mg/dL" },
  { test: "Postprandial Glucose (2-hr)", range: "< 140 mg/dL", unit: "mg/dL" },
  { test: "HbA1c (Non-Diabetic)", range: "< 5.7 %", unit: "%" },
  { test: "Serum Sodium ($Na^+$)", range: "135 – 145 mEq/L", unit: "mEq/L" },
  { test: "Serum Potassium ($K^+$)", range: "3.5 – 5.0 mEq/L", unit: "mEq/L" },
  { test: "Serum Chloride ($Cl^-$)", range: "96 – 106 mEq/L", unit: "mEq/L" },
  { test: "Serum Bicarbonate ($HCO_3^-$)", range: "22 – 29 mEq/L", unit: "mEq/L" },
  { test: "Blood Urea Nitrogen (BUN)", range: "7 – 20 mg/dL", unit: "mg/dL" },
  { test: "Serum Creatinine", range: "0.6 – 1.2 mg/dL", unit: "mg/dL" },
  { test: "Serum Uric Acid (Male)", range: "3.4 – 7.0 mg/dL", unit: "mg/dL" },
  { test: "Serum Uric Acid (Female)", range: "2.4 – 6.0 mg/dL", unit: "mg/dL" },
  { test: "Total Bilirubin", range: "0.2 – 1.2 mg/dL", unit: "mg/dL" },
  { test: "Direct (Conjugated) Bilirubin", range: "0.0 – 0.3 mg/dL", unit: "mg/dL" },
  { test: "AST (SGOT)", range: "10 – 40 U/L", unit: "U/L" },
  { test: "ALT (SGPT)", range: "7 – 56 U/L", unit: "U/L" },
  { test: "Alkaline Phosphatase (ALP)", range: "44 – 147 U/L", unit: "U/L" },
  { test: "Serum Total Protein", range: "6.0 – 8.3 g/dL", unit: "g/dL" },
  { test: "Serum Albumin", range: "3.5 – 5.0 g/dL", unit: "g/dL" },
  { test: "Total Cholesterol", range: "< 200 mg/dL", unit: "mg/dL" },
  { test: "Triglycerides", range: "< 150 mg/dL", unit: "mg/dL" },
  { test: "HDL Cholesterol", range: "> 40 mg/dL", unit: "mg/dL" },
  { test: "LDL Cholesterol", range: "< 100 mg/dL", unit: "mg/dL" },
  { test: "Serum Calcium", range: "8.5 – 10.2 mg/dL", unit: "mg/dL" },
  { test: "Serum Inorganic Phosphorus", range: "2.5 – 4.5 mg/dL", unit: "mg/dL" },
  { test: "Serum Magnesium", range: "1.7 – 2.2 mg/dL", unit: "mg/dL" },

  // Immunology & Serology
  { test: "C-Reactive Protein (CRP)", range: "< 6.0 mg/L", unit: "mg/L" },
  { test: "Rheumatoid Factor (RF)", range: "< 8.0 IU/mL", unit: "IU/mL" },
  { test: "Antistreptolysin O (ASO)", range: "< 200 IU/mL", unit: "IU/mL" },
  { test: "Complement C3", range: "90 – 180 mg/dL", unit: "mg/dL" },
  { test: "Complement C4", range: "10 – 40 mg/dL", unit: "mg/dL" },
  { test: "Serum IgA", range: "70 – 400 mg/dL", unit: "mg/dL" },
  { test: "Serum IgG", range: "700 – 1600 mg/dL", unit: "mg/dL" },
  { test: "Serum IgM", range: "40 – 230 mg/dL", unit: "mg/dL" }
  ],

  // =====================================================================
  // 40 SELF-ASSESSMENT QUESTIONS AND ANSWERS
  // =====================================================================
  questions: [
  {
    id: 1,
    question: "Which chemical reagent is used in the reference manual method to convert hemoglobin into cyanmethemoglobin?",
    options: ["Drabkin's Reagent", "Ehrlich's Reagent", "Benedict's Reagent", "Sulfosalicylic Acid"],
    answer: "Drabkin's Reagent",
    explanation: "Drabkin's reagent contains potassium ferricyanide and potassium cyanide, which oxidize Hb to methemoglobin and then convert it to cyanmethemoglobin."
  },
  {
    id: 2,
    question: "What is the primary anticoagulant of choice for routine Complete Blood Count (CBC) samples?",
    options: ["Sodium Citrate", "K2-EDTA", "Heparin", "Sodium Fluoride"],
    answer: "K2-EDTA",
    explanation: "EDTA chelates calcium and preserves blood cell morphology without altering cellular volume."
  },
  {
    id: 3,
    question: "In the Westergren ESR procedure, what effect does tilting the ESR rack by 3 degrees have on the sedimentation rate?",
    options: ["Falsely increases ESR by up to 30%", "Falsely decreases ESR", "Has no effect", "Causes micro-clotting"],
    answer: "Falsely increases ESR by up to 30%",
    explanation: "Tilting causes erythrocytes to slide down the tube wall faster, artificially accelerating the sedimentation rate."
  },
  {
    id: 4,
    question: "Which coagulation parameter is converted to an International Normalized Ratio (INR) for oral anticoagulant monitoring?",
    options: ["APTT", "Prothrombin Time (PT)", "Bleeding Time", "Thrombin Time"],
    answer: "Prothrombin Time (PT)",
    explanation: "INR standardizes Prothrombin Time results across different thromboplastin reagents using the formula INR = (Patient PT / Mean Normal PT)^ISI."
  },
  {
    id: 5,
    question: "What dye is used in supravital staining to visualize reticulocytes?",
    options: ["Leishman Stain", "New Methylene Blue", "Eosin Y", "Crystal Violet"],
    answer: "New Methylene Blue",
    explanation: "New Methylene Blue stains residual ribosomal RNA in living unfixed reticulocytes into dark blue precipitous networks."
  },
  {
    id: 6,
    question: "In histopathology tissue processing, what is the primary purpose of Xylene?",
    options: ["Dehydration", "Fixation", "Clearing", "Impregnation"],
    answer: "Clearing",
    explanation: "Xylene removes alcohol from dehydrated tissue and miscible with paraffin wax, making the tissue translucent."
  },
  {
    id: 7,
    question: "What is the routine thickness for sectioning paraffin-embedded tissues on a rotary microtome?",
    options: ["1–2 µm", "3–5 µm", "8–10 µm", "12–15 µm"],
    answer: "3–5 µm",
    explanation: "3–5 micrometers allows light passage while preserving clear single-cell layer morphology."
  },
  {
    id: 8,
    question: "Which stain selectively colors collagen fibers bright blue in Masson's Trichrome staining?",
    options: ["Aniline Blue", "Biebrich Scarlet", "Harris Hematoxylin", "Light Green"],
    answer: "Aniline Blue",
    explanation: "Aniline Blue binds selectively to phosphomolybdic acid-treated collagen fibers."
  },
  {
    id: 9,
    question: "In Papanicolaou (Pap) staining, which reagent stains superficial squamous cytoplasm pink/red?",
    options: ["Harris Hematoxylin", "OG-6", "EA-50", "Acid Alcohol"],
    answer: "EA-50",
    explanation: "EA-50 (containing Eosin Y and Light Green) stains cytoplasm of superficial cells pink/red."
  },
  {
    id: 10,
    question: "What fixative is used for immediate wet-fixation of cervical Pap smears?",
    options: ["10% Neutral Buffered Formalin", "95% Ethanol", "Acetone", "Bouin's Fluid"],
    answer: "95% Ethanol",
    explanation: "95% Ethanol preserves fine nuclear chromatin structure in cytological smears."
  },
  {
    id: 11,
    question: "Which autoantibody is screened using Latex agglutination coated with human IgG?",
    options: ["Anti-Nuclear Antibody (ANA)", "Rheumatoid Factor (RF)", "Anti-dsDNA", "ASO"],
    answer: "Rheumatoid Factor (RF)",
    explanation: "Rheumatoid Factor is an autoantibody (IgM) directed against the Fc portion of human IgG."
  },
  {
    id: 12,
    question: "What immunofluorescence substrate is standard for Indirect Immunofluorescence (IIF) ANA screening?",
    options: ["Mouse kidney tissue", "HEp-2 cells", "Human red blood cells", "Polyacrylamide beads"],
    answer: "HEp-2 cells",
    explanation: "HEp-2 (Human Epithelial type 2) cells feature large nuclei with distinct nuclear autoantigen expressions."
  },
  {
    id: 13,
    question: "In major crossmatching, recipient serum is tested against:",
    options: ["Recipient red blood cells", "Donor red blood cells", "Donor serum", "Commercial screening cells"],
    answer: "Donor red blood cells",
    explanation: "Major crossmatching detects antibodies in recipient serum directed against donor red cell antigens."
  },
  {
    id: 14,
    question: "Direct Antiglobulin Test (DAT) detects immunoglobulins or complement bound to RBCs:",
    options: ["In vitro", "In vivo", "In storage bags", "In synthetic buffers"],
    answer: "In vivo",
    explanation: "DAT evaluates sensitization that occurred inside the patient's body prior to sample collection."
  },
  {
    id: 15,
    question: "What is the primary utility of the Kleihauer-Betke test?",
    options: ["Detecting ABO antibodies", "Quantifying fetal maternal hemorrhage", "Measuring hemoglobin S", "Diagnosing AIHA"],
    answer: "Quantifying fetal maternal hemorrhage",
    explanation: "It calculates the volume of fetal RBCs in maternal blood to determine appropriate RhIG dosing."
  },
  {
    id: 16,
    question: "Which intestinal parasite is concentrated using the Formalin-Ethyl Acetate technique?",
    options: ["Helminth ova and cysts", "Motile trophozoites only", "Bacteria", "Viruses"],
    answer: "Helminth ova and cysts",
    explanation: "Formalin-ethyl acetate concentrates thick-walled cysts and helminth eggs into a high-yield sediment pellet."
  },
  {
    id: 17,
    question: "Why is buffer pH 7.2 critical when staining malaria films with Giemsa?",
    options: ["It prevents lysis of RBCs", "It demonstrates malaria stippling (Schüffner's dots)", "It dissolves WBCs", "It decolorizes platelets"],
    answer: "It demonstrates malaria stippling (Schüffner's dots)",
    explanation: "Staining at pH 7.2 ensures correct color differentiation of parasite chromatin, cytoplasm, and red cell stippling."
  },
  {
    id: 18,
    question: "What is the characteristic egg morphology of Enterobius vermicularis?",
    options: ["Biconvex with polar plugs", "D-shaped with a flattened side", "Spherical with radial striations", "Oval with a terminal spine"],
    answer: "D-shaped with a flattened side",
    explanation: "Pinworm eggs feature a distinct asymmetric shape with one flat side and one convex side."
  },
  {
    id: 19,
    question: "What reagent dissolves host keratin in skin scrapings to reveal fungal hyphae?",
    options: ["10–20% KOH", "Acid Alcohol", "10% Formalin", "Drabkin's solution"],
    answer: "10–20% KOH",
    explanation: "Potassium Hydroxide digests human protein and keratin while leaving fungal chitin intact."
  },
  {
    id: 20,
    question: "Which yeast produces positive germ tubes within 2 to 3 hours of incubation in serum at 37°C?",
    options: ["Cryptococcus neoformans", "Candida albicans", "Candida glabrata", "Saccharomyces cerevisiae"],
    answer: "Candida albicans",
    explanation: "Candida albicans rapidly forms unconstricted parallel projections (germ tubes) when incubated in serum."
  },
  {
    id: 21,
    question: "What dye provides negative contrast staining for Cryptococcus neoformans capsules in CSF?",
    options: ["India Ink", "Gram Stain", "Kinyoun Stain", "Wright Stain"],
    answer: "India Ink",
    explanation: "India ink particles are excluded by the large mucopolysaccharide capsule, creating a clear halo."
  },
  {
    id: 22,
    question: "During DNA extraction using silica columns, what removes residual salt before elution?",
    options: ["Ethanol wash buffers", "Lysis buffer", "Proteinase K", "Sodium hydroxide"],
    answer: "Ethanol wash buffers",
    explanation: "Wash buffers contain ethanol to wash away chaotropic salts while keeping DNA bound to the silica membrane."
  },
  {
    id: 23,
    question: "What step of PCR occurs at 55°C – 65°C?",
    options: ["Denaturation", "Primer Annealing", "Extension", "Final Hold"],
    answer: "Primer Annealing",
    explanation: "Annealing allows forward and reverse oligonucleotide primers to hybridize specifically to target single-stranded DNA."
  },
  {
    id: 24,
    question: "DNA fragments migrate during agarose gel electrophoresis toward which electrode?",
    options: ["Positive Anode", "Negative Cathode", "Neutral Ground", "Secondary Grid"],
    answer: "Positive Anode",
    explanation: "The negatively charged sugar-phosphate backbone of nucleic acids moves toward the positive electrode (anode)."
  },
  {
    id: 25,
    question: "In real-time PCR (qPCR), what does $C_t$ stand for?",
    options: ["Concentration threshold", "Cycle threshold", "Cell density time", "Calibrator total"],
    answer: "Cycle threshold",
    explanation: "Cycle threshold is the fractional cycle number at which fluorescence crosses a set threshold background level."
  },
  {
    id: 26,
    question: "According to Westgard Rules, a $1_{3s}$ violation indicates:",
    options: ["1 control value exceeds 3 standard deviations (Reject run)", "2 controls exceed 2 standard deviations", "A warning only", "10 consecutive controls on one side of mean"],
    answer: "1 control value exceeds 3 standard deviations (Reject run)",
    explanation: "A $1_{3s}$ rule violation is an automatic rejection rule usually triggered by a large random error."
  },
  {
    id: 27,
    question: "What standard filter is used to calibrate spectrophotometer wavelength accuracy?",
    options: ["Holmium Oxide Filter", "Potassium Dichromate Filter", "Cobalt Blue Glass", "Gelatin Filter"],
    answer: "Holmium Oxide Filter",
    explanation: "Holmium oxide glass exhibits sharp, precise spectral absorption peaks across the UV-visible range."
  },
  {
    id: 28,
    question: "How is gravimetric pipette calibration performed?",
    options: ["Measuring fluid volume in a graduated cylinder", "Weighing dispensed deionized water on an analytical balance", "Measuring optical absorbance of dye", "Counting drops under microscope"],
    answer: "Weighing dispensed deionized water on an analytical balance",
    explanation: "Water mass is converted to exact volume using the temperature-adjusted density factor ($Z$ factor)."
  },
  {
    id: 29,
    question: "What is the minimum electrical resistivity requirement for Type I Clinical Laboratory Reagent Water (CLRW)?",
    options: ["> 10 MΩ·cm at 25°C", "> 1 MΩ·cm at 25°C", "> 50 MΩ·cm at 25°C", "< 5 MΩ·cm at 25°C"],
    answer: "> 10 MΩ·cm at 25°C",
    explanation: "Type I reagent water must have a high resistivity (>10 MΩ·cm) indicating low ionic impurity."
  },
  {
    id: 30,
    question: "What instrument is used to verify centrifuge rotational speed (RPM)?",
    options: ["Digital photo-tachometer", "Anemometer", "Refractometer", "Spectrophotometer"],
    answer: "Digital photo-tachometer",
    explanation: "A photo-tachometer counts reflected optical laser pulses per minute from tape on the rotating rotor."
  },
  {
    id: 31,
    question: "In a Class II Biosafety Cabinet, what is the standard average front sash inflow velocity?",
    options: ["50 fpm", "100 fpm", "200 fpm", "150 fpm"],
    answer: "100 fpm",
    explanation: "100 linear feet per minute (fpm) provides an effective air barrier to protect operators from bio-aerosols."
  },
  {
    id: 32,
    question: "Which cell organelle residue is stained in reticulocytes by supravital dyes?",
    options: ["Mitochondria", "Ribosomal RNA", "Golgi apparatus", "Endoplasmic reticulum"],
    answer: "Ribosomal RNA",
    explanation: "Reticulocytes contain residual ribosomal RNA that precipitates into stained aggregates."
  },
  {
    id: 33,
    question: "Which plasma protein is primarily responsible for neutralizing RBC surface charge to promote rouleaux in ESR?",
    options: ["Albumin", "Fibrinogen", "Transferrin", "Prealbumin"],
    answer: "Fibrinogen",
    explanation: "Fibrinogen is an acute-phase reactant that neutralizes negative zeta potential on RBCs, accelerating sedimentation."
  },
  {
    id: 34,
    question: "What is the shelf life storage temperature for Fresh Frozen Plasma (FFP)?",
    options: ["2°C to 6°C", "-18°C or colder", "20°C to 24°C", "37°C"],
    answer: "-18°C or colder",
    explanation: "FFP must be stored at -18°C or colder to maintain labile coagulation factors (Factors V and VIII)."
  },
  {
    id: 35,
    question: "Platelet concentrates must be stored at what temperature range with continuous agitation?",
    options: ["2°C to 6°C", "20°C to 24°C", "-20°C", "37°C"],
    answer: "20°C to 24°C",
    explanation: "Room temperature (20–24°C) with continuous gentle agitation prevents platelet aggregation and maintains function."
  },
  {
    id: 36,
    question: "Which stain is used to identify acid-fast coccidian parasites like Cryptosporidium in stool?",
    options: ["Modified Kinyoun Acid-Fast Stain", "Gram Stain", "Field Stain", "Albert Stain"],
    answer: "Modified Kinyoun Acid-Fast Stain",
    explanation: "1% weak sulfuric acid decolorizer retains carbol fuchsin in lipid-rich coccidian oocysts."
  },
  {
    id: 37,
    question: "What is the expected normal Fasting Blood Glucose level in healthy adults?",
    options: ["70 – 99 mg/dL", "100 – 125 mg/dL", "126 – 160 mg/dL", "< 50 mg/dL"],
    answer: "70 – 99 mg/dL",
    explanation: "Fasting plasma glucose between 70 and 99 mg/dL represents normal non-diabetic glycemic status."
  },
  {
    id: 38,
    question: "In Levey-Jennings QC interpretation, a $2_{2s}$ violation indicates:",
    options: ["Random error", "Systematic error", "No error (Accepted)", "Calculation error"],
    answer: "Systematic error",
    explanation: "Two consecutive control points exceeding the same +2s or -2s limit reflect systematic analytical bias."
  },
  {
    id: 39,
    question: "What component is added to Coombs negative tubes to confirm valid washing and active AHG reagent?",
    options: ["IgG-coated Coombs Check Cells", "Uncoated Group O cells", "0.9% Saline", "LISS"],
    answer: "IgG-coated Coombs Check Cells",
    explanation: "Check cells must agglutinate upon contact with unreacted AHG, proving the test was properly washed and AHG active."
  },
  {
    id: 40,
    question: "What temperature is used for paraffin wax infiltration during routine tissue processing?",
    options: ["37°C", "45°C", "56°C – 58°C", "100°C"],
    answer: "56°C – 58°C",
    explanation: "Molten paraffin wax melts between 56°C and 58°C, providing structural support without cooking tissue proteins."
  }
  ]
};
