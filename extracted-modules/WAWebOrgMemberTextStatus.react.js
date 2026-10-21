__d("WAWebOrgMemberTextStatus.react", [
    "WAWebContactCollection",
    "WAWebEmojiText.react",
    "WAWebFrontendContactGetters",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebTextStatus"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_lid = e.lid;
        let r;
        if (t[0] !== e_lid) {
            r = o("WAWebContactCollection").ContactCollection.get(e_lid);
            t[0] = e_lid;
            t[1] = r;
        } else {
            r = t[1];
        }
        const a = r;
        let i;
        if (t[2] !== a) {
            i = a == null || !o("WAWebTextStatusGatingUtils").receiveTextStatusForNewSurfacesEnabled() ? null : <C3 contact={a}/>;
            t[2] = a;
            t[3] = i;
        } else {
            i = t[3];
        }
        return i;
    }
    function C3(e) {
        const t = o("react-compiler-runtime").c(8);
        const e_contact = e.contact;
        let a;
        if (t[0] !== e_contact) {
            a = {
                contact: e_contact
            };
            t[0] = e_contact;
            t[1] = a;
        } else {
            a = t[1];
        }
        r("useWAWebTextStatus")(a);
        let i;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            let l;
            i = [
                (l = o("WAWebFrontendContactGetters")).getTextStatusString,
                l.getTextStatusEmoji,
                l.getTextStatusLastUpdateTime,
                l.getTextStatusExpiryTs,
                l.getTextStatusEphemeralDuration
            ];
            t[2] = i;
        } else {
            i = t[2];
        }
        const u = o("useWAWebContactValues").useContactValues(e_contact.id, i);
        const c = u[0];
        const m = u[1];
        const p = u[2];
        const _ = u[3];
        const f = u[4];
        const g = o("WAWebTextStatusUtils").shouldDisplayTextStatus({
            textStatusEmoji: m,
            textStatusEphemeralDuration: f,
            textStatusExpiryTs: _,
            textStatusLastUpdateTime: p,
            textStatusString: c
        });
        let h;
        if (t[3] !== m || t[4] !== c) {
            h = [
                m,
                c
            ].filter(d);
            t[3] = m;
            t[4] = c;
            t[5] = h;
        } else {
            h = t[5];
        }
        const y = h.join(" ");
        if (!g || y === "") {
            return null;
        }
        let C;
        if (t[6] !== y) {
            C = s.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                ellipsify: true,
                testid: "org_member_text_status",
                text: y,
                titlify: true
            });
            t[6] = y;
            t[7] = C;
        } else {
            C = t[7];
        }
        return C;
    }
    function d(e) {
        return e != null && e !== "";
    }
    l.default = u;
}, 98);