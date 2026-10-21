__d("WAWebMediaFileErrors", [
    "WACustomError"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "MediaFileError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    const s = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "InvalidImageFileType";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e);
    const u = ((e)=>{
        function t(t, n, r) {
            let o;
            o = e.call(this, t ?? "") || this;
            o.name = "InvalidMediaFileType";
            o.mediaType = n;
            o.mimeType = r;
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e);
    const c = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "InvalidMediaCheckRepairFailedType";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e);
    const d = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "MediaEncryptionError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e);
    const m = "plaintext hash mismatch";
    const p = "hmac mismatch";
    const _ = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "MediaDecryptionError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e);
    const f = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "MediaHashMismatch";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e);
    const g = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "MediaFileFailedLoad";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e);
    const h = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "MediaFileEmpty";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e);
    l.MediaFileError = e;
    l.InvalidImageFileType = s;
    l.InvalidMediaFileType = u;
    l.InvalidMediaCheckRepairFailedType = c;
    l.MediaEncryptionError = d;
    l.PLAINTEXT_HASH_MISMATCH_ERROR = m;
    l.HMAC_MISMATCH_ERROR = p;
    l.MediaDecryptionError = _;
    l.MediaHashMismatch = f;
    l.MediaFileFailedLoad = g;
    l.MediaFileEmpty = h;
}, 98);