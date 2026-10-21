__d("WAWebCountrySelectorPopup.react", [
    "fbt",
    "WAWebBusinessProfileIconSection.react",
    "WAWebButton.react",
    "WAWebCatalogLogEvents",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebRichTextField.react",
    "WAWebWamEnumSurfaceType",
    "WDSIconIcSearch.react",
    "fbs",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useState } = c;
    const p = {
        paddingBlock10: {
            paddingTop: "x889kno",
            paddingBottom: "x1a8lsjc",
            $$css: true
        },
        paddingInline30: {
            paddingInlineStart: "x162tt16",
            paddingInlineEnd: "x5zjp28",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        }
    };
    const _ = {
        inputWrapper: {
            display: "x78zum5",
            alignSelf: "xamitd3",
            paddingInlineEnd: "x1xnnf8n",
            $$css: true
        },
        formWrapper: {
            overflowY: "x1odjw0f",
            $$css: true
        },
        search: {
            backgroundColor: "x1od0jb8",
            paddingTop: "x889kno",
            paddingInlineEnd: "x5zjp28",
            paddingBottom: "x1a8lsjc",
            paddingInlineStart: "x162tt16",
            $$css: true
        },
        searchIcon: {
            height: "x1qx5ct2",
            width: "xw4jnvo",
            $$css: true
        },
        description: {
            color: "xhslqc4",
            fontSize: "x1jchvi3",
            lineHeight: "xa7kkou",
            $$css: true
        },
        footer: {
            paddingTop: "x889kno",
            paddingInlineEnd: "x2vl965",
            paddingBottom: "x1a8lsjc",
            paddingInlineStart: "xe2zdcy",
            backgroundColor: "x1280gxy",
            borderTopWidth: "x178xt8z",
            borderTopStyle: "x13fuv20",
            borderTopColor: "xx42vgk",
            $$css: true
        }
    };
    function FComponent({ countries, countryCode, description, lastUsedCountryCode, onSave, surface, title }) {
        const h = useState("");
        const y = h[0];
        const C = h[1];
        const b = useState(countryCode || "");
        const v = b[0];
        const S = b[1];
        const R = useCallback(function() {
            o("WAWebCatalogLogEvents").logSMBCountryListClicked(surface, o("WAWebCatalogLogEvents").SmbUserActionTargetEnum.Continue, {
                country: v
            });
            o("WAWebModalManager").ModalManager.close();
            onSave(v);
        }, [
            v,
            onSave
        ]);
        const L = useCallback(function(e) {
            o("WAWebCatalogLogEvents").logSMBCountryListClicked(surface, o("WAWebCatalogLogEvents").SmbUserActionTargetEnum.Country);
            S(e.target.value);
        }, []);
        const Component = o("WAWebDrawerHeader.react").DrawerHeader;
        const Component_1 = o("WAWebRichTextField.react").RichTextField;
        const Component_2 = r("WAWebFlexItem.react");
        const Component_3 = r("WAWebFlexItem.react");
        const Component_4 = r("WAWebFlexItem.react");
        const Component_5 = o("WAWebFlex.react").FlexColumn;
        const Component_6 = r("WAWebDrawerBody.react");
        const Component_7 = o("WAWebButton.react").WAWebButtonPrimary;
        const Component_8 = r("WAWebFlexItem.react");
        const Component_9 = o("WAWebFlex.react").FlexRow;
        const Component_10 = r("WAWebDrawer.react");
        const Component_11 = o("WAWebModal.react").Modal;
        return <Component_11 type={o("WAWebModal.react").ModalTheme.Box}><Component_10 theme="settings" tsNavigationData={{
            surface: "unknown",
            viewName: "country-selector"
        }}><Component title={title} type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP} onCancel={function() {
            if (surface === o("WAWebWamEnumSurfaceType").SURFACE_TYPE.ORIGIN_COUNTRY) {
                o("WAWebCatalogLogEvents").logSMBCountryListClicked(surface, o("WAWebCatalogLogEvents").SmbUserActionTargetEnum.Back);
            }
            o("WAWebModalManager").ModalManager.close();
        }}/><Component_6><Component_5 align="stretch"><Component_2 shrink={0} xstyle={_.search}>{u.jsx(o("WAWebBusinessProfileIconSection.react").IconSection, {
            Icon: r("WDSIconIcSearch.react"),
            svgXstyle: _.searchIcon,
            theme: o("WAWebBusinessProfileIconSection.react").IconSectionTheme.NoMarginSmallGutter,
            content: <Component_1 value={y} editable inputPlaceholder={s._("Search…")} onChange={function(t) {
                return C(t.text);
            }} focusOnMount theme="text-input" lowProfile/>
        })}</Component_2><Component_3 shrink={0} xstyle={[
            _.description,
            p.paddingBlock10,
            p.paddingInline30
        ]}>{description}</Component_3><Component_4 xstyle={_.formWrapper} grow={1}><form method="POST" className="x123j3cw xyri2b xs9asl8 x1c1uobl"><ol>{countries.filter(([t, n])=>t.toLowerCase().includes(y.toLowerCase()) || n.toString().toLowerCase().includes(y.toLowerCase())).map(([t, label])=><G8Component key={t} selectedCountryCode={v} lastUsedCountryCode={lastUsedCountryCode} countryCode={t} label={label} onChange={L}/>)}</ol></form></Component_4></Component_5></Component_6><Component_9 justify="end" xstyle={_.footer}><Component_8><Component_7 onClick={R} testid="country-selector-save-button">{r("WAWebFbtCommon")("Save")}</Component_7></Component_8></Component_9></Component_10></Component_11>;
    }
    FComponent.displayName = `${FComponent.name} [from ${i.id}]`;
    function G8Component(e) {
        const t = o("react-compiler-runtime").c(20);
        const { countryCode, "data-testid": data_testid, label: label_1, lastUsedCountryCode, onChange, selectedCountryCode } = e;
        const d = data_testid === undefined ? "country-selector-popup-option" : data_testid;
        let m;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            m = {
                className: "x889kno x5zjp28 x1a8lsjc x162tt16 x1ypdohk"
            };
            t[0] = m;
        } else {
            m = t[0];
        }
        const p = countryCode === selectedCountryCode;
        let f;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            f = {
                className: "x1ypdohk"
            };
            t[1] = f;
        } else {
            f = t[1];
        }
        let g;
        if (t[2] !== countryCode || t[3] !== onChange || t[4] !== p) {
            const Component = r("WAWebFlexItem.react");
            g = <Component xstyle={_.inputWrapper}><input {...babelHelpers.extends({
                id: countryCode,
                value: countryCode,
                type: "radio",
                name: "countryCode",
                checked: p
            }, f, {
                onChange
            })}/></Component>;
            t[2] = countryCode;
            t[3] = onChange;
            t[4] = p;
            t[5] = g;
        } else {
            g = t[5];
        }
        let h;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            h = {
                className: "x1lliihq x1lkfr7t x1ypdohk"
            };
            t[6] = h;
        } else {
            h = t[6];
        }
        const y = `${d}-label`;
        let C;
        if (t[7] !== countryCode || t[8] !== label_1 || t[9] !== y) {
            C = <label {...babelHelpers.extends({
                htmlFor: countryCode
            }, h, {
                "data-testid": y,
                children: label_1
            })}/>;
            t[7] = countryCode;
            t[8] = label_1;
            t[9] = y;
            t[10] = C;
        } else {
            C = t[10];
        }
        let b;
        if (t[11] !== countryCode || t[12] !== lastUsedCountryCode) {
            b = lastUsedCountryCode === countryCode && <span className="x1lliihq xhslqc4 x1jchvi3 xa7kkou">{r("fbs")._("(Last Used)")}</span>;
            t[11] = countryCode;
            t[12] = lastUsedCountryCode;
            t[13] = b;
        } else {
            b = t[13];
        }
        let v;
        if (t[14] !== C || t[15] !== b) {
            const Component = r("WAWebFlexItem.react");
            v = <Component grow={1}>{C}{b}</Component>;
            t[14] = C;
            t[15] = b;
            t[16] = v;
        } else {
            v = t[16];
        }
        let S;
        if (t[17] !== v || t[18] !== g) {
            const Component = o("WAWebFlex.react").FlexRow;
            S = <li {...babelHelpers.extends({}, m, {
                children: <Component align="center">{g}{v}</Component>
            })}/>;
            t[17] = v;
            t[18] = g;
            t[19] = S;
        } else {
            S = t[19];
        }
        return S;
    }
    l.default = FComponent;
}, 226);