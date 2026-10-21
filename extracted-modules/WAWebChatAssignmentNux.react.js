__d("WAWebChatAssignmentNux.react", [
    "fbt",
    "WAWebChatAssignmentLogEvents",
    "WAWebFeatureFlagName",
    "WAWebNux",
    "WAWebTooltip.react",
    "WAWebUserPrefsStore",
    "react",
    "react-compiler-runtime",
    "useWAWebGetFeatureFlag",
    "useWAWebNux"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const { useEffect, useMemo, useState } = u;
    function useP(e) {
        const t = o("react-compiler-runtime").c(10);
        const { chat, targetRef } = e;
        const i = r("useWAWebNux")(o("WAWebNux").NUX.CHAT_ASSIGNMENT);
        const l = i[0];
        const u = i[1];
        const d = useState(true);
        const p = d[0];
        const _ = d[1];
        const enabled = r("useWAWebGetFeatureFlag")(o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT).enabled;
        let g;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            g = s._("Assign chat to a linked device");
            t[0] = g;
        } else {
            g = t[0];
        }
        const h = o("WAWebTooltip.react").useTooltip({
            alignment: o("WAWebTooltip.react").PopoverAlignment.End,
            element: g,
            onClick: function() {
                v();
                _(false);
            },
            position: o("WAWebTooltip.react").PopoverPosition.Bottom,
            target: targetRef
        });
        const { hideTooltip, showTooltip, tooltip } = h;
        var v = hideTooltip;
        let S;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            S = r("WAWebUserPrefsStore").getUser("chat_assignment_agent_has_assigned_chats");
            t[1] = S;
        } else {
            S = t[1];
        }
        const L = l && p && enabled && chat.assignedAgent == null && S == null;
        let E;
        let k;
        if (t[2] !== chat || t[3] !== L || t[4] !== showTooltip || t[5] !== targetRef || t[6] !== tooltip || t[7] !== u) {
            E = function() {
                if (L && tooltip == null && targetRef.current != null) {
                    showTooltip();
                    u();
                    o("WAWebChatAssignmentLogEvents").logNuxShown(chat);
                }
            };
            k = [
                L,
                tooltip,
                targetRef,
                showTooltip,
                u,
                chat
            ];
            t[2] = chat;
            t[3] = L;
            t[4] = showTooltip;
            t[5] = targetRef;
            t[6] = tooltip;
            t[7] = u;
            t[8] = E;
            t[9] = k;
        } else {
            E = t[8];
            k = t[9];
        }
        useEffect(E, k);
        return tooltip;
    }
    l.default = useP;
}, 226);