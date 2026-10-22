// RHODES FAMILY LEGACY - DYNAMIC LINEAGE & GENOMIC DATABASE
window.RHODES_LINEAGE_DATABASE = {
  ancestors: {
    "johnson": {
      name: "Patience Johnson & Family Line",
      stream: "Wright & Johnson Foundation (Yalobusha Ledger)",
      xChromosomeLink: "Strong X-chromosome triangulated match cluster linking maternal inheritance and ancestral convergence.",
      historicalNote: "Foundational matriarchal lineage documenting multi-generational resilience, land stewardship, and deep roots across Mississippi and the American South."
    },
    "wright": {
      name: "Aaron Bruce Wright Sr.",
      stream: "Wright Ledger & Yalobusha Foundation",
      xChromosomeLink: "Autosomal segment alignment across Chromosome 1 and 3 overlap zones.",
      historicalNote: "Documented patriarch, trapper, fisherman, and shoemaker whose legacy anchors the family's deep archival paper trail."
    },
    "colbert": {
      name: "The Colbert & Chickasaw Sovereign Stream",
      stream: "Colbert / Chickasaw Nation Pillar",
      xChromosomeLink: "High-affinity X-chromosome and autosomal segment matches tracing native and colonial diplomatic roots.",
      historicalNote: "Ties directly to Chief James Logan Colbert, Natchez Trace historical figures, and sovereign land networks."
    },
    "mitchell": {
      name: "Tommy Philip Mitchell & Thomas Mitchell",
      stream: "Delta Pulpit & Spencer Compact",
      xChromosomeLink: "Verified maternal grandfather and great-grandfather network.",
      historicalNote: "Educators, musicians, and community store owners preserving oral history and generational fortitude across Mississippi and Detroit."
    },
    "hatten": {
      name: "Benjamin Hatten & Luetta Thomas",
      stream: "Hatten Patriarchal Forge & Flemings",
      xChromosomeLink: "Y-DNA J-L283 lineage markers and paternal baseline convergence.",
      historicalNote: "US Army WWII veterans in Japan, blacksmithing heritage, and deep patriarchal roots spanning Arkansas lumber networks."
    },
    "fox": {
      name: "Laura Flemings & Fox Branch",
      stream: "Hatten Patriarchal Forge & Flemings",
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
        xChromosomeLink: "Active match across Chromosome 1/3 overlap and X-chromosome maternal transmission paths.",
        historicalNote: "Linked to the Colbert, Johnson, and Wright foundational lines."
      };
    }
    
    return {
      name: "Seven Rivers Sovereign Archive",
      stream: "Universal Rhodes Family Legacy Node",
      xChromosomeLink: "Documented across 300+ years of American, Caribbean, and global ancestral convergence.",
      historicalNote: "Search by specific ancestor name (e.g., Johnson, Wright, Colbert, Mitchell, Hatten, Fox) to pull precise archival records."
    };
  }
};
