import fs from 'fs';

const liveHtml = fs.readFileSync('analysis/live_profile_drawer_full.html', 'utf8');

// Title text in header
const h2Match = liveHtml.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
console.log('Live Header h2:', h2Match ? h2Match[0] : 'no h2');

// Photo area
const photoMatch = liveHtml.match(/<div[^>]*data-testid="profile-pic-picker"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
console.log('Photo area sample:', liveHtml.includes('profile-pic-picker') ? 'Has profile-pic-picker' : 'No profile-pic-picker');

// Search for the photo element
const imgMatches = liveHtml.match(/<img[^>]*>/g);
console.log('Images in drawer:', imgMatches);

// Check all data-testid
const testids = Array.from(liveHtml.matchAll(/data-testid="([^"]+)"/g)).map(m => m[1]);
console.log('All data-testids in live profile drawer:', testids);
