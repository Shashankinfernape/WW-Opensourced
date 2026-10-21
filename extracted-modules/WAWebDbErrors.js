__d("WAWebDbErrors", [
    "WACustomError"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, `MasterDatabaseEncryptionKey.${t} was accessed before init`) || this;
            n.name = "DbEncKeyNotLoaded";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })((e = o("WACustomError")).CustomError);
    const u = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, `MasterDatabaseMessageEncryptionKey.${t} was accessed before init`) || this;
            n.name = "DbMsgEncKeyNotLoaded";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    const c = ((e)=>{
        function t(n) {
            let r;
            r = e.call(this, n ?? t.message) || this;
            r.name = "DbOnLogoutAbort";
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    c.message = "DB operation was dropped due to logout activity";
    const d = ((e)=>{
        function t(n) {
            let r;
            r = e.call(this, n ?? t.message) || this;
            r.name = "DbClosedOnTakeover";
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    d.message = "DB operation was dropped due to session takeover (DB closed)";
    const m = ((e)=>{
        function t(n) {
            let r;
            r = e.call(this, n ?? t.message) || this;
            r.name = "DbNotFoundOnTakeover";
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    m.message = "DB operation was dropped due to session takeover (DB not found)";
    const p = ((e)=>{
        function t(n) {
            let r;
            r = e.call(this, n ?? t.message) || this;
            r.name = "DBInvalidFtsHMACKey";
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    p.message = "MasterDatabaseEncryptionKey.fts_hmac_keys is in an invalid state";
    l.DbEncKeyNotLoaded = s;
    l.DbMsgEncKeyNotLoaded = u;
    l.DbOnLogoutAbort = c;
    l.DbClosedOnTakeover = d;
    l.DbNotFoundOnTakeover = m;
    l.DBInvalidFtsHMACKey = p;
}, 98);