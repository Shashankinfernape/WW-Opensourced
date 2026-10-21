__d("WAWebPanelsMenuTabMarker.react", [
    "WAWebL10N",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { memo, useState } = c;
    const p = 100;
    const _ = {
        menuTabsMarker: {
            position: "x10l6tqk",
            bottom: "x1ey2m1c",
            left: "xu96u03",
            transition: "x9ukxhc",
            $$css: true
        },
        animate: {
            transitionProperty: "x1humd01",
            transitionDuration: "x1d8287x",
            transitionTimingFunction: "xrix70t",
            $$css: true
        },
        animateWithTransform: {
            transitionProperty: "x19ix5ol",
            transitionDuration: "x1d8287x",
            transitionTimingFunction: "xrix70t",
            $$css: true
        },
        hide: {
            opacity: "xg01cxk",
            visibility: "xlshs6z",
            $$css: true
        }
    };
    function FComponent(t) {
        const n = o("react-compiler-runtime").c(14);
        const { animate, hide, numTabs, selectedTabIndex } = t;
        const c = useState(g);
        const d = c[0];
        const f = useState(selectedTabIndex);
        const h = f[0];
        const y = f[1];
        const C = useState(false);
        const b = C[0];
        const v = C[1];
        const S = useState(selectedTabIndex === -1);
        const R = S[0];
        const L = S[1];
        if (h !== selectedTabIndex) {
            v(h === -1);
            L(h !== -1 && selectedTabIndex === -1);
            y(selectedTabIndex);
        }
        let E;
        let transform;
        const I = b ? false : !!animate;
        if (selectedTabIndex !== -1) {
            transform = `translateX(${d === -1 ? p * (numTabs - 1) - selectedTabIndex * p : selectedTabIndex * p}%)`;
            E = "4px";
        } else if (R) {
            E = "0px";
        }
        let T;
        if (n[0] !== animate || n[1] !== I || n[2] !== hide) {
            T = (e || (e = r("stylex")))(hide === true && _.hide, !I && animate === true && _.animate, I && _.animateWithTransform, _.menuTabsMarker, false);
            n[0] = animate;
            n[1] = I;
            n[2] = hide;
            n[3] = T;
        } else {
            T = n[3];
        }
        const D = `${p / numTabs}%`;
        let x;
        if (n[4] !== D || n[5] !== transform) {
            x = {
                width: D,
                transform
            };
            n[4] = D;
            n[5] = transform;
            n[6] = x;
        } else {
            x = n[6];
        }
        let $;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            $ = "x1hc1fzr xfn3atn x1j14ogj xbrszos xea3l6g x18isctg x2q3nzr";
            n[7] = $;
        } else {
            $ = n[7];
        }
        let P;
        if (n[8] !== E) {
            P = <div className={$} style={{
                width: "65%",
                margin: "0 auto",
                height: E
            }}/>;
            n[8] = E;
            n[9] = P;
        } else {
            P = n[9];
        }
        let N;
        if (n[10] !== T || n[11] !== x || n[12] !== P) {
            N = <div data-testid="menu-tab-marker" className={T} style={x}>{P}</div>;
            n[10] = T;
            n[11] = x;
            n[12] = P;
            n[13] = N;
        } else {
            N = n[13];
        }
        return N;
    }
    function g() {
        if (r("WAWebL10N").isRTL()) {
            return -1;
        }
        return 1;
    }
    const h = memo(FComponent);
    l.default = h;
}, 98);