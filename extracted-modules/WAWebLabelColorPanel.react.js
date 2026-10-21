__d("WAWebLabelColorPanel.react", [
    "WAWebDropdown.react",
    "WAWebFlex.react",
    "WAWebL10N",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    const e = [
        "anchor",
        "onClose"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = {
        marginTop9: {
            marginTop: "xzbgwbi",
            $$css: true
        },
        marginInline10: {
            marginInlineStart: "x1hm9lzh",
            marginInlineEnd: "x1sa5p1d",
            marginLeft: null,
            marginRight: null,
            $$css: true
        }
    };
    const m = {
        borderTopWidth: "x5see2y",
        borderInlineEndWidth: "x16hg961",
        borderBottomWidth: "x1pzews7",
        borderInlineStartWidth: "x1x3agtl",
        borderTopStyle: "x13fuv20",
        borderInlineEndStyle: "x18b5jzi",
        borderBottomStyle: "x1q0q8m5",
        borderInlineStartStyle: "x1t7ytsu",
        $$css: true
    };
    const p = {
        selectedBorder: function(t) {
            return [
                m,
                {
                    borderTopColor: t != null ? "x4jc3fe" : t,
                    borderInlineEndColor: t != null ? "x5eo2gp" : t,
                    borderBottomColor: t != null ? "xzh3puf" : t,
                    borderInlineStartColor: t != null ? "xhck2kt" : t,
                    $$css: true
                },
                {
                    "--x-borderColor": t ?? undefined
                }
            ];
        },
        btnOutline: {
            boxSizing: "x9f619",
            width: "x1n7h9c3",
            height: "x1s1d1n7",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        }
    };
    function Component({ colors, onSelect, selectedIndex }) {
        let i = 0;
        return <div {...babelHelpers.extends({
            role: "tablist"
        }, (s || (s = r("stylex"))).props([
            o("WDSPaddings.stylex").wdsPaddings.paddingHor16,
            o("WDSPaddings.stylex").wdsPaddings.paddingVer20
        ]), {
            "data-testid": "label-color-picker",
            children: colors.map((e, t)=>{
                const Component = o("WAWebFlex.react").FlexRow;
                return <Component key={t} xstyle={d.marginTop9} justify="center">{e.map((e)=>{
                    const r = i++;
                    const l = e.originalIndex ?? r;
                    const s = selectedIndex === l;
                    const Component = o("WAWebFlex.react").FlexRow;
                    const Component_1 = o("WAWebFlex.react").FlexRow;
                    return <Component_1 key={l} justify="center" align="center"><Component justify="center" align="center" xstyle={[
                        p.btnOutline,
                        d.marginInline10,
                        s && p.selectedBorder(e.hexColor)
                    ]}><button role="tab" tabIndex={s ? 0 : -1} aria-selected={s} data-testid={`label-color-item-${l}`} className={{
                        0: "x1td3qas x10w6t97 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x13345yd x1kqiigx x1iy4mvq x1nrmj05",
                        1: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x13345yd x1kqiigx x1iy4mvq x1nrmj05 x1ksvffz xqaafxp"
                    }[!!s << 0]} style={{
                        backgroundColor: e.hexColor
                    }} onClick={function() {
                        return onSelect(l);
                    }}/></Component></Component_1>;
                })}</Component>;
            })
        })}/>;
    }
    Component.displayName = `${Component.name} [from ${i.id}]`;
    function f(t) {
        const n = o("react-compiler-runtime").c(14);
        let a;
        let i;
        let l;
        if (n[0] !== t) {
            a = t.anchor;
            i = t.onClose;
            l = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
        }
        let s;
        if (n[4] !== l.colors || n[5] !== l.onSelect || n[6] !== l.selectedIndex) {
            s = <Component colors={l.colors} selectedIndex={l.selectedIndex} onSelect={l.onSelect}/>;
            n[4] = l.colors;
            n[5] = l.onSelect;
            n[6] = l.selectedIndex;
            n[7] = s;
        } else {
            s = n[7];
        }
        const u = s;
        let d;
        if (n[8] !== a || n[9] !== u) {
            d = c.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: {
                    menu: u,
                    type: o("WAWebDropdown.react").MenuType.LabelColorPicker,
                    anchor: a,
                    offsetX: r("WAWebL10N").isRTL() ? 9 : -9,
                    offsetY: 2
                }
            });
            n[8] = a;
            n[9] = u;
            n[10] = d;
        } else {
            d = n[10];
        }
        let m;
        if (n[11] !== i || n[12] !== d) {
            const Component = o("WAWebUimUie.react").UIE;
            m = <Component displayName="LabelColorPicker" escapable popable dismissOnWindowResize requestDismiss={i}>{d}</Component>;
            n[11] = i;
            n[12] = d;
            n[13] = m;
        } else {
            m = n[13];
        }
        return m;
    }
    l.LabelColorPicker = Component;
    l.LabelColorPopup = f;
}, 98);