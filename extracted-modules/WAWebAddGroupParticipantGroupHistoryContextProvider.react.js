__d("WAWebAddGroupParticipantGroupHistoryContextProvider.react", [
    "WAWebAddGroupParticipantGroupHistoryContext.react",
    "WAWebFrontendChatGetters",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebGroupHistoryInitialToggleState",
    "WAWebGroupHistoryPostJoinEligibility",
    "WAWebGroupHistoryShareToggleDefaultAction",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebEventTargetValue",
    "useWAWebGroupMetadataValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useMemo, useState } = u;
    function p(e) {
        const t = o("react-compiler-runtime").c(27);
        const { chat, children, enterFlowTimestamp, messageCountPromise } = e;
        let u;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = [
                o("WAWebFrontendChatGetters").getGroupMetadata
            ];
            t[0] = u;
        } else {
            u = t[0];
        }
        const c = o("useWAWebChatValues").useChatValues(chat.id, u);
        const d = c[0];
        let p;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            p = [
                o("WAWebFrontendGroupMetadataGetters").getMemberShareGroupHistoryMode,
                o("WAWebFrontendGroupMetadataGetters").getShouldDefaultGroupHistoryShareOn
            ];
            t[1] = p;
        } else {
            p = t[1];
        }
        const _ = o("useWAWebGroupMetadataValues").useOptionalGroupMetadataValues(d?.id, p);
        const f = _?.[0];
        const g = _?.[1];
        const h = d?.participants;
        let y;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            y = [
                "bulk_add",
                "bulk_remove",
                "reset",
                "change:isAdmin",
                "change:isSuperAdmin"
            ];
            t[2] = y;
        } else {
            y = t[2];
        }
        let C;
        if (t[3] !== f || t[4] !== h) {
            C = function() {
                return o("WAWebGroupHistoryPostJoinEligibility").canCurrentUserShareHistory(h?.iAmAdmin() === true, h?.iAmSuperAdmin() === true, f);
            };
            t[3] = f;
            t[4] = h;
            t[5] = C;
        } else {
            C = t[5];
        }
        let b;
        if (t[6] !== f) {
            b = [
                f
            ];
            t[6] = f;
            t[7] = b;
        } else {
            b = t[7];
        }
        const canShareGroupHistory = r("useWAWebEventTargetValue")(h, y, C, b);
        const S = useState(null);
        const selectedMessageCount = S[0];
        const L = S[1];
        let E;
        if (t[8] !== canShareGroupHistory || t[9] !== g) {
            E = function() {
                return o("WAWebGroupHistoryInitialToggleState").computeInitialGroupHistoryToggleState(g, canShareGroupHistory);
            };
            t[8] = canShareGroupHistory;
            t[9] = g;
            t[10] = E;
        } else {
            E = t[10];
        }
        const k = useState(E);
        const I = k[0];
        const T = useState(I.shouldSendGroupHistory);
        const D = T[0];
        const x = T[1];
        const $ = useState(false);
        const hasUserToggledGroupHistory = $[0];
        const N = $[1];
        let M;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            M = function(t) {
                L(t);
            };
            t[11] = M;
        } else {
            M = t[11];
        }
        const setSelectedMessageCount = M;
        let A;
        if (t[12] !== chat.id) {
            A = function(t) {
                x(t);
                N(true);
                o("WAWebGroupHistoryShareToggleDefaultAction").persistGroupHistoryToggleChoice(chat.id, t);
            };
            t[12] = chat.id;
            t[13] = A;
        } else {
            A = t[13];
        }
        const setShouldSendGroupHistory = A;
        let O;
        if (t[14] !== canShareGroupHistory || t[15] !== chat.id || t[16] !== enterFlowTimestamp || t[17] !== hasUserToggledGroupHistory || t[18] !== I.toggleActivation || t[19] !== messageCountPromise || t[20] !== selectedMessageCount || t[21] !== setShouldSendGroupHistory || t[22] !== D) {
            O = {
                enterFlowTimestamp,
                groupWid: chat.id,
                messageCountPromise,
                selectedMessageCount,
                setSelectedMessageCount,
                shouldSendGroupHistory: D,
                setShouldSendGroupHistory,
                hasUserToggledGroupHistory,
                canShareGroupHistory,
                toggleActivation: I.toggleActivation
            };
            t[14] = canShareGroupHistory;
            t[15] = chat.id;
            t[16] = enterFlowTimestamp;
            t[17] = hasUserToggledGroupHistory;
            t[18] = I.toggleActivation;
            t[19] = messageCountPromise;
            t[20] = selectedMessageCount;
            t[21] = setShouldSendGroupHistory;
            t[22] = D;
            t[23] = O;
        } else {
            O = t[23];
        }
        const B = O;
        let W;
        if (t[24] !== children || t[25] !== B) {
            const Component = r("WAWebAddGroupParticipantGroupHistoryContext.react");
            W = <Component value={B}>{children}</Component>;
            t[24] = children;
            t[25] = B;
            t[26] = W;
        } else {
            W = t[26];
        }
        return W;
    }
    l.default = p;
}, 98);