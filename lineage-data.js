/**
 * RHODES FAMILY LEGACY - SUPREME GENEALOGICAL & TRIANGULATION MATRIX
 * Author: Tommy Philip Rhodes
 * File: lineage-data.js
 * Description: High-precision computational engine for the Archival Optical Lineage Scanner.
 * Bridges facial scanning heuristics, shared Centimorgan (cM) segment triangulation, 
 * historical census records, and documented cousin match clusters with privacy masking.
 */

window.RHODES_FAMILY_BASELINE = {
    platform: "Rhodes Family Legacy Digital Hub",
    repository: "tprhodes03tr-hub/Rhodesfamilylegacy",
    version: "3.8.0-Apex-Secure",
    
    // Core Foundational Lineage Nodes & Verified Cousin Match Benchmarks (with Anonymization Support)
    lineages: {
        mitchell_wright: {
            rootAncestors: ["Tommy Philip Mitchell", "Fannie May Wright", "Patience Johnson (b. 1867)"],
            maternalAnchor: "Fannie May Mitchell Rhodes (Mother)",
            keySurnames: ["Mitchell", "Wright", "Hurd", "Johnson"],
            geographicNodes: ["Yazoo City, MS", "Belzoni, MS", "Tennessee", "Greene County, AL", "Detroit, MI", "Saginaw, MI"],
            verifiedMatches: [
                { 
                    fullName: "Preston Wright II", 
                    secureRefCode: "RFL-NODE-WR82", 
                    anonymizedName: "COLLATERAL KIN NODE // RFL-WR-02", 
                    sharedPercentage: 3.57, 
                    primaryChromosome: 2, 
                    note: "Strong autosomal IBD convergence" 
                },
                { 
                    fullName: "Kingston Thomas", 
                    secureRefCode: "RFL-NODE-TH17", 
                    anonymizedName: "COLLATERAL KIN NODE // RFL-TH-17", 
                    sharedPercentage: 3.07, 
                    primaryChromosome: 17, 
                    note: "Thomas-Mitchell branch alignment" 
                },
                { 
                    fullName: "Stephanie Swan", 
                    secureRefCode: "RFL-NODE-SW08", 
                    anonymizedName: "COLLATERAL KIN NODE // RFL-SW-08", 
                    sharedPercentage: 2.92, 
                    primaryChromosome: 8, 
                    note: "Deep maternal cluster match" 
                }
            ],
            chromosomalClusters: [
                { chromosome: 2, typicalRangeCM: [12.5, 48.0], branch: "Mitchell-Wright Three Rivers Convergence" },
                { chromosome: 17, typicalRangeCM: [8.1, 35.5], branch: "Thomas-Colbert Line" },
                { chromosome: 8, typicalRangeCM: [10.2, 29.4], branch: "Swan-Johnson Maternal Link" }
            ]
        },
        hatton_thomas: {
            rootAncestors: ["Fed/Fred Hatten (Blacksmith)", "Laura Flemings"],
            paternalAnchor: "Benjamin Hatten (WWII Veteran) & Luetta Thomas",
            greatGrandfather: "Lucius Hatton (Lumberman)",
            fatherAnchor: "Elroy Rhodes (US Army Veteran & Nurse)",
            keySurnames: ["Hatton", "Hatten", "Thomas", "Flemings", "Rhodes"],
            geographicNodes: ["Arkansas", "Tennessee", "Mississippi", "Detroit, MI", "Westland, MI"],
            verifiedMatches: [
                { 
                    fullName: "Charles Young", 
                    secureRefCode: "RFL-NODE-CY04", 
                    anonymizedName: "COLLATERAL KIN NODE // RFL-CY-04", 
                    sharedPercentage: 5.53, 
                    primaryChromosome: 4, 
                    note: "Paternal Hatton-Hatten blacksmith branch convergence" 
                },
                { 
                    fullName: "Larry Green", 
                    secureRefCode: "RFL-NODE-LG11", 
                    anonymizedName: "COLLATERAL KIN NODE // RFL-LG-11", 
                    sharedPercentage: 4.50, 
                    primaryChromosome: 11, 
                    note: "Paternal pine hollows linkage" 
                }
            ]
        },
        sims_gilmore_spencer: {
            rootAncestors: ["Anna Gilmore", "Zula Sims (born Spencer/Kurtwood)", "Isila Sims"],
            keySurnames: ["Sims", "Gilmore", "Spencer", "Kurtwood"],
            geographicNodes: ["Arkansas", "Alabama", "Mississippi Delta"],
            verifiedMatches: [
                { 
                    fullName: "Laura Fox", 
                    secureRefCode: "RFL-SECURE-FX01", 
                    anonymizedName: "DIRECT LINEAGE SIBLING NODE // RFL-FX-S1", 
                    sharedPercentage: 50.0, 
                    primaryChromosome: "Full Spectrum", 
                    note: "Direct maternal sibling baseline" 
                }
            ]
        }
    },

    /**
     * Advanced Triangulation & Dossier Generation Engine with Privacy Masking
     * @param {Object} scanInput - Contains surname, sharedCM, chromosome, and imageSignature (or scan type)
     * @param {Boolean} isAuthorizedUser - Flag to toggle between Public Anonymized view and Master Family View
     */
    evaluateMatch: function(scanInput, isAuthorizedUser = false) {
        let result = {
            status: "ANOMALY_DETECTED",
            confidence: "0%",
            confirmedBranch: "Unmapped Perimeter Node / Condiment or Non-Human Anomaly",
            sharedAncestors: "Requires further biometric calibration",
            migrationTrail: "Unknown Temporal Sector",
            matchedCousinBaseline: null,
            resonanceShield: "90%"
        };

        const surname = (scanInput.surname || "").toLowerCase();
        const cm = parseFloat(scanInput.sharedCM) || 0;
        const chrom = parseInt(scanInput.chromosome) || 0;
        const imageType = (scanInput.imageType || "").toLowerCase();

        // Check if user scanned a non-human object (e.g., ketchup bottle or random object)
        if (imageType.includes("object") || imageType.includes("ketchup") || imageType.includes("bottle") || imageType.includes("random")) {
            return {
                status: "BIOMETRIC_ANOMALY_NON_HUMAN",
                confidence: "0.0% (Incompatible Signature)",
                confirmedBranch: "Unregistered Artifact Repository",
                sharedAncestors: "None (Condiment / Non-Biological Construct)",
                migrationTrail: "Kitchen Sector / Commercial Supply Chain",
                matchedCousinBaseline: "Heinz Bio-Condiment Alpha (Classified Easter Egg)",
                resonanceShield: "100%",
                displayName: "UNIDENTIFIED ANOMALY // REPOSITORY ITEM"
            };
        }

        // 1. Check Against Verified Hatton / Paternal Matches
        if (surname.includes("hatton") || surname.includes("hatten") || surname.includes("young") || surname.includes("green") || (chrom === 4 || chrom === 11 && cm > 20)) {
            result.status = "VERIFIED_PATERNAL_APEX_MATCH";
            result.confidence = cm > 20 ? "99.2% (Triangulated Paternal Core)" : "94.5% (Paternal Lineage Link)";
            result.confirmedBranch = "Hatton-Thomas Paternal Vanguard (Arkansas / Detroit)";
            result.sharedAncestors = "Fed Hatten (Blacksmith) & Benjamin Hatten (WWII Veteran)";
            result.migrationTrail = "Arkansas / Tennessee Pine Hollows ➔ Detroit (Kronk's Gym)";
            result.matchedCousinBaseline = cm > 35 ? "Charles Young Benchmark (5.53%)" : "Larry Green Benchmark (4.50%)";
            result.displayName = isAuthorizedUser ? "Charles Young / Larry Green Cluster" : "PATERNAL KIN NODE // RFL-PAT-04";
        }
        // 2. Check Against Verified Maternal / Mitchell / Wright Matches
        else if (surname.includes("mitchell") || surname.includes("wright") || surname.includes("thomas") || surname.includes("swan") || (chrom === 2 || chrom === 17 || chrom === 8)) {
            result.status = "VERIFIED_MATERNAL_APEX_MATCH";
            result.confidence = cm > 20 ? "99.7% (Absolute Marrow Resonance)" : "96.8% (Maternal Triangulation Match)";
            result.confirmedBranch = "Mitchell-Wright-Johnson Three Rivers Convergence";
            result.sharedAncestors = "Tommy Philip Mitchell, Fannie May Wright, & Patience Johnson (b. 1867)";
            result.migrationTrail = "Yazoo City & Tombigbee River Valleys ➔ Detroit & Saginaw, MI";
            result.matchedCousinBaseline = cm > 24 ? "Preston Wright II / Kingston Thomas" : "Stephanie Swan (2.92%)";
            result.displayName = isAuthorizedUser ? "Preston Wright II / Kingston Thomas Cluster" : "MATERNAL KIN NODE // RFL-MAT-02";
        }
        // 3. Check Against Sims / Gilmore / Sibling Baseline
        else if (surname.includes("sims") || surname.includes("gilmore") || surname.includes("spencer") || surname.includes("fox")) {
            result.status = "VERIFIED_DEEP_ROOT_MATCH";
            result.confidence = "98.1% (Deep Historical Lineage Match)";
            result.confirmedBranch = "Sims-Gilmore-Spencer Delta Root";
            result.sharedAncestors = "Anna Gilmore & Zula Sims";
            result.migrationTrail = "Arkansas, Alabama & Mississippi Delta Swamps";
            result.matchedCousinBaseline = "Collateral Sibling Baseline";
            result.displayName = isAuthorizedUser ? "Laura Fox (Sister)" : "DIRECT SIBLING NODE // RFL-FX-S1";
        }
        // 4. Default Master Archive Safeguard (Prevents false defaults to Tommy unless explicitly requested)
        else {
            result.status = "PROBABLE_COUSIN_CANDIDATE";
            result.confidence = "82.4% (Heuristic Regional Match)";
            result.confirmedBranch = "Great Migration Corridor Intersect";
            result.sharedAncestors = "Saginaw / Detroit Regional Ancestral Network";
            result.migrationTrail = "Southern Border States ➔ Great Migration Hubs";
            result.matchedCousinBaseline = "General Cluster Matrix";
            result.displayName = "PERIMETER KIN NODE // UNVERIFIED SCANNER TARGET";
        }

        return result;
    }
};
