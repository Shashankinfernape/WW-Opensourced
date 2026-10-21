__d("WAWebCiphertext.react", [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebPlaceholder",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = (t)=>{
        o("WAWebExternalLink.react").openExternalLink(t);
    };
    function DComponent(e) {
        const t = o("react-compiler-runtime").c(15);
        const e_subtype = e.subtype;
        let r;
        if (t[0] !== e_subtype) {
            r = o("WAWebPlaceholder").getPlaceholderDetails(e_subtype);
            t[0] = e_subtype;
            t[1] = r;
        } else {
            r = t[1];
        }
        const a = r;
        const { externalLink, placeholderIcon, placeholderMsg } = a;
        let m;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            m = {
                className: "xo1mcw5"
            };
            t[2] = m;
        } else {
            m = t[2];
        }
        let p;
        if (t[3] !== externalLink) {
            p = function() {
                c(externalLink ?? "");
            };
            t[3] = externalLink;
            t[4] = p;
        } else {
            p = t[4];
        }
        let _;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            _ = s._("Learn more");
            t[5] = _;
        } else {
            _ = t[5];
        }
        let f;
        if (t[6] !== p) {
            f = <span {...babelHelpers.extends({}, m, {
                role: "button",
                onClick: p,
                children: _
            })}/>;
            t[6] = p;
            t[7] = f;
        } else {
            f = t[7];
        }
        const g = f;
        let h;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            h = {
                className: "xhslqc4 x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1k4tb9n x1vvkbs"
            };
            t[8] = h;
        } else {
            h = t[8];
        }
        let y;
        if (t[9] !== placeholderIcon) {
            y = placeholderIcon != null ? <div className="x1okw0bk x18cpw0e xe9ewy2 xf6vk7d">{placeholderIcon}</div> : null;
            t[9] = placeholderIcon;
            t[10] = y;
        } else {
            y = t[10];
        }
        let C;
        if (t[11] !== g || t[12] !== placeholderMsg || t[13] !== y) {
            C = <div {...babelHelpers.extends({}, h, {
                children: [
                    y,
                    placeholderMsg,
                    "\xA0",
                    g
                ]
            })}/>;
            t[11] = g;
            t[12] = placeholderMsg;
            t[13] = y;
            t[14] = C;
        } else {
            C = t[14];
        }
        return C;
    }
    l.default = DComponent;
}, 226);