__d("WAWebCagPhoneNumberPrivacyNux.react", [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebPhoneNumberPrivacyNux.react",
    "WAWebPhoneUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        if (e == null) {
            return null;
        }
        const t = o("WAWebUsernameWorkerCompatibleGatingUtils").isUsernameCreationMode();
        const n = t ? s._("Protecting your phone number") : s._("Your phone number is visible in this chat");
        const a = t ? s._("As a community admin, your phone number is visible to members unless you have a username.") : s._("Members can see your phone number because you are a community admin.");
        const Component = r("WAWebPhoneNumberPrivacyNux.react");
        return <Component testid="phone_number_shared_cag_admin" onOK={o("WAWebModalManager").closeModalManager} okText={r("WAWebFbtCommon")("OK")} onCancel={m} cancelText={s._("Learn more")} displayName={o("WAWebPhoneUtils").formatPhone(e.user)} title={n} subTitle={a}/>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    function DComponent() {
        const e = s._("Added privacy for your phone number");
        const t = o("WAWebUsernameWorkerCompatibleGatingUtils").isUsernameCreationMode() ? s._("Your phone number is only visible to community admins if you haven't set a username. Other members can only see your phone number if it was previously saved to their contacts.") : s._("Your phone number is only visible to community admins and people who have saved you as a contact. All other members will not see your full phone number in this chat.");
        const Component = r("WAWebPhoneNumberPrivacyNux.react");
        return <Component testid="phone_number_not_shared_cag_non_admin" onOK={o("WAWebModalManager").closeModalManager} okText={r("WAWebFbtCommon")("OK")} onCancel={m} cancelText={s._("Learn more")} displayName={o("WAWebUserPrefsMeUser").getMaybeMeDisplayName()} title={e} subTitle={t}/>;
    }
    DComponent.displayName = `${DComponent.name} [from ${i.id}]`;
    function m() {
        o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getCagPhoneNumberHidingFaqUrl());
    }
    l.CagPhoneNumberSharedNux = c;
    l.CagPhoneNumberHiddenNux = DComponent;
}, 226);