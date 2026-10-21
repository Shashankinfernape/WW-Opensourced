__d("WAWebDocStateControls.react", [
    "WAWebAttachmentLoaderButton.react",
    "WAWebSpinner.react",
    "WDSIconIcClose.react",
    "WDSIconIcDownload.react",
    "WDSIconIcUpload.react",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function U1Component(e) {
        const t = o("react-compiler-runtime").c(6);
        const { children, onClick } = e;
        let a;
        if (t[0] !== onClick) {
            a = onClick ? {
                onClick
            } : {};
            t[0] = onClick;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = "x6s0dn4 x1sj5et5 x78zum5 x1okw0bk x90ne7k xl56j7k x1n2onr6 x1691je0";
            t[2] = l;
        } else {
            l = t[2];
        }
        let u;
        if (t[3] !== children || t[4] !== i) {
            u = <div {...babelHelpers.extends({
                className: l
            }, i, {
                children
            })}/>;
            t[3] = children;
            t[4] = i;
            t[5] = u;
        } else {
            u = t[5];
        }
        return u;
    }
    function c(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_onClick = e.onClick;
        const a = o("useWAWebABPropConfigValue").useABPropConfigValue("wa_web_loader_button_uix_improvement");
        if (a) {
            let i;
            if (t[0] !== e_onClick) {
                const Component = o("WAWebAttachmentLoaderButton.react").DownloadButton;
                i = <Component onPress={e_onClick}/>;
                t[0] = e_onClick;
                t[1] = i;
            } else {
                i = t[1];
            }
            return i;
        }
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = s.jsx(r("WDSIconIcDownload.react"), {
                height: 34,
                width: 34,
                testid: "audio-download"
            });
            t[2] = l;
        } else {
            l = t[2];
        }
        let c;
        if (t[3] !== e_onClick) {
            c = <U1Component onClick={e_onClick}>{l}</U1Component>;
            t[3] = e_onClick;
            t[4] = c;
        } else {
            c = t[4];
        }
        return c;
    }
    const d = {
        color: "progress"
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(15);
        const { canCancel, onClick, outgoingMsg, value } = e;
        const c = canCancel === undefined ? false : canCancel;
        const m = o("useWAWebABPropConfigValue").useABPropConfigValue("wa_web_loader_button_uix_improvement");
        if (m) {
            const p = value != null ? value / 100 : 0;
            const _ = c ? onClick : undefined;
            let f;
            if (t[0] !== p || t[1] !== _) {
                const Component = o("WAWebAttachmentLoaderButton.react").LoaderButton;
                f = <Component onPress={_} progress={p}/>;
                t[0] = p;
                t[1] = _;
                t[2] = f;
            } else {
                f = t[2];
            }
            return f;
        }
        let g;
        if (t[3] !== outgoingMsg || t[4] !== value) {
            g = value == null ? {
                outgoingMsg
            } : d;
            t[3] = outgoingMsg;
            t[4] = value;
            t[5] = g;
        } else {
            g = t[5];
        }
        const h = g;
        let y;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            y = {
                className: "x14q0ukc x10l6tqk xnfr1j"
            };
            t[6] = y;
        } else {
            y = t[6];
        }
        let C;
        if (t[7] !== h || t[8] !== value) {
            C = <div {...babelHelpers.extends({}, y, {
                children: s.jsx(o("WAWebSpinner.react").Spinner, babelHelpers.extends({
                    stroke: 3,
                    size: 32,
                    value
                }, h))
            })}/>;
            t[7] = h;
            t[8] = value;
            t[9] = C;
        } else {
            C = t[9];
        }
        let b;
        if (t[10] !== c) {
            b = c ? s.jsx(r("WDSIconIcClose.react"), {
                height: 20,
                width: 20,
                testid: "audio-cancel-noborder"
            }) : null;
            t[10] = c;
            t[11] = b;
        } else {
            b = t[11];
        }
        let v;
        if (t[12] !== C || t[13] !== b) {
            v = <U1Component>{C}{b}</U1Component>;
            t[12] = C;
            t[13] = b;
            t[14] = v;
        } else {
            v = t[14];
        }
        return v;
    }
    function p() {
        const e = o("react-compiler-runtime").c(2);
        const t = o("useWAWebABPropConfigValue").useABPropConfigValue("wa_web_loader_button_uix_improvement");
        if (t) {
            let n;
            if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
                n = s.jsx(o("WAWebAttachmentLoaderButton.react").UploadButton, {});
                e[0] = n;
            } else {
                n = e[0];
            }
            return n;
        }
        let a;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            a = <U1Component>{s.jsx(r("WDSIconIcUpload.react"), {
                height: 34,
                width: 34,
                testid: "audio-upload"
            })}</U1Component>;
            e[1] = a;
        } else {
            a = e[1];
        }
        return a;
    }
    l.Download = c;
    l.Pending = m;
    l.Upload = p;
}, 98);