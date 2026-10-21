__d("WAWebNewsletterAcceptAdminInviteModal.react", [
    "fbt",
    "WAWeb-moment",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebNewsletterAcceptAdminInviteAction",
    "WAWebNewsletterErrorPopups.react",
    "WAWebNewsletterModalsUtils.react",
    "WAWebNewsletterName.react",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    const d = {
        expirationDate: {
            textAlign: "x2b8uid",
            $$css: true
        },
        marginBottom12: {
            marginBottom: "xcytdqz",
            $$css: true
        }
    };
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WAWebModalManager").ModalManager.close();
            yield _(e);
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                yield o("WAWebNewsletterAcceptAdminInviteAction").acceptNewsletterAdminInviteAction(e.id);
                o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("You're now an admin")
                }));
                o("WAWebModalManager").ModalManager.close();
            } catch (error) {
                const Component = o("WAWebNewsletterErrorPopups.react").NewsletterCouldNotAcceptInvitePopup;
                o("WAWebModalManager").ModalManager.open(<Component onOK={function() {
                    return m(e);
                }} error={r("getErrorSafe")(error)}/>, {
                    transition: "modal-flow"
                });
            }
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        const t = o("react-compiler-runtime").c(20);
        const { chat, expiration, extendedNux } = e;
        let l;
        if (t[0] !== chat) {
            l = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield _(chat);
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[0] = chat;
            t[1] = l;
        } else {
            l = t[1];
        }
        const s = l;
        let c;
        if (t[2] !== chat) {
            c = function() {
                o("WAWebModalManager").ModalManager.close();
                o("WAWebCmd").Cmd.openChatBottom({
                    chat,
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterAdminInviteAcceptModal
                });
            };
            t[2] = chat;
            t[3] = c;
        } else {
            c = t[3];
        }
        const m = c;
        let p;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            p = C.acceptInvite();
            t[4] = p;
        } else {
            p = t[4];
        }
        let f;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            f = C.closeModal();
            t[5] = f;
        } else {
            f = t[5];
        }
        let g;
        if (t[6] !== chat) {
            g = <H4Component chat={chat}/>;
            t[6] = chat;
            t[7] = g;
        } else {
            g = t[7];
        }
        let b;
        if (t[8] !== extendedNux) {
            b = <Y4Component extendedNux={extendedNux}/>;
            t[8] = extendedNux;
            t[9] = b;
        } else {
            b = t[9];
        }
        let v;
        if (t[10] !== expiration) {
            v = C.expiration(expiration);
            t[10] = expiration;
            t[11] = v;
        } else {
            v = t[11];
        }
        let S;
        if (t[12] !== v) {
            const Component = o("WAWebText.react").WAWebTextSmall;
            S = <Component marginTop={20} xstyle={d.expirationDate}>{v}</Component>;
            t[12] = v;
            t[13] = S;
        } else {
            S = t[13];
        }
        let R;
        if (t[14] !== m || t[15] !== s || t[16] !== g || t[17] !== b || t[18] !== S) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            R = <Component okText={p} onOK={s} cancelText={f} onCancel={m}>{g}{b}{S}</Component>;
            t[14] = m;
            t[15] = s;
            t[16] = g;
            t[17] = b;
            t[18] = S;
            t[19] = R;
        } else {
            R = t[19];
        }
        return R;
    }
    function H4Component(e) {
        const t = o("react-compiler-runtime").c(8);
        const e_chat = e.chat;
        let r;
        if (t[0] !== e_chat.id) {
            r = u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: e_chat.id,
                size: o("WAWebDetailImage.react").DetailImageSize.Medium,
                xstyle: d.marginBottom12
            });
            t[0] = e_chat.id;
            t[1] = r;
        } else {
            r = t[1];
        }
        let a;
        if (t[2] !== e_chat) {
            const Component = o("WAWebText.react").WAWebTextLarge;
            a = <Component as="h1" xstyle={d.marginBottom12}>{u.jsx(o("WAWebNewsletterName.react").NewsletterName, {
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
            i = <Component>{C.subtitle()}</Component>;
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
    function Y4Component(e) {
        const t = o("react-compiler-runtime").c(1);
        const e_extendedNux = e.extendedNux;
        if (!e_extendedNux) {
            return null;
        }
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebFlex.react").FlexColumn;
            r = <Component align="center" justify="center">{u.jsx(o("WAWebNewsletterModalsUtils.react").BulletPointList, {
                bullets: o("WAWebNewsletterModalsUtils.react").ExtendedBullets
            })}</Component>;
            t[0] = r;
        } else {
            r = t[0];
        }
        return r;
    }
    var C = {
        acceptInvite: function() {
            return s._("Accept invite");
        },
        closeModal: function() {
            return s._("View channel");
        },
        expiration: function(t) {
            const e = r("WAWeb-moment").utc(t * 1000);
            const n = e.diff(r("WAWeb-moment")().utc(), "days");
            if (n < 0) {
                return s._("Expired");
            }
            return s._("_j{\"*\":\"Expires in {number} days\",\"_1\":\"Expires in 1 day\"}", [
                s._plural(n, "number")
            ]);
        },
        subtitle: function() {
            return s._("Channel admin invite");
        }
    };
    l.default = g;
}, 226);