__d("WAWebGroupStringsAction", [
    "fbt",
    "WAWebContactCollection",
    "WAWebFbtIntlList",
    "WAWebFrontendContactGetters",
    "WAWebWid"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t) {
        return u(e, y, C, b, t);
    }
    function u(e, t, n, a, i) {
        let l;
        if (e.status === 207) {
            const s = {};
            e.participants.forEach((e)=>{
                const e_userWid = e.userWid;
                if (r("WAWebWid").isWid(e_userWid)) {
                    const n = e.code;
                    let a = n;
                    if (n !== "403" && n !== "207") {
                        if (n === "421") {
                            const u = e.subCode?.membershipApprovalRequestError ?? "";
                            a = `${n}:${u}`;
                        }
                        if (!s[a]) {
                            s[a] = [];
                        }
                        const c = o("WAWebContactCollection").ContactCollection.get(e_userWid);
                        if (c) {
                            s[a].push(c);
                        }
                    }
                }
            });
            const u = [];
            for(const p in s){
                const _ = p.split(":");
                const f = _[0];
                const g = _[1] != null && _[1] !== "" ? parseInt(_[1], 10) : undefined;
                const h = c(t, n, m, parseInt(f, 10), g, s[p]);
                if (h) {
                    u.push(h);
                }
            }
            if (u.length > 0) {
                l = u.join("\n");
            } else {
                l = a();
            }
        } else {
            l = c(t, n, d, e.status, undefined, i);
        }
        return l;
    }
    function c(e, t, n, a, i, l) {
        const s = r("WAWebFbtIntlList")(l.map((e)=>o("WAWebFrontendContactGetters").getFormattedShortName(e)), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString();
        const u = a === 200;
        const c = u ? e(s, l.length) : t(s, l.length, a);
        const d = u ? "" : n(a, i, l.length);
        return c.toString() + d.toString();
    }
    function d(e, t) {
        let n = "";
        switch(e){
            case 403:
                n = ` ${s._("You're not a member.").toString()}`;
                break;
            case 408:
                n = ` ${s._("_j{\"*\":\"You can't add these members because they left the group recently.\",\"_1\":\"You can't add this member because they left the group recently.\"}", [
                    s._plural(1)
                ]).toString()}`;
                break;
            case 404:
                n = ` ${s._("This group has ended.").toString()}`;
                break;
            case 429:
                n = ` ${s._("You'Voe added too many contacts to groups too quickly. Try again later.").toString()}`;
                break;
        }
        return n;
    }
    function m(e, t, n) {
        let r = "";
        switch(e){
            case 401:
            case 406:
            case 409:
                break;
            case 404:
                r = ` ${s._("_j{\"*\":\"They are no longer in this group.\"}", [
                    s._plural(n)
                ]).toString()}`;
                break;
            case 408:
                r = ` ${s._("_j{\"*\":\"You can't add these members because they left the group recently.\",\"_1\":\"You can't add this member because they left the group recently.\"}", [
                    s._plural(n)
                ]).toString()}`;
                break;
            case 419:
                r = ` ${s._("The community is full.").toString()}`;
                break;
            case 421:
                {
                    if (t == null) {
                        r = ` ${s._("_j{\"*\":\"Members pending admin approval.\",\"_1\":\"Member pending admin approval.\"}", [
                            s._plural(n)
                        ]).toString()}`;
                    } else if (t === 304) {
                        r = ` ${s._("Already requested. Admin approval is pending.").toString()}`;
                    }
                    break;
                }
            case 402:
                {
                    r = ` ${s._("_j{\"*\":\"Members cannot be added because they were previously removed by an admin.\",\"_1\":\"Member cannot be added because they were previously removed by an admin.\"}", [
                        s._plural(n)
                    ]).toString()}`;
                    break;
                }
            case 500:
                r = ` ${s._("This group is full.").toString()}`;
                break;
            default:
                r = ` ${s._("Please try again.").toString()}`;
                break;
        }
        return r;
    }
    function p(e, t) {
        return s._("_j{\"*\":\"Adding {memberNames}.\"}", [
            s._plural(t),
            s._param("memberNames", e)
        ]);
    }
    function _(e, t) {
        return s._("_j{\"*\":\"You added {memberNames}.\"}", [
            s._plural(t),
            s._param("memberNames", e)
        ]);
    }
    function f({ _status, memberNames, plural }) {
        return s._("_j{\"*\":\"Couldn't add {memberNames}.\"}", [
            s._plural(plural),
            s._param("memberNames", memberNames)
        ]);
    }
    function g() {
        return s._("Couldn't add some members.");
    }
    function h(e, t) {
        return s._("_j{\"*\":\"Removing {memberNames}.\"}", [
            s._plural(t),
            s._param("memberNames", e)
        ]);
    }
    function y(e, t) {
        return s._("_j{\"*\":\"You removed {memberNames}.\"}", [
            s._plural(t),
            s._param("memberNames", e)
        ]);
    }
    function C(e, t, n) {
        switch(n){
            case 406:
                return s._("You can't remove {member} because they created this group.", [
                    s._param("member", e)
                ]);
            default:
                return s._("_j{\"*\":\"Couldn't remove {memberNames}.\"}", [
                    s._plural(t),
                    s._param("memberNames", e)
                ]);
        }
    }
    function b() {
        return s._("Couldn't remove some members.");
    }
    function v(e, t) {
        return s._("_j{\"*\":\"{memberNames} are now group admins.\",\"_1\":\"{memberNames} is now a group admin.\"}", [
            s._plural(t),
            s._param("memberNames", e)
        ]);
    }
    function S(e, t, n) {
        return s._("_j{\"*\":\"Couldn't make {memberNames} admins.\",\"_1\":\"Couldn't make {memberNames} an admin.\"}", [
            s._plural(t),
            s._param("memberNames", e)
        ]);
    }
    function R() {
        return s._("Couldn't make some members admins.");
    }
    function L(e, t, n) {
        switch(n){
            case 406:
                return s._("You can't dismiss {member} as admin because they created this group.", [
                    s._param("member", e)
                ]);
            default:
                return s._("_j{\"*\":\"Removing {memberNames} as admins failed.\",\"_1\":\"Removing {memberNames} as an admin failed.\"}", [
                    s._plural(t),
                    s._param("memberNames", e)
                ]);
        }
    }
    function E(e, t) {
        return s._("_j{\"*\":\"{memberNames} are no longer group admins.\",\"_1\":\"{memberNames} is no longer a group admin.\"}", [
            s._plural(t),
            s._param("memberNames", e)
        ]);
    }
    function k() {
        return s._("Couldn't remove some members as admins.");
    }
    l.formatRemoveResult = e;
    l.formatResult = u;
    l.addingString = p;
    l.addSuccessString = _;
    l.addFailedString = f;
    l.addPartialFailedString = g;
    l.removingString = h;
    l.promoteSuccessString = v;
    l.promoteFailedString = S;
    l.promotePartialFailedString = R;
    l.demoteFailedString = L;
    l.demoteSuccessString = E;
    l.demotePartialFailedString = k;
}, 226);