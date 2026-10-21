__d("WAWebQuickPromotionSanitize.react", [
    "dompurify",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_dirty = e.dirty;
        let r;
        if (t[0] !== e_dirty) {
            r = c(e_dirty);
            t[0] = e_dirty;
            t[1] = r;
        } else {
            r = t[1];
        }
        let a;
        if (t[2] !== r) {
            a = <span dangerouslySetInnerHTML={{
                __html: r
            }}/>;
            t[2] = r;
            t[3] = a;
        } else {
            a = t[3];
        }
        return a;
    }
    function c(e) {
        return r("dompurify").sanitize(e, {
            ALLOWED_TAGS: [
                "b",
                "i",
                "#text"
            ],
            KEEP_CONTENT: false
        });
    }
    l.default = u;
}, 98);