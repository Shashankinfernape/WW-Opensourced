__d("WAWebInsertUsernameChangeSystemMsg", [
    "Promise",
    "WALogger",
    "WAWebApiContact",
    "WAWebContactSystemMsg",
    "WAWebGetChatRecordByAccountLid",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLidAwareContactsDB",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaParticipant",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, a = "unknown") {
            if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                try {
                    const i = new Set;
                    const l = [];
                    t.forEach((e)=>{
                        const t = e.userId.toString();
                        if (!i.has(t)) {
                            const n = m(e, r);
                            if (n != null) {
                                i.add(t);
                                l.push(_(n));
                            }
                        }
                    });
                    yield (u || (u = n("Promise"))).all(l);
                } catch (t) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        ": failed to insert username system msg ",
                        ""
                    ])), a, t instanceof Error ? t.message : String(t)).sendLogs("username-system-msg-insert-failed");
                }
            }
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        const n = e.userId;
        if (!n.isLid() || o("WAWebUserPrefsMeUser").isMeAccount(n)) {
            return null;
        }
        const r = t.get(n.toString());
        if (r == null) {
            return null;
        }
        const a = e.deleteUsername === true;
        if (!a && e.username == null || r.usernameChanged !== true) {
            return null;
        }
        if (a) {
            if (r.isPhoneNumberKnown !== true) {
                return null;
            }
        } else if (r.wasPreviouslyKnown !== true) {
            return null;
        }
        const i = p(e, a);
        return {
            wid: o("WAWebWidFactory").asUserLidOrThrow(n),
            oldUsername: r.oldUsername,
            newUsername: i
        };
    }
    function p(e, t) {
        if (t || e.username == null) {
            return null;
        }
        return e.username;
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ newUsername: t, oldUsername: r, wid: a }) {
            if (!o("WAWebUsernameTypes").isPresentUsername(r) && !o("WAWebUsernameTypes").isPresentUsername(t)) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[username] old+new username empty ",
                    ""
                ])), a.toLogString()).sendLogs("generateUsernameChangeNotificationSystemMsg-usernames-empty");
                return;
            }
            const i = yield g(a);
            yield (u || (u = n("Promise"))).all([
                y({
                    wid: a,
                    oldUsername: r,
                    newUsername: t,
                    displayName: i
                }),
                b({
                    wid: a,
                    oldUsername: r,
                    newUsername: t,
                    displayName: i
                })
            ]);
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield r("WAWebLidAwareContactsDB").get(e.toString());
            return t?.displayNameLID;
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ displayName: t, newUsername: n, oldUsername: r, wid: a }) {
            const i = (yield o("WAWebGetChatRecordByAccountLid").getChatRecordByAccountLid(a))[0];
            if (i != null) {
                const l = o("WAWebWidFactory").createWid(i.id);
                const s = o("WAWebContactSystemMsg").genUsernameChangeSystemMsg({
                    chatId: l,
                    oldUsername: r,
                    newUsername: n,
                    wid: a,
                    displayName: t
                });
                yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                    chatId: l,
                    newMsg: s,
                    handleSingleMsgOrigin: "username_change_notification"
                });
            }
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ displayName: r, newUsername: a, oldUsername: i, wid: l }) {
            const s = o("WAWebSchemaParticipant").getParticipantTable();
            const c = l.toString();
            const d = o("WAWebApiContact").getPhoneNumber(l)?.toString();
            const m = yield s.anyOf([
                "participants"
            ], [
                c,
                d
            ].filter(Boolean));
            const p = Array.from(new Set(m.map((e)=>e.groupId)));
            const _ = yield o("WAWebSchemaGroupMetadata").getGroupMetadataTable().bulkGet(p);
            yield (u || (u = n("Promise"))).all(p.reduce((e, t, n)=>{
                const s = _[n];
                if (s?.defaultSubgroup === true) {
                    return e;
                }
                const u = o("WAWebWidFactory").createWid(t);
                const c = o("WAWebContactSystemMsg").genUsernameChangeSystemMsg({
                    chatId: u,
                    oldUsername: i,
                    newUsername: a,
                    wid: l,
                    displayName: r,
                    viewMode: o("WAWebViewMode.flow").ViewModeType.GROUP_MEMBER_UPDATES
                });
                e.push(o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                    chatId: u,
                    newMsg: c,
                    handleSingleMsgOrigin: "username_change_notification"
                }));
                return e;
            }, []));
        });
        return v.apply(this, arguments);
    }
    l.maybeInsertUsernameChangeSystemMsgs = c;
    l.generateUsernameChangeNotificationSystemMsg = _;
}, 98);