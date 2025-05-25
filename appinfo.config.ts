import { Translate } from 'i18n-pro'

export const regions: Region[] = ['cn', 'us']

/**
 * 注意：这里默认写的是中文，做了多语言支持，以中文为key
 */
export const getRegionNameMap = (tProp?: Translate) => {
  const t = tProp || (global as any).t
  return {
    cn: t('中国大陆'),
    hk: t('中国香港'),
    mo: t('中国澳门'),
    tw: t('中国台湾'),
    us: t('美国'),
    tr: t('土耳其'),
  }
}

/**
 * 注意：这里的 value 值是从浏览器打开应用详情页时，对应的 `App 内购买项目` 的标题
 * 文本内容一定要对得上，不然获取不到应用的内购信息
 */
export const regionInAppPurchasesTextMap: Record<Region, string> = {
  cn: 'App 内购买项目',
  hk: 'App 內購買項目',
  mo: 'App 內購買項目',
  tw: 'App 內購買',
  us: 'In-App Purchases',
  tr: `In-App Purchases`,
}

/**
 * 注意：这里暂时规划是只有中文和英文
 */
export const regionLanguageCodeMap: Record<Region, string> = {
  cn: 'zh-CN',
  hk: 'zh-CN',
  mo: 'zh-CN',
  tw: 'zh-CN',
  us: 'en',
  tr: 'en',
}

/**
 * 国家或地区对应的时区，用途是计算日期分类时，不同时区可以按其当地的时区归类
 * 值需要遵循 https://www.iana.org/time-zones 中的取值
 */
export const regionTimezoneMap: Record<Region, string> = {
  cn: 'Asia/Shanghai',
  hk: 'Asia/Hong_Kong',
  mo: 'Asia/Macau',
  tw: 'Asia/Taipei',
  us: 'America/New_York',
  tr: 'Europe/Istanbul',
}

/**
 * 注意：新添加的应用写在最上面
 * Note: Newly added applications should be written at the top
 *
 * id 是应用的 ID
 * name 是应用名称，可以是多种类型
 * name 为 string 类型表示该应用在所有地区都是同一个名称
 * name 为 Partial<Record<Record, string>> 类型表示不同国家或地区的应用名称都不一样
 * name 为 [string, Partial<Record<Record, string>>] 类型表示多个地区的应用名称都相同，其他地区可能有不同的名称
 * 正常的话，中英文不一样就中英文各写一个就可以；这里的名称只有写代码的能看到
 */
