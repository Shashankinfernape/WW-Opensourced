__d("WAWebChatlistPanelWrapper.react", [
    "WAWebABProps",
    "WAWebAppRootInteractionContext.react",
    "WAWebChatlistHeaderV2.react",
    "WAWebChatlistPanelFunctional.react",
    "WAWebChatlistPanelMode",
    "WAWebInteractionTracePolicy",
    "WAWebMultiSelectEntryPointConstants",
    "WAWebSettingsGetters",
    "WAWebSettingsModel",
    "cr:11128",
    "cr:11132",
    "cr:11133",
    "cr:11135",
    "cr:9918",
    "hero-tracing",
    "react",
    "react-compiler-runtime",
    "useWAWebChatLockSettings",
    "useWAWebSettingsValues"
], function(t, n, r, o, a, i, l) {
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useState } = c;
    const p = n("cr:11135") ?? {};
    const p_chatlistRowsReadySignal = p.chatlistRowsReadySignal;
    function f(e) {
        const t = o("react-compiler-runtime").c(23);
        const { chatlistHeaderRef, chatlistPanelRef, handleActiveNavBarItemUpdate, leftDrawerStyle, leftPaneClassName, resizeHandle } = e;
        let p;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            p = [
                o("WAWebSettingsGetters").getShowArchiveV2
            ];
            t[0] = p;
        } else {
            p = t[0];
        }
        const f = o("useWAWebSettingsValues").useSettingsValues(p);
        const g = f[0];
        const h = useState(false);
        const y = h[0];
        const C = h[1];
        const b = o("useWAWebChatLockSettings").useChatLockSettings();
        let v;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            v = function() {
                return C(true);
            };
            t[1] = v;
        } else {
            v = t[1];
        }
        const onSelectChatClick = v;
        let R;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            R = function() {
                return C(false);
            };
            t[2] = R;
        } else {
            R = t[2];
        }
        const endMultiSelect = R;
        let E;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            E = o("WAWebABProps").getABPropConfigValue("username_global_search_enabled");
            t[3] = E;
        } else {
            E = t[3];
        }
        const unknownContactUsernameSearchEnabled = E;
        let I;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            I = o("WAWebABProps").getABPropConfigValue("web_phone_number_global_search");
            t[4] = I;
        } else {
            I = t[4];
        }
        const unknownContactPhoneSearchEnabled = I;
        let D;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            D = {
                manualHold: false,
                shouldUseNavigationAsInteraction: true,
                tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_CHATS_OPEN_CHAT
            };
            t[5] = D;
        } else {
            D = t[5];
        }
        const x = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(D);
        const x_startInteraction = x.startInteraction;
        let P;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            P = (n("cr:11133") == null ? undefined : n("cr:11133")()) === true && n("cr:9918") != null ? u.jsx(n("cr:9918"), {}) : null;
            t[6] = P;
        } else {
            P = t[6];
        }
        const N = P;
        const M = y ? "inMultiSelectMode" : "inNonSelectableMode";
        const multiSelectEntryPoint = y ? o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint.ChatListHeaderDropdown : null;
        let A;
        if (t[7] !== b.hideLockedChats || t[8] !== chatlistPanelRef || t[9] !== y || t[10] !== g || t[11] !== x_startInteraction || t[12] !== M || t[13] !== multiSelectEntryPoint) {
            const F = u.jsx(o("WAWebChatlistPanelFunctional.react").ChatlistPanelFunctional, {
                chatlistPanelRef,
                showArchiveV2: g,
                suppressOfflineResumeToastbar: N != null,
                mode: r("WAWebChatlistPanelMode").Chatlist,
                selectable: y,
                endMultiSelect,
                multiSelectEntryPoint,
                hideLockedChats: b.hideLockedChats,
                startChatInteraction: x_startInteraction,
                unknownContactUsernameSearchEnabled,
                unknownContactPhoneSearchEnabled
            }, M);
            const Component = n("cr:11132");
            A = (n("cr:11133") == null ? undefined : n("cr:11133")()) === true && n("cr:11128") != null && n("cr:11132") != null && p_chatlistRowsReadySignal != null ? <Component name="wa-web-chatlist-region" signal={p_chatlistRowsReadySignal} fallback={u.jsx(n("cr:11128"), {})}>{F}</Component> : F;
            t[7] = b.hideLockedChats;
            t[8] = chatlistPanelRef;
            t[9] = y;
            t[10] = g;
            t[11] = x_startInteraction;
            t[12] = M;
            t[13] = multiSelectEntryPoint;
            t[14] = A;
        } else {
            A = t[14];
        }
        const O = A;
        let B;
        if (t[15] !== chatlistHeaderRef || t[16] !== O || t[17] !== handleActiveNavBarItemUpdate || t[18] !== y || t[19] !== leftDrawerStyle || t[20] !== leftPaneClassName || t[21] !== resizeHandle) {
            const Component = o("hero-tracing").HeroPagelet;
            B = <Component name="Chat List Panel">{function(t, N1) {
                const Component = o("WAWebChatlistHeaderV2.react").WAWebChatlistHeaderV2;
                return <><div className={leftPaneClassName} style={leftDrawerStyle} ref={t}>{r("WAWebSettingsModel") && <Component headerRef={chatlistHeaderRef} onSelectChatClick={onSelectChatClick} isMultiSelectMode={y} updateActiveNavBarItem={handleActiveNavBarItemUpdate}/>}{N}{O}{resizeHandle}</div><N1/></>;
            }}</Component>;
            t[15] = chatlistHeaderRef;
            t[16] = O;
            t[17] = handleActiveNavBarItemUpdate;
            t[18] = y;
            t[19] = leftDrawerStyle;
            t[20] = leftPaneClassName;
            t[21] = resizeHandle;
            t[22] = B;
        } else {
            B = t[22];
        }
        return B;
    }
    l.default = f;
}, 98);