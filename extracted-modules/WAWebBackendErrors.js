__d("WAWebBackendErrors", [
    "WACustomError",
    "WALogger"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, n ?? "") || this;
            r.message = n ?? "";
            r.name = "ServerStatusCodeError";
            r.status = t;
            r.statusCode = t;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })((s = o("WACustomError")).CustomError);
    const c = ((e)=>{
        function t(t, n, r) {
            let o;
            o = e.call(this, t, n) || this;
            o.backoffMs = r.backoffMs;
            o.name = "MexServerStatusCodeError";
            o.retryable = r.retryable;
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(u);
    const d = ((e)=>{
        function t(t) {
            let n;
            const { errors: r, message: o, statusCode: a } = t;
            n = e.call(this, o ?? "") || this;
            n.name = "CatalogEditServerError";
            n.errors = r;
            n.status = a;
            n.statusCode = a;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(s.CustomError);
    const m = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, "CatalogUnknownError") || this;
            n.name = "CatalogUnknownError";
            n.reason = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(s.CustomError);
    const p = ((e)=>{
        function t() {
            let t;
            t = e.call(this, "CollectionReorderError") || this;
            t.name = "CollectionReorderError";
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(s.CustomError);
    const _ = ((e)=>{
        function t() {
            let t;
            t = e.call(this, 451, "commerce features disabled") || this;
            t.name = "E451";
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(u);
    const f = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, 404, t) || this;
            n.name = "E404";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(u);
    const g = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, 507, t) || this;
            r.name = "E507";
            r.backoff = Number.isNaN(n) ? null : n;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(u);
    const h = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "Drop";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(s.CustomError);
    const y = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "LogoutDrop";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(h);
    const C = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "EphemeralDrop";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(h);
    function b(t, n) {
        return t.catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ", error"
            ])), n).verbose().sendLogs(n);
            throw t;
        });
    }
    const v = ((e)=>{
        function t(t, n, r) {
            let o;
            o = e.call(this, r ?? "") || this;
            o.name = "UnexpectedJoinGroupViaInviteResponse";
            o.gid = t;
            o.membershipApprovalMode = n;
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(s.CustomError);
    const S = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, n ?? "") || this;
            r.name = "UnexpectedJoinSubgroupResponse";
            r.membershipApprovalMode = t;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(s.CustomError);
    const R = ((e)=>{
        function t(t, n, r) {
            let o;
            o = e.call(this, r ?? "") || this;
            o.name = "GroupAddParticipantCountRateLimitServerError";
            o.status = t;
            o.participantLimit = n;
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(s.CustomError);
    const L = ((e)=>{
        function t(t, n, r, o) {
            let a;
            a = e.call(this, o ?? "") || this;
            a.name = "GroupAddParticipantTimeRateLimitServerError";
            a.status = t;
            a.backoff = n;
            a.limitType = r;
            return a;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(s.CustomError);
    const E = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, "Ad Account Recovery Required") || this;
            n.name = "AdAccountRecoveryRequiredError";
            n.emailMask = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(s.CustomError);
    const k = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "AdAccountRecoveryRequiredEmailMaskEmptyError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(s.CustomError);
    const I = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "CatalogIncorrectNonceError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(s.CustomError);
    l.ServerStatusCodeError = u;
    l.MexServerStatusCodeError = c;
    l.CatalogEditServerError = d;
    l.CatalogUnknownError = m;
    l.CollectionReorderError = p;
    l.E451 = _;
    l.E404 = f;
    l.E507 = g;
    l.LogoutDrop = y;
    l.EphemeralDrop = C;
    l.attachErrorLogger = b;
    l.UnexpectedJoinGroupViaInviteResponse = v;
    l.UnexpectedJoinSubgroupResponse = S;
    l.GroupAddParticipantCountRateLimitServerError = R;
    l.GroupAddParticipantTimeRateLimitServerError = L;
    l.AdAccountRecoveryRequiredError = E;
    l.AdAccountRecoveryRequiredEmailMaskEmptyError = k;
    l.CatalogIncorrectNonceError = I;
}, 98);