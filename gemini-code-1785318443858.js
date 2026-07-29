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
    {id:"hematology",name:"Hematology",analyses:[
      {
        id:"pcv",
        title:"Packed Cell Volume (PCV)",
        intro:"Packed Cell Volume (PCV), also known as Hematocrit (Hct), is a fundamental hematological test that measures the proportion of whole blood occupied by red blood cells (erythrocytes), expressed as a percentage or decimal fraction. It provides a direct estimation of total red blood cell mass in the body.\n\nThis test is routinely performed during complete blood counts, pre-operative screenings, blood donation evaluations, and monitoring of critically ill patients. It serves as a key diagnostic metric for evaluating anemia, polycythemia, and hydration status.\n\nIn Medical Laboratory Science, mastering PCV measurement is essential because it offers a highly accurate and reproducible assessment of oxygen-carrying capacity without requiring expensive automated machinery.",
        aim:"To accurately measure the percentage volume of packed red blood cells in an anticoagulated whole blood specimen using the microhematocrit method.",
        principles:"Anticoagulated whole blood is drawn into a capillary tube and centrifuged at high speed (12,000 rpm) for 5 minutes. Due to the higher specific gravity of erythrocytes compared to plasma and leukocytes, centrifugal force causes the red blood cells to pack tightly at the distal sealed end of the tube. The height of the packed red cell column is then compared against the total column height to determine the percentage occupied by red cells.",
        materials:["EDTA anticoagulated blood sample or capillary blood","Microhematocrit capillary tubes (plain for EDTA blood, heparinized for direct capillary blood)","Non-absorbent sealing clay (plasticine)","Microhematocrit centrifuge (capable of 11,000-15,000 rpm)","Microhematocrit reader board","Lint-free tissue paper and alcohol swabs"],
        procedure:[
          "1. Inspect the blood sample to ensure proper mixing and absence of clots.",
          "2. Invert the EDTA blood container gently 8 to 10 times to create a uniform suspension.",
          "3. Insert one end of the capillary tube into the blood sample at a slight angle and allow blood to enter by capillary action until 2/3 to 3/4 full.",
          "4. Carefully wipe the outside of the capillary tube with tissue paper, wiping away from the open filling orifice.",
          "5. Seal the dry end of the tube by pushing it vertically into the sealing clay two to three times to form a 4-6 mm plug.",
          "6. Place the tube in the radial slot of the microhematocrit centrifuge with the sealed end facing outward toward the outer rim.",
          "7. Balance the centrifuge rotor by placing another prepared capillary tube opposite to the first.",
          "8. Secure the inner rotor lid tightly and close the main top cover of the centrifuge.",
          "9. Centrifuge at 12,000 rpm for exactly 5 minutes.",
          "10. Allow the centrifuge to stop naturally without manual braking.",
          "11. Remove the tube and place it on the microhematocrit reader board.",
          "12. Align the bottom of the red cell column (above the clay) with the 0% mark and the top of the plasma column with the 100% mark.",
          "13. Read the percentage value corresponding to the top junction of the packed red cell column (just below the buffy coat)."
        ],
        result:"An elevated PCV suggests hemoconcentration, polycythemia, or severe dehydration. A low PCV indicates anemia, overhydration, or recent fluid administration. A thick white layer above the red cell mass indicates leukocytosis.",
        normal:"Adult Male: 40% - 54%\nAdult Female: 37% - 47%\nInfant: 30% - 40%",
        safety:["Wear gloves and laboratory coat at all times.","Handle capillary glass tubes with care to prevent breakage and sharp puncture injuries.","Do not open the centrifuge cover while the rotor is spinning."],
        tips:"Rule of 3: Hb (g/dL) x 3 ≈ PCV (%). Always read the PCV value at the top of the red cell column, excluding the buffy coat layer."
      },
      {
        id:"hb",
        title:"Hemoglobin Estimation - Sahli Method",
        intro:"Hemoglobin is an iron-containing metalloprotein present inside red blood cells responsible for oxygen transport from the lungs to peripheral tissues and returning carbon dioxide back to the lungs.\n\nThe Sahli method (acid hematin method) is a quantitative visual colorimetric assay used in resource-limited settings to measure hemoglobin concentration. It forms a core practical exercise in hematology training.\n\nAccurate hemoglobin estimation is indispensable for classifying anemias, assessing hemorrhage severity, and evaluating blood donors.",
        aim:"To estimate the hemoglobin concentration in a blood sample using Sahli's acid hematin comparator method.",
        principles:"Hemoglobin in anticoagulated blood is converted into a dark brown compound called acid hematin by action of N/10 Hydrochloric Acid (HCl). The intensity of the brown color formed is directly proportional to the concentration of hemoglobin. The solution is diluted with distilled water until its color matches the standard brown glass comparison block in the comparator box.",
        materials:["Sahli hemoglobinometer (comparator box with standard color glass)","Sahli graduated tube (marked in g/dL and %)","20 µL Sahli hemoglobin pipette","N/10 Hydrochloric acid (HCl)","Distilled water in a dropper bottle","Stirring rod and blood sample"],
        procedure:[
          "1. Place N/10 HCl into the graduated Sahli tube up to the lowest mark (2 g/dL or 10%).",
          "2. Mix the EDTA blood sample thoroughly by gentle inversion.",
          "3. Draw blood into the Sahli pipette up to the 20 µL mark without air bubbles.",
          "4. Wipe the excess blood off the outside of the pipette tip using gauze.",
          "5. Dispense the blood into the Sahli tube containing N/10 HCl and rinse the pipette by drawing up and expelling the mixture twice.",
          "6. Mix the contents with a glass stirrer and leave the tube at room temperature for exactly 10 minutes to complete conversion to acid hematin.",
          "7. Place the tube in the Sahli comparator box.",
          "8. Add distilled water drop by drop, mixing with the glass stirrer after each drop, until the solution color matches the standard glass strips.",
          "9. Read the meniscus of the liquid column against the g/dL scale under good light."
        ],
        result:"Dark brown solution matching standard indicates measured Hb level. Color lighter than standard initially suggests anemia. Delayed reading produces falsely high results.",
        normal:"Adult Male: 13.5 - 17.5 g/dL\nAdult Female: 12.0 - 15.5 g/dL",
        safety:["HCl is corrosive; handle with care and avoid contact with skin.","Dispose of pipettes and contaminated materials into biohazard bins."],
        tips:"Wait the full 10 minutes for complete acid hematin formation. Shorter wait times cause falsely low hemoglobin readings."
      },
      {
        id:"esr",
        title:"Erythrocyte Sedimentation Rate (ESR)",
        intro:"Erythrocyte Sedimentation Rate measures the distance in millimeters that red blood cells fall in anticoagulated whole blood within one hour under standardized vertical conditions.\n\nESR is a non-specific acute-phase reactant test used to detect systemic inflammation, tissue necrosis, autoimmune diseases, and infection.\n\nWhile not diagnostic of a specific disease, it serves as a valuable tool for monitoring response to therapy in conditions like Temporal Arteritis and Polymyalgia Rheumatica.",
        aim:"To determine the rate of erythrocyte settling in a specified Westergren tube over a one-hour period.",
        principles:"When blood stands undisturbed in a vertical tube, erythrocytes aggregate to form stacks called rouleaux due to decreased negative cell surface charges (zeta potential). Acute-phase plasma proteins like fibrinogen, globulins, and C-reactive protein neutralize surface charges, accelerating rouleaux formation and increasing the settling rate.",
        materials:["Westergren ESR tube (calibrated 0-200 mm)","Westergren ESR stand (level and vertical)","3.8% Sodium Citrate anticoagulant","Venous blood specimen","Timer"],
        procedure:[
          "1. Mix 4 parts venous blood with 1 part 3.8% Sodium Citrate anticoagulant (or use EDTA blood diluted with saline).",
          "2. Mix the diluted blood thoroughly.",
          "3. Draw blood into the Westergren tube up to the exact 0 mm mark at the top.",
          "4. Mount the tube perfectly vertical in the Westergren ESR rack.",
          "5. Ensure the rack is placed on a vibration-free horizontal bench away from direct sunlight and heat.",
          "6. Start the timer for exactly 60 minutes.",
          "7. At the end of 60 minutes, read the distance from the bottom of the plasma meniscus to the top of the settled cell column in mm."
        ],
        result:"High ESR indicates acute or chronic inflammation, tissue destruction, malignancy, or severe anemia. Low ESR is observed in polycythemia or red cell shape abnormalities like sickle cells.",
        normal:"Adult Male (<50 yrs): <15 mm/hr\nAdult Female (<50 yrs): <20 mm/hr",
        safety:["Wear protective equipment. Never mouth-pipette blood into Westergren tubes. Clean spills immediately."],
        tips:"Tubes tilted by just 3 degrees can artificially increase ESR by up to 30%. Always keep the stand strictly vertical."
      },
      {
        id:"twbc",
        title:"Total White Blood Cell Count",
        intro:"White blood cells (leukocytes) are key cells of the immune system responsible for defending the body against infections and foreign pathogens.\n\nTotal White Blood Cell Count measures the total number of circulating leukocytes per microliter (µL) of blood.\n\nIt is essential for evaluating bacterial/viral infections, leukemia, immune suppression, and bone marrow function.",
        aim:"To enumerate the total concentration of leukocytes in whole blood using an improved Neubauer hemocytometer.",
        principles:"Whole blood is diluted 1:20 with Turk's diluting fluid. Turk's fluid contains glacial acetic acid which lyses non-nucleated erythrocytes, and Gentian violet dye which stains leukocyte nuclei dark blue for easy microscopic identification.",
        materials:["Improved Neubauer counting chamber with cover glass","WBC thoma pipette or micropipette","Turk's fluid (Glacial acetic acid + Gentian violet)","Microscope","Capillary tissue paper"],
        procedure:[
          "1. Mix the EDTA blood sample thoroughly.",
          "2. Pipette 380 µL of Turk's fluid into a small tube.",
          "3. Add 20 µL of whole blood to achieve a 1:20 dilution ratio.",
          "4. Mix well and let stand for 3 minutes for complete RBC lysis.",
          "5. Clean the Neubauer chamber and coverslip with ethanol.",
          "6. Fix the coverslip onto the counting grid until Newton's rings appear.",
          "7. Load approximately 10 µL of diluted blood beneath the coverslip by capillary action.",
          "8. Allow cells to settle in a humid chamber for 2 minutes.",
          "9. Mount chamber on microscope stage and locate grid under 10x objective.",
          "10. Count leukocytes in the 4 large corner squares using the 'L' rule to avoid double counting.",
          "11. Calculate total WBC/µL = (Cells Counted × Dilution Factor [20]) / (Volume of 4 Squares [0.4 mm³])."
        ],
        result:"Elevated WBC (Leukocytosis) indicates bacterial infection, leukemia, or inflammation. Low WBC (Leukopenia) indicates bone marrow depression, viral infections, or chemotherapy treatment.",
        normal:"Adults: 4,000 - 11,000 cells/µL",
        safety:["Turk's fluid contains acetic acid; handle with care. Dispose of fluid waste according to chemical safety guidelines."],
        tips:"Include cells touching upper and left borders; exclude cells touching lower and right borders of grid squares."
      },
      {
        id:"platelet",
        title:"Platelet Count",
        intro:"Platelets (thrombocytes) are small, non-nucleated cell fragments produced by megakaryocytes in the bone marrow vital for primary hemostasis and clot formation.\n\nDirect manual platelet count evaluates the concentration of platelets per microliter of blood.\n\nIt is crucial for diagnosing bleeding disorders, monitoring thrombocytopenia, and managing patients on cytotoxic drug therapy.",
        aim:"To manually count platelets in whole blood using a hemocytometer under a light microscope.",
        principles:"Blood is diluted 1:100 with Rees-Ecker diluting fluid (or 1% ammonium oxalate). The fluid preserves platelets while lysing red blood cells. Platelets appear under the light microscope as small, highly refractile, round or oval structures.",
        materials:["Improved Neubauer counting chamber","Rees-Ecker fluid or 1% Ammonium Oxalate","Platelet/RBC pipette","Phase-contrast or standard light microscope","Cover glass"],
        procedure:[
          "1. Mix EDTA blood sample thoroughly.",
          "2. Dilute 20 µL of blood into 1980 µL of 1% ammonium oxalate (1:100 dilution).",
          "3. Mix gently for 10 minutes to allow complete lysis of red blood cells.",
          "4. Clean Neubauer chamber and place coverslip firmly on grid.",
          "5. Charge the chamber carefully with diluted sample without overfilling.",
          "6. Place chamber in a moist petri dish for 15 minutes to allow platelets to settle without drying out.",
          "7. Focus on the central large square of the grid under 40x objective.",
          "8. Count refractile platelets in 5 small squares within the center square.",
          "9. Calculate: Total Platelets/µL = Cells Counted × 100 × 10 / 0.2."
        ],
        result:"Thrombocytopenia (<150,000/µL) increases bleeding risk (purpura, petechiae). Thrombocytosis (>450,000/µL) increases thrombosis risk or indicates myeloproliferative disorder.",
        normal:"Adults: 150,000 - 450,000 cells/µL",
        safety:["Prevent aerosol creation during mixing. Dispose of blood-contaminated fluids in biohazard containers."],
        tips:"Platelets clump easily in EDTA if left standing. Always check sample for micro-clots before loading."
      },
      {
        id:"diff",
        title:"Differential White Blood Cell Count",
        intro:"Differential WBC count determines the relative percentage of each of the five main types of white blood cells: Neutrophils, Lymphocytes, Monocytes, Eosinophils, and Basophils.\n\nIt provides valuable qualitative and quantitative data regarding immune system function, allergic reactions, parasitic burdens, and hematological malignancies.",
        aim:"To identify and count 100 white blood cells on a stained peripheral blood smear to determine individual cell percentages.",
        principles:"A thin peripheral blood film is prepared, fixed with methanol, and stained with Romanowsky stain (Leishman stain). The cell types are identified based on nuclear morphology, chromatin pattern, and cytoplasmic granulations under oil immersion microscopy.",
        materials:["Leishman stain","Phosphate buffer solution (pH 6.8)","Clean glass slides","Oil immersion oil","Microscope","Cell counter key/tally counter"],
        procedure:[
          "1. Prepare a thin blood film on a clean glass slide and air dry.",
          "2. Place slide on staining rack and flood with Leishman stain for 2 minutes (fixation step).",
          "3. Add double the volume of pH 6.8 phosphate buffer to the stain.",
          "4. Mix gently by blowing through a pipette until a metallic green scum forms.",
          "5. Allow staining reaction to proceed for 10 to 12 minutes.",
          "6. Wash slide gently under running tap water to remove excess stain.",
          "7. Wipe back of slide clean and air dry vertically.",
          "8. Place a drop of immersion oil on the thin feathered edge of the film.",
          "9. Examine under 100x oil immersion objective using a battlement pattern movement.",
          "10. Classify and count 100 consecutive leukocytes and express each type as a percentage."
        ],
        result:"Neutrophilia indicates bacterial infection; Lymphocytosis indicates viral infection; Eosinophilia indicates parasitic infection or allergies; Monocytosis indicates chronic inflammation/TB.",
        normal:"Neutrophils: 40-75%\nLymphocytes: 20-45%\nMonocytes: 2-10%\nEosinophils: 1-6%\nBasophils: 0-1%",
        safety:["Handle methanol-containing stains in ventilated areas away from open flames."],
        tips:"Always perform counting in the monolayer zone (feathered edge region) where red cells lie adjacent without overlapping."
      },
      {
        id:"film",
        title:"Peripheral Blood Film Preparation",
        intro:"Preparation of a high-quality peripheral blood film (PBF) is the fundamental manual technique in hematology upon which morphology examinations depend.\n\nA well-made film enables detailed evaluation of red cell morphology, leukocyte differential counts, and platelet estimations.",
        aim:"To prepare a thin, uniform blood smear with an ideal feathered edge suitable for microscopic examination.",
        principles:"A small drop of blood placed on a clean slide is spread forward using a smooth spreader slide held at a specific angle (30-45°). Capillary action pulls blood along the spreader edge, producing a smooth, thin monolayer of blood cells when pushed forward rapidly.",
        materials:["Clean grease-free glass slides","Spreader slide with smooth polished edges","EDTA anticoagulated blood sample","Capillary tube or applicator stick"],
        procedure:[
          "1. Select clean, lint-free, grease-free glass slides.",
          "2. Place a small drop of well-mixed blood (approx 3-5 µL) near the frosted end of the slide.",
          "3. Place the slide on a flat, stable surface.",
          "4. Hold a spreader slide at a 30 to 45 degree angle in front of the drop.",
          "5. Draw the spreader back gently into contact with the drop of blood.",
          "6. Allow the blood to spread along 3/4 of the width of the spreader edge.",
          "7. Smoothly and rapidly push the spreader forward across the slide maintaining constant pressure and angle.",
          "8. Wave the slide rapidly in the air to dry the blood film quickly, preventing cellular distortion."
        ],
        result:"Ideal film covers 2/3 of slide length, has a straight bullet/feathered edge, contains no tailing, ridges, or holes, and shows a monolayer under microscope.",
        normal:"N/A (Procedure/Technique evaluation)",
        safety:["Avoid direct skin contact with blood. Dispose of used spreader slides safely."],
        tips:"Increasing spreader angle creates thicker films; decreasing angle creates thinner films. Anemic samples require wider angles."
      },
      {
        id:"retic",
        title:"Reticulocyte Count",
        intro:"Reticulocytes are immature, non-nucleated red blood cells containing residual ribosomal RNA fragments. They represent the immediate stage between erythroblasts and mature red cells.\n\nThe reticulocyte count serves as a direct measurement of erythropoietic activity in the bone marrow.",
        aim:"To estimate the percentage of reticulocytes present in whole blood using supravital staining.",
        principles:"Living, unfixed erythrocytes are incubated with a supravital stain (New Methylene Blue or Brilliant Cresyl Blue). The dye precipitates residual RNA within reticulocytes into visible dark blue reticular networks or granulations.",
        materials:["New Methylene Blue or Brilliant Cresyl Blue stain","Test tubes","Glass slides and coverslips","Water bath (37°C)","Microscope with oil immersion objective"],
        procedure:[
          "1. Mix equal volumes (e.g., 3-4 drops each) of EDTA blood and filtered supravital stain in a small test tube.",
          "2. Gently shake tube and incubate in 37°C water bath for 15-20 minutes.",
          "3. After incubation, resuspend red cells by gentle shaking.",
          "4. Place a small drop of mixture on a slide and prepare a thin blood film.",
          "5. Air dry the film thoroughly without heating.",
          "6. Examine under 100x oil immersion objective.",
          "7. Count total RBCs and reticulocytes until 1,000 total red blood cells are enumerated.",
          "8. Calculate: Reticulocytes (%) = (Total Reticulocytes Counted / 1000) × 100."
        ],
        result:"Reticulocytosis (>2.5%) indicates active bone marrow erythropoiesis (hemolytic anemia, acute blood loss, response to iron therapy). Reticulocytopenia (<0.5%) indicates marrow aplasia or nutritional deficiency.",
        normal:"Adults: 0.5% - 2.5%",
        safety:["Supravital stains stain clothing and skin permanently; handle with protective gloves."],
        tips:"Reticulocytes must contain at least two or more visible dark blue granules/filaments to be classified as reticulocytes."
      },
      {
        id:"bt",
        title:"Bleeding Time (Duke / Ivy Method)",
        intro:"Bleeding time is an in vivo functional assay measuring primary hemostasis—specifically the interaction between platelets and the vascular wall to form a primary platelet plug.\n\nIt helps detect platelet functional disorders, von Willebrand disease, and vascular wall abnormalities.",
        aim:"To measure the time required for standard micro-incisional capillary bleeding to cease naturally.",
        principles:"A standardized shallow puncture is made on the skin surface. The elapsed time from puncture initiation until bleeding stops completely is recorded as bleeding time.",
        materials:["Standardized lancet (2 mm depth)","Filter paper (Whatman No. 1)","Stopwatch","Alcohol swab","Sphygmomanometer (Ivy method)"],
        procedure:[
          "1. For Ivy method: Place blood pressure cuff on upper arm and inflate to constant 40 mmHg pressure.",
          "2. Clean volar surface of forearm with 70% alcohol and let air dry completely.",
          "3. Make a firm puncture (2 mm deep) using a sterile lancet and start stopwatch simultaneously.",
          "4. Every 30 seconds, touch the edge of filter paper to the drop of blood without touching the skin incision.",
          "5. Repeat blotting every 30 seconds at different clean spots on filter paper.",
          "6. Stop the stopwatch the exact moment blood no longer transfers to filter paper.",
          "7. Record total time elapsed in minutes."
        ],
        result:"Prolonged bleeding time (>9 min) occurs in thrombocytopenia, platelet dysfunction (Glanzmann's), von Willebrand disease, and aspirin therapy.",
        normal:"Duke Method: 1 - 5 minutes\nIvy Method: 2 - 9 minutes",
        safety:["Dispose of lancets immediately into puncture-resistant sharps boxes. Prevent blood contamination."],
        tips:"Never allow filter paper to touch skin incision directly, as this dislodges forming platelet plugs and prolongs bleeding time artificially."
      },
      {
        id:"ct",
        title:"Clotting Time (Lee-White Method)",
        intro:"Clotting time measures the duration required for whole blood to form a firm fibrin clot in vitro without addition of exogenous tissue thromboplastin.\n\nIt evaluates the overall functional integrity of the intrinsic and common coagulation pathways.",
        aim:"To measure the intrinsic blood coagulation pathway efficiency by timing clot formation in glass tubes.",
        principles:"Venous blood collected without anticoagulants is exposed to a glass surface. Glass acts as a negative surface contact factor, activating Factor XII and initiating the intrinsic clotting cascade leading to fibrin clot creation.",
        materials:["Dry glass test tubes (13 x 100 mm)","Water bath maintained at 37°C","Syringe and needle for venipuncture","Stopwatch"],
        procedure:[
          "1. Label three glass tubes (1, 2, 3) and place in 37°C water bath.",
          "2. Perform clean, atraumatic venipuncture and draw 3-5 mL whole blood.",
          "3. Start stopwatch immediately upon blood entry into syringe.",
          "4. Transfer 1 mL blood gently into each of the 3 glass tubes.",
          "5. Incubate tubes in 37°C water bath.",
          "6. After 3 minutes, tilt tube 1 gently to 45 degrees every 30 seconds until blood clots completely.",
          "7. Once tube 1 clots, examine tube 2 every 30 seconds until clotted.",
          "8. Once tube 2 clots, examine tube 3 every 30 seconds until solid.",
          "9. Record time when tube 3 forms a solid clot as the final clotting time."
        ],
        result:"Prolonged clotting time indicates severe deficiency of clotting factors (Hemophilia A/B), presence of circulating anticoagulants/heparin, or severe hypofibrinogenemia.",
        normal:"Lee-White Method: 5 - 10 minutes",
        safety:["Clean venipuncture avoids contamination with tissue factor which falsely shortens clotting time."],
        tips:"Avoid excessive tilting of tubes during incubation, as mechanical agitation disrupts early fibrin strands and delays visible clotting."
      }
    ]}
  ],
  questions:[
    {id:1,q:"What is the normal PCV range for adult male?",options:["30-40%","40-54%","55-65%","35-45%"],answer:1,exp:"Normal PCV for males is 40-54%. Females: 37-47%. Low PCV indicates anemia."},
    {id:2,q:"Which method is used for Hemoglobin estimation in Sahli's method?",options:["Cyanmethemoglobin","Acid hematin","Oxyhemoglobin","Carboxyhemoglobin"],answer:1,exp:"Sahli method converts Hb to acid hematin with N/10 HCl and color is matched."},
    {id:3,q:"ESR is markedly raised in:",options:["Polycythemia","Inflammation","Dehydration","Hemoconcentration"],answer:1,exp:"ESR increases in inflammation due to fibrinogen and immunoglobulins causing rouleaux formation."},
    {id:4,q:"Normal WBC count range is:",options:["2000-5000","4000-11000","12000-20000","5000-15000"],answer:1,exp:"Normal total WBC count is 4000-11000 cells/μL."},
    {id:5,q:"Platelets are counted using:",options:["WBC pipette","Platelet pipette and Rees-Ecker fluid","RBC pipette","Direct method"],answer:1,exp:"Platelet count uses 1:100 dilution with Rees-Ecker fluid in Neubauer chamber."}
  ],
  normalRanges:[
    {test:"Packed Cell Volume (PCV)",desc:"Proportion of whole blood made up of red cells",male:"40-54%",female:"37-47%",infant:"30-40%"},
    {test:"Hemoglobin (Hb)",desc:"Oxygen-carrying protein concentration in blood",male:"13.5-17.5 g/dL",female:"12-15.5 g/dL",infant:"9.5-14 g/dL"},
    {test:"Erythrocyte Sedimentation Rate (ESR)",desc:"Rate red cells settle in 1 hour; inflammation marker",male:"0-15 mm/hr",female:"0-20 mm/hr",infant:"0-10 mm/hr"},
    {test:"Total White Blood Cell Count (TWBC)",desc:"Total leukocytes per microlitre of blood",male:"4,000-11,000/µL",female:"4,000-11,000/µL",infant:"6,000-17,500/µL"},
    {test:"Platelet Count",desc:"Number of clotting cells per microlitre",male:"150,000-450,000/µL",female:"150,000-450,000/µL",infant:"150,000-450,000/µL"}
  ],
  faqs:[
    {q:"What is LabGuru?",a:"LabGuru is a Medical Laboratory Science (MLS) learning companion covering principles, procedures, results and exam tips across Hematology, Chemistry, Microbiology, Immunology and more."},
    {q:"Does LabGuru work offline?",a:"Yes — once you've opened the app online at least once, it caches itself and works fully offline."}
  ]
};