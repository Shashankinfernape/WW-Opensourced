__d("WAWebUsyncBotProfile", [
    "WAWap",
    "WAWebBotTypes"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        e.assertTag("bot");
        const n = e.maybeChild("error");
        if (n) {
            return {
                errorCode: n.attrInt("code"),
                errorText: n.attrString("text")
            };
        }
        const r = e.child("profile");
        const a = r.child("name");
        const i = a.contentString();
        const l = r.child("attributes");
        const attributes = l.contentString();
        const d = r.child("description");
        const m = d.contentString();
        const p = r.child("category");
        const category = p.contentString();
        const f = r.maybeChild("default");
        const isDefault = f?.contentString() === "true";
        const h = r.maybeChild("prompts");
        const prompts = s(h);
        const personaId = r.maybeAttrString("persona_id") ?? "";
        const b = r.maybeChild("commands");
        const v = u(b);
        const { commands, commandsDescription } = v;
        let isMetaCreated;
        const E = r.maybeChild("is_meta_created");
        if (E) {
            isMetaCreated = E?.contentString() === "true";
        }
        let creatorName;
        let creatorProfileUrl;
        const T = r.maybeChild("creator");
        if (T) {
            creatorName = T.maybeChild("name")?.contentString();
            creatorProfileUrl = T.maybeChild("profile_url")?.contentString();
        }
        let posingAsProfessional;
        const P = r.maybeChild("posing_as_professional");
        if (P) {
            switch(P.attrString("type")){
                case "unknown":
                    posingAsProfessional = o("WAWebBotTypes").BotPosingAsProfessionalType.UNKNOWN;
                    break;
                case "yes":
                    posingAsProfessional = o("WAWebBotTypes").BotPosingAsProfessionalType.YES;
                    break;
                case "no":
                    posingAsProfessional = o("WAWebBotTypes").BotPosingAsProfessionalType.NO;
                    break;
            }
        }
        return {
            name: i,
            attributes,
            description: m,
            category,
            isDefault,
            prompts,
            personaId,
            commands,
            commandsDescription,
            isMetaCreated,
            creatorName,
            creatorProfileUrl,
            posingAsProfessional
        };
    }
    function s(e) {
        if (e == null) {
            return [];
        }
        const t = [];
        e.forEachChildWithTag("prompt", function(e) {
            const o = e.maybeChild("emoji");
            const a = o?.contentString() ?? "";
            const i = e.maybeChild("text");
            const l = i?.contentString() ?? "";
            t.push({
                emoji: a,
                text: l
            });
        });
        return t;
    }
    function u(e) {
        if (e == null) {
            return {
                commands: [],
                commandsDescription: ""
            };
        }
        const commands = [];
        const r = e.maybeChild("description");
        const commandsDescription = r?.contentString() ?? "";
        e.forEachChildWithTag("command", function(e) {
            const o = e.maybeChild("name");
            const a = o?.contentString() ?? "";
            const i = e.maybeChild("description");
            const l = i?.contentString() ?? "";
            commands.push({
                name: a,
                description: l
            });
        });
        return {
            commands,
            commandsDescription
        };
    }
    class c {
        getName() {
            return "bot";
        }
        getQueryElement() {
            return o("WAWap").wap("bot", null, o("WAWap").wap("profile", {
                v: "1"
            }));
        }
        getUserElement(t) {
            const e = t.getPersonaId();
            return o("WAWap").wap("bot", null, o("WAWap").wap("profile", {
                persona_id: e != null ? o("WAWap").CUSTOM_STRING(e) : o("WAWap").DROP_ATTR
            }));
        }
    }
    l.botProfileParser = e;
    l.USyncBotProfileProtocol = c;
}, 98);