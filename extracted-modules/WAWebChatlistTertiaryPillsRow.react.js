__d("WAWebChatlistTertiaryPillsRow.react", [
    "fbt",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebChatListPillUtils",
    "WAWebChatlistAiStatusKind",
    "WAWebChatlistPillOverflow",
    "WAWebChatlistTertiaryPillsLogEvents",
    "WAWebEmojiText.react",
    "WAWebLabelCollection",
    "WAWebLabelPillColors",
    "WAWebLeadListConstants",
    "WAWebLeadStage",
    "WAWebLeadStageColors",
    "WAWebLeadStageNames",
    "WAWebLeadSublistGating",
    "WAWebProtobufsE2E.pb",
    "WAWebThemeContext",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebChatPreviewState",
    "useWAWebLeadStageFromStore"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useEffect, useLayoutEffect, useState } = d;
    const g = 38;
    const h = "11px";
    const y = 400;
    const C = "0.5px";
    const b = "11px";
    const v = "13px";
    const S = 500;
    const R = "18px";
    const L = 4;
    const E = {
        display: "x3nfvp2",
        alignItems: "x6s0dn4",
        height: "xmix8c7",
        boxSizing: "x9f619",
        paddingLeft: "x11iknt3",
        paddingRight: "x1nx2rwh",
        paddingInlineStart: "",
        paddingInlineEnd: "",
        paddingTop: "xyqdw3p",
        paddingBottom: "x1nbhmlj",
        rowGap: "x129bwdz",
        columnGap: "x1trrmfo",
        borderStartStartRadius: "xbrszos",
        borderStartEndRadius: "xea3l6g",
        borderEndEndRadius: "x18isctg",
        borderEndStartRadius: "x2q3nzr",
        flexShrink: "x2lah0s",
        fontSize: "x1ncwhqj",
        fontWeight: "xo1l8bm",
        textTransform: "xtvhhri",
        fontVariant: "x1j8cyr6",
        letterSpacing: "xbac8wx",
        whiteSpace: "xuxw1ft",
        maxWidth: "xzfcrpp",
        lineHeight: "x1b1uo88",
        overflowX: "x6ikm8r",
        overflowY: "x10wlt62",
        $$css: true
    };
    const k = {
        pill: function(t, n) {
            return [
                E,
                {
                    backgroundColor: t != null ? "xl8spv7" : t,
                    color: n != null ? "x14rh7hd" : n,
                    $$css: true
                },
                {
                    "--x-backgroundColor": t ?? undefined,
                    "--x-color": n ?? undefined
                }
            ];
        },
        aiPill: {
            maxWidth: "x1x1rfll",
            $$css: true
        },
        pillEmojiTextWeight: {
            fontWeight: "xo1l8bm",
            $$css: true
        },
        pillEmoji: {
            transform: "xst6bnn",
            transformOrigin: "x1g0ag68",
            display: "x1rg5ohu",
            verticalAlign: "x16dsc37",
            marginTop: "x1rdy4ex",
            marginBottom: "x4vbgl9",
            marginInlineStart: "x165d6jo",
            marginInlineEnd: "x1lxpwgx",
            marginLeft: null,
            marginRight: null,
            $$css: true
        }
    };
    function useI(e) {
        const t = o("react-compiler-runtime").c(12);
        const n = useState(null);
        const r = n[0];
        const a = n[1];
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = function(t) {
                a(t);
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = i;
        const s = useState(o("WAWebChatlistPillOverflow").EMPTY_RESULT);
        const u = s[0];
        const c = s[1];
        const d = useState(0);
        const m = d[0];
        const p = d[1];
        const h = useState(0);
        const y = h[0];
        const C = h[1];
        const b = useState(0);
        const v = b[0];
        const S = b[1];
        const R = useState(0);
        const E = R[0];
        const k = R[1];
        const I = u.hiddenCount > 0;
        if (e !== m) {
            p(e);
            if (I) {
                c(o("WAWebChatlistPillOverflow").EMPTY_RESULT);
            }
            k(D);
        }
        if (Math.abs(v - y) > 0.5) {
            C(v);
            if (I) {
                c(o("WAWebChatlistPillOverflow").EMPTY_RESULT);
            }
            k(T);
        }
        let x;
        let $;
        if (t[1] !== r) {
            x = function() {
                if (r != null) {
                    const e = new ResizeObserver(function(e) {
                        const r = e[0]?.contentRect.width ?? 0;
                        S(r);
                    });
                    e.observe(r);
                    return function() {
                        e.disconnect();
                    };
                }
            };
            $ = [
                r
            ];
            t[1] = r;
            t[2] = x;
            t[3] = $;
        } else {
            x = t[2];
            $ = t[3];
        }
        useLayoutEffect(x, $);
        let P;
        let N;
        if (t[4] !== r || t[5] !== I || t[6] !== E || t[7] !== m) {
            P = function() {
                if (!(r == null || m === 0 || I || E < 0)) {
                    const e = o("WAWebChatlistPillOverflow").measureOverflow(r, L, g);
                    if (e.hiddenCount > 0) {
                        c(e);
                    }
                }
            };
            N = [
                r,
                I,
                m,
                E
            ];
            t[4] = r;
            t[5] = I;
            t[6] = E;
            t[7] = m;
            t[8] = P;
            t[9] = N;
        } else {
            P = t[8];
            N = t[9];
        }
        useLayoutEffect(P, N);
        let M;
        if (t[10] !== u) {
            M = [
                l,
                u
            ];
            t[10] = u;
            t[11] = M;
        } else {
            M = t[11];
        }
        return M;
    }
    function T(e) {
        return e + 1;
    }
    function D(e) {
        return e + 1;
    }
    function x(e) {
        if (o("WAWebBizAiAgentStatusUtils").shouldShowAiChipsForChat(e)) {
            if (e.capiThreadControl === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN) {
                return o("WAWebChatlistAiStatusKind").AiStatusKind.RESPONDING;
            }
            if (e.capiThreadControl === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_PASSED) {
                return o("WAWebChatlistAiStatusKind").AiStatusKind.HANDOFF;
            }
            return null;
        }
        return null;
    }
    function $(t, n) {
        const a = t === o("WAWebChatlistAiStatusKind").AiStatusKind.RESPONDING ? o("WAWebLabelPillColors").AI_RESPONDING_COLOR_INDEX : o("WAWebLabelPillColors").AI_HANDOFF_COLOR_INDEX;
        const i = o("WAWebLabelPillColors").getPillColors(a, n);
        const { bg, text } = i;
        if (t === o("WAWebChatlistAiStatusKind").AiStatusKind.RESPONDING) {
            return <span key={o("WAWebChatlistAiStatusKind").AiStatusKind.RESPONDING} {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(k.pill(bg, text), k.aiPill), {
                "data-testid": "ai-responding-pill",
                children: s._("AI responding")
            })}/>;
        }
        return <span key={o("WAWebChatlistAiStatusKind").AiStatusKind.HANDOFF} {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(k.pill(bg, text), k.aiPill), {
            "data-testid": "ai-handoff-pill",
            children: s._("AI handoff")
        })}/>;
    }
    $.displayName = `${$.name} [from ${i.id}]`;
    function P(t, n, a) {
        const l = o("WAWebLabelPillColors").getPillColors(a != null ? o("WAWebLeadStageColors").getLeadStagePillColorIndex(a) : t.colorIndex ?? o("WAWebLabelPillColors").DEFAULT_COLOR_INDEX, n);
        const { bg, text } = l;
        const d = a != null ? o("WAWebLeadStageNames").getLeadStageName(a).toString() : t.name;
        return <span key={`label_${t.id}`} {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(k.pill(bg, text)), {
            title: d,
            "data-testid": `label-pill-${t.id}`,
            children: <span className="x6ikm8r x10wlt62 xlyipyv xo1l8bm xeuugli">{c.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: d,
                emojiXstyle: k.pillEmoji,
                xstyle: k.pillEmojiTextWeight
            })}</span>
        })}/>;
    }
    P.displayName = `${P.name} [from ${i.id}]`;
    function N({ chat, hasAiChip, hasAnyPill }) {
        if (hasAnyPill) {
            if (hasAiChip) {
                if (chat.capiThreadControl === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN) {
                    return o("WAWebChatlistTertiaryPillsLogEvents").TertiaryPillsChipKind.AI_RESPONDING;
                }
                return o("WAWebChatlistTertiaryPillsLogEvents").TertiaryPillsChipKind.AI_HANDOFF;
            }
            return o("WAWebChatlistTertiaryPillsLogEvents").TertiaryPillsChipKind.LABELS_ONLY;
        }
        return null;
    }
    function useM(e, chipKind, pillCount, overflowCount) {
        const a = o("react-compiler-runtime").c(6);
        let i;
        let l;
        if (a[0] !== e || a[1] !== chipKind || a[2] !== overflowCount || a[3] !== pillCount) {
            i = function() {
                if (chipKind == null) {
                    o("WAWebChatlistTertiaryPillsLogEvents").logTertiaryPillsRowMismatch(e, o("WAWebChatlistTertiaryPillsLogEvents").TertiaryPillsMismatchReason.EMPTY_AFTER_RESERVATION);
                    return;
                }
                o("WAWebChatlistTertiaryPillsLogEvents").logTertiaryPillsRowImpression({
                    chatId: e,
                    chipKind,
                    overflowCount,
                    pillCount
                });
            };
            l = [
                e,
                chipKind,
                pillCount,
                overflowCount
            ];
            a[0] = e;
            a[1] = chipKind;
            a[2] = overflowCount;
            a[3] = pillCount;
            a[4] = i;
            a[5] = l;
        } else {
            i = a[4];
            l = a[5];
        }
        useEffect(i, l);
    }
    function WComponent(e) {
        const t = o("react-compiler-runtime").c(27);
        const e_chat = e.chat;
        o("useWAWebChatPreviewState").useChatPreviewState(e_chat);
        const a = o("WAWebThemeContext").useIsDarkTheme();
        let i;
        if (t[0] !== e_chat || t[1] !== a) {
            const l = x(e_chat);
            i = l != null ? $(l, a) : null;
            t[0] = e_chat;
            t[1] = a;
            t[2] = i;
        } else {
            i = t[2];
        }
        const u = i;
        const n_labels = e_chat.labels;
        let m;
        if (t[3] !== e_chat || t[4] !== n_labels) {
            m = o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(e_chat) && n_labels != null ? n_labels.find(A) : null;
            t[3] = e_chat;
            t[4] = n_labels;
            t[5] = m;
        } else {
            m = t[5];
        }
        const p = m;
        let _;
        if (t[6] !== e_chat.id) {
            _ = e_chat.id.toString();
            t[6] = e_chat.id;
            t[7] = _;
        } else {
            _ = t[7];
        }
        const f = r("useWAWebLeadStageFromStore")(_, p != null);
        const g = o("WAWebBizAiAgentStatusUtils").shouldShowLabelPillsForChat(e_chat) && n_labels != null ? o("WAWebChatListPillUtils").selectVisiblePills(n_labels, null, o("WAWebBizAiAgentGating").isAiListsWebUIEnabled()) : {
            overflowCount: 0,
            overflowedLabels: [],
            visibleLabels: []
        };
        const { overflowCount, overflowedLabels, visibleLabels } = g;
        let b;
        if (t[8] !== a || t[9] !== p || t[10] !== f) {
            b = function(t) {
                return P(t, a, t.id === p ? f ?? o("WAWebLeadStage").LeadStage.LEAD : null);
            };
            t[8] = a;
            t[9] = p;
            t[10] = f;
            t[11] = b;
        } else {
            b = t[11];
        }
        const v = visibleLabels.map(b);
        const S = (u != null ? 1 : 0) + v.length;
        const R = useI(S);
        const L = R[0];
        const E = R[1];
        const k = overflowCount + E.hiddenCount;
        const hasAiChip = u != null;
        const hasAnyPill = S > 0;
        let w;
        if (t[12] !== e_chat || t[13] !== hasAiChip || t[14] !== hasAnyPill) {
            w = N({
                chat: e_chat,
                hasAiChip,
                hasAnyPill
            });
            t[12] = e_chat;
            t[13] = hasAiChip;
            t[14] = hasAnyPill;
            t[15] = w;
        } else {
            w = t[15];
        }
        const F = w;
        let O;
        if (t[16] !== e_chat.id) {
            O = e_chat.id.toString();
            t[16] = e_chat.id;
            t[17] = O;
        } else {
            O = t[17];
        }
        useM(O, F, S, k);
        if (S === 0) {
            return null;
        }
        const B = Math.min(E.hiddenCount, v.length);
        const W = B > 0 ? v.slice(0, v.length - B) : v;
        const q = k > 0 ? o("WAWebChatlistPillOverflow").computeOverflowTooltip(visibleLabels, overflowedLabels, B) : "";
        let U;
        if (t[18] === Symbol.for("react.memo_cache_sentinel")) {
            U = {
                className: "x78zum5 x1a02dak x1b73lln x1trrmfo x1cy8zhl x1tiyuxx xbcllsc x6ikm8r x10wlt62"
            };
            t[18] = U;
        } else {
            U = t[18];
        }
        let V;
        if (t[19] !== q || t[20] !== k) {
            V = k > 0 && <span className="x3nfvp2 x6s0dn4 xmix8c7 x9f619 x1gxa6cn xa0aww2 x4tra6z x1j8ymqv x1nxh6w3 xk50ysn xhslqc4 xuxw1ft x2lah0s xd4r4e8" title={q} data-testid="overflow-count">{s._("_j{\"*\":\"+{count}\"}", [
                s._param("count", k, [
                    0,
                    k
                ])
            ])}</span>;
            t[19] = q;
            t[20] = k;
            t[21] = V;
        } else {
            V = t[21];
        }
        let H;
        if (t[22] !== u || t[23] !== L || t[24] !== W || t[25] !== V) {
            H = <div {...babelHelpers.extends({
                ref: L
            }, U, {
                role: "group",
                "data-testid": "chatlist-tertiary-pills-row",
                children: [
                    u,
                    W,
                    V
                ]
            })}/>;
            t[22] = u;
            t[23] = L;
            t[24] = W;
            t[25] = V;
            t[26] = H;
        } else {
            H = t[26];
        }
        return H;
    }
    function A(e) {
        return o("WAWebLabelCollection").LabelCollection.get(e)?.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID;
    }
    l.default = WComponent;
}, 226);