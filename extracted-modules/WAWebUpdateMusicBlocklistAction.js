__d("WAWebUpdateMusicBlocklistAction", [
    "WAWebAsISOCountryCode",
    "WAWebMsgCollection",
    "WAWebMusicParsingUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const r = o("WAWebMsgCollection").MsgCollection.get(t);
        if (r != null) {
            const a = r.interactiveAnnotations;
            if (a != null) {
                const i = a.findIndex((e)=>e.embeddedContent?.embeddedMusic != null);
                if (i !== -1) {
                    const l = a[i];
                    if (l != null) {
                        const s = l.embeddedContent?.embeddedMusic;
                        if (s != null) {
                            const u = new Set;
                            for (const c of e){
                                const d = o("WAWebAsISOCountryCode").asISOCountryCode(c);
                                if (d != null) {
                                    u.add(d);
                                }
                            }
                            const countryBlocklist = o("WAWebMusicParsingUtils").countryCodeSetToBuffer(u);
                            const p = [].concat(a);
                            p[i] = babelHelpers.extends({}, l, {
                                embeddedContent: babelHelpers.extends({}, l.embeddedContent, {
                                    embeddedMusic: babelHelpers.extends({}, s, {
                                        countryBlocklist
                                    })
                                })
                            });
                            r.interactiveAnnotations = p;
                        }
                    }
                }
            }
        }
    }
    l.updateMusicBlocklist = e;
}, 98);