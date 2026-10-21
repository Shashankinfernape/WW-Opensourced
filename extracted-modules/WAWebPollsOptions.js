__d("WAWebPollsOptions", [
    "JSResourceForInteraction",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebPollCreationUtils",
    "WAWebPollOptionsRenderUtils",
    "WAWebPollsOptionRow",
    "compactMap",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
    "useWAWebPollAssociatedMessagesMap"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useMemo = e.useMemo;
    function c(e) {
        const t = o("react-compiler-runtime").c(33);
        const { associatedMessages, checkedOptionLocalIds, correctOptionIndex, isPollEnded, isPollInvalid, msgKey, onDetailImageClick, onOptionToggle, onPhotoThumbClick, options, readonly, selectableOptionsCount, trusted, view } = e;
        let b;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            b = [
                o("WAWebMsgGetters").getPollType,
                o("WAWebMsgGetters").getIsNewsletterMsg
            ];
            t[0] = b;
        } else {
            b = t[0];
        }
        const v = o("useWAWebMsgValues").useMsgValues(msgKey, b);
        const S = v[0];
        const R = v[1];
        let L;
        if (t[1] !== options) {
            L = Array.from(options.entries());
            t[1] = options;
            t[2] = L;
        } else {
            L = t[2];
        }
        const E = L;
        let k;
        if (t[3] !== options) {
            k = Array.from(options.keys());
            t[3] = options;
            t[4] = k;
        } else {
            k = t[4];
        }
        const T = o("useWAWebPollAssociatedMessagesMap").usePollAssociatedMessagesMap(k, associatedMessages);
        const loadingPhotoThumb = associatedMessages.length > 0 && associatedMessages.length > T.size;
        let x;
        if (t[5] !== associatedMessages) {
            x = r("compactMap")(associatedMessages, d);
            t[5] = associatedMessages;
            t[6] = x;
        } else {
            x = t[6];
        }
        const $ = x;
        let P;
        if (t[7] !== R || t[8] !== msgKey) {
            const w = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(msgKey, R);
            P = w?.newsletterMetadata?.iAmAdminOrOwner() ?? false;
            t[7] = R;
            t[8] = msgKey;
            t[9] = P;
        } else {
            P = t[9];
        }
        const isAdminOrOwner = P;
        const hideResults = S === o("WAWebPollCreationUtils").PollType.QUIZ && !isAdminOrOwner && checkedOptionLocalIds.size === 0;
        let O;
        if (t[10] !== S) {
            O = S === o("WAWebPollCreationUtils").PollType.QUIZ ? r("JSResourceForInteraction")("WAWebConfettiAnimationData").__setRef("WAWebPollsOptions").load() : null;
            t[10] = S;
            t[11] = O;
        } else {
            O = t[11];
        }
        const animationPromise = O;
        let W;
        if (t[12] !== animationPromise || t[13] !== checkedOptionLocalIds || t[14] !== correctOptionIndex || t[15] !== E || t[16] !== hideResults || t[17] !== isAdminOrOwner || t[18] !== isPollEnded || t[19] !== isPollInvalid || t[20] !== loadingPhotoThumb || t[21] !== $ || t[22] !== msgKey || t[23] !== onDetailImageClick || t[24] !== onOptionToggle || t[25] !== onPhotoThumbClick || t[26] !== T || t[27] !== S || t[28] !== readonly || t[29] !== selectableOptionsCount || t[30] !== trusted || t[31] !== view) {
            W = <>{E.map(([n, d], t)=>{
                const f = checkedOptionLocalIds.has(n.localId);
                const b = !isPollInvalid && !readonly && (f || selectableOptionsCount === 1 || checkedOptionLocalIds.size < selectableOptionsCount) && (S !== o("WAWebPollCreationUtils").PollType.QUIZ || checkedOptionLocalIds.size === 0);
                const isCorrectOption = o("WAWebPollOptionsRenderUtils").getIsCorrectOption(correctOptionIndex, n);
                const Component = r("WAWebPollsOptionRow");
                return <div key={t}><Component albumMsgs={$} msgKey={msgKey} associatedMsg={T.get(n)} option={n} result={d} index={t} onOptionToggle={onOptionToggle} onDetailImageClick={onDetailImageClick} checked={f} selectable={b} trusted={trusted} readonly={readonly} isPollEnded={isPollEnded} onPhotoThumbClick={onPhotoThumbClick} view={view} loadingPhotoThumb={loadingPhotoThumb} hideResults={hideResults} isCorrectOption={isCorrectOption} animationPromise={animationPromise} isAdminOrOwner={isAdminOrOwner}/></div>;
            })}</>;
            t[12] = animationPromise;
            t[13] = checkedOptionLocalIds;
            t[14] = correctOptionIndex;
            t[15] = E;
            t[16] = hideResults;
            t[17] = isAdminOrOwner;
            t[18] = isPollEnded;
            t[19] = isPollInvalid;
            t[20] = loadingPhotoThumb;
            t[21] = $;
            t[22] = msgKey;
            t[23] = onDetailImageClick;
            t[24] = onOptionToggle;
            t[25] = onPhotoThumbClick;
            t[26] = T;
            t[27] = S;
            t[28] = readonly;
            t[29] = selectableOptionsCount;
            t[30] = trusted;
            t[31] = view;
            t[32] = W;
        } else {
            W = t[32];
        }
        return W;
    }
    function d(e) {
        return o("WAWebFrontendMsgGetters").getAsAlbumAsset(e.unsafe());
    }
    l.default = c;
}, 98);