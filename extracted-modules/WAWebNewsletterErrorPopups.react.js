__d("WAWebNewsletterErrorPopups.react", [
    "fbt",
    "WAWebBackendErrors",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFbtIntlList",
    "WAWebModalManager",
    "WAWebNewsletterMetadataGetters",
    "WAWebParticipantListUtils",
    "WAWebText.react",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(6);
        const e_chat = e.chat;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = s._("Update not available");
            t[0] = r;
        } else {
            r = t[0];
        }
        const a = r;
        let i;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("You can follow this channel to see all future updates");
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = i;
        const n_newsletterMetadata = e_chat.newsletterMetadata;
        const d = n_newsletterMetadata != null && o("WAWebNewsletterMetadataGetters").getIsPreview(n_newsletterMetadata);
        const m = d ? a : null;
        const p = d ? l : a;
        let _;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            _ = {
                surface: "unknown",
                viewName: "newsletter-error-unavailable"
            };
            t[2] = _;
        } else {
            _ = t[2];
        }
        let f;
        if (t[3] !== p || t[4] !== m) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            f = <Component title={m} onOK={o("WAWebModalManager").closeModalManager} tsNavigationData={_}>{p}</Component>;
            t[3] = p;
            t[4] = m;
            t[5] = f;
        } else {
            f = t[5];
        }
        return f;
    }
    function d() {
        const e = o("react-compiler-runtime").c(3);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("Update deleted");
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = t;
        let r;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            r = s._("The channel admin deleted this update.");
            e[1] = r;
        } else {
            r = e[1];
        }
        const a = r;
        let i;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            i = <Component title={n} onOK={o("WAWebModalManager").closeModalManager} tsNavigationData={{
                surface: "unknown",
                viewName: "newsletter-error-deleted"
            }}>{a}</Component>;
            e[2] = i;
        } else {
            i = e[2];
        }
        return i;
    }
    function m() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            t = <Component onOK={o("WAWebModalManager").closeModalManager} testid="channel-pin-too-old" tsNavigationData={{
                surface: "unknown",
                viewName: "newsletter-pin-too-old"
            }}>{s._("You can't pin updates that are more than 30 days old.")}</Component>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function p({ error, onOK }) {
        const a = error instanceof o("WAWebBackendErrors").ServerStatusCodeError && (error.status === 404 || error.statusCode === 404);
        const i = a ? s._("This invite has been revoked.") : s._("Couldn't accept the admin invite. Please try again.");
        const Component = o("WAWebText.react").WAWebTextTitle;
        return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, babelHelpers.extends({
            onOK: a ? o("WAWebModalManager").closeModalManager : onOK,
            okText: a ? null : r("WAWebFbtCommon")("Try again")
        }, a ? {} : {
            onCancel: o("WAWebModalManager").closeModalManager
        }, {
            tsNavigationData: {
                surface: "unknown",
                viewName: "newsletter-error-accept-invite"
            },
            children: <Component color="secondary">{i}</Component>
        }));
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _({ contact, onOK }) {
        const a = o("WAWebParticipantListUtils").getFirstNameForContact(contact);
        const i = s._("Couldn't revoke the admin invite for {contact-revoke-name}. Please try again.", [
            s._param("contact-revoke-name", a)
        ]);
        const Component = o("WAWebText.react").WAWebTextTitle;
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 onOK={onOK} onCancel={o("WAWebModalManager").closeModalManager} okText={r("WAWebFbtCommon")("Try again")} tsNavigationData={{
            surface: "unknown",
            viewName: "newsletter-error-revoke-invite"
        }}><Component color="secondary">{i}</Component></Component_1>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    function f({ contact, onOK }) {
        const a = o("WAWebParticipantListUtils").getFirstNameForContact(contact);
        const i = o("WAWebUserPrefsMeUser").isMeAccount(contact.id) ? s._("Couldn't dismiss yourself as admin. Please try again.") : s._("Couldn't dismiss {contact-revoke-name} as admin. Please try again.", [
            s._param("contact-revoke-name", a)
        ]);
        const Component = o("WAWebText.react").WAWebTextTitle;
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 onOK={onOK} onCancel={o("WAWebModalManager").closeModalManager} okText={r("WAWebFbtCommon")("Try again")} tsNavigationData={{
            surface: "unknown",
            viewName: "newsletter-error-dismiss-admin"
        }}><Component color="secondary">{i}</Component></Component_1>;
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    const g = 4;
    function h({ contactList, numberOfSuccessfulInvites, onOk }) {
        const i = s._("_j{\"*\":\"{number-of-overflow-failed-invitees} others\",\"_1\":\"1 other\"}", [
            s._plural(contactList.length - (g - 1), "number-of-overflow-failed-invitees")
        ]);
        const l = contactList.map((e, n)=>{
            if (n === g - 1 && contactList.length > g) {
                return i.toString();
            }
            return o("WAWebParticipantListUtils").getFirstNameForContact(e);
        }).slice(0, g);
        const c = r("WAWebFbtIntlList")(l, r("WAWebFbtIntlList").CONJUNCTIONS.AND, r("WAWebFbtIntlList").DELIMITERS.COMMA);
        const d = numberOfSuccessfulInvites > 0 ? s._("_j{\"*\":\"Only {number-of-successful-invites} invites were sent. Couldn't send invites to {localized-failed-invites-lists}.\",\"_1\":\"Only {number-of-successful-invites} invite was sent. Couldn't send invites to {localized-failed-invites-lists}.\"}", [
            s._plural(numberOfSuccessfulInvites),
            s._param("number-of-successful-invites", numberOfSuccessfulInvites),
            s._param("localized-failed-invites-lists", c)
        ]) : s._("Couldn't send invites to {localized-failed-invites-lists}.", [
            s._param("localized-failed-invites-lists", c)
        ]);
        const Component = o("WAWebText.react").WAWebTextTitle;
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 onOK={onOk} onCancel={o("WAWebModalManager").closeModalManager} okText={r("WAWebFbtCommon")("Try again")} tsNavigationData={{
            surface: "unknown",
            viewName: "newsletter-error-send-invite-list"
        }}><Component color="secondary">{d}</Component></Component_1>;
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    l.NewsletterMessageNotFoundPopup = c;
    l.NewsletterMessageDeletedPopup = d;
    l.NewsletterPinTooOldPopup = m;
    l.NewsletterCouldNotAcceptInvitePopup = p;
    l.NewsletterCouldNotRevokeInvitePopup = _;
    l.NewsletterCouldNotDismissAdminPopup = f;
    l.NewsletterCouldNotSendInviteListPopup = h;
}, 226);