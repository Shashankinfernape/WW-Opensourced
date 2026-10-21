__d("WAWebStickerPanelContentEmpty.react", [
    "WAWebClassnames",
    "bx",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = r("bx").getURL(r("bx")("9559"));
    function c(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_text = e.text;
        let r;
        let a;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = o("WAWebClassnames").classnamesConvertMeToStylexPlease("x78zum5 xdt5ytf x6s0dn4 xwh70vk");
            a = <div className="x1tucx9d xjnb2h5 x1yztbdb xiy17q3 x1tbiz1a" style={{
                backgroundImage: `url(${u})`
            }}/>;
            i = {
                className: "x1j9u4d2 x1f6kntn x1fc57z9 xhslqc4 x2b8uid"
            };
            t[0] = r;
            t[1] = a;
            t[2] = i;
        } else {
            r = t[0];
            a = t[1];
            i = t[2];
        }
        let l;
        if (t[3] !== e_text) {
            l = <div data-testid="sticker-panel-content-empty" className={r}>{a}<p {...babelHelpers.extends({}, i, {
                children: e_text
            })}/></div>;
            t[3] = e_text;
            t[4] = l;
        } else {
            l = t[4];
        }
        return l;
    }
    l.default = c;
}, 98);