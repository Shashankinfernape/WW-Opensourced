__d("WAWebSpacerText.react", [
    "WAWebABPropsSaga",
    "WAWebClassnames",
    "WAWebClock",
    "WAWebFrontendMsgGetters",
    "WAWebLidMigrationDebugUI",
    "WAWebMessageAIContentLabel.react",
    "WAWebMessageMeta.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMsgViewCount",
    "WAWebNewsletterGatingUtils",
    "WAWebQuotedMsgUtils",
    "WAWebTextSizeUtils",
    "WAWebThreadMsgUtils",
    "WAWebThreadsGating",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebIsPinnedMsg",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        spacerContainer: {
            fontSize: "x1ncwhqj",
            display: "x3nfvp2",
            verticalAlign: "xxymvpz",
            visibility: "xlshs6z",
            height: "xqtp20y",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "x1uc92m",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x181vq82",
            $$css: true
        },
        spacerContainerWithViewIcon: {
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xde1mab",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1iw51ew",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(44);
        const { className, msgKey, reserveAiContentLabel, xstyle } = t;
        let d;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            let m;
            d = [
                (m = o("WAWebMsgGetters")).getId,
                m.getBroadcast,
                m.getIsSentByMe,
                m.getStar,
                m.getType,
                m.getIsKept,
                m.getShouldShowEditedIndicator,
                m.getIsBizBot1pResponse,
                m.getT,
                m.getIsCAPISupport,
                m.getIsSupportAIMessage,
                m.getThreadIds,
                m.getIsNewsletterMsg
            ];
            n[0] = d;
        } else {
            d = n[0];
        }
        const p = o("useWAWebMsgValues").useMsgValues(msgKey, d);
        const _ = p[0];
        const f = p[1];
        const g = p[2];
        const h = p[3];
        const y = p[4];
        const C = p[5];
        const b = p[6];
        const v = p[7];
        const S = p[8];
        const R = p[9];
        const L = p[10];
        const E = p[11];
        const k = p[12];
        const I = o("WAWebMsgViewCount").useWAWebLocalizedViewCount(msgKey);
        const T = r("useWAWebIsPinnedMsg")(_);
        const D = o("WAWebMessageAIContentLabel.react").useShouldShowAiContentLabel(msgKey);
        const x = reserveAiContentLabel ?? D;
        const metaTextStyles = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().metaTextStyles;
        let P;
        if (n[1] !== msgKey) {
            P = o("WAWebLidMigrationDebugUI").getShouldShowLidDebugUIForMsgKey(msgKey);
            n[1] = msgKey;
            n[2] = P;
        } else {
            P = n[2];
        }
        const N = P;
        const M = [];
        const w = y === o("WAWebMsgType").MSG_TYPE.REVOKED;
        let A;
        if (n[3] !== k || n[4] !== msgKey || n[5] !== I) {
            const O = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(msgKey, k);
            A = I != null && o("WAWebNewsletterGatingUtils").isNewsletterViewCountEnabled(O?.newsletterMetadata?.membershipType);
            n[3] = k;
            n[4] = msgKey;
            n[5] = I;
            n[6] = A;
        } else {
            A = n[6];
        }
        const B = A;
        let W;
        if (n[7] !== B) {
            W = B && o("WAWebNewsletterGatingUtils").isNewsletterViewsVPVDefinitionEnabled();
            n[7] = B;
            n[8] = W;
        } else {
            W = n[8];
        }
        const q = W;
        if (x && !w) {
            let U;
            if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
                U = <span key="aiContent" className="x1c4vz4f x2lah0s x3nfvp2 x6s0dn4 xuxw1ft">{u.jsx(o("WAWebMessageAIContentLabel.react").WAWebAiContentLabelChip, {
                    testid: "ai-content-label-spacer"
                })}{u.jsx(o("WAWebMessageMeta.react").MetaBullet, {})}</span>;
                n[9] = U;
            } else {
                U = n[9];
            }
            M.push(U);
        }
        if (B) {
            let V;
            if (n[10] === Symbol.for("react.memo_cache_sentinel")) {
                V = {
                    className: "x1c4vz4f x2lah0s x14mko6t"
                };
                n[10] = V;
            } else {
                V = n[10];
            }
            let H;
            if (n[11] === Symbol.for("react.memo_cache_sentinel")) {
                H = u.jsx(o("WAWebMessageMeta.react").MetaBullet, {});
                n[11] = H;
            } else {
                H = n[11];
            }
            let G;
            if (n[12] !== V || n[13] !== I) {
                G = <span key="viewCount" {...babelHelpers.extends({}, V, {
                    children: [
                        I,
                        H
                    ]
                })}/>;
                n[12] = V;
                n[13] = I;
                n[14] = G;
            } else {
                G = n[14];
            }
            M.push(G);
        }
        if (h && !w) {
            let z;
            if (n[15] === Symbol.for("react.memo_cache_sentinel")) {
                z = <span key="star" className="x1c4vz4f x2lah0s x1xp8n7a"/>;
                n[15] = z;
            } else {
                z = n[15];
            }
            M.push(z);
        }
        if (C && !w) {
            let j;
            if (n[16] === Symbol.for("react.memo_cache_sentinel")) {
                j = <span key="kic" className="x1c4vz4f x2lah0s x1xp8n7a"/>;
                n[16] = j;
            } else {
                j = n[16];
            }
            M.push(j);
        }
        if (T && !w) {
            let K;
            if (n[17] === Symbol.for("react.memo_cache_sentinel")) {
                K = <span key="pin" className="x1c4vz4f x2lah0s x1xp8n7a"/>;
                n[17] = K;
            } else {
                K = n[17];
            }
            M.push(K);
        }
        const Q = o("WAWebThreadMsgUtils").getViewAllRepliesThreadId(E);
        if (Q != null && o("WAWebQuotedMsgUtils").getMessagesCountByThreadId(Q) >= 2 && o("WAWebThreadsGating").isFollowUpReplyEnabled()) {
            let X;
            if (n[18] === Symbol.for("react.memo_cache_sentinel")) {
                X = <span key="followUpReply" className="x1c4vz4f x2lah0s x1xp8n7a"/>;
                n[18] = X;
            } else {
                X = n[18];
            }
            M.push(X);
        }
        if (f) {
            let Y;
            if (n[19] === Symbol.for("react.memo_cache_sentinel")) {
                Y = <span key="broadcast" className="x1c4vz4f x2lah0s x1xp8n7a"/>;
                n[19] = Y;
            } else {
                Y = n[19];
            }
            M.push(Y);
        }
        if (b && !w) {
            let J;
            if (n[20] === Symbol.for("react.memo_cache_sentinel")) {
                J = <span key="edited" className="x1c4vz4f x2lah0s xk50ysn x2fvf9 xwklpps">{o("WAWebMessageMeta.react").getEditedLabel()}</span>;
                n[20] = J;
            } else {
                J = n[20];
            }
            M.push(J);
        }
        const Z = o("WAWebMessageMeta.react").useBizBot1pLabel(msgKey);
        if (Z != null) {
            let ee;
            if (n[21] === Symbol.for("react.memo_cache_sentinel")) {
                ee = {
                    className: "x1c4vz4f x2lah0s xk50ysn x2fvf9 xwklpps"
                };
                n[21] = ee;
            } else {
                ee = n[21];
            }
            let te;
            if (n[22] !== Z) {
                te = <span key="bit-bot-label" {...babelHelpers.extends({}, ee, {
                    children: Z
                })}/>;
                n[22] = Z;
                n[23] = te;
            } else {
                te = n[23];
            }
            M.push(te);
            let ne;
            if (n[24] === Symbol.for("react.memo_cache_sentinel")) {
                ne = <span key="biz-bot-icon" className="x1c4vz4f x2lah0s x6jxa94"/>;
                n[24] = ne;
            } else {
                ne = n[24];
            }
            M.push(ne);
        }
        if (Z == null && R && (v || L === true) && o("WAWebABPropsSaga").getIsSagaV1Enabled()) {
            let re;
            if (n[25] === Symbol.for("react.memo_cache_sentinel")) {
                re = <span key="saga-message-marker" className="x1c4vz4f x2lah0s x1849jeq"/>;
                n[25] = re;
            } else {
                re = n[25];
            }
            M.push(re);
        }
        if ((N || g) && !w) {
            const oe = N ? "lid-debug-ui" : "checkmark";
            let ae;
            if (n[26] !== N) {
                ae = ({
                    0: {
                        className: "x1c4vz4f x2lah0s xn6xy2s"
                    },
                    1: {
                        className: "x1c4vz4f x2lah0s xs2mk4o"
                    }
                })[!!N << 0];
                n[26] = N;
                n[27] = ae;
            } else {
                ae = n[27];
            }
            let ie;
            if (n[28] !== oe || n[29] !== ae) {
                ie = <span key={oe} {...babelHelpers.extends({}, ae)}/>;
                n[28] = oe;
                n[29] = ae;
                n[30] = ie;
            } else {
                ie = n[30];
            }
            M.push(ie);
        }
        if (N && w) {
            let le;
            if (n[31] === Symbol.for("react.memo_cache_sentinel")) {
                le = <span key="lid-debug-ui" className="x1c4vz4f x2lah0s xs2mk4o"/>;
                n[31] = le;
            } else {
                le = n[31];
            }
            M.push(le);
        }
        let se;
        if (n[32] === Symbol.for("react.memo_cache_sentinel")) {
            se = {
                className: "x1c4vz4f x2lah0s"
            };
            n[32] = se;
        } else {
            se = n[32];
        }
        let ue;
        if (n[33] !== S) {
            ue = S != null ? o("WAWebClock").Clock.timestampStr(S) : null;
            n[33] = S;
            n[34] = ue;
        } else {
            ue = n[34];
        }
        let ce;
        if (n[35] !== ue) {
            ce = <span key="timestamp" {...babelHelpers.extends({}, se, {
                children: ue
            })}/>;
            n[35] = ue;
            n[36] = ce;
        } else {
            ce = n[36];
        }
        M.push(ce);
        let de;
        if (n[37] !== className || n[38] !== xstyle) {
            de = o("WAWebClassnames").classnamesConvertMeToStylexPlease(className, (e || (e = r("stylex")))(xstyle));
            n[37] = className;
            n[38] = xstyle;
            n[39] = de;
        } else {
            de = n[39];
        }
        const me = M.length > 0 && <span {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.spacerContainer, q === true && c.spacerContainerWithViewIcon, metaTextStyles), {
            "aria-hidden": true,
            children: M
        })}/>;
        let pe;
        if (n[40] !== t.children || n[41] !== de || n[42] !== me) {
            pe = <span className={de}>{t.children}{me}</span>;
            n[40] = t.children;
            n[41] = de;
            n[42] = me;
            n[43] = pe;
        } else {
            pe = n[43];
        }
        return pe;
    }
    l.default = d;
}, 98);