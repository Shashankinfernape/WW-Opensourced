__d("WAWebLogSystemMessageClick", [
    "WAWebSystemMessageClickWamEvent",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ isAGroup, isANewThread, systemMessageCategory, systemMessageType }) {
            new (o("WAWebSystemMessageClickWamEvent")).SystemMessageClickWamEvent({
                isAGroup,
                isANewThread,
                systemMessageCategory,
                systemMessageType
            }).commit();
        });
        return s.apply(this, arguments);
    }
    l.logSystemMessageClick = e;
}, 98);