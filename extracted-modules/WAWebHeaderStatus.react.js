__d("WAWebHeaderStatus.react", [
    "fbt",
    "WAJids",
    "WAWebModalManager",
    "WAWebOpenStatusQuotedFlow",
    "WAWebStatusCollection",
    "WAWebStatusGetters",
    "WAWebStatusQuotedFlowLoadable",
    "WAWebWamEnumStatusRowSection",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebStatusValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useState = e.useState;
    function d(e, t, n, r, a) {
        const d = o("react-compiler-runtime").c(38);
        let p;
        if (d[0] !== e.id || d[1] !== n) {
            p = function() {
                return (n ? o("WAWebStatusCollection").StatusCollection.get(e.id) : null) ?? null;
            };
            d[0] = e.id;
            d[1] = n;
            d[2] = p;
        } else {
            p = d[2];
        }
        const _ = e_useState(p);
        const f = _[0];
        const g = _[1];
        const h = e_useState(e.id);
        const y = h[0];
        const C = h[1];
        if (e.id !== y) {
            C(e.id);
            g((n ? o("WAWebStatusCollection").StatusCollection.get(e.id) : null) ?? null);
        }
        let v;
        if (d[3] === Symbol.for("react.memo_cache_sentinel")) {
            v = [
                "add",
                "remove",
                "change:msgsChanged"
            ];
            d[3] = v;
        } else {
            v = d[3];
        }
        let S;
        if (d[4] !== e.id) {
            S = function() {
                return g(o("WAWebStatusCollection").StatusCollection.get(e.id) ?? null);
            };
            d[4] = e.id;
            d[5] = S;
        } else {
            S = d[5];
        }
        o("useWAWebListener").useListener(n ? o("WAWebStatusCollection").StatusCollection : null, v, S);
        let R;
        if (d[6] !== e.id || d[7] !== t) {
            R = function() {
                return (t ? o("WAWebStatusCollection").StatusCollection.get(e.id) : null) ?? null;
            };
            d[6] = e.id;
            d[7] = t;
            d[8] = R;
        } else {
            R = d[8];
        }
        const L = e_useState(R);
        const E = L[0];
        const k = L[1];
        if (e.id !== y) {
            k((t ? o("WAWebStatusCollection").StatusCollection.get(e.id) : null) ?? null);
        }
        let T;
        if (d[9] === Symbol.for("react.memo_cache_sentinel")) {
            T = [
                "add",
                "remove",
                "change:msgsChanged"
            ];
            d[9] = T;
        } else {
            T = d[9];
        }
        let D;
        if (d[10] !== e.id) {
            D = function() {
                return k(o("WAWebStatusCollection").StatusCollection.get(e.id) ?? null);
            };
            d[10] = e.id;
            d[11] = D;
        } else {
            D = d[11];
        }
        o("useWAWebListener").useListener(t ? o("WAWebStatusCollection").StatusCollection : null, T, D);
        const x = f ?? E;
        let $;
        if (d[12] === Symbol.for("react.memo_cache_sentinel")) {
            $ = [
                o("WAWebStatusGetters").getUnreadCount,
                o("WAWebStatusGetters").getTotalCount
            ];
            d[12] = $;
        } else {
            $ = d[12];
        }
        const P = o("useWAWebStatusValues").useOptionalStatusValues(x?.id, $);
        const totalCount = P?.[1] ?? 0;
        const M = P?.[0] ?? 0;
        let w;
        if (d[13] !== x || d[14] !== totalCount || d[15] !== M || d[16] !== r) {
            w = x != null && !r && totalCount > 0 ? {
                totalCount,
                viewedCount: totalCount - M
            } : undefined;
            d[13] = x;
            d[14] = totalCount;
            d[15] = M;
            d[16] = r;
            d[17] = w;
        } else {
            w = d[17];
        }
        const chatStatusRing = w;
        let F;
        if (d[18] === Symbol.for("react.memo_cache_sentinel")) {
            F = s._("View status");
            d[18] = F;
        } else {
            F = d[18];
        }
        const label = F;
        const B = MComponent;
        let W;
        if (d[19] !== e.id) {
            W = function() {
                o("WAWebOpenStatusQuotedFlow").fetchAndOpenNewsletterStatus({
                    newsletterJid: o("WAJids").toNewsletterJid(e.id.toString()),
                    statusModelId: e.id,
                    rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHANNEL_THREAD_SCREEN,
                    rowIndex: 0
                });
            };
            d[19] = e.id;
            d[20] = W;
        } else {
            W = d[20];
        }
        const q = W;
        let U;
        if (d[21] !== E || d[22] !== r || d[23] !== f || d[24] !== a || d[25] !== q) {
            U = function() {
                if (f != null && !r) {
                    q();
                    return;
                }
                const e = E;
                if (e != null && !r) {
                    B(e);
                    return;
                }
                a();
            };
            d[21] = E;
            d[22] = r;
            d[23] = f;
            d[24] = a;
            d[25] = q;
            d[26] = U;
        } else {
            U = d[26];
        }
        const handleAvatarClick = U;
        let H;
        if (d[27] !== x || d[28] !== chatStatusRing || d[29] !== f || d[30] !== q) {
            H = chatStatusRing != null && x != null ? {
                type: "viewStatus",
                onPress: function() {
                    if (f != null) {
                        q();
                        return;
                    }
                    B(x);
                },
                label
            } : undefined;
            d[27] = x;
            d[28] = chatStatusRing;
            d[29] = f;
            d[30] = q;
            d[31] = H;
        } else {
            H = d[31];
        }
        const statusInteraction = H;
        const shouldUseStatusAvatarInteraction = statusInteraction != null;
        const activeStatusId = x?.id ?? null;
        let K;
        if (d[32] !== chatStatusRing || d[33] !== handleAvatarClick || d[34] !== shouldUseStatusAvatarInteraction || d[35] !== statusInteraction || d[36] !== activeStatusId) {
            K = {
                activeStatusId,
                chatStatusRing,
                handleAvatarClick,
                shouldUseStatusAvatarInteraction,
                statusInteraction
            };
            d[32] = chatStatusRing;
            d[33] = handleAvatarClick;
            d[34] = shouldUseStatusAvatarInteraction;
            d[35] = statusInteraction;
            d[36] = activeStatusId;
            d[37] = K;
        } else {
            K = d[37];
        }
        return K;
    }
    function MComponent(e) {
        const Component = o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable;
        o("WAWebModalManager").ModalManager.openMedia(<Component status={e} onClose={p} rowSection={o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHAT_TOP_BAR} rowIndex={0}/>, {
            transition: "status-modal"
        });
    }
    function p() {
        return o("WAWebModalManager").ModalManager.closeMedia();
    }
    l.useWAWebConversationHeaderStatus = d;
}, 226);