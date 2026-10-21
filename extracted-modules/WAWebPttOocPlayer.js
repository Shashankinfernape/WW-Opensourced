__d("WAWebPttOocPlayer", [
    "WAWebAudioFileIcon.react",
    "WAWebAudioStatusIcon.react",
    "WAWebChatEntryPoint",
    "WAWebChatGetters",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebDetailImage.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebName.react",
    "WAWebNewsletterName.react",
    "WAWebPttCalculateAudioProgress",
    "WAWebPttCloseButton.react",
    "WAWebPttDailyUtils",
    "WAWebPttOocMarquee",
    "WAWebPttPlayPauseButton.react",
    "WAWebPttPrefs",
    "WAWebPttPrefsGetters",
    "WAWebPttStatusIconStyleable.react",
    "WAWebPttUseMsgAudioPlaybackController",
    "WAWebTabOrder",
    "WAWebThemeContext",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebAnimationFrames",
    "useWAWebChatValues",
    "useWAWebListener",
    "useWAWebMeasure",
    "useWAWebMsgValues",
    "useWAWebPttPrefsValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useContext, useEffect, useRef, useState } = u;
    const f = 62;
    const g = 3;
    const h = 26;
    const y = 40;
    const C = 18;
    const b = {
        senderButton: {
            maxWidth: "x193iq5w",
            height: "x5yr21d",
            display: "x78zum5",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            justifyContent: "xl56j7k",
            alignItems: "x6s0dn4",
            ":hover_opacity": "x5z6fxw",
            $$css: true
        },
        senderName: {
            color: "xmzmlnv",
            fontSize: "x1jchvi3",
            $$css: true
        }
    };
    const v = {
        outOfChatBg: {
            fill: "xhzorvt",
            $$css: true
        },
        outOfChatIcon: {
            color: "xll8lwp",
            $$css: true
        },
        forwardedBg: {
            fill: "xzp0ayt",
            $$css: true
        },
        forwardedIcon: {
            color: "x17t9dm2",
            $$css: true
        }
    };
    function SComponent() {
        const e = o("react-compiler-runtime").c(7);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = [
                o("WAWebPttPrefsGetters").getOutOfChatPlayerMessage
            ];
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = o("useWAWebPttPrefsValues").usePttPrefsValues(t);
        const r = n[0];
        let a;
        let i;
        if (e[1] !== r) {
            a = function() {
                if (r) {
                    o("WAWebMsgCollection").MsgCollection.gadd(r);
                }
            };
            i = [
                r
            ];
            e[1] = r;
            e[2] = a;
            e[3] = i;
        } else {
            a = e[2];
            i = e[3];
        }
        useEffect(a, i);
        const l = o("WAWebPttUseMsgAudioPlaybackController").useMsgAudioPlaybackController(r);
        let u;
        if (e[4] !== r || e[5] !== l) {
            u = r && l ? <R msg={r} playbackController={l}/> : null;
            e[4] = r;
            e[5] = l;
            e[6] = u;
        } else {
            u = e[6];
        }
        return u;
    }
    function R(e) {
        const t = o("react-compiler-runtime").c(48);
        const { msg, playbackController } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebFrontendMsgGetters").getAsRevoked,
                o("WAWebFrontendMsgGetters").getPendingDeleteForMe
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = o("useWAWebMsgValues").useMsgValues(msg.id, i);
        const u = l[0];
        const c = l[1];
        let d;
        if (t[1] !== msg) {
            d = o("WAWebFrontendMsgGetters").getChat(msg.unsafe());
            t[1] = msg;
            t[2] = d;
        } else {
            d = t[2];
        }
        const f = d;
        const { audio, pttPlaybackLogger } = playbackController;
        const y = x(msg);
        const C = useState(!audio.paused);
        const isPlaying = C[0];
        const S = C[1];
        const RRef = useRef(null);
        let k;
        if (t[3] !== audio.paused) {
            k = function() {
                return S(!audio.paused);
            };
            t[3] = audio.paused;
            t[4] = k;
        } else {
            k = t[4];
        }
        const I = k;
        let T;
        if (t[5] !== I) {
            T = function() {
                I();
            };
            t[5] = I;
            t[6] = T;
        } else {
            T = t[6];
        }
        o("useWAWebListener").useListener(audio, "playing", T);
        let $;
        if (t[7] !== f || t[8] !== msg || t[9] !== pttPlaybackLogger || t[10] !== y || t[11] !== I) {
            $ = function() {
                I();
                if (y) {
                    pttPlaybackLogger.markAsPlayedInOoc();
                    if (RRef.current !== msg) {
                        RRef.current = msg;
                        o("WAWebPttDailyUtils").incrementPttDailyCount(o("WAWebPttDailyUtils").PttDailyCountKind.OOC_PLAYBACK, r("nullthrows")(o("WAWebFrontendChatGetters").getKind(f)));
                    }
                }
            };
            t[7] = f;
            t[8] = msg;
            t[9] = pttPlaybackLogger;
            t[10] = y;
            t[11] = I;
            t[12] = $;
        } else {
            $ = t[12];
        }
        o("useWAWebListener").useListener(audio, "timeupdate", $);
        o("useWAWebListener").useListener(audio, "pause", I);
        let P;
        if (t[13] !== y || t[14] !== I) {
            P = function() {
                I();
                if (y) {
                    RRef.current = null;
                }
            };
            t[13] = y;
            t[14] = I;
            t[15] = P;
        } else {
            P = t[15];
        }
        o("useWAWebListener").useListener(audio, "ended", P);
        let N;
        if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
            N = [
                "status_viewer_open",
                "status_posting_flow",
                "open_lock_screen_modal"
            ];
            t[16] = N;
        } else {
            N = t[16];
        }
        let M;
        if (t[17] !== audio) {
            M = function() {
                audio.pause();
            };
            t[17] = audio;
            t[18] = M;
        } else {
            M = t[18];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, N, M);
        let w;
        if (t[19] !== audio) {
            w = function() {
                audio.pause();
                o("WAWebPttPrefs").PttPrefs.closeOocPlayer();
            };
            t[19] = audio;
            t[20] = w;
        } else {
            w = t[20];
        }
        o("useWAWebListener").useListener(f, "remove", w);
        let A;
        let F;
        if (t[21] !== u || t[22] !== audio || t[23] !== c) {
            A = function() {
                if (u || c) {
                    audio.pause();
                    o("WAWebPttPrefs").PttPrefs.closeOocPlayer();
                }
            };
            F = [
                u,
                c,
                audio
            ];
            t[21] = u;
            t[22] = audio;
            t[23] = c;
            t[24] = A;
            t[25] = F;
        } else {
            A = t[24];
            F = t[25];
        }
        useEffect(A, F);
        let O;
        if (t[26] !== audio || t[27] !== isPlaying || t[28] !== pttPlaybackLogger) {
            O = function(t) {
                if (isPlaying) {
                    audio.pause();
                    pttPlaybackLogger.increaseOocPauseCount();
                } else {
                    audio.play();
                }
                t.preventDefault();
            };
            t[26] = audio;
            t[27] = isPlaying;
            t[28] = pttPlaybackLogger;
            t[29] = O;
        } else {
            O = t[29];
        }
        const B = O;
        let W;
        if (t[30] !== audio || t[31] !== pttPlaybackLogger) {
            W = function(t) {
                audio.pause();
                o("WAWebPttPrefs").PttPrefs.closeOocPlayer();
                o("WAWebPttPrefs").PttPrefs.setPlayingMessage(null);
                pttPlaybackLogger.markAsOocClosedByUser();
                pttPlaybackLogger.commit(true);
                t.preventDefault();
            };
            t[30] = audio;
            t[31] = pttPlaybackLogger;
            t[32] = W;
        } else {
            W = t[32];
        }
        const q = W;
        let U;
        if (t[33] !== f || t[34] !== msg.id || t[35] !== pttPlaybackLogger) {
            U = function(t) {
                if (!t.defaultPrevented) {
                    o("WAWebCmd").Cmd.openChatAt({
                        chat: f,
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.PttOocPlayer,
                        msgContext: o("WAWebChatMessageSearch").getSearchContext({
                            chat: f,
                            msgKey: msg.id
                        })
                    });
                    pttPlaybackLogger.increaseOocClickToChatCount();
                }
            };
            t[33] = f;
            t[34] = msg.id;
            t[35] = pttPlaybackLogger;
            t[36] = U;
        } else {
            U = t[36];
        }
        const V = U;
        const H = y && !u && !c;
        let G;
        if (t[37] !== audio || t[38] !== f || t[39] !== q || t[40] !== V || t[41] !== B || t[42] !== isPlaying || t[43] !== msg || t[44] !== H) {
            const Component = r("WAWebPttPlayPauseButton.react");
            const Component_1 = r("WAWebUnstyledButton.react");
            const Component_2 = r("WAWebPttCloseButton.react");
            G = H ? <div className="x10l6tqk x12xzxwr x78zum5 xh8yej3 x1x0gksc x1xrx4lg xnj6ddq"><div className="xfvyar9 x5yr21d x78zum5 xl56j7k x6s0dn4"><Component onConfirm={B} paused={!isPlaying} tabOrder={o("WAWebTabOrder").TAB_ORDER.PTT_OOC_BUTTON} theme="out-of-chat-playback"/></div><div className="xh8yej3 x5yr21d x6ikm8r x10wlt62 x78zum5 xl56j7k x6s0dn4 x1n2onr6"><Component_1 dataTab={o("WAWebTabOrder").TAB_ORDER.PTT_OOC_BUTTON} xstyle={b.senderButton} onClick={V}><EComponent msg={msg}/><L author={msg.senderObj} chat={f}/></Component_1></div><div className="xfvyar9 x5yr21d x78zum5 xl56j7k x6s0dn4"><Component_2 onConfirm={q} tabOrder={o("WAWebTabOrder").TAB_ORDER.PTT_OOC_BUTTON} theme="out-of-chat-playback"/></div><D audio={audio} isPlaying={isPlaying}/></div> : null;
            t[37] = audio;
            t[38] = f;
            t[39] = q;
            t[40] = V;
            t[41] = B;
            t[42] = isPlaying;
            t[43] = msg;
            t[44] = H;
            t[45] = G;
        } else {
            G = t[45];
        }
        let z;
        if (t[46] !== G) {
            const Component = r("WAWebVelocityTransitionGroup");
            z = <Component transitionName="ptt-out-of-chat">{G}</Component>;
            t[46] = G;
            t[47] = z;
        } else {
            z = t[47];
        }
        return z;
    }
    function L(e) {
        const t = o("react-compiler-runtime").c(26);
        const { author, chat } = e;
        const i = r("useWAWebMeasure")();
        const l = i[0];
        const u = i[1];
        const u_width = u.width;
        const d = r("useWAWebMeasure")();
        const m = d[0];
        const p = d[1];
        const p_width = p.width;
        let f;
        if (t[0] !== chat) {
            f = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(chat);
            t[0] = chat;
            t[1] = f;
        } else {
            f = t[1];
        }
        const elevatedPushNamesEnabled = f;
        let h;
        if (o("WAWebChatGetters").getIsGroup(chat)) {
            let y;
            if (t[2] !== author || t[3] !== chat) {
                y = s.jsx(o("WAWebName.react").ContactAndGroupName, {
                    contact: author,
                    chat,
                    xstyle: b.senderName
                });
                t[2] = author;
                t[3] = chat;
                t[4] = y;
            } else {
                y = t[4];
            }
            h = y;
        } else if (o("WAWebChatGetters").getIsNewsletter(chat)) {
            let C;
            if (t[5] !== chat || t[6] !== elevatedPushNamesEnabled) {
                C = s.jsx(o("WAWebNewsletterName.react").NewsletterName, {
                    chat,
                    elevatedPushNamesEnabled,
                    xstyle: b.senderName
                });
                t[5] = chat;
                t[6] = elevatedPushNamesEnabled;
                t[7] = C;
            } else {
                C = t[7];
            }
            h = C;
        } else {
            let v;
            if (t[8] !== author || t[9] !== elevatedPushNamesEnabled) {
                v = s.jsx(o("WAWebName.react").Name, {
                    contact: author,
                    useShortName: true,
                    xstyle: b.senderName,
                    elevatedPushNamesEnabled
                });
                t[8] = author;
                t[9] = elevatedPushNamesEnabled;
                t[10] = v;
            } else {
                v = t[10];
            }
            h = v;
        }
        const S = p_width > u_width;
        let R;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            R = {
                className: "xoiwuju x5yr21d x6ikm8r x10wlt62 x10l6tqk"
            };
            t[11] = R;
        } else {
            R = t[11];
        }
        let L;
        if (t[12] === Symbol.for("react.memo_cache_sentinel")) {
            L = {
                className: "xlshs6z x10l6tqk xomak03 xx7j5b9"
            };
            t[12] = L;
        } else {
            L = t[12];
        }
        let E;
        if (t[13] !== m || t[14] !== h) {
            E = <div {...babelHelpers.extends({
                ref: m
            }, L, {
                children: h
            })}/>;
            t[13] = m;
            t[14] = h;
            t[15] = E;
        } else {
            E = t[15];
        }
        let k;
        if (t[16] !== l || t[17] !== E) {
            k = <div {...babelHelpers.extends({
                ref: l
            }, R, {
                children: E
            })}/>;
            t[16] = l;
            t[17] = E;
            t[18] = k;
        } else {
            k = t[18];
        }
        let I;
        if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
            I = {
                className: "xuxw1ft xbrixnn x6ikm8r x10wlt62 x193iq5w x5yr21d x78zum5 x6s0dn4"
            };
            t[19] = I;
        } else {
            I = t[19];
        }
        let T;
        if (t[20] !== h || t[21] !== S) {
            const Component = r("WAWebPttOocMarquee");
            T = <div {...babelHelpers.extends({}, I, {
                children: S ? <Component>{h}</Component> : h
            })}/>;
            t[20] = h;
            t[21] = S;
            t[22] = T;
        } else {
            T = t[22];
        }
        let D;
        if (t[23] !== k || t[24] !== T) {
            D = <>{k}{T}</>;
            t[23] = k;
            t[24] = T;
            t[25] = D;
        } else {
            D = t[25];
        }
        return D;
    }
    function EComponent(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_msg = e.msg;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebFrontendMsgGetters").getAsPttLike,
                o("WAWebMsgGetters").getHasOriginatedFromNewsletter
            ];
            t[0] = r;
        } else {
            r = t[0];
        }
        const a = o("useWAWebMsgValues").useMsgValues(e_msg.id, r);
        const i = a[0];
        const l = a[1];
        if (i || l) {
            let u;
            if (t[1] !== e_msg) {
                u = <K2Component msg={e_msg}/>;
                t[1] = e_msg;
                t[2] = u;
            } else {
                u = t[2];
            }
            return u;
        }
        if (e_msg.isForwarded) {
            let c;
            if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                c = <IComponent/>;
                t[3] = c;
            } else {
                c = t[3];
            }
            return c;
        }
        let d;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            d = <TComponent/>;
            t[4] = d;
        } else {
            d = t[4];
        }
        return d;
    }
    function K2Component(e) {
        const t = o("react-compiler-runtime").c(11);
        const e_msg = e.msg;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebFrontendMsgGetters").getMsgSenderId,
                o("WAWebFrontendMsgGetters").getAsPttLike
            ];
            t[0] = r;
        } else {
            r = t[0];
        }
        const a = o("useWAWebMsgValues").useMsgValues(e_msg.id, r);
        const i = a[0];
        const l = a[1];
        const U = e_msg.type === "ptt" || l ? o("WAWebPttStatusIconStyleable.react").PttStatusIconStyleable : o("WAWebAudioStatusIcon.react").AudioStatusIcon;
        let c;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            c = {
                className: "x14iifvp x100vrsf x1vqgdyp x1fns5xo x78zum5 xl56j7k x6s0dn4 x1a02dak x1n2onr6"
            };
            t[1] = c;
        } else {
            c = t[1];
        }
        let d;
        if (t[2] !== i) {
            d = s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: i,
                size: y
            });
            t[2] = i;
            t[3] = d;
        } else {
            d = t[3];
        }
        let m;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            m = {
                className: "x11uqc5h x10l6tqk xuivejd xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x9hgfsb"
            };
            t[4] = m;
        } else {
            m = t[4];
        }
        let p;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            p = {
                background: v.outOfChatBg,
                primary: v.outOfChatIcon
            };
            t[5] = p;
        } else {
            p = t[5];
        }
        let _;
        if (t[6] !== U) {
            _ = <span {...babelHelpers.extends({}, m, {
                children: <U width={h} height={h} innerStyles={p}/>
            })}/>;
            t[6] = U;
            t[7] = _;
        } else {
            _ = t[7];
        }
        let f;
        if (t[8] !== d || t[9] !== _) {
            f = <div {...babelHelpers.extends({}, c, {
                children: [
                    d,
                    _
                ]
            })}/>;
            t[8] = d;
            t[9] = _;
            t[10] = f;
        } else {
            f = t[10];
        }
        return f;
    }
    function IComponent() {
        return <div className="x14iifvp x100vrsf x1vqgdyp x1fns5xo x78zum5 xl56j7k x6s0dn4 x1a02dak x1n2onr6 xvs2etk xg3wpu6 x1jwbhkm xgg4q86 x6ikm8r x10wlt62 x1aqdfop">{s.jsx(o("WAWebPttStatusIconStyleable.react").PttStatusIconStyleable, {
            width: 20,
            height: 20,
            innerStyles: {
                background: v.forwardedBg,
                primary: v.forwardedIcon
            }
        })}</div>;
    }
    IComponent.displayName = `${IComponent.name} [from ${i.id}]`;
    function TComponent() {
        return <div className="x14iifvp x100vrsf x1vqgdyp x1fns5xo x78zum5 xl56j7k x6s0dn4 x1a02dak x1n2onr6 xvs2etk xg3wpu6 x1jwbhkm xgg4q86 x6ikm8r x10wlt62">{s.jsx(o("WAWebAudioFileIcon.react").AudioFileIcon, {
            width: y,
            height: y
        })}</div>;
    }
    TComponent.displayName = `${TComponent.name} [from ${i.id}]`;
    function D(e) {
        const t = o("react-compiler-runtime").c(15);
        const { audio, isPlaying } = e;
        let i;
        if (t[0] !== audio) {
            i = o("WAWebPttCalculateAudioProgress").calculateAudioProgress(audio);
            t[0] = audio;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = useState(i);
        const u = l[0];
        const c = l[1];
        let m;
        if (t[2] !== audio) {
            m = function() {
                c(o("WAWebPttCalculateAudioProgress").calculateAudioProgress(audio));
            };
            t[2] = audio;
            t[3] = m;
        } else {
            m = t[3];
        }
        const p = m;
        let f;
        if (t[4] !== isPlaying) {
            f = {
                active: isPlaying
            };
            t[4] = isPlaying;
            t[5] = f;
        } else {
            f = t[5];
        }
        r("useWAWebAnimationFrames")(p, f);
        o("useWAWebListener").useListener(audio, "timeupdate", p);
        let g;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            g = function() {
                return c(0);
            };
            t[6] = g;
        } else {
            g = t[6];
        }
        o("useWAWebListener").useListener(audio, "ended", g);
        const h = useContext(o("WAWebThemeContext").ThemeContext);
        const h_theme = h.theme;
        let C;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            C = {
                className: "xh8yej3 x10l6tqk xef1mmm xuoj239"
            };
            t[7] = C;
        } else {
            C = t[7];
        }
        let b;
        if (t[8] !== h_theme) {
            b = ({
                0: "xh8yej3 x5yr21d",
                2: "xh8yej3 x5yr21d x1r1mewj xwq05k6",
                1: "xh8yej3 x5yr21d x1liytr5 xyd83as",
                3: "xh8yej3 x5yr21d x1liytr5 xyd83as"
            })[(h_theme === "light") << 1 | (h_theme === "dark") << 0];
            t[8] = h_theme;
            t[9] = b;
        } else {
            b = t[9];
        }
        const transform = `translateX(${u * 100 - 100}%)`;
        let S;
        if (t[10] !== transform) {
            S = {
                transform
            };
            t[10] = transform;
            t[11] = S;
        } else {
            S = t[11];
        }
        let R;
        if (t[12] !== b || t[13] !== S) {
            R = <div {...babelHelpers.extends({}, C, {
                children: <div className={b} style={S}/>
            })}/>;
            t[12] = b;
            t[13] = S;
            t[14] = R;
        } else {
            R = t[14];
        }
        return R;
    }
    function x(msg) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                o("WAWebPttPrefsGetters").getIsOocPlayerClosedByUser
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const r = o("useWAWebPttPrefsValues").usePttPrefsValues(n);
        const a = r[0];
        let i;
        if (t[1] !== msg) {
            i = o("WAWebFrontendMsgGetters").getChat(msg.unsafe());
            t[1] = msg;
            t[2] = i;
        } else {
            i = t[2];
        }
        const l = i;
        let s;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            s = [
                o("WAWebFrontendChatGetters").getActive
            ];
            t[3] = s;
        } else {
            s = t[3];
        }
        const u = o("useWAWebChatValues").useChatValues(l.id, s);
        const c = u[0];
        return !a && !c;
    }
    l.default = SComponent;
}, 98);