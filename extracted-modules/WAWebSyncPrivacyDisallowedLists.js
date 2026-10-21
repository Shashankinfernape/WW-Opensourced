__d("WAWebSyncPrivacyDisallowedLists", [
    "Promise",
    "WAWebQueryPrivacyDisallowedListUtil",
    "WAWebSchemaPrivacyDisallowedList",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = yield (e || (e = n("Promise"))).all(t.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = yield o("WAWebQueryPrivacyDisallowedListUtil").queryPrivacyDisallowedList(e);
                    return {
                        type: e,
                        response: t
                    };
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            const a = [];
            r.forEach((e)=>{
                const e_response = e.response;
                const { dhash, status, users } = e_response;
                if (!(status !== "mismatch" || users == null || dhash == null)) {
                    a.push({
                        id: e.type,
                        disallowedList: users.map((e)=>e.toString()),
                        dhash
                    });
                }
            });
            yield o("WAWebSchemaPrivacyDisallowedList").getPrivacyDisallowedListTable().bulkCreateOrReplace(a);
            return a;
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield s([
                e
            ]);
        });
        return d.apply(this, arguments);
    }
    l.syncPrivacyDisallowedLists = s;
    l.syncSinglePrivacyDisallowedList = c;
}, 98);