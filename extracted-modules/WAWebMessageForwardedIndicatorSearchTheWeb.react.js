__d("WAWebMessageForwardedIndicatorSearchTheWeb.react", [
    "WAWebCopyPasteSelectable.react",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardIsKeyActivation",
    "WAWebMediaDataGetters",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgType",
    "WAWebSTWGatingUtils",
    "WAWebSearchTheWebCommonUtils",
    "WAWebSearchTheWebEventLogger",
    "WAWebSearchTheWebGetSupportedSearchOptions",
    "WAWebTabOrder",
    "WAWebText.react",
    "WAWebWamEnumStwEntryPoint",
    "WAWebWamEnumStwInteraction",
    "WAWebWamMsgUtils",
    "WAWebWebSearchPopup.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues",
    "useWAWebSearchTheWebLogHFMSurfaced"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        learnMore: {
            cursor: "x1ypdohk",
            color: "x1v5yvga",
            $$css: true
        },
        bold: {
            fontWeight: "x117nqv4",
            $$css: true
        },
        stw: {
            display: "x1lliihq",
            $$css: true
        }
    };
    function c(e) {
        const n = o("react-compiler-runtime").c(35);
        const e_msgKey = e.msgKey;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            let l;
            i = [
                (l = o("WAWebMsgGetters")).getIsFrequentlyForwarded,
                o("WAWebFrontendMsgGetters").getText,
                l.getSender,
                l.getInitialPageSize,
                l.getType,
                l.getIsWamoSub,
                l.getIsNewsletterMsg,
                o("WAWebFrontendMsgGetters").getMediaData,
                l.getIsStatus,
                l.getIsGroupMsg,
                l.getBroadcastId
            ];
            n[0] = i;
        } else {
            i = n[0];
        }
        const c = o("useWAWebMsgValues").useMsgValues(e_msgKey, i);
        const d = c[0];
        const m = c[1];
        const p = c[2];
        const _ = c[3];
        const f = c[4];
        const g = c[5];
        const h = c[6];
        const y = c[7];
        const C = c[8];
        const b = c[9];
        const broadcastId = c[10];
        const S = o("useWAWebMediaDataValues").useOptionalMediaDataValues(y, [
            o("WAWebMediaDataGetters").getFilehash
        ]) ?? [];
        const R = S[0];
        let L;
        if (n[1] !== h || n[2] !== g || n[3] !== e_msgKey || n[4] !== f) {
            const E = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(e_msgKey, h);
            L = f === o("WAWebMsgType").MSG_TYPE.IMAGE && E != null && o("WAWebMsgActionCapability").canWamoSubBeSharedInChat(g, E);
            n[1] = h;
            n[2] = g;
            n[3] = e_msgKey;
            n[4] = f;
            n[5] = L;
        } else {
            L = n[5];
        }
        const k = L;
        let I;
        let T;
        if (n[6] !== k || n[7] !== R || n[8] !== _ || n[9] !== p || n[10] !== m) {
            I = o("WAWebSearchTheWebGetSupportedSearchOptions").getSupportedSearchOptionsFor({
                imageFilehash: k ? R : null,
                msgText: m,
                msgUrls: m == null ? [] : o("WAWebMsgLinks").getLinksFromText(m, p, _ + 1)
            });
            T = o("WAWebSearchTheWebCommonUtils").getSTWFormat(I);
            n[6] = k;
            n[7] = R;
            n[8] = _;
            n[9] = p;
            n[10] = m;
            n[11] = I;
            n[12] = T;
        } else {
            I = n[11];
            T = n[12];
        }
        const D = T;
        let x;
        if (n[13] !== broadcastId || n[14] !== b || n[15] !== C || n[16] !== e_msgKey.remote) {
            x = o("WAWebWamMsgUtils").getWamMessageTypeFor({
                broadcastId,
                isGroupMsg: b,
                isStatus: C,
                remote: e_msgKey.remote
            });
            n[13] = broadcastId;
            n[14] = b;
            n[15] = C;
            n[16] = e_msgKey.remote;
            n[17] = x;
        } else {
            x = n[17];
        }
        let $;
        if (n[18] !== D || n[19] !== x) {
            $ = {
                stwEntryPoint: o("WAWebWamEnumStwEntryPoint").STW_ENTRY_POINT.HIGHLY_FORWARDED_MESSAGE,
                stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION.ENTRY_POINT_SURFACED,
                stwFormat: D,
                messageType: x
            };
            n[18] = D;
            n[19] = x;
            n[20] = $;
        } else {
            $ = n[20];
        }
        const P = o("useWAWebSearchTheWebLogHFMSurfaced").useWAWebSearchTheWebLogHFMSurfaced($);
        if (!d || I.size === 0) {
            return null;
        }
        let N;
        if (n[21] !== e_msgKey || n[22] !== D) {
            N = function() {
                const e = o("WAWebMsgCollection").MsgCollection.get(e_msgKey);
                if (e != null) {
                    o("WAWebSearchTheWebEventLogger").logSTWEvent({
                        stwEntryPoint: o("WAWebWamEnumStwEntryPoint").STW_ENTRY_POINT.HIGHLY_FORWARDED_MESSAGE,
                        stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION.ENTRY_POINT_CLICKED,
                        stwFormat: D,
                        messageType: o("WAWebWamMsgUtils").getWamMessageType(e)
                    });
                    o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebWebSearchPopup.react"), {
                        message: e,
                        stwFormat: D,
                        entryPoint: o("WAWebWamEnumStwEntryPoint").STW_ENTRY_POINT.HIGHLY_FORWARDED_MESSAGE
                    }));
                }
            };
            n[21] = e_msgKey;
            n[22] = D;
            n[23] = N;
        } else {
            N = n[23];
        }
        const M = N;
        let w;
        if (n[24] !== M) {
            w = function(t) {
                if (r("WAWebKeyboardIsKeyActivation")(t)) {
                    t.preventDefault();
                    M();
                }
            };
            n[24] = M;
            n[25] = w;
        } else {
            w = n[25];
        }
        const A = w;
        let F;
        if (n[26] === Symbol.for("react.memo_cache_sentinel")) {
            F = o("WAWebSearchTheWebCommonUtils").getHFMHeaderText();
            n[26] = F;
        } else {
            F = n[26];
        }
        let O;
        if (n[27] === Symbol.for("react.memo_cache_sentinel")) {
            O = [
                u.learnMore,
                o("WAWebSTWGatingUtils").isSearchTheWebDesignExperimentV1Enabled() && u.bold
            ];
            n[27] = O;
        } else {
            O = n[27];
        }
        let B;
        if (n[28] === Symbol.for("react.memo_cache_sentinel")) {
            B = o("WAWebSearchTheWebCommonUtils").getHFMHeaderCTAText();
            n[28] = B;
        } else {
            B = n[28];
        }
        let W;
        if (n[29] !== M || n[30] !== A) {
            const Component = o("WAWebCopyPasteSelectable.react").SelectableLink;
            W = <Component data-testid="search-the-web-link" xstyle={O} selectable role="button" dataTab={o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD} tabIndex={0} onClick={M} onKeyDown={A}>{B}</Component>;
            n[29] = M;
            n[30] = A;
            n[31] = W;
        } else {
            W = n[31];
        }
        let q;
        if (n[32] !== W || n[33] !== P) {
            const Component = o("WAWebText.react").WAWebTextSmall;
            q = <Component weight="normal" color="secondary" xstyle={u.stw} ref={P}>{F} {W}</Component>;
            n[32] = W;
            n[33] = P;
            n[34] = q;
        } else {
            q = n[34];
        }
        return q;
    }
    l.default = c;
}, 98);