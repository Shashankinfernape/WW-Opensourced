__d("WAWebAfterReadNux.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebModalManager",
    "WAWebNux",
    "WDSIconIcBackHand.react",
    "WDSIconIcDuration.react",
    "WDSIconWdsIcDisappearingMessages.react",
    "WDSIllustrationWdsPictoDisappearingMessages.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebNux"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        header: {
            marginTop: "x9u28bd",
            $$css: true
        },
        icon: {
            marginInlineEnd: "xviac27",
            color: "xhslqc4",
            $$css: true
        },
        body: {
            marginTop: "x1rdy4ex",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(16);
        const e_onOk = e.onOk;
        const a = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_AFTER_READ);
        const i = a[1];
        let l;
        if (t[0] !== e_onOk || t[1] !== i) {
            l = function() {
                i();
                o("WAWebModalManager").ModalManager.closeSupportOrModal();
                if (e_onOk) {
                    e_onOk();
                }
            };
            t[0] = e_onOk;
            t[1] = i;
            t[2] = l;
        } else {
            l = t[2];
        }
        const d = l;
        let p;
        if (t[3] !== i) {
            p = function() {
                i();
                o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getEphemeralFaqUrl());
            };
            t[3] = i;
            t[4] = p;
        } else {
            p = t[4];
        }
        const _ = p;
        let f;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            f = s._("Learn more");
            t[5] = f;
        } else {
            f = t[5];
        }
        let g;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebFlexItem.react");
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            g = <Component_1 align="center" justify="center"><Component>{u.jsx(r("WDSIllustrationWdsPictoDisappearingMessages.react"), {
                testid: "wds-picto-disappearing-messages"
            })}</Component></Component_1>;
            t[6] = g;
        } else {
            g = t[6];
        }
        let h;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            h = <Component type="Headline2" colorName="contentDefault" isPrimaryHeading textAlign="center" xstyle={c.header} testid="after-read-nux-heading">{s._("After reading timer")}</Component>;
            t[7] = h;
        } else {
            h = t[7];
        }
        let y;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            y = {
                className: "x98l61r xg6s713"
            };
            t[8] = y;
        } else {
            y = t[8];
        }
        let C;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = r("WDSText.react");
            C = <p {...babelHelpers.extends({
                "data-testid": "after-read-nux-subtitle-paragraph"
            }, y, {
                children: <Component_1 type="Body2" colorName="contentDefault" textAlign="center" testid="after-read-nux-subtitle">{s._("Protect your privacy and improve your device storage with the {afterReading} timer.", [
                    s._param("afterReading", <Component type="Body2Emphasized" colorName="contentDefault" testid="after-read-nux-after-reading">{s._("after reading")}</Component>)
                ])}</Component_1>
            })}/>;
            t[9] = C;
        } else {
            C = t[9];
        }
        let b;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            b = <M19 icon={u.jsx(r("WDSIconWdsIcDisappearingMessages.react"), {
                "aria-hidden": true,
                width: 24,
                height: 24,
                iconXstyle: c.icon
            })}>{s._("Messages in this chat will disappear after they're read.")}</M19>;
            t[10] = b;
        } else {
            b = t[10];
        }
        let v;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            v = <M19 icon={u.jsx(r("WDSIconIcDuration.react"), {
                "aria-hidden": true,
                width: 24,
                height: 24,
                iconXstyle: c.icon
            })}>{s._("Unread messages will disappear after 24 hours.")}</M19>;
            t[11] = v;
        } else {
            v = t[11];
        }
        let S;
        if (t[12] === Symbol.for("react.memo_cache_sentinel")) {
            S = <M19 icon={u.jsx(r("WDSIconIcBackHand.react"), {
                "aria-hidden": true,
                width: 24,
                height: 24,
                iconXstyle: c.icon
            })}>{s._("People may find other ways to save messages.")}</M19>;
            t[12] = S;
        } else {
            S = t[12];
        }
        let R;
        if (t[13] !== _ || t[14] !== d) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            R = <Component testid="after-read-nux-modal" onOK={d} onCancel={_} cancelText={f}>{g}{h}{C}{b}{v}{S}</Component>;
            t[13] = _;
            t[14] = d;
            t[15] = R;
        } else {
            R = t[15];
        }
        return R;
    }
    function M19(e) {
        const t = o("react-compiler-runtime").c(6);
        const { children, icon } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "x1n2onr6 x78zum5 x6s0dn4 x1nmyh1g"
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] !== children) {
            const Component = r("WDSText.react");
            l = <Component type="Body2" colorName="contentDeemphasized" xstyle={c.body} testid="after-read-nux-row-description">{children}</Component>;
            t[1] = children;
            t[2] = l;
        } else {
            l = t[2];
        }
        let s;
        if (t[3] !== icon || t[4] !== l) {
            s = <div {...babelHelpers.extends({
                "data-testid": "after-read-nux-row"
            }, i, {
                children: [
                    icon,
                    l
                ]
            })}/>;
            t[3] = icon;
            t[4] = l;
            t[5] = s;
        } else {
            s = t[5];
        }
        return s;
    }
    l.default = d;
}, 226);