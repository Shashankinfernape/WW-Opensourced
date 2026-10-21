__d("WAWebChatStatus", [
    "fbt",
    "WAWebBotUtils",
    "WAWebContactCollection",
    "WAWebEmojiText.react",
    "WAWebFrontendTextStatusGetters",
    "WAWebIdleComponent.react",
    "WAWebTextStatusCollection",
    "WAWebTextStatusGetters",
    "WAWebWid",
    "isStringNotNullAndNotWhitespaceOnly",
    "react",
    "react-compiler-runtime",
    "useWAWebTextStatusValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useEffect, useRef, useState } = c;
    const _ = <span className="x1lliihq x6ikm8r x10wlt62 xhslqc4 xlyipyv xuxw1ft">{s._("Loading About…")}</span>;
    const f = <span className="x1lliihq x6ikm8r x10wlt62 xhslqc4 xlyipyv xuxw1ft">{s._("Ask me anything")}</span>;
    function G9Component(e) {
        const t = o("react-compiler-runtime").c(13);
        const { status, waitIdle } = e;
        let i;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebFrontendTextStatusGetters").getStale,
                o("WAWebTextStatusGetters").getStatus
            ];
            l = {
                isStrong: false
            };
            t[0] = i;
            t[1] = l;
        } else {
            i = t[0];
            l = t[1];
        }
        const s = o("useWAWebTextStatusValues").useTextStatusValues(status.id, i, l);
        const c = s[0];
        const d = s[1];
        let m;
        if (t[2] !== d) {
            m = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                selectable: true,
                titlify: true,
                text: d,
                breakWord: true,
                ellipsify: true
            });
            t[2] = d;
            t[3] = m;
        } else {
            m = t[3];
        }
        const p = m;
        let g;
        if (t[4] !== d || t[5] !== status.id || t[6] !== p) {
            g = function() {
                if (status.id.isRegularUser()) {
                    o("WAWebTextStatusCollection").TextStatusCollection.find(status.id);
                    if (d === undefined) {
                        return _;
                    }
                    if (r("isStringNotNullAndNotWhitespaceOnly")(d)) {
                        return p;
                    }
                    return <></>;
                }
                if (o("WAWebBotUtils").isMetaAiBot(status.id)) {
                    return f;
                }
                return _;
            };
            t[4] = d;
            t[5] = status.id;
            t[6] = p;
            t[7] = g;
        } else {
            g = t[7];
        }
        const h = g;
        const y = c ? _ : p;
        let C;
        if (t[8] !== h || t[9] !== y || t[10] !== status.id || t[11] !== waitIdle) {
            const Component = r("WAWebIdleComponent.react");
            C = <Component id={status.id} onComplex={h} waitIdle={waitIdle}>{y}</Component>;
            t[8] = h;
            t[9] = y;
            t[10] = status.id;
            t[11] = waitIdle;
            t[12] = C;
        } else {
            C = t[12];
        }
        return C;
    }
    function h(e) {
        const t = o("WAWebTextStatusCollection").TextStatusCollection.get(e);
        if (!t) {
            return true;
        }
        if (!e.isRegularUser()) {
            o("WAWebBotUtils").isMetaAiBot(e);
            return true;
        }
        const t_status = t.status;
        if (t_status !== undefined) {
            return r("isStringNotNullAndNotWhitespaceOnly")(t_status);
        }
        return true;
    }
    function y(e) {
        const t = o("react-compiler-runtime").c(8);
        const n = e.id;
        let a;
        if (t[0] !== n) {
            a = function() {
                return o("WAWebTextStatusCollection").TextStatusCollection.get(n);
            };
            t[0] = n;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = useState(a);
        const l = i[0];
        const s = i[1];
        const cRef = useRef(null);
        let f;
        let h;
        if (t[2] !== n) {
            f = function() {
                const cRef_current = cRef.current;
                cRef.current = n;
                if (!r("WAWebWid").equals(n, cRef_current)) {
                    const t = o("WAWebContactCollection").ContactCollection.gadd(n);
                    s(t.getStatus());
                }
            };
            h = [
                n
            ];
            t[2] = n;
            t[3] = f;
            t[4] = h;
        } else {
            f = t[3];
            h = t[4];
        }
        useEffect(f, h);
        if (!l) {
            return _;
        }
        let y;
        if (t[5] !== e.waitIdle || t[6] !== l) {
            y = <G9Component status={l} waitIdle={e.waitIdle}/>;
            t[5] = e.waitIdle;
            t[6] = l;
            t[7] = y;
        } else {
            y = t[7];
        }
        return y;
    }
    l.willStatusDisplayContent = h;
    l.StatusWrapper = y;
}, 226);