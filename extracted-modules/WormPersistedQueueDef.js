__d("WormPersistedQueueDef", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        return e;
    }
    const l = {
        autoIncrement: false,
        primaryKey: "queueId",
        secure: true
    };
    const s = babelHelpers.extends({}, l, {
        indexes: {},
        nonEncryptedFields: [
            "queueId"
        ]
    });
    i.toWormPersistedQueueId = e;
    i.BASE_QUEUE_STORE = l;
    i.ORDERED_QUEUE_STORE = s;
}, 66);