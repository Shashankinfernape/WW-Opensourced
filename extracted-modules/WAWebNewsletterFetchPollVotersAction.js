__d("WAWebNewsletterFetchPollVotersAction", [
    "WABase64",
    "WALogger",
    "WAWebContactCollection",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebMexFetchNewsletterPollVotersJob",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterPollVotersCache",
    "WAWebNewsletterValidationUtils",
    "WAWebPollsCreateOptionLocalIdMap",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 5000;
    const u = 5;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msgKey, pollOptions, pollVoteLocalId, serverId }) {
            try {
                const c = yield o("WAWebFindChatAction").findOrCreateLatestChat(msgKey.remote, "fetchPollVotersAction");
                const d = c.chat;
                if (!o("WAWebNewsletterExtendedGatingUtils").isNewsletterPollsVotersEnabledForChat(d)) {
                    return;
                }
                const p = o("WAWebNewsletterPollVotersCache").getPollVotersFromCache(msgKey, pollVoteLocalId);
                const _ = p[0];
                const f = p[1];
                if (_ != null) {
                    return _.votersMap;
                }
                if (serverId == null || pollOptions == null) {
                    return;
                }
                const g = yield o("WAWebPollsCreateOptionLocalIdMap").createOptionLocalIdMap(pollOptions);
                const h = pollVoteLocalId != null ? g.getHashForLocalId(pollVoteLocalId) : null;
                const voteHash = h != null ? o("WABase64").encodeB64(h) : null;
                const C = Math.max(pollOptions.length, 1);
                const limit = pollVoteLocalId != null ? s : C * u;
                const newsletterId = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(msgKey.remote.toString());
                const S = yield r("WAWebMexFetchNewsletterPollVotersJob")({
                    newsletterId,
                    limit,
                    serverId,
                    voteHash
                });
                const R = new Map;
                for (const [E, k] of S){
                    R.set(g.getLocalIdForHexHash(E), m(k));
                }
                f(R);
                return R;
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[fetchPollVotersAction] poll voters fetch failed ",
                    ""
                ])), msgKey.toString());
                return null;
            }
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        const t = [];
        const n = [];
        for (const r of e){
            const i = o("WAWebLidMigrationUtils").toPn(r.id) ?? r.id;
            const l = o("WAWebContactCollection").ContactCollection.get(i);
            if (l != null && o("WAWebFrontendContactGetters").getIsMyContact(l)) {
                t.push(babelHelpers.extends({}, r, {
                    contact: l
                }));
            } else {
                n.push(babelHelpers.extends({}, r, {
                    contact: null
                }));
            }
        }
        return {
            contacts: t.sort(p),
            others: n.sort(p)
        };
    }
    function p(e, t) {
        return t.time - e.time;
    }
    l.fetchPollVotersAction = c;
}, 98);