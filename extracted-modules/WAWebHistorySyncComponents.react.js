__d("WAWebHistorySyncComponents.react", [
    "fbt",
    "WAWebChatConstants",
    "WAWebClock",
    "WAWebContentPlaceholder.react",
    "WAWebHistorySyncInProgressPopup.react",
    "WAWebHistorySyncProgressGetters",
    "WAWebHistorySyncUIText",
    "WAWebModalManager",
    "WAWebUserPrefsHistorySync",
    "react",
    "react-compiler-runtime",
    "useWAWebHistorySyncProgressValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(6);
        const { chat, theme } = e;
        const i = theme === undefined ? "list" : theme;
        let l;
        if (t[0] !== chat) {
            l = <L chat={chat} Paused={o("WAWebHistorySyncUIText").SYNCING_PAUSED_CONTEXTUAL_TEXT} InProgress={InProgress} Complete={E}/>;
            t[0] = chat;
            t[1] = l;
        } else {
            l = t[1];
        }
        const s = l;
        const hideBorder = chat?.endOfHistoryTransferType === o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY;
        let d;
        if (t[2] !== s || t[3] !== hideBorder || t[4] !== i) {
            d = u.jsx(r("WAWebContentPlaceholder.react"), {
                theme: i,
                secondary: s,
                hideBorder
            });
            t[2] = s;
            t[3] = hideBorder;
            t[4] = i;
            t[5] = d;
        } else {
            d = t[5];
        }
        return d;
    }
    function d() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebContentPlaceholder.react");
            t = <Component theme="md-chat-search-list"><L Paused={o("WAWebHistorySyncUIText").SYNCING_PAUSED_CONTEXTUAL_TEXT} InProgress={InProgress} Complete={m}/></Component>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function m() {
        return s._("Use WhatsApp on your phone to see older chats and messages.");
    }
    function p() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <L Paused={o("WAWebHistorySyncUIText").SYNCING_PAUSED_CONTEXTUAL_TEXT} InProgress={InProgress} Complete={_}/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function _() {
        return s._("Use WhatsApp on your phone to see older chats and messages.");
    }
    function f() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <L Paused={o("WAWebHistorySyncUIText").SYNCING_PAUSED_CONTEXTUAL_TEXT} InProgress={InProgress} Complete={g}/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function g() {
        return s._("Use WhatsApp on your phone to see older chats and messages.");
    }
    function h() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <L Paused={o("WAWebHistorySyncUIText").SYNCING_PAUSED_CONTEXTUAL_TEXT} InProgress={InProgress} Complete={y}/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function y() {
        return s._("Use WhatsApp on your phone to see messages from before {date}.", [
            s._param("date", v())
        ]);
    }
    function C() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebContentPlaceholder.react");
            t = <Component theme="md-chat-search-list"><L Paused={o("WAWebHistorySyncUIText").SYNCING_PAUSED_CONTEXTUAL_TEXT} InProgress={InProgress} Complete={b}/></Component>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function b() {
        return s._("Use WhatsApp on your phone to search messages from before {date}", [
            s._param("date", v())
        ]);
    }
    function v() {
        return o("WAWebClock").Clock.relativeDateStr(o("WAWebUserPrefsHistorySync").getHistorySyncEarliestDate());
    }
    function InProgress() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = o("WAWebHistorySyncUIText").SYNC_IN_PROGRESS_CONTEXTUAL_DRAWER(R);
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function R() {
        o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebHistorySyncInProgressPopup.react"), {}));
    }
    function L(e) {
        const t = o("react-compiler-runtime").c(7);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                o("WAWebHistorySyncProgressGetters").getPaused,
                o("WAWebHistorySyncProgressGetters").getInProgress
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const r = o("useWAWebHistorySyncProgressValues").useHistorySyncProgressValues(n);
        const a = r[0];
        const i = r[1];
        if (e.chat && e.chat.endOfHistoryTransferType === o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY) {
            return null;
        }
        const { Complete, InProgress, Paused } = e;
        if (i) {
            if (a) {
                let d;
                if (t[1] !== Paused) {
                    d = <Paused/>;
                    t[1] = Paused;
                    t[2] = d;
                } else {
                    d = t[2];
                }
                return d;
            }
            let m;
            if (t[3] !== InProgress) {
                m = <InProgress/>;
                t[3] = InProgress;
                t[4] = m;
            } else {
                m = t[4];
            }
            return m;
        }
        let p;
        if (t[5] !== Complete) {
            p = <Complete/>;
            t[5] = Complete;
            t[6] = p;
        } else {
            p = t[6];
        }
        return p;
    }
    function E() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("Use WhatsApp on your phone to see messages from before {date}.", [
                s._param("date", v())
            ]);
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    l.HistorySyncGalleryPlaceholder = c;
    l.HistorySyncSearchIncompletePlaceholder = d;
    l.HistorySyncStarredMsgsPlaceholderText = p;
    l.HistorySyncAiThreadsPlaceholderText = f;
    l.HistorySyncChatStarredMsgsPlaceholderText = h;
    l.HistorySyncChatSearchIncompletePlaceholder = C;
}, 226);