var FeatureFlag = /** @class */ (function () {
    function FeatureFlag() {
        this.featureMap = new Map();
    }
    FeatureFlag.prototype.addFeature = function (feature) {
        this.featureMap.set(feature, { isActive: true });
    };
    FeatureFlag.prototype.disableFeature = function (feature) {
        this.featureMap.set(feature, { isActive: false });
    };
    FeatureFlag.prototype.enableFeature = function (feature) {
        this.featureMap.set(feature, { isActive: true });
    };
    FeatureFlag.prototype.enableFeatureForUsers = function (feature, userIds) {
    };
    FeatureFlag.prototype.isFeatureEnabled = function (feature, userId) {
        var featureOptions = this.featureMap.get(feature);
        if (featureOptions.isActive === true) {
            var user = featureOptions.userIds.find(function (user) { return user === userId; });
            if (user) {
                return "feature is enabled for this user";
            }
            else {
                return "feature is not enable for this user/ user does not exist";
            }
        }
        else {
            throw new Error("feature is disabled");
        }
    };
    FeatureFlag.prototype.listEnabledFeatures = function (userId) {
        return this.featureMap.forEach(function (x) { return x; });
    };
    return FeatureFlag;
}());
var feature = new FeatureFlag();
feature.listEnabledFeatures(1);
