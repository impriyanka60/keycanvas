declare module 'keycloak-js' {
  export interface KeycloakConfig {
    url: string;
    realm: string;
    clientId: string;
  }
  export default class Keycloak {
    constructor(config?: KeycloakConfig);
    init(options?: any): Promise<boolean>;
    // Add other methods as needed
  }
}