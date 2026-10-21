__d("WAPQRollbackProtocol", [
    "WAPromiseRetryLoop",
    "WAResultOrError",
    "WARetryUtils",
    "WASmaxPreKeysDeleteRPC",
    "WATagsLogger",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = o("WATagsLogger").TAGS([
        "pqRollbackProtocol"
    ]);
    function m() {
        const t = {
            hasList: false,
            hasPqList: true
        };
        const r = new (o("WAPromiseRetryLoop")).PromiseRetryLoop({
            name: "deletePQKeys",
            timer: o("WARetryUtils").fibonacciBackoff(false),
            code: (()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                    d.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Attempting to delete all PQ prekeys from server"
                    ])));
                    const r = yield o("WASmaxPreKeysDeleteRPC").sendDeleteRPC(t);
                    switch(r.name){
                        case "DeleteResponseSuccess":
                            {
                                d.LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                    "PQ prekeys deleted successfully"
                                ])));
                                n(o("WAResultOrError").makeResult(undefined));
                                return;
                            }
                        case "DeleteResponseRequestError":
                            {
                                d.WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "PQ delete request error"
                                ])));
                                n(o("WAResultOrError").makeError("request-error"));
                                return;
                            }
                        default:
                            r.name;
                            d.WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "PQ delete error: ",
                                ", will retry"
                            ])), r.name);
                    }
                });
                function a(e) {
                    return r.apply(this, arguments);
                }
                return a;
            })()
        });
        r.start();
        return r.promise();
    }
    l.deletePQPreKeysProtocol = m;
}, 98);