__d("WAWebGetUserMediaErrors", [
    "WACustomError"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "GetUserMediaError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    const s = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "NotSupportedError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e);
    s.message = "The operation is not supported.";
    const u = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "NotAllowedError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e);
    u.message = "The user did not grant permission for the operation";
    const c = "denied by system";
    function d(e) {
        return e instanceof u && e.message.toLowerCase().includes(c);
    }
    const m = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, `RMR attempted on a newsletter message of media type ${t}, newsletter messages do not support media reupload requests`) || this;
            n.name = "RMRNotSupportedOnNewsletterMessagesError";
            n.mediaType = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e);
    const p = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, `RMR attempted on a ${t} message that has no mediaKey, so no media retry receipt can be sent`) || this;
            n.name = "RMRWithoutMediaKeyError";
            n.msgType = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e);
    const _ = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "ConstraintNotSatisfiedError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e);
    _.message = "One of the mandatory Constraints could not be satisfied.";
    const f = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "OverconstrainedError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e);
    f.message = "Due to changes in the environment, one or more mandatory constraints can no longer be satisfied.";
    const g = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "NotFoundError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e);
    g.message = "The object can not be found here.";
    const h = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "SourceUnavailableError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e);
    h.message = "The source of the MediaStream could not be accessed due to a hardware error (e.g. lock from another process).";
    const y = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "NotReadableError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e);
    y.message = "Although the user granted permission to use the matching devices, a hardware error occurred which prevented access to the device.";
    l.GetUserMediaError = e;
    l.NotSupportedError = s;
    l.NotAllowedError = u;
    l.isDeniedBySystem = d;
    l.RMRNotSupportedOnNewsletterMessagesError = m;
    l.RMRWithoutMediaKeyError = p;
    l.ConstraintNotSatisfiedError = _;
    l.OverconstrainedError = f;
    l.NotFoundError = g;
    l.SourceUnavailableError = h;
    l.NotReadableError = y;
}, 98);