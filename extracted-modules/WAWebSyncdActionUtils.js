__d("WAWebSyncdActionUtils", [
    "WALogger",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdConst",
    "encodeProtobuf"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(e, t) {
        return JSON.stringify([
            e
        ].concat(t));
    }
    function c(t, n) {
        try {
            const r = JSON.parse(n);
            if (r.length < 1) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] invalid empty index for collection ",
                    ""
                ])), t);
                return null;
            }
            return r;
        } catch (e) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[syncd] invalid index for collection ",
                ""
            ])), t);
            return null;
        }
    }
    function d(e, t) {
        const n = c(e, t);
        return n?.[o("WAWebSyncdConst").MUTATION_NAME_INDEX];
    }
    function m({ action, collection, indexArgs, operation, timestamp, value, version }) {
        return {
            collection,
            index: u(action, indexArgs),
            binarySyncAction: o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, babelHelpers.extends({}, value, {
                timestamp
            })).readBuffer(),
            version,
            operation,
            timestamp,
            action
        };
    }
    function p({ fromMe, id, participant, remoteJid }) {
        return [
            remoteJid,
            id,
            fromMe ? "1" : "0",
            participant != null && !fromMe ? participant : "0"
        ];
    }
    l.buildIndex = u;
    l.parseIndex = c;
    l.getMutationNameFromIndex = d;
    l.buildPendingMutation = m;
    l.buildMessageKey = p;
}, 98);