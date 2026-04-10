import { PublicKey } from '@solana/web3.js'
import { FAKE_TOKEN_MINT, PoolToken, TokenMeta, makeHeliusTokenFetcher } from 'gamba-react-ui-v2'

// Get RPC from the .env file or default to the public RPC.
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? 'https://api.mainnet-beta.solana.com'

// Solana address that will receive fees when somebody plays on this platform
// Кошелек обновлен на ваш: Ax79acuZKRbZj1aznBYnKP7XepZhGjYDiLSQ2REYUrfB
export const PLATFORM_CREATOR_ADDRESS = new PublicKey(
  'Ax79acuZKRbZj1aznBYnKP7XepZhGjYDiLSQ2REYUrfB',
)

// Gamba explorer URL - Appears in RecentPlays
export const EXPLORER_URL = 'https://explorer.gamba.so'

// Platform URL - Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'play.gamba.so'

// Creator fee (in %)
// Комиссия поднята до 3%
export const PLATFORM_CREATOR_FEE = 0.03 

export const MULTIPLAYER_FEE = 0.015 

// Jackpot fee (in %)
export const PLATFORM_JACKPOT_FEE = 0.001 

// Referral fee (in %)
export const PLATFORM_REFERRAL_FEE = 0.0025 

/** If the user should be able to revoke an invite after they've accepted an invite */
export const PLATFORM_ALLOW_REFERRER_REMOVAL = true

// Just a helper function
const lp = (tokenMint: PublicKey | string, poolAuthority?: PublicKey | string): PoolToken => ({
  token: new PublicKey(tokenMint),
  authority: poolAuthority !== undefined ? new PublicKey(poolAuthority) : undefined,
})

/**
 * List of pools supported by this platform
 */
export const POOLS = [
  lp(FAKE_TOKEN_MINT),
  lp('So11111111111111111111111111111111111111112'),
  lp('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
  lp('85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ'),
]

// The default token to be selected
export const DEFAULT_POOL = POOLS[1] // Установлен SOL по умолчанию

/**
 * List of token metadata for the supported tokens
 */
export const TOKEN_METADATA: (Partial<TokenMeta> & {mint: PublicKey})[] = [
  {
    mint: FAKE_TOKEN_MINT,
    name: 'Fake',
    symbol: 'FAKE',
    image: '/fakemoney.png',
    baseWager: 1e9,
    decimals: 9,
    usdPrice: 0,
  },
  {
    mint: new PublicKey('85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ'),
    name: 'W',
    symbol: 'Wormhole',
    image: 'https://wormhole.com/token.png',
    baseWager: 1e6,
    decimals: 6,
    usdPrice: 0,
  },
]

/** HTML to display to user that they need to accept in order to continue */
export const TOS_HTML = `
  <p><b>1. Возрастные ограничения:</b> Вам должно быть не менее 18 лет.</p>
  <p><b>2. Ответственность:</b> Соблюдайте местные законы.</p>
  <p><b>3. Риски:</b> Игры связаны с риском; выигрыш не гарантирован.</p>
  <p><b>4. Честная игра:</b> Все игры проводятся прозрачно через смарт-контракты.</p>
`

export const TOKEN_METADATA_FETCHER = (
  () => {
    if (import.meta.env.VITE_HELIUS_API_KEY) {
      return makeHeliusTokenFetcher(
        import.meta.env.VITE_HELIUS_API_KEY,
        { dollarBaseWager: 1 },
      )
    }
  }
)()

export const ENABLE_LEADERBOARD = true 
export const ENABLE_TROLLBOX = false 

/** If true, the featured game is fully playable inline on the dashboard */
export const FEATURED_GAME_INLINE = true 
export const FEATURED_GAME_ID: string | undefined = 'dice' // Установлена игра Dice как главная
