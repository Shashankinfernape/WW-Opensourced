__d("WAWebMultiSearchModal.react", [
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebSTWGatingUtils",
    "WAWebSearchTheWebCommonUtils",
    "WAWebSearchTheWebEventLogger",
    "WAWebText.react",
    "WAWebWamEnumStwInteraction",
    "WDSIllustrationWdsPictoWebsearch.react",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        marginTop16: {
            marginTop: "x98l61r",
            $$css: true
        },
        marginTop12: {
            marginTop: "x1de0gy",
            $$css: true
        },
        marginBottom20: {
            marginBottom: "xdqhqc9",
            $$css: true
        }
    };
    function c({ entryPoint, isNewsletter, messageType, searchOptions, stwFormat }) {
        let t;
        const d = searchOptions.get((t = o("WAWebSearchTheWebCommonUtils")).SearchType.TEXT);
        const m = searchOptions.get(t.SearchType.IMAGE);
        const p = searchOptions.get(t.SearchType.URL);
        const _ = t.getModalHeaderText({
            entryPoint,
            isNewsletter,
            messageType,
            stwFormat
        });
        const f = t.getModalHeaderSubtext();
        const g = function() {
            o("WAWebSearchTheWebEventLogger").logSTWEvent({
                stwEntryPoint: entryPoint,
                stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION.STW_DISMISSED,
                stwFormat,
                messageType
            });
            o("WAWebModalManager").ModalManager.close();
        };
        const h = [];
        if (p != null) {
            const Component = o("WAWebSearchTheWebCommonUtils").SearchModalRow;
            h.push(<Component key="stw-url-search" onSearchClick={function() {
                p.handleSearchAction({
                    stwEntryPoint: entryPoint,
                    stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION.LINK_SEARCH_CLICKED,
                    stwFormat,
                    messageType
                });
            }} searchType={o("WAWebSearchTheWebCommonUtils").SearchType.URL}/>);
        }
        if (m != null) {
            const Component = o("WAWebSearchTheWebCommonUtils").SearchModalRow;
            h.push(<Component key="stw-image-search" onSearchClick={function() {
                m.handleSearchAction({
                    stwEntryPoint: entryPoint,
                    stwFormat,
                    stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION.IMAGE_SEARCH_CLICKED,
                    messageType
                });
            }} searchType={o("WAWebSearchTheWebCommonUtils").SearchType.IMAGE}/>);
        }
        if (d != null) {
            const Component = o("WAWebSearchTheWebCommonUtils").SearchModalRow;
            h.push(<Component key="stw-text-search" onSearchClick={function() {
                d.handleSearchAction({
                    stwEntryPoint: entryPoint,
                    stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION.TEXT_SEARCH_CLICKED,
                    stwFormat,
                    messageType
                });
            }} searchType={o("WAWebSearchTheWebCommonUtils").SearchType.TEXT}/>);
        }
        if (o("WAWebSTWGatingUtils").isSearchTheWebDesignExperimentV1Enabled()) {
            const Component = o("WAWebText.react").WAWebTextLarge;
            const Component_1 = o("WAWebText.react").WAWebTextTitle;
            const Component_2 = o("WAWebText.react").WAWebTextMuted;
            const Component_3 = o("WAWebFlex.react").FlexColumn;
            const Component_4 = o("WAWebConfirmPopup.react").ConfirmPopup;
            return <Component_4 tsNavigationData={{
                surface: "unknown",
                viewName: "multi-search"
            }} cancelText={r("WAWebFbtCommon")("Cancel")} onCancel={g}><Component_3 justify="center" align="center">{s.jsx(r("WDSIllustrationWdsPictoWebsearch.react"), {
                testid: "wds-picto-websearch"
            })}<Component xstyle={u.marginTop16}>{o("WAWebSearchTheWebCommonUtils").getModalTitleText()}</Component><Component_1 textAlign="center" xstyle={u.marginTop16}>{_}</Component_1>{f != null && <Component_2 xstyle={[
                u.marginTop12,
                u.marginBottom20
            ]}>{f}</Component_2>}</Component_3>{h}</Component_4>;
        }
        const Component = o("WAWebText.react").WAWebTextTitle;
        const Component_1 = o("WAWebText.react").WAWebTextMuted;
        const Component_2 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_2 tsNavigationData={{
            surface: "unknown",
            viewName: "multi-search"
        }} title={o("WAWebSearchTheWebCommonUtils").getModalTitleText()} cancelText={r("WAWebFbtCommon")("Cancel")} onCancel={g}><Component paddingBottom={8}>{_}</Component>{!isNewsletter && <Component_1>{f}</Component_1>}{h}</Component_2>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 98);