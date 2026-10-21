__d("WAWormQueueDef", [
    "WormPersistedQueue",
    "WormPersistedQueueDef"
], function(t, n, r, o, a, i) {
    "use strict";
    const defineWormPersistedQueue = importNamespace("WormPersistedQueue").defineWormPersistedQueue;
    const BASE_QUEUE_STORE = importNamespace("WormPersistedQueueDef").BASE_QUEUE_STORE;
    const ORDERED_QUEUE_STORE = importNamespace("WormPersistedQueueDef").ORDERED_QUEUE_STORE;
    const toWormPersistedQueueId = importNamespace("WormPersistedQueueDef").toWormPersistedQueueId;
    const c = 50;
    i.defineWAWormQueue = defineWormPersistedQueue;
    i.WA_WORM_QUEUE_STORE = BASE_QUEUE_STORE;
    i.WA_WORM_ORDERED_QUEUE_STORE = ORDERED_QUEUE_STORE;
    i.toWAWormQueueId = toWormPersistedQueueId;
    i.WA_WORM_QUEUE_DRAIN_LIMIT = c;
}, 66);