__d("WAWebReportSpamPopup.react", [
    "fbt",
    "WAWebCheckBox.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebReportGatingUtils",
    "WAWebText.react",
    "WDSMargins.stylex",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useState = u.useState;
    const m = {
        section: {
            display: "x78zum5",
            fontSize: "x1f6kntn",
            lineHeight: "x1fc57z9",
            $$css: true
        },
        border: {
            paddingBottom: "x1ehvx8p",
            borderBottomWidth: "xso031l",
            borderBottomStyle: "x1q0q8m5",
            borderBottomColor: "x120ee7l",
            $$css: true
        },
        mdMetaText: {
            paddingTop: "x1qbkcu5",
            $$css: true
        }
    };
    const Component = o("WAWebExternalLink.react").ExternalLink;
    const p = <Component href={o("WAWebFaqUrl").getBlockingReportingFaqUrl()} testid="learn-more-link">{r("WAWebFbtCommon")("Learn more")}</Component>;
    function _(t) {
        const t_isCommunityAnnouncementGroup = t.isCommunityAnnouncementGroup;
        const a = t_isCommunityAnnouncementGroup === undefined ? false : t_isCommunityAnnouncementGroup;
        const { onReport, showAdditionalActionCheckbox } = t;
        const u = showAdditionalActionCheckbox === undefined ? true : showAdditionalActionCheckbox;
        const _ = u_useState(t.isMessage !== true && t.isCommunity !== true);
        const f = _[0];
        const g = _[1];
        const h = function() {
            g(!f);
        };
        const y = function() {
            if (!u || !f) {
                onReport();
                return;
            }
            if (t.isMessage === true) {
                t.onReportBlock();
                return;
            }
            if (t.isCommunity === true || t.isGroupChat === true) {
                t.onReportExitClear();
            } else {
                t.onReportBlockClear();
            }
        };
        let C;
        let b;
        let v;
        let S;
        if (t.isMessage === true) {
            C = s._("Report {message-sender}?", [
                s._param("message-sender", t.sender)
            ]);
            b = t.isBizBot3p ? s._("Block AI") : s._("Block contact");
            if (o("WAWebReportGatingUtils").isUKOSAReportingEnabled()) {
                v = t.isBizBot3p ? s._("This message will be forwarded to WhatsApp. This AI won't be notified. {link to learn more}", [
                    s._param("link to learn more", p)
                ]) : s._("This message will be forwarded to WhatsApp. This contact won't be notified. {link to learn more}", [
                    s._param("link to learn more", p)
                ]);
            } else {
                v = t.isBizBot3p ? s._("This message will be forwarded to WhatsApp. This AI won't be notified.") : s._("This message will be forwarded to WhatsApp. This contact won't be notified.");
            }
        } else if (t.isCommunity) {
            C = s._("Report this community to WhatsApp?");
            b = r("WAWebFbtCommon")("Exit Community");
            v = s._("No one in this community will be notified.");
        } else if (t.isGroupChat === true) {
            C = s._("Report this group to WhatsApp?");
            b = a ? r("WAWebFbtCommon")("Exit Community") : s._("Exit group and clear chat");
            S = s._("No one in this group will be notified.");
            v = s._("The last 5 messages in this group will be forwarded to WhatsApp.");
        } else if (t.isBusiness === true) {
            C = s._("Report this business to WhatsApp?");
            b = s._("Block business");
            S = s._("This business won't be notified.");
            v = s._("The last 5 messages from this business will be forwarded to WhatsApp.");
        } else if (t.isBizBot3p === true) {
            C = s._("Report this AI to WhatsApp?");
            b = s._("Block AI");
            S = s._("This AI won't be notified.");
            v = o("WAWebReportGatingUtils").isUKOSAReportingEnabled() ? s._("The last 5 messages from this AI will be forwarded to WhatsApp. {link to learn more}", [
                s._param("link to learn more", p)
            ]) : s._("The last 5 messages from this AI will be forwarded to WhatsApp.");
        } else {
            C = s._("Report this contact to WhatsApp?");
            b = s._("Block contact");
            S = s._("This contact won't be notified.");
            v = s._("The last 5 messages from this contact will be forwarded to WhatsApp.");
        }
        const Component = o("WAWebCheckBox.react").CheckBox;
        const R = <div data-testid="menu-icon-report-spam" className="x1rg5ohu x1okw0bk x1uuroth x19991ni x1d8287x xwji4o3 x1sa5p1d"><Component onChange={h} checked={f} id="menu-icon-report-spam"/></div>;
        const L = <label htmlFor="menu-icon-report-spam" className="x98rzlu x19991ni x1d8287x xwji4o3">{b}</label>;
        const E = u && b != null;
        const Component_1 = o("WAWebText.react").WAWebTextMuted;
        const Component_2 = o("WAWebText.react").WAWebTextMuted;
        const Component_3 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_3 tsNavigationData={{
            surface: "unknown",
            viewName: "report-spam"
        }} title={C} onOK={y} okText={s._("Report")} okButtonType="solid-warning" onCancel={t.onCancel}>{E && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.section, o("WDSMargins.stylex").wdsMargins.marginTop12, o("WDSMargins.stylex").wdsMargins.marginEnd0, m.border), {
            children: [
                R,
                L
            ]
        })}/>}<Component_1 xstyle={m.mdMetaText}>{v}</Component_1><Component_2 xstyle={m.mdMetaText}>{S}</Component_2></Component_3>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.default = _;
}, 226);