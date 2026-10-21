__d("WAWebNewsletterQueues", [
    "WAWebPromiseQueue"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new (e = o("WAWebPromiseQueue")).PromiseQueue;
    const u = new e.PromiseQueue;
    const c = new e.PromiseQueue;
    const d = new e.PromiseQueue;
    l.newsletterCreationQueue = s;
    l.newsletterSubscribeQueue = u;
    l.newsletterDeleteQueue = c;
    l.newsletterJoinNotificationQueue = d;
}, 98);