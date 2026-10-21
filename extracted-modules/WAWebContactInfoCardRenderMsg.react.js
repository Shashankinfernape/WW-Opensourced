__d("WAWebContactInfoCardRenderMsg.react", [
    "WAWebCmd",
    "WAWebContactInfoCard.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    function c(e) {
        const t = o("react-compiler-runtime").c(5);
        const { chat, msg } = e;
        let i;
        let l;
        if (t[0] !== msg.id) {
            i = function() {
                o("WAWebCmd").Cmd.contactInfoCardRendered(msg.id);
            };
            l = [
                msg.id
            ];
            t[0] = msg.id;
            t[1] = i;
            t[2] = l;
        } else {
            i = t[1];
            l = t[2];
        }
        e_useEffect(i, l);
        let c;
        if (t[3] !== chat) {
            c = s.jsx(r("WAWebContactInfoCard.react"), {
                chat
            });
            t[3] = chat;
            t[4] = c;
        } else {
            c = t[4];
        }
        return c;
    }
    l.default = c;
}, 98);