const LAB_DATA = {
  settings:{
    freeLimit:5,
    premiumPrice:2200,
    premiumDurationDays:60, // renews every 2 months
    paystackPublicKey:"pk_test_c7e019ceeeed3e83bcdd2d0e55bf6419ec18e9ad", // replace with pk_live_... for production
    paystackPlanCode:"PLN_bbrr3qjnhkh7onb", // ₦2,200 every 60 days
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
    // ==================== UNIT 1: HEMATOLOGY ====================
    {
      id:"hematology",
      name:"Hematology",
      analyses:[
        {
          id:"pcv",
          title:"Packed Cell Volume (PCV) Determination - Microhematocrit Method",
          introduction:"The Packed Cell Volume, also known as Hematocrit, measures the percentage of whole blood that is composed of red blood cells. This is one of the most fundamental tests in hematology.\n\nIt is performed because red blood cells carry oxygen. Therefore PCV reflects the oxygen-carrying capacity of blood. It is used to screen for anemia, polycythemia, and to assess hydration status.\n\nIn MLS, the microhematocrit method is preferred because it is rapid, requires minimal blood, and is very accurate. It is used in donor screening, antenatal clinics, and emergency labs.\n\nUnderstanding PCV is also critical because it is used to calculate RBC indices: MCV, MCH, MCHC. It teaches students the principle of centrifugation and cell separation.",
          aim:"To determine the percentage volume of red blood cells in anticoagulated whole blood using microhematocrit centrifugation.",
          principle:"The principle is based on centrifugation. When blood is centrifuged at 12,000 rpm, cells separate by density. Red cells, being densest, pack at the bottom. Above them is a buffy coat of WBCs and platelets. Plasma forms the top layer.\n\nAfter 5 minutes, red cells are maximally packed. The height of the red cell column divided by total blood column height x 100 gives the PCV percentage. This method assumes complete packing with minimal trapped plasma.",
          materials:["EDTA Whole Blood","Microhematocrit Capillary Tubes","Clay Sealant","Microhematocrit Centrifuge 12000rpm","Microhematocrit Reader","Cotton Wool","Lancet","PPE: Gloves, Lab Coat"],
          procedure:[
            "Label capillary tube with sample ID.",
            "Mix EDTA blood by inverting 10 times.",
            "Dip tube into blood and allow to fill 3/4 by capillary action.",
            "Wipe outside of tube and seal one end with clay.",
            "Place tube in centrifuge opposite a balance tube.",
            "Centrifuge at 12,000 rpm for 5 minutes.",
            "Remove tube and place on reader. Align bottom of red cells to 0.",
            "Read percentage at top of red cell column and record."
          ],
          possibleResult:"Normal PCV: Red cell column within reference range indicates normal erythropoiesis.\nLow PCV: Short column suggests anemia, blood loss, or hemodilution. Plasma column is large.\nHigh PCV: Long column suggests polycythemia or dehydration. Plasma column is small.\nError: Incomplete centrifugation causes trapped plasma and falsely high PCV.",
          normalRange:{male:"40-54%", female:"37-47%", children:"35-45%", newborn:"44-64%"},
          safetyPrecautions:["Wear PPE","Dispose sharps in safety box","Balance centrifuge","Decontaminate with 10% bleach","Treat all blood as infectious"],
          examTips:["Keyword: Centrifugation, Rule of 3: Hb x 3 = PCV","Common mistake: Air bubbles cause false result","Viva: Why EDTA? Preserves morphology"],
          faqs:[{q:"Falsely high PCV causes?", a:"Trapped plasma, cold agglutinins"}]
        },
        {
          id:"hb",
          title:"Hemoglobin Estimation - Sahli's Acid Hematin Method",
          introduction:"Hemoglobin is the iron-protein pigment in RBCs that binds oxygen. Sahli method estimates Hb by converting it to brown acid hematin.\n\nIt is performed to assess anemia status. Though outdated, it is still taught because it demonstrates basic colorimetry.\n\nThe test is important in labs without spectrophotometers. It helps students understand chemical conversion and visual comparison.\n\nLimitations include subjectivity in color matching and need for strict timing.",
          aim:"To estimate hemoglobin concentration by converting Hb to acid hematin and matching color against a standard.",
          principle:"Blood + N/10 HCl converts hemoglobin to brown acid hematin in 10 minutes. The intensity is proportional to Hb concentration. The solution is diluted with distilled water until color matches the permanent glass standard. The reading on the graduated tube is Hb in g/dL.",
          materials:["Sahli Hemoglobinometer","N/10 HCl","20µL Hb Pipette","Distilled Water","Glass Stirrer","EDTA Blood"],
          procedure:[
            "Put N/10 HCl in Sahli tube to 20 mark.",
            "Draw 20µL blood and transfer to acid.",
            "Rinse pipette and mix. Allow 10 minutes.",
            "Add distilled water drop by drop and mix until color matches standard.",
            "Read lower meniscus and record in g/dL."
          ],
          possibleResult:"Brown color matching standard gives Hb value.\nPale color needing much dilution = anemia.\nVery dark color = polycythemia. Requires sample dilution.",
          normalRange:{male:"13.5-17.5 g/dL", female:"12-15.5 g/dL", children:"11-16 g/dL"},
          safetyPrecautions:["HCl is corrosive. Wear gloves","Do not pipette by mouth","Wash spills immediately"],
          examTips:["Must wait 10min","Keyword: Acid hematin","Common error: Air bubbles"],
          faqs:[{q:"Why 10 minutes?", a:"Complete conversion to acid hematin"}]
        },
        {
          id:"esr",
          title:"Erythrocyte Sedimentation Rate - Westergren Method",
          introduction:"ESR measures the rate at which RBCs settle in 1 hour. It is a non-specific marker of inflammation.\n\nIt is performed to monitor chronic diseases like TB, RA, and malignancy. It rises when plasma proteins like fibrinogen increase.\n\nIn MLS it teaches students about rouleaux formation and plasma protein effects.\n\nIt is not diagnostic alone but useful for monitoring treatment response.",
          aim:"To measure the rate of sedimentation of red blood cells in one hour.",
          principle:"In anticoagulated blood, RBCs normally repel each other. In inflammation, fibrinogen causes them to aggregate into rouleaux. These aggregates are heavier and settle faster. The distance settled in 1 hour is ESR.",
          materials:["Westergren Tube","Westergren Stand","3.8% Sodium Citrate","Syringe","Timer"],
          procedure:[
            "Mix blood with sodium citrate in ratio 4:1.",
            "Fill Westergren tube to 200mm mark.",
            "Place tube vertically in stand.",
            "Leave undisturbed for 1 hour at room temperature.",
            "Read mm of clear plasma at top and record as mm/hr."
          ],
          possibleResult:"Normal: 0-15mm male, 0-20mm female.\nElevated: >20mm suggests inflammation, infection, anemia, malignancy.\nVery high >100mm suggests TB or myeloma.",
          normalRange:{male:"0-15 mm/hr", female:"0-20 mm/hr", children:"0-10 mm/hr"},
          safetyPrecautions:["Universal precautions","Dispose sharps","Avoid vibration during test"],
          examTips:["Keyword: Rouleaux formation","Common mistake: Tube not vertical"],
          faqs:[{q:"Is ESR specific?", a:"No. It is non-specific and rises in many conditions"}]
        },
        {
          id:"twbc",
          title:"Total White Blood Cell Count",
          introduction:"TWBC counts all leukocytes in blood. It is essential for diagnosing infection, leukemia, and immune disorders.\n\nPerformed using dilution and counting chamber. It is a core hematology skill.\n\nUnderstanding TWBC helps students correlate clinical conditions with cell counts.",
          aim:"To determine the number of white blood cells per microliter of blood.",
          principle:"Blood is diluted 1:20 with Turk's fluid which lyses RBCs and stains WBC nuclei. The diluted sample is loaded into a Neubauer chamber and WBCs in 4 large squares are counted. Count x 50 = cells/µL.",
          materials:["WBC Pipette","Turk's Fluid","Neubauer Chamber","Microscope","EDTA Blood"],
          procedure:[
            "Draw blood to 0.5 mark in WBC pipette.",
            "Draw Turk's fluid to 11 mark to make 1:20 dilution.",
            "Mix for 2 minutes.",
            "Discard first 2 drops and load chamber.",
            "Count WBCs in 4 large corner squares under 10x objective.",
            "Multiply total by 50 to get cells/µL."
          ],
          possibleResult:"Normal: 4000-11000/µL.\nLeukocytosis: >11000 suggests infection.\nLeukopenia: <4000 suggests viral infection or bone marrow failure.",
          normalRange:{all:"4000-11000 /µL"},
          safetyPrecautions:["Wear gloves","Avoid aerosols","Decontaminate chamber"],
          examTips:["Keyword: Turk's fluid lyses RBCs","Common mistake: Counting RBCs"],
          faqs:[{q:"Why Turk's fluid?", a:"To lyse RBCs and stain WBC nuclei"}]
        },
        {
          id:"platelet",
          title:"Platelet Count",
          introduction:"Platelets are cell fragments involved in hemostasis. Low count causes bleeding.\n\nCounted using dilution and chamber. Important in dengue, ITP, and chemotherapy monitoring.",
          aim:"To determine platelet count per microliter.",
          principle:"Blood diluted 1:100 with Rees-Ecker fluid. Platelets counted in 5 small squares of central 1mm square. Count x 1000 = /µL.",
          materials:["Platelet Pipette","Rees-Ecker Fluid","Neubauer Chamber"],
          procedure:[
            "Make 1:100 dilution with Rees-Ecker.",
            "Load chamber and allow to settle 15min.",
            "Count platelets in 5 small squares.",
            "Multiply by 1000."
          ],
          possibleResult:"Normal: 150000-450000/µL.\nThrombocytopenia: <150000 risk of bleeding.\nThrombocytosis: >450000 risk of clotting.",
          normalRange:{all:"150000-450000 /µL"},
          safetyPrecautions:["Avoid clumping","Fresh sample"],
          examTips:["Keyword: Rees-Ecker fluid","Common mistake: Clumped platelets"],
          faqs:[{q:"Cause of pseudothrombocytopenia?", a:"EDTA-induced clumping"}]
        },
        {
          id:"diff",
          title:"Differential WBC Count",
          introduction:"Diff count gives percentage of each WBC type. Important for diagnosing type of infection.",
          aim:"To determine percentage of neutrophils, lymphocytes, monocytes, eosinophils, basophils.",
          principle:"Blood film stained with Leishman. 100 WBCs counted and classified morphologically.",
          materials:["Slides","Leishman Stain","Oil Immersion","EDTA Blood"],
          procedure:[
            "Make thin blood film.",
            "Air dry and stain with Leishman for 10min.",
            "Wash and dry.",
            "Count 100 WBCs under oil immersion and classify."
          ],
          possibleResult:"Neutrophilia: Bacterial infection.\nLymphocytosis: Viral infection.\nEosinophilia: Parasites, allergy.",
          normalRange:{neutrophils:"40-75%", lymphocytes:"20-45%", monocytes:"2-10%", eosinophils:"1-6%", basophils:"0-1%"},
          safetyPrecautions:["Handle slides","Dispose sharps"],
          examTips:["Keyword: Morphology","Common mistake: Poor film"],
          faqs:[{q:"Best stain?", a:"Leishman or Giemsa"}]
        },
        {
          id:"film",
          title:"Peripheral Blood Film Examination",
          introduction:"PBF assesses morphology of all blood cells. Critical for anemia classification.",
          aim:"To prepare and examine quality blood film.",
          principle:"Thin spread allows visualization of cell size, shape, and inclusions.",
          materials:["2 Slides","Blood","Stain"],
          procedure:[
            "Place drop of blood on slide.",
            "Spread at 45° angle.",
            "Air dry and stain.",
            "Examine under 10x, 40x, 100x."
          ],
          possibleResult:"Normal morphology.\nAbnormal: Spherocytes, target cells, schistocytes indicate pathology.",
          normalRange:{note:"No numerical range. Report morphology"},
          safetyPrecautions:["No mouth pipetting"],
          examTips:["Feather edge must be smooth","Keyword: Morphology"],
          faqs:[{q:"Purpose?", a:"Diagnose anemia type"}]
        },
        {
          id:"retic",
          title:"Reticulocyte Count",
          introduction:"Reticulocytes are young RBCs. Count indicates bone marrow activity.",
          aim:"To determine percentage of reticulocytes.",
          principle:"New methylene blue stains RNA in retics. Count 1000 RBCs.",
          materials:["New Methylene Blue","Tube","Slides"],
          procedure:[
            "Mix blood 1:1 with stain.",
            "Incubate 15min.",
            "Make film and count 1000 RBCs."
          ],
          possibleResult:"Normal: 0.5-2.5%.\nHigh: Hemolytic anemia.\nLow: Aplastic anemia.",
          normalRange:{all:"0.5-2.5%"},
          safetyPrecautions:["Dye stains skin"],
          examTips:["Keyword: Bone marrow activity"],
          faqs:[{q:"Clinical use?", a:"Monitor response to anemia treatment"}]
        },
        {
          id:"bt",
          title:"Bleeding Time - Duke Method",
          introduction:"Tests platelet and capillary function.",
          aim:"To measure time for bleeding to stop.",
          principle:"Standard incision. Time from incision to cessation.",
          materials:["Lancet","Filter Paper","Timer"],
          procedure:[
            "Clean ear lobe.",
            "Make 3mm incision.",
            "Blot every 30s without touching wound.",
            "Stop when no blood on paper."
          ],
          possibleResult:"Normal: 2-9min.\nProlonged: Thrombocytopenia, vWD.",
          normalRange:{all:"2-9 minutes"},
          safetyPrecautions:["Sharps disposal"],
          examTips:["Keyword: Primary hemostasis"],
          faqs:[{q:"Rarely done now?", a:"Yes, replaced by PFA-100"}]
        },
        {
          id:"ct",
          title:"Clotting Time",
          introduction:"Tests intrinsic coagulation pathway.",
          aim:"To measure time for blood to clot.",
          principle:"Blood in glass tube clots due to contact activation.",
          materials:["Glass Tube","37°C Water Bath","Lancet"],
          procedure:[
            "Collect blood in tube.",
            "Place in 37°C bath.",
            "Tilt every 30s until clot forms."
          ],
          possibleResult:"Normal: 5-10min.\nProlonged: Hemophilia, liver disease.",
          normalRange:{all:"5-10 minutes"},
          safetyPrecautions:["Blood handling"],
          examTips:["Keyword: Intrinsic pathway"],
          faqs:[{q:"Better test?", a:"PT and APTT"}]
        }
      ],
      normalRanges:[
        {test:"PCV", male:"40-54%", female:"37-47%"},
        {test:"Hemoglobin", male:"13.5-17.5 g/dL", female:"12-15.5 g/dL"},
        {test:"ESR", male:"0-15 mm/hr", female:"0-20 mm/hr"},
        {test:"TWBC", all:"4000-11000 /µL"},
        {test:"Platelets", all:"150000-450000 /µL"},
        {test:"Reticulocytes", all:"0.5-2.5%"},
        {test:"Bleeding Time", all:"2-9 min"},
        {test:"Clotting Time", all:"5-10 min"}
      ],
      faqs:[
        {q:"Rule of 3", a:"Hb x 3 ≈ PCV"},
        {q:"Best anticoagulant for hematology?", a:"EDTA"}
      ]
    },
    
    // ==================== UNIT 2: CLINICAL CHEMISTRY ====================
    {
      id:"chemistry",
      name:"Clinical Chemistry",
      analyses:[
        {
          id:"glucose",
          title:"Blood Glucose Estimation - Glucose Oxidase Method",
          introduction:"Glucose is the main energy source. Blood glucose test screens for diabetes mellitus.\n\nIt is performed fasting and post-prandial. It is one of the most requested chemistry tests.\n\nThe GOD-POD method is specific and widely used in MLS labs.\n\nUnderstanding glucose metabolism is key for students.",
          aim:"To determine glucose concentration in serum or plasma.",
          principle:"Glucose oxidase converts glucose to gluconic acid + H2O2. Peroxidase uses H2O2 to oxidize a chromogen to a colored dye. Color intensity measured at 500nm is proportional to glucose.",
          materials:["Glucose Reagent","Spectrophotometer","Serum","Cuvettes","Pipettes"],
          procedure:[
            "Label 3 tubes: Blank, Standard, Test.",
            "Add 1000µL reagent to each.",
            "Add 10µL standard to standard tube and 10µL serum to test tube.",
            "Mix and incubate at 37°C for 10 minutes.",
            "Read absorbance at 500nm.",
            "Calculate: Test Abs/Std Abs x 100 = mg/dL"
          ],
          possibleResult:"Normal fasting: 70-100 mg/dL.\nHigh >126 suggests diabetes.\nLow <70 suggests hypoglycemia.",
          normalRange:{fasting:"70-100 mg/dL", random:"<140 mg/dL"},
          safetyPrecautions:["PPE","Reagent caution"],
          examTips:["Keyword: GOD-POD","Fasting 8-12hrs"],
          faqs:[{q:"Best sample?", a:"Fluoride oxalate plasma"}]
        },
        {
          id:"urea",
          title:"Blood Urea Estimation",
          introduction:"Urea is end product of protein metabolism. Measures kidney function.",
          aim:"To determine urea concentration.",
          principle:"Urease converts urea to ammonia and CO2. Ammonia reacts with phenol to form colored indophenol.",
          materials:["Urea Kit","Serum","Spectro"],
          procedure:["Mix serum with reagent","Incubate 10min at 37°C","Read at 580nm"],
          possibleResult:"Normal: 15-40 mg/dL.\nHigh: Renal failure, dehydration.",
          normalRange:{all:"15-40 mg/dL"},
          safetyPrecautions:["PPE"],
          examTips:["Keyword: Urease"],
          faqs:[{q:"BUN vs Urea?", a:"BUN = Urea/2.14"}]
        },
        {
          id:"creatinine",
          title:"Serum Creatinine - Jaffe Method",
          introduction:"Creatinine is muscle metabolism product. Best marker of GFR.",
          aim:"To determine creatinine.",
          principle:"Creatinine + alkaline picrate forms orange-red complex. Read at 520nm.",
          materials:["Creatinine Kit","Serum"],
          procedure:["Mix","Wait 30s and read","Read again at 2min","Calculate delta"],
          possibleResult:"Normal: 0.6-1.2 mg/dL.\nHigh: Kidney disease.",
          normalRange:{male:"0.7-1.3 mg/dL", female:"0.6-1.1 mg/dL"},
          safetyPrecautions:["Gloves"],
          examTips:["Keyword: Jaffe reaction"],
          faqs:[{q:"More specific than urea?", a:"Yes"}]
        },
        {
          id:"alt",
          title:"Alanine Aminotransferase - ALT",
          introduction:"Liver enzyme. Raised in hepatitis.",
          aim:"To measure ALT activity.",
          principle:"ALT catalyzes transfer of amino group. NADH oxidation measured at 340nm.",
          materials:["ALT Kit","Serum","Spectro"],
          procedure:["Mix","Incubate","Read at 340nm for 3min"],
          possibleResult:"Normal: <40 IU/L.\nHigh: Liver damage.",
          normalRange:{all:"<40 IU/L"},
          safetyPrecautions:["PPE"],
          examTips:["More liver specific than AST"],
          faqs:[{q:"ALT vs AST?", a:"ALT more specific to liver"}]
        },
        {
          id:"ast",
          title:"Aspartate Aminotransferase - AST",
          introduction:"Liver and cardiac enzyme.",
          aim:"To measure AST.",
          principle:"Similar to ALT.",
          materials:["AST Kit","Serum"],
          procedure:["Mix","Incubate","Read"],
          possibleResult:"Normal: <40 IU/L.\nHigh: Liver, heart, muscle damage.",
          normalRange:{all:"<40 IU/L"},
          safetyPrecautions:["Gloves"],
          examTips:["AST:ALT >2 = Alcoholic liver"],
          faqs:[{q:"Also in MI?", a:"Yes"}]
        },
        {
          id:"bilirubin",
          title:"Total and Direct Bilirubin",
          introduction:"Product of Hb breakdown. Measures liver and hemolytic function.",
          aim:"To measure bilirubin.",
          principle:"Diazotization with sulfanilic acid forms azobilirubin.",
          materials:["Bilirubin Kit","Serum"],
          procedure:["Add reagent","Incubate","Read"],
          possibleResult:"Normal Total: <1.2 mg/dL. Direct: <0.3 mg/dL.\nHigh: Jaundice.",
          normalRange:{total:"<1.2 mg/dL", direct:"<0.3 mg/dL"},
          safetyPrecautions:["Light sensitive"],
          examTips:["Indirect = Total - Direct"],
          faqs:[{q:"Types of jaundice?", a:"Pre-hepatic, Hepatic, Post-hepatic"}]
        },
        {
          id:"cholesterol",
          title:"Serum Cholesterol",
          introduction:"Lipid profile component. Cardiovascular risk marker.",
          aim:"To measure cholesterol.",
          principle:"Cholesterol esterase + oxidase produces H2O2 which forms dye.",
          materials:["Cholesterol Kit","Serum"],
          procedure:["Mix","Incubate","Read"],
          possibleResult:"Normal: <200 mg/dL.\nHigh: Risk of heart disease.",
          normalRange:{all:"<200 mg/dL"},
          safetyPrecautions:["PPE"],
          examTips:["Fasting sample"],
          faqs:[{q:"HDL vs LDL?", a:"HDL good, LDL bad"}]
        },
        {
          id:"protein",
          title:"Total Protein - Biuret Method",
          introduction:"Albumin + Globulin. Nutritional and liver marker.",
          aim:"To measure total protein.",
          principle:"Protein + Cu2+ in alkaline solution forms violet complex.",
          materials:["Biuret Reagent","Serum"],
          procedure:["Mix","Incubate","Read 540nm"],
          possibleResult:"Normal: 6-8 g/dL.\nLow: Malnutrition, liver disease.",
          normalRange:{all:"6-8 g/dL"},
          safetyPrecautions:["Caustic reagent"],
          examTips:["Biuret reaction"],
          faqs:[{q:"Albumin:Globulin ratio?", a:"1.2:1 to 2:1"}]
        },
        {
          id:"electrolytes",
          title:"Serum Electrolytes - ISE Method",
          introduction:"Na, K, Cl maintain fluid balance.",
          aim:"To measure electrolytes.",
          principle:"Ion Selective Electrode measures ion activity.",
          materials:["ISE Analyzer","Serum"],
          procedure:["Load sample","Calibrate","Run"],
          possibleResult:"Na: 135-145. K: 3.5-5.0 mmol/L.\nAbnormal: Dehydration, kidney disease.",
          normalRange:{na:"135-145 mmol/L", k:"3.5-5.0 mmol/L"},
          safetyPrecautions:["Machine safety"],
          examTips:["Critical K >6.5"],
          faqs:[{q:"Pseudohyperkalemia cause?", a:"Hemolysis"}]
        },
        {
          id:"amylase",
          title:"Serum Amylase",
          introduction:"Pancreatic enzyme.",
          aim:"To measure amylase.",
          principle:"Hydrolysis of starch substrate.",
          materials:["Amylase Kit","Serum"],
          procedure:["Mix","Incubate","Read"],
          possibleResult:"Normal: 30-110 IU/L.\nHigh: Pancreatitis.",
          normalRange:{all:"30-110 IU/L"},
          safetyPrecautions:["Gloves"],
          examTips:["Lipase more specific"],
          faqs:[{q:"Used for?", a:"Acute pancreatitis"}]
        }
      ],
      normalRanges:[
        {test:"Fasting Glucose", all:"70-100 mg/dL"},
        {test:"Urea", all:"15-40 mg/dL"},
        {test:"Creatinine", male:"0.7-1.3 mg/dL", female:"0.6-1.1 mg/dL"},
        {test:"ALT", all:"<40 IU/L"},
        {test:"AST", all:"<40 IU/L"},
        {test:"Total Bilirubin", all:"<1.2 mg/dL"},
        {test:"Cholesterol", all:"<200 mg/dL"},
        {test:"Total Protein", all:"6-8 g/dL"},
        {test:"Sodium", all:"135-145 mmol/L"},
        {test:"Potassium", all:"3.5-5.0 mmol/L"},
        {test:"Amylase", all:"30-110 IU/L"}
      ],
      faqs:[
        {q:"Best kidney test?", a:"Creatinine"},
        {q:"Best liver test?", a:"ALT"}
      ]
    }
  ]
},
      // ==================== UNIT 3: MEDICAL MICROBIOLOGY ====================
    {
      id:"microbiology",
      name:"Medical Microbiology",
      analyses:[
        {
          id:"gs",
          title:"Gram Stain Technique",
          introduction:"Gram stain is the most important differential stain in microbiology. It classifies bacteria into Gram-positive and Gram-negative based on cell wall structure.\n\nIt is performed on all clinical specimens to guide empirical antibiotic therapy before culture results. It gives results in 10 minutes.\n\nIn MLS, mastering Gram stain is critical because it is the first step in bacterial identification. It also teaches principles of differential staining and microscopy.\n\nThe stain differentiates based on peptidoglycan thickness. Gram +ve retain crystal violet, Gram -ve lose it and take safranin.",
          aim:"To differentiate bacteria into Gram-positive and Gram-negative groups and to assess specimen quality.",
          principle:"Crystal violet binds to all bacteria. Iodine acts as a mordant to form CV-I complex. Alcohol decolorizes Gram-negative bacteria because of their thin peptidoglycan and outer lipid layer. Safranin counterstains them pink. Gram-positive retain CV-I and appear purple.",
          materials:["Glass Slides","Bunsen Burner","Crystal Violet","Gram's Iodine","95% Alcohol/Acetone","Safranin","Immersion Oil","Microscope"],
          procedure:[
            "Make a thin smear of specimen on clean slide and air dry.",
            "Heat fix by passing slide through flame 3 times.",
            "Flood slide with Crystal Violet for 1 minute.",
            "Wash gently with distilled water.",
            "Flood with Gram's Iodine for 1 minute. Wash.",
            "Decolorize with 95% alcohol drop by drop for 10-15 seconds until no more purple comes off.",
            "Wash immediately to stop decolorization.",
            "Counterstain with Safranin for 30 seconds. Wash and air dry.",
            "Examine under oil immersion 100x objective."
          ],
          possibleResult:"Gram-positive: Purple, round or rod shaped cells.\nGram-negative: Pink, round or rod shaped cells.\nNo organisms: Suggests no bacterial infection or poor specimen.\nMany pus cells with no organisms: Possible anaerobes or prior antibiotics.",
          normalRange:{note:"No range. Report: Gram +ve cocci in clusters, Gram -ve rods, etc"},
          safetyPrecautions:["BSL-2 practices","Disinfect bench","Dispose slides in sharps","Wear gloves"],
          examTips:["Keyword: Peptidoglycan, Decolorization step","Common mistake: Over-decolorization","Viva: Why do Gram +ve retain stain?"],
          faqs:[{q:"Most common error?", a:"Over-decolorizing makes Gram +ve appear Gram -ve"}]
        },
        {
          id:"zn",
          title:"Ziehl-Neelsen Stain for Acid-Fast Bacilli",
          introduction:"ZN stain detects acid-fast bacteria, mainly Mycobacterium tuberculosis.\n\nIt is performed on sputum for TB diagnosis. It is cheap and rapid.\n\nThe test is important in public health because TB is airborne. Early detection prevents spread.\n\nStudents must learn heat fixation because mycolic acid in cell wall prevents stain penetration.",
          aim:"To demonstrate acid-fast bacilli in clinical specimens.",
          principle:"Carbol fuchsin penetrates waxy mycolic acid cell wall with heat. Acid-alcohol decolorizes non-acid-fast bacteria. Methylene blue counterstains background. AFB retain red color.",
          materials:["Slides","Carbol Fuchsin","Acid Alcohol 3%","Methylene Blue","Bunsen Burner","Sputum Sample"],
          procedure:[
            "Make thick smear and heat fix.",
            "Cover with Carbol Fuchsin and heat gently until steaming for 5 minutes.",
            "Wash with water.",
            "Decolorize with Acid Alcohol for 2-3 minutes.",
            "Wash and counterstain with Methylene Blue for 1 minute.",
            "Wash, dry and examine under 100x oil."
          ],
          possibleResult:"AFB: Bright red, slender rods.\nNegative: Blue background only.\nReport as scanty, 1+, 2+, 3+ based on number per field.",
          normalRange:{note:"Negative is normal"},
          safetyPrecautions:["BSL-3 if TB suspected","Work in biosafety cabinet","Heat in fume hood"],
          examTips:["Keyword: Mycolic acid","Common mistake: Not heating enough"],
          faqs:[{q:"Why heat?", a:"To melt wax and allow dye entry"}]
        },
        {
          id:"culture",
          title:"Urine Culture and Colony Count",
          introduction:"Urine culture detects and quantifies bacteria causing UTI.\n\nIt is performed when microscopy shows >5 WBCs or nitrites positive. It identifies organism and does sensitivity.\n\nQuantitative culture is key because contamination must be differentiated from true infection.\n\nMLS students must learn aseptic technique and colony counting.",
          aim:"To isolate and quantify bacteria from urine and determine significant bacteriuria.",
          principle:"A calibrated loop delivers known volume of urine onto culture media. After incubation, colonies are counted. >100,000 CFU/mL of single organism = significant.",
          materials:["CLED Agar Plate","Calibrated 1µL Loop","Incubator","Urine Sample","Bunsen Burner"],
          procedure:[
            "Mix urine well and dip calibrated loop.",
            "Streak onto CLED plate using quadrant method.",
            "Incubate at 37°C for 18-24 hours aerobically.",
            "Count colonies and multiply by 1000 to get CFU/mL.",
            "Identify organism and set up sensitivity."
          ],
          possibleResult:"<10,000 CFU/mL: Contamination.\n10,000-100,000: Doubtful, repeat.\n>100,000: Significant bacteriuria.",
          normalRange:{all:"<10,000 CFU/mL"},
          safetyPrecautions:["BSL-2","Flame loop","Dispose plates in autoclave bag"],
          examTips:["Keyword: Significant bacteriuria = >100000","Common mistake: Not using calibrated loop"],
          faqs:[{q:"Best media?", a:"CLED prevents Proteus swarming"}]
        },
        {
          id:"msu",
          title:"Midstream Urine Collection Technique",
          introduction:"Proper collection prevents contamination. MSU is gold standard for urine culture.\n\nIt is taught to reduce false positive cultures.\n\nImportant for female patients where contamination is common.",
          aim:"To collect urine sample with minimal contamination from urethral and skin flora.",
          principle:"Initial stream washes out urethral flora. Midstream is collected from bladder urine which is normally sterile.",
          materials:["Sterile Container","Soap","Water","Patient Instruction Sheet"],
          procedure:[
            "Clean hands and genitalia with soap and water.",
            "For females: Separate labia. For males: Retract foreskin.",
            "Start to urinate into toilet.",
            "After 2 seconds, collect midstream urine into container.",
            "Finish voiding in toilet. Cap container."
          ],
          possibleResult:"Clean sample suitable for culture.\nPoor collection leads to mixed growth.",
          normalRange:{note:"Technique, not result"},
          safetyPrecautions:["Patient education","Hygiene"],
          examTips:["Keyword: Clean catch","Common mistake: Collecting first stream"],
          faqs:[{q:"First morning?", a:"Yes, most concentrated"}]
        },
        {
          id:"bloodculture",
          title:"Blood Culture",
          introduction:"Detects bacteremia and sepsis. Gold standard for bloodstream infection.\n\n2 sets from different sites increase yield.\n\nCritical in febrile patients.",
          aim:"To isolate bacteria or fungi from blood.",
          principle:"Blood inoculated into broth media. Organisms multiply and are detected by subculture or automated system.",
          materials:["Blood Culture Bottles","Syringe","Alcohol Swabs","Incubator"],
          procedure:[
            "Disinfect skin with 70% alcohol then iodine.",
            "Draw 10mL blood aseptically.",
            "Inoculate into aerobic and anaerobic bottles.",
            "Incubate at 37°C for up to 7 days.",
            "Subculture if positive."
          ],
          possibleResult:"No growth: Normal.\nGrowth: Organism ID and sensitivity done.",
          normalRange:{all:"No growth"},
          safetyPrecautions:["Strict asepsis","BSL-2"],
          examTips:["Keyword: 2 sets","Common mistake: Skin contamination"],
          faqs:[{q:"Volume?", a:"10mL per bottle for adults"}]
        },
        {
          id:"sputum",
          title:"Sputum Culture",
          introduction:"For lower respiratory tract infections.",
          aim:"To isolate respiratory pathogens.",
          principle:"Sputum plated on Blood and Chocolate agar.",
          materials:["Sputum Container","Agar Plates","Incubator"],
          procedure:["Collect deep cough sputum","Plate","Incubate 24-48h"],
          possibleResult:"Normal flora or pathogen like S.pneumoniae.",
          normalRange:{note:"Normal flora"},
          safetyPrecautions:["TB precautions","BSL-2"],
          examTips:["Reject saliva"],
          faqs:[{q:"3 samples?", a:"For TB diagnosis"}]
        },
        {
          id:"wound",
          title:"Wound Swab Culture",
          introduction:"Identifies pathogens in infected wounds.",
          aim:"To isolate bacteria from wound.",
          principle:"Swab inoculated onto media.",
          materials:["Sterile Swab","Media"],
          procedure:["Clean wound","Swab depth","Plate","Incubate"],
          possibleResult:"S.aureus, Pseudomonas common.",
          normalRange:{note:"No pathogen"},
          safetyPrecautions:["PPE"],
          examTips:["Swab pus, not surface"],
          faqs:[{q:"Anaerobes?", a:"Use anaerobic jar"}]
        },
        {
          id:"stool",
          title:"Stool Culture",
          introduction:"For diarrheal pathogens.",
          aim:"To isolate Salmonella, Shigella.",
          principle:"Selective media: XLD, SS agar.",
          materials:["Stool Container","XLD","SS Agar"],
          procedure:["Inoculate","Incubate","Identify"],
          possibleResult:"Pathogen or normal flora.",
          normalRange:{note:"Normal flora"},
          safetyPrecautions:["BSL-2"],
          examTips:["Fresh sample"],
          faqs:[{q:"Transport media?", a:"Cary-Blair"}]
        },
        {
          id:"csf",
          title:"CSF Analysis",
          introduction:"For meningitis diagnosis. Urgent.",
          aim:"To analyze cells, protein, glucose, culture.",
          principle:"Cell count, biochemistry, and culture.",
          materials:["CSF Tube","Chamber","Reagents"],
          procedure:["Cell count","Glucose","Protein","Culture"],
          possibleResult:"Bacterial: High WBC, Low glucose.\nViral: Lymphocytes, Normal glucose.",
          normalRange:{cells:"<5 /µL", glucose:"50-80 mg/dL"},
          safetyPrecautions:["BSL-2","Urgent"],
          examTips:["Process immediately"],
          faqs:[{q:"Most common?", a:"N.meningitidis in kids"}]
        },
        {
          id:"sensitivity",
          title:"Antibiotic Sensitivity Test - Kirby Bauer",
          introduction:"Determines which antibiotic will work.",
          aim:"To test susceptibility of isolate.",
          principle:"Antibiotic disks diffuse into agar. Zone size correlates to susceptibility.",
          materials:["Mueller-Hinton Agar","Antibiotic Disks","0.5 McFarland"],
          procedure:["Make lawn culture","Add disks","Incubate 18h","Measure zones"],
          possibleResult:"S = Susceptible, I = Intermediate, R = Resistant.",
          normalRange:{note:"Interpret by CLSI"},
          safetyPrecautions:["BSL-2"],
          examTips:["Standard inoculum"],
          faqs:[{q:"Gold standard?", a:"Broth dilution"}]
        }
      ],
      normalRanges:[
        {test:"Urine Culture", all:"<10,000 CFU/mL"},
        {test:"Blood Culture", all:"No growth"},
        {test:"CSF Cells", all:"<5 /µL"},
        {test:"CSF Glucose", all:"50-80 mg/dL"}
      ],
      faqs:[{q:"BSL for TB?", a:"BSL-3"}]
    },

    // ==================== UNIT 4: IMMUNOLOGY ====================
    {
      id:"immunology",
      name:"Immunology",
      analyses:[
        {
          id:"hiv",
          title:"HIV Rapid Test",
          introduction:"Screens for HIV antibodies. Rapid test gives result in 15 minutes.\n\nImportant for early diagnosis and PMTCT.\n\nAll reactive must be confirmed.",
          aim:"To detect HIV-1 and HIV-2 antibodies in blood.",
          principle:"Lateral flow immunoassay. Antibodies bind to antigen-gold conjugate and form line.",
          materials:["HIV Test Kit","Lancet","Buffer","Timer"],
          procedure:["Collect blood","Add to sample well","Add buffer","Read at 15min"],
          possibleResult:"1 line: Negative.\n2 lines: Reactive. Needs confirmation.\nNo control line: Invalid.",
          normalRange:{all:"Non-reactive"},
          safetyPrecautions:["Universal precautions","Sharps box"],
          examTips:["Window period 3 months","Keyword: Lateral flow"],
          faqs:[{q:"Confirmatory test?", a:"ELISA and Western Blot"}]
        },
        {
          id:"hbsag",
          title:"Hepatitis B Surface Antigen",
          introduction:"Indicates current HBV infection.",
          aim:"To detect HBsAg.",
          principle:"Sandwich immunoassay.",
          materials:["HBsAg Kit","Serum"],
          procedure:["Add serum","Add buffer","Read 15min"],
          possibleResult:"Positive: Current infection.\nNegative: No infection.",
          normalRange:{all:"Negative"},
          safetyPrecautions:["Blood precautions"],
          examTips:["Vaccinated = HBsAb positive"],
          faqs:[{q:"Carrier state?", a:"HBsAg +ve >6 months"}]
        },
        {
          id:"widal",
          title:"Widal Test",
          introduction:"For typhoid fever. Detects anti-O and anti-H antibodies.",
          aim:"To detect Salmonella antibodies.",
          principle:"Agglutination of antigen with patient antibodies.",
          materials:["Widal Antigen","Serum","Tubes"],
          procedure:["Make dilutions","Add antigen","Incubate 24h","Read agglutination"],
          possibleResult:"Titre >=1:160 significant.",
          normalRange:{all:"<1:80"},
          safetyPrecautions:["Handle serum"],
          examTips:["4-fold rise better"],
          faqs:[{q:"Single titre reliable?", a:"No"}]
        },
        {
          id:"ra",
          title:"Rheumatoid Factor",
          introduction:"Autoantibody in RA.",
          aim:"To detect RF.",
          principle:"Latex agglutination.",
          materials:["RF Kit","Serum"],
          procedure:["Mix","Rotate 2min","Read"],
          possibleResult:"Agglutination = Positive.",
          normalRange:{all:"<20 IU/mL"},
          safetyPrecautions:["Gloves"],
          examTips:["Not specific"],
          faqs:[{q:"Other causes?", a:"SLE, TB"}]
        },
        {
          id:"crp",
          title:"C-Reactive Protein",
          introduction:"Acute phase protein. Rises in 6 hours.",
          aim:"To measure CRP.",
          principle:"Latex agglutination.",
          materials:["CRP Kit","Serum"],
          procedure:["Mix","Rotate","Read"],
          possibleResult:"Positive if inflammation.",
          normalRange:{all:"<10 mg/L"},
          safetyPrecautions:["PPE"],
          examTips:["Falls quickly with treatment"],
          faqs:[{q:"Use?", a:"Monitor inflammation"}]
        },
        {
          id:"asot",
          title:"Anti-Streptolysin O Titre",
          introduction:"After Group A Strep infection.",
          aim:"To detect ASOT.",
          principle:"Latex agglutination.",
          materials:["ASOT Kit","Serum"],
          procedure:["Mix","Rotate","Read"],
          possibleResult:"Titre in IU/mL.",
          normalRange:{all:"<200 IU/mL"},
          safetyPrecautions:["PPE"],
          examTips:["Rheumatic fever marker"],
          faqs:[{q:"When elevated?", a:"1-3 weeks post infection"}]
        },
        {
          id:"malaria_rdt",
          title:"Malaria Rapid Diagnostic Test",
          introduction:"Detects Plasmodium antigens.",
          aim:"To diagnose malaria.",
          principle:"Immunochromatography for HRP2 and pLDH.",
          materials:["RDT Kit","Blood","Buffer"],
          procedure:["Add blood","Add buffer","Read 15min"],
          possibleResult:"HRP2 line = P.falciparum.",
          normalRange:{all:"Negative"},
          safetyPrecautions:["Sharps"],
          examTips:["Confirm with film"],
          faqs:[{q:"HRP2 persists?", a:"Yes, 2 weeks"}]
        },
        {
          id:"pregnancy",
          title:"Urine Pregnancy Test",
          introduction:"Detects hCG hormone.",
          aim:"To confirm pregnancy.",
          principle:"Anti-hCG antibodies.",
          materials:["Pregnancy Strip","Urine"],
          procedure:["Dip strip","Read 5min"],
          possibleResult:"2 lines = Positive.",
          normalRange:{all:"Negative"},
          safetyPrecautions:["Hygiene"],
          examTips:["First morning urine"],
          faqs:[{q:"False positive?", a:"Rare"}]
        },
        {
          id:"vdrl",
          title:"VDRL Test",
          introduction:"Screen for syphilis.",
          aim:"To detect reagin antibodies.",
          principle:"Cardiolipin antigen flocculation.",
          materials:["VDRL Antigen","Serum","Rotator"],
          procedure:["Heat serum","Add antigen","Rotate","Read"],
          possibleResult:"Reactive or Non-reactive.",
          normalRange:{all:"Non-reactive"},
          safetyPrecautions:["Blood precautions"],
          examTips:["Confirm with TPHA"],
          faqs:[{q:"False positive?", a:"In pregnancy, autoimmune"}]
        },
        {
          id:"coombs",
          title:"Direct Coombs Test",
          introduction:"Detects antibodies on RBCs.",
          aim:"To diagnose AIHA.",
          principle:"Anti-human globulin causes agglutination.",
          materials:["Coombs Serum","RBCs"],
          procedure:["Wash RBCs","Add Coombs","Centrifuge","Read"],
          possibleResult:"Agglutination = Positive.",
          normalRange:{all:"Negative"},
          safetyPrecautions:["Blood safety"],
          examTips:["HDN marker"],
          faqs:[{q:"Indirect Coombs?", a:"Detects free antibodies"}]
        }
      ],
      normalRanges:[
        {test:"HIV", all:"Non-reactive"},
        {test:"HBsAg", all:"Negative"},
        {test:"Widal", all:"<1:80"},
        {test:"RF", all:"<20 IU/mL"},
        {test:"CRP", all:"<10 mg/L"},
        {test:"ASOT", all:"<200 IU/mL"},
        {test:"Malaria RDT", all:"Negative"},
        {test:"Pregnancy", all:"Negative"},
        {test:"VDRL", all:"Non-reactive"},
        {test:"Coombs", all:"Negative"}
      ],
      faqs:[{q:"Window period HIV?", a:"3 months"}]
    }
  ]
},    
       // ==================== UNIT 5: HISTOPATHOLOGY ====================
    {
      id:"histopathology",
      name:"Histopathology",
      analyses:[
        {
          id:"fixation",
          title:"Tissue Fixation",
          introduction:"Fixation preserves tissue structure and prevents autolysis and bacterial decomposition.\n\nIt is the first and most critical step in histopathology. Poor fixation ruins all downstream processing.\n\n10% Buffered Formalin is the universal fixative. It cross-links proteins.\n\nStudents must understand fixative to tissue ratio and fixation time.",
          aim:"To preserve tissue in a life-like state for microscopic examination.",
          principle:"Formalin forms methylene bridges between protein amino groups. This hardens tissue and inactivates enzymes that cause autolysis.",
          materials:["10% Buffered Formalin","Specimen Container","Tissue Sample","Label"],
          procedure:[
            "Place fresh tissue immediately into fixative.",
            "Ensure fixative to tissue ratio is 10:1.",
            "Label container with patient ID and site.",
            "Fix small biopsies for 6-12 hours. Large specimens 24-48 hours.",
            "Do not overfix as it interferes with IHC."
          ],
          possibleResult:"Well fixed tissue: Firm, maintains architecture.\nUnderfixed: Soft, autolysis.\nOverfixed: Brittle, poor staining.",
          normalRange:{note:"Technique, not result"},
          safetyPrecautions:["Use fume hood","Formalin is carcinogenic","Wear gloves and goggles"],
          examTips:["Keyword: 10:1 ratio","Common mistake: Delay in fixation"],
          faqs:[{q:"Best fixative?", a:"10% NBF"}]
        },
        {
          id:"processing",
          title:"Tissue Processing",
          introduction:"Processing removes water and infiltrates tissue with paraffin wax.\n\nThis makes tissue hard enough to cut thin sections.\n\nDone in automatic tissue processor overnight.\n\n4 main steps: Dehydration, Clearing, Infiltration, Embedding.",
          aim:"To replace tissue water with paraffin wax.",
          principle:"Water is removed by graded alcohols, cleared by xylene, then infiltrated with molten paraffin.",
          materials:["Tissue Processor","Alcohol 70-100%","Xylene","Paraffin Wax"],
          procedure:[
            "Dehydrate in 70%, 80%, 95%, 100% alcohol.",
            "Clear in 2 changes of xylene.",
            "Infiltrate in 3 changes of molten paraffin at 60°C.",
            "Embed in paraffin block."
          ],
          possibleResult:"Properly processed block: Hard, cuts well.\nPoor processing: Crumbly, holes.",
          normalRange:{note:"Technique"},
          safetyPrecautions:["Xylene is toxic","Use fume hood"],
          examTips:["Keyword: Dehydration-Clearing-Infiltration"],
          faqs:[{q:"Time?", a:"12-16 hours"}]
        },
        {
          id:"microtomy",
          title:"Microtomy and Sectioning",
          introduction:"Cutting 4-5µm sections from paraffin block.\n\nQuality of section determines diagnosis.\n\nDone on rotary microtome.",
          aim:"To obtain thin uniform sections for staining.",
          principle:"Paraffin block is trimmed and cut by steel blade. Ribbon is floated on warm water to remove wrinkles.",
          materials:["Microtome","Paraffin Block","Water Bath 45°C","Slides"],
          procedure:[
            "Trim block to expose tissue.",
            "Cut ribbon of 4µm sections.",
            "Float section on 45°C water bath.",
            "Mount on clean slide and dry."
          ],
          possibleResult:"Good section: Thin, no folds, no chatter.\nBad: Thick, wrinkles, knife marks.",
          normalRange:{note:"Technique"},
          safetyPrecautions:["Sharp blades","Cut away from hand"],
          examTips:["Water bath temp critical"],
          faqs:[{q:"Thickness?", a:"4-5µm"}]
        },
        {
          id:"he",
          title:"Hematoxylin and Eosin Staining",
          introduction:"H&E is the routine stain in histopathology. 90% of diagnoses are made on H&E.\n\nHematoxylin stains nuclei blue. Eosin stains cytoplasm pink.\n\nStudents must master timing for good differentiation.",
          aim:"To stain nuclei and cytoplasm for morphological study.",
          principle:"Hematoxylin is a basic dye that binds acidic DNA. Eosin is acidic and binds basic cytoplasmic proteins.",
          materials:["Hematoxylin","Eosin","Alcohol grades","Xylene","DPX"],
          procedure:[
            "Deparaffinize in xylene 5min.",
            "Hydrate through alcohols to water.",
            "Stain in Hematoxylin 5min.",
            "Wash and differentiate in 1% acid alcohol.",
            "Blue in running water.",
            "Counterstain in Eosin 1min.",
            "Dehydrate, clear, mount."
          ],
          possibleResult:"Nuclei: Blue.\nCytoplasm: Pink.\nRBCs: Orange-red.",
          normalRange:{note:"Descriptive"},
          safetyPrecautions:["Xylene fumes","Gloves"],
          examTips:["Keyword: Basophilic and Eosinophilic"],
          faqs:[{q:"Purpose of acid alcohol?", a:"Differentiation"}]
        },
        {
          id:"fnac",
          title:"Fine Needle Aspiration Cytology",
          introduction:"FNAC obtains cells from lump for rapid diagnosis.\n\nDone in OPD. No surgery needed.\n\nCritical skill for cytology posting.",
          aim:"To obtain cellular material for cytological diagnosis.",
          principle:"Cells are aspirated and smeared. Air-dried for MGG, wet-fixed for Pap.",
          materials:["Needle","Syringe","Slides","Stains"],
          procedure:[
            "Palpate lump and clean skin.",
            "Aspirate with 21G needle.",
            "Expel material on slide and make smear.",
            "Fix and stain."
          ],
          possibleResult:"Benign, Suspicious, Malignant.",
          normalRange:{note:"Descriptive"},
          safetyPrecautions:["Sharps injury risk"],
          examTips:["Multiple passes better"],
          faqs:[{q:"Best stain?", a:"MGG for air-dried"}]
        },
        {
          id:"ihc",
          title:"Immunohistochemistry",
          introduction:"IHC detects specific proteins using antibodies.\n\nUsed for tumor typing and prognosis.\n\nGold standard for receptor status.",
          aim:"To demonstrate specific antigen in tissue.",
          principle:"Primary antibody binds antigen. Secondary antibody with enzyme produces brown DAB color.",
          materials:["Primary Antibody","DAB","Microscope"],
          procedure:["Deparaffinize","Antigen retrieval","Block","Primary Ab","Secondary","DAB","Counterstain"],
          possibleResult:"Brown staining = Positive.",
          normalRange:{note:"Descriptive"},
          safetyPrecautions:["DAB is carcinogenic"],
          examTips:["Always run controls"],
          faqs:[{q:"Used for?", a:"ER, PR, HER2 in breast cancer"}]
        },
        {
          id:"frozen",
          title:"Frozen Section",
          introduction:"Rapid diagnosis during surgery. 15 minute turnaround.\n\nDone in cryostat.\n\nArtifacts are common.",
          aim:"To provide intraoperative diagnosis.",
          principle:"Tissue rapidly frozen and sectioned.",
          materials:["Cryostat","OCT","Tissue"],
          procedure:["Freeze tissue","Cut 5µm","Rapid H&E"],
          possibleResult:"Rapid diagnosis for surgeon.",
          normalRange:{note:"Technique"},
          safetyPrecautions:["Cold burns"],
          examTips:["Not for permanent diagnosis"],
          faqs:[{q:"Limitation?", a:"Artifact"}]
        },
        {
          id:"special",
          title:"Special Stain - PAS",
          introduction:"PAS stains carbohydrates and fungi.",
          aim:"To demonstrate glycogen and basement membrane.",
          principle:"Periodic acid oxidizes glycol to aldehyde. Reacts with Schiff to give magenta.",
          materials:["PAS Kit","Slides"],
          procedure:["Deparaffinize","Periodic acid","Schiff","Counterstain"],
          possibleResult:"Magenta = Positive.",
          normalRange:{note:"Descriptive"},
          safetyPrecautions:["Reagents"],
          examTips:["Used for fungi"],
          faqs:[{q:"What stains?", a:"Glycogen, mucin, basement membrane"}]
        },
        {
          id:"biopsy",
          title:"Biopsy Handling",
          introduction:"Proper handling of small tissue is crucial.",
          aim:"To process biopsy without artifact.",
          principle:"Gentle handling and immediate fixation.",
          materials:["Formalin","Cassette"],
          procedure:["Immediate fixation","Label","Process"],
          possibleResult:"Good tissue for diagnosis.",
          normalRange:{note:"Technique"},
          safetyPrecautions:["Gloves"],
          examTips:["Do not squeeze"],
          faqs:[{q:"Most important?", a:"Immediate fixation"}]
        },
        {
          id:"reporting",
          title:"Histopathology Reporting",
          introduction:"Final diagnosis integrating gross and microscopic findings.",
          aim:"To provide clinicopathological diagnosis.",
          principle:"Correlation of findings.",
          materials:["Microscope","Report Form"],
          procedure:["Scan","Describe","Diagnose","Comment"],
          possibleResult:"Benign or Malignant diagnosis.",
          normalRange:{note:"Descriptive"},
          safetyPrecautions:["N/A"],
          examTips:["Clinical correlation improves accuracy"],
          faqs:[{q:"Components?", a:"Gross, Microscopic, Diagnosis"}]
        }
      ],
      normalRanges:[{test:"All procedures", note:"No numerical range. Descriptive reporting"}],
      faqs:[{q:"Gold standard stain?", a:"H&E"}]
    },

    // ==================== UNIT 6: BLOOD TRANSFUSION SCIENCE ====================
    {
      id:"bloodbank",
      name:"Blood Transfusion Science",
      analyses:[
        {
          id:"abo",
          title:"ABO Blood Grouping",
          introduction:"ABO system is most important for transfusion.\n\nBased on A and B antigens on RBCs.\n\nMust do both cell and serum grouping.",
          aim:"To determine ABO blood group.",
          principle:"Antigen-antibody agglutination. Anti-A, Anti-B reagents.",
          materials:["Anti-A","Anti-B","Anti-AB","Patient Cells","Patient Serum"],
          procedure:["Cell grouping: Mix cells with antisera","Serum grouping: Mix serum with A and B cells","Read agglutination"],
          possibleResult:"Group A, B, AB, or O.",
          normalRange:{note:"No range. 4 groups"},
          safetyPrecautions:["Blood precautions"],
          examTips:["Cell and serum must agree"],
          faqs:[{q:"Bombay phenotype?", a:"No H antigen"}]
        },
        {
          id:"rh",
          title:"Rh D Typing",
          introduction:"D antigen is most immunogenic.\n\nRh negative mothers need anti-D.",
          aim:"To determine Rh status.",
          principle:"Anti-D causes agglutination if D present.",
          materials:["Anti-D","Cells"],
          procedure:["Mix","Incubate 37°C","Centrifuge","Read"],
          possibleResult:"Positive or Negative.",
          normalRange:{note:"Descriptive"},
          safetyPrecautions:["Gloves"],
          examTips:["Do weak D test"],
          faqs:[{q:"HDN cause?", a:"Rh incompatibility"}]
        },
        {
          id:"crossmatch",
          title:"Crossmatching",
          introduction:"Most important step before transfusion.\n\nPrevents transfusion reaction.",
          aim:"To check compatibility.",
          principle:"Donor cells + recipient serum.",
          materials:["Donor Cells","Recipient Serum"],
          procedure:["Major crossmatch","Incubate","Add Coombs","Read"],
          possibleResult:"Compatible or Incompatible.",
          normalRange:{all:"Compatible"},
          safetyPrecautions:["BSL-2"],
          examTips:["Major = Donor cells + Patient serum"],
          faqs:[{q:"Why?", a:"Detect unexpected antibodies"}]
        },
        {
          id:"antibody_screen",
          title:"Antibody Screening",
          introduction:"Detects irregular antibodies.",
          aim:"To screen patient serum.",
          principle:"Test against panel cells.",
          materials:["Panel Cells","Serum"],
          procedure:["Incubate","Wash","Coombs","Read"],
          possibleResult:"Positive or Negative.",
          normalRange:{all:"Negative"},
          safetyPrecautions:["Gloves"],
          examTips:["3 cell panel"],
          faqs:[{q:"If positive?", a:"Do antibody ID"}]
        },
        {
          id:"dat",
          title:"Direct Antiglobulin Test",
          introduction:"Detects antibodies on patient RBCs.",
          aim:"To diagnose immune hemolysis.",
          principle:"Coombs reagent binds IgG on RBCs.",
          materials:["Coombs Serum","Patient RBCs"],
          procedure:["Wash","Add Coombs","Centrifuge","Read"],
          possibleResult:"Positive in AIHA, HDN.",
          normalRange:{all:"Negative"},
          safetyPrecautions:["Blood safety"],
          examTips:["HDN marker"],
          faqs:[{q:"Indirect Coombs?", a:"Free antibodies"}]
        },
        {
          id:"titer",
          title:"Antibody Titer",
          introduction:"Measures antibody strength.",
          aim:"To quantify antibody.",
          principle:"Serial dilution.",
          materials:["Serum","Cells","Tubes"],
          procedure:["Make dilutions","Test each","Record last positive"],
          possibleResult:"Reported as dilution.",
          normalRange:{note:"Descriptive"},
          safetyPrecautions:["PPE"],
          examTips:["Used in HDN monitoring"],
          faqs:[{q:"Critical titer?", a:"1:16"}]
        },
        {
          id:"elution",
          title:"Elution Technique",
          introduction:"Removes antibody from RBCs.",
          aim:"To identify antibody specificity.",
          principle:"Heat releases antibody.",
          materials:["Elution Kit","RBCs"],
          procedure:["Heat","Centrifuge","Test eluate"],
          possibleResult:"Antibody identified.",
          normalRange:{note:"Technique"},
          safetyPrecautions:["Heat hazard"],
          examTips:["Autoantibody cases"],
          faqs:[{q:"Used when?", a:"Positive DAT"}]
        },
        {
          id:"storage",
          title:"Blood Component Storage",
          introduction:"Different components need different temps.",
          aim:"To maintain viability.",
          principle:"Cold for RBCs, room for platelets, frozen for FFP.",
          materials:["Fridge","Freezer"],
          procedure:["PRBC: 2-6°C","Platelets: 22°C","FFP: -18°C"],
          possibleResult:"Viable component.",
          normalRange:{prbc:"42 days"},
          safetyPrecautions:["Temp monitoring"],
          examTips:["Check temp twice daily"],
          faqs:[{q:"Shelf life PRBC?", a:"42 days"}]
        },
        {
          id:"reaction",
          title:"Investigation of Transfusion Reaction",
          introduction:"Urgent investigation.",
          aim:"To determine cause.",
          principle:"Repeat grouping and DAT.",
          materials:["Post-transfusion Sample"],
          procedure:["Stop transfusion","Send samples","Repeat tests"],
          possibleResult:"Hemolytic or Febrile reaction.",
          normalRange:{note:"None expected"},
          safetyPrecautions:["Urgent"],
          examTips:["Most due to clerical error"],
          faqs:[{q:"First step?", a:"Stop transfusion"}]
        },
        {
          id:"donor_screen",
          title:"Donor Blood Screening",
          introduction:"Ensures safe blood.",
          aim:"To screen for TTIs.",
          principle:"Test for HIV, HBV, HCV, Syphilis.",
          materials:["Donor Blood","Test Kits"],
          procedure:["Collect","Test","Label"],
          possibleResult:"Non-reactive.",
          normalRange:{all:"Non-reactive"},
          safetyPrecautions:["BSL-2"],
          examTips:["Window period risk"],
          faqs:[{q:"4 mandatory tests?", a:"HIV, HBV, HCV, Syphilis"}]
        }
      ],
      normalRanges:[
        {test:"Crossmatch", all:"Compatible"},
        {test:"Antibody Screen", all:"Negative"},
        {test:"DAT", all:"Negative"},
        {test:"Donor Screen", all:"Non-reactive"},
        {test:"PRBC Storage", all:"42 days at 2-6°C"}
      ],
      faqs:[{q:"Most important pre-transfusion test?", a:"Crossmatch"}]
    },

    // ==================== UNIT 7: VIROLOGY ====================
    {
      id:"virology",
      name:"Virology",
      analyses:[
        {
          id:"hiv_elisa",
          title:"HIV ELISA Test",
          introduction:"Confirmatory test for HIV. More sensitive than rapid.\n\nUses antigen-antibody reaction.",
          aim:"To detect HIV antibodies/antigen.",
          principle:"Enzyme linked immunosorbent assay. Color change measured.",
          materials:["ELISA Kit","ELISA Reader","Serum"],
          procedure:["Add serum","Incubate","Wash","Add conjugate","Add substrate","Read 450nm"],
          possibleResult:"OD > Cutoff = Reactive.",
          normalRange:{all:"Non-reactive"},
          safetyPrecautions:["BSL-2"],
          examTips:["4th gen tests detect p24"],
          faqs:[{q:"Window?", a:"2-4 weeks"}]
        },
        {
          id:"hbv_dna",
          title:"HBV Viral Load - PCR",
          introduction:"Quantifies HBV DNA. Monitors treatment.",
          aim:"To measure viral load.",
          principle:"Real-time PCR amplifies DNA.",
          materials:["PCR Kit","Extractor"],
          procedure:["Extract DNA","Run PCR","Analyze Ct"],
          possibleResult:"Reported as IU/mL.",
          normalRange:{all:"Undetectable"},
          safetyPrecautions:["Avoid contamination"],
          examTips:["Gold standard for monitoring"],
          faqs:[{q:"Used for?", a:"Treatment response"}]
        },
        {
          id:"hcv_antibody",
          title:"HCV Antibody Test",
          introduction:"Screens for Hepatitis C.",
          aim:"To detect anti-HCV.",
          principle:"Immunoassay.",
          materials:["HCV Kit","Serum"],
          procedure:["Add serum","Incubate","Wash","Read"],
          possibleResult:"Reactive needs PCR confirmation.",
          normalRange:{all:"Non-reactive"},
          safetyPrecautions:["Blood precautions"],
          examTips:["PCR confirms"],
          faqs:[{q:"Acute vs Chronic?", a:"PCR distinguishes"}]
        },
        {
          id:"dengue",
          title:"Dengue NS1 Antigen",
          introduction:"Detects acute dengue. First 7 days.",
          aim:"To detect NS1 antigen.",
          principle:"Immunochromatography.",
          materials:["RDT Kit","Serum"],
          procedure:["Add serum","Add buffer","Read 15min"],
          possibleResult:"Line = Positive.",
          normalRange:{all:"Negative"},
          safetyPrecautions:["PPE"],
          examTips:["Best in first week"],
          faqs:[{q:"IgM vs NS1?", a:"NS1 early"}]
        },
        {
          id:"rotavirus",
          title:"Rotavirus Antigen",
          introduction:"Cause of diarrhea in children <5.",
          aim:"To detect rotavirus.",
          principle:"Lateral flow.",
          materials:["Kit","Stool"],
          procedure:["Mix stool","Add to device","Read 10min"],
          possibleResult:"2 lines = Positive.",
          normalRange:{all:"Negative"},
          safetyPrecautions:["BSL-2"],
          examTips:["Common in kids"],
          faqs:[{q:"Sample?", a:"Stool"}]
        },
        {
          id:"covid_pcr",
          title:"SARS-CoV-2 RT-PCR",
          introduction:"Gold standard for COVID diagnosis.",
          aim:"To detect SARS-CoV-2 RNA.",
          principle:"RT-PCR amplifies viral RNA.",
          materials:["VTM","Swab","PCR Kit"],
          procedure:["Collect NP swab","Extract RNA","RT-PCR"],
          possibleResult:"Detected or Not detected.",
          normalRange:{all:"Not detected"},
          safetyPrecautions:["BSL-2","PPE"],
          examTips:["NP swab best"],
          faqs:[{q:"Ct value?", a:"Lower = higher viral load"}]
        },
        {
          id:"influenza",
          title:"Influenza Rapid Test",
          introduction:"Detects Flu A and B.",
          aim:"To diagnose influenza.",
          principle:"Antigen detection.",
          materials:["Flu Kit","Swab"],
          procedure:["Collect swab","Add to device","Read 10min"],
          possibleResult:"A line or B line.",
          normalRange:{all:"Negative"},
          safetyPrecautions:["PPE"],
          examTips:["Best in 48hrs"],
          faqs:[{q:"Season?", a:"Winter"}]
        },
        {
          id:"measles",
          title:"Measles IgM",
          introduction:"Diagnoses recent measles.",
          aim:"To detect measles IgM.",
          principle:"ELISA.",
          materials:["IgM Kit","Serum"],
          procedure:["Add serum","Incubate","Read"],
          possibleResult:"Positive = Recent infection.",
          normalRange:{all:"Negative"},
          safetyPrecautions:["Gloves"],
          examTips:["Collect 3 days post rash"],
          faqs:[{q:"IgG?", a:"Past immunity"}]
        },
        {
          id:"herpes",
          title:"HSV PCR",
          introduction:"Detects HSV DNA.",
          aim:"To diagnose HSV.",
          principle:"PCR.",
          materials:["PCR Kit","Swab"],
          procedure:["Extract DNA","Run PCR"],
          possibleResult:"Detected or Not.",
          normalRange:{all:"Not detected"},
          safetyPrecautions:["BSL-2"],
          examTips:["CSF for encephalitis"],
          faqs:[{q:"Sample?", a:"Lesion swab or CSF"}]
        },
        {
          id:"yellow_fever",
          title:"Yellow Fever IgM",
          introduction:"Confirms yellow fever.",
          aim:"To detect YF IgM.",
          principle:"ELISA.",
          materials:["IgM Kit","Serum"],
          procedure:["Add serum","Incubate","Read"],
          possibleResult:"Positive or Negative.",
          normalRange:{all:"Negative"},
          safetyPrecautions:["BSL-2"],
          examTips:["Cross-reacts with dengue"],
          faqs:[{q:"Vaccine?", a:"Causes IgM"}]
        }
      ],
      normalRanges:[
        {test:"HIV ELISA", all:"Non-reactive"},
        {test:"HBV DNA", all:"Undetectable"},
        {test:"HCV Ab", all:"Non-reactive"},
        {test:"Dengue NS1", all:"Negative"},
        {test:"COVID PCR", all:"Not detected"}
      ],
      faqs:[{q:"Gold standard for COVID?", a:"RT-PCR"}]
    }
  ]
},
      // ==================== UNIT 8: CYTOLOGY ====================
    {
      id:"cytology",
      name:"Cytology",
      analyses:[
        {
          id:"pap",
          title:"Pap Smear - Cervical Cytology",
          introduction:"Pap smear screens for cervical cancer and precancerous lesions.\n\nIt is the most successful cancer screening test in history. It detects dysplasia before it becomes cancer.\n\nPerformed by collecting cells from transformation zone of cervix.\n\nIn MLS, students must learn proper sampling, fixation, and Bethesda reporting.",
          aim:"To detect abnormal cervical cells and precancerous lesions.",
          principle:"Cells are collected, fixed, and stained with Papanicolaou stain. Nuclear and cytoplasmic changes are assessed microscopically.",
          materials:["Speculum","Ayre Spatula","Endocervical Brush","Slides","95% Alcohol","Pap Stain"],
          procedure:[
            "Insert speculum and visualize cervix.",
            "Collect cells from ectocervix with spatula.",
            "Collect cells from endocervix with brush.",
            "Smear cells thinly on slide.",
            "Fix immediately in 95% alcohol for 15 minutes.",
            "Stain with Pap stain and mount."
          ],
          possibleResult:"NILM: Negative for intraepithelial lesion.\nLSIL: Low grade squamous intraepithelial lesion.\nHSIL: High grade lesion. Requires colposcopy.\nMalignant: Cancer cells present.",
          normalRange:{all:"Negative for intraepithelial lesion"},
          safetyPrecautions:["Gloves","Dispose sharps","Fix immediately to prevent air drying artifact"],
          examTips:["Keyword: Bethesda System","Common mistake: Air drying","Best time: Mid-cycle"],
          faqs:[{q:"How often?", a:"Every 3 years after 2 normal tests"}]
        },
        {
          id:"fnac_breast",
          title:"FNAC Breast Lump",
          introduction:"FNAC is rapid method to diagnose breast lumps.\n\nAvoids unnecessary surgery. Can differentiate benign vs malignant.\n\nDone under ultrasound guidance for small lesions.",
          aim:"To obtain cells from breast lump for cytological diagnosis.",
          principle:"Cells aspirated with fine needle and examined after staining.",
          materials:["Needle","Syringe","Slides","MGG Stain","USG Machine"],
          procedure:[
            "Palpate lump and clean skin.",
            "Insert needle and aspirate while moving needle.",
            "Expel material on slide and make smear.",
            "Air dry one slide and alcohol fix another.",
            "Stain and examine."
          ],
          possibleResult:"Benign: Fibroadenoma, Fibrocystic change.\nSuspicious: Atypical cells.\nMalignant: Ductal carcinoma cells.",
          normalRange:{note:"Descriptive"},
          safetyPrecautions:["Sharps safety","Multiple passes increase yield"],
          examTips:["Keyword: Cellular yield","Common mistake: Blood only aspirate"],
          faqs:[{q:"Best stain?", a:"MGG for air-dried"}]
        },
        {
          id:"sputum_cyto",
          title:"Sputum Cytology",
          introduction:"Screens for lung cancer. Detects malignant cells in sputum.\n\n3 consecutive morning samples increase yield.\n\nImportant in smokers.",
          aim:"To detect malignant cells in sputum.",
          principle:"Sputum cells are smeared and stained to look for malignant features.",
          materials:["Sputum Container","Slides","Stain"],
          procedure:[
            "Collect early morning deep cough sputum for 3 days.",
            "Select purulent part and make smear.",
            "Fix and stain with Pap or MGG.",
            "Examine under microscope."
          ],
          possibleResult:"Negative: No malignant cells.\nPositive: Malignant cells seen. Type: Squamous, Adeno.",
          normalRange:{all:"Negative"},
          safetyPrecautions:["BSL-2","TB precautions"],
          examTips:["Reject saliva","Keyword: Malignant criteria"],
          faqs:[{q:"Yield?", a:"60-80% for central tumors"}]
        },
        {
          id:"urine_cyto",
          title:"Urine Cytology",
          introduction:"Screens for bladder and urinary tract cancer.\n\nFirst morning urine has highest cellularity.\n\nUsed to monitor bladder cancer patients.",
          aim:"To detect malignant urothelial cells in urine.",
          principle:"Urine is centrifuged and sediment examined.",
          materials:["Urine","Centrifuge","Slides","Stain"],
          procedure:[
            "Collect 50mL first morning urine.",
            "Centrifuge at 2000rpm for 5min.",
            "Make smear from sediment.",
            "Fix and stain."
          ],
          possibleResult:"Negative: No malignant cells.\nPositive: Transitional cell carcinoma cells.",
          normalRange:{all:"Negative"},
          safetyPrecautions:["PPE"],
          examTips:["High grade tumors shed more cells"],
          faqs:[{q:"Best sample?", a:"First morning"}]
        },
        {
          id:"csf_cyto",
          title:"CSF Cytology",
          introduction:"Detects CNS malignancy and meningitis.\n\nMust be processed immediately as cells degenerate.\n\nCritical in leukemia CNS involvement.",
          aim:"To detect malignant cells in CSF.",
          principle:"CSF centrifuged and cells examined.",
          materials:["CSF","Centrifuge","Slides"],
          procedure:["Centrifuge CSF","Make smear","Stain","Examine"],
          possibleResult:"Negative: No malignant cells.\nPositive: Leukemic cells, carcinoma cells.",
          normalRange:{all:"No malignant cells"},
          safetyPrecautions:["BSL-2","Process immediately"],
          examTips:["Urgent processing"],
          faqs:[{q:"Volume needed?", a:"At least 3mL"}]
        },
        {
          id:"pleural",
          title:"Pleural Fluid Cytology",
          introduction:"Analyzes pleural effusion for malignancy.\n\nCommon in lung and breast cancer metastasis.\n\nLarge volume increases yield.",
          aim:"To detect malignant cells in pleural fluid.",
          principle:"Fluid centrifuged and cells examined.",
          materials:["Pleural Fluid","Centrifuge"],
          procedure:["Centrifuge","Make smear","Stain"],
          possibleResult:"Adenocarcinoma cells, Mesothelioma cells.",
          normalRange:{all:"Mesothelial cells only"},
          safetyPrecautions:["PPE"],
          examTips:["Large volume = 50mL"],
          faqs:[{q:"Transudate vs Exudate?", a:"Protein and LDH"}]
        },
        {
          id:"ascitic",
          title:"Ascitic Fluid Cytology",
          introduction:"Detects peritoneal malignancy.\n\nCommon in ovarian and GI cancers.",
          aim:"To detect malignant cells in ascites.",
          principle:"Centrifuged fluid examined.",
          materials:["Ascitic Fluid","Centrifuge"],
          procedure:["Centrifuge","Smear","Stain"],
          possibleResult:"Adenocarcinoma cells.",
          normalRange:{all:"Mesothelial cells"},
          safetyPrecautions:["PPE"],
          examTips:["Look for cell clusters"],
          faqs:[{q:"SAAG?", a:"Serum-ascites albumin gradient"}]
        },
        {
          id:"thyroid_fnac",
          title:"Thyroid FNAC",
          introduction:"Classifies thyroid nodules.\n\nAvoids unnecessary thyroidectomy.\n\nUSG guided for small nodules.",
          aim:"To classify thyroid nodule cytologically.",
          principle:"Aspiration of thyroid cells.",
          materials:["Needle","Slides","USG"],
          procedure:["USG guidance","Aspirate","Smear","Stain"],
          possibleResult:"Benign, Follicular, Suspicious, Malignant.",
          normalRange:{note:"Descriptive"},
          safetyPrecautions:["Avoid carotid"],
          examTips:["Bethesda for thyroid"],
          faqs:[{q:"Follicular needs histology?", a:"Yes, for capsular invasion"}]
        },
        {
          id:"saliva",
          title:"Salivary Gland FNAC",
          introduction:"Evaluates salivary gland swelling.\n\nDifferentiates tumor types.",
          aim:"To diagnose salivary gland tumors.",
          principle:"Aspiration cytology.",
          materials:["Needle","Slides"],
          procedure:["Aspirate","Smear","Stain"],
          possibleResult:"Pleomorphic adenoma, Warthin tumor, Malignant.",
          normalRange:{note:"Descriptive"},
          safetyPrecautions:["Avoid facial nerve"],
          examTips:["Keyword: Pleomorphic adenoma"],
          faqs:[{q:"Common tumor?", a:"Pleomorphic adenoma"}]
        },
        {
          id:"bone_marrow",
          title:"Bone Marrow Aspirate Cytology",
          introduction:"Examines bone marrow for hematologic disorders.\n\nGold standard for leukemia diagnosis.\n\nDone from posterior iliac crest.",
          aim:"To assess marrow cellularity and blast percentage.",
          principle:"Marrow aspirated and stained to count cells.",
          materials:["Bone Marrow Needle","Slides","Stain"],
          procedure:["Aspirate marrow","Make smear","Stain","Count 500 cells"],
          possibleResult:"Normal: <5% blasts.\nLeukemia: >20% blasts.",
          normalRange:{blasts:"<5%"},
          safetyPrecautions:["Asepsis","Pain management"],
          examTips:["Keyword: Blast percentage"],
          faqs:[{q:"Trephine vs Aspirate?", a:"Trephine for cellularity"}]
        }
      ],
      normalRanges:[
        {test:"Pap Smear", all:"NILM"},
        {test:"Urine Cytology", all:"Negative"},
        {test:"CSF Cytology", all:"No malignant cells"},
        {test:"Bone Marrow Blasts", all:"<5%"}
      ],
      faqs:[{q:"Best fixative for Pap?", a:"95% Alcohol"}]
    },

    // ==================== UNIT 9: PARASITOLOGY ====================
    {
      id:"parasitology",
      name:"Parasitology",
      analyses:[
        {
          id:"stool_ova",
          title:"Stool Ova and Parasite Examination",
          introduction:"Detects intestinal parasites. Major cause of morbidity in tropics.\n\n3 samples on alternate days increase yield.\n\nDirect smear and concentration methods used.",
          aim:"To identify ova, cysts and trophozoites in stool.",
          principle:"Microscopy of saline and iodine wet mounts. Parasites identified by morphology.",
          materials:["Fresh Stool","Slide","Saline","Iodine","Microscope"],
          procedure:[
            "Make saline preparation: mix stool with saline.",
            "Make iodine preparation.",
            "Examine under 10x and 40x objective.",
            "Report parasites seen."
          ],
          possibleResult:"Ascaris ova, Hookworm ova, Giardia cyst, Entamoeba histolytica trophozoite.",
          normalRange:{all:"No parasite seen"},
          safetyPrecautions:["BSL-2","Hand washing","Disinfect bench"],
          examTips:["Keyword: Ova vs Cyst vs Troph","Common mistake: Old sample"],
          faqs:[{q:"Best sample?", a:"Fresh, unpreserved"}]
        },
        {
          id:"thick_malaria",
          title:"Thick Blood Film for Malaria",
          introduction:"Concentrates blood to detect malaria parasites.\n\nMore sensitive than thin film.\n\nUsed for parasite count.",
          aim:"To detect and quantify malaria parasites.",
          principle:"RBCs lyse, parasites concentrated. Stained with Giemsa.",
          materials:["Slide","Giemsa","Finger Prick Blood"],
          procedure:[
            "Make thick smear.",
            "Air dry without fixing.",
            "Stain 10min with 10% Giemsa.",
            "Examine 100x oil. Count parasites per 200 WBCs."
          ],
          possibleResult:"P.falciparum, P.vivax seen.\nReported as + to +++ or parasites/µL.",
          normalRange:{all:"No parasite seen"},
          safetyPrecautions:["Gloves"],
          examTips:["Keyword: Parasite density","Do not fix thick film"],
          faqs:[{q:"Why not fix?", a:"To lyse RBCs"}]
        },
        {
          id:"thin_malaria",
          title:"Thin Blood Film for Malaria",
          introduction:"Identifies Plasmodium species.\n\nMorphology of parasite in RBC needed.\n\nAlways done with thick film.",
          aim:"To speciate malaria parasite.",
          principle:"Intact RBCs allow morphological identification.",
          materials:["Slide","Methanol","Giemsa","Blood"],
          procedure:[
            "Make thin smear.",
            "Fix with methanol.",
            "Stain 20min.",
            "Examine for species features."
          ],
          possibleResult:"P.falciparum: Ring forms, gametocytes.\nP.vivax: Enlarged RBCs, Schüffner dots.",
          normalRange:{all:"Negative"},
          safetyPrecautions:["Gloves"],
          examTips:["Fix before staining"],
          faqs:[{q:"Difference from thick?", a:"Species ID"}]
        },
        {
          id:"urine_schisto",
          title:"Urine for Schistosoma haematobium",
          introduction:"Diagnoses urinary schistosomiasis.\n\nCommon in endemic areas.\n\nEggs cause hematuria.",
          aim:"To find S.haematobium eggs in urine.",
          principle:"Eggs seen in centrifuged urine sediment.",
          materials:["Urine","Centrifuge","Slide"],
          procedure:[
            "Collect terminal urine 10am-2pm.",
            "Centrifuge.",
            "Examine sediment for eggs."
          ],
          possibleResult:"Eggs with terminal spine seen.",
          normalRange:{all:"No eggs"},
          safetyPrecautions:["PPE"],
          examTips:["Terminal spine = S.haematobium"],
          faqs:[{q:"Best time?", a:"10am-2pm"}]
        },
        {
          id:"stool_concentration",
          title:"Formalin-Ether Concentration",
          introduction:"Increases detection of parasites 10x.\n\nRemoves debris and concentrates ova.",
          aim:"To concentrate ova and cysts.",
          principle:"Ether extracts fat. Centrifugation sediments parasites.",
          materials:["Formalin","Ether","Stool","Tube"],
          procedure:["Mix stool with formalin","Add ether","Centrifuge","Examine sediment"],
          possibleResult:"Higher yield than direct.",
          normalRange:{all:"Negative"},
          safetyPrecautions:["Ether is flammable","Fume hood"],
          examTips:["More sensitive"],
          faqs:[{q:"When to use?", a:"Low parasite load"}]
        },
        {
          id:"tape_test",
          title:"Scotch Tape Test",
          introduction:"Diagnoses Enterobius vermicularis.\n\nEggs laid on perianal skin at night.",
          aim:"To detect pinworm eggs.",
          principle:"Eggs collected on tape and examined.",
          materials:["Clear Tape","Slide","Microscope"],
          procedure:["Press tape to perianal area on waking","Mount on slide","Examine"],
          possibleResult:"Enterobius eggs seen.",
          normalRange:{all:"Negative"},
          safetyPrecautions:["Hygiene"],
          examTips:["Before bathing"],
          faqs:[{q:"Why morning?", a:"Eggs laid at night"}]
        },
        {
          id:"wet_mount",
          title:"Vaginal Wet Mount",
          introduction:"Examines vaginal discharge.\n\nDetects Trichomonas and Candida.\n\nRapid bedside test.",
          aim:"To detect Trichomonas and yeast.",
          principle:"Direct microscopy of vaginal fluid.",
          materials:["Swab","Slide","Saline","Microscope"],
          procedure:["Mix swab with saline","Cover slip","Examine immediately"],
          possibleResult:"T.vaginalis: Motile flagellates.\nYeast: Budding cells.",
          normalRange:{all:"Lactobacilli only"},
          safetyPrecautions:["Gloves"],
          examTips:["Examine within 10min"],
          faqs:[{q:"Motility important?", a:"Yes for Trichomonas"}]
        },
        {
          id:"blood_filaria",
          title:"Blood Film for Microfilaria",
          introduction:"Diagnoses lymphatic filariasis.\n\nW.bancrofti microfilaria are nocturnal.",
          aim:"To detect microfilaria in blood.",
          principle:"Thick film collected at night.",
          materials:["Slide","Giemsa","Blood"],
          procedure:["Collect blood 10pm-2am","Make thick film","Stain"],
          possibleResult:"W.bancrofti microfilaria seen.",
          normalRange:{all:"Negative"},
          safetyPrecautions:["Gloves"],
          examTips:["Nocturnal periodicity"],
          faqs:[{q:"Why night?", a:"Vector feeds at night"}]
        },
        {
          id:"skin_snip",
          title:"Skin Snip for Onchocerca",
          introduction:"Diagnoses river blindness.\n\nSkin snip incubated in saline.",
          aim:"To detect O.volvulus microfilaria.",
          principle:"Microfilaria emerge from skin in saline.",
          materials:["Scalpel","Saline","Microscope"],
          procedure:["Take skin snip","Incubate in saline","Examine for mf"],
          possibleResult:"O.volvulus microfilaria seen.",
          normalRange:{all:"Negative"},
          safetyPrecautions:["Sharps"],
          examTips:["Site: Iliac crest"],
          faqs:[{q:"Disease?", a:"Onchocerciasis"}]
        },
        {
          id:"toxo_serology",
          title:"Toxoplasma IgG/IgM",
          introduction:"Important in pregnancy.\n\nIgM = recent infection.\n\nCan cause congenital defects.",
          aim:"To diagnose toxoplasmosis.",
          principle:"ELISA detects IgG and IgM antibodies.",
          materials:["Toxo ELISA Kit","Serum"],
          procedure:["Add serum","Incubate","Wash","Read"],
          possibleResult:"IgM+ = Recent. IgG+ = Past.",
          normalRange:{all:"Negative"},
          safetyPrecautions:["PPE"],
          examTips:["Avidity test for timing"],
          faqs:[{q:"Risk in pregnancy?", a:"Congenital toxoplasmosis"}]
        }
      ],
      normalRanges:[
        {test:"Stool O&P", all:"No parasite seen"},
        {test:"Malaria Film", all:"No parasite seen"},
        {test:"Urine Schisto", all:"No eggs"},
        {test:"Tape Test", all:"Negative"},
        {test:"Vaginal Wet Mount", all:"Lactobacilli only"},
        {test:"Blood Filaria", all:"Negative"},
        {test:"Toxo Serology", all:"Negative"}
      ],
      faqs:[{q:"3 stool samples why?", a:"Intermittent shedding"}]
    }
  ]
          },
      // ==================== UNIT 10: CHEMICAL PATHOLOGY ====================
    {
      id:"chempath",
      name:"Chemical Pathology",
      analyses:[
        {
          id:"lft",
          title:"Liver Function Test - LFT",
          introduction:"LFT assesses liver synthetic, excretory and metabolic function.\n\nIncludes ALT, AST, ALP, Bilirubin, Total Protein, Albumin.\n\nUsed in hepatitis, cirrhosis, drug toxicity, and jaundice workup.\n\nIn MLS, LFT teaches students enzyme kinetics and liver physiology.",
          aim:"To measure liver enzymes, bilirubin and proteins to assess liver function.",
          principle:"ALT/AST: Kinetic UV method. ALP: p-nitrophenyl phosphate. Bilirubin: Diazotization. Protein: Biuret. Albumin: BCG dye binding.",
          materials:["LFT Reagent Kit","Serum","Spectrophotometer","Cuvettes"],
          procedure:[
            "Collect venous blood and separate serum.",
            "Pipette serum and reagents as per kit insert.",
            "Incubate at 37°C.",
            "Read absorbance at specific wavelength.",
            "Calculate concentration from standard."
          ],
          possibleResult:"High ALT/AST: Hepatocellular damage.\nHigh ALP + Bilirubin: Cholestasis.\nLow Albumin: Chronic liver disease, malnutrition.",
          normalRange:{alt:"<40 IU/L", ast:"<40 IU/L", alp:"40-120 IU/L", tbili:"<1.2 mg/dL", tprotein:"6-8 g/dL", albumin:"3.5-5.0 g/dL"},
          safetyPrecautions:["Wear PPE","Dispose reagents properly"],
          examTips:["Keyword: AST:ALT >2 = Alcoholic","ALP + Bilirubin = Cholestasis"],
          faqs:[{q:"Most specific for liver?", a:"ALT"}]
        },
        {
          id:"rft",
          title:"Renal Function Test - RFT",
          introduction:"RFT evaluates kidney filtration and waste excretion.\n\nIncludes Urea, Creatinine, Uric Acid, Electrolytes.\n\nCreatinine is the best marker of GFR.\n\nCritical for drug dosing and dialysis monitoring.",
          aim:"To assess kidney function by measuring waste products.",
          principle:"Urea: Urease method. Creatinine: Jaffe reaction. Electrolytes: ISE.",
          materials:["RFT Kit","ISE Machine","Serum"],
          procedure:["Collect serum","Run on analyzer","Record results"],
          possibleResult:"High Urea/Creatinine: Renal failure.\nHigh K: Risk of arrhythmia.\nLow Na: SIADH, dehydration.",
          normalRange:{urea:"15-40 mg/dL", creatinine_male:"0.7-1.3 mg/dL", creatinine_female:"0.6-1.1 mg/dL", uric_acid_male:"3.5-7.0 mg/dL", uric_acid_female:"2.5-6.0 mg/dL"},
          safetyPrecautions:["Universal precautions"],
          examTips:["Keyword: GFR","BUN:Creat >20:1 = Pre-renal"],
          faqs:[{q:"Better than urea?", a:"Creatinine"}]
        },
        {
          id:"lipid",
          title:"Lipid Profile",
          introduction:"Assesses cardiovascular risk.\n\nIncludes TC, TG, HDL, LDL, VLDL.\n\nUsed in diabetes, obesity, and cardiac risk assessment.\n\nFasting sample is critical for TG.",
          aim:"To measure blood lipids and calculate cardiovascular risk.",
          principle:"Enzymatic colorimetric method. LDL = TC - HDL - TG/5",
          materials:["Lipid Kit","Fasting Serum","Spectro"],
          procedure:["12hr fasting sample","Add reagents","Incubate","Read"],
          possibleResult:"High LDL: Atherosclerosis risk.\nLow HDL: Risk factor.\nHigh TG: Pancreatitis risk.",
          normalRange:{tc:"<200 mg/dL", tg:"<150 mg/dL", hdl_male:">40 mg/dL", hdl_female:">50 mg/dL", ldl:"<100 mg/dL"},
          safetyPrecautions:["PPE"],
          examTips:["Fasting 9-12hrs","Keyword: Friedewald formula"],
          faqs:[{q:"Non-fasting ok?", a:"Only for TC and HDL"}]
        },
        {
          id:"fbg",
          title:"Fasting Blood Glucose",
          introduction:"Screens for diabetes mellitus.\n\nFasting = 8-12 hours no calories.\n\nGold standard for diabetes diagnosis.",
          aim:"To determine plasma glucose concentration.",
          principle:"GOD-POD method produces colored dye measured at 500nm.",
          materials:["Glucose Kit","Fluoride Tube","Spectro"],
          procedure:["Collect fasting blood","Separate plasma","Mix with reagent","Incubate","Read"],
          possibleResult:"Normal: 70-100.\nImpaired: 101-125.\nDiabetic: >126 on 2 occasions.",
          normalRange:{fasting:"70-100 mg/dL", impaired:"101-125 mg/dL", diabetic:">126 mg/dL"},
          safetyPrecautions:["Sharps disposal"],
          examTips:["Use fluoride tube","Keyword: ADA criteria"],
          faqs:[{q:"Why fluoride?", a:"Prevents glycolysis"}]
        },
        {
          id:"hba1c",
          title:"Glycated Hemoglobin HbA1c",
          introduction:"Reflects average blood glucose over 3 months.\n\nNot affected by recent meals.\n\nUsed to monitor diabetic control.",
          aim:"To monitor long term glycemic control.",
          principle:"HbA1c is glucose bound to Hb. Measured by HPLC or immunoassay.",
          materials:["EDTA Blood","HbA1c Analyzer"],
          procedure:["Collect EDTA blood","Load on analyzer","Run test"],
          possibleResult:"Normal: <5.7%.\nPre-diabetic: 5.7-6.4%.\nDiabetic: >6.5%.",
          normalRange:{normal:"<5.7%", prediabetic:"5.7-6.4%", diabetic:">6.5%"},
          safetyPrecautions:["Blood safety"],
          examTips:["120 days RBC lifespan","Keyword: Glycated"],
          faqs:[{q:"Advantage over FBG?", a:"No fasting needed"}]
        },
        {
          id:"electrolytes",
          title:"Serum Electrolytes",
          introduction:"Na, K, Cl, HCO3 maintain fluid and acid-base balance.\n\nCritical values need urgent reporting.\n\nHemolysis causes pseudohyperkalemia.",
          aim:"To measure electrolyte levels.",
          principle:"Ion Selective Electrode measures ion activity.",
          materials:["ISE Analyzer","Serum"],
          procedure:["Load sample","Calibrate","Run"],
          possibleResult:"High K: Cardiac arrest risk.\nLow Na: Cerebral edema.\nLow HCO3: Metabolic acidosis.",
          normalRange:{na:"135-145 mmol/L", k:"3.5-5.0 mmol/L", cl:"98-106 mmol/L", hco3:"22-28 mmol/L"},
          safetyPrecautions:["Machine safety"],
          examTips:["Critical K >6.5 or <2.5","Keyword: ISE"],
          faqs:[{q:"Cause of pseudohyperkalemia?", a:"Hemolysis"}]
        },
        {
          id:"cardiac",
          title:"Cardiac Troponin I",
          introduction:"Most specific marker for myocardial injury.\n\nRises 3-6hrs, peaks 24hrs, stays 14 days.\n\nGold standard for MI diagnosis.",
          aim:"To diagnose acute myocardial infarction.",
          principle:"Immunoassay. Antibodies bind to cardiac troponin I.",
          materials:["Troponin Kit","Serum"],
          procedure:["Add serum to cassette","Wait 15min","Read"],
          possibleResult:"Positive: Myocardial injury.\nNegative: No MI.",
          normalRange:{all:"<0.04 ng/mL"},
          safetyPrecautions:["PPE"],
          examTips:["Keyword: Cardiac specific","Rises before CK-MB"],
          faqs:[{q:"Why better than CK-MB?", a:"More specific and longer"}]
        },
        {
          id:"thyroid",
          title:"Thyroid Function Test - TFT",
          introduction:"T3, T4, TSH assess thyroid status.\n\nTSH is first line test.\n\nUsed in hypothyroidism, hyperthyroidism.",
          aim:"To measure thyroid hormones.",
          principle:"Competitive chemiluminescent immunoassay.",
          materials:["TFT Kit","Serum","Analyzer"],
          procedure:["Add serum","Incubate","Wash","Read luminescence"],
          possibleResult:"High TSH + Low T4: Hypothyroidism.\nLow TSH + High T4: Hyperthyroidism.",
          normalRange:{tsh:"0.4-4.0 µIU/mL", ft4:"0.8-1.8 ng/dL", ft3:"2.3-4.2 pg/mL"},
          safetyPrecautions:["Gloves"],
          examTips:["TSH first line","Keyword: Feedback mechanism"],
          faqs:[{q:"Free vs Total?", a:"Free is active"}]
        },
        {
          id:"calcium",
          title:"Serum Calcium",
          introduction:"Important for nerve, muscle and bone.\n\n50% bound to albumin. Must correct for low albumin.\n\nCritical in tetany and cardiac function.",
          aim:"To measure total and ionized calcium.",
          principle:"Forms colored complex with cresolphthalein.",
          materials:["Calcium Kit","Serum"],
          procedure:["Mix","Incubate","Read 570nm"],
          possibleResult:"High: Hyperparathyroidism, malignancy.\nLow: Hypoparathyroidism, Vitamin D deficiency.",
          normalRange:{total:"8.5-10.5 mg/dL", ionized:"4.6-5.3 mg/dL"},
          safetyPrecautions:["Reagent caution"],
          examTips:["Corrected Ca = Ca + 0.8(4-Alb)"],
          faqs:[{q:"Ionized vs Total?", a:"Ionized is active"}]
        },
        {
          id:"amylase_lipase",
          title:"Serum Amylase and Lipase",
          introduction:"Pancreatic enzymes elevated in pancreatitis.\n\nLipase is more specific and stays elevated longer.\n\nAmylase also in salivary glands.",
          aim:"To measure pancreatic enzymes.",
          principle:"Amylase: Hydrolysis of starch. Lipase: Hydrolysis of triglyceride.",
          materials:["Amylase/Lipase Kit","Serum"],
          procedure:["Mix","Incubate","Read"],
          possibleResult:"High: Acute pancreatitis.\nNormal: Rules out pancreatitis.",
          normalRange:{amylase:"30-110 IU/L", lipase:"10-140 IU/L"},
          safetyPrecautions:["PPE"],
          examTips:["Lipase >3x normal = Pancreatitis","Keyword: More specific"],
          faqs:[{q:"Which is better?", a:"Lipase"}]
        }
      ],
      normalRanges:[
        {test:"ALT", all:"<40 IU/L"},
        {test:"AST", all:"<40 IU/L"},
        {test:"ALP", all:"40-120 IU/L"},
        {test:"Total Bilirubin", all:"<1.2 mg/dL"},
        {test:"Total Protein", all:"6-8 g/dL"},
        {test:"Albumin", all:"3.5-5.0 g/dL"},
        {test:"Urea", all:"15-40 mg/dL"},
        {test:"Creatinine", male:"0.7-1.3 mg/dL", female:"0.6-1.1 mg/dL"},
        {test:"Uric Acid", male:"3.5-7.0 mg/dL", female:"2.5-6.0 mg/dL"},
        {test:"Total Cholesterol", all:"<200 mg/dL"},
        {test:"Triglyceride", all:"<150 mg/dL"},
        {test:"HDL", male:">40 mg/dL", female:">50 mg/dL"},
        {test:"LDL", all:"<100 mg/dL"},
        {test:"Fasting Glucose", all:"70-100 mg/dL"},
        {test:"HbA1c", all:"<5.7%"},
        {test:"Sodium", all:"135-145 mmol/L"},
        {test:"Potassium", all:"3.5-5.0 mmol/L"},
        {test:"Chloride", all:"98-106 mmol/L"},
        {test:"Bicarbonate", all:"22-28 mmol/L"},
        {test:"Troponin I", all:"<0.04 ng/mL"},
        {test:"TSH", all:"0.4-4.0 µIU/mL"},
        {test:"Free T4", all:"0.8-1.8 ng/dL"},
        {test:"Free T3", all:"2.3-4.2 pg/mL"},
        {test:"Total Calcium", all:"8.5-10.5 mg/dL"},
        {test:"Amylase", all:"30-110 IU/L"},
        {test:"Lipase", all:"10-140 IU/L"}
      ],
      faqs:[{q:"Best kidney marker?", a:"Creatinine"}, {q:"Best liver marker?", a:"ALT"}]
    },

    // ==================== EXAM QUESTIONS BANK ====================
  ],
  questions: [
    {id:1,q:"What is the normal PCV range for adult male?",options:["30-40%","40-54%","55-65%","35-45%"],answer:1,exp:"Normal PCV for males is 40-54%. Rule of 3: Hb x 3 ≈ PCV."},
    {id:2,q:"Sahli method converts Hb to:",options:["Cyanmethemoglobin","Acid hematin","Oxyhemoglobin","Carboxyhemoglobin"],answer:1,exp:"Sahli uses N/10 HCl to form brown acid hematin."},
    {id:3,q:"ESR is markedly raised in:",options:["Polycythemia","Inflammation","Dehydration","Hemoconcentration"],answer:1,exp:"Fibrinogen causes rouleaux formation and faster settling."},
    {id:4,q:"Normal WBC count range is:",options:["2000-5000","4000-11000","12000-20000","5000-15000"],answer:1,exp:"4000-11000 cells/µL"},
    {id:5,q:"Platelets counted using:",options:["WBC pipette","Platelet pipette and Rees-Ecker fluid","RBC pipette","Direct method"],answer:1,exp:"1:100 dilution with Rees-Ecker fluid."},
    {id:6,q:"Glucose oxidase method measures:",options:["Protein","Glucose","Urea","Creatinine"],answer:1,exp:"GOD-POD produces colored dye at 500nm."},
    {id:7,q:"Jaffe reaction is used for:",options:["Urea","Creatinine","Bilirubin","Cholesterol"],answer:1,exp:"Creatinine + alkaline picrate = orange-red complex."},
    {id:8,q:"ALT is more specific for:",options:["Heart","Kidney","Liver","Muscle"],answer:2,exp:"ALT is primarily in liver."},
    {id:9,q:"Normal fasting blood glucose is:",options:["50-70","70-100","100-140","140-180"],answer:1,exp:"70-100 mg/dL. >126 = Diabetes."},
    {id:10,q:"HbA1c reflects average glucose for:",options:["1 week","2 weeks","3 months","6 months"],answer:2,exp:"120 days, approx 3 months."},
    {id:11,q:"Principle of Gram stain is based on:",options:["Cell wall","Capsule","Flagella","Nucleus"],answer:0,exp:"Thick peptidoglycan in Gram +ve."},
    {id:12,q:"ZN stain is used for:",options:["E.coli","Staphylococcus","Mycobacterium","Candida"],answer:2,exp:"Acid-fast bacilli like TB."},
    {id:13,q:"Significant bacteriuria is:",options:[">1000 CFU/mL",">10000 CFU/mL",">100000 CFU/mL",">1000000 CFU/mL"],answer:2,exp:">100,000 CFU/mL in clean catch."},
    {id:14,q:"Blood culture is used to diagnose:",options:["UTI","Sepsis","Pneumonia","Diarrhea"],answer:1,exp:"Bacteremia and sepsis."},
    {id:15,q:"Kirby-Bauer test is for:",options:["Identification","Sensitivity","Culture","Staining"],answer:1,exp:"Antibiotic disk diffusion."},
    {id:16,q:"HIV rapid test detects:",options:["Antigen","Antibody","RNA","DNA"],answer:1,exp:"HIV 1/2 antibodies."},
    {id:17,q:"HBsAg indicates:",options:["Immunity","Past infection","Current infection","Vaccination"],answer:2,exp:"Current HBV infection."},
    {id:18,q:"Widal test is for:",options:["Typhoid","Malaria","TB","Hepatitis"],answer:0,exp:"Salmonella typhi antibodies."},
    {id:19,q:"CRP is an:",options:["Antibody","Enzyme","Acute phase protein","Hormone"],answer:2,exp:"Rises within 6hrs of inflammation."},
    {id:20,q:"ASOT is raised in:",options:["Strep infection","Staph infection","E.coli","Salmonella"],answer:0,exp:"Group A Streptococcus."},
    {id:21,q:"Fixation is done with:",options:["Alcohol","Acetone","10% Formalin","Xylene"],answer:2,exp:"10% buffered formalin."},
    {id:22,q:"H&E stains nuclei:",options:["Pink","Blue","Yellow","Red"],answer:1,exp:"Hematoxylin = blue nuclei."},
    {id:23,q:"IHC is used to detect:",options:["Bacteria","Antigen","DNA","RNA"],answer:1,exp:"Specific antigens using antibodies."},
    {id:24,q:"Frozen section is for:",options:["Routine","Rapid diagnosis","Special stain","Culture"],answer:1,exp:"Intraoperative diagnosis in 15min."},
    {id:25,q:"ABO grouping is based on:",options:["Antigens on RBC","Antibodies in serum","Both","None"],answer:2,exp:"Cell + Serum grouping must agree."},
    {id:26,q:"Crossmatching is done to prevent:",options:["Infection","Transfusion reaction","Clotting","Hemolysis"],answer:1,exp:"Donor-recipient compatibility."},
    {id:27,q:"DAT is positive in:",options:["Iron deficiency","AIHA","Thalassemia","Sickle cell"],answer:1,exp:"Autoimmune hemolytic anemia."},
    {id:28,q:"Blood is stored at:",options:["Room temp","2-6°C","-20°C","37°C"],answer:1,exp:"PRBC at 2-6°C for 42 days."},
    {id:29,q:"Pap smear screens for:",options:["Breast cancer","Cervical cancer","Ovarian cancer","Uterine cancer"],answer:1,exp:"Cervical precancerous lesions."},
    {id:30,q:"FNAC is used for:",options:["Blood","Lump","Urine","Stool"],answer:1,exp:"Palpable lumps."},
    {id:31,q:"Thick film is used for:",options:["Species ID","Parasite concentration","Culture","Sensitivity"],answer:1,exp:"Concentrates parasites."},
    {id:32,q:"Malaria parasite is identified in:",options:["Thick film","Thin film","Both","None"],answer:2,exp:"Thick for detection, Thin for species."},
    {id:33,q:"S.haematobium eggs are found in:",options:["Stool","Urine","Blood","CSF"],answer:1,exp:"Urine with terminal spine."},
    {id:34,q:"Scotch tape test is for:",options:["Ascaris","Hookworm","Pinworm","Tapeworm"],answer:2,exp:"Enterobius vermicularis."},
    {id:35,q:"Microfilaria are collected at:",options:["Morning","Afternoon","Night","Anytime"],answer:2,exp:"W.bancrofti nocturnal 10pm-2am."},
    {id:36,q:"PCR is used to detect:",options:["Antibody","Antigen","DNA/RNA","Protein"],answer:2,exp:"Amplifies nucleic acid."},
    {id:37,q:"NS1 antigen is for:",options:["HIV","Dengue","Hepatitis","COVID"],answer:1,exp:"Dengue in first week."},
    {id:38,q:"RT-PCR is gold standard for:",options:["HIV","TB","COVID","Malaria"],answer:2,exp:"SARS-CoV-2 from NP swab."},
    {id:39,q:"Toxoplasma IgM indicates:",options:["Past infection","Recent infection","Immunity","Vaccination"],answer:1,exp:"Recent infection. Important in pregnancy."},
    {id:40,q:"Corrected calcium formula is:",options:["Ca + 0.8(4-Alb)","Ca - 0.8(4-Alb)","Ca x Alb","Ca/Alb"],answer:0,exp:"Correct for low albumin."}
  ],

  // ==================== MASTER NORMAL RANGES FOR ALL MLS TESTS ====================
  masterNormalRanges:[
    // HEMATOLOGY
    {test:"Packed Cell Volume PCV", desc:"Proportion of blood made of RBCs", male:"40-54%", female:"37-47%", infant:"30-40%"},
    {test:"Hemoglobin Hb", desc:"Oxygen carrying protein", male:"13.5-17.5 g/dL", female:"12-15.5 g/dL", infant:"9.5-14 g/dL"},
    {test:"ESR", desc:"Inflammation marker", male:"0-15 mm/hr", female:"0-20 mm/hr", infant:"0-10 mm/hr"},
    {test:"Total WBC", desc:"Total leukocytes", male:"4000-11000 /µL", female:"4000-11000 /µL", infant:"6000-17500 /µL"},
    {test:"Platelet Count", desc:"Clotting cells", male:"150000-450000 /µL", female:"150000-450000 /µL", infant:"150000-450000 /µL"},
    {test:"Neutrophils", desc:"Bacterial infection cells", male:"40-75%", female:"40-75%", infant:"30-50%"},
    {test:"Lymphocytes", desc:"Viral infection cells", male:"20-45%", female:"20-45%", infant:"40-60%"},
    {test:"Reticulocytes", desc:"Young RBCs", male:"0.5-2.5%", female:"0.5-2.5%", infant:"0.5-4%"},
    {test:"Bleeding Time", desc:"Platelet function", male:"2-9 min", female:"2-9 min", infant:"2-9 min"},
    {test:"Clotting Time", desc:"Coagulation time", male:"5-10 min", female:"5-10 min", infant:"5-10 min"},

    // CLINICAL CHEMISTRY
    {test:"Fasting Blood Glucose", desc:"Blood sugar", male:"70-100 mg/dL", female:"70-100 mg/dL", infant:"60-100 mg/dL"},
    {test:"Urea", desc:"Kidney waste product", male:"15-40 mg/dL", female:"15-40 mg/dL", infant:"5-18 mg/dL"},
    {test:"Creatinine", desc:"GFR marker", male:"0.7-1.3 mg/dL", female:"0.6-1.1 mg/dL", infant:"0.2-0.4 mg/dL"},
    {test:"ALT", desc:"Liver enzyme", male:"<41 IU/L", female:"<33 IU/L", infant:"<50 IU/L"},
    {test:"AST", desc:"Liver/cardiac enzyme", male:"<40 IU/L", female:"<32 IU/L", infant:"<60 IU/L"},
    {test:"Total Bilirubin", desc:"Jaundice marker", male:"<1.2 mg/dL", female:"<1.2 mg/dL", infant:"<1.0 mg/dL"},
    {test:"Total Cholesterol", desc:"Lipid risk", male:"<200 mg/dL", female:"<200 mg/dL", infant:"<170 mg/dL"},
    {test:"Total Protein", desc:"Nutritional status", male:"6-8 g/dL", female:"6-8 g/dL", infant:"5.7-6.7 g/dL"},
    {test:"Sodium", desc:"Fluid balance", male:"135-145 mmol/L", female:"135-145 mmol/L", infant:"133-142 mmol/L"},
    {test:"Potassium", desc:"Cardiac function", male:"3.5-5.0 mmol/L", female:"3.5-5.0 mmol/L", infant:"3.6-5.8 mmol/L"},
    {test:"Amylase", desc:"Pancreatic enzyme", male:"30-110 IU/L", female:"30-110 IU/L", infant:"5-65 IU/L"},

    // MICROBIOLOGY
    {test:"Urine Culture", desc:"UTI detection", male:"<10000 CFU/mL", female:"<10000 CFU/mL", infant:"<10000 CFU/mL"},
    {test:"Blood Culture", desc:"Bacteremia", male:"No growth", female:"No growth", infant:"No growth"},
    {test:"CSF Cells", desc:"Meningitis", male:"<5 /µL", female:"<5 /µL", infant:"<30 /µL"},
    {test:"CSF Glucose", desc:"Meningitis", male:"50-80 mg/dL", female:"50-80 mg/dL", infant:"40-80 mg/dL"},
    {test:"Gram Stain", desc:"Bacterial type", male:"Report morphology", female:"Report morphology", infant:"Report morphology"},

    // IMMUNOLOGY
    {test:"HIV", desc:"HIV screening", male:"Non-reactive", female:"Non-reactive", infant:"Non-reactive"},
    {test:"HBsAg", desc:"Hepatitis B", male:"Negative", female:"Negative", infant:"Negative"},
    {test:"Widal", desc:"Typhoid antibodies", male:"<1:80", female:"<1:80", infant:"<1:80"},
    {test:"RF", desc:"Rheumatoid arthritis", male:"<20 IU/mL", female:"<20 IU/mL", infant:"<20 IU/mL"},
    {test:"CRP", desc:"Inflammation", male:"<10 mg/L", female:"<10 mg/L", infant:"<10 mg/L"},
    {test:"ASOT", desc:"Strep infection", male:"<200 IU/mL", female:"<200 IU/mL", infant:"<100 IU/mL"},
    {test:"Malaria RDT", desc:"Malaria antigen", male:"Negative", female:"Negative", infant:"Negative"},
    {test:"Pregnancy Test", desc:"hCG hormone", male:"N/A", female:"Negative", infant:"N/A"},
    {test:"VDRL", desc:"Syphilis screen", male:"Non-reactive", female:"Non-reactive", infant:"Non-reactive"},

    // BLOOD BANK
    {test:"ABO Group", desc:"Blood group", male:"A/B/AB/O", female:"A/B/AB/O", infant:"A/B/AB/O"},
    {test:"Rh Type", desc:"Rh status", male:"Positive/Negative", female:"Positive/Negative", infant:"Positive/Negative"},
    {test:"Crossmatch", desc:"Compatibility", male:"Compatible", female:"Compatible", infant:"Compatible"},
    {test:"Antibody Screen", desc:"Irregular antibodies", male:"Negative", female:"Negative", infant:"Negative"},
    {test:"DAT", desc:"Antibodies on RBCs", male:"Negative", female:"Negative", infant:"Negative"},

    // VIROLOGY
    {test:"HIV ELISA", desc:"Confirmatory HIV", male:"Non-reactive", female:"Non-reactive", infant:"Non-reactive"},
    {test:"HBV DNA", desc:"HBV viral load", male:"Undetectable", female:"Undetectable", infant:"Undetectable"},
    {test:"HCV Antibody", desc:"Hepatitis C", male:"Non-reactive", female:"Non-reactive", infant:"Non-reactive"},
    {test:"Dengue NS1", desc:"Dengue antigen", male:"Negative", female:"Negative", infant:"Negative"},
    {test:"COVID PCR", desc:"SARS-CoV-2", male:"Not detected", female:"Not detected", infant:"Not detected"},

    // CYTOLOGY
    {test:"Pap Smear", desc:"Cervical cancer screen", male:"N/A", female:"NILM", infant:"N/A"},
    {test:"Urine Cytology", desc:"Bladder cancer", male:"Negative", female:"Negative", infant:"Negative"},
    {test:"Bone Marrow Blasts", desc:"Leukemia", male:"<5%", female:"<5%", infant:"<5%"},

    // PARASITOLOGY
    {test:"Stool O&P", desc:"Intestinal parasites", male:"No parasite seen", female:"No parasite seen", infant:"No parasite seen"},
    {test:"Malaria Film", desc:"Malaria parasite", male:"No parasite seen", female:"No parasite seen", infant:"No parasite seen"},
    {test:"Urine Schisto", desc:"S.haematobium", male:"No eggs", female:"No eggs", infant:"No eggs"},

    // CHEMICAL PATHOLOGY
    {test:"ALP", desc:"Liver/bone enzyme", male:"40-120 IU/L", female:"40-120 IU/L", infant:"150-420 IU/L"},
    {test:"Albumin", desc:"Liver synthetic function", male:"3.5-5.0 g/dL", female:"3.5-5.0 g/dL", infant:"3.0-5.0 g/dL"},
    {test:"HbA1c", desc:"3 month glucose avg", male:"<5.7%", female:"<5.7%", infant:"<5.7%"},
    {test:"TSH", desc:"Thyroid function", male:"0.4-4.0 µIU/mL", female:"0.4-4.0 µIU/mL", infant:"0.5-5.0 µIU/mL"},
    {test:"Free T4", desc:"Thyroid hormone", male:"0.8-1.8 ng/dL", female:"0.8-1.8 ng/dL", infant:"0.8-2.0 ng/dL"},
    {test:"Total Calcium", desc:"Nerve/muscle function", male:"8.5-10.5 mg/dL", female:"8.5-10.5 mg/dL", infant:"8.8-10.8 mg/dL"},
    {test:"Lipase", desc:"Pancreatic enzyme", male:"10-140 IU/L", female:"10-140 IU/L", infant:"10-140 IU/L"}
  ],

  // ==================== MASTER FAQ BANK ====================
  masterFAQs:[
    {q:"Rule of 3 in Hematology", a:"Hb x 3 ≈ PCV"},
    {q:"Best anticoagulant for CBC", a:"EDTA"},
    {q:"Gold standard for diabetes diagnosis", a:"Fasting Glucose >126 on 2 occasions"},
    {q:"Best kidney function test", a:"Creatinine"},
    {q:"Best liver function test", a:"ALT"},
    {q:"Significant bacteriuria", a:">100,000 CFU/mL"},
    {q:"Window period for HIV", a:"3 months for antibodies, 2-4 weeks for 4th gen"},
    {test:"Thick vs Thin malaria film", a:"Thick for detection, Thin for species"},
    {q:"Fixative for histopathology", a:"10% Neutral Buffered Formalin"},
    {q:"Most important pre-transfusion test", a:"Crossmatching"},
    {q:"Gold standard for COVID", a:"RT-PCR"},
    {q:"Normal CSF cells", a:"<5 /µL"},
    {q:"Corrected calcium formula", a:"Ca + 0.8(4-Alb)"},
    {q:"LDL calculation", a:"TC - HDL - TG/5"},
    {q:"AST:ALT >2 suggests", a:"Alcoholic liver disease"}
  ]
}

export default LAB_DATA;
