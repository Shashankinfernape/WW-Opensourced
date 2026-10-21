__d("WAWebAttachMenuFilePicker", [
    "$InternalEnum",
    "WAWebMimeTypes"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "AUDIO",
        "DOCUMENT",
        "IMAGE",
        "VIDEO",
        "MEDIA"
    ]);
    function s(t, n, r) {
        const i = t.acceptOverride ?? (t.accept === e.AUDIO ? o("WAWebMimeTypes").AUDIO_MIMES : t.accept === e.DOCUMENT ? o("WAWebMimeTypes").DOC_MIMES : t.accept === e.IMAGE ? o("WAWebMimeTypes").IMAGE_MIMES : t.accept === e.VIDEO ? o("WAWebMimeTypes").EXTENDED_VIDEO_MIMES : t.accept === e.MEDIA ? `${o("WAWebMimeTypes").IMAGE_MIMES},${o("WAWebMimeTypes").EXTENDED_VIDEO_MIMES}` : (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t.accept}`);
        })());
        const l = document.createElement("input");
        l.type = "file";
        l.accept = i;
        l.multiple = t.multiple;
        l.style.display = "none";
        const s = ()=>{
            l.remove();
        };
        l.onchange = function({ target }) {
            if (target instanceof HTMLInputElement) {
                const i = Array.from(target.files ?? []);
                s();
                r();
                if (i.length) {
                    const l = i.map(t.transformAttachment);
                    n(l);
                }
            }
        };
        l.oncancel = function() {
            s();
            r();
        };
        document.body.appendChild(l);
        l.click();
    }
    l.FilePickerMimeType = e;
    l.createFilePicker = s;
}, 98);