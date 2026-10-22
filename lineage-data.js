// RHODES FAMILY LEGACY - DYNAMIC LINEAGE, HAPLOGROUP & GLOBAL ANCESTRY DATABASE
window.RHODES_LINEAGE_DATABASE = {
  ancestors: {
    "jl283": {
      name: "Y-DNA Haplogroup J-L283 (Paternal Lineage)",
      stream: "Levantine, Bronze Age & Hatten Patriarchal Pillar",
      estimatedEra: "Circa 2000 BCE – Present (4,000+ Year Paternal Bottleneck)",
      temporalShift: "Ancient Levant, Etruscan & Global Diaspora Epoch",
      historicalContext: "Tracing deep paternal markers from the ancient Middle East and Mediterranean (associated with ancient Levantine and Kohanim priestly lineages) through European migration corridors, ultimately anchoring in the American South and Industrial Detroit via Benjamin Hatten and the Hatten-Fleming patriarchal line.",
      xChromosomeLink: "Paternal Y-DNA direct inheritance path (J-L283 / J2b-L283).",
      historicalNote: "Represents the unbroken paternal genetic architecture connecting ancient Mediterranean civilizations to your family's documented military service and craftsmanship."
    },
    "nigerian": {
      name: "West African Heritage (Nigerian & Mali Stream)",
      stream: "Transatlantic Ancestral Convergence Pillar",
      estimatedEra: "Pre-Colonial West African Empires through Antebellum America",
      temporalShift: "Sengambian, Yoruba, Igbo & Mali Imperial Epochs",
      historicalContext: "Reflects deep ancestral roots tied to West African civilizations (such as the Mali Empire, Yoruba, and Igbo domains). During the transatlantic era, these lineages became foundational to the cultural, agricultural, and spiritual survival of families across the American South, Mississippi Delta, and Caribbean networks.",
      xChromosomeLink: "Autosomal segment distribution across core chromosomes linking multi-continental heritage.",
      historicalNote: "Honors the rich cultural, linguistic, and genetic contributions of West African ancestors woven directly into the foundational American family fabric."
    },
    "johnson": {
      name: "Patience Johnson & Family Line",
      stream: "Wright & Johnson Foundation (Yalobusha Ledger)",
      estimatedEra: "Circa 1820 – 1880 (4th - 5th Great-Grandparent Horizon)",
      temporalShift: "Era of Reconstruction & Antebellum Land Stewardship",
      historicalContext: "U.S. Presidents: James Monroe through Rutherford B. Hayes. America was navigating westward expansion, the turbulent aftermath of the Civil War, Reconstruction policies, and localized public health crises like recurring yellow fever outbreaks across the Mississippi River valley.",
      xChromosomeLink: "Strong X-chromosome triangulated match cluster linking maternal inheritance and ancestral convergence.",
      historicalNote: "Foundational matriarchal lineage documenting multi-generational resilience, land stewardship, and deep roots across Mississippi and the American South."
    },
    "wright": {
      name: "Aaron Bruce Wright Sr.",
      stream: "Wright Ledger & Yalobusha Foundation",
      estimatedEra: "Circa 1850 – 1910 (Great-Grandparent / 3rd Great-Grandparent Horizon)",
      temporalShift: "Late 19th Century Frontier & Tradesman Epoch",
      historicalContext: "U.S. Presidents: Millard Fillmore through William Howard Taft. The nation was expanding via transcontinental railroads, experiencing the industrial revolution, weathering economic panics, and dealing with turn-of-the-century public health sanitation movements and localized influenza outbreaks.",
      xChromosomeLink: "Autosomal segment alignment across Chromosome 1 and 3 overlap zones.",
      historicalNote: "Documented patriarch, trapper, fisherman, and shoemaker whose legacy anchors the family's deep archival paper trail."
    },
    "colbert": {
      name: "The Colbert & Chickasaw Sovereign Stream",
      stream: "Colbert / Chickasaw Nation Pillar",
      estimatedEra: "Circa 1780 – 1850 (Deep Historical Sovereign Horizon)",
      temporalShift: "Natchez Trace & Colonial Diplomatic Era",
      historicalContext: "U.S. Presidents: George Washington through Zachary Taylor. America was defining its borders, establishing the Natchez Trace trade routes, and enforcing federal Indian removal policies alongside frontier smallpox vaccination campaigns.",
      xChromosomeLink: "High-affinity X-chromosome and autosomal segment matches tracing native and colonial diplomatic roots.",
      historicalNote: "Ties directly to Chief James Logan Colbert, Natchez Trace historical figures, and sovereign land networks spanning over 300 years."
    },
    "mitchell": {
      name: "Tommy Philip Mitchell & Thomas Mitchell",
      stream: "Delta Pulpit & Spencer Compact",
      estimatedEra: "Circa 1870 – 1940 (Grandparent / Great-Grandparent Horizon)",
      temporalShift: "Turn-of-the-Century Delta Education & Community Epoch",
      historicalContext: "U.S. Presidents: Ulysses S. Grant through Franklin D. Roosevelt. Spanned the Jim Crow era, the Great Migration northward toward industrial hubs like Detroit, the 1918 influenza pandemic, and the economic hardships of the Great Depression.",
      xChromosomeLink: "Verified maternal grandfather and great-grandfather network.",
      historicalNote: "Educators, musicians, and community store owners preserving oral history and generational fortitude across Mississippi and Detroit."
    },
    "hatten": {
      name: "Benjamin Hatten & Luetta Thomas",
      stream: "Hatten Patriarchal Forge & Flemings",
      estimatedEra: "Circa 1900 – 1950 (Mid-20th Century / WWII Horizon)",
      temporalShift: "Industrial Detroit & Global Service Epoch",
      historicalContext: "U.S. Presidents: William McKinley through Harry S. Truman. Marked by the mobilization of World War II, military service in the Pacific and Japan, the booming Detroit auto and manufacturing industry, and postwar community building.",
      xChromosomeLink: "Y-DNA J-L283 lineage markers and paternal baseline convergence.",
      historicalNote: "US Army WWII veterans in Japan, blacksmithing heritage, and deep patriarchal roots spanning Arkansas lumber networks."
    },
    "fox": {
      name: "Laura Flemings & Fox Branch",
      stream: "Hatten Patriarchal Forge & Flemings",
      estimatedEra: "Circa 1900 – 1960 (Mid-Century Migration Horizon)",
      temporalShift: "Great Migration & Family Continuity Era",
      historicalContext: "U.S. Presidents: Theodore Roosevelt through Dwight D. Eisenhower. The transformation of urban America, the civil rights movement taking shape, and families establishing permanent roots across Michigan.",
      xChromosomeLink: "Paternal grand-parental line convergence.",
      historicalNote: "Core family line connected to ancestral migration corridors and historical documentation."
    }
  },
  
  queryDatabase: function(searchTerm, chromosomeInput) {
    const term = (searchTerm || "").toLowerCase().trim();
    
    for (let key in this.ancestors) {
      if (term.includes(key) || term.includes(this.ancestors[key].name.toLowerCase())) {
        return this.ancestors[key];
      }
    }
    
    if (chromosomeInput && (chromosomeInput.includes("1") || chromosomeInput.includes("3") || chromosomeInput.includes("x"))) {
      return {
        name: "Core Autosomal & X-Chromosome Triangulation Zone",
        stream: "Seven Rivers Convergence Matrix",
        estimatedEra: "Multi-Generational Convergence (300+ Year Span)",
        temporalShift: "Deep Ancestral Overlap Matrix",
        historicalContext: "Spans multiple epochs of American history from colonial trade routes to 20th-century industrial migration corridors.",
        xChromosomeLink: "Active match across Chromosome 1/3 overlap and X-chromosome maternal transmission paths.",
        historicalNote: "Linked to the Colbert, Johnson, and Wright foundational lines spanning across the Americas."
      };
    }
    
    return {
      name: "Seven Rivers Sovereign Archive",
      stream: "Universal Rhodes Family Legacy Node",
      estimatedEra: "Historical Baseline (300+ Years in the Americas & Global Roots)",
      temporalShift: "Universal Chronology Index",
      historicalContext: "A continuous tapestry spanning from ancient Levantine/Mediterranean haplogroups and West African empires to centuries of American history.",
      xChromosomeLink: "Documented across multi-continental ancestral convergence and genetic markers.",
      historicalNote: "Search by specific terms (e.g., jl283, nigerian, mali, johnson, wright, colbert, mitchell, hatten, fox) to pull precise temporal epochs, haplogroups, and archival records."
    };
  }
};
