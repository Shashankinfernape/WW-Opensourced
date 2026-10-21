__d("WAWebBotInvokeUpsellRow.react", [
    "fbt",
    "WAWebBotProfileCollection",
    "WAWebDefaultUserColorIcon.react",
    "WAWebDetailImage.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(11);
        const { onMouseDown, onMouseEnter, onMouseUp, selected } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = o("WAWebBotProfileCollection").BotProfileCollection.getDefaultBot();
            t[0] = l;
        } else {
            l = t[0];
        }
        const c = l;
        let d;
        if (t[1] !== selected) {
            d = ({
                0: {
                    className: "x78zum5 x1qughib x6s0dn4 x889kno xl3akx1 x1a8lsjc x11ahuha"
                },
                1: {
                    className: "x78zum5 x1qughib x6s0dn4 x889kno xl3akx1 x1a8lsjc x11ahuha x1ru9bj0"
                }
            })[(selected === true) << 0];
            t[1] = selected;
            t[2] = d;
        } else {
            d = t[2];
        }
        let m;
        let p;
        let _;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = <div className="xs83m0k x1c4vz4f x1sx8fc2">{c != null ? u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: c.id,
                size: 32
            }) : u.jsx(o("WAWebDefaultUserColorIcon.react").DefaultUserColorIcon, {
                width: 32,
                height: 32
            })}</div>;
            p = <div className="xs83m0k x1c4vz4f x19l4sor x78zum5 x1cy8zhl x1nxh6w3 x1hm9lzh x1sa5p1d">{c?.name ?? s._("Meta AI")}</div>;
            _ = <div className="xs83m0k x1r8uery x1iyjqo2 x78zum5 x1cy8zhl xib33u6 x1pg5gke x1hm9lzh x1sa5p1d">{s._("You can mention the assistant to ask a question")}</div>;
            t[3] = m;
            t[4] = p;
            t[5] = _;
        } else {
            m = t[3];
            p = t[4];
            _ = t[5];
        }
        let g;
        if (t[6] !== onMouseDown || t[7] !== onMouseEnter || t[8] !== onMouseUp || t[9] !== d) {
            g = <div {...babelHelpers.extends({}, d, {
                "data-testid": "contact-mention-list-item",
                onMouseDown,
                onMouseUp,
                onMouseEnter,
                children: [
                    m,
                    p,
                    _
                ]
            })}/>;
            t[6] = onMouseDown;
            t[7] = onMouseEnter;
            t[8] = onMouseUp;
            t[9] = d;
            t[10] = g;
        } else {
            g = t[10];
        }
        return g;
    }
    l.default = c;
}, 226);