__d("WAWebCommentGetters", [
    "WAWebAck",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createCommentCache
    });
    const { clearCacheFor, computed, field, unsafeIdentityGetter } = e;
    const m = clearCacheFor;
    const _ = o("WAWebGetters").createGetterFactories({
        root: unsafeIdentityGetter,
        createCache: o("WAWebGettersCaches").createFrontendCommentCache
    });
    const { clearCacheFor: clearCacheFor_1, field: field_1 } = _;
    const h = clearCacheFor_1;
    const y = field("ack");
    const C = field("author");
    const b = field("body");
    const v = field("isSendFailure");
    const S = field("parentMsgKey");
    const R = field("protocolMessageKey");
    const L = field("read");
    const E = field("subtype");
    const k = field("t");
    const I = field_1("links");
    const T = field_1("linksIndexParsed");
    const D = field_1("phoneNumbers");
    const x = field_1("phoneNumbersIndexParsed");
    const $ = field_1("revokeSender");
    const P = computed(function([t, n, r]) {
        const a = o("WAWebUserPrefsMeUser").isMeAccount(r) && t != null && t < o("WAWebAck").ACK.CLOCK;
        return a || !!n;
    }, [
        y,
        v,
        C
    ]);
    l.clearCommentGetterCacheFor = m;
    l.clearFrontendCommentGetterCacheFor = h;
    l.getAuthor = C;
    l.getBody = b;
    l.getParentMsgKey = S;
    l.getProtocolMessageKey = R;
    l.getRead = L;
    l.getSubtype = E;
    l.getT = k;
    l.getLinks = I;
    l.getLinksIndexParsed = T;
    l.getPhoneNumbers = D;
    l.getPhoneNumbersIndexParsed = x;
    l.getRevokeSender = $;
    l.getIsFailed = P;
}, 98);