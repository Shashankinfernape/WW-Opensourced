__d("WAWebNewsletterPhoneNumberPrivacyNux.react", [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebNewsletterFaqUrl",
    "WAWebNewsletterPrivacyRow.react",
    "WAWebPhoneNumberPrivacyNux.react",
    "WAWebUserPrefsMeUser",
    "WDSIconIcAccountCircle.react",
    "WDSIconIcDialpad.react",
    "WDSIconIcVisibilityOff.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        tealColor: {
            color: "x1v5yvga",
            $$css: true
        }
    };
    function d() {
        const e = s._("Added privacy for your profile and phone number");
        const t = <>{u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
            icon: u.jsx(r("WDSIconIcVisibilityOff.react"), {
                iconXstyle: c.tealColor,
                height: 20
            }),
            text: s._("Followers can't see when you follow or interact in a channel."),
            title: s._("You're not visible to other followers")
        })}{u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
            icon: u.jsx(r("WDSIconIcDialpad.react"), {
                iconXstyle: c.tealColor,
                height: 20,
                width: 20
            }),
            text: s._("Admins can't see your full phone number, unless they've saved you as a contact."),
            title: s._("Your phone number is protected")
        })}{u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
            icon: u.jsx(r("WDSIconIcAccountCircle.react"), {
                iconXstyle: c.tealColor,
                height: 20
            }),
            text: s._("Admins may also see your profile picture based on your privacy settings."),
            title: s._("Admins can see your profile name")
        })}</>;
        const Component = r("WAWebPhoneNumberPrivacyNux.react");
        return <Component cancelText={r("WAWebFbtCommon")("Learn more")} customContent={t} displayName={o("WAWebUserPrefsMeUser").getMaybeMeDisplayName()} okText={r("WAWebFbtCommon")("OK")} onCancel={m} onOK={o("WAWebModalManager").closeModalManager} testid="phone_number_not_shared_newsletter" title={e}/>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    function m() {
        o("WAWebExternalLink.react").openExternalLink(o("WAWebNewsletterFaqUrl").getNewsletterPrivacyFaqUrl());
    }
    l.default = d;
}, 226);