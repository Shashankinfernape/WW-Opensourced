__d("useWAWebDocumentMediaType", [
    "WAWebFileUtils",
    "WAWebMimeTypes",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const useMemo = (e || (e = o("react"))).useMemo;
    function u(e) {
        const n = o("react-compiler-runtime").c(8);
        const { filename, mimetype } = e;
        let ext;
        let mime;
        if (Object.hasOwn(o("WAWebMimeTypes").DOCUMENT_MIMETYPES, mimetype)) {
            let s;
            if (n[0] !== mimetype) {
                s = o("WAWebMimeTypes").DOCUMENT_MIMETYPES[mimetype]?.ext?.toLowerCase();
                n[0] = mimetype;
                n[1] = s;
            } else {
                s = n[1];
            }
            ext = s;
            mime = mimetype;
        }
        let c;
        if (n[2] !== filename) {
            c = filename ? o("WAWebFileUtils").getFileExtension(filename) : null;
            n[2] = filename;
            n[3] = c;
        } else {
            c = n[3];
        }
        const d = c;
        if (ext == null || d != null && ext !== d) {
            let m;
            ext = d;
            mime = ext != null && (m = o("WAWebMimeTypes").EXT_TO_MIME == null ? undefined : o("WAWebMimeTypes").EXT_TO_MIME[ext]) != null ? m : null;
        }
        let p = mime != null ? o("WAWebMimeTypes").DOCUMENT_MIMETYPES[mime]?.icon : null;
        if (p == null) {
            p = "icon-doc-generic";
        }
        let _;
        if (n[4] !== ext || n[5] !== p || n[6] !== mime) {
            _ = {
                ext,
                mime,
                icon: p
            };
            n[4] = ext;
            n[5] = p;
            n[6] = mime;
            n[7] = _;
        } else {
            _ = n[7];
        }
        return _;
    }
    l.default = u;
}, 98);