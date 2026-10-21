__d("WAWebSuspendedGroupMsgBar.react", [
    "fbt",
    "WAWebFlex.react",
    "WAWebMsgBarActions",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(9);
        const e_entityId = e.entityId;
        let r;
        if (t[0] !== e_entityId) {
            r = function() {
                return o("WAWebMsgBarActions").handleContactUs(e_entityId);
            };
            t[0] = e_entityId;
            t[1] = r;
        } else {
            r = t[1];
        }
        let a;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                className: "x1ph7ams"
            };
            t[2] = a;
        } else {
            a = t[2];
        }
        let i;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("WhatsApp Support");
            t[3] = i;
        } else {
            i = t[3];
        }
        let l;
        if (t[4] !== r) {
            l = <span {...babelHelpers.extends({
                role: "button",
                onClick: r
            }, a, {
                "data-testid": "compose-box-contact-support",
                children: i
            })}/>;
            t[4] = r;
            t[5] = l;
        } else {
            l = t[5];
        }
        const c = l;
        let d;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                className: "x126k92a"
            };
            t[6] = d;
        } else {
            d = t[6];
        }
        let m;
        if (t[7] !== c) {
            const Component = o("WAWebFlex.react").FlexColumn;
            m = <Component align="center"><span {...babelHelpers.extends({}, d, {
                children: s._("This group is no longer available. Please contact {support} for help.", [
                    s._param("support", c)
                ])
            })}/></Component>;
            t[7] = c;
            t[8] = m;
        } else {
            m = t[8];
        }
        return m;
    }
    l.default = c;
}, 226);