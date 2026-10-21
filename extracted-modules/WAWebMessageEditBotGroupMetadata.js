__d("WAWebMessageEditBotGroupMetadata", [
    "Promise",
    "WAWebBotGroupGatingUtils",
    "WAWebBotMetadataProtoUtils",
    "WAWebGenerateBotGroupMetadata",
    "WAWebResolveGroupAgentParticipants",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaParticipant",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, mentionedJidList) {
        const a = {
            id: e.id,
            mentionedJidList
        };
        const i = [
            d(a, e),
            p(a, t.messageContextInfo),
            p(a, t.protocolMessage?.editedMessage?.messageContextInfo)
        ];
        return i.find(f) ?? {};
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const s = t.id.remote.toString();
            const u = yield (e || (e = n("Promise"))).all([
                o("WAWebSchemaParticipant").getParticipantTable().get(s),
                o("WAWebSchemaGroupMetadata").getGroupMetadataTable().get(s)
            ]);
            const c = u[0];
            const d = u[1];
            const _ = yield o("WAWebResolveGroupAgentParticipants").resolveGroupAgentParticipants(c?.participants ?? []);
            const f = o("WAWebGenerateBotGroupMetadata").addGroupAgentBotMetadata({
                messageContextInfo: {
                    botMetadata: {
                        botGroupMetadata: o("WAWebGenerateBotGroupMetadata").generateBotGroupMetadata(t.botGroupParticipant ?? o("WAWebBotGroupGatingUtils").getSendGroupBotParticipant(d))
                    }
                }
            }, _);
            const f_messageContextInfo = f.messageContextInfo;
            const h = f_messageContextInfo?.botMetadata?.botGroupMetadata?.participantsMetadata ?? [];
            return p(t, m(h.flatMap(({ botFbid })=>{
                if (botFbid != null) {
                    return [
                        botFbid
                    ];
                }
                return [];
            })));
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        const n = _(t);
        if (n.botGroupParticipants == null) {
            return n;
        }
        const r = p(e, m(n.botGroupParticipants.map((e)=>e.user)));
        if (f(r)) {
            return r;
        }
        return n;
    }
    function m(e) {
        return {
            botMetadata: {
                botGroupMetadata: {
                    participantsMetadata: e.map((botFbid)=>({
                            botFbid
                        }))
                }
            },
            threadId: []
        };
    }
    function p(e, t) {
        const r = {
            id: e.id,
            mentionedJidList: e.mentionedJidList ?? undefined
        };
        o("WAWebBotMetadataProtoUtils").parseBotMetadataProto(r, t, true);
        return _(r);
    }
    function _(e) {
        if (f(e)) {
            return {
                botGroupParticipant: e.botGroupParticipant ?? null,
                botGroupParticipants: e.botGroupParticipants ?? null
            };
        }
        return {};
    }
    function f(e) {
        return e.botGroupParticipant != null || e.botGroupParticipants != null;
    }
    l.getReceivedEditBotGroupMetadata = s;
    l.getOwnEditBotGroupMetadata = u;
}, 98);