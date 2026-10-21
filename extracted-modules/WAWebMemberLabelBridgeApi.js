__d("WAWebMemberLabelBridgeApi", [
    "WALogger",
    "WAWebMemberLabelCollection",
    "WAWebMemberLabelKey"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return {
            type: "DELETE",
            data: {
                chatId: e,
                member: t
            }
        };
    }
    function c(e, t, memberLabel) {
        return {
            type: "UPSERT",
            data: {
                chatId: e,
                member: t,
                memberLabel
            }
        };
    }
    const d = {
        updateMemberLabelCollection: function({ updates }) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[updateMemberLabelsModel] processing ",
                " updates"
            ])), updates.length);
            const a = [];
            const i = [];
            let l = 0;
            updates.forEach(({ data, type })=>{
                const { chatId, member, memberLabel } = data;
                const c = new (r("WAWebMemberLabelKey"))({
                    chatId,
                    member
                });
                switch(type){
                    case "UPSERT":
                        {
                            if (memberLabel == null) {
                                l++;
                                return;
                            }
                            a.push({
                                id: c,
                                label: memberLabel.label,
                                lastEditTimestamp: memberLabel.lastEditTimestamp
                            });
                            break;
                        }
                    case "DELETE":
                        {
                            i.push(c);
                            break;
                        }
                }
            });
            if (l > 0) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[updateMemberLabelsModel] ",
                    " memberLabel(s) null for upsert"
                ])), l);
            }
            if (a.length > 0) {
                r("WAWebMemberLabelCollection").add(a, {
                    merge: true
                });
            }
            if (i.length > 0) {
                r("WAWebMemberLabelCollection").remove(i);
            }
        }
    };
    l.createDelete = u;
    l.createUpsert = c;
    l.MemberLabelBridgeApi = d;
}, 98);