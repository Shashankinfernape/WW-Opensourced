__d("WAWebReportPopupBase.react", [
    "fbt",
    "WAWebBlocklistUtils",
    "WAWebBox.react",
    "WAWebCheckBox.react",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "WDSText.react",
    "react",
    "stylex",
    "useWAWebToggle"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        marginInline6: {
            marginInlineStart: "xdzw4kq",
            marginInlineEnd: "xbelrpt",
            marginLeft: null,
            marginRight: null,
            $$css: true
        },
        marginTop6: {
            marginTop: "x1k70j0n",
            $$css: true
        }
    };
    function m(e = false, t) {
        if (e) {
            return s._("Block AI");
        }
        return s._("Block {contact}", [
            s._param("contact", t)
        ]);
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    function p({ isBizBot3p, isBusiness, isCommunityAnnouncementGroup, isGroup }) {
        if (isBizBot3p) {
            return s._("This AI won't be able to message or call you.");
        }
        if (isBusiness) {
            return s._("This business won't be able to message or call you.");
        }
        if (isGroup && !isCommunityAnnouncementGroup && o("WAWebBlocklistUtils").isRBIForGroupsEnabled()) {
            return s._("This person won't be able to message or call you. You'll still see each other's messages in groups.");
        }
        return s._("This person won't be able to message or call you.");
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _({ additionalActionLabelText, additionalActionSubText, hasAdditionalAction, onCancel, onSendReport, onSendReportAndAdditionalAction, reportSubText, type }) {
        const f = r("useWAWebToggle")(false);
        const g = f[0];
        const h = f[1];
        const y = function() {
            if (g) {
                onSendReportAndAdditionalAction();
            } else {
                onSendReport();
            }
        };
        const C = s._("Report to WhatsApp");
        const Component = r("WDSText.react");
        const Component_1 = r("WAWebBox.react");
        const Component_2 = o("WAWebCheckBox.react").CheckBox;
        const Component_3 = o("WAWebFlex.react").FlexColumn;
        const Component_4 = r("WDSText.react");
        const Component_5 = r("WDSText.react");
        const Component_6 = r("WAWebBox.react");
        const Component_7 = o("WAWebFlex.react").FlexColumn;
        const Component_8 = o("WAWebFlex.react").FlexRow;
        const Component_9 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_9 onOK={y} okText={r("WAWebFbtCommon")("Report")} okButtonType="solid-warning" onCancel={onCancel ?? o("WAWebModalManager").closeModalManager} title={C} tsNavigationData={{
            surface: "report",
            viewName: "report"
        }} type={type}><Component_1><Component type="Body2" colorName="contentDeemphasized">{reportSubText}</Component></Component_1>{hasAdditionalAction && <Component_8 xstyle={o("WDSMargins.stylex").wdsMargins.marginTop20}><Component_3 xstyle={[
            d.marginInline6,
            o("WDSPaddings.stylex").wdsPaddings.paddingTop2
        ]}><Component_2 onChange={h} checked={g} id="additional-action-checkbox" tabIndex={0}/></Component_3><Component_7 xstyle={o("WDSMargins.stylex").wdsMargins.marginStart12}><label data-testid="report-popup-additional-action-label-text" htmlFor="additional-action-checkbox"><Component_4 type="Body2Emphasized" colorName="contentDefault" testid="report-popup-additional-action-label">{additionalActionLabelText}</Component_4></label><Component_6 xstyle={d.marginTop6} testid="report-popup-additional-action-subtext"><Component_5 type="Body2" colorName="contentDeemphasized">{additionalActionSubText}</Component_5></Component_6></Component_7><div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginVer12))}/></Component_8>}</Component_9>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.getBlockLabelText = m;
    l.getBlockSubText = p;
    l.ReportPopupBase = _;
}, 226);