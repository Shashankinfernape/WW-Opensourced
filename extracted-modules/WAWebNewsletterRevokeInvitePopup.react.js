__d("WAWebNewsletterRevokeInvitePopup.react", [
    "fbt",
    "WAWebCommonNewsletterStrings",
    "WAWebConfirmPopup.react",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebNewsletterErrorPopups.react",
    "WAWebNewsletterName.react",
    "WAWebParticipantListUtils",
    "WAWebRevokeNewsletterAdminInviteAction",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    const d = {
        buttonGroup: {
            justifyContent: "xl56j7k",
            $$css: true
        }
    };
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, contact }) {
            const a = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    o("WAWebModalManager").closeModalManager();
                    yield m({
                        chat,
                        contact
                    });
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            try {
                yield o("WAWebRevokeNewsletterAdminInviteAction").revokeNewsletterAdminInviteAction(chat, contact);
                o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("Invite revoked")
                }));
                o("WAWebModalManager").closeModalManager();
            } catch (e) {
                const Component = o("WAWebNewsletterErrorPopups.react").NewsletterCouldNotRevokeInvitePopup;
                o("WAWebModalManager").ModalManager.open(<Component onOK={a} contact={contact}/>, {
                    transition: "modal-flow"
                });
            }
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(16);
        const { chat, contact } = e;
        let i;
        if (t[0] !== chat || t[1] !== contact) {
            i = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield m({
                        chat,
                        contact
                    });
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[0] = chat;
            t[1] = contact;
            t[2] = i;
        } else {
            i = t[2];
        }
        const l = i;
        let c;
        if (t[3] !== contact) {
            c = o("WAWebParticipantListUtils").getFirstNameForContact(contact);
            t[3] = contact;
            t[4] = c;
        } else {
            c = t[4];
        }
        const d = c;
        let p;
        if (t[5] !== d) {
            p = s._("Revoke the admin invite for {contact-name}?", [
                s._param("contact-name", d)
            ]);
            t[5] = d;
            t[6] = p;
        } else {
            p = t[6];
        }
        const _ = p;
        let f;
        if (t[7] !== d) {
            f = s._("If you revoke the invite, {contact-name} won't be able to use it to become an admin of this channel.", [
                s._param("contact-name", d)
            ]);
            t[7] = d;
            t[8] = f;
        } else {
            f = t[8];
        }
        const g = f;
        let h;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            h = o("WAWebCommonNewsletterStrings").getRevokeButtonFullText();
            t[9] = h;
        } else {
            h = t[9];
        }
        let y;
        if (t[10] !== g) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            y = <Component color="secondary">{g}</Component>;
            t[10] = g;
            t[11] = y;
        } else {
            y = t[11];
        }
        let C;
        if (t[12] !== l || t[13] !== y || t[14] !== _) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            C = <Component title={_} onOK={l} onCancel={o("WAWebModalManager").closeModalManager} okText={h}>{y}</Component>;
            t[12] = l;
            t[13] = y;
            t[14] = _;
            t[15] = C;
        } else {
            C = t[15];
        }
        return C;
    }
    function F5Component(e) {
        const t = o("react-compiler-runtime").c(8);
        const e_chat = e.chat;
        let r;
        if (t[0] !== e_chat.id) {
            r = u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: e_chat.id,
                size: o("WAWebDetailImage.react").DetailImageSize.Medium,
                xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom12,
                showOutline: true
            });
            t[0] = e_chat.id;
            t[1] = r;
        } else {
            r = t[1];
        }
        let a;
        if (t[2] !== e_chat) {
            const Component = o("WAWebText.react").WAWebTextLarge;
            a = <Component as="h1" xstyle={o("WDSMargins.stylex").wdsMargins.marginBottom12}>{u.jsx(o("WAWebNewsletterName.react").NewsletterName, {
                chat: e_chat,
                checkmarkLarge: true
            })}</Component>;
            t[2] = e_chat;
            t[3] = a;
        } else {
            a = t[3];
        }
        let i;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextSmall;
            i = <Component>{s._("Channel admin invite")}</Component>;
            t[4] = i;
        } else {
            i = t[4];
        }
        let l;
        if (t[5] !== r || t[6] !== a) {
            const Component = o("WAWebFlex.react").FlexColumn;
            l = <Component align="center" marginBottom={12}>{r}{a}{i}</Component>;
            t[5] = r;
            t[6] = a;
            t[7] = l;
        } else {
            l = t[7];
        }
        return l;
    }
    function g(e) {
        const t = o("react-compiler-runtime").c(10);
        const { chat, contact } = e;
        let i;
        if (t[0] !== chat || t[1] !== contact) {
            i = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield m({
                        chat,
                        contact
                    });
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[0] = chat;
            t[1] = contact;
            t[2] = i;
        } else {
            i = t[2];
        }
        const l = i;
        let s;
        if (t[3] !== chat) {
            s = <F5Component chat={chat}/>;
            t[3] = chat;
            t[4] = s;
        } else {
            s = t[4];
        }
        const c = s;
        let p;
        let buttonGroupStyle;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            p = o("WAWebCommonNewsletterStrings").getRevokeButtonFullText();
            buttonGroupStyle = [
                d.buttonGroup,
                o("WDSPaddings.stylex").wdsPaddings.padding0
            ];
            t[5] = p;
            t[6] = buttonGroupStyle;
        } else {
            p = t[5];
            buttonGroupStyle = t[6];
        }
        let g;
        if (t[7] !== l || t[8] !== c) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            g = <Component title={c} onOK={l} onCancel={o("WAWebModalManager").closeModalManager} okText={p} buttonGroupStyle={buttonGroupStyle}/>;
            t[7] = l;
            t[8] = c;
            t[9] = g;
        } else {
            g = t[9];
        }
        return g;
    }
    l.NewsletterRevokeInvitePopupWithContactName = _;
    l.NewsletterRevokeInvitePopupWithNewsletterInformation = g;
}, 226);