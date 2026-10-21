__d("WAWebPttAudioBubble.react", [
    "WAWebAck",
    "WAWebBizCtwaContext.react",
    "WAWebChatThemeModeContext",
    "WAWebDisplayType",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePaidPartnershipDisclaimerText.react",
    "WAWebMsgGetters",
    "WAWebPttMessagePlaybackRateButton",
    "WAWebPttPrefs",
    "WAWebPttPrefsGetters",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues",
    "useWAWebNewsletterActionItems",
    "useWAWebPttPrefsValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const s_useContext = s.useContext;
    const d = "6px";
    const m = "336px";
    const p = {
        bubble: {
            boxSizing: "x9f619",
            maxWidth: "x193iq5w",
            paddingTop: "x1yrsyyn",
            paddingInlineEnd: "x1icxu4v",
            paddingBottom: "x10b6aqq",
            paddingInlineStart: "x25sj25",
            $$css: true
        },
        newsletterBubble: {
            width: "x1yuel0x",
            $$css: true
        },
        regularBubble: {
            width: "x121pien",
            $$css: true
        },
        bubbleAnnouncement: {
            width: "x1yuel0x",
            $$css: true
        },
        hasAuthorAnnouncement: {
            paddingTop: "x1byr4rc",
            $$css: true
        },
        forwardedIndicator: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "xg8j3zb",
            paddingInlineStart: "x135b78x",
            $$css: true
        },
        hasAuthorForwardedIndicator: {
            paddingTop: "x123j3cw",
            $$css: true
        },
        hasAuthor: {
            paddingTop: "x9tmck8",
            $$css: true
        },
        hasAuthorElevatedPushNames: {
            paddingTop: "xexx8yu",
            $$css: true
        },
        hasQuote: {
            paddingTop: "xyqdw3p",
            $$css: true
        },
        hasQuoteAuthor: {
            position: "x1n2onr6",
            top: "x1ngbm5e",
            insetInlineStart: "x1tvzbhf",
            width: "xh8yej3",
            paddingTop: "xyqdw3p",
            paddingInlineStart: "x1djpfga",
            $$css: true
        },
        isForwardedAuthor: {
            width: "x14atkfc",
            $$css: true
        },
        authorAnnouncement: {
            width: "x11ys1z5",
            maxWidth: "xm2tn8k",
            $$css: true
        },
        author: {
            width: "x1e8r7jv",
            maxWidth: "xiqdezl",
            $$css: true
        },
        authorElevatedPushNames: {
            width: "xh8yej3",
            paddingBottom: "x10b6aqq",
            paddingInlineStart: "x4tra6z",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            $$css: true
        },
        authorGalleryNarrow: {
            width: "x1e8r7jv x1isr11b",
            $$css: true
        }
    };
    function _(t) {
        const n = o("react-compiler-runtime").c(78);
        const t_msgKey = t.msgKey;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            let l;
            i = [
                (l = o("WAWebMsgGetters")).getId,
                l.getAck,
                l.getIsSentByMe,
                o("WAWebFrontendMsgGetters").getAsPttLike,
                l.getIsNewsletterMsg,
                o("WAWebFrontendMsgGetters").getShouldShowForwarded
            ];
            n[0] = i;
        } else {
            i = n[0];
        }
        const s = o("useWAWebMsgValues").useMsgValues(t_msgKey, i);
        const d = s[0];
        const m = s[1];
        const _ = s[2];
        const f = s[3];
        const g = s[4];
        const h = s[5];
        const y = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(t_msgKey, g);
        const C = s_useContext(r("WAWebChatThemeModeContext"));
        const { isThemed, isVibrant } = C;
        let S;
        if (n[1] !== isThemed || n[2] !== isVibrant || n[3] !== _) {
            S = isThemed ? ({
                0: {
                    className: "x1nuagic xv8ol63 x531f83 xv7i4pt x1tq6e3e xu7j3m8 x166b9r3 x1m638s7 x8w6msn x4waw3b x1ba4949 xvcldg8 x1orp12f x18aq6mh xkbu4vg x1gjk43w"
                },
                1: {
                    className: "x1nuagic x531f83 xv7i4pt x1tq6e3e x166b9r3 x1m638s7 x4waw3b x1ba4949 xvcldg8 xkbu4vg x1gjk43w x1auojx4 x1vzaafi x1xj1co4 xbgy0q5 x1orp12f"
                }
            })[!!(isVibrant && _) << 0] : null;
            n[1] = isThemed;
            n[2] = isVibrant;
            n[3] = _;
            n[4] = S;
        } else {
            S = n[4];
        }
        const R = S;
        let L;
        if (n[5] !== _) {
            L = r("WAWebL10N").isRTL() ? !_ : _;
            n[5] = _;
            n[6] = L;
        } else {
            L = n[6];
        }
        const E = L;
        const k = t.author != null;
        const I = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(y);
        const T = t.quotedMsg != null;
        const D = t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS || t.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY;
        const x = (e || (e = r("stylex")))(t.displayType !== o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER ? p.regularBubble : p.newsletterBubble, o("WAWebDisplayType").isWideDisplay(t.displayType) && p.bubbleAnnouncement, t.author != null && o("WAWebDisplayType").isWideDisplay(t.displayType) && p.hasAuthorAnnouncement, k && p.hasAuthor, k && I && p.hasAuthorElevatedPushNames, T && p.hasQuote, p.bubble);
        let $;
        if (n[7] !== E || n[8] !== t.status) {
            $ = t.status ? <div {...babelHelpers.extends({}, {
                0: {
                    className: "x10l6tqk x1t1qrwb x7hj1vm"
                },
                1: {
                    className: "x10l6tqk x1t1qrwb xgvahye"
                }
            }[!!E << 0], {
                children: t.status
            })}/> : null;
            n[7] = E;
            n[8] = t.status;
            n[9] = $;
        } else {
            $ = n[9];
        }
        const P = $;
        const N = e(T && p.hasQuoteAuthor, h && p.isForwardedAuthor, o("WAWebDisplayType").isWideDisplay(t.displayType) && p.authorAnnouncement, p.author, D && p.authorGalleryNarrow, I && p.authorElevatedPushNames);
        const M = t.author != null ? <div className={N}>{t.author}</div> : null;
        let w;
        if (n[10] !== k || n[11] !== h || n[12] !== t_msgKey) {
            w = h ? u.jsx(r("WAWebMessageForwardedIndicator.react"), {
                msgKey: t_msgKey,
                xstyle: [
                    p.forwardedIndicator,
                    k && p.hasAuthorForwardedIndicator
                ]
            }) : null;
            n[10] = k;
            n[11] = h;
            n[12] = t_msgKey;
            n[13] = w;
        } else {
            w = n[13];
        }
        const A = w;
        let F;
        if (n[14] !== t_msgKey) {
            F = u.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), {
                msgKey: t_msgKey
            });
            n[14] = t_msgKey;
            n[15] = F;
        } else {
            F = n[15];
        }
        const O = F;
        const B = o("useWAWebNewsletterActionItems").useWAWebNewsletterActionItems(t_msgKey);
        const W = B.length > 0;
        let q;
        if (n[16] !== k || n[17] !== t.quotedMsg) {
            q = t.quotedMsg ? <div {...babelHelpers.extends({}, {
                0: {
                    className: "xdj266r x18faa90 x1e56ztr x4h0osi"
                },
                1: {
                    className: "x18faa90 x1e56ztr x4h0osi x1ok221b"
                }
            }[!!k << 0], {
                children: t.quotedMsg
            })}/> : null;
            n[16] = k;
            n[17] = t.quotedMsg;
            n[18] = q;
        } else {
            q = n[18];
        }
        const U = q;
        let V;
        if (n[19] === Symbol.for("react.memo_cache_sentinel")) {
            V = [
                o("WAWebPttPrefsGetters").getPlaybackRate,
                o("WAWebPttPrefsGetters").getPlaybackControlMessageId
            ];
            n[19] = V;
        } else {
            V = n[19];
        }
        const H = o("useWAWebPttPrefsValues").usePttPrefsValues(V);
        const playbackRate = H[0];
        const z = H[1];
        const j = f != null;
        let K;
        let playbackRateButtonIsVisible = false;
        if (j) {
            let X;
            if (n[20] !== d) {
                X = d.toString();
                n[20] = d;
                n[21] = X;
            } else {
                X = n[21];
            }
            playbackRateButtonIsVisible = z === X;
            let Y;
            if (n[22] !== d) {
                Y = function() {
                    o("WAWebPttPrefs").PttPrefs.advancePlaybackRateFor(d);
                };
                n[22] = d;
                n[23] = Y;
            } else {
                Y = n[23];
            }
            const J = Y;
            let Z;
            if (n[24] !== E || n[25] !== playbackRateButtonIsVisible) {
                Z = ({
                    0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl xg01cxk x19991ni x13dflua xz4gly6 xe9ewy2",
                    2: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl xg01cxk x19991ni x13dflua xz4gly6 xwklpps",
                    1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x19991ni x13dflua xz4gly6 xe9ewy2 x67bb7w x1hc1fzr",
                    3: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x19991ni x13dflua xz4gly6 xwklpps x67bb7w x1hc1fzr"
                })[!!E << 1 | !!playbackRateButtonIsVisible << 0];
                n[24] = E;
                n[25] = playbackRateButtonIsVisible;
                n[26] = Z;
            } else {
                Z = n[26];
            }
            const ee = Z;
            const played = m === o("WAWebAck").ACK.PLAYED;
            let ne;
            if (n[27] !== J || n[28] !== _ || n[29] !== playbackRate || n[30] !== playbackRateButtonIsVisible || n[31] !== played) {
                const Component = r("WAWebPttMessagePlaybackRateButton");
                ne = <Component playbackRate={playbackRate} onClick={J} isSentByMe={_} played={played} playbackRateButtonIsVisible={playbackRateButtonIsVisible}/>;
                n[27] = J;
                n[28] = _;
                n[29] = playbackRate;
                n[30] = playbackRateButtonIsVisible;
                n[31] = played;
                n[32] = ne;
            } else {
                ne = n[32];
            }
            let re;
            if (n[33] !== ee || n[34] !== ne) {
                re = <div className={ee}>{ne}</div>;
                n[33] = ee;
                n[34] = ne;
                n[35] = re;
            } else {
                re = n[35];
            }
            K = re;
        }
        let oe;
        if (n[36] !== playbackRateButtonIsVisible) {
            oe = ({
                0: "x1n2onr6 x1c4vz4f x2lah0s xdl72j9 x47corl xg01cxk x19991ni x13dflua xz4gly6",
                1: "x1n2onr6 x1c4vz4f x2lah0s xdl72j9 x19991ni x13dflua xz4gly6 x67bb7w x1hc1fzr"
            })[!playbackRateButtonIsVisible << 0];
            n[36] = playbackRateButtonIsVisible;
            n[37] = oe;
        } else {
            oe = n[37];
        }
        const ae = oe;
        const ie = {
            0: "x78zum5 x6s0dn4 x2fvf9 x13fj5qh",
            4: "x78zum5 x6s0dn4 x15zctf7 x2fvf9 x13fj5qh",
            2: "x78zum5 x6s0dn4 x1xegmmw xdwrcjd",
            6: "x78zum5 x6s0dn4 x15zctf7 x1xegmmw xdwrcjd",
            1: "x78zum5 x6s0dn4 x2fvf9 x1lziwak",
            5: "x78zum5 x6s0dn4 x15zctf7 x2fvf9 x1lziwak",
            3: "x78zum5 x6s0dn4 x1xegmmw x1lziwak",
            7: "x78zum5 x6s0dn4 x15zctf7 x1xegmmw x1lziwak"
        }[!!_ << 2 | !!E << 1 | !!(!E && I) << 0];
        let le;
        if (n[38] !== W || n[39] !== _) {
            le = ({
                0: "x10l6tqk xmnce4g",
                4: "x10l6tqk x1inkcgm",
                2: "x10l6tqk xmnce4g xbfrwjf",
                6: "x10l6tqk x1inkcgm xbfrwjf",
                1: "x10l6tqk xmnce4g x1ua38it",
                5: "x10l6tqk x1inkcgm x1ua38it",
                3: "x10l6tqk xmnce4g x1ua38it",
                7: "x10l6tqk x1inkcgm x1ua38it"
            })[!!_ << 2 | !W << 1 | !!W << 0];
            n[38] = W;
            n[39] = _;
            n[40] = le;
        } else {
            le = n[40];
        }
        const se = le;
        let ue;
        if (n[41] === Symbol.for("react.memo_cache_sentinel")) {
            ue = "x1198e8h x18faa90 xahult9 x4h0osi";
            n[41] = ue;
        } else {
            ue = n[41];
        }
        let ce;
        if (n[42] !== t_msgKey) {
            ce = u.jsx(r("WAWebBizCtwaContext.react"), {
                msgKey: t_msgKey,
                wrapperClass: ue
            });
            n[42] = t_msgKey;
            n[43] = ce;
        } else {
            ce = n[43];
        }
        let de;
        if (n[44] !== E) {
            de = ({
                0: {
                    className: "x1iyjqo2 x1j85h84 xgyfb49"
                },
                1: {
                    className: "x1iyjqo2 x1j85h84 x1az2cgm"
                }
            })[!!E << 0];
            n[44] = E;
            n[45] = de;
        } else {
            de = n[45];
        }
        let me;
        if (n[46] !== t.player || n[47] !== de) {
            me = <div {...babelHelpers.extends({}, de, {
                children: t.player
            })}/>;
            n[46] = t.player;
            n[47] = de;
            n[48] = me;
        } else {
            me = n[48];
        }
        let pe;
        if (n[49] === Symbol.for("react.memo_cache_sentinel")) {
            pe = {
                className: "x1n2onr6"
            };
            n[49] = pe;
        } else {
            pe = n[49];
        }
        let _e;
        if (n[50] !== ae || n[51] !== t.avatar || n[52] !== P) {
            _e = <div className={ae}>{t.avatar}{P}</div>;
            n[50] = ae;
            n[51] = t.avatar;
            n[52] = P;
            n[53] = _e;
        } else {
            _e = n[53];
        }
        let fe;
        if (n[54] !== K || n[55] !== _e) {
            fe = <div {...babelHelpers.extends({}, pe, {
                children: [
                    K,
                    _e
                ]
            })}/>;
            n[54] = K;
            n[55] = _e;
            n[56] = fe;
        } else {
            fe = n[56];
        }
        let ge;
        if (n[57] !== ie || n[58] !== me || n[59] !== fe) {
            ge = <div className={ie}>{me}{fe}</div>;
            n[57] = ie;
            n[58] = me;
            n[59] = fe;
            n[60] = ge;
        } else {
            ge = n[60];
        }
        let he;
        if (n[61] !== t_msgKey) {
            he = u.jsx(o("WAWebMessageMeta.react").Meta, {
                msgKey: t_msgKey
            });
            n[61] = t_msgKey;
            n[62] = he;
        } else {
            he = n[62];
        }
        let ye;
        if (n[63] !== se || n[64] !== he) {
            ye = <div className={se}>{he}</div>;
            n[63] = se;
            n[64] = he;
            n[65] = ye;
        } else {
            ye = n[65];
        }
        let Ce;
        if (n[66] !== M || n[67] !== A || n[68] !== O || n[69] !== U || n[70] !== ce || n[71] !== ge || n[72] !== ye || n[73] !== R) {
            Ce = <div {...babelHelpers.extends({}, R, {
                children: [
                    M,
                    A,
                    O,
                    U,
                    ce,
                    ge,
                    ye
                ]
            })}/>;
            n[66] = M;
            n[67] = A;
            n[68] = O;
            n[69] = U;
            n[70] = ce;
            n[71] = ge;
            n[72] = ye;
            n[73] = R;
            n[74] = Ce;
        } else {
            Ce = n[74];
        }
        let be;
        if (n[75] !== x || n[76] !== Ce) {
            be = <div className={x}>{Ce}</div>;
            n[75] = x;
            n[76] = Ce;
            n[77] = be;
        } else {
            be = n[77];
        }
        return be;
    }
    l.default = _;
}, 98);