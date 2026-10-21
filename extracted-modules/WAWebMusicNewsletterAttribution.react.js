__d("WAWebMusicNewsletterAttribution.react", [
    "WAWebClickable.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMusicAttributionLoadable.react",
    "WAWebMusicAttributionModalLoadable.react",
    "WAWebMusicGatingUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(17);
        const { isFullscreen, mediaController, msgKey, onCloseModal, onShowModal, playing, xstyle } = e;
        let d;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            d = [
                o("WAWebMsgGetters").getFirstMusicAnnotation
            ];
            t[0] = d;
        } else {
            d = t[0];
        }
        const m = o("useWAWebMsgValues").useMsgValues(msgKey, d);
        const p = m[0];
        const _ = p != null;
        let f;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                o("WAWebMsgGetters").getFirstMusicAnnotationEmbeddedContent
            ];
            t[1] = f;
        } else {
            f = t[1];
        }
        const g = o("useWAWebMsgValues").useMsgValues(msgKey, f);
        const musicMetadata = g[0];
        if (!_ || musicMetadata == null || !o("WAWebMusicGatingUtils").isStatusMusicReceiverEnabledForNewsletter()) {
            return null;
        }
        let y;
        if (t[2] !== isFullscreen || t[3] !== mediaController || t[4] !== msgKey || t[5] !== musicMetadata || t[6] !== onCloseModal || t[7] !== onShowModal) {
            y = function(t) {
                t.preventDefault();
                t.stopPropagation();
                const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                if (e != null) {
                    o("WAWebMusicAttributionModalLoadable.react").showMusicStatusAttributionModalLoadable({
                        closeModal: onCloseModal,
                        isFullscreen,
                        msg: e,
                        musicMetadata,
                        renderModal: onShowModal,
                        statusMediaController: mediaController
                    });
                }
            };
            t[2] = isFullscreen;
            t[3] = mediaController;
            t[4] = msgKey;
            t[5] = musicMetadata;
            t[6] = onCloseModal;
            t[7] = onShowModal;
            t[8] = y;
        } else {
            y = t[8];
        }
        const C = y;
        let b;
        if (t[9] !== msgKey || t[10] !== musicMetadata || t[11] !== playing || t[12] !== xstyle) {
            b = s.jsx(o("WAWebMusicAttributionLoadable.react").MusicAttributionLoadable, {
                xstyle,
                msgKey,
                musicMetadata,
                playing
            });
            t[9] = msgKey;
            t[10] = musicMetadata;
            t[11] = playing;
            t[12] = xstyle;
            t[13] = b;
        } else {
            b = t[13];
        }
        let v;
        if (t[14] !== C || t[15] !== b) {
            const Component = o("WAWebClickable.react").Clickable;
            v = <Component onClick={C}>{b}</Component>;
            t[14] = C;
            t[15] = b;
            t[16] = v;
        } else {
            v = t[16];
        }
        return v;
    }
    l.default = u;
}, 98);