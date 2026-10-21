__d("WAWebIntroPanelStartCallEmptyState.react", [
    "fbt",
    "JSResourceForInteraction",
    "WAWebEmptyStateModule.react",
    "WAWebEnvironment",
    "WAWebWamEnumLobbyEntryPointType",
    "WDSIconIcVideoCall.react",
    "react",
    "react-compiler-runtime",
    "useWAWebVoipIsCallingEnabledAndInited",
    "useWAWebVoipStartEmptyCall"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(12);
        const { baseActions, footer, metaAiTile, titleCard } = e;
        const c = o("useWAWebVoipIsCallingEnabledAndInited").useWAWebVoipIsCallingEnabledAndInited();
        const { inited, initErrored } = c;
        const _ = r("useWAWebVoipStartEmptyCall")(d);
        const { handleStartCall, isCallInProgress, isStartingCall } = _;
        let y;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            y = s._("New call");
            t[0] = y;
        } else {
            y = t[0];
        }
        const C = isStartingCall || isCallInProgress || r("WAWebEnvironment").isWeb && initErrored && !inited;
        let b;
        if (t[1] !== handleStartCall || t[2] !== C) {
            b = {
                title: y,
                Icon: r("WDSIconIcVideoCall.react"),
                clickHandler: handleStartCall,
                testid: "start-call-tile",
                actionId: "start_call",
                disabled: C
            };
            t[1] = handleStartCall;
            t[2] = C;
            t[3] = b;
        } else {
            b = t[3];
        }
        const v = b;
        let S;
        if (t[4] !== baseActions || t[5] !== metaAiTile || t[6] !== v) {
            S = metaAiTile != null ? [].concat(baseActions, [
                v,
                metaAiTile
            ]) : [].concat(baseActions, [
                v
            ]);
            t[4] = baseActions;
            t[5] = metaAiTile;
            t[6] = v;
            t[7] = S;
        } else {
            S = t[7];
        }
        const wdsActions = S;
        let L;
        if (t[8] !== footer || t[9] !== titleCard || t[10] !== wdsActions) {
            L = u.jsx(r("WAWebEmptyStateModule.react"), {
                footer,
                surface: "chats",
                titleCard,
                wdsActions
            });
            t[8] = footer;
            t[9] = titleCard;
            t[10] = wdsActions;
            t[11] = L;
        } else {
            L = t[11];
        }
        return L;
    }
    function d() {
        return r("JSResourceForInteraction")("WAWebVoipStartEmptyCall").__setRef("WAWebIntroPanelStartCallEmptyState.react").load().then(m);
    }
    function m(e) {
        return e.startEmptyCall(o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CHAT_EMPTY_STATE);
    }
    l.default = c;
}, 226);