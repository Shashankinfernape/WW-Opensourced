__d("useWAWebNewsletterPinnedMessages", [
    "WATimeUtils",
    "WAWebChatGetters",
    "WAWebNewsletterHydratePinnedMessagesAction",
    "WAWebNewsletterMetadataGetters",
    "WAWebNewsletterMsgByServerId",
    "WAWebNewsletterPinDisplay",
    "WAWebNewsletterPinGatingUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebNewsletterMetadataValues",
    "useWAWebTimeout"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useMemo, useRef, useState } = s;
    const p = 1;
    function useComponent(e) {
        const n = o("react-compiler-runtime").c(46);
        const e_newsletterMetadata = e.newsletterMetadata;
        const i = o("useWAWebNewsletterMetadataValues").useOptionalNewsletterMetadataValues(e_newsletterMetadata?.id, [
            o("WAWebNewsletterMetadataGetters").getPinnedMessages,
            o("WAWebNewsletterMetadataGetters").getMembershipType
        ], {
            isStrong: true
        }) ?? [
            null,
            null
        ];
        const l = i[0];
        const s = i[1];
        let c;
        if (n[0] !== e || n[1] !== s) {
            c = o("WAWebChatGetters").getIsNewsletter(e) && o("WAWebNewsletterPinGatingUtils").canViewNewsletterPins(s);
            n[0] = e;
            n[1] = s;
            n[2] = c;
        } else {
            c = n[2];
        }
        const _ = c;
        let g;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            g = [
                "add",
                "remove",
                "change",
                "reset"
            ];
            n[3] = g;
        } else {
            g = n[3];
        }
        let h;
        if (n[4] !== e || n[5] !== _) {
            h = function() {
                if (_) {
                    return e.getAllMsgs();
                }
                return [];
            };
            n[4] = e;
            n[5] = _;
            n[6] = h;
        } else {
            h = n[6];
        }
        let y;
        if (n[7] !== _) {
            y = [
                _
            ];
            n[7] = _;
            n[8] = y;
        } else {
            y = n[8];
        }
        const C = r("useWAWebEventTargetValue")(_ ? e.msgs : null, g, h, y);
        const b = useState(f);
        const v = b[0];
        const S = b[1];
        let R;
        if (n[9] !== v || n[10] !== l || n[11] !== _) {
            R = _ ? o("WAWebNewsletterPinDisplay").filterActiveNewsletterPins(l ?? [], v) : [];
            n[9] = v;
            n[10] = l;
            n[11] = _;
            n[12] = R;
        } else {
            R = n[12];
        }
        const L = R;
        let E;
        if (n[13] !== C) {
            E = o("WAWebNewsletterMsgByServerId").buildMsgByServerId(C);
            n[13] = C;
            n[14] = E;
        } else {
            E = n[14];
        }
        const k = E;
        let I;
        if (n[15] !== k) {
            I = function(t) {
                return k.has(t);
            };
            n[15] = k;
            n[16] = I;
        } else {
            I = n[16];
        }
        let T;
        if (n[17] !== L || n[18] !== I) {
            T = o("WAWebNewsletterPinDisplay").getNewsletterPinsToDisplay(L, I);
            n[17] = L;
            n[18] = I;
            n[19] = T;
        } else {
            T = n[19];
        }
        const D = T;
        const x = D.nextExpiryTs();
        let $;
        if (n[20] === Symbol.for("react.memo_cache_sentinel")) {
            $ = function() {
                return S(o("WATimeUtils").unixTime());
            };
            n[20] = $;
        } else {
            $ = n[20];
        }
        let P;
        if (n[21] !== x) {
            P = x != null ? o("WATimeUtils").castToUnixTime(x + p) : o("WATimeUtils").castToUnixTime(0);
            n[21] = x;
            n[22] = P;
        } else {
            P = n[22];
        }
        let N;
        if (n[23] === Symbol.for("react.memo_cache_sentinel")) {
            N = {
                isGlobal: true
            };
            n[23] = N;
        } else {
            N = n[23];
        }
        const M = o("useWAWebTimeout").useAlarm($, P, N);
        const w = M[0];
        const A = M[1];
        let F;
        let O;
        if (n[24] !== A || n[25] !== x || n[26] !== w) {
            F = function() {
                if (x == null) {
                    A();
                    return;
                }
                w();
            };
            O = [
                x,
                w,
                A
            ];
            n[24] = A;
            n[25] = x;
            n[26] = w;
            n[27] = F;
            n[28] = O;
        } else {
            F = n[27];
            O = n[28];
        }
        useEffect(F, O);
        let B;
        if (n[29] !== D) {
            B = D.unavailableServerIds();
            n[29] = D;
            n[30] = B;
        } else {
            B = n[30];
        }
        const serverIds = B;
        let q;
        if (n[31] === Symbol.for("react.memo_cache_sentinel")) {
            q = new Set;
            n[31] = q;
        } else {
            q = n[31];
        }
        const URef = useRef(q);
        const VRef = useRef(null);
        let H;
        if (n[32] !== e || n[33] !== C.length || n[34] !== serverIds) {
            H = function() {
                if (!(C.length === 0 || serverIds.length === 0)) {
                    const t = e.id.toJid();
                    if (VRef.current !== t) {
                        VRef.current = t;
                        URef.current = new Set;
                    }
                    const n = new AbortController;
                    o("WAWebNewsletterHydratePinnedMessagesAction").hydrateNewsletterPinnedMessages({
                        attempted: URef.current,
                        chat: e,
                        serverIds,
                        signal: n.signal
                    }).then((e)=>{
                        if (VRef.current === t) {
                            URef.current = e;
                        }
                    });
                    return function() {
                        return n.abort();
                    };
                }
            };
            n[32] = e;
            n[33] = C.length;
            n[34] = serverIds;
            n[35] = H;
        } else {
            H = n[35];
        }
        let G;
        if (n[36] !== e || n[37] !== C || n[38] !== serverIds) {
            G = [
                e,
                serverIds,
                C
            ];
            n[36] = e;
            n[37] = C;
            n[38] = serverIds;
            n[39] = G;
        } else {
            G = n[39];
        }
        useEffect(H, G);
        let z;
        e: {
            if (!_) {
                let j;
                if (n[40] === Symbol.for("react.memo_cache_sentinel")) {
                    j = [];
                    n[40] = j;
                } else {
                    j = n[40];
                }
                z = j;
                break e;
            }
            let K;
            if (n[41] !== k || n[42] !== D) {
                let Q;
                if (n[44] !== k) {
                    Q = function(t, n) {
                        const e = k.get(n);
                        if (e != null) {
                            t.push(e);
                        }
                        return t;
                    };
                    n[44] = k;
                    n[45] = Q;
                } else {
                    Q = n[45];
                }
                K = D.resolvedServerIdsDescending().reduce(Q, []);
                n[41] = k;
                n[42] = D;
                n[43] = K;
            } else {
                K = n[43];
            }
            z = K;
        }
        return z;
    }
    function f() {
        return o("WATimeUtils").unixTime();
    }
    l.default = useComponent;
}, 98);