__d("WAWebMediaLoadErrors", [
    "WACustomError"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "CatalogImageDownloadError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })((e = o("WACustomError")).CustomError);
    const u = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "MediaNeedsReupload";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    const c = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "FileNotReadableError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    const d = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t) || this;
            n.name = "MediaLoadError";
            n.src = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    const m = ((e)=>{
        function t() {
            let t;
            t = e.call(this, "Transcode blob too large") || this;
            t.name = "TranscodeBlobTooLargeError";
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    const p = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, `Unable to play video. Reason: ${String(t)}`) || this;
            n.name = "UnableToPlayVideoError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    const _ = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t) || this;
            n.name = "MediaDragDropError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(d);
    const f = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "MediaUnsupportedError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    f.message = "Media format is unsupported";
    const g = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "UnableToGetContentLengthError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.CustomError);
    g.message = "Failed to get media contentLength from mms";
    l.CatalogImageDownloadError = s;
    l.MediaNeedsReupload = u;
    l.FileNotReadableError = c;
    l.MediaLoadError = d;
    l.TranscodeBlobTooLargeError = m;
    l.UnableToPlayVideoError = p;
    l.MediaDragDropError = _;
    l.MediaUnsupportedError = f;
    l.UnableToGetContentLengthError = g;
}, 98);