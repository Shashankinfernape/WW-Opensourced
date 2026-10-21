__d("WAWebPipFloatingMsgVideoPlayer.react", [
    "WAWebMediaDataGetters",
    "WAWebMediaOpaqueData",
    "WAWebPipConst",
    "WAWebPipFloatingVideoPlayer.react",
    "WAWebPipMsgVideoPlayer.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMediaDataValues"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const n = o("react-compiler-runtime").c(31);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        let l;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebMediaDataGetters").getPreview,
                o("WAWebMediaDataGetters").getAspectRatio
            ];
            n[3] = l;
        } else {
            l = n[3];
        }
        const s = o("useWAWebMediaDataValues").useMediaDataValues(a.mediaData, l);
        const c = s[0];
        const d = s[1];
        let m;
        if (n[4] !== c) {
            m = c instanceof r("WAWebMediaOpaqueData") ? `url(${c.url()})` : undefined;
            n[4] = c;
            n[5] = m;
        } else {
            m = n[5];
        }
        const previewUrl = m;
        let _;
        if (n[6] !== a.msg.id) {
            _ = a.msg.id.toString();
            n[6] = a.msg.id;
            n[7] = _;
        } else {
            _ = n[7];
        }
        let f;
        if (n[8] !== a.autoPlay || n[9] !== a.disablePiPControls || n[10] !== a.mediaData || n[11] !== a.msg || n[12] !== a.onClose || n[13] !== a.onError || n[14] !== a.onMissingMedia || n[15] !== a.onRefSet || n[16] !== a.onSetFullscreenToggleCallback || n[17] !== a.onUnsupportedMedia || n[18] !== a.onVideoMetadataChange || n[19] !== a.startTime) {
            const Component = o("WAWebPipMsgVideoPlayer.react").WrappedMsgVideoPlayer;
            f = <Component msg={a.msg} mediaData={a.mediaData} startTime={a.startTime} onClose={a.onClose} onError={a.onError} onMissingMedia={a.onMissingMedia} onUnsupportedMedia={a.onUnsupportedMedia} autoPlay={a.autoPlay} type={o("WAWebPipConst").PlayerType.FLOATER} disablePiPControls={a.disablePiPControls} onRefSet={a.onRefSet} onVideoMetadataChange={a.onVideoMetadataChange} onSetFullscreenToggleCallback={a.onSetFullscreenToggleCallback}/>;
            n[8] = a.autoPlay;
            n[9] = a.disablePiPControls;
            n[10] = a.mediaData;
            n[11] = a.msg;
            n[12] = a.onClose;
            n[13] = a.onError;
            n[14] = a.onMissingMedia;
            n[15] = a.onRefSet;
            n[16] = a.onSetFullscreenToggleCallback;
            n[17] = a.onUnsupportedMedia;
            n[18] = a.onVideoMetadataChange;
            n[19] = a.startTime;
            n[20] = f;
        } else {
            f = n[20];
        }
        let g;
        if (n[21] !== d || n[22] !== previewUrl || n[23] !== a.animationStartStyle || n[24] !== a.bottomContent || n[25] !== a.enableDragBar || n[26] !== a.topContent || n[27] !== i || n[28] !== _ || n[29] !== f) {
            const Component = o("WAWebPipFloatingVideoPlayer.react").FloatingVideoPlayer;
            g = <Component key={_} ref={i} aspectRatio={d} previewUrl={previewUrl} animationStartStyle={a.animationStartStyle} bottomContent={a.bottomContent} topContent={a.topContent} enableDragBar={a.enableDragBar}>{f}</Component>;
            n[21] = d;
            n[22] = previewUrl;
            n[23] = a.animationStartStyle;
            n[24] = a.bottomContent;
            n[25] = a.enableDragBar;
            n[26] = a.topContent;
            n[27] = i;
            n[28] = _;
            n[29] = f;
            n[30] = g;
        } else {
            g = n[30];
        }
        return g;
    }
    l.default = c;
}, 98);