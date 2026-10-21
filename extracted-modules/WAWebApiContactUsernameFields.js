__d("WAWebApiContactUsernameFields", [
    "WAWebApiContact",
    "WAWebCountryCodeUtils",
    "WAWebLidAwareContactsDB",
    "WAWebMexUsersGetCountryCode",
    "WAWebModelStorageUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebApiContact").getContactRecord(e);
            return t?.username;
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "contact"
        ], function() {
            const t = e.map(({ displayNameLID: t, id: n, username: r, usernameCountryCode: o, usernameSoftDeleted: a })=>{
                const i = {
                    id: n
                };
                if (t != null) {
                    i.displayNameLID = t;
                }
                if (o != null) {
                    i.usernameCountryCode = o;
                }
                if (a === true) {
                    i.usernameSoftDeleted = true;
                } else {
                    i.username = r;
                    i.usernameSoftDeleted = void 0;
                }
                return i;
            });
            return r("WAWebLidAwareContactsDB").bulkCreateOrMerge(t, "ApiContactUsernameFields.bulkUpdateUsernamesInDb");
        });
    }
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return m(o("WAWebUserPrefsMeUser").getMeLidUserOrThrow());
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebApiContact").getContactRecord(e);
            if (t?.usernameCountryCode != null) {
                return t.usernameCountryCode;
            }
            const n = o("WAWebWidFactory").asUserWidOrThrow(e);
            const r = o("WAWebCountryCodeUtils").getCountryCodeFromPn(n);
            return r ?? o("WAWebMexUsersGetCountryCode").getMexUserCountryCode(n);
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebApiContact").bulkGetContactRecord(e);
            return t.reduce((e, t)=>{
                if (t != null) {
                    e.set(t.id, {
                        username: t.username,
                        usernameCountryCode: t.usernameCountryCode,
                        usernameSoftDeleted: t.usernameSoftDeleted
                    });
                }
                return e;
            }, new Map);
        });
        return f.apply(this, arguments);
    }
    l.getContactUsername = e;
    l.bulkUpdateUsernamesInDb = u;
    l.getOrFetchMeContactUsernameCountryCode = c;
    l.getOrFetchContactUsernameCountryCode = m;
    l.bulkGetContactToUsernameInfoMap = _;
}, 98);