__d("WAWebBizAiThreadControlFab.react", [
    "fbt",
    "WAWebBizAiAgentGating",
    "WAWebClickable.react",
    "WAWebCmd",
    "WAWebGenAiAgentLogEvents",
    "WDSIconWdsIcAiFilled.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useState = e.useState;
    const d = {
        button: {
            background: "x11g6tue",
            borderTopStyle: "x1ejq31n",
            borderInlineEndStyle: "x18oe1m7",
            borderBottomStyle: "x1sy0etr",
            borderInlineStartStyle: "xstzfhl",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            cursor: "x1ypdohk",
            $$css: true
        },
        aiIconXstyle: {
            color: "xhslqc4",
            $$css: true
        },
        aiIconHover: {
            color: "xpwljn7",
            $$css: true
        }
    };
    function M1Component() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = {
                className: "xixxii4 xo2byzu x15a21lv xpip370 xowaa7l xhtitgo x1tiyuxx x1nbhmlj xmzvs34 xf159sx x78zum5 x6s0dn4 xl56j7k xuxw1ft x6ikm8r x10wlt62 xlyipyv x1ncir08 x1pg5gke x1d3mw78 x1p4m5qa xbrszos xea3l6g x18isctg x2q3nzr x1ay2l74"
            };
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            n = <div {...babelHelpers.extends({}, t, {
                "data-testid": "biz_ai_thread_control_fab_info_bar",
                children: s._("AI responses")
            })}/>;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    function PComponent(e) {
        const t = o("react-compiler-runtime").c(14);
        const e_chat = e.chat;
        const a = e_useState(false);
        const i = a[0];
        const l = a[1];
        let p;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            p = function() {
                l(true);
            };
            t[0] = p;
        } else {
            p = t[0];
        }
        const onMouseEnter = p;
        let f;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            f = function() {
                l(false);
            };
            t[1] = f;
        } else {
            f = t[1];
        }
        const onMouseLeave = f;
        o("WAWebGenAiAgentLogEvents").useLogViewGenAiAgentAutoReplyFab();
        let h;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            h = s._("AI responses");
            t[2] = h;
        } else {
            h = t[2];
        }
        let y;
        if (t[3] !== e_chat) {
            y = function() {
                o("WAWebGenAiAgentLogEvents").logClickGenAiAgentAutoReplyFab();
                o("WAWebCmd").Cmd.changeAiReplyStatus(e_chat, o("WAWebBizAiAgentGating").isAiReplyFabConfirmModalEnabled());
            };
            t[3] = e_chat;
            t[4] = y;
        } else {
            y = t[4];
        }
        let C;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            C = {
                className: "xixxii4 xhjxwu4 x9q68il xhtitgo x1useyqa xsdox4t x1c9tyrk xeusxvb x1pahc9y x1ertn4p x27vdmw x16w0wmm xs7yr5k x78zum5 xl56j7k x6s0dn4 x15g2dp1"
            };
            t[5] = C;
        } else {
            C = t[5];
        }
        const b = i ? d.aiIconHover : d.aiIconXstyle;
        let v;
        if (t[6] !== b) {
            v = <div {...babelHelpers.extends({}, C, {
                "data-testid": "biz_ai_thread_control_fab_button",
                onMouseEnter,
                onMouseLeave,
                children: u.jsx(r("WDSIconWdsIcAiFilled.react"), {
                    width: 24,
                    height: 24,
                    iconXstyle: b
                })
            })}/>;
            t[6] = b;
            t[7] = v;
        } else {
            v = t[7];
        }
        let S;
        if (t[8] !== i) {
            S = i && <M1Component/>;
            t[8] = i;
            t[9] = S;
        } else {
            S = t[9];
        }
        let R;
        if (t[10] !== y || t[11] !== v || t[12] !== S) {
            const Component = o("WAWebClickable.react").Clickable;
            R = <Component as="button" xstyle={d.button} ariaLabel={h} onClick={y} tabIndex={0}>{v}{S}</Component>;
            t[10] = y;
            t[11] = v;
            t[12] = S;
            t[13] = R;
        } else {
            R = t[13];
        }
        return R;
    }
    l.WAWebBizAiThreadControlFab = PComponent;
}, 226);