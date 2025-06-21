export interface Feature {
  userIds: Set<number>;
  isActive: boolean;
}

export class FeatureFlag {
  private featureMap: Map<string, Feature> = new Map();

  addFeature(feature: string): void {
    this.featureMap.set(feature, { isActive: false, userIds: new Set() });
  }

  disableFeature(feature: string): void {
    if (this.featureMap.has(feature)) {
      this.featureMap.set(feature, { isActive: false, userIds: new Set() });
    }
  }

  enableFeature(feature: string): void {
    const existing = this.featureMap.get(feature);
    if (existing) {
      this.featureMap.set(feature, { isActive: true, userIds: existing.userIds });
    }
  }

  enableFeatureForUsers(feature: string, userIds: number[]): void {
    const existing = this.featureMap.get(feature);
    if (existing) {
      const updatedSet = new Set(existing.userIds);
      userIds.forEach(id => updatedSet.add(id));
      this.featureMap.set(feature, { ...existing, userIds: updatedSet });
    }
  }

  isFeatureEnabled(feature: string, userId: number): boolean {
    const featureOptions = this.featureMap.get(feature);
    if (!featureOptions) return false;

    return (
      featureOptions.isActive === true || featureOptions.userIds.has(userId)
    );
  }

  listEnabledFeatures(userId: number): string[] {
    const enabled: string[] = [];
    for (const [featureName, featureOptions] of this.featureMap.entries()) {
      if (featureOptions.isActive || featureOptions.userIds.has(userId)) {
        enabled.push(featureName);
      }
    }
    return enabled;
  }
}
