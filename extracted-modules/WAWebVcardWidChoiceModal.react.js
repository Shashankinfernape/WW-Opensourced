__d("WAWebVcardWidChoiceModal.react", [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerItem.react",
    "WAWebModal.react",
    "WAWebUnstyledButton.react",
    "WAWebVcardUtils",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useMemo = u.useMemo;
    const m = {
        marginBottom10: {
            marginBottom: "xyorhqc",
            $$css: true
        },
        paddingInline14: {
            paddingInlineStart: "x1onr9mi",
            paddingInlineEnd: "x1pic42t",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        }
    };
    const p = {
        container: {
            backgroundColor: "x1280gxy",
            $$css: true
        }
    };
    function _(t) {
        const n = o("react-compiler-runtime").c(24);
        const { onSelect, vcard } = t;
        let l;
        if (n[0] !== onSelect) {
            l = function(t) {
                onSelect(t);
            };
            n[0] = onSelect;
            n[1] = l;
        } else {
            l = n[1];
        }
        const u = l;
        let d;
        if (n[2] !== u) {
            d = function(t, n) {
                t.stopPropagation();
                u(n);
            };
            n[2] = u;
            n[3] = d;
        } else {
            d = n[3];
        }
        const _ = d;
        let g;
        if (n[4] !== vcard.TEL) {
            g = vcard.TEL ?? [];
            n[4] = vcard.TEL;
            n[5] = g;
        } else {
            g = n[5];
        }
        let y;
        if (n[6] !== _ || n[7] !== u || n[8] !== t.icon || n[9] !== g) {
            const C = g.filter(f);
            let b;
            if (n[11] !== _ || n[12] !== u || n[13] !== t.icon) {
                b = function(a) {
                    const n = o("WAWebWidFactory").createUserWidOrThrow(a.properties.waid[0]);
                    let t_icon = t.icon;
                    if (t_icon) {
                        const Component = r("WAWebUnstyledButton.react");
                        t_icon = <Component onClick={function(t) {
                            _(t, n);
                        }}>{t_icon}</Component>;
                    }
                    const Component = r("WAWebDrawerItem.react");
                    return <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.container, m.marginBottom10, o("WDSPaddings.stylex").wdsPaddings.paddingVer0, m.paddingInline14), {
                        key: `vCard-${a.value}`
                    })}><Component title={o("WAWebWidFormat").widToFormattedUser(n)} onClick={function() {
                        return u(n);
                    }} isLastItem icon={t_icon}>{o("WAWebVcardUtils").vcardGetType(a)}</Component></div>;
                };
                n[11] = _;
                n[12] = u;
                n[13] = t.icon;
                n[14] = b;
            } else {
                b = n[14];
            }
            y = C.map(b);
            n[6] = _;
            n[7] = u;
            n[8] = t.icon;
            n[9] = g;
            n[10] = y;
        } else {
            y = n[10];
        }
        const v = y;
        let S;
        if (n[15] === Symbol.for("react.memo_cache_sentinel")) {
            S = {
                surface: "unknown",
                viewName: "vcard-wid-choice"
            };
            n[15] = S;
        } else {
            S = n[15];
        }
        const t_onCancel = t.onCancel;
        let L;
        if (n[16] === Symbol.for("react.memo_cache_sentinel")) {
            L = s._("Choose a phone number");
            n[16] = L;
        } else {
            L = n[16];
        }
        let E;
        if (n[17] !== t.onCancel) {
            const Component = o("WAWebDrawerHeader.react").DrawerHeader;
            E = <Component onCancel={t_onCancel} type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP} title={L}/>;
            n[17] = t.onCancel;
            n[18] = E;
        } else {
            E = n[18];
        }
        let k;
        if (n[19] !== v) {
            const Component = r("WAWebDrawerBody.react");
            k = <Component>{v}</Component>;
            n[19] = v;
            n[20] = k;
        } else {
            k = n[20];
        }
        let I;
        if (n[21] !== E || n[22] !== k) {
            const Component = r("WAWebDrawer.react");
            const Component_1 = o("WAWebModal.react").Modal;
            I = <Component_1 type={o("WAWebModal.react").ModalTheme.Box}><Component tsNavigationData={S}>{E}{k}</Component></Component_1>;
            n[21] = E;
            n[22] = k;
            n[23] = I;
        } else {
            I = n[23];
        }
        return I;
    }
    function f(e) {
        return e.properties.waid;
    }
    l.default = _;
}, 226);