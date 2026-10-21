__d("WAWebMessageEditModal.react", [
    "fbt",
    "WAWebBizAiEditLearnBanner.react",
    "WAWebChatThemeProvider.react",
    "WAWebComposeBoxHasUnsavedChangesInEditModal",
    "WAWebDeleteRevokeMsgFlow.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlexItem.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessageEditActionsModal.react",
    "WAWebMessageEditComposer.react",
    "WAWebMessageEditMsgPreview.react",
    "WAWebMessageEditUtils",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPaymentLink",
    "WAWebPollsGatingUtils",
    "WAWebPortalThemeWrapper.react",
    "WAWebStateUtils",
    "cr:6009",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAiMessageEditCoachingLog",
    "useWAWebListener",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useMemo, useRef, useState } = c;
    function _() {
        return r("gkx")("4985");
    }
    const f = {
        previewContainer: {
            overflowX: "xw2csxc",
            overflowY: "x1odjw0f",
            position: "x1n2onr6",
            zIndex: "x1ja2u2z",
            minHeight: "x2lwn1j",
            maxHeight: "xchkpuk",
            $$css: true
        },
        drawer: {
            position: "x1n2onr6",
            $$css: true
        }
    };
    function g(e) {
        const t = o("react-compiler-runtime").c(77);
        const { ref, msg, onCancel, onConfirm } = e;
        const d = msg.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION;
        let g;
        if (t[0] !== d || t[1] !== msg) {
            g = d ? o("WAWebFrontendMsgGetters").getAsPollCreation(msg)?.pollName ?? "" : o("WAWebFrontendMsgGetters").getText(msg) ?? "";
            t[0] = d;
            t[1] = msg;
            t[2] = g;
        } else {
            g = t[2];
        }
        const E = g;
        const k = useState(E);
        const I = k[0];
        const T = k[1];
        let D;
        if (t[3] !== d || t[4] !== msg) {
            D = d ? null : v(msg);
            t[3] = d;
            t[4] = msg;
            t[5] = D;
        } else {
            D = t[5];
        }
        const initialLinkPreview = D;
        const $ = useState(initialLinkPreview);
        const P = $[0];
        const N = $[1];
        let M;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            M = {};
            t[6] = M;
        } else {
            M = t[6];
        }
        const wRef = useRef(M);
        const A = useB(I, initialLinkPreview, P);
        const F = useState(false);
        const O = F[0];
        const B = F[1];
        const W = useState(false);
        const disableConfirmButton = W[0];
        const U = W[1];
        const V = r("useWAWebBizAiMessageEditCoachingLog")(msg, E);
        let H;
        if (t[7] !== msg) {
            H = o("WAWebMsgActionCapability").shouldCoachAgentEdit(msg) ? u.jsx(r("WAWebBizAiEditLearnBanner.react"), {
                msg
            }) : null;
            t[7] = msg;
            t[8] = H;
        } else {
            H = t[8];
        }
        const editLearnBanner = H;
        o("WAWebComposeBoxHasUnsavedChangesInEditModal").setHasUnsavedChangesInEditModal(A);
        let z;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            z = [
                "close_modal"
            ];
            t[9] = z;
        } else {
            z = t[9];
        }
        o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, z, h);
        let j;
        if (t[10] !== V || t[11] !== d) {
            j = function(t) {
                V.onTextChanged(t.text);
                T(t.text);
                const r = t.text.trim().length === 0;
                U(r && (d || !_()));
                wRef.current.mentionedJidList = t.data.mentionedJidList ?? [];
                wRef.current.groupMentions = t.data.groupMentions ?? [];
            };
            t[10] = V;
            t[11] = d;
            t[12] = j;
        } else {
            j = t[12];
        }
        const onInputChange = j;
        let Q;
        if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
            Q = function(t) {
                wRef.current.linkPreview = t;
                N(t);
            };
            t[13] = Q;
        } else {
            Q = t[13];
        }
        const onLinkPreviewChange = r("useWAWebStableCallback")(Q);
        let Y;
        if (t[14] !== V) {
            Y = function() {
                V.onEditorResolved();
                o("WAWebModalManager").closeModalManager();
            };
            t[14] = V;
            t[15] = Y;
        } else {
            Y = t[15];
        }
        const onEnd = Y;
        let Z;
        if (t[16] !== onEnd || t[17] !== msg) {
            Z = function() {
                const Component = r("WAWebDeleteRevokeMsgFlow.react");
                o("WAWebModalManager").ModalManager.openSupportModal(<Component chat={o("WAWebFrontendMsgGetters").getChat(msg)} msgList={[
                    msg.unsafe()
                ].map(o("WAWebStateUtils").unproxy)} onEnd={onEnd}/>);
            };
            t[16] = onEnd;
            t[17] = msg;
            t[18] = Z;
        } else {
            Z = t[18];
        }
        const ee = Z;
        let te;
        if (t[19] !== V || t[20] !== ee || t[21] !== A || t[22] !== d || t[23] !== msg || t[24] !== onConfirm || t[25] !== I) {
            te = function() {
                if (I.trim().length !== 0) {
                    V.onEditorResolved();
                }
                if (I.trim().length === 0) {
                    if (!d && _()) {
                        ee();
                    }
                    return;
                }
                if (!A) {
                    o("WAWebModalManager").ModalManager.close();
                    return;
                }
                if (n("cr:6009") != null && n("cr:6009").messageEditRestrictionEnabled() && !o("WAWebMsgActionCapability").shouldCoachAgentEdit(msg) && !o("WAWebMessageEditUtils").isParentWithinEditProcessingWindow({
                    parentTsInSeconds: msg.t,
                    msgKey: msg.id
                }) && !o("WAWebMessageEditUtils").isMessageYourselfEditExempt({
                    msgKey: msg.id,
                    msgType: msg.type
                })) {
                    B(true);
                    U(true);
                    return;
                }
                V.onSaveConfirmed();
                onConfirm(I, babelHelpers.extends({}, wRef.current));
            };
            t[19] = V;
            t[20] = ee;
            t[21] = A;
            t[22] = d;
            t[23] = msg;
            t[24] = onConfirm;
            t[25] = I;
            t[26] = te;
        } else {
            te = t[26];
        }
        const ne = te;
        let re;
        if (t[27] !== A) {
            re = function() {
                if (!A) {
                    o("WAWebModalManager").ModalManager.close();
                }
            };
            t[27] = A;
            t[28] = re;
        } else {
            re = t[28];
        }
        const oe = re;
        let ae;
        if (t[29] !== O) {
            const Component = r("WAWebMessageEditActionsModal.react");
            ae = O ? <Component type={o("WAWebModal.react").ModalTheme.MessageActionsModal} titleText={s._("Time limit has passed")} okText={s._("OK")} onOk={function() {
                B(false);
            }} modalText={s._("You have 15 minutes to start and then finish editing a message.")}/> : null;
            t[29] = O;
            t[30] = ae;
        } else {
            ae = t[30];
        }
        const ie = ae;
        let le;
        if (t[31] === Symbol.for("react.memo_cache_sentinel")) {
            le = {
                surface: "message-edit",
                viewName: "message-edit"
            };
            t[31] = le;
        } else {
            le = t[31];
        }
        let se;
        if (t[32] !== d || t[33] !== msg) {
            se = y(msg, d);
            t[32] = d;
            t[33] = msg;
            t[34] = se;
        } else {
            se = t[34];
        }
        let ue;
        if (t[35] !== onCancel || t[36] !== se) {
            const Component = o("WAWebDrawerHeader.react").DrawerHeader;
            ue = <Component title={se} type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP} onCancel={onCancel}/>;
            t[35] = onCancel;
            t[36] = se;
            t[37] = ue;
        } else {
            ue = t[37];
        }
        let ce;
        if (t[38] !== msg) {
            ce = o("WAWebFrontendMsgGetters").getChat(msg);
            t[38] = msg;
            t[39] = ce;
        } else {
            ce = t[39];
        }
        let de;
        if (t[40] === Symbol.for("react.memo_cache_sentinel")) {
            de = "x78zum5 xdt5ytf x1iyjqo2 xs83m0k x2lwn1j xeuugli";
            t[40] = de;
        } else {
            de = t[40];
        }
        const linkPreviewVisible = !!P;
        let pe;
        if (t[41] !== msg || t[42] !== linkPreviewVisible) {
            const Component = r("WAWebFlexItem.react");
            pe = <Component grow={0} shrink={1} basis="content" xstyle={f.previewContainer}>{u.jsx(r("WAWebMessageEditMsgPreview.react"), {
                msg,
                linkPreviewVisible
            })}</Component>;
            t[41] = msg;
            t[42] = linkPreviewVisible;
            t[43] = pe;
        } else {
            pe = t[43];
        }
        const _e = d ? E : null;
        const enableMentions = !d;
        const enableTextFormatting = !d;
        let he;
        if (t[44] !== d) {
            he = d ? o("WAWebPollsGatingUtils").getMaxPollNameLength() : undefined;
            t[44] = d;
            t[45] = he;
        } else {
            he = t[45];
        }
        let placeholderOverride;
        if (t[46] !== d) {
            placeholderOverride = d ? C() : null;
            t[46] = d;
            t[47] = placeholderOverride;
        } else {
            placeholderOverride = t[47];
        }
        let Ce;
        if (t[48] !== disableConfirmButton || t[49] !== editLearnBanner || t[50] !== ne || t[51] !== onInputChange || t[52] !== onLinkPreviewChange || t[53] !== initialLinkPreview || t[54] !== msg || t[55] !== _e || t[56] !== enableMentions || t[57] !== enableTextFormatting || t[58] !== he || t[59] !== placeholderOverride) {
            const Component = o("WAWebMessageEditComposer.react").MessageEditComposer;
            Ce = <Component msg={msg} editLearnBanner={editLearnBanner} initialLinkPreview={initialLinkPreview} initialText={_e} enableMentions={enableMentions} enableTextFormatting={enableTextFormatting} maxLength={he} placeholderOverride={placeholderOverride} onInputChange={onInputChange} onLinkPreviewChange={onLinkPreviewChange} onConfirm={ne} disableConfirmButton={disableConfirmButton}/>;
            t[48] = disableConfirmButton;
            t[49] = editLearnBanner;
            t[50] = ne;
            t[51] = onInputChange;
            t[52] = onLinkPreviewChange;
            t[53] = initialLinkPreview;
            t[54] = msg;
            t[55] = _e;
            t[56] = enableMentions;
            t[57] = enableTextFormatting;
            t[58] = he;
            t[59] = placeholderOverride;
            t[60] = Ce;
        } else {
            Ce = t[60];
        }
        let be;
        if (t[61] !== pe || t[62] !== Ce) {
            const Component = r("WAWebDrawerBody.react");
            const Component_1 = r("WAWebPortalThemeWrapper.react");
            be = <Component_1><Component className={de}>{pe}{Ce}</Component></Component_1>;
            t[61] = pe;
            t[62] = Ce;
            t[63] = be;
        } else {
            be = t[63];
        }
        let ve;
        if (t[64] !== ce || t[65] !== be) {
            const Component = r("WAWebChatThemeProvider.react");
            ve = <Component chat={ce}>{be}</Component>;
            t[64] = ce;
            t[65] = be;
            t[66] = ve;
        } else {
            ve = t[66];
        }
        let Se;
        if (t[67] !== ue || t[68] !== ve) {
            const Component = r("WAWebDrawer.react");
            Se = <Component key="edit-message-modal" testid="edit-message-modal" xstyle={f.drawer} disableNavigationLogging>{ue}{ve}</Component>;
            t[67] = ue;
            t[68] = ve;
            t[69] = Se;
        } else {
            Se = t[69];
        }
        let Re;
        if (t[70] !== oe || t[71] !== ref || t[72] !== Se) {
            const Component = o("WAWebModal.react").Modal;
            Re = <Component type={o("WAWebModal.react").ModalTheme.MessageEdit} ref={ref} tsNavigationData={le} onOverlayClick={oe}>{Se}</Component>;
            t[70] = oe;
            t[71] = ref;
            t[72] = Se;
            t[73] = Re;
        } else {
            Re = t[73];
        }
        let Le;
        if (t[74] !== ie || t[75] !== Re) {
            Le = <>{Re}{ie}</>;
            t[74] = ie;
            t[75] = Re;
            t[76] = Le;
        } else {
            Le = t[76];
        }
        return Le;
    }
    function h() {
        o("WAWebComposeBoxHasUnsavedChangesInEditModal").setHasUnsavedChangesInEditModal(false);
    }
    function y(e, t) {
        if (t) {
            return s._("Edit poll");
        }
        if (o("WAWebMsgGetters").getIsNewsletterMsg(e)) {
            return s._("Edit update");
        }
        return s._("Edit message");
    }
    y.displayName = `${y.name} [from ${i.id}]`;
    function C() {
        return s._("Question");
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function useB(e, initialLinkPreview, n) {
        const r = o("react-compiler-runtime").c(2);
        let a;
        if (r[0] !== e) {
            a = e.trim();
            r[0] = e;
            r[1] = a;
        } else {
            a = r[1];
        }
        const i = a;
        const l = useState(i);
        const s = l[0];
        const u = i.length > 0 && (i !== s || n?.matchedText !== initialLinkPreview?.matchedText);
        return u;
    }
    function v(msg) {
        const t = o("WAWebFrontendMsgGetters").getAsUrl(msg.unsafe());
        if (!t) {
            return null;
        }
        let psp = null;
        if (o("WAWebPaymentLink").shouldDetectInComposer()) {
            psp = o("WAWebPaymentLink").getPSP(t.matchedText);
        }
        return {
            title: t.title,
            description: t.description,
            matchedText: t.matchedText,
            richPreviewType: t.richPreviewType,
            thumbnail: t.thumbnail,
            thumbnailHQ: t.thumbnailHQ,
            doNotPlayInline: !!t.doNotPlayInline,
            inviteGrpType: t.inviteGrpType,
            mediaKey: t.mediaKey,
            mediaKeyTimestamp: t.mediaKeyTimestamp,
            thumbnailDirectPath: t.thumbnailDirectPath,
            thumbnailSha256: t.thumbnailSha256,
            thumbnailEncSha256: t.thumbnailEncSha256,
            thumbnailHeight: t.thumbnailHeight,
            thumbnailWidth: t.thumbnailWidth,
            psp,
            isLoading: false
        };
    }
    l.default = g;
}, 226);