__d("WAWebBotProfileGetters", [
    "WAWebGetters"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories();
    const e_field = e.field;
    const u = e_field("prompts");
    const c = e_field("commands");
    const d = e_field("isDefault");
    const m = e_field("posingAsProfessional");
    const p = e_field("id");
    const _ = e_field("lastFetchedTimeMs");
    const f = e_field("name");
    const g = e_field("product");
    const h = e_field("isDeprecated");
    const y = e_field("creatorLid");
    const C = e_field("isDeleted");
    l.getPrompts = u;
    l.getCommands = c;
    l.getIsDefault = d;
    l.getPosingAsProfessional = m;
    l.getId = p;
    l.getLastFetchedTimeMs = _;
    l.getName = f;
    l.getProduct = g;
    l.getIsDeprecated = h;
    l.getCreatorLid = y;
    l.getIsDeleted = C;
}, 98);