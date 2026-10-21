__d("WAWebEphemeralAfterReadKicNux.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFormatEphemeralSetting",
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
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(22);
        const { duration, onOk } = e;
        const i = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL);
        const l = i[1];
        const d = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_AFTER_READ);
        const p = d[1];
        let _;
        if (t[0] !== p || t[1] !== l) {
            _ = function() {
                l();
                p();
            };
            t[0] = p;
            t[1] = l;
            t[2] = _;
        } else {
            _ = t[2];
        }
        const f = _;
        let g;
        if (t[3] !== f || t[4] !== onOk) {
            g = function() {
                f();
                o("WAWebModalManager").ModalManager.closeSupportOrModal();
                if (onOk) {
                    onOk();
                }
            };
            t[3] = f;
            t[4] = onOk;
            t[5] = g;
        } else {
            g = t[5];
        }
        const h = g;
        let y;
        if (t[6] !== f) {
            y = function() {
                f();
                o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getEphemeralFaqUrl());
            };
            t[6] = f;
            t[7] = y;
        } else {
            y = t[7];
        }
        const C = y;
        let b;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            b = s._("Learn more");
            t[8] = b;
        } else {
            b = t[8];
        }
        let v;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebFlexItem.react");
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            v = <Component_1 align="center" justify="center"><Component>{u.jsx(r("WDSIllustrationWdsPictoDisappearingMessages.react"), {
                testid: "wds-picto-disappearing-messages"
            })}</Component></Component_1>;
            t[9] = v;
        } else {
            v = t[9];
        }
        let S;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            S = <Component testid="ephemeral-after-read-kic-nux-heading" type="Headline2" colorName="contentDefault" textAlign="center" isPrimaryHeading xstyle={c.header}>{s._("Disappearing messages are on in this chat")}</Component>;
            t[10] = S;
        } else {
            S = t[10];
        }
        let R;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            R = {
                className: "x98l61r xg6s713"
            };
            t[11] = R;
        } else {
            R = t[11];
        }
        let L;
        if (t[12] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = r("WDSText.react");
            L = <p {...babelHelpers.extends({
                "data-testid": "ephemeral-after-read-kic-nux-subtitle-paragraph"
            }, R, {
                children: <Component_1 testid="ephemeral-after-read-kic-nux-subtitle" type="Body2" colorName="contentDefault" textAlign="center">{s._("Protect your privacy and improve your device storage with the {afterReading} timer.", [
                    s._param("afterReading", <Component type="Body2Emphasized" colorName="contentDefault" testid="ephemeral-after-read-kic-nux-emphasis">{s._("after reading")}</Component>)
                ])}</Component_1>
            })}/>;
            t[12] = L;
        } else {
            L = t[12];
        }
        let E;
        if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
            E = u.jsx(r("WDSIconWdsIcDisappearingMessages.react"), {
                "aria-hidden": true,
                width: 24,
                height: 24,
                iconXstyle: c.icon
            });
            t[13] = E;
        } else {
            E = t[13];
        }
        let k;
        if (t[14] !== duration) {
            k = <M3Component testid="ephemeral-after-read-kic-nux-duration" icon={E}>{s._("Messages in this chat will disappear {duration} after they're read, except when kept.", [
                s._param("duration", o("WAWebFormatEphemeralSetting").getDisappearingMessageDurationString(duration))
            ])}</M3Component>;
            t[14] = duration;
            t[15] = k;
        } else {
            k = t[15];
        }
        let I;
        if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
            I = <M3Component testid="ephemeral-after-read-kic-nux-unread" icon={u.jsx(r("WDSIconIcDuration.react"), {
                "aria-hidden": true,
                width: 24,
                height: 24,
                iconXstyle: c.icon
            })}>{s._("Unread messages will disappear after 24 hours.")}</M3Component>;
            t[16] = I;
        } else {
            I = t[16];
        }
        let T;
        if (t[17] === Symbol.for("react.memo_cache_sentinel")) {
            T = <M3Component testid="ephemeral-after-read-kic-nux-saving" icon={u.jsx(r("WDSIconIcBackHand.react"), {
                "aria-hidden": true,
                width: 24,
                height: 24,
                iconXstyle: c.icon
            })}>{s._("People may find other ways to save messages.")}</M3Component>;
            t[17] = T;
        } else {
            T = t[17];
        }
        let D;
        if (t[18] !== C || t[19] !== h || t[20] !== k) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            D = <Component testid="ephemeral-after-read-kic-nux-modal" onOK={h} onCancel={C} cancelText={b}>{v}{S}{L}{k}{I}{T}</Component>;
            t[18] = C;
            t[19] = h;
            t[20] = k;
            t[21] = D;
        } else {
            D = t[21];
        }
        return D;
    }
    function M3Component(e) {
        const t = o("react-compiler-runtime").c(12);
        const { children, icon, testid } = e;
        const l = `${testid}-row`;
        let s;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            s = {
                className: "x1n2onr6 x78zum5 x6s0dn4 x1nmyh1g"
            };
            t[0] = s;
        } else {
            s = t[0];
        }
        const c = `${testid}-body-container`;
        let d;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                className: "x1rdy4ex"
            };
            t[1] = d;
        } else {
            d = t[1];
        }
        let m;
        if (t[2] !== children || t[3] !== testid) {
            const Component = r("WDSText.react");
            m = <Component testid={testid} type="Body2" colorName="contentDeemphasized">{children}</Component>;
            t[2] = children;
            t[3] = testid;
            t[4] = m;
        } else {
            m = t[4];
        }
        let p;
        if (t[5] !== c || t[6] !== m) {
            p = <div {...babelHelpers.extends({
                "data-testid": c
            }, d, {
                children: m
            })}/>;
            t[5] = c;
            t[6] = m;
            t[7] = p;
        } else {
            p = t[7];
        }
        let _;
        if (t[8] !== icon || t[9] !== l || t[10] !== p) {
            _ = <div {...babelHelpers.extends({
                "data-testid": l
            }, s, {
                children: [
                    icon,
                    p
                ]
            })}/>;
            t[8] = icon;
            t[9] = l;
            t[10] = p;
            t[11] = _;
        } else {
            _ = t[11];
        }
        return _;
    }
    l.default = d;
}, 226);