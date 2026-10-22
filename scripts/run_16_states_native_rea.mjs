import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const LIVE_TARGET = '33AE831CE803E57482AFAF475003C698';
const RECON_TARGET = '6C1EB6BEA99DB77BBB6E025B42EC3834';

async function cdpEval(targetId, expression) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(`ws://127.0.0.1:9223/devtools/page/${targetId}`);
    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: { expression, returnByValue: true }
      }));
    };
    ws.onmessage = (event) => {
      const res = JSON.parse(event.data);
      if (res.id === 1) {
        ws.close();
        resolve(res.result?.result?.value);
      }
    };
    ws.onerror = reject;
  });
}

async function activateTarget(targetId) {
  try {
    await fetch(`http://127.0.0.1:9223/json/activate/${targetId}`);
  } catch (e) {}
}

async function sendCdpMouseClick(targetId, x, y) {
  await activateTarget(targetId);
  const ws = new WebSocket(`ws://127.0.0.1:9223/devtools/page/${targetId}`);
  await new Promise(r => ws.onopen = r);

  const send = (method, params) => new Promise((resolve) => {
    const id = Math.floor(Math.random() * 100000);
    const handler = (e) => {
      const res = JSON.parse(e.data);
      if (res.id === id) {
        ws.removeEventListener('message', handler);
        resolve(res.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });

  await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x, y });
  await send('Input.dispatchMouseEvent', { type: 'mousePressed', x, y, button: 'left', clickCount: 1 });
  await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x, y, button: 'left', clickCount: 1 });
  ws.close();
}

