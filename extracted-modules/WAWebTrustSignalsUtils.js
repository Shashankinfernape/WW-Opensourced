__d("WAWebTrustSignalsUtils", [
    "fbt",
    "WAWebChatContactUtils",
    "WAWebClock",
    "WAWebContactGetters",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendContactGetters",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebGroupMetadataValues"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(8);
        const { chat, contactId } = e;
        const a = _(contactId, chat);
        let i;
        if (t[0] !== contactId || t[1] !== a) {
            i = a == null || o("WAWebUserPrefsMeUser").isMeAccount(contactId) ? s._("Added by someone") : s._("Added by {user_name}", [
                s._param("user_name", a)
            ]);
            t[0] = contactId;
            t[1] = a;
            t[2] = i;
        } else {
            i = t[2];
        }
        let l;
        if (t[3] !== chat.trusted) {
            l = !chat.trusted && <> · {s._("Not a contact")}</>;
            t[3] = chat.trusted;
            t[4] = l;
        } else {
            l = t[4];
        }
        let c;
        if (t[5] !== i || t[6] !== l) {
            c = <>{i}{l}</>;
            t[5] = i;
            t[6] = l;
            t[7] = c;
        } else {
            c = t[7];
        }
        return c;
    }
    function d(e, t) {
        const n = o("react-compiler-runtime").c(7);
        let a;
        if (n[0] !== e.groupMetadata) {
            a = r("nullthrows")(e.groupMetadata, "Chat groupMetadata is null in useCreatedAt");
            n[0] = e.groupMetadata;
            n[1] = a;
        } else {
            a = n[1];
        }
        const i = a;
        let l;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebFrontendGroupMetadataGetters").getOwner,
                o("WAWebFrontendGroupMetadataGetters").getCreation,
                o("WAWebFrontendGroupMetadataGetters").getGroupAdder
            ];
            n[2] = l;
        } else {
            l = n[2];
        }
        const s = o("useWAWebGroupMetadataValues").useGroupMetadataValues(i.id, l);
        const u = s[0];
        const c = s[1];
        const d = s[2];
        const m = t ?? d;
        const p = _(u, e);
        let f;
        if (n[3] !== p || n[4] !== c || n[5] !== m) {
            f = o("WAWebClock").Clock.groupCreatedStr(c, p, o("WAWebUserPrefsMeUser").isMeAccount(m));
            n[3] = p;
            n[4] = c;
            n[5] = m;
            n[6] = f;
        } else {
            f = n[6];
        }
        return f;
    }
    function m(e) {
        const t = e?.countWhere(function(e) {
            return o("WAWebFrontendContactGetters").getIsMyContact(e.contact) && !o("WAWebContactGetters").getIsMe(e.contact);
        });
        const n = s._("No contacts");
        const r = s._("_j{\"*\":\"{contacts} contacts\",\"_1\":\"1 contact\"}", [
            s._plural(t, "contacts")
        ]);
        if (t === 0) {
            return n;
        }
        return r;
    }
    function p(e) {
        const t = e?.participants;
        const n = o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e);
        const r = t?.length;
        const a = e?.size;
        const i = t != null && t.iAmAdmin() ? r : a;
        return s._("_j{\"*\":\"{number} members\",\"_1\":\"1 member\"}", [
            s._plural(n === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? i : r, "number")
        ]);
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _(e, t) {
        const n = o("react-compiler-runtime").c(3);
        let r;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebContactGetters").getNotifyName,
                o("WAWebFrontendContactGetters").getFormattedNameAndType
            ];
            n[0] = r;
        } else {
            r = n[0];
        }
        const a = o("useWAWebContactValues").useOptionalContactValues(e, r);
        if (!a) {
            return null;
        }
        const i = a[0];
        const l = a[1];
        let s;
        if (l.type === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER && i != null && o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(t)) {
            let u;
            if (n[1] !== i) {
                u = o("WAWebChatContactUtils").getFormattedNotifyName(i);
                n[1] = i;
                n[2] = u;
            } else {
                u = n[2];
            }
            s = u;
        } else {
            s = l.displayName;
        }
        return s;
    }
    l.AddGroupCardTitle = c;
    l.useCreatedAt = d;
    l.numberOfContacts = m;
    l.numberOfMembers = p;
}, 226);