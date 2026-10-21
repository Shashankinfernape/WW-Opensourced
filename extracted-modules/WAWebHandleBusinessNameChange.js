__d("WAWebHandleBusinessNameChange", [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebApiContact",
    "WAWebApiVerifiedBusinessName",
    "WAWebBackendApi",
    "WAWebCommonParsersVerifiedName",
    "WAWebCommsWapMd",
    "WAWebHandleBusinessRemoval",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const privacyMode = yield o("WAWebApiVerifiedBusinessName").getPrivacyMode(e.wid);
            yield o("WAWebModelStorageUtils").getStorage().lock([
                "verified-business-name"
            ], function() {
                return o("WAWebApiVerifiedBusinessName").createOrUpdateVerifiedBusinessName(e.wid, {
                    level: e.level,
                    serial: parseInt(e.serial != null && e.serial !== "" ? e.serial : "0", 10),
                    name: e.verifiedName,
                    isApi: e.isApi,
                    isSmb: e.isSmb,
                    privacyMode: e.privacyMode ? {
                        actualActors: e.privacyMode.actualActors,
                        hostStorage: e.privacyMode.hostStorage,
                        privacyModeTs: e.privacyMode.privacyModeTs
                    } : null
                });
            });
            const n = yield r("WAWebLidAwareContactsDB").get(e.wid.toString());
            if (n != null) {
                o("WAWebBackendApi").frontendFireAndForget("generateAndUpdatePrivacySystemMessages", {
                    userJid: o("WAWebWidToJid").widToUserJid(e.wid),
                    previousState: {
                        isBusiness: n.isBusiness,
                        privacyMode
                    },
                    currentState: {
                        isBusiness: true,
                        privacyMode: e.privacyMode
                    },
                    shouldRunMATonWid: false
                });
                yield o("WAWebBackendApi").frontendSendAndReceive("updateContactWithVerifiedName", {
                    contactId: o("WAWebWidToJid").widToUserJid(e.wid),
                    verifiedNameInfo: {
                        name: e.verifiedName,
                        level: e.level,
                        isApi: e.isApi,
                        isSmb: e.isSmb,
                        privacyMode: e.privacyMode
                    }
                });
            }
        });
        return c.apply(this, arguments);
    }
    const d = new (r("WADeprecatedWapParser"))("verifiedNameParser", function(e) {
        return r("WAWebCommonParsersVerifiedName")(e.child("verified_name"));
    });
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let n;
            const a = (n = o("WAWap")).wap("iq", {
                to: n.S_WHATSAPP_NET,
                type: "get",
                xmlns: "w:biz",
                id: n.generateId()
            }, n.wap("verified_name", {
                jid: o("WAWebCommsWapMd").DEVICE_JID(t)
            }));
            const i = yield o("WADeprecatedSendIq").deprecatedSendIq(a, d);
            if (!i.success) {
                if (i.errorCode === 404) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "verified name notification not found"
                    ])));
                    return;
                }
                throw r("err")("Could not send IQ in retrieveBusinessDetails");
            }
            return i.result;
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.type !== "verified_name_hash") {
                throw r("err")("Invalid notification type");
            }
            const t = yield o("WAWebApiContact").getContactRecordByHash(e.hash);
            if (t == null) {
                return false;
            }
            const n = o("WAWebWidFactory").createUserWidOrThrow(t.id);
            const a = yield m(n);
            if (a) {
                const { isApi, isSmb, level, name, privacyMode, serial } = a;
                yield y({
                    wid: n,
                    verifiedName: name,
                    level,
                    stanzaId: e.stanzaId,
                    ts: e.ts,
                    serial,
                    isApi,
                    isSmb,
                    privacyMode
                });
            } else {
                if (a === undefined) {
                    yield o("WAWebHandleBusinessRemoval").handleBusinessRemoval(n, e.stanzaId, e.ts);
                }
            }
            return true;
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ jid, stanzaId, ts, verifiedName }) {
            const { isApi, isSmb, level, privacyMode, serial } = verifiedName;
            const serial_1 = serial === undefined ? "" : serial;
            let verifiedName_name = verifiedName.name;
            if (r("isStringNullOrEmpty")(verifiedName_name)) {
                const f = yield o("WAWebApiVerifiedBusinessName").getVerifiedBusinessNameRecordLidAware(jid);
                if (f?.name != null) {
                    verifiedName_name = f.name;
                } else {
                    const g = yield m(jid);
                    if (!g) {
                        return;
                    }
                    verifiedName_name = g.name;
                }
            }
            return y({
                verifiedName: verifiedName_name,
                level,
                stanzaId,
                ts,
                wid: jid,
                serial: serial_1,
                isApi,
                isSmb,
                privacyMode
            });
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebLidMigrationUtils").getPnAndLidToUpdate(e.wid);
            yield (s || (s = n("Promise"))).all(t.map((t)=>u(babelHelpers.extends({}, e, {
                    wid: t
                }))));
        });
        return C.apply(this, arguments);
    }
    l.handleVerifiedBusinessNameNotificationHash = _;
    l.handleVerifiedBusinessNameNotificationContact = g;
    l.processDetailsChangeLidAware = y;
}, 98);