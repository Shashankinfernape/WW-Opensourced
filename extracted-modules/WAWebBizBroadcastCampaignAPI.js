__d("WAWebBizBroadcastCampaignAPI", [
    "WALogger",
    "WAResultOrError",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
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
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    const R = "Campaign not found";
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-api] Creating campaign: campaignId=",
                    ""
                ])), t.campaignId);
                yield o("WAWebSchemaBusinessBroadcastCampaign").getBusinessBroadcastCampaignTable().create(t);
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-api] Campaign created successfully"
                ])));
                return o("WAResultOrError").makeResult(undefined);
            } catch (error) {
                const n = r("getErrorSafe")(error);
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-api] Failed to create campaign: ",
                    ""
                ])), n);
                return o("WAResultOrError").makeError(n.message);
            }
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const n = yield o("WAWebSchemaBusinessBroadcastCampaign").getBusinessBroadcastCampaignTable().equals([
                    "adGroupId"
                ], e);
                return n[0] ?? null;
            } catch (error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-api] Failed to get campaign: ",
                    ""
                ])), r("getErrorSafe")(error));
                return null;
            }
        });
        return I.apply(this, arguments);
    }
    function T(e) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                return yield o("WAWebSchemaBusinessBroadcastCampaign").getBusinessBroadcastCampaignTable().get(e);
            } catch (error) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-api] Failed to get campaign: ",
                    ""
                ])), r("getErrorSafe")(error));
                return null;
            }
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = yield o("WAWebSchemaBusinessBroadcastCampaign").getBusinessBroadcastCampaignTable().all();
                return t.filter((t)=>t.broadcastJid === e);
            } catch (error) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-api] Failed to get campaigns: ",
                    ""
                ])), r("getErrorSafe")(error));
                return [];
            }
        });
        return $.apply(this, arguments);
    }
    function P(e, t) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                const n = yield o("WAWebSchemaBusinessBroadcastCampaign").getBusinessBroadcastCampaignTable().get(e);
                if (n == null) {
                    return o("WAResultOrError").makeError(R);
                }
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-api] Updating campaign ",
                    ""
                ])), e);
                yield o("WAWebSchemaBusinessBroadcastCampaign").getBusinessBroadcastCampaignTable().createOrReplace(babelHelpers.extends({}, n, t));
                return o("WAResultOrError").makeResult(undefined);
            } catch (error) {
                const a = r("getErrorSafe")(error);
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-api] Failed to update campaign: ",
                    ""
                ])), a);
                return o("WAResultOrError").makeError(a.message);
            }
        });
        return N.apply(this, arguments);
    }
    function M(e, t) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return P(e, {
                msgId: t
            });
        });
        return w.apply(this, arguments);
    }
    function A() {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                return yield o("WAWebSchemaBusinessBroadcastCampaign").getBusinessBroadcastCampaignTable().all({
                    index: [
                        "createdTimestamp"
                    ],
                    reverse: true
                });
            } catch (error) {
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-api] Failed to get campaigns: ",
                    ""
                ])), r("getErrorSafe")(error));
                return [];
            }
        });
        return F.apply(this, arguments);
    }
    function O(e, t) {
        return e.filter((e)=>{
            if (e.status === o("WAWebSchemaBusinessBroadcastCampaign").BusinessBroadcastCampaignStatus.SENT || e.status === o("WAWebSchemaBusinessBroadcastCampaign").BusinessBroadcastCampaignStatus.FAILED) {
                return true;
            }
            return e.deviceId === t;
        });
    }
    function B() {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield A();
            const t = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId();
            return O(e, t);
        });
        return W.apply(this, arguments);
    }
    function q(e) {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                return yield o("WAWebSchemaBusinessBroadcastCampaign").getBusinessBroadcastCampaignTable().equals([
                    "status"
                ], e);
            } catch (error) {
                o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-api] Failed to get campaigns: ",
                    ""
                ])), r("getErrorSafe")(error));
                return [];
            }
        });
        return U.apply(this, arguments);
    }
    function V(e) {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                return yield o("WAWebSchemaBusinessBroadcastCampaign").getBusinessBroadcastCampaignTable().anyOf([
                    "status"
                ], e);
            } catch (error) {
                o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-api] Failed to get campaigns: ",
                    ""
                ])), r("getErrorSafe")(error));
                return [];
            }
        });
        return H.apply(this, arguments);
    }
    function G(e) {
        return z.apply(this, arguments);
    }
    function z() {
        z = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-api] Deleting campaign: ",
                    ""
                ])), e);
                yield o("WAWebSchemaBusinessBroadcastCampaign").getBusinessBroadcastCampaignTable().remove(e);
                return true;
            } catch (error) {
                o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-api] Failed to delete campaign: ",
                    ""
                ])), r("getErrorSafe")(error));
                return false;
            }
        });
        return z.apply(this, arguments);
    }
    function j(e) {
        return K.apply(this, arguments);
    }
    function K() {
        K = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const n = yield o("WAWebSchemaBusinessBroadcastCampaign").getBusinessBroadcastCampaignTable().equals([
                    "msgId"
                ], e);
                return n[0] ?? null;
            } catch (error) {
                o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-api] Failed to get campaign by msgId: ",
                    ""
                ])), r("getErrorSafe")(error));
                return null;
            }
        });
        return K.apply(this, arguments);
    }
    const Q = G;
    function X(e, t) {
        return Y.apply(this, arguments);
    }
    function Y() {
        Y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, campaignName) {
            try {
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-api] Renaming campaign ",
                    ' to "',
                    '"'
                ])), e, campaignName ?? "(default)");
                return P(e, {
                    campaignName
                });
            } catch (error) {
                const n = r("getErrorSafe")(error);
                o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-api] Failed to rename campaign"
                ]))).catching(n);
                return o("WAResultOrError").makeError(n.message);
            }
        });
        return Y.apply(this, arguments);
    }
    l.createBizBroadcastCampaign = L;
    l.getBizBroadcastCampaignByAdGroupId = k;
    l.getBizBroadcastCampaignByKey = T;
    l.getBizBroadcastCampaignsByBroadcastJid = x;
    l.updateBizBroadcastCampaign = P;
    l.updateBizBroadcastCampaignMsgId = M;
    l.getAllBizBroadcastCampaigns = A;
    l.filterCampaignsByDevice = O;
    l.getAllRawCampaignsForCurrentDevice = B;
    l.getBizBroadcastCampaignsByStatus = q;
    l.getBizBroadcastCampaignsByStatuses = V;
    l.deleteBizBroadcastCampaign = G;
    l.getBizBroadcastCampaignByMsgId = j;
    l.deleteBizBroadcastCampaignsByCampaignId = Q;
    l.renameBizBroadcastCampaign = X;
}, 98);