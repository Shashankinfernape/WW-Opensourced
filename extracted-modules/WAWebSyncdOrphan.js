__d("WAWebSyncdOrphan", [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebGetSyncAction",
    "WAWebHistorySyncLidChatGating",
    "WAWebMiscGatingUtils",
    "WAWebSyncdCollectionHandler",
    "WAWebSyncdConst",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdDisabled",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    function h(e, t, n) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            if (o("WAWebSyncdDisabled").isSyncdDisabled()) {
                return (g || (g = n("Promise"))).resolve();
            }
            yield (g || (g = n("Promise"))).all([
                C(e),
                v(t),
                o("WAWebSyncdDbCallbacksApi").bulkGetAccountLid(t).then((e)=>R(e.filter(Boolean))),
                r != null && r.length > 0 ? D(r) : undefined
            ]);
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSyncdDbCallbacksApi").getAdditionalLidMsgKeys(e);
            const n = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat() ? yield o("WAWebSyncdDbCallbacksApi").getAdditionalHistoryChatIdMsgKeys(e) : [];
            yield E(e.concat(t, n), o("WAWebSyncdConst").SyncModelType.Msg);
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat() ? yield o("WAWebSyncdDbCallbacksApi").getAdditionalHistoryChatIds(e) : [];
            yield E(e.concat(t), o("WAWebSyncdConst").SyncModelType.Chat);
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield E(e, o("WAWebSyncdConst").SyncModelType.Account);
        });
        return L.apply(this, arguments);
    }
    function E(e, t) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (o("WAWebSyncdDisabled").isSyncdDisabled()) {
                return (g || (g = n("Promise"))).resolve();
            }
            const r = yield o("WAWebGetSyncAction").getSyncActionsByModelInfosInTransaction(e.map((e)=>[
                    e,
                    t,
                    o("WAWebSyncdConst").SyncActionState.Orphan
                ]));
            yield o("WAWebSyncdCollectionHandler").applyIndividualMutations(r);
        });
        return k.apply(this, arguments);
    }
    function I() {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebSyncdDisabled").isSyncdDisabled()) {
                return (g || (g = n("Promise"))).resolve();
            }
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: start applyAllOrphansAndUnsupported"
            ])));
            const t = yield o("WAWebGetSyncAction").getSyncActionsByActionStatesInTransaction([
                o("WAWebSyncdConst").SyncActionState.Orphan,
                o("WAWebSyncdConst").SyncActionState.Unsupported
            ]);
            yield o("WAWebSyncdCollectionHandler").applyIndividualMutations(t);
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: end applyAllOrphansAndUnsupported"
            ])));
        });
        return T.apply(this, arguments);
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield E(e, o("WAWebSyncdConst").SyncModelType.Thread);
        });
        return x.apply(this, arguments);
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield E(e, o("WAWebSyncdConst").SyncModelType.Agent);
        });
        return P.apply(this, arguments);
    }
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield E(e, o("WAWebSyncdConst").SyncModelType.ChatAssignment);
        });
        return M.apply(this, arguments);
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield E(e, o("WAWebSyncdConst").SyncModelType.UserStatusMute);
        });
        return A.apply(this, arguments);
    }
    function F(e, t) {
        return O.apply(this, arguments);
    }
    function O() {
        O = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: applying all orphans for type ",
                ""
            ])), e);
            if (o("WAWebSyncdDisabled").isSyncdDisabled()) {
                return (g || (g = n("Promise"))).resolve();
            }
            const r = yield o("WAWebGetSyncAction").getOrphanSyncActionsByModelTypeInTransaction(e);
            if (r.length === 0) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: no orphans for type ",
                    " to apply"
                ])), e);
                return;
            }
            if (!(t != null && !t())) {
                yield o("WAWebSyncdCollectionHandler").applyIndividualMutations(r);
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: finished applying all orphans for type ",
                    ", count=",
                    ""
                ])), e, r.length);
            }
        });
        return O.apply(this, arguments);
    }
    function B() {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: checkOrphanFavoriteStickers"
            ])));
            if (!o("WAWebMiscGatingUtils").isFavoriteStickersEnabled()) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] checkOrphanFavoriteStickers: not enabled"
                ])));
                return;
            }
            yield F(o("WAWebSyncdConst").SyncModelType.FavoriteSticker, function() {
                const e = o("WAWebABProps").getABPropConfigValue("favorite_sticker_sync_after_pairing_enabled_web");
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] checkOrphanFavoriteStickers: syncAfterPairing=",
                    ""
                ])), e);
                return e;
            });
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: checkOrphanFavoriteStickers: finished"
            ])));
        });
        return W.apply(this, arguments);
    }
    l.checkOrphanMutations = h;
    l.checkOrphanMessages = C;
    l.checkOrphanChats = v;
    l.applyAllOrphansAndUnsupported = I;
    l.checkOrphanAgents = $;
    l.checkOrphanChatAssignments = N;
    l.checkOrphanUserStatusMutes = w;
    l.checkOrphanFavoriteStickers = B;
}, 98);