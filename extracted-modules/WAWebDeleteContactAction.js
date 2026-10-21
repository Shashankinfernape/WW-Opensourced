__d("WAWebDeleteContactAction", [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebContactCollection",
    "WAWebContactEditSync",
    "WAWebContactSyncApi",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebContactSyncUtils",
    "WAWebContactUtils",
    "WAWebFrontendContactGetters",
    "WAWebHandleUsernameSync",
    "WAWebNetworkStatus",
    "WAWebSaveContactAction",
    "WAWebUsernameTypes",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
    "gkx"
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
    let h;
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!r("gkx")("26258")) {
                yield o("WAWebSaveContactAction")._runDebugContactAction();
            }
            if (!r("WAWebNetworkStatus").online) {
                throw new (o("WAWebSaveContactAction")).NetworkUnavailable;
            }
            const a = e.phoneNumber || e.lid;
            const i = o("WAWebContactSyncUtils").constructUsyncDeltaQuery([
                {
                    type: "delete",
                    contact: a
                }
            ]);
            const l = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
                syncType: o("WAWebContactSyncLogger").getSyncTypeString("interactive", "delta"),
                requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.CONTACT_MUTATION_CONTACT_DELETE,
                requestedCount: 1,
                protocols: i.protocols
            });
            const _ = yield o("WAWebContactSyncLogger").contactSyncLogger.executeWithLogging(l, function() {
                return i.execute();
            }, o("WAWebContactSyncErrorCodes").DELETE_CONTACT);
            const f = _.error.all || _.error.contact;
            if (f) {
                o("WAWebContactSyncLogger").contactSyncLogger.logFailure(l, f.errorCode, _, o("WAWebContactSyncErrorCodes").DELETE_CONTACT);
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(f.errorCode, f.errorText);
            }
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(l, _);
            const g = _.list?.length ?? 0;
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[deleteContactAction] usyncListSize=",
                ""
            ])), g);
            try {
                yield o("WAWebContactSyncApi").handleLidSync(_);
            } catch (error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[deleteContactAction] handleLidSync err:",
                    ""
                ])), error).sendLogs("delete-contact-handle-lid-sync-error");
                throw error;
            }
            try {
                yield o("WAWebHandleUsernameSync").handleUsernameSync(_);
            } catch (error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[deleteContactAction] handleUsernameSync err:",
                    ""
                ])), error).sendLogs("delete-contact-handle-username-sync-error");
                throw error;
            }
            try {
                if (_.list) {
                    yield o("WAWebContactSyncApi").markContactsSyncCompleted(r("compactMap")(_.list, function(e) {
                        if (e.id instanceof r("WAWebWid")) {
                            return e.id;
                        }
                        return null;
                    }));
                }
            } catch (error) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[deleteContactAction] markContactsSyncCompleted err:",
                    ""
                ])), error).sendLogs("delete-contact-mark-sync-completed-error");
                throw error;
            }
            const h = o("WAWebContactCollection").ContactCollection.get(a);
            if (!h || !o("WAWebFrontendContactGetters").getIsMyContact(h)) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[deleteContactAction] Contact is already deleted"
                ])));
                return;
            }
            o("WAWebContactUtils").setContactNotMine(h);
            if (e.lid) {
                const y = e.lid;
                const C = o("WAWebUsernameTypes").asMaybeUsername(e.username);
                if (C == null) {
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[deleteContactAction] LID delete missing username"
                    ]))).sendLogs("delete-contact-lid-missing-username");
                    return;
                }
                yield o("WAWebSaveContactAction").runOrSendClientErrorLogs("companion-contact-client-error-delete-syncd-send-username-contact-delete", function() {
                    return o("WAWebContactEditSync").sendUsernameContactDelete(y, C);
                });
            } else {
                const b = e.phoneNumber;
                yield o("WAWebSaveContactAction").runOrSendClientErrorLogs("companion-contact-client-error-delete-syncd-send-contact-delete", function() {
                    return o("WAWebContactEditSync").sendContactDelete(b);
                });
            }
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!r("gkx")("26258")) {
                yield o("WAWebSaveContactAction")._runDebugContactAction();
            }
            if (!r("WAWebNetworkStatus").online) {
                throw new (o("WAWebSaveContactAction")).NetworkUnavailable;
            }
            const t = e.map(S);
            const n = o("WAWebContactSyncUtils").constructUsyncDeltaQuery(t.map((e)=>({
                    type: "delete",
                    contact: e
                })));
            const a = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
                syncType: o("WAWebContactSyncLogger").getSyncTypeString("interactive", "delta"),
                requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.CONTACT_MUTATION_CONTACT_DELETE,
                requestedCount: t.length,
                protocols: n.protocols
            });
            const i = yield o("WAWebContactSyncLogger").contactSyncLogger.executeWithLogging(a, function() {
                return n.execute();
            }, o("WAWebContactSyncErrorCodes").DELETE_CONTACT_BATCH);
            const l = i.error.all || i.error.contact;
            if (l) {
                o("WAWebContactSyncLogger").contactSyncLogger.logFailure(a, l.errorCode, i, o("WAWebContactSyncErrorCodes").DELETE_CONTACT_BATCH);
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(l.errorCode, l.errorText);
            }
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(a, i);
            try {
                yield o("WAWebContactSyncApi").handleLidSync(i);
            } catch (error) {
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[deleteContactBatchAction] handleLidSync err:",
                    ""
                ])), error).sendLogs("delete-contact-batch-handle-lid-sync-error");
                throw error;
            }
            try {
                yield o("WAWebHandleUsernameSync").handleUsernameSync(i);
            } catch (error) {
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[deleteContactBatchAction] handleUsernameSync err:",
                    ""
                ])), error).sendLogs("delete-contact-batch-handle-username-sync-error");
                throw error;
            }
            try {
                if (i.list) {
                    yield o("WAWebContactSyncApi").markContactsSyncCompleted(r("compactMap")(i.list, function(e) {
                        if (e.id instanceof r("WAWebWid")) {
                            return e.id;
                        }
                        return null;
                    }));
                }
            } catch (error) {
                o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[deleteContactBatchAction] markContactsSyncCompleted err:",
                    ""
                ])), error).sendLogs("delete-contact-batch-mark-sync-completed-error");
                throw error;
            }
            const s = [];
            let u = 0;
            const c = t.filter((e)=>{
                const t = o("WAWebContactCollection").ContactCollection.get(e);
                if (!t || !o("WAWebFrontendContactGetters").getIsMyContact(t)) {
                    u++;
                    if (s.length < 3) {
                        s.push(e);
                    }
                    return false;
                }
                o("WAWebContactUtils").setContactNotMine(t);
                return true;
            });
            if (u > 0) {
                o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[deleteContactBatchAction] ",
                    " contacts are already deleted => ",
                    ""
                ])), u, s);
            }
            if (c.length > 0) {
                yield o("WAWebSaveContactAction").runOrSendClientErrorLogs("companion-contact-client-error-delete-batch-syncd-send-contact-delete", function() {
                    return o("WAWebContactEditSync").sendContactDeleteBatch(c);
                });
            }
        });
        return v.apply(this, arguments);
    }
    function S(t) {
        try {
            return o("WAWebWidFactory").createUserWidOrThrow(`${t}@c.us`);
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[deleteContactBatchAction] companion-contact-client-error-delete-batch-create-user-wid"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("companion-contact-client-error-delete-batch-create-user-wid");
            throw error;
        }
    }
    l.deleteContactAction = y;
    l.deleteContactBatchAction = b;
}, 98);