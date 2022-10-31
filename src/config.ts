export type Token = {
  /** display name of the token */
  name: string;
  /** secret contract address of the token */
  address: string;
  /** secret contract code hash of the token */
  code_hash: string;
  /** logo of the token */
  image: string;
  /** decimals of the token */
  decimals: number;
  /** coingeck id to get usd price */
  coingecko_id: string;
  /** how to deposit this token into Secret Network */
  deposits: Deposit[];
  /** how to withdraw this token out of Secret Network */
  withdrawals: Withdraw[];
};

export type Deposit = {
  /** display name of the source chain */
  source_chain_name: string;
  /** denom on the other chain */
  from_denom: string;
};

export type Withdraw = {
  /** display name of the target chain */
  target_chain_name: string;
  /** denom on Secret Network */
  from_denom: string;
};

export const tokens: Token[] = [
  {
    name: "SCRT",
    address: "secret18vd8fpwxzck93qlwghaj6arh4p7c5n8978vsyg",
    code_hash:
      "9587d60b8e6b078ace12014ceeee089530b9fabcd76535d93666a6c127ad8813",
    image: "/scrt.svg",
    decimals: 6,
    coingecko_id: "secret",
    deposits: [
      {
      source_chain_name: "Test",
      from_denom: "uscrt",
      },
    ],
    withdrawals: [
      {
        target_chain_name: "Test",
        from_denom: "uscrt",
      },
    ],
  },
];

export type Chain = {
  /** display name of the chain */
  chain_name: string;
  /** channel_id on the chain */
  deposit_channel_id: string;
  /** gas limit for ibc transfer from the chain to Secret Network */
  deposit_gas: number;
  /** channel_id on Secret Network */
  withdraw_channel_id: string;
  /** gas limit for ibc transfer from Secret Network to the chain */
  withdraw_gas: number;
  /** bech32 prefix of addresses on the chain */
  bech32_prefix: string;
  /** logo of the chain */
  chain_image: string;
  /** chain-id of the chain */
  chain_id: string;
  /** lcd url of the chain */
  lcd: string;
  /** rpc url of the chain */
  rpc: string;
  /** explorer link for accounts */
  explorer_account: string;
  /** explorer link for txs */
  explorer_tx?: string;
};

export const chains: { [chain_name: string]: Chain } = {
  "Secret Network": {
    chain_name: "Secret Network",
    deposit_channel_id: "",
    deposit_gas: 0,
    withdraw_channel_id: "",
    withdraw_gas: 0,
    chain_id: "pulsar-2",
    bech32_prefix: "secret",
    lcd: "https://pulsar-2.api.trivium.network:1317",
    rpc: "https://pulsar-2.api.trivium.network:9091", // gRPC-web
    chain_image: "/scrt.svg",
    explorer_account: "https://secretnodes.com/secret/accounts/",
  },
};
