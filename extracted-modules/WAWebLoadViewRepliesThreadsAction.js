__d("WAWebLoadViewRepliesThreadsAction", [
    "WALogger",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ viewRepliesThreads }) {
            if (viewRepliesThreads != null) {
                try {
                    yield viewRepliesThreads.initializeViewRepliesThreads();
                } catch (t) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[loadViewRepliesThreads] viewRepliesThreads init err"
                    ])));
                }
            }
        });
        return u.apply(this, arguments);
    }
    l.loadViewRepliesThreads = s;
}, 98);