__d("WAWebGenerateBotGroupMetadata", [
    "WAWebBotGroupGatingUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        if (e == null) {
            return t ?? undefined;
        }
        if (t == null) {
            return e;
        }
        return babelHelpers.extends({}, e, t);
    }
    function s(t, n) {
        if (n.length === 0) {
            return t;
        }
        const i = t.messageContextInfo?.botMetadata;
        const l = i?.botGroupMetadata?.participantsMetadata ?? [];
        const participantsMetadata = [];
        const u = new Set;
        l.forEach((e)=>{
            const e_botFbid = e.botFbid;
            if (e_botFbid != null && e_botFbid !== "" && !u.has(e_botFbid)) {
                participantsMetadata.push(e);
                u.add(e_botFbid);
            }
        });
        n.forEach((e)=>{
            if (e.user !== "" && !u.has(e.user)) {
                participantsMetadata.push({
                    botFbid: e.user
                });
                u.add(e.user);
            }
        });
        if (participantsMetadata.length === 0) {
            return t;
        }
        return babelHelpers.extends({}, t, {
            messageContextInfo: babelHelpers.extends({}, t.messageContextInfo, {
                botMetadata: e(i, {
                    botGroupMetadata: {
                        participantsMetadata
                    }
                })
            })
        });
    }
    function u(e) {
        if (!(e == null || !o("WAWebBotGroupGatingUtils").isGroupBotParticipantEnabled(e))) {
            return {
                participantsMetadata: [
                    {
                        botFbid: e.user
                    }
                ]
            };
        }
    }
    l.mergeBotMetadata = e;
    l.addGroupAgentBotMetadata = s;
    l.generateBotGroupMetadata = u;
}, 98);