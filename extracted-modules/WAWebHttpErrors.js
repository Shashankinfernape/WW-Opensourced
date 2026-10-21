__d("WAWebHttpErrors", [
    "WACustomError",
    "gkx"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "HttpNetworkError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    const s = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "HttpTimedOutError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e);
    const u = ((e)=>{
        function t(t, n, o) {
            let a;
            const i = !r("gkx")("26258") && o?.url != null ? `${n}: ${t} ${o.url}` : `${n}: ${t}`;
            a = e.call(this, i) || this;
            a.name = "HttpStatusCodeError";
            a.status = t;
            return a;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    const c = ((e)=>{
        function t(t, n) {
            let o;
            const a = !r("gkx")("26258") && n?.url != null ? `${t}: ${n.url}` : t;
            o = e.call(this, a) || this;
            o.name = "HttpInvalidResponseError";
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    const d = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, "mmsDownload: filehash mismatch", t) || this;
            n.name = "MmsDownloadFilehashMismatchError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(c);
    l.HttpNetworkError = e;
    l.HttpTimedOutError = s;
    l.HttpStatusCodeError = u;
    l.HttpInvalidResponseError = c;
    l.MmsDownloadFilehashMismatchError = d;
}, 98);