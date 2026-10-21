__d("WAWebHdDownloadButton.react", [
    "WAWebHdDownloadAffordance",
    "WAWebKeyboardIsKeyActivation",
    "WAWebL10nFilesize",
    "WAWebMediaStateControlSharedStyles",
    "WAWebSpinner.react",
    "WDSIconIcDownload.react",
    "WDSIconIcUpload.react",
    "fbs",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = 16;
    const d = 26;
    const m = {
        compact: {
            fontSize: "x1pg5gke",
            height: "xd7y6wv",
            paddingInlineEnd: "x1nzty39",
            paddingInlineStart: "x181vq82",
            $$css: true
        },
        compactProgress: {
            height: "xd7y6wv",
            width: "x23j0i4",
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(31);
        const { filesize, isLocallyReachable, onRequest, stage, xstyle } = t;
        let p;
        if (n[0] !== isLocallyReachable || n[1] !== stage) {
            p = o("WAWebHdDownloadAffordance").getHdDownloadAffordance(stage, isLocallyReachable);
            n[0] = isLocallyReachable;
            n[1] = stage;
            n[2] = p;
        } else {
            p = n[2];
        }
        const g = p;
        if (g === "none") {
            return null;
        }
        const h = g === "inflight";
        let y;
        let C;
        let b;
        let v;
        let S;
        let R;
        if (n[3] !== filesize || n[4] !== h || n[5] !== onRequest || n[6] !== stage || n[7] !== xstyle) {
            const L = o("WAWebHdDownloadAffordance").isOutgoingHdStage(stage);
            y = r(L ? "WDSIconIcUpload.react" : "WDSIconIcDownload.react");
            const E = filesize != null && filesize > 0 ? o("WAWebL10nFilesize").getL10nFilesize(filesize) : null;
            b = (E != null ? r("fbs")._("HD ({size})", [
                r("fbs")._param("size", E)
            ]) : r("fbs")._("HD")).toString();
            let k;
            if (n[14] !== h || n[15] !== onRequest) {
                k = function(t) {
                    t.stopPropagation();
                    if (!h) {
                        onRequest();
                    }
                };
                n[14] = h;
                n[15] = onRequest;
                n[16] = k;
            } else {
                k = n[16];
            }
            C = k;
            if (n[17] !== h || n[18] !== xstyle) {
                v = (e || (e = r("stylex"))).props(h ? r("WAWebMediaStateControlSharedStyles").button : r("WAWebMediaStateControlSharedStyles").btnMeta, !h && r("WAWebMediaStateControlSharedStyles").cursorPointer, h ? m.compactProgress : m.compact, xstyle);
                n[17] = h;
                n[18] = xstyle;
                n[19] = v;
            } else {
                v = n[19];
            }
            S = h;
            R = _(h, L, b);
            n[3] = filesize;
            n[4] = h;
            n[5] = onRequest;
            n[6] = stage;
            n[7] = xstyle;
            n[8] = y;
            n[9] = C;
            n[10] = b;
            n[11] = v;
            n[12] = S;
            n[13] = R;
        } else {
            y = n[8];
            C = n[9];
            b = n[10];
            v = n[11];
            S = n[12];
            R = n[13];
        }
        const I = h ? "dual_uploads_hd_download_progress" : "dual_uploads_hd_download_button";
        let T;
        if (n[20] !== y || n[21] !== h || n[22] !== b) {
            T = h ? <span aria-hidden>{u.jsx(o("WAWebSpinner.react").Spinner, {
                size: c,
                stroke: 2,
                color: "white"
            })}</span> : <>{u.jsx(y, {
                height: c,
                width: c,
                testid: "dual_uploads_hd_transfer_icon",
                xstyle: r("WAWebMediaStateControlSharedStyles").iconMeta
            })}<span data-testid="dual_uploads_hd_download_label">{b}</span></>;
            n[20] = y;
            n[21] = h;
            n[22] = b;
            n[23] = T;
        } else {
            T = n[23];
        }
        let D;
        if (n[24] !== C || n[25] !== v || n[26] !== S || n[27] !== R || n[28] !== I || n[29] !== T) {
            D = <button {...babelHelpers.extends({}, v, {
                "aria-disabled": S,
                "aria-label": R,
                "data-testid": I,
                onClick: C,
                onKeyDown: f,
                type: "button",
                children: T
            })}/>;
            n[24] = C;
            n[25] = v;
            n[26] = S;
            n[27] = R;
            n[28] = I;
            n[29] = T;
            n[30] = D;
        } else {
            D = n[30];
        }
        return D;
    }
    function _(e, t, n) {
        if (e) {
            if (t) {
                return r("fbs")._("Uploading HD photo").toString();
            }
            return r("fbs")._("Downloading HD photo").toString();
        }
        if (t) {
            return r("fbs")._("{label}, retry upload", [
                r("fbs")._param("label", n)
            ]).toString();
        }
        return r("fbs")._("{label}, download photo", [
            r("fbs")._param("label", n)
        ]).toString();
    }
    function f(e) {
        if (r("WAWebKeyboardIsKeyActivation")(e)) {
            e.stopPropagation();
        }
    }
    l.default = p;
}, 226);