__d("WAWebSyncLeadStageToProfile", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebChatCollection",
    "WAWebCustomerManagerGating",
    "WAWebLazyLoadedRetriable",
    "WAWebLidMigrationUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        return r("JSResourceForInteraction")("WAWebCustomerDataFieldSaver").__setRef("WAWebSyncLeadStageToProfile").load();
    }), "CustomerProfileLeadStage");
    function m(e) {
        if (!e.id.isUser()) {
            return null;
        }
        const n = e.accountLid ?? o("WAWebLidMigrationUtils").toUserLid(e.id);
        if (n != null) {
            return o("WAWebWidToJid").widToChatJid(n);
        }
        return null;
    }
    function p(e) {
        const t = o("WAWebWidFactory").createWid(e);
        if (!o("WAWebCustomerManagerGating").isWidEligibleForCustomerFields(t)) {
            return null;
        }
        const n = o("WAWebChatCollection").ChatCollection.get(e);
        if (n != null) {
            return m(n);
        }
        const r = o("WAWebLidMigrationUtils").toUserLid(t);
        if (r != null) {
            return o("WAWebWidToJid").widToChatJid(r);
        }
        return null;
    }
    function _(t, n) {
        if (t == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[customer_manager] lead stage skipped: chat has no LID"
            ]))).sendLogs("lead-stage-customer-profile-no-lid");
            return;
        }
        d().then((e)=>e.upsertLeadStageToProfile(t, n)).catch((e)=>{
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[customer_manager] lead stage customer profile upsert failed"
            ]))).catching(r("getErrorSafe")(e)).sendLogs("lead-stage-customer-profile-upsert-fail");
        });
    }
    function f(e) {
        if (e == null) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[customer_manager] lead stage clear skipped: chat has no LID"
            ]))).sendLogs("lead-stage-customer-profile-no-lid");
            return;
        }
        d().then((t)=>t.clearLeadStageOnProfile(e)).catch((e)=>{
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[customer_manager] lead stage customer profile clear failed"
            ]))).catching(r("getErrorSafe")(e)).sendLogs("lead-stage-customer-profile-clear-fail");
        });
    }
    l.getLeadProfileChatJid = m;
    l.getLeadProfileChatJidForChatJid = p;
    l.syncLeadStageToProfile = _;
    l.clearLeadStageOnProfile = f;
}, 98);