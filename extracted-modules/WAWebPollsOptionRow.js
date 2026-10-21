__d("WAWebPollsOptionRow", [
    "WAWebCheckBox.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessagePicture.react",
    "WAWebMsgGetters",
    "WAWebPollOptionImage.react",
    "WAWebPollOptionInfo",
    "WAWebPollsGatingUtils",
    "WAWebPollsOptionCheckbox",
    "WAWebQuizOptionCheckbox",
    "WAWebSpinner.react",
    "WAWebTypesMedia",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useId = e.useId;
    const c = {
        paddingInline48: {
            paddingInlineStart: "x1oiqv2n",
            paddingInlineEnd: "x15zmtp0",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        }
    };
    const d = {
        infoLayoutContainer: {
            overflowWrap: "x1mzt3pk",
            $$css: true
        },
        loadingThumb: {
            width: "x15yg21f",
            height: "xnnlda6",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            backgroundColor: "x3x0x6p",
            $$css: true
        }
    };
    const m = 18;
    function p(e) {
        const t = o("react-compiler-runtime").c(59);
        const { albumMsgs, animationPromise, associatedMsg, checked, hideResults, index, isAdminOrOwner, isCorrectOption, isPollEnded, loadingPhotoThumb, msgKey, onDetailImageClick, onOptionToggle, onPhotoThumbClick, option, readonly, result, selectable, trusted, view } = e;
        const option_localId = option.localId;
        const P = e_useId();
        let N;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            N = [
                o("WAWebMsgGetters").getIsSentByMe
            ];
            t[0] = N;
        } else {
            N = t[0];
        }
        const M = o("useWAWebMsgValues").useMsgValues(msgKey, N);
        const w = M[0];
        let A;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            A = o("WAWebPollsGatingUtils").isTappableLinksInPollOptionEnabled();
            t[1] = A;
        } else {
            A = t[1];
        }
        const F = A;
        let O;
        if (t[2] !== associatedMsg || t[3] !== loadingPhotoThumb || t[4] !== onPhotoThumbClick) {
            const Component = o("WAWebFlex.react").FlexColumn;
            const Component_1 = r("WAWebPollOptionImage.react");
            const Component_2 = o("WAWebFlex.react").FlexColumn;
            O = loadingPhotoThumb === true ? <Component xstyle={d.loadingThumb} justify="center" align="center" shrink={0}>{s.jsx(o("WAWebSpinner.react").Spinner, {
                size: m
            })}</Component> : associatedMsg && <Component_2 alignSelf="start" shrink={0}><Component_1 msgKey={associatedMsg.id} size="large" onClick={onPhotoThumbClick}/></Component_2>;
            t[2] = associatedMsg;
            t[3] = loadingPhotoThumb;
            t[4] = onPhotoThumbClick;
            t[5] = O;
        } else {
            O = t[5];
        }
        let B;
        if (t[6] !== O) {
            B = <>{O}</>;
            t[6] = O;
            t[7] = B;
        } else {
            B = t[7];
        }
        const W = B;
        let q;
        if (t[8] !== P || t[9] !== checked || t[10] !== onOptionToggle || t[11] !== option || t[12] !== result.count) {
            q = {
                option,
                checked,
                id: P,
                onOptionToggle,
                count: result.count
            };
            t[8] = P;
            t[9] = checked;
            t[10] = onOptionToggle;
            t[11] = option;
            t[12] = result.count;
            t[13] = q;
        } else {
            q = t[13];
        }
        const U = q;
        const V = F && selectable;
        let H;
        if (t[14] !== animationPromise || t[15] !== U || t[16] !== hideResults || t[17] !== index || t[18] !== isAdminOrOwner || t[19] !== isCorrectOption || t[20] !== w || t[21] !== msgKey || t[22] !== readonly || t[23] !== selectable) {
            const Component = r("WAWebFlexItem.react");
            H = !readonly && <Component align="start" shrink={0}>{isCorrectOption == null ? s.jsx(r("WAWebPollsOptionCheckbox"), babelHelpers.extends({
                disabled: !selectable,
                theme: w ? o("WAWebCheckBox.react").CheckboxTheme.POLLS_SENDER : o("WAWebCheckBox.react").CheckboxTheme.POLLS_RECEIVER,
                testid: `poll-option-${index}`
            }, U)) : s.jsx(r("WAWebQuizOptionCheckbox"), babelHelpers.extends({
                isAdminOrOwner,
                hideResults,
                testid: `quiz-option-${index}`,
                isCorrectOption,
                msgId: msgKey,
                animationPromise
            }, U))}</Component>;
            t[14] = animationPromise;
            t[15] = U;
            t[16] = hideResults;
            t[17] = index;
            t[18] = isAdminOrOwner;
            t[19] = isCorrectOption;
            t[20] = w;
            t[21] = msgKey;
            t[22] = readonly;
            t[23] = selectable;
            t[24] = H;
        } else {
            H = t[24];
        }
        const layout = (associatedMsg || loadingPhotoThumb) && view === "message" ? "vertical" : "horizontal";
        const showFacePile = view === "message";
        let j;
        if (t[25] !== P || t[26] !== checked || t[27] !== hideResults || t[28] !== index || t[29] !== isAdminOrOwner || t[30] !== isCorrectOption || t[31] !== isPollEnded || t[32] !== msgKey || t[33] !== onDetailImageClick || t[34] !== option || t[35] !== result || t[36] !== selectable || t[37] !== layout || t[38] !== showFacePile || t[39] !== trusted) {
            const Component = r("WAWebPollOptionInfo");
            const Component_1 = r("WAWebFlexItem.react");
            j = <Component_1 xstyle={d.infoLayoutContainer} grow={1}><Component checkBoxId={P} index={index} isPollEnded={isPollEnded} msgKey={msgKey} name={option.name} onDetailImageClick={onDetailImageClick} option={option} result={result} selectable={selectable} trusted={trusted} layout={layout} showFacePile={showFacePile} hideResults={hideResults} checked={checked} isCorrectOption={isCorrectOption} isAdminOrOwner={isAdminOrOwner}/></Component_1>;
            t[25] = P;
            t[26] = checked;
            t[27] = hideResults;
            t[28] = index;
            t[29] = isAdminOrOwner;
            t[30] = isCorrectOption;
            t[31] = isPollEnded;
            t[32] = msgKey;
            t[33] = onDetailImageClick;
            t[34] = option;
            t[35] = result;
            t[36] = selectable;
            t[37] = layout;
            t[38] = showFacePile;
            t[39] = trusted;
            t[40] = j;
        } else {
            j = t[40];
        }
        const K = view === "message" && W;
        let Q;
        if (t[41] !== K || t[42] !== H || t[43] !== j) {
            const Component = o("WAWebFlex.react").FlexRow;
            Q = <Component align="center" paddingTop={12} paddingBottom={12} columnGap={8}>{H}{j}{K}</Component>;
            t[41] = K;
            t[42] = H;
            t[43] = j;
            t[44] = Q;
        } else {
            Q = t[44];
        }
        const X = Q;
        let Y;
        if (t[45] !== V || t[46] !== option_localId || t[47] !== onOptionToggle || t[48] !== X) {
            Y = V ? <_ onOptionToggle={onOptionToggle} localId={option_localId}>{X}</_> : <div className="x1nkjj8i xnnj0qo x1fpiwec x1xp25i x1om80sa xe2bo3s xw8deok xyqdcma">{X}</div>;
            t[45] = V;
            t[46] = option_localId;
            t[47] = onOptionToggle;
            t[48] = X;
            t[49] = Y;
        } else {
            Y = t[49];
        }
        const J = Y;
        if (view === "message") {
            return J;
        }
        let Z;
        if (t[50] === Symbol.for("react.memo_cache_sentinel")) {
            Z = [
                c.paddingInline48,
                o("WDSPaddings.stylex").wdsPaddings.paddingVer20
            ];
            t[50] = Z;
        } else {
            Z = t[50];
        }
        let ee;
        if (t[51] !== albumMsgs || t[52] !== associatedMsg || t[53] !== index || t[54] !== trusted) {
            ee = <F15 associatedMsg={associatedMsg} albumMsgs={albumMsgs} albumIndex={index} trusted={trusted}/>;
            t[51] = albumMsgs;
            t[52] = associatedMsg;
            t[53] = index;
            t[54] = trusted;
            t[55] = ee;
        } else {
            ee = t[55];
        }
        let te;
        if (t[56] !== J || t[57] !== ee) {
            const Component = r("WAWebDrawerSection.react");
            te = <Component xstyle={Z}>{ee}{J}</Component>;
            t[56] = J;
            t[57] = ee;
            t[58] = te;
        } else {
            te = t[58];
        }
        return te;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(11);
        const { children, localId, onOptionToggle } = e;
        let i;
        if (t[0] !== localId || t[1] !== onOptionToggle) {
            i = function({ target }) {
                if (!(target instanceof Element && target.closest("a, input"))) {
                    onOptionToggle(localId);
                }
            };
            t[0] = localId;
            t[1] = onOptionToggle;
            t[2] = i;
        } else {
            i = t[2];
        }
        const l = i;
        let u;
        if (t[3] !== localId || t[4] !== onOptionToggle) {
            u = function(t) {
                if (t.key === "Enter" || t.key === " ") {
                    const e = t.target;
                    if (e instanceof Element && e.closest("a, input")) {
                        return;
                    }
                    t.preventDefault();
                    t.stopPropagation();
                    onOptionToggle(localId);
                }
            };
            t[3] = localId;
            t[4] = onOptionToggle;
            t[5] = u;
        } else {
            u = t[5];
        }
        const c = u;
        let d;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                className: "x1nkjj8i xnnj0qo x1fpiwec x1xp25i x1om80sa xe2bo3s xw8deok xyqdcma x1ypdohk x99gfjr xyb16r9 xrughyy xmprcrp"
            };
            t[6] = d;
        } else {
            d = t[6];
        }
        let m;
        if (t[7] !== children || t[8] !== l || t[9] !== c) {
            m = <div {...babelHelpers.extends({}, d, {
                onClick: l,
                onKeyDown: c,
                role: "button",
                tabIndex: 0,
                children
            })}/>;
            t[7] = children;
            t[8] = l;
            t[9] = c;
            t[10] = m;
        } else {
            m = t[10];
        }
        return m;
    }
    function F15(e) {
        const t = o("react-compiler-runtime").c(8);
        const { albumIndex, albumMsgs, associatedMsg, trusted } = e;
        if (associatedMsg) {
            let l;
            if (t[0] !== associatedMsg) {
                l = o("WAWebFrontendMsgGetters").getAsImage(associatedMsg.unsafe());
                t[0] = associatedMsg;
                t[1] = l;
            } else {
                l = t[1];
            }
            const u = l;
            if (u) {
                let c;
                if (t[2] !== albumIndex || t[3] !== albumMsgs || t[4] !== associatedMsg.mediaData || t[5] !== u.id || t[6] !== trusted) {
                    c = s.jsx(o("WAWebMessagePicture.react").ImageMessage, {
                        albumMsgs,
                        currentAlbumMessageIndex: albumIndex,
                        msgKey: u.id,
                        mediaData: associatedMsg.mediaData,
                        trusted,
                        displayAuthor: false,
                        hideMeta: true,
                        theme: o("WAWebTypesMedia").DisplayTheme.PhotoPoll
                    });
                    t[2] = albumIndex;
                    t[3] = albumMsgs;
                    t[4] = associatedMsg.mediaData;
                    t[5] = u.id;
                    t[6] = trusted;
                    t[7] = c;
                } else {
                    c = t[7];
                }
                return c;
            }
        }
    }
    l.default = p;
}, 98);