__d("WAWebCoexCallingConsumerFirstTimeModal.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = {
        container: {
            textAlign: "x2b8uid",
            paddingTop: "x1p57kb1",
            paddingInlineEnd: "xvtqlqk",
            paddingBottom: "xvpt6g3",
            paddingInlineStart: "xdx6fka",
            rowGap: "x1qvou4u",
            columnGap: "x1s70e7g",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(10);
        const e_onConfirm = e.onConfirm;
        let a;
        if (t[0] !== e_onConfirm) {
            a = function() {
                e_onConfirm();
                o("WAWebModalManager").ModalManager.close();
            };
            t[0] = e_onConfirm;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        const l = m;
        let d;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            d = s._("Continue");
            t[2] = d;
        } else {
            d = t[2];
        }
        const p = d;
        let _;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            _ = s._("Learn more");
            t[3] = _;
        } else {
            _ = t[3];
        }
        const f = _;
        let g;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            g = s._("About this call");
            t[4] = g;
        } else {
            g = t[4];
        }
        let h;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            h = <Component type="Body2" colorName="contentDeemphasized">{s._("This business uses a secure service from Meta to manage this call.")}</Component>;
            t[5] = h;
        } else {
            h = t[5];
        }
        let y;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            y = <Component type="Body2" colorName="contentDeemphasized">{s._("You are always in control of this conversation. You can stop chatting with this business or block them at any time.")}</Component>;
            t[6] = y;
        } else {
            y = t[6];
        }
        let C;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            C = <Component_1 align="center" xstyle={c.container}>{h}{y}<Component type="Body2" colorName="contentDeemphasized">{s._("WhatsApp secures your messages and calls with the business.")}</Component></Component_1>;
            t[7] = C;
        } else {
            C = t[7];
        }
        let b;
        if (t[8] !== i) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            b = <Component testid="coex-calling-first-time-modal" title={g} onOK={i} okText={p} onCancel={l} cancelText={f}>{C}</Component>;
            t[8] = i;
            t[9] = b;
        } else {
            b = t[9];
        }
        return b;
    }
    function m() {
        o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getFirstTimeConsumerCoexCallingLearnMoreUrl());
    }
    l.default = d;
}, 226);