__d("WAWebSelectMenuItem.react", [
    "WAWebCellMenuItem.react",
    "WAWebCheckCircleCropViewBox",
    "WAWebMenuController.react",
    "WDSIconIcCheck.react",
    "WDSIconIcCheckCircleFilled.react",
    "WDSIconIcRadioButtonChecked.react",
    "WDSIconIcRadioButtonUnchecked.react",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebSet"
], function(t, n, r, o, a, i, l) {
    const e = [
        "middlecontainerXStyle",
        "onMouseEnter",
        "onMouseLeave",
        "theme"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { Children, createContext, useContext, useEffect } = c;
    const f = {
        tealColor: {
            color: "x1v5yvga",
            $$css: true
        }
    };
    const GContext = createContext(null);
    function h(e) {
        const { children, initialSelection, multiselect } = e;
        const i = o("WAWebMenuController.react").useMenu();
        const l = o("useWAWebSet").useSet();
        const selection = l[0];
        const c = l[1];
        const { clear, toggle } = c;
        const f = Children.map(children, function(e) {
            return e.props.optionId;
        });
        const h = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                let r;
                if (multiselect === true) {
                    r = yield toggle(t);
                } else {
                    r = yield clear([
                        t
                    ]);
                }
                e.onSelect?.(t, n, r);
            });
            return function(n, r) {
                return t.apply(this, arguments);
            };
        })();
        o("useWAWebListener").useListener(i.events, "select", (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                if (f.includes(e)) {
                    yield h(e, t);
                }
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        })());
        useEffect(function() {
            if (initialSelection != null) {
                const e = Array.isArray(initialSelection) ? initialSelection : [
                    initialSelection
                ];
                clear(e);
            }
        }, []);
        const y = {
            selection,
            isMultiselect: multiselect === true
        };
        return <GContext.Provider value={y}>{children}</GContext.Provider>;
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    function y(e, t) {
        switch(t){
            case "select":
                if (e) {
                    return u.jsx(r("WDSIconIcCheckCircleFilled.react"), {
                        iconXstyle: f.tealColor,
                        height: 20,
                        width: 20,
                        viewBox: o("WAWebCheckCircleCropViewBox").CHECK_CIRCLE_FILLED_CROP_VIEWBOX,
                        testid: "checkbox-round-checked"
                    });
                }
                return u.jsx(r("WDSIconIcRadioButtonUnchecked.react"), {
                    height: 20,
                    width: 20,
                    testid: "checkbox-round-unchecked"
                });
            case "radio":
                if (e) {
                    return u.jsx(r("WDSIconIcRadioButtonChecked.react"), {
                        height: 20,
                        width: 20,
                        testid: "checkbox-round-radio-checked"
                    });
                }
                return u.jsx(r("WDSIconIcRadioButtonUnchecked.react"), {
                    height: 20,
                    width: 20,
                    testid: "checkbox-round-passive"
                });
        }
    }
    function C(e, t) {
        switch(t){
            case "select":
                if (e) {
                    return u.jsx(r("WDSIconIcCheck.react"), {
                        iconXstyle: f.tealColor
                    });
                }
                return null;
            case "radio":
                if (e) {
                    return u.jsx(r("WDSIconIcRadioButtonChecked.react"), {
                        iconXstyle: f.tealColor,
                        height: 20,
                        width: 20,
                        testid: "checkbox-round-radio-checked"
                    });
                }
                return u.jsx(r("WDSIconIcRadioButtonUnchecked.react"), {
                    height: 20,
                    width: 20,
                    testid: "checkbox-round-passive"
                });
        }
    }
    function b(t) {
        const n = o("react-compiler-runtime").c(19);
        let middleContainerXStyle;
        let i;
        let onMouseLeave;
        let s;
        let c;
        if (n[0] !== t) {
            middleContainerXStyle = t.middlecontainerXStyle;
            i = t.onMouseEnter;
            onMouseLeave = t.onMouseLeave;
            c = t.theme;
            s = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = middleContainerXStyle;
            n[2] = i;
            n[3] = onMouseLeave;
            n[4] = s;
            n[5] = c;
        } else {
            middleContainerXStyle = n[1];
            i = n[2];
            onMouseLeave = n[3];
            s = n[4];
            c = n[5];
        }
        const d = c === undefined ? "select" : c;
        const m = useContext(GContext);
        if (m == null) {
            throw r("err")("[menu] `SelectMenuItem` must be used inside of a `SelectMenuItemGroup`");
        }
        let _;
        let f;
        if (n[6] !== s.optionId || n[7] !== m.isMultiselect || n[8] !== m.selection || n[9] !== d) {
            const h = m.selection.has(s.optionId);
            if (m.isMultiselect) {
                f = "multi-select";
                _ = y(h, d);
            } else {
                f = "single-select";
                _ = C(h, d);
            }
            n[6] = s.optionId;
            n[7] = m.isMultiselect;
            n[8] = m.selection;
            n[9] = d;
            n[10] = _;
            n[11] = f;
        } else {
            _ = n[10];
            f = n[11];
        }
        let b;
        if (n[12] !== _ || n[13] !== middleContainerXStyle || n[14] !== i || n[15] !== onMouseLeave || n[16] !== s || n[17] !== f) {
            b = u.jsx(o("WAWebCellMenuItem.react").CellV2MenuItem, babelHelpers.extends({
                detailRight: _
            }, s, {
                middleContainerXStyle,
                onMouseEnter: i,
                onMouseLeave,
                type: f
            }));
            n[12] = _;
            n[13] = middleContainerXStyle;
            n[14] = i;
            n[15] = onMouseLeave;
            n[16] = s;
            n[17] = f;
            n[18] = b;
        } else {
            b = n[18];
        }
        return b;
    }
    l.SelectMenuItemGroup = h;
    l.SelectMenuItem = b;
}, 98);