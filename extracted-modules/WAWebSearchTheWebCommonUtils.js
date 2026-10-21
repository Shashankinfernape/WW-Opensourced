__d("WAWebSearchTheWebCommonUtils", [
    "fbt",
    "$InternalEnum",
    "WAWebBox.react",
    "WAWebCellV2.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebHfmTextSearchCompleteWamEvent",
    "WAWebModalManager",
    "WAWebNetworkStatus",
    "WAWebSTWGatingUtils",
    "WAWebSearchTextIcon.react",
    "WAWebSearchTheWebEventLogger",
    "WAWebSpinner.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumStwFormat",
    "WAWebWamEnumStwInteraction",
    "WDSIconIcGoogleLensIcon.react",
    "WDSIconIcInfo.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const e_useState = e.useState;
    const d = {
        paddingEnd4: {
            paddingInlineEnd: "x1uc92m",
            $$css: true
        },
        paddingVert4: {
            paddingTop: "x1tiyuxx",
            paddingBottom: "x1nbhmlj",
            $$css: true
        }
    };
    const m = n("$InternalEnum").Mirrored([
        "TEXT",
        "URL",
        "IMAGE"
    ]);
    const p = 24;
    const _ = 24;
    function f() {
        return s._("Check your internet connection and try again.");
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function g(e) {
        const t = o("WAWebToast.react").genId();
        o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
            msg: e,
            id: t
        }));
    }
    function h() {
        return s._("Get more info about this message.");
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    function y() {
        return s._("Search on web");
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    function C() {
        return s._("Search on web");
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function b() {
        return s._("Search");
    }
    b.displayName = `${b.name} [from ${i.id}]`;
    function v({ entryPoint, isNewsletter, messageType, stwFormat }) {
        const i = function() {
            o("WAWebSearchTheWebEventLogger").logSTWEvent({
                stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION.LEARN_MORE_CLICKED,
                stwEntryPoint: entryPoint,
                stwFormat,
                messageType
            });
        };
        if (isNewsletter) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            return s._("Searching for more info will upload only this update to Google. {=m2}", [
                s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getSearchTheWebFaqUrl()} onClick={i}>{s._("Learn more")}</Component>)
            ]);
        }
        const Component = o("WAWebExternalLink.react").ExternalLink;
        return s._("Searching for more info will upload only this message to Google. {=m2}", [
            s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getSearchTheWebFaqUrl()} onClick={i}>{s._("Learn more")}</Component>)
        ]);
    }
    function S() {
        return s._("This message will not be shared with WhatsApp.");
    }
    S.displayName = `${S.name} [from ${i.id}]`;
    function R(e) {
        switch(e){
            case m.TEXT:
                return u.jsx(o("WAWebSearchTextIcon.react").SearchTextIcon, {
                    height: p,
                    width: _
                });
            case m.IMAGE:
                return u.jsx(r("WDSIconIcGoogleLensIcon.react"), {
                    height: p,
                    width: _
                });
            case m.URL:
                return u.jsx(r("WDSIconIcInfo.react"), {
                    height: p,
                    width: _
                });
        }
    }
    R.displayName = `${R.name} [from ${i.id}]`;
    function L(searchType) {
        switch(searchType){
            case m.TEXT:
                return s._("Search for text");
            case m.IMAGE:
                return s._("Search for image");
            case m.URL:
                if (o("WAWebSTWGatingUtils").isSearchTheWebDesignExperimentV1Enabled()) {
                    return s._("Search for link info");
                }
                return s._("More info about link");
        }
    }
    function E(e) {
        const t = o("react-compiler-runtime").c(18);
        const { onSearchClick, searchType } = e;
        const l = e_useState(false);
        const s = l[0];
        const m = l[1];
        let p;
        if (t[0] !== searchType) {
            p = R(searchType);
            t[0] = searchType;
            t[1] = p;
        } else {
            p = t[1];
        }
        let containerXStyle;
        let primaryRightXStyle;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            containerXStyle = [
                d.paddingEnd4,
                d.paddingVert4
            ];
            primaryRightXStyle = [
                d.paddingEnd4,
                d.paddingVert4
            ];
            t[2] = containerXStyle;
            t[3] = primaryRightXStyle;
        } else {
            containerXStyle = t[2];
            primaryRightXStyle = t[3];
        }
        let y;
        if (t[4] !== onSearchClick) {
            y = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (r("WAWebNetworkStatus").online) {
                        m(true);
                        yield onSearchClick();
                        m(false);
                        new (o("WAWebHfmTextSearchCompleteWamEvent")).HfmTextSearchCompleteWamEvent().commit();
                        o("WAWebModalManager").ModalManager.close();
                    } else {
                        g(f());
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[4] = onSearchClick;
            t[5] = y;
        } else {
            y = t[5];
        }
        let C;
        if (t[6] !== searchType) {
            C = L(searchType);
            t[6] = searchType;
            t[7] = C;
        } else {
            C = t[7];
        }
        let b;
        if (t[8] !== C) {
            const Component = r("WDSText.react");
            const Component_1 = r("WAWebBox.react");
            b = <Component_1 paddingStart={12}><Component type="Body2" colorName="contentDefault">{C}</Component></Component_1>;
            t[8] = C;
            t[9] = b;
        } else {
            b = t[9];
        }
        let primaryRight;
        if (t[10] !== s) {
            primaryRight = s ? u.jsx(o("WAWebSpinner.react").Spinner, {
                size: 20,
                color: "accent"
            }) : null;
            t[10] = s;
            t[11] = primaryRight;
        } else {
            primaryRight = t[11];
        }
        let S;
        if (t[12] !== s || t[13] !== p || t[14] !== y || t[15] !== b || t[16] !== primaryRight) {
            const Component = r("WAWebCellV2.react");
            const Component_1 = o("WAWebFlex.react").FlexItem;
            S = <Component_1 testid="search-modal-row" paddingTop={8} paddingBottom={8}><Component detailLeft={p} containerXStyle={containerXStyle} primaryRightXStyle={primaryRightXStyle} disabled={s} onClick={y} primary={b} alignDetailRight="start" primaryRight={primaryRight}/></Component_1>;
            t[12] = s;
            t[13] = p;
            t[14] = y;
            t[15] = b;
            t[16] = primaryRight;
            t[17] = S;
        } else {
            S = t[17];
        }
        return S;
    }
    function k(e) {
        const t = Array.from(e.keys());
        if (t.length === 1) {
            const n = t[0];
            switch(n){
                case m.TEXT:
                    return o("WAWebWamEnumStwFormat").STW_FORMAT.SINGLE_TEXT;
                case m.URL:
                    return o("WAWebWamEnumStwFormat").STW_FORMAT.SINGLE_LINK;
                case m.IMAGE:
                    return o("WAWebWamEnumStwFormat").STW_FORMAT.SINGLE_IMAGE;
            }
        } else if (t.length === 2) {
            if (t.includes(m.URL) && t.includes(m.TEXT)) {
                return o("WAWebWamEnumStwFormat").STW_FORMAT.MULTIPLE_LINK_TEXT;
            }
            if (t.includes(m.URL) && t.includes(m.IMAGE)) {
                return o("WAWebWamEnumStwFormat").STW_FORMAT.MULTIPLE_LINK_IMAGE;
            }
            if (t.includes(m.TEXT) && t.includes(m.IMAGE)) {
                return o("WAWebWamEnumStwFormat").STW_FORMAT.MULTIPLE_IMAGE_TEXT;
            }
        }
        return o("WAWebWamEnumStwFormat").STW_FORMAT.MULTIPLE_LINK_IMAGE_TEXT;
    }
    l.SearchType = m;
    l.getNoInternetToastMsg = f;
    l.showSearchFailureToast = g;
    l.getHFMHeaderText = h;
    l.getHFMHeaderCTAText = y;
    l.getModalTitleText = C;
    l.getModalSearchActionText = b;
    l.getModalHeaderText = v;
    l.getModalHeaderSubtext = S;
    l.SearchModalRow = E;
    l.getSTWFormat = k;
}, 226);