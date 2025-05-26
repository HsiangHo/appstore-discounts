<div align="center">
  <p style="font-size: 18px;">An open-source App Store discounts tracker built on GitHub Actions, supporting RSS, Telegram and DingTalk notifications</p>


English | [简体中文](https://github.com/eyelly-wu/appstore-discounts/blob/main/README_zh-CN.md)



[![github-stars](https://img.shields.io/github/stars/eyelly-wu/appstore-discounts?style=social "github-stars")](https://github.com/eyelly-wu/appstore-discounts/stargazers "github-stars")
[![last-commit](https://img.shields.io/github/last-commit/eyelly-wu/appstore-discounts/dev "last-commit")](https://github.com/eyelly-wu/appstore-discounts/commits/dev "last-commit")
[![github-issues](https://img.shields.io/github/issues-raw/eyelly-wu/appstore-discounts "github-issues")](https://github.com/eyelly-wu/appstore-discounts/issues "github-issues")


</div>
<details >
  <summary>Table of Contents</summary>

  [Vision](#vision)<br/>
  [Features](#features)<br/>
  [How to Subscribe](#how-to-subscribe)<br/>
  &emsp;&emsp;[RSS](#rss)<br/>
  &emsp;&emsp;[Telegram](#telegram)<br/>
  &emsp;&emsp;[DingTalk](#dingtalk)<br/>
  [Focus](#focus)<br/>
  [Operating Mechanism and Process](#operating-mechanism-and-process)<br/>
  [How to Contribute](#how-to-contribute)<br/>
  &emsp;&emsp;[1. Add  `Country or Region`  or  `App` ](#1-add--country-or-region--or--app)<br/>
  &emsp;&emsp;[2. Other](#2-other)<br/>
  [Star History](#star-history)<br/>
  [License](#license)<br/>

</details>


# Vision
Become the trusted savings assistant for  `App Store`  users, helping more people buy their favorite apps at discounted prices
# Features

* Support any  `App Store`  of any  `Country or Region`  (theoretically 🤔)
* Support tracking the price of  `App`  and  `In-App Purchases` 
* Support multiple ways to subscribe to discount information
   * RSS
   * Telegram
   * DingTalk
* Supports update tracking application lists based on application paid rankings
* Open source and free, anyone can contribute


# How to Subscribe

## RSS

|Code|Country or Region|RSS  Source|
|:-|:-|:-|
|cn|Mainland China|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/cn.xml|
|hk|Hong Kong, China|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/hk.xml|
|mo|Macao, China|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/mo.xml|
|tw|Taiwan, China|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/tw.xml|
|us|United States|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/us.xml|
|tr|Türkiye|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/tr.xml|

## Telegram
Click  [![telegram](https://img.shields.io/badge/Telegram-Channel-blue?style=flat&logo=telegram "telegram")](https://t.me/appstore_discounts "telegram-channel")  to Subscribe
## DingTalk
Click  [![dingtalk](https://img.alicdn.com/imgextra/i3/O1CN01WMvMRG1ks3Ixc9x1v_!!6000000004738-55-tps-32-32.svg "dingtalk")](https://qr.dingtalk.com/action/joingroup?code=v1,k1,o9TXTPxGRNhCmrTUa4cHymeJCIcRiimCsH4FqEnbEWU=&_dt_no_comment=1&origin=11 "dingtalk")  to Subscribe
# Focus
So far, we've covered `2` `Countries or Regions` and  `843` `Apps` <br />Push notifications will only be sent when there are discounts for the listed  `Country or Region`  and  `App`  below. If your  `Country or Region`  or favorite  `App`  is not on the list, feel free to add it<br />
>Special Note:  `❌`  in the table below indicates that the app does not exist in the current  `Country or Region` 's  `App Store` <br />If certain apps in the list frequently offer discounts to attract you to install and use them, and you successfully get attracted to install and use them, but end up uninstalling the app due to poor user experience. For such cases, feedback is welcome via  `Issue` . If an app receives more than  `10`  complaints, its discount information push notifications are likely to be banned<br />The application currently marked by  ~~Strikethrough~~  indicates that it has been banned from push notifications

|No.|App ID|Add Method|Mainland China（cn）|Hong Kong, China（hk）|Macao, China（mo）|Taiwan, China（tw）|United States（us）|Türkiye（tr）|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|
|843|1406710800|Automatic|❌||||Stardew Valley||
|842|294934058|Automatic|HotSchedules||||HotSchedules||
|841|388624839|Automatic|扫描全能王 - 官方出品1元畅用版，扫描PDF文件，文字识别||||CamScanner + | OCR Scanner||
|840|479516143|Automatic|❌||||Minecraft: Dream it, Build it!||
|839|525818839|Automatic|❌||||Plague Inc.||
|838|623592465|Automatic|❌||||Heads Up!||
|837|625334537|Automatic|❌||||Geometry Dash||
|836|768160271|Automatic|航旅纵横PRO-官方机票、值机火车票接送机免税酒店||||航旅纵横PRO-官方机票、值机火车票接送机免税酒店||
|835|932747118|Automatic|❌||||Shadowrocket||
|834|954724812|Automatic|同花顺至尊版-股票软件||||同花顺至尊版-股票软件||
|833|1093131935|Automatic|❌||||Incredibox||
|832|1118115766|Automatic|❌||||Bloons TD 6||
|831|1157863540|Automatic|泰拉瑞亚||||❌||
|830|1544722749|Automatic|拣爱||||❌||
|829|1625289361|Automatic|空气投篮||||AirBasketball - AuditoryAR||
|828|6448477521|Automatic|BiuBiuBiu - 空气枪||||PewPewPew - Fingergun||
|827|6742740688|Automatic|无声冲突||||❌||
|826|6737795387|Automatic|鬼谷八荒||||❌||
|825|6443786927|Automatic|全面憨憨战争模拟器||||❌||
|824|6502453075|Automatic|❌||||Balatro||
|823|6740349666|Automatic|❌||||Backyard Baseball '97||
|822|1453504509|Automatic|动态壁纸引擎Dynamic Wallpaper Engine||||Dynamic Wallpaper Engine||
|821|470158793|Automatic|Keka||||Keka||
|820|1449438542|Automatic|解优专业版 - 专业的 RAR 7Z ZIP 解压缩工具||||BestZip Pro - Unzip RAR&Zip&7z||
|819|6737150304|Automatic|iBar Pro-强大的菜单栏图标隐藏显示管理工具||||iBar Pro-Menubar control tool||
|818|647505820|Automatic|RAR Extractor - Unarchiver Pro||||RAR Extractor - Unarchiver Pro||
|817|6740171321|Automatic|FastZipPro-专业RAR 7Z ZIP解压缩软件||||FastZipPro- RAR 7Z ZIP UnZip||
|816|1551531632|Automatic|自动切换输入法专业版||||AutoSwitchInput Pro||
|815|1459028801|Automatic|爱五笔 - 五笔编码拆字大全||||爱五笔 - 五笔编码拆字大全||
|814|6474505156|Automatic|照片处理工具 - 公务员考试报名确认照片审核||||照片处理工具 - 公务员考试报名确认照片审核||
|813|510620098|Automatic|MediaInfo||||MediaInfo||
|812|411643860|Automatic|DaisyDisk||||DaisyDisk||
|811|1533946416|Automatic|MyZip Pro-7z zip rar多线程极速压缩工具||||MyZip Pro-7z zip rar多线程极速压缩工具||
|810|457622435|Automatic|Yoink - 拖放也可以轻松自如||||Yoink - Better Drag and Drop||
|809|1555844307|Automatic|右键助手专业版||||MouseBoost Pro||
|808|1425997715|Automatic|解压助手专业版 - RAR ZIP Unarchiver||||RAR Extractor Pro - Unzip||
|807|6474506915|Automatic|便签 - 桌面便利贴||||Sticker - Desktop Notepad||
|806|1524202457|Automatic|时间胶囊 · 记住重要日子||||TimeCapsule2||
|805|1616792360|Automatic|SQLiteExplorer||||SQLiteExplorer||
|804|1622138166|Automatic|Change Video Speed for Safari||||Change Video Speed for Safari||
|803|1478540997|Automatic|zClock - 置顶时钟, 倒计时, 网速显示||||zClock - Clock & Countdown.||
|802|1450345160|Automatic|Color Folder 文件夹改色助手||||Color Folder Master||
|801|1612054963|Automatic|AppUninstaller-功能强大的卸载软件||||AppUninstaller-Uninstall Apps||
|800|1298871299|Automatic|电子印章制作大师企业版||||电子印章制作大师企业版||
|799|1644030069|Automatic|Folder by Color Pro - 文件夹图标改色||||Folder by Color Pro - Folder||
|798|668609870|Automatic|Rar解压利器||||Rar Sharp||
|797|1381028448|Automatic|百读不厌 - 听书、看书神器||||百读不厌 - 听书、看书神器||
|796|1500167033|Automatic|AClock - 翻页时钟与倒计时||||AClock - Digital Flip Clock||
|795|1387780159|Automatic|网速 & 电池||||Network & Battery||
|794|6502931430|Automatic|DocFlex - 文档转换||||DocFlex - Document conversion||
|793|6445882848|Automatic|Boom3D-5.1 Audio for Netflix||||Boom3D-5.1 Audio for Netflix||
|792|1265704574|Automatic|Bandizip: 压缩和解压缩||||Bandizip: Archiver||
|791|1214639260|Automatic|SmallImage-图片压缩神器||||SmallImage-Smart Compression||
|790|1385628859|Automatic|Highlighter for Safari||||Highlighter for Safari||
|789|1521805728|Automatic|隐藏文件保险柜 iVault  - 私密文件夹||||iVault - secure your files||
|788|697942581|Automatic|Disk Graph||||Disk Graph||
|787|1435568266|Automatic|HiSerialPort||||HiSerialPort||
|786|420874236|Automatic|PDFOutliner||||PDFOutliner||
|785|6472044044|Automatic|Toolbox for Safari||||Toolbox for Safari||
|784|1632395174|Automatic|CleanMyMac X Multi-License||||CleanMyMac X Multi-License||
|783|1126745697|Automatic|System utility. 流量监控,电池管家,硬件检测||||System utility. monitor status||
|782|1214761683|Automatic|iWall-动态壁纸，动态桌面引擎||||iWall-Dynamic Desktop Engine||
|781|453164367|Automatic|系统助手||||SystemPal||
|780|431224317|Automatic|Disk Drill Media Recovery||||Disk Drill Media Recovery||
|779|1415704056|Automatic|超级应用锁 - 密码加密||||The App Locker -Best Lock Apps||
|778|1162194131|Automatic|Easy New File||||Easy New File||
|777|6472813601|Automatic|NinjaMouse - 鼠标加速神器||||NinjaMouse - Your mouse master||
|776|1445268016|Automatic|清理重复文件||||Duplicate Cleaner||
|775|1494552451|Automatic|小说大全||||小说大全||
|774|1273980573|Automatic|Best Data Recovery||||Best Data Recovery||
|773|1619982017|Automatic|五笔拆字||||五笔拆字||
|772|1153435308|Automatic|inddPreview||||inddPreview||
|771|1475051844|Automatic|Filmage Converter Pro-视频转换&合并||||Filmage Converter Pro-MKV,AVI||
|770|1441394270|Automatic|Oka解压专家pro||||Oka Unarchiver Pro - Unzip RAR||
|769|6711333801|Automatic|实时加密货币价格、图表||||Live Crypto Prices, Charts||
|768|658182498|Automatic|苹果通讯录/csv转换工具-Address Book to CSV||||Address Book to CSV||
|767|6465744342|Automatic|iBoot - StartupDisk shortcut||||iBoot - StartupDisk shortcut||
|766|1526912781|Automatic|彩虹文件夹 - 文件夹图标换颜色图片||||Rainbow Folder - Icon changer||
|765|668331139|Automatic|Backup Scheduler: Time Editor||||Backup Scheduler: Time Editor||
|764|1261004863|Automatic|Data Recovery EX||||Data Recovery EX||
|763|877615577|Automatic|Serial||||Serial||
|762|6739523960|Automatic|允许 Safari 右键单击||||Allow Right Click for Safari||
|761|6444238780|Automatic|桌面倒计时-生活好帮手||||Countdown Desktop||
|760|6739428883|Automatic|TTSLite||||TTSLite||
|759|402569179|Automatic|Find Any File (FAF)||||Find Any File (FAF)||
|758|6745083093|Automatic|Coolmuster HEIC Converter||||Coolmuster HEIC Converter||
|757|1602821771|Automatic|Renamer - 批量重命名你的文件||||Renamer||
|756|471561604|Automatic|Mr. Zipper - 7Z RAR压缩解压缩||||Mr. Zipper - 7Z RAR 7ZIP||
|755|1025822138|Automatic|iStatistica||||iStatistica||
|754|524576324|Automatic|Smart Zipper Pro: Zip,Rar压缩解压缩||||Smart Zipper Pro: Rar, 7z, Zip||
|753|919005729|Automatic|刻录大师||||Burn||
|752|823528286|Automatic|Folx GO+||||Folx GO+||
|751|6444789815|Automatic|记事本++||||记事本++||
|750|884018914|Automatic|Zoоm||||Zoоm||
|749|406178496|Automatic|KPlayer||||KPlayer||
|748|1589912595|Automatic|JY字幕君 SRT导出助手 Lite||||JY Subtitle SRT Export Lite||
|747|1181029289|Automatic|翻页时钟专业版 - 全屏数字悬浮显示锁屏桌面灵动岛小组件||||Flip Clock Pro - time widgets||
|746|815333099|Automatic|Foldery||||Foldery||
|745|779114299|Automatic|CAD Viewer 3D||||CAD Viewer 3D||
|744|736168905|Automatic|DBFView||||DBFView||
|743|1357413437|Automatic|LightApp-轻应用浏览器||||LightApp-轻应用浏览器||
|742|1540733755|Automatic|Find Device:   查找设备：我的耳塞，电话，气垫||||Find Device - bluetooth finder||
|741|1328847392|Automatic|进程监视器 - Process Monitor||||Process Monitor||
|740|1593045116|Automatic|Focus & ADHD Reading - Glide||||Focus & ADHD Reading - Glide||
|739|1463966933|Automatic|系统助理: CPU & 内存||||iStats X: CPU & Memory||
|738|1447778660|Automatic|iStatistica Pro||||iStatistica Pro||
|737|1568840488|Automatic|AutoClicker - 自动按键||||AutoClicker - Assist click||
|736|1538700349|Automatic|解压助手 - 专业版 (Rar 7z Zip 解压缩工具)||||The Extractor Master||
|735|419330170|Automatic|Moom Classic||||Moom Classic||
|734|486626129|Automatic|Folder Tidy||||Folder Tidy||
|733|1389745743|Automatic|万能下载器||||Everything Downloader||
|732|1595306197|Automatic|Macaque||||Macaque||
|731|445512770|Automatic|Disk Diet||||Disk Diet||
|730|456609775|Automatic|Window Tidy||||Window Tidy||
|729|6450939701|Automatic|Chat One - DeepSeek AI 聊天写作助手||||Chat One - AI Chat Box||
|728|1565629813|Automatic|FastZip - 专业的 RAR 7Z ZIP 解压缩工具||||FastZip - RAR 7Z ZIP UnZip||
|727|1181028777|Automatic|翻页时钟 - 全屏数字悬浮显示待机时间锁屏桌面小组件||||Flip Clock - digital widgets||
|726|1488071784|Automatic|壁纸精灵 - 桌面壁纸，4k高清||||Wallpapers X - 4K Wallpaper||
|725|1552826194|Automatic|我的壁纸 - 良心动态壁纸||||iWallpaper - Live Wallpaper||
|724|6511220682|Automatic|CleanMyApp - 应用程序卸载助手||||CleanMyApp - Uninstaller||
|723|1497428978|Automatic|超级右键-iRightMouse||||iRightMouse||
|722|1541571038|Automatic|NTFS磁盘读写 - 赤友NTFS助手||||NTFS Read&Write -iBoysoft NTFS||
|721|1518518216|Automatic|Paper 壁纸 - 超高清4K动态壁纸, 桌面壁纸||||Paper - Live Wallpapers||
|720|6443843900|Automatic|iBar-强大的菜单栏图标管理工具||||iBar-Menubar icon control tool||
|719|1442745175|Automatic|快帆加速器-海外回国音乐视频加速器||||快帆加速器-海外回国音乐视频加速器||
|718|1630034110|Automatic|Bob - 翻译和 OCR 工具||||Bob - 翻译和 OCR 工具||
|717|1395152179|Automatic|奇游加速器 - 全球游戏畅玩||||奇游加速器 - 全球游戏畅玩||
|716|1575178082|Automatic|Max NTFS - NTFS磁盘读写助手||||Max NTFS - NTFS Disk Helper||
|715|1476545828|Automatic|MacDroid - 安卓版管理器||||MacDroid - Manager for Android||
|714|1456235760|Automatic|花見动态壁纸 - 4K超高清||||Live Wallpaper - 4K UHD||
|713|1599191594|Automatic|超级的右键助手 - 赤友右键超人||||iBoysoft MagicMenu||
|712|1514073011|Automatic|QuickFox-海外回国加速器追剧听歌游戏留学生必备||||QuickFox-海外回国加速器追剧听歌游戏留学生必备||
|711|1133028347|Automatic|Cleaner One Pro - Uninstaller||||Cleaner One Pro - Uninstaller||
|710|6450397515|Automatic|录音转文字-语音转文字助手||||Transcribe & Speech to text||
|709|1598771178|Automatic|DeviceMirror Lite -无线手机投屏||||DeviceMirror Lite -Screen Cast||
|708|1669005649|Automatic|TXT 阅读器 - 畅享版||||TXT Reader + AI Assistant||
|707|1525349531|Automatic|Snap 截图+贴图||||Snap Screenshot - Snip & Paste||
|706|646295438|Automatic|RAR Extractor - Unarchiver||||RAR Extractor - Unarchiver||
|705|6452726154|Automatic|Ultra VPN - VPN and Wifi Proxy||||Ultra VPN - VPN and Wifi Proxy||
|704|1521133201|Automatic|Speed Player for Safari||||Speed Player for Safari||
|703|1298486723|Automatic|FileZilla Pro - FTP and Cloud||||FileZilla Pro - FTP and Cloud||
|702|1081480270|Automatic|音频转换器 - MP3转换器 □||||The Audio Converter||
|701|1244625890|Automatic|傲软投屏(ApowerMirror)-无线投屏助手||||ApowerMirror- Screen Mirroring||
|700|1068435535|Automatic|Antivirus One - Virus Cleaner||||Antivirus One - Virus Cleaner||
|699|1576794157|Automatic|飞火动态壁纸-4k超清视频桌面主题壁纸引擎||||飞火动态壁纸-4k超清视频桌面主题壁纸引擎||
|698|1455463454|Automatic|WiFi 测网速 - Speedtest测速助手||||WiFi Speed Test Tools||
|697|1441507725|Automatic|解压缩专家Oka - 最好的zip rar 7z文件解压工具||||Oka Unarchiver - Unzip ZIP RAR||
|696|1535136051|Automatic|解压 - RAR ZIP 7Z 解压和压缩||||RAR Extractor - Unzip File||
|695|1500706402|Automatic|花生壳||||PhDDNS||
|694|1486294815|Automatic|阿里云网络客户端||||Aliyun Network Client||
|693|1637557903|Automatic|即刻转换 - 万能小视频音频批量格式转码工厂||||Video Converter X2||
|692|6737146353|Automatic|FoxVPN – 华人全球网络加速器||||FoxVPN – Fast & World NetWork||
|691|1543649099|Automatic|超级克隆大师 - 同步或恢复手机,电脑,平板的数据和文件||||Clone My Data-Sync&Backup Data||
|690|1485671150|Automatic|VPN -  快滚 全球网络加速||||VPN -  快滚 全球网络加速||
|689|1570653446|Automatic|Focus Video - 视频压缩和格式转换器||||Focus Video - Video Converter||
|688|740355970|Automatic|EaseUS Data Recovery Wizard||||Data Recovery Expert||
|687|1606741874|Automatic|AConverter-全能音频转换,编辑,MP3转换器||||AConverter - Audio Converter||
|686|6475027113|Automatic|Deep Think智能助手： AI智能助理||||Deep Think智能助手： AI智能助理||
|685|1018301773|Automatic|AdBlocker Pro: Safari浏览器的广告拦截器||||AdBlock Pro for Safari||
|684|1551462255|Automatic|右键助手 - 您的好帮手||||MouseBoost||
|683|1466014165|Automatic|嗨格式录屏大师 - 专业电脑录像软件||||RecMaster Screen Recorder||
|682|1613340764|Automatic|屏幕检测 - 专业的显示屏检测工具||||PixelsTester - Test Monitors||
|681|1502255391|Automatic|Color Folder - Custom Icons||||Color Folder - Custom Icons||
|680|1467607774|Automatic|NCM转换器 - 转MP3||||Smart Audio Editor - ID3||
|679|1478202069|Automatic|幕连-简单的投屏工具||||Screen Mirroring: LetsView||
|678|6448913901|Automatic|全能AI - AI视频、绘画、特效、音乐、聊天、写作、数字人||||全能AI - 图生视频、文生视频、AI写歌作曲、AI智能助理||
|677|1476640331|Automatic|读写客||||读写客||
|676|787142064|Automatic|VSD Viewer & VSD Converter||||VSD Viewer & VSD Converter||
|675|1499250688|Automatic|壁纸管家 - 4K超高清主题桌面壁纸||||Wallpaper - HD Wallpapers||
|674|1642304143|Automatic|串口(网络)调试助手 Pro||||SerialPort Debug Assistant Pro||
|673|1516451072|Automatic|Another Desktop Manager||||Another Desktop Manager||
|672|847259925|Automatic|SnailSVN 专业版：与访达集成的 SVN 客户端||||SnailSVN: SVN for Finder||
|671|689176796|Automatic|Python Runner||||Python Runner||
|670|1459663647|Automatic|虚拟定位||||Virtual Location||
|669|417392270|Automatic|MDB ACCDB Viewer||||MDB ACCDB Viewer||
|668|847260112|Automatic|SnailGit 专业版：与访达集成的 Git 客户端||||SnailGit: Git for Finder||
|667|498370702|Automatic|RegExRX||||RegExRX||
|666|1236813619|Automatic|右键菜单专业版（Context Menu）||||Context Menu||
|665|955297617|Automatic|CodeRunner 4||||CodeRunner 4||
|664|1400977081|Automatic|IPYNB Viewer + Editor||||IPYNB Viewer + Editor||
|663|948079084|Automatic|FlashFTP - 高效FTP/SFTP文件传输客户端||||FlashFTP - Swift FTP/SFTP Client||
|662|6504210872|Automatic|DartShell - SSH & SFTP||||DartShell - SSH & SFTP||
|661|1063631769|Automatic|Medis - GUI for Redis||||Medis - GUI for Redis||
|660|507135296|Automatic|IconKit||||IconKit||
|659|429449079|Automatic|Patterns - The Regex App||||Patterns - The Regex App||
|658|6446094097|Automatic|AI 文件翻译器（文件数量不限||||AI File Translator (1 to >100)||
|657|1054575495|Automatic|JavaPoint||||JavaPoint||
|656|841285201|Automatic|Haskell||||Haskell||
|655|567740330|Automatic|JSON Editor||||JSON Editor||
|654|1157491961|Automatic|PLIST Editor||||PLIST Editor||
|653|913158085|Automatic|Expressions||||Expressions||
|652|1105845111|Automatic|Xversion||||Xversion||
|651|641027709|Automatic|Color Picker||||Color Picker||
|650|823961613|Automatic|SSH Copy||||SSH Copy||
|649|1067646949|Automatic|New Terminal Here||||New Terminal Here||
|648|595177179|Automatic|icns Tool||||icns Tool||
|647|490499048|Automatic|bmGlyph||||bmGlyph||
|646|556381974|Automatic|IconFly||||IconFly||
|645|499768540|Automatic|Power JSON Editor||||Power JSON Editor||
|644|1554235898|Automatic|Peek — A Quick Look Extension||||Peek — A Quick Look Extension||
|643|1224934068|Automatic|iTer - IT学习、求职面试必备||||iTer - IT learning||
|642|1615269303|Automatic|iCon - Create And Resize Icons||||iCon - Create And Resize Icons||
|641|686855602|Automatic|PHP Runner||||PHP Runner||
|640|1511935951|Automatic|BetterJSON for Safari||||BetterJSON for Safari||
|639|1106867065|Automatic|Svgsus||||Svgsus||
|638|945397020|Automatic|Run Python||||Run Python||
|637|536559203|Automatic|FlashCode - SWF to HTML5 and Objective-C converter||||FlashCode - SWF to HTML5 and Objective-C converter||
|636|1485436674|Automatic|A Companion for SwiftUI||||A Companion for SwiftUI||
|635|875264768|Automatic|Node.js HandBook||||Node.js HandBook||
|634|1360203022|Automatic|Socket-tcp/udp tool||||Socket-tcp/udp tool||
|633|417074533|Automatic|Synalyze It!||||Synalyze It!||
|632|513995545|Automatic|MDB Tool - For Microsoft Access||||MDB Tool - For Microsoft Access||
|631|1400050251|Automatic|Pythonic||||Pythonic||
|630|906185173|Automatic|PacketSender||||PacketSender||
|629|719577577|Automatic|JarPackager||||JarPackager||
|628|803736440|Automatic|Hex Edit Pro||||Hex Edit Pro||
|627|1410608230|Automatic|SQLite数据管理大师||||SQLiteMaster||
|626|685191052|Automatic|SVN 服务器||||SVN Server||
|625|1104615718|Automatic|HelloWeb||||HelloWeb||
|624|1024903185|Automatic|TextLab||||TextLab||
|623|946677126|Automatic|PDF to XLSX Master||||PDF to XLSX Master||
|622|414234859|Automatic|DropDMG||||DropDMG||
|621|734258109|Automatic|Watchdog for Xcode||||Watchdog for Xcode||
|620|535348544|Automatic|Folder Compare||||Folder Compare||
|619|1268616588|Automatic|Localizable - 翻译文件工具||||Localizable - translation file||
|618|822334407|Automatic|TCP Client||||TCP Client||
|617|415087689|Automatic|PHP Code Tester||||PHP Code Tester||
|616|1148208665|Automatic|ThemeInstaller||||ThemeInstaller||
|615|478570084|Automatic|CompareMerge||||CompareMerge||
|614|1159371870|Automatic|Code School for Xcode PRO - Learn Coding for iOS||||Code School for Xcode PRO - Learn Coding for iOS||
|613|1579236127|Automatic|UMLBoard||||UMLBoard||
|612|1054670022|Automatic|Adaptivity (A)||||Adaptivity (A)||
|611|1458267370|Automatic|HTTP Server - 局域网服务测试工具||||HTTP Server - LAN Debug Tool||
|610|1434151360|Automatic|PowerRightMenu - 快速新建文件||||PowerRightMenu - Fast New File||
|609|574356166|Automatic|CrossFTP Pro - FTP Client||||CrossFTP Pro - FTP Client||
|608|640034674|Automatic|AnyMP4 AVCHD Converter Player||||AnyMP4 AVCHD Converter Player||
|607|689184215|Automatic|JRunner for Java||||JRunner for Java||
|606|670032670|Automatic|JS King||||JS King||
|605|1589635432|Automatic|EasyPlantUML||||EasyPlantUML||
|604|1567045405|Automatic|golog||||Golog||
|603|689183220|Automatic|JS Runner||||JS Runner||
|602|1516154713|Automatic|推送通知-测试器||||Push Notification - Tester||
|601|467620393|Automatic|JavaScript Condenser||||JavaScript Condenser||
|600|689178925|Automatic|Perl Runner||||Perl Runner||
|599|1396408074|Automatic|PrettyJSON for Xcode||||PrettyJSON for Xcode||
|598|1244392031|Automatic|CL!ng||||CL!ng||
|597|1137451860|Automatic|App 预览视频转换工具||||App Preview Video Converter||
|596|1013592748|Automatic|C Sharp||||C Sharp||
|595|775920262|Automatic|unRAR Pro||||unRAR Pro||
|594|1576144037|Automatic|mSocket - 能传文件的Socket工具||||mSocket - Transfer large files||
|593|689175950|Automatic|Node Runner||||Node Runner||
|592|552407238|Automatic|myPoint Coordinates||||myPoint Coordinates||
|591|402383384|Automatic|Base - SQLite Editor||||Base - SQLite Editor||
|590|433586919|Automatic|CSVEdit||||CSVEdit||
|589|1076110314|Automatic|Smart JSON Viewer||||Smart JSON Viewer||
|588|1134593405|Automatic|EncryptTools||||EncryptTools||
|587|475193367|Automatic|Synalyze It! Pro||||Synalyze It! Pro||
|586|1167060791|Automatic|Import||||Import||
|585|1128674367|Automatic|MySQL Database Optimizer||||MySQL Database Optimizer||
|584|1604145760|Automatic|TinyPNG图片压缩||||Picture Compresser||
|583|1367025713|Automatic|Sprite 1-2-3||||Sprite 1-2-3||
|582|1070488538|Automatic|Icons Maker||||Icons Maker||
|581|413612688|Automatic|Icons||||Icons||
|580|913523893|Automatic|QuartzCode||||QuartzCode||
|579|477163052|Automatic|Linguan||||Linguan||
|578|1565766176|Automatic|Power YAML Editor||||Power YAML Editor||
|577|1479641484|Automatic|Fireworks - Effects Editor||||Fireworks - Effects Editor||
|576|1176074088|Automatic|Termius — Modern SSH Client||||Termius — Modern SSH Client||
|575|1102004240|Automatic|iHosts - /etc/hosts 编辑器||||iHosts - /etc/hosts editor||
|574|1507890049|Automatic|Pixeur - 取色器||||Pixeur - Screen Color Picker||
|573|6504274426|Automatic|termcc - SSH & SFTP Client||||termcc - SSH & SFTP Client||
|572|1491764008|Automatic|红色-Redis的UI||||Red 2 - UI for Redis||
|571|985614903|Automatic|SQLPro Studio||||SQLPro Studio||
|570|1459748650|Automatic|CompareMerge2||||CompareMerge2||
|569|1475741280|Automatic|SSH Client - Terminal, Telnet||||SSH Client - Terminal, Telnet||
|568|828466809|Automatic|SQLPro for MSSQL||||SQLPro for MSSQL||
|567|1547933097|Automatic|Socket调试器||||Socket Debugger||
|566|1516553045|Automatic|啜色||||Colorsip||
|565|1502044457|Automatic|Whisk||||Whisk||
|564|1533756032|Automatic|DevUtils.app||||DevUtils.app||
|563|1147023879|Automatic|App Image Kit - 应用的图像资源批量生成助手||||App Image Kit||
|562|1469182443|Automatic|SnipperApp 2||||SnipperApp 2||
|561|1570789972|Automatic|ESP32 WiFi OTA||||ESP32 WiFi OTA||
|560|1584637545|Automatic|Translate APP - 项目本地化||||Translate APP-Project Localize||
|559|1516378834|Automatic|推送通知-客户端||||Push Notification - Client||
|558|547166701|Automatic|百度网盘||||百度网盘||
|557|1014945607|Automatic|优酷视频-嘘国王在冬眠 全网独播||||优酷视频-嘘国王在冬眠 全网独播||
|556|1231336508|Automatic|腾讯视频-折腰 全网独播||||腾讯视频-折腰 全网独播||
|555|6741096204|Automatic|Deep Think AI：询问 AI 聊天机器人||||Think AI: Ask Chatbot Anything||
|554|1012296988|Automatic|爱奇艺-人生若如初见 全网独播||||爱奇艺-人生若如初见 全网独播||
|553|1327661892|Automatic|Xmind：思维导图||||Xmind: Mind Map||
|552|1588231633|Automatic|美图秀秀 - AI修图与设计工具集||||Meitu-AI Photo Editor & Design||
|551|1450246547|Automatic|解优 - 专业的 RAR 7Z ZIP 解压缩工具||||BestZip - Unarchive RAR&7Z&ZIP||
|550|1570349123|Automatic|Openly for Chrome and Firefox||||Openly for Chrome and Firefox||
|549|491854842|Automatic|网易有道翻译||||Youdao Translate||
|548|1247341465|Automatic|同花顺-股票炒股软件||||同花顺-股票炒股软件||
|547|1484905765|Automatic|CAD快速看图 - 天正全专业||||Fast CAD Reader||
|546|747648890|Automatic|Telegram||||Telegram||
|545|6450939701|Automatic|Chat One - DeepSeek AI 聊天写作助手||||Chat One - AI Chat Box||
|544|1565629813|Automatic|FastZip - 专业的 RAR 7Z ZIP 解压缩工具||||FastZip - RAR 7Z ZIP UnZip||
|543|1592987853|Automatic|录屏专家Omi-屏幕录制编辑软件||||Screen Recorder by Omi||
|542|1488071784|Automatic|壁纸精灵 - 桌面壁纸，4k高清||||Wallpapers X - 4K Wallpaper||
|541|1181028777|Automatic|翻页时钟 - 全屏数字悬浮显示待机时间锁屏桌面小组件||||Flip Clock - digital widgets||
|540|1485844094|Automatic|iShot-优秀的截图贴图录屏录音OCR翻译取色标注工具||||iShot-ScreenShot Recording OCR||
|539|6503169843|Automatic|人工 智能 AI Chatbot : AI 聊天 助手||||AI Chatbot : Ask AI Assistant||
|538|1552826194|Automatic|我的壁纸 - 良心动态壁纸||||iWallpaper - Live Wallpaper||
|537|6511220682|Automatic|CleanMyApp - 应用程序卸载助手||||CleanMyApp - Uninstaller||
|536|966085870|Automatic|滴答清单: 专注、日历、提醒事项和时间管理番茄钟||||TickTick:To-Do List, Calendar||
|535|1144400433|Automatic|东方财富经典版-股票开户证券炒股理财||||东方财富经典版-股票开户证券炒股理财||
|534|1497428978|Automatic|超级右键-iRightMouse||||iRightMouse||
|533|886103288|Automatic|虎牙直播HD-游戏互动直播平台||||虎牙直播HD-游戏互动直播平台||
|532|1541571038|Automatic|NTFS磁盘读写 - 赤友NTFS助手||||NTFS Read&Write -iBoysoft NTFS||
|531|1594288016|Automatic|Wink - 画质修复||||Wink: Video Enhancer & Editor||
|530|1600668116|Automatic|有道云笔记-笔记效率办公||||有道云笔记-笔记效率办公||
|529|6443843900|Automatic|iBar-强大的菜单栏图标管理工具||||iBar-Menubar icon control tool||
|528|1442745175|Automatic|快帆加速器-海外回国音乐视频加速器||||快帆加速器-海外回国音乐视频加速器||
|527|1518518216|Automatic|Paper 壁纸 - 超高清4K动态壁纸, 桌面壁纸||||Paper - Live Wallpapers||
|526|1659622164|Automatic|VidHub - 高清影片视频播放器，快速播放云盘网盘||||VidHub -Video Library & Player||
|525|1570563588|Automatic|日历清单 - 拒绝拖延 效率人生||||CalendarTask - Efficient life||
|524|734383760|Automatic|每日英语听力 - 英语听力的最佳途径||||每日英语听力 - 英语听力的最佳途径||
|523|1507782672|Automatic|Pixea||||Pixea||
|522|1259223205|Automatic|TunesMechanic for iTunes||||TunesMechanic for iTunes||
|521|1630034110|Automatic|Bob - 翻译和 OCR 工具||||Bob - 翻译和 OCR 工具||
|520|1221250572|Automatic|Xnip -  截图 & 标注||||Xnip - Screenshot & Annotation||
|519|1575178082|Automatic|Max NTFS - NTFS磁盘读写助手||||Max NTFS - NTFS Disk Helper||
|518|1619925971|Automatic|UPDF - 新一代 AI 智能 PDF 编辑器||||UPDF - PDF Editor with AI||
|517|1395152179|Automatic|奇游加速器 - 全球游戏畅玩||||奇游加速器 - 全球游戏畅玩||
|516|503039729|Automatic|Fotor图片编辑器||||Fotor: AI Photo Editor, Design||
|515|1476545828|Automatic|MacDroid - 安卓版管理器||||MacDroid - Manager for Android||
|514|6449164812|Automatic|打字通 - 打字练习软件||||打字通 - 打字练习软件||
|513|1536071582|Automatic|Omni Converter 全能视频音频格式转换器||||Omni Converter - Video & Audio||
|512|1456235760|Automatic|花見动态壁纸 - 4K超高清||||Live Wallpaper - 4K UHD||
|511|1599191594|Automatic|超级的右键助手 - 赤友右键超人||||iBoysoft MagicMenu||
|510|1665341561|Automatic|flomo浮墨笔记 - AI 加持的便签备忘||||flomo浮墨笔记 - AI 加持的便签备忘||
|509|1133028347|Automatic|Cleaner One Pro - Uninstaller||||Cleaner One Pro - Uninstaller||
|508|1514073011|Automatic|QuickFox-海外回国加速器追剧听歌游戏留学生必备||||QuickFox-海外回国加速器追剧听歌游戏留学生必备||
|507|1345035954|Automatic|穿梭Transocks-海外华人回国加速器||||穿梭Transocks-海外华人回国加速器||
|506|1176074088|Automatic|Termius — Modern SSH Client||||Termius — Modern SSH Client||
|505|1335335588|Automatic|全能视频播放器 - 高清音频视频播放器||||Final Video Player - MKV & MP4||
|504|1044549675|Automatic|Elmedia Video Player||||Elmedia Video Player||
|503|1453504509|Automatic|动态壁纸引擎Dynamic Wallpaper Engine||||Dynamic Wallpaper Engine||
|502|1449438542|Automatic|解优专业版 - 专业的 RAR 7Z ZIP 解压缩工具||||BestZip Pro - Unzip RAR&Zip&7z||
|501|470158793|Automatic|Keka||||Keka||
|500|1550403011|Automatic|超级右键专业版||||iRightMouse Pro||
|499|1611347086|Automatic|iShot Pro-专业的截图贴图录屏录音OCR翻译取色工具||||iShot Pro-ScreenShot Recording||
|498|6737150304|Automatic|iBar Pro-强大的菜单栏图标隐藏显示管理工具||||iBar Pro-Menubar control tool||
|497|647505820|Automatic|RAR Extractor - Unarchiver Pro||||RAR Extractor - Unarchiver Pro||
|496|6740171321|Automatic|FastZipPro-专业RAR 7Z ZIP解压缩软件||||FastZipPro- RAR 7Z ZIP UnZip||
|495|6742392236|Automatic|ClashX Pro :Service Monitoring||||ClashX Pro :Service Monitoring||
|494|1343182480|Automatic|东方财富领先版-股票开户证券炒股理财||||东方财富领先版-股票开户证券炒股理财||
|493|6741806831|Automatic|ClashX Pro - Dashboard manager||||ClashX Pro - Dashboard manager||
|492|494500492|Automatic|倒数日 · Days Matter for Desktop||||倒数日 · Days Matter for Desktop||
|491|951718596|Automatic|CAD迷你画图||||FoxCAD||
|490|1551531632|Automatic|自动切换输入法专业版||||AutoSwitchInput Pro||
|489|6738742748|Automatic|益智蜘蛛纸牌||||Puzzle Spider Solitaire.||
|488|1469774098|Automatic|QSpace||||QSpace||
|487|1459028801|Automatic|爱五笔 - 五笔编码拆字大全||||爱五笔 - 五笔编码拆字大全||
|486|1567442612|Automatic|Qmenu||||Qmenu||
|485|1544655904|Automatic|OmniReader Pro - 全能阅读管理专家||||OmniReader Pro - AI Reader||
|484|411643860|Automatic|DaisyDisk||||DaisyDisk||
|483|1486274102|Automatic|MPlayer X Pro||||MPlayer X Pro||
|482|461788075|Automatic|Movist||||Movist||
|481|1218171533|Automatic|Marklist 妙记 - 稍后阅读、笔记、待办、搜索和收藏||||Marklist - Manage Later Things||
|480|6474505156|Automatic|照片处理工具 - 公务员考试报名确认照片审核||||照片处理工具 - 公务员考试报名确认照片审核||
|479|510620098|Automatic|MediaInfo||||MediaInfo||
|478|432850619|Automatic|FL Studio Mobile||||FL Studio Mobile||
|477|1642304143|Automatic|串口(网络)调试助手 Pro||||SerialPort Debug Assistant Pro||
|476|430798174|Automatic|HazeOver • 干扰调节器||||HazeOver • Distraction Dimmer™||
|475|457622435|Automatic|Yoink - 拖放也可以轻松自如||||Yoink - Better Drag and Drop||
|474|1606275031|Automatic|Picture View: 图片浏览器||||Picture View: Image browser||
|473|1555844307|Automatic|右键助手专业版||||MouseBoost Pro||
|472|402380914|Automatic|Eudic 欧路词典 增强版||||Eudic 欧路词典 增强版||
|471|6738715418|Automatic|STEP 和 IGES 文件查看器||||STEP and IGES File Viewer||
|470|977949232|Automatic|Daygram - 密码日记 / 很简单时间记录日记||||Daygram : My Secret Diary||
|469|847259925|Automatic|SnailSVN 专业版：与访达集成的 SVN 客户端||||SnailSVN: SVN for Finder||
|468|389083586|Automatic|MDict||||MDict||
|467|1516451072|Automatic|Another Desktop Manager||||Another Desktop Manager||
|466|1482490089|Automatic|Tampermonkey Classic||||Tampermonkey Classic||
|465|6502828594|Automatic|Template for Adobe illustrator||||Template for Adobe illustrator||
|464|1622138166|Automatic|Change Video Speed for Safari||||Change Video Speed for Safari||
|463|1058266292|Automatic|妖股助手HD-优选短线强势股票||||妖股助手HD-优选短线强势股票||
|462|1478540997|Automatic|zClock - 置顶时钟, 倒计时, 网速显示||||zClock - Clock & Countdown.||
|461|1451273814|Automatic|nPlayer||||nPlayer||
|460|1533946416|Automatic|MyZip Pro-7z zip rar多线程极速压缩工具||||MyZip Pro-7z zip rar多线程极速压缩工具||
|459|476566660|Automatic|三维地球||||Earth 3D||
|458|1325456420|Automatic|音乐格式互换 --- NCM转换器，MP3转码器||||Music Format Converter HQ||
|457|668609870|Automatic|Rar解压利器||||Rar Sharp||
|456|1381028448|Automatic|百读不厌 - 听书、看书神器||||百读不厌 - 听书、看书神器||
|455|1269984974|Automatic|Markdown - 专注写作||||Markdown - Enjoy writing||
|454|991247047|Automatic|流程图编辑器高级版||||Flowchart Designer Premium||
|453|689176796|Automatic|Python Runner||||Python Runner||
|452|1265704574|Automatic|Bandizip: 压缩和解压缩||||Bandizip: Archiver||
|451|1199716810|Automatic|五子棋打谱软件||||五子棋打谱软件||
|450|1385628859|Automatic|Highlighter for Safari||||Highlighter for Safari||
|449|1521805728|Automatic|隐藏文件保险柜 iVault  - 私密文件夹||||iVault - secure your files||
|448|1632395174|Automatic|CleanMyMac X Multi-License||||CleanMyMac X Multi-License||
|447|775050502|Automatic|American Sign Language||||American Sign Language||
|446|904280696|Automatic|Things 3||||Things 3||
|445|1384206666|Automatic|DemoPro - Screen Annotation||||DemoPro - Screen Annotation||
|444|464050545|Automatic|Algodoo Physics||||Algodoo Physics||
|443|808501572|Automatic|Backgrounds||||Backgrounds||
|442|1576064082|Automatic|DeviceMirror Pro -无线有线手机投屏||||DeviceMirror -Screen Mirroring||
|441|6670793258|Automatic|LaTeX 编辑器专业版||||LaTeX Editor Pro||
|440|6474615359|Automatic|MathCapture - 可视化公式编辑器||||MathCapture - Equation Editor||
|439|1535623374|Automatic|RenameBest-文件批量重命名||||RenameBest: Rename in Batch||
|438|1459663647|Automatic|虚拟定位||||Virtual Location||
|437|1214761683|Automatic|iWall-动态壁纸，动态桌面引擎||||iWall-Dynamic Desktop Engine||
|436|796608673|Automatic|动物打字||||Animal Typing||
|435|966457795|Automatic|超级抠图 Super PhotoCut||||Super PhotoCut||
|434|1561303442|Automatic|人生必读百本书||||人生必读百本书||
|433|453164367|Automatic|系统助手||||SystemPal||
|432|1425997715|Automatic|解压助手专业版 - RAR ZIP Unarchiver||||RAR Extractor Pro - Unzip||
|431|431224317|Automatic|Disk Drill Media Recovery||||Disk Drill Media Recovery||
|430|1415704056|Automatic|超级应用锁 - 密码加密||||The App Locker -Best Lock Apps||
|429|1204268874|Automatic|歌词编辑器||||Lyrics Editor||
|428|609649363|Automatic|3D地球和世界地图||||Earth 3D - World Atlas||
|427|1162194131|Automatic|Easy New File||||Easy New File||
|426|6474506915|Automatic|便签 - 桌面便利贴||||Sticker - Desktop Notepad||
|425|1403919533|Automatic|MWeb Pro||||MWeb Pro||
|424|6472813601|Automatic|NinjaMouse - 鼠标加速神器||||NinjaMouse - Your mouse master||
|423|775737590|Automatic|iA Writer||||iA Writer||
|422|1028838684|Automatic|Artpaper：每日新壁纸||||Artpaper: New Wallpapers Daily||
|421|1102242042|Automatic|Subtitler for fcpxml||||Subtitler for fcpxml||
|420|1445268016|Automatic|清理重复文件||||Duplicate Cleaner||
|419|937759555|Automatic|Elmedia:universal video player||||Elmedia:universal video player||
|418|1313164484|Automatic|距离和面积测量||||Distance and Area Measure||
|417|1494552451|Automatic|小说大全||||小说大全||
|416|1273980573|Automatic|Best Data Recovery||||Best Data Recovery||
|415|522706442|Automatic|Sync Folders Pro||||Sync Folders Pro||
|414|6736433415|Automatic|DICOM 查看器||||DICOM Viewer+||
|413|1619982017|Automatic|五笔拆字||||五笔拆字||
|412|532441535|Automatic|Presentation Prompter||||Presentation Prompter||
|411|1153435308|Automatic|inddPreview||||inddPreview||
|410|417392270|Automatic|MDB ACCDB Viewer||||MDB ACCDB Viewer||
|409|1475051844|Automatic|Filmage Converter Pro-视频转换&合并||||Filmage Converter Pro-MKV,AVI||
|408|1441394270|Automatic|Oka解压专家pro||||Oka Unarchiver Pro - Unzip RAR||
|407|6711333801|Automatic|实时加密货币价格、图表||||Live Crypto Prices, Charts||
|406|1447010168|Automatic|音乐词典 - 音乐术语与表情术语词典||||Music Dictionary - Music Terms||
|405|658182498|Automatic|苹果通讯录/csv转换工具-Address Book to CSV||||Address Book to CSV||
|404|6465744342|Automatic|iBoot - StartupDisk shortcut||||iBoot - StartupDisk shortcut||
|403|1526912781|Automatic|彩虹文件夹 - 文件夹图标换颜色图片||||Rainbow Folder - Icon changer||
|402|584393206|Automatic|心电图 (Cardiograph)||||Cardiograph||
|401|668331139|Automatic|Backup Scheduler: Time Editor||||Backup Scheduler: Time Editor||
|400|1261004863|Automatic|Data Recovery EX||||Data Recovery EX||
|399|6738346322|Automatic|NaturalSpelling-自然拼读音标スペル||||NaturalSpelling-自然拼读音标スペル||
|398|1607691467|Automatic|Auto Refresh Page||||Auto Refresh Page||
|397|6446939328|Automatic|OmniZip Pro - 全能解压缩专家||||OmniZip Pro||
|396|877615577|Automatic|Serial||||Serial||
|395|432850619|Automatic|FL Studio Mobile||||FL Studio Mobile||
|394|1447010168|Automatic|音乐词典 - 音乐术语与表情术语词典||||Music Dictionary - Music Terms||
|393|1325456420|Automatic|音乐格式互换 --- NCM转换器，MP3转码器||||Music Format Converter HQ||
|392|514840980|Automatic|超级转霸:视频音乐格式转换工厂||||Total Video Converter||
|391|1643033301|Automatic|MIDIRMX||||MIDIRMX||
|390|1584154464|Automatic|MIDI Router||||MIDI Router||
|389|1204268874|Automatic|歌词编辑器||||Lyrics Editor||
|388|874418479|Automatic|音乐转换工厂||||Audio Convert Factory||
|387|963571828|Automatic|音频合并与分割||||Audio Merge & Split||
|386|1178295426|Automatic|Colibri||||Colibri||
|385|1532597159|Automatic|Mp3tag||||Mp3tag||
|384|554883654|Automatic|Metadatics||||Metadatics||
|383|1506457515|Automatic|Stage Plot Maker X||||Stage Plot Maker X||
|382|1567204629|Automatic|Ringtone Maker -Easy ringtone!||||Ringtone Maker -Easy ringtone!||
|381|963573437|Automatic|音频转换、合并与分割||||Audio Convert、Merge & Split||
|380|6458546013|Automatic|HI-Player||||HI-Player||
|379|6443536652|Automatic|万能音频格式转换大师—支持M4A，FLAC，AMR等格式||||Audio Convertor - M4A,FLAC,M4R||
|378|447726582|Automatic|iAudioConverter||||iAudioConverter||
|377|808285143|Automatic|myTuner Radio Pro 全球最火FM电台收音机||||myTuner Radio Pro||
|376|405537804|Automatic|Sound Studio||||Sound Studio||
|375|1036029895|Automatic|Music Convert-Audio Converter||||Music Convert-Audio Converter||
|374|492478362|Automatic|MidiKey||||MidiKey||
|373|402437824|Automatic|Ringer - Ringtone Maker||||Ringer - Ringtone Maker||
|372|1486434332|Automatic|文本音乐 - 简谱快速记谱||||TextMusic - Music Notation||
|371|797275229|Automatic|AudioTunes - FLAC, APE, WMA Converter||||AudioTunes - FLAC, APE, WMA Converter||
|370|1062190398|Automatic|Drummy - 节奏工作室||||Drummy - Ultimate Beat Maker||
|369|412675054|Automatic|Tunesify||||Tunesify||
|368|468990782|Automatic|Music Converter Pro||||Music Converter Pro||
|367|522349879|Automatic|DM1 - The Drum Machine||||DM1 - The Drum Machine||
|366|1661522614|Automatic|简谱记谱||||JianPu Editor||
|365|1517312650|Automatic|Notify for Spotify||||Notify for Spotify||
|364|455545700|Automatic|BitPerfect||||BitPerfect||
|363|929166131|Automatic|傻瓜演奏家||||easyMusic||
|362|991729082|Automatic|Radio||||Radio||
|361|673906093|Automatic|歌曲音量调节器Audio Normalizer||||Audio Normalizer - Mp3 Gain||
|360|1174330003|Automatic|Fine Chromatic Tuner||||Fine Chromatic Tuner||
|359|1538268059|Automatic|开心果节拍器 - 节拍器 纯净无广告||||Metronome - Metronome Pro||
|358|984332192|Automatic|Audio Edit Pro-Audio Editor||||Audio Edit Pro-Audio Editor||
|357|851766802|Automatic|SuperMidi - Midi音乐转换播放器||||Super Midi Convert & Play||
|356|660027017|Automatic|简易录音机||||Easy Audio Recorder||
|355|798738112|Automatic|MetroGnome||||MetroGnome||
|354|975152825|Automatic|Audio Edit Studio - Editor||||Audio Edit Studio - Editor||
|353|558317092|Automatic|Meta — Music Tag Editor||||Meta — Music Tag Editor||
|352|813546051|Automatic|Music Speed Changer||||Music Speed Changer||
|351|1489887480|Automatic|听音 - 练耳。视唱练习。||||Hearing: ear training. Piano.||
|350|444696268|Automatic|TunesArt||||TunesArt||
|349|972934780|Automatic|Audio Convert-Music Converter||||Audio Convert-Music Converter||
|348|438292371|Automatic|Amadeus Pro||||Amadeus Pro||
|347|568052099|Automatic|AmpKit - guitar amp & effects||||AmpKit - guitar amp & effects||
|346|978234147|Automatic|CD Burn Pro - Music CD||||CD Burn Pro - Music CD||
|345|910469258|Automatic|Amazing Slow Downer||||Amazing Slow Downer||
|344|1468259834|Automatic|miRack||||miRack||
|343|548947732|Automatic|Guitar Jam Tracks - 音阶教练和练习伙伴||||Guitar Jam Tracks - Scale Trainer & Practice Buddy||
|342|940526959|Automatic|insTuner - Chromatic Tuner for Guitar, Ukulele and String Instruments||||insTuner - Chromatic Tuner for Guitar, Ukulele and String Instruments||
|341|417725762|Automatic|Cross DJ||||Cross DJ||
|340|1441635265|Automatic|Easy MP3 Converter||||Easy MP3 Converter||
|339|1329435840|Automatic|Guitar Gravitas: Total ed.||||Guitar Gravitas: Total ed.||
|338|1451247572|Automatic|音符大师：学习音符。||||Solfa: learn musical notes||
|337|633262839|Automatic|FLAC转换器||||Any FLAC Converter||
|336|709019909|Automatic|Flac to Any Pro||||Flac to Any Pro||
|335|678772226|Automatic|Audio Cutter - Cut and Split Music Files||||Audio Cutter - Cut and Split Music Files||
|334|463687032|Automatic|MP3-Converter||||MP3-Converter||
|333|1322360459|Automatic|Drum Beats Metronome||||Drum Beats Metronome||
|332|416135376|Automatic|Fidelia||||Fidelia||
|331|975790852|Automatic|Audio Trim Split-Audio Editor||||Audio Trim Split-Audio Editor||
|330|425086676|Automatic|Decibel||||Decibel||
|329|829431988|Automatic|DSD Master||||DSD Master||
|328|1255792493|Automatic|Guitar Tabs X||||Guitar Tabs X||
|327|1188564124|Automatic|Master Class - Guides for Audacity||||Master Class - Guides for Audacity||
|326|1207009001|Automatic|Tone Generator||||Tone Generator||
|325|1313982113|Automatic|BPM Tap Tempo||||BPM Tap Tempo||
|324|1157672888|Automatic|Tempomate||||Tempomate||
|323|1357379892|Automatic|Menu Bar Controller for Sonos||||Menu Bar Controller for Sonos||
|322|594731639|Automatic|超级MP3格式转换器||||Super MP3 Converter||
|321|506232966|Automatic|Tag||||Tag||
|320|562799291|Automatic|Drum Beats+ (Rhythm Metronome, Loops & Grooves Machine)||||Drum Beats+ (Rhythm Metronome, Loops & Grooves Machine)||
|319|435040864|Automatic|NoSleep||||NoSleep||
|318|1661929636|Automatic|五线谱记谱||||Staff Editor||
|317|832335884|Automatic|Piano Notes Finder||||Piano Notes Finder||
|316|912509512|Automatic|SignalSpy - Audio Oscilloscope, Frequency Spectrum Analyzer, and more||||SignalSpy - Audio Oscilloscope, Frequency Spectrum Analyzer, and more||
|315|498787769|Automatic|General MIDI Player||||General MIDI Player||
|314|1464643583|Automatic|Audio Voice Changer||||Audio Voice Changer||
|313|886882234|Automatic|Tag Editor||||Tag Editor||
|312|698196505|Automatic|Audio Converter Pro||||Audio Converter Pro||
|311|1126098076|Automatic|Silenz||||Silenz||
|310|880764359|Automatic|Export for iTunes||||Export for iTunes||
|309|1061524108|Automatic|Muse: Music Player for YouTube||||Muse: Music Player for YouTube||
|308|915342927|Automatic|NetRadio Italy||||NetRadio Italy||
|307|1048950608|Automatic|Convert to Mp3 Pro - Converter||||Convert to Mp3 Pro - Converter||
|306|639386679|Automatic|Vector 3 - Record & Edit Audio||||Vector 3 - Record & Edit Audio||
|305|432769658|Automatic|TabView||||TabView||
|304|1136096513|Automatic|MP3音乐转换器 -  Aiseesoft||||MP3 Music Converter - Aisee||
|303|586172415|Automatic|Tipard 音乐转换器||||Tipard All Music Converter||
|302|571673359|Automatic|Tray Player||||Tray Player||
|301|1021162460|Automatic|Chords Compass||||Chords Compass||
|300|577400737|Automatic|Easy Guitar Tuner||||Easy Guitar Tuner||
|299|409957696|Automatic|MP3 Encoder||||MP3 Encoder||
|298|1423295407|Automatic|Ampado PRO - Audio Player||||Ampado PRO - Audio Player||
|297|1259223205|Automatic|TunesMechanic for iTunes||||TunesMechanic for iTunes||
|296|450527929|Automatic|djay - DJ 应用&混音器||||djay - DJ App & AI Mixer||
|295|1070455587|Automatic|万能MP3音频转换器：视频音乐格式工厂||||MP3 Converter - Audio Convert||
|294|1575723133|Automatic|音频剪辑-音频提取器&音乐剪辑mp3转换||||Audio Editor Ringtone Maker||
|293|1612790003|Automatic|Mp3转换器 - 音频转换器||||Audio Converter - One Click||
|292|1339124759|Automatic|音频剪辑 – 手机铃声制作&mp3音乐剪辑||||Audio Editor & Music Mixer||
|291|461369673|Automatic|VOX: MP3 & FLAC Music Player||||VOX: MP3 & FLAC Music Player||
|290|1496955576|Automatic|SpeakerAmp:Booster & Equalizer||||SpeakerAmp:Booster & Equalizer||
|289|1171417699|Automatic|吉他调音器 吉他谱 :: Guitar Gravitas||||Guitar Gravitas: Chords Scales||
|288|1594027432|Automatic|Flacbox||||Flacbox||
|287|1057051963|Automatic|Music Transfer for iTunes||||Music Transfer for iTunes||
|286|1027093462|Automatic|Visual Cue 无损音乐播放器 离线 flac m4a||||Visual Cue FLAC DMX MP3 Player||
|285|1594027661|Automatic|Evertag||||Evertag||
|284|1058801458|Automatic|Remixlive - Make Music & Beats||||Remixlive - Make Music & Beats||
|283|1233048948|Automatic|Boom3D: Volume Booster and EQ||||Boom3D: Volume Booster and EQ||
|282|1492991594|Automatic|EarMaster 7||||EarMaster 7||
|281|511170796|Automatic|Music Tag Editor||||Music Tag Editor||
|280|984278082|Automatic|Tag Editor Lite||||Tag Editor Lite||
|279|1482460738|Automatic|LRC Editor||||LRC Editor||
|278|982124349|Automatic|FLAC MP3格式转换器||||FLAC MP3 Converter||
|277|1564384601|Automatic|Evermusic||||Evermusic||
|276|1602757597|Automatic|unMix: AI Vocal Remover||||unMix: AI Vocal Remover||
|275|446363299|Automatic|N 音轨工作室DAW||||n-Track Studio DAW||
|274|1527105121|Automatic|Neural Mix Pro||||Neural Mix Pro||
|273|797590911|Automatic|MIDI 乐谱||||MIDI Score||
|272|1473448052|Automatic|钢琴伴侣：音乐和弦和规模||||Piano Companion: Chords,Scales||
|271|970044455|Automatic|WavePad Audio Editor||||WavePad Audio Editor||
|270|6670775367|Automatic|LioMusic - 音乐编辑和制作||||LioMusic - Music Editor||
|269|1437556716|Automatic|Mapcasts - 无广告||||Mapcasts - No Advertisement||
|268|412198565|Automatic|打嗝放屁弹钢琴||||Burp And Fart Piano||
|267|733258444|Automatic|MusicFans||||MusicFans||
|266|1049212349|Automatic|音频频谱检测仪 — 专业声音分析仪和分贝仪||||Spectrum Analyzer: Sound Meter||
|265|936243210|Automatic|MiniPlay for Spotify & iTunes||||MiniPlay for Spotify & iTunes||
|264|444425546|Automatic|BarTunes||||BarTunes||
|263|1128271725|Automatic|Keyboard Keyboard||||Keyboard Keyboard||
|262|1483373320|Automatic|歌词制作--创作、编辑器||||Lyrics Production Editor||
|261|1005227156|Automatic|future.dj pro - mix everything||||future.dj pro - mix everything||
|260|1229106549|Automatic|Music Tag Editor Pro||||Music Tag Editor Pro||
|259|1446942851|Automatic|radio NED+||||radio NED+||
|258|1550581532|Automatic|Vythm JR - 音乐可视化 VJ & DJ||||Vythm VJ - Music Visualizer DJ||
|257|1550403011|Automatic|超级右键专业版||||iRightMouse Pro||
|256|1611347086|Automatic|iShot Pro-专业的截图贴图录屏录音OCR翻译取色工具||||iShot Pro-ScreenShot Recording||
|255|494500492|Automatic|倒数日 · Days Matter for Desktop||||倒数日 · Days Matter for Desktop||
|254|1469774098|Automatic|QSpace||||QSpace||
|253|1567442612|Automatic|Qmenu||||Qmenu||
|252|1544655904|Automatic|OmniReader Pro - 全能阅读管理专家||||OmniReader Pro - AI Reader||
|251|430798174|Automatic|HazeOver • 干扰调节器||||HazeOver • Distraction Dimmer™||
|250|1218171533|Automatic|Marklist 妙记 - 稍后阅读、笔记、待办、搜索和收藏||||Marklist - Manage Later Things||
|249|1310686187|Automatic|Scrivener 3||||Scrivener 3||
|248|1482490089|Automatic|Tampermonkey Classic||||Tampermonkey Classic||
|247|1535623374|Automatic|RenameBest-文件批量重命名||||RenameBest: Rename in Batch||
|246|1114272557|Automatic|小历 - 小而美的日历||||小历 - 小而美的日历||
|245|1340697163|Automatic|Record It Pro - HD高清录制,视频录制||||Record It Pro-Screen Recorder||
|244|904280696|Automatic|Things 3||||Things 3||
|243|1269984974|Automatic|Markdown - 专注写作||||Markdown - Enjoy writing||
|242|876540291|Automatic|Copy 'Em||||Copy 'Em||
|241|1384206666|Automatic|DemoPro - Screen Annotation||||DemoPro - Screen Annotation||
|240|6670793258|Automatic|LaTeX 编辑器专业版||||LaTeX Editor Pro||
|239|417375580|Automatic|BetterSnapTool||||BetterSnapTool||
|238|1403919533|Automatic|MWeb Pro||||MWeb Pro||
|237|775737590|Automatic|iA Writer||||iA Writer||
|236|1313164484|Automatic|距离和面积测量||||Distance and Area Measure||
|235|1607691467|Automatic|Auto Refresh Page||||Auto Refresh Page||
|234|6446939328|Automatic|OmniZip Pro - 全能解压缩专家||||OmniZip Pro||
|233|1541983985|Automatic|Sketch 3D: Make 3D Easily||||Sketch 3D: Make 3D Easily||
|232|1639698270|Automatic|校准猫 (CalibCat Display) 显示器伽马控制||||CalibCat Display Gamma Control||
|231|1528890965|Automatic|TextSniper - OCR, Copy & Paste||||TextSniper - OCR, Copy & Paste||
|230|420212497|Automatic|Byword||||Byword||
|229|725408432|Automatic|PDF Professional Suite||||PDF Professional Suite||
|228|1441958036|Automatic|SideNotes - Thoughts & Tasks||||SideNotes - Thoughts & Tasks||
|227|434808346|Automatic|SimpleMind Pro||||SimpleMind Pro||
|226|407412840|Automatic|DataGraph||||DataGraph||
|225|950512380|Automatic|Notepad+ - 简单，方便，快速地编辑.TXT文件||||Notepad+ - Simple Document and Quick Note||
|224|1368905598|Automatic|Screencast – Screen Recorder||||Screencast – Screen Recorder||
|223|1166066070|Automatic|Bumpr||||Bumpr||
|222|6466263582|Automatic|MouseXY||||MouseXY||
|221|6563146670|Automatic|文字喵探 专业版||||Miaotracer pro||
|220|866773894|Automatic|Quiver - take better notes||||Quiver - take better notes||
|219|1414457383|Automatic|ToMenu - 搬文工||||ToMenu - New&Move File Quickly||
|218|1105814268|Automatic|番茄钟 - 最好用的番茄工作法计时工具||||Focus Timer：Focus mind on work||
|217|1156402585|Automatic|Light Browser||||Light Browser||
|216|1519213509|Automatic|iPreview - 强大好用的Quick Look扩展程序||||iPreview - Powerful Quick Look||
|215|1472854234|Automatic|Copy+ 剪贴板历史记录管理器、私人数据收藏夹||||Copy+ Manage clipboard history||
|214|1488905707|Automatic|Noteshelf - 2||||Noteshelf - 2||
|213|1505869474|Automatic|Pro Mouse||||Pro Mouse||
|212|6738089759|Automatic|隐藏鼠标光标||||Hide Mouse Cursor||
|211|902351149|Automatic|Zip Password Recovery||||Zip Password Recovery||
|210|6450966627|Automatic|Final Draft 13||||Final Draft 13||
|209|1272114820|Automatic|Lock Pro||||Lock Pro||
|208|1181766626|Automatic|Adware Zap - Malware Cleaner||||Adware Zap - Malware Cleaner||
|207|1609752330|Automatic|Surfingkeys||||Surfingkeys||
|206|796275163|Automatic|文件管理器Total Manager - Files Commander||||Total Manager: Files Commander & Ftp Remote Client||
|205|1277179284|Automatic|FSNotes||||FSNotes||
|204|577085396|Automatic|Unclutter||||Unclutter||
|203|468406330|Automatic|WPXO||||WPXO||
|202|568020055|Automatic|Scapple||||Scapple||
|201|990588172|Automatic|Gestimer (Legacy)||||Gestimer (Legacy)||
|200|1185528129|Automatic|互联网翻译专业 .||||Internet Translator Pro .||
|199|552664144|Automatic|PDF Max Pro||||PDF Max Pro||
|198|632455315|Automatic|为专业Excel模板||||Templates for Excel Pro||
|197|1143437985|Automatic|GoodTask||||GoodTask||
|196|1459987506|Automatic|清理精灵 - 垃圾清理大师||||Cleaner X - clear cache||
|195|895264364|Automatic|DjVu Reader Pro||||DjVu Reader Pro||
|194|686459498|Automatic|PaperShip - Mendeley & Zotero||||PaperShip - Mendeley & Zotero||
|193|695406827|Automatic|Dropzone 3||||Dropzone 3||
|192|702816521|Automatic|Unibox||||Unibox||
|191|412347921|Automatic|OmmWriter||||OmmWriter||
|190|1093111311|Automatic|3D CAD Graphic Modeling Design||||3D CAD Graphic Modeling Design||
|189|970502923|Automatic|Typeeto: remote BT keyboard||||Typeeto: remote BT keyboard||
|188|493057152|Automatic|DB-Text||||DB-Text||
|187|454347770|Automatic|iCircuit||||iCircuit||
|186|1286489308|Automatic|Flat Tomato||||Flat Tomato||
|185|477670270|Automatic|2Do||||2Do||
|184|1445040281|Automatic|Translate for Safari||||Translate for Safari||
|183|524373870|Automatic|Due ～ 快速提醒、定时器||||Due — Reminders & Timers||
|182|974929595|Automatic|Notions||||Notions||
|181|1507246666|Automatic|Presentify - Screen Annotation||||Presentify - Screen Annotation||
|180|686398447|Automatic|茄子文字||||Cheese Writer||
|179|570384149|Automatic|JPG转PDF转换器||||JPG to PDF Converter||
|178|418926501|Automatic|Timer by Ten||||Timer by Ten||
|177|1489287299|Automatic|PDF转Word||||PDF To Word Helper||
|176|685953216|Automatic|Instashare - Transfer files||||Instashare - Transfer files||
|175|995838410|Automatic|Browser Ninja||||Browser Ninja||
|174|1482778901|Automatic|Hungrymark||||Hungrymark||
|173|408975584|Automatic|Todo||||Todo||
|172|1178801474|Automatic|Translator & Voice Collection||||Translator & Voice Collection||
|171|1115551582|Automatic|Doc Mate: for MS Office||||Doc Mate: for MS Office||
|170|566210419|Automatic|PDF to Word +||||PDF to Word +||
|169|1088311275|Automatic|Easy Guide For Microsoft Excel||||Easy Guide For Microsoft Excel||
|168|409222199|Automatic|Cyberduck||||Cyberduck||
|167|890031187|Automatic|Marked 2 - Markdown Preview||||Marked 2 - Markdown Preview||
|166|1175751480|Automatic|语言学家：立即翻译||||Translate Now: Linguist||
|165|1448026988|Automatic|便笺板||||Memo Board||
|164|735128047|Automatic|PDF Reader Pro: 编辑、转换PDF文档||||PDF Reader Pro: Edit & Convert||
|163|1265723161|Automatic|Podcast Soundboard||||Podcast Soundboard||
|162|1460795742|Automatic|小便签 - 计时器、倒计时、待办事项||||iNote -Sticky Notes &Countdown||
|161|778813618|Automatic|语音备忘录||||Voice Memos+||
|160|1128242453|Automatic|ProTranslate - 翻译官||||Pro Translate - translator app||
|159|547166701|Automatic|百度网盘||||百度网盘||
|158|6741096204|Automatic|Deep Think AI：询问 AI 聊天机器人||||Think AI: Ask Chatbot Anything||
|157|1327661892|Automatic|Xmind：思维导图||||Xmind: Mind Map||
|156|1570349123|Automatic|Openly for Chrome and Firefox||||Openly for Chrome and Firefox||
|155|491854842|Automatic|网易有道翻译||||Youdao Translate||
|154|1247341465|Automatic|同花顺-股票炒股软件||||同花顺-股票炒股软件||
|153|1484905765|Automatic|CAD快速看图 - 天正全专业||||Fast CAD Reader||
|152|747648890|Automatic|Telegram||||Telegram||
|151|6450939701|Automatic|Chat One - DeepSeek AI 聊天写作助手||||Chat One - AI Chat Box||
|150|1565629813|Automatic|FastZip - 专业的 RAR 7Z ZIP 解压缩工具||||FastZip - RAR 7Z ZIP UnZip||
|149|1592987853|Automatic|录屏专家Omi-屏幕录制编辑软件||||Screen Recorder by Omi||
|148|1488071784|Automatic|壁纸精灵 - 桌面壁纸，4k高清||||Wallpapers X - 4K Wallpaper||
|147|1181028777|Automatic|翻页时钟 - 全屏数字悬浮显示待机时间锁屏桌面小组件||||Flip Clock - digital widgets||
|146|1485844094|Automatic|iShot-优秀的截图贴图录屏录音OCR翻译取色标注工具||||iShot-ScreenShot Recording OCR||
|145|6503169843|Automatic|人工 智能 AI Chatbot : AI 聊天 助手||||AI Chatbot : Ask AI Assistant||
|144|1552826194|Automatic|我的壁纸 - 良心动态壁纸||||iWallpaper - Live Wallpaper||
|143|6511220682|Automatic|CleanMyApp - 应用程序卸载助手||||CleanMyApp - Uninstaller||
|142|966085870|Automatic|滴答清单: 专注、日历、提醒事项和时间管理番茄钟||||TickTick:To-Do List, Calendar||
|141|1144400433|Automatic|东方财富经典版-股票开户证券炒股理财||||东方财富经典版-股票开户证券炒股理财||
|140|1497428978|Automatic|超级右键-iRightMouse||||iRightMouse||
|139|886103288|Automatic|虎牙直播HD-游戏互动直播平台||||虎牙直播HD-游戏互动直播平台||
|138|1541571038|Automatic|NTFS磁盘读写 - 赤友NTFS助手||||NTFS Read&Write -iBoysoft NTFS||
|137|1594288016|Automatic|Wink - 画质修复||||Wink: Video Enhancer & Editor||
|136|1600668116|Automatic|有道云笔记-笔记效率办公||||有道云笔记-笔记效率办公||
|135|6443843900|Automatic|iBar-强大的菜单栏图标管理工具||||iBar-Menubar icon control tool||
|134|1442745175|Automatic|快帆加速器-海外回国音乐视频加速器||||快帆加速器-海外回国音乐视频加速器||
|133|1518518216|Automatic|Paper 壁纸 - 超高清4K动态壁纸, 桌面壁纸||||Paper - Live Wallpapers||
|132|1659622164|Automatic|VidHub - 高清影片视频播放器，快速播放云盘网盘||||VidHub -Video Library & Player||
|131|1570563588|Automatic|日历清单 - 拒绝拖延 效率人生||||CalendarTask - Efficient life||
|130|734383760|Automatic|每日英语听力 - 英语听力的最佳途径||||每日英语听力 - 英语听力的最佳途径||
|129|1507782672|Automatic|Pixea||||Pixea||
|128|1259223205|Automatic|TunesMechanic for iTunes||||TunesMechanic for iTunes||
|127|1630034110|Automatic|Bob - 翻译和 OCR 工具||||Bob - 翻译和 OCR 工具||
|126|1221250572|Automatic|Xnip -  截图 & 标注||||Xnip - Screenshot & Annotation||
|125|1575178082|Automatic|Max NTFS - NTFS磁盘读写助手||||Max NTFS - NTFS Disk Helper||
|124|1619925971|Automatic|UPDF - 新一代 AI 智能 PDF 编辑器||||UPDF - PDF Editor with AI||
|123|1395152179|Automatic|奇游加速器 - 全球游戏畅玩||||奇游加速器 - 全球游戏畅玩||
|122|503039729|Automatic|Fotor图片编辑器||||Fotor: AI Photo Editor, Design||
|121|1476545828|Automatic|MacDroid - 安卓版管理器||||MacDroid - Manager for Android||
|120|6449164812|Automatic|打字通 - 打字练习软件||||打字通 - 打字练习软件||
|119|1536071582|Automatic|Omni Converter 全能视频音频格式转换器||||Omni Converter - Video & Audio||
|118|1456235760|Automatic|花見动态壁纸 - 4K超高清||||Live Wallpaper - 4K UHD||
|117|1599191594|Automatic|超级的右键助手 - 赤友右键超人||||iBoysoft MagicMenu||
|116|1665341561|Automatic|flomo浮墨笔记 - AI 加持的便签备忘||||flomo浮墨笔记 - AI 加持的便签备忘||
|115|1133028347|Automatic|Cleaner One Pro - Uninstaller||||Cleaner One Pro - Uninstaller||
|114|1514073011|Automatic|QuickFox-海外回国加速器追剧听歌游戏留学生必备||||QuickFox-海外回国加速器追剧听歌游戏留学生必备||
|113|1345035954|Automatic|穿梭Transocks-海外华人回国加速器||||穿梭Transocks-海外华人回国加速器||
|112|1176074088|Automatic|Termius — Modern SSH Client||||Termius — Modern SSH Client||
|111|1335335588|Automatic|全能视频播放器 - 高清音频视频播放器||||Final Video Player - MKV & MP4||
|110|1044549675|Automatic|Elmedia Video Player||||Elmedia Video Player||
|109|1453504509|Automatic|动态壁纸引擎Dynamic Wallpaper Engine||||Dynamic Wallpaper Engine||
|108|1449438542|Automatic|解优专业版 - 专业的 RAR 7Z ZIP 解压缩工具||||BestZip Pro - Unzip RAR&Zip&7z||
|107|470158793|Automatic|Keka||||Keka||
|106|1550403011|Automatic|超级右键专业版||||iRightMouse Pro||
|105|1611347086|Automatic|iShot Pro-专业的截图贴图录屏录音OCR翻译取色工具||||iShot Pro-ScreenShot Recording||
|104|6737150304|Automatic|iBar Pro-强大的菜单栏图标隐藏显示管理工具||||iBar Pro-Menubar control tool||
|103|647505820|Automatic|RAR Extractor - Unarchiver Pro||||RAR Extractor - Unarchiver Pro||
|102|6740171321|Automatic|FastZipPro-专业RAR 7Z ZIP解压缩软件||||FastZipPro- RAR 7Z ZIP UnZip||
|101|6742392236|Automatic|ClashX Pro :Service Monitoring||||ClashX Pro :Service Monitoring||
|100|1343182480|Automatic|东方财富领先版-股票开户证券炒股理财||||东方财富领先版-股票开户证券炒股理财||
|99|6741806831|Automatic|ClashX Pro - Dashboard manager||||ClashX Pro - Dashboard manager||
|98|494500492|Automatic|倒数日 · Days Matter for Desktop||||倒数日 · Days Matter for Desktop||
|97|951718596|Automatic|CAD迷你画图||||FoxCAD||
|96|1551531632|Automatic|自动切换输入法专业版||||AutoSwitchInput Pro||
|95|6738742748|Automatic|益智蜘蛛纸牌||||Puzzle Spider Solitaire.||
|94|1469774098|Automatic|QSpace||||QSpace||
|93|1459028801|Automatic|爱五笔 - 五笔编码拆字大全||||爱五笔 - 五笔编码拆字大全||
|92|1567442612|Automatic|Qmenu||||Qmenu||
|91|1544655904|Automatic|OmniReader Pro - 全能阅读管理专家||||OmniReader Pro - AI Reader||
|90|411643860|Automatic|DaisyDisk||||DaisyDisk||
|89|1486274102|Automatic|MPlayer X Pro||||MPlayer X Pro||
|88|461788075|Automatic|Movist||||Movist||
|87|1218171533|Automatic|Marklist 妙记 - 稍后阅读、笔记、待办、搜索和收藏||||Marklist - Manage Later Things||
|86|6474505156|Automatic|照片处理工具 - 公务员考试报名确认照片审核||||照片处理工具 - 公务员考试报名确认照片审核||
|85|510620098|Automatic|MediaInfo||||MediaInfo||
|84|432850619|Automatic|FL Studio Mobile||||FL Studio Mobile||
|83|1642304143|Automatic|串口(网络)调试助手 Pro||||SerialPort Debug Assistant Pro||
|82|430798174|Automatic|HazeOver • 干扰调节器||||HazeOver • Distraction Dimmer™||
|81|457622435|Automatic|Yoink - 拖放也可以轻松自如||||Yoink - Better Drag and Drop||
|80|1606275031|Automatic|Picture View: 图片浏览器||||Picture View: Image browser||
|79|1555844307|Automatic|右键助手专业版||||MouseBoost Pro||
|78|402380914|Automatic|Eudic 欧路词典 增强版||||Eudic 欧路词典 增强版||
|77|6738715418|Automatic|STEP 和 IGES 文件查看器||||STEP and IGES File Viewer||
|76|977949232|Automatic|Daygram - 密码日记 / 很简单时间记录日记||||Daygram : My Secret Diary||
|75|847259925|Automatic|SnailSVN 专业版：与访达集成的 SVN 客户端||||SnailSVN: SVN for Finder||
|74|389083586|Automatic|MDict||||MDict||
|73|1516451072|Automatic|Another Desktop Manager||||Another Desktop Manager||
|72|1482490089|Automatic|Tampermonkey Classic||||Tampermonkey Classic||
|71|6502828594|Automatic|Template for Adobe illustrator||||Template for Adobe illustrator||
|70|1622138166|Automatic|Change Video Speed for Safari||||Change Video Speed for Safari||
|69|1058266292|Automatic|妖股助手HD-优选短线强势股票||||妖股助手HD-优选短线强势股票||
|68|1478540997|Automatic|zClock - 置顶时钟, 倒计时, 网速显示||||zClock - Clock & Countdown.||
|67|1451273814|Automatic|nPlayer||||nPlayer||
|66|1533946416|Automatic|MyZip Pro-7z zip rar多线程极速压缩工具||||MyZip Pro-7z zip rar多线程极速压缩工具||
|65|476566660|Automatic|三维地球||||Earth 3D||
|64|1325456420|Automatic|音乐格式互换 --- NCM转换器，MP3转码器||||Music Format Converter HQ||
|63|668609870|Automatic|Rar解压利器||||Rar Sharp||
|62|1381028448|Automatic|百读不厌 - 听书、看书神器||||百读不厌 - 听书、看书神器||
|61|1269984974|Automatic|Markdown - 专注写作||||Markdown - Enjoy writing||
|60|991247047|Automatic|流程图编辑器高级版||||Flowchart Designer Premium||
|59|689176796|Automatic|Python Runner||||Python Runner||
|58|1265704574|Automatic|Bandizip: 压缩和解压缩||||Bandizip: Archiver||
|57|1199716810|Automatic|五子棋打谱软件||||五子棋打谱软件||
|56|1385628859|Automatic|Highlighter for Safari||||Highlighter for Safari||
|55|1521805728|Automatic|隐藏文件保险柜 iVault  - 私密文件夹||||iVault - secure your files||
|54|1632395174|Automatic|CleanMyMac X Multi-License||||CleanMyMac X Multi-License||
|53|775050502|Automatic|American Sign Language||||American Sign Language||
|52|904280696|Automatic|Things 3||||Things 3||
|51|1384206666|Automatic|DemoPro - Screen Annotation||||DemoPro - Screen Annotation||
|50|464050545|Automatic|Algodoo Physics||||Algodoo Physics||
|49|808501572|Automatic|Backgrounds||||Backgrounds||
|48|1576064082|Automatic|DeviceMirror Pro -无线有线手机投屏||||DeviceMirror -Screen Mirroring||
|47|6670793258|Automatic|LaTeX 编辑器专业版||||LaTeX Editor Pro||
|46|6474615359|Automatic|MathCapture - 可视化公式编辑器||||MathCapture - Equation Editor||
|45|1535623374|Automatic|RenameBest-文件批量重命名||||RenameBest: Rename in Batch||
|44|1459663647|Automatic|虚拟定位||||Virtual Location||
|43|1214761683|Automatic|iWall-动态壁纸，动态桌面引擎||||iWall-Dynamic Desktop Engine||
|42|796608673|Automatic|动物打字||||Animal Typing||
|41|966457795|Automatic|超级抠图 Super PhotoCut||||Super PhotoCut||
|40|1561303442|Automatic|人生必读百本书||||人生必读百本书||
|39|453164367|Automatic|系统助手||||SystemPal||
|38|1425997715|Automatic|解压助手专业版 - RAR ZIP Unarchiver||||RAR Extractor Pro - Unzip||
|37|431224317|Automatic|Disk Drill Media Recovery||||Disk Drill Media Recovery||
|36|1415704056|Automatic|超级应用锁 - 密码加密||||The App Locker -Best Lock Apps||
|35|1204268874|Automatic|歌词编辑器||||Lyrics Editor||
|34|609649363|Automatic|3D地球和世界地图||||Earth 3D - World Atlas||
|33|1162194131|Automatic|Easy New File||||Easy New File||
|32|6474506915|Automatic|便签 - 桌面便利贴||||Sticker - Desktop Notepad||
|31|1403919533|Automatic|MWeb Pro||||MWeb Pro||
|30|6472813601|Automatic|NinjaMouse - 鼠标加速神器||||NinjaMouse - Your mouse master||
|29|775737590|Automatic|iA Writer||||iA Writer||
|28|1028838684|Automatic|Artpaper：每日新壁纸||||Artpaper: New Wallpapers Daily||
|27|1102242042|Automatic|Subtitler for fcpxml||||Subtitler for fcpxml||
|26|1445268016|Automatic|清理重复文件||||Duplicate Cleaner||
|25|937759555|Automatic|Elmedia:universal video player||||Elmedia:universal video player||
|24|1313164484|Automatic|距离和面积测量||||Distance and Area Measure||
|23|1494552451|Automatic|小说大全||||小说大全||
|22|1273980573|Automatic|Best Data Recovery||||Best Data Recovery||
|21|522706442|Automatic|Sync Folders Pro||||Sync Folders Pro||
|20|6736433415|Automatic|DICOM 查看器||||DICOM Viewer+||
|19|1619982017|Automatic|五笔拆字||||五笔拆字||
|18|532441535|Automatic|Presentation Prompter||||Presentation Prompter||
|17|1153435308|Automatic|inddPreview||||inddPreview||
|16|417392270|Automatic|MDB ACCDB Viewer||||MDB ACCDB Viewer||
|15|1475051844|Automatic|Filmage Converter Pro-视频转换&合并||||Filmage Converter Pro-MKV,AVI||
|14|1441394270|Automatic|Oka解压专家pro||||Oka Unarchiver Pro - Unzip RAR||
|13|6711333801|Automatic|实时加密货币价格、图表||||Live Crypto Prices, Charts||
|12|1447010168|Automatic|音乐词典 - 音乐术语与表情术语词典||||Music Dictionary - Music Terms||
|11|658182498|Automatic|苹果通讯录/csv转换工具-Address Book to CSV||||Address Book to CSV||
|10|6465744342|Automatic|iBoot - StartupDisk shortcut||||iBoot - StartupDisk shortcut||
|9|1526912781|Automatic|彩虹文件夹 - 文件夹图标换颜色图片||||Rainbow Folder - Icon changer||
|8|584393206|Automatic|心电图 (Cardiograph)||||Cardiograph||
|7|668331139|Automatic|Backup Scheduler: Time Editor||||Backup Scheduler: Time Editor||
|6|1261004863|Automatic|Data Recovery EX||||Data Recovery EX||
|5|6738346322|Automatic|NaturalSpelling-自然拼读音标スペル||||NaturalSpelling-自然拼读音标スペル||
|4|1607691467|Automatic|Auto Refresh Page||||Auto Refresh Page||
|3|6446939328|Automatic|OmniZip Pro - 全能解压缩专家||||OmniZip Pro||
|2|877615577|Automatic|Serial||||Serial||
|1|1448326351|Automatic|数据恢复||||❌||

# Operating Mechanism and Process
The entire mechanism relies on scheduled tasks provided by  `GitHub Actions` , executed every  `60 minutes` . The overall process is as follows:
1. Get application information for paid rankings
2. Update tracked app list
3. Get the latest price information for apps
   1. Get app details and the price of  `App`  through  [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1) 
   2. Based on the app details link obtained in the previous step, parse the link to get the price of  `In-App Purchases` 
4. Read stored price information
5. Calculate discount information
6. Store the latest price information
7. Update  `RSS`  files
8. Push notification to  `Telegram` 
9. Push notification to  `DingTalk` 
10. Update  `README.md` 
11. Submit  `Git`  update

After the above process, if there is discount information, friends who subscribed to  `RSS Source`  and  `Telegram Channel`  will receive a push notification
# How to Contribute

## 1. Add  `Country or Region`  or  `App` 
A basic understanding of  `TypeScript`  is required. Here are the general steps. If you find it difficult, you can open an  `Issue` 
* Add  `Country or Region` 
   1. Get the  `Code`  of  `Country or Region` 
      1. Open the  `App Store`  app on your Apple device
      2. Open the details of any app in  `App Store` 
      3. Click  `Share Button` 
      4. Click  `Copy Link` 
      5. Paste the copied  `Link`  to any input field, such as Notepad
         * You will get a similar link address: https://apps.apple.com/us/app/pages/id409201541?mt=12&l=en-US
         * Its rules are: Protocol://apps.apple.com/Country or Region's Code/app/App Name/idApp ID?x1=x1&x2=x2
         * For example, the  `Code`  obtained from this  https://apps.apple.com/us/app/pages/id409201541?mt=12&l=en-US  link is  `us` 
   2. Modify  `global.d.ts` 
      * If the code you get is  `xxx `
      * Type before modification:  `type Region = 'cn' | 'hk' | 'mo' | 'tw' | 'us'` 
      * Type after modified:  `type Region = 'cn' | 'hk' | 'mo' | 'tw' | 'us' | 'xxx'` 
   3. Modify  `appinfo.config.ts` 
      1. Add  `regions`  Variable Declaration
      2. Add  `getRegionNameMap`  Variable Declaration
      3. Add  `regionInAppPurchasesTextMap`  Variable Declaration
      4. Add  `regionLanguageCodeMap`  Variable Declaration
      5. Add  `regionTimezoneMap`  Variable Declaration
* Add  `App` 
   1. Get the  `ID`  of  `App` 
      1. Open the  `App Store`  app on your Apple device
      2. Open the details of the app you want to add in  `App Store` 
      3. Click  `Share Button` 
      4. Click  `Copy Link` 
      5. Paste the copied  `Link`  to any input field, such as Notepad
         * You will get a similar link address: https://apps.apple.com/us/app/pages/id409201541?mt=12&l=en-US
         * Its rules are: Protocol://apps.apple.com/Country or Region's Code/app/App Name/idApp ID?x1=x1&x2=x2
         * For example, the  `ID`  obtained from this  https://apps.apple.com/us/app/pages/id409201541?mt=12&l=en-US  link is  `409201541` 
   2. Modify  `appinfo.config.ts` 
      1. Add  `appConfig`  Variable Declaration
* Finally, pull request your commit to the  `main`  branch of this project


## 2. Other
If you don't want to participate in coding implementation, you can open an  `Issue`  if you have good ideas or find bugs<br />If you want to participate in coding implementation, due to the complexity of existing logic, rash changes may affect stored data. It's best to open an  `Issue`  first. Follow-up tasks can be assigned based on the affected modules or difficulty
# Star History
<a href="https://star-history.com/#eyelly-wu/appstore-discounts&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)"srcset="https://api.star-history.com/svg?repos=eyelly-wu/appstore-discounts&type=Date&theme=dark"></source><source media="(prefers-color-scheme: light)"srcset="https://api.star-history.com/svg?repos=eyelly-wu/appstore-discounts&type=Date"></source><img alt="Star History Chart"src="https://api.star-history.com/svg?repos=eyelly-wu/appstore-discounts&type=Date" />
  </picture>
</a>

# License
[MIT](./LICENSE)

Copyright (c) 2024-present Eyelly Wu