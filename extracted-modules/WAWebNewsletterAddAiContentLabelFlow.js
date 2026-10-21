__d("WAWebNewsletterAddAiContentLabelFlow", [
    "fbt",
    "Promise",
    "WAJids",
    "WAWebActionToast.react",
    "WAWebFbtCommon",
    "WAWebFrontendMsgGetters",
    "WAWebNetworkStatus",
    "WAWebNewsletterAddAiContentLabelAction",
    "WAWebNewsletterAiContentInfoModalOpener",
    "WAWebNewsletterAiContentInfoModalTypes",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "err",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, i = o("WAWebActionToast.react").genId()) {
            const l = o("WAWebFrontendMsgGetters").getChat(t);
            const u = o("WAJids").toNewsletterJid(l.id.toJid());
            const t_serverId = t.serverId;
            const p = t_serverId != null ? o("WAWebNewsletterAddAiContentLabelAction").WAWebNewsletterAddAiContentLabelAction(u, t_serverId.toString(), a) : (e || (e = n("Promise"))).resolve(false);
            const _ = s._("Please wait a moment");
            const f = s._("AI content label added");
            const g = s._("Label not added.");
            const h = new (o("WAWebActionToast.react")).ActionType(_);
            const y = p.then((e)=>{
                if (e === true) {
                    return new (o("WAWebActionToast.react")).ActionType(f);
                }
                throw r("err")("Label not added");
            }).catch(()=>new (o("WAWebActionToast.react")).ActionType(g, {
                    actionText: r("WAWebFbtCommon")("Try again"),
                    actionHandler: function() {
                        return d(t, a, i);
                    }
                }));
            return o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
                id: i,
                initialAction: h,
                pendingAction: y
            }));
        });
        return m.apply(this, arguments);
    }
    function p(t, a, i = o("WAWebActionToast.react").genId()) {
        const l = s._("Check your internet connection");
        const u = new (o("WAWebActionToast.react")).ActionType(l, {
            actionText: r("WAWebFbtCommon")("Try again"),
            actionHandler: function() {
                if (r("WAWebNetworkStatus").online) {
                    return d(t, a, i);
                }
                p(t, a, i);
                return (e || (e = n("Promise"))).resolve();
            }
        });
        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
            id: i,
            initialAction: u,
            pendingAction: (e || (e = n("Promise"))).resolve(u)
        }));
    }
    function _(e, { onClose: t_onClose } = {}) {
        const i = e.isNewsletterStatus === true ? "STATUS" : "MESSAGE";
        o("WAWebNewsletterAiContentInfoModalOpener").openAiContentInfoModal(o("WAWebNewsletterAiContentInfoModalTypes").AiContentModalVariant.ADMIN_CONFIRMATION, {
            onClose: t_onClose,
            onConfirm: function() {
                if (!r("WAWebNetworkStatus").online) {
                    p(e, i);
                    return;
                }
                d(e, i);
            }
        });
    }
    l.runAddAiContentLabelFlow = _;
}, 226);