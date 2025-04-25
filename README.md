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
So far, we've covered `6` `Countries or Regions` and  `950` `Apps` <br />Push notifications will only be sent when there are discounts for the listed  `Country or Region`  and  `App`  below. If your  `Country or Region`  or favorite  `App`  is not on the list, feel free to add it<br />
>Special Note:  `❌`  in the table below indicates that the app does not exist in the current  `Country or Region` 's  `App Store` <br />If certain apps in the list frequently offer discounts to attract you to install and use them, and you successfully get attracted to install and use them, but end up uninstalling the app due to poor user experience. For such cases, feedback is welcome via  `Issue` . If an app receives more than  `10`  complaints, its discount information push notifications are likely to be banned<br />The application currently marked by  ~~Strikethrough~~  indicates that it has been banned from push notifications

|Serial Number|App ID|Mainland China（cn）|Hong Kong, China（hk）|Macao, China（mo）|Taiwan, China（tw）|United States（us）|Türkiye（tr）|
|:-|:-|:-|:-|:-|:-|:-|:-|
|1|537280156|❌|Raiden Legacy|Raiden Legacy|Raiden Legacy|Raiden Legacy|Raiden Legacy|
|2|635644097|调音器 by Piascore|Tuner by Piascore|Tuner by Piascore|Tuner by Piascore|Tuner by Piascore|Tuner by Piascore|
|3|727544019|❌|Street Kart #1 Go Kart Game|Street Kart #1 Go Kart Game|Street Kart #1 Go Kart Game|Street Kart #1 Go Kart Game|Street Kart #1 Esports Game|
|4|950812012|❌|Alto's Adventure|Alto's Adventure|Alto's Adventure|Alto's Adventure|Alto's Adventure|
|5|1001096601|❌|1941 Frozen Front Premium|1941 Frozen Front Premium|1941 Frozen Front Premium|1941 Frozen Front Premium|1941 Frozen Front Premium|
|6|1439889483|❌|Construction Simulator 3|Construction Simulator 3|Construction Simulator 3|Construction Simulator 3|Construction Simulator 3|
|7|1562555975|D2助手(专业版) for 暗黑破坏神2重制版|D2助手(專業版) for 暗黑破壞神2重製版|D2助手(專業版) for 暗黑破壞神2重製版|D2助手(專業版) for 暗黑破壞神2重製版|D2 Pal Pro for Diablo2|D2 Pal Pro for Diablo2|
|8|1567658979|SkySafari 7 Pro|SkySafari 7 Pro|SkySafari 7 Pro|SkySafari 7 Pro|SkySafari 7 Pro|SkySafari 7 Pro|
|9|6467822375|❌|Auto Redial App|Auto Redial App|Auto Redial App|Auto Redial App|Auto Redial App|
|10|329772936|iDeco Pro|iDeco Pro|iDeco Pro|iDeco Pro|iDeco Pro|iDeco Pro|
|11|394057299|❌|Battleheart|Battleheart|Battleheart|Battleheart|Battleheart|
|12|499470113|FE文件管理器|FE File Explorer Pro|FE File Explorer Pro|FE File Explorer Pro|FE File Explorer Pro|FE File Explorer Pro|
|13|666508823|❌|Battleheart Legacy|Battleheart Legacy|Battleheart Legacy|Battleheart Legacy|Battleheart Legacy|
|14|792638268|❌|合戰忍者村物語|合戰忍者村物語|合戰忍者村物語|Ninja Village|Ninja Village|
|15|1095883970|芳香乐活|芳香樂活|芳香樂活|芳香樂活|芳香樂活|芳香樂活|
|16|1232791258|❌|Battleheart 2|Battleheart 2|Battleheart 2|Battleheart 2|Battleheart 2|
|17|1600925588|GR Linker - Image Sync|GR Linker - Image Sync|GR Linker - Image Sync|GR Linker - Image Sync|GR Linker - Image Sync|GR Linker - Image Sync|
|18|6474479684|Spark - Ren'Py 小说们|Spark - Ren'Py 小說們|Spark - Ren'Py 小說們|Spark - Ren'Py 小說們|Spark - Ren'Py Novels|Spark - Ren'Py Novels|
|19|6466296603|❌|The Last Game|The Last Game|The Last Game|The Last Game|The Last Game|
|20|6670402289|❌|Looking for Aliens|Looking for Aliens|Looking for Aliens|Looking for Aliens|Looking for Aliens|
|21|459947180|LectroRM|LectroRM|LectroRM|LectroRM|LectroRM|LectroRM|
|22|1491196899|❌|Papa's Bakeria To Go!|Papa's Bakeria To Go!|Papa's Bakeria To Go!|Papa's Bakeria To Go!|Papa's Bakeria To Go!|
|23|1559183447|PoPo日记 - 心情日记本,记录情绪手账和记事本|PoPo日记 - 心情日记本,记录情绪手账和记事本|PoPo日记 - 心情日记本,记录情绪手账和记事本|PoPo日记 - 心情日记本,记录情绪手账和记事本|PoPo日记 - 心情日记本,记录情绪手账和记事本|PoPo日记 - 心情日记本,记录情绪手账和记事本|
|24|1041260001|❌|FINAL FANTASY Ⅸ|FINAL FANTASY Ⅸ|FINAL FANTASY Ⅸ|FINAL FANTASY Ⅸ|FINAL FANTASY Ⅸ|
|25|1059218666|Litchi for DJI Drones|Litchi for DJI Drones|Litchi for DJI Drones|Litchi for DJI Drones|Litchi for DJI Drones|Litchi for DJI Drones|
|26|1059911569|❌|Rusty Lake Hotel|Rusty Lake Hotel|Rusty Lake Hotel|Rusty Lake Hotel|Rusty Lake Hotel|
|27|1202650514|HealthFit|HealthFit|HealthFit|HealthFit|HealthFit|HealthFit|
|28|1230231705|❌|The Witness|The Witness|The Witness|The Witness|The Witness|
|29|1441522083|❌|Morphing LED Banner|Morphing LED Banner|Morphing LED Banner|Morphing LED Banner|Morphing LED Banner|
|30|1492041539|❌|FINAL FANTASY VI|FINAL FANTASY VI|FINAL FANTASY VI|FINAL FANTASY VI|FINAL FANTASY VI|
|31|1498778559|MindPage|MindPage|MindPage|MindPage|MindPage|MindPage|
|32|1533709428|❌|Pocket City 2|Pocket City 2|Pocket City 2|Pocket City 2|Pocket City 2|
|33|1559871386|ehliyet Sınav Sorular 2022 PRO|ehliyet Sınav Sorular 2022 PRO|ehliyet Sınav Sorular 2022 PRO|ehliyet Sınav Sorular 2022 PRO|ehliyet Sınav Sorular 2022 PRO|ehliyet Sınav Sorular 2022 PRO|
|34|1560779038|伤寒论条阅|伤寒论条阅|伤寒论条阅|伤寒论条阅|伤寒论条阅|伤寒论条阅|
|35|6450680262|❌|CMSPlayer|CMSPlayer|CMSPlayer|CMSPlayer|CMSPlayer|
|36|6443750571|EmoGuard - 关键字拦截器|EmoGuard - 關鍵字攔截器|EmoGuard - 關鍵字攔截器|EmoGuard - 關鍵字攔截器|EmoGuard - Keyword Blocker|EmoGuard - Keyword Blocker|
|37|6466976437|❌|OOTP Baseball 26 Go!|OOTP Baseball 26 Go!|OOTP Baseball 26 Go!|OOTP Baseball 26 Go!|OOTP Baseball 26 Go!|
|38|424591347|❌|FINAL FANTASY III (3D REMAKE)|FINAL FANTASY III (3D REMAKE)|FINAL FANTASY III (3D REMAKE)|FINAL FANTASY III (3D REMAKE)|FINAL FANTASY III (3D REMAKE)|
|39|563082328|Military Retirement|Military Retirement|Military Retirement|Military Retirement|Military Retirement|Military Retirement|
|40|962291530|Analog Beijing|Analog Beijing|Analog Beijing|Analog Beijing|Analog Beijing|Analog Beijing|
|41|1003660287|❌|Dwarf Fortress Remote|Dwarf Fortress Remote|Dwarf Fortress Remote|Dwarf Fortress Remote|Dwarf Fortress Remote|
|42|1035220162|Analog Budapest|Analog Budapest|Analog Budapest|Analog Budapest|Analog Budapest|Analog Budapest|
|43|1055650930|❌|Codenames|Codenames|Codenames|Codenames|Codenames|
|44|1073576068|电波表对时|電波表對時|電波表對時|電波表對時|Clock Wave|Clock Wave|
|45|1106831630|❌|ROME: Total War|ROME: Total War|ROME: Total War|ROME: Total War|ROME: Total War|
|46|1138248035|Analog Seoul|Analog Seoul|Analog Seoul|Analog Seoul|Analog Seoul|Analog Seoul|
|47|1373057849|❌|三國志漢末霸業|三國志漢末霸業|三國志漢末霸業|ThreeKingdoms The Last Warlord|ThreeKingdoms The Last Warlord|
|48|1458977921|照片保险箱Pro - 私密照片加密码相册管家|照片保險箱Pro - 密碼鎖加密隱藏隱私相片|照片保險箱Pro - 密碼鎖加密隱藏隱私相片|照片保險箱Pro - 密碼鎖加密隱藏隱私相片|Secret Vault - Hide Photos|SecretVault Pro - Lock Photos|
|49|1509252675|❌|Lapse: 遗落的未来|Lapse: 遗落的未来|Lapse: 遗落的未来|Lapse: A Forgotten Future|Lapse: A Forgotten Future|
|50|1554691584|Naturalisation en France|Naturalisation en France|Naturalisation en France|Naturalisation en France|Naturalisation en France|Naturalisation en France|
|51|1574339556|❌|Game Booster 4x|Game Booster 4x|Game Booster 4x|Game Booster 4x|Game Booster 4x|
|52|6453763474|❌|Hidden Through Time 2: Magic|Hidden Through Time 2: Magic|Hidden Through Time 2: Magic|Hidden Through Time 2: Magic|Hidden Through Time 2: Magic|
|53|6477535804|❌|虛空穹牢|虛空穹牢|虛空穹牢|Vault of the Void|Vault of the Void|
|54|6730126160|戏曲锣鼓 - 传统乐器新体验|戲曲鑼鼓 - 傳統樂器新體驗|戲曲鑼鼓 - 傳統樂器新體驗|戲曲鑼鼓 - 傳統樂器新體驗|戏曲锣鼓 - 传统乐器新体验|戏曲锣鼓 - 传统乐器新体验|
|55|6449986941|❌|❌|❌|常春藤108課綱核心單字|常春藤108課綱核心單字|常春藤108課綱核心單字|
|56|1115520522|姬魔恋战纪-单机剧情手游戏|❌|❌|❌|姬魔恋战纪-单机剧情手游戏|姬魔恋战纪-单机剧情手游戏|
|57|1322877018|地震 - DataX Earthquake|地震 - DataX Earthquake|地震 - DataX Earthquake|地震 - DataX Earthquake|DataX Earthquake|DataX Earthquake|
|58|379485721|Blood Type Diet®|Blood Type Diet®|Blood Type Diet®|Blood Type Diet®|Blood Type Diet®|Blood Type Diet®|
|59|1537362903|❌|Neighbours back From Hell|Neighbours back From Hell|Neighbours back From Hell|Neighbours back From Hell|Neighbours back From Hell|
|60|338893931|Prepware Aviation Maintenance|Prepware Aviation Maintenance|Prepware Aviation Maintenance|Prepware Aviation Maintenance|Prepware Aviation Maintenance|Prepware Aviation Maintenance|
|61|596026805|PhotoPills|PhotoPills|PhotoPills|PhotoPills|PhotoPills|PhotoPills|
|62|1448573670|冒险与征服-暗黑单机RPG角色扮演挂机游戏|Adventurer Legends|Adventurer Legends|Adventurer Legends|Adventurer Legends|暗黑冒险者放置版-单机rpg角色扮演挂机手游|
|63|1619733202|的士地方筆試 2024 Pro|的士地方筆試 2024 Pro|的士地方筆試 2024 Pro|的士地方筆試 2024 Pro|的士地方筆試 2024 Pro|的士地方筆試 2024 Pro|
|64|6450058135|❌|Unpacking|Unpacking|Unpacking|Unpacking|Unpacking|
|65|304731501|Tempo - Metronome 节拍器|Tempo - Metronome 節拍器|Tempo - Metronome 節拍器|Tempo - Metronome 節拍器|Tempo - Metronome with Setlist|Tempo - Metronome with Setlist|
|66|954982733|Tuner T1 Pro|Tuner T1 Pro|Tuner T1 Pro|Tuner T1 Pro|Tuner T1 Pro|Tuner T1 Pro|
|67|979048658|❌|❌|❌|新多益必考選擇題型1000|新多益必考選擇題型1000|新多益必考選擇題型1000|
|68|1050535507|❌|Lanota - 動感節奏音樂遊戲|Lanota - 動感節奏音樂遊戲|Lanota - 動感節奏音樂遊戲|Lanota - Music game with story|Lanota - Music game with story|
|69|1078553162|❌|超級單字王Pro|超級單字王Pro|超級單字王Pro|超級單字王Pro|❌|
|70|1384164285|AR鲁班尺|AR魯班尺|AR魯班尺|AR魯班尺|AR鲁班尺|AR鲁班尺|
|71|1586762439|Auto Translate for Safari|Auto Translate for Safari|Auto Translate for Safari|Auto Translate for Safari|Auto Translate for Safari|Auto Translate for Safari|
|72|1598843625|❌|DragonSpear-Ex|DragonSpear-Ex|DragonSpear-Ex|DragonSpear-Ex|DragonSpear-Ex|
|73|6445905944|❌|Garten of Banban 2|Garten of Banban 2|Garten of Banban 2|Garten of Banban 2|Garten of Banban 2|
|74|6449941289|❌|Spirit of the Island|Spirit of the Island|Spirit of the Island|Spirit of the Island|Spirit of the Island|
|75|384363262|13:20:玛雅历|13:20:Sync|13:20:Sync|13:20:Sync|13:20:Sync|13:20:Sync|
|76|1561136737|❌|Word Puzzle-Cambridge (NoAds)|Word Puzzle-Cambridge (NoAds)|Word Puzzle-Cambridge (NoAds)|Word Puzzle-Cambridge (NoAds)|Word Puzzle-Cambridge (NoAds)|
|77|6451224796|❌|藏武|藏武|藏武|藏武|❌|
|78|6504192378|❌|B.ROLL - 青春濾鏡相機|B.ROLL - 青春濾鏡相機|B.ROLL - 青春濾鏡相機|B.ROLL - Youth Filter Camera|B.ROLL - Youth Filter Camera|
|79|1462324486|❌|Papa's Donuteria To Go!|Papa's Donuteria To Go!|Papa's Donuteria To Go!|Papa's Donuteria To Go!|Papa's Donuteria To Go!|
|80|344844888|天元乌兔万年历 - 十三行作品|天元烏兔萬年曆 - 十三行作品|天元烏兔萬年曆 - 十三行作品|天元烏兔萬年曆 - 十三行作品|天元烏兔萬年曆 - 十三行作品|天元烏兔萬年曆 - 十三行作品|
|81|349242632|六爻装卦|六爻裝卦|六爻裝卦|六爻裝卦|六爻装卦|六爻装卦|
|82|936694037|录音机专业版: 高清录制|Voice Recorder - Audio Record|Voice Recorder - Audio Record|Voice Recorder - Audio Record|Voice Recorder - Audio Record|Voice Recorder - Audio Record|
|83|1101997011|论藏甲-奇门(实用)|奇門(實用)|奇門(實用)|奇門(實用)|奇門(實用)|奇門(實用)|
|84|1147297267|❌|Don't Starve: Shipwrecked|Don't Starve: Shipwrecked|Don't Starve: Shipwrecked|Don't Starve: Shipwrecked|Don't Starve: Shipwrecked|
|85|1205486761|❌|Beholder|Beholder|Beholder|Beholder|Beholder|
|86|1506620807|麻将AI小番 - 胡牌分析|麻雀AI小番 - 胡牌分析|麻雀AI小番 - 胡牌分析|麻雀AI小番 - 胡牌分析|Mahjong AI Analyze Calculator|麻将人工智能辅助工具 - 小番|
|87|1513506417|轻历 - 清新日历|轻历 - 清新日历|轻历 - 清新日历|轻历 - 清新日历|轻历 - 清新日历|轻历 - 清新日历|
|88|1563906582|❌|Bus Simulator|Bus Simulator|Bus Simulator|Bus Simulator|Bus Simulator|
|89|1586437121|吃饭打卡-饮食记录和减肥健身,轻断食健康管理日记本|吃饭打卡-饮食记录和减肥健身,轻断食健康管理日记本|吃饭打卡-饮食记录和减肥健身,轻断食健康管理日记本|吃饭打卡-饮食记录和减肥健身,轻断食健康管理日记本|吃饭打卡-饮食记录和减肥健身,轻断食健康管理日记本|吃饭打卡-饮食记录和减肥健身,轻断食健康管理日记本|
|90|1599393574|❌|Peace, Death! 2|Peace, Death! 2|Peace, Death! 2|Peace, Death! 2|Peace, Death! 2|
|91|1642715290|❌|Little Big Workshop|Little Big Workshop|Little Big Workshop|Little Big Workshop|Little Big Workshop|
|92|1672004303|❌|探險頑皮動物園|探險頑皮動物園|探險頑皮動物園|Zoo Park Story|Zoo Park Story|
|93|6463115144|❌|開拍！電視製作物語|開拍！電視製作物語|開拍！電視製作物語|TV Studio Story|TV Studio Story|
|94|6448530928|❌|Total War™: EMPIRE|Total War™: EMPIRE|Total War™: EMPIRE|Total War™: EMPIRE|Total War™: EMPIRE|
|95|6502455111|❌|Lara Croft: Guardian of Light|Lara Croft: Guardian of Light|Lara Croft: Guardian of Light|Lara Croft: Guardian of Light|Lara Croft: Guardian of Light|
|96|295462558|❌|Toobz|Toobz|Toobz|Toobz|Toobz|
|97|329233299|Universe Splitter|Universe Splitter|Universe Splitter|Universe Splitter|Universe Splitter|Universe Splitter|
|98|329981776|❌|Sudoku ″|Sudoku ″|Sudoku ″|Sudoku ″|Sudoku ″|
|99|363738376|forScore|forScore|forScore|forScore|forScore|forScore|
|100|479431697|❌|CHRONO TRIGGER (Upgrade Ver.)|CHRONO TRIGGER (Upgrade Ver.)|CHRONO TRIGGER (Upgrade Ver.)|CHRONO TRIGGER (Upgrade Ver.)|CHRONO TRIGGER (Upgrade Ver.)|
|101|525176875|太阳测量师(Sun Surveyor)|Sun Surveyor (太陽測量師)|Sun Surveyor (太陽測量師)|Sun Surveyor (太陽測量師)|Sun Surveyor (Sun & Moon)|Sun Surveyor (Sun & Moon)|
|102|922155038|aprs.fi|aprs.fi|aprs.fi|aprs.fi|aprs.fi|aprs.fi|
|103|989630809|❌|Malody|Malody|Malody|Malody|Malody|
|104|1001613037|ABRSM Aural Trainer Grades 6-8|ABRSM Aural Trainer Grades 6-8|ABRSM Aural Trainer Grades 6-8|ABRSM Aural Trainer Grades 6-8|ABRSM Aural Trainer Grades 6-8|ABRSM Aural Trainer Grades 6-8|
|105|1029588869|❌|Brothers: A Tale of Two Sons|Brothers: A Tale of Two Sons|Brothers: A Tale of Two Sons|Brothers: A Tale of Two Sons|Brothers: A Tale of Two Sons|
|106|1043963852|Pipefitter|Pipefitter|Pipefitter|Pipefitter|Pipefitter|Pipefitter|
|107|1086617993|时间块 - 快速记录时间规划日程安排|時間塊 - 快速記錄時間規劃日程安排|時間塊 - 快速記錄時間規劃日程安排|時間塊 - 快速記錄時間規劃日程安排|BlockyTime|BlockyTime|
|108|1104795347|iFiles 2|iFiles 2|iFiles 2|iFiles 2|iFiles 2|iFiles 2|
|109|1184336299|NAS Detector|NAS Detector|NAS Detector|NAS Detector|NAS Detector|NAS Detector|
|110|1270659758|如果可以回家早一点|如果可以回家早一點|如果可以回家早一點|如果可以回家早一點|If only I could go home early|If only I could go home early|
|111|1308038634|❌|修真风云录|修真风云录|修真风云录|修真风云录|修真风云录|
|112|1486110292|Minitube for Youtube|Minitube for Youtube|Minitube for Youtube|Minitube for Youtube|Minitube for Youtube|Minitube for Youtube|
|113|1531068181|TimeGlance - 并发症|TimeGlance - 複雜功能|TimeGlance - 複雜功能|TimeGlance - 複雜功能|TimeGlance - Complication|TimeGlance - Complication|
|114|1551539091|NFC Business Card - Read Write|NFC Business Card - Read Write|NFC Business Card - Read Write|NFC Business Card - Read Write|NFC Business Card - Read Write|NFC Business Card - Read Write|
|115|1552157188|Ace Subtitle Converter：字幕转换器|轉換字幕格式|轉換字幕格式|轉換字幕格式|Ace Subtitle Converter|Ace Subtitle Converter|
|116|1577762239|❌|Invading Horde - TD|Invading Horde - TD|Invading Horde - TD|Invading Horde - TD|Invading Horde - TD|
|117|1613920866|金價即時通|金價即時通|金價即時通|金價即時通|金價即時通|金價即時通|
|118|1617006551|❌|南國度假島物語|南國度假島物語|南國度假島物語|Tropical Resort Story|Tropical Resort Story|
|119|6447693393|灵感卡片 - 笔记|灵感卡片 - 笔记|灵感卡片 - 笔记|灵感卡片 - 笔记|灵感卡片 - 笔记|灵感卡片 - 笔记|
|120|6446021269|❌|ROCKMAN X DiVE Offline|ROCKMAN X DiVE Offline|ROCKMAN X DiVE Offline|MEGA MAN X DiVE Offline|MEGA MAN X DiVE Offline|
|121|6446337236|新概念英语-新概念英语全四册单词听力口语|新概念英語--新概念英語全四册單詞聽力口語|新概念英語--新概念英語全四册單詞聽力口語|新概念英語--新概念英語全四册單詞聽力口語|New Concept English Study|New Concept English Study|
|122|6475892753|❌|Listenify|❌|Listenify|Listenify|Listenify|
|123|6739755879|百名店map|Oishii Map - Tabelog Top 100|Oishii Map - Tabelog Top 100|Oishii Map - Tabelog Top 100|Oishii Map - Tabelog Top 100|Oishii Map - Tabelog Top 100|
|124|6443849085|❌|Terminal Madness - Awakening|Terminal Madness - Awakening|Terminal Madness - Awakening|Terminal Madness - Awakening|Terminal Madness - Awakening|
|125|6744893097|Easy Snap Finger|Easy Snap Finger|Easy Snap Finger|Easy Snap Finger|Easy Snap Finger|Easy Snap Finger|
|126|463295925|Official DVSA Theory Test Kit|Official DVSA Theory Test Kit|Official DVSA Theory Test Kit|Official DVSA Theory Test Kit|Official DVSA Theory Test Kit|Official DVSA Theory Test Kit|
|127|1115022026|朗达·拜恩创作的《金钱的秘密》|The Secret To Money|The Secret To Money|The Secret To Money|The Secret To Money|The Secret To Money|
|128|1442440203|大家的日语初级-第二版|❌|❌|大家的日本語初級1-改訂版|❌|❌|
|129|1453820315|❌|This Is the Police 2|This Is the Police 2|This Is the Police 2|This Is the Police 2|This Is the Police 2|
|130|1453875289|❌|Hyper Light Drifter|Hyper Light Drifter|Hyper Light Drifter|Hyper Light Drifter|Hyper Light Drifter|
|131|1543161449|❌|冒險村物語2|冒險村物語2|冒險村物語2|Dungeon Village 2|Dungeon Village 2|
|132|1616652599|❌|Kingdom Eighties|Kingdom Eighties|Kingdom Eighties|Kingdom Eighties|Kingdom Eighties|
|133|6444435974|❌|VARIOUS DAYLIFE Mobile|VARIOUS DAYLIFE Mobile|VARIOUS DAYLIFE Mobile|VARIOUS DAYLIFE Mobile|VARIOUS DAYLIFE Mobile|
|134|755018884|新概念英语专业版 - 英语美语全四册|新概念英语专业版 - 英语美语全四册|新概念英语专业版 - 英语美语全四册|❌|新概念英语专业版 - 英语美语全四册|新概念英语专业版 - 英语美语全四册|
|135|1319618742|❌|Getting Over It|Getting Over It|Getting Over It|Getting Over It|Getting Over It|
|136|1423115391|Führerschein 2025 GOLD|Führerschein 2025 GOLD|Führerschein 2025 GOLD|Führerschein 2025 GOLD|Führerschein 2025 GOLD|Führerschein 2025 GOLD|
|137|6474207287|❌|Wagotabi（和語旅）：學習日語|Wagotabi（和語旅）：學習日語|Wagotabi（和語旅）：學習日語|Wagotabi: Learn Japanese|Wagotabi: Learn Japanese|
|138|497880658|J23 - 发布日期和补货|J23 - Release Dates & Restocks|J23 - Release Dates & Restocks|J23 - Release Dates & Restocks|J23 - Release Dates & Restocks|J23 - Release Dates & Restocks|
|139|1108935309|❌|20 Watch Games - Classic Pack|20 Watch Games - Classic Pack|20 Watch Games - Classic Pack|20 Watch Games - Classic Pack|20 Watch Games - Classic Pack|
|140|1410053842|小渔排班 - 倒班工作者的专属日历|小漁輪班|小漁輪班|小漁輪班|小渔排班 - 倒班工作者的专属日历|小渔排班 - 倒班工作者的专属日历|
|141|1519508653|Nomad Sculpt - 3D雕刻建模|Nomad Sculpt - 3D雕刻建模|Nomad Sculpt - 3D雕刻建模|Nomad Sculpt - 3D雕刻建模|Nomad Sculpt|Nomad Sculpt|
|142|6446826650|❌|創造都市島物語|創造都市島物語|創造都市島物語|Dream Town Island|Dream Town Island|
|143|998437590|西语背单词|西语背单词|西语背单词|西语背单词|西语背单词|西语背单词|
|144|430388524|Do! Spring Mint - To Do List|Do! Spring Mint - To Do List|Do! Spring Mint - To Do List|Do! Spring Mint - To Do List|Do! Spring Mint - To Do List|Do! Spring Mint - To Do List|
|145|592155900|Wake up! Earthquake|Wake up! Earthquake|Wake up! Earthquake|Wake up! Earthquake|Wake up! Earthquake|Wake up! Earthquake|
|146|625274950|漢語詞典繁體版|國語辭典|國語辭典|國語辭典|中國漢語辭典 Chinese Dictionary|中國漢語辭典 Chinese Dictionary|
|147|998834675|❌|Clouds & Sheep 2 Premium|Clouds & Sheep 2 Premium|Clouds & Sheep 2 Premium|Clouds & Sheep 2 Premium|Clouds & Sheep 2 Premium|
|148|1232529101|❌|歸家異途|歸家異途|歸家異途|Home Behind|Home Behind|
|149|1573482724|❌|Coffee Inc 2|Coffee Inc 2|Coffee Inc 2|Coffee Inc 2|Coffee Inc 2|
|150|1602772289|❌|7 Days to End with You|7 Days to End with You|7 Days to End with You|7 Days to End with You|7 Days to End with You|
|151|1613295180|❌|青春敘曲|青春敘曲|青春敘曲|Growing Up: Life of the '90s|Growing Up: Life of the '90s|
|152|1614666556|❌|CNC VMC Simulator|CNC VMC Simulator|CNC VMC Simulator|CNC VMC Simulator|CNC VMC Simulator|
|153|1624777523|❌|Guess Who? Meet the Crew|Guess Who? Meet the Crew|Guess Who? Meet the Crew|Guess Who? Meet the Crew|Guess Who? Meet the Crew|
|154|413943804|Real Piano™|Real Piano™|Real Piano™|Real Piano™|Real Piano™|Real Piano™|
|155|508064644|地震讯息|地震訊息|地震訊息|地震訊息|Earthquakes Pro|Earthquakes Pro|
|156|1038014543|❌|Day R Premium: last world war|Day R Premium: last world war|Day R Premium: last world war|Day R Premium: last world war|Day R Premium|
|157|1084793426|Instant USGS Earthquake Pro|Instant USGS Earthquake Pro|Instant USGS Earthquake Pro|Instant USGS Earthquake Pro|Instant USGS Earthquake Pro|Instant USGS Earthquake Pro|
|158|1596863467|❌|LoveChoice 揀愛|LoveChoice 揀愛|LoveChoice 揀愛|LoveChoice|LoveChoice|
|159|1602403259|Webmail App|Webmail App|Webmail App|Webmail App|Webmail App|Webmail App|
|160|1622064157|Sismo: Vibration Meter & Alert|Sismo: Vibration Meter & Alert|Sismo: Vibration Meter & Alert|Sismo: Vibration Meter & Alert|Sismo: Vibration Meter & Alert|Sismo: Vibration Meter & Alert|
|161|6447606411|❌|創意咖啡店物語|創意咖啡店物語|創意咖啡店物語|Cafe Master Story|Cafe Master Story|
|162|6449046261|❌|水晶戰爭2-精品生存Roguelike策略塔防單機獨立遊戲|水晶戰爭2-精品生存Roguelike策略塔防單機獨立遊戲|水晶戰爭2-精品生存Roguelike策略塔防單機獨立遊戲|Crystania Wars 2-Roguelike TD|Crystania Wars 2-Roguelike TD|
|163|336543029|Grat's Film Slate/Clapboard|Grat's Film Slate/Clapboard|Grat's Film Slate/Clapboard|Grat's Film Slate/Clapboard|Grat's Film Slate/Clapboard|Grat's Film Slate/Clapboard|
|164|583922375|myLightMeter PRO|myLightMeter PRO|myLightMeter PRO|myLightMeter PRO|myLightMeter PRO|myLightMeter PRO|
|165|608540795|Tunable – Tuner & Metronome|Tunable – Tuner & Metronome|Tunable – Tuner & Metronome|Tunable – Tuner & Metronome|Tunable – Tuner & Metronome|Tunable – Tuner & Metronome|
|166|975770717|My Earthquake Alerts Pro|My Earthquake Alerts Pro|My Earthquake Alerts Pro|My Earthquake Alerts Pro|My Earthquake Alerts Pro|My Earthquake Alerts Pro|
|167|1056698678|Live 2 Photos|Live 2 Photos|Live 2 Photos|Live 2 Photos|Live 2 Photos|Live 2 Photos|
|168|1062022008|LumaFusion|LumaFusion|LumaFusion|LumaFusion|LumaFusion|LumaFusion|
|169|1207867591|❌|Papa's Taco Mia To Go!|Papa's Taco Mia To Go!|Papa's Taco Mia To Go!|Papa's Taco Mia To Go!|Papa's Taco Mia To Go!|
|170|1326740784|❌|FINAL FANTASY VIII Remastered|FINAL FANTASY VIII Remastered|FINAL FANTASY VIII Remastered|FINAL FANTASY VIII Remastered|FINAL FANTASY VIII Remastered|
|171|1372408358|ARGun2018|ARGun2018|ARGun2018|ARGun2018|ARGun2018|ARGun2018|
|172|1438597800|OKNDrum: Optokinetic Drum|OKNDrum: Optokinetic Drum|OKNDrum: Optokinetic Drum|OKNDrum: Optokinetic Drum|OKNDrum: Optokinetic Drum|OKNDrum: Optokinetic Drum|
|173|1448798374|❌|CAR++|CAR++|CAR++|CAR++|CAR++|
|174|1450908177|❌|Shadow Of Death: Premium Games|Shadow Of Death: Premium Games|Shadow Of Death: Premium Games|Shadow Of Death: Premium Games|Shadow Of Death: Premium Games|
|175|1509817154|某某宗女修修炼手札|某某宗女修修炼手札|某某宗女修修炼手札|某某宗女修修炼手札|某某宗女修修炼手札|某某宗女修修炼手札|
|176|1513814705|计算器键盘 - 快人一步|計算器鍵盤 - 快人一步|計算器鍵盤 - 快人一步|計算器鍵盤 - 快人一步|Calculator Keyboard - Faster|Calculator Keyboard - Faster|
|177|1543183092|YKS Konu, Deneme, Soru Takibi|YKS Konu, Deneme, Soru Takibi|YKS Konu, Deneme, Soru Takibi|YKS Konu, Deneme, Soru Takibi|YKS Konu, Deneme, Soru Takibi|YKS Konu, Deneme, Soru Takibi|
|178|6744311159|魔王终局|❌|❌|❌|❌|❌|
|179|6740014272|水果合成 - 手表游戏|Fruit Merge - Watch Game|Fruit Merge - Watch Game|Fruit Merge - Watch Game|Fruit Merge - Watch Game|Fruit Merge - Watch Game|
|180|6742253703|❌|Slime 3K: Rise Against Despot|Slime 3K: Rise Against Despot|Slime 3K: Rise Against Despot|Slime 3K: Rise Against Despot|Slime 3K: Rise Against Despot|
|181|6463440317|❌|❌|❌|Online Kaza Tutanağı|Online Kaza Tutanağı|Online Kaza Tutanağı|
|182|6502287918|❌|PPSSPP Gold - PSP emulator|PPSSPP Gold - PSP emulator|PPSSPP Gold - PSP emulator|PPSSPP Gold - PSP emulator|PPSSPP Gold - PSP emulator|
|183|400666114|Guitar Pro|Guitar Pro|Guitar Pro|Guitar Pro|Guitar Pro|Guitar Pro|
|184|562989701|❌|Vector Classic|Vector Classic|Vector Classic|Vector Classic|Vector Classic|
|185|1127680609|吾龟 - 记录乌龟生长，制作生长曲线|Tortoise - Keep Recording|Tortoise - Keep Recording|Tortoise - Keep Recording|Tortoise - Keep Recording|Tortoise - Keep Recording|
|186|1171627280|❌|魔窟-無盡的地下城：暗黑世界|魔窟-無盡的地下城：暗黑世界|魔窟-無盡的地下城：暗黑世界|魔窟-无尽的地下城: 暗黑世界|魔窟-无尽的地下城: 暗黑世界|
|187|1179421849|❌|GRID™ Autosport|GRID™ Autosport|GRID™ Autosport|GRID™ Autosport|GRID™ Autosport|
|188|1260311003|五线谱照片扫描仪 - 乐谱图像识别|Notation Scanner - 五線譜樂譜圖像識別|Notation Scanner - 五線譜樂譜圖像識別|Notation Scanner - 五線譜樂譜圖像識別|Notation Scanner - Sheet Music|Notation Scanner - Sheet Music|
|189|1291427111|❌|Evoland 2|Evoland 2|Evoland 2|Evoland 2|Evoland 2|
|190|1437715202|倉頡詞典|倉頡詞典|倉頡詞典|倉頡詞典|倉頡詞典|倉頡詞典|
|191|1519571900|Luwian|Luwian|Luwian|Luwian|Luwian|Luwian|
|192|1544947623|Kiosk - fullscreen browser|Kiosk - fullscreen browser|Kiosk - fullscreen browser|Kiosk - fullscreen browser|Kiosk - fullscreen browser|Kiosk - fullscreen browser|
|193|1575192531|❌|遊樂園夢物語|遊樂園夢物語|遊樂園夢物語|Dream Park Story|Dream Park Story|
|194|6742311454|伏魔诀-阴阳秘术诡道修仙录|❌|❌|❌|❌|❌|
|195|6444396120|挺进地牢|❌|❌|❌|❌|❌|
|196|6738590491|KennysGifs|KennysGifs|KennysGifs|KennysGifs|KennysGifs|KennysGifs|
|197|6444311205|❌|GRID™ Legends: Deluxe Edition|GRID™ Legends: Deluxe Edition|GRID™ Legends: Deluxe Edition|GRID™ Legends: Deluxe Edition|GRID™ Legends: Deluxe Edition|
|198|6477660875|❌|大海賊探險物語DX|大海賊探險物語DX|大海賊探險物語DX|High Sea Saga DX|High Sea Saga DX|
|199|6447090616|Whisper Notes - 离线 AI 语音转文字|Whisper Notes - 離線 AI 語音輸入轉錄文字|Whisper Notes - 離線 AI 語音輸入轉錄文字|Whisper Notes - 離線 AI 語音輸入轉錄文字|Whisper Notes - Speech To Text|Whisper Notes - Speech To Text|
|200|414371107|Morse Elmer|Morse Elmer|Morse Elmer|Morse Elmer|Morse Elmer|Morse Elmer|
|201|510119487|AnatomyMapp|AnatomyMapp|AnatomyMapp|AnatomyMapp|AnatomyMapp|AnatomyMapp|
|202|561396899|❌|皇帝養成計畫 - 經典歷史模擬遊戲|皇帝養成計畫 - 經典歷史模擬遊戲|皇帝養成計畫 - 經典歷史模擬遊戲|皇帝養成計畫 - 經典歷史模擬遊戲|皇帝養成計畫 - 經典歷史模擬遊戲|
|203|634158738|e-Sword LT: Bible Study to Go|e-Sword LT: Bible Study to Go|e-Sword LT: Bible Study to Go|e-Sword LT: Bible Study to Go|e-Sword LT: Bible Study to Go|e-Sword LT: Bible Study to Go|
|204|814977594|❌|Surgeon Simulator|Surgeon Simulator|Surgeon Simulator|Surgeon Simulator|Surgeon Simulator|
|205|958889621|ADF Trainer - YOU Session Prep|ADF Trainer - YOU Session Prep|ADF Trainer - YOU Session Prep|ADF Trainer - YOU Session Prep|ADF Trainer - YOU Session Prep|ADF Trainer - YOU Session Prep|
|206|1066366174|❌|Concentration Grid|Concentration Grid|Concentration Grid|Concentration Grid|Concentration Grid|
|207|1397002811|Catholic Hymn|Catholic Hymn|Catholic Hymn|Catholic Hymn|Catholic Hymn|Catholic Hymn|
|208|1447509164|Freya • Surge Timer|Freya • Surge Timer|Freya • Surge Timer|Freya • Surge Timer|Freya • Surge Timer|Freya • Surge Timer|
|209|1456714022|RFECU Performance 2.0|RFECU Performance 2.0|RFECU Performance 2.0|RFECU Performance 2.0|RFECU Performance 2.0|RFECU Performance 2.0|
|210|1459520638|❌|Wingspan: The Board Game|Wingspan: The Board Game|Wingspan: The Board Game|Wingspan: The Board Game|Wingspan: The Board Game|
|211|1463480017|❌|韭菜投資公司|韭菜投資公司|韭菜投資公司|Leek Inc.|Leek Inc.|
|212|1466120520|❌|iVerify Basic|iVerify Basic|iVerify Basic|iVerify Basic|iVerify Basic|
|213|1499085878|CNC Lathe Simulator|CNC Lathe Simulator|CNC Lathe Simulator|CNC Lathe Simulator|CNC Lathe Simulator|CNC Lathe Simulator|
|214|1522425038|Alien10|Alien10|Alien10|Alien10|Alien10|Alien10|
|215|1541290982|GPSPlus Pro|GPSPlus Pro|GPSPlus Pro|GPSPlus Pro|GPSPlus - Location Editor Pro|GPSPlus - Location Editor Pro|
|216|1551579024|❌|創意漢堡物語|創意漢堡物語|創意漢堡物語|Burger Bistro Story|Burger Bistro Story|
|217|1562608316|Kelvin: Light Panel|Kelvin: Light Panel|Kelvin: Light Panel|Kelvin: Light Panel|Kelvin: Light Panel|Kelvin: Light Panel|
|218|1601177112|❌|便利商店開業日記|便利商店開業日記|便利商店開業日記|Convenience Stories|Convenience Stories|
|219|1609059358|eVario2  - Variometer Pro|eVario2  - Variometer Pro|eVario2  - Variometer Pro|eVario2  - Variometer Pro|eVario2  - Variometer Pro|eVario2  - Variometer Pro|
|220|6702013134|FOCUS - 猫猫专注计时器和学习番茄钟|Cat Flow - 貓計時器 & 專注番茄鐘|Cat Flow - 貓計時器 & 專注番茄鐘|Cat Flow - 貓計時器 & 專注番茄鐘|Cat Flow - Kitty Focus Timer|Cat Flow - Kitty Focus Timer|
|221|6740487579|❌|Songs of Conquest Mobile|Songs of Conquest Mobile|Songs of Conquest Mobile|Songs of Conquest Mobile|Songs of Conquest Mobile|
|222|6451009326|❌|LMP|LMP|LMP|LMP|LMP|
|223|6473789128|❌|星落湖傳說-魔法騎士團|星落湖傳說-魔法騎士團|星落湖傳說-魔法騎士團|❌|❌|
|224|299021909|圣经工具(新标点和合本)|聖經工具(新標點和合本)|聖經工具(新標點和合本)|聖經工具(新標點和合本)|聖經工具(新標點和合本)|聖經工具(新標點和合本)|
|225|407078169|❌|⋆數獨+|⋆數獨+|⋆數獨+|⋆Sudoku+|⋆Sudoku+|
|226|418751595|GyrOSC|GyrOSC|GyrOSC|GyrOSC|GyrOSC|GyrOSC|
|227|667362389|❌|❌|The Room Two|❌|The Room Two|The Room Two|
|228|768379887|Eye Meter|Eye Meter|Eye Meter|Eye Meter|Eye Meter|Eye Meter|
|229|814323051|❌|中世紀Bridge Constructor|中世紀Bridge Constructor|中世紀Bridge Constructor|Bridge Constructor Medieval|Bridge Constructor Medieval|
|230|911205290|❌|DRAGON QUEST II|DRAGON QUEST II|DRAGON QUEST II|DRAGON QUEST II|DRAGON QUEST II|
|231|983145797|超注音|超注音|超注音|超注音|超注音|超注音|
|232|1033342465|Just Press Record|Just Press Record|Just Press Record|Just Press Record|Just Press Record|Just Press Record|
|233|1112850631|❌|樂秀專業版-影片編輯與影片剪輯|樂秀專業版-影片編輯與影片剪輯|樂秀專業版-影片編輯與影片剪輯|VideoShow PRO - Video Editor|VideoShow PRO - Video Editor|
|234|1126386264|❌|AdGuard Pro — adblock|AdGuard Pro — adblock|AdGuard Pro — adblock|AdGuard Pro — adblock&privacy|AdGuard Pro — adblock|
|235|1182456409|❌|奧托的奧德賽|奧托的奧德賽|奧托的奧德賽|Alto's Odyssey|Alto's Odyssey|
|236|1238247658|❌|Cluedo: Classic Edition|Cluedo: Classic Edition|❌|❌|Cluedo: Classic Edition|
|237|1260271235|BoatSpeed: Course & Speed|BoatSpeed: Course & Speed|BoatSpeed: Course & Speed|BoatSpeed: Course & Speed|BoatSpeed: Course & Speed|BoatSpeed: Course & Speed|
|238|1260967308|WhatCall|WhatCall|WhatCall|WhatCall|WhatCall|WhatCall|
|239|1423585518|ROMAN: 进食计画、减肥、减脂一体化。 体重管理。|ROMAN: 進食計畫、減肥、減脂一體化。體重管理。|ROMAN: 進食計畫、減肥、減脂一體化。體重管理。|ROMAN: 進食計畫、減肥、減脂一體化。體重管理。|Roman: budget weight loss|Roman: budget weight loss|
|240|1508108761|EasyQuit Pro - Stop Smoking|EasyQuit Pro - Stop Smoking|EasyQuit Pro - Stop Smoking|EasyQuit Pro - Stop Smoking|EasyQuit Pro - Stop Smoking|EasyQuit Pro - Stop Smoking|
|241|1550721625|JAMMATES|JAMMATES|JAMMATES|JAMMATES|JAMMATES|JAMMATES|
|242|1582355047|❌|❌|❌|❌|❌|Hacker Başlangıç|
|243|1610305853|SunOnTrack: Sun Path & Shadows|SunOnTrack: Sun Path & Shadows|SunOnTrack: Sun Path & Shadows|SunOnTrack: Sun Path & Shadows|SunOnTrack: Sun Path & Shadows|SunOnTrack: Sun Path & Shadows|
|244|1616391834|合成游戏合集：含合成大西瓜、2048和合成神龙经典游戏|合成游戏合集：含合成大西瓜、2048和合成神龙经典游戏|合成游戏合集：含合成大西瓜、2048和合成神龙经典游戏|合成游戏合集：含合成大西瓜、2048和合成神龙经典游戏|❌|❌|
|245|1668418644|大事記帳 - 阻止你花過多的錢|大事記帳 - 阻止你花過多的錢|大事記帳 - 阻止你花過多的錢|大事記帳 - 阻止你花過多的錢|大事記帳 - 阻止你花過多的錢|大事記帳 - 阻止你花過多的錢|
|246|6477756843|❌|Final Girl Companion|Final Girl Companion|Final Girl Companion|Final Girl Companion|Final Girl Companion|
|247|6698876690|WristTube+ Player for YouTube|WristTube+ Player for YouTube|WristTube+ Player for YouTube|WristTube+ Player for YouTube|WristTube+ Player for YouTube|WristTube+ Player for YouTube|
|248|6742457882|Deco: Wallpaper Creator|Deco: Wallpaper Creator|Deco: Wallpaper Creator|Deco: Wallpaper Creator|Deco: Wallpaper Creator|Deco: Wallpaper Creator|
|249|6471914901|Lux: AdBlock + PiP for YouTube|Lux: AdBlock + PiP for YouTube|Lux: AdBlock + PiP for YouTube|Lux: AdBlock + PiP for YouTube|Lux: AdBlock + PiP for YouTube|Lux: AdBlock + PiP for YouTube|
|250|300132735|专业万年历 - 十三行作品|專業萬年曆 - 十三行作品|專業萬年曆 - 十三行作品|專業萬年曆 - 十三行作品|專業萬年曆 - 十三行作品|專業萬年曆 - 十三行作品|
|251|430234732|Site Audit Pro|Site Audit Pro|Site Audit Pro|Site Audit Pro|Site Audit Pro|Site Audit Pro|
|252|602990197|❌|METAL SLUG X|METAL SLUG X|METAL SLUG X|METAL SLUG X|METAL SLUG X|
|253|898697688|五十音輕鬆學：聯想記憶|五十音輕鬆學：聯想記憶|五十音輕鬆學：聯想記憶|五十音輕鬆學：聯想記憶|五十音輕鬆學：聯想記憶|五十音輕鬆學：聯想記憶|
|254|1304822713|无尽坦克大战 - 八位元单机王者 完美模拟穿越旧经典电视手游|無盡坦克大戰 - 八位元單機王者 完美模擬穿越舊經典電視手遊|無盡坦克大戰 - 八位元單機王者 完美模擬穿越舊經典電視手遊|無盡坦克大戰 - 八位元單機王者 完美模擬穿越舊經典電視手遊|Infinity Tank Battle|Infinity Tank Battle|
|255|1400579543|❌|❌|❌|❌|imo video calls and chat HD|❌|
|256|1435461053|❌|This Is the Police|This Is the Police|This Is the Police|This Is the Police|This Is the Police|
|257|1471323296|❌|籃球熱潮物語|籃球熱潮物語|籃球熱潮物語|Basketball Club Story|Basketball Club Story|
|258|1472184189|❌|The White Door|The White Door|The White Door|The White Door|The White Door|
|259|1478611992|❌|Farming Simulator 20|Farming Simulator 20|Farming Simulator 20|Farming Simulator 20|Farming Simulator 20|
|260|1498550832|ASCCP Management Guidelines|ASCCP Management Guidelines|ASCCP Management Guidelines|ASCCP Management Guidelines|ASCCP Management Guidelines|ASCCP Management Guidelines|
|261|6739975257|乐桥|樂橋|樂橋|樂橋|TuneShift|TuneShift|
|262|6670190133|❌|哆啦A夢的銅鑼燒店物語|哆啦A夢的銅鑼燒店物語|哆啦A夢的銅鑼燒店物語|Doraemon Dorayaki Shop Story|Doraemon Dorayaki Shop Story|
|263|6744862281|iPlayer - 本地音乐播放器&离线音乐专业版|iPlayer - Offline Music  Pro|iPlayer - Offline Music  Pro|iPlayer - Offline Music  Pro|iPlayer - Offline Music  Pro|iPlayer - Offline Music  Pro|
|264|6473001577|❌|Aerofly FS Global|Aerofly FS Global|Aerofly FS Global|Aerofly FS Global|Aerofly FS Global|
|265|327963391|Pedi STAT|Pedi STAT|Pedi STAT|Pedi STAT|Pedi STAT|Pedi STAT|
|266|398463868|❌|詰将棋|詰将棋|詰将棋|詰将棋|詰将棋|
|267|419606496|Baby Shusher Sleep Miracle App|Baby Shusher Sleep Miracle App|Baby Shusher Sleep Miracle App|Baby Shusher Sleep Miracle App|Baby Shusher Sleep Miracle App|Baby Shusher Sleep Miracle App|
|268|435871950|HappyCow - Vegan Food Near You|HappyCow - Vegan Food Near You|HappyCow - Vegan Food Near You|HappyCow - Vegan Food Near You|HappyCow - Vegan Food Near You|HappyCow - Vegan Food Near You|
|269|459189186|❌|機械迷城 (Machinarium)|機械迷城 (Machinarium)|機械迷城 (Machinarium)|Machinarium|Machinarium|
|270|580008932|❌|Real Badminton|Real Badminton|Real Badminton|Real Badminton|Real Badminton|
|271|1253855339|❌|Rusty Lake Paradise|Rusty Lake Paradise|Rusty Lake Paradise|Rusty Lake Paradise|Rusty Lake Paradise|
|272|1330055286|比手划脚 - 你说我猜合家欢聚会神器|比手划脚 - 你比我猜合家欢猜词工具|比手划脚 - 你比我猜合家欢猜词工具|比手划脚 - 你比我猜合家欢猜词工具|比手划脚 - 你比我猜合家欢猜词工具|比手划脚 - 亲子互动游戏你画我猜|
|273|1453117329|❌|Yume Nikki|Yume Nikki|Yume Nikki|Yume Nikki|Yume Nikki|
|274|1456547302|❌|A Dance of Fire and Ice|A Dance of Fire and Ice|A Dance of Fire and Ice|A Dance of Fire and Ice|A Dance of Fire and Ice|
|275|1457316711|❌|DRAW CHILLY|DRAW CHILLY|DRAW CHILLY|DRAW CHILLY|DRAW CHILLY|
|276|1481181827|❌|Aces of the Luftwaffe Squadron|Aces of the Luftwaffe Squadron|Aces of the Luftwaffe Squadron|Aces of the Luftwaffe Squadron|Aces of the Luftwaffe Squadron|
|277|1505174740|❌|VFUN - 你的興趣社區|VFUN - 你的興趣社區|VFUN - 你的興趣社區|VFUN - Find your interests|VFUN - Find your interests|
|278|1517281147|行星小时|行星小時|行星小時|行星小時|Planetary Hours + Widget|Planetary Hours|
|279|1530149693|心岛日记-难过的人不孤独|心岛日记-温柔的心情树洞|心岛日记-温柔的心情树洞|心岛日记-温柔的心情树洞|心岛日记-难过的人不孤独|❌|
|280|1548281314|❌|倉頡打字2V|倉頡打字2V|倉頡打字2V|倉頡打字2V|倉頡打字2V|
|281|1607511516|❌|Construction Simulator 4|Construction Simulator 4|Construction Simulator 4|Construction Simulator 4|Construction Simulator 4|
|282|1612615618|腕上txt小说阅读器|腕上txt小说阅读器|腕上txt小说阅读器|腕上txt小说阅读器|腕上txt小说阅读器|腕上txt小说阅读器|
|283|1617390109|❌|我们的大航海|我们的大航海|我们的大航海|我们的大航海|我们的大航海|
|284|1621065119|❌|逆轉裁判123成步堂精選集|逆轉裁判123成步堂精選集|逆轉裁判123成步堂精選集|Ace Attorney Trilogy|Ace Attorney Trilogy|
|285|1626320298|极速变色龙|❌|❌|❌|❌|❌|
|286|6738272916|全球电视 - 国际电视直播|全球電視 - 國際電視直播|全球電視 - 國際電視直播|全球電視 - 國際電視直播|NetTV: Watch Global TV|NetTV: Watch Global TV|
|287|6446178861|PlayNav - 影片内无广告！|PlayNav - 影片內無廣告！|PlayNav - 影片內無廣告！|PlayNav - 影片內無廣告！|PlayNav - No ads in videos!|PlayNav - No ads in videos!|
|288|363385252|DTMFdec|DTMFdec|DTMFdec|DTMFdec|DTMFdec|DTMFdec|
|289|430270438|Astro Gold|Astro Gold|Astro Gold|Astro Gold|Astro Gold|Astro Gold|
|290|679454835|Rarevision VHS - Retro 80s Cam|Rarevision VHS - Retro 80s Cam|Rarevision VHS - Retro 80s Cam|Rarevision VHS - Retro 80s Cam|Rarevision VHS - Retro 80s Cam|Rarevision VHS - Retro 80s Cam|
|291|911201894|❌|DRAGON QUEST|DRAGON QUEST|DRAGON QUEST|DRAGON QUEST|DRAGON QUEST|
|292|921954809|❌|❌|❌|❌|Craft The World-Pocket Edition|Craft The World-Pocket Edition|
|293|1093859891|djembeföla!|djembeföla!|djembeföla!|djembeföla!|djembeföla!|djembeföla!|
|294|1232097854|❌|棒球學院物語|棒球學院物語|棒球學院物語|Home Run High|Home Run High|
|295|1261834568|❌|Shadow Fight 2 Special Edition|Shadow Fight 2 Special Edition|Shadow Fight 2 Special Edition|Shadow Fight 2 Special Edition|Shadow Fight 2 Special Edition|
|296|1555459868|❌|Dawncaster: Deckbuilding RPG|Dawncaster: Deckbuilding RPG|Dawncaster: Deckbuilding RPG|Dawncaster: Deckbuilding RPG|Dawncaster: Deckbuilding RPG|
|297|1563121109|❌|Shattered Pixel Dungeon|Shattered Pixel Dungeon|Shattered Pixel Dungeon|Shattered Pixel Dungeon|Shattered Pixel Dungeon|
|298|6744629398|汉界|汉界|汉界|汉界|汉界|汉界|
|299|6738784151|❌|A Little to the Left: Stars|A Little to the Left: Stars|A Little to the Left: Stars|A Little to the Left: Stars|A Little to the Left: Stars|
|300|6470642337|❌|來自星塵|來自星塵|來自星塵|Ex Astris|Ex Astris|
|301|6483862844|❌|光遇樂隊|光遇樂隊|光遇樂隊|Sky Band|Sky Band|
|302|314192799|❌|❌|❌|Acrobits Softphone|Acrobits Softphone|Acrobits Softphone|
|303|466388978|My Contacts Backup Pro|My Contacts Backup Pro|My Contacts Backup Pro|My Contacts Backup Pro|My Contacts Backup Pro|My Contacts Backup Pro|
|304|512142109|❌|Max Payne Mobile|Max Payne Mobile|Max Payne Mobile|Max Payne Mobile|Max Payne Mobile|
|305|904737816|❌|王國保衛戰：起源 Kingdom Rush Origins|王國保衛戰：起源 Kingdom Rush Origins|王國保衛戰：起源 Kingdom Rush Origins|Kingdom Rush Origins TD|Kingdom Rush Origins TD|
|306|952625011|每日精選-國家地理每日精選|每日精選-國家地理每日精選|每日精選-國家地理每日精選|每日精選-國家地理每日精選|❌|NG Daily|
|307|958202096|❌|❌|❌|❌|❌|Dukan Diet Classic|
|308|1085978097|Pythonista 3|Pythonista 3|Pythonista 3|Pythonista 3|Pythonista 3|Pythonista 3|
|309|1148321705|❌|Bully: Anniversary Edition|Bully: Anniversary Edition|Bully: Anniversary Edition|Bully: Anniversary Edition|Bully: Anniversary Edition|
|310|1286255182|Filmlike|Filmlike Camera|Filmlike Camera|Filmlike Camera|Filmlike Camera|Filmlike Camera|
|311|1449584007|Koala Sampler|Koala Sampler|Koala Sampler|Koala Sampler|Koala Sampler|Koala Sampler|
|312|1523025509|PANTHEON - Official|PANTHEON - Official|PANTHEON - Official|PANTHEON - Official|PANTHEON - Official|PANTHEON - Official|
|313|1536419933|❌|Break Pile - Brick Breaker|Break Pile - Brick Breaker|Break Pile - Brick Breaker|Break Pile - Brick Breaker|Break Pile - Brick Breaker|
|314|1574175808|❌|Specimen Zero - Horror|Specimen Zero - Horror|Specimen Zero - Horror|Specimen Zero - Horror|Specimen Zero - Horror|
|315|1622935612|❌|DYSMANTLE|DYSMANTLE|DYSMANTLE|❌|❌|
|316|1633879571|❌|Poppy Playtime Chapter 2|Poppy Playtime Chapter 2|Poppy Playtime Chapter 2|Poppy Playtime Chapter 2|Poppy Playtime Chapter 2|
|317|6504841512|❌|Halls of Torment: Premium|Halls of Torment: Premium|Halls of Torment: Premium|Halls of Torment: Premium|Halls of Torment: Premium|
|318|6476902290|Handy Guitar Lab for MS-70CDR+|Handy Guitar Lab for MS-70CDR+|Handy Guitar Lab for MS-70CDR+|Handy Guitar Lab for MS-70CDR+|Handy Guitar Lab for MS-70CDR+|Handy Guitar Lab for MS-70CDR+|
|319|6479512734|❌|NARUTO: Ultimate Ninja STORM|NARUTO: Ultimate Ninja STORM|NARUTO: Ultimate Ninja STORM|NARUTO: Ultimate Ninja STORM|NARUTO: Ultimate Ninja STORM|
|320|6740051873|数字华容道：手表版|數位華容道：手錶版|數位華容道：手錶版|數位華容道：手錶版|Classic Number Games for Watch|Classic Number Games for Watch|
|321|6444109272|Kübaj - Hacim Hesaplama|Kübaj - Hacim Hesaplama|Kübaj - Hacim Hesaplama|Kübaj - Hacim Hesaplama|Kübaj - Hacim Hesaplama|Kübaj - Hacim Hesaplama|
|322|318639200|❌|Crush the Castle|Crush the Castle|Crush the Castle|Crush the Castle|Crush the Castle|
|323|325915322|BatteryFull + (Alarm)|BatteryFull + (Alarm)|BatteryFull + (Alarm)|BatteryFull + (Alarm)|BatteryFull + (Alarm)|BatteryFull + (Alarm)|
|324|365729342|RacquetTune - String Tension|RacquetTune - String Tension|RacquetTune - String Tension|RacquetTune - String Tension|RacquetTune - String Tension|RacquetTune - String Tension|
|325|414469628|面部和躯体照片编辑器|臉部及身體修圖工具|臉部及身體修圖工具|臉部及身體修圖工具|Face & Body Photo editor|Face & Body Photo editor|
|326|459313476|Tenuto|Tenuto|Tenuto|Tenuto|Tenuto|Tenuto|
|327|478126577|Merriam-Webster Dictionary+|Merriam-Webster Dictionary+|Merriam-Webster Dictionary+|Merriam-Webster Dictionary+|Merriam-Webster Dictionary+|Merriam-Webster Dictionary+|
|328|493493802|RhymeZone|RhymeZone|RhymeZone|RhymeZone|RhymeZone|RhymeZone|
|329|555612465|存錢記帳-管理預算、掃描記帳、理財分析CWMoney Pro|存錢記帳-管理預算、掃描記帳、理財分析CWMoney Pro|存錢記帳-管理預算、掃描記帳、理財分析CWMoney Pro|存錢記帳-管理預算、掃描記帳、理財分析CWMoney Pro|CWMoney Pro - Expense Tracker|CWMoney Pro - Expense Tracker|
|330|564730202|Money Manager (Remove Ads)|Money Manager (Remove Ads)|Money Manager (Remove Ads)|Money Manager (Remove Ads)|Money Manager (Remove Ads)|Money Manager (Remove Ads)|
|331|582584117|Solocator - GPS Field Camera|Solocator - GPS Field Camera|Solocator - GPS Field Camera|Solocator - GPS Field Camera|Solocator - GPS Field Camera|Solocator - GPS Field Camera|
|332|633600716|432 Player|432 Player|432 Player|432 Player|432 Player|432 Player|
|333|683353582|Hong Kong Taxi Cards|Hong Kong Taxi Cards|Hong Kong Taxi Cards|Hong Kong Taxi Cards|Hong Kong Taxi Cards|Hong Kong Taxi Cards|
|334|777310222|GoodReader PDF Editor & Viewer|GoodReader PDF Editor & Viewer|GoodReader PDF Editor & Viewer|GoodReader PDF Editor & Viewer|GoodReader PDF Editor & Viewer|GoodReader PDF Editor & Viewer|
|335|887877435|f8 镜头大师|f8 镜头大师|f8 镜头大师|f8 镜头大师|f8 Lens Toolkit|f8 Lens Toolkit|
|336|908905093|Lumy - 太阳追踪器与黄金时刻|Lumy|Lumy|Lumy|Lumy|Lumy|
|337|961339405|❌|監獄人生 RPG|監獄人生 RPG|監獄人生 RPG|Prison Life RPG|Prison Life RPG|
|338|994157520|❌|1942 Pacific Front Premium|1942 Pacific Front Premium|1942 Pacific Front Premium|1942 Pacific Front Premium|1942 Pacific Front Premium|
|339|1048509287|❌|龍紀冒險棋|龍紀冒險棋|龍紀冒險棋|龙纪冒险棋|龙纪冒险棋|
|340|1087099916|铅笔素描 高清版|鉛筆素描 高清版|鉛筆素描 高清版|鉛筆素描 高清版|Pencil Sketch HD|Pencil Sketch HD|
|341|1107320261|❌|Splitter Critters|Splitter Critters|Splitter Critters|Splitter Critters|Splitter Critters|
|342|1241909999|WorkOutDoors|WorkOutDoors|WorkOutDoors|WorkOutDoors|WorkOutDoors|WorkOutDoors|
|343|1293681293|❌|Pocket Build|Pocket Build|Pocket Build|Pocket Build|Pocket Build|
|344|1330717186|❌|The Golf Tracer|The Golf Tracer|The Golf Tracer|The Golf Tracer|The Golf Tracer|
|345|1357651989|❌|Tick Tock: A Tale for Two|Tick Tock: A Tale for Two|Tick Tock: A Tale for Two|Tick Tock: A Tale for Two|Tick Tock: A Tale for Two|
|346|1385258906|❌|Mindustry|Mindustry|Mindustry|Mindustry|Mindustry|
|347|1402080820|❌|This War of Mine: Stories|This War of Mine: Stories|This War of Mine: Stories|This War of Mine: Stories|This War of Mine: Stories|
|348|1439262206|❌|Root Board Game|Root Board Game|Root Board Game|Root Board Game|Root Board Game|
|349|1450194251|Kişiye Özel Diyet|Kişiye Özel Diyet|Kişiye Özel Diyet|Kişiye Özel Diyet|Weight Loss in 28 Days|Weight Loss in 28 Days|
|350|1477229754|❌|Papa's Cheeseria To Go!|Papa's Cheeseria To Go!|Papa's Cheeseria To Go!|Papa's Cheeseria To Go!|Papa's Cheeseria To Go!|
|351|1514329124|❌|Rusted Warfare - RTS|Rusted Warfare - RTS|Rusted Warfare - RTS|Rusted Warfare - RTS|Rusted Warfare - RTS|
|352|1553055273|Chairgun Elite Ballistic Tool|Chairgun Elite Ballistic Tool|Chairgun Elite Ballistic Tool|Chairgun Elite Ballistic Tool|❌|Chairgun Elite Ballistic Tool|
|353|1573220858|❌|環球酒店大亨|環球酒店大亨|環球酒店大亨|环球酒店大亨|环球酒店大亨|
|354|1580509302|❌|伊格利亞戰記|伊格利亞戰記|伊格利亞戰記|The Heroic Legend of Eagarlnia|The Heroic Legend of Eagarlnia|
|355|1614771445|❌|Rotaeno - 旋轉音律|Rotaeno - 旋轉音律|Rotaeno - 旋轉音律|Rotaeno|Rotaeno|
|356|6742396803|DaDaDaDa - 空气枪|DaDaDaDa - AirGun|DaDaDaDa - AirGun|DaDaDaDa - AirGun|DaDaDaDa - AirGun|DaDaDaDa - AirGun|
|357|6740943002|BaMai|BaMai|BaMai|BaMai|BaMai|❌|
|358|6743459503|❌|逐鹿|逐鹿|逐鹿|逐鹿|逐鹿|
|359|6480251529|体育集换卡制作专业版|體育集換卡製作專業版|體育集換卡製作專業版|體育集換卡製作專業版|Ultimate Card Creator|Ultimate Card Creator|
|360|6739179322|WristShorts for YouTube|WristShorts for YouTube|WristShorts for YouTube|WristShorts for YouTube|WristShorts for YouTube|WristShorts for YouTube|
|361|6744837914|块块爱消除-手表游戏经典快乐休闲益智|塊塊愛消除-手錶遊戲經典快樂休閒益智|塊塊愛消除-手錶遊戲經典快樂休閒益智|塊塊愛消除-手錶遊戲經典快樂休閒益智|Block Jam Blast For Watch|Block Jam Blast For Watch|
|362|6502623166|❌|金武江湖|金武江湖|金武江湖|金武江湖|金武江湖|
|363|6468033830|❌|憶我: 一個性格測試遊戲|憶我: 一個性格測試遊戲|憶我: 一個性格測試遊戲|Refind Self|Refind Self|
|364|6738138603|❌|偶像之路终极版UltimateEdition|偶像之路终极版UltimateEdition|偶像之路终极版UltimateEdition|偶像之路终极版UltimateEdition|偶像之路终极版UltimateEdition|
|365|6739185971|❌|❌|❌|❌|Earnifi: Rent, Early Pay, Cash|❌|
|366|284972998|SoundHound∞ 音乐搜索识别和播放器|SoundHound∞ 音樂識別搜尋器及播放器|SoundHound∞ 音樂識別搜尋器及播放器|SoundHound∞ 音樂識別搜尋器及播放器|SoundHound∞ - Music Discovery|SoundHound∞ - Music Discovery|
|367|288419283|❌|❌|❌|❌|RadarScope|RadarScope|
|368|292421271|❌|Fieldrunners|Fieldrunners|Fieldrunners|Fieldrunners|Fieldrunners|
|369|294934058|HotSchedules|HotSchedules|HotSchedules|HotSchedules|HotSchedules|HotSchedules|
|370|298206806|iReal Pro|iReal Pro|iReal Pro|iReal Pro|iReal Pro|iReal Pro|
|371|299117180|Airports|Airports|Airports|Airports|Airports|Airports|
|372|301387274|❌|Pocket God|Pocket God|Pocket God|Pocket God|Pocket God|
|373|305557780|换脸 (iSwap Faces Pro)|iSwap Faces Pro|iSwap Faces Pro|iSwap Faces Pro|iSwap Faces Pro|iSwap Faces Pro|
|374|306938028|Photo Sticker|Photo Sticker|Photo Sticker|Photo Sticker|Photo Sticker|Photo Sticker|
|375|307132353|❌|Sally's Spa|Sally's Spa|Sally's Spa|Sally's Spa|Sally's Spa|
|376|307727765|❌|Doodle Jump|Doodle Jump|Doodle Jump|Doodle Jump|Doodle Jump|
|377|307751675|❌|PopStar!-stars crush|PopStar!-stars crush|PopStar!-stars crush|PopStar!-stars crush|PopStar!-stars crush|
|378|315021242|❌|Unblock Me Premium|Unblock Me Premium|Unblock Me Premium|Unblock Me Premium|Unblock Me Premium|
|379|315514944|实用家常菜谱大全|实用家常菜谱大全|实用家常菜谱大全|实用家常菜谱大全|实用家常菜谱大全|实用家常菜谱大全|
|380|317809458|LiveATC Air Radio|LiveATC Air Radio|LiveATC Air Radio|LiveATC Air Radio|LiveATC Air Radio|LiveATC Air Radio|
|381|323048611|Dr.eye譯典通|Dr.eye譯典通|Dr.eye譯典通|Dr.eye譯典通|Dr.eye譯典通|Dr.eye譯典通|
|382|329670577|Camera+旧版|Camera+傳統|Camera+傳統|Camera+傳統|Camera+ Legacy|Camera+ Legacy|
|383|332424440|❌|MILLIONAIRE TYCOON™|MILLIONAIRE TYCOON™|MILLIONAIRE TYCOON™|MILLIONAIRE TYCOON™|MILLIONAIRE TYCOON™|
|384|333212604|蒙恬名片王Mobile|蒙恬名片王Mobile|蒙恬名片王Mobile|蒙恬名片王Mobile|蒙恬名片王Mobile|蒙恬名片王Mobile|
|385|335029050|❌|Catan Classic|Catan Classic|Catan Classic|Catan Classic|Catan Classic|
|386|335709058|Stylebook|Stylebook|Stylebook|Stylebook|Stylebook|Stylebook|
|387|335862325|Blower|Blower|Blower|Blower|Blower|Blower|
|388|342115564|Hipstamatic 相机|Hipstamatic 相機|Hipstamatic 相機|Hipstamatic 相機|Classic Camera by Hipstamatic|Classic Camera by Hipstamatic|
|389|344784375|播放器OPlayer|OPlayer - video player|OPlayer - video player|OPlayer - video player|OPlayer - video player|OPlayer - video player|
|390|351850196|紫白飛星萬年曆 - 十三行作品|紫白飛星萬年曆 - 十三行作品|紫白飛星萬年曆 - 十三行作品|紫白飛星萬年曆 - 十三行作品|紫白飛星萬年曆 - 十三行作品|紫白飛星萬年曆 - 十三行作品|
|391|352247139|Calorie Counter PRO MyNetDiary|Calorie Counter PRO MyNetDiary|Calorie Counter PRO MyNetDiary|Calorie Counter PRO MyNetDiary|Calorie Counter PRO MyNetDiary|Calorie Counter PRO MyNetDiary|
|392|355281169|❌|遠流字典通 (豪華版)|遠流字典通 (豪華版)|遠流字典通 (豪華版)|遠流字典通 (豪華版)|遠流字典通 (豪華版)|
|393|357404131|慢快门相机 (Slow Shutter Cam)|慢快門相機 (Slow Shutter Cam)|慢快門相機 (Slow Shutter Cam)|慢快門相機 (Slow Shutter Cam)|Slow Shutter Cam|Slow Shutter Cam|
|394|357421934|PeakFinder|PeakFinder|PeakFinder|PeakFinder|PeakFinder|PeakFinder|
|395|367327563|秘密照片管理 - i照片文件夹|Secret Photo+Folder|Secret Photo+Folder|Secret Photo+Folder|Secret Photo+Folder|Secret Photo+Folder|
|396|373493387|AnkiMobile Flashcards|AnkiMobile Flashcards|AnkiMobile Flashcards|AnkiMobile Flashcards|AnkiMobile Flashcards|AnkiMobile Flashcards|
|397|388130466|❌|iSlash|iSlash|iSlash|iSlash|iSlash|
|398|388857410|❌|Blackjack & Card Counting Pro|Blackjack & Card Counting Pro|Blackjack & Card Counting Pro|Blackjack & Card Counting Pro|Blackjack & Card Counting Pro|
|399|392531952|倉頡解碼|倉頡解碼|倉頡解碼|倉頡解碼|倉頡解碼|倉頡解碼|
|400|395680819|AVPlayer|AVPlayer|AVPlayer|AVPlayer|AVPlayer|AVPlayer|
|401|396085661|❌|遊戲發展國++|遊戲發展國++|遊戲發展國++|Game Dev Story|Game Dev Story|
|402|402012828|iSafe Pro|iSafe Pro|iSafe Pro|iSafe Pro|iSafe Pro|iSafe Pro|
|403|402656416|IP Cam Viewer Pro|IP Cam Viewer Pro|IP Cam Viewer Pro|IP Cam Viewer Pro|IP Cam Viewer Pro|IP Cam Viewer Pro|
|404|403684733|Badoo高级版|Badoo進階版|Badoo進階版|Badoo進階版|Badoo Premium|Badoo Premium|
|405|404990064|SkyView®|SkyView®|SkyView®|SkyView®|SkyView®|SkyView®|
|406|405835358|MilGPS|MilGPS|MilGPS|MilGPS|MilGPS|MilGPS|
|407|406239138|❌|Puffin Cloud Browser|Puffin Cloud Browser|Puffin Cloud Browser|Puffin Browser Pro|Puffin Browser Pro|
|408|406541444|8毫米相机|8mm Vintage Camera|8mm Vintage Camera|8mm Vintage Camera|8mm Vintage Camera|8mm Vintage Camera|
|409|407933070|怀旧日历 - 十三行作品|懷舊日曆 - 十三行作品|懷舊日曆 - 十三行作品|懷舊日曆 - 十三行作品|懷舊日曆 - 十三行作品|懷舊日曆 - 十三行作品|
|410|408697793|❌|King of Opera|King of Opera|King of Opera|King of Opera|King of Opera|
|411|408854559|❌|溫泉物語|溫泉物語|溫泉物語|Hot Springs Story|Hot Springs Story|
|412|417817520|❌|Tiny Wings|Tiny Wings|Tiny Wings|Tiny Wings|Tiny Wings|
|413|424403441|瑕疵清除器 (Pimple Eraser)|Pimple Eraser|Pimple Eraser|Pimple Eraser|Pimple Eraser|Pimple Eraser|
|414|430163724|智能风水罗盘-专业版|智能風水羅庚-專業版|智能風水羅庚-專業版|智能風水羅庚-專業版|智能风水罗盘-专业版|智能风水罗盘-专业版|
|415|432850619|FL Studio Mobile|FL Studio Mobile|FL Studio Mobile|FL Studio Mobile|FL Studio Mobile|FL Studio Mobile|
|416|433596395|❌|ZOOKEEPER DX|ZOOKEEPER DX|ZOOKEEPER DX|ZOOKEEPER DX|ZOOKEEPER DX|
|417|449735650|❌|鱷魚小頑皮愛洗澡|鱷魚小頑皮愛洗澡|鱷魚小頑皮愛洗澡|Where's My Water?|Where's My Water?|
|418|450542233|❌|Cut the Rope: Experiments GOLD|Cut the Rope: Experiments GOLD|Cut the Rope: Experiments GOLD|Cut the Rope: Experiments GOLD|Cut the Rope: Experiments GOLD|
|419|452990487|RushPlayer|RushPlayer|RushPlayer|RushPlayer|RushPlayer|RushPlayer|
|420|454086751|❌|Flick Home Run !|Flick Home Run !|Flick Home Run !|Flick Home Run !|Flick Home Run !|
|421|469343554|❌|洛克人X|洛克人X|洛克人X|❌|❌|
|422|479516143|❌|Minecraft|Minecraft|Minecraft|Minecraft: Dream it, Build it!|Minecraft: Dream it, Build it!|
|423|479662730|❌|Grand Theft Auto III|Grand Theft Auto III|Grand Theft Auto III|Grand Theft Auto III|Grand Theft Auto 3|
|424|482303584|❌|❌|❌|❌|PDG PROmote 2025+|PDG PROmote 2025+|
|425|485246824|❌|Cytus|Cytus|Cytus|Cytus|Cytus|
|426|491231653|❌|大富翁 4 Fun|大富翁 4 Fun|大富翁 4 Fun|大富翁 4 Fun|大富翁 4 Fun|
|427|497716362|TonalEnergy 调音器—节拍器|TonalEnergy 調音器—節拍器|TonalEnergy 調音器—節拍器|TonalEnergy 調音器—節拍器|TonalEnergy Tuner & Metronome|TonalEnergy Tuner & Metronome|
|428|498732510|❌|Blitzer.de PRO|❌|Blitzer.de PRO|Blitzer.de PRO|Blitzer.de PRO|
|429|501695715|儿歌童谣 - 国语+粤语(广东话)儿歌连歌词|兒歌童謠 - 國語+粵語(廣東話)兒歌連歌詞|兒歌童謠 - 國語+粵語(廣東話)兒歌連歌詞|兒歌童謠 - 國語+粵語(廣東話)兒歌連歌詞|兒歌童謠 - 國語+粵語(廣東話)兒歌連歌詞|兒歌童謠 - 國語+粵語(廣東話)兒歌連歌詞|
|430|503190232|❌|Bridge Constructor|Bridge Constructor|Bridge Constructor|Bridge Constructor|Bridge Constructor|
|431|504176984|论子平-论八字(实用)|論八字(實用)|論八字(實用)|論八字(實用)|论子平-论八字(实用)|论子平-论八字(实用)|
|432|504300412|❌|歐陸戰爭3|歐陸戰爭3|歐陸戰爭3|European War 3|European War 3|
|433|505367096|世界迷雾|世界迷霧|世界迷霧|世界迷霧|Fog of World|Fog of World|
|434|519411018|iGuzheng - 爱古筝|iGuzheng - 愛古箏|iGuzheng - 愛古箏|iGuzheng - 愛古箏|iGuzheng|iGuzheng|
|435|520231936|eDrawings|eDrawings|eDrawings|eDrawings|eDrawings|eDrawings|
|436|524387892|The Official KSIOlajidebt Soundboard - KSI Sounds|The Official KSIOlajidebt Soundboard - KSI Sounds|The Official KSIOlajidebt Soundboard - KSI Sounds|The Official KSIOlajidebt Soundboard - KSI Sounds|The Official KSIOlajidebt Soundboard - KSI Sounds|The Official KSIOlajidebt Soundboard - KSI Sounds|
|437|525818839|❌|Plague Inc. (瘟疫公司)|Plague Inc. (瘟疫公司)|Plague Inc. (瘟疫公司)|Plague Inc.|Plague Inc.|
|438|530425820|东方财富领先版-财经资讯&股票开户|东方财富领先版-财经资讯&股票开户|东方财富领先版-财经资讯&股票开户|东方财富领先版-财经资讯&股票开户|东方财富领先版-财经资讯&股票开户|东方财富领先版-财经资讯&股票开户|
|439|540925500|❌|Need for Speed™ Most Wanted|Need for Speed™ Most Wanted|Need for Speed™ Most Wanted|❌|Need for Speed™ Most Wanted|
|440|549105915|❌|True Skate|True Skate|True Skate|True Skate|True Skate|
|441|549432607|❌|Townsmen Premium|Townsmen Premium|Townsmen Premium|Townsmen Premium|Townsmen Premium|
|442|554937499|❌|Earn to Die|Earn to Die|Earn to Die|Earn to Die|Earn to Die|
|443|555642577|晋硕万年历|晉碩萬年曆|晉碩萬年曆|晉碩萬年曆|Chinsoft Lunar Calendar|Chinsoft Lunar Calendar|
|444|563718995|❌|Bloons TD 5|Bloons TD 5|Bloons TD 5|Bloons TD 5|Bloons TD 5|
|445|575154654|❌|Pou|Pou|Pou|Pou|Pou|
|446|577628510|TeamSpeak 3|TeamSpeak 3|TeamSpeak 3|TeamSpeak 3|TeamSpeak 3|TeamSpeak 3|
|447|578448682|❌|Grand Theft Auto: Vice City|Grand Theft Auto: Vice City|Grand Theft Auto: Vice City|Grand Theft Auto: Vice City|Grand Theft Auto: Vice City|
|448|586149216|Monash FODMAP Diet|Monash FODMAP Diet|Monash FODMAP Diet|Monash FODMAP Diet|Monash FODMAP Diet|Monash FODMAP Diet|
|449|594117733|❌|仙劍奇俠傳1 DOS懷舊版|仙劍奇俠傳1 DOS懷舊版|仙劍奇俠傳1 DOS懷舊版|仙劍奇俠傳1 DOS懷舊版|仙劍奇俠傳1 DOS懷舊版|
|450|600626116|❌|Papa's Burgeria To Go!|Papa's Burgeria To Go!|Papa's Burgeria To Go!|Papa's Burgeria To Go!|Papa's Burgeria To Go!|
|451|623592465|❌|Heads Up!|Heads Up!|Heads Up!|Heads Up!|Heads Up!|
|452|625334537|❌|Geometry Dash|Geometry Dash|Geometry Dash|Geometry Dash|Geometry Dash|
|453|634235735|❌|Duet Game|Duet Game|Duet Game|Duet Game|Duet Game|
|454|640364616|❌|❌|❌|❌|Terraria|Terraria|
|455|646256209|Photo Eraser|照片橡皮擦|照片橡皮擦|照片橡皮擦|Photo Eraser for iPhone|Photo Eraser for iPhone|
|456|657016140|Good Maps - 谷歌地图,离线,街景,公交,地铁,导航|Good Maps - Google地圖,3D,離線,全球街景,公交,地鐵,導航|Good Maps - Google地圖,3D,離線,全球街景,公交,地鐵,導航|Good Maps - Google地圖,3D,離線,全球街景,公交,地鐵,導航|Good Maps - for Google Maps, with Offline Map, Directions, Street Views and More|Good Maps - for Google Maps, with Offline Map, Directions, Street Views and More|
|457|679044544|AndroMoney|理財幫手 AndroMoney|理財幫手 AndroMoney|理財幫手 AndroMoney|AndroMoney|AndroMoney|
|458|687236545|Adv. Learner’s Dictionary (TC)|劍橋高階英漢雙解詞典：英語— 繁體中文|劍橋高階英漢雙解詞典：英語— 繁體中文|劍橋高階英漢雙解詞典：英語— 繁體中文|Adv. Learner’s Dictionary (TC)|Adv. Learner’s Dictionary (TC)|
|459|697885605|❌|❌|❌|常春藤基礎英文字彙|常春藤基礎英文字彙|常春藤基礎英文字彙|
|460|700637744|❌|DEEMO|DEEMO|DEEMO|DEEMO|DEEMO|
|461|736683061|❌|A Dark Room|A Dark Room|A Dark Room|A Dark Room|A Dark Room|
|462|741990930|❌|Walkout Song DJ|❌|❌|Walkout Song DJ|❌|
|463|763692274|❌|Grand Theft Auto: San Andreas|Grand Theft Auto: San Andreas|Grand Theft Auto: San Andreas|Grand Theft Auto: San Andreas|Grand Theft Auto: San Andreas|
|464|784373321|❌|軒轅劍參外傳 天之痕|軒轅劍參外傳 天之痕|軒轅劍參外傳 天之痕|軒轅劍參外傳 天之痕|軒轅劍參外傳 天之痕|
|465|807317212|每日精选-天文地理人文照片之美&壁纸|每日精選-天文地理人文照片之美|每日精選-天文地理人文照片之美|每日精選-天文地理人文照片之美|Daily Dozen-Culture in Photos|Daily Dozen-Culture in Photos|
|466|824305459|❌|Papa's Freezeria To Go!|Papa's Freezeria To Go!|Papa's Freezeria To Go!|Papa's Freezeria To Go!|Papa's Freezeria To Go!|
|467|829581836|Driving Theory Test 4 in 1 Kit|Driving Theory Test 4 in 1 Kit|Driving Theory Test 4 in 1 Kit|Driving Theory Test 4 in 1 Kit|Driving Theory Test 4 in 1 Kit|Driving Theory Test 4 in 1 Kit|
|468|837860959|❌|迷你地鐵|迷你地鐵|迷你地鐵|Mini Metro|Mini Metro|
|469|860809977|Fongo World Edition|Fongo World Edition|Fongo World Edition|Fongo World Edition|Fongo World Edition|Fongo World Edition|
|470|870322730|❌|Implosion 聚爆|Implosion 聚爆|Implosion 聚爆|Implosion - Never Lose Hope|Implosion - Never Lose Hope|
|471|890791581|樂客導航王全3D Pro|樂客導航王全3D Pro|樂客導航王全3D Pro|樂客導航王全3D Pro|樂客導航王全3D Pro|樂客導航王全3D Pro|
|472|891194610|❌|戰車撞殭屍2 (Earn to Die 2)|戰車撞殭屍2 (Earn to Die 2)|戰車撞殭屍2 (Earn to Die 2)|Earn to Die 2|Earn to Die 2|
|473|901738789|地下城堡: 炼金术师的魔幻之旅|地下城堡: 煉金術師的魔幻之旅|地下城堡: 煉金術師的魔幻之旅|地下城堡: 煉金術師的魔幻之旅|Dungeon Survivor|Dungeon Survivor|
|474|904278510|❌|刺客任務：狙擊 (Hitman Sniper)|刺客任務：狙擊 (Hitman Sniper)|刺客任務：狙擊 (Hitman Sniper)|Hitman Sniper|Hitman Sniper|
|475|912536422|❌|Five Nights at Freddy's|Five Nights at Freddy's|Five Nights at Freddy's|Five Nights at Freddy's|Five Nights at Freddy's|
|476|916976066|短语键盘|短語鍵盤|短語鍵盤|短語鍵盤|Phraseboard Keyboard|Phraseboard Keyboard|
|477|918609651|Money Pro: Personal Finance AR|Money Pro: 個人財務|Money Pro: 個人財務|Money Pro: 個人財務|Money Pro: Personal Finance AR|Money Pro: Personal Finance AR|
|478|924695435|Pixelmator|Pixelmator|Pixelmator|Pixelmator|Pixelmator|Pixelmator|
|479|925494667|❌|Papa's Pizzeria To Go!|Papa's Pizzeria To Go!|Papa's Pizzeria To Go!|Papa's Pizzeria To Go!|Papa's Pizzeria To Go!|
|480|926015463|Timestamp Photo and Video pro|Timestamp Photo and Video pro|Timestamp Photo and Video pro|Timestamp Photo and Video pro|Timestamp Photo and Video pro|Timestamp Photo and Video pro|
|481|926076608|秒速记账 1SecMoney|秒速記帳 1SecMoney|秒速記帳 1SecMoney|秒速記帳 1SecMoney|1SecMoney|1SecMoney|
|482|927098908|Pro Camera by Moment|Pro Camera by Moment|Pro Camera by Moment|Pro Camera by Moment|Pro Camera by Moment|Pro Camera by Moment|
|483|932389062|❌|永不言棄！！ - 不可能的節奏跳躍 & 黑色小球翻滾|永不言棄！！ - 不可能的節奏跳躍 & 黑色小球翻滾|永不言棄！！ - 不可能的節奏跳躍 & 黑色小球翻滾|Give It Up! - Jump to the Beat|Give It Up! - Jump to the Beat|
|484|935216956|❌|Papers, Please|Papers, Please|Papers, Please|Papers, Please|Papers, Please|
|485|935528099|同步音律|同步音律|同步音律|同步音律|MUSYNX|MUSYNX|
|486|941143328|❌|Five Nights at Freddy's 2|Five Nights at Freddy's 2|Five Nights at Freddy's 2|Five Nights at Freddy's 2|Five Nights at Freddy's 2|
|487|945322477|❌|新仙劍奇俠傳(正版單機)|新仙劍奇俠傳(正版單機)|新仙劍奇俠傳(正版單機)|新仙劍奇俠傳(正版單機)|新仙劍奇俠傳(正版單機)|
|488|946477821|❌|Evoland|Evoland|Evoland|Evoland|Evoland|
|489|948944368|全屏浏览器 - 用得全屏才是好浏览器！|iBrowser- Full Screen Browser|iBrowser- Full Screen Browser|iBrowser- Full Screen Browser|iBrowser- Full Screen Browser|iBrowser- Full Screen Browser|
|490|954724812|同花顺至尊版-股票软件|同花顺至尊版-股票软件|同花顺至尊版-股票软件|同花顺至尊版-股票软件|同花顺至尊版-股票软件|同花顺至尊版-股票软件|
|491|955687901|kirakira+|kirakira+|kirakira+|kirakira+|kirakira+|kirakira+|
|492|961932335|Analog Tokyo|Analog Tokyo|Analog Tokyo|Analog Tokyo|Analog Tokyo|Analog Tokyo|
|493|963034692|Streaks|Streaks|Streaks|Streaks|Streaks|Streaks|
|494|964708975|古诗文网|古诗文网|古诗文网|古诗文网|古诗文网|古诗文网|
|495|973482987|❌|Five Nights at Freddy's 3|Five Nights at Freddy's 3|Five Nights at Freddy's 3|Five Nights at Freddy's 3|Five Nights at Freddy's 3|
|496|975683986|❌|Door Kickers|Door Kickers|Door Kickers|Door Kickers|Door Kickers|
|497|982175678|❌|This War of Mine|This War of Mine|This War of Mine|This War of Mine|This War of Mine|
|498|982227026|聚爆Implosion|❌|❌|❌|❌|❌|
|499|992047786|Analog Wedding|Analog Wedding|Analog Wedding|Analog Wedding|Analog Wedding|Analog Wedding|
|500|998437582|法语背单词 - 法语单词记忆工具|法语背单词 - 法语单词记忆工具|法语背单词 - 法语单词记忆工具|法语背单词 - 法语单词记忆工具|法语背单词 - 法语单词记忆工具|法语背单词 - 法语单词记忆工具|
|501|1010311475|QuickBend: Conduit Bending|QuickBend: Conduit Bending|QuickBend: Conduit Bending|QuickBend: Conduit Bending|QuickBend: Conduit Bending|QuickBend: Conduit Bending|
|502|1012298403|❌|Don't Starve: Pocket Edition|Don't Starve: Pocket Edition|Don't Starve: Pocket Edition|Don't Starve: Pocket Edition|Don't Starve: Pocket Edition|
|503|1023146677|❌|Five Nights at Freddy's 4|Five Nights at Freddy's 4|Five Nights at Freddy's 4|Five Nights at Freddy's 4|Five Nights at Freddy's 4|
|504|1028950091|贪婪洞窟：猿神降临|貪婪洞窟：猿神降临|貪婪洞窟：猿神降临|貪婪洞窟：猿神降临|The Greedy Cave|The Greedy Cave|
|505|1029932207|❌|Papa's Cupcakeria To Go!|Papa's Cupcakeria To Go!|Papa's Cupcakeria To Go!|Papa's Cupcakeria To Go!|Papa's Cupcakeria To Go!|
|506|1035219553|Analog London|Analog London|Analog London|Analog London|Analog London|Analog London|
|507|1035219562|Analog Paris|Analog Paris|Analog Paris|Analog Paris|Analog Paris|Analog Paris|
|508|1065360416|BimmerLink for BMW and MINI|BimmerLink for BMW and MINI|BimmerLink for BMW and MINI|BimmerLink for BMW and MINI|BimmerLink for BMW and MINI|BimmerLink for BMW and MINI|
|509|1065599938|❌|HARVEST MOON: Seeds Of Memories|HARVEST MOON: Seeds Of Memories|HARVEST MOON: Seeds Of Memories|HARVEST MOON: Seeds Of Memories|HARVEST MOON: Seeds Of Memories|
|510|1077639630|说剑The Swords|❌|❌|❌|❌|❌|
|511|1093131935|❌|Incredibox|Incredibox|Incredibox|Incredibox|Incredibox|
|512|1094038347|❌|Only You Are Here|Only You Are Here|Only You Are Here|Only You Are Here|Only You Are Here|
|513|1095903651|【约吗】-约会附近的人，同城陌生人交友陪玩聊天软件|甜蛙-约会附近的人，同城陌生人交友陪玩聊天软件|甜蛙-约会附近的人，同城陌生人交友陪玩聊天软件|甜蛙-约会附近的人，同城陌生人交友陪玩聊天软件|甜蛙-约会附近的人，同城陌生人交友陪玩聊天软件|甜蛙-约会附近的人，同城陌生人交友陪玩聊天软件|
|514|1099088440|火柴人联盟2|火柴人联盟2|火柴人联盟2|火柴人联盟2|❌|❌|
|515|1108479411|❌|Driving Zone 2: Car Racing|Driving Zone 2: Car Racing|Driving Zone 2: Car Racing|Driving Zone 2: Car Racing|Driving Zone 2: Racing Games|
|516|1110646984|地下城堡2: 黑暗觉醒|❌|❌|❌|❌|❌|
|517|1111420122|❌|Hear My Baby Heartbeat App|Hear My Baby Heartbeat App|Hear My Baby Heartbeat App|Hear My Baby Heartbeat Monitor|Hear My Baby Heartbeat App|
|518|1112429079|物种起源|Origin - The Big Bang|Origin - The Big Bang|Origin - The Big Bang|Origin - The Big Bang|Origin - The Big Bang|
|519|1113736426|❌|RollerCoaster Tycoon® Classic|RollerCoaster Tycoon® Classic|RollerCoaster Tycoon® Classic|RollerCoaster Tycoon® Classic|RollerCoaster Tycoon® Classic|
|520|1118115766|❌|Bloons TD 6|Bloons TD 6|Bloons TD 6|Bloons TD 6|Bloons TD 6|
|521|1121484538|❌|箱庭鐵道物語|箱庭鐵道物語|箱庭鐵道物語|Station Manager|Station Manager|
|522|1128464707|❌|Death Road to Canada|Death Road to Canada|Death Road to Canada|Death Road to Canada|Death Road to Canada|
|523|1129429340|RaceChrono Pro|RaceChrono Pro|RaceChrono Pro|RaceChrono Pro|RaceChrono Pro|RaceChrono Pro|
|524|1134805859|迷失岛|迷失島|迷失島|迷失島|Isoland|Isoland|
|525|1137257203|Namaz Vakti Pro (Reklamsız)|Namaz Vakti Pro (Reklamsız)|Namaz Vakti Pro (Reklamsız)|Namaz Vakti Pro (Reklamsız)|Muslim Prayer Times Pro, Adhan|Muslim Prayer Times Pro, Adhan|
|526|1142016085|❌|Rusty Lake: Roots|Rusty Lake: Roots|Rusty Lake: Roots|Rusty Lake: Roots|Rusty Lake: Roots|
|527|1160608318|Air Traffic Control - Live ATC|Air Traffic Control - Live ATC|Air Traffic Control - Live ATC|Air Traffic Control - Live ATC|Air Traffic Control - Live ATC|Air Traffic Control - Live ATC|
|528|1166143148|❌|暴力街區2|暴力街區2|暴力街區2|Brutal Street 2|Brutal Street 2|
|529|1169282239|活下去-丧尸题材末日生存冒险游戏|❌|❌|❌|❌|❌|
|530|1184204602|ProMovie + 专业摄像机|ProMovie + 專業攝像機|ProMovie + 專業攝像機|ProMovie + 專業攝像機|ProMovie Recorder +|ProMovie Recorder +|
|531|1187265767|❌|Monument Valley 2|Monument Valley 2|Monument Valley 2|Monument Valley 2|Monument Valley 2|
|532|1189781891|❌|Five Nights at Freddy's: SL|Five Nights at Freddy's: SL|Five Nights at Freddy's: SL|Five Nights at Freddy's: SL|Five Nights at Freddy's: SL|
|533|1195035357|❌|地牢防禦 : 勇士的侵入|地牢防禦 : 勇士的侵入|地牢防禦 : 勇士的侵入|Dungeon Defense : The Gate|Dungeon Defense : The Gate|
|534|1217732174|TA - 一对一聊天，遇见对的人|❌|❌|❌|❌|❌|
|535|1237692856|Gudak Cam|Gudak Cam|Gudak Cam|Gudak Cam|Gudak Cam|Gudak Cam|
|536|1239299402|❌|Street Fighter IV CE|Street Fighter IV CE|Street Fighter IV CE|Street Fighter IV CE|Street Fighter IV CE|
|537|1241383990|Baby Sensory Signbook|Baby Sensory Signbook|Baby Sensory Signbook|Baby Sensory Signbook|Baby Sensory Signbook|Baby Sensory Signbook|
|538|1247397901|❌|奧德瑪|奧德瑪|奧德瑪|Oddmar|Oddmar|
|539|1248033433|❌|王國保衛戰：復仇|王國保衛戰：復仇|王國保衛戰：復仇|Kingdom Rush Vengeance TD Game|Kingdom Rush Vengeance TD|
|540|1249864455|❌|Peace, Death!|Peace, Death!|Peace, Death!|Peace, Death!|Peace, Death!|
|541|1250144822|玄空飛星羅經 - 專業風水羅盤|玄空飛星羅經 - 專業風水羅盤|玄空飛星羅經 - 專業風水羅盤|玄空飛星羅經 - 專業風水羅盤|玄空飛星羅經 - 專業風水羅盤|玄空飛星羅經 - 專業風水羅盤|
|542|1259067036|❌|發現動物公園|發現動物公園|發現動物公園|Wild Park Manager|Wild Park Manager|
|543|1262474519|❌|Monoposto|Monoposto|Monoposto|Monoposto|Monoposto|
|544|1264608487|❌|Driving Zone: Germany Pro|Driving Zone: Germany Pro|Driving Zone: Germany Pro|Driving Zone: Germany Pro|Driving Zone: Germany Pro|
|545|1290687550|❌|Cytus II|Cytus II|Cytus II|Cytus II|Cytus II|
|546|1291429551|❌|60 Parsecs!|60 Parsecs!|60 Parsecs!|60 Parsecs!|60 Parsecs!|
|547|1291730054|❌|Lowriders Comeback 2: Cruising|Lowriders Comeback 2: Cruising|Lowriders Comeback 2: Cruising|Lowriders Comeback 2: Cruising|Lowriders Comeback 2: Cruising|
|548|1296085645|aRacerSmart|aRacerSmart|aRacerSmart|aRacerSmart|aRacerSmart|aRacerSmart|
|549|1298544927|❌|❌|❌|❌|My Child Lebensborn|My Child Lebensborn|
|550|1303222868|Paprika食谱管理3|Paprika Recipe Manager 3|Paprika Recipe Manager 3|Paprika Recipe Manager 3|Paprika Recipe Manager 3|Paprika Recipe Manager 3|
|551|1312534841|MyText Widget|MyText Widget|MyText Widget|MyText Widget|MyText Widget|MyText Widget|
|552|1329434099|乱斗堂3|❌|❌|❌|❌|❌|
|553|1330314351|微剪辑-微视频编辑助手|Videdit - Handy Video Editor|Videdit - Handy Video Editor|Videdit - Handy Video Editor|Videdit - Handy Video Editor|Videdit - Handy Video Editor|
|554|1336793944|❌|勇敢的哈克|勇敢的哈克|勇敢的哈克|HAAK|HAAK|
|555|1339516665|奥特曼传奇英雄VIP版|❌|❌|❌|❌|❌|
|556|1351652600|❌|Boolean!|Boolean!|Boolean!|Boolean!|Boolean!|
|557|1359107338|Catch the Easter Bunny|Catch the Easter Bunny|Catch the Easter Bunny|Catch the Easter Bunny|Catch the Easter Bunny|Catch the Easter Bunny|
|558|1359652100|❌|DungeonMaker|DungeonMaker|DungeonMaker|Dungeon Maker : Dark Lord|Dungeon Maker : Dark Lord|
|559|1391339323|❌|Zaptiye|Zaptiye|Zaptiye|Zaptiye|Zaptiye|
|560|1392608717|❌|Papa's Scooperia To Go!|Papa's Scooperia To Go!|Papa's Scooperia To Go!|Papa's Scooperia To Go!|Papa's Scooperia To Go!|
|561|1406710800|❌|Stardew Valley|Stardew Valley|Stardew Valley|Stardew Valley|Stardew Valley|
|562|1435004182|❌|❌|❌|❌|❌|Hermes: KAYIP|
|563|1436429074|FILCA - SLR Film Camera|FILCA - SLR Film Camera|FILCA - SLR Film Camera|FILCA - SLR Film Camera|FILCA - Vintage Film Camera|FILCA - SLR Film Camera|
|564|1437096541|❌|Rush Rally 3|Rush Rally 3|Rush Rally 3|Rush Rally 3|Rush Rally 3|
|565|1438245901|❌|Papa's Pancakeria To Go!|Papa's Pancakeria To Go!|Papa's Pancakeria To Go!|Papa's Pancakeria To Go!|Papa's Pancakeria To Go!|
|566|1439187947|❌|Rebel Inc. (反叛公司)|Rebel Inc. (反叛公司)|Rebel Inc. (反叛公司)|Rebel Inc.|Rebel Inc.|
|567|1439881811|RadarOmega|RadarOmega|RadarOmega|RadarOmega|RadarOmega|RadarOmega|
|568|1441969889|❌|Z.O.N.A Shadow of Lemansk|Z.O.N.A Shadow of Lemansk|Z.O.N.A Shadow of Lemansk|Z.O.N.A Shadow of Lemansk|Z.O.N.A Shadow of Lemansk|
|569|1442776789|❌|槍與香蕉 - Pirates Outlaws|槍與香蕉 - Pirates Outlaws|槍與香蕉 - Pirates Outlaws|Pirates Outlaws|Pirates Outlaws|
|570|1444761746|❌|RFS - Real Flight Simulator|RFS - Real Flight Simulator|RFS - Real Flight Simulator|RFS - Real Flight Simulator|RFS - Real Flight Simulator|
|571|1449893235|Earthquake Network|Earthquake Network|Earthquake Network|Earthquake Network|Earthquake Network|Earthquake Network|
|572|1450064785|山林日志|山林日誌|山林日誌|山林日誌|Hiking Logger|❌|
|573|1450144092|❌|三國志天下布武 - 單機戰棋策略遊戲|三國志天下布武 - 單機戰棋策略遊戲|三國志天下布武 - 單機戰棋策略遊戲|三國志天下布武 - 單機戰棋策略遊戲|三國志天下布武 - 單機戰棋策略遊戲|
|574|1451873044|❌|Papa's Wingeria To Go!|Papa's Wingeria To Go!|Papa's Wingeria To Go!|Papa's Wingeria To Go!|Papa's Wingeria To Go!|
|575|1453838527|❌|Age of History II|Age of History II|Age of History II|Age of History II|Age of History II|
|576|1455781522|❌|FNaF 6: Pizzeria Simulator|FNaF 6: Pizzeria Simulator|FNaF 6: Pizzeria Simulator|FNaF 6: Pizzeria Simulator|FNaF 6: Pizzeria Simulator|
|577|1459749978|List背单词|List背单词|List背单词|List背单词|List背单词|List背单词|
|578|1461751938|❌|Purple Place - Classic Games|Purple Place - Classic Games|Purple Place - Classic Games|Purple Place - Classic Games|Purple Place - Classic Games|
|579|1464850921|每日英语阅读|每日英语阅读|每日英语阅读|每日英语阅读|每日英语阅读|每日英语阅读|
|580|1474716211|❌|60 Seconds! Reatomized|60 Seconds! Reatomized|60 Seconds! Reatomized|60 Seconds! Reatomized|60 Seconds! Reatomized|
|581|1477203766|❌|Total War: MEDIEVAL II|Total War: MEDIEVAL II|Total War: MEDIEVAL II|Total War: MEDIEVAL II|Total War: MEDIEVAL II|
|582|1477854253|大家的日本语 初级 第二版|大家的日本語 初級 第二版|大家的日本語 初級 第二版|大家的日本語 初級 第二版|大家的日本語 初級 第二版|大家的日本語 初級 第二版|
|583|1477966166|❌|❌|MONOPOLY: The Board Game|MONOPOLY: The Board Game|MONOPOLY: The Board Game|MONOPOLY: The Board Game|
|584|1477991646|❌|王國：兩個皇冠|王國：兩個皇冠|王國：兩個皇冠|Kingdom Two Crowns|Kingdom Two Crowns|
|585|1479608271|❌|Arcadia - Watch Games|Arcadia - Watch Games|Arcadia - Watch Games|Arcadia - Watch Games|Arcadia - Watch Games|
|586|1480844881|❌|Mini Chess on Watch|Mini Chess on Watch|Mini Chess on Watch|Mini Chess on Watch|Mini Chess on Watch|
|587|1481006495|倒计时应用 Countdown App|倒計時應用 Countdown App|倒計時應用 Countdown App|倒計時應用 Countdown App|Countdown App|Countdown App|
|588|1482339363|iScore5 APHG|iScore5 APHG|iScore5 APHG|iScore5 APHG|iScore5 APHG|iScore5 APHG|
|589|1484622401|❌|Religion inc.上帝模擬器|Religion inc.上帝模擬器|Religion inc.上帝模擬器|Religion inc. God Simulator|Religion inc. God Simulator|
|590|1485875855|❌|❌|❌|❌|❌|Başkanlar|
|591|1491530147|❌|❌|❌|Slay the Spire|Slay the Spire|Slay the Spire|
|592|1497120981|LUCH: Photo Effects & Filters|LUCH — Filters & Bokeh Effect|LUCH — Filters & Bokeh Effect|LUCH — Filters & Bokeh Effect|LUCH: Photo Effects & Filters|LUCH: Photo Effects & Presets|
|593|1499849161|❌|Ultimate Custom Night|Ultimate Custom Night|Ultimate Custom Night|Ultimate Custom Night|Ultimate Custom Night|
|594|1500098830|❌|視頻大師 Pro|視頻大師 Pro|視頻大師 Pro|❌|Video Master Pro|
|595|1503486239|❌|大富翁10|大富翁10|大富翁10|Richman10|Richman10|
|596|1504662191|❌|❌|❌|❌|❌|Monarşi|
|597|1504760106|❌|Eco inc. Earth Planet|Eco inc. Earth Planet|Eco inc. Earth Planet|Eco inc.|Eco inc.|
|598|1504952058|❌|Papa's Sushiria To Go!|Papa's Sushiria To Go!|Papa's Sushiria To Go!|Papa's Sushiria To Go!|Papa's Sushiria To Go!|
|599|1505636751|❌|TeleGuard|TeleGuard|TeleGuard|TeleGuard|TeleGuard|
|600|1509344823|Ezberle|Ezberle|Ezberle|Ezberle|Ezberle|Ezberle|
|601|1512751689|❌|The Game of Life 2|The Game of Life 2|The Game of Life 2|The Game of Life 2|The Game of Life 2|
|602|1515215584|RakugakiAR|RakugakiAR|RakugakiAR|RakugakiAR|RakugakiAR|RakugakiAR|
|603|1515382132|❌|Axis & Allies 1942 Online|Axis & Allies 1942 Online|Axis & Allies 1942 Online|Axis & Allies 1942 Online|Axis & Allies 1942 Online|
|604|1516531425|JSPS APP|JSPS APP|JSPS APP|JSPS APP|JSPS APP|JSPS APP|
|605|1517349382|群雄时代 - 单机三国战棋策略游戏|❌|❌|❌|❌|❌|
|606|1518841947|ATSU|ATSU|ATSU|ATSU|ATSU|ATSU|
|607|1519386476|❌|MiniGames - 觀看遊戲街機|MiniGames - 觀看遊戲街機|MiniGames - 觀看遊戲街機|MiniGames - Watch Games Arcade|MiniGames - Watch Games Arcade|
|608|1523633394|❌|SpongeBob SquarePants|SpongeBob SquarePants|SpongeBob SquarePants|SpongeBob SquarePants|SpongeBob SquarePants: BfBB|
|609|1525735418|❌|❌|❌|❌|❌|Mesih|
|610|1528199331|❌|崩潰大陸 2|崩潰大陸 2|崩潰大陸 2|Crashlands 2|Crashlands 2|
|611|1531462734|桂林字牌手机版|桂林字牌手机版|桂林字牌手机版|桂林字牌手机版|❌|❌|
|612|1531654315|❌|画師牆紙|画師牆紙|画師牆紙|MayLikeWallpaper - best hiapk|MayLikeWallpaper - best hiapk|
|613|1536762482|Spirit Talker ®|Spirit Talker ®|Spirit Talker ®|Spirit Talker ®|Spirit Talker ®|Spirit Talker ®|
|614|1544190466|避难所：生存|❌|❌|❌|❌|❌|
|615|1544412558|航海奇闻|❌|❌|❌|❌|❌|
|616|1544722749|拣爱|❌|❌|❌|❌|❌|
|617|1548185534|❌|Musical Maze|Musical Maze|Musical Maze|Musical Maze|Musical Maze|
|618|1551207253|❌|Papa's Mocharia To Go!|Papa's Mocharia To Go!|Papa's Mocharia To Go!|Papa's Mocharia To Go!|Papa's Mocharia To Go!|
|619|1551263854|打金传奇:官方正版 搬砖回收永不关服超爆加强版，传奇王者霸业|❌|❌|❌|❌|❌|
|620|1555857229|2048 for watch|2048_watch|2048_watch|2048_watch|2048_watch|2048_watch|
|621|1556671822|合成大西瓜 for watch|Merge Watermelon for watch|Merge Watermelon for watch|Merge Watermelon for watch|Merge Watermelon for watch|Merge Watermelon for watch|
|622|1559869450|❌|新槍彈辯駁V3 大家的自相殘殺新學期 Anniversary|新槍彈辯駁V3 大家的自相殘殺新學期 Anniversary|新槍彈辯駁V3 大家的自相殘殺新學期 Anniversary|❌|❌|
|623|1562560561|Tevekkülvakti Pro|Tevekkülvakti Pro|Tevekkülvakti Pro|Tevekkülvakti Pro|Tevekkülvakti Pro|Tevekkülvakti Pro|
|624|1563932741|❌|Taboo - Official Party Game|Taboo - Official Party Game|Taboo - Official Party Game|Taboo - Official Party Game|Taboo - Official Party Game|
|625|1569963107|❌|❌|❌|❌|❌|Aylık Distopya|
|626|1576329230|传奇1.76官方正版盛大首发(重置版)今日开服送点卡迷失传说|❌|❌|❌|❌|❌|
|627|1576763082|女帝的日常|女帝的日常|女帝的日常|女帝的日常|女帝的日常|女帝的日常|
|628|1577392165|❌|Monster Train|Monster Train|Monster Train|Monster Train|Monster Train|
|629|1578203914|电子宠物机|电子宠物机|电子宠物机|电子宠物机|Peggy Cat - A Virtual Pet|Peggy Cat - A Virtual Pet|
|630|1581640677|❌|Football Referee Simulator|Football Referee Simulator|Football Referee Simulator|Football Referee Simulator|Football Referee Simulator|
|631|1587674627|爱琳诗篇:异世界冒险 少女放置卡牌手游|愛琳詩篇:少女養成系 休閒放置二次元卡牌手遊|愛琳詩篇:少女養成系 休閒放置二次元卡牌手遊|愛琳詩篇:少女養成系 休閒放置二次元卡牌手遊|❌|❌|
|632|1590622755|µBrowser: Watch Web Browser|µBrowser: Watch Web Browser|µBrowser: Watch Web Browser|µBrowser: Watch Web Browser|µBrowser: Watch Web Browser|µBrowser: Watch Web Browser|
|633|1591627945|❌|Papa's Cluckeria To Go!|Papa's Cluckeria To Go!|Papa's Cluckeria To Go!|Papa's Cluckeria To Go!|Papa's Cluckeria To Go!|
|634|1592505377|❌|Wreckfest|Wreckfest|Wreckfest|Wreckfest|Wreckfest|
|635|1592660274|❌|天際牧場物語-模擬經營自己的牧場|天際牧場物語-模擬經營自己的牧場|天際牧場物語-模擬經營自己的牧場|天际牧场物语-模拟经营自己的牧场|天际牧场物语-模拟经营自己的牧场|
|636|1595739885|❌|❌|Shadow Hunter: Special Edition|Shadow Hunter: Special Edition|Shadow Hunter: Special Edition|Shadow Hunter: Special Edition|
|637|1596736236|❌|❌|Rovio Classics: Angry Birds|Rovio Classics: Angry Birds|Red's First Flight|Red's First Flight|
|638|1600307023|❌|Dealer's Life 2|Dealer's Life 2|Dealer's Life 2|Dealer's Life 2|Dealer's Life 2|
|639|1603421749|传奇高爆99999% 攻速9999倍PC同款三职业:战无不胜|❌|❌|❌|❌|❌|
|640|1603553413|手表浏览器|手表浏览器|手表浏览器|手表浏览器|手表浏览器|手表浏览器|
|641|1606405358|❌|Dealer's Life|Dealer's Life|Dealer's Life|Dealer's Life|Dealer's Life|
|642|1609910024|❌|泰拉瑞亞|泰拉瑞亞|泰拉瑞亞|❌|❌|
|643|1610947489|❌|Poppy Playtime Chapter 1|Poppy Playtime Chapter 1|Poppy Playtime Chapter 1|Poppy Playtime Chapter 1|Poppy Playtime Chapter 1|
|644|1612952507|AeroPads - Pads & Soundscapes|AeroPads - Pads & Soundscapes|AeroPads - Pads & Soundscapes|AeroPads - Pads & Soundscapes|AeroPads - Pads & Soundscapes|AeroPads - Pads & Soundscapes|
|645|1614200925|部落与弯刀|❌|❌|❌|❌|❌|
|646|1622869542|❌|Kingdom Rush 5: Alliance TD|Kingdom Rush 5: Alliance TD|Kingdom Rush 5: Alliance TD|Kingdom Rush 5: Alliance TD|Kingdom Rush 5: Alliance TD|
|647|1624326561|真武三国  英雄集结|真武三国  英雄集结|真武三国  英雄集结|真武三国  英雄集结|真武三国  英雄集结|真武三国  英雄集结|
|648|1631859420|❌|After Inc.|After Inc.|After Inc.|After Inc.|After Inc.|
|649|1631867592|❌|珍寶機場物語|珍寶機場物語|珍寶機場物語|Jumbo Airport Story|Jumbo Airport Story|
|650|1633243177|Ableton Note|Ableton Note|Ableton Note|Ableton Note|Ableton Note|Ableton Note|
|651|1633253544|消除星星 - 益智的星星消消乐经典手表游戏|消除星星-益智的星星消消樂經典手錶消除遊戲|消除星星-益智的星星消消樂經典手錶消除遊戲|消除星星-益智的星星消消樂經典手錶消除遊戲|Pop The Stars Game For Watch|Pop The Stars Game For Watch|
|652|1636342413|SSH Term Pro|SSH Term Pro|SSH Term Pro|SSH Term Pro|SSH Term Pro|SSH Term Pro|
|653|1642601792|❌|The Past Within|The Past Within|The Past Within|The Past Within|The Past Within|
|654|1642733080|❌|DungeonSquad|DungeonSquad|DungeonSquad|DungeonSquad|DungeonSquad|
|655|1643199620|Any Text · Widgets|Any Text · Widgets|Any Text · Widgets|Any Text · Widgets|Any Text · Widgets|Any Text · Widgets|
|656|1659271912|❌|東京電車２|東京電車２|東京電車２|Tokyo Train 2|Tokyo Train 2|
|657|1659316190|钢铁战队(R)|❌|❌|❌|❌|❌|
|658|1662217862|Wipr 2|Wipr 2|Wipr 2|Wipr 2|Wipr 2|Wipr 2|
|659|1665706687|❌|Underground Blossom|Underground Blossom|Underground Blossom|Underground Blossom|Underground Blossom|
|660|1668755109|❌|Brotato:Premium|Brotato:Premium|Brotato:Premium|Brotato:Premium|Brotato:Premium|
|661|1669877091|光明记忆：无限|Bright Memory: Infinite|Bright Memory: Infinite|Bright Memory: Infinite|Bright Memory: Infinite|Bright Memory: Infinite|
|662|1671505630|迷失岛外传南瓜镇|❌|❌|❌|❌|❌|
|663|6737795387|鬼谷八荒|❌|❌|❌|❌|❌|
|664|6448477521|BiuBiuBiu - 空气枪|PewPewPew - Fingergun|PewPewPew - Fingergun|PewPewPew - Fingergun|PewPewPew - Fingergun|PewPewPew - Fingergun|
|665|6472380172|Kino - Pro Video Camera|Kino - Pro Video Camera|Kino - Pro Video Camera|Kino - Pro Video Camera|Kino - Pro Video Camera|Kino - Pro Video Camera|
|666|6443786927|全面憨憨战争模拟器|❌|❌|❌|❌|❌|
|667|6502489827|大侠立志传|❌|❌|❌|❌|❌|
|668|6742129099|群英打三国-超休闲国风放置卡牌巅峰巨作|❌|❌|❌|❌|❌|
|669|6443916065|WiFi万能钥匙专业版-无线热点密码安全万能wi-fi管家|WiFi萬能鑰匙專業版-無線熱點密碼安全萬能wi-fi管家|WiFi萬能鑰匙專業版-無線熱點密碼安全萬能wi-fi管家|WiFi萬能鑰匙專業版-無線熱點密碼安全萬能wi-fi管家|❌|❌|
|670|6737512463|怦然心动的瞬间-轻科幻真人互动恋爱影游|怦然心动的瞬间-轻科幻真人互动恋爱影游|怦然心动的瞬间-轻科幻真人互动恋爱影游|怦然心动的瞬间-轻科幻真人互动恋爱影游|怦然心动的瞬间-轻科幻真人互动恋爱影游|怦然心动的瞬间-轻科幻真人互动恋爱影游|
|671|6462190343|药王谷女修修炼手札|药王谷女修修炼手札|药王谷女修修炼手札|药王谷女修修炼手札|药王谷女修修炼手札|药王谷女修修炼手札|
|672|6444782083|王国保卫战4|❌|❌|❌|❌|❌|
|673|6450148077|干中学！偷偷|干中学！偷偷|干中学！偷偷|干中学！偷偷|❌|干中学！偷偷|
|674|6449766387|合成大西瓜 : 专为手表设计的合成类休闲解压小游戏|Merge Watermelon 4 Watch|Merge Watermelon 4 Watch|Merge Watermelon 4 Watch|Merge Watermelon 4 Watch|Merge Watermelon 4 Watch|
|675|6740246950|花皮 - 无面具素颜社区/解压/释放/正念|花皮 - 无面具素颜社区/解压/释放/正念|花皮 - 无面具素颜社区/解压/释放/正念|花皮 - 无面具素颜社区/解压/释放/正念|花皮 - 无面具素颜社区/解压/释放/正念|花皮 - 无面具素颜社区/解压/释放/正念|
|676|6550914957|打造世界-经典沙盒建造|❌|❌|❌|❌|❌|
|677|6742537442|努力活着 - 自由人生重开模拟器|❌|❌|❌|❌|❌|
|678|6741474933|Berryfilm|Berryfilm|Berryfilm|Berryfilm|Berryfilm|Berryfilm|
|679|6742221550|魔卡棋旅|❌|❌|❌|❌|❌|
|680|6738767315|便利店开业日记|❌|❌|❌|❌|❌|
|681|6737987084|小猫补光灯Pro - 官方出品，氛围感色卡补光自拍开创者|小猫补光灯Pro - 官方出品，氛围感色卡补光自拍开创者|小猫补光灯Pro - 官方出品，氛围感色卡补光自拍开创者|小猫补光灯Pro - 官方出品，氛围感色卡补光自拍开创者|CatLight Pro: Selfie Light Cam|CatLight Pro: Selfie Light Cam|
|682|6446607609|佛系传奇:君王天下|❌|❌|❌|❌|❌|
|683|6499512726|浮岛冒险|❌|❌|❌|❌|❌|
|684|6483210281|生物原型|❌|❌|❌|❌|❌|
|685|6738767322|森丘露营地|❌|❌|❌|❌|❌|
|686|6737434454|暗夜地城 - 单机暗黑刷装备挂机游戏|❌|❌|❌|❌|❌|
|687|6743117370|Clash X Pro : Network Analyzer|Clash X Pro : Network Analyzer|Clash X Pro : Network Analyzer|Clash X Pro : Network Analyzer|Clash X Pro : Network Analyzer|Clash X Pro : Network Analyzer|
|688|6740705851|手表变身器：时空驱动器 - iWatch发声器|手錶變身器：時空驅動器 - iWatch發聲器|手錶變身器：時空驅動器 - iWatch發聲器|手錶變身器：時空驅動器 - iWatch發聲器|Henshin Hero - Game for watch|Henshin Hero - Game for watch|
|689|6743487416|黄金矿工 for Watch - 经典复刻|黃金礦工 - 手錶遊戲 經典複刻|黃金礦工 - 手錶遊戲 經典複刻|黃金礦工 - 手錶遊戲 經典複刻|Gold Miner - Watch Games|Gold Miner - Watch Games|
|690|6478843819|❌|家園、異星與獵人|家園、異星與獵人|家園、異星與獵人|Home, Planet & Hunters|Home, Planet & Hunters|
|691|6502453075|❌|Balatro|Balatro|Balatro|Balatro|Balatro|
|692|6670749900|❌|再戰江湖之傲視蒼龍|再戰江湖之傲視蒼龍|再戰江湖之傲視蒼龍|再戰江湖之傲視蒼龍|再戰江湖之傲視蒼龍|
|693|6711347049|❌|大俠立志傳|大俠立志傳|大俠立志傳|Hero's Adventure|Hero's Adventure|
|694|6547834967|❌|動物森友會 口袋露營廣場 集合版|動物森友會 口袋露營廣場 集合版|動物森友會 口袋露營廣場 集合版|Animal Crossing: Pocket Camp C|❌|
|695|6452276410|❌|遊戲開發者：全能製作人|遊戲開發者：全能製作人|遊戲開發者：全能製作人|遊戲開發者：全能製作人|遊戲開發者：全能製作人|
|696|6471479898|猫历 - 可爱清新日历和日程表提醒事项|Cat Calendar：日曆 & 行事曆 & 時間管理|Cat Calendar：日曆 & 行事曆 & 時間管理|Cat Calendar：日曆 & 行事曆 & 時間管理|Cat Calendar：Schedule Planner|Cat Calendar：Schedule Planner|
|697|6738371720|❌|銀盤滑冰場物語|銀盤滑冰場物語|銀盤滑冰場物語|Skating Rink Story|Skating Rink Story|
|698|6456751953|❌|ChatTan - AI Bot|ChatTan - AI Bot|ChatTan - AI Bot|ChatTan - AI Bot|ChatTan - AI Bot|
|699|6469114836|❌|スイカゲーム-Aladdin X|スイカゲーム-Aladdin X|スイカゲーム-Aladdin X|Suika Game-Aladdin X|Suika Game-Aladdin X|
|700|6743648252|❌|終焉車站|終焉車站|終焉車站|Saihate Station|Saihate Station|
|701|6738636631|❌|烈焰同盟|❌|烈焰同盟|❌|❌|
|702|6480082872|Dumbify|Dumbify|Dumbify|Dumbify|Dumbify|Dumbify|
|703|6738769251|❌|METRO QUESTER - Hack & Slash|METRO QUESTER - Hack & Slash|METRO QUESTER - Hack & Slash|METRO QUESTER - Hack & Slash|❌|
|704|6621207768|❌|聖劍同盟|❌|聖劍同盟|❌|❌|
|705|6743420230|❌|夢魘騎士團|❌|夢魘騎士團|❌|❌|
|706|6736642117|櫻花最前線 - 2025年預測|櫻花最前線 - 2025年預測|❌|櫻花最前線 - 2025年預測|❌|❌|
|707|6498879077|❌|平安古都物語|平安古都物語|平安古都物語|Heian City Story|Heian City Story|
|708|6738636602|❌|光輝同盟|❌|光輝同盟|❌|❌|
|709|6504323939|❌|勇者鬥惡龍X　覺醒的五種族　OFFLINE|勇者鬥惡龍X　覺醒的五種族　OFFLINE|勇者鬥惡龍X　覺醒的五種族　OFFLINE|❌|❌|
|710|6505046490|❌|摔角擂臺物語|摔角擂臺物語|摔角擂臺物語|Pro Wrestler Story|Pro Wrestler Story|
|711|6443723657|❌|filmhwa (필름화) - 화민 필터|filmhwa (필름화) - 화민 필터|filmhwa (필름화) - 화민 필터|filmhwa - @hwa.min's filter|filmhwa - @hwa.min's filter|
|712|6743342476|中药方剂速查 -【专业版】中医药查询宝典|中药方剂速查 -【专业版】中医药查询宝典|中药方剂速查 -【专业版】中医药查询宝典|中药方剂速查 -【专业版】中医药查询宝典|中药方剂速查 -【专业版】中医药查询宝典|中药方剂速查 -【专业版】中医药查询宝典|
|713|6742773178|经络穴位养生 - 中医穴位自我按摩治愈|经络穴位养生 - 中医穴位自我按摩治愈|经络穴位养生 - 中医穴位自我按摩治愈|经络穴位养生 - 中医穴位自我按摩治愈|经络穴位养生 - 中医穴位自我按摩治愈|经络穴位养生 - 中医穴位自我按摩治愈|
|714|6476663854|❌|Solo Mini Golf|Solo Mini Golf|Solo Mini Golf|Solo Mini Golf|Solo Mini Golf|
|715|6670469064|❌|8號出口|8號出口|8號出口|The Exit 8|The Exit 8|
|716|6447508479|❌|暖雪|暖雪|❌|Warm Snow|Warm Snow|
|717|6470958985|❌|完美的一天 - 無限流劇情向解謎游戲|完美的一天 - 無限流劇情向解謎游戲|完美的一天 - 無限流劇情向解謎游戲|A Perfect Day: Go back to 1999|A Perfect Day: Go back to 1999|
|718|6445875391|叶分贝-噪音分贝检测|叶分贝-噪音分贝检测|叶分贝-噪音分贝检测|叶分贝-噪音分贝检测|叶分贝-噪音分贝检测|叶分贝-噪音分贝检测|
|719|6443923265|GSE SMART IPTV PRO|GSE SMART IPTV PRO|GSE SMART IPTV PRO|GSE SMART IPTV PRO|GSE SMART IPTV PRO|GSE SMART IPTV PRO|
|720|6739839815|❌|RogueVana|RogueVana|RogueVana|RogueVana|RogueVana|
|721|6505052301|❌|碧海蒼雲錄|碧海蒼雲錄|碧海蒼雲錄|❌|❌|
|722|6642649684|❌|韭菜投資公司2|韭菜投資公司2|韭菜投資公司2|Leek Inc. 2|Leek Inc. 2|
|723|6738784092|❌|A Little to the Left: Drawers|A Little to the Left: Drawers|A Little to the Left: Drawers|A Little to the Left: Drawers|A Little to the Left: Drawers|
|724|6450724928|❌|租戶賭財運|租戶賭財運|租戶賭財運|Luck be a Landlord|Luck be a Landlord|
|725|6740814979|❌|Follow the meaning|Follow the meaning|Follow the meaning|Follow the meaning|Follow the meaning|
|726|6456886656|❌|Layla|Layla|Layla|Layla|Layla|
|727|6498623389|Folium|Folium|Folium|Folium|Folium|Folium|
|728|6738342400|Tampermonkey|Tampermonkey|Tampermonkey|Tampermonkey|Tampermonkey|Tampermonkey|
|729|6744355637|Schedule I Drug Dealer|Schedule I Drug Dealer|Schedule I Drug Dealer|Schedule I Drug Dealer|Schedule I Drug Dealer|Schedule I Drug Dealer|
|730|6476064417|❌|Knight & Dragon III|Knight & Dragon III|Knight & Dragon III|Knight & Dragon III|Knight & Dragon III|
|731|6463710522|❌|勇者的傳奇|勇者的傳奇|勇者的傳奇|勇者的传奇|勇者的传奇|
|732|6468572535|❌|洞窟冒險團物語|洞窟冒險團物語|洞窟冒險團物語|Cavern Adventurers|Cavern Adventurers|
|733|6471947612|❌|召喚騎士團|召喚騎士團|召喚騎士團|召喚騎士團|召喚騎士團|
|734|6480501528|TODO：猫咪待办事项 & 提醒事项 & 备忘录|Cat Todo - 備忘錄 & 待辦事項 & 記事本|Cat Todo - 備忘錄 & 待辦事項 & 記事本|Cat Todo - 備忘錄 & 待辦事項 & 記事本|Cat Todo：To do list & Reminder|Cat Todo：To do list & Reminder|
|735|6714479204|❌|Lowriders Comeback: Boulevard|Lowriders Comeback: Boulevard|Lowriders Comeback: Boulevard|Lowriders Comeback: Boulevard|Lowriders Comeback: Boulevard|
|736|6740349666|❌|Backyard Baseball '97|Backyard Baseball '97|Backyard Baseball '97|Backyard Baseball '97|Backyard Baseball '97|
|737|6473097811|❌|Doodle Baseball Game|Doodle Baseball Game|Doodle Baseball Game|Doodle Baseball Game|Doodle Baseball Game|
|738|6463616555|❌|Ticket to Ride® The Board Game|Ticket to Ride® The Board Game|Ticket to Ride® The Board Game|Ticket to Ride® The Board Game|Ticket to Ride® The Board Game|
|739|6477835115|❌|Papa's Paleteria To Go!|Papa's Paleteria To Go!|Papa's Paleteria To Go!|Papa's Paleteria To Go!|Papa's Paleteria To Go!|
|740|6449003064|Goblin Tools|Goblin Tools|Goblin Tools|Goblin Tools|Goblin Tools|Goblin Tools|
|741|6670199903|❌|StreetPro Racing|StreetPro Racing|StreetPro Racing|StreetPro Racing|StreetPro Racing|
|742|6505058041|❌|❌|❌|❌|❌|QUAKELINE|
|743|6744445187|❌|The Platform - Survive|The Platform - Survive|The Platform - Survive|The Platform - Survive|The Platform - Survive|
|744|6469419567|❌|Overwinter Survival|Overwinter Survival|Overwinter Survival|Overwinter Survival|Overwinter Survival|
|745|6444400410|❌|Farming Simulator 23|Farming Simulator 23|Farming Simulator 23|Farming Simulator 23 Mobile|Farming Simulator 23 Mobile|
|746|6474616013|❌|Trump Is Back|Trump Is Back|Trump Is Back|Trump Is Back|Trump Is Back|
|747|6471594918|Just a Simple Image Converter|Just a Simple Image Converter|Just a Simple Image Converter|Just a Simple Image Converter|Just a Simple Image Converter|Just a Simple Image Converter|
|748|6686394372|❌|Age of History 3|Age of History 3|Age of History 3|Age of History 3|Age of History 3|
|749|6740471827|手表经典迷宫游戏|手錶經典迷宮遊戲|手錶經典迷宮遊戲|手錶經典迷宮遊戲|Classic Maze Game for Watch|Classic Maze Game for Watch|
|750|1481853033|Strongbox Pro|Strongbox Pro|Strongbox Pro|Strongbox Pro|Strongbox Pro|Strongbox Pro|
|751|1581140954|Noir - 为Safari添加深色模式|Noir - Dark Mode for Safari|Noir - Dark Mode for Safari|Noir - Dark Mode for Safari|Noir - Dark Mode for Safari|Noir - Dark Mode for Safari|
|752|1592917505|Noir – 为Safari添加深色模式|Noir – Dark Mode for Safari|Noir – Dark Mode for Safari|Noir – Dark Mode for Safari|Noir – Dark Mode for Safari|Noir – Dark Mode for Safari|
|753|1591620171|Stay for Safari - 浏览器伴侣|Stay for Safari - 瀏覽器伴侶|Stay for Safari - 瀏覽器伴侶|Stay for Safari - 瀏覽器伴侶|Stay for Safari|Stay for Safari|
|754|1438243180|Dark Reader for Safari|Dark Reader for Safari|Dark Reader for Safari|Dark Reader for Safari|Dark Reader for Safari|Dark Reader for Safari|
|755|625206080|❌|Tomb Raider|Tomb Raider|Tomb Raider|Tomb Raider|Tomb Raider|
|756|1108032375|❌|Rise of the Tomb Raider™|Rise of the Tomb Raider™|Rise of the Tomb Raider™|Rise of the Tomb Raider™|Rise of the Tomb Raider™|
|757|1439569401|❌|Shadow of the Tomb Raider|Shadow of the Tomb Raider|Shadow of the Tomb Raider|Shadow of the Tomb Raider|Shadow of the Tomb Raider|
|758|6459738231|❌|Lies of P|Lies of P|Lies of P|Lies of P|Lies of P|
|759|1441532941|❌|神界：原罪2|神界：原罪2|神界：原罪2|Divinity: Original Sin 2|Divinity: Original Sin 2|
|760|6449748961|❌|DEATH STRANDING DIRECTOR'S CUT|DEATH STRANDING DIRECTOR'S CUT|DEATH STRANDING DIRECTOR'S CUT|DEATH STRANDING DIRECTOR'S CUT|DEATH STRANDING DIRECTOR'S CUT|
|761|6499559693|iStat Menus 7|iStat Menus 7|iStat Menus 7|iStat Menus 7|iStat Menus 7|iStat Menus 7|
|762|6475002485|❌|Reeder.|Reeder.|Reeder.|Reeder.|Reeder.|
|763|1198176727|Controller for HomeKit|Controller for HomeKit|Controller for HomeKit|Controller for HomeKit|Controller for HomeKit|Controller for HomeKit|
|764|904280696|Things 3|Things 3|Things 3|Things 3|Things 3|Things 3|
|765|1055511498|Day One 日記：私人日記|Day One|Day One|Day One|Day One|Day One|
|766|1208145167|Picsew - 滚动截图 & 长图拼接|Picsew - 滾動截圖 & 長圖拼接|Picsew - 滾動截圖 & 長圖拼接|Picsew - 滾動截圖 & 長圖拼接|Picsew - Scrollshot & Collage|Picsew - Scrollshot & Collage|
|767|1444636541|Photomator|Photomator|Photomator|Photomator|Photomator – Photo Editor|Photomator|
|768|1444383602|Goodnotes 6：笔记，PDF，AI|Goodnotes 6：筆記，PDF，AI|Goodnotes 6：筆記，PDF，AI|Goodnotes 6：筆記，PDF，AI|Goodnotes 6: AI Notes & Docs|Goodnotes 6: AI Notes & Docs|
|769|1473785373|钱迹记账-无广告超快捷记账存钱&资产管理&预算|錢跡記帳 - 無廣告超快捷 & 資產管理 & 預算|錢跡記帳 - 無廣告超快捷 & 資產管理 & 預算|錢跡記帳 - 無廣告超快捷 & 資產管理 & 預算|Qianji - Ad-Free Bookkeeping|Qianji - Ad-Free Bookkeeping|
|770|1461652639|网络调试精灵|TCP UDP Ping  Socket 網絡調試助手|TCP UDP Ping  Socket 網絡調試助手|TCP UDP Ping  Socket 網絡調試助手|iSocketTool|iSocketTool|
|771|6499198824|蜂软扫描 - 全能扫描仪|ScanGo - PDF Document Scanner|ScanGo - PDF Document Scanner|ScanGo - PDF Document Scanner|ScanGo - PDF Document Scanner|ScanGo - PDF Document Scanner|
|772|1538124245|哪里哪里|where I put it|where I put it|where I put it|where I put it|where I put it|
|773|6446469093|口袋时钟 - StandBy待机Widget桌面翻页创意时钟|口袋時鐘-創意全屏精準錶盤懸浮顯示鎖屏桌面小組件手錶|口袋時鐘-創意全屏精準錶盤懸浮顯示鎖屏桌面小組件手錶|口袋時鐘-創意全屏精準錶盤懸浮顯示鎖屏桌面小組件手錶|Clock Pocket:standby widget|Clock Pocket:standby widget|
|774|1610668825|FyTube - 没有广告的 YouTube|FyTube -沒有廣告的 YouTube|FyTube -沒有廣告的 YouTube|FyTube -沒有廣告的 YouTube|FyTube - YouTube Without Ads|FyTube - YouTube Without Ads|
|775|1175912897|EverMemo印象便签|EverMemo印象便簽|EverMemo印象便簽|EverMemo印象便簽|EverMemo - Fastest Note|EverMemo|
|776|6504433140|LaxtTime - 日常记录/循环提醒/习惯养成/倒计时|LaxtTime|LaxtTime|LaxtTime|LaxtTime - Remember Last Time|LaxtTime - Remember Last Time|
|777|920133658|解剖和生理学|Anatomy & Physiology|Anatomy & Physiology|Anatomy & Physiology|Anatomy & Physiology|Anatomy & Physiology|
|778|6463851696|功德++ : 锁屏，Standby，桌面小组件都可以敲的木鱼|Zen++|Zen++|Zen++|Zen++|❌|
|779|1358237203|时间胶囊-寄往未来的信|時間膠囊-寄往未來的信|時間膠囊-寄往未來的信|時間膠囊-寄往未來的信|时间胶囊-寄往未来的信|时间胶囊-寄往未来的信|
|780|1316883372|音乐世界赛特斯2|❌|❌|❌|❌|❌|
|781|956086985|美元折纸|Dollar Bill Origami|Dollar Bill Origami|Dollar Bill Origami|Dollar Bill Origami|Dollar Bill Origami|
|782|1436481293|迷失岛3宇宙的尘埃|ISOLAND 3 Dust of the Universe|ISOLAND 3 Dust of the Universe|ISOLAND 3 Dust of the Universe|ISOLAND 3 Dust of the Universe|ISOLAND 3 Dust of the Universe|
|783|1422480068|Notes Writer Pro: 笔记和 PDF 标注|Notes Writer Pro 2025|Notes Writer Pro 2025|Notes Writer Pro 2025|Notes Writer Pro 2025|Notes Writer Pro 2025|
|784|6443915320|发条日签-好心情制造机|发条日签-好心情制造机|发条日签-好心情制造机|发条日签-好心情制造机|发条日签-好心情制造机|发条日签-好心情制造机|
|785|884153085|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|
|786|1065802380|Stream Music Player|Stream Music Player|Stream Music Player|Stream Music Player|Stream Music Player|Stream Music Player|
|787| ~~533055404~~ | ~~夜星 (Night Stars)~~ | ~~夜星 (Night Stars)~~ | ~~夜星 (Night Stars)~~ | ~~夜星 (Night Stars)~~ | ~~Night Stars~~ | ~~Night Stars~~ |
|788|1493379610|时光进度 - 进度管理&待办计划|時光進度 - 待辦事項四象限規劃及進度管理|時光進度 - 待辦事項四象限規劃及進度管理|時光進度 - 待辦事項四象限規劃及進度管理|bProgress - Manage Daily Tasks|bProgress - Manage Daily Tasks|
|789|1255627901|方便面 - 朋友圈图文排版好帮手|泡麵｜經典原味|泡麵｜經典原味|泡麵｜經典原味|Instant Noodles: Original|Instant Noodles: Original|
|790|1449020025|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|
|791|1576004936|化学 - 元素周期表 2025|化學 - 元素週期表 2025|化學 - 元素週期表 2025|化學 - 元素週期表 2025|Chemistry Periodic Table 2025|Chemistry Periodic Table 2025|
|792|827740598|小牛计算器(高级版)|Xmart Calculator Pro|Xmart Calculator Pro|Xmart Calculator Pro|Xmart Calculator Pro|Xmart Calculator Pro|
|793|355460798|Inspire Pro|Inspire Pro|Inspire Pro|Inspire Pro|Inspire Pro|Inspire Pro|
|794|1595313870|瓦尔登 - 日程管理，一个就够|瓦爾登 - 終極個人管理工具|瓦爾登 - 終極個人管理工具|瓦爾登 - 終極個人管理工具|Walden - Calendar/ToDo/Notes|Walden - Calendar/ToDo/Notes|
|795|6449383791|GIF录制助手-录屏、裁剪、优化、生成一站式便捷体验|GIF Recorder-ImproveEfficiency|GIF Recorder-ImproveEfficiency|GIF Recorder-ImproveEfficiency|GIF Recorder-ImproveEfficiency|GIF Recorder-ImproveEfficiency|
|796|1587301632|全能记(录音,备忘,流水)|全能備忘錄|全能備忘錄|全能備忘錄|All In One Memo|All In One Memo|
|797|1464666446|我的足迹: GPS记录仪|我的足跡: GPS記錄儀|我的足跡: GPS記錄儀|我的足跡: GPS記錄儀|MyTracks: GPS Recorder|MyTracks: GPS Recorder|
|798|1665759338|坐在罐子里的人|❌|❌|❌|❌|❌|
|799|953426154|Be Focused Pro - Focus Timer|Be Focused Pro – 專工作學習番茄計時器|Be Focused Pro – 專工作學習番茄計時器|Be Focused Pro – 專工作學習番茄計時器|Be Focused Pro - Focus Timer|Be Focused Pro- Pomodoro Timer|
|800|1238778050|纪念碑谷2|❌|❌|❌|❌|❌|
|801|1020541183|电影精灵 - 专业视频编辑和电影制作|電影精靈 - 專業視頻編輯和電影製作|電影精靈 - 專業視頻編輯和電影製作|電影精靈 - 專業視頻編輯和電影製作|MovieSpirit - Movie Maker Pro|MovieSpirit - Movie Maker Pro|
|802|576718804|aTimeLogger - 时间记录工具|aTimeLogger 2 - 私人時間記錄儀&时间表|aTimeLogger 2 - 私人時間記錄儀&时间表|aTimeLogger 2 - 私人時間記錄儀&时间表|aTimeLogger Time Tracker|aTimeLogger Time Tracker|
|803|670400597|梁的挠度|樑的撓度|樑的撓度|樑的撓度|Deflection|Deflection|
|804|1400652313|冰钓大师|❌|❌|❌|❌|❌|
|805|1551596643|模拟地铁|❌|❌|❌|❌|❌|
|806|1437479513|逃脱者：困境突围|逃脱者：困境突围|逃脱者：困境突围|逃脱者：困境突围|❌|❌|
|807|1314212521|PPHub For GitHub - 开发者必备|PPHub For GitHub - Developer|PPHub For GitHub - Developer|PPHub For GitHub - Developer|PPHub For GitHub - Developer|PPHub For GitHub - Developer|
|808|1564383045|算法导论.助手|算法導論.助手|算法導論.助手|算法導論.助手|CLRS.Helper|CLRS.Helper|
|809|1380582804|手机帝国|手機帝國|手機帝國|手機帝國|Mobile Empire|Mobile Empire|
|810|6466390901|旋转音律 Rotaeno|❌|❌|❌|❌|❌|
|811|1596406400|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|
|812|598581396|Kingdom Rush Frontiers 塔防史诗冒险|Kingdom Rush Frontiers 塔防生存戰爭|Kingdom Rush Frontiers 塔防生存戰爭|Kingdom Rush Frontiers 塔防生存戰爭|Kingdom Rush Frontiers TD|Kingdom Rush Frontiers TD|
|813|1157863540|泰拉瑞亚|❌|❌|❌|❌|❌|
|814|1630541373|隐私相册-私密记忆，安心记录，安全保障隐藏秘密PRAM|Private Album - PRAM|Private Album - PRAM|Private Album - PRAM|Private Album - PRAM|Private Album - PRAM|
|815|1512838461|DayCircle - 倒数|DayCircle - 倒數|DayCircle - 倒數|DayCircle - 倒數|DayCircle - Day counter|DayCircle - Day counter|
|816|1400032769|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|
|817| ~~460661291~~ | ~~安全笔记+ Pro~~ | ~~Safety Note+ Pro~~ | ~~Safety Note+ Pro~~ | ~~Safety Note+ Pro~~ | ~~Safety Note+ Pro~~ | ~~Safety Note+ Pro~~ |
|818| ~~505904421~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ |
|819| ~~1527841661~~ | ~~沙盒星球~~ | ~~沙盒星球~~ | ~~沙盒星球~~ | ~~沙盒星球~~ | ~~Sandbox Planet~~ | ~~Sandbox Planet~~ |
|820|1159266744|双子 Gemini|雙子 Gemini|雙子 Gemini|雙子 Gemini|❌|❌|
|821|1453808408|恶果之地|Juicy Realm|Juicy Realm|Juicy Realm|Juicy Realm|Juicy Realm|
|822|1458460469|人类跌落梦境|❌|❌|❌|❌|❌|
|823|1481100296|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|
|824| ~~431033044~~ | ~~Phone Drive - 云储存管理和文件共享~~ | ~~Phone Drive - 雲儲存管理和文件共享~~ | ~~Phone Drive - 雲儲存管理和文件共享~~ | ~~Phone Drive - 雲儲存管理和文件共享~~ | ~~Phone Drive: File Storage Sync~~ | ~~Phone Drive: File Storage Sync~~ |
|825|1309638846|Goodak 复古胶片相机 - 拍立得旅行摄影，拍照水印滤镜|Goodak 底片相機 - 復古即可拍，拍立得膠卷攝影|Goodak 底片相機 - 復古即可拍，拍立得膠卷攝影|Goodak 底片相機 - 復古即可拍，拍立得膠卷攝影|Vintage Camera - Goodak|Vintage Camera - Goodak|
|826|1618180398|照片同步-导出备份相册照片视频|照片同步-備份相冊照片視頻|照片同步-備份相冊照片視頻|照片同步-備份相冊照片視頻|PhotoSync-Backup your photos|PhotoSync-Backup your photos|
|827| ~~456637671~~ | ~~安全监控照片+视频Pro~~ | ~~安全監控照片+視頻Pro~~ | ~~安全監控照片+視頻Pro~~ | ~~安全監控照片+視頻Pro~~ | ~~Safety Photo+Video Pro~~ | ~~Safety Photo+Video Pro~~ |
|828|1453318714|Vostok — 创建美丽快拍页面|Vostok — 创建美丽快拍页面|Vostok — 创建美丽快拍页面|Vostok — 创建美丽快拍页面|Vostok — Story Maker|Vostok — Story Maker|
|829|931188326|DayCost|DayCost Pro - Personal Finance|DayCost Pro - Personal Finance|DayCost Pro - Personal Finance|DayCost Pro - Personal Finance|DayCost Pro - Personal Finance|
|830|6449930220|手表浏览器  Wafari|手表浏览器  Wafari|手表浏览器  Wafari|手表浏览器  Wafari|Wafari - Watch Browser|Wafari - Watch Browser|
|831| ~~818394449~~ | ~~时间轴-全球历史~~ | ~~时间轴-全球历史~~ | ~~时间轴-全球历史~~ | ~~时间轴-全球历史~~ | ~~Timeline - World history~~ | ~~Timeline - World history~~ |
|832|1391571907|Fine修图|Fine修圖|Fine修圖|Fine修圖|Fine - Photo Editor|Fine - Photo Editor|
|833|6499125531|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|
|834| ~~1485101937~~ | ~~Juice Watch~~ | ~~Juice Watch~~ | ~~Juice Watch~~ | ~~Juice Watch~~ | ~~Juice Watch~~ | ~~Juice Watch~~ |
|835|703265535|FocusDots · 专注于当下|FocusDots · 專注於當下|FocusDots · 專注於當下|FocusDots · 專注於當下|FocusDots · Focus What Matters|FocusDots · Focus What Matters|
|836|6479307181|灵体侦测器|靈體偵測器|靈體偵測器|靈體偵測器|Ghostly Detector|Ghostly Detector|
|837| ~~488674899~~ | ~~雨雷達-實時天氣圖。 亞洲和中國。°~~ | ~~雨雷達 ° -實時天氣圖~~ | ~~雨雷達 ° -實時天氣圖~~ | ~~雨雷達 ° -實時天氣圖~~ | ~~RAIN RADAR °- sky weather NOAA~~ | ~~RAIN RADAR ° live weather maps~~ |
|838|1636719674|锁屏启动 - 万能桌面小组件&灵动岛一键快捷指令手机捷径布局|鎖屏啟動 - 個人化桌面小工具＆靈動動畫，一鍵美化主螢幕佈局|鎖屏啟動 - 個人化桌面小工具＆靈動動畫，一鍵美化主螢幕佈局|鎖屏啟動 - 個人化桌面小工具＆靈動動畫，一鍵美化主螢幕佈局|Lock Launcher - Screen Widgets|Lock Launcher - Screen Widgets|
|839|1543163106|末剑二|❌|❌|❌|❌|❌|
|840|6443812780|我的水世界求生|❌|❌|❌|❌|❌|
|841|1344655035|蜡烛人|❌|❌|❌|❌|❌|
|842|6446614518|画中世界|❌|❌|❌|❌|❌|
|843|1159700098|去月球-To the Moon|去月球-To the Moon|去月球-To the Moon|去月球-To the Moon|To the Moon|To the Moon|
|844|1271620263|艾希 - ICEY|ICEY|ICEY|ICEY|ICEY|ICEY|
|845|1361473095|喵斯快跑|MuseDash|MuseDash|MuseDash|MuseDash|MuseDash|
|846|6476010032|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|
|847|510249014|水平仪 HD|水準管 HD|水準管 HD|水準管 HD|Level HD.|Level HD.|
|848|904237743|Things 3|Things 3|Things 3|Things 3|Things 3|Things 3|
|849|1622341132|iSleeper - 梦话鼾声记录与睡眠监测|iSleeper - 夢話鼾聲記錄與睡眠監測|iSleeper - 夢話鼾聲記錄與睡眠監測|iSleeper - 夢話鼾聲記錄與睡眠監測|iSleeper: Sleep Tracker|iSleeper: Sleep Tracker|
|850|900833042|Fliqlo|Fliqlo|Fliqlo|Fliqlo|Fliqlo|Fliqlo|
|851|1467880680|LEDot|LEDot|LEDot|LEDot|LEDot|LEDot - Realistic Portable LED|
|852|1455055663|皮皮虾专业版|❌|❌|❌|❌|❌|
|853|1595901138|NES 模拟器 - 吞食天地|Handheld Game - NES Emulator|Handheld Game - NES Emulator|Handheld Game - NES Emulator|Handheld Game - NES Emulator|Handheld Game - NES Emulator|
|854|1163515895|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账本Pro-管家理财必备工具|鲨鱼记账本Pro-管家理财必备工具|
|855|754105884|NightCap相机|NightCap相機|NightCap相機|NightCap相機|NightCap Camera|NightCap Camera|
|856|1642364007|海拔指南针|海拔指南针|海拔指南针|海拔指南针|Altitude Compass|Altitude Compass|
|857|1522215205|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|
|858|1484181693|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|
|859|1117998129|2025人体解剖学图谱|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|
|860|6444824570|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|
|861|469338840|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|
|862|1197275827|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|
|863|578665578|Threema。安全的通讯工具|《Threema》- 安全即時通訊工具|《Threema》- 安全即時通訊工具|《Threema》- 安全即時通訊工具|Threema. The Secure Messenger|Threema. The Secure Messenger|
|864|1547418803|Incredibox - 好玩的音乐盒|❌|❌|❌|❌|❌|
|865|1210251567|SleepTown 睡眠小镇|SleepTown 睡眠小鎮|SleepTown 睡眠小鎮|SleepTown 睡眠小鎮|SleepTown|SleepTown|
|866|1080235640|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|
|867|1658579911|小特钥匙 - 特斯拉蓝牙手表钥匙|小特钥匙 - 特斯拉蓝牙手表钥匙|小特钥匙 - 特斯拉蓝牙手表钥匙|小特钥匙 - 特斯拉蓝牙手表钥匙|XIAOTE - Tesla BLE Watch key|XIAOTE - Tesla BLE Watch key|
|868|1152396902|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|
|869|1633366918|Instant Lines|Instant Lines|Instant Lines|Instant Lines|Instant Lines|Instant Lines|
|870|6480159520|转录大师 - 录音转文字、实时离线转录|Whisper Pen - 語音轉文字|Whisper Pen - 語音轉文字|Whisper Pen - 語音轉文字|Whisper Pen - Speech to Text|Whisper Pen - Speech to Text|
|871|966489322|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|
|872|898876435|Planit巧摄专业版：风光摄影计划神器|Planit巧攝專業版：风光攝影計劃神器|Planit巧攝專業版：风光攝影計劃神器|Planit巧攝專業版：风光攝影計劃神器|Planit Pro: Photo Planner|Planit Pro: Photo Planner|
|873|1062745479|HeartWatch: 心脏和活动监测器|HeartWatch: 監測心率|HeartWatch: 監測心率|HeartWatch: 監測心率|HeartWatch: Heart Rate Tracker|HeartWatch: Heart Rate Tracker|
|874|6476963352|万能生成器|万能生成器|万能生成器|万能生成器|万能生成器|万能生成器|
|875|1459076631|隐形守护者|隐形守护者|隐形守护者|❌|隐形守护者|❌|
|876|1660014964|飞越13号房|❌|❌|❌|❌|❌|
|877|730712409|ProCam - 专业相机|ProCam - 專業相機|ProCam - 專業相機|ProCam - 專業相機|ProCam - Pro Camera|ProCam - Pro Camera|
|878|6451239549|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|
|879|1633865171|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|
|880|1492395549|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|❌|
|881|1661419573|atvTools|atvTools|atvTools|atvTools|atvTools|atvTools|
|882|6479683928|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|
|883|6443798663|敲木鱼 - 打节拍敲音效解压神器|敲木魚|敲木魚|敲木魚|MuYu|MuYu|
|884|373454750|随手记Pro–个人家庭生意记账|隨手記Pro–個人家庭生意記帳|隨手記Pro–個人家庭生意記帳|隨手記Pro–個人家庭生意記帳|随手记Pro|随手记Pro–记账财务管理软件|
|885|916366645|Procreate Pocket|Procreate Pocket|Procreate Pocket|Procreate Pocket|Procreate Pocket|Procreate Pocket|
|886|1164801111|AutoSleep - 通过手表自动追踪睡眠|AutoSleep – 在手錶上追蹤睡眠|AutoSleep – 在手錶上追蹤睡眠|AutoSleep – 在手錶上追蹤睡眠|AutoSleep Track Sleep on Watch|AutoSleep Track Sleep on Watch|
|887|1625289361|空气投篮|AirBasketball - AuditoryAR|AirBasketball - AuditoryAR|AirBasketball - AuditoryAR|AirBasketball - AuditoryAR|AirBasketball - AuditoryAR|
|888|1261944766|Alook浏览器 - 8倍速|Alook瀏覽器 - 8倍速|Alook瀏覽器 - 8倍速|Alook瀏覽器 - 8倍速|Alook Browser - 8x Speed|Alook Browser - 8x Speed|
|889|866450515|Forest 专注森林 - 番茄钟学习计时器|Forest 專注森林 - 讀書專注番茄鐘|Forest 專注森林 - 讀書專注番茄鐘|Forest 專注森林 - 讀書專注番茄鐘|Forest: Focus for Productivity|Forest: Focus for Productivity|
|890|1600873673|炭炭背单词｜四六级考研等英语单词学习|炭炭背单词｜四六级考研等英语单词学习|炭炭背单词｜四六级考研等英语单词学习|❌|❌|❌|
|891|388624839|扫描全能王 - 官方出品1元畅用版，扫描PDF文件，文字识别|CamScanner+|CamScanner+|CamScanner+|CamScanner + | OCR Scanner|CamScanner + | PDF Scanner|
|892|768160271|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|
|893|1439723850|时间规划局 - 倒计时与提醒事项|Countdown! Reminders and Timer|Countdown! Reminders and Timer|Countdown! Reminders and Timer|Countdown! Reminders and Timer|Countdown! Reminders and Timer|
|894|6447023668|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|
|895|6468843723|❌|GTA III – Definitive|GTA III – Definitive|GTA III – Definitive|GTA III – Definitive|GTA III – Definitive|
|896|6468845173|❌|GTA: Vice City – Definitive|GTA: Vice City – Definitive|GTA: Vice City – Definitive|GTA: Vice City – Definitive|GTA: Vice City – Definitive|
|897|6468845068|❌|GTA: San Andreas – 最終版|GTA: San Andreas – 最終版|GTA: San Andreas – 最終版|GTA: San Andreas – Definitive|GTA: San Andreas – Definitive|
|898|1631331207|❌|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|
|899|1598130789|❌|Company of Heroes Collection|Company of Heroes Collection|Company of Heroes Collection|Company of Heroes Collection|Company of Heroes Collection|
|900|1085114709|Parallels Desktop|Parallels Desktop|Parallels Desktop|Parallels Desktop|Parallels Desktop|Parallels Desktop|
|901|6450262949|Longshot - 截图 & OCR文字识别|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|
|902|6451498949|❌|Stray|Stray|Stray|Stray|Stray|
|903|1630403500|APTV|APTV|APTV|APTV|APTV|APTV|
|904|1552536109|PasteNow - 剪贴板工具|PasteNow - 剪貼簿工具|PasteNow - 剪貼簿工具|PasteNow - 剪貼簿工具|PasteNow - Instant Clipboard|PasteNow - Instant Clipboard|
|905|1558391784|Filebar|Filebar|Filebar|Filebar|Filebar - media player|Filebar - media player|
|906|1548711022|Barbee - 清理您的菜单栏图标|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|
|907|1575588022|MenubarX - 强大的菜单栏浏览器|MenubarX - 強大的選單列瀏覽器|MenubarX - 強大的選單列瀏覽器|MenubarX - 強大的選單列瀏覽器|MenubarX - Floating Browser|MenubarX - Floating Browser|
|908|1630034110|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|
|909|1009747025|zFuse - 影音播放器|zFuse - 影片播放器|zFuse - 影片播放器|zFuse - 影片播放器|zFuse - Video Player|zFuse - Video Player|
|910|1054505347|zFuse - 视频播放器|zFuse - 視頻播放器|zFuse - 視頻播放器|zFuse - 視頻播放器|zFuse - Media Player|zFuse - Media Player|
|911|1659622164|VidHub - 高清影片视频播放器，快速播放云盘网盘|VidHub -Video Library & Player|VidHub -Video Library & Player|VidHub -Video Library & Player|VidHub -Video Library & Player|VidHub -Video Library & Player|
|912|1136220934|Infuse|Infuse|Infuse|Infuse|Infuse|Infuse|
|913|1476649036|帕斯卡契约|Pascal's Wager|Pascal's Wager|Pascal's Wager|Pascal's Wager|Pascal's Wager|
|914|1635315427|暖雪|❌|❌|❌|❌|❌|
|915|1523446532|重生细胞|❌|❌|❌|❌|❌|
|916|1389752090|❌|Dead Cells|Dead Cells|Dead Cells|Dead Cells|Dead Cells|
|917|1640627334|❌|Resident Evil Village for Mac|Resident Evil Village for Mac|Resident Evil Village for Mac|Resident Evil Village for Mac|Resident Evil Village for Mac|
|918|6450980545|❌|Resident Evil Village|Resident Evil Village|Resident Evil Village|Resident Evil Village|Resident Evil Village|
|919|6462360082|❌|Resident Evil 4|Resident Evil 4|Resident Evil 4|Resident Evil 4|Resident Evil 4|
|920|1620883955|❌|Little Nightmares|Little Nightmares|Little Nightmares|Little Nightmares|Little Nightmares|
|921|1606703078|❌|槍火重生|槍火重生|槍火重生|Gunfire Reborn|❌|
|922|1373575045|❌|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|
|923|1371965583|❌|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|
|924|6450877530|花园之间|❌|❌|❌|❌|❌|
|925|1601446687|❌|Streets of Rage 4|Streets of Rage 4|Streets of Rage 4|Streets of Rage 4|Streets of Rage 4|
|926|1587860402|❌|籠中窺夢|籠中窺夢|籠中窺夢|Moncage|Moncage|
|927|1584313012|笼中窥梦|❌|❌|❌|❌|❌|
|928|1465779286|❌|GRIS|GRIS|GRIS|GRIS|GRIS|
|929|1445379072|❌|GRIS|GRIS|GRIS|GRIS|GRIS|
|930|1521190840|格莉斯的旅程|❌|❌|❌|❌|❌|
|931|728293409|❌|紀念碑谷|紀念碑谷|紀念碑谷|Monument Valley|Monument Valley|
|932|1582832845|纪念碑谷|❌|❌|❌|❌|❌|
|933|1644917705|无处遁形：全网公敌|無處遁形：全網公敵|無處遁形：全網公敵|無處遁形：全網公敵|Cyber Manhunt|Cyber Manhunt|
|934|1369179088|❌|Grimvalor|Grimvalor|Grimvalor|Grimvalor|Grimvalor|
|935|1669723530|原界之罪|❌|❌|❌|❌|❌|
|936|481629890|❌|LIMBO by Playdead|LIMBO by Playdead|LIMBO by Playdead|LIMBO by Playdead|LIMBO by Playdead|
|937|656951157|❌|Playdead's LIMBO|Playdead's LIMBO|Playdead's LIMBO|Playdead's LIMBO|Playdead's LIMBO|
|938|886561127|❌|INSIDE by Playdead|INSIDE by Playdead|INSIDE by Playdead|INSIDE by Playdead|INSIDE by Playdead|
|939|1201642309|❌|Playdead's INSIDE|Playdead's INSIDE|Playdead's INSIDE|Playdead's INSIDE|Playdead's INSIDE|
|940|1529448980|❌|Reeder Classic.|Reeder Classic.|Reeder Classic.|Reeder Classic.|Reeder Classic.|
|941|1529445840|❌|Reeder Classic|Reeder Classic|Reeder Classic|Reeder Classic|Reeder Classic|
|942|1596063349|❌|Stash|Stash|Stash|Stash - Rule Based Proxy|Stash - Rule Based Proxy|
|943|6444029612|❌|Loon Lite|Loon Lite|Loon Lite|Loon Lite|Loon Lite|
|944|1373567447|❌|Loon|Loon|Loon|Loon|Loon|
|945|1442620678|❌|Surge 5|Surge 5|Surge 5|Surge 5|Surge 5|
|946|1443988620|❌|Quantumult X|Quantumult X|Quantumult X|Quantumult X|Quantumult X|
|947|932747118|❌|Shadowrocket|Shadowrocket|Shadowrocket|Shadowrocket|Shadowrocket|
|948|1642682818|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|
|949|1319191852|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|
|950|1067198688|彩云天气Pro|彩云天气Pro|彩云天气Pro|彩云天气Pro|彩云天气Pro|彩云天气Pro|

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