__d("WAWebProcessMessageAssociationMessages", [
    "WALogger",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonSortUtils",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
    "WAWebMessageAssociationValidation",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t) {
        const r = d(e, t);
        const { nonOrphansFromCache, orphans } = r;
        return p(orphans, nonOrphansFromCache);
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e.length !== 0) {
                const n = yield o("WAWebAddonProcessMsgsUtils").queryParentMsgs(e);
                const r = n[0];
                const a = n[1];
                const i = o("WAWebAddonSortUtils").collectValidAndOrphans(a, r);
                const { nonOrphans, orphans } = i;
                const u = nonOrphans.length + orphans.length === e.length;
                if (!u) {
                    throw new (o("WAWebMessageAssociationValidation")).MessageAssociationInfraError(o("WAWebMessageAssociationValidation").MessageAssociationInfraErrorCode.MESSAGE_ASSOCIATIONS_MISMATCH);
                }
                const c = m(orphans, t);
                const { nonOrphansFromCache, orphans: orphans_1 } = c;
                return p(orphans_1, [].concat(nonOrphans, nonOrphansFromCache));
            }
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        const n = [];
        const r = [];
        e.forEach((e)=>{
            if (t.has(e.parentMsgKey.toString())) {
                n.push(e);
            } else {
                r.push(e);
            }
        });
        return {
            orphans: n,
            nonOrphansFromCache: r
        };
    }
    function m(e, t) {
        const n = [];
        const r = [];
        e.forEach((e)=>{
            if (t.has(e.parentMsgKey.toString())) {
                r.push(e);
            } else {
                n.push(e);
            }
        });
        return {
            orphans: n,
            nonOrphansFromCache: r
        };
    }
    function p(t, n) {
        const orphanAssociatedMsgs = [];
        const a = [];
        let i = 0;
        const l = [];
        t.forEach((e)=>{
            const t = o("WAWebAssociationProcessor").getAssociationProcessor(e);
            if (!t) {
                i++;
                if (l.length < 3) {
                    l.push(e.id.toString());
                }
            }
            if (t?.processorType === o("WAWebAssociationProcessorConstants").AssociationProcessorType.WithDetachedMessages) {
                a.push(e);
            } else {
                orphanAssociatedMsgs.push(e);
            }
        });
        if (i > 0) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "classifyAssociatedMsgs: no processor for ",
                " msgs: ",
                ""
            ])), i, l);
        }
        const detachedAssociatedMsgs = a.map((e)=>babelHelpers.extends({}, e, {
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE
            }));
        const u = [].concat(n, detachedAssociatedMsgs);
        const validAssociatedMsgs = new Map;
        u.forEach((e)=>{
            validAssociatedMsgs.set(e.id.toString(), e);
        });
        return {
            orphanAssociatedMsgs,
            validAssociatedMsgs,
            detachedAssociatedMsgs
        };
    }
    l.classifyAssociatedMsgsFromHistorySyncUsingMissingParentsCache = s;
    l.classifyAssociatedMsgsUsingExistingParentsCache = u;
    l.collectOrphansFromMissingParentsCache = d;
    l.collectOrphansFromExistingParentsMessagesCache = m;
    l.classifyAssociatedOrphansNonOrphans = p;
}, 98);