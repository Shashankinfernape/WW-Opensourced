__d("WAWebMuseInitiatorNotice", [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebLazyLoadedRetriable",
    "WAWebModalManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = r("WAWebLazyLoadedRetriable")(function() {
        return r("JSResourceForInteraction")("WAWebMuseInitiatorNoticeModal.react").__setRef("WAWebMuseInitiatorNotice").load();
    }, "MuseInitiatorNoticeModal");
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = o("WAWebBotTosIds").getMuseGroupInitiatorNoticeId();
            if (t == null) {
                return false;
            }
            try {
                yield f();
                if (o("WAWebBotTos").hasAcceptedMuseGroupTos()) {
                    return true;
                }
                const A = yield m();
                if (yield o("WAWebModalManager").ModalManager.existsAsync()) {
                    return yield new (u || (u = n("Promise")))(function(onClosed) {
                        o("WAWebModalManager").ModalManager.openSupportModal(<A noticeId={Number(t)} onClosed={onClosed}/>);
                    });
                }
                return false;
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[MuseInitiatorNotice] failed to confirm the notice"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("muse-initiator-notice-confirm-failed");
                return false;
            }
        });
        return _.apply(this, arguments);
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                yield o("WAPromiseTimeout").promiseTimeout(o("WAWebBotTos").refreshMuseGroupTosNotices(), o("WAWebBotTos").GROUP_NOTICE_CONFIRMATION_TIMEOUT_MS, "Muse group notice refresh timed out");
            } catch (error) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[MuseInitiatorNotice] notice stage refresh failed: ",
                    ""
                ])), String(error));
            }
        });
        return g.apply(this, arguments);
    }
    l.confirmMuseInitiatorNotice = p;
}, 98);