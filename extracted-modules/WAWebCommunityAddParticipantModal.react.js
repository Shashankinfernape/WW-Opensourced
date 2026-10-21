__d("WAWebCommunityAddParticipantModal.react", [
    "fbt",
    "WAWebCommunityGatingUtils",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WDSIconIcGroup.react",
    "WDSIconIcNotifications.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = {
        paddingBottom15: {
            paddingBottom: "xr1496l",
            $$css: true
        },
        paddingTop15: {
            paddingTop: "xqy66fx",
            $$css: true
        }
    };
    const m = {
        border: {
            borderBottomWidth: "xso031l",
            borderBottomStyle: "x1q0q8m5",
            borderBottomColor: "x120ee7l",
            $$css: true
        },
        iconContainer: {
            width: "x1247r65",
            $$css: true
        },
        tealLighterColor: {
            color: "x1v5yvga",
            $$css: true
        }
    };
    function p(t) {
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { contacts, onCancel, onOK } = a;
        const p = s._("_j{\"*\":\"Add {number} people to community?\",\"_1\":\"Add 1 person to community?\"}", [
            s._plural(contacts.length, "number")
        ]);
        const _ = o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled() ? s._("They will be added to the community, and its announcement group.") : s._("They will be added to the community, its announcement group, and its general member chat.");
        const f = s._("They can join or request to join other groups in the community.");
        const Component = o("WAWebFlex.react").FlexContainer;
        const Component_1 = o("WAWebFlex.react").FlexItem;
        const Component_2 = o("WAWebFlex.react").FlexRow;
        const Component_3 = o("WAWebFlex.react").FlexContainer;
        const Component_4 = o("WAWebFlex.react").FlexItem;
        const Component_5 = o("WAWebFlex.react").FlexRow;
        const Component_6 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_6 cancelText={r("WAWebFbtCommon")("Cancel")} okText={s._("Add")} onCancel={onCancel} onOK={onOK} ref={t_ref} title={p}><Component_2 align="center" xstyle={[
            m.border,
            d.paddingBottom15
        ]}><Component align="center" direction="horizontal" grow={0} justify="center" shrink={0} xstyle={m.iconContainer}>{c.jsx(r("WDSIconIcNotifications.react"), {
            height: 18,
            iconXstyle: m.tealLighterColor,
            width: 18
        })}</Component><Component_1 grow={1}>{_}</Component_1></Component_2><Component_5 align="center" xstyle={d.paddingTop15}><Component_3 align="center" direction="horizontal" grow={0} justify="center" shrink={0} xstyle={m.iconContainer}>{c.jsx(r("WDSIconIcGroup.react"), {
            height: 24,
            iconXstyle: m.tealLighterColor,
            width: 24
        })}</Component_3><Component_4>{f}</Component_4></Component_5></Component_6>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.CommunityAddParticipantModal = p;
}, 226);