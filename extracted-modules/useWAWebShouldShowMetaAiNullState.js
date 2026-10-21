__d("useWAWebShouldShowMetaAiNullState", [
    "WAWebBotBaseGating",
    "WAWebBotFrontendUtils",
    "WAWebBotUtils",
    "WAWebThreadModelResolver",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useMemo, useState } = s;
    function m(e, t) {
        const n = o("react-compiler-runtime").c(19);
        let a;
        if (n[0] !== e || n[1] !== t) {
            a = o("WAWebThreadModelResolver").resolveThreadOrChat(e, t);
            n[0] = e;
            n[1] = t;
            n[2] = a;
        } else {
            a = n[2];
        }
        const i = a;
        let l;
        if (n[3] !== e.id || n[4] !== t) {
            l = t != null ? t.toString() : e.id.toString();
            n[3] = e.id;
            n[4] = t;
            n[5] = l;
        } else {
            l = n[5];
        }
        const s = l;
        const u = useState(false);
        const c = u[0];
        const m = u[1];
        const _ = useState(s);
        const f = _[0];
        const g = _[1];
        if (f !== s) {
            g(s);
            m(false);
        }
        let h;
        if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
            h = function() {
                m(true);
            };
            n[6] = h;
        } else {
            h = n[6];
        }
        const y = h;
        let C;
        if (n[7] !== e || n[8] !== i) {
            const b = i === e ? [
                e.msgs
            ] : [
                e.msgs,
                i.msgs
            ];
            C = b.flatMap(p);
            n[7] = e;
            n[8] = i;
            n[9] = C;
        } else {
            C = n[9];
        }
        const v = C;
        let S;
        if (n[10] === Symbol.for("react.memo_cache_sentinel")) {
            S = [
                "add",
                "remove",
                "change:noEarlierMsgs"
            ];
            n[10] = S;
        } else {
            S = n[10];
        }
        let R;
        if (n[11] !== e.id || n[12] !== i) {
            R = function() {
                return o("WAWebBotUtils").isMetaAiBot(e.id) && o("WAWebBotFrontendUtils").isMetaAiChatEmpty(i) && i.msgs.msgLoadState.noEarlierMsgs && o("WAWebBotBaseGating").isMetaAiNullStateEnabled();
            };
            n[11] = e.id;
            n[12] = i;
            n[13] = R;
        } else {
            R = n[13];
        }
        let L;
        if (n[14] !== e || n[15] !== i) {
            L = [
                i,
                e
            ];
            n[14] = e;
            n[15] = i;
            n[16] = L;
        } else {
            L = n[16];
        }
        const E = r("useWAWebEventTargetValue")(v, S, R, L);
        const k = E && !c;
        let I;
        if (n[17] !== k) {
            I = [
                k,
                y
            ];
            n[17] = k;
            n[18] = I;
        } else {
            I = n[18];
        }
        return I;
    }
    function p(e) {
        return [
            e,
            e.msgLoadState
        ];
    }
    l.default = m;
}, 98);