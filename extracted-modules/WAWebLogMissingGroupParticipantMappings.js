__d("WAWebLogMissingGroupParticipantMappings", [
    "WALogger",
    "WAWebApiContact",
    "WAWebGroupsParticipantsApi",
    "WAWebIsCagGroupCache",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ author: n, groupId: a, localAddressingMode: i, serverAddressingMode: l }) {
            if (!(!a.isGroup() || r("WAWebIsCagGroupCache").isCag(a) || n.isBot())) {
                const s = o("WAWebWidFactory").asUserWidOrThrow(n);
                if (o("WAWebApiContact").getAlternateUserWid(s) == null) {
                    const u = yield o("WAWebGroupsParticipantsApi").getParticipants(a);
                    if (!(u == null || u.participants.includes(s.toString()))) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "participant missing mapping, addressing mode mismatch = ",
                            ", localAddressingMode = ",
                            ", serverAddressingMode = ",
                            ", participant = ",
                            ""
                        ])), String(i !== l), String(i), String(l), s.toLogString()).sendLogs("GroupLidInfra/incoming_group_message_unknown", {
                            sampling: 0.01
                        });
                    }
                }
            }
        });
        return u.apply(this, arguments);
    }
    l.logMissingGroupParticipantMappings = s;
}, 98);