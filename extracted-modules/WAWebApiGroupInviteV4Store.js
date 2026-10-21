__d("WAWebApiGroupInviteV4Store", [
    "WATimeUtils",
    "WAWebSchemaGroupInviteV4",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return o("WAWebSchemaGroupInviteV4").getGroupInviteV4Table().createOrMerge(e, t);
    }
    function s(e) {
        return o("WAWebSchemaGroupInviteV4").getGroupInviteV4Table().bulkCreateOrMerge(e);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ expiration, from, groupId, to }) {
            const i = yield o("WAWebSchemaGroupInviteV4").getGroupInviteV4Table().equals([
                "from",
                "to",
                "groupId"
            ], [
                from,
                to,
                groupId
            ]).then((e)=>e.filter((e)=>!e.expired && e.expiration <= expiration));
            yield o("WAWebSchemaGroupInviteV4").getGroupInviteV4Table().bulkCreateOrReplace(i.map((e)=>babelHelpers.extends({}, e, {
                    expired: true
                })));
            return i;
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        const t = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().toString();
        return o("WAWebSchemaGroupInviteV4").getGroupInviteV4Table().equals([
            "from",
            "groupId"
        ], [
            t,
            e.toString()
        ]).then((e)=>e.filter((e)=>!e.expired && o("WATimeUtils").unixTime() <= e.expiration)).then((e)=>e.map((e)=>e.to));
    }
    l.persistGroupInviteV4Msg = e;
    l.persistGroupInviteV4Msgs = s;
    l.revokeGroupInvites = u;
    l.getPendingParticipantsDB = d;
}, 98);