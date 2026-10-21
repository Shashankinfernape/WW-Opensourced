__d("WAWebAudienceResolver", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastRecipientLimitCommon",
    "WAWebContactImportContactVerifier",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBMessageRange",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebSchemaChat",
    "WAWebSchemaLabelAssociation",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.type === o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_EXPLICIT) {
                return Array.from(new Set(e.userJids));
            }
            if (e.type === o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_PREDICATE) {
                return d(e.predicateType, e.params);
            }
            return [];
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            switch(e){
                case o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_LABEL:
                    return p(t?.labelIds);
                case o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_ALL_CONTACTS:
                    return h();
                case o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_CHATTED_RECENTLY:
                    return v(t?.days ?? 30);
                case o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_NOT_MESSAGED_RECENTLY:
                    return R(t?.days ?? 30);
                default:
                    return [];
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e == null || e.length === 0) {
                return [];
            }
            const t = yield o("WAWebDBLabelAssociationDatabaseApi").queryLabelAssociationsForLabelIds(e);
            const n = new Set;
            for (const a of t){
                if (a.type === o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid) {
                    let i = a.associationId;
                    if (r("WAWebWid").isStringLid(i)) {
                        n.add(i);
                    } else {
                        const l = o("WAWebWidFactory").createWid(i);
                        if (!l.isUser()) {
                            continue;
                        }
                        const s = o("WAWebLidMigrationUtils").toLid(l);
                        if (s != null && r("WAWebWid").isStringLid(s.toString())) {
                            i = s.toString();
                            n.add(i);
                        }
                    }
                }
            }
            return Array.from(n);
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield r("WAWebLidAwareContactsDB").all();
            const n = new Set;
            for (const o of t){
                if ((!e || o.type === "in") && r("WAWebWid").isStringLid(o.id) && !r("WAWebWid").isBot(o.id) && !r("WAWebWid").isPSA(o.id)) {
                    n.add(o.id);
                }
            }
            return n;
        });
        return g.apply(this, arguments);
    }
    function h() {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield f(true);
            return Array.from(e);
        });
        return y.apply(this, arguments);
    }
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const i = o("WATimeUtils").unixTime() - t * o("WATimeUtils").DAY_SECONDS;
            const l = new Set;
            const u = o("WAWebBizBroadcastRecipientLimitCommon").getRecipientLimit();
            const c = yield o("WAWebSchemaChat").getChatTable().all({
                limit: u
            });
            const d = [];
            yield (s || (s = n("Promise"))).all(c.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = o("WAWebWidFactory").createWid(e.id);
                    if (t.isUser()) {
                        const n = yield o("WAWebDBMessageRange").getLastMessageTimestamp(t);
                        if (a(n, i)) {
                            const s = e.accountLid;
                            if (s != null && r("WAWebWid").isStringLid(s)) {
                                l.add(s);
                                return;
                            }
                            const u = o("WAWebLidMigrationUtils").toLid(t);
                            if (u != null && r("WAWebWid").isStringLid(u.toString())) {
                                l.add(u.toString());
                                return;
                            }
                            if (r("WAWebWid").isStringLid(e.id)) {
                                l.add(e.id);
                                return;
                            }
                            const c = t.user;
                            if (c != null) {
                                d.push(c);
                            }
                        }
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            if (d.length > 0) {
                try {
                    const m = yield o("WAWebContactImportContactVerifier").resolveLidsFromPhones(d, {
                        errorCode: o("WAWebContactSyncErrorCodes").BIZ_BROADCAST_VERIFY,
                        requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.BUSINESS_BROADCAST
                    });
                    for (const p of d){
                        const _ = m[p];
                        if (_ != null) {
                            l.add(_);
                        }
                    }
                } catch (error) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:audience-resolver] USync LID resolution failed: ",
                        ""
                    ])), error).sendLogs("audience-resolver-usync-failed");
                }
            }
            return Array.from(l);
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return C(e, function(e, t) {
                return e != null && e >= t;
            });
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return C(e, function(e, t) {
                return e == null || e < t;
            });
        });
        return L.apply(this, arguments);
    }
    l.resolveAudienceExpression = u;
}, 98);