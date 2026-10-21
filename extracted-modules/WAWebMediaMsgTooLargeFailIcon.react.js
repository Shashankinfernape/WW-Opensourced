__d("WAWebMediaMsgTooLargeFailIcon.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFailIcon.react",
    "WAWebL10nFilesize",
    "WAWebMediaGatingUtils",
    "WAWebModalManager",
    "WAWebMsgType",
    "WAWebServerPropConstants",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(8);
        const { displayType, mediaType } = e;
        let i;
        if (t[0] !== mediaType) {
            i = d(mediaType);
            t[0] = mediaType;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = i;
        let s;
        if (t[2] !== l) {
            s = function() {
                return m(l);
            };
            t[2] = l;
            t[3] = s;
        } else {
            s = t[3];
        }
        const c = s;
        let p;
        if (t[4] !== displayType || t[5] !== l || t[6] !== c) {
            const Component = r("WAWebFailIcon.react");
            p = <Component displayType={displayType} onClick={c} tooltip={l} ariaLabel={l}/>;
            t[4] = displayType;
            t[5] = l;
            t[6] = c;
            t[7] = p;
        } else {
            p = t[7];
        }
        return p;
    }
    function d(mediaType) {
        const t = o("WAWebL10nFilesize").getL10nFilesize(o("WAWebServerPropConstants").MAX_FILE_SIZE_BYTES);
        switch(mediaType){
            case o("WAWebMsgType").MSG_TYPE.AUDIO:
            case o("WAWebMsgType").MSG_TYPE.PTT:
                return s._("This audio is too large. You can send audio up to {maxSize}.", [
                    s._param("maxSize", o("WAWebL10nFilesize").getL10nFilesize(o("WAWebMediaGatingUtils").getUploadLimit("audio")))
                ]);
            case o("WAWebMsgType").MSG_TYPE.IMAGE:
                return s._("This image is too large. You can send images up to {maxSize}.", [
                    s._param("maxSize", o("WAWebL10nFilesize").getL10nFilesize(o("WAWebMediaGatingUtils").getUploadLimit("image")))
                ]);
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
                return s._("This video is too large. You can send videos up to {maxSize}.", [
                    s._param("maxSize", o("WAWebL10nFilesize").getL10nFilesize(o("WAWebMediaGatingUtils").getUploadLimit("video")))
                ]);
            case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                return s._("This document is too large. You can send documents up to {maxSize}.", [
                    s._param("maxSize", t)
                ]);
            case o("WAWebMsgType").MSG_TYPE.UNKNOWN:
            default:
                return s._("This file is too large. You can send files up to {maxSize}.", [
                    s._param("maxSize", t)
                ]);
        }
    }
    function m(e) {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(<Component onOK={o("WAWebModalManager").closeModalManager}>{e}</Component>);
    }
    l.default = c;
}, 226);