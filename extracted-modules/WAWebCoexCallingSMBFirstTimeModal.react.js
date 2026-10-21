__d("WAWebCoexCallingSMBFirstTimeModal.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebModal.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(10);
        const e_onConfirm = e.onConfirm;
        const r = d;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("Continue");
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = a;
        let l;
        if (t[1] !== e_onConfirm) {
            l = function() {
                e_onConfirm();
                o("WAWebModalManager").ModalManager.close("none");
            };
            t[1] = e_onConfirm;
            t[2] = l;
        } else {
            l = t[2];
        }
        const c = l;
        let m;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = {
                onClick: r,
                text: s._("Learn more")
            };
            t[3] = m;
        } else {
            m = t[3];
        }
        const p = m;
        let _;
        let f;
        let g;
        let h;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            _ = <strong>{s._("About this call")}</strong>;
            f = <br/>;
            g = <br/>;
            h = s._("Your business uses a secure service from Meta to manage this call.");
            t[4] = _;
            t[5] = f;
            t[6] = g;
            t[7] = h;
        } else {
            _ = t[4];
            f = t[5];
            g = t[6];
            h = t[7];
        }
        let y;
        if (t[8] !== c) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            y = <Component testid="coex-calling-first-time-modal" onOK={c} buttonsDirection="horizontal" okText={i} type={o("WAWebModal.react").ModalTheme.Multiline} extraButtonProps={p}>{_}{f}{g}{h}</Component>;
            t[8] = c;
            t[9] = y;
        } else {
            y = t[9];
        }
        return y;
    }
    function d() {
        o("WAWebModalManager").ModalManager.close("none");
        self.setTimeout(m, 10);
    }
    function m() {
        return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getFirstTimeSMBCoexCallingLearnMoreUrl());
    }
    l.default = c;
}, 226);