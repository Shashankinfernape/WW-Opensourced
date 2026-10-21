__d("WAWebCommentComposeBox.react", [
    "fbt",
    "WAWebChatPreferenceCollection",
    "WAWebChatPreferenceGetters",
    "WAWebCommentModalActions",
    "WAWebComposeBoxSendButton.react",
    "WAWebEmojiPickerPlugin",
    "WAWebMessageEditComposer.react",
    "WAWebNoop",
    "WAWebRichTextInput.react",
    "WAWebRichTextInputPlugins.react",
    "WAWebSendCommentMessageAction",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebChatPreferenceValues"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useState = u.useState;
    const m = {
        paddingBlock5: {
            paddingTop: "x123j3cw",
            paddingBottom: "xs9asl8",
            $$css: true
        },
        paddingBlock9: {
            paddingTop: "x96k8nx",
            paddingBottom: "xdvlbce",
            $$css: true
        },
        marginBlock5: {
            marginTop: "x1ok221b",
            marginBottom: "xu06os2",
            $$css: true
        }
    };
    const p = {
        inputContainer: {
            boxSizing: "x9f619",
            flex: "x12lumcd",
            width: "x1qrby5j",
            minHeight: "xisnujt",
            fontSize: "x6prxxf",
            fontWeight: "x1fcty0u",
            lineHeight: "x1fc57z9",
            backgroundColor: "xk7ee7b",
            borderTopColor: "x1v8p93f",
            borderInlineEndColor: "x1o3jo1z",
            borderBottomColor: "x16stqrj",
            borderInlineStartColor: "xv5lvn5",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            outline: "x1a2a7pz",
            willChange: "x13w7htt",
            display: "x78zum5",
            $$css: true
        },
        sendButtonContainer: {
            width: "x100vrsf",
            minWidth: "x1fns5xo",
            $$css: true
        },
        childPadding: {
            boxSizing: "x9f619",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            minHeight: "x1wiwyrm",
            $$css: true
        },
        emojiButton: {
            color: "xhslqc4",
            cursor: "x1ypdohk",
            alignSelf: "xqcrz7y",
            $$css: true
        }
    };
    function Component(t) {
        const n = o("react-compiler-runtime").c(32);
        const t_parent = t.parent;
        const i = u_useState(false);
        const hasText = i[0];
        const u = i[1];
        const _ = u_useState();
        const g = _[0];
        const h = _[1];
        let y;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            y = function(t) {
                const e = t.trim();
                u(e.length > 0);
            };
            n[0] = y;
        } else {
            y = n[0];
        }
        const C = y;
        let b;
        if (n[1] !== g) {
            b = function(t, n) {
                g?.replaceSelection(t, n);
            };
            n[1] = g;
            n[2] = b;
        } else {
            b = n[2];
        }
        const v = b;
        let S;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            S = r("WAWebChatPreferenceCollection").getDefault();
            n[3] = S;
        } else {
            S = n[3];
        }
        let R;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            R = [
                o("WAWebChatPreferenceGetters").getSpellcheck,
                o("WAWebChatPreferenceGetters").getTransformTextEmoji,
                o("WAWebChatPreferenceGetters").getEnterIsSend
            ];
            n[4] = R;
        } else {
            R = n[4];
        }
        const L = o("useWAWebChatPreferenceValues").useChatPreferenceValues(S.id, R);
        const E = L[0];
        const k = L[1];
        const I = L[2];
        let T;
        if (n[5] !== t_parent || n[6] !== g) {
            T = function() {
                if (g != null) {
                    const e = g.getTextContent();
                    if (e != null) {
                        const t = e.trim();
                        if (t.length > 0) {
                            o("WAWebSendCommentMessageAction").sendCommentMessage(t_parent, t).finally(f);
                            g.setTextContent("");
                            u(false);
                        }
                    }
                }
            };
            n[5] = t_parent;
            n[6] = g;
            n[7] = T;
        } else {
            T = n[7];
        }
        const onClickSend = T;
        let x;
        let $;
        if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
            x = {
                className: "x1n2onr6 xhtitgo x9f619 x78zum5 x1q0g3np xuk3077 xh8yej3 x122xwht xhjsbib x123j3cw xs9asl8 x1gx403c x1q3ajuy"
            };
            $ = {
                className: "x78zum5 x1isitws xuk3077"
            };
            n[8] = x;
            n[9] = $;
        } else {
            x = n[8];
            $ = n[9];
        }
        let P;
        if (n[10] === Symbol.for("react.memo_cache_sentinel")) {
            P = (e || (e = r("stylex"))).props(p.inputContainer, m.paddingBlock9, o("WDSPaddings.stylex").wdsPaddings.paddingHor12, m.marginBlock5, o("WDSMargins.stylex").wdsMargins.marginHor8);
            n[10] = P;
        } else {
            P = n[10];
        }
        let N;
        let placeholder;
        if (n[11] === Symbol.for("react.memo_cache_sentinel")) {
            placeholder = s._("Add a reply");
            N = function(t) {
                C(t.parsableText);
            };
            n[11] = N;
            n[12] = placeholder;
        } else {
            N = n[11];
            placeholder = n[12];
        }
        const onEnter = I ? onClickSend : r("WAWebNoop");
        let A;
        if (n[13] !== k) {
            A = c.jsx(r("WAWebRichTextInputPlugins.react"), {
                transformTextEmoji: k,
                textFormatEnabled: true,
                bulletPointsEnabled: true,
                numberedListEnabled: true,
                inlineCodeEnabled: true,
                blockQuoteEnabled: true,
                phoneNumbersEnabled: true,
                floatingToolbarEnabled: true
            });
            n[13] = k;
            n[14] = A;
        } else {
            A = n[14];
        }
        let F;
        if (n[15] === Symbol.for("react.memo_cache_sentinel")) {
            F = c.jsx(r("WAWebEmojiPickerPlugin"), {});
            n[15] = F;
        } else {
            F = n[15];
        }
        let O;
        if (n[16] !== E || n[17] !== onEnter || n[18] !== A) {
            const Component = r("WAWebRichTextInput.react");
            O = <Component ref={h} placeholder={placeholder} onChange={N} spellCheck={E} onEnter={onEnter} multiline minVisibleLines={1} maxVisibleLines={5}>{A}{F}</Component>;
            n[16] = E;
            n[17] = onEnter;
            n[18] = A;
            n[19] = O;
        } else {
            O = n[19];
        }
        let B;
        if (n[20] === Symbol.for("react.memo_cache_sentinel")) {
            B = [
                p.emojiButton,
                o("WDSMargins.stylex").wdsMargins.marginStart8
            ];
            n[20] = B;
        } else {
            B = n[20];
        }
        let W;
        if (n[21] !== v) {
            const Component = o("WAWebMessageEditComposer.react").EmojiButton;
            W = <Component xstyle={B} onEmoji={v}/>;
            n[21] = v;
            n[22] = W;
        } else {
            W = n[22];
        }
        let q;
        if (n[23] !== O || n[24] !== W) {
            q = <div {...babelHelpers.extends({}, P, {
                children: [
                    O,
                    W
                ]
            })}/>;
            n[23] = O;
            n[24] = W;
            n[25] = q;
        } else {
            q = n[25];
        }
        let U;
        if (n[26] !== onClickSend || n[27] !== hasText) {
            const Component = o("WAWebComposeBoxSendButton.react").SendButton;
            U = hasText ? <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.sendButtonContainer, p.childPadding, m.paddingBlock5, o("WDSPaddings.stylex").wdsPaddings.paddingHor0), {
                children: <Component supportsPtt={false} onClickSend={onClickSend} hasText={hasText} recordingSession={null} onStartRecording={r("WAWebNoop")}/>
            })}/> : null;
            n[26] = onClickSend;
            n[27] = hasText;
            n[28] = U;
        } else {
            U = n[28];
        }
        let V;
        if (n[29] !== q || n[30] !== U) {
            V = <div {...babelHelpers.extends({}, x, {
                children: <div {...babelHelpers.extends({}, $, {
                    children: [
                        null,
                        q,
                        U
                    ]
                })}/>
            })}/>;
            n[29] = q;
            n[30] = U;
            n[31] = V;
        } else {
            V = n[31];
        }
        return V;
    }
    function f() {
        o("WAWebCommentModalActions").CommentModalActions.scrollReplyModalToBottom();
    }
    l.default = Component;
}, 226);