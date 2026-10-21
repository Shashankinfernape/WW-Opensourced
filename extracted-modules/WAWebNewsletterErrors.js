__d("WAWebNewsletterErrors", [
    "WACustomError"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "UnexpectedNonNewsletterJidError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })((e = o("WACustomError")).CustomError);
    const u = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "UnexpectedNonNewsletterChatError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    const c = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "MissingNewsletterServerIdError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    const d = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "NewsletterMediaUploadError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    const m = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "UnexpectedNewsletterQuotedParticipantMismatchError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    l.UnexpectedNonNewsletterJidError = s;
    l.UnexpectedNonNewsletterChatError = u;
    l.MissingNewsletterServerIdError = c;
    l.NewsletterMediaUploadError = d;
    l.UnexpectedNewsletterQuotedParticipantMismatchError = m;
}, 98);