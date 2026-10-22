import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const evidencePath = path.resolve('analysis/whatsapp-app-evidence.json');
const ev = JSON.parse(fs.readFileSync(evidencePath, 'utf8'));

// All module nodes from static application graph
const modNodes = ev.normalized_result.graph.nodes.filter(n => n.kind === 'javascript-module');
console.log(`Found ${modNodes.length} javascript-module nodes in whatsapp-app-evidence.json`);

const inspections = [];

for (const m of modNodes) {
  const req = {
    source: {
      kind: 'evidence-file',
      path: evidencePath
    },
    view: {
      kind: 'item',
      collection: 'modules',
      selector: {
        node_id: m.node_id
      }
    }
  };

  const reqPath = path.resolve(`analysis/inspections/req_${m.node_id}.json`);
  fs.writeFileSync(reqPath, JSON.stringify(req), 'utf8');

  try {
    const out = execSync(`rea inspect-analysis-view "${reqPath}" --format json`, {
      encoding: 'utf8',
      maxBuffer: 50 * 1024 * 1024
    });
    const parsed = JSON.parse(out);
    inspections.push({
      node_id: m.node_id,
      identity_key: m.identity?.key,
      path: m.observations?.[0]?.properties?.path || m.identity?.key,
      evidence_id: parsed.evidence_id
    });
    console.log(`Inspected ${m.node_id} -> ${parsed.evidence_id}`);
  } catch (err) {
    console.error(`Failed ${m.node_id}:`, err.message);
  } finally {
    if (fs.existsSync(reqPath)) fs.unlinkSync(reqPath);
  }
}

fs.writeFileSync('analysis/inspections/all_inspections.json', JSON.stringify(inspections, null, 2), 'utf8');

// Now extract StyleX and SVGs from extracted-modules for each panel
const panelFiles = {
  ProfileDrawer: ['WAWebProfileImage.react.js', 'BaseProfilePhoto.react.js', 'WAWebDefaultProfilePicture.react.js'],
  NewChatDrawer: ['WAWebNewChatMenuBarItem.react.js', 'WAWebNewGroupChatlistHeaderDropdownItem.react.js', 'WDSIconWdsIcNewChatFilled.react.js'],
  SettingsDrawer: ['WAWebSettingsNavBarItem.react.js', 'WAWebSettingsPopup.react.js', 'WAWebChatSetting.react.js'],
  ArchivedDrawer: ['WAWebChatArchivedEntryPoint.react.js', 'WAWebArchivedChatlistHeaderDropdownItem.react.js', 'WDSIconIcArchive.react.js'],
  StarredDrawer: ['WAWebStarredChatlistHeaderDropdownItem.react.js', 'WDSIllustrationWdsPictoStar.react.js'],
  CallsPanel: ['WAWebCallLogEntryCell.react.js', 'WAWebCallDropdownMenuItems.react.js', 'WAWebCallsNavBarItemLoadable.react.js'],
  ChannelsPanel: ['WAWebChannelsChatlistHeaderDropdownItems.react.js', 'WAWebDefaultNewsletterIcon.react.js'],
  CommunitiesDrawer: ['WAWebCommunityCells.react.js', 'WAWebCommunitiesNavBarItem.react.js', 'WAWebCommunitySquircleIcon.react.js'],
  StatusDrawer: ['WAWebHeaderStatus.react.js', 'WAWebStatusNavBarItem.react.js', 'WAWebAudioStatusIcon.react.js'],
  ContactInfoDrawer: ['WAWebContactInfoCard.react.js', 'WAWebBusinessProfileIconSection.react.js'],
  ChatSearchDrawer: ['WAWebChatSearchDrawerLoadable.js', 'WAWebChatSearchModel.js'],
  ChatHeader: ['useWAWebConversationHeaderActions.js', 'WAWebChatHeaderTextStatusBubble.react.js'],
  ComposerBar: ['WAWebComposeBox.react.js', 'WAWebComposeBoxExpressionPanels.react.js'],
  IntroPanel: ['WAWebIntroPanelStartCallEmptyState.react.js', 'WAWebStartup.react.js'],
  ChatListPanel: ['useWAWebChatlistRowHeight.js', 'WDSPreviewListItemMetrics.js', 'WDSListItemConfig.stylex.js', 'WDSPreviewListItemConfig.stylex.js'],
  LeftNavRail: ['WAWebNavigationBar.react.js', 'WAWebChatsNavBarItem.react.js']
};

let ledgerMd = `# REA Decompiled Evidence & Structural Truth Ledger\n\n`;
ledgerMd += `Generated via REA \`rea inspect-analysis-view\` and recovered module analysis.\n\n`;

for (const [panel, files] of Object.entries(panelFiles)) {
  ledgerMd += `## Panel: ${panel}\n\n`;
  ledgerMd += `### Traced & Decompiled Modules\n`;
  for (const f of files) {
    const fullPath = path.join('extracted-modules', f);
    if (!fs.existsSync(fullPath)) continue;
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Extract stylex atomic classes
    const stylexMatches = content.match(/["']x[a-z0-9]{6,8}["']/g) || [];
    const uniqueClasses = [...new Set(stylexMatches.map(c => c.slice(1, -1)))];
    
    // Extract SVG path definitions
    const pathMatches = content.match(/d:\s*["']([^"']+)["']/g) || content.match(/<path[^>]*d=["']([^"']+)["']/g) || [];
    
    ledgerMd += `#### \`${f}\`\n`;
    ledgerMd += `- **Path**: \`extracted-modules/${f}\`\n`;
    ledgerMd += `- **StyleX Atomic Classes Count**: ${uniqueClasses.length}\n`;
    ledgerMd += `- **Sample Classes**: \`${uniqueClasses.slice(0, 15).join(' ')}\`\n`;
    if (pathMatches.length > 0) {
      ledgerMd += `- **SVG Path Samples**:\n`;
      pathMatches.slice(0, 3).forEach(p => {
        ledgerMd += `  \`\`\`\n  ${p.slice(0, 100)}...\n  \`\`\`\n`;
      });
    }
    ledgerMd += `\n`;
  }
}

fs.writeFileSync('analysis/evidence-ledger.md', ledgerMd, 'utf8');
console.log('Successfully generated analysis/evidence-ledger.md');
