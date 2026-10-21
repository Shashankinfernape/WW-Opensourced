__d("WAWebDBExperienceIdStore", [
    "WALogger",
    "WATimeUtils",
    "WAWebSchemaExperienceId",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return e.some((e)=>(e.experienceIds?.length ?? 0) > 0);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                if (!s(t) || !r("justknobx")._("6170")) {
                    return;
                }
                const storedAtMs = o("WATimeUtils").unixTimeMs();
                const a = t.flatMap(({ experienceIds, id })=>{
                    if (experienceIds != null && experienceIds.length > 0) {
                        return [
                            {
                                msgKey: id,
                                experienceIds,
                                storedAtMs
                            }
                        ];
                    }
                    return [];
                });
                yield o("WAWebSchemaExperienceId").getExperienceIdTable().bulkCreateOrReplace(a);
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "recordReceivedExperienceIds: dropping rows"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("experience-id-record-failed");
            }
        });
        return c.apply(this, arguments);
    }
    l.shouldLockExperienceIdTable = s;
    l.recordReceivedExperienceIds = u;
}, 98);