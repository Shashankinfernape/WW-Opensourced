__d("WAWebMexFetchTextStatusListJob", [
    "WAComms",
    "WALogger",
    "WAWebCooldownBatcher",
    "WAWebGroupsPrivacyTokenUtils",
    "WAWebMexClient",
    "WAWebMexFetchTextStatusListJobQuery.graphql",
    "WAWebTrustedContactsUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = e !== undefined ? e : e = n("WAWebMexFetchTextStatusListJobQuery.graphql");
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = new Set;
                const n = [];
                for (const a of e){
                    const i = a.wid.toJid();
                    if (!t.has(i)) {
                        t.add(i);
                        n.push(a);
                    }
                }
                const l = n.map((e)=>o("WAWebWidFactory").asUserWidOrThrow(e.wid));
                const input = n.map((e)=>({
                        jid: e.wid.toJid(),
                        last_update_time: e.lastUpdateTime?.toString()
                    }));
                const d = yield o("WAWebGroupsPrivacyTokenUtils").getPermissionTokenMapForChatIds(l);
                for(let m = 0; m < n.length; m++){
                    const _ = d.get(l[m])?.anyElementValue;
                    if (_ != null) {
                        input[m].privacy_token = {
                            tctoken: o("WAWebTrustedContactsUtils").encodeTcTokenForMex(_.buffer)
                        };
                    }
                }
                const f = {
                    input
                };
                yield o("WAComms").waitForConnection();
                const g = yield o("WAWebMexClient").fetchQuery(c, f);
                const h = g.xwa2_text_status_list;
                if (h == null) {
                    throw r("err")("textStatusListResponse is null");
                }
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][TEXT-STATUS] fetched text status for ",
                    " contacts"
                ])), h.length).tags("GQL", "MEX");
                const y = new Map;
                for (const b of h){
                    if (b != null) {
                        y.set(b.jid, b);
                    }
                }
                return e.map((e)=>{
                    const t = e.wid.toJid();
                    const n = y.get(t);
                    if (n == null) {
                        return {
                            success: false,
                            error: r("err")("No response for jid in batch")
                        };
                    }
                    const o = C(n);
                    return {
                        success: true,
                        result: {
                            id: o.id,
                            text: o.textStatusString,
                            emoji: o.textStatusEmoji,
                            lastUpdateTime: o.textStatusLastUpdateTime,
                            ephemeralDurationSeconds: o.textStatusEphemeralDuration
                        }
                    };
                });
            } catch (error) {
                const v = r("getErrorSafe")(error);
                return e.map(()=>({
                        success: false,
                        error: v
                    }));
            }
        });
        return m.apply(this, arguments);
    }
    const windowMs = 250;
    const maxWindowMs = 5000;
    const cooldownMs = 5000;
    const g = o("WAWebCooldownBatcher").createCooldownBatcher({
        windowMs,
        maxWindowMs,
        cooldownMs
    }, d);
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, lastUpdateTime) {
            if (!r("WAWebWid").isWid(e) || !e.isUser()) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][TEXT-STATUS] expected user wid, got: ",
                    ""
                ])), e.toLogString()).sendLogs("mex-text-status-list-invalid-wid");
                throw r("err")(`[MEX][TEXT-STATUS] this method should only take user wid, instead it received: ${e.toLogString()}`);
            }
            const n = yield g({
                wid: e,
                lastUpdateTime
            });
            if (!n.success) {
                throw n.error;
            }
            return n.result;
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return {
            id: o("WAWebWidFactory").createWid(e.jid),
            textStatusString: e.text,
            textStatusEmoji: e.emoji?.content,
            textStatusEphemeralDuration: e.ephemeral_duration_sec,
            textStatusLastUpdateTime: Number(e.last_update_time)
        };
    }
    l.mexGetTextStatusList = h;
    l.parseTextStatusServerResponse = C;
}, 98);