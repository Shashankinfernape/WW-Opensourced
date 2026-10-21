__d("WAWebServerErrors", [
    "WACustomError",
    "WAWebNonEmptyString"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t, n, r) {
            let i;
            const l = o("WAWebNonEmptyString").asMaybeNonEmptyString(t) ?? "Server replied with a failed status code";
            i = e.call(this, `${l}: ${r}`) || this;
            i.name = "ServerStatusError";
            i.url = n;
            i.status = r;
            return i;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    const s = ((e)=>{
        function t(t, n, r) {
            let o;
            let a = `Invalid response for ${t}, with status ${n}`;
            if (r) {
                a = `${a}: ${r}`;
            }
            o = e.call(this, a) || this;
            o.name = "InvalidServerResponseError";
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    l.ServerStatusError = e;
    l.InvalidServerResponseError = s;
}, 98);