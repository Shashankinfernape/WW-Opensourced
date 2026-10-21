__d("WAWebMexUsernameUpdateNotificationHandler", [
    "WALogger",
    "WAWebApiContact",
    "WAWebCurrentUser",
    "WAWebInsertUsernameChangeSystemMsg",
    "WAWebLidAwareContactsDB",
    "WAWebQueryExistsJob",
    "WAWebSetUsernameJob",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameODS",
    "WAWebUsernameTypes",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][username] set notification received"
                ])));
                const r = n.xwa2_notify_username_on_change;
                const { username, lid } = r;
                const l = o("WAWebWidFactory").createUserLidOrThrow(lid);
                const s = [
                    {
                        userId: l,
                        username: o("WAWebUsernameTypes").asUsername(username)
                    }
                ];
                const u = yield o("WAWebSetUsernameJob").setUsernamesJob(s);
                yield o("WAWebInsertUsernameChangeSystemMsg").maybeInsertUsernameChangeSystemMsgs(s, u, "mexHandleUsernameChange");
            }
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][username] delete notification received"
                ])));
                const r = t.xwa2_notify_username_delete;
                const a = r.lid;
                const displayNameLID = r.display_name ?? "";
                const l = o("WAWebWidFactory").createUserLidOrThrow(a);
                const u = yield o("WAWebSetUsernameJob").deleteUsernamesJob([
                    {
                        userId: l,
                        displayNameLID
                    }
                ]);
                yield o("WAWebInsertUsernameChangeSystemMsg").maybeInsertUsernameChangeSystemMsgs([
                    {
                        userId: l,
                        deleteUsername: true,
                        displayNameLID
                    }
                ], u, "mexHandleUsernameDelete");
            }
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][username] side-sub change notification"
                ])));
                const n = t.xwa2_notify_username_on_update_side_sub.hash;
                const r = yield o("WAWebApiContact").getContactRecordByHash(n);
                if (r == null) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][username] side contact hash not found"
                    ])));
                    return;
                }
                const a = yield b(n, r.id);
                if (a == null) {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][username] pn side contact hash found, but no lid contact found"
                    ])));
                    return;
                }
                if (yield o("WAWebApiContact").isAddressBookContact(o("WAWebWidToJid").widToUserJid(a))) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][username] side-sub notif for contact, skip"
                    ])));
                    return;
                }
                if (!o("WAWebUserPrefsMeUser").isMeAccount(a)) {
                    const i = yield o("WAWebQueryExistsJob").queryWidUsernameExists(a);
                    if (!(i == null || i.usernameChanged !== true)) {
                        const newUsername = o("WAWebUsernameTypes").asMaybeUsername(i.username);
                        const s = newUsername == null;
                        if (s) {
                            if (i.isPhoneNumberKnown !== true) {
                                return;
                            }
                        } else if (i.wasPreviouslyKnown !== true) {
                            return;
                        }
                        yield o("WAWebInsertUsernameChangeSystemMsg").generateUsernameChangeNotificationSystemMsg({
                            wid: a,
                            oldUsername: o("WAWebUsernameTypes").asMaybeUsername(i.oldUsername),
                            newUsername
                        });
                    }
                }
            }
        });
        return C.apply(this, arguments);
    }
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (r("WAWebWid").isStringLid(t)) {
                return o("WAWebWidFactory").createUserLidOrThrow(t);
            }
            const n = yield S(e);
            if (n == null) {
                o("WAWebUsernameODS").logUsernameSideSubNoLidForHash();
                return null;
            }
            const a = o("WAWebWidFactory").createUserLidOrThrow(n);
            o("WAWebUsernameODS").logUsernameSideSubHashCollision();
            if (o("WAWebCurrentUser").isEmployee()) {
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][username] side-sub hash matched a pn contact, using the lid that carries it: pn ",
                    ", lid ",
                    ", hash ",
                    ""
                ])), o("WAWebWidFactory").createWid(t).toLogString(), a.toLogString(), e).sendLogs("mex-username-side-sub-recovered-lid");
            }
            return a;
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield r("WAWebLidAwareContactsDB").equalsPrimaryKeys([
                "contactHash"
            ], e);
            return t.find((e)=>r("WAWebWid").isStringLid(e));
        });
        return R.apply(this, arguments);
    }
    l.mexHandleUsernameChange = _;
    l.mexHandleUsernameDelete = g;
    l.mexHandleUsernameChangeForSideSub = y;
}, 98);