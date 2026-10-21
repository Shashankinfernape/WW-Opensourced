__d("WAWebHandleBusinessRemoval", [
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebHandleBusinessNameChangeLidHelpers",
    "WAWebLidAwareContactsDB",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.toString();
            const n = yield r("WAWebLidAwareContactsDB").get(t);
            if (n != null) {
                n.isBusiness = false;
                n.verifiedLevel = 0;
                n.verifiedName = "";
                return r("WAWebLidAwareContactsDB").merge(t, n);
            }
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        return e.remove(t.isLid() ? t.toString() : t.user);
    }
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            yield o("WAWebHandleBusinessNameChangeLidHelpers").removeVerifiedNameFromTableLidAware(e);
            yield o("WAWebBackendApi").frontendSendAndReceive("applyBusinessRemoval", {
                wid: o("WAWebWidToJid").widToUserJid(e)
            });
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.type !== "remove_hash") {
                throw r("err")("Invalid notification type");
            }
            const t = yield o("WAWebApiContact").getContactRecordByHash(e.hash);
            if (t == null) {
                return false;
            }
            const n = o("WAWebWidFactory").createUserWidOrThrow(t.id);
            yield c(n, e.stanzaId, e.ts);
            return true;
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.type !== "remove_jid") {
                throw r("err")("Invalid notification type");
            }
            yield c(e.jid, e.stanzaId, e.ts);
        });
        return f.apply(this, arguments);
    }
    l.removeBusinessPropsFromContact = e;
    l.removeVerifiedName = u;
    l.handleBusinessRemoval = c;
    l.handleBusinessRemovalNotificationHash = m;
    l.handleBusinessRemovalNotificationContact = _;
}, 98);