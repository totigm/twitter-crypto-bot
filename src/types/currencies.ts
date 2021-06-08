export interface Coin {
    symbol: Symbol;
    name: Name;
}

export type Symbol =
    | 'BTC'
    | 'ETH'
    | 'BNB'
    | 'ADA'
    | 'DOGE'
    | 'XRP'
    | 'DOT'
    | 'USDC'
    | 'ICP'
    | 'UNI'
    | 'BCH'
    | 'LTC'
    | 'LINK'
    | 'MATIC'
    | 'XLM'
    | 'ETC'
    | 'BUSD'
    | 'SOL'
    | 'VET'
    | 'THETA'
    | 'TRX'
    | 'FIL'
    | 'EOS'
    | 'AAVE'
    | 'DAI'
    | 'XMR'
    | 'SHIB'
    | 'NEO'
    | 'MKR'
    | 'FTT'
    | 'KSM'
    | 'XTZ'
    | 'ATOM'
    | 'CAKE'
    | 'ALGO'
    | 'BTT'
    | 'RUNE'
    | 'LUNA'
    | 'AVAX'
    | 'COMP'
    | 'HBAR'
    | 'DASH'
    | 'EGLD'
    | 'WAVES'
    | 'YFI'
    | 'DCR'
    | 'ZEC'
    | 'XEM'
    | 'SNX'
    | 'CHZ'
    | 'SUSHI'
    | 'TFUEL'
    | 'PAX'
    | 'HOT'
    | 'MANA'
    | 'NEAR'
    | 'ZIL'
    | 'STX'
    | 'QTUM'
    | 'TUSD'
    | 'HNT'
    | 'BAT'
    | 'ZEN'
    | 'BTG'
    | 'ONE'
    | 'ENJ'
    | 'DGB'
    | 'GRT'
    | 'ONT'
    | 'NANO'
    | 'BNT'
    | 'OMG'
    | 'FTM'
    | 'UMA'
    | 'MDX'
    | 'SC'
    | 'ZRX'
    | 'ANKR'
    | 'RVN'
    | 'ICX'
    | 'CELO'
    | 'BAKE'
    | 'CRV'
    | 'IOST'
    | 'RSR'
    | 'LSK'
    | 'AR'
    | '1INCH'
    | 'REN'
    | 'RLC'
    | 'WRX'
    | 'CKB'
    | 'LRC'
    | 'DENT'
    | 'XVS'
    | 'KNC'
    | 'VTHO'
    | 'IOTX'
    | 'CFX'
    | 'REEF'
    | 'BTCST'
    | 'STORJ'
    | 'SKL'
    | 'REP'
    | 'OCEAN'
    | 'ALPHA'
    | 'CTSI'
    | 'ONG'
    | 'INJ'
    | 'OXT'
    | 'FUN'
    | 'SRM'
    | 'STRAX'
    | 'KAVA'
    | 'STMX'
    | 'ARDR'
    | 'BAL'
    | 'CVC'
    | 'OGN'
    | 'FET'
    | 'SAND'
    | 'KMD'
    | 'CELR'
    | 'HIVE'
    | 'NMR'
    | 'SXP'
    | 'MCO'
    | 'NKN'
    | 'BAND'
    | 'WIN'
    | 'MTL'
    | 'ANT'
    | 'BTS'
    | 'JST'
    | 'WAN'
    | 'RIF'
    | 'AVA'
    | 'UTK'
    | 'DODO'
    | 'COTI'
    | 'PUNDIX'
    | 'MIR'
    | 'SUSD'
    | 'AXS'
    | 'PERP'
    | 'ORN'
    | 'TKO'
    | 'LINA'
    | 'TLM'
    | 'AUDIO'
    | 'POLS'
    | 'TWT'
    | 'FORTH'
    | 'TOMO'
    | 'WNXM'
    | 'SFP'
    | 'PAXG'
    | 'BADGER'
    | 'DNT'
    | 'AION'
    | 'SUN'
    | 'ALICE'
    | 'ROSE'
    | 'EPS'
    | 'MFT'
    | 'TROY'
    | 'FIRO'
    | 'BURGER'
    | 'TRB'
    | 'IRIS'
    | 'SUPER'
    | 'DIA'
    | 'LIT'
    | 'FLM'
    | 'RAMP'
    | 'CHR'
    | 'YFII'
    | 'DATA'
    | 'AKRO'
    | 'STPT'
    | 'BZRX'
    | 'LTO'
    | 'BEAM'
    | 'WTC'
    | 'CTK'
    | 'MBL'
    | 'DEGO'
    | 'BLZ'
    | 'NULS'
    | 'OM'
    | 'TRU'
    | 'POND'
    | 'VITE'
    | 'ARPA'
    | 'BAR'
    | 'MITH'
    | 'DUSK'
    | 'BEL'
    | 'SLP'
    | 'UNFI'
    | 'HC'
    | 'CTXC'
    | 'COS'
    | 'HARD'
    | 'FIO'
    | 'KEY'
    | 'WING'
    | 'DOCK'
    | 'PNT'
    | 'PERL'
    | 'TCT'
    | 'GTO'
    | 'MDT'
    | 'PSG'
    | 'AUTO'
    | 'DREP'
    | 'COCOS'
    | 'ACM'
    | 'FIS'
    | 'JUV'
    | 'ASR'
    | 'OG'
    | 'USDS'
    | 'BTCDOWN'
    | 'ATM'
    | 'BNBUP'
    | 'BTCUP'
    | 'ETHUP'
    | 'ADAUP'
    | 'DOTUP'
    | 'XRPUP'
    | 'ADADOWN'
    | 'LTCUP'
    | 'ETHBULL'
    | 'BNBDOWN'
    | 'LINKUP'
    | 'ETHDOWN'
    | 'SUSHIUP'
    | 'AAVEUP'
    | 'XRPDOWN'
    | 'AAVEDOWN'
    | 'UNIUP'
    | 'YFIDOWN'
    | 'YFIUP'
    | 'XLMUP'
    | 'SXPUP'
    | 'SXPDOWN'
    | 'DOTDOWN'
    | 'XRPBULL'
    | 'BULL'
    | 'TRXUP'
    | 'NBS'
    | 'UNIDOWN'
    | 'LINKDOWN'
    | 'XTZUP'
    | 'EOSBULL'
    | 'BEAR'
    | 'FILUP'
    | 'EOSDOWN'
    | 'BNBBULL'
    | 'EOSBEAR'
    | 'TRXDOWN'
    | 'XLMDOWN'
    | 'VEN'
    | 'ETHBEAR'
    | 'FILDOWN'
    | 'LTCDOWN'
    | 'XTZDOWN'
    | 'XRPBEAR'
    | 'BNBBEAR'
    | 'NPXS'
    | 'BKRW'
    | 'BCC';

