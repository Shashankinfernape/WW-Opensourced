__d("WAWebRequestBotProfiles", [
    "Promise",
    "WALogger",
    "WAWebBotProfileCategory",
    "WAWebBotTypes",
    "WAWebFetchBotProfilesGQL",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length === 0) {
                return [];
            }
            return f(e);
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = y(e);
            if (t.length === 0) {
                return h(e.length);
            }
            const a = t.map((e)=>e.fbid);
            let i;
            try {
                i = yield o("WAWebFetchBotProfilesGQL").fetchBotProfilesGQL(a);
            } catch (error) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[requestBotProfiles] GQL fetch threw"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("bot-profile-gql-fetch-exception");
                throw error;
            }
            if (i.type === "canonical-unavailable") {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[requestBotProfiles] canonical session unavailable"
                ])));
                return (m || (m = n("Promise"))).reject(r("err")("canonical session unavailable"));
            }
            if (i.type !== "success") {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[requestBotProfiles] GQL fetch failed"
                ]))).sendLogs("bot-profile-gql-fetch-failed", {
                    sampling: 0.01
                });
                throw i.type === "graphql-error" ? i.error : r("err")("bot profile GQL fetch failed");
            }
            const l = C(t, i.value);
            if (l.length === 0) {
                return h(e.length);
            }
            return l;
        });
        return g.apply(this, arguments);
    }
    function h(t) {
        if (t === 1) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[requestBotProfiles] no profile for the requested bot"
            ])));
        } else {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[requestBotProfiles] no profile for any requested bot"
            ]))).sendLogs("bot-profile-no-status-data");
        }
        return (m || (m = n("Promise"))).reject(r("err")("no status data returned for user"));
    }
    function y(e) {
        const t = [];
        for (const n of e){
            const r = S(n.id, n.personaId);
            if (r != null && r !== "") {
                t.push({
                    fbid: r,
                    id: n.id,
                    isDefault: n.isDefault
                });
            }
        }
        return t;
    }
    function C(e, t) {
        const n = new Map(t.map((e)=>[
                e.personaId,
                e
            ]));
        const r = [];
        for (const o of e){
            const gqlProfile = n.get(o.fbid);
            if (gqlProfile != null) {
                r.push(b({
                    gqlProfile,
                    isDefault: o.isDefault,
                    wid: o.id
                }));
            }
        }
        return r;
    }
    function b({ gqlProfile, isDefault, wid }) {
        return {
            id: wid,
            name: gqlProfile.name,
            attrs: "",
            description: gqlProfile.description,
            category: o("WAWebBotProfileCategory").BotProfileCategory.SYNTHETIC,
            isDefault,
            prompts: gqlProfile.prompts.map((e)=>({
                    emoji: "",
                    text: e
                })),
            personaId: gqlProfile.personaId,
            commands: [],
            commandsDescription: "",
            isMetaCreated: gqlProfile.isMetaCreated,
            creatorName: gqlProfile.creatorName,
            creatorProfileUrl: gqlProfile.creatorProfileUrl,
            lastUpdateTs: Date.now(),
            posingAsProfessional: v(gqlProfile.posingAsProfessional)
        };
    }
    function v(posingAsProfessional) {
        if (posingAsProfessional == null) {
            return null;
        }
        return ((e)=>{
            if (e === "yes") {
                return o("WAWebBotTypes").BotPosingAsProfessionalType.YES;
            }
            if (e === "no") {
                return o("WAWebBotTypes").BotPosingAsProfessionalType.NO;
            }
            {
                const t = e;
                return o("WAWebBotTypes").BotPosingAsProfessionalType.UNKNOWN;
            }
        })(posingAsProfessional.toLowerCase());
    }
    function S(e, personaId) {
        if (personaId != null && personaId !== "") {
            const n = personaId.indexOf("$");
            const r = n === -1 ? personaId : personaId.substring(0, n);
            if (r !== "") {
                return r;
            }
            return null;
        }
        if (e.isFbidBot()) {
            return e.user;
        }
        return null;
    }
    l.requestBotProfiles = p;
}, 98);