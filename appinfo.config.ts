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
    id: 1134805859,
    name: {
      cn: '迷失岛',
    },
    addType: 'auto',
  },
  {
    id: 1099088440,
    name: {
      cn: '火柴人联盟2',
    },
    addType: 'auto',
  },
  {
    id: 866450515,
    name: {
      cn: 'Forest 专注森林 - 番茄钟学习计时器',
    },
    addType: 'auto',
  },
  {
    id: 1406710800,
    name: {
      us: 'Stardew Valley',
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
    id: 388624839,
    name: {
      cn: '扫描全能王 - 官方出品1元畅用版，扫描PDF文件，文字识别',
    },
    addType: 'auto',
  },
  {
    id: 479516143,
    name: {
      us: 'Minecraft: Dream it, Build it!',
    },
    addType: 'auto',
  },
  {
    id: 525818839,
    name: {
      us: 'Plague Inc.',
    },
    addType: 'auto',
  },
  {
    id: 623592465,
    name: {
      us: 'Heads Up!',
    },
    addType: 'auto',
  },
  {
    id: 625334537,
    name: {
      us: 'Geometry Dash',
    },
    addType: 'auto',
  },
  {
    id: 768160271,
    name: {
      cn: '航旅纵横PRO-官方机票、值机火车票接送机免税酒店',
    },
    addType: 'auto',
  },
  {
    id: 932747118,
    name: {
      us: 'Shadowrocket',
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
    id: 1093131935,
    name: {
      us: 'Incredibox',
    },
    addType: 'auto',
  },
  {
    id: 1118115766,
    name: {
      us: 'Bloons TD 6',
    },
    addType: 'auto',
  },
  {
    id: 1157863540,
    name: {
      cn: '泰拉瑞亚',
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
    id: 1625289361,
    name: {
      cn: '空气投篮',
    },
    addType: 'auto',
  },
  {
    id: 6448477521,
    name: {
      cn: 'BiuBiuBiu - 空气枪',
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
    id: 6737795387,
    name: {
      cn: '鬼谷八荒',
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
    id: 6502453075,
    name: {
      us: 'Balatro',
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
    id: 1453504509,
    name: 'Dynamic Wallpaper Engine',
    addType: 'auto',
  },
  {
    id: 470158793,
    name: 'Keka',
    addType: 'auto',
  },
  {
    id: 1449438542,
    name: 'BestZip Pro - Unzip RAR&Zip&7z',
    addType: 'auto',
  },
  {
    id: 6737150304,
    name: 'iBar Pro-Menubar control tool',
    addType: 'auto',
  },
  {
    id: 647505820,
    name: 'RAR Extractor - Unarchiver Pro',
    addType: 'auto',
  },
  {
    id: 6740171321,
    name: 'FastZipPro- RAR 7Z ZIP UnZip',
    addType: 'auto',
  },
  {
    id: 1551531632,
    name: 'AutoSwitchInput Pro',
    addType: 'auto',
  },
  {
    id: 1459028801,
    name: '爱五笔 - 五笔编码拆字大全',
    addType: 'auto',
  },
  {
    id: 6474505156,
    name: '照片处理工具 - 公务员考试报名确认照片审核',
    addType: 'auto',
  },
  {
    id: 510620098,
    name: 'MediaInfo',
    addType: 'auto',
  },
  {
    id: 411643860,
    name: 'DaisyDisk',
    addType: 'auto',
  },
  {
    id: 1533946416,
    name: 'MyZip Pro-7z zip rar多线程极速压缩工具',
    addType: 'auto',
  },
  {
    id: 457622435,
    name: 'Yoink - Better Drag and Drop',
    addType: 'auto',
  },
  {
    id: 1555844307,
    name: 'MouseBoost Pro',
    addType: 'auto',
  },
  {
    id: 1425997715,
    name: 'RAR Extractor Pro - Unzip',
    addType: 'auto',
  },
  {
    id: 6474506915,
    name: 'Sticker - Desktop Notepad',
    addType: 'auto',
  },
  {
    id: 1524202457,
    name: 'TimeCapsule2',
    addType: 'auto',
  },
  {
    id: 1616792360,
    name: 'SQLiteExplorer',
    addType: 'auto',
  },
  {
    id: 1622138166,
    name: 'Change Video Speed for Safari',
    addType: 'auto',
  },
  {
    id: 1478540997,
    name: 'zClock - Clock & Countdown.',
    addType: 'auto',
  },
  {
    id: 1450345160,
    name: 'Color Folder Master',
    addType: 'auto',
  },
  {
    id: 1612054963,
    name: 'AppUninstaller-Uninstall Apps',
    addType: 'auto',
  },
  {
    id: 1298871299,
    name: '电子印章制作大师企业版',
    addType: 'auto',
  },
  {
    id: 1644030069,
    name: 'Folder by Color Pro - Folder',
    addType: 'auto',
  },
  {
    id: 668609870,
    name: 'Rar Sharp',
    addType: 'auto',
  },
  {
    id: 1381028448,
    name: '百读不厌 - 听书、看书神器',
    addType: 'auto',
  },
  {
    id: 1500167033,
    name: 'AClock - Digital Flip Clock',
    addType: 'auto',
  },
  {
    id: 1387780159,
    name: 'Network & Battery',
    addType: 'auto',
  },
  {
    id: 6502931430,
    name: 'DocFlex - Document conversion',
    addType: 'auto',
  },
  {
    id: 6445882848,
    name: 'Boom3D-5.1 Audio for Netflix',
    addType: 'auto',
  },
  {
    id: 1265704574,
    name: 'Bandizip: Archiver',
    addType: 'auto',
  },
  {
    id: 1214639260,
    name: 'SmallImage-Smart Compression',
    addType: 'auto',
  },
  {
    id: 1385628859,
    name: 'Highlighter for Safari',
    addType: 'auto',
  },
  {
    id: 1521805728,
    name: 'iVault - secure your files',
    addType: 'auto',
  },
  {
    id: 697942581,
    name: 'Disk Graph',
    addType: 'auto',
  },
  {
    id: 1435568266,
    name: 'HiSerialPort',
    addType: 'auto',
  },
  {
    id: 420874236,
    name: 'PDFOutliner',
    addType: 'auto',
  },
  {
    id: 6472044044,
    name: 'Toolbox for Safari',
    addType: 'auto',
  },
  {
    id: 1632395174,
    name: 'CleanMyMac X Multi-License',
    addType: 'auto',
  },
  {
    id: 1126745697,
    name: 'System utility. monitor status',
    addType: 'auto',
  },
  {
    id: 1214761683,
    name: 'iWall-Dynamic Desktop Engine',
    addType: 'auto',
  },
  {
    id: 453164367,
    name: 'SystemPal',
    addType: 'auto',
  },
  {
    id: 431224317,
    name: 'Disk Drill Media Recovery',
    addType: 'auto',
  },
  {
    id: 1415704056,
    name: 'The App Locker -Best Lock Apps',
    addType: 'auto',
  },
  {
    id: 1162194131,
    name: 'Easy New File',
    addType: 'auto',
  },
  {
    id: 6472813601,
    name: 'NinjaMouse - Your mouse master',
    addType: 'auto',
  },
  {
    id: 1445268016,
    name: 'Duplicate Cleaner',
    addType: 'auto',
  },
  {
    id: 1494552451,
    name: '小说大全',
    addType: 'auto',
  },
  {
    id: 1273980573,
    name: 'Best Data Recovery',
    addType: 'auto',
  },
  {
    id: 1619982017,
    name: '五笔拆字',
    addType: 'auto',
  },
  {
    id: 1153435308,
    name: 'inddPreview',
    addType: 'auto',
  },
  {
    id: 1475051844,
    name: 'Filmage Converter Pro-MKV,AVI',
    addType: 'auto',
  },
  {
    id: 1441394270,
    name: 'Oka Unarchiver Pro - Unzip RAR',
    addType: 'auto',
  },
  {
    id: 6711333801,
    name: 'Live Crypto Prices, Charts',
    addType: 'auto',
  },
  {
    id: 658182498,
    name: 'Address Book to CSV',
    addType: 'auto',
  },
  {
    id: 6465744342,
    name: 'iBoot - StartupDisk shortcut',
    addType: 'auto',
  },
  {
    id: 1526912781,
    name: 'Rainbow Folder - Icon changer',
    addType: 'auto',
  },
  {
    id: 668331139,
    name: 'Backup Scheduler: Time Editor',
    addType: 'auto',
  },
  {
    id: 1261004863,
    name: 'Data Recovery EX',
    addType: 'auto',
  },
  {
    id: 877615577,
    name: 'Serial',
    addType: 'auto',
  },
  {
    id: 6739523960,
    name: 'Allow Right Click for Safari',
    addType: 'auto',
  },
  {
    id: 6444238780,
    name: 'Countdown Desktop',
    addType: 'auto',
  },
  {
    id: 6739428883,
    name: 'TTSLite',
    addType: 'auto',
  },
  {
    id: 402569179,
    name: 'Find Any File (FAF)',
    addType: 'auto',
  },
  {
    id: 6745083093,
    name: 'Coolmuster HEIC Converter',
    addType: 'auto',
  },
  {
    id: 1602821771,
    name: 'Renamer',
    addType: 'auto',
  },
  {
    id: 471561604,
    name: 'Mr. Zipper - 7Z RAR 7ZIP',
    addType: 'auto',
  },
  {
    id: 1025822138,
    name: 'iStatistica',
    addType: 'auto',
  },
  {
    id: 524576324,
    name: 'Smart Zipper Pro: Rar, 7z, Zip',
    addType: 'auto',
  },
  {
    id: 919005729,
    name: 'Burn',
    addType: 'auto',
  },
  {
    id: 823528286,
    name: 'Folx GO+',
    addType: 'auto',
  },
  {
    id: 6444789815,
    name: '记事本++',
    addType: 'auto',
  },
  {
    id: 884018914,
    name: 'Zoоm',
    addType: 'auto',
  },
  {
    id: 406178496,
    name: 'KPlayer',
    addType: 'auto',
  },
  {
    id: 1589912595,
    name: 'JY Subtitle SRT Export Lite',
    addType: 'auto',
  },
  {
    id: 1181029289,
    name: 'Flip Clock Pro - time widgets',
    addType: 'auto',
  },
  {
    id: 815333099,
    name: 'Foldery',
    addType: 'auto',
  },
  {
    id: 779114299,
    name: 'CAD Viewer 3D',
    addType: 'auto',
  },
  {
    id: 736168905,
    name: 'DBFView',
    addType: 'auto',
  },
  {
    id: 1357413437,
    name: 'LightApp-轻应用浏览器',
    addType: 'auto',
  },
  {
    id: 1540733755,
    name: 'Find Device - bluetooth finder',
    addType: 'auto',
  },
  {
    id: 1328847392,
    name: 'Process Monitor',
    addType: 'auto',
  },
  {
    id: 1593045116,
    name: 'Focus & ADHD Reading - Glide',
    addType: 'auto',
  },
  {
    id: 1463966933,
    name: 'iStats X: CPU & Memory',
    addType: 'auto',
  },
  {
    id: 1447778660,
    name: 'iStatistica Pro',
    addType: 'auto',
  },
  {
    id: 1568840488,
    name: 'AutoClicker - Assist click',
    addType: 'auto',
  },
  {
    id: 1538700349,
    name: 'The Extractor Master',
    addType: 'auto',
  },
  {
    id: 419330170,
    name: 'Moom Classic',
    addType: 'auto',
  },
  {
    id: 486626129,
    name: 'Folder Tidy',
    addType: 'auto',
  },
  {
    id: 1389745743,
    name: 'Everything Downloader',
    addType: 'auto',
  },
  {
    id: 1595306197,
    name: 'Macaque',
    addType: 'auto',
  },
  {
    id: 445512770,
    name: 'Disk Diet',
    addType: 'auto',
  },
  {
    id: 456609775,
    name: 'Window Tidy',
    addType: 'auto',
  },
  {
    id: 6450939701,
    name: 'Chat One - AI Chat Box',
    addType: 'auto',
  },
  {
    id: 1565629813,
    name: 'FastZip - RAR 7Z ZIP UnZip',
    addType: 'auto',
  },
  {
    id: 1181028777,
    name: 'Flip Clock - digital widgets',
    addType: 'auto',
  },
  {
    id: 1488071784,
    name: 'Wallpapers X - 4K Wallpaper',
    addType: 'auto',
  },
  {
    id: 1552826194,
    name: 'iWallpaper - Live Wallpaper',
    addType: 'auto',
  },
  {
    id: 6511220682,
    name: 'CleanMyApp - Uninstaller',
    addType: 'auto',
  },
  {
    id: 1497428978,
    name: 'iRightMouse',
    addType: 'auto',
  },
  {
    id: 1541571038,
    name: 'NTFS Read&Write -iBoysoft NTFS',
    addType: 'auto',
  },
  {
    id: 1518518216,
    name: 'Paper - Live Wallpapers',
    addType: 'auto',
  },
  {
    id: 6443843900,
    name: 'iBar-Menubar icon control tool',
    addType: 'auto',
  },
  {
    id: 1442745175,
    name: '快帆加速器-海外回国音乐视频加速器',
    addType: 'auto',
  },
  {
    id: 1630034110,
    name: 'Bob - 翻译和 OCR 工具',
    addType: 'auto',
  },
  {
    id: 1395152179,
    name: '奇游加速器 - 全球游戏畅玩',
    addType: 'auto',
  },
  {
    id: 1575178082,
    name: 'Max NTFS - NTFS Disk Helper',
    addType: 'auto',
  },
  {
    id: 1476545828,
    name: 'MacDroid - Manager for Android',
    addType: 'auto',
  },
  {
    id: 1456235760,
    name: 'Live Wallpaper - 4K UHD',
    addType: 'auto',
  },
  {
    id: 1599191594,
    name: 'iBoysoft MagicMenu',
    addType: 'auto',
  },
  {
    id: 1514073011,
    name: 'QuickFox-海外回国加速器追剧听歌游戏留学生必备',
    addType: 'auto',
  },
  {
    id: 1133028347,
    name: 'Cleaner One Pro - Uninstaller',
    addType: 'auto',
  },
  {
    id: 6450397515,
    name: 'Transcribe & Speech to text',
    addType: 'auto',
  },
  {
    id: 1598771178,
    name: 'DeviceMirror Lite -Screen Cast',
    addType: 'auto',
  },
  {
    id: 1669005649,
    name: 'TXT Reader + AI Assistant',
    addType: 'auto',
  },
  {
    id: 1525349531,
    name: 'Snap Screenshot - Snip & Paste',
    addType: 'auto',
  },
  {
    id: 646295438,
    name: 'RAR Extractor - Unarchiver',
    addType: 'auto',
  },
  {
    id: 6452726154,
    name: 'Ultra VPN - VPN and Wifi Proxy',
    addType: 'auto',
  },
  {
    id: 1521133201,
    name: 'Speed Player for Safari',
    addType: 'auto',
  },
  {
    id: 1298486723,
    name: 'FileZilla Pro - FTP and Cloud',
    addType: 'auto',
  },
  {
    id: 1081480270,
    name: 'The Audio Converter',
    addType: 'auto',
  },
  {
    id: 1244625890,
    name: 'ApowerMirror- Screen Mirroring',
    addType: 'auto',
  },
  {
    id: 1068435535,
    name: 'Antivirus One - Virus Cleaner',
    addType: 'auto',
  },
  {
    id: 1576794157,
    name: '飞火动态壁纸-4k超清视频桌面主题壁纸引擎',
    addType: 'auto',
  },
  {
    id: 1455463454,
    name: 'WiFi Speed Test Tools',
    addType: 'auto',
  },
  {
    id: 1441507725,
    name: 'Oka Unarchiver - Unzip ZIP RAR',
    addType: 'auto',
  },
  {
    id: 1535136051,
    name: 'RAR Extractor - Unzip File',
    addType: 'auto',
  },
  {
    id: 1500706402,
    name: 'PhDDNS',
    addType: 'auto',
  },
  {
    id: 1486294815,
    name: 'Aliyun Network Client',
    addType: 'auto',
  },
  {
    id: 1637557903,
    name: 'Video Converter X2',
    addType: 'auto',
  },
  {
    id: 6737146353,
    name: 'FoxVPN – Fast & World NetWork',
    addType: 'auto',
  },
  {
    id: 1543649099,
    name: 'Clone My Data-Sync&Backup Data',
    addType: 'auto',
  },
  {
    id: 1485671150,
    name: 'VPN -  快滚 全球网络加速',
    addType: 'auto',
  },
  {
    id: 1570653446,
    name: 'Focus Video - Video Converter',
    addType: 'auto',
  },
  {
    id: 740355970,
    name: 'Data Recovery Expert',
    addType: 'auto',
  },
  {
    id: 1606741874,
    name: 'AConverter - Audio Converter',
    addType: 'auto',
  },
  {
    id: 6475027113,
    name: 'Deep Think智能助手： AI智能助理',
    addType: 'auto',
  },
  {
    id: 1018301773,
    name: 'AdBlock Pro for Safari',
    addType: 'auto',
  },
  {
    id: 1551462255,
    name: 'MouseBoost',
    addType: 'auto',
  },
  {
    id: 1466014165,
    name: 'RecMaster Screen Recorder',
    addType: 'auto',
  },
  {
    id: 1613340764,
    name: 'PixelsTester - Test Monitors',
    addType: 'auto',
  },
  {
    id: 1502255391,
    name: 'Color Folder - Custom Icons',
    addType: 'auto',
  },
  {
    id: 1467607774,
    name: 'Smart Audio Editor - ID3',
    addType: 'auto',
  },
  {
    id: 1478202069,
    name: 'Screen Mirroring: LetsView',
    addType: 'auto',
  },
  {
    id: 6448913901,
    name: '全能AI - 图生视频、文生视频、AI写歌作曲、AI智能助理',
    addType: 'auto',
  },
  {
    id: 1476640331,
    name: '读写客',
    addType: 'auto',
  },
  {
    id: 787142064,
    name: 'VSD Viewer & VSD Converter',
    addType: 'auto',
  },
  {
    id: 1499250688,
    name: 'Wallpaper - HD Wallpapers',
    addType: 'auto',
  },
  {
    id: 1642304143,
    name: 'SerialPort Debug Assistant Pro',
    addType: 'auto',
  },
  {
    id: 1516451072,
    name: 'Another Desktop Manager',
    addType: 'auto',
  },
  {
    id: 847259925,
    name: 'SnailSVN: SVN for Finder',
    addType: 'auto',
  },
  {
    id: 689176796,
    name: 'Python Runner',
    addType: 'auto',
  },
  {
    id: 1459663647,
    name: 'Virtual Location',
    addType: 'auto',
  },
  {
    id: 417392270,
    name: 'MDB ACCDB Viewer',
    addType: 'auto',
  },
  {
    id: 847260112,
    name: 'SnailGit: Git for Finder',
    addType: 'auto',
  },
  {
    id: 498370702,
    name: 'RegExRX',
    addType: 'auto',
  },
  {
    id: 1236813619,
    name: 'Context Menu',
    addType: 'auto',
  },
  {
    id: 955297617,
    name: 'CodeRunner 4',
    addType: 'auto',
  },
  {
    id: 1400977081,
    name: 'IPYNB Viewer + Editor',
    addType: 'auto',
  },
  {
    id: 948079084,
    name: 'FlashFTP - Swift FTP/SFTP Client',
    addType: 'auto',
  },
  {
    id: 6504210872,
    name: 'DartShell - SSH & SFTP',
    addType: 'auto',
  },
  {
    id: 1063631769,
    name: 'Medis - GUI for Redis',
    addType: 'auto',
  },
  {
    id: 507135296,
    name: 'IconKit',
    addType: 'auto',
  },
  {
    id: 429449079,
    name: 'Patterns - The Regex App',
    addType: 'auto',
  },
  {
    id: 6446094097,
    name: 'AI File Translator (1 to >100)',
    addType: 'auto',
  },
  {
    id: 1054575495,
    name: 'JavaPoint',
    addType: 'auto',
  },
  {
    id: 841285201,
    name: 'Haskell',
    addType: 'auto',
  },
  {
    id: 567740330,
    name: 'JSON Editor',
    addType: 'auto',
  },
  {
    id: 1157491961,
    name: 'PLIST Editor',
    addType: 'auto',
  },
  {
    id: 913158085,
    name: 'Expressions',
    addType: 'auto',
  },
  {
    id: 1105845111,
    name: 'Xversion',
    addType: 'auto',
  },
  {
    id: 641027709,
    name: 'Color Picker',
    addType: 'auto',
  },
  {
    id: 823961613,
    name: 'SSH Copy',
    addType: 'auto',
  },
  {
    id: 1067646949,
    name: 'New Terminal Here',
    addType: 'auto',
  },
  {
    id: 595177179,
    name: 'icns Tool',
    addType: 'auto',
  },
  {
    id: 490499048,
    name: 'bmGlyph',
    addType: 'auto',
  },
  {
    id: 556381974,
    name: 'IconFly',
    addType: 'auto',
  },
  {
    id: 499768540,
    name: 'Power JSON Editor',
    addType: 'auto',
  },
  {
    id: 1554235898,
    name: 'Peek — A Quick Look Extension',
    addType: 'auto',
  },
  {
    id: 1224934068,
    name: 'iTer - IT learning',
    addType: 'auto',
  },
  {
    id: 1615269303,
    name: 'iCon - Create And Resize Icons',
    addType: 'auto',
  },
  {
    id: 686855602,
    name: 'PHP Runner',
    addType: 'auto',
  },
  {
    id: 1511935951,
    name: 'BetterJSON for Safari',
    addType: 'auto',
  },
  {
    id: 1106867065,
    name: 'Svgsus',
    addType: 'auto',
  },
  {
    id: 945397020,
    name: 'Run Python',
    addType: 'auto',
  },
  {
    id: 536559203,
    name: 'FlashCode - SWF to HTML5 and Objective-C converter',
    addType: 'auto',
  },
  {
    id: 1485436674,
    name: 'A Companion for SwiftUI',
    addType: 'auto',
  },
  {
    id: 875264768,
    name: 'Node.js HandBook',
    addType: 'auto',
  },
  {
    id: 1360203022,
    name: 'Socket-tcp/udp tool',
    addType: 'auto',
  },
  {
    id: 417074533,
    name: 'Synalyze It!',
    addType: 'auto',
  },
  {
    id: 513995545,
    name: 'MDB Tool - For Microsoft Access',
    addType: 'auto',
  },
  {
    id: 1400050251,
    name: 'Pythonic',
    addType: 'auto',
  },
  {
    id: 906185173,
    name: 'PacketSender',
    addType: 'auto',
  },
  {
    id: 719577577,
    name: 'JarPackager',
    addType: 'auto',
  },
  {
    id: 803736440,
    name: 'Hex Edit Pro',
    addType: 'auto',
  },
  {
    id: 1410608230,
    name: 'SQLiteMaster',
    addType: 'auto',
  },
  {
    id: 685191052,
    name: 'SVN Server',
    addType: 'auto',
  },
  {
    id: 1104615718,
    name: 'HelloWeb',
    addType: 'auto',
  },
  {
    id: 1024903185,
    name: 'TextLab',
    addType: 'auto',
  },
  {
    id: 946677126,
    name: 'PDF to XLSX Master',
    addType: 'auto',
  },
  {
    id: 414234859,
    name: 'DropDMG',
    addType: 'auto',
  },
  {
    id: 734258109,
    name: 'Watchdog for Xcode',
    addType: 'auto',
  },
  {
    id: 535348544,
    name: 'Folder Compare',
    addType: 'auto',
  },
  {
    id: 1268616588,
    name: 'Localizable - translation file',
    addType: 'auto',
  },
  {
    id: 822334407,
    name: 'TCP Client',
    addType: 'auto',
  },
  {
    id: 415087689,
    name: 'PHP Code Tester',
    addType: 'auto',
  },
  {
    id: 1148208665,
    name: 'ThemeInstaller',
    addType: 'auto',
  },
  {
    id: 478570084,
    name: 'CompareMerge',
    addType: 'auto',
  },
  {
    id: 1159371870,
    name: 'Code School for Xcode PRO - Learn Coding for iOS',
    addType: 'auto',
  },
  {
    id: 1579236127,
    name: 'UMLBoard',
    addType: 'auto',
  },
  {
    id: 1054670022,
    name: 'Adaptivity (A)',
    addType: 'auto',
  },
  {
    id: 1458267370,
    name: 'HTTP Server - LAN Debug Tool',
    addType: 'auto',
  },
  {
    id: 1434151360,
    name: 'PowerRightMenu - Fast New File',
    addType: 'auto',
  },
  {
    id: 574356166,
    name: 'CrossFTP Pro - FTP Client',
    addType: 'auto',
  },
  {
    id: 640034674,
    name: 'AnyMP4 AVCHD Converter Player',
    addType: 'auto',
  },
  {
    id: 689184215,
    name: 'JRunner for Java',
    addType: 'auto',
  },
  {
    id: 670032670,
    name: 'JS King',
    addType: 'auto',
  },
  {
    id: 1589635432,
    name: 'EasyPlantUML',
    addType: 'auto',
  },
  {
    id: 1567045405,
    name: 'Golog',
    addType: 'auto',
  },
  {
    id: 689183220,
    name: 'JS Runner',
    addType: 'auto',
  },
  {
    id: 1516154713,
    name: 'Push Notification - Tester',
    addType: 'auto',
  },
  {
    id: 467620393,
    name: 'JavaScript Condenser',
    addType: 'auto',
  },
  {
    id: 689178925,
    name: 'Perl Runner',
    addType: 'auto',
  },
  {
    id: 1396408074,
    name: 'PrettyJSON for Xcode',
    addType: 'auto',
  },
  {
    id: 1244392031,
    name: 'CL!ng',
    addType: 'auto',
  },
  {
    id: 1137451860,
    name: 'App Preview Video Converter',
    addType: 'auto',
  },
  {
    id: 1013592748,
    name: 'C Sharp',
    addType: 'auto',
  },
  {
    id: 775920262,
    name: 'unRAR Pro',
    addType: 'auto',
  },
  {
    id: 1576144037,
    name: 'mSocket - Transfer large files',
    addType: 'auto',
  },
  {
    id: 689175950,
    name: 'Node Runner',
    addType: 'auto',
  },
  {
    id: 552407238,
    name: 'myPoint Coordinates',
    addType: 'auto',
  },
  {
    id: 402383384,
    name: 'Base - SQLite Editor',
    addType: 'auto',
  },
  {
    id: 433586919,
    name: 'CSVEdit',
    addType: 'auto',
  },
  {
    id: 1076110314,
    name: 'Smart JSON Viewer',
    addType: 'auto',
  },
  {
    id: 1134593405,
    name: 'EncryptTools',
    addType: 'auto',
  },
  {
    id: 475193367,
    name: 'Synalyze It! Pro',
    addType: 'auto',
  },
  {
    id: 1167060791,
    name: 'Import',
    addType: 'auto',
  },
  {
    id: 1128674367,
    name: 'MySQL Database Optimizer',
    addType: 'auto',
  },
  {
    id: 1604145760,
    name: 'Picture Compresser',
    addType: 'auto',
  },
  {
    id: 1367025713,
    name: 'Sprite 1-2-3',
    addType: 'auto',
  },
  {
    id: 1070488538,
    name: 'Icons Maker',
    addType: 'auto',
  },
  {
    id: 413612688,
    name: 'Icons',
    addType: 'auto',
  },
  {
    id: 913523893,
    name: 'QuartzCode',
    addType: 'auto',
  },
  {
    id: 477163052,
    name: 'Linguan',
    addType: 'auto',
  },
  {
    id: 1565766176,
    name: 'Power YAML Editor',
    addType: 'auto',
  },
  {
    id: 1479641484,
    name: 'Fireworks - Effects Editor',
    addType: 'auto',
  },
  {
    id: 1176074088,
    name: 'Termius — Modern SSH Client',
    addType: 'auto',
  },
  {
    id: 1102004240,
    name: 'iHosts - /etc/hosts editor',
    addType: 'auto',
  },
  {
    id: 1507890049,
    name: 'Pixeur - Screen Color Picker',
    addType: 'auto',
  },
  {
    id: 6504274426,
    name: 'termcc - SSH & SFTP Client',
    addType: 'auto',
  },
  {
    id: 1491764008,
    name: 'Red 2 - UI for Redis',
    addType: 'auto',
  },
  {
    id: 985614903,
    name: 'SQLPro Studio',
    addType: 'auto',
  },
  {
    id: 1459748650,
    name: 'CompareMerge2',
    addType: 'auto',
  },
  {
    id: 1475741280,
    name: 'SSH Client - Terminal, Telnet',
    addType: 'auto',
  },
  {
    id: 828466809,
    name: 'SQLPro for MSSQL',
    addType: 'auto',
  },
  {
    id: 1547933097,
    name: 'Socket Debugger',
    addType: 'auto',
  },
  {
    id: 1516553045,
    name: 'Colorsip',
    addType: 'auto',
  },
  {
    id: 1502044457,
    name: 'Whisk',
    addType: 'auto',
  },
  {
    id: 1533756032,
    name: 'DevUtils.app',
    addType: 'auto',
  },
  {
    id: 1147023879,
    name: 'App Image Kit',
    addType: 'auto',
  },
  {
    id: 1469182443,
    name: 'SnipperApp 2',
    addType: 'auto',
  },
  {
    id: 1570789972,
    name: 'ESP32 WiFi OTA',
    addType: 'auto',
  },
  {
    id: 1584637545,
    name: 'Translate APP-Project Localize',
    addType: 'auto',
  },
  {
    id: 1516378834,
    name: 'Push Notification - Client',
    addType: 'auto',
  },
  {
    id: 547166701,
    name: '百度网盘',
    addType: 'auto',
  },
  {
    id: 1014945607,
    name: '优酷视频-嘘国王在冬眠 全网独播',
    addType: 'auto',
  },
  {
    id: 1231336508,
    name: '腾讯视频-折腰 全网独播',
    addType: 'auto',
  },
  {
    id: 6741096204,
    name: 'Think AI: Ask Chatbot Anything',
    addType: 'auto',
  },
  {
    id: 1012296988,
    name: '爱奇艺-人生若如初见 全网独播',
    addType: 'auto',
  },
  {
    id: 1327661892,
    name: 'Xmind: Mind Map',
    addType: 'auto',
  },
  {
    id: 1588231633,
    name: 'Meitu-AI Photo Editor & Design',
    addType: 'auto',
  },
  {
    id: 1450246547,
    name: 'BestZip - Unarchive RAR&7Z&ZIP',
    addType: 'auto',
  },
  {
    id: 1570349123,
    name: 'Openly for Chrome and Firefox',
    addType: 'auto',
  },
  {
    id: 491854842,
    name: 'Youdao Translate',
    addType: 'auto',
  },
  {
    id: 1247341465,
    name: '同花顺-股票炒股软件',
    addType: 'auto',
  },
  {
    id: 1484905765,
    name: 'Fast CAD Reader',
    addType: 'auto',
  },
  {
    id: 747648890,
    name: 'Telegram',
    addType: 'auto',
  },
  {
    id: 6450939701,
    name: 'Chat One - AI Chat Box',
    addType: 'auto',
  },
  {
    id: 1565629813,
    name: 'FastZip - RAR 7Z ZIP UnZip',
    addType: 'auto',
  },
  {
    id: 1592987853,
    name: 'Screen Recorder by Omi',
    addType: 'auto',
  },
  {
    id: 1488071784,
    name: 'Wallpapers X - 4K Wallpaper',
    addType: 'auto',
  },
  {
    id: 1181028777,
    name: 'Flip Clock - digital widgets',
    addType: 'auto',
  },
  {
    id: 1485844094,
    name: 'iShot-ScreenShot Recording OCR',
    addType: 'auto',
  },
  {
    id: 6503169843,
    name: 'AI Chatbot : Ask AI Assistant',
    addType: 'auto',
  },
  {
    id: 1552826194,
    name: 'iWallpaper - Live Wallpaper',
    addType: 'auto',
  },
  {
    id: 6511220682,
    name: 'CleanMyApp - Uninstaller',
    addType: 'auto',
  },
  {
    id: 966085870,
    name: 'TickTick:To-Do List, Calendar',
    addType: 'auto',
  },
  {
    id: 1144400433,
    name: '东方财富经典版-股票开户证券炒股理财',
    addType: 'auto',
  },
  {
    id: 1497428978,
    name: 'iRightMouse',
    addType: 'auto',
  },
  {
    id: 886103288,
    name: '虎牙直播HD-游戏互动直播平台',
    addType: 'auto',
  },
  {
    id: 1541571038,
    name: 'NTFS Read&Write -iBoysoft NTFS',
    addType: 'auto',
  },
  {
    id: 1594288016,
    name: 'Wink: Video Enhancer & Editor',
    addType: 'auto',
  },
  {
    id: 1600668116,
    name: '有道云笔记-笔记效率办公',
    addType: 'auto',
  },
  {
    id: 6443843900,
    name: 'iBar-Menubar icon control tool',
    addType: 'auto',
  },
  {
    id: 1442745175,
    name: '快帆加速器-海外回国音乐视频加速器',
    addType: 'auto',
  },
  {
    id: 1518518216,
    name: 'Paper - Live Wallpapers',
    addType: 'auto',
  },
  {
    id: 1659622164,
    name: 'VidHub -Video Library & Player',
    addType: 'auto',
  },
  {
    id: 1570563588,
    name: 'CalendarTask - Efficient life',
    addType: 'auto',
  },
  {
    id: 734383760,
    name: '每日英语听力 - 英语听力的最佳途径',
    addType: 'auto',
  },
  {
    id: 1507782672,
    name: 'Pixea',
    addType: 'auto',
  },
  {
    id: 1259223205,
    name: 'TunesMechanic for iTunes',
    addType: 'auto',
  },
  {
    id: 1630034110,
    name: 'Bob - 翻译和 OCR 工具',
    addType: 'auto',
  },
  {
    id: 1221250572,
    name: 'Xnip - Screenshot & Annotation',
    addType: 'auto',
  },
  {
    id: 1575178082,
    name: 'Max NTFS - NTFS Disk Helper',
    addType: 'auto',
  },
  {
    id: 1619925971,
    name: 'UPDF - PDF Editor with AI',
    addType: 'auto',
  },
  {
    id: 1395152179,
    name: '奇游加速器 - 全球游戏畅玩',
    addType: 'auto',
  },
  {
    id: 503039729,
    name: 'Fotor: AI Photo Editor, Design',
    addType: 'auto',
  },
  {
    id: 1476545828,
    name: 'MacDroid - Manager for Android',
    addType: 'auto',
  },
  {
    id: 6449164812,
    name: '打字通 - 打字练习软件',
    addType: 'auto',
  },
  {
    id: 1536071582,
    name: 'Omni Converter - Video & Audio',
    addType: 'auto',
  },
  {
    id: 1456235760,
    name: 'Live Wallpaper - 4K UHD',
    addType: 'auto',
  },
  {
    id: 1599191594,
    name: 'iBoysoft MagicMenu',
    addType: 'auto',
  },
  {
    id: 1665341561,
    name: 'flomo浮墨笔记 - AI 加持的便签备忘',
    addType: 'auto',
  },
  {
    id: 1133028347,
    name: 'Cleaner One Pro - Uninstaller',
    addType: 'auto',
  },
  {
    id: 1514073011,
    name: 'QuickFox-海外回国加速器追剧听歌游戏留学生必备',
    addType: 'auto',
  },
  {
    id: 1345035954,
    name: '穿梭Transocks-海外华人回国加速器',
    addType: 'auto',
  },
  {
    id: 1176074088,
    name: 'Termius — Modern SSH Client',
    addType: 'auto',
  },
  {
    id: 1335335588,
    name: 'Final Video Player - MKV & MP4',
    addType: 'auto',
  },
  {
    id: 1044549675,
    name: 'Elmedia Video Player',
    addType: 'auto',
  },
  {
    id: 1453504509,
    name: 'Dynamic Wallpaper Engine',
    addType: 'auto',
  },
  {
    id: 1449438542,
    name: 'BestZip Pro - Unzip RAR&Zip&7z',
    addType: 'auto',
  },
  {
    id: 470158793,
    name: 'Keka',
    addType: 'auto',
  },
  {
    id: 1550403011,
    name: 'iRightMouse Pro',
    addType: 'auto',
  },
  {
    id: 1611347086,
    name: 'iShot Pro-ScreenShot Recording',
    addType: 'auto',
  },
  {
    id: 6737150304,
    name: 'iBar Pro-Menubar control tool',
    addType: 'auto',
  },
  {
    id: 647505820,
    name: 'RAR Extractor - Unarchiver Pro',
    addType: 'auto',
  },
  {
    id: 6740171321,
    name: 'FastZipPro- RAR 7Z ZIP UnZip',
    addType: 'auto',
  },
  {
    id: 6742392236,
    name: 'ClashX Pro :Service Monitoring',
    addType: 'auto',
  },
  {
    id: 1343182480,
    name: '东方财富领先版-股票开户证券炒股理财',
    addType: 'auto',
  },
  {
    id: 6741806831,
    name: 'ClashX Pro - Dashboard manager',
    addType: 'auto',
  },
  {
    id: 494500492,
    name: '倒数日 · Days Matter for Desktop',
    addType: 'auto',
  },
  {
    id: 951718596,
    name: 'FoxCAD',
    addType: 'auto',
  },
  {
    id: 1551531632,
    name: 'AutoSwitchInput Pro',
    addType: 'auto',
  },
  {
    id: 6738742748,
    name: 'Puzzle Spider Solitaire.',
    addType: 'auto',
  },
  {
    id: 1469774098,
    name: 'QSpace',
    addType: 'auto',
  },
  {
    id: 1459028801,
    name: '爱五笔 - 五笔编码拆字大全',
    addType: 'auto',
  },
  {
    id: 1567442612,
    name: 'Qmenu',
    addType: 'auto',
  },
  {
    id: 1544655904,
    name: 'OmniReader Pro - AI Reader',
    addType: 'auto',
  },
  {
    id: 411643860,
    name: 'DaisyDisk',
    addType: 'auto',
  },
  {
    id: 1486274102,
    name: 'MPlayer X Pro',
    addType: 'auto',
  },
  {
    id: 461788075,
    name: 'Movist',
    addType: 'auto',
  },
  {
    id: 1218171533,
    name: 'Marklist - Manage Later Things',
    addType: 'auto',
  },
  {
    id: 6474505156,
    name: '照片处理工具 - 公务员考试报名确认照片审核',
    addType: 'auto',
  },
  {
    id: 510620098,
    name: 'MediaInfo',
    addType: 'auto',
  },
  {
    id: 432850619,
    name: 'FL Studio Mobile',
    addType: 'auto',
  },
  {
    id: 1642304143,
    name: 'SerialPort Debug Assistant Pro',
    addType: 'auto',
  },
  {
    id: 430798174,
    name: 'HazeOver • Distraction Dimmer™',
    addType: 'auto',
  },
  {
    id: 457622435,
    name: 'Yoink - Better Drag and Drop',
    addType: 'auto',
  },
  {
    id: 1606275031,
    name: 'Picture View: Image browser',
    addType: 'auto',
  },
  {
    id: 1555844307,
    name: 'MouseBoost Pro',
    addType: 'auto',
  },
  {
    id: 402380914,
    name: 'Eudic 欧路词典 增强版',
    addType: 'auto',
  },
  {
    id: 6738715418,
    name: 'STEP and IGES File Viewer',
    addType: 'auto',
  },
  {
    id: 977949232,
    name: 'Daygram : My Secret Diary',
    addType: 'auto',
  },
  {
    id: 847259925,
    name: 'SnailSVN: SVN for Finder',
    addType: 'auto',
  },
  {
    id: 389083586,
    name: 'MDict',
    addType: 'auto',
  },
  {
    id: 1516451072,
    name: 'Another Desktop Manager',
    addType: 'auto',
  },
  {
    id: 1482490089,
    name: 'Tampermonkey Classic',
    addType: 'auto',
  },
  {
    id: 6502828594,
    name: 'Template for Adobe illustrator',
    addType: 'auto',
  },
  {
    id: 1622138166,
    name: 'Change Video Speed for Safari',
    addType: 'auto',
  },
  {
    id: 1058266292,
    name: '妖股助手HD-优选短线强势股票',
    addType: 'auto',
  },
  {
    id: 1478540997,
    name: 'zClock - Clock & Countdown.',
    addType: 'auto',
  },
  {
    id: 1451273814,
    name: 'nPlayer',
    addType: 'auto',
  },
  {
    id: 1533946416,
    name: 'MyZip Pro-7z zip rar多线程极速压缩工具',
    addType: 'auto',
  },
  {
    id: 476566660,
    name: 'Earth 3D',
    addType: 'auto',
  },
  {
    id: 1325456420,
    name: 'Music Format Converter HQ',
    addType: 'auto',
  },
  {
    id: 668609870,
    name: 'Rar Sharp',
    addType: 'auto',
  },
  {
    id: 1381028448,
    name: '百读不厌 - 听书、看书神器',
    addType: 'auto',
  },
  {
    id: 1269984974,
    name: 'Markdown - Enjoy writing',
    addType: 'auto',
  },
  {
    id: 991247047,
    name: 'Flowchart Designer Premium',
    addType: 'auto',
  },
  {
    id: 689176796,
    name: 'Python Runner',
    addType: 'auto',
  },
  {
    id: 1265704574,
    name: 'Bandizip: Archiver',
    addType: 'auto',
  },
  {
    id: 1199716810,
    name: '五子棋打谱软件',
    addType: 'auto',
  },
  {
    id: 1385628859,
    name: 'Highlighter for Safari',
    addType: 'auto',
  },
  {
    id: 1521805728,
    name: 'iVault - secure your files',
    addType: 'auto',
  },
  {
    id: 1632395174,
    name: 'CleanMyMac X Multi-License',
    addType: 'auto',
  },
  {
    id: 775050502,
    name: 'American Sign Language',
    addType: 'auto',
  },
  {
    id: 904280696,
    name: 'Things 3',
    addType: 'auto',
  },
  {
    id: 1384206666,
    name: 'DemoPro - Screen Annotation',
    addType: 'auto',
  },
  {
    id: 464050545,
    name: 'Algodoo Physics',
    addType: 'auto',
  },
  {
    id: 808501572,
    name: 'Backgrounds',
    addType: 'auto',
  },
  {
    id: 1576064082,
    name: 'DeviceMirror -Screen Mirroring',
    addType: 'auto',
  },
  {
    id: 6670793258,
    name: 'LaTeX Editor Pro',
    addType: 'auto',
  },
  {
    id: 6474615359,
    name: 'MathCapture - Equation Editor',
    addType: 'auto',
  },
  {
    id: 1535623374,
    name: 'RenameBest: Rename in Batch',
    addType: 'auto',
  },
  {
    id: 1459663647,
    name: 'Virtual Location',
    addType: 'auto',
  },
  {
    id: 1214761683,
    name: 'iWall-Dynamic Desktop Engine',
    addType: 'auto',
  },
  {
    id: 796608673,
    name: 'Animal Typing',
    addType: 'auto',
  },
  {
    id: 966457795,
    name: 'Super PhotoCut',
    addType: 'auto',
  },
  {
    id: 1561303442,
    name: '人生必读百本书',
    addType: 'auto',
  },
  {
    id: 453164367,
    name: 'SystemPal',
    addType: 'auto',
  },
  {
    id: 1425997715,
    name: 'RAR Extractor Pro - Unzip',
    addType: 'auto',
  },
  {
    id: 431224317,
    name: 'Disk Drill Media Recovery',
    addType: 'auto',
  },
  {
    id: 1415704056,
    name: 'The App Locker -Best Lock Apps',
    addType: 'auto',
  },
  {
    id: 1204268874,
    name: 'Lyrics Editor',
    addType: 'auto',
  },
  {
    id: 609649363,
    name: 'Earth 3D - World Atlas',
    addType: 'auto',
  },
  {
    id: 1162194131,
    name: 'Easy New File',
    addType: 'auto',
  },
  {
    id: 6474506915,
    name: 'Sticker - Desktop Notepad',
    addType: 'auto',
  },
  {
    id: 1403919533,
    name: 'MWeb Pro',
    addType: 'auto',
  },
  {
    id: 6472813601,
    name: 'NinjaMouse - Your mouse master',
    addType: 'auto',
  },
  {
    id: 775737590,
    name: 'iA Writer',
    addType: 'auto',
  },
  {
    id: 1028838684,
    name: 'Artpaper: New Wallpapers Daily',
    addType: 'auto',
  },
  {
    id: 1102242042,
    name: 'Subtitler for fcpxml',
    addType: 'auto',
  },
  {
    id: 1445268016,
    name: 'Duplicate Cleaner',
    addType: 'auto',
  },
  {
    id: 937759555,
    name: 'Elmedia:universal video player',
    addType: 'auto',
  },
  {
    id: 1313164484,
    name: 'Distance and Area Measure',
    addType: 'auto',
  },
  {
    id: 1494552451,
    name: '小说大全',
    addType: 'auto',
  },
  {
    id: 1273980573,
    name: 'Best Data Recovery',
    addType: 'auto',
  },
  {
    id: 522706442,
    name: 'Sync Folders Pro',
    addType: 'auto',
  },
  {
    id: 6736433415,
    name: 'DICOM Viewer+',
    addType: 'auto',
  },
  {
    id: 1619982017,
    name: '五笔拆字',
    addType: 'auto',
  },
  {
    id: 532441535,
    name: 'Presentation Prompter',
    addType: 'auto',
  },
  {
    id: 1153435308,
    name: 'inddPreview',
    addType: 'auto',
  },
  {
    id: 417392270,
    name: 'MDB ACCDB Viewer',
    addType: 'auto',
  },
  {
    id: 1475051844,
    name: 'Filmage Converter Pro-MKV,AVI',
    addType: 'auto',
  },
  {
    id: 1441394270,
    name: 'Oka Unarchiver Pro - Unzip RAR',
    addType: 'auto',
  },
  {
    id: 6711333801,
    name: 'Live Crypto Prices, Charts',
    addType: 'auto',
  },
  {
    id: 1447010168,
    name: 'Music Dictionary - Music Terms',
    addType: 'auto',
  },
  {
    id: 658182498,
    name: 'Address Book to CSV',
    addType: 'auto',
  },
  {
    id: 6465744342,
    name: 'iBoot - StartupDisk shortcut',
    addType: 'auto',
  },
  {
    id: 1526912781,
    name: 'Rainbow Folder - Icon changer',
    addType: 'auto',
  },
  {
    id: 584393206,
    name: 'Cardiograph',
    addType: 'auto',
  },
  {
    id: 668331139,
    name: 'Backup Scheduler: Time Editor',
    addType: 'auto',
  },
  {
    id: 1261004863,
    name: 'Data Recovery EX',
    addType: 'auto',
  },
  {
    id: 6738346322,
    name: 'NaturalSpelling-自然拼读音标スペル',
    addType: 'auto',
  },
  {
    id: 1607691467,
    name: 'Auto Refresh Page',
    addType: 'auto',
  },
  {
    id: 6446939328,
    name: 'OmniZip Pro',
    addType: 'auto',
  },
  {
    id: 877615577,
    name: 'Serial',
    addType: 'auto',
  },
  {
    id: 432850619,
    name: 'FL Studio Mobile',
    addType: 'auto',
  },
  {
    id: 1447010168,
    name: 'Music Dictionary - Music Terms',
    addType: 'auto',
  },
  {
    id: 1325456420,
    name: 'Music Format Converter HQ',
    addType: 'auto',
  },
  {
    id: 514840980,
    name: 'Total Video Converter',
    addType: 'auto',
  },
  {
    id: 1643033301,
    name: 'MIDIRMX',
    addType: 'auto',
  },
  {
    id: 1584154464,
    name: 'MIDI Router',
    addType: 'auto',
  },
  {
    id: 1204268874,
    name: 'Lyrics Editor',
    addType: 'auto',
  },
  {
    id: 874418479,
    name: 'Audio Convert Factory',
    addType: 'auto',
  },
  {
    id: 963571828,
    name: 'Audio Merge & Split',
    addType: 'auto',
  },
  {
    id: 1178295426,
    name: 'Colibri',
    addType: 'auto',
  },
  {
    id: 1532597159,
    name: 'Mp3tag',
    addType: 'auto',
  },
  {
    id: 554883654,
    name: 'Metadatics',
    addType: 'auto',
  },
  {
    id: 1506457515,
    name: 'Stage Plot Maker X',
    addType: 'auto',
  },
  {
    id: 1567204629,
    name: 'Ringtone Maker -Easy ringtone!',
    addType: 'auto',
  },
  {
    id: 963573437,
    name: 'Audio Convert、Merge & Split',
    addType: 'auto',
  },
  {
    id: 6458546013,
    name: 'HI-Player',
    addType: 'auto',
  },
  {
    id: 6443536652,
    name: 'Audio Convertor - M4A,FLAC,M4R',
    addType: 'auto',
  },
  {
    id: 447726582,
    name: 'iAudioConverter',
    addType: 'auto',
  },
  {
    id: 808285143,
    name: 'myTuner Radio Pro',
    addType: 'auto',
  },
  {
    id: 405537804,
    name: 'Sound Studio',
    addType: 'auto',
  },
  {
    id: 1036029895,
    name: 'Music Convert-Audio Converter',
    addType: 'auto',
  },
  {
    id: 492478362,
    name: 'MidiKey',
    addType: 'auto',
  },
  {
    id: 402437824,
    name: 'Ringer - Ringtone Maker',
    addType: 'auto',
  },
  {
    id: 1486434332,
    name: 'TextMusic - Music Notation',
    addType: 'auto',
  },
  {
    id: 797275229,
    name: 'AudioTunes - FLAC, APE, WMA Converter',
    addType: 'auto',
  },
  {
    id: 1062190398,
    name: 'Drummy - Ultimate Beat Maker',
    addType: 'auto',
  },
  {
    id: 412675054,
    name: 'Tunesify',
    addType: 'auto',
  },
  {
    id: 468990782,
    name: 'Music Converter Pro',
    addType: 'auto',
  },
  {
    id: 522349879,
    name: 'DM1 - The Drum Machine',
    addType: 'auto',
  },
  {
    id: 1661522614,
    name: 'JianPu Editor',
    addType: 'auto',
  },
  {
    id: 1517312650,
    name: 'Notify for Spotify',
    addType: 'auto',
  },
  {
    id: 455545700,
    name: 'BitPerfect',
    addType: 'auto',
  },
  {
    id: 929166131,
    name: 'easyMusic',
    addType: 'auto',
  },
  {
    id: 991729082,
    name: 'Radio',
    addType: 'auto',
  },
  {
    id: 673906093,
    name: 'Audio Normalizer - Mp3 Gain',
    addType: 'auto',
  },
  {
    id: 1174330003,
    name: 'Fine Chromatic Tuner',
    addType: 'auto',
  },
  {
    id: 1538268059,
    name: 'Metronome - Metronome Pro',
    addType: 'auto',
  },
  {
    id: 984332192,
    name: 'Audio Edit Pro-Audio Editor',
    addType: 'auto',
  },
  {
    id: 851766802,
    name: 'Super Midi Convert & Play',
    addType: 'auto',
  },
  {
    id: 660027017,
    name: 'Easy Audio Recorder',
    addType: 'auto',
  },
  {
    id: 798738112,
    name: 'MetroGnome',
    addType: 'auto',
  },
  {
    id: 975152825,
    name: 'Audio Edit Studio - Editor',
    addType: 'auto',
  },
  {
    id: 558317092,
    name: 'Meta — Music Tag Editor',
    addType: 'auto',
  },
  {
    id: 813546051,
    name: 'Music Speed Changer',
    addType: 'auto',
  },
  {
    id: 1489887480,
    name: 'Hearing: ear training. Piano.',
    addType: 'auto',
  },
  {
    id: 444696268,
    name: 'TunesArt',
    addType: 'auto',
  },
  {
    id: 972934780,
    name: 'Audio Convert-Music Converter',
    addType: 'auto',
  },
  {
    id: 438292371,
    name: 'Amadeus Pro',
    addType: 'auto',
  },
  {
    id: 568052099,
    name: 'AmpKit - guitar amp & effects',
    addType: 'auto',
  },
  {
    id: 978234147,
    name: 'CD Burn Pro - Music CD',
    addType: 'auto',
  },
  {
    id: 910469258,
    name: 'Amazing Slow Downer',
    addType: 'auto',
  },
  {
    id: 1468259834,
    name: 'miRack',
    addType: 'auto',
  },
  {
    id: 548947732,
    name: 'Guitar Jam Tracks - Scale Trainer & Practice Buddy',
    addType: 'auto',
  },
  {
    id: 940526959,
    name: 'insTuner - Chromatic Tuner for Guitar, Ukulele and String Instruments',
    addType: 'auto',
  },
  {
    id: 417725762,
    name: 'Cross DJ',
    addType: 'auto',
  },
  {
    id: 1441635265,
    name: 'Easy MP3 Converter',
    addType: 'auto',
  },
  {
    id: 1329435840,
    name: 'Guitar Gravitas: Total ed.',
    addType: 'auto',
  },
  {
    id: 1451247572,
    name: 'Solfa: learn musical notes',
    addType: 'auto',
  },
  {
    id: 633262839,
    name: 'Any FLAC Converter',
    addType: 'auto',
  },
  {
    id: 709019909,
    name: 'Flac to Any Pro',
    addType: 'auto',
  },
  {
    id: 678772226,
    name: 'Audio Cutter - Cut and Split Music Files',
    addType: 'auto',
  },
  {
    id: 463687032,
    name: 'MP3-Converter',
    addType: 'auto',
  },
  {
    id: 1322360459,
    name: 'Drum Beats Metronome',
    addType: 'auto',
  },
  {
    id: 416135376,
    name: 'Fidelia',
    addType: 'auto',
  },
  {
    id: 975790852,
    name: 'Audio Trim Split-Audio Editor',
    addType: 'auto',
  },
  {
    id: 425086676,
    name: 'Decibel',
    addType: 'auto',
  },
  {
    id: 829431988,
    name: 'DSD Master',
    addType: 'auto',
  },
  {
    id: 1255792493,
    name: 'Guitar Tabs X',
    addType: 'auto',
  },
  {
    id: 1188564124,
    name: 'Master Class - Guides for Audacity',
    addType: 'auto',
  },
  {
    id: 1207009001,
    name: 'Tone Generator',
    addType: 'auto',
  },
  {
    id: 1313982113,
    name: 'BPM Tap Tempo',
    addType: 'auto',
  },
  {
    id: 1157672888,
    name: 'Tempomate',
    addType: 'auto',
  },
  {
    id: 1357379892,
    name: 'Menu Bar Controller for Sonos',
    addType: 'auto',
  },
  {
    id: 594731639,
    name: 'Super MP3 Converter',
    addType: 'auto',
  },
  {
    id: 506232966,
    name: 'Tag',
    addType: 'auto',
  },
  {
    id: 562799291,
    name: 'Drum Beats+ (Rhythm Metronome, Loops & Grooves Machine)',
    addType: 'auto',
  },
  {
    id: 435040864,
    name: 'NoSleep',
    addType: 'auto',
  },
  {
    id: 1661929636,
    name: 'Staff Editor',
    addType: 'auto',
  },
  {
    id: 832335884,
    name: 'Piano Notes Finder',
    addType: 'auto',
  },
  {
    id: 912509512,
    name: 'SignalSpy - Audio Oscilloscope, Frequency Spectrum Analyzer, and more',
    addType: 'auto',
  },
  {
    id: 498787769,
    name: 'General MIDI Player',
    addType: 'auto',
  },
  {
    id: 1464643583,
    name: 'Audio Voice Changer',
    addType: 'auto',
  },
  {
    id: 886882234,
    name: 'Tag Editor',
    addType: 'auto',
  },
  {
    id: 698196505,
    name: 'Audio Converter Pro',
    addType: 'auto',
  },
  {
    id: 1126098076,
    name: 'Silenz',
    addType: 'auto',
  },
  {
    id: 880764359,
    name: 'Export for iTunes',
    addType: 'auto',
  },
  {
    id: 1061524108,
    name: 'Muse: Music Player for YouTube',
    addType: 'auto',
  },
  {
    id: 915342927,
    name: 'NetRadio Italy',
    addType: 'auto',
  },
  {
    id: 1048950608,
    name: 'Convert to Mp3 Pro - Converter',
    addType: 'auto',
  },
  {
    id: 639386679,
    name: 'Vector 3 - Record & Edit Audio',
    addType: 'auto',
  },
  {
    id: 432769658,
    name: 'TabView',
    addType: 'auto',
  },
  {
    id: 1136096513,
    name: 'MP3 Music Converter - Aisee',
    addType: 'auto',
  },
  {
    id: 586172415,
    name: 'Tipard All Music Converter',
    addType: 'auto',
  },
  {
    id: 571673359,
    name: 'Tray Player',
    addType: 'auto',
  },
  {
    id: 1021162460,
    name: 'Chords Compass',
    addType: 'auto',
  },
  {
    id: 577400737,
    name: 'Easy Guitar Tuner',
    addType: 'auto',
  },
  {
    id: 409957696,
    name: 'MP3 Encoder',
    addType: 'auto',
  },
  {
    id: 1423295407,
    name: 'Ampado PRO - Audio Player',
    addType: 'auto',
  },
  {
    id: 1259223205,
    name: 'TunesMechanic for iTunes',
    addType: 'auto',
  },
  {
    id: 450527929,
    name: 'djay - DJ App & AI Mixer',
    addType: 'auto',
  },
  {
    id: 1070455587,
    name: 'MP3 Converter - Audio Convert',
    addType: 'auto',
  },
  {
    id: 1575723133,
    name: 'Audio Editor Ringtone Maker',
    addType: 'auto',
  },
  {
    id: 1612790003,
    name: 'Audio Converter - One Click',
    addType: 'auto',
  },
  {
    id: 1339124759,
    name: 'Audio Editor & Music Mixer',
    addType: 'auto',
  },
  {
    id: 461369673,
    name: 'VOX: MP3 & FLAC Music Player',
    addType: 'auto',
  },
  {
    id: 1496955576,
    name: 'SpeakerAmp:Booster & Equalizer',
    addType: 'auto',
  },
  {
    id: 1171417699,
    name: 'Guitar Gravitas: Chords Scales',
    addType: 'auto',
  },
  {
    id: 1594027432,
    name: 'Flacbox',
    addType: 'auto',
  },
  {
    id: 1057051963,
    name: 'Music Transfer for iTunes',
    addType: 'auto',
  },
  {
    id: 1027093462,
    name: 'Visual Cue FLAC DMX MP3 Player',
    addType: 'auto',
  },
  {
    id: 1594027661,
    name: 'Evertag',
    addType: 'auto',
  },
  {
    id: 1058801458,
    name: 'Remixlive - Make Music & Beats',
    addType: 'auto',
  },
  {
    id: 1233048948,
    name: 'Boom3D: Volume Booster and EQ',
    addType: 'auto',
  },
  {
    id: 1492991594,
    name: 'EarMaster 7',
    addType: 'auto',
  },
  {
    id: 511170796,
    name: 'Music Tag Editor',
    addType: 'auto',
  },
  {
    id: 984278082,
    name: 'Tag Editor Lite',
    addType: 'auto',
  },
  {
    id: 1482460738,
    name: 'LRC Editor',
    addType: 'auto',
  },
  {
    id: 982124349,
    name: 'FLAC MP3 Converter',
    addType: 'auto',
  },
  {
    id: 1564384601,
    name: 'Evermusic',
    addType: 'auto',
  },
  {
    id: 1602757597,
    name: 'unMix: AI Vocal Remover',
    addType: 'auto',
  },
  {
    id: 446363299,
    name: 'n-Track Studio DAW',
    addType: 'auto',
  },
  {
    id: 1527105121,
    name: 'Neural Mix Pro',
    addType: 'auto',
  },
  {
    id: 797590911,
    name: 'MIDI Score',
    addType: 'auto',
  },
  {
    id: 1473448052,
    name: 'Piano Companion: Chords,Scales',
    addType: 'auto',
  },
  {
    id: 970044455,
    name: 'WavePad Audio Editor',
    addType: 'auto',
  },
  {
    id: 6670775367,
    name: 'LioMusic - Music Editor',
    addType: 'auto',
  },
  {
    id: 1437556716,
    name: 'Mapcasts - No Advertisement',
    addType: 'auto',
  },
  {
    id: 412198565,
    name: 'Burp And Fart Piano',
    addType: 'auto',
  },
  {
    id: 733258444,
    name: 'MusicFans',
    addType: 'auto',
  },
  {
    id: 1049212349,
    name: 'Spectrum Analyzer: Sound Meter',
    addType: 'auto',
  },
  {
    id: 936243210,
    name: 'MiniPlay for Spotify & iTunes',
    addType: 'auto',
  },
  {
    id: 444425546,
    name: 'BarTunes',
    addType: 'auto',
  },
  {
    id: 1128271725,
    name: 'Keyboard Keyboard',
    addType: 'auto',
  },
  {
    id: 1483373320,
    name: 'Lyrics Production Editor',
    addType: 'auto',
  },
  {
    id: 1005227156,
    name: 'future.dj pro - mix everything',
    addType: 'auto',
  },
  {
    id: 1229106549,
    name: 'Music Tag Editor Pro',
    addType: 'auto',
  },
  {
    id: 1446942851,
    name: 'radio NED+',
    addType: 'auto',
  },
  {
    id: 1550581532,
    name: 'Vythm VJ - Music Visualizer DJ',
    addType: 'auto',
  },
  {
    id: 1550403011,
    name: 'iRightMouse Pro',
    addType: 'auto',
  },
  {
    id: 1611347086,
    name: 'iShot Pro-ScreenShot Recording',
    addType: 'auto',
  },
  {
    id: 494500492,
    name: '倒数日 · Days Matter for Desktop',
    addType: 'auto',
  },
  {
    id: 1469774098,
    name: 'QSpace',
    addType: 'auto',
  },
  {
    id: 1567442612,
    name: 'Qmenu',
    addType: 'auto',
  },
  {
    id: 1544655904,
    name: 'OmniReader Pro - AI Reader',
    addType: 'auto',
  },
  {
    id: 430798174,
    name: 'HazeOver • Distraction Dimmer™',
    addType: 'auto',
  },
  {
    id: 1218171533,
    name: 'Marklist - Manage Later Things',
    addType: 'auto',
  },
  {
    id: 1310686187,
    name: 'Scrivener 3',
    addType: 'auto',
  },
  {
    id: 1482490089,
    name: 'Tampermonkey Classic',
    addType: 'auto',
  },
  {
    id: 1535623374,
    name: 'RenameBest: Rename in Batch',
    addType: 'auto',
  },
  {
    id: 1114272557,
    name: '小历 - 小而美的日历',
    addType: 'auto',
  },
  {
    id: 1340697163,
    name: 'Record It Pro-Screen Recorder',
    addType: 'auto',
  },
  {
    id: 904280696,
    name: 'Things 3',
    addType: 'auto',
  },
  {
    id: 1269984974,
    name: 'Markdown - Enjoy writing',
    addType: 'auto',
  },
  {
    id: 876540291,
    name: 'Copy Em',
    addType: 'auto',
  },
  {
    id: 1384206666,
    name: 'DemoPro - Screen Annotation',
    addType: 'auto',
  },
  {
    id: 6670793258,
    name: 'LaTeX Editor Pro',
    addType: 'auto',
  },
  {
    id: 417375580,
    name: 'BetterSnapTool',
    addType: 'auto',
  },
  {
    id: 1403919533,
    name: 'MWeb Pro',
    addType: 'auto',
  },
  {
    id: 775737590,
    name: 'iA Writer',
    addType: 'auto',
  },
  {
    id: 1313164484,
    name: 'Distance and Area Measure',
    addType: 'auto',
  },
  {
    id: 1607691467,
    name: 'Auto Refresh Page',
    addType: 'auto',
  },
  {
    id: 6446939328,
    name: 'OmniZip Pro',
    addType: 'auto',
  },
  {
    id: 1541983985,
    name: 'Sketch 3D: Make 3D Easily',
    addType: 'auto',
  },
  {
    id: 1639698270,
    name: 'CalibCat Display Gamma Control',
    addType: 'auto',
  },
  {
    id: 1528890965,
    name: 'TextSniper - OCR, Copy & Paste',
    addType: 'auto',
  },
  {
    id: 420212497,
    name: 'Byword',
    addType: 'auto',
  },
  {
    id: 725408432,
    name: 'PDF Professional Suite',
    addType: 'auto',
  },
  {
    id: 1441958036,
    name: 'SideNotes - Thoughts & Tasks',
    addType: 'auto',
  },
  {
    id: 434808346,
    name: 'SimpleMind Pro',
    addType: 'auto',
  },
  {
    id: 407412840,
    name: 'DataGraph',
    addType: 'auto',
  },
  {
    id: 950512380,
    name: 'Notepad+ - Simple Document and Quick Note',
    addType: 'auto',
  },
  {
    id: 1368905598,
    name: 'Screencast – Screen Recorder',
    addType: 'auto',
  },
  {
    id: 1166066070,
    name: 'Bumpr',
    addType: 'auto',
  },
  {
    id: 6466263582,
    name: 'MouseXY',
    addType: 'auto',
  },
  {
    id: 6563146670,
    name: 'Miaotracer pro',
    addType: 'auto',
  },
  {
    id: 866773894,
    name: 'Quiver - take better notes',
    addType: 'auto',
  },
  {
    id: 1414457383,
    name: 'ToMenu - New&Move File Quickly',
    addType: 'auto',
  },
  {
    id: 1105814268,
    name: 'Focus Timer：Focus mind on work',
    addType: 'auto',
  },
  {
    id: 1156402585,
    name: 'Light Browser',
    addType: 'auto',
  },
  {
    id: 1519213509,
    name: 'iPreview - Powerful Quick Look',
    addType: 'auto',
  },
  {
    id: 1472854234,
    name: 'Copy+ Manage clipboard history',
    addType: 'auto',
  },
  {
    id: 1488905707,
    name: 'Noteshelf - 2',
    addType: 'auto',
  },
  {
    id: 1505869474,
    name: 'Pro Mouse',
    addType: 'auto',
  },
  {
    id: 6738089759,
    name: 'Hide Mouse Cursor',
    addType: 'auto',
  },
  {
    id: 902351149,
    name: 'Zip Password Recovery',
    addType: 'auto',
  },
  {
    id: 6450966627,
    name: 'Final Draft 13',
    addType: 'auto',
  },
  {
    id: 1272114820,
    name: 'Lock Pro',
    addType: 'auto',
  },
  {
    id: 1181766626,
    name: 'Adware Zap - Malware Cleaner',
    addType: 'auto',
  },
  {
    id: 1609752330,
    name: 'Surfingkeys',
    addType: 'auto',
  },
  {
    id: 796275163,
    name: 'Total Manager: Files Commander & Ftp Remote Client',
    addType: 'auto',
  },
  {
    id: 1277179284,
    name: 'FSNotes',
    addType: 'auto',
  },
  {
    id: 577085396,
    name: 'Unclutter',
    addType: 'auto',
  },
  {
    id: 468406330,
    name: 'WPXO',
    addType: 'auto',
  },
  {
    id: 568020055,
    name: 'Scapple',
    addType: 'auto',
  },
  {
    id: 990588172,
    name: 'Gestimer (Legacy)',
    addType: 'auto',
  },
  {
    id: 1185528129,
    name: 'Internet Translator Pro .',
    addType: 'auto',
  },
  {
    id: 552664144,
    name: 'PDF Max Pro',
    addType: 'auto',
  },
  {
    id: 632455315,
    name: 'Templates for Excel Pro',
    addType: 'auto',
  },
  {
    id: 1143437985,
    name: 'GoodTask',
    addType: 'auto',
  },
  {
    id: 1459987506,
    name: 'Cleaner X - clear cache',
    addType: 'auto',
  },
  {
    id: 895264364,
    name: 'DjVu Reader Pro',
    addType: 'auto',
  },
  {
    id: 686459498,
    name: 'PaperShip - Mendeley & Zotero',
    addType: 'auto',
  },
  {
    id: 695406827,
    name: 'Dropzone 3',
    addType: 'auto',
  },
  {
    id: 702816521,
    name: 'Unibox',
    addType: 'auto',
  },
  {
    id: 412347921,
    name: 'OmmWriter',
    addType: 'auto',
  },
  {
    id: 1093111311,
    name: '3D CAD Graphic Modeling Design',
    addType: 'auto',
  },
  {
    id: 970502923,
    name: 'Typeeto: remote BT keyboard',
    addType: 'auto',
  },
  {
    id: 493057152,
    name: 'DB-Text',
    addType: 'auto',
  },
  {
    id: 454347770,
    name: 'iCircuit',
    addType: 'auto',
  },
  {
    id: 1286489308,
    name: 'Flat Tomato',
    addType: 'auto',
  },
  {
    id: 477670270,
    name: '2Do',
    addType: 'auto',
  },
  {
    id: 1445040281,
    name: 'Translate for Safari',
    addType: 'auto',
  },
  {
    id: 524373870,
    name: 'Due — Reminders & Timers',
    addType: 'auto',
  },
  {
    id: 974929595,
    name: 'Notions',
    addType: 'auto',
  },
  {
    id: 1507246666,
    name: 'Presentify - Screen Annotation',
    addType: 'auto',
  },
  {
    id: 686398447,
    name: 'Cheese Writer',
    addType: 'auto',
  },
  {
    id: 570384149,
    name: 'JPG to PDF Converter',
    addType: 'auto',
  },
  {
    id: 418926501,
    name: 'Timer by Ten',
    addType: 'auto',
  },
  {
    id: 1489287299,
    name: 'PDF To Word Helper',
    addType: 'auto',
  },
  {
    id: 685953216,
    name: 'Instashare - Transfer files',
    addType: 'auto',
  },
  {
    id: 995838410,
    name: 'Browser Ninja',
    addType: 'auto',
  },
  {
    id: 1482778901,
    name: 'Hungrymark',
    addType: 'auto',
  },
  {
    id: 408975584,
    name: 'Todo',
    addType: 'auto',
  },
  {
    id: 1178801474,
    name: 'Translator & Voice Collection',
    addType: 'auto',
  },
  {
    id: 1115551582,
    name: 'Doc Mate: for MS Office',
    addType: 'auto',
  },
  {
    id: 566210419,
    name: 'PDF to Word +',
    addType: 'auto',
  },
  {
    id: 1088311275,
    name: 'Easy Guide For Microsoft Excel',
    addType: 'auto',
  },
  {
    id: 409222199,
    name: 'Cyberduck',
    addType: 'auto',
  },
  {
    id: 890031187,
    name: 'Marked 2 - Markdown Preview',
    addType: 'auto',
  },
  {
    id: 1175751480,
    name: 'Translate Now: Linguist',
    addType: 'auto',
  },
  {
    id: 1448026988,
    name: 'Memo Board',
    addType: 'auto',
  },
  {
    id: 735128047,
    name: 'PDF Reader Pro: Edit & Convert',
    addType: 'auto',
  },
  {
    id: 1265723161,
    name: 'Podcast Soundboard',
    addType: 'auto',
  },
  {
    id: 1460795742,
    name: 'iNote -Sticky Notes &Countdown',
    addType: 'auto',
  },
  {
    id: 778813618,
    name: 'Voice Memos+',
    addType: 'auto',
  },
  {
    id: 1128242453,
    name: 'Pro Translate - translator app',
    addType: 'auto',
  },
  {
    id: 547166701,
    name: '百度网盘',
    addType: 'auto',
  },
  {
    id: 6741096204,
    name: 'Think AI: Ask Chatbot Anything',
    addType: 'auto',
  },
  {
    id: 1327661892,
    name: 'Xmind: Mind Map',
    addType: 'auto',
  },
  {
    id: 1570349123,
    name: 'Openly for Chrome and Firefox',
    addType: 'auto',
  },
  {
    id: 491854842,
    name: 'Youdao Translate',
    addType: 'auto',
  },
  {
    id: 1247341465,
    name: '同花顺-股票炒股软件',
    addType: 'auto',
  },
  {
    id: 1484905765,
    name: 'Fast CAD Reader',
    addType: 'auto',
  },
  {
    id: 747648890,
    name: 'Telegram',
    addType: 'auto',
  },
  {
    id: 6450939701,
    name: 'Chat One - AI Chat Box',
    addType: 'auto',
  },
  {
    id: 1565629813,
    name: 'FastZip - RAR 7Z ZIP UnZip',
    addType: 'auto',
  },
  {
    id: 1592987853,
    name: 'Screen Recorder by Omi',
    addType: 'auto',
  },
  {
    id: 1488071784,
    name: 'Wallpapers X - 4K Wallpaper',
    addType: 'auto',
  },
  {
    id: 1181028777,
    name: 'Flip Clock - digital widgets',
    addType: 'auto',
  },
  {
    id: 1485844094,
    name: 'iShot-ScreenShot Recording OCR',
    addType: 'auto',
  },
  {
    id: 6503169843,
    name: 'AI Chatbot : Ask AI Assistant',
    addType: 'auto',
  },
  {
    id: 1552826194,
    name: 'iWallpaper - Live Wallpaper',
    addType: 'auto',
  },
  {
    id: 6511220682,
    name: 'CleanMyApp - Uninstaller',
    addType: 'auto',
  },
  {
    id: 966085870,
    name: 'TickTick:To-Do List, Calendar',
    addType: 'auto',
  },
  {
    id: 1144400433,
    name: '东方财富经典版-股票开户证券炒股理财',
    addType: 'auto',
  },
  {
    id: 1497428978,
    name: 'iRightMouse',
    addType: 'auto',
  },
  {
    id: 886103288,
    name: '虎牙直播HD-游戏互动直播平台',
    addType: 'auto',
  },
  {
    id: 1541571038,
    name: 'NTFS Read&Write -iBoysoft NTFS',
    addType: 'auto',
  },
  {
    id: 1594288016,
    name: 'Wink: Video Enhancer & Editor',
    addType: 'auto',
  },
  {
    id: 1600668116,
    name: '有道云笔记-笔记效率办公',
    addType: 'auto',
  },
  {
    id: 6443843900,
    name: 'iBar-Menubar icon control tool',
    addType: 'auto',
  },
  {
    id: 1442745175,
    name: '快帆加速器-海外回国音乐视频加速器',
    addType: 'auto',
  },
  {
    id: 1518518216,
    name: 'Paper - Live Wallpapers',
    addType: 'auto',
  },
  {
    id: 1659622164,
    name: 'VidHub -Video Library & Player',
    addType: 'auto',
  },
  {
    id: 1570563588,
    name: 'CalendarTask - Efficient life',
    addType: 'auto',
  },
  {
    id: 734383760,
    name: '每日英语听力 - 英语听力的最佳途径',
    addType: 'auto',
  },
  {
    id: 1507782672,
    name: 'Pixea',
    addType: 'auto',
  },
  {
    id: 1259223205,
    name: 'TunesMechanic for iTunes',
    addType: 'auto',
  },
  {
    id: 1630034110,
    name: 'Bob - 翻译和 OCR 工具',
    addType: 'auto',
  },
  {
    id: 1221250572,
    name: 'Xnip - Screenshot & Annotation',
    addType: 'auto',
  },
  {
    id: 1575178082,
    name: 'Max NTFS - NTFS Disk Helper',
    addType: 'auto',
  },
  {
    id: 1619925971,
    name: 'UPDF - PDF Editor with AI',
    addType: 'auto',
  },
  {
    id: 1395152179,
    name: '奇游加速器 - 全球游戏畅玩',
    addType: 'auto',
  },
  {
    id: 503039729,
    name: 'Fotor: AI Photo Editor, Design',
    addType: 'auto',
  },
  {
    id: 1476545828,
    name: 'MacDroid - Manager for Android',
    addType: 'auto',
  },
  {
    id: 6449164812,
    name: '打字通 - 打字练习软件',
    addType: 'auto',
  },
  {
    id: 1536071582,
    name: 'Omni Converter - Video & Audio',
    addType: 'auto',
  },
  {
    id: 1456235760,
    name: 'Live Wallpaper - 4K UHD',
    addType: 'auto',
  },
  {
    id: 1599191594,
    name: 'iBoysoft MagicMenu',
    addType: 'auto',
  },
  {
    id: 1665341561,
    name: 'flomo浮墨笔记 - AI 加持的便签备忘',
    addType: 'auto',
  },
  {
    id: 1133028347,
    name: 'Cleaner One Pro - Uninstaller',
    addType: 'auto',
  },
  {
    id: 1514073011,
    name: 'QuickFox-海外回国加速器追剧听歌游戏留学生必备',
    addType: 'auto',
  },
  {
    id: 1345035954,
    name: '穿梭Transocks-海外华人回国加速器',
    addType: 'auto',
  },
  {
    id: 1176074088,
    name: 'Termius — Modern SSH Client',
    addType: 'auto',
  },
  {
    id: 1335335588,
    name: 'Final Video Player - MKV & MP4',
    addType: 'auto',
  },
  {
    id: 1044549675,
    name: 'Elmedia Video Player',
    addType: 'auto',
  },
  {
    id: 1453504509,
    name: 'Dynamic Wallpaper Engine',
    addType: 'auto',
  },
  {
    id: 1449438542,
    name: 'BestZip Pro - Unzip RAR&Zip&7z',
    addType: 'auto',
  },
  {
    id: 470158793,
    name: 'Keka',
    addType: 'auto',
  },
  {
    id: 1550403011,
    name: 'iRightMouse Pro',
    addType: 'auto',
  },
  {
    id: 1611347086,
    name: 'iShot Pro-ScreenShot Recording',
    addType: 'auto',
  },
  {
    id: 6737150304,
    name: 'iBar Pro-Menubar control tool',
    addType: 'auto',
  },
  {
    id: 647505820,
    name: 'RAR Extractor - Unarchiver Pro',
    addType: 'auto',
  },
  {
    id: 6740171321,
    name: 'FastZipPro- RAR 7Z ZIP UnZip',
    addType: 'auto',
  },
  {
    id: 6742392236,
    name: 'ClashX Pro :Service Monitoring',
    addType: 'auto',
  },
  {
    id: 1343182480,
    name: '东方财富领先版-股票开户证券炒股理财',
    addType: 'auto',
  },
  {
    id: 6741806831,
    name: 'ClashX Pro - Dashboard manager',
    addType: 'auto',
  },
  {
    id: 494500492,
    name: '倒数日 · Days Matter for Desktop',
    addType: 'auto',
  },
  {
    id: 951718596,
    name: 'FoxCAD',
    addType: 'auto',
  },
  {
    id: 1551531632,
    name: 'AutoSwitchInput Pro',
    addType: 'auto',
  },
  {
    id: 6738742748,
    name: 'Puzzle Spider Solitaire.',
    addType: 'auto',
  },
  {
    id: 1469774098,
    name: 'QSpace',
    addType: 'auto',
  },
  {
    id: 1459028801,
    name: '爱五笔 - 五笔编码拆字大全',
    addType: 'auto',
  },
  {
    id: 1567442612,
    name: 'Qmenu',
    addType: 'auto',
  },
  {
    id: 1544655904,
    name: 'OmniReader Pro - AI Reader',
    addType: 'auto',
  },
  {
    id: 411643860,
    name: 'DaisyDisk',
    addType: 'auto',
  },
  {
    id: 1486274102,
    name: 'MPlayer X Pro',
    addType: 'auto',
  },
  {
    id: 461788075,
    name: 'Movist',
    addType: 'auto',
  },
  {
    id: 1218171533,
    name: 'Marklist - Manage Later Things',
    addType: 'auto',
  },
  {
    id: 6474505156,
    name: '照片处理工具 - 公务员考试报名确认照片审核',
    addType: 'auto',
  },
  {
    id: 510620098,
    name: 'MediaInfo',
    addType: 'auto',
  },
  {
    id: 432850619,
    name: 'FL Studio Mobile',
    addType: 'auto',
  },
  {
    id: 1642304143,
    name: 'SerialPort Debug Assistant Pro',
    addType: 'auto',
  },
  {
    id: 430798174,
    name: 'HazeOver • Distraction Dimmer™',
    addType: 'auto',
  },
  {
    id: 457622435,
    name: 'Yoink - Better Drag and Drop',
    addType: 'auto',
  },
  {
    id: 1606275031,
    name: 'Picture View: Image browser',
    addType: 'auto',
  },
  {
    id: 1555844307,
    name: 'MouseBoost Pro',
    addType: 'auto',
  },
  {
    id: 402380914,
    name: 'Eudic 欧路词典 增强版',
    addType: 'auto',
  },
  {
    id: 6738715418,
    name: 'STEP and IGES File Viewer',
    addType: 'auto',
  },
  {
    id: 977949232,
    name: 'Daygram : My Secret Diary',
    addType: 'auto',
  },
  {
    id: 847259925,
    name: 'SnailSVN: SVN for Finder',
    addType: 'auto',
  },
  {
    id: 389083586,
    name: 'MDict',
    addType: 'auto',
  },
  {
    id: 1516451072,
    name: 'Another Desktop Manager',
    addType: 'auto',
  },
  {
    id: 1482490089,
    name: 'Tampermonkey Classic',
    addType: 'auto',
  },
  {
    id: 6502828594,
    name: 'Template for Adobe illustrator',
    addType: 'auto',
  },
  {
    id: 1622138166,
    name: 'Change Video Speed for Safari',
    addType: 'auto',
  },
  {
    id: 1058266292,
    name: '妖股助手HD-优选短线强势股票',
    addType: 'auto',
  },
  {
    id: 1478540997,
    name: 'zClock - Clock & Countdown.',
    addType: 'auto',
  },
  {
    id: 1451273814,
    name: 'nPlayer',
    addType: 'auto',
  },
  {
    id: 1533946416,
    name: 'MyZip Pro-7z zip rar多线程极速压缩工具',
    addType: 'auto',
  },
  {
    id: 476566660,
    name: 'Earth 3D',
    addType: 'auto',
  },
  {
    id: 1325456420,
    name: 'Music Format Converter HQ',
    addType: 'auto',
  },
  {
    id: 668609870,
    name: 'Rar Sharp',
    addType: 'auto',
  },
  {
    id: 1381028448,
    name: '百读不厌 - 听书、看书神器',
    addType: 'auto',
  },
  {
    id: 1269984974,
    name: 'Markdown - Enjoy writing',
    addType: 'auto',
  },
  {
    id: 991247047,
    name: 'Flowchart Designer Premium',
    addType: 'auto',
  },
  {
    id: 689176796,
    name: 'Python Runner',
    addType: 'auto',
  },
  {
    id: 1265704574,
    name: 'Bandizip: Archiver',
    addType: 'auto',
  },
  {
    id: 1199716810,
    name: '五子棋打谱软件',
    addType: 'auto',
  },
  {
    id: 1385628859,
    name: 'Highlighter for Safari',
    addType: 'auto',
  },
  {
    id: 1521805728,
    name: 'iVault - secure your files',
    addType: 'auto',
  },
  {
    id: 1632395174,
    name: 'CleanMyMac X Multi-License',
    addType: 'auto',
  },
  {
    id: 775050502,
    name: 'American Sign Language',
    addType: 'auto',
  },
  {
    id: 904280696,
    name: 'Things 3',
    addType: 'auto',
  },
  {
    id: 1384206666,
    name: 'DemoPro - Screen Annotation',
    addType: 'auto',
  },
  {
    id: 464050545,
    name: 'Algodoo Physics',
    addType: 'auto',
  },
  {
    id: 808501572,
    name: 'Backgrounds',
    addType: 'auto',
  },
  {
    id: 1576064082,
    name: 'DeviceMirror -Screen Mirroring',
    addType: 'auto',
  },
  {
    id: 6670793258,
    name: 'LaTeX Editor Pro',
    addType: 'auto',
  },
  {
    id: 6474615359,
    name: 'MathCapture - Equation Editor',
    addType: 'auto',
  },
  {
    id: 1535623374,
    name: 'RenameBest: Rename in Batch',
    addType: 'auto',
  },
  {
    id: 1459663647,
    name: 'Virtual Location',
    addType: 'auto',
  },
  {
    id: 1214761683,
    name: 'iWall-Dynamic Desktop Engine',
    addType: 'auto',
  },
  {
    id: 796608673,
    name: 'Animal Typing',
    addType: 'auto',
  },
  {
    id: 966457795,
    name: 'Super PhotoCut',
    addType: 'auto',
  },
  {
    id: 1561303442,
    name: '人生必读百本书',
    addType: 'auto',
  },
  {
    id: 453164367,
    name: 'SystemPal',
    addType: 'auto',
  },
  {
    id: 1425997715,
    name: 'RAR Extractor Pro - Unzip',
    addType: 'auto',
  },
  {
    id: 431224317,
    name: 'Disk Drill Media Recovery',
    addType: 'auto',
  },
  {
    id: 1415704056,
    name: 'The App Locker -Best Lock Apps',
    addType: 'auto',
  },
  {
    id: 1204268874,
    name: 'Lyrics Editor',
    addType: 'auto',
  },
  {
    id: 609649363,
    name: 'Earth 3D - World Atlas',
    addType: 'auto',
  },
  {
    id: 1162194131,
    name: 'Easy New File',
    addType: 'auto',
  },
  {
    id: 6474506915,
    name: 'Sticker - Desktop Notepad',
    addType: 'auto',
  },
  {
    id: 1403919533,
    name: 'MWeb Pro',
    addType: 'auto',
  },
  {
    id: 6472813601,
    name: 'NinjaMouse - Your mouse master',
    addType: 'auto',
  },
  {
    id: 775737590,
    name: 'iA Writer',
    addType: 'auto',
  },
  {
    id: 1028838684,
    name: 'Artpaper: New Wallpapers Daily',
    addType: 'auto',
  },
  {
    id: 1102242042,
    name: 'Subtitler for fcpxml',
    addType: 'auto',
  },
  {
    id: 1445268016,
    name: 'Duplicate Cleaner',
    addType: 'auto',
  },
  {
    id: 937759555,
    name: 'Elmedia:universal video player',
    addType: 'auto',
  },
  {
    id: 1313164484,
    name: 'Distance and Area Measure',
    addType: 'auto',
  },
  {
    id: 1494552451,
    name: '小说大全',
    addType: 'auto',
  },
  {
    id: 1273980573,
    name: 'Best Data Recovery',
    addType: 'auto',
  },
  {
    id: 522706442,
    name: 'Sync Folders Pro',
    addType: 'auto',
  },
  {
    id: 6736433415,
    name: 'DICOM Viewer+',
    addType: 'auto',
  },
  {
    id: 1619982017,
    name: '五笔拆字',
    addType: 'auto',
  },
  {
    id: 532441535,
    name: 'Presentation Prompter',
    addType: 'auto',
  },
  {
    id: 1153435308,
    name: 'inddPreview',
    addType: 'auto',
  },
  {
    id: 417392270,
    name: 'MDB ACCDB Viewer',
    addType: 'auto',
  },
  {
    id: 1475051844,
    name: 'Filmage Converter Pro-MKV,AVI',
    addType: 'auto',
  },
  {
    id: 1441394270,
    name: 'Oka Unarchiver Pro - Unzip RAR',
    addType: 'auto',
  },
  {
    id: 6711333801,
    name: 'Live Crypto Prices, Charts',
    addType: 'auto',
  },
  {
    id: 1447010168,
    name: 'Music Dictionary - Music Terms',
    addType: 'auto',
  },
  {
    id: 658182498,
    name: 'Address Book to CSV',
    addType: 'auto',
  },
  {
    id: 6465744342,
    name: 'iBoot - StartupDisk shortcut',
    addType: 'auto',
  },
  {
    id: 1526912781,
    name: 'Rainbow Folder - Icon changer',
    addType: 'auto',
  },
  {
    id: 584393206,
    name: 'Cardiograph',
    addType: 'auto',
  },
  {
    id: 668331139,
    name: 'Backup Scheduler: Time Editor',
    addType: 'auto',
  },
  {
    id: 1261004863,
    name: 'Data Recovery EX',
    addType: 'auto',
  },
  {
    id: 6738346322,
    name: 'NaturalSpelling-自然拼读音标スペル',
    addType: 'auto',
  },
  {
    id: 1607691467,
    name: 'Auto Refresh Page',
    addType: 'auto',
  },
  {
    id: 6446939328,
    name: 'OmniZip Pro',
    addType: 'auto',
  },
  {
    id: 877615577,
    name: 'Serial',
    addType: 'auto',
  },
  {
    id: 1448326351,
    name: '数据恢复',
    addType: 'auto',
  },
]
