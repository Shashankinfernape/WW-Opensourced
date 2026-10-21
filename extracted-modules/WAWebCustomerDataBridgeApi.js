__d("WAWebCustomerDataBridgeApi", [
    "Promise",
    "WAWebCustomerDataCollection",
    "WAWebCustomerDataModel",
    "WAWebMobilePlatforms",
    "WAWebSchemaCustomerData"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        restoreCustomerData: function() {
            if (!o("WAWebMobilePlatforms").isSMB() || !o("WAWebSchemaCustomerData").canUseCustomerDataTable()) {
                return (e || (e = n("Promise"))).resolve();
            }
            return o("WAWebSchemaCustomerData").getCustomerDataTable().all().then((e)=>{
                o("WAWebCustomerDataCollection").CustomerDataCollection.initializeFromCache(e);
            });
        },
        syncCustomerData: function({ record }) {
            o("WAWebCustomerDataCollection").CustomerDataCollection.add(new (o("WAWebCustomerDataModel")).CustomerData(babelHelpers.extends({}, record, {
                id: record.chatJid
            })), {
                merge: true
            });
        },
        removeCustomerDataFromCollection: function({ chatJid }) {
            o("WAWebCustomerDataCollection").CustomerDataCollection.purgeCustomerDataByChatJid(chatJid);
        }
    };
    l.CustomerDataBridgeApi = s;
}, 98);