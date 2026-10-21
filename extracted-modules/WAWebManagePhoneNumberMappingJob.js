__d("WAWebManagePhoneNumberMappingJob", [
    "WALogger",
    "WAWebApiContact",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = new Set;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "ensurePhoneNumberToLidMapping: ",
                ""
            ])), t.length);
            t.forEach((e)=>{
                if (e.isUser() && !(e.isBot() || e.isHosted() || e.isLid() || e.isPSA())) {
                    const t = o("WAWebApiContact").getCurrentLid(o("WAWebWidFactory").asUserWidOrThrow(e));
                    if (t == null) {
                        n.add(e.user);
                    }
                }
            });
            const r = Array.from(n).map((e)=>o("WAWebWidFactory").createUserWidOrThrow(e));
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "ensurePhoneNumberToLidMapping: ",
                " wids: ",
                ""
            ])), r.length, r.map((e)=>e.toString()).join());
            if (r.length !== 0) {
                const a = false;
                yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("syncContactListJob", {
                    contactIds: r,
                    shouldSyncDevice: a,
                    mode: "query"
                });
            }
        });
        return d.apply(this, arguments);
    }
    l.ensurePhoneNumberToLidMapping = c;
}, 98);