__d("WASmaxGroupsAddParticipantsRPC", [
    "WAComms",
    "WASmaxInGroupsAddParticipantsResponseClientError",
    "WASmaxInGroupsAddParticipantsResponseServerError",
    "WASmaxInGroupsAddParticipantsResponseSuccess",
    "WASmaxOutGroupsAddParticipantsRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutGroupsAddParticipantsRequest").makeAddParticipantsRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInGroupsAddParticipantsResponseSuccess").parseAddParticipantsResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "AddParticipantsResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInGroupsAddParticipantsResponseClientError").parseAddParticipantsResponseClientError(r, n);
            if (i.success) {
                return {
                    name: "AddParticipantsResponseClientError",
                    value: i.value
                };
            }
            const l = o("WASmaxInGroupsAddParticipantsResponseServerError").parseAddParticipantsResponseServerError(r, n);
            if (l.success) {
                return {
                    name: "AddParticipantsResponseServerError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("AddParticipants", {
                Success: a,
                ClientError: i,
                ServerError: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendAddParticipantsRPC = e;
}, 98);