import { PublicKey } from '@solana/web3.js'
import { FAKE_TOKEN_MINT, PoolToken, TokenMeta, makeHeliusTokenFetcher } from 'gamba-react-ui-v2'

// Исправленный экспорт RPC для Netlify
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT || 'https://api.mainnet-beta.solana.com'

// Ваш кошелек для получения комиссии (3%)
export const PLATFORM_CREATOR_ADDRESS = new PublicKey(
  'Ax79acuZKRbZj1aznBYnKP7XepZhGjYDiLSQ2REYUrfB',
)

// Gamba explorer URL
export const EXPLORER_URL = 'https://explorer.gamba.so'

// Ссылка на ваш проект в Netlify
export const PLATFORM_SHARABLE_URL = 'my-solana-casino.netlify.app'

// Комиссия платформы (3%)
export const PLATFORM_CREATOR_FEE = 0.03 

export const MULTIPLAYER_FEE = 0.015 
export const PLATFORM_JACKPOT_FEE = 0.001 
export const PLATFORM_REFERRAL_FEE = 0.0025 

export const PLATFORM_ALLOW_REFERRER_REMOVAL = true

const lp = (tokenMint: PublicKey | string, poolAuthority?: PublicKey | string): PoolToken => ({
  token: new PublicKey(tokenMint),
  authority: poolAuthority !== undefined ? new PublicKey(poolAuthority) : undefined,
})

/**
 * Список пулов. Первым стоит SOL, чтобы он был основным.
 */
export const POOLS = [
  lp('So11111111111111111111111111111111111111112'), // Main SOL Pool
  lp(FAKE_TOKEN_MINT),
  lp('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'), // USDC
  lp('85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ'), // W
]

// Токен по умолчанию — SOL
export const DEFAULT_POOL = POOLS[0]

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

export const TOS_HTML = `
  <p><b>1. Возрастные ограничения:</b> Вам должно быть не менее 18 лет.</p>
  <p><b>2. Ответственность:</b> Соблюдайте местные законы вашей страны.</p>
  <p><b>3. Риски:</b> Игры связаны с финансовым риском. Не играйте на последние деньги.</p>
  <p><b>4. Честность:</b> Все игры работают на смарт-контрактах Solana (Gamba SDK).</p>
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
export const FEATURED_GAME_INLINE = true 
export const FEATURED_GAME_ID: string | undefined = 'dice'
 
