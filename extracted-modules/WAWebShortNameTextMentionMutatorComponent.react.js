__d("WAWebShortNameTextMentionMutatorComponent.react", [
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebMentionMutatorComponentBase.react",
    "WAWebMiscGatingUtils",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebGroupMetadataValues",
    "useWAWebLogUnknownUserDisplayed",
    "useWAWebOrgMemberDisplayName"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(14);
        const { contact, lastMessage, onClick, selectable, theme, unknownUserLogContext } = e;
        let d;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            d = [
                o("WAWebContactGetters").getId,
                o("WAWebFrontendContactGetters").getDisplayName,
                o("WAWebFrontendContactGetters").getDisplayNameType,
                o("WAWebContactGetters").getShortName,
                o("WAWebFrontendContactGetters").getIsMyContact
            ];
            t[0] = d;
        } else {
            d = t[0];
        }
        const m = o("useWAWebContactValues").useContactValues(e.contact.id, d);
        const p = m[0];
        const _ = m[1];
        const f = m[2];
        const g = m[3];
        let h;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            h = [
                o("WAWebFrontendGroupMetadataGetters").getUniqueShortNameMap
            ];
            t[1] = h;
        } else {
            h = t[1];
        }
        o("useWAWebGroupMetadataValues").useGroupMetadataValues(e.groupMetadata.id, h);
        const y = r("useWAWebOrgMemberDisplayName")(contact, p);
        let C;
        if (t[2] !== contact || t[3] !== e.groupMetadata) {
            C = o("WAWebMiscGatingUtils").isDropLastNameEnabled() && e.groupMetadata != null && e.groupMetadata.hasUniqueShortNameMention(contact);
            t[2] = contact;
            t[3] = e.groupMetadata;
            t[4] = C;
        } else {
            C = t[4];
        }
        const b = C;
        const v = b ? g : y ?? _;
        o("useWAWebLogUnknownUserDisplayed").useLogUnknownUserDisplayed(unknownUserLogContext, contact, y == null && !b && f === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER);
        let S;
        if (t[5] !== p) {
            S = p.toString();
            t[5] = p;
            t[6] = S;
        } else {
            S = t[6];
        }
        let R;
        if (t[7] !== v || t[8] !== lastMessage || t[9] !== onClick || t[10] !== selectable || t[11] !== S || t[12] !== theme) {
            const Component = r("WAWebMentionMutatorComponentBase.react");
            R = <Component text={v} jid={S} theme={theme} selectable={selectable} onClick={onClick} lastMessage={lastMessage}/>;
            t[7] = v;
            t[8] = lastMessage;
            t[9] = onClick;
            t[10] = selectable;
            t[11] = S;
            t[12] = theme;
            t[13] = R;
        } else {
            R = t[13];
        }
        return R;
    }
    l.default = u;
}, 98);