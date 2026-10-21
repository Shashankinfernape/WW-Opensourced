__d("WAWebSearchTheWebModal.react", [
    "WAWebBox.react",
    "WAWebChatGetters",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebHfmTextSearchCompleteWamEvent",
    "WAWebModalManager",
    "WAWebMultiSearchModal.react",
    "WAWebNetworkStatus",
    "WAWebSTWGatingUtils",
    "WAWebSearchTheWebCommonUtils",
    "WAWebSearchTheWebEventLogger",
    "WAWebSearchTheWebGetSupportedSearchOptions",
    "WAWebWamEnumStwInteraction",
    "WAWebWamMsgUtils",
    "WDSIllustrationWdsPictoWebsearch.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useState = e.useState;
    const c = {
        marginTop16: {
            marginTop: "x98l61r",
            $$css: true
        },
        marginTop12: {
            marginTop: "x1de0gy",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(33);
        const { entryPoint, message, stwFormat } = e;
        const c = e_useState(false);
        const isSearching = c[0];
        const p = c[1];
        let _;
        if (t[0] !== message) {
            _ = o("WAWebSearchTheWebGetSupportedSearchOptions").getSupportedSearchOptions(message);
            t[0] = message;
            t[1] = _;
        } else {
            _ = t[1];
        }
        const f = _;
        if (f.size < 1) {
            return null;
        }
        let g;
        if (t[2] !== entryPoint || t[3] !== message || t[4] !== stwFormat) {
            g = function() {
                o("WAWebSearchTheWebEventLogger").logSTWEvent({
                    stwEntryPoint: entryPoint,
                    stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION.STW_DISMISSED,
                    stwFormat,
                    messageType: o("WAWebWamMsgUtils").getWamMessageType(message)
                });
                o("WAWebModalManager").ModalManager.close();
            };
            t[2] = entryPoint;
            t[3] = message;
            t[4] = stwFormat;
            t[5] = g;
        } else {
            g = t[5];
        }
        const h = g;
        let y;
        if (t[6] !== entryPoint || t[7] !== message || t[8] !== f || t[9] !== stwFormat) {
            y = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (!r("WAWebNetworkStatus").online) {
                        o("WAWebSearchTheWebCommonUtils").showSearchFailureToast(o("WAWebSearchTheWebCommonUtils").getNoInternetToastMsg());
                    } else {
                        p(true);
                        yield f.values().next().value?.handleSearchAction({
                            stwEntryPoint: entryPoint,
                            stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION.SEARCH_CLICKED,
                            stwFormat,
                            messageType: o("WAWebWamMsgUtils").getWamMessageType(message)
                        });
                        p(false);
                        new (o("WAWebHfmTextSearchCompleteWamEvent")).HfmTextSearchCompleteWamEvent().commit();
                        o("WAWebModalManager").ModalManager.close();
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[6] = entryPoint;
            t[7] = message;
            t[8] = f;
            t[9] = stwFormat;
            t[10] = y;
        } else {
            y = t[10];
        }
        const onOk = y;
        let b;
        let v;
        let searchOptions;
        let R;
        let L;
        let isNewsletter;
        if (t[11] !== entryPoint || t[12] !== h || t[13] !== onOk || t[14] !== isSearching || t[15] !== message || t[16] !== f || t[17] !== stwFormat) {
            const k = o("WAWebFrontendMsgGetters").getChat(message);
            const headerText = o("WAWebSearchTheWebCommonUtils").getModalHeaderText({
                entryPoint,
                isNewsletter: o("WAWebChatGetters").getIsNewsletter(k),
                messageType: o("WAWebWamMsgUtils").getWamMessageType(message),
                stwFormat
            });
            const headerSubText = o("WAWebChatGetters").getIsNewsletter(k) ? null : o("WAWebSearchTheWebCommonUtils").getModalHeaderSubtext();
            v = <M8Component onCancel={h} onOk={onOk} isSearching={isSearching} headerText={headerText} headerSubText={headerSubText}/>;
            b = r("WAWebMultiSearchModal.react");
            searchOptions = f;
            R = entryPoint;
            L = stwFormat;
            isNewsletter = o("WAWebChatGetters").getIsNewsletter(k);
            t[11] = entryPoint;
            t[12] = h;
            t[13] = onOk;
            t[14] = isSearching;
            t[15] = message;
            t[16] = f;
            t[17] = stwFormat;
            t[18] = b;
            t[19] = v;
            t[20] = searchOptions;
            t[21] = R;
            t[22] = L;
            t[23] = isNewsletter;
        } else {
            b = t[18];
            v = t[19];
            searchOptions = t[20];
            R = t[21];
            L = t[22];
            isNewsletter = t[23];
        }
        let D;
        if (t[24] !== message) {
            D = o("WAWebWamMsgUtils").getWamMessageType(message);
            t[24] = message;
            t[25] = D;
        } else {
            D = t[25];
        }
        let x;
        if (t[26] !== b || t[27] !== searchOptions || t[28] !== R || t[29] !== L || t[30] !== isNewsletter || t[31] !== D) {
            x = s.jsx(b, {
                searchOptions,
                entryPoint: R,
                stwFormat: L,
                isNewsletter,
                messageType: D
            });
            t[26] = b;
            t[27] = searchOptions;
            t[28] = R;
            t[29] = L;
            t[30] = isNewsletter;
            t[31] = D;
            t[32] = x;
        } else {
            x = t[32];
        }
        const $ = x;
        if (f.size === 1) {
            return v;
        }
        return $;
    }
    function M8Component({ headerSubText, headerText, isSearching, onCancel, onOk }) {
        if (o("WAWebSTWGatingUtils").isSearchTheWebDesignExperimentV1Enabled()) {
            const Component = r("WDSText.react");
            const Component_1 = r("WAWebBox.react");
            const Component_2 = r("WDSText.react");
            const Component_3 = r("WAWebBox.react");
            const Component_4 = r("WDSText.react");
            const Component_5 = r("WAWebBox.react");
            const Component_6 = o("WAWebFlex.react").FlexColumn;
            const Component_7 = o("WAWebConfirmPopup.react").ConfirmPopup;
            return <Component_7 tsNavigationData={{
                surface: "unknown",
                viewName: "search-the-web"
            }} cancelText={r("WAWebFbtCommon")("Cancel")} onCancel={onCancel} okText={o("WAWebSearchTheWebCommonUtils").getModalSearchActionText()} okSpinner={isSearching} okDisabled={isSearching} onOK={onOk}><Component_6 justify="center" align="center">{s.jsx(r("WDSIllustrationWdsPictoWebsearch.react"), {
                testid: "wds-picto-websearch"
            })}<Component_1 xstyle={c.marginTop16}><Component type="Headline2" colorName="contentDefault">{o("WAWebSearchTheWebCommonUtils").getModalTitleText()}</Component></Component_1><Component_3 xstyle={c.marginTop16}><Component_2 type="Body1" colorName="contentDefault" textAlign="center">{headerText}</Component_2></Component_3>{headerSubText != null && <Component_5 xstyle={c.marginTop12}><Component_4 type="Body2" colorName="contentDeemphasized">{headerSubText}</Component_4></Component_5>}</Component_6></Component_7>;
        }
        const Component = r("WDSText.react");
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 tsNavigationData={{
            surface: "unknown",
            viewName: "search-the-web"
        }} title={o("WAWebSearchTheWebCommonUtils").getModalTitleText()} cancelText={r("WAWebFbtCommon")("Cancel")} onCancel={onCancel} okText={o("WAWebSearchTheWebCommonUtils").getModalSearchActionText()} okSpinner={isSearching} okDisabled={isSearching} onOK={onOk}>{headerText}{headerSubText != null && <Component type="Body2" colorName="contentDeemphasized">{headerSubText}</Component>}</Component_1>;
    }
    M8Component.displayName = `${M8Component.name} [from ${i.id}]`;
    l.default = d;
}, 98);