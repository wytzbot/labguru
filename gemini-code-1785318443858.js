const LAB_DATA = {
  settings:{
    freeLimit:5,
    premiumPrice:2200,
    premiumDurationDays:60, // renews every 2 months
    paystackPublicKey:"pk_test_c7e019ceeeed3e83bcdd2d0e55bf6419ec18e9ad", 
    paystackPlanCode:"PLN_bbrr3qjnhkh7onb", 
    verifyEndpoint:"https://labguru-five.vercel.app/api/verify-payment"
  },
  perks:[
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
       
];
