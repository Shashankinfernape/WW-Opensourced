__d("WAWebNewsletterDeleteChatJob", [
    "Promise",
    "WALogger",
    "WAWebChatDeleteBridge",
    "WAWebNewsletterDeleteMessageAddOns",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaNewsletterMetadata",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("deleteNewsletterChat", function() {
            if (t.isNewsletter()) {
                return o("WAWebChatDeleteBridge").deleteFromStorage(t);
            }
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[deleteNewsletterChat] non-newsletter chat delete ✗"
            ]))).tags("newsletter").sendLogs("delete-non-newsletter-chat");
            return (s || (s = n("Promise"))).resolve();
        }).waitUntilCompleted();
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.map((e)=>e.toJid());
            yield (s || (s = n("Promise"))).all(e.map((e)=>o("WAWebNewsletterDeleteMessageAddOns").deleteNewsletterMessageAddOns(e)));
            yield s.all(e.map((e)=>o("WAWebChatDeleteBridge").deleteFromStorage(e)));
            yield o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().bulkRemove(t);
        });
        return d.apply(this, arguments);
    }
    l.deleteNewsletterChat = u;
    l.bulkDeleteNewsletterChats = c;
}, 98);