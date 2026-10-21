__d("useWAWebGroupParticipantStatus", [
    "WAWebFrontendGroupMetadataGetters",
    "WAWebStateUtils",
    "react-compiler-runtime",
    "useWAWebGroupMetadataValues",
    "useWAWebSourceSnapshot"
], function(t, n, r, o, a, i, l) {
    const e = "bulk_add bulk_remove reset change:isAdmin";
    const s = new EventTarget;
    function u(t) {
        const i = o("react-compiler-runtime").c(14);
        let l;
        if (i[0] !== t) {
            l = t == null ? null : o("WAWebStateUtils").unproxy(t);
            i[0] = t;
            i[1] = l;
        } else {
            l = i[1];
        }
        const u = l;
        const m = o("useWAWebGroupMetadataValues").useOptionalGroupMetadataValues(u?.id, [
            o("WAWebFrontendGroupMetadataGetters").getMembershipApprovalMode,
            o("WAWebFrontendGroupMetadataGetters").getMemberAddMode
        ]) ?? [];
        const p = m[0];
        const _ = m[1];
        let f;
        if (i[2] !== _ || i[3] !== p || i[4] !== u) {
            f = function() {
                return c(u, p, _);
            };
            i[2] = _;
            i[3] = p;
            i[4] = u;
            i[5] = f;
        } else {
            f = i[5];
        }
        const g = r("useWAWebSourceSnapshot")(u?.participants ?? s, e, f, d);
        let h;
        if (i[6] !== _ || i[7] !== p || i[8] !== u || i[9] !== g) {
            h = g.groupMetadata === u && g.membershipApprovalMode === p && g.memberAddMode === _ ? g : c(u, p, _);
            i[6] = _;
            i[7] = p;
            i[8] = u;
            i[9] = g;
            i[10] = h;
        } else {
            h = i[10];
        }
        const y = h;
        let C;
        if (i[11] !== y.canAdd || i[12] !== y.isNonAdminAndACAGJREnabled) {
            C = [
                y.canAdd,
                y.isNonAdminAndACAGJREnabled
            ];
            i[11] = y.canAdd;
            i[12] = y.isNonAdminAndACAGJREnabled;
            i[13] = C;
        } else {
            C = i[13];
        }
        return C;
    }
    function c(e, membershipApprovalMode, memberAddMode) {
        let r;
        return {
            groupMetadata: e,
            membershipApprovalMode,
            memberAddMode,
            canAdd: !!(!(e == null || (r = e.participants) == null) && r.canAdd()),
            isNonAdminAndACAGJREnabled: !!(e != null && e.isNonAdminAndACAGJREnabled())
        };
    }
    function d(e, t) {
        return e.groupMetadata === t.groupMetadata && e.membershipApprovalMode === t.membershipApprovalMode && e.memberAddMode === t.memberAddMode && e.canAdd === t.canAdd && e.isNonAdminAndACAGJREnabled === t.isNonAdminAndACAGJREnabled;
    }
    l.default = u;
}, 98);