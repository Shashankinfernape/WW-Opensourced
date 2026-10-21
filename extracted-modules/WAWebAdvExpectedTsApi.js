__d("WAWebAdvExpectedTsApi", [
    "WATimeUtils"
], function(t, n, r, o, a, i, l) {
    function e({ deviceRecord, incomingTs, lastDeviceJobTs }) {
        const currentTs = deviceRecord?.timestamp;
        if (currentTs == null) {
            return {
                expectedTs: undefined,
                expectedTsLastDeviceJobTs: undefined,
                expectedTsUpdateTs: undefined
            };
        }
        let currentExpectedTs;
        let currentExpectedTsLastDeviceJobTs;
        let currentExpectedTsUpdateTs;
        if (deviceRecord != null && !deviceRecord.deleted) {
            currentExpectedTs = deviceRecord.expectedTs;
            currentExpectedTsLastDeviceJobTs = deviceRecord.expectedTsLastDeviceJobTs;
            currentExpectedTsUpdateTs = deviceRecord.expectedTsUpdateTs;
        }
        return s({
            currentExpectedTs,
            currentExpectedTsLastDeviceJobTs,
            currentExpectedTsUpdateTs,
            currentLastDeviceJobTs: lastDeviceJobTs,
            currentTs,
            incomingExpectedTs: incomingTs
        });
    }
    function s({ currentExpectedTs, currentExpectedTsLastDeviceJobTs, currentExpectedTsUpdateTs, currentLastDeviceJobTs, currentTs, incomingExpectedTs }) {
        const s = {
            expectedTs: currentExpectedTs,
            expectedTsLastDeviceJobTs: currentExpectedTsLastDeviceJobTs,
            expectedTsUpdateTs: currentExpectedTsUpdateTs
        };
        if (!(currentTs >= incomingExpectedTs || currentExpectedTs != null && currentExpectedTs >= incomingExpectedTs)) {
            s.expectedTs = incomingExpectedTs;
            s.expectedTsLastDeviceJobTs = currentLastDeviceJobTs ?? undefined;
            if (currentExpectedTs == null || currentTs >= currentExpectedTs) {
                s.expectedTsUpdateTs = o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
            }
        }
        return s;
    }
    function u(e, t, n, r) {
        if (n == null || n.deleted || n.expectedTs == null) {
            return false;
        }
        return e >= n.expectedTs || e < n.expectedTs && t === n.expectedTs && r != null && (n.expectedTsLastDeviceJobTs == null || r > n.expectedTsLastDeviceJobTs);
    }
    l.computeExpectedTsForDeviceRecord = e;
    l.computeNewExpectedTs = s;
    l.shouldClearExpectedTs = u;
}, 98);