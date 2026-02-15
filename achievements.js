const achievementsData = {
  "SELECTOR_MAP": {
    "Systems_Architect_ERP_Specialist": [1, 3, 13, 27, 28, 29, 30],
    "Supply_Chain_Operations_Director": [1, 5, 8, 22, 23, 26, 27],
    "Data_Analytics_BI_Manager": [2, 7, 13, 14, 15, 22, 23, 25],
    "Compliance_Risk_Audit_Manager": [3, 6, 10, 12, 16, 24, 30],
    "Demand_Planner_Inventory_Strategist": [4, 7, 9, 15, 19, 20, 21],
    "Logistics_Continuous_Improvement": [8, 10, 11, 12, 17, 20, 24],
    "Process_Automation_VBA_Developer": [5, 13, 14, 25, 28, 29],
    "Generic_Data_Analyst": [7, 14, 15, 18, 23, 24],
    "Insights_Analyst_Strategy": [2, 4, 11, 15, 17, 18]
  },
  "MASTER_LIST": {
    "1": "Solo-architected and engineered a proprietary, ERP-Grade Product Lifecycle Management (PLM) ecosystem using a 6-stage closed-loop architecture to unify 62 national branches into a synchronized 'Launchpad' command portal.",
    "2": "Architected a specialized 5-channel reporting infrastructure (Healthcare, HORECA, P&C, Confectionery, and Hospitality) to capture granular movement data and high-compliance SOH tracking.",
    "3": "Established a 'Golden Thread' data lineage that synchronized fragmented regional data into a high-visibility national standard, ensuring every inventory decision was backed by absolute financial liability.",
    "4": "Revolutionized NPD via a high-precision Allocation Engine that replaced subjective volume 'guesses' with mandatory store-level templates and formulaic 'Pipeline + 3 weeks' demand logic.",
    "5": "Engineered an automated 62-branch synchronization tool with a high-contrast 'Lemon-on-Blue' UI to allow branch staff to instantly identify and execute local demand requirements.",
    "6": "Hard-coded a 28-day 'Accountability Loop' with stealth VBA username capture, providing an audit trail of financial liability for all national stock requests.",
    "7": "Developed a Predictive Uplift Modeling tool correlating 12 months of historical QlikView sales data against specific customer-group sales shares.",
    "8": "Pioneered a 'Hub-and-Satellite' demand aggregation logic that automatically identified regional site requirements and rolled them into Hub supply orders.",
    "9": "Implemented 'Net-Demand' (Zero-Waste) logic synchronized with P08 4-4-5 financial calendars to align procurement with major national promotional windows.",
    "10": "Deployed the 'Logistics Investigator Trident,' a forensic auditing system utilizing minute-by-minute analysis of processing times vs. site-specific cut-offs.",
    "11": "Integrated 'PD Report' intelligence and field research to uncover hidden logistical nuances, including transit-day repacking and 'Direct Order' flows.",
    "12": "Engineered a cost-recouping diagnostic that detected Out-of-Sequence deliveries and mis-ships, recovering hidden warehousing and transport costs.",
    "13": "Authored a high-speed 7:30 AM VBA forensic capture to 'freeze' national SOH and SOO data, providing a 'Point-in-Time' truth for diagnostic analytics.",
    "14": "Engineered a mass-scale reporting architecture automating the generation and distribution of 256 specialized reports daily across 5-channel classifications.",
    "15": "Developed multi-variable diagnostic logic to identify 'Ghost Sales' and 'Death Spiral' demand failures where movements failed to reflect actual customer demand.",
    "16": "Advanced contractual integrity via a Triple-Layer S/L Engine, benchmarking performance against the 98% contractual gold standard.",
    "17": "Implemented an 'Inherent Performance Audit' leveraging chronological gaps in reports to objectively track Account Manager responsiveness to failures.",
    "18": "Integrated bottom-line financial impact mapping (Lost Cartons x Cost/List Price) and stealth 'Delta-mode' monitoring for commercial leverage.",
    "19": "Engineered the 'Inventory Health Shield' to monitor product life cycles, targeting items reaching end-of-promo phases to prevent warehousing costs.",
    "20": "Mandated a 'Zero Residual' stock outcome by integrating real-time SOH monitoring against declining demand curves, triggering automated 'Exit Alerts'.",
    "21": "Facilitated seamless transition of stock into clearance or general sale before the expiry of the accountability window to mitigate inventory write-offs.",
    "22": "Architected a Consolidated National Dashboard aggregating performance data from 62 branches into a single executive interface.",
    "23": "Engineered a multi-tier organizational hierarchy (Store > Customer Group > Channel > State > National) with 'KPI Normalization' for fair benchmarking.",
    "24": "Programmed 'Red-Flag' exception logic and dynamic trend visualization to automatically surface the bottom 5% of performers to leadership.",
    "25": "Single-handedly coded a high-speed VBA distribution engine to handle the automated delivery of 256 daily reports by a strict 9:00 AM deadline.",
    "26": "Engineered a dynamic stakeholder matrix and context-aware distribution system ensuring leadership only received data relevant to their jurisdictions.",
    "27": "Built-in system-latency protection and error-handling logic to verify ERP data synchronization before distribution.",
    "28": "Designed a centralized Master GUI that unified 10 distinct analytical tools into a seamless user experience for NPD, Promo, and Forensic tools.",
    "29": "Engineered 'Shared Memory' logic and cross-tool synchronization to ensure data updates in one engine reflected automatically in all others.",
    "30": "Embedded stealth Delta-mode security and global configuration management, creating a single-point-of-control for national variables.",
	"31": "Engineered a 'Sandbox-to-Live' deployment workflow for seasonal allocations (Easter/Christmas), utilizing custom macros to audit product site-linkage across 62 warehouses before bulk-loading multi-million dollar orders into the ERP.",
	"32": "Recognized by executive retail leadership for high-velocity data management, successfully executing critical range updates for Woolworths Petrol within 2-hour emergency windows to safeguard promotional launches.",
	"33": "Led a Master Data Governance initiative to sanitize 1,500+ SKU range lines for major accounts (Woolworths, AusPost), eliminating obsolete data to ensure system parity and 100% delivery acceptance."
  }
};
// Normalise numeric keys for MASTER_LIST
Object.keys(achievementsData.MASTER_LIST).forEach(k => {
  const n = Number(k);
  if (!Number.isNaN(n) && !achievementsData.MASTER_LIST[n]) {
    achievementsData.MASTER_LIST[n] = achievementsData.MASTER_LIST[k];
  }
});

