import { FeatureFlag } from "./featureflag.js";

describe('FeatureFlag system', () => {
    let flags: FeatureFlag;
  
    beforeEach(() => {
      flags = new FeatureFlag();
    });
  
    test('addFeature adds a feature in disabled state', () => {
      flags.addFeature("dark-mode");
      expect(flags.isFeatureEnabled("dark-mode", 1)).toBe(false);
    });
  
    test('enableFeature enables the feature for all users', () => {
      flags.addFeature("dark-mode");
      flags.enableFeature("dark-mode");
      expect(flags.isFeatureEnabled("dark-mode", 999)).toBe(true);
    });
  
    test('disableFeature disables the feature for all users', () => {
      flags.addFeature("dark-mode");
      flags.enableFeature("dark-mode");
      flags.disableFeature("dark-mode");
      expect(flags.isFeatureEnabled("dark-mode", 1)).toBe(false);
    });
  
    test('enableFeatureForUsers works correctly', () => {
      flags.addFeature("new-ui");
      flags.enableFeatureForUsers("new-ui", [42, 77]);
      expect(flags.isFeatureEnabled("new-ui", 42)).toBe(true);
      expect(flags.isFeatureEnabled("new-ui", 77)).toBe(true);
      expect(flags.isFeatureEnabled("new-ui", 12)).toBe(false);
    });
  
    test('listEnabledFeatures returns all features enabled for a user', () => {
      flags.addFeature("dark-mode");
      flags.addFeature("new-ui");
      flags.addFeature("beta-feature");
  
      flags.enableFeature("dark-mode");
      flags.enableFeatureForUsers("new-ui", [42]);
      flags.enableFeatureForUsers("beta-feature", [77]);
  
      expect(flags.listEnabledFeatures(42).sort()).toEqual(["dark-mode", "new-ui"]);
      expect(flags.listEnabledFeatures(77).sort()).toEqual(["dark-mode", "beta-feature"]);
      expect(flags.listEnabledFeatures(999)).toEqual(["dark-mode"]);
    });
  
    test('isFeatureEnabled returns false for nonexistent features', () => {
      expect(flags.isFeatureEnabled("nonexistent", 1)).toBe(false);
    });
  });