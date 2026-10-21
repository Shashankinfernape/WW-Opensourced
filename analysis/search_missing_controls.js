const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('recovered-modules-combined').filter(f => f.endsWith('.js'));

const searches = [
  { category: 'Rail / Meta AI', patterns: ['WAWebMetaAI', 'MetaAi', 'MetaAI', 'WAWebSideNav', 'WAWebLeftNav', 'WAWebNavRail'] },
  { category: 'Call Icons / Header Buttons', patterns: ['WAWebCallButton', 'WAWebAudioCall', 'WAWebVideoCall', 'call-video', 'call-audio', 'VoiceCall', 'VideoCall'] },
  { category: 'Emoji Button / Picker', patterns: ['WAWebEmojiPicker', 'WAWebChatComposerEmoji', 'emoji-button', 'emoji-input', 'WDSIconIcSmiley'] },
  { category: 'Archived Row', patterns: ['WAWebArchivedRow', 'WAWebArchivedChat', 'archived-chats', 'ArchivedChats'] },
  { category: 'Sync / Connectivity Banner', patterns: ['WAWebSyncing', 'WAWebOffline', 'WAWebConnectivity', 'WAWebBanner', 'sync-banner'] },
  { category: 'Encryption Footer', patterns: ['WAWebE2E', 'end-to-end encrypted', 'WAWebSecurityInfo', 'WAWebConversationFooter', 'WAWebChatFooter'] }
];

for (const file of files) {
  const filePath = path.join('recovered-modules-combined', file);
  const content = fs.readFileSync(filePath, 'utf8');

  for (const s of searches) {
    for (const pat of s.patterns) {
      let idx = 0;
      while ((idx = content.indexOf(pat, idx)) !== -1) {
        // find enclosing __d(...)
        const dStart = content.lastIndexOf('__d(', idx);
        let moduleName = 'unknown';
        if (dStart !== -1) {
          const m = content.substring(dStart, dStart + 80).match(/__d\("([^"]+)"/);
          if (m) moduleName = m[1];
        }
        // find line number
        const line = content.substring(0, idx).split('\n').length;
        console.log(`[${s.category}] found "${pat}" in module "${moduleName}" at ${file}#L${line}`);
        idx += pat.length + 10000; // jump ahead to next significant match
      }
    }
  }
}