export type Name =
    | 'Bitcoin'
    | 'Ethereum'
    | 'Binance Coin'
    | 'Cardano'
    | 'Dogecoin'
    | 'XRP'
    | 'Polkadot'
    | 'USD Coin'
    | 'Internet Computer'
    | 'Universe'
    | 'Bitcoin Cash'
    | 'Litecoin'
    | 'Chainlink'
    | 'Polygon'
    | 'Stellar'
    | 'Ethereum Classic'
    | 'Binance USD'
    | 'Solana'
    | 'VeChain'
    | 'THETA'
    | 'TRON'
    | 'Filecoin'
    | 'EOS'
    | 'Aave'
    | 'Dai'
    | 'Monero'
    | 'SHIBA INU'
    | 'Neo'
    | 'Maker'
    | 'FTX Token'
    | 'Kusama'
    | 'Tezos'
    | 'Cosmos'
    | 'PancakeSwap'
    | 'Algorand'
    | 'BitTorrent'
    | 'THORChain (ERC20)'
    | 'Luna Coin'
    | 'Avalanche'
    | 'Compound Coin'
    | 'Hedera Hashgraph'
    | 'Dash'
    | 'Elrond'
    | 'Waves'
    | 'yearn.finance'
    | 'Decred'
    | 'Zcash'
    | 'NEM'
    | 'Synthetix'
    | 'Chiliz'
    | 'SushiSwap'
    | 'Theta Fuel'
    | 'Paxos Standard'
    | 'Hydro Protocol'
    | 'Decentraland'
    | 'NEAR Protocol'
    | 'Zilliqa'
    | 'Stox'
    | 'Qtum'
    | 'TrueUSD'
    | 'Helium'
    | 'Basic Attention Token'
    | 'Horizen'
    | 'Bitcoin Gold'
    | 'BigONE Token'
    | 'Enjin Coin'
    | 'DigiByte'
    | 'Golden Ratio Token'
    | 'Ontology'
    | 'Nano'
    | 'Bancor'
    | 'OMG Network'
    | 'Fitmin Finance'
    | 'UMA'
    | 'Mandala Exchange Token'
    | 'Siacoin'
    | '0x'
    | 'Ankr'
    | 'Ravencoin'
    | 'ICON'
    | 'Celo'
    | 'BakeryToken'
    | 'Curve DAO Token'
    | 'IOST'
    | 'Reserve Rights'
    | 'Lisk'
    | 'Arweave'
    | '1inch'
    | 'Ren'
    | 'iExec RLC'
    | 'WazirX'
    | 'Nervos Network'
    | 'Loopring'
    | 'Dent'
    | 'Venus'
    | 'Kyber Network Crystal Legacy'
    | 'VeThor Token'
    | 'IoTeX'
    | 'Conflux Network'
    | 'Reef'
    | 'Bitcoin Standard Hashrate Token'
    | 'Storj'
    | 'SKALE Network'
    | 'Augur'
    | 'Ocean Protocol'
    | 'Alpha Finance Lab'
    | 'Cartesi'
    | 'SoMee.Social'
    | 'Injective Protocol'
    | 'Orchid'
    | 'FUNToken'
    | 'Serum'
    | 'Stratis'
    | 'Kava.io'
    | 'StormX'
    | 'Ardor'
    | 'Balancer'
    | 'Civic'
    | 'Origin Protocol'
    | 'Fetch.ai'
    | 'The Sandbox'
    | 'Komodo'
    | 'Celer Network'
    | 'Hive'
    | 'Numeraire'
    | 'Swipe'
    | 'MCO'
    | 'NKN'
    | 'Band Protocol'
    | 'WINkLink'
    | 'Metal'
    | 'ANTcoin'
    | 'Bat True Share'
    | 'JUST'
    | 'Wanchain'
    | 'RSK Infrastructure Framework'
    | 'Travala.com'
    | 'Utrust'
    | 'DODO'
    | 'COTI'
    | 'Pundi X[new]'
    | 'MIR COIN'
    | 'sUSD'
    | 'Axie Infinity'
    | 'Perpetual Protocol'
    | 'Orion Protocol'
    | 'Toko Token'
    | 'LINA'
    | 'Alien Worlds'
    | 'Audius'
    | 'Polkastarter'
    | 'Trust Wallet Token'
    | 'Ampleforth Governance Token'
    | 'TomoChain'
    | 'Wrapped NXM'
    | 'SafePal'
    | 'PAX Gold'
    | 'Badger DAO'
    | 'district0x'
    | 'Aion'
    | 'SUN'
    | 'MyNeighborAlice'
    | 'Oasis Network'
    | 'Epanus'
    | 'Hifi Finance'
    | 'TROY'
    | 'Firo'
    | 'Burger Swap'
    | 'Tellor'
    | 'IRISnet'
    | 'SuperCoin'
    | 'DIA'
    | 'Lition'
    | 'Flamingo'
    | 'RAMP'
    | 'Chromia'
    | 'DFI.Money'
    | 'Streamr'
    | 'Akropolis'
    | 'Standard Tokenization Protocol'
    | 'bZx Protocol'
    | 'LTO Network'
    | 'Beam'
    | 'Waltonchain'
    | 'CertiK'
    | 'MovieBloc'
    | 'Dego Finance'
    | 'Bluzelle'
    | 'NULS'
    | 'MANTRA DAO'
    | 'Truebit'
    | 'Marlin'
    | 'VITE'
    | 'ARPA Chain'
    | 'FC Barcelona Fan Token'
    | 'Mithril'
    | 'Dusk Network'
    | 'Bella Protocol'
    | 'Small Love Potion'
    | 'Uniswap Finance'
    | 'HyperCash'
    | 'Cortex'
    | 'Contentos'
    | 'HARD Protocol'
    | 'FIO Protocol'
    | 'MoMo KEY'
    | 'WingShop'
    | 'Dock'
    | 'Penta'
    | 'Perlin'
    | 'TokenClub'
    | 'Gifto'
    | 'Measurable Data Token'
    | 'Paris Saint-Germain Fan Token'
    | 'Cube'
    | 'Drep [new]'
    | 'Cocos-BCX'
    | 'Actinium'
    | 'Stafi'
    | 'Juventus Fan Token'
    | 'AS Roma Fan Token'
    | 'OG Fan Token'
    | 'Stably USD'
    | 'BTCDOWN'
    | 'Atletico De Madrid Fan Token'
    | 'BNBUP'
    | 'BTCUP'
    | 'ETHUP'
    | 'ADAUP'
    | 'DOTUP'
    | 'XRPUP'
    | 'ADADOWN'
    | 'LTCUP'
    | '3X Long Ethereum Token'
    | 'BNBDOWN'
    | 'LINKUP'
    | 'ETHDOWN'
    | 'SUSHIUP'
    | 'AAVEUP'
    | 'XRPDOWN'
    | 'AAVEDOWN'
    | 'UNIUP'
    | 'YFIDOWN'
    | 'YFIUP'
    | 'XLMUP'
    | 'SXPUP'
    | 'SXPDOWN'
    | 'DOTDOWN'
    | '3x Long XRP Token'
    | 'BuySell'
    | 'TRXUP'
    | 'New BitShares'
    | 'UNIDOWN'
    | 'LINKDOWN'
    | 'XTZUP'
    | '3x Long EOS Token'
    | 'BEAR Coin'
    | 'FILUP'
    | 'EOSDOWN'
    | '3X Long BNB Token'
    | '3x Short EOS Token'
    | 'TRXDOWN'
    | 'XLMDOWN'
    | 'ImpulseVen'
    | '3X Short Ethereum Token'
    | 'FILDOWN'
    | 'LTCDOWN'
    | 'XTZDOWN'
    | '3x Short XRP Token'
    | '3X Short BNB Token'
    | 'Pundi X[old]'
    | 'Binance KRW'
    | 'Basiscoin Cash';

