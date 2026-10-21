__d("WAWebOrgBridgeApi", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebOrgCollection",
    "WAWebOrgContactCollection",
    "WAWebOrgContactProjection",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        return r("JSResourceForInteraction")("WAWebBootstrapOrgDirectory").__setRef("WAWebOrgBridgeApi").load();
    }), "OrgDirectoryBootstrap");
    const d = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        return r("JSResourceForInteraction")("WAWebOrgBackgroundSyncAction").__setRef("WAWebOrgBridgeApi").load();
    }), "OrgBackgroundSync");
    const m = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        return r("JSResourceForInteraction")("WAWebOrgRequestContactAction").__setRef("WAWebOrgBridgeApi").load();
    }), "OrgRequestContactAction");
    const p = {
        applyOrgContactRows,
        applyOrgRows,
        bootstrapOrgs: function() {
            c().then((e)=>e.bootstrapOrgs()).catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-directory] bootstrap failed"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("org-directory-bootstrap-failed");
            });
        },
        markOrgContactsChecked: function({ lids }) {
            m().then((t)=>t.markOrgContactsChecked(lids)).catch((e)=>{
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-directory] could not record notified people"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("org-contacts-checked-failed");
            });
        },
        syncOrgsInBackground: function(t) {
            d().then((e)=>e.syncOrgsInBackground(t)).catch((e)=>{
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-directory] background sync failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("org-background-sync-failed");
            });
        }
    };
    var _ = new Set;
    function f(e) {
        e.forEach((e)=>_.add(e));
    }
    function g() {
        _ = new Set;
    }
    function applyOrgRows({ isFullList, rows }) {
        const r = L();
        if (isFullList) {
            const a = new Set(rows.map((e)=>e.orgId));
            const i = o("WAWebOrgCollection").OrgCollection.getModelsArray().filter((e)=>!a.has(e.id));
            if (i.length > 0) {
                o("WAWebOrgCollection").OrgCollection.remove(i);
                const l = i.map((e)=>e.id);
                o("WAWebOrgContactCollection").OrgContactCollection.notifyApplied(l, S(new Set(l)));
            }
        }
        o("WAWebOrgCollection").OrgCollection.addRows(rows);
        if (!E(r, L())) {
            R();
        }
    }
    function applyOrgContactRows(e) {
        const t = e.lids.flatMap((e)=>Object.keys(o("WAWebOrgContactCollection").OrgContactCollection.get(e)?.orgMetadata ?? {}));
        v(e);
        o("WAWebOrgContactCollection").OrgContactCollection.notifyApplied([].concat(t, e.rows.map((e)=>e.orgId)), e.lids);
    }
    function C({ createModels, lids, orgId, rows }) {
        const i = new Set(lids);
        const l = o("WAWebOrgContactCollection").OrgContactCollection.getOrgContactsForOrg(orgId).filter((e)=>!i.has(e.id));
        const s = L();
        l.forEach((e)=>o("WAWebOrgContactCollection").OrgContactCollection.applyAttrs(o("WAWebOrgContactProjection").withoutOrgMemberships(o("WAWebOrgContactCollection").toOrgContactAttrs(e), new Set([
                orgId
            ]), s)));
        v({
            createModels,
            lids,
            rows
        });
        o("WAWebOrgContactCollection").OrgContactCollection.notifyApplied([
            orgId
        ].concat(rows.map((e)=>e.orgId)), [].concat(lids, l.map((e)=>e.id)));
    }
    function b({ orgId }) {
        const n = o("WAWebOrgContactCollection").OrgContactCollection.getOrgContactsForOrg(orgId);
        S(new Set([
            orgId
        ]));
        o("WAWebOrgContactCollection").OrgContactCollection.notifyApplied([
            orgId
        ], n.map((e)=>e.id));
    }
    function v({ createModels, lids, rows }) {
        const a = L();
        const i = o("WAWebOrgContactProjection").groupOrgContactRowsByLid(rows);
        lids.forEach((e)=>{
            const r = o("WAWebOrgContactProjection").projectOrgContact(e, i.get(e) ?? [], a);
            const l = o("WAWebOrgContactCollection").OrgContactCollection.get(e) != null;
            if (l || createModels && Object.keys(r.orgMetadata).length > 0) {
                o("WAWebOrgContactCollection").OrgContactCollection.applyAttrs(r, {
                    silent: !_.has(e)
                });
            }
        });
    }
    function S(e) {
        const t = L();
        const n = o("WAWebOrgContactCollection").OrgContactCollection.getModelsArray().filter((t)=>Object.keys(t.orgMetadata).some((t)=>e.has(t)));
        n.forEach((n)=>o("WAWebOrgContactCollection").OrgContactCollection.applyAttrs(o("WAWebOrgContactProjection").withoutOrgMemberships(o("WAWebOrgContactCollection").toOrgContactAttrs(n), e, t)));
        return n.map((e)=>e.id);
    }
    function R() {
        const e = L();
        o("WAWebOrgContactCollection").OrgContactCollection.getModelsArray().forEach((t)=>o("WAWebOrgContactCollection").OrgContactCollection.applyAttrs(o("WAWebOrgContactProjection").reorderOrgContactAttrs(o("WAWebOrgContactCollection").toOrgContactAttrs(t), e)));
    }
    function L() {
        return o("WAWebOrgCollection").OrgCollection.getOrderedOrgs().map((e)=>e.id);
    }
    function E(e, t) {
        return e.length === t.length && e.every((e, n)=>e === t[n]);
    }
    l.OrgBridgeApi = p;
    l.noteOrgContactsRequested = f;
    l.resetOrgContactRequests = g;
    l.applyOrgRows = applyOrgRows;
    l.applyOrgContactRows = applyOrgContactRows;
    l.applyOrgDirectory = C;
    l.removeOrgContacts = b;
}, 98);