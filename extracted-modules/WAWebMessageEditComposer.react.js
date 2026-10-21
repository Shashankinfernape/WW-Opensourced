__d("WAWebMessageEditComposer.react", [
    "fbt",
    "WAWebChatPreferenceCollection",
    "WAWebChatPreferenceGetters",
    "WAWebComposeBoxUtils",
    "WAWebComposeConstants",
    "WAWebDropdown.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiPanel.react",
    "WAWebEmojiPickerPlugin",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebMentionPickerPlugin",
    "WAWebMessageEditLinkPreviewPanel.react",
    "WAWebMessageEditUtils",
    "WAWebMsgGetters",
    "WAWebMsgMentionMap",
    "WAWebRichTextInput.react",
    "WAWebRichTextInputConst",
    "WAWebRichTextInputPlugins.react",
    "WAWebSpoilerGating",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WDSButton.react",
    "WDSFocusStateStyles",
    "WDSIconIcCheck.react",
    "WDSIconIcMood.react",
    "escapeRegex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebChatPreferenceValues",
    "useWAWebMsgValues",
    "useWAWebStaticButtonA11y"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useState = u.useState;
    const m = {
        composer: {
            position: "x1n2onr6",
            backgroundColor: "x1280gxy",
            $$css: true
        },
        composerRefreshed: {
            alignItems: "xuk3077",
            borderTopWidth: "x972fbf",
            borderInlineEndWidth: "x10w94by",
            borderBottomWidth: "xlxy82",
            borderInlineStartWidth: "x14e42zd",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "xlze6vy",
            borderInlineEndColor: "x47fsot",
            borderBottomColor: "x1rrvw3c",
            borderInlineStartColor: "x18djku1",
            columnGap: "x1s70e7g",
            marginBottom: "xdqhqc9",
            marginInlineStart: "x6pxu1d",
            marginInlineEnd: "xd6izgl",
            marginLeft: null,
            marginRight: null,
            paddingTop: "x1gxa6cn",
            paddingBottom: "x12xbjc7",
            $$css: true
        },
        composerWithEditLearnBanner: {
            alignItems: "xuk3077",
            columnGap: "x1aj3ljl",
            marginBottom: "xdqhqc9",
            marginInlineStart: "xlese2p",
            marginInlineEnd: "xviac27",
            marginLeft: null,
            marginRight: null,
            $$css: true
        },
        inputContainer: {
            paddingTop: "x96k8nx",
            paddingInlineEnd: "xpdmqnj",
            paddingBottom: "xdvlbce",
            paddingInlineStart: "x1g0dm76",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            backgroundColor: "xk7ee7b",
            borderTopColor: "x1v8p93f",
            borderInlineEndColor: "x1o3jo1z",
            borderBottomColor: "x16stqrj",
            borderInlineStartColor: "xv5lvn5",
            marginInlineEnd: "xpwdb9g",
            flexGrow: "x1iyjqo2",
            $$css: true
        },
        inputContainerRefreshed: {
            marginInlineEnd: "x14z9mp",
            paddingTop: "x889kno",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x1a8lsjc",
            paddingInlineStart: "x1c1uobl",
            backgroundColor: "x1280gxy",
            $$css: true
        },
        inputContainerWithEditLearnBanner: {
            paddingInlineStart: "x1iw51ew",
            $$css: true
        },
        input: {
            flexGrow: "x1iyjqo2",
            $$css: true
        },
        emojiButton: {
            marginInlineStart: "x13fj5qh",
            color: "xhslqc4",
            cursor: "x1ypdohk",
            alignSelf: "xqcrz7y",
            $$css: true
        },
        emojiButtonRefreshed: {
            marginTop: "x1380le5",
            marginInlineEnd: "xqf2s3x",
            marginBottom: "xefnzgg",
            marginInlineStart: "x150mmf0",
            alignSelf: "xpvyfi4",
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            $$css: true
        }
    };
    const maxVisibleLines = 8;
    function _(t) {
        const n = o("react-compiler-runtime").c(18);
        const { onEmoji, onFocusNext, onFocusPrev, xstyle } = t;
        const m = u_useState(null);
        const p = m[0];
        const _ = m[1];
        let f;
        if (n[0] !== onEmoji || n[1] !== onFocusNext || n[2] !== onFocusPrev) {
            f = function(t) {
                t.preventDefault();
                t.stopPropagation();
                const Component = r("WAWebEmojiPanel.react");
                const e = <Component onEmoji={onEmoji} onFocusNext={onFocusNext} onFocusPrev={onFocusPrev}/>;
                _({
                    menu: e,
                    dirY: o("WAWebDropdown.react").DirY.TOP,
                    type: o("WAWebDropdown.react").MenuType.EmojiPicker,
                    anchor: t.target
                });
            };
            n[0] = onEmoji;
            n[1] = onFocusNext;
            n[2] = onFocusPrev;
            n[3] = f;
        } else {
            f = n[3];
        }
        const g = f;
        let h;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            h = function() {
                _(null);
            };
            n[4] = h;
        } else {
            h = n[4];
        }
        const requestDismiss = h;
        const C = r("useWAWebStaticButtonA11y")(g);
        const b = C[0];
        const v = C[1];
        let S;
        if (n[5] !== xstyle) {
            S = (e || (e = r("stylex")))(xstyle);
            n[5] = xstyle;
            n[6] = S;
        } else {
            S = n[6];
        }
        let R;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            R = s._("Open emojis panel, message edit");
            n[7] = R;
        } else {
            R = n[7];
        }
        let L;
        if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
            L = c.jsx(r("WDSIconIcMood.react"), {});
            n[8] = L;
        } else {
            L = n[8];
        }
        let E;
        if (n[9] !== v || n[10] !== b || n[11] !== S) {
            E = <div {...babelHelpers.extends({
                ref: b,
                className: S,
                title: R
            }, v, {
                children: L
            })}/>;
            n[9] = v;
            n[10] = b;
            n[11] = S;
            n[12] = E;
        } else {
            E = n[12];
        }
        const k = E;
        let I = null;
        if (p) {
            let T;
            if (n[13] !== p) {
                const Component = o("WAWebUimUie.react").UIE;
                T = <Component displayName="EmojiPicker" escapable popable dismissOnWindowResize requestDismiss={requestDismiss}>{c.jsx(r("WAWebUimUieMenu.react"), {
                    contextMenu: p
                })}</Component>;
                n[13] = p;
                n[14] = T;
            } else {
                T = n[14];
            }
            I = T;
        }
        let D;
        if (n[15] !== k || n[16] !== I) {
            D = <>{k}{I}</>;
            n[15] = k;
            n[16] = I;
            n[17] = D;
        } else {
            D = n[17];
        }
        return D;
    }
    function F22(e) {
        const t = o("react-compiler-runtime").c(4);
        const { disabled, onClick } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("Send edited message");
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] !== disabled || t[2] !== onClick) {
            const Component = r("WDSButton.react");
            l = <Component testid="edit-message-confirm-button" onPress={onClick} Icon={r("WDSIconIcCheck.react")} disabled={disabled} variant="filled" size="medium" aria-label={i}/>;
            t[1] = disabled;
            t[2] = onClick;
            t[3] = l;
        } else {
            l = t[3];
        }
        return l;
    }
    function g(e) {
        const a = o("react-compiler-runtime").c(70);
        const { disableConfirmButton, editLearnBanner, enableMentions, enableTextFormatting, initialLinkPreview, initialText, maxLength, msg, onConfirm, onInputChange, onLinkPreviewChange, placeholderOverride } = e;
        const E = enableMentions === undefined ? true : enableMentions;
        const k = enableTextFormatting === undefined ? true : enableTextFormatting;
        let I;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            I = [
                o("WAWebFrontendMsgGetters").getText,
                o("WAWebMsgGetters").getCaption
            ];
            a[0] = I;
        } else {
            I = a[0];
        }
        const T = o("useWAWebMsgValues").useMsgValues(msg.id, I);
        const D = T[0];
        const x = T[1];
        let $;
        if (a[1] !== msg) {
            $ = o("WAWebFrontendMsgGetters").getChat(msg.unsafe());
            a[1] = msg;
            a[2] = $;
        } else {
            $ = a[2];
        }
        const P = $;
        const N = initialText ?? D ?? x ?? "";
        const M = u_useState(N);
        const w = M[0];
        const A = M[1];
        const F = u_useState();
        const O = F[0];
        const B = F[1];
        let W;
        if (a[3] === Symbol.for("react.memo_cache_sentinel")) {
            W = r("WAWebChatPreferenceCollection").getDefault();
            a[3] = W;
        } else {
            W = a[3];
        }
        let q;
        if (a[4] === Symbol.for("react.memo_cache_sentinel")) {
            q = [
                o("WAWebChatPreferenceGetters").getSpellcheck,
                o("WAWebChatPreferenceGetters").getTransformTextEmoji,
                o("WAWebChatPreferenceGetters").getEnterIsSend
            ];
            a[4] = q;
        } else {
            q = a[4];
        }
        const U = o("useWAWebChatPreferenceValues").useChatPreferenceValues(W.id, q);
        const V = U[0];
        const H = U[1];
        const G = U[2];
        let z;
        if (a[5] !== O) {
            z = function(t) {
                if (O) {
                    O.focus();
                    O.replaceSelection(t);
                }
            };
            a[5] = O;
            a[6] = z;
        } else {
            z = a[6];
        }
        const j = z;
        let K;
        if (a[7] !== O) {
            K = function() {
                if (O) {
                    O.focus();
                }
            };
            a[7] = O;
            a[8] = K;
        } else {
            K = a[8];
        }
        const Q = K;
        let X;
        if (a[9] !== onInputChange) {
            X = function(t) {
                A(t.text);
                onInputChange(t);
            };
            a[9] = onInputChange;
            a[10] = X;
        } else {
            X = a[10];
        }
        const Y = X;
        let J;
        let Z;
        if (a[11] !== msg.type) {
            Z = o("WAWebMessageEditUtils").getMsgEditType(msg.type);
            a[11] = msg.type;
            a[12] = Z;
        } else {
            Z = a[12];
        }
        const ee = Z;
        if (ee === o("WAWebMessageEditUtils").MsgEditType.TextEdit) {
            let te;
            if (a[13] !== P || a[14] !== initialLinkPreview || a[15] !== onLinkPreviewChange || a[16] !== w) {
                const Component = r("WAWebMessageEditLinkPreviewPanel.react");
                te = <Component chat={P} text={w} onChange={onLinkPreviewChange} initialLinkPreview={initialLinkPreview}/>;
                a[13] = P;
                a[14] = initialLinkPreview;
                a[15] = onLinkPreviewChange;
                a[16] = w;
                a[17] = te;
            } else {
                te = a[17];
            }
            J = te;
        }
        const isEditingCaption = ee === o("WAWebMessageEditUtils").MsgEditType.CaptionEdit;
        let re;
        if (a[18] !== P || a[19] !== isEditingCaption) {
            re = o("WAWebComposeBoxUtils").getComposeBoxPlaceholderText({
                chat: P,
                isEditingCaption
            });
            a[18] = P;
            a[19] = isEditingCaption;
            a[20] = re;
        } else {
            re = a[20];
        }
        const ae = placeholderOverride ?? re;
        let ie;
        if (a[21] !== initialText || a[22] !== msg) {
            ie = initialText ?? h(msg);
            a[21] = initialText;
            a[22] = msg;
            a[23] = ie;
        } else {
            ie = a[23];
        }
        const le = maxLength ?? o("WAWebComposeConstants").MAX_TXT_MSG_SIZE;
        const enterIsNewLine = !G;
        const P_groupMetadata = P.groupMetadata;
        let spoilerEnabled;
        if (a[24] === Symbol.for("react.memo_cache_sentinel")) {
            spoilerEnabled = o("WAWebSpoilerGating").isSpoilerSenderEnabled();
            a[24] = spoilerEnabled;
        } else {
            spoilerEnabled = a[24];
        }
        let de;
        if (a[25] !== P.groupMetadata || a[26] !== k || a[27] !== H) {
            de = c.jsx(r("WAWebRichTextInputPlugins.react"), {
                groupMetadata: P_groupMetadata,
                transformTextEmoji: H,
                textFormatEnabled: k,
                spoilerEnabled,
                bulletPointsEnabled: k,
                numberedListEnabled: k,
                inlineCodeEnabled: k,
                blockQuoteEnabled: k,
                internLinksEnabled: k,
                phoneNumbersEnabled: k,
                linksEnabled: k,
                textFormatShortcutsEnabled: k,
                floatingToolbarEnabled: k
            });
            a[25] = P.groupMetadata;
            a[26] = k;
            a[27] = H;
            a[28] = de;
        } else {
            de = a[28];
        }
        let me;
        if (a[29] === Symbol.for("react.memo_cache_sentinel")) {
            me = c.jsx(r("WAWebEmojiPickerPlugin"), {});
            a[29] = me;
        } else {
            me = a[29];
        }
        let pe;
        if (a[30] !== P || a[31] !== E) {
            pe = E ? c.jsx(r("WAWebMentionPickerPlugin"), {
                chat: P,
                elevatedPushNamesEnabled: o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(P),
                source: "message_edit"
            }) : null;
            a[30] = P;
            a[31] = E;
            a[32] = pe;
        } else {
            pe = a[32];
        }
        let _e;
        if (a[33] !== Y || a[34] !== onConfirm || a[35] !== ae || a[36] !== V || a[37] !== ie || a[38] !== le || a[39] !== enterIsNewLine || a[40] !== de || a[41] !== pe) {
            const Component = r("WAWebRichTextInput.react");
            _e = <Component testid="edit-message-composer" ref={B} initialText={ie} xstyle={m.input} onChange={Y} onEnter={onConfirm} placeholder={ae} title={ae} maxLength={le} maxVisibleLines={maxVisibleLines} multiline focusOnMount spellCheck={V} enterIsNewLine={enterIsNewLine}>{de}{me}{pe}</Component>;
            a[33] = Y;
            a[34] = onConfirm;
            a[35] = ae;
            a[36] = V;
            a[37] = ie;
            a[38] = le;
            a[39] = enterIsNewLine;
            a[40] = de;
            a[41] = pe;
            a[42] = _e;
        } else {
            _e = a[42];
        }
        const fe = _e;
        let ge;
        if (a[43] === Symbol.for("react.memo_cache_sentinel")) {
            ge = [
                m.emojiButton,
                m.emojiButtonRefreshed,
                o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus
            ];
            a[43] = ge;
        } else {
            ge = a[43];
        }
        let he;
        if (a[44] !== j || a[45] !== Q) {
            he = <_ xstyle={ge} onEmoji={j} onFocusNext={Q} onFocusPrev={Q}/>;
            a[44] = j;
            a[45] = Q;
            a[46] = he;
        } else {
            he = a[46];
        }
        const ye = he;
        let Ce;
        if (a[47] !== disableConfirmButton || a[48] !== onConfirm) {
            Ce = <F22 onClick={onConfirm} disabled={disableConfirmButton}/>;
            a[47] = disableConfirmButton;
            a[48] = onConfirm;
            a[49] = Ce;
        } else {
            Ce = a[49];
        }
        const be = Ce;
        const ve = editLearnBanner != null && m.inputContainerWithEditLearnBanner;
        let Se;
        if (a[50] !== ve) {
            Se = [
                m.inputContainer,
                m.inputContainerRefreshed,
                ve
            ];
            a[50] = ve;
            a[51] = Se;
        } else {
            Se = a[51];
        }
        const Re = editLearnBanner != null ? ye : null;
        let Le;
        if (a[52] !== fe || a[53] !== Se || a[54] !== Re) {
            const Component = o("WAWebFlex.react").FlexRow;
            Le = <Component xstyle={Se}>{fe}{Re}</Component>;
            a[52] = fe;
            a[53] = Se;
            a[54] = Re;
            a[55] = Le;
        } else {
            Le = a[55];
        }
        const Ee = Le;
        let ke;
        if (a[56] !== editLearnBanner || a[57] !== ye || a[58] !== Ee) {
            ke = editLearnBanner != null ? <div className="x1280gxy x1sn5hld x14mh1r1 x1gn8rj3 x1mmxwd xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xamhcws x1alpsbp xlxy82 xyumdvf x1iyjqo2 xeuugli x6ikm8r x10wlt62" data-testid="edit-message-composer-field">{editLearnBanner}{Ee}</div> : <>{Ee}{ye}</>;
            a[56] = editLearnBanner;
            a[57] = ye;
            a[58] = Ee;
            a[59] = ke;
        } else {
            ke = a[59];
        }
        const Ie = ke;
        let Te;
        if (a[60] === Symbol.for("react.memo_cache_sentinel")) {
            Te = {
                className: "x1n2onr6 x1c4vz4f x2lah0s"
            };
            a[60] = Te;
        } else {
            Te = a[60];
        }
        const De = editLearnBanner != null ? m.composerWithEditLearnBanner : m.composerRefreshed;
        let xe;
        if (a[61] !== De) {
            xe = [
                m.composer,
                De
            ];
            a[61] = De;
            a[62] = xe;
        } else {
            xe = a[62];
        }
        let $e;
        if (a[63] !== be || a[64] !== Ie || a[65] !== xe) {
            const Component = o("WAWebFlex.react").FlexRow;
            $e = <Component align="center" alignSelf="stretch" justify="center" xstyle={xe}>{Ie}{be}</Component>;
            a[63] = be;
            a[64] = Ie;
            a[65] = xe;
            a[66] = $e;
        } else {
            $e = a[66];
        }
        let Pe;
        if (a[67] !== J || a[68] !== $e) {
            Pe = <div {...babelHelpers.extends({}, Te, {
                children: [
                    J,
                    null,
                    $e
                ]
            })}/>;
            a[67] = J;
            a[68] = $e;
            a[69] = Pe;
        } else {
            Pe = a[69];
        }
        return Pe;
    }
    function h(msg) {
        let a = o("WAWebFrontendMsgGetters").getText(msg) ?? o("WAWebMsgGetters").getCaption(msg) ?? "";
        const i = o("WAWebMsgMentionMap").calculateMsgMentionMap(msg);
        const l = o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(msg);
        if (i) {
            const s = new RegExp(Object.keys(i).map((e)=>r("escapeRegex")(e)).join("|"), "g");
            a = a.replace(s, (e)=>{
                const t = i[e].id.toString();
                return `${o("WAWebRichTextInputConst").ZWS}${t}${o("WAWebRichTextInputConst").ZWS}`;
            });
        }
        if (l) {
            const u = new RegExp(Object.keys(l).map((e)=>r("escapeRegex")(e)).join("|"), "g");
            a = a.replace(u, (e)=>`${o("WAWebRichTextInputConst").ZWS}${e.slice(1)}${o("WAWebRichTextInputConst").ZWS}`);
        }
        return a;
    }
    l.EmojiButton = _;
    l.MessageEditComposer = g;
}, 226);