import fs from 'fs';

let html = fs.readFileSync('analysis/live-intro-panel.html', 'utf8');

// Convert HTML to clean JSX
// 1. Attributes
html = html.replace(/\bclass="/g, 'className="');
html = html.replace(/\btabindex="0"/g, 'tabIndex={0}');
html = html.replace(/\btabindex="8"/g, 'tabIndex={8}');
html = html.replace(/\bclip-path="/g, 'clipPath="');
html = html.replace(/\bstroke-linecap="/g, 'strokeLinecap="');
html = html.replace(/\bstroke-linejoin="/g, 'strokeLinejoin="');
html = html.replace(/\bstroke-opacity="1"/g, 'strokeOpacity={1}');
html = html.replace(/\bstroke-width="1\.5"/g, 'strokeWidth={1.5}');
html = html.replace(/\bstroke-width="1\.875"/g, 'strokeWidth={1.875}');
html = html.replace(/\bfill-opacity="1"/g, 'fillOpacity={1}');
html = html.replace(/\bfill-opacity="0"/g, 'fillOpacity={0}');
html = html.replace(/\bstop-color="/g, 'stopColor="');
html = html.replace(/\bxmlns:xlink="/g, 'xmlnsXlink="');

// Convert style strings to JSX style objects
// SVG style
html = html.replace(
  'style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"',
  'style={{ width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)", contentVisibility: "visible" }}'
);
html = html.replace(/style="display: block;"/g, 'style={{ display: "block" }}');
html = html.replace(/style="display: none;"/g, 'style={{ display: "none" }}');

// Heading style
html = html.replace(
  'style="--x-fontSize: 22px; --x-lineHeight: 15.6406px; --x-8dd7yt: -0.0137em; --x-hxtmnb: 0.0137em;"',
  'style={{ ["--x-fontSize" as string]: "22px", ["--x-lineHeight" as string]: "15.6406px", ["--x-8dd7yt" as string]: "-0.0137em", ["--x-hxtmnb" as string]: "0.0137em" }}'
);

// 14px text style
html = html.replace(
  /style="--x-fontSize: 14px; --x-lineHeight: 9\.9531px; --x-8dd7yt: -0\.0137em; --x-hxtmnb: 0\.0137em;"/g,
  'style={{ ["--x-fontSize" as string]: "14px", ["--x-lineHeight" as string]: "9.9531px", ["--x-8dd7yt" as string]: "-0.0137em", ["--x-hxtmnb" as string]: "0.0137em" }}'
);

// 12px text style
html = html.replace(
  /style="--x-fontSize: 12px; --x-lineHeight: 8\.5313px; --x-8dd7yt: -0\.0137em; --x-hxtmnb: 0\.0137em;"/g,
  'style={{ ["--x-fontSize" as string]: "12px", ["--x-lineHeight" as string]: "8.5313px", ["--x-8dd7yt" as string]: "-0.0137em", ["--x-hxtmnb" as string]: "0.0137em" }}'
);

// Self-closing tags: <rect width="156" height="132" x="0" y="0"></rect> is fine
// <input ...> needs />
html = html.replace('<input accept="*" multiple="" type="file" style={{ display: "none" }}>', '<input ref={fileInputRef} accept="*" multiple type="file" style={{ display: "none" }} />');

// Wire up onClick handlers
// "Go to Calls" button
html = html.replace(
  '<button data-tab="8" aria-disabled="false" tabIndex={0} type="button" class',
  '<button data-tab="8" aria-disabled="false" tabIndex={0} type="button" onClick={onGoToCalls} class'
);

// Action buttons: Send document
html = html.replace(
  '<button data-tab="8" tabIndex={0} type="button" className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xs83m0k',
  '<button data-tab="8" tabIndex={0} type="button" onClick={handleDocumentClick} className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xs83m0k'
);

// Add contact
html = html.replace(
  '<button data-tab="8" tabIndex={0} type="button" className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xs83m0k',
  '<button data-tab="8" tabIndex={0} type="button" onClick={onAddContact} className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xs83m0k'
);

// Invite a friend
html = html.replace(
  '<button data-tab="8" tabIndex={0} type="button" className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xs83m0k',
  '<button data-tab="8" tabIndex={0} type="button" onClick={onInviteFriend} className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xs83m0k'
);

// New call
html = html.replace(
  '<button data-tab="8" tabIndex={0} type="button" className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xs83m0k',
  '<button data-tab="8" tabIndex={0} type="button" onClick={onNewCall || onGoToCalls} className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xs83m0k'
);

// Ask Meta AI
html = html.replace(
  '<button data-tab="8" tabIndex={0} type="button" className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xs83m0k',
  '<button data-tab="8" tabIndex={0} type="button" onClick={onAskMetaAi} className="html-button xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl xs83m0k'
);

const fullComponent = `import React, { useRef } from 'react';

interface IntroPanelProps {
  onGoToCalls?: () => void;
  onSendDocument?: () => void;
  onAddContact?: () => void;
  onInviteFriend?: () => void;
  onNewCall?: () => void;
  onAskMetaAi?: () => void;
}

export const IntroPanel: React.FC<IntroPanelProps> = ({
  onGoToCalls,
  onSendDocument,
  onAddContact,
  onInviteFriend,
  onNewCall,
  onAskMetaAi,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDocumentClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
    if (onSendDocument) {
      onSendDocument();
    }
  };

  return (
${html}
  );
};

export default IntroPanel;
`;

fs.writeFileSync('reconstruction/src/components/IntroPanel.tsx', fullComponent, 'utf8');
console.log('Successfully generated reconstruction/src/components/IntroPanel.tsx from live DOM!');