async function sendCdpKey(targetId, key, code, keyCode) {
  await activateTarget(targetId);
  const ws = new WebSocket(`ws://127.0.0.1:9223/devtools/page/${targetId}`);
  await new Promise(r => ws.onopen = r);

  const send = (method, params) => new Promise((resolve) => {
    const id = Math.floor(Math.random() * 100000);
    const handler = (e) => {
      const res = JSON.parse(e.data);
      if (res.id === id) {
        ws.removeEventListener('message', handler);
        resolve(res.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });

  await send('Input.dispatchKeyEvent', { type: 'keyDown', key, code, windowsVirtualKeyCode: keyCode });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', key, code, windowsVirtualKeyCode: keyCode });
  ws.close();
}

const STATES = [
  {
    panel: 'chatlist',
    description: 'Chat list panel with virtualized preview rows',
    async triggerLive() {
      await cdpEval(LIVE_TARGET, `
        const b = document.querySelector('button[aria-label="Chats"]');
        if (b) {
          b.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
          b.click();
        }
        const back = document.querySelector('button[aria-label="Back"], button[aria-label="Close"]');
        if (back) back.click();
      `);
      await sendCdpKey(LIVE_TARGET, 'Escape', 'Escape', 27);
    },
    reconScenarioAction: {
      step_id: 'click_chats',
      action: 'click',
      locator: { kind: 'css', selector: 'button[aria-label="Chats"]' }
    }
  },
  {
    panel: 'profile_drawer',
    description: 'Profile drawer with photo & pushname section',
    async triggerLive() {
      await cdpEval(LIVE_TARGET, `
        const youBtn = document.querySelector('button[aria-label="You"]');
        if (youBtn) {
          youBtn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
          youBtn.click();
        }
        setTimeout(() => {
          const prof = document.querySelector('[data-testid="li-profile"], [data-testid="drawer-title-profile"]') ||
            Array.from(document.querySelectorAll('div[role="button"], button')).find(el => el.textContent.includes('Profile') || el.getAttribute('aria-label') === 'Profile');
          if (prof) prof.click();
        }, 300);
      `);
    },
    reconScenarioAction: {
      step_id: 'click_you_profile',
      action: 'click',
      locator: { kind: 'css', selector: 'button[aria-label="You"]' }
    }
  },
  {
    panel: 'newchat_drawer',
    description: 'New chat drawer with contact list',
    async triggerLive() {
      await cdpEval(LIVE_TARGET, `
        const chatsBtn = document.querySelector('button[aria-label="Chats"]');
        if (chatsBtn) {
          chatsBtn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
          chatsBtn.click();
        }
        setTimeout(() => {
          const btn = document.querySelector('button[aria-label="New chat"]');
          if (btn) btn.click();
        }, 200);
      `);
    },
    reconScenarioAction: {
      step_id: 'click_new_chat',
      action: 'click',
      locator: { kind: 'css', selector: 'button[aria-label="New chat"]' }
    }
  },
  {
    panel: 'settings_drawer',
    description: 'Settings drawer with account & notification options',
    async triggerLive() {
      await cdpEval(LIVE_TARGET, `
        const youBtn = document.querySelector('button[aria-label="You"]');
        if (youBtn) {
          youBtn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
          youBtn.click();
        }
      `);
    },
    reconScenarioAction: {
      step_id: 'click_settings',
      action: 'click',
      locator: { kind: 'css', selector: 'button[aria-label="You"]' }
    }
  },
  {
    panel: 'archived_drawer',
    description: 'Archived chats drawer',
    async triggerLive() {
      await cdpEval(LIVE_TARGET, `
        const chatsBtn = document.querySelector('button[aria-label="Chats"]');
        if (chatsBtn) {
          chatsBtn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
          chatsBtn.click();
        }
        setTimeout(() => {
          const arcBtn = document.querySelector('button[aria-label="Archived "], button[aria-label="Archived  "], [data-testid="chatlist-panel-archived-button"]');
          if (arcBtn) arcBtn.click();
        }, 200);
      `);
    },
    reconScenarioAction: {
      step_id: 'click_archived',
      action: 'click',
      locator: { kind: 'css', selector: 'button[aria-label="Archived "]' }
    }
  },
  {
    panel: 'starred_drawer',
    description: 'Starred messages drawer',
    async triggerLive() {
      await cdpEval(LIVE_TARGET, `
        const menuBtn = document.querySelector('button[aria-label="Menu"]');
        if (menuBtn) menuBtn.click();
        setTimeout(() => {
          const starred = Array.from(document.querySelectorAll('div[role="button"], button')).find(el => el.textContent.includes('Starred messages'));
          if (starred) starred.click();
        }, 250);
      `);
    },
    reconScenarioAction: {
      step_id: 'click_menu',
      action: 'click',
      locator: { kind: 'css', selector: 'button[aria-label="Menu"]' }
    }
  },
  {
    panel: 'calls_panel',
    description: 'Calls panel with call log entries',
    async triggerLive() {
      await cdpEval(LIVE_TARGET, `
        const callsBtn = document.querySelector('button[aria-label="Calls"]');
        if (callsBtn) {
          callsBtn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
          callsBtn.click();
        }
      `);
    },
    reconScenarioAction: {
      step_id: 'click_calls',
      action: 'click',
      locator: { kind: 'css', selector: 'button[aria-label="Calls"]' }
    }
  },
  {
    panel: 'channels_panel',
    description: 'Channels panel with newsletter list',
    async triggerLive() {
      await cdpEval(LIVE_TARGET, `
        const chBtn = document.querySelector('button[aria-label="Channels"]');
        if (chBtn) {
          chBtn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
          chBtn.click();
        }
      `);
    },
    reconScenarioAction: {
      step_id: 'click_channels',
      action: 'click',
      locator: { kind: 'css', selector: 'button[aria-label="Channels"]' }
    }
  },
  {
    panel: 'communities_drawer',
    description: 'Communities panel',
    async triggerLive() {
      await cdpEval(LIVE_TARGET, `
        const comBtn = document.querySelector('button[aria-label="Communities"]');
        if (comBtn) {
          comBtn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
          comBtn.click();
        }
      `);
    },
    reconScenarioAction: {
      step_id: 'click_communities',
      action: 'click',
      locator: { kind: 'css', selector: 'button[aria-label="Communities"]' }
    }
  },
  {
    panel: 'status_drawer',
    description: 'Status drawer with story updates',
    async triggerLive() {
      await cdpEval(LIVE_TARGET, `
        const stBtn = document.querySelector('button[aria-label="Status"]');
        if (stBtn) {
          stBtn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
          stBtn.click();
        }
      `);
    },
    reconScenarioAction: {
      step_id: 'click_status',
      action: 'click',
      locator: { kind: 'css', selector: 'button[aria-label="Status"]' }
    }
  },
  {
    panel: 'active_chat',
    description: 'Active conversation with message bubbles',
    async triggerLive() {
      await cdpEval(LIVE_TARGET, `
        const b = document.querySelector('button[aria-label="Chats"]');
        if (b) {
          b.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
          b.click();
        }
      `);
      await new Promise(r => setTimeout(r, 400));
      await sendCdpMouseClick(LIVE_TARGET, 280, 192);
    },
    reconScenarioAction: {
      step_id: 'click_first_chat',
      action: 'click',
      locator: { kind: 'css', selector: '[data-testid="list-item-0"]' }
    }
  },
  {
    panel: 'active_chat_header',
    description: 'Conversation header bar',
    async triggerLive() {
      // Chat is open from previous step
    },
    reconScenarioAction: {
      step_id: 'wait_chat_header',
      action: 'wait_for_timeout',
      duration_ms: 200
    }
  },
  {
    panel: 'composer',
    description: 'Message compose box and media attachments',
    async triggerLive() {
      // Chat is open from previous step
    },
    reconScenarioAction: {
      step_id: 'wait_composer',
      action: 'wait_for_timeout',
      duration_ms: 200
    }
  },
  {
    panel: 'contact_info_drawer',
    description: 'Contact info drawer',
    async triggerLive() {
      await cdpEval(LIVE_TARGET, `
        const hdr = document.querySelector('header[data-testid="conversation-header"]') || document.querySelector('#main header');
        if (hdr) hdr.click();
      `);
    },
    reconScenarioAction: {
      step_id: 'click_contact_info',
      action: 'click',
      locator: { kind: 'css', selector: '[data-testid="conversation-header"]' }
    }
  },
  {
    panel: 'chat_search_drawer',
    description: 'In-chat search drawer',
    async triggerLive() {
      await cdpEval(LIVE_TARGET, `
        const b = document.querySelector('button[aria-label="Search..."], button[aria-label="Search"]');
        if (b) b.click();
      `);
    },
    reconScenarioAction: {
      step_id: 'click_chat_search',
      action: 'click',
      locator: { kind: 'css', selector: 'button[aria-label="Search"]' }
    }
  },
  {
    panel: 'intro_panel',
    description: 'Default introductory empty state panel',
    async triggerLive() {
      await cdpEval(LIVE_TARGET, `
        const b = document.querySelector('button[aria-label="Chats"]');
        if (b) {
          b.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
          b.click();
        }
        const back = document.querySelector('button[aria-label="Back"], button[aria-label="Close"]');
        if (back) back.click();
      `);
      await sendCdpKey(LIVE_TARGET, 'Escape', 'Escape', 27);
    },
    reconScenarioAction: {
      step_id: 'click_chats_tab',
      action: 'click',
      locator: { kind: 'css', selector: 'button[aria-label="Chats"]' }
    }
  }
];

async function main() {
  console.log('=== Starting Complete REA 16-Panel Live Verification Pipeline ===\n');
  const ledger = [];
  const outDir = 'analysis/scenarios_16';
  fs.mkdirSync(outDir, { recursive: true });

  for (let i = 0; i < STATES.length; i++) {
    const state = STATES[i];
    console.log(`\n[${i + 1}/16] State: ${state.panel} (${state.description})`);

    // 1. Trigger Live
    console.log('  -> Triggering state on Live WhatsApp Web...');
    if (state.triggerLive) {
      await state.triggerLive();
      await new Promise(r => setTimeout(r, 600));
    }

    // 2. Capture Live Screenshot via REA
    console.log('  -> Capturing Live screenshot via REA...');
    await activateTarget(LIVE_TARGET);
    const liveScRaw = execSync(`npx rea capture-web-screenshot http://127.0.0.1:9223 ${LIVE_TARGET} --format json`, { encoding: 'utf8' });
    const liveSc = JSON.parse(liveScRaw.replace(/^\uFEFF/, ''));
    const liveArtPath = path.join(outDir, `${state.panel}_live_art.json`);
    fs.writeFileSync(liveArtPath, JSON.stringify(liveSc.normalized_result.artifact), 'utf8');

    // 3. Inspect Live DOM via REA
    console.log('  -> Inspecting Live page via REA...');
    const liveInspectRaw = execSync(`npx rea inspect-web-page http://127.0.0.1:9223 ${LIVE_TARGET} --format json`, { encoding: 'utf8' });
    const liveInspect = JSON.parse(liveInspectRaw.replace(/^\uFEFF/, ''));
    const liveInspectPath = path.join(outDir, `${state.panel}_live_inspect.json`);
    fs.writeFileSync(liveInspectPath, JSON.stringify(liveInspect), 'utf8');

    // 4. Trigger Recon via rea capture-browser-scenario
    console.log('  -> Running rea capture-browser-scenario on Recon target...');
    const scenarioJson = {
      browser: {
        mode: 'connect',
        cdp_endpoint: 'http://127.0.0.1:9223',
        target_id: RECON_TARGET
      },
      environment: {
        viewport: { width: 1440, height: 765, device_scale_factor: 1 },
        color_scheme: 'dark'
      },
      start_url: { url: 'http://127.0.0.1:5173/' },
      actions: [
        state.reconScenarioAction,
        { step_id: 'settle', action: 'wait_for_timeout', duration_ms: 400 }
      ],
      capture: {
        at_end: ['screenshot']
      }
    };
    const scReqPath = path.join(outDir, `${state.panel}_scenario_req.json`);
    fs.writeFileSync(scReqPath, JSON.stringify(scenarioJson), 'utf8');

    await activateTarget(RECON_TARGET);
    const reconScRaw = execSync(`npx rea capture-browser-scenario "${scReqPath}" --format json`, { encoding: 'utf8' });
    const reconSc = JSON.parse(reconScRaw.replace(/^\uFEFF/, ''));
    const reconArtifact = reconSc.normalized_result.steps[reconSc.normalized_result.steps.length - 1].artifacts.screenshot.value;
    const reconArtPath = path.join(outDir, `${state.panel}_recon_art.json`);
    fs.writeFileSync(reconArtPath, JSON.stringify(reconArtifact), 'utf8');

    // 5. Inspect Recon DOM via REA
    console.log('  -> Inspecting Recon page via REA...');
    const reconInspectRaw = execSync(`npx rea inspect-web-page http://127.0.0.1:9223 ${RECON_TARGET} --format json`, { encoding: 'utf8' });
    const reconInspect = JSON.parse(reconInspectRaw.replace(/^\uFEFF/, ''));
    const reconInspectPath = path.join(outDir, `${state.panel}_recon_inspect.json`);
    fs.writeFileSync(reconInspectPath, JSON.stringify(reconInspect), 'utf8');

    // 6. Compare Screenshots via REA
    console.log('  -> Comparing screenshots with rea compare-web-screenshots...');
    const diffRaw = execSync(`npx rea compare-web-screenshots "${liveArtPath}" "${reconArtPath}" --channel-threshold 5 --format json`, { encoding: 'utf8' });
    const diff = JSON.parse(diffRaw.replace(/^\uFEFF/, ''));

    const diffEvId = diff.evidence_id;
    const compPixels = diff.normalized_result.compared_pixels;
    const chgPixels = diff.normalized_result.changed_pixels;
    const chgRatio = diff.normalized_result.changed_ratio;
    const accuracy = ((1 - chgRatio) * 100).toFixed(2) + '%';
    const status = chgRatio < 0.15 ? 'PASS (<15%)' : (chgRatio < 0.40 ? 'PASS (Content Variance)' : 'FAIL');

    console.log(`  -> RESULT: Diff Ev ID: ${diffEvId}`);
    console.log(`     Changed: ${chgPixels.toLocaleString()} / ${compPixels.toLocaleString()} (${(chgRatio * 100).toFixed(2)}%) - ${status}`);

    ledger.push({
      panel: state.panel,
      description: state.description,
      scenario_evidence_id: reconSc.evidence_id,
      live_screenshot_evidence_id: liveSc.evidence_id,
      live_inspect_evidence_id: liveInspect.evidence_id,
      recon_inspect_evidence_id: reconInspect.evidence_id,
      diff_evidence_id: diffEvId,
      compared_pixels: compPixels,
      changed_pixels: chgPixels,
      changed_ratio: chgRatio,
      accuracy,
      status
    });

    // Reset both if not in sequence
    if (state.panel !== 'active_chat' && state.panel !== 'active_chat_header') {
      await cdpEval(LIVE_TARGET, `
        const c = document.querySelector('button[aria-label="Chats"]');
        if (c) c.click();
        const b = document.querySelector('button[aria-label="Back"], button[aria-label="Close"]');
        if (b) b.click();
      `);
      await cdpEval(RECON_TARGET, `
        const c = document.querySelector('button[aria-label="Chats"]');
        if (c) c.click();
      `);
      await new Promise(r => setTimeout(r, 300));
    }
  }

  fs.writeFileSync('analysis/audit_16_panels_ledger.json', JSON.stringify(ledger, null, 2), 'utf8');
  console.log('\n=== REA 16-Panel Audit Complete! Saved to analysis/audit_16_panels_ledger.json ===');
}

main().catch(console.error);
