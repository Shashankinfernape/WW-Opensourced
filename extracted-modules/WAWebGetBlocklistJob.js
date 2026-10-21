__d("WAWebGetBlocklistJob", [
    "WALogger",
    "WASmaxBlocklistsGetBlockListRPC",
    "WAWebJidToWid",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(t, text) {
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "fetchBlocklist failed: code ",
            " text ",
            ""
        ])), t, text).sendLogs("getBlocklist");
    }
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const itemDhash = yield o("WAWebUserPrefsMultiDevice").getBlocklistHash();
            const t = babelHelpers.extends({}, itemDhash != null && {
                itemArgs: {
                    itemDhash
                }
            });
            const n = yield o("WASmaxBlocklistsGetBlockListRPC").sendGetBlockListRPC(t);
            switch(n.name){
                case "GetBlockListResponseInternalServerError":
                    {
                        const r = n.value.errorServerErrors.value;
                        const { code, text } = r;
                        d(Number(code), text);
                        return {
                            errorCode: Number(code),
                            errorText: text
                        };
                    }
                case "GetBlockListResponseInvalidRequest":
                    {
                        const l = n.value.errorGetBlocklistErrors.value;
                        const { code, text } = l;
                        d(Number(code), text);
                        return {
                            errorCode: Number(code),
                            errorText: text
                        };
                    }
                case "GetBlockListResponseSuccessWithMatch":
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "fetchBlocklist: GetBlockListResponseSuccessWithMatch ",
                        ""
                    ])), n.value.type);
                    return {
                        type: "match"
                    };
                case "GetBlockListResponseSuccessWithMismatch":
                    {
                        const _ = n.value.listDhash;
                        const h = n.value.listItem.map((e)=>({
                                wid: o("WAWebJidToWid").userJidToUserWid(e.jid),
                                displayName: e.displayNameMixin?.displayName
                            }));
                        return {
                            type: "mismatch",
                            dirty: false,
                            dhash: _,
                            list: {
                                items: h,
                                addressingMode: "pn"
                            }
                        };
                    }
                case "GetBlockListResponseMigratedSuccessWithMismatch":
                    {
                        const y = n.value.listDhash;
                        const C = n.value.listItem.map((e)=>babelHelpers.extends({}, g(e.blocklistIds), {
                                active: e.active === "true",
                                lid: o("WAWebJidToWid").lidUserJidToUserLid(e.jid)
                            }));
                        return {
                            type: "mismatch",
                            dirty: false,
                            dhash: y,
                            list: {
                                items: C,
                                addressingMode: "lid"
                            }
                        };
                    }
                case "GetBlockListResponseForceMigratedSuccessWithMismatch":
                    {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "fetchBlocklist: received force-migrated dirty blocklist"
                        ])));
                        const b = n.value.listDhash;
                        const v = f(n.value.listItem);
                        return {
                            type: "mismatch",
                            dirty: true,
                            dhash: b,
                            list: {
                                items: v,
                                addressingMode: "lid"
                            }
                        };
                    }
                case "GetBlockListResponseCAPISuccessWithMismatch":
                    {
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "fetchBlocklist: unexpected CAPI blocklist response"
                        ]))).sendLogs("getBlocklist-unexpected-capi-response");
                        const S = n.value.listDhash;
                        const R = f(n.value.listItem);
                        return {
                            type: "mismatch",
                            dirty: false,
                            dhash: S,
                            list: {
                                items: R,
                                addressingMode: "lid"
                            }
                        };
                    }
            }
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        if (e.addressingMode === "pn") {
            return e.items.map((e)=>e.wid);
        }
        return e.items.map((e)=>e.lid);
    }
    function f(listItem) {
        return r("compactMap")(listItem, function(e) {
            const e_jid = e.jid;
            if (e_jid != null) {
                return babelHelpers.extends({}, g(e.blocklistIds), {
                    active: e.active === "true",
                    lid: o("WAWebJidToWid").lidUserJidToUserLid(e_jid)
                });
            }
            const n = g(e.blocklistIds);
            if (n?.pn != null) {
                const r = o("WAWebLidMigrationUtils").toLid(n.pn);
                if (r != null) {
                    return babelHelpers.extends({}, n, {
                        active: e.active === "true",
                        lid: r
                    });
                }
            }
            return null;
        });
    }
    function g(blocklistIds) {
        e: {
            const t = blocklistIds;
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.name === "Username" && "value" in t) {
                const n = t.value;
                return {
                    username: n.username
                };
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.name === "DisplayName" && "value" in t) {
                const r = t.value;
                return {
                    displayName: r.displayName
                };
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.name === "PnJid" && "value" in t) {
                const a = t.value;
                return {
                    pn: o("WAWebJidToWid").userJidToUserWid(a.pnJid)
                };
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.name === "GuestNameAndDisplayName" && "value" in t) {
                const i = t.value;
                return {
                    displayName: i.displayName
                };
            }
            if ((typeof t === "object" && t !== null || typeof t === "function") && t.name === "GuestName" && "value" in t || (typeof t === "object" && t !== null || typeof t === "function") && t.name === "UnknownIdentifier" && "value" in t) {
                return null;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
        }
    }
    l.getBlocklist = m;
    l.extractWids = _;
}, 98);