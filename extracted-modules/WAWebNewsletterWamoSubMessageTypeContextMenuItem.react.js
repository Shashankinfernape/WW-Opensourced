__d("WAWebNewsletterWamoSubMessageTypeContextMenuItem.react", [
    "WAWebDropdownItem.react",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        container: {
            cursor: "x1ypdohk",
            height: "xnnlda6",
            $$css: true
        },
        icon: {
            minWidth: "xt4ypqs",
            $$css: true
        },
        marginStart8: {
            marginInlineStart: "x150mmf0",
            $$css: true
        },
        marginEnd32: {
            marginInlineEnd: "x5jkbfu",
            $$css: true
        },
        marginStart12: {
            marginInlineStart: "x1uvdrpn",
            $$css: true
        },
        marginVert12: {
            marginTop: "x1de0gy",
            marginBottom: "xcytdqz",
            $$css: true
        },
        marginEnd24: {
            marginInlineEnd: "x7vsco6",
            $$css: true
        },
        paddingVert4: {
            paddingTop: "x1tiyuxx",
            paddingBottom: "x1nbhmlj",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(15);
        const { action, description, icon, testid, text } = e;
        let c;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            c = {
                className: "x150mmf0 xqf2s3x"
            };
            t[0] = c;
        } else {
            c = t[0];
        }
        let d;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            d = [
                u.container,
                u.marginStart8,
                u.marginEnd32,
                u.paddingVert4
            ];
            t[1] = d;
        } else {
            d = t[1];
        }
        let m;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            m = [
                u.icon,
                u.marginStart12,
                u.marginVert12,
                u.marginEnd24
            ];
            t[2] = m;
        } else {
            m = t[2];
        }
        let p;
        if (t[3] !== icon) {
            const Component = o("WAWebFlex.react").FlexRow;
            p = <Component justify="center" xstyle={m}>{icon}</Component>;
            t[3] = icon;
            t[4] = p;
        } else {
            p = t[4];
        }
        let _;
        if (t[5] !== description || t[6] !== text) {
            const Component = o("WAWebFlex.react").FlexColumn;
            _ = description != null ? <Component><span className="x1fc57z9 x6prxxf x1iayye1 x14ug900 x6ikm8r x10wlt62 xlyipyv xuxw1ft">{text}</span><span className="x1f6kntn x1d3mw78 xf4yft xhslqc4 x6ikm8r x10wlt62 xlyipyv xuxw1ft">{description}</span></Component> : <span className="x1fc57z9 x6prxxf x1iayye1 x14ug900 x6ikm8r x10wlt62 xlyipyv xuxw1ft">{text}</span>;
            t[5] = description;
            t[6] = text;
            t[7] = _;
        } else {
            _ = t[7];
        }
        let f;
        if (t[8] !== p || t[9] !== _) {
            const Component = o("WAWebFlex.react").FlexRow;
            f = <Component align="center" xstyle={d}>{p}{_}</Component>;
            t[8] = p;
            t[9] = _;
            t[10] = f;
        } else {
            f = t[10];
        }
        let g;
        if (t[11] !== action || t[12] !== f || t[13] !== testid) {
            const Component = o("WAWebDropdownItem.react").DropdownItem;
            g = <div {...babelHelpers.extends({}, c, {
                children: <Component testid={testid} action={action} type="newsletter-wamo-message-type">{f}</Component>
            })}/>;
            t[11] = action;
            t[12] = f;
            t[13] = testid;
            t[14] = g;
        } else {
            g = t[14];
        }
        return g;
    }
    l.default = c;
}, 98);