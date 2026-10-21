__d("WAWebParticipantsList.react", [
    "WAShiftTimer",
    "WAWebBotProfileCollection",
    "WAWebChatSubtitleText.react",
    "WAWebFbtIntlList",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebParticipantListUtils",
    "WAWebSupportChatStrings",
    "react",
    "useLazyRef",
    "useWAWebGroupMetadataValues",
    "useWAWebGroupOrgMembershipChanges",
    "useWAWebListener",
    "useWAWebOnUnmount",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useState } = u;
    const m = [
        "sort",
        "remove",
        "reset",
        "add"
    ];
    const p = [
        "add",
        "remove",
        "reset",
        "change:product",
        "change:isDeleted",
        "change:isDeprecated",
        "change:lastFetchedTimeMs"
    ];
    function useComponent({ ariaLabel, groupMetadata, location, overridingText, placeholder, showLockIcon }) {
        let t;
        const g = o("useWAWebGroupMetadataValues").useGroupMetadataValues(groupMetadata.id, [
            (t = o("WAWebFrontendGroupMetadataGetters")).getHasCapi,
            t.getOwner,
            t.getSupport,
            t.getIsOpenBotGroup,
            t.getIsTeeBotGroup
        ]);
        const h = g[0];
        const y = g[1];
        const C = g[2];
        const b = g[3];
        const v = g[4];
        const groupMetadata_participants = groupMetadata.participants;
        const R = useState(function() {
            return f(groupMetadata, h, y, groupMetadata_participants, b, v);
        });
        const L = R[0];
        const E = R[1];
        const k = r("useWAWebStableCallback")(function() {
            groupMetadata_participants.ensureSorted();
        });
        const I = r("useWAWebStableCallback")(function() {
            E(f(groupMetadata, h, y, groupMetadata_participants, b, v));
        });
        const T = r("useLazyRef")(function() {
            return new (o("WAShiftTimer")).ShiftTimer(I);
        });
        useEffect(function() {
            k();
        }, []);
        r("useWAWebOnUnmount")(function() {
            T.current.cancel();
        });
        const D = function() {
            T.current.debounce(100);
        };
        o("useWAWebListener").useListener(groupMetadata_participants, m, D);
        o("useWAWebListener").useListener(o("WAWebBotProfileCollection").BotProfileCollection, p, D);
        r("useWAWebGroupOrgMembershipChanges")(groupMetadata, D);
        useEffect(function() {
            k();
            T.current.cancel();
            E(f(groupMetadata, h, y, groupMetadata_participants, b, v));
        }, [
            k,
            groupMetadata,
            h,
            b,
            v,
            y,
            groupMetadata_participants,
            T
        ]);
        const x = C ? o("WAWebSupportChatStrings").SupportChatSubtitle() : overridingText ?? (r("WAWebFbtIntlList")(L, r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA) || placeholder);
        if (x != null) {
            return s.jsx(r("WAWebChatSubtitleText.react"), {
                text: x,
                ariaLabel,
                location,
                showLockIcon
            });
        }
        return null;
    }
    useComponent.displayName = `${useComponent.name} [from ${i.id}]`;
    function f(groupMetadata, t, n, r, a, i) {
        return o("WAWebParticipantListUtils").calculateParticipantsList(groupMetadata);
    }
    l.default = useComponent;
}, 98);