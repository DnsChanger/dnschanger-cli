export interface Interface {
  name: string;
  macAddress: string | undefined;
  ipAddress: string | undefined;
  vendor: string;
  model: string;
  type: string;
  netmask: string | null;
  gatewayIp: string | null;
}
