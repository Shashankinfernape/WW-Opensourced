__d("WAWebDBGetGroupMemberUpdateMessages", [
    "WATimeUtils",
    "WAWebCollectionConstants",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebGroupConstants",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = o("WAWebCollectionConstants").PAGE_SIZE, n) {
            const r = o("WATimeUtils").unixTime() - o("WAWebGroupConstants").PAST_PARTICIPANT_EXPIRATION_DAYS * 24 * 60 * 60;
            const a = o("WAWebDBMessageUtils").beginningOfChat(e);
            let i = o("WAWebDBMessageUtils").endOfChat(e);
            let upperInclusive = true;
            if (n != null) {
                const s = yield o("WAWebSchemaMessage").getMessageTable().get(n.toString());
                if (s?.internalId != null) {
                    i = s.internalId;
                    upperInclusive = false;
                }
            }
            const u = [];
            yield o("WAWebSchemaMessage").getMessageTable().between([
                "internalId"
            ], a, i, {
                reverse: true,
                upperInclusive
            }, function(e) {
                return e.t < r || (e.viewMode === o("WAWebViewMode.flow").ViewModeType.GROUP_MEMBER_UPDATES && u.push(o("WAWebDBMessageSerialization").messageFromDbRow(e)), u.length >= t);
            });
            return u;
        });
        return s.apply(this, arguments);
    }
    l.getGroupMemberUpdateMessagesForChat = e;
}, 98);