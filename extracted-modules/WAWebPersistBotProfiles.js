__d("WAWebPersistBotProfiles", [
    "WAWebBotProfileCollection",
    "WAWebProfilePicThumbCollection",
    "WAWebSchemaBotProfile",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "name"
    ];
    const s = [
        "commands",
        "id",
        "prompts"
    ];
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebSchemaBotProfile").getBotProfileTable().bulkCreateOrMerge(e.map((e)=>{
                const { commands, id, prompts } = e;
                const o = babelHelpers.objectWithoutPropertiesLoose(e, s);
                return babelHelpers.extends({
                    id: id.toString(),
                    prompts: JSON.stringify(prompts),
                    commands: JSON.stringify(commands)
                }, o);
            }));
            e.forEach((e)=>o("WAWebBotProfileCollection").BotProfileCollection.gadd(babelHelpers.extends({
                    id: e.id
                }, e)));
        });
        return c.apply(this, arguments);
    }
    function d(e, t, n) {
        const r = n != null && n !== "" ? n : null;
        const a = t != null && t !== "" ? t : null;
        const eurl = r ?? a;
        if (eurl == null) {
            return null;
        }
        const previewEurl = a ?? eurl;
        if (m(e, eurl, previewEurl)) {
            return null;
        }
        const s = Date.now();
        o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(e).set({
            eurl,
            previewEurl,
            previewDirectPath: null,
            fullDirectPath: null,
            filehash: null,
            tag: "bot",
            stale: false,
            timestamp: s
        });
        return {
            id: e.toString(),
            eurl,
            previewEurl,
            previewDirectPath: null,
            fullDirectPath: null,
            filehash: null,
            tag: "bot",
            timestamp: s
        };
    }
    function m(e, eurl, previewEurl) {
        const r = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(e);
        return r != null && r.eurl === eurl && r.previewEurl === previewEurl && r.previewDirectPath == null && r.fullDirectPath == null && r.filehash == null;
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, fields) {
            return f([
                {
                    fields,
                    wid: e
                }
            ]);
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length !== 0) {
                const t = e.map(({ fields, wid })=>({
                        fields: h(fields),
                        wid
                    }));
                yield o("WAWebSchemaBotProfile").getBotProfileTable().bulkCreateOrMerge(t.map(({ fields, wid })=>babelHelpers.extends({
                        id: wid.toString()
                    }, fields)));
                t.forEach(({ fields, wid })=>o("WAWebBotProfileCollection").BotProfileCollection.gadd(babelHelpers.extends({
                        id: wid
                    }, fields)));
            }
        });
        return g.apply(this, arguments);
    }
    function h(fields) {
        const t_name = fields.name;
        const r = babelHelpers.objectWithoutPropertiesLoose(fields, e);
        if (t_name != null && t_name !== "") {
            return babelHelpers.extends({}, r, {
                name: t_name
            });
        }
        return r;
    }
    function y(e) {
        return e != null && (e.name != null || e.lastFetchedTimeMs != null);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return y((yield o("WAWebSchemaBotProfile").getBotProfileTable().get(e.toString())));
        });
        return b.apply(this, arguments);
    }
    l.persistBotProfiles = u;
    l.setBotProfilePicUrls = d;
    l.mergeBotSupportFields = p;
    l.mergeBotSupportFieldsBatch = f;
    l.isStoredBotProfile = y;
    l.hasStoredBotProfile = C;
}, 98);