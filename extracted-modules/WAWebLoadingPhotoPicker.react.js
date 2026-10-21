__d("WAWebLoadingPhotoPicker.react", [
    "WAWebAvatarSpinner.react",
    "WAWebPhotoPickerStyle",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const n = o("react-compiler-runtime").c(19);
        const { error, isCoverPhoto, svgName } = t;
        const s = isCoverPhoto === undefined ? false : isCoverPhoto;
        let c;
        if (n[0] !== svgName) {
            c = svgName != null ? <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebPhotoPickerStyle").styles.svgSize))}/> : undefined;
            n[0] = svgName;
            n[1] = c;
        } else {
            c = n[1];
        }
        const d = c;
        let m;
        if (n[2] !== s) {
            m = (e || (e = r("stylex"))).props(o("WAWebPhotoPickerStyle").styles.containerRefreshed, s && o("WAWebPhotoPickerStyle").styles.coverPhoto);
            n[2] = s;
            n[3] = m;
        } else {
            m = n[3];
        }
        let p;
        if (n[4] !== s) {
            p = (e || (e = r("stylex"))).props(o("WAWebPhotoPickerStyle").styles.body, s && o("WAWebPhotoPickerStyle").styles.rectBackground);
            n[4] = s;
            n[5] = p;
        } else {
            p = n[5];
        }
        let _;
        if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
            _ = (e || (e = r("stylex"))).props(o("WAWebPhotoPickerStyle").styles.imageContainer);
            n[6] = _;
        } else {
            _ = n[6];
        }
        let f;
        if (n[7] !== d) {
            f = <div {...babelHelpers.extends({}, _, {
                children: d
            })}/>;
            n[7] = d;
            n[8] = f;
        } else {
            f = n[8];
        }
        let g;
        if (n[9] !== error || n[10] !== s) {
            g = error ? null : u.jsx(r("WAWebAvatarSpinner.react"), {
                xstyle: s ? o("WAWebPhotoPickerStyle").styles.rectBackground : undefined
            });
            n[9] = error;
            n[10] = s;
            n[11] = g;
        } else {
            g = n[11];
        }
        let h;
        if (n[12] !== p || n[13] !== f || n[14] !== g) {
            h = <div {...babelHelpers.extends({}, p, {
                dir: "ltr",
                children: [
                    f,
                    g
                ]
            })}/>;
            n[12] = p;
            n[13] = f;
            n[14] = g;
            n[15] = h;
        } else {
            h = n[15];
        }
        let y;
        if (n[16] !== m || n[17] !== h) {
            y = <div {...babelHelpers.extends({}, m, {
                children: h
            })}/>;
            n[16] = m;
            n[17] = h;
            n[18] = y;
        } else {
            y = n[18];
        }
        return y;
    }
    l.default = c;
}, 98);