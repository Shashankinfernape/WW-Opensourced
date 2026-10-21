__d("WAWebStickerLikeMsgPlaceholder.react", [
    "WAWebClassnames",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(8);
        const { className, size } = e;
        let a;
        if (t[0] !== size) {
            a = size == null ? undefined : {
                width: size,
                height: size
            };
            t[0] = size;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        let l;
        if (t[2] !== className) {
            l = o("WAWebClassnames").classnamesConvertMeToStylexPlease("x78zum5 xl56j7k x6s0dn4", className);
            t[2] = className;
            t[3] = l;
        } else {
            l = t[3];
        }
        let u;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            u = <div className="x1f9tj09 xb8htw9 x1w8lwzf xed5h26 x1502et5 xggx2qq x1bklw8v"/>;
            t[4] = u;
        } else {
            u = t[4];
        }
        let c;
        if (t[5] !== i || t[6] !== l) {
            c = <div data-testid="sticker-like-msg-placeholder" style={i} className={l}>{u}</div>;
            t[5] = i;
            t[6] = l;
            t[7] = c;
        } else {
            c = t[7];
        }
        return c;
    }
    l.default = u;
}, 98);