__d("WAWebMexFetchAllNewslettersMetadataJob", [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexFetchAllNewslettersMetadataJobQuery.graphql",
    "WAWebMexNewsletterParseUtils",
    "WAWebNewsletterGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = e !== undefined ? e : e = n("WAWebMexFetchAllNewslettersMetadataJobQuery.graphql");
            const a = yield o("WAWebMexClient").fetchQuery(r, {
                fetch_wamo_sub: t?.fetchWamoSub === true,
                fetch_status_metadata: t?.fetchStatusMetadata === true
            });
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[MEX][NEWSLETTER] fetched all newsletters job"
            ]))).tags("GQL", "MEX");
            return a;
        });
        return c.apply(this, arguments);
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield u({
                fetchWamoSub: o("WAWebNewsletterGatingUtils").isWamoSubExperienceEnabled(),
                fetchStatusMetadata: o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()
            });
            const t = e?.xwa2_newsletter_subscribed;
            if (e == null || t == null) {
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "Mex unexpected null response for fetching all metadata");
            }
            if (t.length === 0) {
                return {
                    newsletters: []
                };
            }
            const newsletters = [];
            const r = [];
            t.filter((e)=>e != null).map((e)=>{
                const t = o("WAWebMexNewsletterParseUtils").parseMexNewsletterResponse(e);
                if (t != null) {
                    if (e?.state?.type === "DELETED") {
                        if (t != null) {
                            r.push({
                                jid: t.idJid
                            });
                        }
                    } else {
                        newsletters.push(t);
                    }
                }
            });
            if (newsletters.length > 0 || r.length > 0) {
                return {
                    newsletters,
                    deletedNewsletters: r.length > 0 ? {
                        id: r
                    } : null
                };
            }
            return {
                newsletters: []
            };
        });
        return m.apply(this, arguments);
    }
    l.mexFetchAllNewsletters = u;
    l.handleMexGetAllNewsletters = d;
}, 98);