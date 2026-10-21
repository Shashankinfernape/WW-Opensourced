__d("WAWebDownloadManagerErrors", [
    "WAWebBackendErrors"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            let t;
            t = e.call(this, 404) || this;
            t.name = "MediaNotOnPhone";
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBackendErrors").ServerStatusCodeError);
    l.MediaNotOnPhone = e;
}, 98);