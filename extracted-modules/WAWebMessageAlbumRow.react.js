__d("WAWebMessageAlbumRow.react", [
    "WAWebGetDisplayType",
    "WAWebMessageAlbumWrapper.react",
    "WAWebMessagePosition",
    "WAWebPrivacyBlurWrapper.react",
    "WAWebPrivacyModeBlurConfig",
    "react",
    "react-compiler-runtime",
    "useWAWebEqualModelMemo"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useRef } = u;
    const M16 = s.memo(r("WAWebMessageAlbumWrapper.react"));
    function p(e) {
        const t = o("react-compiler-runtime").c(20);
        const { albumId, focusedMsgIndex, groupedWithNext, groupedWithPrev, handleAlbumRendered, isFocusedAlbum, isMsgVisible, msgs, onMessageSelect, selectable, selectedMessages, showProfilePicture } = e;
        const C = r("useWAWebEqualModelMemo")(msgs);
        let b;
        if (t[0] !== albumId || t[1] !== handleAlbumRendered || t[2] !== C) {
            b = function(t) {
                handleAlbumRendered({
                    albumId,
                    msgs: C,
                    ref: t
                });
            };
            t[0] = albumId;
            t[1] = handleAlbumRendered;
            t[2] = C;
            t[3] = b;
        } else {
            b = t[3];
        }
        const v = b;
        let S;
        if (groupedWithNext && !groupedWithPrev) {
            S = o("WAWebMessagePosition").MsgPosition.FRONT;
        } else if (groupedWithNext && groupedWithPrev) {
            S = o("WAWebMessagePosition").MsgPosition.MID;
        } else if (!groupedWithNext && groupedWithPrev) {
            S = o("WAWebMessagePosition").MsgPosition.END;
        } else {
            S = o("WAWebMessagePosition").MsgPosition.SINGLE;
        }
        const R = C[0];
        const LRef = useRef(null);
        const E = `album-${albumId}`;
        const position = S;
        let I;
        if (t[4] !== R) {
            I = o("WAWebGetDisplayType").getDisplayType(R?.unsafe());
            t[4] = R;
            t[5] = I;
        } else {
            I = t[5];
        }
        let T;
        if (t[6] !== albumId || t[7] !== focusedMsgIndex || t[8] !== isFocusedAlbum || t[9] !== isMsgVisible || t[10] !== onMessageSelect || t[11] !== S || t[12] !== v || t[13] !== selectable || t[14] !== selectedMessages || t[15] !== showProfilePicture || t[16] !== C || t[17] !== E || t[18] !== I) {
            const Component = r("WAWebPrivacyBlurWrapper.react");
            T = <Component containerRef={LRef} category={o("WAWebPrivacyModeBlurConfig").BlurCategory.Media}><div ref={LRef}><M16 key={E} msgs={C} ref={v} position={position} isMsgVisible={isMsgVisible} selectable={selectable} selectedMessages={selectedMessages} onMessageSelect={onMessageSelect} albumId={albumId} isFocusedAlbum={isFocusedAlbum} focusedMsgIndex={focusedMsgIndex} displayType={I} isFocusable showProfilePicture={showProfilePicture}/></div></Component>;
            t[6] = albumId;
            t[7] = focusedMsgIndex;
            t[8] = isFocusedAlbum;
            t[9] = isMsgVisible;
            t[10] = onMessageSelect;
            t[11] = S;
            t[12] = v;
            t[13] = selectable;
            t[14] = selectedMessages;
            t[15] = showProfilePicture;
            t[16] = C;
            t[17] = E;
            t[18] = I;
            t[19] = T;
        } else {
            T = t[19];
        }
        return T;
    }
    l.default = p;
}, 98);