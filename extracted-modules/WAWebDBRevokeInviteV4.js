__d("WAWebDBRevokeInviteV4", [
    "Promise",
    "WAWebApiGroupInviteV4Store",
    "WAWebBackendApi",
    "WAWebDBMsgUtils",
    "WAWebDBProcessMessage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ expiration: r, from: a, groupId: i, to: l }) {
            const s = yield o("WAWebApiGroupInviteV4Store").revokeGroupInvites({
                expiration: r,
                from: a,
                groupId: i,
                to: l
            });
            const u = s?.map(function(e) {
                return e.id;
            }) || [];
            const c = yield o("WAWebDBMsgUtils").getMsgsByMsgKey(u, function(e) {
                e.inviteCodeExp = "0";
            });
            const d = [];
            for (const m of c){
                o("WAWebBackendApi").frontendFireAndForget("expireGroupInviteV4", {
                    inviteMsgId: m.id
                });
                d.push(o("WAWebDBProcessMessage").updateExistingMessages([
                    m
                ], m.id.remote));
            }
            yield (e || (e = n("Promise"))).all(d);
        });
        return u.apply(this, arguments);
    }
    l.revokeGroupInviteV4 = s;
}, 98);