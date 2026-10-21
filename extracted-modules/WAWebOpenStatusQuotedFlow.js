__d("WAWebOpenStatusQuotedFlow", [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebModalManager",
    "WAWebNewsletterGatingUtils",
    "WAWebNoop",
    "WAWebStatusCollection",
    "WAWebStatusQuotedFlowLoadable",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    function d({ rowIndex, rowSection, status }) {
        if (status.isSyntheticFromMetadata !== true) {
            const Component = o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable;
            o("WAWebModalManager").ModalManager.openMedia(<Component status={status} onClose={function() {
                return o("WAWebModalManager").ModalManager.closeMedia();
            }} rowSection={rowSection} rowIndex={rowIndex}/>, {
                transition: "status-modal"
            });
        }
    }
    const m = new Map;
    function p({ newsletterJid, statusModelId }) {
        const l = statusModelId.toString();
        if (m.has(l)) {
            return null;
        }
        if (!o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()) {
            const u = (s || (s = n("Promise"))).resolve().finally(()=>{
                m.delete(l);
            });
            m.set(l, u);
            return u;
        }
        const c = o("WAWebStatusCollection").StatusCollection.get(statusModelId);
        if (c != null) {
            c.isLoading = true;
        }
        const d = r("JSResourceForInteraction")("WAWebNewsletterStatusFetchAction").__setRef("WAWebOpenStatusQuotedFlow").load().then((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield e.fetchNewsletterStatusesAndMyReactions(newsletterJid);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })()).catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter][status] fetch statuses failed ",
                ""
            ])), newsletterJid).catching(r("getErrorSafe")(t)).tags("newsletter", "status").sendLogs("newsletter-status-ensure-load-failed");
        }).finally(()=>{
            m.delete(l);
            const e = o("WAWebStatusCollection").StatusCollection.get(statusModelId);
            if (e != null) {
                e.isLoading = false;
            }
        });
        m.set(l, d);
        return d;
    }
    function _({ event, newsletterJid, rowIndex, rowSection, statusModelId }) {
        if (!(event == null || event.stopPropagation == null)) {
            event.stopPropagation();
        }
        if (!(event == null || event.preventDefault == null)) {
            event.preventDefault();
        }
        p({
            newsletterJid,
            statusModelId
        })?.then(function() {
            const e = o("WAWebStatusCollection").StatusCollection.get(statusModelId);
            if (e != null && f(e)) {
                d({
                    status: e,
                    rowSection,
                    rowIndex
                });
            }
        }).catch(r("WAWebNoop"));
    }
    function f(e) {
        return !e.isSyntheticFromMetadata && e.totalCount > 0;
    }
    l.ensureNewsletterStatusLoaded = p;
    l.fetchAndOpenNewsletterStatus = _;
    l.isStatusOpenable = f;
}, 98);