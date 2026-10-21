__d("WAWebPollsExpandedPhotoDrawer", [
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebMsgGetters",
    "WAWebPollCreationUtils",
    "WAWebPollMessageHeader",
    "WAWebPollOptionsRenderUtils",
    "WAWebPollsOptions",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
    "useWAWebNewsletterPollsResults"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useMemo = e.useMemo;
    const c = {
        body: {
            backgroundColor: "x1od0jb8",
            $$css: true
        },
        paddingHoriz32: {
            paddingInlineStart: "x1m4z3lf",
            paddingInlineEnd: "x1evaxtz",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        paddingVert2: {
            paddingTop: "x1gxa6cn",
            paddingBottom: "xa0aww2",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(40);
        const { associatedMessages, chatName, correctOptionIndex, isPollEnded, isPollInvalid, isSentByMe, msgKey, onDetailImageClick, pollEndTime, pollHideVoterNames, pollName, readonly, ref, selectableOptionsCount, trusted } = e;
        const v = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(msgKey);
        let S;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            S = [
                o("WAWebMsgGetters").getPollType
            ];
            t[0] = S;
        } else {
            S = t[0];
        }
        const R = o("useWAWebMsgValues").useMsgValues(msgKey, S);
        const L = R[0];
        let E;
        if (t[1] !== v) {
            E = o("WAWebPollOptionsRenderUtils").getVotedForOptions(v);
            t[1] = v;
            t[2] = E;
        } else {
            E = t[2];
        }
        const k = E;
        let I;
        if (t[3] !== msgKey || t[4] !== selectableOptionsCount || t[5] !== k) {
            I = function(t) {
                o("WAWebPollOptionsRenderUtils").toggleOption({
                    optionLocalId: t,
                    votedForOptions: k,
                    selectableOptionsCount,
                    msgKey
                });
            };
            t[3] = msgKey;
            t[4] = selectableOptionsCount;
            t[5] = k;
            t[6] = I;
        } else {
            I = t[6];
        }
        const T = I;
        let D;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            D = {
                surface: "unknown",
                viewName: "polls-expanded-photo"
            };
            t[7] = D;
        } else {
            D = t[7];
        }
        let x;
        if (t[8] !== chatName) {
            const Component = o("WAWebDrawerHeader.react").DrawerHeader;
            x = <Component title={chatName} type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL} onCancel={o("WAWebDrawerManager").closeDrawerRight} focusBackOrCancel/>;
            t[8] = chatName;
            t[9] = x;
        } else {
            x = t[9];
        }
        let $;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            $ = [
                c.paddingHoriz32,
                c.paddingVert2
            ];
            t[10] = $;
        } else {
            $ = t[10];
        }
        const P = L === o("WAWebPollCreationUtils").PollType.QUIZ && isSentByMe ? null : selectableOptionsCount;
        let N;
        if (t[11] !== isPollEnded || t[12] !== isSentByMe || t[13] !== msgKey || t[14] !== pollEndTime || t[15] !== pollHideVoterNames || t[16] !== pollName || t[17] !== P || t[18] !== trusted) {
            const Component = r("WAWebDrawerSection.react");
            N = <Component xstyle={$}>{s.jsx(r("WAWebPollMessageHeader"), {
                isPollEnded,
                msgKey,
                name: pollName,
                isSentByMe,
                pollEndTime,
                pollHideVoterNames,
                pollSelectableOptionsCount: P,
                trusted
            })}</Component>;
            t[11] = isPollEnded;
            t[12] = isSentByMe;
            t[13] = msgKey;
            t[14] = pollEndTime;
            t[15] = pollHideVoterNames;
            t[16] = pollName;
            t[17] = P;
            t[18] = trusted;
            t[19] = N;
        } else {
            N = t[19];
        }
        let M;
        if (t[20] !== associatedMessages || t[21] !== correctOptionIndex || t[22] !== T || t[23] !== isPollEnded || t[24] !== isPollInvalid || t[25] !== msgKey || t[26] !== onDetailImageClick || t[27] !== v || t[28] !== readonly || t[29] !== selectableOptionsCount || t[30] !== trusted || t[31] !== k) {
            const Component = r("WAWebPollsOptions");
            M = <Component msgKey={msgKey} options={v} checkedOptionLocalIds={k} trusted={trusted} isPollEnded={isPollEnded} isPollInvalid={isPollInvalid} onOptionToggle={T} onDetailImageClick={onDetailImageClick} selectableOptionsCount={selectableOptionsCount} readonly={readonly} associatedMessages={associatedMessages} view="expanded" correctOptionIndex={correctOptionIndex}/>;
            t[20] = associatedMessages;
            t[21] = correctOptionIndex;
            t[22] = T;
            t[23] = isPollEnded;
            t[24] = isPollInvalid;
            t[25] = msgKey;
            t[26] = onDetailImageClick;
            t[27] = v;
            t[28] = readonly;
            t[29] = selectableOptionsCount;
            t[30] = trusted;
            t[31] = k;
            t[32] = M;
        } else {
            M = t[32];
        }
        let w;
        if (t[33] !== N || t[34] !== M) {
            const Component = r("WAWebDrawerBody.react");
            w = <Component xstyle={c.body}>{N}{M}</Component>;
            t[33] = N;
            t[34] = M;
            t[35] = w;
        } else {
            w = t[35];
        }
        let A;
        if (t[36] !== ref || t[37] !== w || t[38] !== x) {
            const Component = r("WAWebDrawer.react");
            A = <Component key="photo-poll-expanded-view-drawer" ref={ref} testid="photo-poll-expanded-view-drawer" tsNavigationData={D}>{x}{w}</Component>;
            t[36] = ref;
            t[37] = w;
            t[38] = x;
            t[39] = A;
        } else {
            A = t[39];
        }
        return A;
    }
    l.default = d;
}, 98);