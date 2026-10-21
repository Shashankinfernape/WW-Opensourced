__d("WAWebAttachmentLoaderButton.react", [
    "fbt",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "WDSIconIcDownload.react",
    "WDSIconIcUpload.react",
    "WDSSpinner.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    const d = 38;
    const m = 4;
    const r_1 = (d - m) / 2;
    const _ = 2 * Math.PI * r_1;
    const f = 5;
    const g = d / 2;
    const transform = `rotate(-90, ${g}, ${g})`;
    function Y1Component(e) {
        const t = o("react-compiler-runtime").c(13);
        const e_progress = e.progress;
        const r = Math.max(0, Math.min(1, e_progress));
        let a;
        if (t[0] !== r) {
            a = Math.round(r * 100);
            t[0] = r;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        const l = r * _;
        const c = Math.max(0, _ - l - 2 * f);
        const y = r <= 0 || r >= 1;
        let C;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            C = s._("Progress");
            t[2] = C;
        } else {
            C = t[2];
        }
        let b;
        let v;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                className: "x1o0tod x47corl x10l6tqk x13vifvy"
            };
            v = <title>{s._("Progress")}</title>;
            t[3] = b;
            t[4] = v;
        } else {
            b = t[3];
            v = t[4];
        }
        let S;
        if (t[5] !== r || t[6] !== l || t[7] !== y || t[8] !== c) {
            S = y ? <circle {...babelHelpers.extends({
                cx: g,
                cy: g,
                fill: "none",
                r: r_1,
                strokeWidth: m
            }, {
                0: {
                    className: "xanp23y"
                },
                1: {
                    className: "x94ds6z"
                }
            }[(r >= 1) << 0])}/> : <>{c > 0 && <circle cx={g} cy={g} fill="none" r={r_1} strokeDasharray={`${c} ${_}`} strokeDashoffset={-(l + f)} strokeLinecap="round" strokeWidth={m} transform={transform} className="xanp23y"/>}<circle cx={g} cy={g} fill="none" r={r_1} strokeDasharray={`${l} ${_}`} strokeLinecap="round" strokeWidth={m} transform={transform} className="x94ds6z"/></>;
            t[5] = r;
            t[6] = l;
            t[7] = y;
            t[8] = c;
            t[9] = S;
        } else {
            S = t[9];
        }
        let R;
        if (t[10] !== i || t[11] !== S) {
            R = <svg {...babelHelpers.extends({
                "aria-label": C,
                "aria-valuemax": 100,
                "aria-valuemin": 0,
                "aria-valuenow": i,
                height: d,
                role: "progressbar",
                width: d
            }, b, {
                children: [
                    v,
                    S
                ]
            })}/>;
            t[10] = i;
            t[11] = S;
            t[12] = R;
        } else {
            R = t[12];
        }
        return R;
    }
    function CComponent(e) {
        const t = o("react-compiler-runtime").c(7);
        const { ariaLabel, onPress, ref } = e;
        let l;
        if (t[0] !== ariaLabel) {
            l = ariaLabel ?? s._("Download");
            t[0] = ariaLabel;
            t[1] = l;
        } else {
            l = t[1];
        }
        const c = l;
        let d;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                className: "x6s0dn4 x78zum5 x16wdlz0 xl56j7k x1n2onr6 x1guw455"
            };
            t[2] = d;
        } else {
            d = t[2];
        }
        let m;
        if (t[3] !== c || t[4] !== onPress || t[5] !== ref) {
            const Component = r("WDSButton.react");
            m = <div {...babelHelpers.extends({}, d, {
                children: <Component ref={ref} Icon={r("WDSIconIcDownload.react")} aria-label={c} onPress={onPress} size="small" type="default" variant="borderless"/>
            })}/>;
            t[3] = c;
            t[4] = onPress;
            t[5] = ref;
            t[6] = m;
        } else {
            m = t[6];
        }
        return m;
    }
    function BComponent(e) {
        const t = o("react-compiler-runtime").c(6);
        const { ariaLabel, onPress } = e;
        let i;
        if (t[0] !== ariaLabel) {
            i = ariaLabel ?? s._("Upload");
            t[0] = ariaLabel;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = i;
        let c;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            c = {
                className: "x6s0dn4 x78zum5 x16wdlz0 xl56j7k x1n2onr6 x1guw455"
            };
            t[2] = c;
        } else {
            c = t[2];
        }
        let d;
        if (t[3] !== l || t[4] !== onPress) {
            const Component = r("WDSButton.react");
            d = <div {...babelHelpers.extends({}, c, {
                children: <Component Icon={r("WDSIconIcUpload.react")} aria-label={l} onPress={onPress} size="small" type="default" variant="borderless"/>
            })}/>;
            t[3] = l;
            t[4] = onPress;
            t[5] = d;
        } else {
            d = t[5];
        }
        return d;
    }
    function VComponent(e) {
        const t = o("react-compiler-runtime").c(14);
        const { ariaLabel, onPress, progress, ref } = e;
        const c = progress === undefined ? 0 : progress;
        let p;
        if (t[0] !== ariaLabel) {
            p = ariaLabel ?? s._("Cancel");
            t[0] = ariaLabel;
            t[1] = p;
        } else {
            p = t[1];
        }
        const _ = p;
        let f;
        if (t[2] !== onPress) {
            f = function(t) {
                t.stopPropagation();
                onPress?.(t);
            };
            t[2] = onPress;
            t[3] = f;
        } else {
            f = t[3];
        }
        const g = f;
        let h;
        if (t[4] !== g || t[5] !== _ || t[6] !== ref) {
            const Component = r("WDSButton.react");
            h = <Component ref={ref} Icon={r("WDSIconIcClose.react")} aria-label={_} onPress={g} size="small" type="default" variant="borderless"/>;
            t[4] = g;
            t[5] = _;
            t[6] = ref;
            t[7] = h;
        } else {
            h = t[7];
        }
        const C = h;
        let b;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                className: "x6s0dn4 x78zum5 x16wdlz0 xl56j7k x1n2onr6 x1guw455"
            };
            t[8] = b;
        } else {
            b = t[8];
        }
        let v;
        if (t[9] !== c) {
            v = c == null ? <span className="x1o0tod x10l6tqk x13vifvy">{u.jsx(r("WDSSpinner.react"), {
                gpuAnimationEnabled: true,
                size: d,
                stroke: m,
                testid: "attachment-loader-indeterminate-progress"
            })}</span> : <Y1Component progress={c}/>;
            t[9] = c;
            t[10] = v;
        } else {
            v = t[10];
        }
        const S = onPress != null && C;
        let R;
        if (t[11] !== v || t[12] !== S) {
            R = <div {...babelHelpers.extends({}, b, {
                children: [
                    v,
                    S
                ]
            })}/>;
            t[11] = v;
            t[12] = S;
            t[13] = R;
        } else {
            R = t[13];
        }
        return R;
    }
    l.DownloadButton = CComponent;
    l.UploadButton = BComponent;
    l.LoaderButton = VComponent;
}, 226);