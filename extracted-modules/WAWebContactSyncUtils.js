__d("WAWebContactSyncUtils", [
    "WALogger",
    "WAWebApiContact",
    "WAWebLidMigrationUtils",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWidFactory",
    "uniqueBy"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(t) {
        const n = new (o("WAWebUsync")).USyncQuery().withMode("delta").withContext("interactive").withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.LID).withUsernameProtocol();
        const r = [];
        t.forEach((e)=>{
            if (e.type === "add") {
                n.withUser(new (o("WAWebUsyncUser")).USyncUser().withPhone(e.phoneNumber));
                return;
            }
            if (e.type === "add_username") {
                n.withUser(new (o("WAWebUsyncUser")).USyncUser().withId(e.lid).withUsername(e.username));
                return;
            }
            e.type;
            const e_contact = e.contact;
            const a = new (o("WAWebUsyncUser")).USyncUser().withType("delete");
            if (e_contact.isLid()) {
                a.withId(e_contact);
            } else if (e_contact.isRegularUserPn()) {
                const i = o("WAWebLidMigrationUtils").toUserLid(e_contact);
                if (i != null) {
                    a.withId(i);
                }
                a.withPnJid(e_contact);
            } else {
                a.withId(e_contact);
                if (r.length < 3) {
                    r.push(e_contact.toLogString());
                }
            }
            n.withUser(a);
        });
        if (r.length > 0) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[constructUsyncDeltaQuery] ",
                " not LID/PN => ",
                ""
            ])), r.length, r).sendLogs("unexpected_contact_type_in_delta_delete", {
                sampling: 0.1
            });
        }
        return n;
    }
    function d(e) {
        return r("uniqueBy")(e.filter((e)=>e.isRegularUserPn() && !e.isHostedLid()).map((e)=>o("WAWebWidFactory").asUserWidOrThrow(e)), function(e) {
            return e.toString();
        });
    }
    function m(e, t) {
        if (e.length === 0) {
            return t;
        }
        const n = new Map;
        t.forEach((e)=>{
            n.set(e.wid.toString(), e);
        });
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[backfillMissingDeviceSyncEntries] req=",
            " resp=",
            ""
        ])), e.length, t.length);
        const r = [];
        e.forEach((e)=>{
            const a = e.toString();
            if (!n.has(a)) {
                const i = o("WAWebApiContact").getCurrentLid(o("WAWebWidFactory").asUserWidOrThrow(e));
                if (i != null) {
                    const l = n.get(i.toString());
                    if (l != null) {
                        t.push({
                            wid: e,
                            devices: l.devices
                        });
                        if (r.length < 3) {
                            r.push({
                                lid: i.toLogString(),
                                pn: e.toLogString()
                            });
                        }
                    }
                }
            }
        });
        if (r.length > 0) {
            const a = r.map((e)=>`${e.lid} -> ${e.pn}`);
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[backfillMissingDeviceSyncEntries] dup=",
                " => ",
                ""
            ])), r.length, a);
        }
        return t;
    }
    l.constructUsyncDeltaQuery = c;
    l.getDeviceSyncBackfillPnWids = d;
    l.backfillMissingDeviceSyncEntries = m;
}, 98);