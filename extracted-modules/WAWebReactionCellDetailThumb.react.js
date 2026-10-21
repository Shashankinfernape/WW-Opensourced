__d("WAWebReactionCellDetailThumb.react", [
    "fbt",
    "WAWebChatEntryPoint",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebDetailImage.react",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebMediaThumbnail.react",
    "WAWebMediaUrlProvider",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebReactionEmoji.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumWebcRmrReasonCode",
    "WDSIconIcImage.react",
    "WDSIconIcVideocamFilled.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        placeholderIcon: {
            width: "xh8yej3",
            height: "x5yr21d",
            $$css: true
        }
    };
    function D6Component(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_reactionText = e.reactionText;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = {
                className: "x10l6tqk xtzk6r2 xqwxbl3 xmix8c7 x1xp8n7a"
            };
            t[0] = r;
        } else {
            r = t[0];
        }
        let a;
        if (t[1] !== e_reactionText) {
            a = <div {...babelHelpers.extends({}, r, {
                children: u.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
                    scale: "reactionCellDetailThumb",
                    size: "small",
                    reaction: e_reactionText
                })
            })}/>;
            t[1] = e_reactionText;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(11);
        const { profileImageId, reactionText, size } = e;
        const i = size === undefined ? "small" : size;
        let l;
        if (t[0] !== i) {
            l = ({
                0: {
                    className: "x1n2onr6 xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh"
                },
                2: {
                    className: "x1n2onr6 xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x1td3qas x10w6t97"
                },
                1: {
                    className: "x1n2onr6 xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x10h3iyq x5kalc8"
                },
                3: {
                    className: "x1n2onr6 xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x10h3iyq x5kalc8"
                }
            })[(i === "small") << 1 | (i === "medium") << 0];
            t[0] = i;
            t[1] = l;
        } else {
            l = t[1];
        }
        const s = i === "small" ? 32 : 42;
        let c;
        if (t[2] !== profileImageId || t[3] !== s) {
            c = u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: profileImageId,
                size: s,
                shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
                theme: "reaction_details"
            });
            t[2] = profileImageId;
            t[3] = s;
            t[4] = c;
        } else {
            c = t[4];
        }
        let m;
        if (t[5] !== reactionText) {
            m = <D6Component reactionText={reactionText}/>;
            t[5] = reactionText;
            t[6] = m;
        } else {
            m = t[6];
        }
        let p;
        if (t[7] !== l || t[8] !== c || t[9] !== m) {
            p = <div {...babelHelpers.extends({}, l, {
                children: [
                    c,
                    m
                ]
            })}/>;
            t[7] = l;
            t[8] = c;
            t[9] = m;
            t[10] = p;
        } else {
            p = t[10];
        }
        return p;
    }
    function p(e) {
        const t = o("react-compiler-runtime").c(28);
        const { msg, onCloseDetailsPane, reactionText, showReactionText } = e;
        const m = showReactionText === undefined ? true : showReactionText;
        let p;
        if (t[0] !== msg || t[1] !== onCloseDetailsPane) {
            p = function(t) {
                t.stopPropagation();
                t.preventDefault();
                const msg_id = msg.id;
                const i = o("WAWebFrontendMsgGetters").getChat(msg);
                const l = o("WAWebMsgCollection").MsgCollection.get(msg_id);
                const c = o("WAWebChatMessageSearch").getSearchContext({
                    chat: i,
                    msgKey: l?.id ?? msg_id,
                    rootMsg: msg?.unsafe()
                });
                if (c) {
                    c.slideToMsg = true;
                }
                onCloseDetailsPane();
                o("WAWebCmd").Cmd.openChatAt({
                    chat: i,
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatReactionMediaThumb,
                    msgContext: c,
                    onSuccess: {
                        mediaMsgToOpenInMediaViewer: o("WAWebMsgCollection").MsgCollection.get(msg.id)
                    }
                });
                if (!l) {
                    o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("Couldn't find message")
                    }));
                }
            };
            t[0] = msg;
            t[1] = onCloseDetailsPane;
            t[2] = p;
        } else {
            p = t[2];
        }
        const f = p;
        let g;
        if (t[3] !== f) {
            g = {
                enter: function(t) {
                    f(t);
                },
                space: function(t) {
                    f(t);
                }
            };
            t[3] = f;
            t[4] = g;
        } else {
            g = t[4];
        }
        const h = g;
        let y;
        if (t[5] !== msg.type) {
            y = msg.type === o("WAWebMsgType").MSG_TYPE.IMAGE ? u.jsx(r("WDSIconIcImage.react"), {
                iconXstyle: c.placeholderIcon,
                testid: "image"
            }) : u.jsx(r("WDSIconIcVideocamFilled.react"), {
                height: 28,
                testid: "video-placeholder",
                width: 28
            });
            t[5] = msg.type;
            t[6] = y;
        } else {
            y = t[6];
        }
        const C = y;
        let b;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                className: "x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d"
            };
            t[7] = b;
        } else {
            b = t[7];
        }
        let v;
        if (t[8] !== C) {
            v = <div {...babelHelpers.extends({}, b, {
                key: "default"
            })}>{C}</div>;
            t[8] = C;
            t[9] = v;
        } else {
            v = t[9];
        }
        const thumbnailPlaceholder = v;
        let R;
        if (t[10] !== msg || t[11] !== thumbnailPlaceholder) {
            const Component = r("WAWebMediaUrlProvider");
            R = msg.type === o("WAWebMsgType").MSG_TYPE.IMAGE ? <Component mediaData={msg.mediaData} placeholderRenderer={function() {
                return thumbnailPlaceholder;
            }} downloadMedia={function() {
                return msg.downloadMedia({
                    downloadEvenIfExpensive: false,
                    rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.OTHER,
                    isUserInitiated: false
                });
            }} renderProgressively={false}>{_}</Component> : u.jsx(r("WAWebMediaThumbnail.react"), {
                msgKey: msg.id,
                thumbnailPlaceholder,
                childClassName: "xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x1td3qas x10w6t97 x6ikm8r x10wlt62 xiy17q3 x1xsqp64 x18d0r48"
            });
            t[10] = msg;
            t[11] = thumbnailPlaceholder;
            t[12] = R;
        } else {
            R = t[12];
        }
        const L = R;
        let E;
        if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
            E = s._("Click to open media");
            t[13] = E;
        } else {
            E = t[13];
        }
        const k = E;
        let I;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
            I = {
                className: "x1n2onr6 xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x1td3qas x10w6t97"
            };
            t[14] = I;
        } else {
            I = t[14];
        }
        let T;
        if (t[15] !== reactionText || t[16] !== m) {
            T = m && <D6Component reactionText={reactionText}/>;
            t[15] = reactionText;
            t[16] = m;
            t[17] = T;
        } else {
            T = t[17];
        }
        let D;
        if (t[18] !== f || t[19] !== T || t[20] !== L) {
            D = <div {...babelHelpers.extends({}, I, {
                onClickCapture: f,
                children: [
                    L,
                    T
                ]
            })}/>;
            t[18] = f;
            t[19] = T;
            t[20] = L;
            t[21] = D;
        } else {
            D = t[21];
        }
        let x;
        if (t[22] !== f || t[23] !== D) {
            const Component = r("WAWebUnstyledButton.react");
            x = <Component onClick={f} aria-label={k}>{D}</Component>;
            t[22] = f;
            t[23] = D;
            t[24] = x;
        } else {
            x = t[24];
        }
        let $;
        if (t[25] !== h || t[26] !== x) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            $ = <Component handlers={h}>{x}</Component>;
            t[25] = h;
            t[26] = x;
            t[27] = $;
        } else {
            $ = t[27];
        }
        return $;
    }
    function _(e) {
        return <div className="xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x1td3qas x10w6t97 x6ikm8r x10wlt62 xiy17q3 x1xsqp64 x18d0r48" style={{
            backgroundImage: `url(${e})`
        }}/>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.ReactionCellProfileImageThumb = m;
    l.ReactionCellDetailThumb = p;
}, 226);