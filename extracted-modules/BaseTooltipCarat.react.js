__d("BaseTooltipCarat.react", [
    "BaseTooltipAboveCarat.svg.react",
    "BaseTooltipBelowCarat.svg.react",
    "BaseTooltipEndCarat.svg.react",
    "BaseTooltipStartCarat.svg.react",
    "react",
    "react-compiler-runtime",
    "react-strict-dom"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        caratContainer: {
            display: "x78zum5",
            $$css: true
        }
    };
    const c = (position)=>{
        switch(position){
            case "below":
                return r("BaseTooltipBelowCarat.svg.react");
            case "above":
                return r("BaseTooltipAboveCarat.svg.react");
            case "start":
                return r("BaseTooltipStartCarat.svg.react");
            case "end":
                return r("BaseTooltipEndCarat.svg.react");
            default:
                return r("BaseTooltipBelowCarat.svg.react");
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(11);
        const { fillXStyle, position, shouldFadeIn, transitionInXStyle, transitionOutXStyle } = e;
        const d = shouldFadeIn === undefined ? false : shouldFadeIn;
        let m;
        if (t[0] !== position) {
            m = c(position);
            t[0] = position;
            t[1] = m;
        } else {
            m = t[1];
        }
        const P = m;
        const _ = d && transitionInXStyle;
        let f;
        if (t[2] !== _ || t[3] !== transitionOutXStyle) {
            f = [
                u.caratContainer,
                transitionOutXStyle,
                _
            ];
            t[2] = _;
            t[3] = transitionOutXStyle;
            t[4] = f;
        } else {
            f = t[4];
        }
        let g;
        if (t[5] !== P || t[6] !== fillXStyle) {
            g = <P fillXStyle={fillXStyle}/>;
            t[5] = P;
            t[6] = fillXStyle;
            t[7] = g;
        } else {
            g = t[7];
        }
        let h;
        if (t[8] !== f || t[9] !== g) {
            const Component = o("react-strict-dom").html.div;
            h = <Component style={f}>{g}</Component>;
            t[8] = f;
            t[9] = g;
            t[10] = h;
        } else {
            h = t[10];
        }
        return h;
    }
    l.default = d;
}, 98);