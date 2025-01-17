import { Connection, Keypair, PublicKey } from "@solana/web3.js"
import bs58 from 'bs58';
import { Wallet } from "@project-serum/anchor";

export const rpc = ''; // ENTER YOUR RPC

export const connection = new Connection(rpc, {
  commitment: 'confirmed',
});

export const tipAcct = new PublicKey('');

export const wallet = Keypair.fromSecretKey(
    bs58.decode(
      '' // PRIV KEY OF POOL CREATOR
    )
);

export const payer = Keypair.fromSecretKey(
  bs58.decode(
      '' // PRIV KEY OF FEE PAYER!!!!!!
  )
);

export const walletconn = new Wallet(wallet);

export const RayLiqPoolv4 = new PublicKey('')