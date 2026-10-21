__d("WAWebSaveContactAction", [
    "WACustomError",
    "WALogger",
    "WAPromiseDelays",
    "WAWebBackendErrors",
    "WAWebContactCollection",
    "WAWebContactEditSync",
    "WAWebContactSyncApi",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebContactSyncUtils",
    "WAWebContactUtils",
    "WAWebHandleUsernameSync",
    "WAWebLidMigrationUtils",
    "WAWebNetworkStatus",
    "WAWebUsernameTypes",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "cr:27664",
    "err",
    "getErrorSafe",
    "gkx",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    const h = n("cr:27664") == null ? undefined : n("cr:27664").debugConfigs;
    const y = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "NetworkUnavailable";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                return yield t();
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ""
                ])), e).catching(r("getErrorSafe")(error)).sendLogs(e);
                throw error;
            }
        });
        return b.apply(this, arguments);
    }
    function v() {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (h != null && h.delaySaveMs) {
                yield o("WAPromiseDelays").delayMs(h.delaySaveMs);
            }
            if (h != null && h.simulateErrorOnSaveOrDeleteContact) {
                const e = h.simulateErrorOnSaveOrDeleteContact;
                h.simulateErrorOnSaveOrDeleteContact = null;
                switch(e){
                    case "USYNC":
                        throw new (o("WAWebBackendErrors")).ServerStatusCodeError(1);
                    case "NETWORK":
                        throw new y;
                    case "CLIENT":
                        throw r("err")("Client error");
                }
            }
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { firstName, isConvertingContactType, lastName } = e;
            if (!r("gkx")("26258")) {
                yield v();
            }
            if (!r("WAWebNetworkStatus").online) {
                throw new y;
            }
            const s = [];
            if (e.phoneNumber != null) {
                const { phoneNumber, prevPhoneNumber } = e;
                s.push({
                    type: "add",
                    phoneNumber
                });
                if (prevPhoneNumber != null && prevPhoneNumber !== phoneNumber) {
                    s.push({
                        type: "delete",
                        contact: yield C("companion-contact-client-error-save-create-user-wid-prev-pn-usync", function() {
                            return o("WAWebWidFactory").createUserWidOrThrow(prevPhoneNumber);
                        })
                    });
                }
            } else {
                s.push({
                    type: "add_username",
                    lid: e.lid,
                    username: e.username
                });
            }
            const g = o("WAWebContactSyncUtils").constructUsyncDeltaQuery(s);
            const h = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
                syncType: o("WAWebContactSyncLogger").getSyncTypeString("interactive", "delta"),
                requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.CONTACT_SAVE,
                requestedCount: s.length,
                protocols: g.protocols
            });
            const b = yield o("WAWebContactSyncLogger").contactSyncLogger.executeWithLogging(h, function() {
                return g.execute();
            }, o("WAWebContactSyncErrorCodes").SAVE_CONTACT);
            const S = b.error.all || b.error.contact;
            if (S) {
                o("WAWebContactSyncLogger").contactSyncLogger.logFailure(h, S.errorCode, b, o("WAWebContactSyncErrorCodes").SAVE_CONTACT);
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(S.errorCode, S.errorText);
            }
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(h, b);
            const R = b.list?.length ?? 0;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[saveContactAction] usyncListSize=",
                " "
            ])), R);
            try {
                yield o("WAWebContactSyncApi").handleLidSync(b);
            } catch (error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[saveContactAction] handleLidSync err:",
                    ""
                ])), error).sendLogs("save-contact-handle-lid-sync-error");
                throw error;
            }
            try {
                yield o("WAWebHandleUsernameSync").handleUsernameSync(b);
            } catch (error) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[saveContactAction] handleUsernameSync err:",
                    ""
                ])), error).sendLogs("save-contact-handle-username-sync-error");
                throw error;
            }
            try {
                if (b.list) {
                    yield o("WAWebContactSyncApi").markContactsSyncCompleted(r("compactMap")(b.list, function(e) {
                        if (e.id instanceof r("WAWebWid")) {
                            return e.id;
                        }
                        return null;
                    }));
                }
            } catch (error) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[saveContactAction] markContactsSyncCompleted e:",
                    ""
                ])), error).sendLogs("save-contact-mark-sync-completed-error");
                throw error;
            }
            const L = firstName && lastName ? `${firstName} ${lastName}` : firstName || lastName;
            if (e.phoneNumber != null) {
                const E = yield C("companion-contact-client-error-save-create-user-wid-pn-syncd", function() {
                    return o("WAWebWidFactory").createUserWidOrThrow(e.phoneNumber);
                });
                const k = e.lid;
                if (isConvertingContactType === true && k && !r("isStringNullOrEmpty")(e.username)) {
                    const I = o("WAWebUsernameTypes").asUsername(e.username);
                    yield C("companion-contact-client-error-save-syncd-send-username-contact-delete", function() {
                        return o("WAWebContactEditSync").sendUsernameContactDelete(k, I);
                    });
                }
                yield C("companion-contact-client-error-save-syncd-send-contact-update", function() {
                    return o("WAWebContactEditSync").sendContactUpdate({
                        contactId: E,
                        fullName: L,
                        lid: e.lid ?? o("WAWebLidMigrationUtils").toUserLid(E),
                        shortName: firstName || lastName,
                        syncToAddressbook: e.syncToAddressbook,
                        username: e.username
                    });
                });
            } else {
                if (isConvertingContactType === true && !r("isStringNullOrEmpty")(e.pn)) {
                    const T = e.pn;
                    const D = yield C("companion-contact-client-error-save-create-user-wid-pn-converting", function() {
                        return o("WAWebWidFactory").createUserWidOrThrow(T);
                    });
                    yield C("companion-contact-client-error-save-syncd-send-contact-delete-converting", function() {
                        return o("WAWebContactEditSync").sendContactDelete(D);
                    });
                }
                if (r("isStringNullOrEmpty")(e.username)) {
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[saveContactAction] username-only save missing username"
                    ]))).sendLogs("save-contact-username-only-missing-username");
                    return;
                }
                const x = o("WAWebUsernameTypes").asUsername(e.username);
                yield C("companion-contact-client-error-save-syncd-send-username-contact-update", function() {
                    return o("WAWebContactEditSync").sendUsernameContactUpdate(e.lid, L, firstName || lastName, x);
                });
                const { prevLid, prevUsername } = e;
                if (prevLid != null && !prevLid.equals(e.lid) && !r("isStringNullOrEmpty")(prevUsername)) {
                    yield C("companion-contact-client-error-save-syncd-send-username-contact-delete-prev-lid", function() {
                        return o("WAWebContactEditSync").sendUsernameContactDelete(prevLid, o("WAWebUsernameTypes").asUsername(prevUsername));
                    });
                    const N = o("WAWebContactCollection").ContactCollection.get(prevLid);
                    if (N != null) {
                        o("WAWebContactUtils").setContactNotMine(N);
                    }
                }
            }
            if (e.prevPhoneNumber != null && e.prevPhoneNumber !== e.phoneNumber) {
                const M = e.prevPhoneNumber;
                const w = yield C("companion-contact-client-error-save-create-user-wid-prev-pn-syncd", function() {
                    return o("WAWebWidFactory").createUserWidOrThrow(M);
                });
                yield C("companion-contact-client-error-save-syncd-send-contact-delete-prev-pn", function() {
                    return o("WAWebContactEditSync").sendContactDelete(w);
                });
                const A = o("WAWebContactCollection").ContactCollection.get(w);
                if (A != null) {
                    o("WAWebContactUtils").setContactNotMine(A);
                }
            }
        });
        return L.apply(this, arguments);
    }
    function E(e, t) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = []) {
            if (!r("gkx")("26258")) {
                yield v();
            }
            if (!r("WAWebNetworkStatus").online) {
                throw new y;
            }
            if (!(e.length === 0 && t.length === 0)) {
                const n = [].concat(e.map((e)=>({
                        type: "add",
                        phoneNumber: e.phoneNumber
                    })), t.map((e)=>({
                        type: "add_username",
                        lid: e.lid,
                        username: e.username
                    })));
                const a = o("WAWebContactSyncUtils").constructUsyncDeltaQuery(n);
                const i = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
                    syncType: o("WAWebContactSyncLogger").getSyncTypeString("interactive", "delta"),
                    requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.CONTACT_SAVE,
                    requestedCount: n.length,
                    protocols: a.protocols
                });
                const l = yield o("WAWebContactSyncLogger").contactSyncLogger.executeWithLogging(i, function() {
                    return a.execute();
                }, o("WAWebContactSyncErrorCodes").SAVE_CONTACT_BATCH);
                const s = l.error.all || l.error.contact;
                if (s) {
                    o("WAWebContactSyncLogger").contactSyncLogger.logFailure(i, s.errorCode, l, o("WAWebContactSyncErrorCodes").SAVE_CONTACT_BATCH);
                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(s.errorCode, s.errorText);
                }
                o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l);
                try {
                    yield o("WAWebContactSyncApi").handleLidSync(l);
                } catch (error) {
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[saveContactBatchAction] handleLidSync err:",
                        ""
                    ])), error).sendLogs("save-contact-batch-handle-lid-sync-error");
                    throw error;
                }
                try {
                    yield o("WAWebHandleUsernameSync").handleUsernameSync(l);
                } catch (error) {
                    o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[saveContactBatchAction] handleUsernameSync err:",
                        ""
                    ])), error).sendLogs("save-contact-batch-handle-username-sync-error");
                    throw error;
                }
                try {
                    if (l.list) {
                        yield o("WAWebContactSyncApi").markContactsSyncCompleted(r("compactMap")(l.list, function(e) {
                            if (e.id instanceof r("WAWebWid")) {
                                return e.id;
                            }
                            return null;
                        }));
                    }
                } catch (error) {
                    o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[saveContactBatchAction] markContactsSyncCompleted e:",
                        ""
                    ])), error).sendLogs("save-contact-batch-mark-contacts-sync-completed-error");
                    throw error;
                }
                if (e.length > 0) {
                    const u = e.map(T);
                    yield C("companion-contact-client-error-save-batch-syncd-send-contact-update", function() {
                        return o("WAWebContactEditSync").sendContactUpdateBatch(u);
                    });
                }
                if (t.length > 0) {
                    yield C("companion-contact-client-error-save-batch-syncd-send-username-contact-update", function() {
                        return o("WAWebContactEditSync").sendUsernameContactUpdateBatch(t.map(I));
                    });
                }
            }
        });
        return k.apply(this, arguments);
    }
    function I(e) {
        const t = e.firstName.trim();
        const n = e.lastName.trim();
        return {
            lid: e.lid,
            fullName: t && n ? `${t} ${n}` : t || n,
            firstName: t,
            username: o("WAWebUsernameTypes").asUsername(e.username)
        };
    }
    function T(t) {
        const shortName = t.firstName.trim();
        const a = t.lastName.trim();
        const i = shortName && a ? `${shortName} ${a}` : shortName || a;
        let l;
        try {
            l = o("WAWebWidFactory").createUserWidOrThrow(t.phoneNumber);
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[saveContactBatchAction] createUserWid err"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("companion-contact-client-error-save-batch-create-user-wid");
            throw error;
        }
        const s = o("WAWebLidMigrationUtils").toUserLid(l);
        return {
            contactId: l,
            fullName: i,
            shortName,
            syncToAddressbook: t.syncToAddressbook,
            lid: s
        };
    }
    l.NetworkUnavailable = y;
    l.runOrSendClientErrorLogs = C;
    l._runDebugContactAction = v;
    l.saveContactAction = R;
    l.saveContactBatchAction = E;
}, 98);