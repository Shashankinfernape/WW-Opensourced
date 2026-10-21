__d("WAWebChatListMenuItem.react", [
    "WAWebChatCellV2.react",
    "WAWebCommunityGatingUtils",
    "WAWebMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "chat",
        "chatCellRef",
        "onSelect",
        "optionId",
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    function c(e) {
        return o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(e.groupMetadata) && e.groupMetadata?.getParentGroupChat() != null;
    }
    function d(e, t) {
        const { showCommunityInfo = false } = t || {};
        return {
            itemKey: e.id.toString(),
            height: showCommunityInfo && c(e) ? 88 : 72,
            chat: e
        };
    }
    function m(t) {
        const n = o("react-compiler-runtime").c(21);
        let a;
        let i;
        let l;
        let s;
        let optionId;
        let d;
        if (n[0] !== t) {
            a = t.chat;
            l = t.chatCellRef;
            s = t.onSelect;
            optionId = t.optionId;
            d = t.ref;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
            n[4] = s;
            n[5] = optionId;
            n[6] = d;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
            s = n[4];
            optionId = n[5];
            d = n[6];
        }
        const m = o("WAWebMenuItem.react").useMenuItem(optionId);
        const { border, colorScheme, isActive, material, size } = m;
        let y;
        if (n[7] !== border || n[8] !== a || n[9] !== i || n[10] !== l || n[11] !== colorScheme || n[12] !== isActive || n[13] !== material || n[14] !== size) {
            y = u.jsx(r("WAWebChatCellV2.react"), babelHelpers.extends({
                ref: l,
                chat: a,
                colorScheme,
                size,
                material,
                border,
                active: isActive
            }, i));
            n[7] = border;
            n[8] = a;
            n[9] = i;
            n[10] = l;
            n[11] = colorScheme;
            n[12] = isActive;
            n[13] = material;
            n[14] = size;
            n[15] = y;
        } else {
            y = n[15];
        }
        let C;
        if (n[16] !== s || n[17] !== optionId || n[18] !== d || n[19] !== y) {
            const Component = o("WAWebMenuItem.react").WAWebMenuItem;
            C = <Component ref={d} onSelect={s} optionId={optionId} type="action">{y}</Component>;
            n[16] = s;
            n[17] = optionId;
            n[18] = d;
            n[19] = y;
            n[20] = C;
        } else {
            C = n[20];
        }
        return C;
    }
    l.getFlatListConfigFromChat = d;
    l.ChatMenuItem = m;
}, 98);