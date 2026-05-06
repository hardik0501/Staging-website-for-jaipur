const fs = require('fs');

const actualFiles = [
  "01.-archival-policy.pdf",
  "02.-preservation-Policy.pdf",
  "03.-policy-for-determination-of-materiality.pdf",
  "Board-Meeting-Notice-for-consideration-and-approval-of-resignation-of-Independent-Director.pdf",
  "Board-Meeting-Notice-for-the-Quarter-Ended-30.06.2021.pdf",
  "Board-Meeting-Notice-for-the-Quarter-Ended-30.06.2023.pdf",
  "Board-Meeting-Notice-for-the-Quarter-Ended-30.09.2020.pdf",
  "Board-Meeting-Notice-for-the-Quarter-Ended-30.09.2021.pdf",
  "Board-Meeting-Notice-for-the-Quarter-Ended-30.09.2022.pdf",
  "Board-Meeting-Notice-for-the-Quarter-Ended-31.03.2020.pdf",
  "Board-Meeting-Notice-for-the-Quarter-Ended-31.03.2021.pdf",
  "Board-Meeting-Notice-for-the-Quarter-Ended-31.03.2022.pdf",
  "Board-Meeting-Notice-for-the-Quarter-Ended-31.03.2023.pdf",
  "Board-Meeting-Notice-for-the-Quarter-Ended-31.12.2020.pdf",
  "Board-Meeting-Notice-for-the-Quarter-Ended-31.12.2021.pdf",
  "Board-Meeting-Notice-for-the-Quarter-Ended-31.12.2022.pdf",
  "Board-Meeting-Notice-for-the-quarter-and-half-year-ended-30.09.2024_compressed.pdf",
  "Board-Meeting-Notice-for-the-quarter-ended-30.06.2025_compressed.pdf",
  "Board-Meeting-Notice-for-the-quarter-ended-31.12.2024_compressed.pdf",
  "Board-Meeting-Notice-for-the-year-ended-31.03.2024 (1).pdf",
  "Board-Meeting-Notice-for-the-year-ended-31.03.2024.pdf",
  "Board-Meeting-Notice-for-the-year-ended-31.03.2025_compressed.pdf",
  "Board_Meeting_Notice_for_the_Quarter_ended_30.06.2016.pdf",
  "Board_Meeting_Notice_for_the_Quarter_ended_30.06.2017.pdf",
  "Board_Meeting_Notice_for_the_Quarter_ended_30.06.2018.pdf",
  "Board_Meeting_Notice_for_the_Quarter_ended_30.09.2016.pdf",
  "Board_Meeting_Notice_for_the_Quarter_ended_30.09.2017.pdf",
  "Board_Meeting_Notice_for_the_Quarter_ended_30.09.2018.pdf",
  "Board_Meeting_Notice_for_the_Quarter_ended_31.03.2018.pdf",
  "Board_Meeting_Notice_for_the_Quarter_ended_31.03.2019.pdf",
  "Board_Meeting_Notice_for_the_Quarter_ended_31.12.2016.pdf",
  "Board_Meeting_Notice_for_the_Quarter_ended_31.12.2017.pdf",
  "Board_Meeting_Notice_for_the_Quarter_ended_31.12.2018.pdf",
  "Board_Meeting_Notice_for_the_year_ended_31.03.2016.pdf",
  "Board_Meeting_Notice_for_the_year_ended_31.03.2017.pdf",
  "Board_meeting_notice_for_Quarter_ended_31.12._2015.pdf",
  "Intimation-of-Board-Meeting-to-be-held-on-04.09.2023.pdf",
  "POLICY_FOR_DETERMINATION_OF_MATERIALITY_OF_EVENT_OR_INFORMATION_FOR_DISCLOSURE.pdf",
  "Preservation_of_Documents_Policy_and_Archival_Policy.pdf",
  "Results-of-32nd-AGM-with-Scrutinizers-Report.pdf",
  "Results-of-33rd-AGM-with-Scrutinizers-Report.pdf",
  "Results-of-34th-AGM-with-Scrutinizers-Report-1.pdf",
  "Results-of-35th-AGM-with-Scrutinizers-report.pdf",
  "Results_of_27th_AGM_with_Scrutinizers_report.pdf",
  "Results_of_28th_AGM_with_Scrutinizers_report.pdf",
  "Results_of_30th_AGM_with_Scrutinizers_Report.pdf",
  "Results_on_29th_AGM_with_Scrutinizers_Report.pdf",
  "Results-of-36th-AGM-with-Scrutinizers-Report.pdf", // maybe not exist?
];