export enum Currencies {
    'BTC' = 'Bitcoin',
    'ETH' = 'Ethereum',
    'BNB' = 'Binance Coin',
    'ADA' = 'Cardano',
    'DOGE' = 'Dogecoin',
    'XRP' = 'XRP',
    'DOT' = 'Polkadot',
    'USDC' = 'USD Coin',
    'ICP' = 'Internet Computer',
    'UNI' = 'Universe',
    'BCH' = 'Bitcoin Cash',
    'LTC' = 'Litecoin',
    'LINK' = 'Chainlink',
    'MATIC' = 'Polygon',
    'XLM' = 'Stellar',
    'ETC' = 'Ethereum Classic',
    'SOL' = 'Solana',
    'BUSD' = 'Binance USD',
    'VET' = 'VeChain',
    'THETA' = 'THETA',
    'FIL' = 'Filecoin',
    'TRX' = 'TRON',
    'EOS' = 'EOS',
    'AAVE' = 'Aave',
    'XMR' = 'Monero',
    'DAI' = 'Dai',
    'SHIB' = 'SHIBA INU',
    'MKR' = 'Maker',
    'NEO' = 'Neo',
    'FTT' = 'FTX Token',
    'XTZ' = 'Tezos',
    'CAKE' = 'PancakeSwap',
    'ATOM' = 'Cosmos',
    'ALGO' = 'Algorand',
    'KSM' = 'Kusama',
    'BTT' = 'BitTorrent',
    'LUNA' = 'Luna Coin',
    'RUNE' = 'THORChain (ERC20)',
    'AVAX' = 'Avalanche',
    'COMP' = 'Compound Coin',
    'HBAR' = 'Hedera Hashgraph',
    'DASH' = 'Dash',
    'WAVES' = 'Waves',
    'EGLD' = 'Elrond',
    'YFI' = 'yearn.finance',
    'ZEC' = 'Zcash',
    'DCR' = 'Decred',
    'XEM' = 'NEM',
    'SNX' = 'Synthetix',
    'SUSHI' = 'SushiSwap',
    'CHZ' = 'Chiliz',
    'TFUEL' = 'Theta Fuel',
    'PAX' = 'Paxos Standard',
    'HOT' = 'Hydro Protocol',
    'NEAR' = 'NEAR Protocol',
    'MANA' = 'Decentraland',
    'ZIL' = 'Zilliqa',
    'STX' = 'Stox',
    'QTUM' = 'Qtum',
    'ZEN' = 'Horizen',
    'HNT' = 'Helium',
    'BTG' = 'Bitcoin Gold',
    'BAT' = 'Basic Attention Token',
    'TUSD' = 'TrueUSD',
    'ONE' = 'BigONE Token',
    'ENJ' = 'Enjin Coin',
    'DGB' = 'DigiByte',
    'GRT' = 'Golden Ratio Token',
    'ONT' = 'Ontology',
    'NANO' = 'Nano',
    'FTM' = 'Fitmin Finance',
    'BNT' = 'Bancor',
    'OMG' = 'OMG Network',
    'UMA' = 'UMA',
    'SC' = 'Siacoin',
    'ZRX' = '0x',
    'MDX' = 'Mandala Exchange Token',
    'ANKR' = 'Ankr',
    'RVN' = 'Ravencoin',
    'ICX' = 'ICON',
    'CELO' = 'Celo',
    'BAKE' = 'BakeryToken',
    'CRV' = 'Curve DAO Token',
    'IOST' = 'IOST',
    'RSR' = 'Reserve Rights',
    'LSK' = 'Lisk',
    'AR' = 'Arweave',
    '1INCH' = '1inch',
    'REN' = 'Ren',
    'RLC' = 'iExec RLC',
    'WRX' = 'WazirX',
    'XVS' = 'Venus',
    'LRC' = 'Loopring',
    'CKB' = 'Nervos Network',
    'DENT' = 'Dent',
    'KNC' = 'Kyber Network Crystal Legacy',
    'VTHO' = 'VeThor Token',
    'CFX' = 'Conflux Network',
    'REEF' = 'Reef',
    'BTCST' = 'Bitcoin Standard Hashrate Token',
    'STORJ' = 'Storj',
    'SKL' = 'SKALE Network',
    'REP' = 'Augur',
    'ALPHA' = 'Alpha Finance Lab',
    'IOTX' = 'IoTeX',
    'OCEAN' = 'Ocean Protocol',
    'ONG' = 'SoMee.Social',
    'CTSI' = 'Cartesi',
    'INJ' = 'Injective Protocol',
    'SRM' = 'Serum',
    'FUN' = 'FUNToken',
    'ARDR' = 'Ardor',
    'STMX' = 'StormX',
    'STRAX' = 'Stratis',
    'OXT' = 'Orchid',
    'KAVA' = 'Kava.io',
    'BAL' = 'Balancer',
    'FET' = 'Fetch.ai',
    'SAND' = 'The Sandbox',
    'OGN' = 'Origin Protocol',
    'CELR' = 'Celer Network',
    'CVC' = 'Civic',
    'KMD' = 'Komodo',
    'HIVE' = 'Hive',
    'NMR' = 'Numeraire',
    'SXP' = 'Swipe',
    'NKN' = 'NKN',
    'MCO' = 'MCO',
    'WIN' = 'WINkLink',
    'BAND' = 'Band Protocol',
    'BTS' = 'Bat True Share',
    'ANT' = 'ANTcoin',
    'MTL' = 'Metal',
    'JST' = 'JUST',
    'AVA' = 'Travala.com',
    'WAN' = 'Wanchain',
    'RIF' = 'RSK Infrastructure Framework',
    'UTK' = 'Utrust',
    'DODO' = 'DODO',
    'COTI' = 'COTI',
    'POLS' = 'Polkastarter',
    'PUNDIX' = 'Pundi X[new]',
    'MIR' = 'MIR COIN',
    'SUSD' = 'sUSD',
    'AXS' = 'Axie Infinity',
    'PERP' = 'Perpetual Protocol',
    'ORN' = 'Orion Protocol',
    'TKO' = 'Toko Token',
    'LINA' = 'LINA',
    'TLM' = 'Alien Worlds',
    'AUDIO' = 'Audius',
    'TWT' = 'Trust Wallet Token',
    'TOMO' = 'TomoChain',
    'FORTH' = 'Ampleforth Governance Token',
    'WNXM' = 'Wrapped NXM',
    'SFP' = 'SafePal',
    'BADGER' = 'Badger DAO',
    'DNT' = 'district0x',
    'PAXG' = 'PAX Gold',
    'ALICE' = 'MyNeighborAlice',
    'SUN' = 'SUN',
    'AION' = 'Aion',
    'MFT' = 'Hifi Finance',
    'ROSE' = 'Oasis Network',
    'EPS' = 'Epanus',
    'TROY' = 'TROY',
    'BURGER' = 'Burger Swap',
    'FIRO' = 'Firo',
    'TRB' = 'Tellor',
    'IRIS' = 'IRISnet',
    'SUPER' = 'SuperCoin',
    'DIA' = 'DIA',
    'LIT' = 'Lition',
    'FLM' = 'Flamingo',
    'RAMP' = 'RAMP',
    'YFII' = 'DFI.Money',
    'CHR' = 'Chromia',
    'AKRO' = 'Akropolis',
    'DATA' = 'Streamr',
    'BZRX' = 'bZx Protocol',
    'LTO' = 'LTO Network',
    'STPT' = 'Standard Tokenization Protocol',
    'BEAM' = 'Beam',
    'WTC' = 'Waltonchain',
    'CTK' = 'CertiK',
    'MBL' = 'MovieBloc',
    'DEGO' = 'Dego Finance',
    'BLZ' = 'Bluzelle',
    'NULS' = 'NULS',
    'OM' = 'MANTRA DAO',
    'TRU' = 'Truebit',
    'POND' = 'Marlin',
    'ARPA' = 'ARPA Chain',
    'VITE' = 'VITE',
    'MITH' = 'Mithril',
    'DUSK' = 'Dusk Network',
    'BEL' = 'Bella Protocol',
    'BAR' = 'FC Barcelona Fan Token',
    'SLP' = 'Small Love Potion',
    'HC' = 'HyperCash',
    'UNFI' = 'Uniswap Finance',
    'CTXC' = 'Cortex',
    'COS' = 'Contentos',
    'HARD' = 'HARD Protocol',
    'FIO' = 'FIO Protocol',
    'WING' = 'WingShop',
    'KEY' = 'MoMo KEY',
    'DOCK' = 'Dock',
    'PNT' = 'Penta',
    'PERL' = 'Perlin',
    'GTO' = 'Gifto',
    'TCT' = 'TokenClub',
    'MDT' = 'Measurable Data Token',
    'AUTO' = 'Cube',
    'PSG' = 'Paris Saint-Germain Fan Token',
    'DREP' = 'Drep [new]',
    'COCOS' = 'Cocos-BCX',
    'ACM' = 'Actinium',
    'FIS' = 'Stafi',
    'JUV' = 'Juventus Fan Token',
    'OG' = 'OG Fan Token',
    'ASR' = 'AS Roma Fan Token',
    'USDS' = 'Stably USD',
    'BTCDOWN' = 'BTCDOWN',
    'ATM' = 'Atletico De Madrid Fan Token',
    'BNBUP' = 'BNBUP',
    'BTCUP' = 'BTCUP',
    'ETHUP' = 'ETHUP',
    'ADAUP' = 'ADAUP',
    'DOTUP' = 'DOTUP',
    'XRPUP' = 'XRPUP',
    'LTCUP' = 'LTCUP',
    'LINKUP' = 'LINKUP',
    'ADADOWN' = 'ADADOWN',
    'ETHBULL' = '3X Long Ethereum Token',
    'SUSHIUP' = 'SUSHIUP',
    'ETHDOWN' = 'ETHDOWN',
    'BNBDOWN' = 'BNBDOWN',
    'AAVEUP' = 'AAVEUP',
    'UNIUP' = 'UNIUP',
    'XRPDOWN' = 'XRPDOWN',
    'YFIUP' = 'YFIUP',
    'AAVEDOWN' = 'AAVEDOWN',
    'SXPUP' = 'SXPUP',
    'XLMUP' = 'XLMUP',
    'YFIDOWN' = 'YFIDOWN',
    'XRPBULL' = '3x Long XRP Token',
    'SXPDOWN' = 'SXPDOWN',
    'TRXUP' = 'TRXUP',
    'DOTDOWN' = 'DOTDOWN',
    'NBS' = 'New BitShares',
    'BULL' = 'BuySell',
    'EOSBULL' = '3x Long EOS Token',
    'LINKDOWN' = 'LINKDOWN',
    'XTZUP' = 'XTZUP',
    'UNIDOWN' = 'UNIDOWN',
    'FILUP' = 'FILUP',
    'BEAR' = 'BEAR Coin',
    'EOSDOWN' = 'EOSDOWN',
    'BNBBULL' = '3X Long BNB Token',
    'XLMDOWN' = 'XLMDOWN',
    'EOSBEAR' = '3x Short EOS Token',
    'VEN' = 'ImpulseVen',
    'TRXDOWN' = 'TRXDOWN',
    'ETHBEAR' = '3X Short Ethereum Token',
    'FILDOWN' = 'FILDOWN',
    'LTCDOWN' = 'LTCDOWN',
    'XTZDOWN' = 'XTZDOWN',
    'XRPBEAR' = '3x Short XRP Token',
    'BNBBEAR' = '3X Short BNB Token',
    'NPXS' = 'Pundi X[old]',
    'BKRW' = 'Binance KRW',
    'BCC' = 'Basiscoin Cash',
}
