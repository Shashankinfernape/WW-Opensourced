__d("WAWebNewsletterPublicChannelPrivacyNux.react", [
    "fbt",
    "WAWebCommonNewsletterEnums",
    "WAWebCopyPasteSelectable.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebNewsletterFaqUrl",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterPrivacyRow.react",
    "WAWebPhoneNumberPrivacyNux.react",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WDSIconIcPublic.react",
    "WDSIconIcShield.react",
    "WDSIconIcVisibility.react",
    "WDSIconIcVisibilityOff.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        tealColor: {
            color: "x1v5yvga",
            $$css: true
        }
    };
    function d({ chat, userRole }) {
        const isOwner = userRole === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner;
        const l = s._("About this channel");
        const Component = o("WAWebCopyPasteSelectable.react").SelectableLink;
        const d = <Component className="x1ypdohk" id="data-sharing-learn-more-link" onClick={p} selectable>{s._("Guidelines")}</Component>;
        const f = <>{u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
            icon: u.jsx(r("WDSIconIcPublic.react"), {
                iconXstyle: c.tealColor,
                height: 20
            }),
            text: s._("Channels are public, so anyone can find them and see 30 days of history before following."),
            title: isOwner ? s._("Anyone can discover your channel") : s._("Anyone can discover this channel")
        })}<M4Component isOwner={isOwner}/>{u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
            icon: u.jsx(r("WDSIconIcShield.react"), {
                iconXstyle: c.tealColor,
                height: 24,
                width: 24
            }),
            text: isOwner ? s._("Your channel needs to follow our {guidelines_link} and is reviewed against them.", [
                s._param("guidelines_link", d)
            ]) : s._("This channel needs to follow our {guidelines_link} and is reviewed against them.", [
                s._param("guidelines_link", d)
            ]),
            title: isOwner ? s._("You're responsible for your channel") : s._("You're responsible for this channel")
        })}</>;
        const Component_1 = r("WAWebPhoneNumberPrivacyNux.react");
        return <Component_1 cancelText={r("WAWebFbtCommon")("Learn more")} customContent={f} displayName={chat?.name ?? o("WAWebUserPrefsMeUser").getMaybeMeDisplayName()} okText={r("WAWebFbtCommon")("OK")} onCancel={_} onOK={o("WAWebModalManager").closeModalManager} pictureWid={chat?.id} testid="public_channel__newsletter" title={l}/>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    function M4Component(e) {
        const t = o("react-compiler-runtime").c(11);
        const e_isOwner = e.isOwner;
        if (!o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled()) {
            let a;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                a = u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
                    icon: u.jsx(r("WDSIconIcVisibilityOff.react"), {
                        iconXstyle: c.tealColor,
                        height: 20
                    }),
                    text: o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() ? s._("Your phone number, profile picture, name, or username aren't shown to followers.") : s._("Your phone number, profile picture and name aren't shown to followers."),
                    title: s._("People see your channel, not you")
                });
                t[0] = a;
            } else {
                a = t[0];
            }
            return a;
        }
        const I = r(e_isOwner ? "WDSIconIcVisibilityOff.react" : "WDSIconIcVisibility.react");
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() ? s._("Admins for this channel can see your phone number, profile picture, name, or username, but followers can't.") : s._("Admins for this channel can see your phone number, profile picture and name, but followers can't.");
            t[1] = l;
        } else {
            l = t[1];
        }
        const d = l;
        let m;
        if (t[2] !== I) {
            m = <I iconXstyle={c.tealColor} height={20}/>;
            t[2] = I;
            t[3] = m;
        } else {
            m = t[3];
        }
        let p;
        let _;
        if (t[4] !== e_isOwner) {
            p = e_isOwner ? s._("Followers can't see your phone number, profile picture or name, but other admins can.") : d;
            _ = e_isOwner ? s._("People see your channel, not you") : s._("You're visible to other admins");
            t[4] = e_isOwner;
            t[5] = p;
            t[6] = _;
        } else {
            p = t[5];
            _ = t[6];
        }
        let f;
        if (t[7] !== m || t[8] !== p || t[9] !== _) {
            f = u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
                icon: m,
                text: p,
                title: _
            });
            t[7] = m;
            t[8] = p;
            t[9] = _;
            t[10] = f;
        } else {
            f = t[10];
        }
        return f;
    }
    function p() {
        o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl());
    }
    function _() {
        o("WAWebExternalLink.react").openExternalLink(o("WAWebNewsletterFaqUrl").getNewsletterPrivacyFaqUrl());
    }
    l.default = d;
}, 226);