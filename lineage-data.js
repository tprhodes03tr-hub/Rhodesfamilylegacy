window.RHODES_LINEAGE_DATABASE = {
  ancestors: [
    {
      id: "parents",
      keywords: ["elroy", "fannie may", "parents", "father", "mother", "elroy rhodes", "elroy roads", "rhodes", "roads", "rode", "rowds", "fannie may mitchell"],
      name: "Elroy Rhodes & Fannie May Mitchell Rhodes",
      stream: "Core Parental Foundation",
      estimatedEra: "1940s – 2020s",
      temporalShift: "Direct Lineage Anchor",
      historicalContext: "Root foundational branch representing the union of Elroy Rhodes and Fannie May Mitchell Rhodes.",
      xChromosomeLink: "Autosomal Convergence Zone",
      chromosomeZone: "Chromosomes 1, 3, 5, & 12",
      historicalNote: "Primary parental tier anchoring direct familial descent.",
      image: "elroy-fannie-parents.jpg"
    },
    {
      id: "luetta-thomas",
      keywords: ["luetta", "luetta thomas", "grandmother"],
      name: "Luetta Thomas",
      stream: "Paternal Grandmother Stream",
      estimatedEra: "Early-to-Mid 20th Century",
      temporalShift: "Grandparent Tier",
      historicalContext: "Paternal grandmother lineage pillar connecting the Thomas family branches.",
      xChromosomeLink: "Verified Matriarchal Marker",
      chromosomeZone: "Chromosomes 3, 8, & X",
      historicalNote: "Core ancestral node for the Thomas lineage heritage.",
      image: "luetta-thomas.jpg"
    },
    {
      id: "fannie-may-wright",
      keywords: ["fannie may wright", "fannie wright", "grandmother"],
      name: "Fannie May Wright",
      stream: "Maternal Grandmother Stream",
      estimatedEra: "Early-to-Mid 20th Century",
      temporalShift: "Grandparent Tier",
      historicalContext: "Maternal grandmother lineage pillar linking the Wright and Mitchell streams.",
      xChromosomeLink: "Verified Matriarchal Marker",
      chromosomeZone: "Chromosomes 2, 7, & 14",
      historicalNote: "Core ancestral node for the Wright lineage heritage.",
      image: "fannie-may-wright.jpg"
    },
    {
      id: "thomas",
      keywords: ["thomas", "george", "minnie", "george general thomas", "minnie johnson thomas", "hatten"],
      name: "George General Thomas & Minnie Johnson Thomas",
      stream: "Thomas & Johnson Great-Grandparents Pillar",
      estimatedEra: "Late 19th – Mid 20th Century",
      temporalShift: "Great-Grandparent Tier",
      historicalContext: "Foundational great-grandparents uniting the Thomas and Johnson bloodlines.",
      xChromosomeLink: "Chromosome 1 & 3 Convergence",
      chromosomeZone: "Chromosomes 1 & 3",
      historicalNote: "Verified historical pillar linking extended family branches.",
      image: "george-minnie-thomas.jpg"
    },
    {
      id: "wright",
      keywords: ["wright", "aaron", "rebecca", "aaron bruce wright", "rebecca mac wright", "mac", "patience"],
      name: "Aaron Bruce Wright & Rebecca Mac Wright",
      stream: "Wright & Johnson Great-Grandparents Pillar",
      estimatedEra: "Late 19th – Mid 20th Century",
      temporalShift: "Great-Grandparent Tier",
      historicalContext: "Foundational great-grandparents anchoring the Wright and Mac lineage.",
      xChromosomeLink: "Yalobusha Ledger / Autosomal Link",
      chromosomeZone: "Chromosomes 4, 9, & 11",
      historicalNote: "Verified historical pillar connecting foundational ancestral streams.",
      image: "aaron-rebecca-wright.jpg"
    }
  ],

  queryDatabase: function(searchTerm, chrFilter) {
    const term = (searchTerm || "").toLowerCase().trim();
    for (let i = 0; i < this.ancestors.length; i++) {
      const anc = this.ancestors[i];
      for (let j = 0; j < anc.keywords.length; j++) {
        if (term.includes(anc.keywords[j])) {
          return anc;
        }
      }
    }
    // Fallback object so unmatched terms don't break rendering
    return {
      id: "parents",
      name: searchTerm ? `Query: "${searchTerm}" (Default Anchor)` : "Elroy Rhodes & Fannie May Mitchell Rhodes",
      stream: "Core Parental Foundation",
      estimatedEra: "1940s – 2020s",
      temporalShift: "Direct Lineage Anchor",
      historicalContext: "Root foundational branch representing the union of Elroy Rhodes and Fannie May Mitchell Rhodes.",
      xChromosomeLink: "Autosomal Convergence Zone",
      chromosomeZone: "Chromosomes 1, 3, 5, & 12",
      historicalNote: "Primary parental tier anchoring direct familial descent.",
      image: "elroy-fannie-parents.jpg"
    };
  }
};
