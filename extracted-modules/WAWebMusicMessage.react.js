__d("WAWebMusicMessage.react", [
    "fbt",
    "WAWebClockDurationFormatters",
    "WAWebL10N",
    "WAWebMessageStickerLikeBubbleContainer.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMusicMessageArtwork.react",
    "WAWebMusicMsgInfoPopupLoadable",
    "WAWebMusicMsgPlayerStore",
    "WAWebMusicPlaybackUtils",
    "WAWebMusicSoundAnimationLoadable.react",
    "WAWebSpinner.react",
    "WDSIconIcExplicitFilled.react",
    "WDSIconIcPauseFilled.react",
    "WDSIconIcPlayArrowFilled.react",
    "WDSIconMusicNoteSlash.react",
    "WDSText.react",
    "bx",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues",
    "useWAWebMusicChatsRefresh",
    "useWAWebMusicMsgAutoPause",
    "useWAWebMusicMsgPlayerState",
    "useWAWebPrefersReducedMotion"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useEffect = u.useEffect;
    const m = 160;
    const p = 40;
    const _ = 80;
    const f = 70;
    const g = 40;
    const h = 24;
    const y = 1000;
    const C = 16;
    const b = 14;
    const v = r("bx").getURL(r("bx")("110648"));
    const S = "3s";
    const R = "300ms";
    const L = "x1wc8ddo-B";
    const E = {
        vinyl: {
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineStart: "x9pwknu",
            width: "xq1dxzn",
            height: "x1ymw6g",
            $$css: true
        },
        vinylOut: {
            transform: "x1avfe6s",
            $$css: true
        },
        vinylOutRtl: {
            transform: "x1c8c9qi",
            $$css: true
        },
        vinylSlide: {
            transitionProperty: "x11xpdln",
            transitionDuration: "x1d8287x",
            transitionTimingFunction: "x9lcvmn",
            $$css: true
        },
        explicitIcon: {
            flexShrink: "x2lah0s",
            color: "x17t9dm2",
            $$css: true
        },
        textShadow: {
            textShadow: "xcjjdam",
            $$css: true
        },
        playIcon: {
            color: "x17t9dm2",
            $$css: true
        }
    };
    function KComponent(e) {
        const t = o("react-compiler-runtime").c(65);
        const { displayAuthor, displayType, msgKey, position, quotedMsg, stickerLikeBubbleContainerRef } = e;
        let m;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            m = [
                o("WAWebMsgGetters").getMusicData
            ];
            t[0] = m;
        } else {
            m = t[0];
        }
        const p = o("useWAWebMsgValues").useMsgValues(msgKey, m);
        const music = p[0];
        const f = r("useWAWebMusicMsgAutoPause")(msgKey);
        const g = r("useWAWebMusicChatsRefresh")(msgKey);
        if (music == null) {
            return null;
        }
        let h;
        if (t[1] !== music) {
            h = o("WAWebMusicPlaybackUtils").getMusicMessageUnplayableReason(music);
            t[1] = music;
            t[2] = h;
        } else {
            h = t[2];
        }
        const unplayableReason = h;
        let C;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            C = {
                className: "x1n2onr6 xafpxmx x1ymw6g"
            };
            t[3] = C;
        } else {
            C = t[3];
        }
        let v;
        if (t[4] !== msgKey || t[5] !== music.artworkUri) {
            v = <IComponent artworkUri={music.artworkUri} msgKey={msgKey}/>;
            t[4] = msgKey;
            t[5] = music.artworkUri;
            t[6] = v;
        } else {
            v = t[6];
        }
        let S;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            S = {
                className: "x10l6tqk x13vifvy x1o0tod xq1dxzn x1ymw6g x6ikm8r x10wlt62 x9f619 x78zum5 x1cy8zhl xl56j7k x1p57kb1 x1280gxy"
            };
            t[7] = S;
        } else {
            S = t[7];
        }
        let R;
        if (t[8] !== music || t[9] !== unplayableReason) {
            R = function() {
                o("WAWebMusicMsgInfoPopupLoadable").showMusicMsgInfoPopupLoadable(music, unplayableReason);
            };
            t[8] = music;
            t[9] = unplayableReason;
            t[10] = R;
        } else {
            R = t[10];
        }
        let L;
        if (t[11] !== music.artworkUri) {
            L = c.jsx(r("WAWebMusicMessageArtwork.react"), {
                artworkUri: music.artworkUri
            }, music.artworkUri);
            t[11] = music.artworkUri;
            t[12] = L;
        } else {
            L = t[12];
        }
        let k;
        if (t[13] !== msgKey || t[14] !== music.clipDurationMs) {
            k = <D clipDurationMs={music.clipDurationMs} msgKey={msgKey}/>;
            t[13] = msgKey;
            t[14] = music.clipDurationMs;
            t[15] = k;
        } else {
            k = t[15];
        }
        let P;
        if (t[16] !== msgKey || t[17] !== music || t[18] !== unplayableReason) {
            P = unplayableReason != null ? <$ msgKey={msgKey} music={music} unplayableReason={unplayableReason}/> : <X1Component author={music.author} msgKey={msgKey} title={music.title}/>;
            t[16] = msgKey;
            t[17] = music;
            t[18] = unplayableReason;
            t[19] = P;
        } else {
            P = t[19];
        }
        let N;
        if (t[20] === Symbol.for("react.memo_cache_sentinel")) {
            N = {
                className: "x10l6tqk x1ey2m1c x1o0tod xtijo5x x78zum5 xdt5ytf x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xcwsrru x972fbf x10w94by x1qhh985 x14e42zd x1yc453h x1ypdohk xjbqb8w"
            };
            t[20] = N;
        } else {
            N = t[20];
        }
        let M;
        if (t[21] !== music.author || t[22] !== music.isExplicit || t[23] !== music.title) {
            M = music.isExplicit === true ? s._("Song details: {song title} by {song artist}, explicit", [
                s._param("song title", music.title),
                s._param("song artist", music.author)
            ]) : s._("Song details: {song title} by {song artist}", [
                s._param("song title", music.title),
                s._param("song artist", music.author)
            ]);
            t[21] = music.author;
            t[22] = music.isExplicit;
            t[23] = music.title;
            t[24] = M;
        } else {
            M = t[24];
        }
        let w;
        if (t[25] !== music || t[26] !== unplayableReason) {
            w = function(t) {
                t.stopPropagation();
                o("WAWebMusicMsgInfoPopupLoadable").showMusicMsgInfoPopupLoadable(music, unplayableReason);
            };
            t[25] = music;
            t[26] = unplayableReason;
            t[27] = w;
        } else {
            w = t[27];
        }
        let A;
        if (t[28] === Symbol.for("react.memo_cache_sentinel")) {
            A = {
                className: "x78zum5 x6s0dn4 x1trrmfo xeuugli"
            };
            t[28] = A;
        } else {
            A = t[28];
        }
        let F;
        if (t[29] !== msgKey) {
            F = <TComponent msgKey={msgKey}/>;
            t[29] = msgKey;
            t[30] = F;
        } else {
            F = t[30];
        }
        let O;
        if (t[31] !== music.title) {
            const Component = r("WDSText.react");
            O = <Component type="Body2" colorName="persistentAlwaysWhite" maxLines={1} testid="music-message-title" xstyle={E.textShadow}>{music.title}</Component>;
            t[31] = music.title;
            t[32] = O;
        } else {
            O = t[32];
        }
        let B;
        if (t[33] !== music.isExplicit) {
            B = music.isExplicit === true && c.jsx(r("WDSIconIcExplicitFilled.react"), {
                height: b,
                width: b,
                "aria-label": s._("Explicit"),
                iconXstyle: E.explicitIcon,
                testid: "music-message-explicit"
            });
            t[33] = music.isExplicit;
            t[34] = B;
        } else {
            B = t[34];
        }
        let W;
        if (t[35] !== F || t[36] !== O || t[37] !== B) {
            W = <div {...babelHelpers.extends({}, A, {
                children: [
                    F,
                    O,
                    B
                ]
            })}/>;
            t[35] = F;
            t[36] = O;
            t[37] = B;
            t[38] = W;
        } else {
            W = t[38];
        }
        let q;
        if (t[39] !== music.author) {
            const Component = r("WDSText.react");
            q = <Component type="Body3" colorName="persistentAlwaysWhite" maxLines={1} testid="music-message-artist" xstyle={E.textShadow}>{music.author}</Component>;
            t[39] = music.author;
            t[40] = q;
        } else {
            q = t[40];
        }
        let U;
        if (t[41] !== M || t[42] !== w || t[43] !== W || t[44] !== q) {
            U = <button {...babelHelpers.extends({}, N, {
                "aria-label": M,
                "data-testid": "music-message-details",
                onClick: w,
                type: "button",
                children: [
                    W,
                    q
                ]
            })}/>;
            t[41] = M;
            t[42] = w;
            t[43] = W;
            t[44] = q;
            t[45] = U;
        } else {
            U = t[45];
        }
        let V;
        if (t[46] !== g || t[47] !== U || t[48] !== R || t[49] !== L || t[50] !== k || t[51] !== P) {
            V = <div {...babelHelpers.extends({}, S, {
                "data-testid": "music-message-cover",
                onClick: R,
                ref: g,
                children: [
                    L,
                    k,
                    P,
                    U
                ]
            })}/>;
            t[46] = g;
            t[47] = U;
            t[48] = R;
            t[49] = L;
            t[50] = k;
            t[51] = P;
            t[52] = V;
        } else {
            V = t[52];
        }
        let H;
        if (t[53] !== f || t[54] !== V || t[55] !== v) {
            H = <div {...babelHelpers.extends({}, C, {
                "data-testid": "music-message-card",
                ref: f,
                children: [
                    v,
                    V
                ]
            })}/>;
            t[53] = f;
            t[54] = V;
            t[55] = v;
            t[56] = H;
        } else {
            H = t[56];
        }
        let G;
        if (t[57] !== displayAuthor || t[58] !== displayType || t[59] !== msgKey || t[60] !== position || t[61] !== quotedMsg || t[62] !== stickerLikeBubbleContainerRef || t[63] !== H) {
            const Component = r("WAWebMessageStickerLikeBubbleContainer.react");
            G = <Component displayAuthor={displayAuthor} displayType={displayType} msgContent={H} msgKey={msgKey} position={position} quotedMsg={quotedMsg} ref={stickerLikeBubbleContainerRef}/>;
            t[57] = displayAuthor;
            t[58] = displayType;
            t[59] = msgKey;
            t[60] = position;
            t[61] = quotedMsg;
            t[62] = stickerLikeBubbleContainerRef;
            t[63] = H;
            t[64] = G;
        } else {
            G = t[64];
        }
        return G;
    }
    function IComponent(t) {
        const n = o("react-compiler-runtime").c(18);
        const { artworkUri, msgKey } = t;
        const l = r("useWAWebMusicMsgPlayerState")();
        const { msg, status } = l;
        const d = r("useWAWebPrefersReducedMotion")();
        let m;
        let p;
        if (n[0] !== msg || n[1] !== msgKey || n[2] !== d || n[3] !== status) {
            m = msg != null && msg.id.equals(msgKey) && status === "playing";
            p = (e || (e = r("stylex"))).props(E.vinyl, m && (r("WAWebL10N").isRTL() ? E.vinylOutRtl : E.vinylOut), !d && E.vinylSlide);
            n[0] = msg;
            n[1] = msgKey;
            n[2] = d;
            n[3] = status;
            n[4] = m;
            n[5] = p;
        } else {
            m = n[4];
            p = n[5];
        }
        let _;
        if (n[6] !== m || n[7] !== d) {
            _ = ({
                0: {
                    className: "x1n2onr6 xh8yej3 x5yr21d"
                },
                2: {
                    className: "x1n2onr6 xh8yej3 x5yr21d x1aerksh x7t6ubo xa4qsjk x1esw782"
                },
                1: {
                    className: "x1n2onr6 xh8yej3 x5yr21d xorstpt"
                },
                3: {
                    className: "x1n2onr6 xh8yej3 x5yr21d x1aerksh x7t6ubo xa4qsjk x1esw782 xorstpt"
                }
            })[!d << 1 | !m << 0];
            n[6] = m;
            n[7] = d;
            n[8] = _;
        } else {
            _ = n[8];
        }
        let f;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            f = <img className="x1lliihq xh8yej3 x5yr21d" alt="" src={v}/>;
            n[9] = f;
        } else {
            f = n[9];
        }
        let g;
        if (n[10] !== artworkUri) {
            g = artworkUri != null && <img className="x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod xr1yuqi x11t971q x4ii5y1 xvc5jky xo5x3gg xnxb3zj xt8t1vi x1xc408v x129tdwq x15urzxu xl1xv1r" alt="" crossOrigin="anonymous" data-testid="music-message-vinyl-label" src={artworkUri}/>;
            n[10] = artworkUri;
            n[11] = g;
        } else {
            g = n[11];
        }
        let h;
        if (n[12] !== _ || n[13] !== g) {
            h = <div {...babelHelpers.extends({}, _, {
                "data-testid": "music-message-vinyl-disc",
                children: [
                    f,
                    g
                ]
            })}/>;
            n[12] = _;
            n[13] = g;
            n[14] = h;
        } else {
            h = n[14];
        }
        let y;
        if (n[15] !== p || n[16] !== h) {
            y = <div {...babelHelpers.extends({}, p, {
                "aria-hidden": true,
                "data-testid": "music-message-vinyl",
                children: h
            })}/>;
            n[15] = p;
            n[16] = h;
            n[17] = y;
        } else {
            y = n[17];
        }
        return y;
    }
    function TComponent(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_msgKey = e.msgKey;
        const a = r("useWAWebMusicMsgPlayerState")();
        const { msg, status } = a;
        if (msg == null || !msg.id.equals(e_msgKey) || status !== "playing") {
            return null;
        }
        let s;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            s = {
                className: "x1kky2od xlup9mm"
            };
            t[0] = s;
        } else {
            s = t[0];
        }
        let u;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            u = <div {...babelHelpers.extends({}, s, {
                "data-testid": "music-message-equalizer",
                children: c.jsx(o("WAWebMusicSoundAnimationLoadable.react").WAWebMusicSoundAnimationLoadable, {
                    play: true
                })
            })}/>;
            t[1] = u;
        } else {
            u = t[1];
        }
        return u;
    }
    function D(e) {
        const t = o("react-compiler-runtime").c(5);
        const { clipDurationMs, msgKey } = e;
        const i = r("useWAWebMusicMsgPlayerState")();
        const { msg, positionMs, status } = i;
        if (clipDurationMs == null) {
            return null;
        }
        const d = msg != null && msg.id.equals(msgKey) && status !== "idle";
        const m = d ? Math.max(clipDurationMs - positionMs, 0) : clipDurationMs;
        let p;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            p = {
                className: "x10l6tqk x13vifvy x1o0tod xtijo5x x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1n0ywp1"
            };
            t[0] = p;
        } else {
            p = t[0];
        }
        const _ = Math.ceil(m / y);
        let f;
        if (t[1] !== _) {
            f = o("WAWebClockDurationFormatters").durationStr(_);
            t[1] = _;
            t[2] = f;
        } else {
            f = t[2];
        }
        let g;
        if (t[3] !== f) {
            const Component = r("WDSText.react");
            g = <div {...babelHelpers.extends({}, p, {
                children: <Component type="Body3" colorName="persistentAlwaysWhite" testid="music-message-clip-duration" xstyle={E.textShadow}>{f}</Component>
            })}/>;
            t[3] = f;
            t[4] = g;
        } else {
            g = t[4];
        }
        return g;
    }
    function X1Component(e) {
        const t = o("react-compiler-runtime").c(18);
        const { author, msgKey, title } = e;
        const l = r("useWAWebMusicMsgPlayerState")();
        const { msg, status } = l;
        let m;
        if (t[0] !== msg || t[1] !== msgKey || t[2] !== status) {
            m = msg != null && msg.id.equals(msgKey) ? status : "idle";
            t[0] = msg;
            t[1] = msgKey;
            t[2] = status;
            t[3] = m;
        } else {
            m = t[3];
        }
        const p = m;
        const _ = p === "loading" || p === "playing";
        let f;
        if (t[4] !== _ || t[5] !== msgKey) {
            f = function(t) {
                t.stopPropagation();
                if (_) {
                    o("WAWebMusicMsgPlayerStore").MusicMsgPlayer.pause();
                    return;
                }
                const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                if (e != null) {
                    o("WAWebMusicMsgPlayerStore").MusicMsgPlayer.play(e);
                }
            };
            t[4] = _;
            t[5] = msgKey;
            t[6] = f;
        } else {
            f = t[6];
        }
        const g = f;
        let h;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            h = {
                className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod xr1yuqi x11t971q x4ii5y1 xvc5jky x972fbf x10w94by x1qhh985 x14e42zd xexx8yu xyri2b x18d9i69 x1c1uobl x1ypdohk x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp xt8t1vi x1xc408v x129tdwq x15urzxu xy102ij"
            };
            t[7] = h;
        } else {
            h = t[7];
        }
        let y;
        if (t[8] !== author || t[9] !== _ || t[10] !== title) {
            y = _ ? s._("Pause {song title}", [
                s._param("song title", title)
            ]) : s._("Play {song title} by {song artist}", [
                s._param("song title", title),
                s._param("song artist", author)
            ]);
            t[8] = author;
            t[9] = _;
            t[10] = title;
            t[11] = y;
        } else {
            y = t[11];
        }
        let C;
        if (t[12] !== p) {
            C = <PComponent status={p}/>;
            t[12] = p;
            t[13] = C;
        } else {
            C = t[13];
        }
        let b;
        if (t[14] !== g || t[15] !== y || t[16] !== C) {
            b = <button {...babelHelpers.extends({}, h, {
                "aria-label": y,
                "data-testid": "music-message-play",
                onClick: g,
                type: "button",
                children: C
            })}/>;
            t[14] = g;
            t[15] = y;
            t[16] = C;
            t[17] = b;
        } else {
            b = t[17];
        }
        return b;
    }
    function $(e) {
        const t = o("react-compiler-runtime").c(11);
        const { msgKey, music, unplayableReason } = e;
        let l;
        let u;
        if (t[0] !== msgKey) {
            l = function() {
                if (o("WAWebMusicMsgPlayerStore").MusicMsgPlayer.getState().msg?.id.equals(msgKey) === true) {
                    o("WAWebMusicMsgPlayerStore").MusicMsgPlayer.stop();
                }
            };
            u = [
                msgKey
            ];
            t[0] = msgKey;
            t[1] = l;
            t[2] = u;
        } else {
            l = t[1];
            u = t[2];
        }
        u_useEffect(l, u);
        let m;
        let p;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = {
                className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod xr1yuqi x11t971q x4ii5y1 xvc5jky x972fbf x10w94by x1qhh985 x14e42zd xexx8yu xyri2b x18d9i69 x1c1uobl x1ypdohk x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp xt8t1vi x1xc408v x129tdwq x15urzxu xy102ij"
            };
            p = s._("The song is unavailable");
            t[3] = m;
            t[4] = p;
        } else {
            m = t[3];
            p = t[4];
        }
        let _;
        if (t[5] !== music || t[6] !== unplayableReason) {
            _ = function(t) {
                t.stopPropagation();
                o("WAWebMusicMsgInfoPopupLoadable").showMusicMsgInfoPopupLoadable(music, unplayableReason);
            };
            t[5] = music;
            t[6] = unplayableReason;
            t[7] = _;
        } else {
            _ = t[7];
        }
        let f;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            f = c.jsx(r("WDSIconMusicNoteSlash.react"), {
                height: h,
                width: h,
                xstyle: E.playIcon
            });
            t[8] = f;
        } else {
            f = t[8];
        }
        let g;
        if (t[9] !== _) {
            g = <button {...babelHelpers.extends({}, m, {
                "aria-label": p,
                "data-testid": "music-message-unavailable",
                onClick: _,
                type: "button",
                children: f
            })}/>;
            t[9] = _;
            t[10] = g;
        } else {
            g = t[10];
        }
        return g;
    }
    function PComponent(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_status = e.status;
        if (e_status === "loading") {
            let a;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                a = c.jsx(o("WAWebSpinner.react").Spinner, {
                    size: h,
                    color: "white"
                });
                t[0] = a;
            } else {
                a = t[0];
            }
            return a;
        }
        const I = r(e_status === "playing" ? "WDSIconIcPauseFilled.react" : "WDSIconIcPlayArrowFilled.react");
        let l;
        if (t[1] !== I) {
            l = <I height={h} width={h} xstyle={E.playIcon}/>;
            t[1] = I;
            t[2] = l;
        } else {
            l = t[2];
        }
        return l;
    }
    l.default = KComponent;
}, 226);