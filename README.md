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
So far, we've covered `6` `Countries or Regions` and  `585` `Apps` <br />Push notifications will only be sent when there are discounts for the listed  `Country or Region`  and  `App`  below. If your  `Country or Region`  or favorite  `App`  is not on the list, feel free to add it<br />
>Special Note:  `❌`  in the table below indicates that the app does not exist in the current  `Country or Region` 's  `App Store` <br />If certain apps in the list frequently offer discounts to attract you to install and use them, and you successfully get attracted to install and use them, but end up uninstalling the app due to poor user experience. For such cases, feedback is welcome via  `Issue` . If an app receives more than  `10`  complaints, its discount information push notifications are likely to be banned<br />The application currently marked by  ~~Strikethrough~~  indicates that it has been banned from push notifications

|Serial Number|App ID|Mainland China（cn）|Hong Kong, China（hk）|Macao, China（mo）|Taiwan, China（tw）|United States（us）|Türkiye（tr）|
|:-|:-|:-|:-|:-|:-|:-|:-|
|1|284972998|❌|❌|❌|❌|❌|❌|
|2|288419283|❌|❌|❌|❌|❌|❌|
|3|292421271|❌|❌|❌|❌|❌|❌|
|4|294934058|❌|❌|❌|❌|❌|❌|
|5|298206806|❌|❌|❌|❌|❌|❌|
|6|299117180|❌|❌|❌|❌|❌|❌|
|7|301387274|❌|❌|❌|❌|❌|❌|
|8|305557780|❌|❌|❌|❌|❌|❌|
|9|306938028|❌|❌|❌|❌|❌|❌|
|10|307132353|❌|❌|❌|❌|❌|❌|
|11|307727765|❌|❌|❌|❌|❌|❌|
|12|307751675|❌|❌|❌|❌|❌|❌|
|13|315021242|❌|❌|❌|❌|❌|❌|
|14|315514944|❌|❌|❌|❌|❌|❌|
|15|317809458|❌|❌|❌|❌|❌|❌|
|16|323048611|❌|❌|❌|❌|❌|❌|
|17|329670577|❌|❌|❌|❌|❌|❌|
|18|332424440|❌|❌|❌|❌|❌|❌|
|19|333212604|❌|❌|❌|❌|❌|❌|
|20|335029050|❌|❌|❌|❌|❌|❌|
|21|335709058|❌|❌|❌|❌|❌|❌|
|22|335862325|❌|❌|❌|❌|❌|❌|
|23|342115564|❌|❌|❌|❌|❌|❌|
|24|344784375|❌|❌|❌|❌|❌|❌|
|25|351850196|❌|❌|❌|❌|❌|❌|
|26|352247139|❌|❌|❌|❌|❌|❌|
|27|355281169|❌|❌|❌|❌|❌|❌|
|28|357404131|❌|❌|❌|❌|❌|❌|
|29|357421934|❌|❌|❌|❌|❌|❌|
|30|367327563|❌|❌|❌|❌|❌|❌|
|31|373493387|❌|❌|❌|❌|❌|❌|
|32|388130466|❌|❌|❌|❌|❌|❌|
|33|388857410|❌|❌|❌|❌|❌|❌|
|34|392531952|❌|❌|❌|❌|❌|❌|
|35|395680819|❌|❌|❌|❌|❌|❌|
|36|396085661|❌|❌|❌|❌|❌|❌|
|37|402012828|❌|❌|❌|❌|❌|❌|
|38|402656416|❌|❌|❌|❌|❌|❌|
|39|403684733|❌|❌|❌|❌|❌|❌|
|40|404990064|❌|❌|❌|❌|❌|❌|
|41|405835358|❌|❌|❌|❌|❌|❌|
|42|406239138|❌|❌|❌|❌|❌|❌|
|43|406541444|❌|❌|❌|❌|❌|❌|
|44|407933070|❌|❌|❌|❌|❌|❌|
|45|408697793|❌|❌|❌|❌|❌|❌|
|46|408854559|❌|❌|❌|❌|❌|❌|
|47|417817520|❌|❌|❌|❌|❌|❌|
|48|424403441|❌|❌|❌|❌|❌|❌|
|49|430163724|❌|❌|❌|❌|❌|❌|
|50|432850619|❌|❌|❌|❌|❌|❌|
|51|433596395|❌|❌|❌|❌|❌|❌|
|52|449735650|❌|❌|❌|❌|❌|❌|
|53|450542233|❌|❌|❌|❌|❌|❌|
|54|452990487|❌|❌|❌|❌|❌|❌|
|55|454086751|❌|❌|❌|❌|❌|❌|
|56|469343554|❌|❌|❌|❌|❌|❌|
|57|479516143|❌|❌|❌|❌|❌|❌|
|58|479662730|❌|❌|❌|❌|❌|❌|
|59|482303584|❌|❌|❌|❌|❌|❌|
|60|485246824|❌|❌|❌|❌|❌|❌|
|61|491231653|❌|❌|❌|❌|❌|❌|
|62|497716362|❌|❌|❌|❌|❌|❌|
|63|498732510|❌|❌|❌|❌|❌|❌|
|64|501695715|❌|❌|❌|❌|❌|❌|
|65|503190232|❌|❌|❌|❌|❌|❌|
|66|504176984|❌|❌|❌|❌|❌|❌|
|67|504300412|❌|❌|❌|❌|❌|❌|
|68|505367096|❌|❌|❌|❌|❌|❌|
|69|519411018|❌|❌|❌|❌|❌|❌|
|70|520231936|❌|❌|❌|❌|❌|❌|
|71|524387892|❌|❌|❌|❌|❌|❌|
|72|525818839|❌|❌|❌|❌|❌|❌|
|73|530425820|❌|❌|❌|❌|❌|❌|
|74|540925500|❌|❌|❌|❌|❌|❌|
|75|549105915|❌|❌|❌|❌|❌|❌|
|76|549432607|❌|❌|❌|❌|❌|❌|
|77|554937499|❌|❌|❌|❌|❌|❌|
|78|555642577|❌|❌|❌|❌|❌|❌|
|79|563718995|❌|❌|❌|❌|❌|❌|
|80|575154654|❌|❌|❌|❌|❌|❌|
|81|577628510|❌|❌|❌|❌|❌|❌|
|82|578448682|❌|❌|❌|❌|❌|❌|
|83|586149216|❌|❌|❌|❌|❌|❌|
|84|594117733|❌|❌|❌|❌|❌|❌|
|85|600626116|❌|❌|❌|❌|❌|❌|
|86|623592465|❌|❌|❌|❌|❌|❌|
|87|625334537|❌|❌|❌|❌|❌|❌|
|88|634235735|❌|❌|❌|❌|❌|❌|
|89|640364616|❌|❌|❌|❌|❌|❌|
|90|646256209|❌|❌|❌|❌|❌|❌|
|91|657016140|❌|❌|❌|❌|❌|❌|
|92|679044544|❌|❌|❌|❌|❌|❌|
|93|687236545|❌|❌|❌|❌|❌|❌|
|94|697885605|❌|❌|❌|❌|❌|❌|
|95|700637744|❌|❌|❌|❌|❌|❌|
|96|736683061|❌|❌|❌|❌|❌|❌|
|97|741990930|❌|❌|❌|❌|❌|❌|
|98|763692274|❌|❌|❌|❌|❌|❌|
|99|784373321|❌|❌|❌|❌|❌|❌|
|100|807317212|❌|❌|❌|❌|❌|❌|
|101|824305459|❌|❌|❌|❌|❌|❌|
|102|829581836|❌|❌|❌|❌|❌|❌|
|103|837860959|❌|❌|❌|❌|❌|❌|
|104|860809977|❌|❌|❌|❌|❌|❌|
|105|870322730|❌|❌|❌|❌|❌|❌|
|106|890791581|❌|❌|❌|❌|❌|❌|
|107|891194610|❌|❌|❌|❌|❌|❌|
|108|901738789|❌|❌|❌|❌|❌|❌|
|109|904278510|❌|❌|❌|❌|❌|❌|
|110|912536422|❌|❌|❌|❌|❌|❌|
|111|916976066|❌|❌|❌|❌|❌|❌|
|112|918609651|❌|❌|❌|❌|❌|❌|
|113|924695435|❌|❌|❌|❌|❌|❌|
|114|925494667|❌|❌|❌|❌|❌|❌|
|115|926015463|❌|❌|❌|❌|❌|❌|
|116|926076608|❌|❌|❌|❌|❌|❌|
|117|927098908|❌|❌|❌|❌|❌|❌|
|118|932389062|❌|❌|❌|❌|❌|❌|
|119|935216956|❌|❌|❌|❌|❌|❌|
|120|935528099|❌|❌|❌|❌|❌|❌|
|121|941143328|❌|❌|❌|❌|❌|❌|
|122|945322477|❌|❌|❌|❌|❌|❌|
|123|946477821|❌|❌|❌|❌|❌|❌|
|124|948944368|❌|❌|❌|❌|❌|❌|
|125|954724812|❌|❌|❌|❌|❌|❌|
|126|955687901|❌|❌|❌|❌|❌|❌|
|127|961932335|❌|❌|❌|❌|❌|❌|
|128|963034692|❌|❌|❌|❌|❌|❌|
|129|964708975|❌|❌|❌|❌|❌|❌|
|130|973482987|❌|❌|❌|❌|❌|❌|
|131|975683986|❌|❌|❌|❌|❌|❌|
|132|982175678|❌|❌|❌|❌|❌|❌|
|133|982227026|❌|❌|❌|❌|❌|❌|
|134|992047786|❌|❌|❌|❌|❌|❌|
|135|998437582|❌|❌|❌|❌|❌|❌|
|136|1010311475|❌|❌|❌|❌|❌|❌|
|137|1012298403|❌|❌|❌|❌|❌|❌|
|138|1023146677|❌|❌|❌|❌|❌|❌|
|139|1028950091|❌|❌|❌|❌|❌|❌|
|140|1029932207|❌|❌|❌|❌|❌|❌|
|141|1035219553|❌|❌|❌|❌|❌|❌|
|142|1035219562|❌|❌|❌|❌|❌|❌|
|143|1065360416|❌|❌|❌|❌|❌|❌|
|144|1065599938|❌|❌|❌|❌|❌|❌|
|145|1077639630|❌|❌|❌|❌|❌|❌|
|146|1093131935|❌|❌|❌|❌|❌|❌|
|147|1094038347|❌|❌|❌|❌|❌|❌|
|148|1095903651|❌|❌|❌|❌|❌|❌|
|149|1099088440|❌|❌|❌|❌|❌|❌|
|150|1108479411|❌|❌|❌|❌|❌|❌|
|151|1110646984|❌|❌|❌|❌|❌|❌|
|152|1111420122|❌|❌|❌|❌|❌|❌|
|153|1112429079|❌|❌|❌|❌|❌|❌|
|154|1113736426|❌|❌|❌|❌|❌|❌|
|155|1118115766|❌|❌|❌|❌|❌|❌|
|156|1121484538|❌|❌|❌|❌|❌|❌|
|157|1128464707|❌|❌|❌|❌|❌|❌|
|158|1129429340|❌|❌|❌|❌|❌|❌|
|159|1134805859|❌|❌|❌|❌|❌|❌|
|160|1137257203|❌|❌|❌|❌|❌|❌|
|161|1142016085|❌|❌|❌|❌|❌|❌|
|162|1160608318|❌|❌|❌|❌|❌|❌|
|163|1166143148|❌|❌|❌|❌|❌|❌|
|164|1169282239|❌|❌|❌|❌|❌|❌|
|165|1184204602|❌|❌|❌|❌|❌|❌|
|166|1187265767|❌|❌|❌|❌|❌|❌|
|167|1189781891|❌|❌|❌|❌|❌|❌|
|168|1195035357|❌|❌|❌|❌|❌|❌|
|169|1217732174|❌|❌|❌|❌|❌|❌|
|170|1237692856|❌|❌|❌|❌|❌|❌|
|171|1239299402|❌|❌|❌|❌|❌|❌|
|172|1241383990|❌|❌|❌|❌|❌|❌|
|173|1247397901|❌|❌|❌|❌|❌|❌|
|174|1248033433|❌|❌|❌|❌|❌|❌|
|175|1249864455|❌|❌|❌|❌|❌|❌|
|176|1250144822|❌|❌|❌|❌|❌|❌|
|177|1259067036|❌|❌|❌|❌|❌|❌|
|178|1262474519|❌|❌|❌|❌|❌|❌|
|179|1264608487|❌|❌|❌|❌|❌|❌|
|180|1290687550|❌|❌|❌|❌|❌|❌|
|181|1291429551|❌|❌|❌|❌|❌|❌|
|182|1291730054|❌|❌|❌|❌|❌|❌|
|183|1296085645|❌|❌|❌|❌|❌|❌|
|184|1298544927|❌|❌|❌|❌|❌|❌|
|185|1303222868|❌|❌|❌|❌|❌|❌|
|186|1312534841|❌|❌|❌|❌|❌|❌|
|187|1329434099|❌|❌|❌|❌|❌|❌|
|188|1330314351|❌|❌|❌|❌|❌|❌|
|189|1336793944|❌|❌|❌|❌|❌|❌|
|190|1339516665|❌|❌|❌|❌|❌|❌|
|191|1351652600|❌|❌|❌|❌|❌|❌|
|192|1359107338|❌|❌|❌|❌|❌|❌|
|193|1359652100|❌|❌|❌|❌|❌|❌|
|194|1391339323|❌|❌|❌|❌|❌|❌|
|195|1392608717|❌|❌|❌|❌|❌|❌|
|196|1406710800|❌|❌|❌|❌|❌|❌|
|197|1435004182|❌|❌|❌|❌|❌|❌|
|198|1436429074|❌|❌|❌|❌|❌|❌|
|199|1437096541|❌|❌|❌|❌|❌|❌|
|200|1438245901|❌|❌|❌|❌|❌|❌|
|201|1439187947|❌|❌|❌|❌|❌|❌|
|202|1439881811|❌|❌|❌|❌|❌|❌|
|203|1441969889|❌|❌|❌|❌|❌|❌|
|204|1442776789|❌|❌|❌|❌|❌|❌|
|205|1444761746|❌|❌|❌|❌|❌|❌|
|206|1449893235|❌|❌|❌|❌|❌|❌|
|207|1450064785|❌|❌|❌|❌|❌|❌|
|208|1450144092|❌|❌|❌|❌|❌|❌|
|209|1451873044|❌|❌|❌|❌|❌|❌|
|210|1453838527|❌|❌|❌|❌|❌|❌|
|211|1455781522|❌|❌|❌|❌|❌|❌|
|212|1459749978|❌|❌|❌|❌|❌|❌|
|213|1461751938|❌|❌|❌|❌|❌|❌|
|214|1464850921|❌|❌|❌|❌|❌|❌|
|215|1474716211|❌|❌|❌|❌|❌|❌|
|216|1477203766|❌|❌|❌|❌|❌|❌|
|217|1477854253|❌|❌|❌|❌|❌|❌|
|218|1477966166|❌|❌|❌|❌|❌|❌|
|219|1477991646|❌|❌|❌|❌|❌|❌|
|220|1479608271|❌|❌|❌|❌|❌|❌|
|221|1480844881|❌|❌|❌|❌|❌|❌|
|222|1481006495|❌|❌|❌|❌|❌|❌|
|223|1482339363|❌|❌|❌|❌|❌|❌|
|224|1484622401|❌|❌|❌|❌|❌|❌|
|225|1485875855|❌|❌|❌|❌|❌|❌|
|226|1491530147|❌|❌|❌|❌|❌|❌|
|227|1497120981|❌|❌|❌|❌|❌|❌|
|228|1499849161|❌|❌|❌|❌|❌|❌|
|229|1500098830|❌|❌|❌|❌|❌|❌|
|230|1503486239|❌|❌|❌|❌|❌|❌|
|231|1504662191|❌|❌|❌|❌|❌|❌|
|232|1504760106|❌|❌|❌|❌|❌|❌|
|233|1504952058|❌|❌|❌|❌|❌|❌|
|234|1505636751|❌|❌|❌|❌|❌|❌|
|235|1509344823|❌|❌|❌|❌|❌|❌|
|236|1512751689|❌|❌|❌|❌|❌|❌|
|237|1515215584|❌|❌|❌|❌|❌|❌|
|238|1515382132|❌|❌|❌|❌|❌|❌|
|239|1516531425|❌|❌|❌|❌|❌|❌|
|240|1517349382|❌|❌|❌|❌|❌|❌|
|241|1518841947|❌|❌|❌|❌|❌|❌|
|242|1519386476|❌|❌|❌|❌|❌|❌|
|243|1523633394|❌|❌|❌|❌|❌|❌|
|244|1525735418|❌|❌|❌|❌|❌|❌|
|245|1528199331|❌|❌|❌|❌|❌|❌|
|246|1531462734|❌|❌|❌|❌|❌|❌|
|247|1531654315|❌|❌|❌|❌|❌|❌|
|248|1536762482|❌|❌|❌|❌|❌|❌|
|249|1544190466|❌|❌|❌|❌|❌|❌|
|250|1544412558|❌|❌|❌|❌|❌|❌|
|251|1544722749|❌|❌|❌|❌|❌|❌|
|252|1548185534|❌|❌|❌|❌|❌|❌|
|253|1551207253|❌|❌|❌|❌|❌|❌|
|254|1551263854|❌|❌|❌|❌|❌|❌|
|255|1555857229|❌|❌|❌|❌|❌|❌|
|256|1556671822|❌|❌|❌|❌|❌|❌|
|257|1559869450|❌|❌|❌|❌|❌|❌|
|258|1562560561|❌|❌|❌|❌|❌|❌|
|259|1563932741|❌|❌|❌|❌|❌|❌|
|260|1569963107|❌|❌|❌|❌|❌|❌|
|261|1576329230|❌|❌|❌|❌|❌|❌|
|262|1576763082|❌|❌|❌|❌|❌|❌|
|263|1577392165|❌|❌|❌|❌|❌|❌|
|264|1578203914|❌|❌|❌|❌|❌|❌|
|265|1581640677|❌|❌|❌|❌|❌|❌|
|266|1587674627|❌|❌|❌|❌|❌|❌|
|267|1590622755|❌|❌|❌|❌|❌|❌|
|268|1591627945|❌|❌|❌|❌|❌|❌|
|269|1592505377|❌|❌|❌|❌|❌|❌|
|270|1592660274|❌|❌|❌|❌|❌|❌|
|271|1595739885|❌|❌|❌|❌|❌|❌|
|272|1596736236|❌|❌|❌|❌|❌|❌|
|273|1600307023|❌|❌|❌|❌|❌|❌|
|274|1603421749|❌|❌|❌|❌|❌|❌|
|275|1603553413|❌|❌|❌|❌|❌|❌|
|276|1606405358|❌|❌|❌|❌|❌|❌|
|277|1609910024|❌|❌|❌|❌|❌|❌|
|278|1610947489|❌|❌|❌|❌|❌|❌|
|279|1612952507|❌|❌|❌|❌|❌|❌|
|280|1614200925|❌|❌|❌|❌|❌|❌|
|281|1622869542|❌|❌|❌|❌|❌|❌|
|282|1624326561|❌|❌|❌|❌|❌|❌|
|283|1631859420|❌|❌|❌|❌|❌|❌|
|284|1631867592|❌|❌|❌|❌|❌|❌|
|285|1633243177|❌|❌|❌|❌|❌|❌|
|286|1633253544|❌|❌|❌|❌|❌|❌|
|287|1636342413|❌|❌|❌|❌|❌|❌|
|288|1642601792|❌|❌|❌|❌|❌|❌|
|289|1642733080|❌|❌|❌|❌|❌|❌|
|290|1643199620|❌|❌|❌|❌|❌|❌|
|291|1659271912|❌|❌|❌|❌|❌|❌|
|292|1659316190|❌|❌|❌|❌|❌|❌|
|293|1662217862|❌|❌|❌|❌|❌|❌|
|294|1665706687|❌|❌|❌|❌|❌|❌|
|295|1668755109|❌|❌|❌|❌|❌|❌|
|296|1669877091|❌|❌|❌|❌|❌|❌|
|297|1671505630|❌|❌|❌|❌|❌|❌|
|298|6737795387|❌|❌|❌|❌|❌|❌|
|299|6448477521|❌|❌|❌|❌|❌|❌|
|300|6472380172|❌|❌|❌|❌|❌|❌|
|301|6443786927|❌|❌|❌|❌|❌|❌|
|302|6502489827|❌|❌|❌|❌|❌|❌|
|303|6742129099|❌|❌|❌|❌|❌|❌|
|304|6443916065|❌|❌|❌|❌|❌|❌|
|305|6737512463|❌|❌|❌|❌|❌|❌|
|306|6462190343|❌|❌|❌|❌|❌|❌|
|307|6444782083|❌|❌|❌|❌|❌|❌|
|308|6450148077|❌|❌|❌|❌|❌|❌|
|309|6449766387|❌|❌|❌|❌|❌|❌|
|310|6740246950|❌|❌|❌|❌|❌|❌|
|311|6550914957|❌|❌|❌|❌|❌|❌|
|312|6742537442|❌|❌|❌|❌|❌|❌|
|313|6741474933|❌|❌|❌|❌|❌|❌|
|314|6742221550|❌|❌|❌|❌|❌|❌|
|315|6738767315|❌|❌|❌|❌|❌|❌|
|316|6737987084|❌|❌|❌|❌|❌|❌|
|317|6446607609|❌|❌|❌|❌|❌|❌|
|318|6499512726|❌|❌|❌|❌|❌|❌|
|319|6483210281|❌|❌|❌|❌|❌|❌|
|320|6738767322|❌|❌|❌|❌|❌|❌|
|321|6737434454|❌|❌|❌|❌|❌|❌|
|322|6743117370|❌|❌|❌|❌|❌|❌|
|323|6740705851|❌|❌|❌|❌|❌|❌|
|324|6743487416|❌|❌|❌|❌|❌|❌|
|325|6478843819|❌|❌|❌|❌|❌|❌|
|326|6502453075|❌|❌|❌|❌|❌|❌|
|327|6670749900|❌|❌|❌|❌|❌|❌|
|328|6711347049|❌|❌|❌|❌|❌|❌|
|329|6547834967|❌|❌|❌|❌|❌|❌|
|330|6452276410|❌|❌|❌|❌|❌|❌|
|331|6471479898|❌|❌|❌|❌|❌|❌|
|332|6738371720|❌|❌|❌|❌|❌|❌|
|333|6456751953|❌|❌|❌|❌|❌|❌|
|334|6469114836|❌|❌|❌|❌|❌|❌|
|335|6743648252|❌|❌|❌|❌|❌|❌|
|336|6738636631|❌|❌|❌|❌|❌|❌|
|337|6480082872|❌|❌|❌|❌|❌|❌|
|338|6738769251|❌|❌|❌|❌|❌|❌|
|339|6621207768|❌|❌|❌|❌|❌|❌|
|340|6743420230|❌|❌|❌|❌|❌|❌|
|341|6736642117|❌|❌|❌|❌|❌|❌|
|342|6498879077|❌|❌|❌|❌|❌|❌|
|343|6738636602|❌|❌|❌|❌|❌|❌|
|344|6504323939|❌|❌|❌|❌|❌|❌|
|345|6505046490|❌|❌|❌|❌|❌|❌|
|346|6443723657|❌|❌|❌|❌|❌|❌|
|347|6743342476|❌|❌|❌|❌|❌|❌|
|348|6742773178|❌|❌|❌|❌|❌|❌|
|349|6476663854|❌|❌|❌|❌|❌|❌|
|350|6670469064|❌|❌|❌|❌|❌|❌|
|351|6447508479|❌|❌|❌|❌|❌|❌|
|352|6470958985|❌|❌|❌|❌|❌|❌|
|353|6445875391|❌|❌|❌|❌|❌|❌|
|354|6443923265|❌|❌|❌|❌|❌|❌|
|355|6739839815|❌|❌|❌|❌|❌|❌|
|356|6505052301|❌|❌|❌|❌|❌|❌|
|357|6642649684|❌|❌|❌|❌|❌|❌|
|358|6738784092|❌|❌|❌|❌|❌|❌|
|359|6450724928|❌|❌|❌|❌|❌|❌|
|360|6740814979|❌|❌|❌|❌|❌|❌|
|361|6456886656|❌|❌|❌|❌|❌|❌|
|362|6498623389|❌|❌|❌|❌|❌|❌|
|363|6738342400|❌|❌|❌|❌|❌|❌|
|364|6744355637|❌|❌|❌|❌|❌|❌|
|365|6476064417|❌|❌|❌|❌|❌|❌|
|366|6463710522|❌|❌|❌|❌|❌|❌|
|367|6468572535|❌|❌|❌|❌|❌|❌|
|368|6471947612|❌|❌|❌|❌|❌|❌|
|369|6480501528|❌|❌|❌|❌|❌|❌|
|370|6714479204|❌|❌|❌|❌|❌|❌|
|371|6740349666|❌|❌|❌|❌|❌|❌|
|372|6473097811|❌|❌|❌|❌|❌|❌|
|373|6463616555|❌|❌|❌|❌|❌|❌|
|374|6477835115|❌|❌|❌|❌|❌|❌|
|375|6449003064|❌|❌|❌|❌|❌|❌|
|376|6670199903|❌|❌|❌|❌|❌|❌|
|377|6505058041|❌|❌|❌|❌|❌|❌|
|378|6744445187|❌|❌|❌|❌|❌|❌|
|379|6469419567|❌|❌|❌|❌|❌|❌|
|380|6444400410|❌|❌|❌|❌|❌|❌|
|381|6474616013|❌|❌|❌|❌|❌|❌|
|382|6471594918|❌|❌|❌|❌|❌|❌|
|383|6686394372|❌|❌|❌|❌|❌|❌|
|384|6740471827|❌|❌|❌|❌|❌|❌|
|385|1481853033|Strongbox Pro|Strongbox Pro|Strongbox Pro|Strongbox Pro|Strongbox Pro|Strongbox Pro|
|386|1581140954|Noir - 为Safari添加深色模式|Noir - Dark Mode for Safari|Noir - Dark Mode for Safari|Noir - Dark Mode for Safari|Noir - Dark Mode for Safari|Noir - Dark Mode for Safari|
|387|1592917505|Noir – 为Safari添加深色模式|Noir – Dark Mode for Safari|Noir – Dark Mode for Safari|Noir – Dark Mode for Safari|Noir – Dark Mode for Safari|Noir – Dark Mode for Safari|
|388|1591620171|Stay for Safari - 浏览器伴侣|Stay for Safari - 瀏覽器伴侶|Stay for Safari - 瀏覽器伴侶|Stay for Safari - 瀏覽器伴侶|Stay for Safari|Stay for Safari|
|389|1438243180|Dark Reader for Safari|Dark Reader for Safari|Dark Reader for Safari|Dark Reader for Safari|Dark Reader for Safari|Dark Reader for Safari|
|390|625206080|❌|Tomb Raider|Tomb Raider|Tomb Raider|Tomb Raider|Tomb Raider|
|391|1108032375|❌|Rise of the Tomb Raider™|Rise of the Tomb Raider™|Rise of the Tomb Raider™|Rise of the Tomb Raider™|Rise of the Tomb Raider™|
|392|1439569401|❌|Shadow of the Tomb Raider|Shadow of the Tomb Raider|Shadow of the Tomb Raider|Shadow of the Tomb Raider|Shadow of the Tomb Raider|
|393|6459738231|❌|Lies of P|Lies of P|Lies of P|Lies of P|Lies of P|
|394|1441532941|❌|神界：原罪2|神界：原罪2|神界：原罪2|Divinity: Original Sin 2|Divinity: Original Sin 2|
|395|6449748961|❌|DEATH STRANDING DIRECTOR'S CUT|DEATH STRANDING DIRECTOR'S CUT|DEATH STRANDING DIRECTOR'S CUT|DEATH STRANDING DIRECTOR'S CUT|DEATH STRANDING DIRECTOR'S CUT|
|396|6499559693|iStat Menus 7|iStat Menus 7|iStat Menus 7|iStat Menus 7|iStat Menus 7|iStat Menus 7|
|397|6475002485|❌|Reeder.|Reeder.|Reeder.|Reeder.|Reeder.|
|398|1198176727|Controller for HomeKit|Controller for HomeKit|Controller for HomeKit|Controller for HomeKit|Controller for HomeKit|Controller for HomeKit|
|399|904280696|Things 3|Things 3|Things 3|Things 3|Things 3|Things 3|
|400|1055511498|Day One 日記：私人日記|Day One|Day One|Day One|Day One|Day One|
|401|1208145167|Picsew - 滚动截图 & 长图拼接|Picsew - 滾動截圖 & 長圖拼接|Picsew - 滾動截圖 & 長圖拼接|Picsew - 滾動截圖 & 長圖拼接|Picsew - Scrollshot & Collage|Picsew - Scrollshot & Collage|
|402|1444636541|Photomator|Photomator|Photomator|Photomator|Photomator – Photo Editor|Photomator|
|403|1444383602|Goodnotes 6：笔记，PDF，AI|Goodnotes 6：筆記，PDF，AI|Goodnotes 6：筆記，PDF，AI|Goodnotes 6：筆記，PDF，AI|Goodnotes 6: AI Notes & Docs|Goodnotes 6: AI Notes & Docs|
|404|1473785373|钱迹记账-无广告超快捷记账存钱&资产管理&预算|錢跡記帳 - 無廣告超快捷 & 資產管理 & 預算|錢跡記帳 - 無廣告超快捷 & 資產管理 & 預算|錢跡記帳 - 無廣告超快捷 & 資產管理 & 預算|Qianji - Ad-Free Bookkeeping|Qianji - Ad-Free Bookkeeping|
|405|1461652639|网络调试精灵|TCP UDP Ping  Socket 網絡調試助手|TCP UDP Ping  Socket 網絡調試助手|TCP UDP Ping  Socket 網絡調試助手|iSocketTool|iSocketTool|
|406|6499198824|蜂软扫描 - 全能扫描仪|ScanGo - PDF Document Scanner|ScanGo - PDF Document Scanner|ScanGo - PDF Document Scanner|ScanGo - PDF Document Scanner|ScanGo - PDF Document Scanner|
|407|1538124245|哪里哪里|where I put it|where I put it|where I put it|where I put it|where I put it|
|408|6446469093|口袋时钟 - StandBy待机Widget桌面翻页创意时钟|口袋時鐘-創意全屏精準錶盤懸浮顯示鎖屏桌面小組件手錶|口袋時鐘-創意全屏精準錶盤懸浮顯示鎖屏桌面小組件手錶|口袋時鐘-創意全屏精準錶盤懸浮顯示鎖屏桌面小組件手錶|Clock Pocket:standby widget|Clock Pocket:standby widget|
|409|1610668825|FyTube - 没有广告的 YouTube|FyTube -沒有廣告的 YouTube|FyTube -沒有廣告的 YouTube|FyTube -沒有廣告的 YouTube|FyTube - YouTube Without Ads|FyTube - YouTube Without Ads|
|410|1175912897|EverMemo印象便签|EverMemo印象便簽|EverMemo印象便簽|EverMemo印象便簽|EverMemo - Fastest Note|EverMemo|
|411|6504433140|LaxtTime - 日常记录/循环提醒/习惯养成/倒计时|LaxtTime|LaxtTime|LaxtTime|LaxtTime - Remember Last Time|LaxtTime - Remember Last Time|
|412|920133658|解剖和生理学|Anatomy & Physiology|Anatomy & Physiology|Anatomy & Physiology|Anatomy & Physiology|Anatomy & Physiology|
|413|6463851696|功德++ : 锁屏，Standby，桌面小组件都可以敲的木鱼|Zen++|Zen++|Zen++|Zen++|❌|
|414|1358237203|时间胶囊-寄往未来的信|時間膠囊-寄往未來的信|時間膠囊-寄往未來的信|時間膠囊-寄往未來的信|时间胶囊-寄往未来的信|时间胶囊-寄往未来的信|
|415|1316883372|音乐世界赛特斯2|❌|❌|❌|❌|❌|
|416|956086985|美元折纸|Dollar Bill Origami|Dollar Bill Origami|Dollar Bill Origami|Dollar Bill Origami|Dollar Bill Origami|
|417|1436481293|迷失岛3宇宙的尘埃|ISOLAND 3 Dust of the Universe|ISOLAND 3 Dust of the Universe|ISOLAND 3 Dust of the Universe|ISOLAND 3 Dust of the Universe|ISOLAND 3 Dust of the Universe|
|418|1422480068|Notes Writer Pro: 笔记和 PDF 标注|Notes Writer Pro 2025|Notes Writer Pro 2025|Notes Writer Pro 2025|Notes Writer Pro 2025|Notes Writer Pro 2025|
|419|6443915320|发条日签-好心情制造机|发条日签-好心情制造机|发条日签-好心情制造机|发条日签-好心情制造机|发条日签-好心情制造机|发条日签-好心情制造机|
|420|884153085|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|
|421|1065802380|Stream Music Player|Stream Music Player|Stream Music Player|Stream Music Player|Stream Music Player|Stream Music Player|
|422| ~~533055404~~ | ~~夜星 (Night Stars)~~ | ~~夜星 (Night Stars)~~ | ~~夜星 (Night Stars)~~ | ~~夜星 (Night Stars)~~ | ~~Night Stars~~ | ~~Night Stars~~ |
|423|1493379610|时光进度 - 进度管理&待办计划|時光進度 - 待辦事項四象限規劃及進度管理|時光進度 - 待辦事項四象限規劃及進度管理|時光進度 - 待辦事項四象限規劃及進度管理|bProgress - Manage Daily Tasks|bProgress - Manage Daily Tasks|
|424|1255627901|方便面 - 朋友圈图文排版好帮手|泡麵｜經典原味|泡麵｜經典原味|泡麵｜經典原味|Instant Noodles: Original|Instant Noodles: Original|
|425|1449020025|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|
|426|1576004936|化学 - 元素周期表 2025|化學 - 元素週期表 2025|化學 - 元素週期表 2025|化學 - 元素週期表 2025|Chemistry Periodic Table 2025|Chemistry Periodic Table 2025|
|427|827740598|小牛计算器(高级版)|Xmart Calculator Pro|Xmart Calculator Pro|Xmart Calculator Pro|Xmart Calculator Pro|Xmart Calculator Pro|
|428|355460798|Inspire Pro|Inspire Pro|Inspire Pro|Inspire Pro|Inspire Pro|Inspire Pro|
|429|1595313870|瓦尔登 - 日程管理，一个就够|瓦爾登 - 終極個人管理工具|瓦爾登 - 終極個人管理工具|瓦爾登 - 終極個人管理工具|Walden - Calendar/ToDo/Notes|Walden - Calendar/ToDo/Notes|
|430|6449383791|GIF录制助手-录屏、裁剪、优化、生成一站式便捷体验|GIF Recorder-ImproveEfficiency|GIF Recorder-ImproveEfficiency|GIF Recorder-ImproveEfficiency|GIF Recorder-ImproveEfficiency|GIF Recorder-ImproveEfficiency|
|431|1587301632|全能记(录音,备忘,流水)|全能備忘錄|全能備忘錄|全能備忘錄|All In One Memo|All In One Memo|
|432|1464666446|我的足迹: GPS记录仪|我的足跡: GPS記錄儀|我的足跡: GPS記錄儀|我的足跡: GPS記錄儀|MyTracks: GPS Recorder|MyTracks: GPS Recorder|
|433|1665759338|坐在罐子里的人|❌|❌|❌|❌|❌|
|434|953426154|Be Focused Pro - Focus Timer|Be Focused Pro – 專工作學習番茄計時器|Be Focused Pro – 專工作學習番茄計時器|Be Focused Pro – 專工作學習番茄計時器|Be Focused Pro - Focus Timer|Be Focused Pro- Pomodoro Timer|
|435|1238778050|纪念碑谷2|❌|❌|❌|❌|❌|
|436|1020541183|电影精灵 - 专业视频编辑和电影制作|電影精靈 - 專業視頻編輯和電影製作|電影精靈 - 專業視頻編輯和電影製作|電影精靈 - 專業視頻編輯和電影製作|MovieSpirit - Movie Maker Pro|MovieSpirit - Movie Maker Pro|
|437|576718804|aTimeLogger - 时间记录工具|aTimeLogger 2 - 私人時間記錄儀&时间表|aTimeLogger 2 - 私人時間記錄儀&时间表|aTimeLogger 2 - 私人時間記錄儀&时间表|aTimeLogger Time Tracker|aTimeLogger Time Tracker|
|438|670400597|梁的挠度|樑的撓度|樑的撓度|樑的撓度|Deflection|Deflection|
|439|1400652313|冰钓大师|❌|❌|❌|❌|❌|
|440|1551596643|模拟地铁|❌|❌|❌|❌|❌|
|441|1437479513|逃脱者：困境突围|逃脱者：困境突围|逃脱者：困境突围|逃脱者：困境突围|❌|❌|
|442|1314212521|PPHub For GitHub - 开发者必备|PPHub For GitHub - Developer|PPHub For GitHub - Developer|PPHub For GitHub - Developer|PPHub For GitHub - Developer|PPHub For GitHub - Developer|
|443|1564383045|算法导论.助手|算法導論.助手|算法導論.助手|算法導論.助手|CLRS.Helper|CLRS.Helper|
|444|1380582804|手机帝国|手機帝國|手機帝國|手機帝國|Mobile Empire|Mobile Empire|
|445|6466390901|旋转音律 Rotaeno|❌|❌|❌|❌|❌|
|446|1596406400|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|
|447|598581396|Kingdom Rush Frontiers 塔防史诗冒险|Kingdom Rush Frontiers 塔防生存戰爭|Kingdom Rush Frontiers 塔防生存戰爭|Kingdom Rush Frontiers 塔防生存戰爭|Kingdom Rush Frontiers TD|Kingdom Rush Frontiers TD|
|448|1157863540|泰拉瑞亚|❌|❌|❌|❌|❌|
|449|1630541373|隐私相册-私密记忆，安心记录，安全保障隐藏秘密PRAM|Private Album - PRAM|Private Album - PRAM|Private Album - PRAM|Private Album - PRAM|Private Album - PRAM|
|450|1512838461|DayCircle - 倒数|DayCircle - 倒數|DayCircle - 倒數|DayCircle - 倒數|DayCircle - Day counter|DayCircle - Day counter|
|451|1400032769|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|
|452| ~~460661291~~ | ~~安全笔记+ Pro~~ | ~~Safety Note+ Pro~~ | ~~Safety Note+ Pro~~ | ~~Safety Note+ Pro~~ | ~~Safety Note+ Pro~~ | ~~Safety Note+ Pro~~ |
|453| ~~505904421~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ |
|454| ~~1527841661~~ | ~~沙盒星球~~ | ~~沙盒星球~~ | ~~沙盒星球~~ | ~~沙盒星球~~ | ~~Sandbox Planet~~ | ~~Sandbox Planet~~ |
|455|1159266744|双子 Gemini|雙子 Gemini|雙子 Gemini|雙子 Gemini|❌|❌|
|456|1453808408|恶果之地|Juicy Realm|Juicy Realm|Juicy Realm|Juicy Realm|Juicy Realm|
|457|1458460469|人类跌落梦境|❌|❌|❌|❌|❌|
|458|1481100296|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|
|459| ~~431033044~~ | ~~Phone Drive - 云储存管理和文件共享~~ | ~~Phone Drive - 雲儲存管理和文件共享~~ | ~~Phone Drive - 雲儲存管理和文件共享~~ | ~~Phone Drive - 雲儲存管理和文件共享~~ | ~~Phone Drive: File Storage Sync~~ | ~~Phone Drive: File Storage Sync~~ |
|460|1309638846|Goodak 复古胶片相机 - 拍立得旅行摄影，拍照水印滤镜|Goodak 底片相機 - 復古即可拍，拍立得膠卷攝影|Goodak 底片相機 - 復古即可拍，拍立得膠卷攝影|Goodak 底片相機 - 復古即可拍，拍立得膠卷攝影|Vintage Camera - Goodak|Vintage Camera - Goodak|
|461|1618180398|照片同步-导出备份相册照片视频|照片同步-備份相冊照片視頻|照片同步-備份相冊照片視頻|照片同步-備份相冊照片視頻|PhotoSync-Backup your photos|PhotoSync-Backup your photos|
|462| ~~456637671~~ | ~~安全监控照片+视频Pro~~ | ~~安全監控照片+視頻Pro~~ | ~~安全監控照片+視頻Pro~~ | ~~安全監控照片+視頻Pro~~ | ~~Safety Photo+Video Pro~~ | ~~Safety Photo+Video Pro~~ |
|463|1453318714|Vostok — 创建美丽快拍页面|Vostok — 创建美丽快拍页面|Vostok — 创建美丽快拍页面|Vostok — 创建美丽快拍页面|Vostok — Story Maker|Vostok — Story Maker|
|464|931188326|DayCost|DayCost Pro - Personal Finance|DayCost Pro - Personal Finance|DayCost Pro - Personal Finance|DayCost Pro - Personal Finance|DayCost Pro - Personal Finance|
|465|6449930220|手表浏览器  Wafari|手表浏览器  Wafari|手表浏览器  Wafari|手表浏览器  Wafari|Wafari - Watch Browser|Wafari - Watch Browser|
|466| ~~818394449~~ | ~~时间轴-全球历史~~ | ~~时间轴-全球历史~~ | ~~时间轴-全球历史~~ | ~~时间轴-全球历史~~ | ~~Timeline - World history~~ | ~~Timeline - World history~~ |
|467|1391571907|Fine修图|Fine修圖|Fine修圖|Fine修圖|Fine - Photo Editor|Fine - Photo Editor|
|468|6499125531|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|
|469| ~~1485101937~~ | ~~Juice Watch~~ | ~~Juice Watch~~ | ~~Juice Watch~~ | ~~Juice Watch~~ | ~~Juice Watch~~ | ~~Juice Watch~~ |
|470|703265535|FocusDots · 专注于当下|FocusDots · 專注於當下|FocusDots · 專注於當下|FocusDots · 專注於當下|FocusDots · Focus What Matters|FocusDots · Focus What Matters|
|471|6479307181|灵体侦测器|靈體偵測器|靈體偵測器|靈體偵測器|Ghostly Detector|Ghostly Detector|
|472| ~~488674899~~ | ~~雨雷達-實時天氣圖。 亞洲和中國。°~~ | ~~雨雷達 ° -實時天氣圖~~ | ~~雨雷達 ° -實時天氣圖~~ | ~~雨雷達 ° -實時天氣圖~~ | ~~RAIN RADAR °- sky weather NOAA~~ | ~~RAIN RADAR ° live weather maps~~ |
|473|1636719674|锁屏启动 - 万能桌面小组件&灵动岛一键快捷指令手机捷径布局|鎖屏啟動 - 個人化桌面小工具＆靈動動畫，一鍵美化主螢幕佈局|鎖屏啟動 - 個人化桌面小工具＆靈動動畫，一鍵美化主螢幕佈局|鎖屏啟動 - 個人化桌面小工具＆靈動動畫，一鍵美化主螢幕佈局|Lock Launcher - Screen Widgets|Lock Launcher - Screen Widgets|
|474|1543163106|末剑二|❌|❌|❌|❌|❌|
|475|6443812780|我的水世界求生|❌|❌|❌|❌|❌|
|476|1344655035|蜡烛人|❌|❌|❌|❌|❌|
|477|6446614518|画中世界|❌|❌|❌|❌|❌|
|478|1159700098|去月球-To the Moon|去月球-To the Moon|去月球-To the Moon|去月球-To the Moon|To the Moon|To the Moon|
|479|1271620263|艾希 - ICEY|ICEY|ICEY|ICEY|ICEY|ICEY|
|480|1361473095|喵斯快跑|MuseDash|MuseDash|MuseDash|MuseDash|MuseDash|
|481|6476010032|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|
|482|510249014|水平仪 HD|水準管 HD|水準管 HD|水準管 HD|Level HD.|Level HD.|
|483|904237743|Things 3|Things 3|Things 3|Things 3|Things 3|Things 3|
|484|1622341132|iSleeper - 梦话鼾声记录与睡眠监测|iSleeper - 夢話鼾聲記錄與睡眠監測|iSleeper - 夢話鼾聲記錄與睡眠監測|iSleeper - 夢話鼾聲記錄與睡眠監測|iSleeper: Sleep Tracker|iSleeper: Sleep Tracker|
|485|900833042|Fliqlo|Fliqlo|Fliqlo|Fliqlo|Fliqlo|Fliqlo|
|486|1467880680|LEDot|LEDot|LEDot|LEDot|LEDot|LEDot - Realistic Portable LED|
|487|1455055663|皮皮虾专业版|❌|❌|❌|❌|❌|
|488|1595901138|NES 模拟器 - 吞食天地|Handheld Game - NES Emulator|Handheld Game - NES Emulator|Handheld Game - NES Emulator|Handheld Game - NES Emulator|Handheld Game - NES Emulator|
|489|1163515895|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账本Pro-管家理财必备工具|鲨鱼记账本Pro-管家理财必备工具|
|490|754105884|NightCap相机|NightCap相機|NightCap相機|NightCap相機|NightCap Camera|NightCap Camera|
|491|1642364007|海拔指南针|海拔指南针|海拔指南针|海拔指南针|Altitude Compass|Altitude Compass|
|492|1522215205|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|
|493|1484181693|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|
|494|1117998129|2025人体解剖学图谱|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|
|495|6444824570|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|
|496|469338840|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|
|497|1197275827|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|
|498|578665578|Threema。安全的通讯工具|《Threema》- 安全即時通訊工具|《Threema》- 安全即時通訊工具|《Threema》- 安全即時通訊工具|Threema. The Secure Messenger|Threema. The Secure Messenger|
|499|1547418803|Incredibox - 好玩的音乐盒|❌|❌|❌|❌|❌|
|500|1210251567|SleepTown 睡眠小镇|SleepTown 睡眠小鎮|SleepTown 睡眠小鎮|SleepTown 睡眠小鎮|SleepTown|SleepTown|
|501|1080235640|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|
|502|1658579911|小特钥匙 - 特斯拉蓝牙手表钥匙|小特钥匙 - 特斯拉蓝牙手表钥匙|小特钥匙 - 特斯拉蓝牙手表钥匙|小特钥匙 - 特斯拉蓝牙手表钥匙|XIAOTE - Tesla BLE Watch key|XIAOTE - Tesla BLE Watch key|
|503|1152396902|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|
|504|1633366918|Instant Lines|Instant Lines|Instant Lines|Instant Lines|Instant Lines|Instant Lines|
|505|6480159520|转录大师 - 录音转文字、实时离线转录|Whisper Pen - 語音轉文字|Whisper Pen - 語音轉文字|Whisper Pen - 語音轉文字|Whisper Pen - Speech to Text|Whisper Pen - Speech to Text|
|506|966489322|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|
|507|898876435|Planit巧摄专业版：风光摄影计划神器|Planit巧攝專業版：风光攝影計劃神器|Planit巧攝專業版：风光攝影計劃神器|Planit巧攝專業版：风光攝影計劃神器|Planit Pro: Photo Planner|Planit Pro: Photo Planner|
|508|1062745479|HeartWatch: 心脏和活动监测器|HeartWatch: 監測心率|HeartWatch: 監測心率|HeartWatch: 監測心率|HeartWatch: Heart Rate Tracker|HeartWatch: Heart Rate Tracker|
|509|6476963352|万能生成器|万能生成器|万能生成器|万能生成器|万能生成器|万能生成器|
|510|1459076631|隐形守护者|隐形守护者|隐形守护者|❌|隐形守护者|❌|
|511|1660014964|飞越13号房|❌|❌|❌|❌|❌|
|512|730712409|ProCam - 专业相机|ProCam - 專業相機|ProCam - 專業相機|ProCam - 專業相機|ProCam - Pro Camera|ProCam - Pro Camera|
|513|6451239549|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|
|514|1633865171|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|
|515|1492395549|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|❌|
|516|1661419573|atvTools|atvTools|atvTools|atvTools|atvTools|atvTools|
|517|6479683928|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|
|518|6443798663|敲木鱼 - 打节拍敲音效解压神器|敲木魚|敲木魚|敲木魚|MuYu|MuYu|
|519|373454750|随手记Pro–个人家庭生意记账|隨手記Pro–個人家庭生意記帳|隨手記Pro–個人家庭生意記帳|隨手記Pro–個人家庭生意記帳|随手记Pro|随手记Pro–记账财务管理软件|
|520|916366645|Procreate Pocket|Procreate Pocket|Procreate Pocket|Procreate Pocket|Procreate Pocket|Procreate Pocket|
|521|1164801111|AutoSleep - 通过手表自动追踪睡眠|AutoSleep – 在手錶上追蹤睡眠|AutoSleep – 在手錶上追蹤睡眠|AutoSleep – 在手錶上追蹤睡眠|AutoSleep Track Sleep on Watch|AutoSleep Track Sleep on Watch|
|522|1625289361|空气投篮|AirBasketball - AuditoryAR|AirBasketball - AuditoryAR|AirBasketball - AuditoryAR|AirBasketball - AuditoryAR|AirBasketball - AuditoryAR|
|523|1261944766|Alook浏览器 - 8倍速|Alook瀏覽器 - 8倍速|Alook瀏覽器 - 8倍速|Alook瀏覽器 - 8倍速|Alook Browser - 8x Speed|Alook Browser - 8x Speed|
|524|866450515|Forest 专注森林 - 番茄钟学习计时器|Forest 專注森林 - 讀書專注番茄鐘|Forest 專注森林 - 讀書專注番茄鐘|Forest 專注森林 - 讀書專注番茄鐘|Forest: Focus for Productivity|Forest: Focus for Productivity|
|525|1600873673|炭炭背单词｜四六级考研等英语单词学习|炭炭背单词｜四六级考研等英语单词学习|炭炭背单词｜四六级考研等英语单词学习|❌|❌|❌|
|526|388624839|扫描全能王 - 官方出品1元畅用版，扫描PDF文件，文字识别|CamScanner+|CamScanner+|CamScanner+|CamScanner + | OCR Scanner|CamScanner + | PDF Scanner|
|527|768160271|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|
|528|1439723850|时间规划局 - 倒计时与提醒事项|Countdown! Reminders and Timer|Countdown! Reminders and Timer|Countdown! Reminders and Timer|Countdown! Reminders and Timer|Countdown! Reminders and Timer|
|529|6447023668|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|
|530|6468843723|❌|GTA III – Definitive|GTA III – Definitive|GTA III – Definitive|GTA III – Definitive|GTA III – Definitive|
|531|6468845173|❌|GTA: Vice City – Definitive|GTA: Vice City – Definitive|GTA: Vice City – Definitive|GTA: Vice City – Definitive|GTA: Vice City – Definitive|
|532|6468845068|❌|GTA: San Andreas – 最終版|GTA: San Andreas – 最終版|GTA: San Andreas – 最終版|GTA: San Andreas – Definitive|GTA: San Andreas – Definitive|
|533|1631331207|❌|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|
|534|1598130789|❌|Company of Heroes Collection|Company of Heroes Collection|Company of Heroes Collection|Company of Heroes Collection|Company of Heroes Collection|
|535|1085114709|Parallels Desktop|Parallels Desktop|Parallels Desktop|Parallels Desktop|Parallels Desktop|Parallels Desktop|
|536|6450262949|Longshot - 截图 & OCR文字识别|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|
|537|6451498949|❌|Stray|Stray|Stray|Stray|Stray|
|538|1630403500|APTV|APTV|APTV|APTV|APTV|APTV|
|539|1552536109|PasteNow - 剪贴板工具|PasteNow - 剪貼簿工具|PasteNow - 剪貼簿工具|PasteNow - 剪貼簿工具|PasteNow - Instant Clipboard|PasteNow - Instant Clipboard|
|540|1558391784|Filebar|Filebar|Filebar|Filebar|Filebar - media player|Filebar - media player|
|541|1548711022|Barbee - 清理您的菜单栏图标|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|
|542|1575588022|MenubarX - 强大的菜单栏浏览器|MenubarX - 強大的選單列瀏覽器|MenubarX - 強大的選單列瀏覽器|MenubarX - 強大的選單列瀏覽器|MenubarX - Floating Browser|MenubarX - Floating Browser|
|543|1630034110|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|
|544|1009747025|zFuse - 影音播放器|zFuse - 影片播放器|zFuse - 影片播放器|zFuse - 影片播放器|zFuse - Video Player|zFuse - Video Player|
|545|1054505347|zFuse - 视频播放器|zFuse - 視頻播放器|zFuse - 視頻播放器|zFuse - 視頻播放器|zFuse - Media Player|zFuse - Media Player|
|546|1659622164|VidHub - 高清影片视频播放器，快速播放云盘网盘|VidHub -Video Library & Player|VidHub -Video Library & Player|VidHub -Video Library & Player|VidHub -Video Library & Player|VidHub -Video Library & Player|
|547|1136220934|Infuse - 智能视频播放器|Infuse - 智能視頻播放器|Infuse - 智能視頻播放器|Infuse - 智能視頻播放器|Infuse • Video Player|Infuse • Video Player|
|548|1476649036|帕斯卡契约|Pascal's Wager|Pascal's Wager|Pascal's Wager|Pascal's Wager|Pascal's Wager|
|549|1635315427|暖雪|❌|❌|❌|❌|❌|
|550|1523446532|重生细胞|❌|❌|❌|❌|❌|
|551|1389752090|❌|Dead Cells|Dead Cells|Dead Cells|Dead Cells|Dead Cells|
|552|1640627334|❌|Resident Evil Village for Mac|Resident Evil Village for Mac|Resident Evil Village for Mac|Resident Evil Village for Mac|Resident Evil Village for Mac|
|553|6450980545|❌|Resident Evil Village|Resident Evil Village|Resident Evil Village|Resident Evil Village|Resident Evil Village|
|554|6462360082|❌|Resident Evil 4|Resident Evil 4|Resident Evil 4|Resident Evil 4|Resident Evil 4|
|555|1620883955|❌|Little Nightmares|Little Nightmares|Little Nightmares|Little Nightmares|Little Nightmares|
|556|1606703078|❌|槍火重生|槍火重生|槍火重生|Gunfire Reborn|❌|
|557|1373575045|❌|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|
|558|1371965583|❌|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|
|559|6450877530|花园之间|❌|❌|❌|❌|❌|
|560|1601446687|❌|Streets of Rage 4|Streets of Rage 4|Streets of Rage 4|Streets of Rage 4|Streets of Rage 4|
|561|1587860402|❌|籠中窺夢|籠中窺夢|籠中窺夢|Moncage|Moncage|
|562|1584313012|笼中窥梦|❌|❌|❌|❌|❌|
|563|1465779286|❌|GRIS|GRIS|GRIS|GRIS|GRIS|
|564|1445379072|❌|GRIS|GRIS|GRIS|GRIS|GRIS|
|565|1521190840|格莉斯的旅程|❌|❌|❌|❌|❌|
|566|728293409|❌|紀念碑谷|紀念碑谷|紀念碑谷|Monument Valley|Monument Valley|
|567|1582832845|纪念碑谷|❌|❌|❌|❌|❌|
|568|1644917705|无处遁形：全网公敌|無處遁形：全網公敵|無處遁形：全網公敵|無處遁形：全網公敵|Cyber Manhunt|Cyber Manhunt|
|569|1369179088|❌|Grimvalor|Grimvalor|Grimvalor|Grimvalor|Grimvalor|
|570|1669723530|原界之罪|❌|❌|❌|❌|❌|
|571|481629890|❌|LIMBO by Playdead|LIMBO by Playdead|LIMBO by Playdead|LIMBO by Playdead|LIMBO by Playdead|
|572|656951157|❌|Playdead's LIMBO|Playdead's LIMBO|Playdead's LIMBO|Playdead's LIMBO|Playdead's LIMBO|
|573|886561127|❌|INSIDE by Playdead|INSIDE by Playdead|INSIDE by Playdead|INSIDE by Playdead|INSIDE by Playdead|
|574|1201642309|❌|Playdead's INSIDE|Playdead's INSIDE|Playdead's INSIDE|Playdead's INSIDE|Playdead's INSIDE|
|575|1529448980|❌|Reeder Classic.|Reeder Classic.|Reeder Classic.|Reeder Classic.|Reeder Classic.|
|576|1529445840|❌|Reeder Classic|Reeder Classic|Reeder Classic|Reeder Classic|Reeder Classic|
|577|1596063349|❌|Stash|Stash|Stash|Stash - Rule Based Proxy|Stash - Rule Based Proxy|
|578|6444029612|❌|Loon Lite|Loon Lite|Loon Lite|Loon Lite|Loon Lite|
|579|1373567447|❌|Loon|Loon|Loon|Loon|Loon|
|580|1442620678|❌|Surge 5|Surge 5|Surge 5|Surge 5|Surge 5|
|581|1443988620|❌|Quantumult X|Quantumult X|Quantumult X|Quantumult X|Quantumult X|
|582|932747118|❌|Shadowrocket|Shadowrocket|Shadowrocket|Shadowrocket|Shadowrocket|
|583|1642682818|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|
|584|1319191852|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|
|585|1067198688|彩云天气Pro|彩云天气Pro|彩云天气Pro|彩云天气Pro|彩云天气Pro|彩云天气Pro|

# Operating Mechanism and Process
The entire mechanism relies on scheduled tasks provided by  `GitHub Actions` , executed every  `60 minutes` . The overall process is as follows:
1. Get the latest price information for apps
   1. Get app details and the price of  `App`  through  [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1) 
   2. Based on the app details link obtained in the previous step, parse the link to get the price of  `In-App Purchases` 
2. Read stored price information
3. Calculate discount information
4. Store the latest price information
5. Update  `RSS`  files
6. Push notification to  `Telegram` 
7. Push notification to  `DingTalk` 
8. Update  `README.md` 
9. Submit  `Git`  update

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