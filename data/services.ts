export interface ServiceStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceItem {
  slug: string;
  name: string;
  iconName: 'Droplet' | 'FileCheck' | 'Wrench' | 'ShieldCheck' | 'AlertTriangle' | 'Clock' | 'Utensils' | 'Wind' | 'MapPin' | 'Building2';
  shortDesc: string;
  headline: string;
  subhead: string;
  heroImage: string;
  whatItMeansKicker: string;
  whatItMeansHeadline: string;
  whatItMeans: string;
  whatItMeansImage: string;
  whenNeededTitle: string;
  whenNeeded: { title: string; desc: string }[];
  processKicker: string;
  processHeadline: string;
  processIntro: string;
  processSteps: ServiceStep[];
  whatsIncludedTitle: string;
  whatsIncludedSubtitle: string;
  whatsIncluded: string[];
  warningSignsHeadline?: string;
  warningSignsIntro?: string;
  warningSigns?: string[];
  pricingRange: string;
  pricingFactors: string[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
}

export const servicesData: ServiceItem[] = [
  {
    slug: 'septic-tank-pumping',
    name: 'Septic Tank Pumping',
    iconName: 'Droplet',
    shortDesc: 'Complete 100% bottom-sludge and top-scum evacuation with 2,500-gallon commercial vacuum monsters.',
    headline: 'COMMERCIAL HIGH-VACUUM SEPTIC TANK PUMPING',
    subhead: 'We evacuate 100% of hardened bottom sludge and floating crusts. Never a lazy top-water skim.',
    heroImage: '/images/monster-pumper-truck.jpg',
    whatItMeansKicker: 'WHAT IT ACTUALLY MEANS',
    whatItMeansHeadline: 'FULL-DEPTH EVACUATION, NOT A QUICK SURFACE SIP.',
    whatItMeans: 'Septic pumping is the complete physical removal of accumulated settled solids, dense bottom sludge, and floating grease crusts from your underground tank. Over 3 to 5 years, anaerobic bacteria cannot digest dense inorganic matter. If not evacuated down to the concrete floor, that sludge flows directly into your delicate drain field, suffocating soil pores and causing catastrophic failure.',
    whatItMeansImage: '/images/crew-suction-hose.jpg',
    whenNeededTitle: 'WHEN YOU NEED THIS SERVICE',
    whenNeeded: [
      {
        title: 'EVERY 2 TO 3 YEARS',
        desc: 'Recommended routine maintenance frequency for an average Central Texas household of 3 to 5 people before sludge depths exceed 30% of tank capacity.'
      },
      {
        title: 'SLOW DRAINS & GURGLING TOILETS',
        desc: 'When bathtubs drain noticeably slower, toilets make bubbling noises when laundry drains, or water levels sit high in the bowl.'
      },
      {
        title: 'SEWER ODORS NEAR RISERS',
        desc: 'Foul sulfur or blackwater smells lingering around your tank access ports, patio, or downwind from the yard during humid evenings.'
      },
      {
        title: 'BEFORE BIG EVENTS & HOLIDAYS',
        desc: 'Preventing sudden backups when hosting large family gatherings, weddings, or weekend guests who multiply daily household water volume.'
      }
    ],
    processKicker: 'THE WRANGLER STANDARD',
    processHeadline: 'HOW WE PERFORM A REAL PUMPOUT',
    processIntro: 'Every run follows a strict 5-step operational protocol designed to protect your yard, clean your tank to the floor, and verify your structural components.',
    processSteps: [
      {
        step: '01',
        title: 'Careful Access & Turf Protection',
        desc: 'We lay heavy rubber ground mats so our hoses never scorch your lawn. We uncover surface risers or gently peel back top sod to access the primary manhole.'
      },
      {
        step: '02',
        title: 'Initial Liquid & Crust Evacuation',
        desc: 'Our commercial 2,500-gallon vacuum rig drops a 3-inch or 4-inch reinforced hose into the main chamber, drawing off top floating oils and scum cakes.'
      },
      {
        step: '03',
        title: 'Agitation & Bottom Sludge Liquefaction',
        desc: 'We use high-pressure back-flush agitation to break apart dense, hardened bottom sludge cakes so all settled matter is fully liquefied and vacuumed.'
      },
      {
        step: '04',
        title: 'Dual Sanitary Baffle Inspection',
        desc: 'Once empty, our technician shines high-lumen inspection lights into both inlet and outlet sanitary tees to verify structural integrity and prevent field contamination.'
      },
      {
        step: '05',
        title: 'Airtight Lid Reseal & TCEQ Manifest',
        desc: 'Lids are bolted airtight to prevent noxious odors, sod is neatly restored, and you receive an official TCEQ legal disposal manifest.'
      }
    ],
    whatsIncludedTitle: "WHAT'S INCLUDED IN EVERY RUN",
    whatsIncludedSubtitle: 'Straightforward trade scope. No hidden upcharges or separate disposal line items.',
    whatsIncluded: [
      'Complete evacuation of all liquids, floating scum, and heavy bottom sludge cakes',
      'Back-flush agitation to scour tank walls and break up hardened sediment layers',
      'Inspection of both inlet and outlet PVC / concrete sanitary baffles',
      'Effluent filter extraction, pressure washdown, and reseating (if equipped)',
      'Measurement of operational liquid levels before pumping begins',
      'Official Texas TCEQ-compliant disposal tracking manifest with volume certificate',
      'Protective ground matting and tidy restoration of access turf'
    ],
    warningSignsHeadline: 'WHAT HAPPENS IF YOU NEGLECT REGULAR PUMPING',
    warningSignsIntro: 'A $500 maintenance pumpout delayed today becomes a $15,000 emergency replacement tomorrow.',
    warningSigns: [
      'Sludge Migration: When solids accumulate past the baffle line, raw sludge overflows directly into the absorption field.',
      'Total Drain Field Suffocation: Organic sludge creates an impenetrable biomat in rocky caliche soil that cannot be reversed.',
      'Blackwater Indoor Backups: Sewage forces its way through the lowest house drains — your showers, bathtubs, and toilets.',
      'Severe Environmental Violations: Contaminating the Edwards Aquifer recharge zone or neighboring wells carries hefty state penalties.'
    ],
    pricingRange: '$425 – $650 (Typical Central Texas 1,000 to 1,500-Gal Tank)',
    pricingFactors: [
      'Tank gallon capacity (typically 1,000, 1,250, 1,500, or 2,500+ gallons)',
      'Burial depth of lids (zero extra cost if surface risers are installed; minor dig fee if buried >12" underground)',
      'Effluent filter condition and access convenience',
      'Emergency or weekend dispatch timing'
    ],
    faqs: [
      {
        q: 'How often should a Central Texas septic tank be pumped?',
        a: 'For an average 3 to 4 bedroom home on a 1,000 or 1,500-gallon tank, TCEQ guidelines and manufacturer specs recommend pumping every 2 to 3 years. If you run a garbage disposal, have a large family, or host frequent guests, every 18 to 24 months is safer.'
      },
      {
        q: 'Can I just use store-bought yeast or bacterial enzyme additives instead of pumping?',
        a: 'No. While beneficial bacteria break down some organic waste, inorganic solids, plastics, cellulose, and settled mineral ash cannot be digested by enzymes. Pumping is the only physical way to remove this accumulated sludge from your tank floor.'
      },
      {
        q: 'Do you pump through the small 4-inch inspection pipe or open the full manhole lid?',
        a: 'We ALWAYS open the primary 20-inch to 24-inch center manhole cover. Pumping through a narrow 4-inch inspection pipe is a lazy shortcut that leaves up to 70% of the dense sludge cakes trapped on the bottom.'
      },
      {
        q: 'Where does the waste go after your truck leaves my property?',
        a: '100% of the septage we pump is legally hauled and manifested at authorized municipal wastewater reclamation plants. We never dump illegally on rural Texas land.'
      }
    ],
    relatedSlugs: ['septic-inspection', 'emergency-septic-service', 'septic-repairs']
  },
  {
    slug: 'septic-inspection',
    name: 'Septic Inspection (Routine & Pre-Sale)',
    iconName: 'FileCheck',
    shortDesc: 'Comprehensive pre-sale evaluations and routine diagnostic checks with plain-English photo reports and zero scare tactics.',
    headline: 'OBJECTIVE REAL ESTATE & ROUTINE SEPTIC INSPECTIONS',
    subhead: 'Plain-English photo evidence and thorough hydraulic evaluations. Zero scare tactics or invented failures.',
    heroImage: '/images/technician-inspection.jpg',
    whatItMeansKicker: 'WHAT IT ACTUALLY MEANS',
    whatItMeansHeadline: 'AN UNBIASED DIAGNOSTIC HEALTH CHECK FOR BUYERS & HOMEOWNERS.',
    whatItMeans: 'A septic inspection evaluates the underground structural and hydraulic integrity of the entire wastewater system — from the inlet line and internal sanitary tees to the distribution box and absorption leach field. Whether negotiating a real estate closing or checking an aging Hill Country system, an inspection gives you verified truth backed by photo documentation.',
    whatItMeansImage: '/images/technician-inspection.jpg',
    whenNeededTitle: 'WHEN YOU NEED THIS SERVICE',
    whenNeeded: [
      {
        title: 'REAL ESTATE CLOSINGS (OPTION PERIOD)',
        desc: 'Essential due diligence before buying a Texas home or ranch to avoid inheriting an unpermitted or failing $20,000 system.'
      },
      {
        title: 'ROUTINE 3-5 YEAR HEALTH CHECK',
        desc: 'Verifying that baffles have not collapsed and roots have not invaded your lines before symptoms appear indoors.'
      },
      {
        title: 'BEFORE MAJOR HOME RENOVATIONS',
        desc: 'Confirming your existing tank and drain field can handle the added bedroom, bathroom, or guest casita.'
      },
      {
        title: 'SECOND OPINIONS ON EXPENSIVE QUOTES',
        desc: 'When another pumper claims your drain field is dead and quotes $15,000+, we verify if a simple baffle or pipe repair fixes it.'
      }
    ],
    processKicker: 'INSPECTION METHODOLOGY',
    processHeadline: 'OUR SYSTEMATIC DIAGNOSTIC PROCESS',
    processIntro: 'We inspect every accessible component using electronic locators, high-lumen optical cameras, and hydraulic load testing.',
    processSteps: [
      {
        step: '01',
        title: 'Permit & OSSF Record Verification',
        desc: 'We cross-reference county and TCEQ records to verify original engineered schematics, tank size, and absorption field dimensions.'
      },
      {
        step: '02',
        title: 'Static Water Level & Structural Check',
        desc: 'We inspect the tank for hairline fractures, groundwater intrusion, root penetration, and verify operational water line height.'
      },
      {
        step: '03',
        title: 'Baffle & Distribution Box Scoping',
        desc: 'We examine inlet/outlet tees and uncover the distribution box to inspect for leveling, sediment accumulation, and line balance.'
      },
      {
        step: '04',
        title: 'Hydraulic Load & Field Surface Probing',
        desc: 'We introduce controlled water flow to evaluate absorption rate, checking for soggy ground, caliche surfacing, or trench backup.'
      },
      {
        step: '05',
        title: 'Comprehensive Written Photo Report',
        desc: 'You receive a multi-page, plain-English report with high-res photos, component diagrams, and actionable repair recommendations within 24–48 hours.'
      }
    ],
    whatsIncludedTitle: 'WHAT OUR INSPECTIONS COVER',
    whatsIncludedSubtitle: 'Full-point diagnostic examination from fixture entry to drain field perimeter.',
    whatsIncluded: [
      'Tank structural evaluation (precast concrete, poly, or fiberglass integrity)',
      'Operating liquid level and backflow diagnostics',
      'Inlet and outlet sanitary baffle condition assessment',
      'Distribution box leveling and hydraulic flow balance check',
      'Drain field surface soil probing and biomass absorption test',
      'Effluent pump and high-water alarm testing (for dosing/aerobic systems)',
      'High-resolution digital photo documentation delivered in PDF'
    ],
    warningSignsHeadline: 'RISKS OF BUYING OR OPERATING WITHOUT AN INSPECTION',
    warningSignsIntro: 'Septic systems hide underground. Without an inspection, silent failures turn into emergency financial liabilities.',
    warningSigns: [
      'Inheriting a Condemned System: You could face immediate county shutdown or an unbudgeted $20,000 replacement bill right after closing.',
      'Undetected Baffle Collapse: A $200 broken tee allows floating grease into the drain field, destroying it within months.',
      'Unpermitted Alterations: Previous owners who illegally expanded bathrooms without upgrading tank capacity violate Texas OSSF codes.'
    ],
    pricingRange: '$350 – $550 (Standard Real Estate / Comprehensive Inspection)',
    pricingFactors: [
      'Depth and accessibility of inspection ports/lids (extra dig fee if buried deeply without risers)',
      'Single tank conventional vs. complex aerobic multi-tank systems with pumps',
      'Turnaround urgency for tight real estate option periods'
    ],
    faqs: [
      {
        q: 'Does a standard home inspector check the septic system?',
        a: 'Usually no. General home inspectors flush toilets and look at the surface, but they rarely open tanks, check baffles, or probe the drain field. You need a TCEQ-licensed septic specialist to perform an OSSF inspection.'
      },
      {
        q: 'Should the tank be pumped before or after the inspection?',
        a: 'Always inspect FIRST while normal operating water levels are present. If you pump before inspecting, the inspector cannot evaluate normal hydraulic levels, backflow, or leaks.'
      },
      {
        q: 'How fast do we receive the written report?',
        a: 'We understand Texas real estate option periods move fast. We provide our digital photo report within 24 to 48 hours of completing the field inspection.'
      }
    ],
    relatedSlugs: ['septic-tank-pumping', 'septic-repairs', 'system-installation']
  },
  {
    slug: 'system-installation',
    name: 'System Installation & Replacement',
    iconName: 'Wrench',
    shortDesc: 'Turnkey engineered septic installations and drain field replacements engineered for tough Central Texas caliche and limestone.',
    headline: 'ENGINEERED SEPTIC INSTALLATION & TURNKEY REPLACEMENT',
    subhead: 'Engineered for rocky Central Texas caliche. Permitted, excavated, and built to outlast decades.',
    heroImage: '/images/hero-truck.jpg',
    whatItMeansKicker: 'WHAT IT ACTUALLY MEANS',
    whatItMeansHeadline: 'COMPLETE TURNKEY WASTEWATER SYSTEMS FROM PERMIT TO FINAL COVER.',
    whatItMeans: 'When an old system reaches the end of its lifespan or a new residential build needs an On-Site Sewage Facility (OSSF), we engineer and install heavy-duty reinforced concrete tanks, modern chamber absorption fields, or advanced aerobic spray systems tailored to your specific lot slope, soil class, and TCEQ regulations.',
    whatItMeansImage: '/images/heritage-fleet.jpg',
    whenNeededTitle: 'WHEN YOU NEED THIS SERVICE',
    whenNeeded: [
      {
        title: 'NEW HOME OR CASITA CONSTRUCTION',
        desc: 'Turnkey OSSF installation for new rural builds, ranch estates, or accessory dwelling units (ADUs) outside city sewer boundaries.'
      },
      {
        title: 'CATASTROPHIC TANK COLLAPSE',
        desc: 'Replacing rusted steel tanks, crumbling thin-wall tanks, or cracked pre-1980s concrete vessels that cannot hold water.'
      },
      {
        title: 'COMPLETE DRAIN FIELD SURFACING',
        desc: 'When absorption trenches have become biologically dead and effluent pools permanently above the limestone bedrock.'
      },
      {
        title: 'HOME EXPANSIONS & UPGRADED OCCUPANCY',
        desc: 'Adding bedrooms or commercial guest capacity that legally exceeds the gallon capacity of your original grandfathered system.'
      }
    ],
    processKicker: 'INSTALLATION PHASES',
    processHeadline: 'OUR TURNKEY 5-PHASE INSTALLATION PROCESS',
    processIntro: 'We handle every requirement from soil analysis and county permitting through excavation and final grade restoration.',
    processSteps: [
      {
        step: '01',
        title: 'Site Evaluation & Soil Percolation Testing',
        desc: 'A registered professional soil evaluator analyzes soil texture, caliche depth, and bedrock proximity to determine appropriate system design.'
      },
      {
        step: '02',
        title: 'Engineering & TCEQ Permitting',
        desc: 'We prepare engineered drawings and submit full OSSF permit applications to Travis, Hays, Blanco, or relevant county authorities.'
      },
      {
        step: '03',
        title: 'Heavy Excavation & Tank Setting',
        desc: 'Our track excavators dig to precise engineered grades, set reinforced precast concrete tanks on a compact gravel base, and install airtight risers.'
      },
      {
        step: '04',
        title: 'Drain Field Construction & Piping',
        desc: 'We install Quick4 high-capacity infiltration chambers or low-pressure distribution lines according to exact laser-level slope specifications.'
      },
      {
        step: '05',
        title: 'County Inspection, Backfill & Clean Finish',
        desc: 'We coordinate the final county health inspector walk-through, obtain your Authorization to Operate (ATO), backfill, and seed final grade.'
      }
    ],
    whatsIncludedTitle: 'EVERY INSTALLATION INCLUDES',
    whatsIncludedSubtitle: 'Complete end-to-end management with zero permit or subcontractor surprises.',
    whatsIncluded: [
      'Comprehensive site plan and county OSSF regulatory permitting',
      'Heavy reinforced precast concrete tank with dual sanitary compartments',
      'Watertight Polylok access risers and secure child-proof green surface lids',
      'High-capacity chamber or low-pressure dosing drain field installation',
      'Heavy equipment rock excavation with limestone trenching',
      'Final county inspection coordination and official Authorization to Operate (ATO)'
    ],
    warningSignsHeadline: 'SIGNS YOUR EXISTING SYSTEM CANNOT BE SAVED',
    warningSignsIntro: 'While we always pursue honest repairs first, these conditions signal replacement is inevitable.',
    warningSigns: [
      'Structural Tank Cave-In: Crumbling ceilings or collapsed dividers that create hazardous sinkholes in your yard.',
      'Saturated Leach Field Bedrock: Limestone trenches completely bound by black slime where water has nowhere left to absorb.',
      'Old Cesspools / Outlaw Steel Tanks: Substandard legacy systems that fail modern TCEQ environmental health codes.'
    ],
    pricingRange: '$8,500 – $18,000+ (Varies by lot soil, system type, and engineering requirements)',
    pricingFactors: [
      'System type (Conventional gravity vs. Low-Pressure Dosing vs. Aerobic Drip/Spray)',
      'Rock and caliche excavation intensity (Hill Country limestone often requires rock sawing/hammering)',
      'Number of bedrooms and daily design flow (gallons per day)',
      'County permit application fees and engineering plans'
    ],
    faqs: [
      {
        q: 'How long does a full septic replacement or installation take?',
        a: 'The physical excavation and tank setting usually takes 3 to 5 business days. However, permit approvals from county health departments generally require 2 to 4 weeks prior to breaking ground.'
      },
      {
        q: 'Can you install surface risers so we never have to dig up our lawn again?',
        a: 'Yes. Every new system we install comes standard with heavy-duty green Polylok risers brought flush to the lawn with tamper-resistant security lids.'
      },
      {
        q: 'Do you offer conventional and aerobic systems?',
        a: 'Yes. We install both conventional gravity systems (where soil depth permits) and engineered aerobic OSSF systems with spray or drip irrigation for shallow caliche lots.'
      }
    ],
    relatedSlugs: ['drain-field-repair', 'septic-inspection', 'septic-tank-pumping']
  },
  {
    slug: 'septic-repairs',
    name: 'Septic Repairs',
    iconName: 'Wrench',
    shortDesc: 'Sanitary tee baffle repairs, riser retrofits, line clearing, and pump float fixes without fake drain field upsells.',
    headline: 'TARGETED, HONEST SEPTIC REPAIRS & RETROFITS',
    subhead: 'If a $250 PVC baffle fix solves the problem, that is all you pay. Zero fake drain field failure scares.',
    heroImage: '/images/jeff-truck-owner.jpg',
    whatItMeansKicker: 'WHAT IT ACTUALLY MEANS',
    whatItMeansHeadline: 'SURGICAL REPAIRS THAT EXTEND YOUR EXISTING SYSTEM’S LIFESPAN.',
    whatItMeans: 'Many septic problems are localized mechanical failures — a collapsed inlet baffle, a cracked distribution box, a burned-out float switch, or an intrusive tree root. We diagnose the exact failure point with cameras and repair the specific component, saving you thousands compared to competitors who automatically demand a total system replacement.',
    whatItMeansImage: '/images/technician-inspection.jpg',
    whenNeededTitle: 'SYMPTOMS REQUIRING TARGETED REPAIRS',
    whenNeeded: [
      {
        title: 'SEWER BACKUPS AT HOUSE CLEANOUT',
        desc: 'Waste water rising in your home cleanout stack indicates an obstruction in the main trunk line or a blocked inlet sanitary tee.'
      },
      {
        title: 'COLLAPSED CONCRETE OR PVC BAFFLE',
        desc: 'Old cast iron or thin PVC tees disintegrate from sulfuric sewer gas, letting scum spill into lines or causing immediate intake jams.'
      },
      {
        title: 'PUMP ALARM CONSTANTLY BUZZING',
        desc: 'High-water audible alarms sounding in pump tanks or aerobic controls due to failed float switches, bad capacitors, or tripped breakers.'
      },
      {
        title: 'CRACKED, DANGEROUS ACCESS LIDS',
        desc: 'Brittle concrete lids or sunken access ports that present serious safety hazards for children, pets, and riding lawnmowers.'
      }
    ],
    processKicker: 'REPAIR PROCESS',
    processHeadline: 'HOW WE FIX PROBLEMS RIGHT THE FIRST TIME',
    processIntro: 'We locate the true mechanical root cause, give you a fixed quote before turning a wrench, and stand behind our work.',
    processSteps: [
      {
        step: '01',
        title: 'Diagnostic Fiber-Optic Camera Inspection',
        desc: 'We feed a self-leveling HD pipe camera through lines to visually identify root intrusions, cracked pipes, or collapsed baffles.'
      },
      {
        step: '02',
        title: 'Plain-English Explanation & Exact Pricing',
        desc: 'We show you the camera footage on our monitor, explain exactly what is broken, and give you an upfront, fixed-rate repair cost.'
      },
      {
        step: '03',
        title: 'Heavy-Duty Component Installation',
        desc: 'We replace broken parts with schedule 40 PVC sanitary tees, heavy-duty Polylok risers, or commercial-grade Zoeller effluent pumps.'
      },
      {
        step: '04',
        title: 'Operational Flow & Seal Testing',
        desc: 'We run water tests from household fixtures to verify positive drainage, test electrical floats, and verify airtight lid gaskets.'
      }
    ],
    whatsIncludedTitle: 'OUR REPAIR CAPABILITIES',
    whatsIncludedSubtitle: 'Equipped to tackle every common Hill Country mechanical breakdown.',
    whatsIncluded: [
      'Inlet and outlet sanitary baffle replacement with heavy PVC tees',
      'Polylok airtight surface riser installation and safety barrier lids',
      'Distribution box leveling, patching, and speed-leveler collar installation',
      'Submersible effluent pump replacement (Zoeller / Goulds commercial pumps)',
      'High-water alarm panel wiring and tethered float switch replacement',
      'Sewer line hydro-jetting and heavy mechanical root extraction'
    ],
    pricingRange: '$250 – $1,800 (Depending on component: baffles vs. pumps vs. riser retrofit)',
    pricingFactors: [
      'Component requiring repair (PVC baffle vs. distribution box vs. electrical pump)',
      'Excavation depth required to expose the damaged connection',
      'Parts required (standard PVC fittings vs. specialized commercial grinder pumps)'
    ],
    faqs: [
      {
        q: 'Why did another company tell me I need a new drain field when you say it’s just a baffle?',
        a: 'A collapsed outlet baffle causes wastewater to back up into the tank and house, mimicking a clogged drain field. Dishonest or inexperienced pumpers jump to selling a $15k replacement. An honest camera diagnostic shows if the drain field is still dry and only the baffle is blocked.'
      },
      {
        q: 'What is a sanitary tee baffle and why does it break?',
        a: 'The baffle is a T-shaped pipe at the inlet and outlet of your tank. It prevents floating grease from entering the drain field and directs incoming waste downward. Over 15–20 years, corrosive hydrogen sulfide gases degrade old plastic and concrete baffles until they snap.'
      },
      {
        q: 'Can you install risers on my old concrete tank?',
        a: 'Yes. We retrofit standard watertight Polylok risers onto virtually any concrete or fiberglass tank, sealed with heavy butyl mastic rope and concrete anchor screws.'
      }
    ],
    relatedSlugs: ['septic-tank-pumping', 'drain-field-repair', 'emergency-septic-service']
  },
  {
    slug: 'drain-field-repair',
    name: 'Drain Field Repair & Replacement',
    iconName: 'ShieldCheck',
    shortDesc: 'Targeted absorption trench restoration, distribution box leveling, and complete engineered leach field replacements.',
    headline: 'DRAIN FIELD RESTORATION & LEACH TRENCH REPLACEMENT',
    subhead: 'Fixing soggy lawns, surfacing effluent, and sluggish absorption trenches across Central Texas.',
    heroImage: '/images/fleet-depot-heritage.jpg',
    whatItMeansKicker: 'WHAT IT ACTUALLY MEANS',
    whatItMeansHeadline: 'THE FINAL STAGE OF TREATMENT THAT KEEPS YOUR SYSTEM WORKING.',
    whatItMeans: 'Your drain field (leach field) is the subterranean network of perforated pipes or chambers where clarified liquid effluent is naturally filtered through soil microbes and Texas caliche. When the drain field clogs or drowns, effluent cannot dissipate, causing toilets to back up and sewage to bubble up into your lawn.',
    whatItMeansImage: '/images/monster-pumper-truck.jpg',
    whenNeededTitle: 'WARNING SIGNS OF DRAIN FIELD DISTRESS',
    whenNeeded: [
      {
        title: 'SOGGY, SPONGY GRASS OVER TRENCHES',
        desc: 'Squishy mud or standing puddles over your absorption lines even during dry, sunny Central Texas weather.'
      },
      {
        title: 'UNUSUALLY LUSH, DARK GREEN GRASS',
        desc: 'Distinct dark green grass stripes tracing directly along your underground trenches fed by surfacing nitrogen effluent.'
      },
      {
        title: 'PUMP ALARMS SOUNDING RAPIDLY',
        desc: 'Water returning into the pump chamber from the drain field due to hydro-static back pressure and trench saturation.'
      },
      {
        title: 'SEWAGE ODORS OUTDOORS',
        desc: 'Strong wastewater odors hanging in the air around the perimeter of your leach field or downslope property line.'
      }
    ],
    processKicker: 'RESTORATION PROCESS',
    processHeadline: 'HOW WE RESTORE OR REBUILD DRAIN FIELDS',
    processIntro: 'We inspect whether your lines can be flushed and rested, or if new replacement trenches are required.',
    processSteps: [
      {
        step: '01',
        title: 'Hydraulic Evaluation & Distribution Box Check',
        desc: 'We expose the distribution box to see if effluent is flowing evenly across all lines or overloading one single trench.'
      },
      {
        step: '02',
        title: 'Soil Biomat & Penetration Probing',
        desc: 'We probe the bottom of the gravel bed to measure biomat depth and inspect for root blockages.'
      },
      {
        step: '03',
        title: 'Line Jetting or Leveling Restorations',
        desc: 'If lines are intact, we clear silt with pressure jetting and install speed levelers in the distribution box to redistribute flow.'
      },
      {
        step: '04',
        title: 'Replacement Trench Excavation (If Failed)',
        desc: 'If the field has suffered complete soil failure, we dig parallel engineered trenches and install high-flow Quick4 chamber systems.'
      }
    ],
    whatsIncludedTitle: 'DRAIN FIELD SOLUTIONS',
    whatsIncludedSubtitle: 'Both targeted rehabilitation and complete engineered replacements.',
    whatsIncluded: [
      'Distribution box leveling, repair, and proportional flow valve balancing',
      'High-pressure water jetting of sludge and biological silt from perforated lines',
      'Tree root extraction and chemical root barrier installation',
      'Addition of parallel secondary absorption trenches where lot space allows',
      'Full modern chamber system replacements (Infiltrator Quick4 systems)',
      'Clean gravel bedding and clean topsoil final grade restoration'
    ],
    pricingRange: '$1,200 – $12,000+ (Minor D-box/jetting repair vs. full engineered replacement)',
    pricingFactors: [
      'Severity of issue (distribution box re-leveling vs. completely exhausted soil biomat)',
      'Subsurface conditions (limestone rock hammering vs. sandy loam soil)',
      'Linear footage of trenches required by lot sizing and bedroom count'
    ],
    faqs: [
      {
        q: 'Can a failing drain field be repaired without replacing it entirely?',
        a: 'Sometimes yes. If the issue is an unlevel distribution box sending 100% of water into a single line while other lines are bone dry, re-leveling the box and jetting the lines can restore full functionality for a fraction of replacement cost.'
      },
      {
        q: 'Why do tree roots destroy drain fields so quickly?',
        a: 'Texas cedar, oak, and mesquite roots seek out moisture during dry summers. Once a single root hair enters a pipe perforation, it blossoms into a dense fibrous root plug that catches hair and paper, completely choking drainage.'
      }
    ],
    relatedSlugs: ['system-installation', 'septic-inspection', 'septic-repairs']
  },
  {
    slug: 'emergency-septic-service',
    name: 'Emergency / Same-Day Septic Service',
    iconName: 'AlertTriangle',
    shortDesc: 'Rapid dispatch 24/7 when toilets back up, high-water alarms sound, or sewage bubbles up in your yard.',
    headline: '24/7 EMERGENCY DISPATCH & SAME-DAY RESPONSE',
    subhead: 'Real local technicians on call across Austin & the Hill Country. We stop sewage emergencies fast.',
    heroImage: '/images/hero-septic-truck.jpg',
    whatItMeansKicker: 'WHAT IT ACTUALLY MEANS',
    whatItMeansHeadline: 'FAST RELIEF WHEN WASTEWATER THREATENS YOUR HOME.',
    whatItMeans: 'A septic emergency cannot wait until Monday morning. Raw sewage backing into showers or an active high-water alarm can cause thousands of dollars in water damage and severe biohazards. Our emergency team responds quickly with high-vacuum tankers and diagnostic cameras to clear blockages and evacuate tanks immediately.',
    whatItMeansImage: '/images/monster-pumper-truck.jpg',
    whenNeededTitle: 'TRUE SEPTIC EMERGENCIES TO CALL FOR NOW',
    whenNeeded: [
      {
        title: 'SEWAGE COMING UP IN SHOWERS & TUBS',
        desc: 'Toilets overflowing and blackwater rising in tubs whenever taps are turned on inside your home.'
      },
      {
        title: 'BLARING HIGH-WATER AUDIBLE ALARM',
        desc: 'Continuous buzzing and red beacon lights on your aerobic or pump control panel indicating an impending tank overflow.'
      },
      {
        title: 'SEWAGE BUBBLING UP IN LAWN OR PATIO',
        desc: 'Active bubbling or foul wastewater geysers breaching your tank lid or pool deck area.'
      },
      {
        title: 'COMMERCIAL VENUE OR RANCH BACKUP',
        desc: 'System overload during an event, wedding, or restaurant peak where downtime directly threatens operations.'
      }
    ],
    processKicker: 'EMERGENCY PROTOCOL',
    processHeadline: 'OUR RAPID RESPONSE TIMELINE',
    processIntro: 'When you call our emergency line, you speak with a real technician, not an overseas answering service.',
    processSteps: [
      {
        step: '01',
        title: 'Immediate Phone Triage & Advice',
        desc: 'We walk you through shutting off water and breaker switches over the phone to prevent further indoor damage while our truck is rolling.'
      },
      {
        step: '02',
        title: 'Rapid Truck Dispatch',
        desc: 'Our commercial vacuum rig arrives equipped with high-pressure clearing equipment and replacement pumps.'
      },
      {
        step: '03',
        title: 'Full Evacuation & Obstruction Removal',
        desc: 'We quickly depressurize the system, pump down high water levels, and clear mainline blockages.'
      },
      {
        step: '04',
        title: 'Restoration & Verification',
        desc: 'We confirm toilets flush freely, test alarms, and leave your home safe and fully operational.'
      }
    ],
    whatsIncludedTitle: 'EMERGENCY DISPATCH COVERS',
    whatsIncludedSubtitle: 'Everything needed to stabilize and resolve the crisis.',
    whatsIncluded: [
      'Priority same-day dispatch across Austin, Travis, and surrounding Hill Country counties',
      'Emergency high-vacuum tank pumping down to safe operating capacity',
      'Mainline blockage mechanical snake clearing and camera verification',
      'Emergency pump and float switch replacement on-site',
      'Temporary bypass solutions to keep indoor plumbing usable immediately'
    ],
    pricingRange: '$550 – $850+ (Emergency callout & service fee + standard pumping/repair)',
    pricingFactors: [
      'Time of call (late-night, weekend, or holiday dispatch)',
      'Severity of mechanical intervention required (clearing clog vs. emergency pump replacement)'
    ],
    faqs: [
      {
        q: 'How fast can you get a truck to my house?',
        a: 'Depending on your location in Austin or the Hill Country and current truck dispatch routes, we typically arrive within 60 to 90 minutes for acute emergencies.'
      },
      {
        q: 'What should I do while waiting for your truck to arrive?',
        a: 'Immediately stop running all water in the house — no showers, laundry, or flushing. If you have an aerobic control box buzzing, you can silence the alarm buzzer using the silence switch on the panel.'
      }
    ],
    relatedSlugs: ['septic-tank-pumping', 'septic-repairs', 'aerobic-septic-service']
  },
  {
    slug: 'grease-trap-pumping',
    name: 'Grease Trap Pumping',
    iconName: 'Utensils',
    shortDesc: 'Commercial kitchen grease trap evacuation, scraper cleanouts, and complete municipal compliance documentation.',
    headline: 'COMMERCIAL GREASE TRAP SERVICE & COMPLIANCE',
    subhead: 'Keeping Austin & Hill Country restaurants, food trucks, and commercial kitchens fully compliant.',
    heroImage: '/images/fleet-depot-heritage.jpg',
    whatItMeansKicker: 'WHAT IT ACTUALLY MEANS',
    whatItMeansHeadline: 'PREVENTING GREASE FIRES, PLUMBING SHUTDOWNS & HEALTH CITATIONS.',
    whatItMeans: 'Commercial kitchens generate massive amounts of Fats, Oils, and Grease (FOG). Grease traps separate these solids before wastewater enters municipal sewers or septic tanks. Routine pumping and scraping prevents rancid odor blowback, pipe clogs, and costly municipal health department fines.',
    whatItMeansImage: '/images/crew-suction-hose.jpg',
    whenNeededTitle: 'WHEN YOUR KITCHEN NEEDS PUMPING',
    whenNeeded: [
      {
        title: 'MANDATORY CITY/COUNTY 30-90 DAY CYCLES',
        desc: 'Most municipal Texas health codes require commercial kitchens to manifest trap pumping on strict 30, 60, or 90-day intervals.'
      },
      {
        title: '25% FOG RULE EXCEEDED',
        desc: 'When combined floating grease and settled food solids exceed 25% of the total liquid depth of your interceptor.'
      },
      {
        title: 'SLOW KITCHEN SINK DRAINAGE',
        desc: 'Prep sinks, dishwashers, and floor drains backing up or draining sluggishly during peak service hours.'
      },
      {
        title: 'RANCID ODORS IN DINING OR PREP AREAS',
        desc: 'Sour grease odors penetrating into customer dining rooms or food prep stations.'
      }
    ],
    processKicker: 'COMMERCIAL PROCESS',
    processHeadline: 'OUR THOROUGH KITCHEN SERVICE',
    processIntro: 'We work around your operating hours so your dinner service is never disrupted.',
    processSteps: [
      {
        step: '01',
        title: 'Complete Waste & Grease Evacuation',
        desc: 'We pump all grease cap solids, wastewater, and heavy bottom food debris out of the trap.'
      },
      {
        step: '02',
        title: 'Hand Scrape Walls & Baffles',
        desc: 'Our technician scrapes hardened grease cakes from interior walls, sanitary tees, and divider screens.'
      },
      {
        step: '03',
        title: 'Clean Water Reset & Gasket Check',
        desc: 'We refill the trap with clean water for immediate grease capture and verify airtight lid gaskets to seal odors.'
      },
      {
        step: '04',
        title: 'City Manifest & Digital Compliance Log',
        desc: 'We submit your manifest to local city health authorities and provide digital proof for health inspectors.'
      }
    ],
    whatsIncludedTitle: 'EVERY GREASE TRAP RUN INCLUDES',
    whatsIncludedSubtitle: 'Turnkey service designed to pass any surprise city health inspection.',
    whatsIncluded: [
      '100% complete pumpout of all floating FOG and bottom food sediments',
      'Scraping of internal tank walls, crossover pipes, and sanitary baffles',
      'Gasket inspection and tight bolt resealing to stop kitchen odors',
      'Municipal FOG compliance tracking manifest filled and submitted'
    ],
    pricingRange: '$225 – $550+ (Indoor under-sink traps vs. large 1,000+ gallon outdoor in-ground interceptors)',
    pricingFactors: [
      'Trap size and location (indoor under-counter unit vs. outdoor drive-thru interceptor)',
      'Scheduled recurring contract frequency (monthly/quarterly discount vs. one-time emergency)'
    ],
    faqs: [
      {
        q: 'Do you offer scheduled recurring maintenance for restaurants?',
        a: 'Yes. We put Austin and Hill Country restaurants on automatic recurring schedules (monthly, bi-monthly, or quarterly) so you never miss a city compliance deadline.'
      },
      {
        q: 'Can you service our grease trap after hours so customers don’t smell anything?',
        a: 'Absolutely. We regularly schedule early morning or late night service windows before food preparation starts.'
      }
    ],
    relatedSlugs: ['commercial-septic-service', 'emergency-septic-service', 'septic-tank-pumping']
  },
  {
    slug: 'aerobic-septic-service',
    name: 'Aerobic Septic System Service',
    iconName: 'Wind',
    shortDesc: 'Certified maintenance provider servicing air compressors, aerator diffusers, chlorine chlorinators, and spray heads.',
    headline: 'AEROBIC OSSF SYSTEM MAINTENANCE & TESTING',
    subhead: 'State-certified maintenance for mechanical aerobic treatment units (ATUs) and surface spray fields.',
    heroImage: '/images/hero-truck.jpg',
    whatItMeansKicker: 'WHAT IT ACTUALLY MEANS',
    whatItMeansHeadline: 'MINI MUNICIPAL TREATMENT PLANTS RIGHT IN YOUR HILL COUNTRY YARD.',
    whatItMeans: 'Aerobic septic systems use electric air compressors and oxygen-loving bacteria to treat wastewater to near-drinking standards before disinfecting it with chlorine and spraying it over lawns. Because they contain mechanical pumps, aerators, and electronic control boxes, Texas state law requires routine inspections to protect public health.',
    whatItMeansImage: '/images/technician-inspection.jpg',
    whenNeededTitle: 'WHEN YOUR AEROBIC SYSTEM NEEDS SERVICE',
    whenNeeded: [
      {
        title: 'MANDATORY COUNTY MAINTENANCE CONTRACTS',
        desc: 'Texas counties require aerobic system owners to maintain a continuous contract with a licensed maintenance provider.'
      },
      {
        title: 'CONTROL BOX BUZZER OR RED LIGHT ON',
        desc: 'Indicates compressor failure, low air pressure, a tripped breaker, or a high-water pump alert.'
      },
      {
        title: 'CHLORINE TABLET DEPLETION',
        desc: 'When chlorinator tubes run empty, effluent is sprayed onto your lawn without proper sanitation.'
      },
      {
        title: 'SPRAY HEADS LEAKING OR CLOGGED',
        desc: 'Sprinklers not popping up or spraying irregular streams across your yard.'
      }
    ],
    processKicker: 'AEROBIC CHECKLIST',
    processHeadline: 'OUR MULTI-POINT AEROBIC INSPECTION',
    processIntro: 'We inspect mechanical, electrical, and biological health on every scheduled visit.',
    processSteps: [
      {
        step: '01',
        title: 'Air Compressor & Pressure Test',
        desc: 'We clean air intake filters, measure compressor PSI output, and verify oxygenation in the treatment chamber.'
      },
      {
        step: '02',
        title: 'Chlorine Residual & Disinfection Check',
        desc: 'We inspect chlorinator tablets or liquid bleach injectors, testing residual chlorine levels in the pump tank.'
      },
      {
        step: '03',
        title: 'Pump, Float & Alarm Diagnostics',
        desc: 'We test high-water alarms, verify automatic timer cycles, and ensure floats trigger smoothly.'
      },
      {
        step: '04',
        title: 'Spray Head Pressure & Filter Cleaning',
        desc: 'We flush inline effluent filters, check sprinkler nozzles, and clean spray patterns.'
      },
      {
        step: '05',
        title: 'County Reporting & Compliance Filing',
        desc: 'We electronically file your official maintenance report with your local county environmental health department.'
      }
    ],
    whatsIncludedTitle: 'OUR AEROBIC SERVICE COVERS',
    whatsIncludedSubtitle: 'Complete compliance peace of mind.',
    whatsIncluded: [
      'Comprehensive inspection of aerator compressor, diffusers, and air pressure lines',
      'Effluent pump testing and high-water audio/visual alarm verification',
      'Chlorinator check and tablet refill verification',
      'Sludge volume testing in trash and treatment chambers to advise when pumping is needed',
      'Electronic filing of compliance records with county OSSF permitting offices'
    ],
    pricingRange: '$275 – $450/year (Typical annual 3-visit maintenance contract in Central Texas)',
    pricingFactors: [
      'Number of state-mandated inspection visits per year (typically 3 visits every 4 months)',
      'Parts required (replacement air compressors, diaphragm kits, or effluent pumps)'
    ],
    faqs: [
      {
        q: 'Do I really need a maintenance contract for my aerobic system in Texas?',
        a: 'Yes. Most Central Texas counties (Travis, Hays, Williamson, etc.) legally require aerobic system owners to keep an active maintenance contract on file with the county health department.'
      },
      {
        q: 'Can I use regular swimming pool chlorine tablets in my septic chlorinator?',
        a: 'NEVER use pool chlorine! Pool chlorine (trichlor) produces explosive gases when mixed with sewage and does not dissolve properly. You must use specialized calcium hypochlorite septic tablets.'
      }
    ],
    relatedSlugs: ['septic-tank-pumping', 'septic-repairs', 'emergency-septic-service']
  },
  {
    slug: 'septic-tank-locating',
    name: 'Septic Tank Locating',
    iconName: 'MapPin',
    shortDesc: 'Non-destructive electronic pipe-sonde tracking and soil probing to pinpoint buried lids without destroying your lawn.',
    headline: 'ELECTRONIC SEPTIC TANK & LID LOCATING',
    subhead: 'Pinpoint buried access lids and lines accurately without tearing up your lawn.',
    heroImage: '/images/crew-suction-hose.jpg',
    whatItMeansKicker: 'WHAT IT ACTUALLY MEANS',
    whatItMeansHeadline: 'FINDING BURIED SYSTEMS WITHOUT THE GUESSWORK.',
    whatItMeans: 'Older homes and properties often lack septic plot maps or have tanks buried under 12 to 24 inches of rocky caliche soil. Instead of haphazardly digging holes across your yard, we use underground electromagnetic pipe sondes, flushable transmitters, and ground probes to pinpoint your tank lid and pipe trajectory down to the exact inch.',
    whatItMeansImage: '/images/crew-suction-hose.jpg',
    whenNeededTitle: 'WHEN YOU NEED TANK LOCATING',
    whenNeeded: [
      {
        title: 'NO IDEA WHERE THE TANK IS BURIED',
        desc: 'New home purchase with no OSSF records, blueprints, or prior pumping markers.'
      },
      {
        title: 'PLANNING A POOL, PATIO, OR FENCE',
        desc: 'Locating tank boundaries and drain field lines to prevent heavy machinery from crushing tanks or drilling fence posts into PVC.'
      },
      {
        title: 'INSTALLING FLUSH-MOUNT SURFACE RISERS',
        desc: 'Uncovering lids once to install green surface access risers, eliminating digging forever.'
      },
      {
        title: 'ROUTINE PUMPING IS DUE',
        desc: 'Finding and uncovering the primary cleanout lid before the vacuum truck arrives.'
      }
    ],
    processKicker: 'LOCATING PROCESS',
    processHeadline: 'NON-DESTRUCTIVE ACCURACY',
    processIntro: 'We rely on acoustic and electromagnetic detection rather than invasive exploratory digging.',
    processSteps: [
      {
        step: '01',
        title: 'County Blueprint Review',
        desc: 'We check available county OSSF permits and septic plot diagrams for original installation dimensions.'
      },
      {
        step: '02',
        title: 'Electronic Sonde Tracking',
        desc: 'We send a miniaturized transmitter into the main sewer pipe that emits an electromagnetic signal through the ground.'
      },
      {
        step: '03',
        title: 'Precision Surface Receiver Detection',
        desc: 'Our hand-held locator detects the exact beacon signal, depth, and boundary edge of the septic vessel.'
      },
      {
        step: '04',
        title: 'Targeted Turf Uncovering',
        desc: 'We carefully cut a neat sod flap directly over the lid, exposing the manhole with zero collateral lawn damage.'
      }
    ],
    whatsIncludedTitle: 'OUR LOCATING SERVICES INCLUDE',
    whatsIncludedSubtitle: 'Quick, tidy, and 100% accurate.',
    whatsIncluded: [
      'Electromagnetic sonde transmission through house cleanout or toilet entry',
      'Precision depth calculation (inches below surface)',
      'Marking of tank perimeter, inlet connection, and outlet distribution direction',
      'Optional riser installation quote to end underground digging permanently'
    ],
    pricingRange: '$125 – $250 (Often discounted or bundled when combined with a full pumping service)',
    pricingFactors: [
      'Burial depth and rock density above lid',
      'Standalone locating trip vs. bundled with pumping'
    ],
    faqs: [
      {
        q: 'Will you dig up my entire yard trying to find the tank?',
        a: 'No. Our electronic transmitters locate the tank to within inches from above ground before we ever pick up a shovel.'
      },
      {
        q: 'Once found, can you install a riser so we never have to find it again?',
        a: 'Yes! We strongly recommend installing a green surface riser with a child-proof safety lid so your tank is easily accessible for future routine pumping.'
      }
    ],
    relatedSlugs: ['septic-tank-pumping', 'septic-repairs', 'septic-inspection']
  },
  {
    slug: 'commercial-septic-service',
    name: 'Commercial Septic Service',
    iconName: 'Building2',
    shortDesc: 'High-capacity 2,500-gallon vacuum pumping and ongoing maintenance for Hill Country ranches, wedding venues, and RV parks.',
    headline: 'HEAVY COMMERCIAL SEPTIC PUMPING & MAINTENANCE',
    subhead: '2,500-gallon vacuum tankers built for Texas Hill Country ranches, wedding venues, and commercial facilities.',
    heroImage: '/images/monster-pumper-truck.jpg',
    whatItMeansKicker: 'WHAT IT ACTUALLY MEANS',
    whatItMeansHeadline: 'HIGH-VOLUME INFRASTRUCTURE BUILT FOR TOUGH TRADE DEMANDS.',
    whatItMeans: 'Commercial septic systems process high-volume surges of wastewater that would overwhelm standard residential systems. From busy Hill Country wedding venues and wineries to cattle ranches and RV parks, we bring 2,500-gallon commercial vacuum rigs, high-power suction hoses, and commercial grease management tailored to your enterprise.',
    whatItMeansImage: '/images/heritage-fleet.jpg',
    whenNeededTitle: 'WHO RELIES ON OUR COMMERCIAL FLEET',
    whenNeeded: [
      {
        title: 'HILL COUNTRY EVENT VENUES & WINERIES',
        desc: 'Handling massive weekend crowd surges with scheduled pre-event and post-event evacuations.'
      },
      {
        title: 'WORKING RANCHES & LIVESTOCK OPERATIONS',
        desc: 'Heavy-duty capacity for multi-residence ranch complexes, bunkhouses, and equestrian facilities.'
      },
      {
        title: 'RV PARKS & CAMPGROUNDS',
        desc: 'Routine bulk dump station pumpouts and high-capacity holding tank evacuations.'
      },
      {
        title: 'CHURCHES, SCHOOLS & COMMUNITY CENTERS',
        desc: 'Periodic volume cleanouts scheduled outside of school or service hours.'
      }
    ],
    processKicker: 'COMMERCIAL RELIABILITY',
    processHeadline: 'HOW WE SERVE COMMERCIAL CLIENTS',
    processIntro: 'We understand that commercial downtime equals lost revenue. We operate with strict punctuality and maximum discretion.',
    processSteps: [
      {
        step: '01',
        title: 'Volume Capacity Assessment',
        desc: 'We review peak volume loads, holding capacities, and municipal/TCEQ disposal compliance needs.'
      },
      {
        step: '02',
        title: 'Discreet, Off-Peak Scheduling',
        desc: 'We dispatch during your operational downtime so guests, diners, or venue visitors are never disturbed.'
      },
      {
        step: '03',
        title: 'Heavy Commercial Tank Evacuation',
        desc: 'Our 2,500-gallon vacuum monster rigs rapidly evacuate large commercial holding tanks without lingering odors.'
      },
      {
        step: '04',
        title: 'Legal Manifest Hand-Off & Records',
        desc: 'You receive stamped TCEQ waste manifests for municipal corporate record keeping and county compliance.'
      }
    ],
    whatsIncludedTitle: 'COMMERCIAL SERVICE CAPABILITIES',
    whatsIncludedSubtitle: 'Equipped to handle up to 10,000+ gallon multi-tank commercial configurations.',
    whatsIncluded: [
      'Commercial high-vacuum tankers (2,500-gallon capacity per rig)',
      'Multi-tank simultaneous evacuations for large venue complexes',
      'Lift station and commercial grinder pump diagnostic evaluations',
      'Emergency 24/7 priority dispatch agreements for commercial partners',
      'All-inclusive disposal manifests for state and municipal health audits'
    ],
    pricingRange: 'Custom Commercial Volume Quotes (Based on total gallonage and service frequency)',
    pricingFactors: [
      'Total volume evacuated (tanks ranging from 2,500 to 15,000+ gallons)',
      'Recurring service agreement vs. one-time emergency event pumpout',
      'Distance and access terrain on large rural acreage'
    ],
    faqs: [
      {
        q: 'Can your trucks handle multiple tanks on a large ranch in one visit?',
        a: 'Yes. Our 2,500-gallon commercial rigs can evacuate multiple residential and commercial tanks across your property in a single organized visit.'
      },
      {
        q: 'Do you offer emergency weekend dispatch for wedding venues?',
        a: 'Yes. We partner with Hill Country event venues to provide on-call standby and emergency dispatch if an unexpected high-water alert threatens a Saturday wedding.'
      }
    ],
    relatedSlugs: ['septic-tank-pumping', 'grease-trap-pumping', 'emergency-septic-service']
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}
