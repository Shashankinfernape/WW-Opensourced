__d("WAWebPhoneNumberWrapperMutatorComponent.react", [
    "fbt",
    "WALogger",
    "WAWebCopyPasteSelectable.react",
    "WAWebDropdownItem.react",
    "WAWebFlex.react",
    "WAWebGetOrQueryUsyncInfoContactAction",
    "WAWebPhoneNumberContactAction",
    "WAWebPhoneUtils",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WDSIconIcContentCopy.react",
    "WDSIconWdsIcChat.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const c_useState = c.useState;
    const p = {
        spinnerContainer: {
            width: "xc5o50y",
            height: "x6hvgyk",
            $$css: true
        },
        spinnerText: {
            marginTop: "xcxhlts",
            paddingInlineStart: "x1gx403c",
            paddingInlineEnd: "x1q3ajuy",
            textAlign: "x2b8uid",
            $$css: true
        },
        menuItem: {
            paddingInlineStart: "x1iw51ew",
            paddingInlineEnd: "xde1mab",
            $$css: true
        },
        textualLinkRefreshed: {
            color: "xo1mcw5",
            fontWeight: "x1xlr1w8",
            textDecoration: "x1hl2dhg",
            ":hover_textDecoration": "xt0b8zv",
            ":focus-visible_textDecoration": "xbvygy2",
            ":focus-visible_color": "x17f7hit",
            ":focus-visible_backgroundColor": "xp30eni",
            ":focus-visible_textUnderlineOffset": "xhmieyt",
            $$css: true
        }
    };
    function Component({ canonicalPhone, fromMe, phoneNumber, selectable }) {
        const _ = c_useState(null);
        const f = _[0];
        const g = _[1];
        const h = c_useState(null);
        const y = h[0];
        const C = h[1];
        const b = c_useState(null);
        const v = b[0];
        const S = b[1];
        const R = c_useState(null);
        const L = R[0];
        const E = R[1];
        function k(t) {
            let r;
            if (v && v.isCached(canonicalPhone)) {
                r = v;
            } else {
                r = o("WAWebGetOrQueryUsyncInfoContactAction").usyncContactCached();
                S(r);
            }
            function i(e, t) {
                return l.apply(this, arguments);
            }
            function l() {
                l = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                    try {
                        const n = yield r.getOrRun(e);
                        TComponent(n, t);
                    } catch (error) {
                        TComponent(null, t);
                        E(null);
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "handlePhoneClick getUsync failed with exceptions ",
                            ""
                        ])), error).sendLogs("handlePhoneClick-getUsync");
                    }
                });
                return l.apply(this, arguments);
            }
            if (!r.isCached(canonicalPhone)) {
                IComponent(t);
            }
            i(canonicalPhone, t).catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handlePhoneClick getUsync rejected with exceptions ",
                    ""
                ])), t).sendLogs("handlePhoneClick-getUsync");
            });
        }
        function IComponent(e) {
            const Component = o("WAWebText.react").WAWebTextSmall;
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            const t = <Component_1 xstyle={p.spinnerContainer} align="center" justify="center">{d.jsx(o("WAWebSpinner.react").Spinner, {
                size: 50,
                stroke: 4,
                color: "highlight"
            })}<Component key="phone_number_wrapper_loading_text" as="span" xstyle={p.spinnerText}>{s._("Checking phone number...")}</Component></Component_1>;
            C({
                menu: t,
                event: e
            });
            g(null);
        }
        function TComponent(e, t) {
            const n = [];
            if (e != null && e.wid) {
                const u = o("WAWebPhoneUtils").formatPhone(canonicalPhone);
                const Component = o("WAWebDropdownItem.react").DropdownItem;
                n.push(<Component key="message-on-whatsapp" testid="mi-message-on-whatsapp" xstyle={p.menuItem} action={function(n) {
                    return o("WAWebPhoneNumberContactAction").handleOpenChat(n, e.wid, fromMe);
                }} icon={d.jsx(r("WDSIconWdsIcChat.react"), {})}>{s._("Chat with {chat-with-phoneNumber}", [
                    s._param("chat-with-phoneNumber", <span dir="ltr">{u}</span>)
                ])}</Component>);
            }
            const Component = o("WAWebDropdownItem.react").DropdownItem;
            n.push(<Component key="copy-phone-number" testid="mi-copy-phone-number" xstyle={p.menuItem} action={function() {
                return o("WAWebPhoneNumberContactAction").handleCopyPhoneNumber(phoneNumber, e?.wid, fromMe);
            }} icon={d.jsx(r("WDSIconIcContentCopy.react"), {})}>{s._("Copy phone number")}</Component>);
            C(null);
            g({
                menu: n,
                event: t
            });
            E(e?.wid);
            o("WAWebPhoneNumberContactAction").logClickOnPhoneNumber(e?.wid, fromMe);
        }
        let D = null;
        let x = null;
        if (f) {
            const Component = o("WAWebUimUie.react").UIE;
            D = <Component displayName="ContextMenu" escapable popable dismissOnWindowResize requestDismiss={function() {
                g(null);
                o("WAWebPhoneNumberContactAction").logCloseDialog(L, fromMe);
            }}>{d.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: f
            })}</Component>;
        }
        if (y) {
            const Component = o("WAWebUimUie.react").UIE;
            x = <Component displayName="ContextSpinner" escapable popable dismissOnWindowResize requestDismiss={function() {
                C(null);
            }}>{d.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: y
            })}</Component>;
        }
        const Component = o("WAWebCopyPasteSelectable.react").SelectableLink;
        return <><Component onClick={k} selectable={selectable} xstyle={p.textualLinkRefreshed} style={{
            cursor: "pointer"
        }}>{phoneNumber}</Component>{D}{x}</>;
    }
    Component.displayName = `${Component.name} [from ${i.id}]`;
    l.default = Component;
}, 226);