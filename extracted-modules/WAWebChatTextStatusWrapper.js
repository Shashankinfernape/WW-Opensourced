__d("WAWebChatTextStatusWrapper", [
    "fbt",
    "WAWebContactCollection",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebFrontendTextStatusGetters",
    "WAWebIdleComponent.react",
    "WAWebTextStatusAction",
    "WAWebTextStatusCollection",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusGetters",
    "WAWebTextStatusUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebTextStatusValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    const d = <>{s._("Loading About…")}</>;
    function m(e) {
        let t;
        const n = o("WAWebContactCollection").ContactCollection.gadd(e);
        const r = n.getStatus();
        const textStatusString = (t = o("WAWebFrontendContactGetters")).getTextStatusString(n);
        const textStatusEmoji = t.getTextStatusEmoji(n);
        const l = t.getTextStatusLastUpdateTime(n);
        const s = t.getTextStatusExpiryTs(n);
        const u = t.getTextStatusEphemeralDuration(n);
        const c = o("WAWebTextStatusUtils").isTextStatusNotFetched(l);
        if (!o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) {
            return false;
        }
        if (o("WAWebTextStatusUtils").shouldDisplayTextStatus({
            textStatusEmoji,
            textStatusEphemeralDuration: u,
            textStatusExpiryTs: s,
            textStatusLastUpdateTime: l,
            textStatusString
        })) {
            return true;
        }
        if (o("WAWebUserPrefsMeUser").isMeAccount(e)) {
            return false;
        }
        if (!o("WAWebTextStatusUtils").hasEverHadTextStatus(l) && !c && o("WAWebTextStatusUtils").hasCustomAboutSet(r)) {
            const p = r.status?.trim() ?? "";
            return p !== "";
        }
        return false;
    }
    function p(e) {
        const t = o("react-compiler-runtime").c(41);
        const { contactId, ellipsify, waitIdle } = e;
        const s = ellipsify === undefined ? true : ellipsify;
        const m = o("WAWebContactCollection").ContactCollection.gadd(contactId);
        const p = m.getStatus();
        let _;
        let f;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            _ = [
                o("WAWebFrontendTextStatusGetters").getStale,
                o("WAWebTextStatusGetters").getStatus
            ];
            f = {
                isStrong: false
            };
            t[0] = _;
            t[1] = f;
        } else {
            _ = t[0];
            f = t[1];
        }
        const g = o("useWAWebTextStatusValues").useTextStatusValues(p.id, _, f);
        const h = g[0];
        const y = g[1];
        let C;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            let b;
            C = [
                (b = o("WAWebFrontendContactGetters")).getTextStatusString,
                b.getTextStatusEmoji,
                b.getTextStatusLastUpdateTime,
                b.getTextStatusExpiryTs,
                b.getTextStatusEphemeralDuration
            ];
            t[2] = C;
        } else {
            C = t[2];
        }
        const v = o("useWAWebContactValues").useContactValues(m.id, C);
        const S = v[0];
        const R = v[1];
        const L = v[2];
        const E = v[3];
        const k = v[4];
        let I;
        if (t[3] !== R || t[4] !== k || t[5] !== E || t[6] !== L || t[7] !== S) {
            I = o("WAWebTextStatusUtils").shouldDisplayTextStatus({
                textStatusEmoji: R,
                textStatusEphemeralDuration: k,
                textStatusExpiryTs: E,
                textStatusLastUpdateTime: L,
                textStatusString: S
            });
            t[3] = R;
            t[4] = k;
            t[5] = E;
            t[6] = L;
            t[7] = S;
            t[8] = I;
        } else {
            I = t[8];
        }
        const T = I;
        let D;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            D = <></>;
            t[9] = D;
        } else {
            D = t[9];
        }
        const x = D;
        let $;
        if (t[10] !== T || t[11] !== s || t[12] !== R || t[13] !== S) {
            $ = function() {
                if (!T) {
                    return x;
                }
                let e;
                if (R != null) {
                    const t = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(R);
                    if (t != null) {
                        e = <div className="x1gabggj">{u.jsx(r("WAWebEmoji.react"), {
                            emoji: t,
                            size: "small"
                        }, "low-res")}</div>;
                    }
                }
                const Component = o("WAWebFlex.react").FlexRow;
                return <Component align="center">{e}{u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    direction: "auto",
                    selectable: true,
                    ellipsify: s === false ? undefined : true,
                    titlify: true,
                    text: S ?? "",
                    breakWord: true
                })}</Component>;
            };
            t[10] = T;
            t[11] = s;
            t[12] = R;
            t[13] = S;
            t[14] = $;
        } else {
            $ = t[14];
        }
        const P = $;
        let N;
        if (t[15] !== L) {
            N = o("WAWebTextStatusUtils").isTextStatusNotFetched(L);
            t[15] = L;
            t[16] = N;
        } else {
            N = t[16];
        }
        const M = N;
        const w = !S && !R && o("WAWebTextStatusUtils").isLegacyAboutNotFetched(p);
        let A;
        if (t[17] !== contactId) {
            A = o("WAWebUserPrefsMeUser").isMeAccount(contactId);
            t[17] = contactId;
            t[18] = A;
        } else {
            A = t[18];
        }
        const F = A;
        let O;
        if (t[19] !== L) {
            O = o("WAWebTextStatusUtils").hasEverHadTextStatus(L);
            t[19] = L;
            t[20] = O;
        } else {
            O = t[20];
        }
        const B = O;
        let W;
        let q;
        if (t[21] !== B || t[22] !== contactId || t[23] !== F || t[24] !== h || t[25] !== M) {
            W = function() {
                if (!F && !B && !M && h) {
                    o("WAWebTextStatusCollection").TextStatusCollection.find(contactId);
                }
            };
            q = [
                contactId,
                F,
                B,
                M,
                h
            ];
            t[21] = B;
            t[22] = contactId;
            t[23] = F;
            t[24] = h;
            t[25] = M;
            t[26] = W;
            t[27] = q;
        } else {
            W = t[26];
            q = t[27];
        }
        e_useEffect(W, q);
        const U = ()=>{
            if (o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) {
                if (T) {
                    return P();
                }
                if (!F && !B && !M && o("WAWebTextStatusUtils").hasCustomAboutSet(p)) {
                    if (h) {
                        return d;
                    }
                    return <>{y}</>;
                }
                return x;
            }
            return x;
        };
        const V = U();
        let H;
        if (t[28] !== B || t[29] !== contactId || t[30] !== V || t[31] !== F || t[32] !== w || t[33] !== M || t[34] !== L) {
            H = function() {
                const e = (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        let e;
                        if (M) {
                            e = o("WAWebTextStatusAction").getTextStatus(contactId, L);
                        } else if (!F && !B && w) {
                            e = o("WAWebTextStatusCollection").TextStatusCollection.find(contactId);
                        }
                        return e;
                    });
                    return function() {
                        return e.apply(this, arguments);
                    };
                })();
                e();
                return V;
            };
            t[28] = B;
            t[29] = contactId;
            t[30] = V;
            t[31] = F;
            t[32] = w;
            t[33] = M;
            t[34] = L;
            t[35] = H;
        } else {
            H = t[35];
        }
        const G = H;
        let z;
        if (t[36] !== contactId || t[37] !== G || t[38] !== V || t[39] !== waitIdle) {
            const Component = r("WAWebIdleComponent.react");
            z = <Component id={contactId} onComplex={G} waitIdle={waitIdle}>{V}</Component>;
            t[36] = contactId;
            t[37] = G;
            t[38] = V;
            t[39] = waitIdle;
            t[40] = z;
        } else {
            z = t[40];
        }
        return z;
    }
    l.willTextStatusDisplayContent = m;
    l.TextStatus = p;
}, 226);