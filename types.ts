
export enum View {
  WELCOME = 'welcome',
  MAIN = 'main',
  SERVERS = 'servers',
  ACCOUNT = 'account',
  SETTINGS = 'settings'
}

export interface Server {
  id: string;
  name: string;
  city: string;
  ping: number;
  flag: string;
  recommended?: boolean;
}

export interface User {
  name: string;
  email: string;
  memberSince: string;
  usage: {
    totalGb: number;
    history: { date: string; amount: number }[];
  };
}

export enum Protocol {
  WIREGUARD = 'WireGuard',
  OPENVPN = 'OpenVPN',
  IKEV2 = 'IKEv2'
}
