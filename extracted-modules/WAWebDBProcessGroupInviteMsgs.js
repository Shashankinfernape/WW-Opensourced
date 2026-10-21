__d("WAWebDBProcessGroupInviteMsgs", [
    "WALogger",
    "WATimeUtils",
    "WAWebApiGroupInviteV4Store",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.map((e)=>p(e));
            yield o("WAWebApiGroupInviteV4Store").persistGroupInviteV4Msgs(t);
        });
        return m.apply(this, arguments);
    }
    function p(t) {
        const n = o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated();
        const r = n ? o("WAWebLidMigrationUtils").toLid(t.from) : t.from;
        const a = n ? o("WAWebLidMigrationUtils").toLid(t.to) : t.to;
        if (!r || !a) {
            const i = o("WAWebUserPrefsMeUser").isMeAccount(t.author);
            const l = t.author != null;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-invites] lidMigrated=",
                " validAuthor=",
                " isPeer=",
                ""
            ])), n, l, i);
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[group-invites] failed to get lid mapping for ",
                " ",
                ""
            ])), r ? "" : "msg.from &", a ? "" : "msg.to");
            const d = "[group-invites] failed to get lid mapping for *incoming* group invite";
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ""
            ])), d).sendLogs(d);
        }
        const m = o("WAWebLidMigrationUtils").getAddressingModeString(r?.isLid());
        const p = o("WAWebLidMigrationUtils").getAddressingModeString(a?.isLid());
        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "[group-invites] invite addr mode: from=",
            " to=",
            ""
        ])), m, p);
        return {
            id: t.id.toString(),
            from: r?.toString(),
            to: a?.toString(),
            groupId: t.inviteGrp,
            expiration: parseInt(t.inviteCodeExp, 10),
            expired: o("WATimeUtils").unixTime() >= parseInt(t.inviteCodeExp, 10)
        };
    }
    l.processGroupInviteMessages = d;
}, 98);