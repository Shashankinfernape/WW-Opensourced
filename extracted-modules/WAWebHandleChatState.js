__d("WAWebHandleChatState", [
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebJidToWid",
    "WAWebLid1X1MigrationGating",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ jid, status }) {
            const r = o("WAWebJidToWid").userJidToUserWid(jid);
            let a;
            if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                a = r;
            } else {
                a = r;
                if (r.isLid() && !o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                    const i = yield o("WAWebApiContact").getPhoneNumber(r);
                    if (i) {
                        o("WAWebBackendApi").frontendFireAndForget("changePresenceHandler", {
                            id: i.toString(),
                            type: status
                        });
                    }
                }
            }
            if (a) {
                o("WAWebBackendApi").frontendFireAndForget("changePresenceHandler", {
                    id: a.toString(),
                    type: status
                });
            }
            return "NO_ACK";
        });
        return function(n) {
            return e.apply(this, arguments);
        };
    })();
    const s = (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ jid, participant, status }) {
            const a = o("WAWebJidToWid").chatJidToChatWid(jid);
            const i = o("WAWebJidToWid").userJidToUserWid(participant);
            o("WAWebBackendApi").frontendFireAndForget("changePresenceHandler", {
                id: a.toString(),
                type: status,
                participant: i.toString()
            });
            return "NO_ACK";
        });
        return function(n) {
            return e.apply(this, arguments);
        };
    })();
    l.handleIndividualChatState = e;
    l.handleGroupChatState = s;
}, 98);