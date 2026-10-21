__d("WAWebGroupNotificationContextCardActionsUtils", [
    "compactMap"
], function(t, n, r, o, a, i, l) {
    const e = [
        "name",
        "inviteViaEmail",
        "addMembers",
        "inviteViaLink",
        "memberTag",
        "groupInfo"
    ];
    const s = [
        "name",
        "groupInfo",
        "addMembers",
        "inviteViaLink",
        "inviteViaEmail",
        "memberTag"
    ];
    const u = 2;
    const c = 3;
    function d(e, t, n, r = u) {
        const o = e.filter((e)=>n[e]).slice(0, r);
        return [].concat(o).sort((e, n)=>t.indexOf(e) - t.indexOf(n));
    }
    function m(t, inviteViaEmail) {
        const o = babelHelpers.extends({}, t, {
            inviteViaEmail
        });
        const a = {};
        for (const i of e){
            a[i] = o[i]?.available === true;
        }
        const m = d(e, s, a, inviteViaEmail?.available === true ? c : u);
        const p = r("compactMap")(m, function(e) {
            return o[e];
        });
        const _ = p[0];
        const f = p[1];
        const g = p[2];
        return {
            firstConfig: _ ?? null,
            secondConfig: f ?? null,
            thirdConfig: g ?? null,
            useVerticalLayout: p.some((e)=>e.useVerticalLayout === true)
        };
    }
    l.getButtonConfig = d;
    l.getGroupNotificationButtonConfig = m;
}, 98);