__d("WAWebMetaAiOpenGroupNux", [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebCriticalEventWamEvent",
    "WAWebErrorBoundary.react",
    "WAWebGroupAgentNonInitiatorNux",
    "WAWebHttpErrors",
    "WAWebLazyLoadedRetriable",
    "WAWebModalManager",
    "WAWebNullFunc",
    "WAWebUserDisclosureCollection",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = "META_AI_OPEN_GROUP_NUX_ENTERED_GROUPS";
    const _ = "meta_ai_open_group_nux_missing_notice_id";
    let f = null;
    let g = false;
    const h = new Set;
    const y = r("WAWebLazyLoadedRetriable")(function() {
        return r("JSResourceForInteraction")("WAWebMetaAiOpenGroupNuxModal.react").__setRef("WAWebMetaAiOpenGroupNux").load();
    }, "MetaAiOpenGroupNuxModal");
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield v(e);
            yield o("WAWebGroupAgentNonInitiatorNux").maybeShowGroupAgentNonInitiatorNux(e);
        });
        return b.apply(this, arguments);
    }
    function v(t, a) {
        if (f != null) {
            return f;
        }
        if (!R(t)) {
            return (c || (c = n("Promise"))).resolve();
        }
        const i = Number(o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId());
        if (h.has(i)) {
            return (c || (c = n("Promise"))).resolve();
        }
        var l = L(i, a).catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[MetaAiOpenGroupNux] failed to show the NUX"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("meta-ai-open-group-nux-failed");
        }).finally(()=>{
            if (f === l) {
                f = null;
            }
        });
        f = l;
        return l;
    }
    function S(e) {
        const t = e.id.toString();
        if (D().includes(t)) {
            return (c || (c = n("Promise"))).resolve();
        }
        return v(e, function() {
            return x(t);
        });
    }
    function R(e) {
        if (!e.id.isGroup() || e.groupMetadata?.isOpenBotGroup !== true || !o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled()) {
            return false;
        }
        if (o("WAWebBotTosIds").getMetaAiOpenGroupNoticeId() == null) {
            T();
            return false;
        }
        return !o("WAWebBotTos").hasAcceptedMetaAiOpenGroupNotice();
    }
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(noticeId, t) {
            yield o("WAWebBotTos").refreshMetaAiOpenGroupNotice();
            if (!o("WAWebBotTos").hasAcceptedMetaAiOpenGroupNotice() && (yield k(noticeId))) {
                const R = yield y();
                if (!(yield o("WAWebModalManager").ModalManager.existsAsync())) {
                    yield new (c || (c = n("Promise")))(function(n) {
                        const a = function(t) {
                            n();
                            o("WAWebModalManager").closeModalManager();
                        };
                        const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
                        o("WAWebModalManager").ModalManager.open(<Component fallback={o("WAWebNullFunc").returnNull} name="meta-ai-open-group-nux" onError={a}>{<R noticeId={noticeId} onClosed={n} onLoadFailed={function() {
                            h.add(noticeId);
                        }}/>}</Component>);
                        t?.();
                    });
                }
            }
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                if ((yield o("WAWebUserDisclosureCollection").UserDisclosureCollection.find(e.toString())) != null) {
                    return true;
                }
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[MetaAiOpenGroupNux] notice ",
                    " failed to load"
                ])), e).sendLogs("meta-ai-open-group-nux-notice-load-failed");
            } catch (error) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[MetaAiOpenGroupNux] notice ",
                    " failed to load"
                ])), e).catching(r("getErrorSafe")(error)).sendLogs("meta-ai-open-group-nux-notice-load-failed");
                if (error instanceof o("WAWebHttpErrors").HttpNetworkError) {
                    return false;
                }
            }
            h.add(e);
            return false;
        });
        return I.apply(this, arguments);
    }
    function T() {
        if (!g) {
            g = true;
            new (o("WAWebCriticalEventWamEvent")).CriticalEventWamEvent({
                name: _
            }).commit();
        }
    }
    function D() {
        const e = r("WAWebUserPrefsStore").getUser(p);
        if (Array.isArray(e)) {
            return e.filter((e)=>typeof e === "string");
        }
        return [];
    }
    function x(e) {
        const t = D();
        if (!t.includes(e)) {
            r("WAWebUserPrefsStore").setUser(p, [].concat(t, [
                e
            ]));
        }
    }
    l.maybeShowGroupAgentNuxes = C;
    l.maybeShowMetaAiOpenGroupNux = v;
    l.maybeShowMetaAiOpenGroupNuxAtFirstEntry = S;
    l.isMetaAiOpenGroupNuxOwed = R;
}, 98);