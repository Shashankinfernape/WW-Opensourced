__d("WAWebBroadcastKeyDistribution", [], function(t, n, r, o, a, i) {
    function e(e) {
        const recipientsByServer = new Map;
        e.forEach(({ server, user })=>{
            if (!recipientsByServer.has(server)) {
                recipientsByServer.set(server, new Set);
            }
            recipientsByServer.get(server)?.add(user);
        });
        return {
            recipientsByServer
        };
    }
    function l({ server, user }, t) {
        const a = t.recipientsByServer.get(server);
        return a?.has(user) ?? false;
    }
    function s(t, n) {
        const r = t.filter((e)=>!e.isHosted());
        const o = e(n);
        return r.filter((e)=>l(e, o));
    }
    function u(e, t, n) {
        const r = s(e, t);
        return {
            rotateKey: n.rotateKey,
            skDistribList: r,
            participantList: []
        };
    }
    function c(e, t, n) {
        const participantList = [];
        const o = [];
        let senderKeyHitCount = 0;
        const i = s(e, t);
        i.forEach((e)=>{
            const t = String(e);
            const i = n.senderKey.has(t);
            if (i) {
                participantList.push(e);
                senderKeyHitCount++;
            } else {
                o.push(e);
            }
        });
        return {
            participantList,
            skDistribList: o,
            senderKeyHitCount
        };
    }
    function d({ allDeviceList, extendedRecipients, senderKeyHitCount, storedKeyCount }) {
        if (senderKeyHitCount >= storedKeyCount) {
            return null;
        }
        const a = s(allDeviceList, extendedRecipients);
        return {
            rotateKey: true,
            skDistribList: a,
            participantList: []
        };
    }
    i.handleFullDistribution = u;
    i.handlePartialDistribution = c;
    i.checkAndHandleSecurityRotation = d;
}, 66);