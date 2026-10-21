__d("useWAWebGroupMemberSuggestions", [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebGroupMemberSuggestions",
    "getErrorSafe",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const { useEffect, useEffectEvent, useState } = c;
    const _ = 10;
    function useF(e) {
        const t = o("react-compiler-runtime").c(11);
        const { chat, onLoaded, pickerContactCount } = e;
        let l;
        if (t[0] !== pickerContactCount) {
            l = function() {
                return o("WAWebABProps").getABPropConfigValue("web_add_member_smart_suggestions_enabled") && pickerContactCount >= _;
            };
            t[0] = pickerContactCount;
            t[1] = l;
        } else {
            l = t[1];
        }
        const u = useState(l);
        const c = u[0];
        const f = useState(null);
        const h = f[0];
        const y = f[1];
        let C;
        if (t[2] !== onLoaded) {
            C = function(t) {
                y(t);
                onLoaded(t);
            };
            t[2] = onLoaded;
            t[3] = C;
        } else {
            C = t[3];
        }
        const b = useEffectEvent(C);
        let v;
        if (t[4] !== chat || t[5] !== b || t[6] !== c) {
            v = function() {
                let e = false;
                const t = c ? o("WAWebGroupMemberSuggestions").getGroupMemberSuggestions(chat.groupMetadata) : (s || (s = n("Promise"))).resolve(o("WAWebGroupMemberSuggestions").NO_GROUP_MEMBER_SUGGESTIONS);
                t.catch(g).then((t)=>{
                    if (!e) {
                        b(t);
                    }
                });
                return function() {
                    e = true;
                };
            };
            t[4] = chat;
            t[5] = b;
            t[6] = c;
            t[7] = v;
        } else {
            v = t[7];
        }
        let S;
        if (t[8] !== chat || t[9] !== c) {
            S = [
                chat,
                c
            ];
            t[8] = chat;
            t[9] = c;
            t[10] = S;
        } else {
            S = t[10];
        }
        useEffect(v, S);
        return h;
    }
    function g(t) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[group-member-suggestions] failed to load suggestions"
        ]))).catching(r("getErrorSafe")(t)).sendLogs("group-member-suggestions-load-failed");
        return o("WAWebGroupMemberSuggestions").NO_GROUP_MEMBER_SUGGESTIONS;
    }
    l.default = useF;
}, 98);