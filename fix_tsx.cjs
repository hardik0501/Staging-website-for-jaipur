const fs = require('fs');

const mapping = JSON.parse(fs.readFileSync('mapping_out.json', 'utf8'));
const file = 'src/pages/CorporateGovernancePage.tsx';
let tsx = fs.readFileSync(file, 'utf8');

const boardStr = `const BOARD_MEETING_NOTICES = ${JSON.stringify(mapping.resBoard, null, 2)};`;
const votingStr = `const VOTING_RESULTS = ${JSON.stringify(mapping.resVoting, null, 2)};`;
const policiesStr = `const POLICIES = ${JSON.stringify(mapping.resPolicies, null, 2)};`;

// For investor complaints, we keep string array, but we just link to '#' or handle it directly
// Actually we can map them to '#' in the render part.

tsx = tsx.replace(/const BOARD_MEETING_NOTICES = \[[\s\S]*?\];/, boardStr);
tsx = tsx.replace(/const VOTING_RESULTS = \[[\s\S]*?\];/, votingStr);
tsx = tsx.replace(/const POLICIES = \[[\s\S]*?\];/, policiesStr);

// Remove toPdfPath
tsx = tsx.replace(/\/\/ Helper to convert a title to a safe file name[\s\S]*?\.pdf`;/, 
  "// PDF paths are now explicitly mapped above");

// Replace board map
tsx = tsx.replace(/\{BOARD_MEETING_NOTICES\.map\(\(title\) => \([\s\S]*?href={toPdfPath\("Corporate_goverance", title\)}/g, 
`{BOARD_MEETING_NOTICES.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <FileText className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <a
                        href={item.pdf === "#" ? "#" : \`/Corporate_goverance/\${item.pdf}\`}`);

// Replace title with item.title inside board map
tsx = tsx.replace(/\{title\}\n *<\/a>/g, "{item.title}\n                      </a>");

// Replace voting map
tsx = tsx.replace(/\{VOTING_RESULTS\.map\(\(title\) => \([\s\S]*?href={toPdfPath\("Corporate_goverance", title\)}/g, 
`{VOTING_RESULTS.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <FileText className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <a
                        href={item.pdf === "#" ? "#" : \`/Corporate_goverance/\${item.pdf}\`}`);

// Replace policies map
tsx = tsx.replace(/\{POLICIES\.map\(\(title\) => \([\s\S]*?href={toPdfPath\("Corporate_goverance", title\)}/g, 
`{POLICIES.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <Shield className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <a
                        href={item.pdf === "#" ? "#" : \`/Corporate_goverance/\${item.pdf}\`}`);

// Replace investor complaints map - toPdfPath is gone so we just put '#'
tsx = tsx.replace(/\{INVESTOR_COMPLAINT_PERIODS\.map\(\(period\) => \([\s\S]*?href={toPdfPath\("Corporate_goverance", `Investor Complaints \${period}`\)}/g, 
`{INVESTOR_COMPLAINT_PERIODS.map((period) => (
                    <a
                      key={period}
                      href="#"`);

fs.writeFileSync(file, tsx);
console.log("TSX patched");
