__d("WAWebUnfollowNewsletterConfirmationModal.react", [
    "fbt",
    "WAWebActionToast.react",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNewsletterUnsubscribeAction",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useState } = c;
    function p(e) {
        return s._("Unfollowing {newsletterName}", [
            s._param("newsletterName", e.name)
        ]);
    }
    function _({ chat, loggingOptions, onClose }) {
        const i = useState(false);
        const l = i[0];
        const c = i[1];
        const _ = useCallback(function() {
            o("WAWebModalManager").ModalManager.close();
            onClose?.();
        }, [
            onClose
        ]);
        const g = useCallback(function() {
            const e = o("WAWebActionToast.react").genId();
            o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                msg: s._("Couldn't unfollow channel"),
                id: e
            }));
        }, []);
        const h = useCallback(function() {
            c(true);
            o("WAWebNewsletterUnsubscribeAction").unsubscribeFromNewsletterAction(chat, babelHelpers.extends({
                deleteLocalModels: false
            }, loggingOptions)).catch(()=>{
                g();
            }).finally(()=>{
                o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                    msg: p(chat),
                    visible: false
                }));
                _();
                c(false);
            });
        }, [
            chat,
            loggingOptions,
            g,
            _
        ]);
        const Component = o("WAWebText.react").WAWebTextTitle;
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 ariaLabel={f(false, chat)} onOK={h} okText={r("WAWebFbtCommon")("Unfollow")} okDisabled={l} cancelDisabled={l} okSpinner={l} onCancel={_} onOverlayClick={_}><Component> {f(true, chat)}</Component></Component_1>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    function f(e, t) {
        const n = e ? u.jsx(o("WAWebName.react").Name, {
            chat: t,
            titlify: true
        }) : t.name;
        return s._("Are you sure you want to unfollow \"{channel_name}\"?", [
            s._param("channel_name", n)
        ]);
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    l.getUnfollowNewsletterAnnouncement = p;
    l.UnfollowNewsletterConfirmationModal = _;
}, 226);