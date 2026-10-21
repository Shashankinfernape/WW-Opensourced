__d("WAWebSendReactionsTray.react", [
    "WAWebSendReactionsTrayV2.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = "__more_reactions__";
    function c(e) {
        const t = o("react-compiler-runtime").c(12);
        const { allowTabEscape, disableAutoFocus, isMoreSelected, isParentMsgSentByMe, onShiftTabToMenu, onTabToMenu, reactions, rotateFocusArrowsRef, selectedCallback, selectedIndex, showMoreOption } = e;
        const allowTabEscape_1 = allowTabEscape === undefined ? false : allowTabEscape;
        const disableAutoFocus_1 = disableAutoFocus === undefined ? false : disableAutoFocus;
        const isMoreSelected_1 = isMoreSelected === undefined ? false : isMoreSelected;
        const showMoreOption_1 = showMoreOption === undefined ? false : showMoreOption;
        let b;
        if (t[0] !== allowTabEscape_1 || t[1] !== disableAutoFocus_1 || t[2] !== isMoreSelected_1 || t[3] !== isParentMsgSentByMe || t[4] !== onShiftTabToMenu || t[5] !== onTabToMenu || t[6] !== reactions || t[7] !== rotateFocusArrowsRef || t[8] !== selectedCallback || t[9] !== selectedIndex || t[10] !== showMoreOption_1) {
            const Component = r("WAWebSendReactionsTrayV2.react");
            b = <Component allowTabEscape={allowTabEscape_1} disableAutoFocus={disableAutoFocus_1} isMoreSelected={isMoreSelected_1} isParentMsgSentByMe={isParentMsgSentByMe} onShiftTabToMenu={onShiftTabToMenu} onTabToMenu={onTabToMenu} reactions={reactions} rotateFocusArrowsRef={rotateFocusArrowsRef} selectedCallback={selectedCallback} selectedIndex={selectedIndex} showMoreOption={showMoreOption_1}/>;
            t[0] = allowTabEscape_1;
            t[1] = disableAutoFocus_1;
            t[2] = isMoreSelected_1;
            t[3] = isParentMsgSentByMe;
            t[4] = onShiftTabToMenu;
            t[5] = onTabToMenu;
            t[6] = reactions;
            t[7] = rotateFocusArrowsRef;
            t[8] = selectedCallback;
            t[9] = selectedIndex;
            t[10] = showMoreOption_1;
            t[11] = b;
        } else {
            b = t[11];
        }
        return b;
    }
    l.MORE_REACTIONS = u;
    l.SendReactionsTray = c;
}, 98);