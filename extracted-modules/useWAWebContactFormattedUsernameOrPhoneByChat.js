__d("useWAWebContactFormattedUsernameOrPhoneByChat", [
    "WAWebChatCommunityUtils",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebEventTargetValue",
    "useWAWebIAmCommunityAdmin"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("react-compiler-runtime").c(16);
        const a = t.id;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebFrontendContactGetters").getFormattedUsernameOrPhoneAndType,
                o("WAWebFrontendContactGetters").getDisplayNameForLidAndType
            ];
            n[0] = i;
        } else {
            i = n[0];
        }
        const l = o("useWAWebContactValues").useContactValues(t.id, i);
        const s = l[0];
        const u = l[1];
        let c;
        if (n[1] !== e?.groupMetadata) {
            c = e?.groupMetadata?.getParentGroupChat()?.groupMetadata;
            n[1] = e?.groupMetadata;
            n[2] = c;
        } else {
            c = n[2];
        }
        const m = c;
        const iAmCommunityAdmin = r("useWAWebIAmCommunityAdmin")(m);
        let _;
        if (n[3] !== a) {
            _ = o("WAWebLidMigrationUtils").toPn(a) ?? a;
            n[3] = a;
            n[4] = _;
        } else {
            _ = n[4];
        }
        const g = _;
        let h;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            h = [
                "bulk_add",
                "bulk_remove"
            ];
            n[5] = h;
        } else {
            h = n[5];
        }
        let y;
        if (n[6] !== g || n[7] !== m?.participants) {
            y = function() {
                let e;
                return g.isUser() && !!(!(m == null || (e = m.participants) == null) && e.userIsAdmin(g));
            };
            n[6] = g;
            n[7] = m?.participants;
            n[8] = y;
        } else {
            y = n[8];
        }
        const isSenderAdmin = r("useWAWebEventTargetValue")(m?.participants, h, y);
        let b;
        if (n[9] !== e || n[10] !== t || n[11] !== u || n[12] !== s || n[13] !== iAmCommunityAdmin || n[14] !== isSenderAdmin) {
            b = o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(e, t, {
                iAmCommunityAdmin,
                isSenderAdmin
            }) ? {
                formattedUsernameOrPhone: u.displayName,
                isPhoneNumberForceMasked: true,
                type: u.type
            } : {
                formattedUsernameOrPhone: s.displayName,
                isPhoneNumberForceMasked: null,
                type: s.type
            };
            n[9] = e;
            n[10] = t;
            n[11] = u;
            n[12] = s;
            n[13] = iAmCommunityAdmin;
            n[14] = isSenderAdmin;
            n[15] = b;
        } else {
            b = n[15];
        }
        return b;
    }
    l.default = e;
}, 98);