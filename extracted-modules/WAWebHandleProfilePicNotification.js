__d("WAWebHandleProfilePicNotification", [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebApiContact",
    "WAWebBackendJobsCommon",
    "WAWebChangeProfilePicThumb",
    "WAWebCommsWapMd",
    "WAWebGroupSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebJidToWid",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebProfilePicConstants",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = new (r("WADeprecatedWapParser"))("incomingProfilePicNotificationParser", function(e) {
        e.assertTag("notification");
        let t;
        let n;
        if (e.hasChild("delete")) {
            t = "delete";
            n = e.child("delete");
        } else if (e.hasChild("set")) {
            t = "set";
            n = e.child("set");
        } else if (e.hasChild("request")) {
            t = "request";
            n = e.child("request");
            const r = o("WAWebJidToWid").chatJidToChatWid(n.attrChatJid("jid"));
            if (!o("WAWebUserPrefsMeUser").isMeAccount(r)) {
                throw e.createParseError("request jid must match self PN or LID");
            }
        } else if (e.hasChild("set_avatar")) {
            t = "set_avatar";
            n = e.child("set_avatar");
        } else {
            return e.throw("Unexpected profile picture notification type");
        }
        const a = e.attrString("id");
        if (n.hasAttr("jid")) {
            return {
                type: t,
                from: o("WAWebJidToWid").chatJidToChatWid(e.attrChatJid("from")),
                jid: o("WAWebJidToWid").chatJidToChatWid(n.attrChatJid("jid")),
                author: n.hasAttr("author") ? o("WAWebJidToWid").userJidToUserWid(n.attrUserJid("author")) : null,
                ts: e.attrTime("t"),
                rawTs: e.attrString("t"),
                stanzaId: a,
                picId: t === "set" ? n.attrInt("id", 1) : 0
            };
        }
        return {
            from: o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("from")),
            jid: null,
            type: t,
            hash: n.attrString("hash"),
            ts: e.attrTime("t"),
            stanzaId: a
        };
    });
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = m.parse(t);
            if (r.error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    ""
                ])), r.error.toString());
                return (d || (d = n("Promise"))).reject(r.error);
            }
            const r_success = r.success;
            let i = (d || (d = n("Promise"))).resolve();
            if (r_success.jid || r_success.hash) {
                let l;
                if (r_success.jid) {
                    l = r_success.jid;
                } else {
                    const p = yield o("WAWebApiContact").getContactRecordByHash(r_success.hash);
                    if (p == null) {
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "side contact hash not found for pic update"
                        ])));
                    } else {
                        l = o("WAWebWidFactory").createWid(p.id);
                    }
                }
                switch(r_success.type){
                    case "delete":
                    case "set":
                        {
                            const _ = r_success.type === "delete" ? o("WAWebProfilePicConstants").ProfilePicCommand.Remove : o("WAWebProfilePicConstants").ProfilePicCommand.Set;
                            if (l) {
                                i = o("WAWebChangeProfilePicThumb").changeProfilePicThumb(l, _).then(()=>{
                                    if (l.isGroup() && r_success.ts != null) {
                                        const e = o("WAWebGroupSystemMsg").genGroupPicChangeNotificationMsg(l, _, r_success.ts, r_success.author || o("WAWebUserPrefsMeUser").getMeUserOrThrow());
                                        return o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                                            chatId: l,
                                            newMsg: e,
                                            handleSingleMsgOrigin: "profilePicNotification"
                                        });
                                    }
                                });
                            }
                            break;
                        }
                    case "request":
                        break;
                    case "set_avatar":
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "set_avatar picture notification is not implemented"
                        ])));
                        break;
                    default:
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "Invalid type received"
                        ])));
                }
            }
            return i.then(()=>o("WAWap").wap("ack", {
                    id: o("WAWap").CUSTOM_STRING(r_success.stanzaId),
                    to: o("WAWebCommsWapMd").JID(r_success.from),
                    class: "notification",
                    type: "picture"
                }));
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        const t = o("WAWebBackendJobsCommon").getNonCriticalNotificationPriority(!!e.attrs.offline);
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("handleProfilePicNotification", function(e) {
            return p(e.node);
        }, {
            priority: t
        }).waitUntilCompleted({
            node: e
        });
    }
    l.handleProfilePicNotificationJob = f;
}, 98);