const BOARD_MEETING_NOTICES = [
  "Board Meeting Notice for the Quarter ended 31.12.2015",
  "Board Meeting Notice for the Year ended 31.03.2016",
  "Board Meeting Notice for the Quarter ended 30.06.2016",
  "Board Meeting Notice for the Quarter and Half Year ended 30.09.2016",
  "Board Meeting Notice for the Quarter ended 31.12.2016",
  "Board Meeting Notice for the Year ended 31.03.2017",
  "Board Meeting Notice for the Quarter ended 30.06.2017",
  "Board Meeting Notice for the Quarter ended 30.09.2017",
  "Board Meeting Notice for the Quarter ended 31.12.2017",
  "Board Meeting Notice for the Quarter ended 31.03.2018",
  "Board Meeting Notice for the Quarter ended 30.06.2018",
  "Board Meeting Notice for the Quarter ended 30.09.2018",
  "Board Meeting Notice for the Quarter ended 31.12.2018",
  "Board Meeting Notice for the Quarter ended 31.03.2019",
  "Board Meeting Notice for the Quarter ended 30.06.2019",
  "Board Meeting Notice for the Quarter ended 30.09.2019",
  "Board Meeting Notice for the Quarter ended 31.12.2019",
  "Board Meeting Notice for the Year ended 31.03.2020",
  "Board Meeting Notice for the Quarter ended 30.06.2020",
  "Board Meeting Notice for the Quarter and Half Year ended 30.09.2020",
  "Board Meeting Notice for the Quarter ended 31.12.2020",
  "Board Meeting Notice for the Year ended 31.03.2021",
  "Board Meeting Notice for the Quarter ended 30.06.2021",
  "Board Meeting Notice for the Quarter and Half Year ended 30.09.2021",
  "Board Meeting Notice for the Quarter ended 31.12.2021",
  "Board Meeting Notice for the Year ended 31.03.2022",
  "Board Meeting Notice for the Quarter ended 30.06.2022",
  "Board Meeting Notice for the Quarter and Half Year ended 30.09.2022",
  "Board Meeting Notice for the Quarter ended 31.12.2022",
  "Board Meeting Notice for the Year ended 31.03.2023",
  "Board Meeting Notice for the Quarter ended 30.06.2023",
  "Board Meeting Notice regarding Annual General Meeting Approval",
  "Board Meeting Notice for Resignation of Independent Director",
  "Board Meeting Notice for the Quarter and Half Year ended 30.09.2023",
  "Board Meeting Notice for the Quarter ended 31.12.2023",
  "Board Meeting Notice for the Year ended 31.03.2024",
  "Board Meeting Notice for the Quarter ended 30.06.2024",
  "Board Meeting Notice for the Quarter and Half Year ended 30.09.2024",
  "Board Meeting Notice for the Quarter ended 31.12.2024",
  "Board Meeting Notice for the Year ended 31.03.2025",
  "Board Meeting Notice for the Quarter ended 30.06.2025",
];

const VOTING_RESULTS = [
  "Results of 27th AGM with Scrutinizer’s Report",
  "Results of 28th AGM with Scrutinizer’s Report",
  "Results of 29th AGM with Scrutinizer’s Report",
  "Results of 30th AGM with Scrutinizer’s Report",
  "Results of 31st AGM with Scrutinizer’s Report",
  "Results of 32nd AGM with Scrutinizer’s Report",
  "Results of 33rd AGM with Scrutinizer’s Report",
  "Results of 34th AGM with Scrutinizer’s Report",
  "Results of 35th AGM with Scrutinizer’s Report",
  "Results of 36th AGM with Scrutinizer’s Report",
];

const POLICIES = [
  "Policy for Determination of Material Events / Information Disclosure",
  "Preservation of Documents Policy",
  "Archival Policy",
  "Policy for Determination of Materiality",
  "Preservation Policy",
];

function getBestMatch(title, files) {
    if (title.includes("27th AGM")) return "Results_of_27th_AGM_with_Scrutinizers_report.pdf";
    if (title.includes("28th AGM")) return "Results_of_28th_AGM_with_Scrutinizers_report.pdf";
    if (title.includes("29th AGM")) return "Results_on_29th_AGM_with_Scrutinizers_Report.pdf";
    if (title.includes("30th AGM")) return "Results_of_30th_AGM_with_Scrutinizers_Report.pdf";
    if (title.includes("31st AGM")) return "#";
    if (title.includes("32nd AGM")) return "Results-of-32nd-AGM-with-Scrutinizers-Report.pdf";
    if (title.includes("33rd AGM")) return "Results-of-33rd-AGM-with-Scrutinizers-Report.pdf";
    if (title.includes("34th AGM")) return "Results-of-34th-AGM-with-Scrutinizers-Report-1.pdf";
    if (title.includes("35th AGM")) return "Results-of-35th-AGM-with-Scrutinizers-report.pdf";
    if (title.includes("36th AGM")) return "#";
    if (title.includes("Resignation of Independent Director")) return "Board-Meeting-Notice-for-consideration-and-approval-of-resignation-of-Independent-Director.pdf";
    if (title.includes("Preservation of Documents")) return "Preservation_of_Documents_Policy_and_Archival_Policy.pdf";
    if (title.includes("Archival Policy")) return "01.-archival-policy.pdf";
    if (title.includes("Preservation Policy")) return "02.-preservation-Policy.pdf";
    if (title.includes("Determination of Materiality")) return "03.-policy-for-determination-of-materiality.pdf";
    if (title.includes("Determination of Material Events")) return "POLICY_FOR_DETERMINATION_OF_MATERIALITY_OF_EVENT_OR_INFORMATION_FOR_DISCLOSURE.pdf";
    if (title.includes("04.09.2023") || title.includes("Annual General Meeting Approval")) return "Intimation-of-Board-Meeting-to-be-held-on-04.09.2023.pdf";

    const dateMatch = title.match(/\d{2}\.\d{2}\.\d{4}/);
    if (!dateMatch) return "#";
    
    let d = dateMatch[0];
    for (let f of files) {
        if (!f.includes("Board")) continue;
        if (f.includes(d) || f.replace(/-/g, ".").includes(d)) return f;
        if (f.includes(d.replace(/\./g, "_"))) return f;
    }
    
    // some files might just be broken or missing, fallback to `#`
    return "#";
}

const resBoard = BOARD_MEETING_NOTICES.map(title => ({ title, pdf: getBestMatch(title, actualFiles) }));
const resVoting = VOTING_RESULTS.map(title => ({ title, pdf: getBestMatch(title, actualFiles) }));
const resPolicies = POLICIES.map(title => ({ title, pdf: getBestMatch(title, actualFiles) }));

fs.writeFileSync("mapping_out.json", JSON.stringify({resBoard, resVoting, resPolicies}, null, 2));
console.log("Written to mapping_out.json");
