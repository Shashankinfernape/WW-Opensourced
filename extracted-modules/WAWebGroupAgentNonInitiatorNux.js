__d("WAWebGroupAgentNonInitiatorNux", [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotStaticProfiles",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebBotUtils",
    "WAWebErrorBoundary.react",
    "WAWebLazyLoadedRetriable",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebNullFunc",
    "WAWebResolveGroupAgentParticipants",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    let d = false;
    let m = null;
    const p = r("WAWebLazyLoadedRetriable")(function() {
        return r("JSResourceForInteraction")("WAWebGroupAgentNonInitiatorNuxModal.react").__setRef("WAWebGroupAgentNonInitiatorNux").load();
    }, "GroupAgentNonInitiatorNuxModal");
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield C(e, "modal", r("WAWebNoop"));
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield m;
            const t = yield (s || (s = n("Promise"))).all(e.map(E));
            const r = e.find((e, n)=>t[n]);
            if (r != null) {
                yield y(r);
            }
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        const t = m;
        if (t != null) {
            return t;
        }
        const r = new (s || (s = n("Promise")))(function(t) {
            C(e, "support", t).then((e)=>{
                if (!e) {
                    t();
                }
            });
        }).finally(()=>{
            m = null;
        });
        m = r;
        return r;
    }
    function C(e, t, n) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a) {
            const i = o("WAWebBotTosIds").getMuseGroupNonInitiatorNoticeId();
            if (d || i == null) {
                return false;
            }
            d = true;
            const l = function() {
                L();
                a();
            };
            try {
                const s = yield v(t, Number(i), n, l);
                if (!s) {
                    L();
                }
                return s;
            } catch (error) {
                L();
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[GroupAgentNonInitiatorNux] failed to show the NUX"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("group-agent-non-initiator-nux-failed");
                return false;
            }
        });
        return b.apply(this, arguments);
    }
    function v(e, t, n, r) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, noticeId, modalManagerType, r) {
            if (!(yield E(e)) || (yield o("WAWebBotTos").refreshMuseGroupTosNotices(), o("WAWebBotTos").hasAcceptedMuseGroupTos())) {
                return false;
            }
            const A = yield p();
            const i = yield o("WAWebModalManager").ModalManager.existsAsync();
            const l = function() {
                r();
                R(modalManagerType);
            };
            const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
            const s = <Component fallback={o("WAWebNullFunc").returnNull} name="group-agent-non-initiator-nux" onError={l}>{<A modalManagerType={modalManagerType} noticeId={noticeId} onClosed={r}/>}</Component>;
            if (modalManagerType === "support") {
                if (i) {
                    o("WAWebModalManager").ModalManager.openSupportModal(s, {
                        blockClose: true
                    });
                    return true;
                }
                return false;
            }
            if (i) {
                return false;
            }
            o("WAWebModalManager").ModalManager.open(s);
            return true;
        });
        return S.apply(this, arguments);
    }
    function R(modalManagerType) {
        if (modalManagerType === "support") {
            o("WAWebModalManager").ModalManager.closeSupportModal();
        } else {
            o("WAWebModalManager").closeModalManager();
        }
    }
    function L() {
        d = false;
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const e_groupMetadata = e.groupMetadata;
            if (!e.id.isGroup() || e.isCAG() || e_groupMetadata == null || !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() || o("WAWebBotTosIds").getMuseGroupNonInitiatorNoticeId() == null || o("WAWebBotTos").hasAcceptedMuseGroupTos()) {
                return false;
            }
            const n = [];
            e_groupMetadata.participants.forEach((e)=>{
                if (I(e.id)) {
                    n.push(e.id);
                }
            });
            return o("WAWebResolveGroupAgentParticipants").hasMuseNoticeGroupAgent(n);
        });
        return k.apply(this, arguments);
    }
    function I(e) {
        return e.isBot() && !o("WAWebBotUtils").isAnyMetaAiBot(e) && !o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e) && !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e) && !o("WAWebBotStaticProfiles").isStaticProfile(e);
    }
    l.maybeShowGroupAgentNonInitiatorNux = _;
    l.maybeShowGroupAgentNonInitiatorNuxForForward = g;
    l.isGroupAgentNonInitiatorNuxOwed = E;
}, 98);