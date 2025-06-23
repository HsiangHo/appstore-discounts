<div align="center">
  <p style="font-size: 18px;">开源的 App Store 折扣信息助手，基于 GitHub Actions 实现，支持 RSS，Telegram 和 钉钉 通知</p>


[English](https://github.com/eyelly-wu/appstore-discounts/tree/main#readme) | 简体中文



[![github-stars](https://img.shields.io/github/stars/eyelly-wu/appstore-discounts?style=social "github-stars")](https://github.com/eyelly-wu/appstore-discounts/stargazers "github-stars")
[![last-commit](https://img.shields.io/github/last-commit/eyelly-wu/appstore-discounts/dev "last-commit")](https://github.com/eyelly-wu/appstore-discounts/commits/dev "last-commit")
[![github-issues](https://img.shields.io/github/issues-raw/eyelly-wu/appstore-discounts "github-issues")](https://github.com/eyelly-wu/appstore-discounts/issues "github-issues")


</div>
<details >
  <summary>目录</summary>

  [愿景](#愿景)<br/>
  [特性](#特性)<br/>
  [如何订阅](#如何订阅)<br/>
  &emsp;&emsp;[RSS](#rss)<br/>
  &emsp;&emsp;[Telegram](#telegram)<br/>
  &emsp;&emsp;[钉钉](#钉钉)<br/>
  [关注焦点](#关注焦点)<br/>
  [运行机制及流程](#运行机制及流程)<br/>
  [如何参与贡献](#如何参与贡献)<br/>
  &emsp;&emsp;[1. 补充 `国家或地区` 或 `应用` ](#1-补充-国家或地区-或-应用)<br/>
  &emsp;&emsp;[2. 其他](#2-其他)<br/>
  [Star History](#star-history)<br/>
  [License](#license)<br/>

</details>


# 愿景
成为 `App Store` 用户信赖的省钱助手，让更多人都能以优惠的价格购买到自己喜欢的应用
# 特性

* 支持任意 `国家或地区` 的 `App Store` （理论上🤔）
* 支持追踪 `应用本体` 的价格和 `App 内购买项目` 的价格
* 支持多种方式订阅折扣信息
   * RSS
   * Telegram
   * 钉钉
* 支持根据应用付费排行榜更新跟踪的应用列表
* 开源免费，任何人可参与贡献


# 如何订阅

> 友情提示:  
> 通过 `RSS` 和 `Telegram` 订阅需要科学上网才能有好的体验，[了解如何科学上网](https://github.com/eyelly-wu/vpn)
    
## RSS

|编码|国家或地区|RSS 源|
|:-|:-|:-|
|cn|中国大陆|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/cn.xml|
|hk|中国香港|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/hk.xml|
|mo|中国澳门|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/mo.xml|
|tw|中国台湾|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/tw.xml|
|us|美国|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/us.xml|
|tr|土耳其|https://raw.githubusercontent.com/eyelly-wu/appstore-discounts/main/rss/tr.xml|

## Telegram
点击 [![telegram](https://img.shields.io/badge/Telegram-Channel-blue?style=flat&logo=telegram "telegram")](https://t.me/appstore_discounts "telegram-channel") 订阅
## 钉钉
点击 [![dingtalk](https://img.alicdn.com/imgextra/i3/O1CN01WMvMRG1ks3Ixc9x1v_!!6000000004738-55-tps-32-32.svg "dingtalk")](https://qr.dingtalk.com/action/joingroup?code=v1,k1,o9TXTPxGRNhCmrTUa4cHymeJCIcRiimCsH4FqEnbEWU=&_dt_no_comment=1&origin=11 "dingtalk") 订阅
# 关注焦点
当前已收录 `2` 个 `国家或地区` 和 `857` 个 `应用` <br />只有下面罗列出的 `国家或地区` 的 `应用` 有折扣信息时，才会有推送，如果你所在 `国家或地区` 或喜欢的 `应用` 不在列表中，欢迎补充<br />
>特别说明：下表中 `❌` 表示在当前 `国家或地区` 的 `App Store` 不存在该应用<br />如果列表中的某些应用频繁的在打折，吸引你安装使用，你也成功被吸引安装使用了，但最终使用体验却很差卸载了应用。对于类似情况欢迎反馈到 `Issue` ，同一个应用反馈的次数超过 `10` 次，该应用的折扣信息推送极有可能会被禁止<br />目前被 ~~删除线~~ 标记的应用表示已被禁止推送通知

|序号|App ID|添加方式|中国大陆（cn）|中国香港（hk）|中国澳门（mo）|中国台湾（tw）|美国（us）|土耳其（tr）|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|
|857|6502489827|自动|大侠立志传||||❌||
|856|1439723850|自动|时间规划局 - 倒计时与提醒事项||||Countdown! Reminders and Timer||
|855|6747207796|自动|PeeWee Purpdrank's Soundboard||||PeeWee Purpdrank's Soundboard||
|854|6612011484|自动|怪物乐土||||❌||
|853|288419283|自动|❌||||RadarScope||
|852|1600873673|自动|炭炭背单词｜四六级考研等英语单词学习||||❌||
|851|824305459|自动|❌||||Papa's Freezeria To Go!||
|850|6740190367|自动|Biu 空气手枪||||Biu Gun||
|849|1544190466|自动|避难所：生存||||❌||
|848|1458460469|自动|人类跌落梦境||||❌||
|847|1523446532|自动|重生细胞||||❌||
|846|1134805859|自动|迷失岛||||Isoland||
|845|1099088440|自动|火柴人联盟2||||❌||
|844|866450515|自动|Forest 专注森林 - 番茄钟学习计时器||||Forest: Focus for Productivity||
|843|1406710800|自动|❌||||Stardew Valley||
|842|294934058|自动|HotSchedules||||HotSchedules||
|841|388624839|自动|扫描全能王 - 官方出品1元畅用版，扫描PDF文件，文字识别||||CamScanner + | OCR Scanner||
|840|479516143|自动|❌||||Minecraft: Dream it, Build it!||
|839|525818839|自动|❌||||Plague Inc.||
|838|623592465|自动|❌||||Heads Up!||
|837|625334537|自动|❌||||Geometry Dash||
|836|768160271|自动|航旅纵横PRO-官方机票、值机火车票接送机免税酒店||||航旅纵横PRO-官方机票、值机火车票接送机免税酒店||
|835|932747118|自动|❌||||Shadowrocket||
|834|954724812|自动|同花顺至尊版-股票软件||||同花顺至尊版-股票软件||
|833|1093131935|自动|❌||||Incredibox||
|832|1118115766|自动|❌||||Bloons TD 6||
|831|1157863540|自动|泰拉瑞亚||||❌||
|830|1544722749|自动|拣爱||||❌||
|829|1625289361|自动|空气投篮||||AirBasketball - AuditoryAR||
|828|6448477521|自动|BiuBiuBiu - 空气枪||||PewPewPew - Fingergun||
|827|6742740688|自动|无声冲突||||❌||
|826|6737795387|自动|鬼谷八荒||||❌||
|825|6443786927|自动|全面憨憨战争模拟器||||❌||
|824|6502453075|自动|❌||||Balatro||
|823|6740349666|自动|❌||||Backyard Baseball '97||
|822|1453504509|自动|动态壁纸引擎Dynamic Wallpaper Engine||||Dynamic Wallpaper Engine||
|821|470158793|自动|Keka||||Keka||
|820|1449438542|自动|解优专业版 - 专业的 RAR 7Z ZIP 解压缩工具||||BestZip Pro - Unzip RAR&Zip&7z||
|819|6737150304|自动|iBar Pro-强大的菜单栏图标隐藏显示管理工具||||iBar Pro-Menubar control tool||
|818|647505820|自动|RAR Extractor - Unarchiver Pro||||RAR Extractor - Unarchiver Pro||
|817|6740171321|自动|FastZipPro-专业RAR 7Z ZIP解压缩软件||||FastZipPro- RAR 7Z ZIP UnZip||
|816|1551531632|自动|自动切换输入法专业版||||AutoSwitchInput Pro||
|815|1459028801|自动|爱五笔 - 五笔编码拆字大全||||爱五笔 - 五笔编码拆字大全||
|814|6474505156|自动|照片处理工具 - 公务员考试报名确认照片审核||||照片处理工具 - 公务员考试报名确认照片审核||
|813|510620098|自动|MediaInfo||||MediaInfo||
|812|411643860|自动|DaisyDisk||||DaisyDisk||
|811|1533946416|自动|MyZip Pro-7z zip rar多线程极速压缩工具||||MyZip Pro-7z zip rar多线程极速压缩工具||
|810|457622435|自动|Yoink - 拖放也可以轻松自如||||Yoink - Better Drag and Drop||
|809|1555844307|自动|右键助手专业版||||MouseBoost Pro||
|808|1425997715|自动|解压助手专业版 - RAR ZIP Unarchiver||||RAR Extractor Pro - Unzip||
|807|6474506915|自动|便签 - 桌面便利贴||||Sticker - Desktop Notepad||
|806|1524202457|自动|时间胶囊 · 记住重要日子||||TimeCapsule2||
|805|1616792360|自动|SQLiteExplorer||||SQLiteExplorer||
|804|1622138166|自动|Change Video Speed for Safari||||Change Video Speed for Safari||
|803|1478540997|自动|zClock - 置顶时钟, 倒计时, 网速显示||||zClock - Clock & Countdown.||
|802|1450345160|自动|Color Folder 文件夹改色助手||||Color Folder Master||
|801|1612054963|自动|AppUninstaller-功能强大的卸载软件||||AppUninstaller-Uninstall Apps||
|800|1298871299|自动|电子印章制作大师企业版||||电子印章制作大师企业版||
|799|1644030069|自动|Folder by Color Pro - 文件夹图标改色||||Folder by Color Pro - Folder||
|798|668609870|自动|Rar解压利器||||Rar Sharp||
|797|1381028448|自动|百读不厌 - 听书、看书神器||||百读不厌 - 听书、看书神器||
|796|1500167033|自动|AClock - 翻页时钟与倒计时||||AClock - Digital Flip Clock||
|795|1387780159|自动|网速 & 电池||||Network & Battery||
|794|6502931430|自动|DocFlex - 文档转换||||DocFlex - Document conversion||
|793|6445882848|自动|Boom3D-5.1 Audio for Netflix||||Boom3D-5.1 Audio for Netflix||
|792|1265704574|自动|Bandizip: 压缩和解压缩||||Bandizip: Archiver||
|791|1214639260|自动|SmallImage-图片压缩神器||||SmallImage-Smart Compression||
|790|1385628859|自动|Highlighter for Safari||||Highlighter for Safari||
|789|1521805728|自动|隐藏文件保险柜 iVault  - 私密文件夹||||iVault - secure your files||
|788|697942581|自动|Disk Graph||||Disk Graph||
|787|1435568266|自动|HiSerialPort||||HiSerialPort||
|786|420874236|自动|PDFOutliner||||PDFOutliner||
|785|6472044044|自动|Toolbox for Safari||||Toolbox for Safari||
|784|1632395174|自动|CleanMyMac X Multi-License||||CleanMyMac X Multi-License||
|783|1126745697|自动|System utility. 流量监控,电池管家,硬件检测||||System utility. monitor status||
|782|1214761683|自动|iWall-动态壁纸，动态桌面引擎||||iWall-Dynamic Desktop Engine||
|781|453164367|自动|系统助手||||SystemPal||
|780|431224317|自动|Disk Drill Media Recovery||||Disk Drill Media Recovery||
|779|1415704056|自动|超级应用锁 - 密码加密||||The App Locker -Best Lock Apps||
|778|1162194131|自动|Easy New File||||Easy New File||
|777|6472813601|自动|NinjaMouse - 鼠标加速神器||||NinjaMouse - Your mouse master||
|776|1445268016|自动|清理重复文件||||Duplicate Cleaner||
|775|1494552451|自动|小说大全||||小说大全||
|774|1273980573|自动|Best Data Recovery||||Best Data Recovery||
|773|1619982017|自动|五笔拆字||||五笔拆字||
|772|1153435308|自动|inddPreview||||inddPreview||
|771|1475051844|自动|Filmage Converter Pro-视频转换&合并||||Filmage Converter Pro-MKV,AVI||
|770|1441394270|自动|Oka解压专家pro||||Oka Unarchiver Pro - Unzip RAR||
|769|6711333801|自动|实时加密货币价格、图表||||Live Crypto Prices, Charts||
|768|658182498|自动|苹果通讯录/csv转换工具-Address Book to CSV||||Address Book to CSV||
|767|6465744342|自动|iBoot - StartupDisk shortcut||||iBoot - StartupDisk shortcut||
|766|1526912781|自动|彩虹文件夹 - 文件夹图标换颜色图片||||Rainbow Folder - Icon changer||
|765|668331139|自动|Backup Scheduler: Time Editor||||Backup Scheduler: Time Editor||
|764|1261004863|自动|Data Recovery EX||||Data Recovery EX||
|763|877615577|自动|Serial||||Serial||
|762|6739523960|自动|允许 Safari 右键单击||||Allow Right Click for Safari||
|761|6444238780|自动|桌面倒计时-生活好帮手||||Countdown Desktop||
|760|6739428883|自动|TTSLite||||TTSLite||
|759|402569179|自动|Find Any File (FAF)||||Find Any File (FAF)||
|758|6745083093|自动|Coolmuster HEIC Converter||||Coolmuster HEIC Converter||
|757|1602821771|自动|Renamer - 批量重命名你的文件||||Renamer||
|756|471561604|自动|Mr. Zipper - 7Z RAR压缩解压缩||||Mr. Zipper - 7Z RAR 7ZIP||
|755|1025822138|自动|iStatistica||||iStatistica||
|754|524576324|自动|Smart Zipper Pro: Zip,Rar压缩解压缩||||Smart Zipper Pro: Rar, 7z, Zip||
|753|919005729|自动|刻录大师||||Burn||
|752|823528286|自动|Folx GO+||||Folx GO+||
|751|6444789815|自动|记事本++||||记事本++||
|750|884018914|自动|Zoоm||||Zoоm||
|749|406178496|自动|KPlayer||||KPlayer||
|748|1589912595|自动|JY字幕君 SRT导出助手 Lite||||JY Subtitle SRT Export Lite||
|747|1181029289|自动|翻页时钟专业版 - 全屏数字悬浮显示锁屏桌面灵动岛小组件||||Flip Clock Pro - time widgets||
|746|815333099|自动|Foldery||||Foldery||
|745|779114299|自动|CAD Viewer 3D||||CAD Viewer 3D||
|744|736168905|自动|DBFView||||DBFView||
|743|1357413437|自动|LightApp-轻应用浏览器||||LightApp-轻应用浏览器||
|742|1540733755|自动|Find Device:   查找设备：我的耳塞，电话，气垫||||Find Device - bluetooth finder||
|741|1328847392|自动|进程监视器 - Process Monitor||||Process Monitor||
|740|1593045116|自动|Focus & ADHD Reading - Glide||||Focus & ADHD Reading - Glide||
|739|1463966933|自动|系统助理: CPU & 内存||||iStats X: CPU & Memory||
|738|1447778660|自动|iStatistica Pro||||iStatistica Pro||
|737|1568840488|自动|AutoClicker - 自动按键||||AutoClicker - Assist click||
|736|1538700349|自动|解压助手 - 专业版 (Rar 7z Zip 解压缩工具)||||The Extractor Master||
|735|419330170|自动|Moom Classic||||Moom Classic||
|734|486626129|自动|Folder Tidy||||Folder Tidy||
|733|1389745743|自动|万能下载器||||Everything Downloader||
|732|1595306197|自动|Macaque||||Macaque||
|731|445512770|自动|Disk Diet||||Disk Diet||
|730|456609775|自动|Window Tidy||||Window Tidy||
|729|6450939701|自动|Chat One - DeepSeek AI 聊天写作助手||||Chat One - AI Chat Box||
|728|1565629813|自动|FastZip - 专业的 RAR 7Z ZIP 解压缩工具||||FastZip - RAR 7Z ZIP UnZip||
|727|1181028777|自动|翻页时钟 - 全屏数字悬浮显示待机时间锁屏桌面小组件||||Flip Clock - digital widgets||
|726|1488071784|自动|壁纸精灵 - 桌面壁纸，4k高清||||Wallpapers X - 4K Wallpaper||
|725|1552826194|自动|我的壁纸 - 良心动态壁纸||||iWallpaper - Live Wallpaper||
|724|6511220682|自动|CleanMyApp - 应用程序卸载助手||||CleanMyApp - Uninstaller||
|723|1497428978|自动|超级右键-iRightMouse||||iRightMouse||
|722|1541571038|自动|NTFS磁盘读写 - 赤友NTFS助手||||NTFS Read&Write -iBoysoft NTFS||
|721|1518518216|自动|Paper 壁纸 - 超高清4K动态壁纸, 桌面壁纸||||Paper - Live Wallpapers||
|720|6443843900|自动|iBar-强大的菜单栏图标管理工具||||iBar-Menubar icon control tool||
|719|1442745175|自动|快帆加速器-海外回国音乐视频加速器||||快帆加速器-海外回国音乐视频加速器||
|718|1630034110|自动|Bob - 翻译和 OCR 工具||||Bob - 翻译和 OCR 工具||
|717|1395152179|自动|奇游加速器 - 全球游戏畅玩||||奇游加速器 - 全球游戏畅玩||
|716|1575178082|自动|Max NTFS - NTFS磁盘读写助手||||Max NTFS - NTFS Disk Helper||
|715|1476545828|自动|MacDroid - 安卓版管理器||||MacDroid - Manager for Android||
|714|1456235760|自动|花見动态壁纸 - 4K超高清||||Live Wallpaper - 4K UHD||
|713|1599191594|自动|超级的右键助手 - 赤友右键超人||||iBoysoft MagicMenu||
|712|1514073011|自动|QuickFox-海外回国加速器追剧听歌游戏留学生必备||||QuickFox-海外回国加速器追剧听歌游戏留学生必备||
|711|1133028347|自动|Cleaner One Pro - Uninstaller||||Cleaner One Pro - Uninstaller||
|710|6450397515|自动|录音转文字-语音转文字助手||||Transcribe & Speech to text||
|709|1598771178|自动|DeviceMirror Lite -无线手机投屏||||DeviceMirror Lite -Screen Cast||
|708|1669005649|自动|TXT 阅读器 - 阅读听书摸鱼神器||||TXT Reader + AI Assistant||
|707|1525349531|自动|Snap 截图+贴图||||Snap Screenshot - Snip & Paste||
|706|646295438|自动|RAR Extractor - Unarchiver||||RAR Extractor - Unarchiver||
|705|6452726154|自动|Ultra VPN - VPN and Wifi Proxy||||Ultra VPN - VPN and Wifi Proxy||
|704|1521133201|自动|Speed Player for Safari||||Speed Player for Safari||
|703|1298486723|自动|FileZilla Pro - FTP and Cloud||||FileZilla Pro - FTP and Cloud||
|702|1081480270|自动|音频转换器 - MP3转换器 □||||The Audio Converter||
|701|1244625890|自动|傲软投屏(ApowerMirror)-无线投屏助手||||ApowerMirror- Screen Mirroring||
|700|1068435535|自动|Antivirus One - Virus Cleaner||||Antivirus One - Virus Cleaner||
|699|1576794157|自动|飞火动态壁纸-4k超清视频桌面主题壁纸引擎||||飞火动态壁纸-4k超清视频桌面主题壁纸引擎||
|698|1455463454|自动|WiFi 测网速 - Speedtest测速助手||||WiFi Speed Test Tools||
|697|1441507725|自动|解压缩专家Oka - 最好的zip rar 7z文件解压工具||||Oka Unarchiver - Unzip ZIP RAR||
|696|1535136051|自动|解压 - RAR ZIP 7Z 解压和压缩||||RAR Extractor - Unzip File||
|695|1500706402|自动|花生壳||||PhDDNS||
|694|1486294815|自动|阿里云网络客户端||||Aliyun Network Client||
|693|1637557903|自动|即刻转换 - 万能小视频音频批量格式转码工厂||||Video Converter X2||
|692|6737146353|自动|MateFox - VPN&全球网络加速器&无限流量||||KitVPN – Fast & World NetWork||
|691|1543649099|自动|超级克隆大师 - 同步或恢复手机,电脑,平板的数据和文件||||Clone My Data-Sync&Backup Data||
|690|1485671150|自动|VPN -  快滚 全球网络加速||||VPN -  快滚 全球网络加速||
|689|1570653446|自动|Focus Video - 视频压缩和格式转换器||||Focus Video - Video Converter||
|688|740355970|自动|EaseUS Data Recovery Wizard||||Data Recovery Expert||
|687|1606741874|自动|AConverter-全能音频转换,编辑,MP3转换器||||AConverter - Audio Converter||
|686|6475027113|自动|Deep Think智能助手： AI智能助理||||Deep Think智能助手： AI智能助理||
|685|1018301773|自动|AdBlocker Pro: Safari浏览器的广告拦截器||||AdBlock Pro for Safari||
|684|1551462255|自动|右键助手 - 您的好帮手||||MouseBoost - Save 1 hour daily||
|683|1466014165|自动|嗨格式录屏大师 - 专业电脑录像软件||||RecMaster Screen Recorder||
|682|1613340764|自动|屏幕检测 - 专业的显示屏检测工具||||PixelsTester - Test Monitors||
|681|1502255391|自动|Color Folder - Custom Icons||||Color Folder - Custom Icons||
|680|1467607774|自动|NCM转换器 - 转MP3||||Smart Audio Editor - ID3||
|679|1478202069|自动|幕连-简单的投屏工具||||Screen Mirroring: LetsView||
|678|6448913901|自动|全能AI - AI视频、绘画、特效、音乐、聊天、写作、数字人||||全能AI - 图生视频、文生视频、AI写歌作曲、AI智能助理||
|677|1476640331|自动|读写笔记||||读写笔记||
|676|787142064|自动|VSD Viewer & VSD Converter||||VSD Viewer & VSD Converter||
|675|1499250688|自动|壁纸管家 - 4K超高清主题桌面壁纸||||Wallpaper - HD Wallpapers||
|674|1642304143|自动|串口(网络)调试助手 Pro||||SerialPort Debug Assistant Pro||
|673|1516451072|自动|Another Desktop Manager||||Another Desktop Manager||
|672|847259925|自动|SnailSVN 专业版：与访达集成的 SVN 客户端||||SnailSVN: SVN for Finder||
|671|689176796|自动|Python Runner||||Python Runner||
|670|1459663647|自动|虚拟定位||||Virtual Location||
|669|417392270|自动|MDB ACCDB Viewer||||MDB ACCDB Viewer||
|668|847260112|自动|SnailGit 专业版：与访达集成的 Git 客户端||||SnailGit: Git for Finder||
|667|498370702|自动|RegExRX||||RegExRX||
|666|1236813619|自动|右键菜单专业版（Context Menu）||||Context Menu||
|665|955297617|自动|CodeRunner 4||||CodeRunner 4||
|664|1400977081|自动|IPYNB Viewer + Editor||||IPYNB Viewer + Editor||
|663|948079084|自动|FlashFTP - 高效FTP/SFTP文件传输客户端||||FlashFTP - Swift FTP/SFTP Client||
|662|6504210872|自动|DartShell Pro- SSH & SFTP||||DartShell Pro- SSH & SFTP||
|661|1063631769|自动|Medis - GUI for Redis||||Medis - GUI for Redis||
|660|507135296|自动|IconKit||||IconKit||
|659|429449079|自动|Patterns - The Regex App||||Patterns - The Regex App||
|658|6446094097|自动|AI 文件翻译器（文件数量不限||||AI File Translator (1 to >100)||
|657|1054575495|自动|JavaPoint||||JavaPoint||
|656|841285201|自动|Haskell||||Haskell||
|655|567740330|自动|JSON Editor||||JSON Editor||
|654|1157491961|自动|PLIST Editor||||PLIST Editor||
|653|913158085|自动|Expressions||||Expressions||
|652|1105845111|自动|Xversion||||Xversion||
|651|641027709|自动|Color Picker||||Color Picker||
|650|823961613|自动|SSH Copy||||SSH Copy||
|649|1067646949|自动|New Terminal Here||||New Terminal Here||
|648|595177179|自动|icns Tool||||icns Tool||
|647|490499048|自动|bmGlyph||||bmGlyph||
|646|556381974|自动|IconFly||||IconFly||
|645|499768540|自动|Power JSON Editor||||Power JSON Editor||
|644|1554235898|自动|Peek — A Quick Look Extension||||Peek — A Quick Look Extension||
|643|1224934068|自动|iTer - IT学习、求职面试必备||||iTer - IT learning||
|642|1615269303|自动|iCon - Create And Resize Icons||||iCon - Create And Resize Icons||
|641|686855602|自动|PHP Runner||||PHP Runner||
|640|1511935951|自动|BetterJSON for Safari||||BetterJSON for Safari||
|639|1106867065|自动|Svgsus||||Svgsus||
|638|945397020|自动|Run Python||||Run Python||
|637|536559203|自动|FlashCode - SWF to HTML5 and Objective-C converter||||FlashCode - SWF to HTML5 and Objective-C converter||
|636|1485436674|自动|A Companion for SwiftUI||||A Companion for SwiftUI||
|635|875264768|自动|Node.js HandBook||||Node.js HandBook||
|634|1360203022|自动|Socket-tcp/udp tool||||Socket-tcp/udp tool||
|633|417074533|自动|Synalyze It!||||Synalyze It!||
|632|513995545|自动|MDB Tool - For Microsoft Access||||MDB Tool - For Microsoft Access||
|631|1400050251|自动|Pythonic||||Pythonic||
|630|906185173|自动|PacketSender||||PacketSender||
|629|719577577|自动|JarPackager||||JarPackager||
|628|803736440|自动|Hex Edit Pro||||Hex Edit Pro||
|627|1410608230|自动|SQLite数据管理大师||||SQLiteMaster||
|626|685191052|自动|SVN 服务器||||SVN Server||
|625|1104615718|自动|HelloWeb||||HelloWeb||
|624|1024903185|自动|TextLab||||TextLab||
|623|946677126|自动|PDF to XLSX Master||||PDF to XLSX Master||
|622|414234859|自动|DropDMG||||DropDMG||
|621|734258109|自动|Watchdog for Xcode||||Watchdog for Xcode||
|620|535348544|自动|Folder Compare||||Folder Compare||
|619|1268616588|自动|Localizable - 翻译文件工具||||Localizable - translation file||
|618|822334407|自动|TCP Client||||TCP Client||
|617|415087689|自动|PHP Code Tester||||PHP Code Tester||
|616|1148208665|自动|ThemeInstaller||||ThemeInstaller||
|615|478570084|自动|CompareMerge||||CompareMerge||
|614|1159371870|自动|Code School for Xcode PRO - Learn Coding for iOS||||Code School for Xcode PRO - Learn Coding for iOS||
|613|1579236127|自动|UMLBoard||||UMLBoard||
|612|1054670022|自动|Adaptivity (A)||||Adaptivity (A)||
|611|1458267370|自动|HTTP Server - 局域网服务测试工具||||HTTP Server - LAN Debug Tool||
|610|1434151360|自动|PowerRightMenu - 快速新建文件||||PowerRightMenu - Fast New File||
|609|574356166|自动|CrossFTP Pro - FTP Client||||CrossFTP Pro - FTP Client||
|608|640034674|自动|AnyMP4 AVCHD Converter Player||||AnyMP4 AVCHD Converter Player||
|607|689184215|自动|JRunner for Java||||JRunner for Java||
|606|670032670|自动|JS King||||JS King||
|605|1589635432|自动|EasyPlantUML||||EasyPlantUML||
|604|1567045405|自动|golog||||Golog||
|603|689183220|自动|JS Runner||||JS Runner||
|602|1516154713|自动|推送通知-测试器||||Push Notification - Tester||
|601|467620393|自动|JavaScript Condenser||||JavaScript Condenser||
|600|689178925|自动|Perl Runner||||Perl Runner||
|599|1396408074|自动|PrettyJSON for Xcode||||PrettyJSON for Xcode||
|598|1244392031|自动|CL!ng||||CL!ng||
|597|1137451860|自动|App 预览视频转换工具||||App Preview Video Converter||
|596|1013592748|自动|C Sharp||||C Sharp||
|595|775920262|自动|unRAR Pro||||unRAR Pro||
|594|1576144037|自动|mSocket - 能传文件的Socket工具||||mSocket - Transfer large files||
|593|689175950|自动|Node Runner||||Node Runner||
|592|552407238|自动|myPoint Coordinates||||myPoint Coordinates||
|591|402383384|自动|Base - SQLite Editor||||Base - SQLite Editor||
|590|433586919|自动|CSVEdit||||CSVEdit||
|589|1076110314|自动|Smart JSON Viewer||||Smart JSON Viewer||
|588|1134593405|自动|EncryptTools||||EncryptTools||
|587|475193367|自动|Synalyze It! Pro||||Synalyze It! Pro||
|586|1167060791|自动|Import||||Import||
|585|1128674367|自动|MySQL Database Optimizer||||MySQL Database Optimizer||
|584|1604145760|自动|TinyPNG图片压缩||||Picture Compresser||
|583|1367025713|自动|Sprite 1-2-3||||Sprite 1-2-3||
|582|1070488538|自动|Icons Maker||||Icons Maker||
|581|413612688|自动|Icons||||Icons||
|580|913523893|自动|QuartzCode||||QuartzCode||
|579|477163052|自动|Linguan||||Linguan||
|578|1565766176|自动|Power YAML Editor||||Power YAML Editor||
|577|1479641484|自动|Fireworks - Effects Editor||||Fireworks - Effects Editor||
|576|1176074088|自动|Termius — Modern SSH Client||||Termius — Modern SSH Client||
|575|1102004240|自动|iHosts - /etc/hosts 编辑器||||iHosts - /etc/hosts editor||
|574|1507890049|自动|Pixeur - 取色器||||Pixeur - Screen Color Picker||
|573|6504274426|自动|termcc - SSH & SFTP Client||||termcc - SSH & SFTP Client||
|572|1491764008|自动|红色-Redis的UI||||Red 2 - UI for Redis||
|571|985614903|自动|SQLPro Studio||||SQLPro Studio||
|570|1459748650|自动|CompareMerge2||||CompareMerge2||
|569|1475741280|自动|SSH Client - Telnet & Terminal||||SSH Client - Telnet & Terminal||
|568|828466809|自动|SQLPro for MSSQL||||SQLPro for MSSQL||
|567|1547933097|自动|Socket调试器||||Socket Debugger||
|566|1516553045|自动|啜色||||Colorsip||
|565|1502044457|自动|Whisk||||Whisk||
|564|1533756032|自动|DevUtils.app||||DevUtils.app||
|563|1147023879|自动|App Image Kit - 应用的图像资源批量生成助手||||App Image Kit||
|562|1469182443|自动|SnipperApp 2||||SnipperApp 2||
|561|1570789972|自动|ESP32 WiFi OTA||||ESP32 WiFi OTA||
|560|1584637545|自动|Translate APP - 项目本地化||||Translate APP-Project Localize||
|559|1516378834|自动|推送通知-客户端||||Push Notification - Client||
|558|547166701|自动|百度网盘||||百度网盘||
|557|1014945607|自动|优酷视频-嘘国王在冬眠 全网独播||||优酷视频-嘘国王在冬眠 全网独播||
|556|1231336508|自动|腾讯视频-五十公里桃花坞5 全网独播||||腾讯视频-五十公里桃花坞5 全网独播||
|555|6741096204|自动|Deep Think AI：询问 AI 聊天机器人||||Think AI: Ask Chatbot Anything||
|554|1012296988|自动|爱奇艺-临江仙 离婚仙侠||||爱奇艺-临江仙 离婚仙侠||
|553|1327661892|自动|Xmind：思维导图||||Xmind: Mind Map||
|552|1588231633|自动|美图秀秀 - AI修图与设计工具集||||Meitu-AI Photo Editor & Design||
|551|1450246547|自动|解优 - 专业的 RAR 7Z ZIP 解压缩工具||||BestZip - Unarchive RAR&7Z&ZIP||
|550|1570349123|自动|Openly for Chrome and Firefox||||Openly for Chrome and Firefox||
|549|491854842|自动|网易有道翻译||||Youdao Translate||
|548|1247341465|自动|同花顺-股票炒股软件||||同花顺-股票炒股软件||
|547|1484905765|自动|CAD快速看图 - 天正全专业||||Fast CAD Reader||
|546|747648890|自动|Telegram||||Telegram||
|545|6450939701|自动|Chat One - DeepSeek AI 聊天写作助手||||Chat One - AI Chat Box||
|544|1565629813|自动|FastZip - 专业的 RAR 7Z ZIP 解压缩工具||||FastZip - RAR 7Z ZIP UnZip||
|543|1592987853|自动|录屏专家Omi-屏幕录制编辑软件||||Screen Recorder by Omi||
|542|1488071784|自动|壁纸精灵 - 桌面壁纸，4k高清||||Wallpapers X - 4K Wallpaper||
|541|1181028777|自动|翻页时钟 - 全屏数字悬浮显示待机时间锁屏桌面小组件||||Flip Clock - digital widgets||
|540|1485844094|自动|iShot-优秀的截图贴图录屏录音OCR翻译取色标注工具||||iShot-ScreenShot Recording OCR||
|539|6503169843|自动|人工 智能 AI Chatbot : AI 聊天 助手||||AI Chatbot : Ask AI Assistant||
|538|1552826194|自动|我的壁纸 - 良心动态壁纸||||iWallpaper - Live Wallpaper||
|537|6511220682|自动|CleanMyApp - 应用程序卸载助手||||CleanMyApp - Uninstaller||
|536|966085870|自动|滴答清单: 专注、日历、提醒事项和时间管理番茄钟||||TickTick:To-Do List, Calendar||
|535|1144400433|自动|东方财富经典版-股票开户证券炒股理财||||东方财富经典版-股票开户证券炒股理财||
|534|1497428978|自动|超级右键-iRightMouse||||iRightMouse||
|533|886103288|自动|虎牙直播HD-游戏互动直播平台||||虎牙直播HD-游戏互动直播平台||
|532|1541571038|自动|NTFS磁盘读写 - 赤友NTFS助手||||NTFS Read&Write -iBoysoft NTFS||
|531|1594288016|自动|Wink - 画质修复||||Wink: Video Enhancer & Editor||
|530|1600668116|自动|有道云笔记-笔记效率办公||||有道云笔记-笔记效率办公||
|529|6443843900|自动|iBar-强大的菜单栏图标管理工具||||iBar-Menubar icon control tool||
|528|1442745175|自动|快帆加速器-海外回国音乐视频加速器||||快帆加速器-海外回国音乐视频加速器||
|527|1518518216|自动|Paper 壁纸 - 超高清4K动态壁纸, 桌面壁纸||||Paper - Live Wallpapers||
|526|1659622164|自动|VidHub - 高清影片视频播放器，快速播放云盘网盘||||VidHub -Video Library & Player||
|525|1570563588|自动|日历清单 - 拒绝拖延 效率人生||||CalendarTask - Efficient life||
|524|734383760|自动|每日英语听力 - 英语听力的最佳途径||||每日英语听力 - 英语听力的最佳途径||
|523|1507782672|自动|Pixea||||Pixea||
|522|1259223205|自动|TunesMechanic for iTunes||||TunesMechanic for iTunes||
|521|1630034110|自动|Bob - 翻译和 OCR 工具||||Bob - 翻译和 OCR 工具||
|520|1221250572|自动|Xnip -  截图 & 标注||||Xnip - Screenshot & Annotation||
|519|1575178082|自动|Max NTFS - NTFS磁盘读写助手||||Max NTFS - NTFS Disk Helper||
|518|1619925971|自动|UPDF - 新一代 AI 智能 PDF 编辑器||||UPDF 2 - AI-Powered PDF Editor||
|517|1395152179|自动|奇游加速器 - 全球游戏畅玩||||奇游加速器 - 全球游戏畅玩||
|516|503039729|自动|Fotor图片编辑器||||Fotor: AI Photo & Video Editor||
|515|1476545828|自动|MacDroid - 安卓版管理器||||MacDroid - Manager for Android||
|514|6449164812|自动|打字通 - 打字练习软件||||打字通 - 打字练习软件||
|513|1536071582|自动|Omni Converter 全能视频音频格式转换器||||Omni Converter - Video & Audio||
|512|1456235760|自动|花見动态壁纸 - 4K超高清||||Live Wallpaper - 4K UHD||
|511|1599191594|自动|超级的右键助手 - 赤友右键超人||||iBoysoft MagicMenu||
|510|1665341561|自动|flomo浮墨笔记 - AI 加持的便签备忘||||flomo浮墨笔记 - AI 加持的便签备忘||
|509|1133028347|自动|Cleaner One Pro - Uninstaller||||Cleaner One Pro - Uninstaller||
|508|1514073011|自动|QuickFox-海外回国加速器追剧听歌游戏留学生必备||||QuickFox-海外回国加速器追剧听歌游戏留学生必备||
|507|1345035954|自动|穿梭Transocks-海外华人回国加速器||||穿梭Transocks-海外华人回国加速器||
|506|1176074088|自动|Termius — Modern SSH Client||||Termius — Modern SSH Client||
|505|1335335588|自动|全能视频播放器 - 高清音频视频播放器||||Final Video Player - MKV & MP4||
|504|1044549675|自动|Elmedia Video Player||||Elmedia Video Player||
|503|1453504509|自动|动态壁纸引擎Dynamic Wallpaper Engine||||Dynamic Wallpaper Engine||
|502|1449438542|自动|解优专业版 - 专业的 RAR 7Z ZIP 解压缩工具||||BestZip Pro - Unzip RAR&Zip&7z||
|501|470158793|自动|Keka||||Keka||
|500|1550403011|自动|超级右键专业版||||iRightMouse Pro||
|499|1611347086|自动|iShot Pro-专业的截图贴图录屏录音OCR翻译取色工具||||iShot Pro-ScreenShot Recording||
|498|6737150304|自动|iBar Pro-强大的菜单栏图标隐藏显示管理工具||||iBar Pro-Menubar control tool||
|497|647505820|自动|RAR Extractor - Unarchiver Pro||||RAR Extractor - Unarchiver Pro||
|496|6740171321|自动|FastZipPro-专业RAR 7Z ZIP解压缩软件||||FastZipPro- RAR 7Z ZIP UnZip||
|495|6742392236|自动|ClashX Pro :Service Monitoring||||ClashX Pro :Service Monitoring||
|494|1343182480|自动|东方财富领先版-股票开户证券炒股理财||||东方财富领先版-股票开户证券炒股理财||
|493|6741806831|自动|ClashX Pro - Dashboard manager||||ClashX Pro - Dashboard manager||
|492|494500492|自动|倒数日 · Days Matter for Desktop||||倒数日 · Days Matter for Desktop||
|491|951718596|自动|CAD迷你画图||||FoxCAD||
|490|1551531632|自动|自动切换输入法专业版||||AutoSwitchInput Pro||
|489|6738742748|自动|益智蜘蛛纸牌||||Puzzle Spider Solitaire.||
|488|1469774098|自动|QSpace||||QSpace||
|487|1459028801|自动|爱五笔 - 五笔编码拆字大全||||爱五笔 - 五笔编码拆字大全||
|486|1567442612|自动|Qmenu||||Qmenu||
|485|1544655904|自动|OmniReader Pro - 全能阅读管理专家||||OmniReader Pro - AI Reader||
|484|411643860|自动|DaisyDisk||||DaisyDisk||
|483|1486274102|自动|MPlayer X Pro||||MPlayer X Pro||
|482|461788075|自动|Movist||||Movist||
|481|1218171533|自动|Marklist 妙记 - 稍后阅读、笔记、待办、搜索和收藏||||Marklist - Manage Later Things||
|480|6474505156|自动|照片处理工具 - 公务员考试报名确认照片审核||||照片处理工具 - 公务员考试报名确认照片审核||
|479|510620098|自动|MediaInfo||||MediaInfo||
|478|432850619|自动|FL Studio Mobile||||FL Studio Mobile||
|477|1642304143|自动|串口(网络)调试助手 Pro||||SerialPort Debug Assistant Pro||
|476|430798174|自动|HazeOver • 干扰调节器||||HazeOver • Distraction Dimmer™||
|475|457622435|自动|Yoink - 拖放也可以轻松自如||||Yoink - Better Drag and Drop||
|474|1606275031|自动|Picture View: 图片浏览器||||Picture View: Image browser||
|473|1555844307|自动|右键助手专业版||||MouseBoost Pro||
|472|402380914|自动|Eudic 欧路词典 增强版||||Eudic 欧路词典 增强版||
|471|6738715418|自动|STEP 和 IGES 文件查看器||||STEP and IGES File Viewer||
|470|977949232|自动|Daygram - 密码日记 / 很简单时间记录日记||||Daygram : My Secret Diary||
|469|847259925|自动|SnailSVN 专业版：与访达集成的 SVN 客户端||||SnailSVN: SVN for Finder||
|468|389083586|自动|MDict||||MDict||
|467|1516451072|自动|Another Desktop Manager||||Another Desktop Manager||
|466|1482490089|自动|Tampermonkey Classic||||Tampermonkey Classic||
|465|6502828594|自动|Template for Adobe illustrator||||Template for Adobe illustrator||
|464|1622138166|自动|Change Video Speed for Safari||||Change Video Speed for Safari||
|463|1058266292|自动|妖股助手HD-优选短线强势股票||||妖股助手HD-优选短线强势股票||
|462|1478540997|自动|zClock - 置顶时钟, 倒计时, 网速显示||||zClock - Clock & Countdown.||
|461|1451273814|自动|nPlayer||||nPlayer||
|460|1533946416|自动|MyZip Pro-7z zip rar多线程极速压缩工具||||MyZip Pro-7z zip rar多线程极速压缩工具||
|459|476566660|自动|三维地球||||Earth 3D||
|458|1325456420|自动|音乐格式互换 --- NCM转换器，MP3转码器||||Music Format Converter HQ||
|457|668609870|自动|Rar解压利器||||Rar Sharp||
|456|1381028448|自动|百读不厌 - 听书、看书神器||||百读不厌 - 听书、看书神器||
|455|1269984974|自动|Markdown - 专注写作||||Markdown - Enjoy writing||
|454|991247047|自动|流程图编辑器高级版||||Flowchart Designer Premium||
|453|689176796|自动|Python Runner||||Python Runner||
|452|1265704574|自动|Bandizip: 压缩和解压缩||||Bandizip: Archiver||
|451|1199716810|自动|五子棋打谱软件||||五子棋打谱软件||
|450|1385628859|自动|Highlighter for Safari||||Highlighter for Safari||
|449|1521805728|自动|隐藏文件保险柜 iVault  - 私密文件夹||||iVault - secure your files||
|448|1632395174|自动|CleanMyMac X Multi-License||||CleanMyMac X Multi-License||
|447|775050502|自动|American Sign Language||||American Sign Language||
|446|904280696|自动|Things 3||||Things 3||
|445|1384206666|自动|DemoPro - Screen Annotation||||DemoPro - Screen Annotation||
|444|464050545|自动|Algodoo Physics||||Algodoo Physics||
|443|808501572|自动|Backgrounds||||Backgrounds||
|442|1576064082|自动|DeviceMirror Pro -无线有线手机投屏||||DeviceMirror -Screen Mirroring||
|441|6670793258|自动|LaTeX 编辑器专业版||||LaTeX Editor Pro||
|440|6474615359|自动|MathCapture - 可视化公式编辑器||||MathCapture - Equation Editor||
|439|1535623374|自动|RenameBest-文件批量重命名||||RenameBest: Rename in Batch||
|438|1459663647|自动|虚拟定位||||Virtual Location||
|437|1214761683|自动|iWall-动态壁纸，动态桌面引擎||||iWall-Dynamic Desktop Engine||
|436|796608673|自动|动物打字||||Animal Typing||
|435|966457795|自动|超级抠图 Super PhotoCut||||Super PhotoCut||
|434|1561303442|自动|人生必读百本书||||人生必读百本书||
|433|453164367|自动|系统助手||||SystemPal||
|432|1425997715|自动|解压助手专业版 - RAR ZIP Unarchiver||||RAR Extractor Pro - Unzip||
|431|431224317|自动|Disk Drill Media Recovery||||Disk Drill Media Recovery||
|430|1415704056|自动|超级应用锁 - 密码加密||||The App Locker -Best Lock Apps||
|429|1204268874|自动|歌词编辑器||||Lyrics Editor||
|428|609649363|自动|3D地球和世界地图||||Earth 3D - World Atlas||
|427|1162194131|自动|Easy New File||||Easy New File||
|426|6474506915|自动|便签 - 桌面便利贴||||Sticker - Desktop Notepad||
|425|1403919533|自动|MWeb Pro||||MWeb Pro||
|424|6472813601|自动|NinjaMouse - 鼠标加速神器||||NinjaMouse - Your mouse master||
|423|775737590|自动|iA Writer||||iA Writer||
|422|1028838684|自动|Artpaper：每日新壁纸||||Artpaper: New Wallpapers Daily||
|421|1102242042|自动|Subtitler for fcpxml||||Subtitler for fcpxml||
|420|1445268016|自动|清理重复文件||||Duplicate Cleaner||
|419|937759555|自动|Elmedia:universal video player||||Elmedia:universal video player||
|418|1313164484|自动|距离和面积测量||||Distance and Area Measure||
|417|1494552451|自动|小说大全||||小说大全||
|416|1273980573|自动|Best Data Recovery||||Best Data Recovery||
|415|522706442|自动|Sync Folders Pro||||Sync Folders Pro||
|414|6736433415|自动|DICOM 查看器||||DICOM Viewer+||
|413|1619982017|自动|五笔拆字||||五笔拆字||
|412|532441535|自动|Presentation Prompter||||Presentation Prompter||
|411|1153435308|自动|inddPreview||||inddPreview||
|410|417392270|自动|MDB ACCDB Viewer||||MDB ACCDB Viewer||
|409|1475051844|自动|Filmage Converter Pro-视频转换&合并||||Filmage Converter Pro-MKV,AVI||
|408|1441394270|自动|Oka解压专家pro||||Oka Unarchiver Pro - Unzip RAR||
|407|6711333801|自动|实时加密货币价格、图表||||Live Crypto Prices, Charts||
|406|1447010168|自动|音乐词典 - 音乐术语与表情术语词典||||Music Dictionary - Music Terms||
|405|658182498|自动|苹果通讯录/csv转换工具-Address Book to CSV||||Address Book to CSV||
|404|6465744342|自动|iBoot - StartupDisk shortcut||||iBoot - StartupDisk shortcut||
|403|1526912781|自动|彩虹文件夹 - 文件夹图标换颜色图片||||Rainbow Folder - Icon changer||
|402|584393206|自动|心电图 (Cardiograph)||||Cardiograph||
|401|668331139|自动|Backup Scheduler: Time Editor||||Backup Scheduler: Time Editor||
|400|1261004863|自动|Data Recovery EX||||Data Recovery EX||
|399|6738346322|自动|NaturalSpelling-自然拼读音标スペル||||NaturalSpelling-自然拼读音标スペル||
|398|1607691467|自动|Auto Refresh Page||||Auto Refresh Page||
|397|6446939328|自动|OmniZip Pro - 全能解压缩专家||||OmniZip Pro||
|396|877615577|自动|Serial||||Serial||
|395|432850619|自动|FL Studio Mobile||||FL Studio Mobile||
|394|1447010168|自动|音乐词典 - 音乐术语与表情术语词典||||Music Dictionary - Music Terms||
|393|1325456420|自动|音乐格式互换 --- NCM转换器，MP3转码器||||Music Format Converter HQ||
|392|514840980|自动|超级转霸:视频音乐格式转换工厂||||Total Video Converter||
|391|1643033301|自动|MIDIRMX||||MIDIRMX||
|390|1584154464|自动|MIDI Router||||MIDI Router||
|389|1204268874|自动|歌词编辑器||||Lyrics Editor||
|388|874418479|自动|音乐转换工厂||||Audio Convert Factory||
|387|963571828|自动|音频合并与分割||||Audio Merge & Split||
|386|1178295426|自动|Colibri||||Colibri||
|385|1532597159|自动|Mp3tag||||Mp3tag||
|384|554883654|自动|Metadatics||||Metadatics||
|383|1506457515|自动|Stage Plot Maker X||||Stage Plot Maker X||
|382|1567204629|自动|Ringtone Maker -Easy ringtone!||||Ringtone Maker -Easy ringtone!||
|381|963573437|自动|音频转换、合并与分割||||Audio Convert、Merge & Split||
|380|6458546013|自动|HI-Player||||HI-Player||
|379|6443536652|自动|万能音频格式转换大师—支持M4A，FLAC，AMR等格式||||Audio Convertor - M4A,FLAC,M4R||
|378|447726582|自动|iAudioConverter||||iAudioConverter||
|377|808285143|自动|myTuner Radio Pro 全球最火FM电台收音机||||myTuner Radio Pro||
|376|405537804|自动|Sound Studio||||Sound Studio||
|375|1036029895|自动|Music Convert-Audio Converter||||Music Convert-Audio Converter||
|374|492478362|自动|MidiKey||||MidiKey||
|373|402437824|自动|Ringer - Ringtone Maker||||Ringer - Ringtone Maker||
|372|1486434332|自动|文本音乐 - 简谱快速记谱||||TextMusic - Music Notation||
|371|797275229|自动|AudioTunes - FLAC, APE, WMA Converter||||AudioTunes - FLAC, APE, WMA Converter||
|370|1062190398|自动|Drummy - 节奏工作室||||Drummy - Ultimate Beat Maker||
|369|412675054|自动|Tunesify||||Tunesify||
|368|468990782|自动|Music Converter Pro||||Music Converter Pro||
|367|522349879|自动|DM1 - The Drum Machine||||DM1 - The Drum Machine||
|366|1661522614|自动|简谱记谱||||JianPu Editor||
|365|1517312650|自动|Notify for Spotify||||Notify for Spotify||
|364|455545700|自动|BitPerfect||||BitPerfect||
|363|929166131|自动|傻瓜演奏家||||easyMusic||
|362|991729082|自动|Radio||||Radio||
|361|673906093|自动|歌曲音量调节器Audio Normalizer||||Audio Normalizer - Mp3 Gain||
|360|1174330003|自动|Fine Chromatic Tuner||||Fine Chromatic Tuner||
|359|1538268059|自动|开心果节拍器 - 节拍器 纯净无广告||||Metronome - Metronome Pro||
|358|984332192|自动|Audio Edit Pro-Audio Editor||||Audio Edit Pro-Audio Editor||
|357|851766802|自动|SuperMidi - Midi音乐转换播放器||||Super Midi Convert & Play||
|356|660027017|自动|简易录音机||||Easy Audio Recorder||
|355|798738112|自动|MetroGnome||||MetroGnome||
|354|975152825|自动|Audio Edit Studio - Editor||||Audio Edit Studio - Editor||
|353|558317092|自动|Meta — Music Tag Editor||||Meta — Music Tag Editor||
|352|813546051|自动|Music Speed Changer||||Music Speed Changer||
|351|1489887480|自动|听音 - 练耳。视唱练习。||||Hearing: ear training. Piano.||
|350|444696268|自动|TunesArt||||TunesArt||
|349|972934780|自动|Audio Convert-Music Converter||||Audio Convert-Music Converter||
|348|438292371|自动|Amadeus Pro||||Amadeus Pro||
|347|568052099|自动|AmpKit - guitar amp & effects||||AmpKit - guitar amp & effects||
|346|978234147|自动|CD Burn Pro - Music CD||||CD Burn Pro - Music CD||
|345|910469258|自动|Amazing Slow Downer||||Amazing Slow Downer||
|344|1468259834|自动|miRack||||miRack||
|343|548947732|自动|Guitar Jam Tracks - 音阶教练和练习伙伴||||Guitar Jam Tracks - Scale Trainer & Practice Buddy||
|342|940526959|自动|insTuner - Chromatic Tuner for Guitar, Ukulele and String Instruments||||insTuner - Chromatic Tuner for Guitar, Ukulele and String Instruments||
|341|417725762|自动|Cross DJ||||Cross DJ||
|340|1441635265|自动|Easy MP3 Converter||||Easy MP3 Converter||
|339|1329435840|自动|Guitar Gravitas: Total ed.||||Guitar Gravitas: Total ed.||
|338|1451247572|自动|音符大师：学习音符。||||Solfa: learn musical notes||
|337|633262839|自动|FLAC转换器||||Any FLAC Converter||
|336|709019909|自动|Flac to Any Pro||||Flac to Any Pro||
|335|678772226|自动|Audio Cutter - Cut and Split Music Files||||Audio Cutter - Cut and Split Music Files||
|334|463687032|自动|MP3-Converter||||MP3-Converter||
|333|1322360459|自动|Drum Beats Metronome||||Drum Beats Metronome||
|332|416135376|自动|Fidelia||||Fidelia||
|331|975790852|自动|Audio Trim Split-Audio Editor||||Audio Trim Split-Audio Editor||
|330|425086676|自动|Decibel||||Decibel||
|329|829431988|自动|DSD Master||||DSD Master||
|328|1255792493|自动|Guitar Tabs X||||Guitar Tabs X||
|327|1188564124|自动|Master Class - Guides for Audacity||||Master Class - Guides for Audacity||
|326|1207009001|自动|Tone Generator||||Tone Generator||
|325|1313982113|自动|BPM Tap Tempo||||BPM Tap Tempo||
|324|1157672888|自动|Tempomate||||Tempomate||
|323|1357379892|自动|Menu Bar Controller for Sonos||||Menu Bar Controller for Sonos||
|322|594731639|自动|超级MP3格式转换器||||Super MP3 Converter||
|321|506232966|自动|Tag||||Tag||
|320|562799291|自动|Drum Beats+ (Rhythm Metronome, Loops & Grooves Machine)||||Drum Beats+ (Rhythm Metronome, Loops & Grooves Machine)||
|319|435040864|自动|NoSleep||||NoSleep||
|318|1661929636|自动|五线谱记谱||||Staff Editor||
|317|832335884|自动|Piano Notes Finder||||Piano Notes Finder||
|316|912509512|自动|SignalSpy - Audio Oscilloscope, Frequency Spectrum Analyzer, and more||||SignalSpy - Audio Oscilloscope, Frequency Spectrum Analyzer, and more||
|315|498787769|自动|General MIDI Player||||General MIDI Player||
|314|1464643583|自动|Audio Voice Changer||||Audio Voice Changer||
|313|886882234|自动|Tag Editor||||Tag Editor||
|312|698196505|自动|Audio Converter Pro||||Audio Converter Pro||
|311|1126098076|自动|Silenz||||Silenz||
|310|880764359|自动|Export for iTunes||||Export for iTunes||
|309|1061524108|自动|Muse: Music Player for YouTube||||Muse: Music Player for YouTube||
|308|915342927|自动|NetRadio Italy||||NetRadio Italy||
|307|1048950608|自动|Convert to Mp3 Pro - Converter||||Convert to Mp3 Pro - Converter||
|306|639386679|自动|Vector 3 - Record & Edit Audio||||Vector 3 - Record & Edit Audio||
|305|432769658|自动|TabView||||TabView||
|304|1136096513|自动|MP3音乐转换器 -  Aiseesoft||||MP3 Music Converter - Aisee||
|303|586172415|自动|Tipard 音乐转换器||||Tipard All Music Converter||
|302|571673359|自动|Tray Player||||Tray Player||
|301|1021162460|自动|Chords Compass||||Chords Compass||
|300|577400737|自动|Easy Guitar Tuner||||Easy Guitar Tuner||
|299|409957696|自动|MP3 Encoder||||MP3 Encoder||
|298|1423295407|自动|Ampado PRO - Audio Player||||Ampado PRO - Audio Player||
|297|1259223205|自动|TunesMechanic for iTunes||||TunesMechanic for iTunes||
|296|450527929|自动|djay - DJ 应用&混音器||||djay - DJ App & AI Mixer||
|295|1070455587|自动|万能MP3音频转换器：视频音乐格式工厂||||MP3 Converter - Audio Convert||
|294|1575723133|自动|音频剪辑-音频提取器&音乐剪辑mp3转换||||Audio Editor Ringtone Maker||
|293|1612790003|自动|Mp3转换器 - 音频转换器||||Audio Converter - One Click||
|292|1339124759|自动|音频剪辑 – 手机铃声制作&mp3音乐剪辑||||Audio Editor & Music Mixer||
|291|461369673|自动|VOX: MP3 & FLAC Music Player||||VOX: MP3 & FLAC Music Player||
|290|1496955576|自动|SpeakerAmp:Booster & Equalizer||||SpeakerAmp:Booster & Equalizer||
|289|1171417699|自动|吉他调音器 吉他谱 :: Guitar Gravitas||||Guitar Gravitas: Chords Scales||
|288|1594027432|自动|Flacbox||||Flacbox||
|287|1057051963|自动|Music Transfer for iTunes||||Music Transfer for iTunes||
|286|1027093462|自动|Visual Cue 无损音乐播放器 离线 flac m4a||||Visual Cue FLAC DMX MP3 Player||
|285|1594027661|自动|Evertag||||Evertag||
|284|1058801458|自动|Remixlive - Make Music & Beats||||Remixlive - Make Music & Beats||
|283|1233048948|自动|Boom3D: Volume Booster and EQ||||Boom3D: Volume Booster and EQ||
|282|1492991594|自动|EarMaster 7||||EarMaster 7||
|281|511170796|自动|Music Tag Editor||||Music Tag Editor||
|280|984278082|自动|Tag Editor 2||||Tag Editor 2||
|279|1482460738|自动|LRC Editor||||LRC Editor||
|278|982124349|自动|FLAC MP3格式转换器||||FLAC MP3 Converter||
|277|1564384601|自动|Evermusic||||Evermusic||
|276|1602757597|自动|unMix: AI Vocal Remover||||unMix - AI Vocal Remover||
|275|446363299|自动|N 音轨工作室DAW||||n-Track Studio DAW||
|274|1527105121|自动|Neural Mix Pro||||Neural Mix Pro||
|273|797590911|自动|MIDI 乐谱||||MIDI Score||
|272|1473448052|自动|钢琴伴侣：音乐和弦和规模||||Piano Companion: Chords,Scales||
|271|970044455|自动|WavePad Audio Editor||||WavePad Audio Editor||
|270|6670775367|自动|LioMusic - 音乐编辑和制作||||LioMusic - Music Editor||
|269|1437556716|自动|Mapcasts - 无广告||||Mapcasts - No Advertisement||
|268|412198565|自动|打嗝放屁弹钢琴||||Burp And Fart Piano||
|267|733258444|自动|MusicFans||||MusicFans||
|266|1049212349|自动|音频频谱检测仪 — 专业声音分析仪和分贝仪||||Spectrum Analyzer: Sound Meter||
|265|936243210|自动|MiniPlay for Spotify & iTunes||||MiniPlay for Spotify & iTunes||
|264|444425546|自动|BarTunes||||BarTunes||
|263|1128271725|自动|Keyboard Keyboard||||Keyboard Keyboard||
|262|1483373320|自动|歌词制作--创作、编辑器||||Lyrics Production Editor||
|261|1005227156|自动|future.dj pro - mix everything||||future.dj pro - mix everything||
|260|1229106549|自动|Music Tag Editor Pro||||Music Tag Editor Pro||
|259|1446942851|自动|radio NED+||||radio NED+||
|258|1550581532|自动|Vythm JR - 音乐可视化 VJ & DJ||||Vythm VJ - Music Visualizer DJ||
|257|1550403011|自动|超级右键专业版||||iRightMouse Pro||
|256|1611347086|自动|iShot Pro-专业的截图贴图录屏录音OCR翻译取色工具||||iShot Pro-ScreenShot Recording||
|255|494500492|自动|倒数日 · Days Matter for Desktop||||倒数日 · Days Matter for Desktop||
|254|1469774098|自动|QSpace||||QSpace||
|253|1567442612|自动|Qmenu||||Qmenu||
|252|1544655904|自动|OmniReader Pro - 全能阅读管理专家||||OmniReader Pro - AI Reader||
|251|430798174|自动|HazeOver • 干扰调节器||||HazeOver • Distraction Dimmer™||
|250|1218171533|自动|Marklist 妙记 - 稍后阅读、笔记、待办、搜索和收藏||||Marklist - Manage Later Things||
|249|1310686187|自动|Scrivener 3||||Scrivener 3||
|248|1482490089|自动|Tampermonkey Classic||||Tampermonkey Classic||
|247|1535623374|自动|RenameBest-文件批量重命名||||RenameBest: Rename in Batch||
|246|1114272557|自动|小历 - 小而美的日历||||小历 - 小而美的日历||
|245|1340697163|自动|Record It Pro - HD高清录制,视频录制||||Record It Pro-Screen Recorder||
|244|904280696|自动|Things 3||||Things 3||
|243|1269984974|自动|Markdown - 专注写作||||Markdown - Enjoy writing||
|242|876540291|自动|Copy 'Em||||Copy 'Em||
|241|1384206666|自动|DemoPro - Screen Annotation||||DemoPro - Screen Annotation||
|240|6670793258|自动|LaTeX 编辑器专业版||||LaTeX Editor Pro||
|239|417375580|自动|BetterSnapTool||||BetterSnapTool||
|238|1403919533|自动|MWeb Pro||||MWeb Pro||
|237|775737590|自动|iA Writer||||iA Writer||
|236|1313164484|自动|距离和面积测量||||Distance and Area Measure||
|235|1607691467|自动|Auto Refresh Page||||Auto Refresh Page||
|234|6446939328|自动|OmniZip Pro - 全能解压缩专家||||OmniZip Pro||
|233|1541983985|自动|Sketch 3D: Make 3D Easily||||Sketch 3D: Make 3D Easily||
|232|1639698270|自动|校准猫 (CalibCat Display) 显示器伽马控制||||CalibCat Display Gamma Control||
|231|1528890965|自动|TextSniper - OCR, Copy & Paste||||TextSniper - OCR, Copy & Paste||
|230|420212497|自动|Byword||||Byword||
|229|725408432|自动|PDF Professional Suite||||PDF Professional Suite||
|228|1441958036|自动|SideNotes – Screen Edge Notes||||SideNotes – Screen Edge Notes||
|227|434808346|自动|SimpleMind Pro||||SimpleMind Pro||
|226|407412840|自动|DataGraph||||DataGraph||
|225|950512380|自动|Notepad+ - 简单，方便，快速地编辑.TXT文件||||Notepad+ - Simple Document and Quick Note||
|224|1368905598|自动|Screencast – Screen Recorder||||Screencast – Screen Recorder||
|223|1166066070|自动|Bumpr||||Bumpr||
|222|6466263582|自动|MouseXY||||MouseXY||
|221|6563146670|自动|文字喵探 专业版||||Miaotracer pro||
|220|866773894|自动|Quiver - take better notes||||Quiver - take better notes||
|219|1414457383|自动|ToMenu - 搬文工||||ToMenu - New&Move File Quickly||
|218|1105814268|自动|番茄钟 - 最好用的番茄工作法计时工具||||Focus Timer：Focus mind on work||
|217|1156402585|自动|Light Browser||||Light Browser||
|216|1519213509|自动|iPreview - 强大好用的Quick Look扩展程序||||iPreview - Powerful Quick Look||
|215|1472854234|自动|Copy+ 剪贴板历史记录管理器、私人数据收藏夹||||Copy+ Manage clipboard history||
|214|1488905707|自动|Noteshelf - 2||||Noteshelf - 2||
|213|1505869474|自动|Pro Mouse||||Pro Mouse||
|212|6738089759|自动|隐藏鼠标光标||||Hide Mouse Cursor||
|211|902351149|自动|Zip Password Recovery||||Zip Password Recovery||
|210|6450966627|自动|Final Draft 13||||Final Draft 13||
|209|1272114820|自动|Lock Pro||||Lock Pro||
|208|1181766626|自动|Adware Zap - Malware Cleaner||||Adware Zap - Malware Cleaner||
|207|1609752330|自动|Surfingkeys||||Surfingkeys||
|206|796275163|自动|文件管理器Total Manager - Files Commander||||Total Manager: Files Commander & Ftp Remote Client||
|205|1277179284|自动|FSNotes||||FSNotes||
|204|577085396|自动|Unclutter||||Unclutter||
|203|468406330|自动|WPXO||||WPXO||
|202|568020055|自动|Scapple||||Scapple||
|201|990588172|自动|Gestimer (Legacy)||||Gestimer (Legacy)||
|200|1185528129|自动|互联网翻译专业 .||||Internet Translator Pro .||
|199|552664144|自动|PDF Max Pro||||PDF Max Pro||
|198|632455315|自动|为专业Excel模板||||Templates for Excel Pro||
|197|1143437985|自动|GoodTask||||GoodTask||
|196|1459987506|自动|清理精灵 - 垃圾清理大师||||Cleaner X - clear cache||
|195|895264364|自动|DjVu Reader Pro||||DjVu Reader Pro||
|194|686459498|自动|PaperShip - Mendeley & Zotero||||PaperShip - Mendeley & Zotero||
|193|695406827|自动|Dropzone 3||||Dropzone 3||
|192|702816521|自动|Unibox||||Unibox||
|191|412347921|自动|OmmWriter||||OmmWriter||
|190|1093111311|自动|3D CAD Graphic Modeling Design||||3D CAD Graphic Modeling Design||
|189|970502923|自动|Typeeto: remote BT keyboard||||Typeeto: remote BT keyboard||
|188|493057152|自动|DB-Text||||DB-Text||
|187|454347770|自动|iCircuit||||iCircuit||
|186|1286489308|自动|Flat Tomato||||Flat Tomato||
|185|477670270|自动|2Do||||2Do||
|184|1445040281|自动|Translate for Safari||||Translate for Safari||
|183|524373870|自动|Due ～ 快速提醒、定时器||||Due — Reminders & Timers||
|182|974929595|自动|Notions||||Notions||
|181|1507246666|自动|Presentify - Screen Annotation||||Presentify - Screen Annotation||
|180|686398447|自动|茄子文字||||Cheese Writer||
|179|570384149|自动|JPG转PDF转换器||||JPG to PDF Converter||
|178|418926501|自动|Timer by Ten||||Timer by Ten||
|177|1489287299|自动|PDF转Word||||PDF To Word Helper||
|176|685953216|自动|Instashare - Transfer files||||Instashare - Transfer files||
|175|995838410|自动|Browser Ninja||||Browser Ninja||
|174|1482778901|自动|Hungrymark||||Hungrymark||
|173|408975584|自动|Todo||||Todo||
|172|1178801474|自动|Translator & Voice Collection||||Translator & Voice Collection||
|171|1115551582|自动|Doc Mate: for MS Office||||Doc Mate: for MS Office||
|170|566210419|自动|PDF to Word +||||PDF to Word +||
|169|1088311275|自动|Easy Guide For Microsoft Excel||||Easy Guide For Microsoft Excel||
|168|409222199|自动|Cyberduck||||Cyberduck||
|167|890031187|自动|Marked 2 - Markdown Preview||||Marked 2 - Markdown Preview||
|166|1175751480|自动|语言学家：立即翻译||||Translate Now: Linguist||
|165|1448026988|自动|便笺板||||Memo Board||
|164|735128047|自动|PDF Reader Pro: 编辑、转换PDF文档||||PDF Reader Pro: Edit & Convert||
|163|1265723161|自动|Podcast Soundboard||||Podcast Soundboard||
|162|1460795742|自动|小便签 - 计时器、倒计时、待办事项||||iNote -Sticky Notes &Countdown||
|161|778813618|自动|语音备忘录||||Voice Memos+||
|160|1128242453|自动|ProTranslate - 翻译官||||Pro Translate - translator app||
|159|547166701|自动|百度网盘||||百度网盘||
|158|6741096204|自动|Deep Think AI：询问 AI 聊天机器人||||Think AI: Ask Chatbot Anything||
|157|1327661892|自动|Xmind：思维导图||||Xmind: Mind Map||
|156|1570349123|自动|Openly for Chrome and Firefox||||Openly for Chrome and Firefox||
|155|491854842|自动|网易有道翻译||||Youdao Translate||
|154|1247341465|自动|同花顺-股票炒股软件||||同花顺-股票炒股软件||
|153|1484905765|自动|CAD快速看图 - 天正全专业||||Fast CAD Reader||
|152|747648890|自动|Telegram||||Telegram||
|151|6450939701|自动|Chat One - DeepSeek AI 聊天写作助手||||Chat One - AI Chat Box||
|150|1565629813|自动|FastZip - 专业的 RAR 7Z ZIP 解压缩工具||||FastZip - RAR 7Z ZIP UnZip||
|149|1592987853|自动|录屏专家Omi-屏幕录制编辑软件||||Screen Recorder by Omi||
|148|1488071784|自动|壁纸精灵 - 桌面壁纸，4k高清||||Wallpapers X - 4K Wallpaper||
|147|1181028777|自动|翻页时钟 - 全屏数字悬浮显示待机时间锁屏桌面小组件||||Flip Clock - digital widgets||
|146|1485844094|自动|iShot-优秀的截图贴图录屏录音OCR翻译取色标注工具||||iShot-ScreenShot Recording OCR||
|145|6503169843|自动|人工 智能 AI Chatbot : AI 聊天 助手||||AI Chatbot : Ask AI Assistant||
|144|1552826194|自动|我的壁纸 - 良心动态壁纸||||iWallpaper - Live Wallpaper||
|143|6511220682|自动|CleanMyApp - 应用程序卸载助手||||CleanMyApp - Uninstaller||
|142|966085870|自动|滴答清单: 专注、日历、提醒事项和时间管理番茄钟||||TickTick:To-Do List, Calendar||
|141|1144400433|自动|东方财富经典版-股票开户证券炒股理财||||东方财富经典版-股票开户证券炒股理财||
|140|1497428978|自动|超级右键-iRightMouse||||iRightMouse||
|139|886103288|自动|虎牙直播HD-游戏互动直播平台||||虎牙直播HD-游戏互动直播平台||
|138|1541571038|自动|NTFS磁盘读写 - 赤友NTFS助手||||NTFS Read&Write -iBoysoft NTFS||
|137|1594288016|自动|Wink - 画质修复||||Wink: Video Enhancer & Editor||
|136|1600668116|自动|有道云笔记-笔记效率办公||||有道云笔记-笔记效率办公||
|135|6443843900|自动|iBar-强大的菜单栏图标管理工具||||iBar-Menubar icon control tool||
|134|1442745175|自动|快帆加速器-海外回国音乐视频加速器||||快帆加速器-海外回国音乐视频加速器||
|133|1518518216|自动|Paper 壁纸 - 超高清4K动态壁纸, 桌面壁纸||||Paper - Live Wallpapers||
|132|1659622164|自动|VidHub - 高清影片视频播放器，快速播放云盘网盘||||VidHub -Video Library & Player||
|131|1570563588|自动|日历清单 - 拒绝拖延 效率人生||||CalendarTask - Efficient life||
|130|734383760|自动|每日英语听力 - 英语听力的最佳途径||||每日英语听力 - 英语听力的最佳途径||
|129|1507782672|自动|Pixea||||Pixea||
|128|1259223205|自动|TunesMechanic for iTunes||||TunesMechanic for iTunes||
|127|1630034110|自动|Bob - 翻译和 OCR 工具||||Bob - 翻译和 OCR 工具||
|126|1221250572|自动|Xnip -  截图 & 标注||||Xnip - Screenshot & Annotation||
|125|1575178082|自动|Max NTFS - NTFS磁盘读写助手||||Max NTFS - NTFS Disk Helper||
|124|1619925971|自动|UPDF - 新一代 AI 智能 PDF 编辑器||||UPDF 2 - AI-Powered PDF Editor||
|123|1395152179|自动|奇游加速器 - 全球游戏畅玩||||奇游加速器 - 全球游戏畅玩||
|122|503039729|自动|Fotor图片编辑器||||Fotor: AI Photo & Video Editor||
|121|1476545828|自动|MacDroid - 安卓版管理器||||MacDroid - Manager for Android||
|120|6449164812|自动|打字通 - 打字练习软件||||打字通 - 打字练习软件||
|119|1536071582|自动|Omni Converter 全能视频音频格式转换器||||Omni Converter - Video & Audio||
|118|1456235760|自动|花見动态壁纸 - 4K超高清||||Live Wallpaper - 4K UHD||
|117|1599191594|自动|超级的右键助手 - 赤友右键超人||||iBoysoft MagicMenu||
|116|1665341561|自动|flomo浮墨笔记 - AI 加持的便签备忘||||flomo浮墨笔记 - AI 加持的便签备忘||
|115|1133028347|自动|Cleaner One Pro - Uninstaller||||Cleaner One Pro - Uninstaller||
|114|1514073011|自动|QuickFox-海外回国加速器追剧听歌游戏留学生必备||||QuickFox-海外回国加速器追剧听歌游戏留学生必备||
|113|1345035954|自动|穿梭Transocks-海外华人回国加速器||||穿梭Transocks-海外华人回国加速器||
|112|1176074088|自动|Termius — Modern SSH Client||||Termius — Modern SSH Client||
|111|1335335588|自动|全能视频播放器 - 高清音频视频播放器||||Final Video Player - MKV & MP4||
|110|1044549675|自动|Elmedia Video Player||||Elmedia Video Player||
|109|1453504509|自动|动态壁纸引擎Dynamic Wallpaper Engine||||Dynamic Wallpaper Engine||
|108|1449438542|自动|解优专业版 - 专业的 RAR 7Z ZIP 解压缩工具||||BestZip Pro - Unzip RAR&Zip&7z||
|107|470158793|自动|Keka||||Keka||
|106|1550403011|自动|超级右键专业版||||iRightMouse Pro||
|105|1611347086|自动|iShot Pro-专业的截图贴图录屏录音OCR翻译取色工具||||iShot Pro-ScreenShot Recording||
|104|6737150304|自动|iBar Pro-强大的菜单栏图标隐藏显示管理工具||||iBar Pro-Menubar control tool||
|103|647505820|自动|RAR Extractor - Unarchiver Pro||||RAR Extractor - Unarchiver Pro||
|102|6740171321|自动|FastZipPro-专业RAR 7Z ZIP解压缩软件||||FastZipPro- RAR 7Z ZIP UnZip||
|101|6742392236|自动|ClashX Pro :Service Monitoring||||ClashX Pro :Service Monitoring||
|100|1343182480|自动|东方财富领先版-股票开户证券炒股理财||||东方财富领先版-股票开户证券炒股理财||
|99|6741806831|自动|ClashX Pro - Dashboard manager||||ClashX Pro - Dashboard manager||
|98|494500492|自动|倒数日 · Days Matter for Desktop||||倒数日 · Days Matter for Desktop||
|97|951718596|自动|CAD迷你画图||||FoxCAD||
|96|1551531632|自动|自动切换输入法专业版||||AutoSwitchInput Pro||
|95|6738742748|自动|益智蜘蛛纸牌||||Puzzle Spider Solitaire.||
|94|1469774098|自动|QSpace||||QSpace||
|93|1459028801|自动|爱五笔 - 五笔编码拆字大全||||爱五笔 - 五笔编码拆字大全||
|92|1567442612|自动|Qmenu||||Qmenu||
|91|1544655904|自动|OmniReader Pro - 全能阅读管理专家||||OmniReader Pro - AI Reader||
|90|411643860|自动|DaisyDisk||||DaisyDisk||
|89|1486274102|自动|MPlayer X Pro||||MPlayer X Pro||
|88|461788075|自动|Movist||||Movist||
|87|1218171533|自动|Marklist 妙记 - 稍后阅读、笔记、待办、搜索和收藏||||Marklist - Manage Later Things||
|86|6474505156|自动|照片处理工具 - 公务员考试报名确认照片审核||||照片处理工具 - 公务员考试报名确认照片审核||
|85|510620098|自动|MediaInfo||||MediaInfo||
|84|432850619|自动|FL Studio Mobile||||FL Studio Mobile||
|83|1642304143|自动|串口(网络)调试助手 Pro||||SerialPort Debug Assistant Pro||
|82|430798174|自动|HazeOver • 干扰调节器||||HazeOver • Distraction Dimmer™||
|81|457622435|自动|Yoink - 拖放也可以轻松自如||||Yoink - Better Drag and Drop||
|80|1606275031|自动|Picture View: 图片浏览器||||Picture View: Image browser||
|79|1555844307|自动|右键助手专业版||||MouseBoost Pro||
|78|402380914|自动|Eudic 欧路词典 增强版||||Eudic 欧路词典 增强版||
|77|6738715418|自动|STEP 和 IGES 文件查看器||||STEP and IGES File Viewer||
|76|977949232|自动|Daygram - 密码日记 / 很简单时间记录日记||||Daygram : My Secret Diary||
|75|847259925|自动|SnailSVN 专业版：与访达集成的 SVN 客户端||||SnailSVN: SVN for Finder||
|74|389083586|自动|MDict||||MDict||
|73|1516451072|自动|Another Desktop Manager||||Another Desktop Manager||
|72|1482490089|自动|Tampermonkey Classic||||Tampermonkey Classic||
|71|6502828594|自动|Template for Adobe illustrator||||Template for Adobe illustrator||
|70|1622138166|自动|Change Video Speed for Safari||||Change Video Speed for Safari||
|69|1058266292|自动|妖股助手HD-优选短线强势股票||||妖股助手HD-优选短线强势股票||
|68|1478540997|自动|zClock - 置顶时钟, 倒计时, 网速显示||||zClock - Clock & Countdown.||
|67|1451273814|自动|nPlayer||||nPlayer||
|66|1533946416|自动|MyZip Pro-7z zip rar多线程极速压缩工具||||MyZip Pro-7z zip rar多线程极速压缩工具||
|65|476566660|自动|三维地球||||Earth 3D||
|64|1325456420|自动|音乐格式互换 --- NCM转换器，MP3转码器||||Music Format Converter HQ||
|63|668609870|自动|Rar解压利器||||Rar Sharp||
|62|1381028448|自动|百读不厌 - 听书、看书神器||||百读不厌 - 听书、看书神器||
|61|1269984974|自动|Markdown - 专注写作||||Markdown - Enjoy writing||
|60|991247047|自动|流程图编辑器高级版||||Flowchart Designer Premium||
|59|689176796|自动|Python Runner||||Python Runner||
|58|1265704574|自动|Bandizip: 压缩和解压缩||||Bandizip: Archiver||
|57|1199716810|自动|五子棋打谱软件||||五子棋打谱软件||
|56|1385628859|自动|Highlighter for Safari||||Highlighter for Safari||
|55|1521805728|自动|隐藏文件保险柜 iVault  - 私密文件夹||||iVault - secure your files||
|54|1632395174|自动|CleanMyMac X Multi-License||||CleanMyMac X Multi-License||
|53|775050502|自动|American Sign Language||||American Sign Language||
|52|904280696|自动|Things 3||||Things 3||
|51|1384206666|自动|DemoPro - Screen Annotation||||DemoPro - Screen Annotation||
|50|464050545|自动|Algodoo Physics||||Algodoo Physics||
|49|808501572|自动|Backgrounds||||Backgrounds||
|48|1576064082|自动|DeviceMirror Pro -无线有线手机投屏||||DeviceMirror -Screen Mirroring||
|47|6670793258|自动|LaTeX 编辑器专业版||||LaTeX Editor Pro||
|46|6474615359|自动|MathCapture - 可视化公式编辑器||||MathCapture - Equation Editor||
|45|1535623374|自动|RenameBest-文件批量重命名||||RenameBest: Rename in Batch||
|44|1459663647|自动|虚拟定位||||Virtual Location||
|43|1214761683|自动|iWall-动态壁纸，动态桌面引擎||||iWall-Dynamic Desktop Engine||
|42|796608673|自动|动物打字||||Animal Typing||
|41|966457795|自动|超级抠图 Super PhotoCut||||Super PhotoCut||
|40|1561303442|自动|人生必读百本书||||人生必读百本书||
|39|453164367|自动|系统助手||||SystemPal||
|38|1425997715|自动|解压助手专业版 - RAR ZIP Unarchiver||||RAR Extractor Pro - Unzip||
|37|431224317|自动|Disk Drill Media Recovery||||Disk Drill Media Recovery||
|36|1415704056|自动|超级应用锁 - 密码加密||||The App Locker -Best Lock Apps||
|35|1204268874|自动|歌词编辑器||||Lyrics Editor||
|34|609649363|自动|3D地球和世界地图||||Earth 3D - World Atlas||
|33|1162194131|自动|Easy New File||||Easy New File||
|32|6474506915|自动|便签 - 桌面便利贴||||Sticker - Desktop Notepad||
|31|1403919533|自动|MWeb Pro||||MWeb Pro||
|30|6472813601|自动|NinjaMouse - 鼠标加速神器||||NinjaMouse - Your mouse master||
|29|775737590|自动|iA Writer||||iA Writer||
|28|1028838684|自动|Artpaper：每日新壁纸||||Artpaper: New Wallpapers Daily||
|27|1102242042|自动|Subtitler for fcpxml||||Subtitler for fcpxml||
|26|1445268016|自动|清理重复文件||||Duplicate Cleaner||
|25|937759555|自动|Elmedia:universal video player||||Elmedia:universal video player||
|24|1313164484|自动|距离和面积测量||||Distance and Area Measure||
|23|1494552451|自动|小说大全||||小说大全||
|22|1273980573|自动|Best Data Recovery||||Best Data Recovery||
|21|522706442|自动|Sync Folders Pro||||Sync Folders Pro||
|20|6736433415|自动|DICOM 查看器||||DICOM Viewer+||
|19|1619982017|自动|五笔拆字||||五笔拆字||
|18|532441535|自动|Presentation Prompter||||Presentation Prompter||
|17|1153435308|自动|inddPreview||||inddPreview||
|16|417392270|自动|MDB ACCDB Viewer||||MDB ACCDB Viewer||
|15|1475051844|自动|Filmage Converter Pro-视频转换&合并||||Filmage Converter Pro-MKV,AVI||
|14|1441394270|自动|Oka解压专家pro||||Oka Unarchiver Pro - Unzip RAR||
|13|6711333801|自动|实时加密货币价格、图表||||Live Crypto Prices, Charts||
|12|1447010168|自动|音乐词典 - 音乐术语与表情术语词典||||Music Dictionary - Music Terms||
|11|658182498|自动|苹果通讯录/csv转换工具-Address Book to CSV||||Address Book to CSV||
|10|6465744342|自动|iBoot - StartupDisk shortcut||||iBoot - StartupDisk shortcut||
|9|1526912781|自动|彩虹文件夹 - 文件夹图标换颜色图片||||Rainbow Folder - Icon changer||
|8|584393206|自动|心电图 (Cardiograph)||||Cardiograph||
|7|668331139|自动|Backup Scheduler: Time Editor||||Backup Scheduler: Time Editor||
|6|1261004863|自动|Data Recovery EX||||Data Recovery EX||
|5|6738346322|自动|NaturalSpelling-自然拼读音标スペル||||NaturalSpelling-自然拼读音标スペル||
|4|1607691467|自动|Auto Refresh Page||||Auto Refresh Page||
|3|6446939328|自动|OmniZip Pro - 全能解压缩专家||||OmniZip Pro||
|2|877615577|自动|Serial||||Serial||
|1|1448326351|自动|数据恢复||||❌||

# 运行机制及流程
整个机制依赖于 `GitHub Actions` 提供的定时任务，每隔 `60分钟` 执行一次，整体流程如下：
1. 获取付费排行榜的应用信息
2. 更新跟踪的应用列表
3. 获取应用最新价格信息
   1. 通过 [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1) 获取应用详细信息和 `应用本体` 的价格
   2. 基于上一步获取的应用详情链接，解析链接获取 `App 内购买项目` 的价格
4. 读取已存储价格信息
5. 计算出折扣信息
6. 储存最新价格信息
7. 更新 `RSS` 文件
8. 推送通知到 `Telegram` 
9. 推送通知到 `钉钉` 
10. 更新 `README.md` 
11. 提交 `Git` 更新

以上流程走完，如果有折扣信息，订阅了 `RSS 源` 和 `Telegram 频道` 的朋友，会收到推送
# 如何参与贡献

## 1. 补充 `国家或地区` 或 `应用` 
需要有一定的 `TypeScript` 语言基础，下面是大致的操作步骤，如果觉得上手有难度，可以提 `Issue` 
* 补充 `国家或地区` 
   1. 获取 `国家或地区` 的 `编码` 
      1. 在你的苹果设备打开 `App Store` 应用
      2. 打开 `App Store` 中任何一个应用的详情
      3. 点击 `分享按钮` 
      4. 点击 `拷贝链接` 
      5. 将拷贝的 `链接` 粘贴至任何可以输入的地方，例如记事本
         * 你将获得类似的一个链接地址：https://apps.apple.com/us/app/pages/id409201541?mt=12&l=en-US
         * 它的规则是：协议://apps.apple.com/国家或地区的编码/app/应用的名称/id应用的ID?x1=x1&x2=x2
         * 例如从这个 https://apps.apple.com/us/app/pages/id409201541?mt=12&l=en-US 链接获取到的 `编码` 就是 `us` 
   2. 修改 `global.d.ts` 
      * 假如你获取的编码是 `xxx `
      * 修改前类型是： `type Region = 'cn' | 'hk' | 'mo' | 'tw' | 'us'` 
      * 修改后的类型： `type Region = 'cn' | 'hk' | 'mo' | 'tw' | 'us' | 'xxx'` 
   3. 修改 `appinfo.config.ts` 
      1. 补充 `regions` 变量声明
      2. 补充 `getRegionNameMap` 变量声明
      3. 补充 `regionInAppPurchasesTextMap` 变量声明
      4. 补充 `regionLanguageCodeMap` 变量声明
      5. 补充 `regionTimezoneMap` 变量声明
* 补充 `应用` 
   1. 获取 `应用` 的 `ID` 
      1. 在你的苹果设备打开 `App Store` 应用
      2. 打开 `App Store` 中你想添加应用的详情
      3. 点击 `分享按钮` 
      4. 点击 `拷贝链接` 
      5. 将拷贝的 `链接` 粘贴至任何可以输入的地方，例如记事本
         * 你将获得类似的一个链接地址：https://apps.apple.com/us/app/pages/id409201541?mt=12&l=en-US
         * 它的规则是：协议://apps.apple.com/国家或地区的编码/app/应用的名称/id应用的ID?x1=x1&x2=x2
         * 例如从这个 https://apps.apple.com/us/app/pages/id409201541?mt=12&l=en-US 链接获取到的 `ID` 就是 `409201541` 
   2. 修改 `appinfo.config.ts` 
      1. 补充 `appConfig` 变量声明
* 最后将你的提交合并到本项目的 `main` 分支


## 2. 其他
若不想参与编码实现，只是有好的想法或者是发现 bug 直接提 `Issue` <br />若想参与编码实现，由于现有的逻辑较多，贸然改动可能会影响已储存数据，也是先提 `Issue` ，后续可以根据其影响模块或难易程度来决定指派任务
# Star History
<a href="https://star-history.com/#eyelly-wu/appstore-discounts&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)"srcset="https://api.star-history.com/svg?repos=eyelly-wu/appstore-discounts&type=Date&theme=dark"></source><source media="(prefers-color-scheme: light)"srcset="https://api.star-history.com/svg?repos=eyelly-wu/appstore-discounts&type=Date"></source><img alt="Star History Chart"src="https://api.star-history.com/svg?repos=eyelly-wu/appstore-discounts&type=Date" />
  </picture>
</a>

# License
[MIT](./LICENSE)

Copyright (c) 2024-present Eyelly Wu