export const appConfig: AppConfig[] = [
  {
    id: 1453504509,
    name: 'Dynamic Wallpaper Engine',
    addType: 'auto'
  },
  {
    id: 470158793,
    name: 'Keka',
    addType: 'auto'
  },
  {
    id: 1449438542,
    name: 'BestZip Pro - Unzip RAR&Zip&7z',
    addType: 'auto'
  },
  {
    id: 6737150304,
    name: 'iBar Pro-Menubar control tool',
    addType: 'auto'
  },
  {
    id: 647505820,
    name: 'RAR Extractor - Unarchiver Pro',
    addType: 'auto'
  },
  {
    id: 6740171321,
    name: 'FastZipPro- RAR 7Z ZIP UnZip',
    addType: 'auto'
  },
  {
    id: 1551531632,
    name: 'AutoSwitchInput Pro',
    addType: 'auto'
  },
  {
    id: 1459028801,
    name: '爱五笔 - 五笔编码拆字大全',
    addType: 'auto'
  },
  {
    id: 6474505156,
    name: '照片处理工具 - 公务员考试报名确认照片审核',
    addType: 'auto'
  },
  {
    id: 510620098,
    name: 'MediaInfo',
    addType: 'auto'
  },
  {
    id: 411643860,
    name: 'DaisyDisk',
    addType: 'auto'
  },
  {
    id: 1533946416,
    name: 'MyZip Pro-7z zip rar多线程极速压缩工具',
    addType: 'auto'
  },
  {
    id: 457622435,
    name: 'Yoink - Better Drag and Drop',
    addType: 'auto'
  },
  {
    id: 1555844307,
    name: 'MouseBoost Pro',
    addType: 'auto'
  },
  {
    id: 1425997715,
    name: 'RAR Extractor Pro - Unzip',
    addType: 'auto'
  },
  {
    id: 6474506915,
    name: 'Sticker - Desktop Notepad',
    addType: 'auto'
  },
  {
    id: 1524202457,
    name: 'TimeCapsule2',
    addType: 'auto'
  },
  {
    id: 1616792360,
    name: 'SQLiteExplorer',
    addType: 'auto'
  },
  {
    id: 1622138166,
    name: 'Change Video Speed for Safari',
    addType: 'auto'
  },
  {
    id: 1478540997,
    name: 'zClock - Clock & Countdown.',
    addType: 'auto'
  },
  {
    id: 1450345160,
    name: 'Color Folder Master',
    addType: 'auto'
  },
  {
    id: 1612054963,
    name: 'AppUninstaller-Uninstall Apps',
    addType: 'auto'
  },
  {
    id: 1298871299,
    name: '电子印章制作大师企业版',
    addType: 'auto'
  },
  {
    id: 1644030069,
    name: 'Folder by Color Pro - Folder',
    addType: 'auto'
  },
  {
    id: 668609870,
    name: 'Rar Sharp',
    addType: 'auto'
  },
  {
    id: 1381028448,
    name: '百读不厌 - 听书、看书神器',
    addType: 'auto'
  },
  {
    id: 1500167033,
    name: 'AClock - Digital Flip Clock',
    addType: 'auto'
  },
  {
    id: 1387780159,
    name: 'Network & Battery',
    addType: 'auto'
  },
  {
    id: 6502931430,
    name: 'DocFlex - Document conversion',
    addType: 'auto'
  },
  {
    id: 6445882848,
    name: 'Boom3D-5.1 Audio for Netflix',
    addType: 'auto'
  },
  {
    id: 1265704574,
    name: 'Bandizip: Archiver',
    addType: 'auto'
  },
  {
    id: 1214639260,
    name: 'SmallImage-Smart Compression',
    addType: 'auto'
  },
  {
    id: 1385628859,
    name: 'Highlighter for Safari',
    addType: 'auto'
  },
  {
    id: 1521805728,
    name: 'iVault - secure your files',
    addType: 'auto'
  },
  {
    id: 697942581,
    name: 'Disk Graph',
    addType: 'auto'
  },
  {
    id: 1435568266,
    name: 'HiSerialPort',
    addType: 'auto'
  },
  {
    id: 420874236,
    name: 'PDFOutliner',
    addType: 'auto'
  },
  {
    id: 6472044044,
    name: 'Toolbox for Safari',
    addType: 'auto'
  },
  {
    id: 1632395174,
    name: 'CleanMyMac X Multi-License',
    addType: 'auto'
  },
  {
    id: 1126745697,
    name: 'System utility. monitor status',
    addType: 'auto'
  },
  {
    id: 1214761683,
    name: 'iWall-Dynamic Desktop Engine',
    addType: 'auto'
  },
  {
    id: 453164367,
    name: 'SystemPal',
    addType: 'auto'
  },
  {
    id: 431224317,
    name: 'Disk Drill Media Recovery',
    addType: 'auto'
  },
  {
    id: 1415704056,
    name: 'The App Locker -Best Lock Apps',
    addType: 'auto'
  },
  {
    id: 1162194131,
    name: 'Easy New File',
    addType: 'auto'
  },
  {
    id: 6472813601,
    name: 'NinjaMouse - Your mouse master',
    addType: 'auto'
  },
  {
    id: 1445268016,
    name: 'Duplicate Cleaner',
    addType: 'auto'
  },
  {
    id: 1494552451,
    name: '小说大全',
    addType: 'auto'
  },
  {
    id: 1273980573,
    name: 'Best Data Recovery',
    addType: 'auto'
  },
  {
    id: 1619982017,
    name: '五笔拆字',
    addType: 'auto'
  },
  {
    id: 1153435308,
    name: 'inddPreview',
    addType: 'auto'
  },
  {
    id: 1475051844,
    name: 'Filmage Converter Pro-MKV,AVI',
    addType: 'auto'
  },
  {
    id: 1441394270,
    name: 'Oka Unarchiver Pro - Unzip RAR',
    addType: 'auto'
  },
  {
    id: 6711333801,
    name: 'Live Crypto Prices, Charts',
    addType: 'auto'
  },
  {
    id: 658182498,
    name: 'Address Book to CSV',
    addType: 'auto'
  },
  {
    id: 6465744342,
    name: 'iBoot - StartupDisk shortcut',
    addType: 'auto'
  },
  {
    id: 1526912781,
    name: 'Rainbow Folder - Icon changer',
    addType: 'auto'
  },
  {
    id: 668331139,
    name: 'Backup Scheduler: Time Editor',
    addType: 'auto'
  },
  {
    id: 1261004863,
    name: 'Data Recovery EX',
    addType: 'auto'
  },
  {
    id: 877615577,
    name: 'Serial',
    addType: 'auto'
  },
  {
    id: 6739523960,
    name: 'Allow Right Click for Safari',
    addType: 'auto'
  },
  {
    id: 6444238780,
    name: 'Countdown Desktop',
    addType: 'auto'
  },
  {
    id: 6739428883,
    name: 'TTSLite',
    addType: 'auto'
  },
  {
    id: 402569179,
    name: 'Find Any File (FAF)',
    addType: 'auto'
  },
  {
    id: 6745083093,
    name: 'Coolmuster HEIC Converter',
    addType: 'auto'
  },
  {
    id: 1602821771,
    name: 'Renamer',
    addType: 'auto'
  },
  {
    id: 471561604,
    name: 'Mr. Zipper - 7Z RAR 7ZIP',
    addType: 'auto'
  },
  {
    id: 1025822138,
    name: 'iStatistica',
    addType: 'auto'
  },
  {
    id: 524576324,
    name: 'Smart Zipper Pro: Rar, 7z, Zip',
    addType: 'auto'
  },
  {
    id: 919005729,
    name: 'Burn',
    addType: 'auto'
  },
  {
    id: 823528286,
    name: 'Folx GO+',
    addType: 'auto'
  },
  {
    id: 6444789815,
    name: '记事本++',
    addType: 'auto'
  },
  {
    id: 884018914,
    name: 'Zoоm',
    addType: 'auto'
  },
  {
    id: 406178496,
    name: 'KPlayer',
    addType: 'auto'
  },
  {
    id: 1589912595,
    name: 'JY Subtitle SRT Export Lite',
    addType: 'auto'
  },
  {
    id: 1181029289,
    name: 'Flip Clock Pro - time widgets',
    addType: 'auto'
  },
  {
    id: 815333099,
    name: 'Foldery',
    addType: 'auto'
  },
  {
    id: 779114299,
    name: 'CAD Viewer 3D',
    addType: 'auto'
  },
  {
    id: 736168905,
    name: 'DBFView',
    addType: 'auto'
  },
  {
    id: 1357413437,
    name: 'LightApp-轻应用浏览器',
    addType: 'auto'
  },
  {
    id: 1540733755,
    name: 'Find Device - bluetooth finder',
    addType: 'auto'
  },
  {
    id: 1328847392,
    name: 'Process Monitor',
    addType: 'auto'
  },
  {
    id: 1593045116,
    name: 'Focus & ADHD Reading - Glide',
    addType: 'auto'
  },
  {
    id: 1463966933,
    name: 'iStats X: CPU & Memory',
    addType: 'auto'
  },
  {
    id: 1447778660,
    name: 'iStatistica Pro',
    addType: 'auto'
  },
  {
    id: 1568840488,
    name: 'AutoClicker - Assist click',
    addType: 'auto'
  },
  {
    id: 1538700349,
    name: 'The Extractor Master',
    addType: 'auto'
  },
  {
    id: 419330170,
    name: 'Moom Classic',
    addType: 'auto'
  },
  {
    id: 486626129,
    name: 'Folder Tidy',
    addType: 'auto'
  },
  {
    id: 1389745743,
    name: 'Everything Downloader',
    addType: 'auto'
  },
  {
    id: 1595306197,
    name: 'Macaque',
    addType: 'auto'
  },
  {
    id: 445512770,
    name: 'Disk Diet',
    addType: 'auto'
  },
  {
    id: 456609775,
    name: 'Window Tidy',
    addType: 'auto'
  },
  {
    id: 6450939701,
    name: 'Chat One - AI Chat Box',
    addType: 'auto'
  },
  {
    id: 1565629813,
    name: 'FastZip - RAR 7Z ZIP UnZip',
    addType: 'auto'
  },
  {
    id: 1181028777,
    name: 'Flip Clock - digital widgets',
    addType: 'auto'
  },
  {
    id: 1488071784,
    name: 'Wallpapers X - 4K Wallpaper',
    addType: 'auto'
  },
  {
    id: 1552826194,
    name: 'iWallpaper - Live Wallpaper',
    addType: 'auto'
  },
  {
    id: 6511220682,
    name: 'CleanMyApp - Uninstaller',
    addType: 'auto'
  },
  {
    id: 1497428978,
    name: 'iRightMouse',
    addType: 'auto'
  },
  {
    id: 1541571038,
    name: 'NTFS Read&Write -iBoysoft NTFS',
    addType: 'auto'
  },
  {
    id: 1518518216,
    name: 'Paper - Live Wallpapers',
    addType: 'auto'
  },
  {
    id: 6443843900,
    name: 'iBar-Menubar icon control tool',
    addType: 'auto'
  },
  {
    id: 1442745175,
    name: '快帆加速器-海外回国音乐视频加速器',
    addType: 'auto'
  },
  {
    id: 1630034110,
    name: 'Bob - 翻译和 OCR 工具',
    addType: 'auto'
  },
  {
    id: 1395152179,
    name: '奇游加速器 - 全球游戏畅玩',
    addType: 'auto'
  },
  {
    id: 1575178082,
    name: 'Max NTFS - NTFS Disk Helper',
    addType: 'auto'
  },
  {
    id: 1476545828,
    name: 'MacDroid - Manager for Android',
    addType: 'auto'
  },
  {
    id: 1456235760,
    name: 'Live Wallpaper - 4K UHD',
    addType: 'auto'
  },
  {
    id: 1599191594,
    name: 'iBoysoft MagicMenu',
    addType: 'auto'
  },
  {
    id: 1514073011,
    name: 'QuickFox-海外回国加速器追剧听歌游戏留学生必备',
    addType: 'auto'
  },
  {
    id: 1133028347,
    name: 'Cleaner One Pro - Uninstaller',
    addType: 'auto'
  },
  {
    id: 6450397515,
    name: 'Transcribe & Speech to text',
    addType: 'auto'
  },
  {
    id: 1598771178,
    name: 'DeviceMirror Lite -Screen Cast',
    addType: 'auto'
  },
  {
    id: 1669005649,
    name: 'TXT Reader + AI Assistant',
    addType: 'auto'
  },
  {
    id: 1525349531,
    name: 'Snap Screenshot - Snip & Paste',
    addType: 'auto'
  },
  {
    id: 646295438,
    name: 'RAR Extractor - Unarchiver',
    addType: 'auto'
  },
  {
    id: 6452726154,
    name: 'Ultra VPN - VPN and Wifi Proxy',
    addType: 'auto'
  },
  {
    id: 1521133201,
    name: 'Speed Player for Safari',
    addType: 'auto'
  },
  {
    id: 1298486723,
    name: 'FileZilla Pro - FTP and Cloud',
    addType: 'auto'
  },
  {
    id: 1081480270,
    name: 'The Audio Converter',
    addType: 'auto'
  },
  {
    id: 1244625890,
    name: 'ApowerMirror- Screen Mirroring',
    addType: 'auto'
  },
  {
    id: 1068435535,
    name: 'Antivirus One - Virus Cleaner',
    addType: 'auto'
  },
  {
    id: 1576794157,
    name: '飞火动态壁纸-4k超清视频桌面主题壁纸引擎',
    addType: 'auto'
  },
  {
    id: 1455463454,
    name: 'WiFi Speed Test Tools',
    addType: 'auto'
  },
  {
    id: 1441507725,
    name: 'Oka Unarchiver - Unzip ZIP RAR',
    addType: 'auto'
  },
  {
    id: 1535136051,
    name: 'RAR Extractor - Unzip File',
    addType: 'auto'
  },
  {
    id: 1500706402,
    name: 'PhDDNS',
    addType: 'auto'
  },
  {
    id: 1486294815,
    name: 'Aliyun Network Client',
    addType: 'auto'
  },
  {
    id: 1637557903,
    name: 'Video Converter X2',
    addType: 'auto'
  },
  {
    id: 6737146353,
    name: 'FoxVPN – Fast & World NetWork',
    addType: 'auto'
  },
  {
    id: 1543649099,
    name: 'Clone My Data-Sync&Backup Data',
    addType: 'auto'
  },
  {
    id: 1485671150,
    name: 'VPN -  快滚 全球网络加速',
    addType: 'auto'
  },
  {
    id: 1570653446,
    name: 'Focus Video - Video Converter',
    addType: 'auto'
  },
  {
    id: 740355970,
    name: 'Data Recovery Expert',
    addType: 'auto'
  },
  {
    id: 1606741874,
    name: 'AConverter - Audio Converter',
    addType: 'auto'
  },
  {
    id: 6475027113,
    name: 'Deep Think智能助手： AI智能助理',
    addType: 'auto'
  },
  {
    id: 1018301773,
    name: 'AdBlock Pro for Safari',
    addType: 'auto'
  },
  {
    id: 1551462255,
    name: 'MouseBoost',
    addType: 'auto'
  },
  {
    id: 1466014165,
    name: 'RecMaster Screen Recorder',
    addType: 'auto'
  },
  {
    id: 1613340764,
    name: 'PixelsTester - Test Monitors',
    addType: 'auto'
  },
  {
    id: 1502255391,
    name: 'Color Folder - Custom Icons',
    addType: 'auto'
  },
  {
    id: 1467607774,
    name: 'Smart Audio Editor - ID3',
    addType: 'auto'
  },
  {
    id: 1478202069,
    name: 'Screen Mirroring: LetsView',
    addType: 'auto'
  },
  {
    id: 6448913901,
    name: '全能AI - 图生视频、文生视频、AI写歌作曲、AI智能助理',
    addType: 'auto'
  },
  {
    id: 1476640331,
    name: '读写客',
    addType: 'auto'
  },
  {
    id: 787142064,
    name: 'VSD Viewer & VSD Converter',
    addType: 'auto'
  },
  {
    id: 1499250688,
    name: 'Wallpaper - HD Wallpapers',
    addType: 'auto'
  },
  {
    id: 1642304143,
    name: 'SerialPort Debug Assistant Pro',
    addType: 'auto'
  },
  {
    id: 1516451072,
    name: 'Another Desktop Manager',
    addType: 'auto'
  },
  {
    id: 847259925,
    name: 'SnailSVN: SVN for Finder',
    addType: 'auto'
  },
  {
    id: 689176796,
    name: 'Python Runner',
    addType: 'auto'
  },
  {
    id: 1459663647,
    name: 'Virtual Location',
    addType: 'auto'
  },
  {
    id: 417392270,
    name: 'MDB ACCDB Viewer',
    addType: 'auto'
  },
  {
    id: 847260112,
    name: 'SnailGit: Git for Finder',
    addType: 'auto'
  },
  {
    id: 498370702,
    name: 'RegExRX',
    addType: 'auto'
  },
  {
    id: 1236813619,
    name: 'Context Menu',
    addType: 'auto'
  },
  {
    id: 955297617,
    name: 'CodeRunner 4',
    addType: 'auto'
  },
  {
    id: 1400977081,
    name: 'IPYNB Viewer + Editor',
    addType: 'auto'
  },
  {
    id: 948079084,
    name: 'FlashFTP - Swift FTP/SFTP Client',
    addType: 'auto'
  },
  {
    id: 6504210872,
    name: 'DartShell - SSH & SFTP',
    addType: 'auto'
  },
  {
    id: 1063631769,
    name: 'Medis - GUI for Redis',
    addType: 'auto'
  },
  {
    id: 507135296,
    name: 'IconKit',
    addType: 'auto'
  },
  {
    id: 429449079,
    name: 'Patterns - The Regex App',
    addType: 'auto'
  },
  {
    id: 6446094097,
    name: 'AI File Translator (1 to >100)',
    addType: 'auto'
  },
  {
    id: 1054575495,
    name: 'JavaPoint',
    addType: 'auto'
  },
  {
    id: 841285201,
    name: 'Haskell',
    addType: 'auto'
  },
  {
    id: 567740330,
    name: 'JSON Editor',
    addType: 'auto'
  },
  {
    id: 1157491961,
    name: 'PLIST Editor',
    addType: 'auto'
  },
  {
    id: 913158085,
    name: 'Expressions',
    addType: 'auto'
  },
  {
    id: 1105845111,
    name: 'Xversion',
    addType: 'auto'
  },
  {
    id: 641027709,
    name: 'Color Picker',
    addType: 'auto'
  },
  {
    id: 823961613,
    name: 'SSH Copy',
    addType: 'auto'
  },
  {
    id: 1067646949,
    name: 'New Terminal Here',
    addType: 'auto'
  },
  {
    id: 595177179,
    name: 'icns Tool',
    addType: 'auto'
  },
  {
    id: 490499048,
    name: 'bmGlyph',
    addType: 'auto'
  },
  {
    id: 556381974,
    name: 'IconFly',
    addType: 'auto'
  },
  {
    id: 499768540,
    name: 'Power JSON Editor',
    addType: 'auto'
  },
  {
    id: 1554235898,
    name: 'Peek — A Quick Look Extension',
    addType: 'auto'
  },
  {
    id: 1224934068,
    name: 'iTer - IT learning',
    addType: 'auto'
  },
  {
    id: 1615269303,
    name: 'iCon - Create And Resize Icons',
    addType: 'auto'
  },
  {
    id: 686855602,
    name: 'PHP Runner',
    addType: 'auto'
  },
  {
    id: 1511935951,
    name: 'BetterJSON for Safari',
    addType: 'auto'
  },
  {
    id: 1106867065,
    name: 'Svgsus',
    addType: 'auto'
  },
  {
    id: 945397020,
    name: 'Run Python',
    addType: 'auto'
  },
  {
    id: 536559203,
    name: 'FlashCode - SWF to HTML5 and Objective-C converter',
    addType: 'auto'
  },
  {
    id: 1485436674,
    name: 'A Companion for SwiftUI',
    addType: 'auto'
  },
  {
    id: 875264768,
    name: 'Node.js HandBook',
    addType: 'auto'
  },
  {
    id: 1360203022,
    name: 'Socket-tcp/udp tool',
    addType: 'auto'
  },
  {
    id: 417074533,
    name: 'Synalyze It!',
    addType: 'auto'
  },
  {
    id: 513995545,
    name: 'MDB Tool - For Microsoft Access',
    addType: 'auto'
  },
  {
    id: 1400050251,
    name: 'Pythonic',
    addType: 'auto'
  },
  {
    id: 906185173,
    name: 'PacketSender',
    addType: 'auto'
  },
  {
    id: 719577577,
    name: 'JarPackager',
    addType: 'auto'
  },
  {
    id: 803736440,
    name: 'Hex Edit Pro',
    addType: 'auto'
  },
  {
    id: 1410608230,
    name: 'SQLiteMaster',
    addType: 'auto'
  },
  {
    id: 685191052,
    name: 'SVN Server',
    addType: 'auto'
  },
  {
    id: 1104615718,
    name: 'HelloWeb',
    addType: 'auto'
  },
  {
    id: 1024903185,
    name: 'TextLab',
    addType: 'auto'
  },
  {
    id: 946677126,
    name: 'PDF to XLSX Master',
    addType: 'auto'
  },
  {
    id: 414234859,
    name: 'DropDMG',
    addType: 'auto'
  },
  {
    id: 734258109,
    name: 'Watchdog for Xcode',
    addType: 'auto'
  },
  {
    id: 535348544,
    name: 'Folder Compare',
    addType: 'auto'
  },
  {
    id: 1268616588,
    name: 'Localizable - translation file',
    addType: 'auto'
  },
  {
    id: 822334407,
    name: 'TCP Client',
    addType: 'auto'
  },
  {
    id: 415087689,
    name: 'PHP Code Tester',
    addType: 'auto'
  },
  {
    id: 1148208665,
    name: 'ThemeInstaller',
    addType: 'auto'
  },
  {
    id: 478570084,
    name: 'CompareMerge',
    addType: 'auto'
  },
  {
    id: 1159371870,
    name: 'Code School for Xcode PRO - Learn Coding for iOS',
    addType: 'auto'
  },
  {
    id: 1579236127,
    name: 'UMLBoard',
    addType: 'auto'
  },
  {
    id: 1054670022,
    name: 'Adaptivity (A)',
    addType: 'auto'
  },
  {
    id: 1458267370,
    name: 'HTTP Server - LAN Debug Tool',
    addType: 'auto'
  },
  {
    id: 1434151360,
    name: 'PowerRightMenu - Fast New File',
    addType: 'auto'
  },
  {
    id: 574356166,
    name: 'CrossFTP Pro - FTP Client',
    addType: 'auto'
  },
  {
    id: 640034674,
    name: 'AnyMP4 AVCHD Converter Player',
    addType: 'auto'
  },
  {
    id: 689184215,
    name: 'JRunner for Java',
    addType: 'auto'
  },
  {
    id: 670032670,
    name: 'JS King',
    addType: 'auto'
  },
  {
    id: 1589635432,
    name: 'EasyPlantUML',
    addType: 'auto'
  },
  {
    id: 1567045405,
    name: 'Golog',
    addType: 'auto'
  },
  {
    id: 689183220,
    name: 'JS Runner',
    addType: 'auto'
  },
  {
    id: 1516154713,
    name: 'Push Notification - Tester',
    addType: 'auto'
  },
  {
    id: 467620393,
    name: 'JavaScript Condenser',
    addType: 'auto'
  },
  {
    id: 689178925,
    name: 'Perl Runner',
    addType: 'auto'
  },
  {
    id: 1396408074,
    name: 'PrettyJSON for Xcode',
    addType: 'auto'
  },
  {
    id: 1244392031,
    name: 'CL!ng',
    addType: 'auto'
  },
  {
    id: 1137451860,
    name: 'App Preview Video Converter',
    addType: 'auto'
  },
  {
    id: 1013592748,
    name: 'C Sharp',
    addType: 'auto'
  },
  {
    id: 775920262,
    name: 'unRAR Pro',
    addType: 'auto'
  },
  {
    id: 1576144037,
    name: 'mSocket - Transfer large files',
    addType: 'auto'
  },
  {
    id: 689175950,
    name: 'Node Runner',
    addType: 'auto'
  },
  {
    id: 552407238,
    name: 'myPoint Coordinates',
    addType: 'auto'
  },
  {
    id: 402383384,
    name: 'Base - SQLite Editor',
    addType: 'auto'
  },
  {
    id: 433586919,
    name: 'CSVEdit',
    addType: 'auto'
  },
  {
    id: 1076110314,
    name: 'Smart JSON Viewer',
    addType: 'auto'
  },
  {
    id: 1134593405,
    name: 'EncryptTools',
    addType: 'auto'
  },
  {
    id: 475193367,
    name: 'Synalyze It! Pro',
    addType: 'auto'
  },
  {
    id: 1167060791,
    name: 'Import',
    addType: 'auto'
  },
  {
    id: 1128674367,
    name: 'MySQL Database Optimizer',
    addType: 'auto'
  },
  {
    id: 1604145760,
    name: 'Picture Compresser',
    addType: 'auto'
  },
  {
    id: 1367025713,
    name: 'Sprite 1-2-3',
    addType: 'auto'
  },
  {
    id: 1070488538,
    name: 'Icons Maker',
    addType: 'auto'
  },
  {
    id: 413612688,
    name: 'Icons',
    addType: 'auto'
  },
  {
    id: 913523893,
    name: 'QuartzCode',
    addType: 'auto'
  },
  {
    id: 477163052,
    name: 'Linguan',
    addType: 'auto'
  },
  {
    id: 1565766176,
    name: 'Power YAML Editor',
    addType: 'auto'
  },
  {
    id: 1479641484,
    name: 'Fireworks - Effects Editor',
    addType: 'auto'
  },
  {
    id: 1176074088,
    name: 'Termius — Modern SSH Client',
    addType: 'auto'
  },
  {
    id: 1102004240,
    name: 'iHosts - /etc/hosts editor',
    addType: 'auto'
  },
  {
    id: 1507890049,
    name: 'Pixeur - Screen Color Picker',
    addType: 'auto'
  },
  {
    id: 6504274426,
    name: 'termcc - SSH & SFTP Client',
    addType: 'auto'
  },
  {
    id: 1491764008,
    name: 'Red 2 - UI for Redis',
    addType: 'auto'
  },
  {
    id: 985614903,
    name: 'SQLPro Studio',
    addType: 'auto'
  },
  {
    id: 1459748650,
    name: 'CompareMerge2',
    addType: 'auto'
  },
  {
    id: 1475741280,
    name: 'SSH Client - Terminal, Telnet',
    addType: 'auto'
  },
  {
    id: 828466809,
    name: 'SQLPro for MSSQL',
    addType: 'auto'
  },
  {
    id: 1547933097,
    name: 'Socket Debugger',
    addType: 'auto'
  },
  {
    id: 1516553045,
    name: 'Colorsip',
    addType: 'auto'
  },
  {
    id: 1502044457,
    name: 'Whisk',
    addType: 'auto'
  },
  {
    id: 1533756032,
    name: 'DevUtils.app',
    addType: 'auto'
  },
  {
    id: 1147023879,
    name: 'App Image Kit',
    addType: 'auto'
  },
  {
    id: 1469182443,
    name: 'SnipperApp 2',
    addType: 'auto'
  },
  {
    id: 1570789972,
    name: 'ESP32 WiFi OTA',
    addType: 'auto'
  },
  {
    id: 1584637545,
    name: 'Translate APP-Project Localize',
    addType: 'auto'
  },
  {
    id: 1516378834,
    name: 'Push Notification - Client',
    addType: 'auto'
  },
  {
    id: 547166701,
    name: '百度网盘',
    addType: 'auto'
  },
  {
    id: 1014945607,
    name: '优酷视频-嘘国王在冬眠 全网独播',
    addType: 'auto'
  },
  {
    id: 1231336508,
    name: '腾讯视频-折腰 全网独播',
    addType: 'auto'
  },
  {
    id: 6741096204,
    name: 'Think AI: Ask Chatbot Anything',
    addType: 'auto'
  },
  {
    id: 1012296988,
    name: '爱奇艺-人生若如初见 全网独播',
    addType: 'auto'
  },
  {
    id: 1327661892,
    name: 'Xmind: Mind Map',
    addType: 'auto'
  },
  {
    id: 1588231633,
    name: 'Meitu-AI Photo Editor & Design',
    addType: 'auto'
  },
  {
    id: 1450246547,
    name: 'BestZip - Unarchive RAR&7Z&ZIP',
    addType: 'auto'
  },
  {
    id: 1570349123,
    name: 'Openly for Chrome and Firefox',
    addType: 'auto'
  },
  {
    id: 491854842,
    name: 'Youdao Translate',
    addType: 'auto'
  },
  {
    id: 1247341465,
    name: '同花顺-股票炒股软件',
    addType: 'auto'
  },
  {
    id: 1484905765,
    name: 'Fast CAD Reader',
    addType: 'auto'
  },
  {
    id: 747648890,
    name: 'Telegram',
    addType: 'auto'
  },
  {
    id: 6450939701,
    name: 'Chat One - AI Chat Box',
    addType: 'auto'
  },
  {
    id: 1565629813,
    name: 'FastZip - RAR 7Z ZIP UnZip',
    addType: 'auto'
  },
  {
    id: 1592987853,
    name: 'Screen Recorder by Omi',
    addType: 'auto'
  },
  {
    id: 1488071784,
    name: 'Wallpapers X - 4K Wallpaper',
    addType: 'auto'
  },
  {
    id: 1181028777,
    name: 'Flip Clock - digital widgets',
    addType: 'auto'
  },
  {
    id: 1485844094,
    name: 'iShot-ScreenShot Recording OCR',
    addType: 'auto'
  },
  {
    id: 6503169843,
    name: 'AI Chatbot : Ask AI Assistant',
    addType: 'auto'
  },
  {
    id: 1552826194,
    name: 'iWallpaper - Live Wallpaper',
    addType: 'auto'
  },
  {
    id: 6511220682,
    name: 'CleanMyApp - Uninstaller',
    addType: 'auto'
  },
  {
    id: 966085870,
    name: 'TickTick:To-Do List, Calendar',
    addType: 'auto'
  },
  {
    id: 1144400433,
    name: '东方财富经典版-股票开户证券炒股理财',
    addType: 'auto'
  },
  {
    id: 1497428978,
    name: 'iRightMouse',
    addType: 'auto'
  },
  {
    id: 886103288,
    name: '虎牙直播HD-游戏互动直播平台',
    addType: 'auto'
  },
  {
    id: 1541571038,
    name: 'NTFS Read&Write -iBoysoft NTFS',
    addType: 'auto'
  },
  {
    id: 1594288016,
    name: 'Wink: Video Enhancer & Editor',
    addType: 'auto'
  },
  {
    id: 1600668116,
    name: '有道云笔记-笔记效率办公',
    addType: 'auto'
  },
  {
    id: 6443843900,
    name: 'iBar-Menubar icon control tool',
    addType: 'auto'
  },
  {
    id: 1442745175,
    name: '快帆加速器-海外回国音乐视频加速器',
    addType: 'auto'
  },
  {
    id: 1518518216,
    name: 'Paper - Live Wallpapers',
    addType: 'auto'
  },
  {
    id: 1659622164,
    name: 'VidHub -Video Library & Player',
    addType: 'auto'
  },
  {
    id: 1570563588,
    name: 'CalendarTask - Efficient life',
    addType: 'auto'
  },
  {
    id: 734383760,
    name: '每日英语听力 - 英语听力的最佳途径',
    addType: 'auto'
  },
  {
    id: 1507782672,
    name: 'Pixea',
    addType: 'auto'
  },
  {
    id: 1259223205,
    name: 'TunesMechanic for iTunes',
    addType: 'auto'
  },
  {
    id: 1630034110,
    name: 'Bob - 翻译和 OCR 工具',
    addType: 'auto'
  },
  {
    id: 1221250572,
    name: 'Xnip - Screenshot & Annotation',
    addType: 'auto'
  },
  {
    id: 1575178082,
    name: 'Max NTFS - NTFS Disk Helper',
    addType: 'auto'
  },
  {
    id: 1619925971,
    name: 'UPDF - PDF Editor with AI',
    addType: 'auto'
  },
  {
    id: 1395152179,
    name: '奇游加速器 - 全球游戏畅玩',
    addType: 'auto'
  },
  {
    id: 503039729,
    name: 'Fotor: AI Photo Editor, Design',
    addType: 'auto'
  },
  {
    id: 1476545828,
    name: 'MacDroid - Manager for Android',
    addType: 'auto'
  },
  {
    id: 6449164812,
    name: '打字通 - 打字练习软件',
    addType: 'auto'
  },
  {
    id: 1536071582,
    name: 'Omni Converter - Video & Audio',
    addType: 'auto'
  },
  {
    id: 1456235760,
    name: 'Live Wallpaper - 4K UHD',
    addType: 'auto'
  },
  {
    id: 1599191594,
    name: 'iBoysoft MagicMenu',
    addType: 'auto'
  },
  {
    id: 1665341561,
    name: 'flomo浮墨笔记 - AI 加持的便签备忘',
    addType: 'auto'
  },
  {
    id: 1133028347,
    name: 'Cleaner One Pro - Uninstaller',
    addType: 'auto'
  },
  {
    id: 1514073011,
    name: 'QuickFox-海外回国加速器追剧听歌游戏留学生必备',
    addType: 'auto'
  },
  {
    id: 1345035954,
    name: '穿梭Transocks-海外华人回国加速器',
    addType: 'auto'
  },
  {
    id: 1176074088,
    name: 'Termius — Modern SSH Client',
    addType: 'auto'
  },
  {
    id: 1335335588,
    name: 'Final Video Player - MKV & MP4',
    addType: 'auto'
  },
  {
    id: 1044549675,
    name: 'Elmedia Video Player',
    addType: 'auto'
  },
  {
    id: 1453504509,
    name: 'Dynamic Wallpaper Engine',
    addType: 'auto'
  },
  {
    id: 1449438542,
    name: 'BestZip Pro - Unzip RAR&Zip&7z',
    addType: 'auto'
  },
  {
    id: 470158793,
    name: 'Keka',
    addType: 'auto'
  },
  {
    id: 1550403011,
    name: 'iRightMouse Pro',
    addType: 'auto'
  },
  {
    id: 1611347086,
    name: 'iShot Pro-ScreenShot Recording',
    addType: 'auto'
  },
  {
    id: 6737150304,
    name: 'iBar Pro-Menubar control tool',
    addType: 'auto'
  },
  {
    id: 647505820,
    name: 'RAR Extractor - Unarchiver Pro',
    addType: 'auto'
  },
  {
    id: 6740171321,
    name: 'FastZipPro- RAR 7Z ZIP UnZip',
    addType: 'auto'
  },
  {
    id: 6742392236,
    name: 'ClashX Pro :Service Monitoring',
    addType: 'auto'
  },
  {
    id: 1343182480,
    name: '东方财富领先版-股票开户证券炒股理财',
    addType: 'auto'
  },
  {
    id: 6741806831,
    name: 'ClashX Pro - Dashboard manager',
    addType: 'auto'
  },
  {
    id: 494500492,
    name: '倒数日 · Days Matter for Desktop',
    addType: 'auto'
  },
  {
    id: 951718596,
    name: 'FoxCAD',
    addType: 'auto'
  },
  {
    id: 1551531632,
    name: 'AutoSwitchInput Pro',
    addType: 'auto'
  },
  {
    id: 6738742748,
    name: 'Puzzle Spider Solitaire.',
    addType: 'auto'
  },
  {
    id: 1469774098,
    name: 'QSpace',
    addType: 'auto'
  },
  {
    id: 1459028801,
    name: '爱五笔 - 五笔编码拆字大全',
    addType: 'auto'
  },
  {
    id: 1567442612,
    name: 'Qmenu',
    addType: 'auto'
  },
  {
    id: 1544655904,
    name: 'OmniReader Pro - AI Reader',
    addType: 'auto'
  },
  {
    id: 411643860,
    name: 'DaisyDisk',
    addType: 'auto'
  },
  {
    id: 1486274102,
    name: 'MPlayer X Pro',
    addType: 'auto'
  },
  {
    id: 461788075,
    name: 'Movist',
    addType: 'auto'
  },
  {
    id: 1218171533,
    name: 'Marklist - Manage Later Things',
    addType: 'auto'
  },
  {
    id: 6474505156,
    name: '照片处理工具 - 公务员考试报名确认照片审核',
    addType: 'auto'
  },
  {
    id: 510620098,
    name: 'MediaInfo',
    addType: 'auto'
  },
  {
    id: 432850619,
    name: 'FL Studio Mobile',
    addType: 'auto'
  },
  {
    id: 1642304143,
    name: 'SerialPort Debug Assistant Pro',
    addType: 'auto'
  },
  {
    id: 430798174,
    name: 'HazeOver • Distraction Dimmer™',
    addType: 'auto'
  },
  {
    id: 457622435,
    name: 'Yoink - Better Drag and Drop',
    addType: 'auto'
  },
  {
    id: 1606275031,
    name: 'Picture View: Image browser',
    addType: 'auto'
  },
  {
    id: 1555844307,
    name: 'MouseBoost Pro',
    addType: 'auto'
  },
  {
    id: 402380914,
    name: 'Eudic 欧路词典 增强版',
    addType: 'auto'
  },
  {
    id: 6738715418,
    name: 'STEP and IGES File Viewer',
    addType: 'auto'
  },
  {
    id: 977949232,
    name: 'Daygram : My Secret Diary',
    addType: 'auto'
  },
  {
    id: 847259925,
    name: 'SnailSVN: SVN for Finder',
    addType: 'auto'
  },
  {
    id: 389083586,
    name: 'MDict',
    addType: 'auto'
  },
  {
    id: 1516451072,
    name: 'Another Desktop Manager',
    addType: 'auto'
  },
  {
    id: 1482490089,
    name: 'Tampermonkey Classic',
    addType: 'auto'
  },
  {
    id: 6502828594,
    name: 'Template for Adobe illustrator',
    addType: 'auto'
  },
  {
    id: 1622138166,
    name: 'Change Video Speed for Safari',
    addType: 'auto'
  },
  {
    id: 1058266292,
    name: '妖股助手HD-优选短线强势股票',
    addType: 'auto'
  },
  {
    id: 1478540997,
    name: 'zClock - Clock & Countdown.',
    addType: 'auto'
  },
  {
    id: 1451273814,
    name: 'nPlayer',
    addType: 'auto'
  },
  {
    id: 1533946416,
    name: 'MyZip Pro-7z zip rar多线程极速压缩工具',
    addType: 'auto'
  },
  {
    id: 476566660,
    name: 'Earth 3D',
    addType: 'auto'
  },
  {
    id: 1325456420,
    name: 'Music Format Converter HQ',
    addType: 'auto'
  },
  {
    id: 668609870,
    name: 'Rar Sharp',
    addType: 'auto'
  },
  {
    id: 1381028448,
    name: '百读不厌 - 听书、看书神器',
    addType: 'auto'
  },
  {
    id: 1269984974,
    name: 'Markdown - Enjoy writing',
    addType: 'auto'
  },
  {
    id: 991247047,
    name: 'Flowchart Designer Premium',
    addType: 'auto'
  },
  {
    id: 689176796,
    name: 'Python Runner',
    addType: 'auto'
  },
  {
    id: 1265704574,
    name: 'Bandizip: Archiver',
    addType: 'auto'
  },
  {
    id: 1199716810,
    name: '五子棋打谱软件',
    addType: 'auto'
  },
  {
    id: 1385628859,
    name: 'Highlighter for Safari',
    addType: 'auto'
  },
  {
    id: 1521805728,
    name: 'iVault - secure your files',
    addType: 'auto'
  },
  {
    id: 1632395174,
    name: 'CleanMyMac X Multi-License',
    addType: 'auto'
  },
  {
    id: 775050502,
    name: 'American Sign Language',
    addType: 'auto'
  },
  {
    id: 904280696,
    name: 'Things 3',
    addType: 'auto'
  },
  {
    id: 1384206666,
    name: 'DemoPro - Screen Annotation',
    addType: 'auto'
  },
  {
    id: 464050545,
    name: 'Algodoo Physics',
    addType: 'auto'
  },
  {
    id: 808501572,
    name: 'Backgrounds',
    addType: 'auto'
  },
  {
    id: 1576064082,
    name: 'DeviceMirror -Screen Mirroring',
    addType: 'auto'
  },
  {
    id: 6670793258,
    name: 'LaTeX Editor Pro',
    addType: 'auto'
  },
  {
    id: 6474615359,
    name: 'MathCapture - Equation Editor',
    addType: 'auto'
  },
  {
    id: 1535623374,
    name: 'RenameBest: Rename in Batch',
    addType: 'auto'
  },
  {
    id: 1459663647,
    name: 'Virtual Location',
    addType: 'auto'
  },
  {
    id: 1214761683,
    name: 'iWall-Dynamic Desktop Engine',
    addType: 'auto'
  },
  {
    id: 796608673,
    name: 'Animal Typing',
    addType: 'auto'
  },
  {
    id: 966457795,
    name: 'Super PhotoCut',
    addType: 'auto'
  },
  {
    id: 1561303442,
    name: '人生必读百本书',
    addType: 'auto'
  },
  {
    id: 453164367,
    name: 'SystemPal',
    addType: 'auto'
  },
  {
    id: 1425997715,
    name: 'RAR Extractor Pro - Unzip',
    addType: 'auto'
  },
  {
    id: 431224317,
    name: 'Disk Drill Media Recovery',
    addType: 'auto'
  },
  {
    id: 1415704056,
    name: 'The App Locker -Best Lock Apps',
    addType: 'auto'
  },
  {
    id: 1204268874,
    name: 'Lyrics Editor',
    addType: 'auto'
  },
  {
    id: 609649363,
    name: 'Earth 3D - World Atlas',
    addType: 'auto'
  },
  {
    id: 1162194131,
    name: 'Easy New File',
    addType: 'auto'
  },
  {
    id: 6474506915,
    name: 'Sticker - Desktop Notepad',
    addType: 'auto'
  },
  {
    id: 1403919533,
    name: 'MWeb Pro',
    addType: 'auto'
  },
  {
    id: 6472813601,
    name: 'NinjaMouse - Your mouse master',
    addType: 'auto'
  },
  {
    id: 775737590,
    name: 'iA Writer',
    addType: 'auto'
  },
  {
    id: 1028838684,
    name: 'Artpaper: New Wallpapers Daily',
    addType: 'auto'
  },
  {
    id: 1102242042,
    name: 'Subtitler for fcpxml',
    addType: 'auto'
  },
  {
    id: 1445268016,
    name: 'Duplicate Cleaner',
    addType: 'auto'
  },
  {
    id: 937759555,
    name: 'Elmedia:universal video player',
    addType: 'auto'
  },
  {
    id: 1313164484,
    name: 'Distance and Area Measure',
    addType: 'auto'
  },
  {
    id: 1494552451,
    name: '小说大全',
    addType: 'auto'
  },
  {
    id: 1273980573,
    name: 'Best Data Recovery',
    addType: 'auto'
  },
  {
    id: 522706442,
    name: 'Sync Folders Pro',
    addType: 'auto'
  },
  {
    id: 6736433415,
    name: 'DICOM Viewer+',
    addType: 'auto'
  },
  {
    id: 1619982017,
    name: '五笔拆字',
    addType: 'auto'
  },
  {
    id: 532441535,
    name: 'Presentation Prompter',
    addType: 'auto'
  },
  {
    id: 1153435308,
    name: 'inddPreview',
    addType: 'auto'
  },
  {
    id: 417392270,
    name: 'MDB ACCDB Viewer',
    addType: 'auto'
  },
  {
    id: 1475051844,
    name: 'Filmage Converter Pro-MKV,AVI',
    addType: 'auto'
  },
  {
    id: 1441394270,
    name: 'Oka Unarchiver Pro - Unzip RAR',
    addType: 'auto'
  },
  {
    id: 6711333801,
    name: 'Live Crypto Prices, Charts',
    addType: 'auto'
  },
  {
    id: 1447010168,
    name: 'Music Dictionary - Music Terms',
    addType: 'auto'
  },
  {
    id: 658182498,
    name: 'Address Book to CSV',
    addType: 'auto'
  },
  {
    id: 6465744342,
    name: 'iBoot - StartupDisk shortcut',
    addType: 'auto'
  },
  {
    id: 1526912781,
    name: 'Rainbow Folder - Icon changer',
    addType: 'auto'
  },
  {
    id: 584393206,
    name: 'Cardiograph',
    addType: 'auto'
  },
  {
    id: 668331139,
    name: 'Backup Scheduler: Time Editor',
    addType: 'auto'
  },
  {
    id: 1261004863,
    name: 'Data Recovery EX',
    addType: 'auto'
  },
  {
    id: 6738346322,
    name: 'NaturalSpelling-自然拼读音标スペル',
    addType: 'auto'
  },
  {
    id: 1607691467,
    name: 'Auto Refresh Page',
    addType: 'auto'
  },
  {
    id: 6446939328,
    name: 'OmniZip Pro',
    addType: 'auto'
  },
  {
    id: 877615577,
    name: 'Serial',
    addType: 'auto'
  },
  {
    id: 432850619,
    name: 'FL Studio Mobile',
    addType: 'auto'
  },
  {
    id: 1447010168,
    name: 'Music Dictionary - Music Terms',
    addType: 'auto'
  },
  {
    id: 1325456420,
    name: 'Music Format Converter HQ',
    addType: 'auto'
  },
  {
    id: 514840980,
    name: 'Total Video Converter',
    addType: 'auto'
  },
  {
    id: 1643033301,
    name: 'MIDIRMX',
    addType: 'auto'
  },
  {
    id: 1584154464,
    name: 'MIDI Router',
    addType: 'auto'
  },
  {
    id: 1204268874,
    name: 'Lyrics Editor',
    addType: 'auto'
  },
  {
    id: 874418479,
    name: 'Audio Convert Factory',
    addType: 'auto'
  },
  {
    id: 963571828,
    name: 'Audio Merge & Split',
    addType: 'auto'
  },
  {
    id: 1178295426,
    name: 'Colibri',
    addType: 'auto'
  },
  {
    id: 1532597159,
    name: 'Mp3tag',
    addType: 'auto'
  },
  {
    id: 554883654,
    name: 'Metadatics',
    addType: 'auto'
  },
  {
    id: 1506457515,
    name: 'Stage Plot Maker X',
    addType: 'auto'
  },
  {
    id: 1567204629,
    name: 'Ringtone Maker -Easy ringtone!',
    addType: 'auto'
  },
  {
    id: 963573437,
    name: 'Audio Convert、Merge & Split',
    addType: 'auto'
  },
  {
    id: 6458546013,
    name: 'HI-Player',
    addType: 'auto'
  },
  {
    id: 6443536652,
    name: 'Audio Convertor - M4A,FLAC,M4R',
    addType: 'auto'
  },
  {
    id: 447726582,
    name: 'iAudioConverter',
    addType: 'auto'
  },
  {
    id: 808285143,
    name: 'myTuner Radio Pro',
    addType: 'auto'
  },
  {
    id: 405537804,
    name: 'Sound Studio',
    addType: 'auto'
  },
  {
    id: 1036029895,
    name: 'Music Convert-Audio Converter',
    addType: 'auto'
  },
  {
    id: 492478362,
    name: 'MidiKey',
    addType: 'auto'
  },
  {
    id: 402437824,
    name: 'Ringer - Ringtone Maker',
    addType: 'auto'
  },
  {
    id: 1486434332,
    name: 'TextMusic - Music Notation',
    addType: 'auto'
  },
  {
    id: 797275229,
    name: 'AudioTunes - FLAC, APE, WMA Converter',
    addType: 'auto'
  },
  {
    id: 1062190398,
    name: 'Drummy - Ultimate Beat Maker',
    addType: 'auto'
  },
  {
    id: 412675054,
    name: 'Tunesify',
    addType: 'auto'
  },
  {
    id: 468990782,
    name: 'Music Converter Pro',
    addType: 'auto'
  },
  {
    id: 522349879,
    name: 'DM1 - The Drum Machine',
    addType: 'auto'
  },
  {
    id: 1661522614,
    name: 'JianPu Editor',
    addType: 'auto'
  },
  {
    id: 1517312650,
    name: 'Notify for Spotify',
    addType: 'auto'
  },
  {
    id: 455545700,
    name: 'BitPerfect',
    addType: 'auto'
  },
  {
    id: 929166131,
    name: 'easyMusic',
    addType: 'auto'
  },
  {
    id: 991729082,
    name: 'Radio',
    addType: 'auto'
  },
  {
    id: 673906093,
    name: 'Audio Normalizer - Mp3 Gain',
    addType: 'auto'
  },
  {
    id: 1174330003,
    name: 'Fine Chromatic Tuner',
    addType: 'auto'
  },
  {
    id: 1538268059,
    name: 'Metronome - Metronome Pro',
    addType: 'auto'
  },
  {
    id: 984332192,
    name: 'Audio Edit Pro-Audio Editor',
    addType: 'auto'
  },
  {
    id: 851766802,
    name: 'Super Midi Convert & Play',
    addType: 'auto'
  },
  {
    id: 660027017,
    name: 'Easy Audio Recorder',
    addType: 'auto'
  },
  {
    id: 798738112,
    name: 'MetroGnome',
    addType: 'auto'
  },
  {
    id: 975152825,
    name: 'Audio Edit Studio - Editor',
    addType: 'auto'
  },
  {
    id: 558317092,
    name: 'Meta — Music Tag Editor',
    addType: 'auto'
  },
  {
    id: 813546051,
    name: 'Music Speed Changer',
    addType: 'auto'
  },
  {
    id: 1489887480,
    name: 'Hearing: ear training. Piano.',
    addType: 'auto'
  },
  {
    id: 444696268,
    name: 'TunesArt',
    addType: 'auto'
  },
  {
    id: 972934780,
    name: 'Audio Convert-Music Converter',
    addType: 'auto'
  },
  {
    id: 438292371,
    name: 'Amadeus Pro',
    addType: 'auto'
  },
  {
    id: 568052099,
    name: 'AmpKit - guitar amp & effects',
    addType: 'auto'
  },
  {
    id: 978234147,
    name: 'CD Burn Pro - Music CD',
    addType: 'auto'
  },
  {
    id: 910469258,
    name: 'Amazing Slow Downer',
    addType: 'auto'
  },
  {
    id: 1468259834,
    name: 'miRack',
    addType: 'auto'
  },
  {
    id: 548947732,
    name: 'Guitar Jam Tracks - Scale Trainer & Practice Buddy',
    addType: 'auto'
  },
  {
    id: 940526959,
    name: 'insTuner - Chromatic Tuner for Guitar, Ukulele and String Instruments',
    addType: 'auto'
  },
  {
    id: 417725762,
    name: 'Cross DJ',
    addType: 'auto'
  },
  {
    id: 1441635265,
    name: 'Easy MP3 Converter',
    addType: 'auto'
  },
  {
    id: 1329435840,
    name: 'Guitar Gravitas: Total ed.',
    addType: 'auto'
  },
  {
    id: 1451247572,
    name: 'Solfa: learn musical notes',
    addType: 'auto'
  },
  {
    id: 633262839,
    name: 'Any FLAC Converter',
    addType: 'auto'
  },
  {
    id: 709019909,
    name: 'Flac to Any Pro',
    addType: 'auto'
  },
  {
    id: 678772226,
    name: 'Audio Cutter - Cut and Split Music Files',
    addType: 'auto'
  },
  {
    id: 463687032,
    name: 'MP3-Converter',
    addType: 'auto'
  },
  {
    id: 1322360459,
    name: 'Drum Beats Metronome',
    addType: 'auto'
  },
  {
    id: 416135376,
    name: 'Fidelia',
    addType: 'auto'
  },
  {
    id: 975790852,
    name: 'Audio Trim Split-Audio Editor',
    addType: 'auto'
  },
  {
    id: 425086676,
    name: 'Decibel',
    addType: 'auto'
  },
  {
    id: 829431988,
    name: 'DSD Master',
    addType: 'auto'
  },
  {
    id: 1255792493,
    name: 'Guitar Tabs X',
    addType: 'auto'
  },
  {
    id: 1188564124,
    name: 'Master Class - Guides for Audacity',
    addType: 'auto'
  },
  {
    id: 1207009001,
    name: 'Tone Generator',
    addType: 'auto'
  },
  {
    id: 1313982113,
    name: 'BPM Tap Tempo',
    addType: 'auto'
  },
  {
    id: 1157672888,
    name: 'Tempomate',
    addType: 'auto'
  },
  {
    id: 1357379892,
    name: 'Menu Bar Controller for Sonos',
    addType: 'auto'
  },
  {
    id: 594731639,
    name: 'Super MP3 Converter',
    addType: 'auto'
  },
  {
    id: 506232966,
    name: 'Tag',
    addType: 'auto'
  },
  {
    id: 562799291,
    name: 'Drum Beats+ (Rhythm Metronome, Loops & Grooves Machine)',
    addType: 'auto'
  },
  {
    id: 435040864,
    name: 'NoSleep',
    addType: 'auto'
  },
  {
    id: 1661929636,
    name: 'Staff Editor',
    addType: 'auto'
  },
  {
    id: 832335884,
    name: 'Piano Notes Finder',
    addType: 'auto'
  },
  {
    id: 912509512,
    name: 'SignalSpy - Audio Oscilloscope, Frequency Spectrum Analyzer, and more',
    addType: 'auto'
  },
  {
    id: 498787769,
    name: 'General MIDI Player',
    addType: 'auto'
  },
  {
    id: 1464643583,
    name: 'Audio Voice Changer',
    addType: 'auto'
  },
  {
    id: 886882234,
    name: 'Tag Editor',
    addType: 'auto'
  },
  {
    id: 698196505,
    name: 'Audio Converter Pro',
    addType: 'auto'
  },
  {
    id: 1126098076,
    name: 'Silenz',
    addType: 'auto'
  },
  {
    id: 880764359,
    name: 'Export for iTunes',
    addType: 'auto'
  },
  {
    id: 1061524108,
    name: 'Muse: Music Player for YouTube',
    addType: 'auto'
  },
  {
    id: 915342927,
    name: 'NetRadio Italy',
    addType: 'auto'
  },
  {
    id: 1048950608,
    name: 'Convert to Mp3 Pro - Converter',
    addType: 'auto'
  },
  {
    id: 639386679,
    name: 'Vector 3 - Record & Edit Audio',
    addType: 'auto'
  },
  {
    id: 432769658,
    name: 'TabView',
    addType: 'auto'
  },
  {
    id: 1136096513,
    name: 'MP3 Music Converter - Aisee',
    addType: 'auto'
  },
  {
    id: 586172415,
    name: 'Tipard All Music Converter',
    addType: 'auto'
  },
  {
    id: 571673359,
    name: 'Tray Player',
    addType: 'auto'
  },
  {
    id: 1021162460,
    name: 'Chords Compass',
    addType: 'auto'
  },
  {
    id: 577400737,
    name: 'Easy Guitar Tuner',
    addType: 'auto'
  },
  {
    id: 409957696,
    name: 'MP3 Encoder',
    addType: 'auto'
  },
  {
    id: 1423295407,
    name: 'Ampado PRO - Audio Player',
    addType: 'auto'
  },
  {
    id: 1259223205,
    name: 'TunesMechanic for iTunes',
    addType: 'auto'
  },
  {
    id: 450527929,
    name: 'djay - DJ App & AI Mixer',
    addType: 'auto'
  },
  {
    id: 1070455587,
    name: 'MP3 Converter - Audio Convert',
    addType: 'auto'
  },
  {
    id: 1575723133,
    name: 'Audio Editor Ringtone Maker',
    addType: 'auto'
  },
  {
    id: 1612790003,
    name: 'Audio Converter - One Click',
    addType: 'auto'
  },
  {
    id: 1339124759,
    name: 'Audio Editor & Music Mixer',
    addType: 'auto'
  },
  {
    id: 461369673,
    name: 'VOX: MP3 & FLAC Music Player',
    addType: 'auto'
  },
  {
    id: 1496955576,
    name: 'SpeakerAmp:Booster & Equalizer',
    addType: 'auto'
  },
  {
    id: 1171417699,
    name: 'Guitar Gravitas: Chords Scales',
    addType: 'auto'
  },
  {
    id: 1594027432,
    name: 'Flacbox',
    addType: 'auto'
  },
  {
    id: 1057051963,
    name: 'Music Transfer for iTunes',
    addType: 'auto'
  },
  {
    id: 1027093462,
    name: 'Visual Cue FLAC DMX MP3 Player',
    addType: 'auto'
  },
  {
    id: 1594027661,
    name: 'Evertag',
    addType: 'auto'
  },
  {
    id: 1058801458,
    name: 'Remixlive - Make Music & Beats',
    addType: 'auto'
  },
  {
    id: 1233048948,
    name: 'Boom3D: Volume Booster and EQ',
    addType: 'auto'
  },
  {
    id: 1492991594,
    name: 'EarMaster 7',
    addType: 'auto'
  },
  {
    id: 511170796,
    name: 'Music Tag Editor',
    addType: 'auto'
  },
  {
    id: 984278082,
    name: 'Tag Editor Lite',
    addType: 'auto'
  },
  {
    id: 1482460738,
    name: 'LRC Editor',
    addType: 'auto'
  },
  {
    id: 982124349,
    name: 'FLAC MP3 Converter',
    addType: 'auto'
  },
  {
    id: 1564384601,
    name: 'Evermusic',
    addType: 'auto'
  },
  {
    id: 1602757597,
    name: 'unMix: AI Vocal Remover',
    addType: 'auto'
  },
  {
    id: 446363299,
    name: 'n-Track Studio DAW',
    addType: 'auto'
  },
  {
    id: 1527105121,
    name: 'Neural Mix Pro',
    addType: 'auto'
  },
  {
    id: 797590911,
    name: 'MIDI Score',
    addType: 'auto'
  },
  {
    id: 1473448052,
    name: 'Piano Companion: Chords,Scales',
    addType: 'auto'
  },
  {
    id: 970044455,
    name: 'WavePad Audio Editor',
    addType: 'auto'
  },
  {
    id: 6670775367,
    name: 'LioMusic - Music Editor',
    addType: 'auto'
  },
  {
    id: 1437556716,
    name: 'Mapcasts - No Advertisement',
    addType: 'auto'
  },
  {
    id: 412198565,
    name: 'Burp And Fart Piano',
    addType: 'auto'
  },
  {
    id: 733258444,
    name: 'MusicFans',
    addType: 'auto'
  },
  {
    id: 1049212349,
    name: 'Spectrum Analyzer: Sound Meter',
    addType: 'auto'
  },
  {
    id: 936243210,
    name: 'MiniPlay for Spotify & iTunes',
    addType: 'auto'
  },
  {
    id: 444425546,
    name: 'BarTunes',
    addType: 'auto'
  },
  {
    id: 1128271725,
    name: 'Keyboard Keyboard',
    addType: 'auto'
  },
  {
    id: 1483373320,
    name: 'Lyrics Production Editor',
    addType: 'auto'
  },
  {
    id: 1005227156,
    name: 'future.dj pro - mix everything',
    addType: 'auto'
  },
  {
    id: 1229106549,
    name: 'Music Tag Editor Pro',
    addType: 'auto'
  },
  {
    id: 1446942851,
    name: 'radio NED+',
    addType: 'auto'
  },
  {
    id: 1550581532,
    name: 'Vythm VJ - Music Visualizer DJ',
    addType: 'auto'
  },
  {
    id: 1550403011,
    name: 'iRightMouse Pro',
    addType: 'auto'
  },
  {
    id: 1611347086,
    name: 'iShot Pro-ScreenShot Recording',
    addType: 'auto'
  },
  {
    id: 494500492,
    name: '倒数日 · Days Matter for Desktop',
    addType: 'auto'
  },
  {
    id: 1469774098,
    name: 'QSpace',
    addType: 'auto'
  },
  {
    id: 1567442612,
    name: 'Qmenu',
    addType: 'auto'
  },
  {
    id: 1544655904,
    name: 'OmniReader Pro - AI Reader',
    addType: 'auto'
  },
  {
    id: 430798174,
    name: 'HazeOver • Distraction Dimmer™',
    addType: 'auto'
  },
  {
    id: 1218171533,
    name: 'Marklist - Manage Later Things',
    addType: 'auto'
  },
  {
    id: 1310686187,
    name: 'Scrivener 3',
    addType: 'auto'
  },
  {
    id: 1482490089,
    name: 'Tampermonkey Classic',
    addType: 'auto'
  },
  {
    id: 1535623374,
    name: 'RenameBest: Rename in Batch',
    addType: 'auto'
  },
  {
    id: 1114272557,
    name: '小历 - 小而美的日历',
    addType: 'auto'
  },
  {
    id: 1340697163,
    name: 'Record It Pro-Screen Recorder',
    addType: 'auto'
  },
  {
    id: 904280696,
    name: 'Things 3',
    addType: 'auto'
  },
  {
    id: 1269984974,
    name: 'Markdown - Enjoy writing',
    addType: 'auto'
  },
  {
    id: 876540291,
    name: 'Copy Em',
    addType: 'auto'
  },
  {
    id: 1384206666,
    name: 'DemoPro - Screen Annotation',
    addType: 'auto'
  },
  {
    id: 6670793258,
    name: 'LaTeX Editor Pro',
    addType: 'auto'
  },
  {
    id: 417375580,
    name: 'BetterSnapTool',
    addType: 'auto'
  },
  {
    id: 1403919533,
    name: 'MWeb Pro',
    addType: 'auto'
  },
  {
    id: 775737590,
    name: 'iA Writer',
    addType: 'auto'
  },
  {
    id: 1313164484,
    name: 'Distance and Area Measure',
    addType: 'auto'
  },
  {
    id: 1607691467,
    name: 'Auto Refresh Page',
    addType: 'auto'
  },
  {
    id: 6446939328,
    name: 'OmniZip Pro',
    addType: 'auto'
  },
  {
    id: 1541983985,
    name: 'Sketch 3D: Make 3D Easily',
    addType: 'auto'
  },
  {
    id: 1639698270,
    name: 'CalibCat Display Gamma Control',
    addType: 'auto'
  },
  {
    id: 1528890965,
    name: 'TextSniper - OCR, Copy & Paste',
    addType: 'auto'
  },
  {
    id: 420212497,
    name: 'Byword',
    addType: 'auto'
  },
  {
    id: 725408432,
    name: 'PDF Professional Suite',
    addType: 'auto'
  },
  {
    id: 1441958036,
    name: 'SideNotes - Thoughts & Tasks',
    addType: 'auto'
  },
  {
    id: 434808346,
    name: 'SimpleMind Pro',
    addType: 'auto'
  },
  {
    id: 407412840,
    name: 'DataGraph',
    addType: 'auto'
  },
  {
    id: 950512380,
    name: 'Notepad+ - Simple Document and Quick Note',
    addType: 'auto'
  },
  {
    id: 1368905598,
    name: 'Screencast – Screen Recorder',
    addType: 'auto'
  },
  {
    id: 1166066070,
    name: 'Bumpr',
    addType: 'auto'
  },
  {
    id: 6466263582,
    name: 'MouseXY',
    addType: 'auto'
  },
  {
    id: 6563146670,
    name: 'Miaotracer pro',
    addType: 'auto'
  },
  {
    id: 866773894,
    name: 'Quiver - take better notes',
    addType: 'auto'
  },
  {
    id: 1414457383,
    name: 'ToMenu - New&Move File Quickly',
    addType: 'auto'
  },
  {
    id: 1105814268,
    name: 'Focus Timer：Focus mind on work',
    addType: 'auto'
  },
  {
    id: 1156402585,
    name: 'Light Browser',
    addType: 'auto'
  },
  {
    id: 1519213509,
    name: 'iPreview - Powerful Quick Look',
    addType: 'auto'
  },
  {
    id: 1472854234,
    name: 'Copy+ Manage clipboard history',
    addType: 'auto'
  },
  {
    id: 1488905707,
    name: 'Noteshelf - 2',
    addType: 'auto'
  },
  {
    id: 1505869474,
    name: 'Pro Mouse',
    addType: 'auto'
  },
  {
    id: 6738089759,
    name: 'Hide Mouse Cursor',
    addType: 'auto'
  },
  {
    id: 902351149,
    name: 'Zip Password Recovery',
    addType: 'auto'
  },
  {
    id: 6450966627,
    name: 'Final Draft 13',
    addType: 'auto'
  },
  {
    id: 1272114820,
    name: 'Lock Pro',
    addType: 'auto'
  },
  {
    id: 1181766626,
    name: 'Adware Zap - Malware Cleaner',
    addType: 'auto'
  },
  {
    id: 1609752330,
    name: 'Surfingkeys',
    addType: 'auto'
  },
  {
    id: 796275163,
    name: 'Total Manager: Files Commander & Ftp Remote Client',
    addType: 'auto'
  },
  {
    id: 1277179284,
    name: 'FSNotes',
    addType: 'auto'
  },
  {
    id: 577085396,
    name: 'Unclutter',
    addType: 'auto'
  },
  {
    id: 468406330,
    name: 'WPXO',
    addType: 'auto'
  },
  {
    id: 568020055,
    name: 'Scapple',
    addType: 'auto'
  },
  {
    id: 990588172,
    name: 'Gestimer (Legacy)',
    addType: 'auto'
  },
  {
    id: 1185528129,
    name: 'Internet Translator Pro .',
    addType: 'auto'
  },
  {
    id: 552664144,
    name: 'PDF Max Pro',
    addType: 'auto'
  },
  {
    id: 632455315,
    name: 'Templates for Excel Pro',
    addType: 'auto'
  },
  {
    id: 1143437985,
    name: 'GoodTask',
    addType: 'auto'
  },
  {
    id: 1459987506,
    name: 'Cleaner X - clear cache',
    addType: 'auto'
  },
  {
    id: 895264364,
    name: 'DjVu Reader Pro',
    addType: 'auto'
  },
  {
    id: 686459498,
    name: 'PaperShip - Mendeley & Zotero',
    addType: 'auto'
  },
  {
    id: 695406827,
    name: 'Dropzone 3',
    addType: 'auto'
  },
  {
    id: 702816521,
    name: 'Unibox',
    addType: 'auto'
  },
  {
    id: 412347921,
    name: 'OmmWriter',
    addType: 'auto'
  },
  {
    id: 1093111311,
    name: '3D CAD Graphic Modeling Design',
    addType: 'auto'
  },
  {
    id: 970502923,
    name: 'Typeeto: remote BT keyboard',
    addType: 'auto'
  },
  {
    id: 493057152,
    name: 'DB-Text',
    addType: 'auto'
  },
  {
    id: 454347770,
    name: 'iCircuit',
    addType: 'auto'
  },
  {
    id: 1286489308,
    name: 'Flat Tomato',
    addType: 'auto'
  },
  {
    id: 477670270,
    name: '2Do',
    addType: 'auto'
  },
  {
    id: 1445040281,
    name: 'Translate for Safari',
    addType: 'auto'
  },
  {
    id: 524373870,
    name: 'Due — Reminders & Timers',
    addType: 'auto'
  },
  {
    id: 974929595,
    name: 'Notions',
    addType: 'auto'
  },
  {
    id: 1507246666,
    name: 'Presentify - Screen Annotation',
    addType: 'auto'
  },
  {
    id: 686398447,
    name: 'Cheese Writer',
    addType: 'auto'
  },
  {
    id: 570384149,
    name: 'JPG to PDF Converter',
    addType: 'auto'
  },
  {
    id: 418926501,
    name: 'Timer by Ten',
    addType: 'auto'
  },
  {
    id: 1489287299,
    name: 'PDF To Word Helper',
    addType: 'auto'
  },
  {
    id: 685953216,
    name: 'Instashare - Transfer files',
    addType: 'auto'
  },
  {
    id: 995838410,
    name: 'Browser Ninja',
    addType: 'auto'
  },
  {
    id: 1482778901,
    name: 'Hungrymark',
    addType: 'auto'
  },
  {
    id: 408975584,
    name: 'Todo',
    addType: 'auto'
  },
  {
    id: 1178801474,
    name: 'Translator & Voice Collection',
    addType: 'auto'
  },
  {
    id: 1115551582,
    name: 'Doc Mate: for MS Office',
    addType: 'auto'
  },
  {
    id: 566210419,
    name: 'PDF to Word +',
    addType: 'auto'
  },
  {
    id: 1088311275,
    name: 'Easy Guide For Microsoft Excel',
    addType: 'auto'
  },
  {
    id: 409222199,
    name: 'Cyberduck',
    addType: 'auto'
  },
  {
    id: 890031187,
    name: 'Marked 2 - Markdown Preview',
    addType: 'auto'
  },
  {
    id: 1175751480,
    name: 'Translate Now: Linguist',
    addType: 'auto'
  },
  {
    id: 1448026988,
    name: 'Memo Board',
    addType: 'auto'
  },
  {
    id: 735128047,
    name: 'PDF Reader Pro: Edit & Convert',
    addType: 'auto'
  },
  {
    id: 1265723161,
    name: 'Podcast Soundboard',
    addType: 'auto'
  },
  {
    id: 1460795742,
    name: 'iNote -Sticky Notes &Countdown',
    addType: 'auto'
  },
  {
    id: 778813618,
    name: 'Voice Memos+',
    addType: 'auto'
  },
  {
    id: 1128242453,
    name: 'Pro Translate - translator app',
    addType: 'auto'
  },
  {
    id: 547166701,
    name: '百度网盘',
    addType: 'auto'
  },
  {
    id: 6741096204,
    name: 'Think AI: Ask Chatbot Anything',
    addType: 'auto'
  },
  {
    id: 1327661892,
    name: 'Xmind: Mind Map',
    addType: 'auto'
  },
  {
    id: 1570349123,
    name: 'Openly for Chrome and Firefox',
    addType: 'auto'
  },
  {
    id: 491854842,
    name: 'Youdao Translate',
    addType: 'auto'
  },
  {
    id: 1247341465,
    name: '同花顺-股票炒股软件',
    addType: 'auto'
  },
  {
    id: 1484905765,
    name: 'Fast CAD Reader',
    addType: 'auto'
  },
  {
    id: 747648890,
    name: 'Telegram',
    addType: 'auto'
  },
  {
    id: 6450939701,
    name: 'Chat One - AI Chat Box',
    addType: 'auto'
  },
  {
    id: 1565629813,
    name: 'FastZip - RAR 7Z ZIP UnZip',
    addType: 'auto'
  },
  {
    id: 1592987853,
    name: 'Screen Recorder by Omi',
    addType: 'auto'
  },
  {
    id: 1488071784,
    name: 'Wallpapers X - 4K Wallpaper',
    addType: 'auto'
  },
  {
    id: 1181028777,
    name: 'Flip Clock - digital widgets',
    addType: 'auto'
  },
  {
    id: 1485844094,
    name: 'iShot-ScreenShot Recording OCR',
    addType: 'auto'
  },
  {
    id: 6503169843,
    name: 'AI Chatbot : Ask AI Assistant',
    addType: 'auto'
  },
  {
    id: 1552826194,
    name: 'iWallpaper - Live Wallpaper',
    addType: 'auto'
  },
  {
    id: 6511220682,
    name: 'CleanMyApp - Uninstaller',
    addType: 'auto'
  },
  {
    id: 966085870,
    name: 'TickTick:To-Do List, Calendar',
    addType: 'auto'
  },
  {
    id: 1144400433,
    name: '东方财富经典版-股票开户证券炒股理财',
    addType: 'auto'
  },
  {
    id: 1497428978,
    name: 'iRightMouse',
    addType: 'auto'
  },
  {
    id: 886103288,
    name: '虎牙直播HD-游戏互动直播平台',
    addType: 'auto'
  },
  {
    id: 1541571038,
    name: 'NTFS Read&Write -iBoysoft NTFS',
    addType: 'auto'
  },
  {
    id: 1594288016,
    name: 'Wink: Video Enhancer & Editor',
    addType: 'auto'
  },
  {
    id: 1600668116,
    name: '有道云笔记-笔记效率办公',
    addType: 'auto'
  },
  {
    id: 6443843900,
    name: 'iBar-Menubar icon control tool',
    addType: 'auto'
  },
  {
    id: 1442745175,
    name: '快帆加速器-海外回国音乐视频加速器',
    addType: 'auto'
  },
  {
    id: 1518518216,
    name: 'Paper - Live Wallpapers',
    addType: 'auto'
  },
  {
    id: 1659622164,
    name: 'VidHub -Video Library & Player',
    addType: 'auto'
  },
  {
    id: 1570563588,
    name: 'CalendarTask - Efficient life',
    addType: 'auto'
  },
  {
    id: 734383760,
    name: '每日英语听力 - 英语听力的最佳途径',
    addType: 'auto'
  },
  {
    id: 1507782672,
    name: 'Pixea',
    addType: 'auto'
  },
  {
    id: 1259223205,
    name: 'TunesMechanic for iTunes',
    addType: 'auto'
  },
  {
    id: 1630034110,
    name: 'Bob - 翻译和 OCR 工具',
    addType: 'auto'
  },
  {
    id: 1221250572,
    name: 'Xnip - Screenshot & Annotation',
    addType: 'auto'
  },
  {
    id: 1575178082,
    name: 'Max NTFS - NTFS Disk Helper',
    addType: 'auto'
  },
  {
    id: 1619925971,
    name: 'UPDF - PDF Editor with AI',
    addType: 'auto'
  },
  {
    id: 1395152179,
    name: '奇游加速器 - 全球游戏畅玩',
    addType: 'auto'
  },
  {
    id: 503039729,
    name: 'Fotor: AI Photo Editor, Design',
    addType: 'auto'
  },
  {
    id: 1476545828,
    name: 'MacDroid - Manager for Android',
    addType: 'auto'
  },
  {
    id: 6449164812,
    name: '打字通 - 打字练习软件',
    addType: 'auto'
  },
  {
    id: 1536071582,
    name: 'Omni Converter - Video & Audio',
    addType: 'auto'
  },
  {
    id: 1456235760,
    name: 'Live Wallpaper - 4K UHD',
    addType: 'auto'
  },
  {
    id: 1599191594,
    name: 'iBoysoft MagicMenu',
    addType: 'auto'
  },
  {
    id: 1665341561,
    name: 'flomo浮墨笔记 - AI 加持的便签备忘',
    addType: 'auto'
  },
  {
    id: 1133028347,
    name: 'Cleaner One Pro - Uninstaller',
    addType: 'auto'
  },
  {
    id: 1514073011,
    name: 'QuickFox-海外回国加速器追剧听歌游戏留学生必备',
    addType: 'auto'
  },
  {
    id: 1345035954,
    name: '穿梭Transocks-海外华人回国加速器',
    addType: 'auto'
  },
  {
    id: 1176074088,
    name: 'Termius — Modern SSH Client',
    addType: 'auto'
  },
  {
    id: 1335335588,
    name: 'Final Video Player - MKV & MP4',
    addType: 'auto'
  },
  {
    id: 1044549675,
    name: 'Elmedia Video Player',
    addType: 'auto'
  },
  {
    id: 1453504509,
    name: 'Dynamic Wallpaper Engine',
    addType: 'auto'
  },
  {
    id: 1449438542,
    name: 'BestZip Pro - Unzip RAR&Zip&7z',
    addType: 'auto'
  },
  {
    id: 470158793,
    name: 'Keka',
    addType: 'auto'
  },
  {
    id: 1550403011,
    name: 'iRightMouse Pro',
    addType: 'auto'
  },
  {
    id: 1611347086,
    name: 'iShot Pro-ScreenShot Recording',
    addType: 'auto'
  },
  {
    id: 6737150304,
    name: 'iBar Pro-Menubar control tool',
    addType: 'auto'
  },
  {
    id: 647505820,
    name: 'RAR Extractor - Unarchiver Pro',
    addType: 'auto'
  },
  {
    id: 6740171321,
    name: 'FastZipPro- RAR 7Z ZIP UnZip',
    addType: 'auto'
  },
  {
    id: 6742392236,
    name: 'ClashX Pro :Service Monitoring',
    addType: 'auto'
  },
  {
    id: 1343182480,
    name: '东方财富领先版-股票开户证券炒股理财',
    addType: 'auto'
  },
  {
    id: 6741806831,
    name: 'ClashX Pro - Dashboard manager',
    addType: 'auto'
  },
  {
    id: 494500492,
    name: '倒数日 · Days Matter for Desktop',
    addType: 'auto'
  },
  {
    id: 951718596,
    name: 'FoxCAD',
    addType: 'auto'
  },
  {
    id: 1551531632,
    name: 'AutoSwitchInput Pro',
    addType: 'auto'
  },
  {
    id: 6738742748,
    name: 'Puzzle Spider Solitaire.',
    addType: 'auto'
  },
  {
    id: 1469774098,
    name: 'QSpace',
    addType: 'auto'
  },
  {
    id: 1459028801,
    name: '爱五笔 - 五笔编码拆字大全',
    addType: 'auto'
  },
  {
    id: 1567442612,
    name: 'Qmenu',
    addType: 'auto'
  },
  {
    id: 1544655904,
    name: 'OmniReader Pro - AI Reader',
    addType: 'auto'
  },
  {
    id: 411643860,
    name: 'DaisyDisk',
    addType: 'auto'
  },
  {
    id: 1486274102,
    name: 'MPlayer X Pro',
    addType: 'auto'
  },
  {
    id: 461788075,
    name: 'Movist',
    addType: 'auto'
  },
  {
    id: 1218171533,
    name: 'Marklist - Manage Later Things',
    addType: 'auto'
  },
  {
    id: 6474505156,
    name: '照片处理工具 - 公务员考试报名确认照片审核',
    addType: 'auto'
  },
  {
    id: 510620098,
    name: 'MediaInfo',
    addType: 'auto'
  },
  {
    id: 432850619,
    name: 'FL Studio Mobile',
    addType: 'auto'
  },
  {
    id: 1642304143,
    name: 'SerialPort Debug Assistant Pro',
    addType: 'auto'
  },
  {
    id: 430798174,
    name: 'HazeOver • Distraction Dimmer™',
    addType: 'auto'
  },
  {
    id: 457622435,
    name: 'Yoink - Better Drag and Drop',
    addType: 'auto'
  },
  {
    id: 1606275031,
    name: 'Picture View: Image browser',
    addType: 'auto'
  },
  {
    id: 1555844307,
    name: 'MouseBoost Pro',
    addType: 'auto'
  },
  {
    id: 402380914,
    name: 'Eudic 欧路词典 增强版',
    addType: 'auto'
  },
  {
    id: 6738715418,
    name: 'STEP and IGES File Viewer',
    addType: 'auto'
  },
  {
    id: 977949232,
    name: 'Daygram : My Secret Diary',
    addType: 'auto'
  },
  {
    id: 847259925,
    name: 'SnailSVN: SVN for Finder',
    addType: 'auto'
  },
  {
    id: 389083586,
    name: 'MDict',
    addType: 'auto'
  },
  {
    id: 1516451072,
    name: 'Another Desktop Manager',
    addType: 'auto'
  },
  {
    id: 1482490089,
    name: 'Tampermonkey Classic',
    addType: 'auto'
  },
  {
    id: 6502828594,
    name: 'Template for Adobe illustrator',
    addType: 'auto'
  },
  {
    id: 1622138166,
    name: 'Change Video Speed for Safari',
    addType: 'auto'
  },
  {
    id: 1058266292,
    name: '妖股助手HD-优选短线强势股票',
    addType: 'auto'
  },
  {
    id: 1478540997,
    name: 'zClock - Clock & Countdown.',
    addType: 'auto'
  },
  {
    id: 1451273814,
    name: 'nPlayer',
    addType: 'auto'
  },
  {
    id: 1533946416,
    name: 'MyZip Pro-7z zip rar多线程极速压缩工具',
    addType: 'auto'
  },
  {
    id: 476566660,
    name: 'Earth 3D',
    addType: 'auto'
  },
  {
    id: 1325456420,
    name: 'Music Format Converter HQ',
    addType: 'auto'
  },
  {
    id: 668609870,
    name: 'Rar Sharp',
    addType: 'auto'
  },
  {
    id: 1381028448,
    name: '百读不厌 - 听书、看书神器',
    addType: 'auto'
  },
  {
    id: 1269984974,
    name: 'Markdown - Enjoy writing',
    addType: 'auto'
  },
  {
    id: 991247047,
    name: 'Flowchart Designer Premium',
    addType: 'auto'
  },
  {
    id: 689176796,
    name: 'Python Runner',
    addType: 'auto'
  },
  {
    id: 1265704574,
    name: 'Bandizip: Archiver',
    addType: 'auto'
  },
  {
    id: 1199716810,
    name: '五子棋打谱软件',
    addType: 'auto'
  },
  {
    id: 1385628859,
    name: 'Highlighter for Safari',
    addType: 'auto'
  },
  {
    id: 1521805728,
    name: 'iVault - secure your files',
    addType: 'auto'
  },
  {
    id: 1632395174,
    name: 'CleanMyMac X Multi-License',
    addType: 'auto'
  },
  {
    id: 775050502,
    name: 'American Sign Language',
    addType: 'auto'
  },
  {
    id: 904280696,
    name: 'Things 3',
    addType: 'auto'
  },
  {
    id: 1384206666,
    name: 'DemoPro - Screen Annotation',
    addType: 'auto'
  },
  {
    id: 464050545,
    name: 'Algodoo Physics',
    addType: 'auto'
  },
  {
    id: 808501572,
    name: 'Backgrounds',
    addType: 'auto'
  },
  {
    id: 1576064082,
    name: 'DeviceMirror -Screen Mirroring',
    addType: 'auto'
  },
  {
    id: 6670793258,
    name: 'LaTeX Editor Pro',
    addType: 'auto'
  },
  {
    id: 6474615359,
    name: 'MathCapture - Equation Editor',
    addType: 'auto'
  },
  {
    id: 1535623374,
    name: 'RenameBest: Rename in Batch',
    addType: 'auto'
  },
  {
    id: 1459663647,
    name: 'Virtual Location',
    addType: 'auto'
  },
  {
    id: 1214761683,
    name: 'iWall-Dynamic Desktop Engine',
    addType: 'auto'
  },
  {
    id: 796608673,
    name: 'Animal Typing',
    addType: 'auto'
  },
  {
    id: 966457795,
    name: 'Super PhotoCut',
    addType: 'auto'
  },
  {
    id: 1561303442,
    name: '人生必读百本书',
    addType: 'auto'
  },
  {
    id: 453164367,
    name: 'SystemPal',
    addType: 'auto'
  },
  {
    id: 1425997715,
    name: 'RAR Extractor Pro - Unzip',
    addType: 'auto'
  },
  {
    id: 431224317,
    name: 'Disk Drill Media Recovery',
    addType: 'auto'
  },
  {
    id: 1415704056,
    name: 'The App Locker -Best Lock Apps',
    addType: 'auto'
  },
  {
    id: 1204268874,
    name: 'Lyrics Editor',
    addType: 'auto'
  },
  {
    id: 609649363,
    name: 'Earth 3D - World Atlas',
    addType: 'auto'
  },
  {
    id: 1162194131,
    name: 'Easy New File',
    addType: 'auto'
  },
  {
    id: 6474506915,
    name: 'Sticker - Desktop Notepad',
    addType: 'auto'
  },
  {
    id: 1403919533,
    name: 'MWeb Pro',
    addType: 'auto'
  },
  {
    id: 6472813601,
    name: 'NinjaMouse - Your mouse master',
    addType: 'auto'
  },
  {
    id: 775737590,
    name: 'iA Writer',
    addType: 'auto'
  },
  {
    id: 1028838684,
    name: 'Artpaper: New Wallpapers Daily',
    addType: 'auto'
  },
  {
    id: 1102242042,
    name: 'Subtitler for fcpxml',
    addType: 'auto'
  },
  {
    id: 1445268016,
    name: 'Duplicate Cleaner',
    addType: 'auto'
  },
  {
    id: 937759555,
    name: 'Elmedia:universal video player',
    addType: 'auto'
  },
  {
    id: 1313164484,
    name: 'Distance and Area Measure',
    addType: 'auto'
  },
  {
    id: 1494552451,
    name: '小说大全',
    addType: 'auto'
  },
  {
    id: 1273980573,
    name: 'Best Data Recovery',
    addType: 'auto'
  },
  {
    id: 522706442,
    name: 'Sync Folders Pro',
    addType: 'auto'
  },
  {
    id: 6736433415,
    name: 'DICOM Viewer+',
    addType: 'auto'
  },
  {
    id: 1619982017,
    name: '五笔拆字',
    addType: 'auto'
  },
  {
    id: 532441535,
    name: 'Presentation Prompter',
    addType: 'auto'
  },
  {
    id: 1153435308,
    name: 'inddPreview',
    addType: 'auto'
  },
  {
    id: 417392270,
    name: 'MDB ACCDB Viewer',
    addType: 'auto'
  },
  {
    id: 1475051844,
    name: 'Filmage Converter Pro-MKV,AVI',
    addType: 'auto'
  },
  {
    id: 1441394270,
    name: 'Oka Unarchiver Pro - Unzip RAR',
    addType: 'auto'
  },
  {
    id: 6711333801,
    name: 'Live Crypto Prices, Charts',
    addType: 'auto'
  },
  {
    id: 1447010168,
    name: 'Music Dictionary - Music Terms',
    addType: 'auto'
  },
  {
    id: 658182498,
    name: 'Address Book to CSV',
    addType: 'auto'
  },
  {
    id: 6465744342,
    name: 'iBoot - StartupDisk shortcut',
    addType: 'auto'
  },
  {
    id: 1526912781,
    name: 'Rainbow Folder - Icon changer',
    addType: 'auto'
  },
  {
    id: 584393206,
    name: 'Cardiograph',
    addType: 'auto'
  },
  {
    id: 668331139,
    name: 'Backup Scheduler: Time Editor',
    addType: 'auto'
  },
  {
    id: 1261004863,
    name: 'Data Recovery EX',
    addType: 'auto'
  },
  {
    id: 6738346322,
    name: 'NaturalSpelling-自然拼读音标スペル',
    addType: 'auto'
  },
  {
    id: 1607691467,
    name: 'Auto Refresh Page',
    addType: 'auto'
  },
  {
    id: 6446939328,
    name: 'OmniZip Pro',
    addType: 'auto'
  },
  {
    id: 877615577,
    name: 'Serial',
    addType: 'auto'
  },
  {
    id: 1448326351,
    name: '数据恢复',
    addType: 'auto',
  },
  {
    id: 6743422824,
    name: {
      tw: 'Pixel Paws - Virtual Pet Toy',
    },
    addType: 'auto',
  },
  {
    id: 885792725,
    name: {
      mo: "THE KING OF FIGHTERS '98",
    },
    addType: 'auto',
  },
  {
    id: 1577752006,
    name: {
      mo: 'SoccerPlus-足球運動記錄和訓練',
    },
    addType: 'auto',
  },
  {
    id: 1632953327,
    name: {
      mo: 'Tivimax IPTV Player (Premium)',
    },
    addType: 'auto',
  },
  {
    id: 1523146826,
    name: {
      hk: '全民RPG：重啟',
    },
    addType: 'auto',
  },
  {
    id: 1609683141,
    name: {
      us: 'Dirt Trackin 3',
    },
    addType: 'auto',
  },
  {
    id: 1639509098,
    name: {
      tw: '帕夏星球：重生',
    },
    addType: 'auto',
  },
  {
    id: 6738923299,
    name: {
      hk: 'Spin Hero',
    },
    addType: 'auto',
  },
  {
    id: 299342927,
    name: {
      hk: 'PocketPhonics (basic edition)',
    },
    addType: 'auto',
  },
  {
    id: 6502399166,
    name: {
      mo: '卡路狸 - 轻运动记录',
    },
    addType: 'auto',
  },
  {
    id: 1435752659,
    name: {
      mo: '駕考王-摩托車、汽車、客車、貨車駕駛實習考試',
    },
    addType: 'auto',
  },
  {
    id: 6458733069,
    name: {
      mo: '養生鐘 - 解压小橙子 经络穴位图解',
    },
    addType: 'auto',
  },
  {
    id: 1216484605,
    name: {
      mo: 'Viewfinder Preview',
    },
    addType: 'auto',
  },
  {
    id: 440666387,
    name: {
      mo: '化學家 - CHEMIST',
    },
    addType: 'auto',
  },
  {
    id: 6480058345,
    name: {
      mo: '怪獸大進擊 2',
    },
    addType: 'auto',
  },
  {
    id: 6745711999,
    name: {
      cn: '青签助手',
    },
    addType: 'auto',
  },
  {
    id: 1060082362,
    name: {
      mo: 'OrthoFlow',
    },
    addType: 'auto',
  },
  {
    id: 486578707,
    name: {
      mo: 'Unofficial Minifigure Catalog',
    },
    addType: 'auto',
  },
  {
    id: 1083801827,
    name: {
      mo: 'Note Rush: Music Reading Game',
    },
    addType: 'auto',
  },
  {
    id: 378272803,
    name: {
      mo: 'DaF Wörterbuch Deutsch-Deutsch',
    },
    addType: 'auto',
  },
  {
    id: 6503088710,
    name: {
      hk: 'World of Goo 2',
    },
    addType: 'auto',
  },
  {
    id: 1659258538,
    name: {
      mo: 'Video Cacher',
    },
    addType: 'auto',
  },
  {
    id: 983143183,
    name: {
      mo: '夢幻怪獸',
    },
    addType: 'auto',
  },
  {
    id: 708196645,
    name: {
      mo: 'Oceanhorn ™',
    },
    addType: 'auto',
  },
  {
    id: 6503932402,
    name: {
      mo: '超声智学',
    },
    addType: 'auto',
  },
  {
    id: 325307477,
    name: {
      mo: 'AudioTools - dB, Sound & Audio',
    },
    addType: 'auto',
  },
  {
    id: 929618748,
    name: {
      mo: 'Squeezy Men',
    },
    addType: 'auto',
  },
  {
    id: 519561306,
    name: {
      mo: 'ATracker PRO - 每日時間管理',
    },
    addType: 'auto',
  },
  {
    id: 1456212639,
    name: {
      mo: '返校',
    },
    addType: 'auto',
  },
  {
    id: 734464614,
    name: {
      mo: '生命密碼',
    },
    addType: 'auto',
  },
  {
    id: 941671702,
    name: {
      mo: 'GR Remote Viewer for GR2 & GR3',
    },
    addType: 'auto',
  },
  {
    id: 744851208,
    name: {
      mo: '賽馬牧場物語',
    },
    addType: 'auto',
  },
  {
    id: 1123652342,
    name: {
      mo: '侏羅紀GO - 恐龍抓拍歷險 - 發現並且抓拍可愛、有趣的恐龍',
    },
    addType: 'auto',
  },
  {
    id: 6742740688,
    name: {
      cn: '无声冲突',
    },
    addType: 'auto',
  },
  {
    id: 1369253556,
    name: {
      tr: 'Light | Long Exposure',
    },
    addType: 'auto',
  },
  {
    id: 6449251957,
    name: {
      mo: 'Motorsport Manager 4',
    },
    addType: 'auto',
  },
  {
    id: 968820626,
    name: {
      mo: 'Watch Tuner Lite',
    },
    addType: 'auto',
  },
  {
    id: 1065791514,
    name: {
      mo: '開羅拉麵店',
    },
    addType: 'auto',
  },
  {
    id: 1114127463,
    name: {
      mo: '王權 (Reigns)',
    },
    addType: 'auto',
  },
  {
    id: 1636439801,
    name: {
      mo: '軌道連結:Railbound',
    },
    addType: 'auto',
  },
  {
    id: 1479808939,
    name: {
      mo: '孙美琪',
    },
    addType: 'auto',
  },
  {
    id: 6451376191,
    name: {
      mo: 'DumbPhone: 簡約主畫面',
    },
    addType: 'auto',
  },
  {
    id: 6446912063,
    name: {
      mo: 'Disney Iwájú: Rising Chef',
    },
    addType: 'auto',
  },
  {
    id: 1611723264,
    name: {
      mo: '人類跌落夢境',
    },
    addType: 'auto',
  },
  {
    id: 409818349,
    name: {
      mo: 'Real Piano™ Classic',
    },
    addType: 'auto',
  },
  {
    id: 1141282192,
    name: {
      mo: 'Advanced Comprehension Therapy',
    },
    addType: 'auto',
  },
  {
    id: 6737434503,
    name: {
      tw: '將星三國',
    },
    addType: 'auto',
  },
  {
    id: 478289911,
    name: {
      mo: 'iMMIG 記帳小秘書',
    },
    addType: 'auto',
  },
  {
    id: 1269488509,
    name: {
      mo: '饥荒语音助手',
    },
    addType: 'auto',
  },
  {
    id: 426860241,
    name: {
      mo: 'Mini Motor Racing',
    },
    addType: 'auto',
  },
  {
    id: 531727127,
    name: {
      mo: 'CovertCam',
    },
    addType: 'auto',
  },
  {
    id: 1102750714,
    name: {
      mo: '地牢求生 - 無盡的迷宮',
    },
    addType: 'auto',
  },
  {
    id: 1387331406,
    name: {
      mo: 'Flamelet',
    },
    addType: 'auto',
  },
  {
    id: 1139588979,
    name: {
      mo: '位置偽裝器 - 模擬地圖目前位置,模擬GPS坐標',
    },
    addType: 'auto',
  },
  {
    id: 316491616,
    name: {
      mo: 'TowerMadness',
    },
    addType: 'auto',
  },
  {
    id: 332636983,
    name: {
      mo: 'Cry Translator',
    },
    addType: 'auto',
  },
  {
    id: 1419928720,
    name: {
      mo: '起點小說（專業版）',
    },
    addType: 'auto',
  },
  {
    id: 892542000,
    name: {
      mo: 'Board Game Stats',
    },
    addType: 'auto',
  },
  {
    id: 728401013,
    name: {
      mo: 'NoteWorks for iPhone',
    },
    addType: 'auto',
  },
  {
    id: 729067952,
    name: {
      mo: 'Purgatory',
    },
    addType: 'auto',
  },
  {
    id: 950012304,
    name: {
      mo: 'Cellular Info',
    },
    addType: 'auto',
  },
  {
    id: 1448241295,
    name: {
      mo: '小管家 - 短信拦截手机助手',
    },
    addType: 'auto',
  },
  {
    id: 378503081,
    name: {
      tr: 'Groundwire: VoIP SIP Softphone',
    },
    addType: 'auto',
  },
  {
    id: 535176909,
    name: {
      tw: 'BADLAND',
    },
    addType: 'auto',
  },
  {
    id: 601831815,
    name: {
      hk: 'Ridiculous Fishing - A Tale of Redemption',
    },
    addType: 'auto',
  },
  {
    id: 1614795077,
    name: {
      hk: "Otaku's Adventure",
    },
    addType: 'auto',
  },
  {
    id: 6744998205,
    name: {
      cn: '猜病猜盐-猜病小测验程序',
    },
    addType: 'auto',
  },
  {
    id: 6477745183,
    name: {
      tw: 'Echo Ways',
    },
    addType: 'auto',
  },
  {
    id: 557168861,
    name: {
      hk: '香港法例 Legislation HK',
    },
    addType: 'auto',
  },
  {
    id: 586604476,
    name: {
      hk: '易爻(實用)',
    },
    addType: 'auto',
  },
  {
    id: 597758149,
    name: {
      tw: '聽寫五十音專業版',
    },
    addType: 'auto',
  },
  {
    id: 625740630,
    name: {
      tw: 'Hairtechapp - Cutting Diagrams',
    },
    addType: 'auto',
  },
  {
    id: 808296431,
    name: {
      hk: 'Crashlands',
    },
    addType: 'auto',
  },
  {
    id: 1116905928,
    name: {
      tw: 'nPlayer',
    },
    addType: 'auto',
  },
  {
    id: 1292311498,
    name: {
      hk: 'International One Night',
    },
    addType: 'auto',
  },
  {
    id: 6473332700,
    name: {
      cn: '逐鹿 - 历史沙盘战棋',
    },
    addType: 'auto',
  },
  {
    id: 6742526717,
    name: {
      mo: 'WatchTube for YouTube',
    },
    addType: 'auto',
  },
  {
    id: 6478398981,
    name: {
      tr: 'IPTV Smart Pro - 4K Live TV',
    },
    addType: 'auto',
  },
  {
    id: 528181527,
    name: {
      tw: '行車記錄儀「TripREC」',
    },
    addType: 'auto',
  },
  {
    id: 545625741,
    name: {
      tr: 'King of Maths: Full Game',
    },
    addType: 'auto',
  },
  {
    id: 592398757,
    name: {
      hk: 'Perfect Tempo',
    },
    addType: 'auto',
  },
  {
    id: 669835030,
    name: {
      hk: 'WinZip完整版',
    },
    addType: 'auto',
  },
  {
    id: 672649451,
    name: {
      mo: 'Panecal Plus 科學計算器',
    },
    addType: 'auto',
  },
  {
    id: 682046579,
    name: {
      tw: 'Tinybop 人體探秘',
    },
    addType: 'auto',
  },
  {
    id: 787148904,
    name: {
      hk: 'R-TYPE II',
    },
    addType: 'auto',
  },
  {
    id: 933113994,
    name: {
      tw: 'DRAGON QUEST V',
    },
    addType: 'auto',
  },
  {
    id: 1056920931,
    name: {
      hk: 'Iron Marines',
    },
    addType: 'auto',
  },
  {
    id: 1082806154,
    name: {
      hk: 'Age of Rivals',
    },
    addType: 'auto',
  },
  {
    id: 1354857517,
    name: {
      hk: 'NotePad++ - Pro',
    },
    addType: 'auto',
  },
  {
    id: 1463331841,
    name: {
      us: 'Oolimo Guitar Chords',
    },
    addType: 'auto',
  },
  {
    id: 1476509317,
    name: {
      cn: '每日英语 听力学习版',
    },
    addType: 'auto',
  },
  {
    id: 1599005073,
    name: {
      tw: 'KOF 2002 ACA NEOGEO',
    },
    addType: 'auto',
  },
  {
    id: 1623111026,
    name: {
      tw: '口袋學院物語3',
    },
    addType: 'auto',
  },
  {
    id: 1671475521,
    name: {
      tw: 'DNA Transform!',
    },
    addType: 'auto',
  },
  {
    id: 6479295005,
    name: {
      tw: '住宅夢物語 DX',
    },
    addType: 'auto',
  },
  {
    id: 6744569015,
    name: {
      us: 'Neon Labyrinth',
    },
    addType: 'auto',
  },
  {
    id: 6502905107,
    name: {
      tr: 'AListServer',
    },
    addType: 'auto',
  },
  {
    id: 400259071,
    name: {
      tw: '降雨警報器 Pro',
    },
    addType: 'auto',
  },
  {
    id: 1139986977,
    name: {
      tw: '軒轅劍參 雲和山的彼端 加強版',
    },
    addType: 'auto',
  },
  {
    id: 1197552569,
    name: {
      tw: 'Poly Bridge',
    },
    addType: 'auto',
  },
  {
    id: 1313164055,
    name: {
      tw: 'EE35 Film Camera',
    },
    addType: 'auto',
  },
  {
    id: 1553774029,
    name: {
      us: 'Taskmaster The App',
    },
    addType: 'auto',
  },
  {
    id: 6449433291,
    name: {
      tw: '常春藤108課綱基礎單字',
    },
    addType: 'auto',
  },
  {
    id: 1403183441,
    name: {
      tr: 'Ala Mobile GP',
    },
    addType: 'auto',
  },
  {
    id: 1538900393,
    name: {
      tw: '風雲拳擊物語',
    },
    addType: 'auto',
  },
  {
    id: 6476442028,
    name: {
      tr: 'Zelzele Türkiye',
    },
    addType: 'auto',
  },
  {
    id: 461659980,
    name: {
      hk: 'Phonics Genius',
    },
    addType: 'auto',
  },
  {
    id: 6458144503,
    name: {
      hk: 'Skul: The Hero Slayer',
    },
    addType: 'auto',
  },
  {
    id: 1552176109,
    name: {
      hk: 'Trials of Mana',
    },
    addType: 'auto',
  },
  {
    id: 1580067723,
    name: {
      tr: 'Wall of insanity',
    },
    addType: 'auto',
  },
  {
    id: 1621055260,
    name: {
      cn: '百分之一',
    },
    addType: 'auto',
  },
  {
    id: 840811083,
    name: {
      tr: 'Rules!',
    },
    addType: 'auto',
  },
  {
    id: 1473749002,
    name: {
      tr: 'Vergi Akademisi Pro',
    },
    addType: 'auto',
  },
  {
    id: 6508165149,
    name: {
      tr: 'Dungeon Clawler',
    },
    addType: 'auto',
  },
  {
    id: 537280156,
    name: {
      tw: 'Raiden Legacy',
    },
    addType: 'auto',
  },
  {
    id: 635644097,
    name: {
      tw: 'Tuner by Piascore',
    },
    addType: 'auto',
  },
  {
    id: 727544019,
    name: {
      hk: 'Street Kart #1 Go Kart Game',
    },
    addType: 'auto',
  },
  {
    id: 950812012,
    name: {
      tr: "Alto's Adventure",
    },
    addType: 'auto',
  },
  {
    id: 1001096601,
    name: {
      tr: '1941 Frozen Front Premium',
    },
    addType: 'auto',
  },
  {
    id: 1439889483,
    name: {
      tr: 'Construction Simulator 3',
    },
    addType: 'auto',
  },
  {
    id: 1562555975,
    name: {
      tw: 'D2助手(專業版) for 暗黑破壞神2重製版',
    },
    addType: 'auto',
  },
  {
    id: 1567658979,
    name: {
      hk: 'SkySafari 7 Pro',
    },
    addType: 'auto',
  },
  {
    id: 6467822375,
    name: {
      hk: 'Auto Redial App',
    },
    addType: 'auto',
  },
  {
    id: 329772936,
    name: {
      tr: 'iDeco Pro',
    },
    addType: 'auto',
  },
  {
    id: 394057299,
    name: {
      hk: 'Battleheart',
    },
    addType: 'auto',
  },
  {
    id: 499470113,
    name: {
      hk: 'FE File Explorer Pro',
    },
    addType: 'auto',
  },
  {
    id: 666508823,
    name: {
      hk: 'Battleheart Legacy',
    },
    addType: 'auto',
  },
  {
    id: 792638268,
    name: {
      hk: '合戰忍者村物語',
    },
    addType: 'auto',
  },
  {
    id: 1095883970,
    name: {
      tw: '芳香樂活',
    },
    addType: 'auto',
  },
  {
    id: 1232791258,
    name: {
      hk: 'Battleheart 2',
    },
    addType: 'auto',
  },
  {
    id: 1600925588,
    name: {
      hk: 'GR Linker - Image Sync',
    },
    addType: 'auto',
  },
  {
    id: 6474479684,
    name: {
      cn: "Spark - Ren'Py 小说们",
    },
    addType: 'auto',
  },
  {
    id: 6466296603,
    name: {
      hk: 'The Last Game',
    },
    addType: 'auto',
  },
  {
    id: 6670402289,
    name: {
      hk: 'Looking for Aliens',
    },
    addType: 'auto',
  },
  {
    id: 459947180,
    name: {
      mo: 'LectroRM',
    },
    addType: 'auto',
  },
  {
    id: 1491196899,
    name: {
      us: "Papa's Bakeria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1559183447,
    name: {
      mo: 'PoPo日记 - 心情日记本,记录情绪手账和记事本',
    },
    addType: 'auto',
  },
  {
    id: 1041260001,
    name: {
      hk: 'FINAL FANTASY Ⅸ',
    },
    addType: 'auto',
  },
  {
    id: 1059218666,
    name: {
      tw: 'Litchi for DJI Drones',
    },
    addType: 'auto',
  },
  {
    id: 1059911569,
    name: {
      hk: 'Rusty Lake Hotel',
    },
    addType: 'auto',
  },
  {
    id: 1202650514,
    name: {
      hk: 'HealthFit',
    },
    addType: 'auto',
  },
  {
    id: 1230231705,
    name: {
      tw: 'The Witness',
    },
    addType: 'auto',
  },
  {
    id: 1441522083,
    name: {
      tw: 'Morphing LED Banner',
    },
    addType: 'auto',
  },
  {
    id: 1492041539,
    name: {
      tw: 'FINAL FANTASY VI',
    },
    addType: 'auto',
  },
  {
    id: 1498778559,
    name: {
      hk: 'MindPage',
    },
    addType: 'auto',
  },
  {
    id: 1533709428,
    name: {
      tr: 'Pocket City 2',
    },
    addType: 'auto',
  },
  {
    id: 1559871386,
    name: {
      tr: 'ehliyet Sınav Sorular 2022 PRO',
    },
    addType: 'auto',
  },
  {
    id: 1560779038,
    name: {
      hk: '伤寒论条阅',
    },
    addType: 'auto',
  },
  {
    id: 6450680262,
    name: {
      hk: 'CMSPlayer',
    },
    addType: 'auto',
  },
  {
    id: 6443750571,
    name: {
      hk: 'EmoGuard - 關鍵字攔截器',
    },
    addType: 'auto',
  },
  {
    id: 6466976437,
    name: {
      tw: 'OOTP Baseball 26 Go!',
    },
    addType: 'auto',
  },
  {
    id: 424591347,
    name: {
      hk: 'FINAL FANTASY III (3D REMAKE)',
    },
    addType: 'auto',
  },
  {
    id: 563082328,
    name: {
      us: 'Military Retirement',
    },
    addType: 'auto',
  },
  {
    id: 962291530,
    name: {
      tw: 'Analog Beijing',
    },
    addType: 'auto',
  },
  {
    id: 1003660287,
    name: {
      hk: 'Dwarf Fortress Remote',
    },
    addType: 'auto',
  },
  {
    id: 1035220162,
    name: {
      tw: 'Analog Budapest',
    },
    addType: 'auto',
  },
  {
    id: 1055650930,
    name: {
      us: 'Codenames',
    },
    addType: 'auto',
  },
  {
    id: 1073576068,
    name: {
      hk: '電波表對時',
    },
    addType: 'auto',
  },
  {
    id: 1106831630,
    name: {
      tr: 'ROME: Total War',
    },
    addType: 'auto',
  },
  {
    id: 1138248035,
    name: {
      tw: 'Analog Seoul',
    },
    addType: 'auto',
  },
  {
    id: 1373057849,
    name: {
      tw: '三國志漢末霸業',
    },
    addType: 'auto',
  },
  {
    id: 1458977921,
    name: {
      hk: '照片保險箱Pro - 密碼鎖加密隱藏隱私相片',
    },
    addType: 'auto',
  },
  {
    id: 1509252675,
    name: {
      tr: 'Lapse: A Forgotten Future',
    },
    addType: 'auto',
  },
  {
    id: 1554691584,
    name: {
      hk: 'Naturalisation en France',
    },
    addType: 'auto',
  },
  {
    id: 1574339556,
    name: {
      tr: 'Game Booster 4x',
    },
    addType: 'auto',
  },
  {
    id: 6453763474,
    name: {
      hk: 'Hidden Through Time 2: Magic',
    },
    addType: 'auto',
  },
  {
    id: 6477535804,
    name: {
      tw: '虛空穹牢',
    },
    addType: 'auto',
  },
  {
    id: 6730126160,
    name: {
      tw: '戲曲鑼鼓 - 傳統樂器新體驗',
    },
    addType: 'auto',
  },
  {
    id: 6449986941,
    name: {
      tw: '常春藤108課綱核心單字',
    },
    addType: 'auto',
  },
  {
    id: 1115520522,
    name: {
      cn: '姬魔恋战纪-单机剧情手游戏',
    },
    addType: 'auto',
  },
  {
    id: 1322877018,
    name: {
      tr: 'DataX Earthquake',
    },
    addType: 'auto',
  },
  {
    id: 379485721,
    name: {
      us: 'Blood Type Diet®',
    },
    addType: 'auto',
  },
  {
    id: 1537362903,
    name: {
      tr: 'Neighbours back From Hell',
    },
    addType: 'auto',
  },
  {
    id: 338893931,
    name: {
      us: 'Prepware Aviation Maintenance',
    },
    addType: 'auto',
  },
  {
    id: 596026805,
    name: {
      tw: 'PhotoPills',
    },
    addType: 'auto',
  },
  {
    id: 1448573670,
    name: {
      cn: '冒险与征服-暗黑单机RPG角色扮演挂机游戏',
    },
    addType: 'auto',
  },
  {
    id: 1619733202,
    name: {
      hk: '的士地方筆試 2024 Pro',
    },
    addType: 'auto',
  },
  {
    id: 6450058135,
    name: {
      tw: 'Unpacking',
    },
    addType: 'auto',
  },
  {
    id: 304731501,
    name: {
      hk: 'Tempo - Metronome 節拍器',
    },
    addType: 'auto',
  },
  {
    id: 954982733,
    name: {
      hk: 'Tuner T1 Pro',
    },
    addType: 'auto',
  },
  {
    id: 979048658,
    name: {
      tw: '新多益必考選擇題型1000',
    },
    addType: 'auto',
  },
  {
    id: 1050535507,
    name: {
      hk: 'Lanota - 動感節奏音樂遊戲',
    },
    addType: 'auto',
  },
  {
    id: 1078553162,
    name: {
      tw: '超級單字王Pro',
    },
    addType: 'auto',
  },
  {
    id: 1384164285,
    name: {
      mo: 'AR魯班尺',
    },
    addType: 'auto',
  },
  {
    id: 1586762439,
    name: {
      tr: 'Auto Translate for Safari',
    },
    addType: 'auto',
  },
  {
    id: 1598843625,
    name: {
      hk: 'DragonSpear-Ex',
    },
    addType: 'auto',
  },
  {
    id: 6445905944,
    name: {
      tr: 'Garten of Banban 2',
    },
    addType: 'auto',
  },
  {
    id: 6449941289,
    name: {
      tr: 'Spirit of the Island',
    },
    addType: 'auto',
  },
  {
    id: 384363262,
    name: {
      tw: '13:20:Sync',
    },
    addType: 'auto',
  },
  {
    id: 1561136737,
    name: {
      hk: 'Word Puzzle-Cambridge (NoAds)',
    },
    addType: 'auto',
  },
  {
    id: 6451224796,
    name: {
      hk: '藏武',
    },
    addType: 'auto',
  },
  {
    id: 6504192378,
    name: {
      tw: 'B.ROLL - 青春濾鏡相機',
    },
    addType: 'auto',
  },
  {
    id: 1462324486,
    name: {
      us: "Papa's Donuteria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 344844888,
    name: {
      hk: '天元烏兔萬年曆 - 十三行作品',
    },
    addType: 'auto',
  },
  {
    id: 349242632,
    name: {
      hk: '六爻裝卦',
    },
    addType: 'auto',
  },
  {
    id: 936694037,
    name: {
      hk: 'Voice Recorder - Audio Record',
    },
    addType: 'auto',
  },
  {
    id: 1101997011,
    name: {
      hk: '奇門(實用)',
    },
    addType: 'auto',
  },
  {
    id: 1147297267,
    name: {
      hk: "Don't Starve: Shipwrecked",
    },
    addType: 'auto',
  },
  {
    id: 1205486761,
    name: {
      tw: 'Beholder',
    },
    addType: 'auto',
  },
  {
    id: 1506620807,
    name: {
      hk: '麻雀AI小番 - 胡牌分析',
    },
    addType: 'auto',
  },
  {
    id: 1513506417,
    name: {
      cn: '轻历 - 清新日历',
    },
    addType: 'auto',
  },
  {
    id: 1563906582,
    name: {
      hk: 'Bus Simulator',
    },
    addType: 'auto',
  },
  {
    id: 1586437121,
    name: {
      hk: '吃饭打卡-饮食记录和减肥健身,轻断食健康管理日记本',
    },
    addType: 'auto',
  },
  {
    id: 1599393574,
    name: {
      tr: 'Peace, Death! 2',
    },
    addType: 'auto',
  },
  {
    id: 1642715290,
    name: {
      hk: 'Little Big Workshop',
    },
    addType: 'auto',
  },
  {
    id: 1672004303,
    name: {
      hk: '探險頑皮動物園',
    },
    addType: 'auto',
  },
  {
    id: 6463115144,
    name: {
      tw: '開拍！電視製作物語',
    },
    addType: 'auto',
  },
  {
    id: 6448530928,
    name: {
      tr: 'Total War™: EMPIRE',
    },
    addType: 'auto',
  },
  {
    id: 6502455111,
    name: {
      tr: 'Lara Croft: Guardian of Light',
    },
    addType: 'auto',
  },
  {
    id: 295462558,
    name: {
      hk: 'Toobz',
    },
    addType: 'auto',
  },
  {
    id: 329233299,
    name: {
      hk: 'Universe Splitter',
    },
    addType: 'auto',
  },
  {
    id: 329981776,
    name: {
      hk: 'Sudoku ″',
    },
    addType: 'auto',
  },
  {
    id: 363738376,
    name: {
      tw: 'forScore',
    },
    addType: 'auto',
  },
  {
    id: 479431697,
    name: {
      tw: 'CHRONO TRIGGER (Upgrade Ver.)',
    },
    addType: 'auto',
  },
  {
    id: 525176875,
    name: {
      tw: 'Sun Surveyor (太陽測量師)',
    },
    addType: 'auto',
  },
  {
    id: 922155038,
    name: {
      tr: 'aprs.fi',
    },
    addType: 'auto',
  },
  {
    id: 989630809,
    name: {
      tw: 'Malody',
    },
    addType: 'auto',
  },
  {
    id: 1001613037,
    name: {
      hk: 'ABRSM Aural Trainer Grades 6-8',
    },
    addType: 'auto',
  },
  {
    id: 1029588869,
    name: {
      tr: 'Brothers: A Tale of Two Sons',
    },
    addType: 'auto',
  },
  {
    id: 1043963852,
    name: {
      tw: 'Pipefitter',
    },
    addType: 'auto',
  },
  {
    id: 1086617993,
    name: {
      tw: '時間塊 - 快速記錄時間規劃日程安排',
    },
    addType: 'auto',
  },
  {
    id: 1104795347,
    name: {
      hk: 'iFiles 2',
    },
    addType: 'auto',
  },
  {
    id: 1184336299,
    name: {
      hk: 'NAS Detector',
    },
    addType: 'auto',
  },
  {
    id: 1270659758,
    name: {
      tw: '如果可以回家早一點',
    },
    addType: 'auto',
  },
  {
    id: 1308038634,
    name: {
      tw: '修真风云录',
    },
    addType: 'auto',
  },
  {
    id: 1486110292,
    name: {
      tw: 'Minitube for Youtube',
    },
    addType: 'auto',
  },
  {
    id: 1531068181,
    name: {
      hk: 'TimeGlance - 複雜功能',
    },
    addType: 'auto',
  },
  {
    id: 1551539091,
    name: {
      hk: 'NFC Business Card - Read Write',
    },
    addType: 'auto',
  },
  {
    id: 1552157188,
    name: {
      hk: '轉換字幕格式',
    },
    addType: 'auto',
  },
  {
    id: 1577762239,
    name: {
      hk: 'Invading Horde - TD',
    },
    addType: 'auto',
  },
  {
    id: 1613920866,
    name: {
      tw: '金價即時通',
    },
    addType: 'auto',
  },
  {
    id: 1617006551,
    name: {
      hk: '南國度假島物語',
      tw: '南國度假島物語',
    },
    addType: 'auto',
  },
  {
    id: 6447693393,
    name: {
      cn: '灵感卡片 - 笔记',
    },
    addType: 'auto',
  },
  {
    id: 6446021269,
    name: {
      hk: 'ROCKMAN X DiVE Offline',
    },
    addType: 'auto',
  },
  {
    id: 6446337236,
    name: {
      hk: '新概念英語--新概念英語全四册單詞聽力口語',
    },
    addType: 'auto',
  },
  {
    id: 6475892753,
    name: {
      hk: 'Listenify',
    },
    addType: 'auto',
  },
  {
    id: 6739755879,
    name: {
      hk: 'Oishii Map - Tabelog Top 100',
    },
    addType: 'auto',
  },
  {
    id: 6443849085,
    name: {
      hk: 'Terminal Madness - Awakening',
    },
    addType: 'auto',
  },
  {
    id: 6744893097,
    name: {
      hk: 'Easy Snap Finger',
    },
    addType: 'auto',
  },
  {
    id: 463295925,
    name: {
      hk: 'Official DVSA Theory Test Kit',
    },
    addType: 'auto',
  },
  {
    id: 1115022026,
    name: {
      hk: 'The Secret To Money',
    },
    addType: 'auto',
  },
  {
    id: 1442440203,
    name: {
      tw: '大家的日本語初級1-改訂版',
    },
    addType: 'auto',
  },
  {
    id: 1453820315,
    name: {
      hk: 'This Is the Police 2',
    },
    addType: 'auto',
  },
  {
    id: 1453875289,
    name: {
      tr: 'Hyper Light Drifter',
    },
    addType: 'auto',
  },
  {
    id: 1543161449,
    name: {
      tw: '冒險村物語2',
    },
    addType: 'auto',
  },
  {
    id: 1616652599,
    name: {
      hk: 'Kingdom Eighties',
    },
    addType: 'auto',
  },
  {
    id: 6444435974,
    name: {
      tw: 'VARIOUS DAYLIFE Mobile',
    },
    addType: 'auto',
  },
  {
    id: 755018884,
    name: {
      cn: '新概念英语专业版 - 英语美语全四册',
    },
    addType: 'auto',
  },
  {
    id: 1319618742,
    name: {
      hk: 'Getting Over It',
    },
    addType: 'auto',
  },
  {
    id: 1423115391,
    name: {
      tr: 'Führerschein 2025 GOLD',
    },
    addType: 'auto',
  },
  {
    id: 6474207287,
    name: {
      hk: 'Wagotabi（和語旅）：學習日語',
    },
    addType: 'auto',
  },
  {
    id: 497880658,
    name: {
      us: 'J23 - Release Dates & Restocks',
    },
    addType: 'auto',
  },
  {
    id: 1108935309,
    name: {
      hk: '20 Watch Games - Classic Pack',
    },
    addType: 'auto',
  },
  {
    id: 1410053842,
    name: {
      tw: '小漁輪班',
    },
    addType: 'auto',
  },
  {
    id: 1519508653,
    name: {
      hk: 'Nomad Sculpt - 3D雕刻建模',
    },
    addType: 'auto',
  },
  {
    id: 6446826650,
    name: {
      tw: '創造都市島物語',
    },
    addType: 'auto',
  },
  {
    id: 998437590,
    name: {
      cn: '西语背单词',
    },
    addType: 'auto',
  },
  {
    id: 430388524,
    name: {
      mo: 'Do! Spring Mint - To Do List',
    },
    addType: 'auto',
  },
  {
    id: 592155900,
    name: {
      tr: 'Wake up! Earthquake',
    },
    addType: 'auto',
  },
  {
    id: 625274950,
    name: {
      tw: '國語辭典',
    },
    addType: 'auto',
  },
  {
    id: 998834675,
    name: {
      tr: 'Clouds & Sheep 2 Premium',
    },
    addType: 'auto',
  },
  {
    id: 1232529101,
    name: {
      mo: '歸家異途',
    },
    addType: 'auto',
  },
  {
    id: 1573482724,
    name: {
      hk: 'Coffee Inc 2',
    },
    addType: 'auto',
  },
  {
    id: 1602772289,
    name: {
      hk: '7 Days to End with You',
    },
    addType: 'auto',
  },
  {
    id: 1613295180,
    name: {
      hk: '青春敘曲',
    },
    addType: 'auto',
  },
  {
    id: 1614666556,
    name: {
      tr: 'CNC VMC Simulator',
    },
    addType: 'auto',
  },
  {
    id: 1624777523,
    name: {
      mo: 'Guess Who? Meet the Crew',
    },
    addType: 'auto',
  },
  {
    id: 413943804,
    name: {
      mo: 'Real Piano™',
    },
    addType: 'auto',
  },
  {
    id: 508064644,
    name: {
      tr: 'Earthquakes Pro',
    },
    addType: 'auto',
  },
  {
    id: 1038014543,
    name: {
      tw: 'Day R Premium: last world war',
    },
    addType: 'auto',
  },
  {
    id: 1084793426,
    name: {
      tr: 'Instant USGS Earthquake Pro',
    },
    addType: 'auto',
  },
  {
    id: 1596863467,
    name: {
      tw: 'LoveChoice 揀愛',
    },
    addType: 'auto',
  },
  {
    id: 1602403259,
    name: {
      tr: 'Webmail App',
    },
    addType: 'auto',
  },
  {
    id: 1622064157,
    name: {
      tr: 'Sismo: Vibration Meter & Alert',
    },
    addType: 'auto',
  },
  {
    id: 6447606411,
    name: {
      tw: '創意咖啡店物語',
    },
    addType: 'auto',
  },
  {
    id: 6449046261,
    name: {
      tw: '水晶戰爭2-精品生存Roguelike策略塔防單機獨立遊戲',
    },
    addType: 'auto',
  },
  {
    id: 336543029,
    name: {
      tw: "Grat's Film Slate/Clapboard",
    },
    addType: 'auto',
  },
  {
    id: 583922375,
    name: {
      hk: 'myLightMeter PRO',
    },
    addType: 'auto',
  },
  {
    id: 608540795,
    name: {
      hk: 'Tunable – Tuner & Metronome',
    },
    addType: 'auto',
  },
  {
    id: 975770717,
    name: {
      tr: 'My Earthquake Alerts Pro',
    },
    addType: 'auto',
  },
  {
    id: 1056698678,
    name: {
      tw: 'Live 2 Photos',
    },
    addType: 'auto',
  },
  {
    id: 1062022008,
    name: {
      tw: 'LumaFusion',
      tr: 'LumaFusion',
    },
    addType: 'auto',
  },
  {
    id: 1207867591,
    name: {
      us: "Papa's Taco Mia To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1326740784,
    name: {
      hk: 'FINAL FANTASY VIII Remastered',
    },
    addType: 'auto',
  },
  {
    id: 1372408358,
    name: {
      tr: 'ARGun2018',
    },
    addType: 'auto',
  },
  {
    id: 1438597800,
    name: {
      tw: 'OKNDrum: Optokinetic Drum',
    },
    addType: 'auto',
  },
  {
    id: 1448798374,
    name: {
      tw: 'CAR++',
    },
    addType: 'auto',
  },
  {
    id: 1450908177,
    name: {
      tr: 'Shadow Of Death: Premium Games',
    },
    addType: 'auto',
  },
  {
    id: 1509817154,
    name: {
      cn: '某某宗女修修炼手札',
    },
    addType: 'auto',
  },
  {
    id: 1513814705,
    name: {
      tw: '計算器鍵盤 - 快人一步',
    },
    addType: 'auto',
  },
  {
    id: 1543183092,
    name: {
      tr: 'YKS Konu, Deneme, Soru Takibi',
    },
    addType: 'auto',
  },
  {
    id: 6744311159,
    name: {
      cn: '魔王终局',
    },
    addType: 'auto',
  },
  {
    id: 6740014272,
    name: {
      cn: '水果合成 - 手表游戏',
    },
    addType: 'auto',
  },
  {
    id: 6742253703,
    name: {
      hk: 'Slime 3K: Rise Against Despot',
    },
    addType: 'auto',
  },
  {
    id: 6463440317,
    name: {
      tr: 'Online Kaza Tutanağı',
    },
    addType: 'auto',
  },
  {
    id: 6502287918,
    name: {
      tr: 'PPSSPP Gold - PSP emulator',
    },
    addType: 'auto',
  },
  {
    id: 400666114,
    name: {
      hk: 'Guitar Pro',
    },
    addType: 'auto',
  },
  {
    id: 562989701,
    name: {
      tr: 'Vector Classic',
    },
    addType: 'auto',
  },
  {
    id: 1127680609,
    name: {
      tw: 'Tortoise - Keep Recording',
    },
    addType: 'auto',
  },
  {
    id: 1171627280,
    name: {
      tw: '魔窟-無盡的地下城：暗黑世界',
    },
    addType: 'auto',
  },
  {
    id: 1179421849,
    name: {
      tw: 'GRID™ Autosport',
    },
    addType: 'auto',
  },
  {
    id: 1260311003,
    name: {
      hk: 'Notation Scanner - 五線譜樂譜圖像識別',
    },
    addType: 'auto',
  },
  {
    id: 1291427111,
    name: {
      hk: 'Evoland 2',
    },
    addType: 'auto',
  },
  {
    id: 1437715202,
    name: {
      hk: '倉頡詞典',
    },
    addType: 'auto',
  },
  {
    id: 1519571900,
    name: {
      tr: 'Luwian',
    },
    addType: 'auto',
  },
  {
    id: 1544947623,
    name: {
      tr: 'Kiosk - fullscreen browser',
    },
    addType: 'auto',
  },
  {
    id: 1575192531,
    name: {
      hk: '遊樂園夢物語',
    },
    addType: 'auto',
  },
  {
    id: 6742311454,
    name: {
      cn: '伏魔诀-阴阳秘术诡道修仙录',
    },
    addType: 'auto',
  },
  {
    id: 6444396120,
    name: {
      cn: '挺进地牢',
    },
    addType: 'auto',
  },
  {
    id: 6738590491,
    name: {
      hk: 'KennysGifs',
    },
    addType: 'auto',
  },
  {
    id: 6444311205,
    name: {
      hk: 'GRID™ Legends: Deluxe Edition',
    },
    addType: 'auto',
  },
  {
    id: 6477660875,
    name: {
      hk: '大海賊探險物語DX',
    },
    addType: 'auto',
  },
  {
    id: 6447090616,
    name: {
      hk: 'Whisper Notes - 離線 AI 語音輸入轉錄文字',
    },
    addType: 'auto',
  },
  {
    id: 414371107,
    name: {
      tw: 'Morse Elmer',
    },
    addType: 'auto',
  },
  {
    id: 510119487,
    name: {
      hk: 'AnatomyMapp',
    },
    addType: 'auto',
  },
  {
    id: 561396899,
    name: {
      hk: '皇帝養成計畫 - 經典歷史模擬遊戲',
    },
    addType: 'auto',
  },
  {
    id: 634158738,
    name: {
      us: 'e-Sword LT: Bible Study to Go',
    },
    addType: 'auto',
  },
  {
    id: 814977594,
    name: {
      tw: 'Surgeon Simulator',
    },
    addType: 'auto',
  },
  {
    id: 958889621,
    name: {
      hk: 'ADF Trainer - YOU Session Prep',
    },
    addType: 'auto',
  },
  {
    id: 1066366174,
    name: {
      hk: 'Concentration Grid',
    },
    addType: 'auto',
  },
  {
    id: 1397002811,
    name: {
      hk: 'Catholic Hymn',
    },
    addType: 'auto',
  },
  {
    id: 1447509164,
    name: {
      hk: 'Freya • Surge Timer',
    },
    addType: 'auto',
  },
  {
    id: 1456714022,
    name: {
      tw: 'RFECU Performance 2.0',
    },
    addType: 'auto',
  },
  {
    id: 1459520638,
    name: {
      us: 'Wingspan: The Board Game',
    },
    addType: 'auto',
  },
  {
    id: 1463480017,
    name: {
      tw: '韭菜投資公司',
    },
    addType: 'auto',
  },
  {
    id: 1466120520,
    name: {
      us: 'iVerify Basic',
    },
    addType: 'auto',
  },
  {
    id: 1499085878,
    name: {
      tr: 'CNC Lathe Simulator',
    },
    addType: 'auto',
  },
  {
    id: 1522425038,
    name: {
      tw: 'Alien10',
    },
    addType: 'auto',
  },
  {
    id: 1541290982,
    name: {
      tw: 'GPSPlus Pro',
    },
    addType: 'auto',
  },
  {
    id: 1551579024,
    name: {
      hk: '創意漢堡物語',
    },
    addType: 'auto',
  },
  {
    id: 1562608316,
    name: {
      hk: 'Kelvin: Light Panel',
    },
    addType: 'auto',
  },
  {
    id: 1601177112,
    name: {
      mo: '便利商店開業日記',
    },
    addType: 'auto',
  },
  {
    id: 1609059358,
    name: {
      hk: 'eVario2  - Variometer Pro',
    },
    addType: 'auto',
  },
  {
    id: 6702013134,
    name: {
      hk: 'Cat Flow - 貓計時器 & 專注番茄鐘',
    },
    addType: 'auto',
  },
  {
    id: 6740487579,
    name: {
      hk: 'Songs of Conquest Mobile',
    },
    addType: 'auto',
  },
  {
    id: 6451009326,
    name: {
      hk: 'LMP',
    },
    addType: 'auto',
  },
  {
    id: 6473789128,
    name: {
      tw: '星落湖傳說-魔法騎士團',
    },
    addType: 'auto',
  },
  {
    id: 299021909,
    name: {
      tw: '聖經工具(新標點和合本)',
    },
    addType: 'auto',
  },
  {
    id: 407078169,
    name: {
      hk: '⋆數獨+',
    },
    addType: 'auto',
  },
  {
    id: 418751595,
    name: {
      hk: 'GyrOSC',
    },
    addType: 'auto',
  },
  {
    id: 667362389,
    name: {
      tr: 'The Room Two',
    },
    addType: 'auto',
  },
  {
    id: 768379887,
    name: {
      tw: 'Eye Meter',
    },
    addType: 'auto',
  },
  {
    id: 814323051,
    name: {
      hk: '中世紀Bridge Constructor',
    },
    addType: 'auto',
  },
  {
    id: 911205290,
    name: {
      tw: 'DRAGON QUEST II',
    },
    addType: 'auto',
  },
  {
    id: 983145797,
    name: {
      tw: '超注音',
    },
    addType: 'auto',
  },
  {
    id: 1033342465,
    name: {
      hk: 'Just Press Record',
    },
    addType: 'auto',
  },
  {
    id: 1112850631,
    name: {
      tw: '樂秀專業版-影片編輯與影片剪輯',
    },
    addType: 'auto',
  },
  {
    id: 1126386264,
    name: {
      tr: 'AdGuard Pro — adblock',
    },
    addType: 'auto',
  },
  {
    id: 1182456409,
    name: {
      tw: '奧托的奧德賽',
    },
    addType: 'auto',
  },
  {
    id: 1238247658,
    name: {
      hk: 'Cluedo: Classic Edition',
    },
    addType: 'auto',
  },
  {
    id: 1260271235,
    name: {
      hk: 'BoatSpeed: Course & Speed',
    },
    addType: 'auto',
  },
  {
    id: 1260967308,
    name: {
      tw: 'WhatCall',
    },
    addType: 'auto',
  },
  {
    id: 1423585518,
    name: {
      tw: 'ROMAN: 進食計畫、減肥、減脂一體化。體重管理。',
    },
    addType: 'auto',
  },
  {
    id: 1508108761,
    name: {
      hk: 'EasyQuit Pro - Stop Smoking',
    },
    addType: 'auto',
  },
  {
    id: 1550721625,
    name: {
      tw: 'JAMMATES',
    },
    addType: 'auto',
  },
  {
    id: 1582355047,
    name: {
      tr: 'Hacker Başlangıç',
    },
    addType: 'auto',
  },
  {
    id: 1610305853,
    name: {
      tw: 'SunOnTrack: Sun Path & Shadows',
    },
    addType: 'auto',
  },
  {
    id: 1616391834,
    name: {
      tw: '合成游戏合集：含合成大西瓜、2048和合成神龙经典游戏',
    },
    addType: 'auto',
  },
  {
    id: 1668418644,
    name: {
      tw: '大事記帳 - 阻止你花過多的錢',
    },
    addType: 'auto',
  },
  {
    id: 6477756843,
    name: {
      hk: 'Final Girl Companion',
    },
    addType: 'auto',
  },
  {
    id: 6698876690,
    name: {
      tw: 'WristTube+ Player for YouTube',
    },
    addType: 'auto',
  },
  {
    id: 6742457882,
    name: {
      tw: 'Deco: Wallpaper Creator',
    },
    addType: 'auto',
  },
  {
    id: 6471914901,
    name: {
      tr: 'Lux: AdBlock + PiP for YouTube',
    },
    addType: 'auto',
  },
  {
    id: 300132735,
    name: {
      hk: '專業萬年曆 - 十三行作品',
    },
    addType: 'auto',
  },
  {
    id: 430234732,
    name: {
      us: 'Site Audit Pro',
    },
    addType: 'auto',
  },
  {
    id: 602990197,
    name: {
      mo: 'METAL SLUG X',
    },
    addType: 'auto',
  },
  {
    id: 898697688,
    name: {
      hk: '五十音輕鬆學：聯想記憶',
    },
    addType: 'auto',
  },
  {
    id: 1304822713,
    name: {
      mo: '無盡坦克大戰 - 八位元單機王者 完美模擬穿越舊經典電視手遊',
    },
    addType: 'auto',
  },
  {
    id: 1400579543,
    name: {
      us: 'imo video calls and chat HD',
    },
    addType: 'auto',
  },
  {
    id: 1435461053,
    name: {
      tr: 'This Is the Police',
    },
    addType: 'auto',
  },
  {
    id: 1471323296,
    name: {
      hk: '籃球熱潮物語',
    },
    addType: 'auto',
  },
  {
    id: 1472184189,
    name: {
      hk: 'The White Door',
      tw: 'The White Door',
    },
    addType: 'auto',
  },
  {
    id: 1478611992,
    name: {
      tr: 'Farming Simulator 20',
    },
    addType: 'auto',
  },
  {
    id: 1498550832,
    name: {
      us: 'ASCCP Management Guidelines',
    },
    addType: 'auto',
  },
  {
    id: 6739975257,
    name: {
      hk: '樂橋',
    },
    addType: 'auto',
  },
  {
    id: 6670190133,
    name: {
      hk: '哆啦A夢的銅鑼燒店物語',
    },
    addType: 'auto',
  },
  {
    id: 6744862281,
    name: {
      mo: 'iPlayer - Offline Music  Pro',
    },
    addType: 'auto',
  },
  {
    id: 6473001577,
    name: {
      tr: 'Aerofly FS Global',
    },
    addType: 'auto',
  },
  {
    id: 327963391,
    name: {
      us: 'Pedi STAT',
    },
    addType: 'auto',
  },
  {
    id: 398463868,
    name: {
      mo: '詰将棋',
    },
    addType: 'auto',
  },
  {
    id: 419606496,
    name: {
      hk: 'Baby Shusher Sleep Miracle App',
    },
    addType: 'auto',
  },
  {
    id: 435871950,
    name: {
      us: 'HappyCow - Vegan Food Near You',
    },
    addType: 'auto',
  },
  {
    id: 459189186,
    name: {
      tr: 'Machinarium',
    },
    addType: 'auto',
  },
  {
    id: 580008932,
    name: {
      mo: 'Real Badminton',
    },
    addType: 'auto',
  },
  {
    id: 1253855339,
    name: {
      tw: 'Rusty Lake Paradise',
    },
    addType: 'auto',
  },
  {
    id: 1330055286,
    name: {
      mo: '比手划脚 - 你比我猜合家欢猜词工具',
    },
    addType: 'auto',
  },
  {
    id: 1453117329,
    name: {
      mo: 'Yume Nikki',
    },
    addType: 'auto',
  },
  {
    id: 1456547302,
    name: {
      hk: 'A Dance of Fire and Ice',
    },
    addType: 'auto',
  },
  {
    id: 1457316711,
    name: {
      tr: 'DRAW CHILLY',
    },
    addType: 'auto',
  },
  {
    id: 1481181827,
    name: {
      tr: 'Aces of the Luftwaffe Squadron',
    },
    addType: 'auto',
  },
  {
    id: 1505174740,
    name: {
      hk: 'VFUN - 你的興趣社區',
    },
    addType: 'auto',
  },
  {
    id: 1517281147,
    name: {
      hk: '行星小時',
    },
    addType: 'auto',
  },
  {
    id: 1530149693,
    name: {
      cn: '心岛日记-难过的人不孤独',
    },
    addType: 'auto',
  },
  {
    id: 1548281314,
    name: {
      mo: '倉頡打字2V',
    },
    addType: 'auto',
  },
  {
    id: 1607511516,
    name: {
      tr: 'Construction Simulator 4',
    },
    addType: 'auto',
  },
  {
    id: 1612615618,
    name: {
      tw: '腕上txt小说阅读器',
    },
    addType: 'auto',
  },
  {
    id: 1617390109,
    name: {
      hk: '我们的大航海',
    },
    addType: 'auto',
  },
  {
    id: 1621065119,
    name: {
      hk: '逆轉裁判123成步堂精選集',
    },
    addType: 'auto',
  },
  {
    id: 1626320298,
    name: {
      cn: '极速变色龙',
    },
    addType: 'auto',
  },
  {
    id: 6738272916,
    name: {
      hk: '全球電視 - 國際電視直播',
    },
    addType: 'auto',
  },
  {
    id: 6446178861,
    name: {
      hk: 'PlayNav - 影片內無廣告！',
    },
    addType: 'auto',
  },
  {
    id: 363385252,
    name: {
      tr: 'DTMFdec',
    },
    addType: 'auto',
  },
  {
    id: 430270438,
    name: {
      tw: 'Astro Gold',
    },
    addType: 'auto',
  },
  {
    id: 679454835,
    name: {
      hk: 'Rarevision VHS - Retro 80s Cam',
    },
    addType: 'auto',
  },
  {
    id: 911201894,
    name: {
      tw: 'DRAGON QUEST',
    },
    addType: 'auto',
  },
  {
    id: 921954809,
    name: {
      us: 'Craft The World-Pocket Edition',
    },
    addType: 'auto',
  },
  {
    id: 1093859891,
    name: {
      tw: 'djembeföla!',
    },
    addType: 'auto',
  },
  {
    id: 1232097854,
    name: {
      tw: '棒球學院物語',
    },
    addType: 'auto',
  },
  {
    id: 1261834568,
    name: {
      tr: 'Shadow Fight 2 Special Edition',
    },
    addType: 'auto',
  },
  {
    id: 1555459868,
    name: {
      hk: 'Dawncaster: Deckbuilding RPG',
    },
    addType: 'auto',
  },
  {
    id: 1563121109,
    name: {
      hk: 'Shattered Pixel Dungeon',
    },
    addType: 'auto',
  },
  {
    id: 6744629398,
    name: {
      cn: '汉界',
    },
    addType: 'auto',
  },
  {
    id: 6738784151,
    name: {
      hk: 'A Little to the Left: Stars',
    },
    addType: 'auto',
  },
  {
    id: 6470642337,
    name: {
      tw: '來自星塵',
    },
    addType: 'auto',
  },
  {
    id: 6483862844,
    name: {
      tw: '光遇樂隊',
    },
    addType: 'auto',
  },
  {
    id: 314192799,
    name: {
      tr: 'Acrobits Softphone',
    },
    addType: 'auto',
  },
  {
    id: 466388978,
    name: {
      tr: 'My Contacts Backup Pro',
    },
    addType: 'auto',
  },
  {
    id: 512142109,
    name: {
      tr: 'Max Payne Mobile',
    },
    addType: 'auto',
  },
  {
    id: 904737816,
    name: {
      hk: '王國保衛戰：起源 Kingdom Rush Origins',
    },
    addType: 'auto',
  },
  {
    id: 952625011,
    name: {
      hk: '每日精選-國家地理每日精選',
    },
    addType: 'auto',
  },
  {
    id: 958202096,
    name: {
      tr: 'Dukan Diet Classic',
    },
    addType: 'auto',
  },
  {
    id: 1085978097,
    name: {
      mo: 'Pythonista 3',
      tr: 'Pythonista 3',
    },
    addType: 'auto',
  },
  {
    id: 1148321705,
    name: {
      tr: 'Bully: Anniversary Edition',
    },
    addType: 'auto',
  },
  {
    id: 1286255182,
    name: {
      tw: 'Filmlike Camera',
    },
    addType: 'auto',
  },
  {
    id: 1449584007,
    name: {
      tw: 'Koala Sampler',
    },
    addType: 'auto',
  },
  {
    id: 1523025509,
    name: {
      hk: 'PANTHEON - Official',
    },
    addType: 'auto',
  },
  {
    id: 1536419933,
    name: {
      hk: 'Break Pile - Brick Breaker',
    },
    addType: 'auto',
  },
  {
    id: 1574175808,
    name: {
      tr: 'Specimen Zero - Horror',
    },
    addType: 'auto',
  },
  {
    id: 1622935612,
    name: {
      hk: 'DYSMANTLE',
    },
    addType: 'auto',
  },
  {
    id: 1633879571,
    name: {
      tr: 'Poppy Playtime Chapter 2',
    },
    addType: 'auto',
  },
  {
    id: 6504841512,
    name: {
      hk: 'Halls of Torment: Premium',
    },
    addType: 'auto',
  },
  {
    id: 6476902290,
    name: {
      hk: 'Handy Guitar Lab for MS-70CDR+',
    },
    addType: 'auto',
  },
  {
    id: 6479512734,
    name: {
      tw: 'NARUTO: Ultimate Ninja STORM',
    },
    addType: 'auto',
  },
  {
    id: 6740051873,
    name: {
      tr: 'Classic Number Games for Watch',
    },
    addType: 'auto',
  },
  {
    id: 6444109272,
    name: {
      tr: 'Kübaj - Hacim Hesaplama',
    },
    addType: 'auto',
  },
  {
    id: 318639200,
    name: {
      hk: 'Crush the Castle',
    },
    addType: 'auto',
  },
  {
    id: 325915322,
    name: {
      hk: 'BatteryFull + (Alarm)',
    },
    addType: 'auto',
  },
  {
    id: 365729342,
    name: {
      hk: 'RacquetTune - String Tension',
    },
    addType: 'auto',
  },
  {
    id: 414469628,
    name: {
      tr: 'Face & Body Photo editor',
    },
    addType: 'auto',
  },
  {
    id: 459313476,
    name: {
      tr: 'Tenuto',
    },
    addType: 'auto',
  },
  {
    id: 478126577,
    name: {
      mo: 'Merriam-Webster Dictionary+',
    },
    addType: 'auto',
  },
  {
    id: 493493802,
    name: {
      hk: 'RhymeZone',
    },
    addType: 'auto',
  },
  {
    id: 555612465,
    name: {
      tw: '存錢記帳-管理預算、掃描記帳、理財分析CWMoney Pro',
    },
    addType: 'auto',
  },
  {
    id: 564730202,
    name: {
      hk: 'Money Manager (Remove Ads)',
    },
    addType: 'auto',
  },
  {
    id: 582584117,
    name: {
      tr: 'Solocator - GPS Field Camera',
    },
    addType: 'auto',
  },
  {
    id: 633600716,
    name: {
      hk: '432 Player',
    },
    addType: 'auto',
  },
  {
    id: 683353582,
    name: {
      hk: 'Hong Kong Taxi Cards',
    },
    addType: 'auto',
  },
  {
    id: 777310222,
    name: {
      hk: 'GoodReader PDF Editor & Viewer',
    },
    addType: 'auto',
  },
  {
    id: 887877435,
    name: {
      hk: 'f8 镜头大师',
    },
    addType: 'auto',
  },
  {
    id: 908905093,
    name: {
      cn: 'Lumy - 太阳追踪器与黄金时刻',
    },
    addType: 'auto',
  },
  {
    id: 961339405,
    name: {
      tw: '監獄人生 RPG',
    },
    addType: 'auto',
  },
  {
    id: 994157520,
    name: {
      tr: '1942 Pacific Front Premium',
    },
    addType: 'auto',
  },
  {
    id: 1048509287,
    name: {
      hk: '龍紀冒險棋',
    },
    addType: 'auto',
  },
  {
    id: 1087099916,
    name: {
      hk: '鉛筆素描 高清版',
    },
    addType: 'auto',
  },
  {
    id: 1107320261,
    name: {
      hk: 'Splitter Critters',
    },
    addType: 'auto',
  },
  {
    id: 1241909999,
    name: {
      tw: 'WorkOutDoors',
    },
    addType: 'auto',
  },
  {
    id: 1293681293,
    name: {
      us: 'Pocket Build',
    },
    addType: 'auto',
  },
  {
    id: 1330717186,
    name: {
      us: 'The Golf Tracer',
    },
    addType: 'auto',
  },
  {
    id: 1357651989,
    name: {
      hk: 'Tick Tock: A Tale for Two',
    },
    addType: 'auto',
  },
  {
    id: 1385258906,
    name: {
      tw: 'Mindustry',
    },
    addType: 'auto',
  },
  {
    id: 1402080820,
    name: {
      tw: 'This War of Mine: Stories',
    },
    addType: 'auto',
  },
  {
    id: 1439262206,
    name: {
      hk: 'Root Board Game',
    },
    addType: 'auto',
  },
  {
    id: 1450194251,
    name: {
      tr: 'Weight Loss in 28 Days',
    },
    addType: 'auto',
  },
  {
    id: 1477229754,
    name: {
      tr: "Papa's Cheeseria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1514329124,
    name: {
      tw: 'Rusted Warfare - RTS',
    },
    addType: 'auto',
  },
  {
    id: 1553055273,
    name: {
      tr: 'Chairgun Elite Ballistic Tool',
    },
    addType: 'auto',
  },
  {
    id: 1573220858,
    name: {
      hk: '環球酒店大亨',
    },
    addType: 'auto',
  },
  {
    id: 1580509302,
    name: {
      hk: '伊格利亞戰記',
    },
    addType: 'auto',
  },
  {
    id: 1614771445,
    name: {
      hk: 'Rotaeno - 旋轉音律',
    },
    addType: 'auto',
  },
  {
    id: 6742396803,
    name: {
      cn: 'DaDaDaDa - 空气枪',
    },
    addType: 'auto',
  },
  {
    id: 6740943002,
    name: {
      cn: 'BaMai',
    },
    addType: 'auto',
  },
  {
    id: 6743459503,
    name: {
      hk: '逐鹿',
    },
    addType: 'auto',
  },
  {
    id: 6480251529,
    name: {
      hk: '體育集換卡製作專業版',
    },
    addType: 'auto',
  },
  {
    id: 6739179322,
    name: {
      hk: 'WristShorts for YouTube',
    },
    addType: 'auto',
  },
  {
    id: 6744837914,
    name: {
      tw: '塊塊愛消除-手錶遊戲經典快樂休閒益智',
    },
    addType: 'auto',
  },
  {
    id: 6502623166,
    name: {
      tw: '金武江湖',
    },
    addType: 'auto',
  },
  {
    id: 6468033830,
    name: {
      tw: '憶我: 一個性格測試遊戲',
    },
    addType: 'auto',
  },
  {
    id: 6738138603,
    name: {
      tw: '偶像之路终极版UltimateEdition',
    },
    addType: 'auto',
  },
  {
    id: 6739185971,
    name: {
      us: 'Earnifi: Rent, Early Pay, Cash',
    },
    addType: 'auto',
  },
  {
    id: 284972998,
    name: {
      mo: 'SoundHound∞ 音樂識別搜尋器及播放器',
    },
    addType: 'auto',
  },
  {
    id: 288419283,
    name: {
      us: 'RadarScope',
    },
    addType: 'auto',
  },
  {
    id: 292421271,
    name: {
      mo: 'Fieldrunners',
    },
    addType: 'auto',
  },
  {
    id: 294934058,
    name: {
      us: 'HotSchedules',
    },
    addType: 'auto',
  },
  {
    id: 298206806,
    name: {
      us: 'iReal Pro',
    },
    addType: 'auto',
  },
  {
    id: 299117180,
    name: {
      tr: 'Airports',
    },
    addType: 'auto',
  },
  {
    id: 301387274,
    name: {
      us: 'Pocket God',
    },
    addType: 'auto',
  },
  {
    id: 305557780,
    name: {
      mo: 'iSwap Faces Pro',
    },
    addType: 'auto',
  },
  {
    id: 306938028,
    name: {
      mo: 'Photo Sticker',
    },
    addType: 'auto',
  },
  {
    id: 307132353,
    name: {
      mo: "Sally's Spa",
    },
    addType: 'auto',
  },
  {
    id: 307727765,
    name: {
      mo: 'Doodle Jump',
    },
    addType: 'auto',
  },
  {
    id: 307751675,
    name: {
      mo: 'PopStar!-stars crush',
    },
    addType: 'auto',
  },
  {
    id: 315021242,
    name: {
      mo: 'Unblock Me Premium',
    },
    addType: 'auto',
  },
  {
    id: 315514944,
    name: {
      mo: '实用家常菜谱大全',
    },
    addType: 'auto',
  },
  {
    id: 317809458,
    name: {
      hk: 'LiveATC Air Radio',
      mo: 'LiveATC Air Radio',
      us: 'LiveATC Air Radio',
    },
    addType: 'auto',
  },
  {
    id: 323048611,
    name: {
      mo: 'Dr.eye譯典通',
    },
    addType: 'auto',
  },
  {
    id: 329670577,
    name: {
      mo: 'Camera+傳統',
    },
    addType: 'auto',
  },
  {
    id: 332424440,
    name: {
      mo: 'MILLIONAIRE TYCOON™',
    },
    addType: 'auto',
  },
  {
    id: 333212604,
    name: {
      tw: '蒙恬名片王Mobile',
    },
    addType: 'auto',
  },
  {
    id: 335029050,
    name: {
      us: 'Catan Classic',
    },
    addType: 'auto',
  },
  {
    id: 335709058,
    name: {
      us: 'Stylebook',
    },
    addType: 'auto',
  },
  {
    id: 335862325,
    name: {
      tr: 'Blower',
    },
    addType: 'auto',
  },
  {
    id: 342115564,
    name: {
      mo: 'Hipstamatic 相機',
    },
    addType: 'auto',
  },
  {
    id: 344784375,
    name: {
      mo: 'OPlayer - video player',
    },
    addType: 'auto',
  },
  {
    id: 351850196,
    name: {
      mo: '紫白飛星萬年曆 - 十三行作品',
    },
    addType: 'auto',
  },
  {
    id: 352247139,
    name: {
      us: 'Calorie Counter PRO MyNetDiary',
    },
    addType: 'auto',
  },
  {
    id: 355281169,
    name: {
      mo: '遠流字典通 (豪華版)',
    },
    addType: 'auto',
  },
  {
    id: 357404131,
    name: {
      hk: '慢快門相機 (Slow Shutter Cam)',
      mo: '慢快門相機 (Slow Shutter Cam)',
      tw: '慢快門相機 (Slow Shutter Cam)',
    },
    addType: 'auto',
  },
  {
    id: 357421934,
    name: {
      us: 'PeakFinder',
    },
    addType: 'auto',
  },
  {
    id: 367327563,
    name: {
      mo: 'Secret Photo+Folder',
    },
    addType: 'auto',
  },
  {
    id: 373493387,
    name: {
      hk: 'AnkiMobile Flashcards',
      tw: 'AnkiMobile Flashcards',
      us: 'AnkiMobile Flashcards',
      tr: 'AnkiMobile Flashcards',
    },
    addType: 'auto',
  },
  {
    id: 388130466,
    name: {
      mo: 'iSlash',
    },
    addType: 'auto',
  },
  {
    id: 388857410,
    name: {
      us: 'Blackjack & Card Counting Pro',
    },
    addType: 'auto',
  },
  {
    id: 392531952,
    name: {
      mo: '倉頡解碼',
    },
    addType: 'auto',
  },
  {
    id: 395680819,
    name: {
      mo: 'AVPlayer',
    },
    addType: 'auto',
  },
  {
    id: 396085661,
    name: {
      mo: '遊戲發展國++',
    },
    addType: 'auto',
  },
  {
    id: 402012828,
    name: {
      mo: 'iSafe Pro',
    },
    addType: 'auto',
  },
  {
    id: 402656416,
    name: {
      mo: 'IP Cam Viewer Pro',
    },
    addType: 'auto',
  },
  {
    id: 403684733,
    name: {
      tr: 'Badoo Premium',
    },
    addType: 'auto',
  },
  {
    id: 404990064,
    name: {
      us: 'SkyView®',
    },
    addType: 'auto',
  },
  {
    id: 405835358,
    name: {
      us: 'MilGPS',
      tr: 'MilGPS',
    },
    addType: 'auto',
  },
  {
    id: 406239138,
    name: {
      mo: 'Puffin Cloud Browser',
    },
    addType: 'auto',
  },
  {
    id: 406541444,
    name: {
      mo: '8mm Vintage Camera',
    },
    addType: 'auto',
  },
  {
    id: 407933070,
    name: {
      mo: '懷舊日曆 - 十三行作品',
    },
    addType: 'auto',
  },
  {
    id: 408697793,
    name: {
      mo: 'King of Opera',
    },
    addType: 'auto',
  },
  {
    id: 408854559,
    name: {
      mo: '溫泉物語',
    },
    addType: 'auto',
  },
  {
    id: 417817520,
    name: {
      mo: 'Tiny Wings',
      us: 'Tiny Wings',
    },
    addType: 'auto',
  },
  {
    id: 424403441,
    name: {
      mo: 'Pimple Eraser',
    },
    addType: 'auto',
  },
  {
    id: 430163724,
    name: {
      hk: '智能風水羅庚-專業版',
    },
    addType: 'auto',
  },
  {
    id: 432850619,
    name: {
      us: 'FL Studio Mobile',
    },
    addType: 'auto',
  },
  {
    id: 433596395,
    name: {
      mo: 'ZOOKEEPER DX',
    },
    addType: 'auto',
  },
  {
    id: 449735650,
    name: {
      hk: '鱷魚小頑皮愛洗澡',
      mo: '鱷魚小頑皮愛洗澡',
      us: "Where's My Water?",
    },
    addType: 'auto',
  },
  {
    id: 450542233,
    name: {
      mo: 'Cut the Rope: Experiments GOLD',
    },
    addType: 'auto',
  },
  {
    id: 452990487,
    name: {
      mo: 'RushPlayer',
    },
    addType: 'auto',
  },
  {
    id: 454086751,
    name: {
      us: 'Flick Home Run !',
    },
    addType: 'auto',
  },
  {
    id: 469343554,
    name: {
      mo: '洛克人X',
    },
    addType: 'auto',
  },
  {
    id: 479516143,
    name: {
      hk: 'Minecraft',
      mo: 'Minecraft',
      tw: 'Minecraft',
      us: 'Minecraft: Dream it, Build it!',
      tr: 'Minecraft: Dream it, Build it!',
    },
    addType: 'auto',
  },
  {
    id: 479662730,
    name: {
      mo: 'Grand Theft Auto III',
    },
    addType: 'auto',
  },
  {
    id: 482303584,
    name: {
      us: 'PDG PROmote 2025+',
    },
    addType: 'auto',
  },
  {
    id: 485246824,
    name: {
      mo: 'Cytus',
      tw: 'Cytus',
    },
    addType: 'auto',
  },
  {
    id: 491231653,
    name: {
      mo: '大富翁 4 Fun',
      tw: '大富翁 4 Fun',
    },
    addType: 'auto',
  },
  {
    id: 497716362,
    name: {
      us: 'TonalEnergy Tuner & Metronome',
    },
    addType: 'auto',
  },
  {
    id: 498732510,
    name: {
      tr: 'Blitzer.de PRO',
    },
    addType: 'auto',
  },
  {
    id: 501695715,
    name: {
      mo: '兒歌童謠 - 國語+粵語(廣東話)兒歌連歌詞',
    },
    addType: 'auto',
  },
  {
    id: 503190232,
    name: {
      tw: 'Bridge Constructor',
      tr: 'Bridge Constructor',
    },
    addType: 'auto',
  },
  {
    id: 504176984,
    name: {
      hk: '論八字(實用)',
      tw: '論八字(實用)',
    },
    addType: 'auto',
  },
  {
    id: 504300412,
    name: {
      hk: '歐陸戰爭3',
    },
    addType: 'auto',
  },
  {
    id: 505367096,
    name: {
      tw: '世界迷霧',
    },
    addType: 'auto',
  },
  {
    id: 519411018,
    name: {
      cn: 'iGuzheng - 爱古筝',
    },
    addType: 'auto',
  },
  {
    id: 520231936,
    name: {
      tr: 'eDrawings',
    },
    addType: 'auto',
  },
  {
    id: 524387892,
    name: {
      us: 'The Official KSIOlajidebt Soundboard - KSI Sounds',
    },
    addType: 'auto',
  },
  {
    id: 525818839,
    name: {
      hk: 'Plague Inc. (瘟疫公司)',
      mo: 'Plague Inc. (瘟疫公司)',
      tw: 'Plague Inc. (瘟疫公司)',
      us: 'Plague Inc.',
      tr: 'Plague Inc.',
    },
    addType: 'auto',
  },
  {
    id: 530425820,
    name: {
      cn: '东方财富领先版-财经资讯&股票开户',
    },
    addType: 'auto',
  },
  {
    id: 540925500,
    name: {
      tr: 'Need for Speed™ Most Wanted',
    },
    addType: 'auto',
  },
  {
    id: 549105915,
    name: {
      us: 'True Skate',
      tr: 'True Skate',
    },
    addType: 'auto',
  },
  {
    id: 549432607,
    name: {
      tr: 'Townsmen Premium',
    },
    addType: 'auto',
  },
  {
    id: 554937499,
    name: {
      tr: 'Earn to Die',
    },
    addType: 'auto',
  },
  {
    id: 555642577,
    name: {
      tw: '晉碩萬年曆',
    },
    addType: 'auto',
  },
  {
    id: 563718995,
    name: {
      us: 'Bloons TD 5',
    },
    addType: 'auto',
  },
  {
    id: 575154654,
    name: {
      us: 'Pou',
      tr: 'Pou',
    },
    addType: 'auto',
  },
  {
    id: 577628510,
    name: {
      tr: 'TeamSpeak 3',
    },
    addType: 'auto',
  },
  {
    id: 578448682,
    name: {
      tr: 'Grand Theft Auto: Vice City',
    },
    addType: 'auto',
  },
  {
    id: 586149216,
    name: {
      us: 'Monash FODMAP Diet',
    },
    addType: 'auto',
  },
  {
    id: 594117733,
    name: {
      mo: '仙劍奇俠傳1 DOS懷舊版',
    },
    addType: 'auto',
  },
  {
    id: 600626116,
    name: {
      us: "Papa's Burgeria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 623592465,
    name: {
      hk: 'Heads Up!',
      us: 'Heads Up!',
    },
    addType: 'auto',
  },
  {
    id: 625334537,
    name: {
      hk: 'Geometry Dash',
      mo: 'Geometry Dash',
      us: 'Geometry Dash',
      tr: 'Geometry Dash',
    },
    addType: 'auto',
  },
  {
    id: 634235735,
    name: {
      tr: 'Duet Game',
    },
    addType: 'auto',
  },
  {
    id: 640364616,
    name: {
      us: 'Terraria',
      tr: 'Terraria',
    },
    addType: 'auto',
  },
  {
    id: 646256209,
    name: {
      mo: '照片橡皮擦',
    },
    addType: 'auto',
  },
  {
    id: 657016140,
    name: {
      mo: 'Good Maps - Google地圖,3D,離線,全球街景,公交,地鐵,導航',
    },
    addType: 'auto',
  },
  {
    id: 679044544,
    name: {
      mo: '理財幫手 AndroMoney',
      tw: '理財幫手 AndroMoney',
    },
    addType: 'auto',
  },
  {
    id: 687236545,
    name: {
      tw: '劍橋高階英漢雙解詞典：英語— 繁體中文',
    },
    addType: 'auto',
  },
  {
    id: 697885605,
    name: {
      tw: '常春藤基礎英文字彙',
    },
    addType: 'auto',
  },
  {
    id: 700637744,
    name: {
      mo: 'DEEMO',
    },
    addType: 'auto',
  },
  {
    id: 736683061,
    name: {
      tr: 'A Dark Room',
    },
    addType: 'auto',
  },
  {
    id: 741990930,
    name: {
      us: 'Walkout Song DJ',
    },
    addType: 'auto',
  },
  {
    id: 763692274,
    name: {
      hk: 'Grand Theft Auto: San Andreas',
      mo: 'Grand Theft Auto: San Andreas',
      tw: 'Grand Theft Auto: San Andreas',
      us: 'Grand Theft Auto: San Andreas',
      tr: 'Grand Theft Auto: San Andreas',
    },
    addType: 'auto',
  },
  {
    id: 784373321,
    name: {
      mo: '軒轅劍參外傳 天之痕',
    },
    addType: 'auto',
  },
  {
    id: 807317212,
    name: {
      cn: '每日精选-天文地理人文照片之美&壁纸',
    },
    addType: 'auto',
  },
  {
    id: 824305459,
    name: {
      us: "Papa's Freezeria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 829581836,
    name: {
      hk: 'Driving Theory Test 4 in 1 Kit',
    },
    addType: 'auto',
  },
  {
    id: 837860959,
    name: {
      hk: '迷你地鐵',
      mo: '迷你地鐵',
      us: 'Mini Metro',
    },
    addType: 'auto',
  },
  {
    id: 860809977,
    name: {
      hk: 'Fongo World Edition',
    },
    addType: 'auto',
  },
  {
    id: 870322730,
    name: {
      mo: 'Implosion 聚爆',
    },
    addType: 'auto',
  },
  {
    id: 890791581,
    name: {
      tw: '樂客導航王全3D Pro',
    },
    addType: 'auto',
  },
  {
    id: 891194610,
    name: {
      hk: '戰車撞殭屍2 (Earn to Die 2)',
      us: 'Earn to Die 2',
      tr: 'Earn to Die 2',
    },
    addType: 'auto',
  },
  {
    id: 901738789,
    name: {
      cn: '地下城堡: 炼金术师的魔幻之旅',
    },
    addType: 'auto',
  },
  {
    id: 904278510,
    name: {
      hk: '刺客任務：狙擊 (Hitman Sniper)',
      mo: '刺客任務：狙擊 (Hitman Sniper)',
      tr: 'Hitman Sniper',
    },
    addType: 'auto',
  },
  {
    id: 912536422,
    name: {
      us: "Five Nights at Freddy's",
      tr: "Five Nights at Freddy's",
    },
    addType: 'auto',
  },
  {
    id: 916976066,
    name: {
      tw: '短語鍵盤',
    },
    addType: 'auto',
  },
  {
    id: 918609651,
    name: {
      mo: 'Money Pro: 個人財務',
      tw: 'Money Pro: 個人財務',
    },
    addType: 'auto',
  },
  {
    id: 924695435,
    name: {
      mo: 'Pixelmator',
    },
    addType: 'auto',
  },
  {
    id: 925494667,
    name: {
      us: "Papa's Pizzeria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 926015463,
    name: {
      tw: 'Timestamp Photo and Video pro',
    },
    addType: 'auto',
  },
  {
    id: 926076608,
    name: {
      mo: '秒速記帳 1SecMoney',
    },
    addType: 'auto',
  },
  {
    id: 927098908,
    name: {
      us: 'Pro Camera by Moment',
    },
    addType: 'auto',
  },
  {
    id: 932389062,
    name: {
      tw: '永不言棄！！ - 不可能的節奏跳躍 & 黑色小球翻滾',
    },
    addType: 'auto',
  },
  {
    id: 935216956,
    name: {
      us: 'Papers, Please',
    },
    addType: 'auto',
  },
  {
    id: 935528099,
    name: {
      cn: '同步音律',
    },
    addType: 'auto',
  },
  {
    id: 941143328,
    name: {
      us: "Five Nights at Freddy's 2",
      tr: "Five Nights at Freddy's 2",
    },
    addType: 'auto',
  },
  {
    id: 945322477,
    name: {
      mo: '新仙劍奇俠傳(正版單機)',
    },
    addType: 'auto',
  },
  {
    id: 946477821,
    name: {
      hk: 'Evoland',
    },
    addType: 'auto',
  },
  {
    id: 948944368,
    name: {
      hk: 'iBrowser- Full Screen Browser',
    },
    addType: 'auto',
  },
  {
    id: 954724812,
    name: {
      cn: '同花顺至尊版-股票软件',
    },
    addType: 'auto',
  },
  {
    id: 955687901,
    name: {
      mo: 'kirakira+',
    },
    addType: 'auto',
  },
  {
    id: 961932335,
    name: {
      mo: 'Analog Tokyo',
    },
    addType: 'auto',
  },
  {
    id: 963034692,
    name: {
      us: 'Streaks',
    },
    addType: 'auto',
  },
  {
    id: 964708975,
    name: {
      cn: '古诗文网',
    },
    addType: 'auto',
  },
  {
    id: 973482987,
    name: {
      us: "Five Nights at Freddy's 3",
    },
    addType: 'auto',
  },
  {
    id: 975683986,
    name: {
      tw: 'Door Kickers',
    },
    addType: 'auto',
  },
  {
    id: 982175678,
    name: {
      hk: 'This War of Mine',
      mo: 'This War of Mine',
      tw: 'This War of Mine',
      tr: 'This War of Mine',
    },
    addType: 'auto',
  },
  {
    id: 982227026,
    name: {
      cn: '聚爆Implosion',
    },
    addType: 'auto',
  },
  {
    id: 992047786,
    name: {
      mo: 'Analog Wedding',
    },
    addType: 'auto',
  },
  {
    id: 998437582,
    name: {
      cn: '法语背单词 - 法语单词记忆工具',
    },
    addType: 'auto',
  },
  {
    id: 1010311475,
    name: {
      us: 'QuickBend: Conduit Bending',
    },
    addType: 'auto',
  },
  {
    id: 1012298403,
    name: {
      hk: "Don't Starve: Pocket Edition",
      mo: "Don't Starve: Pocket Edition",
    },
    addType: 'auto',
  },
  {
    id: 1023146677,
    name: {
      us: "Five Nights at Freddy's 4",
    },
    addType: 'auto',
  },
  {
    id: 1028950091,
    name: {
      cn: '贪婪洞窟：猿神降临',
      mo: '貪婪洞窟：猿神降临',
    },
    addType: 'auto',
  },
  {
    id: 1029932207,
    name: {
      us: "Papa's Cupcakeria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1035219553,
    name: {
      mo: 'Analog London',
    },
    addType: 'auto',
  },
  {
    id: 1035219562,
    name: {
      mo: 'Analog Paris',
    },
    addType: 'auto',
  },
  {
    id: 1065360416,
    name: {
      us: 'BimmerLink for BMW and MINI',
    },
    addType: 'auto',
  },
  {
    id: 1065599938,
    name: {
      mo: 'HARVEST MOON: Seeds Of Memories',
    },
    addType: 'auto',
  },
  {
    id: 1077639630,
    name: {
      cn: '说剑The Swords',
    },
    addType: 'auto',
  },
  {
    id: 1093131935,
    name: {
      us: 'Incredibox',
      tr: 'Incredibox',
    },
    addType: 'auto',
  },
  {
    id: 1094038347,
    name: {
      hk: 'Only You Are Here',
      tw: 'Only You Are Here',
    },
    addType: 'auto',
  },
  {
    id: 1095903651,
    name: {
      cn: '【约吗】-约会附近的人，同城陌生人交友陪玩聊天软件',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1099088440,
    name: {
      cn: '火柴人联盟2',
    },
    addType: 'auto',
  },
  {
    id: 1108479411,
    name: {
      hk: 'Driving Zone 2: Car Racing',
    },
    addType: 'auto',
  },
  {
    id: 1110646984,
    name: {
      cn: '地下城堡2: 黑暗觉醒',
    },
    addType: 'auto',
  },
  {
    id: 1111420122,
    name: {
      us: 'Hear My Baby Heartbeat Monitor',
    },
    addType: 'auto',
  },
  {
    id: 1112429079,
    name: {
      cn: '物种起源',
    },
    addType: 'auto',
  },
  {
    id: 1113736426,
    name: {
      mo: 'RollerCoaster Tycoon® Classic',
      us: 'RollerCoaster Tycoon® Classic',
    },
    addType: 'auto',
  },
  {
    id: 1118115766,
    name: {
      hk: 'Bloons TD 6',
      us: 'Bloons TD 6',
      tr: 'Bloons TD 6',
    },
    addType: 'auto',
  },
  {
    id: 1121484538,
    name: {
      hk: '箱庭鐵道物語',
    },
    addType: 'auto',
  },
  {
    id: 1128464707,
    name: {
      hk: 'Death Road to Canada',
    },
    addType: 'auto',
  },
  {
    id: 1129429340,
    name: {
      hk: 'RaceChrono Pro',
    },
    addType: 'auto',
  },
  {
    id: 1134805859,
    name: {
      cn: '迷失岛',
    },
    addType: 'auto',
  },
  {
    id: 1137257203,
    name: {
      tr: 'Muslim Prayer Times Pro, Adhan',
    },
    addType: 'auto',
  },
  {
    id: 1142016085,
    name: {
      tw: 'Rusty Lake: Roots',
    },
    addType: 'auto',
  },
  {
    id: 1160608318,
    name: {
      mo: 'Air Traffic Control - Live ATC',
    },
    addType: 'auto',
  },
  {
    id: 1166143148,
    name: {
      hk: '暴力街區2',
    },
    addType: 'auto',
  },
  {
    id: 1169282239,
    name: {
      cn: '活下去-丧尸题材末日生存冒险游戏',
    },
    addType: 'auto',
  },
  {
    id: 1184204602,
    name: {
      cn: 'ProMovie + 专业摄像机',
    },
    addType: 'auto',
  },
  {
    id: 1187265767,
    name: {
      mo: 'Monument Valley 2',
    },
    addType: 'auto',
  },
  {
    id: 1189781891,
    name: {
      us: "Five Nights at Freddy's: SL",
    },
    addType: 'auto',
  },
  {
    id: 1195035357,
    name: {
      tw: '地牢防禦 : 勇士的侵入',
    },
    addType: 'auto',
  },
  {
    id: 1217732174,
    name: {
      cn: 'TA - 一对一聊天，遇见对的人',
    },
    addType: 'auto',
  },
  {
    id: 1237692856,
    name: {
      mo: 'Gudak Cam',
    },
    addType: 'auto',
  },
  {
    id: 1239299402,
    name: {
      hk: 'Street Fighter IV CE',
    },
    addType: 'auto',
  },
  {
    id: 1241383990,
    name: {
      hk: 'Baby Sensory Signbook',
    },
    addType: 'auto',
  },
  {
    id: 1247397901,
    name: {
      hk: '奧德瑪',
    },
    addType: 'auto',
  },
  {
    id: 1248033433,
    name: {
      hk: '王國保衛戰：復仇',
    },
    addType: 'auto',
  },
  {
    id: 1249864455,
    name: {
      tr: 'Peace, Death!',
    },
    addType: 'auto',
  },
  {
    id: 1250144822,
    name: {
      mo: '玄空飛星羅經 - 專業風水羅盤',
    },
    addType: 'auto',
  },
  {
    id: 1259067036,
    name: {
      mo: '發現動物公園',
    },
    addType: 'auto',
  },
  {
    id: 1262474519,
    name: {
      tw: 'Monoposto',
      tr: 'Monoposto',
    },
    addType: 'auto',
  },
  {
    id: 1264608487,
    name: {
      tr: 'Driving Zone: Germany Pro',
    },
    addType: 'auto',
  },
  {
    id: 1290687550,
    name: {
      tw: 'Cytus II',
    },
    addType: 'auto',
  },
  {
    id: 1291429551,
    name: {
      tr: '60 Parsecs!',
    },
    addType: 'auto',
  },
  {
    id: 1291730054,
    name: {
      us: 'Lowriders Comeback 2: Cruising',
    },
    addType: 'auto',
  },
  {
    id: 1296085645,
    name: {
      tw: 'aRacerSmart',
    },
    addType: 'auto',
  },
  {
    id: 1298544927,
    name: {
      tr: 'My Child Lebensborn',
    },
    addType: 'auto',
  },
  {
    id: 1303222868,
    name: {
      us: 'Paprika Recipe Manager 3',
    },
    addType: 'auto',
  },
  {
    id: 1312534841,
    name: {
      cn: 'MyText Widget',
    },
    addType: 'auto',
  },
  {
    id: 1329434099,
    name: {
      cn: '乱斗堂3',
    },
    addType: 'auto',
  },
  {
    id: 1330314351,
    name: {
      tr: 'Videdit - Handy Video Editor',
    },
    addType: 'auto',
  },
  {
    id: 1336793944,
    name: {
      tw: '勇敢的哈克',
    },
    addType: 'auto',
  },
  {
    id: 1339516665,
    name: {
      cn: '奥特曼传奇英雄VIP版',
    },
    addType: 'auto',
  },
  {
    id: 1351652600,
    name: {
      tr: 'Boolean!',
    },
    addType: 'auto',
  },
  {
    id: 1359107338,
    name: {
      us: 'Catch the Easter Bunny',
    },
    addType: 'auto',
  },
  {
    id: 1359652100,
    name: {
      hk: 'DungeonMaker',
      mo: 'DungeonMaker',
    },
    addType: 'auto',
  },
  {
    id: 1391339323,
    name: {
      tr: 'Zaptiye',
    },
    addType: 'auto',
  },
  {
    id: 1392608717,
    name: {
      us: "Papa's Scooperia To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1406710800,
    name: {
      hk: 'Stardew Valley',
      mo: 'Stardew Valley',
      tw: 'Stardew Valley',
      us: 'Stardew Valley',
      tr: 'Stardew Valley',
    },
    addType: 'auto',
  },
  {
    id: 1435004182,
    name: {
      tr: 'Hermes: KAYIP',
    },
    addType: 'auto',
  },
  {
    id: 1436429074,
    name: {
      mo: 'FILCA - SLR Film Camera',
      tw: 'FILCA - SLR Film Camera',
      tr: 'FILCA - SLR Film Camera',
    },
    addType: 'auto',
  },
  {
    id: 1437096541,
    name: {
      hk: 'Rush Rally 3',
    },
    addType: 'auto',
  },
  {
    id: 1438245901,
    name: {
      us: "Papa's Pancakeria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1439187947,
    name: {
      hk: 'Rebel Inc. (反叛公司)',
      mo: 'Rebel Inc. (反叛公司)',
      tw: 'Rebel Inc. (反叛公司)',
      us: 'Rebel Inc.',
      tr: 'Rebel Inc.',
    },
    addType: 'auto',
  },
  {
    id: 1439881811,
    name: {
      us: 'RadarOmega',
    },
    addType: 'auto',
  },
  {
    id: 1441969889,
    name: {
      tr: 'Z.O.N.A Shadow of Lemansk',
    },
    addType: 'auto',
  },
  {
    id: 1442776789,
    name: {
      tw: '槍與香蕉 - Pirates Outlaws',
    },
    addType: 'auto',
  },
  {
    id: 1444761746,
    name: {
      hk: 'RFS - Real Flight Simulator',
      tw: 'RFS - Real Flight Simulator',
      us: 'RFS - Real Flight Simulator',
      tr: 'RFS - Real Flight Simulator',
    },
    addType: 'auto',
    allowNotification: false,
  },
  {
    id: 1449893235,
    name: {
      tr: 'Earthquake Network',
    },
    addType: 'auto',
  },
  {
    id: 1450064785,
    name: {
      tw: '山林日誌',
    },
    addType: 'auto',
  },
  {
    id: 1450144092,
    name: {
      hk: '三國志天下布武 - 單機戰棋策略遊戲',
      mo: '三國志天下布武 - 單機戰棋策略遊戲',
      tw: '三國志天下布武 - 單機戰棋策略遊戲',
    },
    addType: 'auto',
  },
  {
    id: 1451873044,
    name: {
      us: "Papa's Wingeria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1453838527,
    name: {
      tr: 'Age of History II',
    },
    addType: 'auto',
  },
  {
    id: 1455781522,
    name: {
      us: 'FNaF 6: Pizzeria Simulator',
    },
    addType: 'auto',
  },
  {
    id: 1459749978,
    name: {
      cn: 'List背单词',
    },
    addType: 'auto',
  },
  {
    id: 1461751938,
    name: {
      us: 'Purple Place - Classic Games',
      tr: 'Purple Place - Classic Games',
    },
    addType: 'auto',
  },
  {
    id: 1464850921,
    name: {
      cn: '每日英语阅读',
    },
    addType: 'auto',
  },
  {
    id: 1474716211,
    name: {
      us: '60 Seconds! Reatomized',
      tr: '60 Seconds! Reatomized',
    },
    addType: 'auto',
  },
  {
    id: 1477203766,
    name: {
      tr: 'Total War: MEDIEVAL II',
    },
    addType: 'auto',
  },
  {
    id: 1477854253,
    name: {
      hk: '大家的日本語 初級 第二版',
    },
    addType: 'auto',
  },
  {
    id: 1477966166,
    name: {
      mo: 'MONOPOLY: The Board Game',
      us: 'MONOPOLY: The Board Game',
      tr: 'MONOPOLY: The Board Game',
    },
    addType: 'auto',
  },
  {
    id: 1477991646,
    name: {
      hk: '王國：兩個皇冠',
    },
    addType: 'auto',
  },
  {
    id: 1479608271,
    name: {
      us: 'Arcadia - Watch Games',
    },
    addType: 'auto',
  },
  {
    id: 1480844881,
    name: {
      tr: 'Mini Chess on Watch',
    },
    addType: 'auto',
  },
  {
    id: 1481006495,
    name: {
      tr: 'Countdown App',
    },
    addType: 'auto',
  },
  {
    id: 1482339363,
    name: {
      us: 'iScore5 APHG',
    },
    addType: 'auto',
  },
  {
    id: 1484622401,
    name: {
      tw: 'Religion inc.上帝模擬器',
      tr: 'Religion inc. God Simulator',
    },
    addType: 'auto',
  },
  {
    id: 1485875855,
    name: {
      tr: 'Başkanlar',
    },
    addType: 'auto',
  },
  {
    id: 1491530147,
    name: {
      tw: 'Slay the Spire',
      us: 'Slay the Spire',
    },
    addType: 'auto',
  },
  {
    id: 1497120981,
    name: {
      tr: 'LUCH: Photo Effects & Presets',
    },
    addType: 'auto',
  },
  {
    id: 1499849161,
    name: {
      us: 'Ultimate Custom Night',
    },
    addType: 'auto',
  },
  {
    id: 1500098830,
    name: {
      tr: 'Video Master Pro',
    },
    addType: 'auto',
  },
  {
    id: 1503486239,
    name: {
      tw: '大富翁10',
    },
    addType: 'auto',
  },
  {
    id: 1504662191,
    name: {
      tr: 'Monarşi',
    },
    addType: 'auto',
  },
  {
    id: 1504760106,
    name: {
      tr: 'Eco inc.',
    },
    addType: 'auto',
  },
  {
    id: 1504952058,
    name: {
      us: "Papa's Sushiria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1505636751,
    name: {
      us: 'TeleGuard',
      tr: 'TeleGuard',
    },
    addType: 'auto',
  },
  {
    id: 1509344823,
    name: {
      tr: 'Ezberle',
    },
    addType: 'auto',
  },
  {
    id: 1512751689,
    name: {
      us: 'The Game of Life 2',
    },
    addType: 'auto',
  },
  {
    id: 1515215584,
    name: {
      cn: 'RakugakiAR',
      hk: 'RakugakiAR',
      mo: 'RakugakiAR',
    },
    addType: 'auto',
  },
  {
    id: 1515382132,
    name: {
      mo: 'Axis & Allies 1942 Online',
    },
    addType: 'auto',
  },
  {
    id: 1516531425,
    name: {
      tr: 'JSPS APP',
    },
    addType: 'auto',
  },
  {
    id: 1517349382,
    name: {
      cn: '群雄时代 - 单机三国战棋策略游戏',
    },
    addType: 'auto',
  },
  {
    id: 1518841947,
    name: {
      tr: 'ATSU',
    },
    addType: 'auto',
  },
  {
    id: 1519386476,
    name: {
      tw: 'MiniGames - 觀看遊戲街機',
    },
    addType: 'auto',
  },
  {
    id: 1523633394,
    name: {
      tr: 'SpongeBob SquarePants: BfBB',
    },
    addType: 'auto',
  },
  {
    id: 1525735418,
    name: {
      tr: 'Mesih',
    },
    addType: 'auto',
  },
  {
    id: 1528199331,
    name: {
      hk: '崩潰大陸 2',
      tw: '崩潰大陸 2',
      us: 'Crashlands 2',
    },
    addType: 'auto',
  },
  {
    id: 1531462734,
    name: {
      cn: '桂林字牌手机版',
    },
    addType: 'auto',
  },
  {
    id: 1531654315,
    name: {
      hk: '画師牆紙',
      tw: '画師牆紙',
    },
    addType: 'auto',
  },
  {
    id: 1536762482,
    name: {
      us: 'Spirit Talker ®',
    },
    addType: 'auto',
  },
  {
    id: 1544190466,
    name: {
      cn: '避难所：生存',
    },
    addType: 'auto',
  },
  {
    id: 1544412558,
    name: {
      cn: '航海奇闻',
    },
    addType: 'auto',
  },
  {
    id: 1544722749,
    name: {
      cn: '拣爱',
    },
    addType: 'auto',
  },
  {
    id: 1548185534,
    name: {
      tr: 'Musical Maze',
    },
    addType: 'auto',
  },
  {
    id: 1551207253,
    name: {
      us: "Papa's Mocharia To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1551263854,
    name: {
      cn: '打金传奇:官方正版 搬砖回收永不关服超爆加强版，传奇王者霸业',
    },
    addType: 'auto',
  },
  {
    id: 1555857229,
    name: {
      cn: '2048 for watch',
    },
    addType: 'auto',
  },
  {
    id: 1556671822,
    name: {
      us: 'Merge Watermelon for watch',
    },
    addType: 'auto',
  },
  {
    id: 1559869450,
    name: {
      mo: '新槍彈辯駁V3 大家的自相殘殺新學期 Anniversary',
    },
    addType: 'auto',
  },
  {
    id: 1562560561,
    name: {
      tr: 'Tevekkülvakti Pro',
    },
    addType: 'auto',
  },
  {
    id: 1563932741,
    name: {
      tr: 'Taboo - Official Party Game',
    },
    addType: 'auto',
  },
  {
    id: 1569963107,
    name: {
      tr: 'Aylık Distopya',
    },
    addType: 'auto',
  },
  {
    id: 1576329230,
    name: {
      cn: '传奇1.76官方正版盛大首发(重置版)今日开服送点卡迷失传说',
    },
    addType: 'auto',
  },
  {
    id: 1576763082,
    name: {
      cn: '女帝的日常',
    },
    addType: 'auto',
  },
  {
    id: 1577392165,
    name: {
      hk: 'Monster Train',
    },
    addType: 'auto',
  },
  {
    id: 1578203914,
    name: {
      cn: '电子宠物机',
    },
    addType: 'auto',
  },
  {
    id: 1581640677,
    name: {
      tr: 'Football Referee Simulator',
    },
    addType: 'auto',
  },
  {
    id: 1587674627,
    name: {
      tw: '愛琳詩篇:少女養成系 休閒放置二次元卡牌手遊',
    },
    addType: 'auto',
  },
  {
    id: 1590622755,
    name: {
      us: 'µBrowser: Watch Web Browser',
    },
    addType: 'auto',
  },
  {
    id: 1591627945,
    name: {
      us: "Papa's Cluckeria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 1592505377,
    name: {
      tr: 'Wreckfest',
    },
    addType: 'auto',
  },
  {
    id: 1592660274,
    name: {
      tw: '天際牧場物語-模擬經營自己的牧場',
    },
    addType: 'auto',
  },
  {
    id: 1595739885,
    name: {
      tr: 'Shadow Hunter: Special Edition',
    },
    addType: 'auto',
  },
  {
    id: 1596736236,
    name: {
      mo: 'Rovio Classics: Angry Birds',
      tw: 'Rovio Classics: Angry Birds',
      us: "Red's First Flight",
      tr: "Red's First Flight",
    },
    addType: 'auto',
  },
  {
    id: 1600307023,
    name: {
      tr: "Dealer's Life 2",
    },
    addType: 'auto',
  },
  {
    id: 1603421749,
    name: {
      cn: '传奇高爆99999% 攻速9999倍PC同款三职业:战无不胜',
    },
    addType: 'auto',
  },
  {
    id: 1603553413,
    name: {
      cn: '手表浏览器',
    },
    addType: 'auto',
  },
  {
    id: 1606405358,
    name: {
      tr: "Dealer's Life",
    },
    addType: 'auto',
  },
  {
    id: 1609910024,
    name: {
      hk: '泰拉瑞亞',
      mo: '泰拉瑞亞',
      tw: '泰拉瑞亞',
    },
    addType: 'auto',
  },
  {
    id: 1610947489,
    name: {
      tr: 'Poppy Playtime Chapter 1',
    },
    addType: 'auto',
  },
  {
    id: 1612952507,
    name: {
      hk: 'AeroPads - Pads & Soundscapes',
    },
    addType: 'auto',
  },
  {
    id: 1614200925,
    name: {
      cn: '部落与弯刀',
    },
    addType: 'auto',
  },
  {
    id: 1622869542,
    name: {
      hk: 'Kingdom Rush 5: Alliance TD',
      tw: 'Kingdom Rush 5: Alliance TD',
      us: 'Kingdom Rush 5: Alliance TD',
      tr: 'Kingdom Rush 5: Alliance TD',
    },
    addType: 'auto',
  },
  {
    id: 1624326561,
    name: {
      mo: '真武三国  英雄集结',
    },
    addType: 'auto',
  },
  {
    id: 1631859420,
    name: {
      hk: 'After Inc.',
      tw: 'After Inc.',
      us: 'After Inc.',
    },
    addType: 'auto',
  },
  {
    id: 1631867592,
    name: {
      mo: '珍寶機場物語',
    },
    addType: 'auto',
  },
  {
    id: 1633243177,
    name: {
      us: 'Ableton Note',
    },
    addType: 'auto',
  },
  {
    id: 1633253544,
    name: {
      cn: '消除星星 - 益智的星星消消乐经典手表游戏',
      hk: '消除星星-益智的星星消消樂經典手錶消除遊戲',
    },
    addType: 'auto',
  },
  {
    id: 1636342413,
    name: {
      tr: 'SSH Term Pro',
    },
    addType: 'auto',
  },
  {
    id: 1642601792,
    name: {
      tw: 'The Past Within',
      tr: 'The Past Within',
    },
    addType: 'auto',
  },
  {
    id: 1642733080,
    name: {
      hk: 'DungeonSquad',
      mo: 'DungeonSquad',
      tw: 'DungeonSquad',
    },
    addType: 'auto',
  },
  {
    id: 1643199620,
    name: {
      hk: 'Any Text · Widgets',
    },
    addType: 'auto',
  },
  {
    id: 1659271912,
    name: {
      hk: '東京電車２',
    },
    addType: 'auto',
  },
  {
    id: 1659316190,
    name: {
      cn: '钢铁战队(R)',
    },
    addType: 'auto',
  },
  {
    id: 1662217862,
    name: {
      tw: 'Wipr 2',
      us: 'Wipr 2',
    },
    addType: 'auto',
  },
  {
    id: 1665706687,
    name: {
      tw: 'Underground Blossom',
    },
    addType: 'auto',
  },
  {
    id: 1668755109,
    name: {
      hk: 'Brotato:Premium',
      tw: 'Brotato:Premium',
    },
    addType: 'auto',
  },
  {
    id: 1669877091,
    name: {
      cn: '光明记忆：无限',
    },
    addType: 'auto',
  },
  {
    id: 1671505630,
    name: {
      cn: '迷失岛外传南瓜镇',
    },
    addType: 'auto',
  },
  {
    id: 6737795387,
    name: {
      cn: '鬼谷八荒',
    },
    addType: 'auto',
  },
  {
    id: 6448477521,
    name: {
      cn: 'BiuBiuBiu - 空气枪',
      hk: 'PewPewPew - Fingergun',
    },
    addType: 'auto',
  },
  {
    id: 6472380172,
    name: {
      cn: 'Kino - Pro Video Camera',
      hk: 'Kino - Pro Video Camera',
      tw: 'Kino - Pro Video Camera',
    },
    addType: 'auto',
  },
  {
    id: 6443786927,
    name: {
      cn: '全面憨憨战争模拟器',
    },
    addType: 'auto',
  },
  {
    id: 6502489827,
    name: {
      cn: '大侠立志传',
    },
    addType: 'auto',
  },
  {
    id: 6742129099,
    name: {
      cn: '群英打三国-超休闲国风放置卡牌巅峰巨作',
    },
    addType: 'auto',
  },
  {
    id: 6443916065,
    name: {
      cn: 'WiFi万能钥匙专业版-无线热点密码安全万能wi-fi管家',
    },
    addType: 'auto',
  },
  {
    id: 6737512463,
    name: {
      cn: '怦然心动的瞬间-轻科幻真人互动恋爱影游',
    },
    addType: 'auto',
  },
  {
    id: 6462190343,
    name: {
      cn: '药王谷女修修炼手札',
      tw: '药王谷女修修炼手札',
    },
    addType: 'auto',
  },
  {
    id: 6444782083,
    name: {
      cn: '王国保卫战4',
    },
    addType: 'auto',
  },
  {
    id: 6450148077,
    name: {
      cn: '干中学！偷偷',
    },
    addType: 'auto',
  },
  {
    id: 6449766387,
    name: {
      cn: '合成大西瓜 : 专为手表设计的合成类休闲解压小游戏',
    },
    addType: 'auto',
  },
  {
    id: 6740246950,
    name: {
      cn: '花皮 - 无面具素颜社区/解压/释放/正念',
    },
    addType: 'auto',
  },
  {
    id: 6550914957,
    name: {
      cn: '打造世界-经典沙盒建造',
    },
    addType: 'auto',
  },
  {
    id: 6742537442,
    name: {
      cn: '努力活着 - 自由人生重开模拟器',
    },
    addType: 'auto',
  },
  {
    id: 6741474933,
    name: {
      cn: 'Berryfilm',
      hk: 'Berryfilm',
      tw: 'Berryfilm',
    },
    addType: 'auto',
  },
  {
    id: 6742221550,
    name: {
      cn: '魔卡棋旅',
    },
    addType: 'auto',
  },
  {
    id: 6738767315,
    name: {
      cn: '便利店开业日记',
    },
    addType: 'auto',
  },
  {
    id: 6737987084,
    name: {
      cn: '小猫补光灯Pro - 官方出品，氛围感色卡补光自拍开创者',
    },
    addType: 'auto',
  },
  {
    id: 6446607609,
    name: {
      cn: '佛系传奇:君王天下',
    },
    addType: 'auto',
  },
  {
    id: 6499512726,
    name: {
      cn: '浮岛冒险',
    },
    addType: 'auto',
  },
  {
    id: 6483210281,
    name: {
      cn: '生物原型',
    },
    addType: 'auto',
  },
  {
    id: 6738767322,
    name: {
      cn: '森丘露营地',
    },
    addType: 'auto',
  },
  {
    id: 6737434454,
    name: {
      cn: '暗夜地城 - 单机暗黑刷装备挂机游戏',
    },
    addType: 'auto',
  },
  {
    id: 6743117370,
    name: {
      cn: 'Clash X Pro : Network Analyzer',
    },
    addType: 'auto',
  },
  {
    id: 6740705851,
    name: {
      cn: '手表变身器：时空驱动器 - iWatch发声器',
    },
    addType: 'auto',
  },
  {
    id: 6743487416,
    name: {
      cn: '黄金矿工 for Watch - 经典复刻',
    },
    addType: 'auto',
  },
  {
    id: 6478843819,
    name: {
      hk: '家園、異星與獵人',
      tw: '家園、異星與獵人',
    },
    addType: 'auto',
  },
  {
    id: 6502453075,
    name: {
      hk: 'Balatro',
      mo: 'Balatro',
      tw: 'Balatro',
      us: 'Balatro',
      tr: 'Balatro',
    },
    addType: 'auto',
  },
  {
    id: 6670749900,
    name: {
      hk: '再戰江湖之傲視蒼龍',
      tw: '再戰江湖之傲視蒼龍',
    },
    addType: 'auto',
  },
  {
    id: 6711347049,
    name: {
      hk: '大俠立志傳',
      tw: '大俠立志傳',
    },
    addType: 'auto',
  },
  {
    id: 6547834967,
    name: {
      hk: '動物森友會 口袋露營廣場 集合版',
      tw: '動物森友會 口袋露營廣場 集合版',
      us: 'Animal Crossing: Pocket Camp C',
    },
    addType: 'auto',
  },
  {
    id: 6452276410,
    name: {
      hk: '遊戲開發者：全能製作人',
      tw: '遊戲開發者：全能製作人',
    },
    addType: 'auto',
  },
  {
    id: 6471479898,
    name: {
      hk: 'Cat Calendar：日曆 & 行事曆 & 時間管理',
    },
    addType: 'auto',
  },
  {
    id: 6738371720,
    name: {
      hk: '銀盤滑冰場物語',
      tw: '銀盤滑冰場物語',
    },
    addType: 'auto',
  },
  {
    id: 6456751953,
    name: {
      hk: 'ChatTan - AI Bot',
    },
    addType: 'auto',
  },
  {
    id: 6469114836,
    name: {
      hk: 'スイカゲーム-Aladdin X',
      tw: 'スイカゲーム-Aladdin X',
    },
    addType: 'auto',
  },
  {
    id: 6743648252,
    name: {
      hk: '終焉車站',
      mo: '終焉車站',
    },
    addType: 'auto',
  },
  {
    id: 6738636631,
    name: {
      hk: '烈焰同盟',
      tw: '烈焰同盟',
    },
    addType: 'auto',
  },
  {
    id: 6480082872,
    name: {
      hk: 'Dumbify',
    },
    addType: 'auto',
  },
  {
    id: 6738769251,
    name: {
      hk: 'METRO QUESTER - Hack & Slash',
    },
    addType: 'auto',
  },
  {
    id: 6621207768,
    name: {
      hk: '聖劍同盟',
      tw: '聖劍同盟',
    },
    addType: 'auto',
  },
  {
    id: 6743420230,
    name: {
      hk: '夢魘騎士團',
      tw: '夢魘騎士團',
    },
    addType: 'auto',
  },
  {
    id: 6736642117,
    name: {
      hk: '櫻花最前線 - 2025年預測',
      tw: '櫻花最前線 - 2025年預測',
    },
    addType: 'auto',
  },
  {
    id: 6498879077,
    name: {
      hk: '平安古都物語',
    },
    addType: 'auto',
  },
  {
    id: 6738636602,
    name: {
      hk: '光輝同盟',
      tw: '光輝同盟',
    },
    addType: 'auto',
  },
  {
    id: 6504323939,
    name: {
      hk: '勇者鬥惡龍X　覺醒的五種族　OFFLINE',
    },
    addType: 'auto',
  },
  {
    id: 6505046490,
    name: {
      hk: '摔角擂臺物語',
    },
    addType: 'auto',
  },
  {
    id: 6443723657,
    name: {
      hk: 'filmhwa (필름화) - 화민 필터',
      tw: 'filmhwa (필름화) - 화민 필터',
      us: "filmhwa - @hwa.min's filter",
    },
    addType: 'auto',
  },
  {
    id: 6743342476,
    name: {
      hk: '中药方剂速查 -【专业版】中医药查询宝典',
    },
    addType: 'auto',
  },
  {
    id: 6742773178,
    name: {
      hk: '经络穴位养生 - 中医穴位自我按摩治愈',
    },
    addType: 'auto',
  },
  {
    id: 6476663854,
    name: {
      hk: 'Solo Mini Golf',
      tw: 'Solo Mini Golf',
    },
    addType: 'auto',
  },
  {
    id: 6670469064,
    name: {
      hk: '8號出口',
      tw: '8號出口',
    },
    addType: 'auto',
  },
  {
    id: 6447508479,
    name: {
      hk: '暖雪',
    },
    addType: 'auto',
  },
  {
    id: 6470958985,
    name: {
      hk: '完美的一天 - 無限流劇情向解謎游戲',
    },
    addType: 'auto',
  },
  {
    id: 6445875391,
    name: {
      hk: '叶分贝-噪音分贝检测',
    },
    addType: 'auto',
  },
  {
    id: 6443923265,
    name: {
      mo: 'GSE SMART IPTV PRO',
      tr: 'GSE SMART IPTV PRO',
    },
    addType: 'auto',
  },
  {
    id: 6739839815,
    name: {
      tw: 'RogueVana',
    },
    addType: 'auto',
  },
  {
    id: 6505052301,
    name: {
      tw: '碧海蒼雲錄',
    },
    addType: 'auto',
  },
  {
    id: 6642649684,
    name: {
      tw: '韭菜投資公司2',
    },
    addType: 'auto',
  },
  {
    id: 6738784092,
    name: {
      tw: 'A Little to the Left: Drawers',
    },
    addType: 'auto',
  },
  {
    id: 6450724928,
    name: {
      tw: '租戶賭財運',
    },
    addType: 'auto',
  },
  {
    id: 6740814979,
    name: {
      tw: 'Follow the meaning',
    },
    addType: 'auto',
  },
  {
    id: 6456886656,
    name: {
      tw: 'Layla',
    },
    addType: 'auto',
  },
  {
    id: 6498623389,
    name: {
      tw: 'Folium',
      us: 'Folium',
    },
    addType: 'auto',
  },
  {
    id: 6738342400,
    name: {
      tw: 'Tampermonkey',
    },
    addType: 'auto',
  },
  {
    id: 6744355637,
    name: {
      tw: 'Schedule I Drug Dealer',
      us: 'Schedule I Drug Dealer',
      tr: 'Schedule I Drug Dealer',
    },
    addType: 'auto',
  },
  {
    id: 6476064417,
    name: {
      tw: 'Knight & Dragon III',
    },
    addType: 'auto',
  },
  {
    id: 6463710522,
    name: {
      tw: '勇者的傳奇',
    },
    addType: 'auto',
  },
  {
    id: 6468572535,
    name: {
      tw: '洞窟冒險團物語',
    },
    addType: 'auto',
  },
  {
    id: 6471947612,
    name: {
      tw: '召喚騎士團',
    },
    addType: 'auto',
  },
  {
    id: 6480501528,
    name: {
      tw: 'Cat Todo - 備忘錄 & 待辦事項 & 記事本',
    },
    addType: 'auto',
  },
  {
    id: 6714479204,
    name: {
      us: 'Lowriders Comeback: Boulevard',
    },
    addType: 'auto',
  },
  {
    id: 6740349666,
    name: {
      us: "Backyard Baseball '97",
    },
    addType: 'auto',
  },
  {
    id: 6473097811,
    name: {
      us: 'Doodle Baseball Game',
    },
    addType: 'auto',
  },
  {
    id: 6463616555,
    name: {
      us: 'Ticket to Ride® The Board Game',
    },
    addType: 'auto',
  },
  {
    id: 6477835115,
    name: {
      us: "Papa's Paleteria To Go!",
    },
    addType: 'auto',
  },
  {
    id: 6449003064,
    name: {
      us: 'Goblin Tools',
    },
    addType: 'auto',
  },
  {
    id: 6670199903,
    name: {
      tr: 'StreetPro Racing',
    },
    addType: 'auto',
  },
  {
    id: 6505058041,
    name: {
      tr: 'QUAKELINE',
    },
    addType: 'auto',
  },
  {
    id: 6744445187,
    name: {
      tr: 'The Platform - Survive',
    },
    addType: 'auto',
  },
  {
    id: 6469419567,
    name: {
      tr: 'Overwinter Survival',
    },
    addType: 'auto',
  },
  {
    id: 6444400410,
    name: {
      tr: 'Farming Simulator 23 Mobile',
    },
    addType: 'auto',
  },
  {
    id: 6474616013,
    name: {
      tr: 'Trump Is Back',
    },
    addType: 'auto',
  },
  {
    id: 6471594918,
    name: {
      tr: 'Just a Simple Image Converter',
    },
    addType: 'auto',
  },
  {
    id: 6686394372,
    name: {
      tr: 'Age of History 3',
    },
    addType: 'auto',
  },
  {
    id: 6740471827,
    name: {
      tr: 'Classic Maze Game for Watch',
    },
    addType: 'auto',
  },
  {
    id: 1481853033,
    name: 'Strongbox Pro',
  },
  {
    id: 1581140954,
    name: [
      'Noir – Dark Mode for Safari',
      { cn: 'Noir - 为Safari添加深色模式' },
    ],
  },
  {
    id: 1592917505,
    name: [
      'Noir – Dark Mode for Safari',
      { cn: 'Noir – 为Safari添加深色模式' },
    ],
  },
  {
    id: 1591620171,
    name: ['Stay for Safari', { cn: 'Stay for Safari - 浏览器伴侣' }],
  },
  {
    id: 1438243180,
    name: `Dark Reader for Safari`,
  },
  {
    id: 625206080,
    name: `Tomb Raider`,
  },
  {
    id: 1108032375,
    name: `Rise of the Tomb Raider™`,
  },
  {
    id: 1439569401,
    name: `Shadow of the Tomb Raider`,
  },
  {
    id: 6459738231,
    name: `Lies of P`,
  },
  {
    id: 1441532941,
    name: ['神界：原罪2', { us: 'Divinity: Original Sin 2' }],
  },
  {
    id: 6449748961,
    name: `DEATH STRANDING DIRECTOR'S CUT`,
  },
  {
    id: 6499559693,
    name: 'iStat Menus 7',
  },
  {
    id: 6475002485,
    name: 'Reeder.',
  },
  {
    id: 1198176727,
    name: 'Controller for HomeKit',
  },
  {
    id: 904280696,
    name: 'Things 3',
  },
  {
    id: 1055511498,
    name: 'Day One',
  },
  {
    id: 1208145167,
    name: 'Picsew',
  },
  {
    id: 1444636541,
    name: 'Photomator',
  },
  {
    id: 1444383602,
    name: 'Goodnotes 6',
  },
  {
    id: 1473785373,
    name: ['钱迹记账-无广告随手记账本', { us: '钱迹-存钱记账小能手' }],
  },
  {
    id: 1461652639,
    name: ['TCP UDP Ping Socket 网络 调试 工具', { us: 'TCP UDP Debugger' }],
  },
  {
    id: 6499198824,
    name: ['蜂软扫描 - 全能扫描仪', { us: 'ScanGo:Scanner App free of ads' }],
  },
  {
    id: 1538124245,
    name: ['哪里哪里', { us: 'where I put it' }],
  },
  {
    id: 6446469093,
    name: [
      '口袋时钟 - StandBy待机Widget桌面翻页创意时钟',
      { us: 'Clock Pocket:standby widget' },
    ],
  },
  {
    id: 1610668825,
    name: [
      'FyTube - 没有广告的 YouTube',
      { us: 'FyTube - YouTube Without Ads' },
    ],
  },
  {
    id: 1175912897,
    name: ['EverMemo印象便签', { us: 'EverMemo - Fastest Note' }],
  },
  {
    id: 6504433140,
    name: 'LaxtTime',
  },
  {
    id: 920133658,
    name: ['解剖和生理学', { us: 'Anatomy & Physiology' }],
  },
  {
    id: 6463851696,
    name: ['功德++ : 锁屏，Standby，桌面小组件都可以敲的木鱼', { us: 'Zen++' }],
  },
  {
    id: 1358237203,
    name: '时间胶囊-寄往未来的信',
  },
  {
    id: 1316883372,
    name: '音乐世界赛特斯2',
  },
  {
    id: 956086985,
    name: ['美元折纸', { us: 'Dollar Bill Origami' }],
  },
  {
    id: 1436481293,
    name: ['迷失岛3宇宙的尘埃', { us: 'ISOLAND 3 Dust of the Universe' }],
  },
  {
    id: 1422480068,
    name: [
      'Notes Writer Pro: 笔记和 PDF 标注',
      { us: 'Notes Writer Pro 2024' },
    ],
  },
  {
    id: 6443915320,
    name: '发条日签-好心情制造机',
  },
  {
    id: 884153085,
    name: 'Remote, Mouse & Keyboard Pro',
  },
  {
    id: 1065802380,
    name: 'Stream Music Player',
  },
  {
    id: 533055404,
    name: ['夜星 (Night Stars)', { us: 'Night Stars' }],
    allowNotification: false,
  },
  {
    id: 1493379610,
    name: [
      '时光进度 - 进度管理&待办计划',
      { us: 'bProgress - Manage Daily Tasks' },
    ],
  },
  {
    id: 1255627901,
    name: [
      '方便面 - 朋友圈图文排版好帮手',
      { us: 'Instant Noodles: Original' },
    ],
  },
  {
    id: 1449020025,
    name: '不玩手机-自律习惯养成记',
  },
  {
    id: 1576004936,
    name: ['化学 - 元素周期表 2024', { us: 'Chemistry Periodic Table 2024' }],
  },
  {
    id: 827740598,
    name: ['小牛计算器(高级版)', { us: 'Xmart Calculator Pro' }],
  },
  {
    id: 355460798,
    name: 'Inspire Pro',
  },
  {
    id: 1595313870,
    name: [
      '瓦尔登 - 日程管理，一个就够',
      { us: 'Walden - Calendar/ToDo/Notes' },
    ],
  },
  {
    id: 6449383791,
    name: [
      'GIF录制助手-录屏、裁剪、优化、生成一站式便捷体验',
      { us: 'GIF Recorder-ImproveEfficiency' },
    ],
  },
  {
    id: 1587301632,
    name: ['全能记(录音,备忘,流水)', { us: 'All In One Memo' }],
  },
  {
    id: 1464666446,
    name: ['我的足迹: GPS记录仪', { us: 'MyTracks: GPS Recorder' }],
  },
  {
    id: 1665759338,
    name: '坐在罐子里的人',
  },
  {
    id: 953426154,
    name: 'Be Focused Pro - Focus Timer',
  },
  {
    id: 1238778050,
    name: '纪念碑谷2',
  },
  {
    id: 1020541183,
    name: [
      '电影精灵 - 专业视频编辑和电影制作',
      { us: 'MovieSpirit - Movie Maker Pro' },
    ],
  },
  {
    id: 576718804,
    name: ['aTimeLogger - 时间记录工具', { us: 'aTimeLogger Time Tracker' }],
  },
  {
    id: 670400597,
    name: ['梁的挠度', { us: 'Deflection' }],
  },
  {
    id: 1400652313,
    name: '冰钓大师',
  },
  {
    id: 1551596643,
    name: '模拟地铁',
  },
  {
    id: 1437479513,
    name: '逃脱者：困境突围',
  },
  {
    id: 1314212521,
    name: [
      'PPHub For GitHub - 开发者必备',
      { us: 'PPHub For GitHub - Developer' },
    ],
  },
  {
    id: 1564383045,
    name: ['算法导论.助手', { us: 'CLRS.Helper' }],
  },
  {
    id: 1380582804,
    name: ['手机帝国', { us: 'Mobile Empire' }],
  },
  {
    id: 6466390901,
    name: '旋转音律 Rotaeno',
  },
  {
    id: 1596406400,
    name: '黄鸭证件照-最美求职考试证照制作神器',
  },
  {
    id: 598581396,
    name: [
      'Kingdom Rush Frontiers 塔防史诗冒险',
      { us: 'Kingdom Rush Frontiers TD' },
    ],
  },
  {
    id: 1157863540,
    name: '泰拉瑞亚',
  },
  {
    id: 1630541373,
    name: [
      '隐私相册-私密记忆，安心记录，安全保障隐藏秘密PRAM',
      { us: 'Private Album - PRAM' },
    ],
  },
  {
    id: 1512838461,
    name: ['DayCircle - 倒数', { us: 'DayCircle - Day counter' }],
  },
  {
    id: 1400032769,
    name: 'Card.Note - 多彩卡片笔记',
  },
  {
    id: 460661291,
    name: ['安全笔记+ Pro', { us: 'Safety Note+ Pro' }],
    allowNotification: false,
  },
  {
    id: 505904421,
    name: 'AirDisk Pro',
    allowNotification: false,
  },
  {
    id: 1527841661,
    name: ['沙盒星球', { us: 'Sandbox Planet' }],
    allowNotification: false,
  },
  {
    id: 1159266744,
    name: '双子 Gemini',
  },
  {
    id: 1453808408,
    name: ['恶果之地', { us: 'Juicy Realm' }],
  },
  {
    id: 1458460469,
    name: '人类跌落梦境',
  },
  {
    id: 1481100296,
    name: 'BreatheIn: Calm Breathing',
  },
  {
    id: 431033044,
    name: [
      'Phone Drive - 云储存管理和文件共享',
      { us: 'Phone Drive: File Storage Sync' },
    ],
    allowNotification: false,
  },
  {
    id: 1309638846,
    name: [
      'Goodak 复古胶片相机 - 拍立得旅行摄影，拍照水印滤镜',
      { us: 'Vintage Camera - Goodak' },
    ],
  },
  {
    id: 1618180398,
    name: [
      '照片同步-导出备份相册照片视频',
      { us: 'PhotoSync-Backup your photos' },
    ],
  },
  {
    id: 456637671,
    name: ['安全监控照片+视频Pro', { us: 'Safety Photo+Video Pro' }],
    allowNotification: false,
  },
  {
    id: 1453318714,
    name: ['Vostok — 创建美丽快拍页面', { us: 'Vostok — Story Make' }],
  },
  {
    id: 931188326,
    name: ['DayCost', { us: 'Wafari - Watch Browser' }],
  },
  {
    id: 6449930220,
    name: ['手表浏览器 Wafari', { us: 'Wafari - Watch Browser' }],
  },
  {
    id: 818394449,
    name: ['时间轴-全球历史', { us: 'Timeline - World history' }],
    allowNotification: false,
  },
  { id: 1391571907, name: ['Fine修图', { us: 'Fine - Photo Edito' }] },
  { id: 6499125531, name: '完蛋！我被美女包围了！' },
  { id: 1485101937, name: 'Juice Watch', allowNotification: false },
  {
    id: 703265535,
    name: ['FocusDots · Focus What Matters', { cn: 'FocusDots · 专注于当下' }],
  },
  { id: 6479307181, name: ['Ghostly Detector', { cn: '灵体侦测器' }] },
  {
    id: 488674899,
    name: [
      'RAIN RADAR °- sky weather NOAA',
      { cn: '雨雷達-實時天氣圖。 亞洲和中國。°' },
    ],
    allowNotification: false,
  },
  {
    id: 1636719674,
    name: [
      '锁屏启动 - 万能桌面小组件&灵动岛一键快捷指令手机捷径布局',
      { us: 'Lock Launcher - Screen Widgets' },
    ],
  },
  { id: 1543163106, name: '末剑二' },
  { id: 6443812780, name: '我的水世界求生' },
  { id: 1344655035, name: '蜡烛人' },
  { id: 6446614518, name: '画中世界' },
  { id: 1159700098, name: ['去月球-To the Moon', { us: 'To the Moon' }] },
  { id: 1271620263, name: ['艾希 - ICEY', { us: 'ICEY' }] },
  { id: 1361473095, name: ['Muse Dash 喵斯快跑', { us: 'Muse Dash' }] },
  { id: 6476010032, name: '拦截猫-垃圾短信电话拦截' },
  { id: 510249014, name: ['水平仪 HD', { us: 'Level HD.' }] },
  { id: 904237743, name: 'Things 3' },
  {
    id: 1622341132,
    name: [
      'iSleeper - 梦话鼾声记录与睡眠监测',
      { us: 'iSleeper: Sleep Tracker' },
    ],
  },
  { id: 900833042, name: 'Fliqlo' },
  { id: 1467880680, name: 'LEDot' },
  { id: 1455055663, name: '皮皮虾专业版' },
  {
    id: 1595901138,
    name: ['NES 模拟器', { us: 'Handheld Game - NES Emulator' }],
  },
  { id: 1163515895, name: '鲨鱼记账本Pro-管家理财必备工具' },
  { id: 754105884, name: ['NightCap Camera', { cn: 'NightCap相机' }] },
  { id: 1642364007, name: ['海拔指南针', { us: 'Altitude Compass' }] },
  { id: 1522215205, name: '拒之-骚扰电话批量拦截助手' },
  { id: 1484181693, name: '截图超人 - 微商专用的营销助手截图神器' },
  {
    id: 1117998129,
    name: ['Human Anatomy Atlas 2025', { cn: '2025人体解剖学图谱' }],
  },
  { id: 6444824570, name: 'ClashX - 服务监控面板' },
  { id: 469338840, name: '飞常准Pro-全球航班查询机票酒店预订' },
  { id: 1197275827, name: '金十数据(专业版)-为交易而生' },
  {
    id: 578665578,
    name: ['Threema. The Secure Messenger', { cn: 'Threema。安全的通讯工具' }],
  },
  { id: 1547418803, name: 'Incredibox - 好玩的音乐盒' },
  { id: 1210251567, name: ['SleepTown', { cn: 'SleepTown 睡眠小镇' }] },
  { id: 1080235640, name: 'CNU - 顶尖视觉精选' },
  {
    id: 1658579911,
    name: ['小特钥匙 - 手表隐私蓝牙钥匙', { us: 'XIAOTE Watch key' }],
  },
  { id: 1152396902, name: '凤凰新闻(专业版)-头条新闻阅读平台' },
  { id: 1633366918, name: 'Instant Lines' },
  {
    id: 6480159520,
    name: [
      '转录大师 - 录音转文字、实时离线转录',
      { us: 'Whisper Pen - Speech to Text' },
    ],
  },
  { id: 966489322, name: '生辰 — 桌面时间小组件' },
  {
    id: 898876435,
    name: [
      'Planit巧摄专业版：风光摄影计划神器',
      { us: 'Planit Pro: Photo Planner' },
    ],
  },
  {
    id: 1062745479,
    name: [
      'HeartWatch: Heart Rate Tracker',
      { cn: 'HeartWatch: 心脏和活动监测器' },
    ],
  },
  { id: 6476963352, name: '万能生成器' },
  { id: 1459076631, name: '隐形守护者' },
  { id: 1660014964, name: '飞越13号房' },
  { id: 730712409, name: ['ProCam - Pro Camera', { cn: 'ProCam - 专业相机' }] },
  { id: 6451239549, name: '全网短剧大全-热门短剧抢先看' },
  { id: 1633865171, name: '獬豸 · 民法典' },
  { id: 1492395549, name: '爱美剧-人人美剧天堂社区' },
  { id: 1661419573, name: 'atvTools' },
  { id: 6479683928, name: 'AMood' },
  { id: 6443798663, name: ['敲木鱼 - 打节拍敲音效解压神器', { us: 'MuYu' }] },
  { id: 373454750, name: '随手记Pro' },
  { id: 916366645, name: 'Procreate Pocket' },
  {
    id: 1164801111,
    name: [
      'AutoSleep Track Sleep on Watch',
      { cn: 'AutoSleep - 通过手表自动追踪睡眠' },
    ],
  },
  { id: 1625289361, name: ['空气投篮', { us: 'AirShot - AuditoryAR' }] },
  {
    id: 1261944766,
    name: ['Alook浏览器 - 8倍速', { us: 'Alook Browser - 8x Speed' }],
  },
  {
    id: 866450515,
    name: [
      'Forest: Focus for Productivity',
      { cn: 'Forest 专注森林 - 番茄钟学习计时器' },
    ],
  },
  { id: 1600873673, name: '炭炭背单词｜四六级考研等英语单词学习' },
  {
    id: 388624839,
    name: [
      '扫描全能王 - 官方出品1元畅用版，扫描PDF文件，文字识别',
      { us: 'CamScanner + | OCR Scanner' },
    ],
  },
  { id: 768160271, name: '航旅纵横PRO' },
  {
    id: 1439723850,
    name: [
      '时间规划局 - 倒计时与提醒事项',
      { us: 'Countdown! Reminders and Timer' },
    ],
  },
  { id: 6447023668, name: '爱韩剧 - 韩剧TV大全' },
  { id: 6468843723, name: 'GTA III – Definitive' },
  { id: 6468845173, name: 'GTA: Vice City – Definitive' },
  { id: 6468845068, name: 'GTA: San Andreas – Definitive' },
  { id: 1631331207, name: 'Hitman: Blood Money — Reprisal' },
  { id: 1598130789, name: 'Company of Heroes Collection' },
  { id: 1085114709, name: 'Parallels Desktop' },
  {
    id: 6450262949,
    name: [
      'Longshot - 截图 & OCR文字识别',
      { us: 'Longshot - Screenshot & OCR' },
    ],
  },
  { id: 6451498949, name: 'Stray' },
  { id: 1630403500, name: 'APTV' },
  {
    id: 1552536109,
    name: ['PasteNow - 剪贴板工具', { us: 'PasteNow - Instant Clipboard' }],
  },
  { id: 1558391784, name: 'Fileball' },
  {
    id: 1548711022,
    name: [
      'Barbee - 清理您的菜单栏图标',
      { us: 'Barbee - Hide Menu Bar Items' },
    ],
  },
  {
    id: 1575588022,
    name: [
      'MenubarX - 强大的菜单栏浏览器',
      { us: 'MenubarX - Floating Browser' },
    ],
  },
  { id: 1630034110, name: 'Bob - 翻译和 OCR 工具' },
  {
    id: 1009747025,
    name: ['zFuse - Video Player', { cn: 'zFuse - 影音播放器' }],
  },
  {
    id: 1054505347,
    name: ['zFuse - Media Player', { cn: 'zFuse - 视频播放器' }],
  },
  {
    id: 1659622164,
    name: [
      'VidHub - 高清影片视频播放器，快速播放云盘网盘',
      { us: 'VidHub -Video Library & Player' },
    ],
  },
  {
    id: 1136220934,
    name: ['Infuse • Video Player', { cn: 'Infuse - 智能视频播放器' }],
  },
  { id: 1476649036, name: ['帕斯卡契约', { us: `Pascal's Wager` }] },
  { id: 1635315427, name: '暖雪' },
  { id: 1523446532, name: '重生细胞' },
  { id: 1389752090, name: 'Dead Cells' },
  { id: 1640627334, name: 'Resident Evil Village' }, // Mac
  { id: 6450980545, name: 'Resident Evil Village' }, // iPhone/Ipad
  { id: 6462360082, name: 'Resident Evil 4' },
  { id: 1620883955, name: 'Little Nightmares' },
  { id: 1606703078, name: ['枪火重生', { us: 'Gunfire Reborn' }] },
  { id: 1373575045, name: 'The Gardens Between' }, // Mac
  { id: 1371965583, name: 'The Gardens Between' }, // iPhone/Ipad
  { id: 6450877530, name: '花园之间' },
  { id: 1601446687, name: 'Streets of Rage 4' },
  { id: 1587860402, name: ['笼中窥梦', { us: 'Moncage' }] },
  { id: 1584313012, name: '笼中窥梦' },
  { id: 1465779286, name: 'GRIS' }, // Mac
  { id: 1445379072, name: 'GRIS' }, // iPhone/Ipad
  { id: 1521190840, name: '格莉斯的旅程' },
  { id: 728293409, name: 'Monument Valley' },
  { id: 1582832845, name: '纪念碑谷' },
  { id: 1644917705, name: ['无处遁形：全网公敌', { us: `Cyber Manhunt` }] },
  { id: 1369179088, name: `Grimvalor` },
  { id: 1669723530, name: `原界之罪` },
  { id: 481629890, name: `Playdead's LIMBO` }, // Mac
  { id: 656951157, name: `Playdead's LIMBO` }, // iPhone/Ipad
  { id: 886561127, name: `Playdead's INSIDE` }, // Mac
  { id: 1201642309, name: `Playdead's INSIDE` }, // iPhone/Ipad/Apple TV
  { id: 1529448980, name: 'Reeder 5' }, // Mac
  { id: 1529445840, name: 'Reeder 5' }, // iPhone/Ipad
  { id: 1596063349, name: 'Stash' },
  { id: 6444029612, name: 'Loon Lite' },
  { id: 1373567447, name: 'Loon' },
  { id: 1442620678, name: 'Surge 5' },
  { id: 1443988620, name: 'Quantumult X' },
  { id: 932747118, name: 'Shadowrocket' },
  { id: 1642682818, name: '熊猫吃短信2 - 垃圾短信拦截' },
  { id: 1319191852, name: '熊猫吃短信 - 垃圾短信过滤' },
  { id: 1067198688, name: '彩云天气pro' },
]
