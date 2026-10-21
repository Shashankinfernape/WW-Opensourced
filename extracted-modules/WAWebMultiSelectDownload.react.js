__d("WAWebMultiSelectDownload.react", [
    "fbt",
    "WAWebChatGroupUtils",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebMediaHubMessageActionHandlers",
    "WAWebMiscGatingUtils",
    "WAWebMsgActionCanDownloadMsg",
    "WAWebTabOrder",
    "WDSIconIcDownload.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const e_useState = e.useState;
    const d = {
        btnMargin: {
            marginInlineEnd: "xqf2s3x",
            $$css: true
        }
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(16);
        const { downloadButton, isMediaHub, onCancel, onDownload, selectedMessages, tabOrder } = e;
        const h = isMediaHub === undefined ? false : isMediaHub;
        const tabOrder_1 = tabOrder === undefined ? o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR : tabOrder;
        let C;
        if (t[0] !== selectedMessages) {
            C = selectedMessages?.getSelected() ?? [];
            t[0] = selectedMessages;
            t[1] = C;
        } else {
            C = t[1];
        }
        const v = e_useState(C);
        const S = v[0];
        const R = v[1];
        let L;
        if (t[2] !== S) {
            L = S.every(f);
            t[2] = S;
            t[3] = L;
        } else {
            L = t[3];
        }
        const E = L;
        const k = S.map(_);
        const I = k.some(p);
        const T = I && o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled();
        const S_length = S.length;
        let x;
        if (t[4] !== selectedMessages) {
            x = function() {
                R(selectedMessages?.getSelected() ?? []);
            };
            t[4] = selectedMessages;
            t[5] = x;
        } else {
            x = t[5];
        }
        o("useWAWebListener").useListener(selectedMessages, "all", x);
        const $ = downloadButton && !T;
        if (!$) {
            return null;
        }
        let P;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            P = r("WAWebEnvironment").isWindows ? s._("Save as...") : s._("Download");
            t[6] = P;
        } else {
            P = t[6];
        }
        const N = P;
        const M = !S_length || !E;
        let w;
        if (t[7] !== h || t[8] !== S || t[9] !== onCancel || t[10] !== onDownload) {
            w = function() {
                o("WAWebMediaHubMessageActionHandlers").handleMessageDownloadClick(S, onCancel, h ? "media_hub" : undefined);
                onDownload?.();
            };
            t[7] = h;
            t[8] = S;
            t[9] = onCancel;
            t[10] = onDownload;
            t[11] = w;
        } else {
            w = t[11];
        }
        let A;
        if (t[12] !== M || t[13] !== w || t[14] !== tabOrder_1) {
            const Component = r("WDSMenuBarItem.react");
            A = <Component icon={r("WDSIconIcDownload.react")} tabOrder={tabOrder_1} disabled={M} title={N} onClick={w} marginInlineXstyle={d.btnMargin}/>;
            t[12] = M;
            t[13] = w;
            t[14] = tabOrder_1;
            t[15] = A;
        } else {
            A = t[15];
        }
        return A;
    }
    function p(e) {
        return o("WAWebChatGroupUtils").isSuspendedGroup(e);
    }
    function _(e) {
        return o("WAWebFrontendMsgGetters").getChat(e);
    }
    function f(e) {
        return o("WAWebMsgActionCanDownloadMsg").canDownloadMsg(e, true) && e.mediaData;
    }
    l.default = m;
}, 226);