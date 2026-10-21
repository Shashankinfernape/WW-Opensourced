__d("WAWebChatParticipantColor", [
    "WALogger",
    "WAMd5",
    "WAWebContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebStateUtils",
    "WAWebUserPrefsGeneral"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        const r = o("WAWebStateUtils").unproxy(e);
        if (r.colors) {
            const a = r.groupMetadata?.participants ?? [];
            const i = r.colors;
            const l = Array.from(new Set(Object.keys(i)).difference(new Set(a.map((e)=>e.id.toString()).map(o("WAMd5").md5))));
            l.forEach((e)=>{
                delete i[e];
            });
            if (l.length) {
                r.saveAssignedColorsDebounced();
            }
        }
    }
    function u(e) {
        const n = o("WAWebStateUtils").unproxy(e);
        const r = n.groupMetadata?.participants;
        if (r) {
            n.listenTo(r, "remove", s);
            n.listenTo(r, "reset", s);
        }
        return o("WAWebUserPrefsGeneral").getGroupParticipantAssignedColor(n.id);
    }
    function c(e) {
        if (e.isUser()) {
            return o("WAWebLidMigrationUtils").toLid(e) ?? e;
        }
        return e;
    }
    function d(e) {
        const t = o("WAWebStateUtils").unproxy(e);
        const t_colors = t.colors;
        if (t_colors) {
            o("WAWebUserPrefsGeneral").setGroupParticipantAssignedColor(t.id, t_colors);
        }
    }
    function m(t, n, r) {
        const a = o("WAWebStateUtils").unproxy(t);
        if (o("WAWebContactGetters").getIsNewsletter(a)) {
            return 1;
        }
        if (n == null) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "received a null sender wid when getting assigned color-",
                ""
            ])), r).tags("messaging").sendLogs("unexpected null sender wid for getting assigned color");
            return 1;
        }
        const i = a.colors || (a.colors = u(a));
        let l;
        const s = o("WAMd5").md5(c(n).toString());
        if (l = i[s]) {
            return l;
        }
        const d = {};
        Object.entries(i).forEach(([t, n])=>{
            if (d[n]) {
                d[n].push(t);
            } else {
                d[n] = [
                    t
                ];
            }
        });
        let Number_POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
        for(let p = 17, _ = 1; _ <= p; _++){
            if (d[_]) {
                if (d[_].length < Number_POSITIVE_INFINITY) {
                    Number_POSITIVE_INFINITY = d[_].length;
                    l = _;
                }
            } else {
                l = _;
                break;
            }
        }
        i[s] = l;
        a.saveAssignedColorsDebounced();
        return l;
    }
    l.saveAssignedColors = d;
    l.getAssignedColor = m;
}, 98);