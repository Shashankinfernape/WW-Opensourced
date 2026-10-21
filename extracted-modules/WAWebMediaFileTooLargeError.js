__d("WAWebMediaFileTooLargeError", [
    "WAWebMediaFileErrors"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t, n, r) {
            let o;
            o = e.call(this, `File (${t}) size = ${r} exceeds limit of ${n}`) || this;
            o.name = "MediaFileTooLarge";
            o.mediaType = t;
            o.uploadLimit = n;
            o.actualSize = r;
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebMediaFileErrors").MediaFileError);
    l.default = e;
}, 98);