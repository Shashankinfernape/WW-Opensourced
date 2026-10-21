__d("WAWebGroupInviteV4Job", [
    "WALogger",
    "WASmaxGroupsRevokeRequestCodeRPC",
    "WAWebJidToWid",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const r = yield o("WASmaxGroupsRevokeRequestCodeRPC").sendRevokeRequestCodeRPC({
                participantArgs: t.map((e)=>({
                        participantJid: o("WAWebWidToJid").widToUserJid(e)
                    })),
                iqTo: n
            });
            switch(r.name){
                case "RevokeRequestCodeResponseSuccess":
                    {
                        const a = r.value.revokeParticipant;
                        if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                            const i = a.reduce((acc, item)=>{
                                const t_jid = item.jid;
                                const a = item.usernameAttMixin?.username;
                                if (a != null) {
                                    acc.push({
                                        userId: o("WAWebJidToWid").userJidToUserWid(t_jid),
                                        username: o("WAWebUsernameTypes").asUsername(a)
                                    });
                                }
                                return acc;
                            }, []);
                            if (i.length > 0) {
                                yield o("WAWebSetUsernameJob").setUsernamesJob(i);
                            }
                        }
                        return {
                            status: 200
                        };
                    }
                case "RevokeRequestCodeResponseClientError":
                    {
                        const l = r.value.errorClientErrors.value;
                        const { code, text } = l;
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "revokeGroupInviteV4: failed ",
                            ":",
                            ""
                        ])), code, text);
                        return {
                            status: Number(code)
                        };
                    }
                case "RevokeRequestCodeResponseServerError":
                    {
                        const d = r.value.errorServerErrors.value;
                        const { code, text } = d;
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "revokeGroupInviteV4: failed ",
                            ":",
                            ""
                        ])), code, text);
                        return {
                            status: Number(code)
                        };
                    }
            }
        });
        return c.apply(this, arguments);
    }
    l.revokeGroupInviteV4 = u;
}, 98);