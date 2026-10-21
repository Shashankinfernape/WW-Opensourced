__d("WAWebNewsletterLearnMoreModal.react", [
    "WAWebConfirmPopup.react",
    "WAWebEnforcementActionLogging",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebNewsletterModalsUtils.react",
    "WAWebText.react",
    "react",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        icon: {
            backgroundColor: "x177rmbs",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            color: "x1rlzvk7",
            $$css: true
        },
        textCenter: {
            textAlign: "x2b8uid",
            $$css: true
        },
        paddingAll24: {
            paddingTop: "xl7twdi",
            paddingInlineEnd: "xyo0t3i",
            paddingBottom: "xvg22vi",
            paddingInlineStart: "xb0esv5",
            $$css: true
        }
    };
    function c(e) {
        o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
            r("WAWebEnforcementActionLogging").logDismissModalClick();
        });
        const { Icon, paragraphs, sections, title } = e;
        const Component = o("WAWebFlex.react").FlexRow;
        const Component_1 = o("WAWebText.react").WAWebTextLarge;
        const Component_2 = o("WAWebFlex.react").FlexRow;
        const Component_3 = o("WAWebFlex.react").FlexColumn;
        const Component_4 = o("WAWebFlex.react").FlexColumn;
        const Component_5 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_5 okText={r("WAWebFbtCommon")("Close")} onOK={o("WAWebModalManager").closeModalManager}>{Icon != null && <Component align="center" justify="center">{<Icon width={48} height={48} xstyle={[
            u.paddingAll24,
            u.icon
        ]}/>}</Component>}<Component_2 align="center" justify="center" padding={24} testid="popup-title"><Component_1 weight="medium" color="primary">{title}</Component_1></Component_2><Component_3 align="center" justify="center">{paragraphs?.map(function(e) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            return <Component key={e.key} color="primary" paddingBottom={16} xstyle={u.textCenter}>{e.content()}</Component>;
        })}</Component_3><Component_4 align="center" justify="start">{sections?.map(function(e) {
            const Component = o("WAWebText.react").WAWebTextSectionTitle;
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            return <Component_1 key={e.key}>{e.title != null && <Component color="primary" paddingBottom={16}>{e.title()}</Component>}{s.jsx(o("WAWebNewsletterModalsUtils.react").BulletPointList, {
                bullets: e.bullets
            })}</Component_1>;
        })}</Component_4></Component_5>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 98);