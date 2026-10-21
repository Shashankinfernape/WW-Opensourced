__d("WAWebContactImportContactVerifier", [
    "WAJids",
    "WALogger",
    "WAWebContactSyncLogger",
    "WAWebPerformanceUtils",
    "WAWebUsync",
    "WAWebUsyncUser",
    "asyncToGeneratorRuntime",
    "isEmptyObject"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const { errorCode: a, logTag: i, requestOrigin: l } = n;
            const u = new (o("WAWebUsync")).USyncQuery().withMode("query").withContext("interactive");
            if (n.withBusinessProtocol === true) {
                u.withBusinessProtocol();
            }
            if (n.withPictureProtocol === true) {
                u.withPictureProtocol();
            }
            if (n.includeVerifiedPhoneJid === true) {
                u.withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.PN).withLidProtocol();
            } else {
                u.withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.LID);
            }
            const c = self.performance.now();
            t.forEach((e)=>{
                u.withUser(new (o("WAWebUsyncUser")).USyncUser().withPhone(e));
            });
            const d = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
                protocols: u.protocols,
                requestedCount: t.length,
                requestOrigin: l,
                syncType: o("WAWebContactSyncLogger").getSyncTypeString("interactive", "query")
            });
            const m = yield o("WAWebContactSyncLogger").contactSyncLogger.executeWithLogging(d, function() {
                return u.execute();
            }, a);
            if (m.error && !r("isEmptyObject")(m.error)) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] USync errors for ",
                    " numbers"
                ])), i, t.length).sendLogs("business-broadcast-contact-verify-errors");
                Object.entries(m.error).forEach(([t, n])=>{});
            }
            const p = o("WAWebPerformanceUtils").getElapsedTimeMs(c);
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] done in ",
                " for ",
                " numbers"
            ])), i, p, t.length);
            if (m.error && m.error.all) {
                o("WAWebContactSyncLogger").contactSyncLogger.logFailure(d, m.error.all.errorCode, m, a);
            } else {
                o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(d, m);
            }
            return m;
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield d(e, babelHelpers.extends({}, t, {
                logTag: "contact-import:contact-verifier",
                withBusinessProtocol: true,
                withPictureProtocol: true
            }));
            const r = {};
            let a = 0;
            if (n.list && n.list.length > 0) {
                n.list.forEach((e)=>{
                    if (!e.id) {
                        a++;
                        return;
                    }
                    const i = e.contact?.content;
                    if (i != null) {
                        const l = e.contact?.type === "in";
                        if (l) {
                            const u = e.id.isLid() ? e.pn : e.id;
                            const c = t.includeVerifiedPhoneJid === true ? y(u) : null;
                            r[i] = babelHelpers.extends({
                                isWhatsAppUser: true,
                                lid: h(e.id, e.lid) ?? void 0
                            }, c != null ? {
                                verifiedPhoneJid: c
                            } : {});
                        } else {
                            r[i] = {
                                isWhatsAppUser: false
                            };
                        }
                    }
                });
            }
            if (a > 0) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[contact-verifier] verifyWhatsAppUsers: ",
                    " no id"
                ])), a).sendLogs("business-broadcast-contact-verify-no-id");
            }
            return r;
        });
        return _.apply(this, arguments);
    }
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield d(e, babelHelpers.extends({}, t, {
                logTag: "contact-import:lid-resolver"
            }));
            const r = {};
            let a = 0;
            if (n.list && n.list.length > 0) {
                n.list.forEach((e)=>{
                    if (!e.id) {
                        a++;
                        return;
                    }
                    const o = e.contact?.content;
                    const i = e.contact?.type === "in";
                    if (i && o != null) {
                        const l = h(e.id, e.lid);
                        if (l != null) {
                            r[o] = l;
                        }
                    }
                });
            }
            if (a > 0) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid-resolver] resolveLidsFromPhones: ",
                    " no id"
                ])), a);
            }
            return r;
        });
        return g.apply(this, arguments);
    }
    function h(e, t) {
        if (e.isLid()) {
            return o("WAJids").toLidUserJid(e.user);
        }
        if (typeof t === "string") {
            return t;
        }
        return null;
    }
    function y(e) {
        if (e == null) {
            return null;
        }
        const t = o("WAJids").interpretAndValidateJid(e.toJid());
        if (t.jidType === "phoneUser") {
            return t.userJid;
        }
        return null;
    }
    l.verifyWhatsAppUsers = p;
    l.resolveLidsFromPhones = f;
}, 98);