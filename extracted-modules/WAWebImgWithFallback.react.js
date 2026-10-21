__d("WAWebImgWithFallback.react", [
    "$InternalEnum",
    "WAWebAvatarSpinner.react",
    "WAWebDetailImage.react",
    "WAWebImg.react",
    "isEmptyObject",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useState = e.useState;
    const c = {
        SMALL: "SMALL",
        MEDIUM: "MEDIUM",
        LARGE: "LARGE",
        AUTO: "AUTO",
        NONE: "NONE"
    };
    const d = n("$InternalEnum").Mirrored([
        "Default",
        "Transparent"
    ]);
    function m(e) {
        const t = o("react-compiler-runtime").c(48);
        const { size, fallbackSVG, className, loader, wrapOptions, transition, imgProps, theme, shape } = e;
        const y = size === undefined ? c.SMALL : size;
        const C = loader === undefined ? false : loader;
        let b;
        if (t[0] !== wrapOptions) {
            b = wrapOptions === undefined ? {} : wrapOptions;
            t[0] = wrapOptions;
            t[1] = b;
        } else {
            b = t[1];
        }
        const v = b;
        const S = shape === undefined ? o("WAWebDetailImage.react").DetailImageShape.Circle : shape;
        const R = e_useState(false);
        const L = R[0];
        const E = R[1];
        let k;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            k = function() {
                E(true);
            };
            t[2] = k;
        } else {
            k = t[2];
        }
        const I = k;
        const { alt, crossOrigin, draggable, src } = imgProps;
        const { centerWrapperChild, wrapperClassName } = v;
        const M = centerWrapperChild === undefined ? false : centerWrapperChild;
        const w = wrapperClassName === undefined ? "" : wrapperClassName;
        const A = S === o("WAWebDetailImage.react").DetailImageShape.Squircle;
        let F;
        if (t[3] !== L || t[4] !== A || t[5] !== transition) {
            F = ({
                0: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xlshs6z xg01cxk",
                4: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xnpuxes x1hc1fzr",
                2: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xlshs6z xg01cxk x19991ni xx6bhzk x9lcvmn",
                6: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xnpuxes x1hc1fzr x19991ni xx6bhzk x9lcvmn",
                1: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xlshs6z xg01cxk x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j",
                5: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xnpuxes x1hc1fzr x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j",
                3: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xlshs6z xg01cxk x19991ni xx6bhzk x9lcvmn x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j",
                7: "x1n2onr6 xupqr0c x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 xnpuxes x1hc1fzr x19991ni xx6bhzk x9lcvmn x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j"
            })[!!L << 2 | (transition === true) << 1 | !!A << 0];
            t[3] = L;
            t[4] = A;
            t[5] = transition;
            t[6] = F;
        } else {
            F = t[6];
        }
        const O = F;
        let B;
        if (t[7] !== y) {
            B = p(y);
            t[7] = y;
            t[8] = B;
        } else {
            B = t[8];
        }
        let W;
        if (t[9] !== y) {
            W = p(y);
            t[9] = y;
            t[10] = W;
        } else {
            W = t[10];
        }
        let q;
        if (t[11] !== W || t[12] !== B) {
            q = {
                height: B,
                width: W
            };
            t[11] = W;
            t[12] = B;
            t[13] = q;
        } else {
            q = t[13];
        }
        const U = q;
        let V;
        if (C && !L) {
            let H;
            if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
                H = s.jsx(r("WAWebAvatarSpinner.react"), {});
                t[14] = H;
            } else {
                H = t[14];
            }
            V = H;
        }
        let G;
        if (t[15] !== alt || t[16] !== crossOrigin || t[17] !== draggable || t[18] !== src || t[19] !== O) {
            const Component = r("WAWebImg.react");
            G = <Component src={src} className={O} onLoad={I} alt={alt} crossOrigin={crossOrigin} draggable={draggable}/>;
            t[15] = alt;
            t[16] = crossOrigin;
            t[17] = draggable;
            t[18] = src;
            t[19] = O;
            t[20] = G;
        } else {
            G = t[20];
        }
        const z = G;
        let j;
        if (t[21] !== M || t[22] !== z || t[23] !== L || t[24] !== theme || t[25] !== v || t[26] !== w) {
            j = v != null && !r("isEmptyObject")(v) ? <div className={`${{
                0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 xupqr0c xlshs6z xg01cxk",
                4: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 xupqr0c xlshs6z xg01cxk x78zum5 x6s0dn4 xl56j7k",
                2: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 xupqr0c xnpuxes x1hc1fzr",
                6: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 xupqr0c x78zum5 x6s0dn4 xl56j7k xnpuxes x1hc1fzr",
                1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xupqr0c xlshs6z xg01cxk xjbqb8w",
                5: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xupqr0c xlshs6z xg01cxk x78zum5 x6s0dn4 xl56j7k xjbqb8w",
                3: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xupqr0c xnpuxes x1hc1fzr xjbqb8w",
                7: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xupqr0c x78zum5 x6s0dn4 xl56j7k xnpuxes x1hc1fzr xjbqb8w"
            }[!!M << 2 | !!L << 1 | (theme === d.Transparent) << 0]}${w ? ` ${w}` : ""}`}>{z}</div> : z;
            t[21] = M;
            t[22] = z;
            t[23] = L;
            t[24] = theme;
            t[25] = v;
            t[26] = w;
            t[27] = j;
        } else {
            j = t[27];
        }
        const K = j;
        let Q;
        if (t[28] !== V || t[29] !== src || t[30] !== K) {
            Q = src !== "" ? <>{V}{K}</> : null;
            t[28] = V;
            t[29] = src;
            t[30] = K;
            t[31] = Q;
        } else {
            Q = t[31];
        }
        const X = Q;
        let Y;
        if (t[32] !== A || t[33] !== S || t[34] !== theme) {
            Y = ({
                0: "x1n2onr6 x6ikm8r x10wlt62 x15e7hw7",
                4: "x1n2onr6 x6ikm8r x10wlt62 x15e7hw7 x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
                2: "x1n2onr6 x6ikm8r x10wlt62 xjbqb8w",
                6: "x1n2onr6 x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xjbqb8w",
                1: "x1n2onr6 x6ikm8r x10wlt62 x15e7hw7 x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j",
                5: "x1n2onr6 x6ikm8r x10wlt62 x15e7hw7 x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j",
                3: "x1n2onr6 x6ikm8r x10wlt62 xjbqb8w x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j",
                7: "x1n2onr6 x6ikm8r x10wlt62 xjbqb8w x1f2iure x1bczwif x17un8ov x1e7945m x11o6v7j"
            })[(S === o("WAWebDetailImage.react").DetailImageShape.Circle) << 2 | (theme === d.Transparent) << 1 | !!A << 0];
            t[32] = A;
            t[33] = S;
            t[34] = theme;
            t[35] = Y;
        } else {
            Y = t[35];
        }
        const J = `${Y}${className != null ? ` ${className}` : ""}`;
        let Z;
        if (t[36] !== M || t[37] !== fallbackSVG || t[38] !== L || t[39] !== theme || t[40] !== transition || t[41] !== w) {
            Z = !L && <div className={`${{
                0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7",
                4: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 x78zum5 x6s0dn4 xl56j7k",
                2: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 x19991ni xx6bhzk x9lcvmn",
                6: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x15e7hw7 x78zum5 x6s0dn4 xl56j7k x19991ni xx6bhzk x9lcvmn",
                1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xjbqb8w",
                5: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k xjbqb8w",
                3: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x19991ni xx6bhzk x9lcvmn xjbqb8w",
                7: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k x19991ni xx6bhzk x9lcvmn xjbqb8w"
            }[!!M << 2 | (transition === true) << 1 | (theme === d.Transparent) << 0]}${w ? ` ${w}` : ""}`}>{fallbackSVG}</div>;
            t[36] = M;
            t[37] = fallbackSVG;
            t[38] = L;
            t[39] = theme;
            t[40] = transition;
            t[41] = w;
            t[42] = Z;
        } else {
            Z = t[42];
        }
        let ee;
        if (t[43] !== X || t[44] !== U || t[45] !== J || t[46] !== Z) {
            ee = <div className={J} style={U}>{X}{Z}</div>;
            t[43] = X;
            t[44] = U;
            t[45] = J;
            t[46] = Z;
            t[47] = ee;
        } else {
            ee = t[47];
        }
        return ee;
    }
    function p(e) {
        switch(e){
            case c.SMALL:
                return 49;
            case c.MEDIUM:
                return 100;
            case c.LARGE:
                return 200;
            case c.NONE:
                return;
            default:
                return e;
        }
    }
    l.Theme = d;
    l.ImgWithFallback = m;
}, 98);