__d("WAWebLinkDeviceApiCmdTooltip.react", [
    "fbt",
    "WAWebApi",
    "WAWebFbtAppName",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        paddingBlock15: {
            paddingTop: "xqy66fx",
            paddingBottom: "xr1496l",
            $$css: true
        }
    };
    const m = {
        tooltip: {
            borderStartStartRadius: "x16qb05n",
            borderStartEndRadius: "xi7iut8",
            borderEndEndRadius: "x1dm3dyd",
            borderEndStartRadius: "x1pv694p",
            display: "x1rg5ohu",
            position: "x1n2onr6",
            zIndex: "x1vjfegm",
            top: "xu5yr9u",
            maxWidth: "x65f84u",
            textWrap: "xk4td0m",
            backgroundColor: "x1c2u55m",
            color: "x10e1pyi",
            fontSize: "x1f6kntn",
            textAlign: "x2b8uid",
            "::before_position": "x1hmns74",
            "::before_display": "x1fgarty",
            "::before_width": "xk9ib7f",
            "::before_height": "x1943h6x",
            "::before_content": "x1cpjm7i",
            "::before_borderInlineStartWidth": "x1c3l08f",
            "::before_borderInlineEndWidth": "xb1m30w",
            "::before_borderInlineStartStyle": "x1rovbrg",
            "::before_borderInlineEndStyle": "x1v3rft4",
            "::before_borderInlineStartColor": "x16dwbfg",
            "::before_borderInlineEndColor": "x18ylnmp",
            "::before_borderBottomWidth": "x1bsu2cp",
            "::before_borderBottomStyle": "x1opv7go",
            "::before_borderBottomColor": "x1vfcpi8",
            "::before_top": "x9cv1sk",
            "::before_bottom": "x1ncvqdy",
            "::before_insetInlineStart": "xfbisj7",
            "::before_marginInlineStart": "x1gtk6dz",
            "::before_transform": "x1p0xrc1",
            $$css: true
        }
    };
    function P3(t) {
        const n = o("react-compiler-runtime").c(4);
        let a;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                className: "x10l6tqk x10w3d4m xbudbmw xvue9z xo5owp6 x1plvlek xryxfnj x2b8uid"
            };
            i = (e || (e = r("stylex"))).props(m.tooltip, d.paddingBlock15, o("WDSPaddings.stylex").wdsPaddings.paddingHor20);
            n[0] = a;
            n[1] = i;
        } else {
            a = n[0];
            i = n[1];
        }
        let l;
        if (n[2] !== t.tip) {
            l = <div {...babelHelpers.extends({}, a, {
                children: <div {...babelHelpers.extends({}, i, {
                    children: t.tip
                })}/>
            })}/>;
            n[2] = t.tip;
            n[3] = l;
        } else {
            l = n[3];
        }
        return l;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(3);
        const n = e.apiCmd;
        if (n) {
            switch(n.resultType){
                case o("WAWebApi").APICmd.GROUP_INVITE:
                    {
                        let r;
                        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                            const Component = o("WAWebFbtAppName").WAWebAppShortName;
                            r = <P3 tip={s._("Log into {=m1} to join this WhatsApp group", [
                                s._implicitParam("=m1", <Component>{s._("")}</Component>)
                            ])}/>;
                            t[0] = r;
                        } else {
                            r = t[0];
                        }
                        return r;
                    }
                case o("WAWebApi").APICmd.MSG_SEND:
                    {
                        let a;
                        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                            const Component = o("WAWebFbtAppName").WAWebAppShortName;
                            a = <P3 tip={s._("Log into {=m1} to share", [
                                s._implicitParam("=m1", <Component>{s._("")}</Component>)
                            ])}/>;
                            t[1] = a;
                        } else {
                            a = t[1];
                        }
                        return a;
                    }
            }
        }
        let i;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            i = <></>;
            t[2] = i;
        } else {
            i = t[2];
        }
        return i;
    }
    l.default = _;
}, 226);