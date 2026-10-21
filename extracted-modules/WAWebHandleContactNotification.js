__d("WAWebHandleContactNotification", [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebApiChatCommon",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebBackendJobsCommon",
    "WAWebChangeProfilePicThumb",
    "WAWebContactSyncBridge",
    "WAWebDBCreateLidPnMappings",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebJidToWid",
    "WAWebLid1X1MigrationGating",
    "WAWebLidAwareContactsDB",
    "WAWebMessageProcessUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebProcessPhoneNumberChange",
    "WAWebProfilePicConstants",
    "WAWebSchemaChat",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "WAWebUpdateTextStatusForContact",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = new (r("WADeprecatedWapParser"))("incomingContactsNotification", function(t) {
        t.assertTag("notification");
        const n = t.attrString("id");
        const r = t.attrWapJid("from");
        const a = t.attrTime("t");
        const rawTs = t.attrString("t");
        const l = {
            from: r,
            ts: a,
            rawTs,
            stanzaId: n
        };
        if (t.hasChild("update")) {
            const s = t.child("update");
            if (s.hasAttr("jid")) {
                return babelHelpers.extends({
                    type: "update",
                    jid: o("WAWebJidToWid").userJidToUserWid(s.attrUserJid("jid"))
                }, l);
            }
            if (s.hasAttr("hash")) {
                return babelHelpers.extends({
                    type: "update_by_hash",
                    hash: s.attrString("hash"),
                    jid: null
                }, l);
            }
            return babelHelpers.extends({
                type: "empty",
                jid: null
            }, l);
        } else if (t.hasChild("add")) {
            const u = t.child("add");
            return babelHelpers.extends({
                type: "add",
                hash: u.hasContent() ? u.contentBytes() : null,
                jid: null
            }, l);
        } else if (t.hasChild("remove")) {
            const c = t.child("remove");
            return babelHelpers.extends({
                type: "remove",
                jid: o("WAWebJidToWid").userJidToUserWid(c.attrUserJid("jid"))
            }, l);
        } else if (t.hasChild("modify")) {
            const d = t.child("modify");
            return babelHelpers.extends({
                type: "modify",
                jid: o("WAWebJidToWid").userJidToUserWid(d.attrUserJid("new")),
                oldJid: o("WAWebJidToWid").userJidToUserWid(d.attrUserJid("old")),
                lid: d.maybeAttrUserJid("new_lid") ? o("WAWebJidToWid").lidUserJidToUserLid(d.attrLidUserJid("new_lid")) : null,
                oldLid: d.maybeAttrUserJid("old_lid") ? o("WAWebJidToWid").lidUserJidToUserLid(d.attrLidUserJid("old_lid")) : null
            }, l);
        } else if (t.hasChild("sync")) {
            const m = t.child("sync");
            return babelHelpers.extends({
                type: "sync",
                after: m.attrTime("after"),
                jid: null
            }, l);
        }
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            'Unexpected "contacts" notification'
        ])));
        return babelHelpers.extends({
            type: "empty",
            jid: null
        }, l);
    });
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t.type !== "modify") {
                throw r("err")("Error: genContactChangeNotificationMsg invalid type");
            }
            const n = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            const a = r("nullthrows")(t.oldJid);
            const i = r("nullthrows")(t.jid);
            let templateParams;
            if (t.lid != null && t.oldLid != null) {
                const { oldLid, lid } = t;
                templateParams = [
                    a,
                    i,
                    oldLid,
                    lid
                ];
            } else {
                templateParams = [
                    a,
                    i
                ];
            }
            return {
                id: new (r("WAWebMsgKey"))({
                    remote: e,
                    fromMe: false,
                    id: yield r("WAWebMsgKey").newId()
                }),
                from: e,
                subtype: "change_number",
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                t: t.ts,
                to: n,
                type: "notification_template",
                kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                templateParams
            };
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t.oldJid != null && t.jid != null) {
                yield r("WAWebProcessPhoneNumberChange")(t.oldJid, t.jid);
            }
            const n = yield g(e, t);
            yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: e,
                newMsg: n,
                handleSingleMsgOrigin: "changeNumberNotification"
            });
        });
        return C.apply(this, arguments);
    }
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t && o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                const n = yield o("WAWebMessageProcessUtils").selectChatForOneOnOneMessage({
                    lid: t
                });
                return n.chatId;
            }
            return e;
        });
        return v.apply(this, arguments);
    }
    function S(e, t) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().bulkGet([
                e.toString()
            ]);
            const a = n[0];
            if (a != null) {
                const { displayNameLID, isEphemeralityDisabled, isUsernameContact, pushname, username, usernameKey } = a;
                if (!(!o("WAWebUsernameTypes").isPresentUsername(username) && usernameKey == null && isUsernameContact == null && r("isStringNullOrEmpty")(pushname) && r("isStringNullOrEmpty")(displayNameLID) && isEphemeralityDisabled !== true)) {
                    const m = {
                        id: t.toString()
                    };
                    if (o("WAWebUsernameTypes").isPresentUsername(username)) {
                        m.username = username;
                    }
                    if (usernameKey != null) {
                        m.usernameKey = usernameKey;
                    }
                    if (isUsernameContact != null) {
                        m.isUsernameContact = isUsernameContact;
                    }
                    if (!r("isStringNullOrEmpty")(pushname)) {
                        m.pushname = pushname;
                    }
                    if (!r("isStringNullOrEmpty")(displayNameLID)) {
                        m.displayNameLID = displayNameLID;
                    }
                    if (isEphemeralityDisabled === true) {
                        m.isEphemeralityDisabled = true;
                    }
                    yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge([
                        m
                    ], "propagateContactDataToNewLid");
                    o("WAWebBackendApi").frontendFireAndForget("propagateIdentityFieldsToLidContact", {
                        lid: t,
                        username,
                        usernameKey,
                        isUsernameContact,
                        pushname,
                        displayNameLID,
                        isEphemeralityDisabled
                    });
                }
            }
        });
        return R.apply(this, arguments);
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.oldJid) {
                const { oldJid, jid, oldLid, lid } = e;
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handleModifyAction: oldChatPn: ",
                    ", newChatPn: ",
                    ""
                ])), oldJid.toLogString(), jid.toLogString());
                const l = [];
                const c = yield b(oldJid, oldLid);
                const d = yield o("WAWebApiChatCommon").getChatRecord(c);
                if (d) {
                    l.push({
                        id: d.id,
                        changeNumberNewJid: jid.toString(),
                        changeNumberOldJid: undefined
                    });
                }
                const m = yield b(jid, lid);
                const p = yield o("WAWebApiChatCommon").getChatRecord(m);
                if (p) {
                    l.push({
                        id: p.id,
                        changeNumberNewJid: undefined,
                        changeNumberOldJid: oldJid.toString()
                    });
                }
                yield o("WAWebSchemaChat").getChatTable().bulkCreateOrMerge(l);
                o("WAWebBackendApi").frontendFireAndForget("updateChatChangeNumberJids", {
                    updates: l.map((e)=>({
                            id: e.id.toString(),
                            changeNumberNewJid: e.changeNumberNewJid,
                            changeNumberOldJid: e.changeNumberOldJid
                        }))
                });
                if (oldLid != null && lid != null) {
                    yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                        mappings: [
                            {
                                lid: oldLid,
                                pn: oldJid
                            },
                            {
                                lid,
                                pn: jid
                            }
                        ],
                        flushImmediately: true,
                        learningSource: "contact-notification"
                    });
                    if (!oldLid.equals(lid)) {
                        yield S(oldLid, lid);
                    }
                }
                yield (_ || (_ = n("Promise"))).all([
                    y(c, e),
                    y(m, e)
                ]);
            } else {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "notification.oldJid is null"
                ])));
            }
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WAWebBackendApi").frontendFireAndForget("resetPresence", {
                id: e.toString()
            });
            o("WAWebBackendApi").frontendFireAndForget("refreshTextStatus", {
                contactId: e.toString()
            });
            let t;
            if (o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) {
                const r = yield o("WAWebApiContact").getContactRecord(o("WAWebWidFactory").asUserWidOrThrow(e));
                if (r != null) {
                    t = o("WAWebUpdateTextStatusForContact").updateTextStatusForContact({
                        contactId: e,
                        textString: null,
                        emoji: null,
                        ephemeralDuration: null,
                        newUpdateTime: o("WAWebTextStatusUtils").TEXT_STATUS_NOT_FETCHED,
                        source: "contact-notification"
                    });
                }
            }
            const a = o("WAWebChangeProfilePicThumb").changeProfilePicThumb(e, o("WAWebProfilePicConstants").ProfilePicCommand.Set);
            yield (_ || (_ = n("Promise"))).all([
                a,
                t
            ]);
        });
        return I.apply(this, arguments);
    }
    function T(e) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = f.parse(e);
            if (t.error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    ""
                ])), t.error.toString());
                throw t.error;
            }
            const t_success = t.success;
            const n_jid = t_success.jid;
            switch(t_success.type){
                case "update":
                    if (n_jid) {
                        yield k(n_jid);
                        return i(t_success);
                    }
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "handleContactsNotification: update cmd missing jid"
                    ])));
                    return i(t_success);
                case "update_by_hash":
                    {
                        const a = yield o("WAWebApiContact").getContactRecordByHash(t_success.hash);
                        if (a != null) {
                            yield k(o("WAWebWidFactory").createWid(a.id));
                        }
                        return i(t_success);
                    }
                case "modify":
                    yield L(t_success);
                    return i(t_success);
                case "sync":
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "received contact sync notification"
                    ]))).tags("contact-sync");
                    yield o("WAWebContactSyncBridge").doFullContactSync();
                    return i(t_success);
                default:
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "handleContactsNotification: unhandled notification of type ",
                        ""
                    ])), t_success.type);
                    return i(t_success);
            }
            function i(e, t) {
                return o("WAWap").wap("ack", {
                    id: o("WAWap").CUSTOM_STRING(e.stanzaId),
                    to: e.from,
                    class: "notification",
                    type: "contacts"
                }, t);
            }
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        const t = o("WAWebBackendJobsCommon").getNonCriticalNotificationPriority(!!e.attrs.offline);
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("handleContactNotification", function(e) {
            return T(e.node);
        }, {
            priority: t
        }).waitUntilCompleted({
            node: e
        });
    }
    l.default = x;
}, 98);