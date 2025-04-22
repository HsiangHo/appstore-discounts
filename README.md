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
So far, we've covered `6` `Countries or Regions` and  `629` `Apps` <br />Push notifications will only be sent when there are discounts for the listed  `Country or Region`  and  `App`  below. If your  `Country or Region`  or favorite  `App`  is not on the list, feel free to add it<br />
>Special Note:  `❌`  in the table below indicates that the app does not exist in the current  `Country or Region` 's  `App Store` <br />If certain apps in the list frequently offer discounts to attract you to install and use them, and you successfully get attracted to install and use them, but end up uninstalling the app due to poor user experience. For such cases, feedback is welcome via  `Issue` . If an app receives more than  `10`  complaints, its discount information push notifications are likely to be banned<br />The application currently marked by  ~~Strikethrough~~  indicates that it has been banned from push notifications

|Serial Number|App ID|Mainland China（cn）|Hong Kong, China（hk）|Macao, China（mo）|Taiwan, China（tw）|United States（us）|Türkiye（tr）|
|:-|:-|:-|:-|:-|:-|:-|:-|
|1|318639200|❌|❌|❌|❌|❌|❌|
|2|325915322|❌|❌|❌|❌|❌|❌|
|3|365729342|❌|❌|❌|❌|❌|❌|
|4|414469628|❌|❌|❌|❌|❌|❌|
|5|459313476|❌|❌|❌|❌|❌|❌|
|6|478126577|❌|❌|❌|❌|❌|❌|
|7|493493802|❌|❌|❌|❌|❌|❌|
|8|555612465|❌|❌|❌|❌|❌|❌|
|9|564730202|❌|❌|❌|❌|❌|❌|
|10|582584117|❌|❌|❌|❌|❌|❌|
|11|633600716|❌|❌|❌|❌|❌|❌|
|12|683353582|❌|❌|❌|❌|❌|❌|
|13|777310222|❌|❌|❌|❌|❌|❌|
|14|887877435|❌|❌|❌|❌|❌|❌|
|15|908905093|❌|❌|❌|❌|❌|❌|
|16|961339405|❌|❌|❌|❌|❌|❌|
|17|994157520|❌|❌|❌|❌|❌|❌|
|18|1048509287|❌|❌|❌|❌|❌|❌|
|19|1087099916|❌|❌|❌|❌|❌|❌|
|20|1107320261|❌|❌|❌|❌|❌|❌|
|21|1241909999|❌|❌|❌|❌|❌|❌|
|22|1293681293|❌|❌|❌|❌|❌|❌|
|23|1330717186|❌|❌|❌|❌|❌|❌|
|24|1357651989|❌|❌|❌|❌|❌|❌|
|25|1385258906|❌|❌|❌|❌|❌|❌|
|26|1402080820|❌|❌|❌|❌|❌|❌|
|27|1439262206|❌|❌|❌|❌|❌|❌|
|28|1450194251|❌|❌|❌|❌|❌|❌|
|29|1477229754|❌|❌|❌|❌|❌|❌|
|30|1514329124|❌|❌|❌|❌|❌|❌|
|31|1553055273|❌|❌|❌|❌|❌|❌|
|32|1573220858|❌|❌|❌|❌|❌|❌|
|33|1580509302|❌|❌|❌|❌|❌|❌|
|34|1614771445|❌|❌|❌|❌|❌|❌|
|35|6742396803|❌|❌|❌|❌|❌|❌|
|36|6740943002|❌|❌|❌|❌|❌|❌|
|37|6743459503|❌|❌|❌|❌|❌|❌|
|38|6480251529|❌|❌|❌|❌|❌|❌|
|39|6739179322|❌|❌|❌|❌|❌|❌|
|40|6744837914|❌|❌|❌|❌|❌|❌|
|41|6502623166|❌|❌|❌|❌|❌|❌|
|42|6468033830|❌|❌|❌|❌|❌|❌|
|43|6738138603|❌|❌|❌|❌|❌|❌|
|44|6739185971|❌|❌|❌|❌|❌|❌|
|45|284972998|❌|❌|❌|❌|❌|❌|
|46|288419283|❌|❌|❌|❌|❌|❌|
|47|292421271|❌|❌|❌|❌|❌|❌|
|48|294934058|❌|❌|❌|❌|❌|❌|
|49|298206806|❌|❌|❌|❌|❌|❌|
|50|299117180|❌|❌|❌|❌|❌|❌|
|51|301387274|❌|❌|❌|❌|❌|❌|
|52|305557780|❌|❌|❌|❌|❌|❌|
|53|306938028|❌|❌|❌|❌|❌|❌|
|54|307132353|❌|❌|❌|❌|❌|❌|
|55|307727765|❌|❌|❌|❌|❌|❌|
|56|307751675|❌|❌|❌|❌|❌|❌|
|57|315021242|❌|❌|❌|❌|❌|❌|
|58|315514944|❌|❌|❌|❌|❌|❌|
|59|317809458|❌|❌|❌|❌|❌|❌|
|60|323048611|❌|❌|❌|❌|❌|❌|
|61|329670577|❌|❌|❌|❌|❌|❌|
|62|332424440|❌|❌|❌|❌|❌|❌|
|63|333212604|❌|❌|❌|❌|❌|❌|
|64|335029050|❌|❌|❌|❌|❌|❌|
|65|335709058|❌|❌|❌|❌|❌|❌|
|66|335862325|❌|❌|❌|❌|❌|❌|
|67|342115564|❌|❌|❌|❌|❌|❌|
|68|344784375|❌|❌|❌|❌|❌|❌|
|69|351850196|❌|❌|❌|❌|❌|❌|
|70|352247139|❌|❌|❌|❌|❌|❌|
|71|355281169|❌|❌|❌|❌|❌|❌|
|72|357404131|❌|❌|❌|❌|❌|❌|
|73|357421934|❌|❌|❌|❌|❌|❌|
|74|367327563|❌|❌|❌|❌|❌|❌|
|75|373493387|❌|❌|❌|❌|❌|❌|
|76|388130466|❌|❌|❌|❌|❌|❌|
|77|388857410|❌|❌|❌|❌|❌|❌|
|78|392531952|❌|❌|❌|❌|❌|❌|
|79|395680819|❌|❌|❌|❌|❌|❌|
|80|396085661|❌|❌|❌|❌|❌|❌|
|81|402012828|❌|❌|❌|❌|❌|❌|
|82|402656416|❌|❌|❌|❌|❌|❌|
|83|403684733|❌|❌|❌|❌|❌|❌|
|84|404990064|❌|❌|❌|❌|❌|❌|
|85|405835358|❌|❌|❌|❌|❌|❌|
|86|406239138|❌|❌|❌|❌|❌|❌|
|87|406541444|❌|❌|❌|❌|❌|❌|
|88|407933070|❌|❌|❌|❌|❌|❌|
|89|408697793|❌|❌|❌|❌|❌|❌|
|90|408854559|❌|❌|❌|❌|❌|❌|
|91|417817520|❌|❌|❌|❌|❌|❌|
|92|424403441|❌|❌|❌|❌|❌|❌|
|93|430163724|❌|❌|❌|❌|❌|❌|
|94|432850619|❌|❌|❌|❌|❌|❌|
|95|433596395|❌|❌|❌|❌|❌|❌|
|96|449735650|❌|❌|❌|❌|❌|❌|
|97|450542233|❌|❌|❌|❌|❌|❌|
|98|452990487|❌|❌|❌|❌|❌|❌|
|99|454086751|❌|❌|❌|❌|❌|❌|
|100|469343554|❌|❌|❌|❌|❌|❌|
|101|479516143|❌|❌|❌|❌|❌|❌|
|102|479662730|❌|❌|❌|❌|❌|❌|
|103|482303584|❌|❌|❌|❌|❌|❌|
|104|485246824|❌|❌|❌|❌|❌|❌|
|105|491231653|❌|❌|❌|❌|❌|❌|
|106|497716362|❌|❌|❌|❌|❌|❌|
|107|498732510|❌|❌|❌|❌|❌|❌|
|108|501695715|❌|❌|❌|❌|❌|❌|
|109|503190232|❌|❌|❌|❌|❌|❌|
|110|504176984|❌|❌|❌|❌|❌|❌|
|111|504300412|❌|❌|❌|❌|❌|❌|
|112|505367096|❌|❌|❌|❌|❌|❌|
|113|519411018|❌|❌|❌|❌|❌|❌|
|114|520231936|❌|❌|❌|❌|❌|❌|
|115|524387892|❌|❌|❌|❌|❌|❌|
|116|525818839|❌|❌|❌|❌|❌|❌|
|117|530425820|❌|❌|❌|❌|❌|❌|
|118|540925500|❌|❌|❌|❌|❌|❌|
|119|549105915|❌|❌|❌|❌|❌|❌|
|120|549432607|❌|❌|❌|❌|❌|❌|
|121|554937499|❌|❌|❌|❌|❌|❌|
|122|555642577|❌|❌|❌|❌|❌|❌|
|123|563718995|❌|❌|❌|❌|❌|❌|
|124|575154654|❌|❌|❌|❌|❌|❌|
|125|577628510|❌|❌|❌|❌|❌|❌|
|126|578448682|❌|❌|❌|❌|❌|❌|
|127|586149216|❌|❌|❌|❌|❌|❌|
|128|594117733|❌|❌|❌|❌|❌|❌|
|129|600626116|❌|❌|❌|❌|❌|❌|
|130|623592465|❌|❌|❌|❌|❌|❌|
|131|625334537|❌|❌|❌|❌|❌|❌|
|132|634235735|❌|❌|❌|❌|❌|❌|
|133|640364616|❌|❌|❌|❌|❌|❌|
|134|646256209|❌|❌|❌|❌|❌|❌|
|135|657016140|❌|❌|❌|❌|❌|❌|
|136|679044544|❌|❌|❌|❌|❌|❌|
|137|687236545|❌|❌|❌|❌|❌|❌|
|138|697885605|❌|❌|❌|❌|❌|❌|
|139|700637744|❌|❌|❌|❌|❌|❌|
|140|736683061|❌|❌|❌|❌|❌|❌|
|141|741990930|❌|❌|❌|❌|❌|❌|
|142|763692274|❌|❌|❌|❌|❌|❌|
|143|784373321|❌|❌|❌|❌|❌|❌|
|144|807317212|❌|❌|❌|❌|❌|❌|
|145|824305459|❌|❌|❌|❌|❌|❌|
|146|829581836|❌|❌|❌|❌|❌|❌|
|147|837860959|❌|❌|❌|❌|❌|❌|
|148|860809977|❌|❌|❌|❌|❌|❌|
|149|870322730|❌|❌|❌|❌|❌|❌|
|150|890791581|❌|❌|❌|❌|❌|❌|
|151|891194610|❌|❌|❌|❌|❌|❌|
|152|901738789|❌|❌|❌|❌|❌|❌|
|153|904278510|❌|❌|❌|❌|❌|❌|
|154|912536422|❌|❌|❌|❌|❌|❌|
|155|916976066|❌|❌|❌|❌|❌|❌|
|156|918609651|❌|❌|❌|❌|❌|❌|
|157|924695435|❌|❌|❌|❌|❌|❌|
|158|925494667|❌|❌|❌|❌|❌|❌|
|159|926015463|❌|❌|❌|❌|❌|❌|
|160|926076608|❌|❌|❌|❌|❌|❌|
|161|927098908|❌|❌|❌|❌|❌|❌|
|162|932389062|❌|❌|❌|❌|❌|❌|
|163|935216956|❌|❌|❌|❌|❌|❌|
|164|935528099|❌|❌|❌|❌|❌|❌|
|165|941143328|❌|❌|❌|❌|❌|❌|
|166|945322477|❌|❌|❌|❌|❌|❌|
|167|946477821|❌|❌|❌|❌|❌|❌|
|168|948944368|❌|❌|❌|❌|❌|❌|
|169|954724812|❌|❌|❌|❌|❌|❌|
|170|955687901|❌|❌|❌|❌|❌|❌|
|171|961932335|❌|❌|❌|❌|❌|❌|
|172|963034692|❌|❌|❌|❌|❌|❌|
|173|964708975|❌|❌|❌|❌|❌|❌|
|174|973482987|❌|❌|❌|❌|❌|❌|
|175|975683986|❌|❌|❌|❌|❌|❌|
|176|982175678|❌|❌|❌|❌|❌|❌|
|177|982227026|❌|❌|❌|❌|❌|❌|
|178|992047786|❌|❌|❌|❌|❌|❌|
|179|998437582|❌|❌|❌|❌|❌|❌|
|180|1010311475|❌|❌|❌|❌|❌|❌|
|181|1012298403|❌|❌|❌|❌|❌|❌|
|182|1023146677|❌|❌|❌|❌|❌|❌|
|183|1028950091|❌|❌|❌|❌|❌|❌|
|184|1029932207|❌|❌|❌|❌|❌|❌|
|185|1035219553|❌|❌|❌|❌|❌|❌|
|186|1035219562|❌|❌|❌|❌|❌|❌|
|187|1065360416|❌|❌|❌|❌|❌|❌|
|188|1065599938|❌|❌|❌|❌|❌|❌|
|189|1077639630|❌|❌|❌|❌|❌|❌|
|190|1093131935|❌|❌|❌|❌|❌|❌|
|191|1094038347|❌|❌|❌|❌|❌|❌|
|192|1095903651|❌|❌|❌|❌|❌|❌|
|193|1099088440|❌|❌|❌|❌|❌|❌|
|194|1108479411|❌|❌|❌|❌|❌|❌|
|195|1110646984|❌|❌|❌|❌|❌|❌|
|196|1111420122|❌|❌|❌|❌|❌|❌|
|197|1112429079|❌|❌|❌|❌|❌|❌|
|198|1113736426|❌|❌|❌|❌|❌|❌|
|199|1118115766|❌|❌|❌|❌|❌|❌|
|200|1121484538|❌|❌|❌|❌|❌|❌|
|201|1128464707|❌|❌|❌|❌|❌|❌|
|202|1129429340|❌|❌|❌|❌|❌|❌|
|203|1134805859|❌|❌|❌|❌|❌|❌|
|204|1137257203|❌|❌|❌|❌|❌|❌|
|205|1142016085|❌|❌|❌|❌|❌|❌|
|206|1160608318|❌|❌|❌|❌|❌|❌|
|207|1166143148|❌|❌|❌|❌|❌|❌|
|208|1169282239|❌|❌|❌|❌|❌|❌|
|209|1184204602|❌|❌|❌|❌|❌|❌|
|210|1187265767|❌|❌|❌|❌|❌|❌|
|211|1189781891|❌|❌|❌|❌|❌|❌|
|212|1195035357|❌|❌|❌|❌|❌|❌|
|213|1217732174|❌|❌|❌|❌|❌|❌|
|214|1237692856|❌|❌|❌|❌|❌|❌|
|215|1239299402|❌|❌|❌|❌|❌|❌|
|216|1241383990|❌|❌|❌|❌|❌|❌|
|217|1247397901|❌|❌|❌|❌|❌|❌|
|218|1248033433|❌|❌|❌|❌|❌|❌|
|219|1249864455|❌|❌|❌|❌|❌|❌|
|220|1250144822|❌|❌|❌|❌|❌|❌|
|221|1259067036|❌|❌|❌|❌|❌|❌|
|222|1262474519|❌|❌|❌|❌|❌|❌|
|223|1264608487|❌|❌|❌|❌|❌|❌|
|224|1290687550|❌|❌|❌|❌|❌|❌|
|225|1291429551|❌|❌|❌|❌|❌|❌|
|226|1291730054|❌|❌|❌|❌|❌|❌|
|227|1296085645|❌|❌|❌|❌|❌|❌|
|228|1298544927|❌|❌|❌|❌|❌|❌|
|229|1303222868|❌|❌|❌|❌|❌|❌|
|230|1312534841|❌|❌|❌|❌|❌|❌|
|231|1329434099|❌|❌|❌|❌|❌|❌|
|232|1330314351|❌|❌|❌|❌|❌|❌|
|233|1336793944|❌|❌|❌|❌|❌|❌|
|234|1339516665|❌|❌|❌|❌|❌|❌|
|235|1351652600|❌|❌|❌|❌|❌|❌|
|236|1359107338|❌|❌|❌|❌|❌|❌|
|237|1359652100|❌|❌|❌|❌|❌|❌|
|238|1391339323|❌|❌|❌|❌|❌|❌|
|239|1392608717|❌|❌|❌|❌|❌|❌|
|240|1406710800|❌|❌|❌|❌|❌|❌|
|241|1435004182|❌|❌|❌|❌|❌|❌|
|242|1436429074|❌|❌|❌|❌|❌|❌|
|243|1437096541|❌|❌|❌|❌|❌|❌|
|244|1438245901|❌|❌|❌|❌|❌|❌|
|245|1439187947|❌|❌|❌|❌|❌|❌|
|246|1439881811|❌|❌|❌|❌|❌|❌|
|247|1441969889|❌|❌|❌|❌|❌|❌|
|248|1442776789|❌|❌|❌|❌|❌|❌|
|249|1444761746|❌|❌|❌|❌|❌|❌|
|250|1449893235|❌|❌|❌|❌|❌|❌|
|251|1450064785|❌|❌|❌|❌|❌|❌|
|252|1450144092|❌|❌|❌|❌|❌|❌|
|253|1451873044|❌|❌|❌|❌|❌|❌|
|254|1453838527|❌|❌|❌|❌|❌|❌|
|255|1455781522|❌|❌|❌|❌|❌|❌|
|256|1459749978|❌|❌|❌|❌|❌|❌|
|257|1461751938|❌|❌|❌|❌|❌|❌|
|258|1464850921|❌|❌|❌|❌|❌|❌|
|259|1474716211|❌|❌|❌|❌|❌|❌|
|260|1477203766|❌|❌|❌|❌|❌|❌|
|261|1477854253|❌|❌|❌|❌|❌|❌|
|262|1477966166|❌|❌|❌|❌|❌|❌|
|263|1477991646|❌|❌|❌|❌|❌|❌|
|264|1479608271|❌|❌|❌|❌|❌|❌|
|265|1480844881|❌|❌|❌|❌|❌|❌|
|266|1481006495|❌|❌|❌|❌|❌|❌|
|267|1482339363|❌|❌|❌|❌|❌|❌|
|268|1484622401|❌|❌|❌|❌|❌|❌|
|269|1485875855|❌|❌|❌|❌|❌|❌|
|270|1491530147|❌|❌|❌|❌|❌|❌|
|271|1497120981|❌|❌|❌|❌|❌|❌|
|272|1499849161|❌|❌|❌|❌|❌|❌|
|273|1500098830|❌|❌|❌|❌|❌|❌|
|274|1503486239|❌|❌|❌|❌|❌|❌|
|275|1504662191|❌|❌|❌|❌|❌|❌|
|276|1504760106|❌|❌|❌|❌|❌|❌|
|277|1504952058|❌|❌|❌|❌|❌|❌|
|278|1505636751|❌|❌|❌|❌|❌|❌|
|279|1509344823|❌|❌|❌|❌|❌|❌|
|280|1512751689|❌|❌|❌|❌|❌|❌|
|281|1515215584|❌|❌|❌|❌|❌|❌|
|282|1515382132|❌|❌|❌|❌|❌|❌|
|283|1516531425|❌|❌|❌|❌|❌|❌|
|284|1517349382|❌|❌|❌|❌|❌|❌|
|285|1518841947|❌|❌|❌|❌|❌|❌|
|286|1519386476|❌|❌|❌|❌|❌|❌|
|287|1523633394|❌|❌|❌|❌|❌|❌|
|288|1525735418|❌|❌|❌|❌|❌|❌|
|289|1528199331|❌|❌|❌|❌|❌|❌|
|290|1531462734|❌|❌|❌|❌|❌|❌|
|291|1531654315|❌|❌|❌|❌|❌|❌|
|292|1536762482|❌|❌|❌|❌|❌|❌|
|293|1544190466|❌|❌|❌|❌|❌|❌|
|294|1544412558|❌|❌|❌|❌|❌|❌|
|295|1544722749|❌|❌|❌|❌|❌|❌|
|296|1548185534|❌|❌|❌|❌|❌|❌|
|297|1551207253|❌|❌|❌|❌|❌|❌|
|298|1551263854|❌|❌|❌|❌|❌|❌|
|299|1555857229|❌|❌|❌|❌|❌|❌|
|300|1556671822|❌|❌|❌|❌|❌|❌|
|301|1559869450|❌|❌|❌|❌|❌|❌|
|302|1562560561|❌|❌|❌|❌|❌|❌|
|303|1563932741|❌|❌|❌|❌|❌|❌|
|304|1569963107|❌|❌|❌|❌|❌|❌|
|305|1576329230|❌|❌|❌|❌|❌|❌|
|306|1576763082|❌|❌|❌|❌|❌|❌|
|307|1577392165|❌|❌|❌|❌|❌|❌|
|308|1578203914|❌|❌|❌|❌|❌|❌|
|309|1581640677|❌|❌|❌|❌|❌|❌|
|310|1587674627|❌|❌|❌|❌|❌|❌|
|311|1590622755|❌|❌|❌|❌|❌|❌|
|312|1591627945|❌|❌|❌|❌|❌|❌|
|313|1592505377|❌|❌|❌|❌|❌|❌|
|314|1592660274|❌|❌|❌|❌|❌|❌|
|315|1595739885|❌|❌|❌|❌|❌|❌|
|316|1596736236|❌|❌|❌|❌|❌|❌|
|317|1600307023|❌|❌|❌|❌|❌|❌|
|318|1603421749|❌|❌|❌|❌|❌|❌|
|319|1603553413|❌|❌|❌|❌|❌|❌|
|320|1606405358|❌|❌|❌|❌|❌|❌|
|321|1609910024|❌|❌|❌|❌|❌|❌|
|322|1610947489|❌|❌|❌|❌|❌|❌|
|323|1612952507|❌|❌|❌|❌|❌|❌|
|324|1614200925|❌|❌|❌|❌|❌|❌|
|325|1622869542|❌|❌|❌|❌|❌|❌|
|326|1624326561|❌|❌|❌|❌|❌|❌|
|327|1631859420|❌|❌|❌|❌|❌|❌|
|328|1631867592|❌|❌|❌|❌|❌|❌|
|329|1633243177|❌|❌|❌|❌|❌|❌|
|330|1633253544|❌|❌|❌|❌|❌|❌|
|331|1636342413|❌|❌|❌|❌|❌|❌|
|332|1642601792|❌|❌|❌|❌|❌|❌|
|333|1642733080|❌|❌|❌|❌|❌|❌|
|334|1643199620|❌|❌|❌|❌|❌|❌|
|335|1659271912|❌|❌|❌|❌|❌|❌|
|336|1659316190|❌|❌|❌|❌|❌|❌|
|337|1662217862|❌|❌|❌|❌|❌|❌|
|338|1665706687|❌|❌|❌|❌|❌|❌|
|339|1668755109|❌|❌|❌|❌|❌|❌|
|340|1669877091|❌|❌|❌|❌|❌|❌|
|341|1671505630|❌|❌|❌|❌|❌|❌|
|342|6737795387|❌|❌|❌|❌|❌|❌|
|343|6448477521|❌|❌|❌|❌|❌|❌|
|344|6472380172|❌|❌|❌|❌|❌|❌|
|345|6443786927|❌|❌|❌|❌|❌|❌|
|346|6502489827|❌|❌|❌|❌|❌|❌|
|347|6742129099|❌|❌|❌|❌|❌|❌|
|348|6443916065|❌|❌|❌|❌|❌|❌|
|349|6737512463|❌|❌|❌|❌|❌|❌|
|350|6462190343|❌|❌|❌|❌|❌|❌|
|351|6444782083|❌|❌|❌|❌|❌|❌|
|352|6450148077|❌|❌|❌|❌|❌|❌|
|353|6449766387|❌|❌|❌|❌|❌|❌|
|354|6740246950|❌|❌|❌|❌|❌|❌|
|355|6550914957|❌|❌|❌|❌|❌|❌|
|356|6742537442|❌|❌|❌|❌|❌|❌|
|357|6741474933|❌|❌|❌|❌|❌|❌|
|358|6742221550|❌|❌|❌|❌|❌|❌|
|359|6738767315|❌|❌|❌|❌|❌|❌|
|360|6737987084|❌|❌|❌|❌|❌|❌|
|361|6446607609|❌|❌|❌|❌|❌|❌|
|362|6499512726|❌|❌|❌|❌|❌|❌|
|363|6483210281|❌|❌|❌|❌|❌|❌|
|364|6738767322|❌|❌|❌|❌|❌|❌|
|365|6737434454|❌|❌|❌|❌|❌|❌|
|366|6743117370|❌|❌|❌|❌|❌|❌|
|367|6740705851|❌|❌|❌|❌|❌|❌|
|368|6743487416|❌|❌|❌|❌|❌|❌|
|369|6478843819|❌|❌|❌|❌|❌|❌|
|370|6502453075|❌|❌|❌|❌|❌|❌|
|371|6670749900|❌|❌|❌|❌|❌|❌|
|372|6711347049|❌|❌|❌|❌|❌|❌|
|373|6547834967|❌|❌|❌|❌|❌|❌|
|374|6452276410|❌|❌|❌|❌|❌|❌|
|375|6471479898|❌|❌|❌|❌|❌|❌|
|376|6738371720|❌|❌|❌|❌|❌|❌|
|377|6456751953|❌|❌|❌|❌|❌|❌|
|378|6469114836|❌|❌|❌|❌|❌|❌|
|379|6743648252|❌|❌|❌|❌|❌|❌|
|380|6738636631|❌|❌|❌|❌|❌|❌|
|381|6480082872|❌|❌|❌|❌|❌|❌|
|382|6738769251|❌|❌|❌|❌|❌|❌|
|383|6621207768|❌|❌|❌|❌|❌|❌|
|384|6743420230|❌|❌|❌|❌|❌|❌|
|385|6736642117|❌|❌|❌|❌|❌|❌|
|386|6498879077|❌|❌|❌|❌|❌|❌|
|387|6738636602|❌|❌|❌|❌|❌|❌|
|388|6504323939|❌|❌|❌|❌|❌|❌|
|389|6505046490|❌|❌|❌|❌|❌|❌|
|390|6443723657|❌|❌|❌|❌|❌|❌|
|391|6743342476|❌|❌|❌|❌|❌|❌|
|392|6742773178|❌|❌|❌|❌|❌|❌|
|393|6476663854|❌|❌|❌|❌|❌|❌|
|394|6670469064|❌|❌|❌|❌|❌|❌|
|395|6447508479|❌|❌|❌|❌|❌|❌|
|396|6470958985|❌|❌|❌|❌|❌|❌|
|397|6445875391|❌|❌|❌|❌|❌|❌|
|398|6443923265|❌|❌|❌|❌|❌|❌|
|399|6739839815|❌|❌|❌|❌|❌|❌|
|400|6505052301|❌|❌|❌|❌|❌|❌|
|401|6642649684|❌|❌|❌|❌|❌|❌|
|402|6738784092|❌|❌|❌|❌|❌|❌|
|403|6450724928|❌|❌|❌|❌|❌|❌|
|404|6740814979|❌|❌|❌|❌|❌|❌|
|405|6456886656|❌|❌|❌|❌|❌|❌|
|406|6498623389|❌|❌|❌|❌|❌|❌|
|407|6738342400|❌|❌|❌|❌|❌|❌|
|408|6744355637|❌|❌|❌|❌|❌|❌|
|409|6476064417|❌|❌|❌|❌|❌|❌|
|410|6463710522|❌|❌|❌|❌|❌|❌|
|411|6468572535|❌|❌|❌|❌|❌|❌|
|412|6471947612|❌|❌|❌|❌|❌|❌|
|413|6480501528|❌|❌|❌|❌|❌|❌|
|414|6714479204|❌|❌|❌|❌|❌|❌|
|415|6740349666|❌|❌|❌|❌|❌|❌|
|416|6473097811|❌|❌|❌|❌|❌|❌|
|417|6463616555|❌|❌|❌|❌|❌|❌|
|418|6477835115|❌|❌|❌|❌|❌|❌|
|419|6449003064|❌|❌|❌|❌|❌|❌|
|420|6670199903|❌|❌|❌|❌|❌|❌|
|421|6505058041|❌|❌|❌|❌|❌|❌|
|422|6744445187|❌|❌|❌|❌|❌|❌|
|423|6469419567|❌|❌|❌|❌|❌|❌|
|424|6444400410|❌|❌|❌|❌|❌|❌|
|425|6474616013|❌|❌|❌|❌|❌|❌|
|426|6471594918|❌|❌|❌|❌|❌|❌|
|427|6686394372|❌|❌|❌|❌|❌|❌|
|428|6740471827|❌|❌|❌|❌|❌|❌|
|429|1481853033|Strongbox Pro|Strongbox Pro|Strongbox Pro|Strongbox Pro|Strongbox Pro|Strongbox Pro|
|430|1581140954|Noir - 为Safari添加深色模式|Noir - Dark Mode for Safari|Noir - Dark Mode for Safari|Noir - Dark Mode for Safari|Noir - Dark Mode for Safari|Noir - Dark Mode for Safari|
|431|1592917505|Noir – 为Safari添加深色模式|Noir – Dark Mode for Safari|Noir – Dark Mode for Safari|Noir – Dark Mode for Safari|Noir – Dark Mode for Safari|Noir – Dark Mode for Safari|
|432|1591620171|Stay for Safari - 浏览器伴侣|Stay for Safari - 瀏覽器伴侶|Stay for Safari - 瀏覽器伴侶|Stay for Safari - 瀏覽器伴侶|Stay for Safari|Stay for Safari|
|433|1438243180|Dark Reader for Safari|Dark Reader for Safari|Dark Reader for Safari|Dark Reader for Safari|Dark Reader for Safari|Dark Reader for Safari|
|434|625206080|❌|Tomb Raider|Tomb Raider|Tomb Raider|Tomb Raider|Tomb Raider|
|435|1108032375|❌|Rise of the Tomb Raider™|Rise of the Tomb Raider™|Rise of the Tomb Raider™|Rise of the Tomb Raider™|Rise of the Tomb Raider™|
|436|1439569401|❌|Shadow of the Tomb Raider|Shadow of the Tomb Raider|Shadow of the Tomb Raider|Shadow of the Tomb Raider|Shadow of the Tomb Raider|
|437|6459738231|❌|Lies of P|Lies of P|Lies of P|Lies of P|Lies of P|
|438|1441532941|❌|神界：原罪2|神界：原罪2|神界：原罪2|Divinity: Original Sin 2|Divinity: Original Sin 2|
|439|6449748961|❌|DEATH STRANDING DIRECTOR'S CUT|DEATH STRANDING DIRECTOR'S CUT|DEATH STRANDING DIRECTOR'S CUT|DEATH STRANDING DIRECTOR'S CUT|DEATH STRANDING DIRECTOR'S CUT|
|440|6499559693|iStat Menus 7|iStat Menus 7|iStat Menus 7|iStat Menus 7|iStat Menus 7|iStat Menus 7|
|441|6475002485|❌|Reeder.|Reeder.|Reeder.|Reeder.|Reeder.|
|442|1198176727|Controller for HomeKit|Controller for HomeKit|Controller for HomeKit|Controller for HomeKit|Controller for HomeKit|Controller for HomeKit|
|443|904280696|Things 3|Things 3|Things 3|Things 3|Things 3|Things 3|
|444|1055511498|Day One 日記：私人日記|Day One|Day One|Day One|Day One|Day One|
|445|1208145167|Picsew - 滚动截图 & 长图拼接|Picsew - 滾動截圖 & 長圖拼接|Picsew - 滾動截圖 & 長圖拼接|Picsew - 滾動截圖 & 長圖拼接|Picsew - Scrollshot & Collage|Picsew - Scrollshot & Collage|
|446|1444636541|Photomator|Photomator|Photomator|Photomator|Photomator – Photo Editor|Photomator|
|447|1444383602|Goodnotes 6：笔记，PDF，AI|Goodnotes 6：筆記，PDF，AI|Goodnotes 6：筆記，PDF，AI|Goodnotes 6：筆記，PDF，AI|Goodnotes 6: AI Notes & Docs|Goodnotes 6: AI Notes & Docs|
|448|1473785373|钱迹记账-无广告超快捷记账存钱&资产管理&预算|錢跡記帳 - 無廣告超快捷 & 資產管理 & 預算|錢跡記帳 - 無廣告超快捷 & 資產管理 & 預算|錢跡記帳 - 無廣告超快捷 & 資產管理 & 預算|Qianji - Ad-Free Bookkeeping|Qianji - Ad-Free Bookkeeping|
|449|1461652639|网络调试精灵|TCP UDP Ping  Socket 網絡調試助手|TCP UDP Ping  Socket 網絡調試助手|TCP UDP Ping  Socket 網絡調試助手|iSocketTool|iSocketTool|
|450|6499198824|蜂软扫描 - 全能扫描仪|ScanGo - PDF Document Scanner|ScanGo - PDF Document Scanner|ScanGo - PDF Document Scanner|ScanGo - PDF Document Scanner|ScanGo - PDF Document Scanner|
|451|1538124245|哪里哪里|where I put it|where I put it|where I put it|where I put it|where I put it|
|452|6446469093|口袋时钟 - StandBy待机Widget桌面翻页创意时钟|口袋時鐘-創意全屏精準錶盤懸浮顯示鎖屏桌面小組件手錶|口袋時鐘-創意全屏精準錶盤懸浮顯示鎖屏桌面小組件手錶|口袋時鐘-創意全屏精準錶盤懸浮顯示鎖屏桌面小組件手錶|Clock Pocket:standby widget|Clock Pocket:standby widget|
|453|1610668825|FyTube - 没有广告的 YouTube|FyTube -沒有廣告的 YouTube|FyTube -沒有廣告的 YouTube|FyTube -沒有廣告的 YouTube|FyTube - YouTube Without Ads|FyTube - YouTube Without Ads|
|454|1175912897|EverMemo印象便签|EverMemo印象便簽|EverMemo印象便簽|EverMemo印象便簽|EverMemo - Fastest Note|EverMemo|
|455|6504433140|LaxtTime - 日常记录/循环提醒/习惯养成/倒计时|LaxtTime|LaxtTime|LaxtTime|LaxtTime - Remember Last Time|LaxtTime - Remember Last Time|
|456|920133658|解剖和生理学|Anatomy & Physiology|Anatomy & Physiology|Anatomy & Physiology|Anatomy & Physiology|Anatomy & Physiology|
|457|6463851696|功德++ : 锁屏，Standby，桌面小组件都可以敲的木鱼|Zen++|Zen++|Zen++|Zen++|❌|
|458|1358237203|时间胶囊-寄往未来的信|時間膠囊-寄往未來的信|時間膠囊-寄往未來的信|時間膠囊-寄往未來的信|时间胶囊-寄往未来的信|时间胶囊-寄往未来的信|
|459|1316883372|音乐世界赛特斯2|❌|❌|❌|❌|❌|
|460|956086985|美元折纸|Dollar Bill Origami|Dollar Bill Origami|Dollar Bill Origami|Dollar Bill Origami|Dollar Bill Origami|
|461|1436481293|迷失岛3宇宙的尘埃|ISOLAND 3 Dust of the Universe|ISOLAND 3 Dust of the Universe|ISOLAND 3 Dust of the Universe|ISOLAND 3 Dust of the Universe|ISOLAND 3 Dust of the Universe|
|462|1422480068|Notes Writer Pro: 笔记和 PDF 标注|Notes Writer Pro 2025|Notes Writer Pro 2025|Notes Writer Pro 2025|Notes Writer Pro 2025|Notes Writer Pro 2025|
|463|6443915320|发条日签-好心情制造机|发条日签-好心情制造机|发条日签-好心情制造机|发条日签-好心情制造机|发条日签-好心情制造机|发条日签-好心情制造机|
|464|884153085|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|Remote, Mouse & Keyboard Pro|
|465|1065802380|Stream Music Player|Stream Music Player|Stream Music Player|Stream Music Player|Stream Music Player|Stream Music Player|
|466| ~~533055404~~ | ~~夜星 (Night Stars)~~ | ~~夜星 (Night Stars)~~ | ~~夜星 (Night Stars)~~ | ~~夜星 (Night Stars)~~ | ~~Night Stars~~ | ~~Night Stars~~ |
|467|1493379610|时光进度 - 进度管理&待办计划|時光進度 - 待辦事項四象限規劃及進度管理|時光進度 - 待辦事項四象限規劃及進度管理|時光進度 - 待辦事項四象限規劃及進度管理|bProgress - Manage Daily Tasks|bProgress - Manage Daily Tasks|
|468|1255627901|方便面 - 朋友圈图文排版好帮手|泡麵｜經典原味|泡麵｜經典原味|泡麵｜經典原味|Instant Noodles: Original|Instant Noodles: Original|
|469|1449020025|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|不玩手机-自律习惯养成记|
|470|1576004936|化学 - 元素周期表 2025|化學 - 元素週期表 2025|化學 - 元素週期表 2025|化學 - 元素週期表 2025|Chemistry Periodic Table 2025|Chemistry Periodic Table 2025|
|471|827740598|小牛计算器(高级版)|Xmart Calculator Pro|Xmart Calculator Pro|Xmart Calculator Pro|Xmart Calculator Pro|Xmart Calculator Pro|
|472|355460798|Inspire Pro|Inspire Pro|Inspire Pro|Inspire Pro|Inspire Pro|Inspire Pro|
|473|1595313870|瓦尔登 - 日程管理，一个就够|瓦爾登 - 終極個人管理工具|瓦爾登 - 終極個人管理工具|瓦爾登 - 終極個人管理工具|Walden - Calendar/ToDo/Notes|Walden - Calendar/ToDo/Notes|
|474|6449383791|GIF录制助手-录屏、裁剪、优化、生成一站式便捷体验|GIF Recorder-ImproveEfficiency|GIF Recorder-ImproveEfficiency|GIF Recorder-ImproveEfficiency|GIF Recorder-ImproveEfficiency|GIF Recorder-ImproveEfficiency|
|475|1587301632|全能记(录音,备忘,流水)|全能備忘錄|全能備忘錄|全能備忘錄|All In One Memo|All In One Memo|
|476|1464666446|我的足迹: GPS记录仪|我的足跡: GPS記錄儀|我的足跡: GPS記錄儀|我的足跡: GPS記錄儀|MyTracks: GPS Recorder|MyTracks: GPS Recorder|
|477|1665759338|坐在罐子里的人|❌|❌|❌|❌|❌|
|478|953426154|Be Focused Pro - Focus Timer|Be Focused Pro – 專工作學習番茄計時器|Be Focused Pro – 專工作學習番茄計時器|Be Focused Pro – 專工作學習番茄計時器|Be Focused Pro - Focus Timer|Be Focused Pro- Pomodoro Timer|
|479|1238778050|纪念碑谷2|❌|❌|❌|❌|❌|
|480|1020541183|电影精灵 - 专业视频编辑和电影制作|電影精靈 - 專業視頻編輯和電影製作|電影精靈 - 專業視頻編輯和電影製作|電影精靈 - 專業視頻編輯和電影製作|MovieSpirit - Movie Maker Pro|MovieSpirit - Movie Maker Pro|
|481|576718804|aTimeLogger - 时间记录工具|aTimeLogger 2 - 私人時間記錄儀&时间表|aTimeLogger 2 - 私人時間記錄儀&时间表|aTimeLogger 2 - 私人時間記錄儀&时间表|aTimeLogger Time Tracker|aTimeLogger Time Tracker|
|482|670400597|梁的挠度|樑的撓度|樑的撓度|樑的撓度|Deflection|Deflection|
|483|1400652313|冰钓大师|❌|❌|❌|❌|❌|
|484|1551596643|模拟地铁|❌|❌|❌|❌|❌|
|485|1437479513|逃脱者：困境突围|逃脱者：困境突围|逃脱者：困境突围|逃脱者：困境突围|❌|❌|
|486|1314212521|PPHub For GitHub - 开发者必备|PPHub For GitHub - Developer|PPHub For GitHub - Developer|PPHub For GitHub - Developer|PPHub For GitHub - Developer|PPHub For GitHub - Developer|
|487|1564383045|算法导论.助手|算法導論.助手|算法導論.助手|算法導論.助手|CLRS.Helper|CLRS.Helper|
|488|1380582804|手机帝国|手機帝國|手機帝國|手機帝國|Mobile Empire|Mobile Empire|
|489|6466390901|旋转音律 Rotaeno|❌|❌|❌|❌|❌|
|490|1596406400|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|黄鸭证件照-最美求职考试证照制作神器|
|491|598581396|Kingdom Rush Frontiers 塔防史诗冒险|Kingdom Rush Frontiers 塔防生存戰爭|Kingdom Rush Frontiers 塔防生存戰爭|Kingdom Rush Frontiers 塔防生存戰爭|Kingdom Rush Frontiers TD|Kingdom Rush Frontiers TD|
|492|1157863540|泰拉瑞亚|❌|❌|❌|❌|❌|
|493|1630541373|隐私相册-私密记忆，安心记录，安全保障隐藏秘密PRAM|Private Album - PRAM|Private Album - PRAM|Private Album - PRAM|Private Album - PRAM|Private Album - PRAM|
|494|1512838461|DayCircle - 倒数|DayCircle - 倒數|DayCircle - 倒數|DayCircle - 倒數|DayCircle - Day counter|DayCircle - Day counter|
|495|1400032769|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|Card.Note - 多彩卡片笔记|
|496| ~~460661291~~ | ~~安全笔记+ Pro~~ | ~~Safety Note+ Pro~~ | ~~Safety Note+ Pro~~ | ~~Safety Note+ Pro~~ | ~~Safety Note+ Pro~~ | ~~Safety Note+ Pro~~ |
|497| ~~505904421~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ | ~~AirDisk Pro~~ |
|498| ~~1527841661~~ | ~~沙盒星球~~ | ~~沙盒星球~~ | ~~沙盒星球~~ | ~~沙盒星球~~ | ~~Sandbox Planet~~ | ~~Sandbox Planet~~ |
|499|1159266744|双子 Gemini|雙子 Gemini|雙子 Gemini|雙子 Gemini|❌|❌|
|500|1453808408|恶果之地|Juicy Realm|Juicy Realm|Juicy Realm|Juicy Realm|Juicy Realm|
|501|1458460469|人类跌落梦境|❌|❌|❌|❌|❌|
|502|1481100296|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|BreatheIn: Calm Breathing|
|503| ~~431033044~~ | ~~Phone Drive - 云储存管理和文件共享~~ | ~~Phone Drive - 雲儲存管理和文件共享~~ | ~~Phone Drive - 雲儲存管理和文件共享~~ | ~~Phone Drive - 雲儲存管理和文件共享~~ | ~~Phone Drive: File Storage Sync~~ | ~~Phone Drive: File Storage Sync~~ |
|504|1309638846|Goodak 复古胶片相机 - 拍立得旅行摄影，拍照水印滤镜|Goodak 底片相機 - 復古即可拍，拍立得膠卷攝影|Goodak 底片相機 - 復古即可拍，拍立得膠卷攝影|Goodak 底片相機 - 復古即可拍，拍立得膠卷攝影|Vintage Camera - Goodak|Vintage Camera - Goodak|
|505|1618180398|照片同步-导出备份相册照片视频|照片同步-備份相冊照片視頻|照片同步-備份相冊照片視頻|照片同步-備份相冊照片視頻|PhotoSync-Backup your photos|PhotoSync-Backup your photos|
|506| ~~456637671~~ | ~~安全监控照片+视频Pro~~ | ~~安全監控照片+視頻Pro~~ | ~~安全監控照片+視頻Pro~~ | ~~安全監控照片+視頻Pro~~ | ~~Safety Photo+Video Pro~~ | ~~Safety Photo+Video Pro~~ |
|507|1453318714|Vostok — 创建美丽快拍页面|Vostok — 创建美丽快拍页面|Vostok — 创建美丽快拍页面|Vostok — 创建美丽快拍页面|Vostok — Story Maker|Vostok — Story Maker|
|508|931188326|DayCost|DayCost Pro - Personal Finance|DayCost Pro - Personal Finance|DayCost Pro - Personal Finance|DayCost Pro - Personal Finance|DayCost Pro - Personal Finance|
|509|6449930220|手表浏览器  Wafari|手表浏览器  Wafari|手表浏览器  Wafari|手表浏览器  Wafari|Wafari - Watch Browser|Wafari - Watch Browser|
|510| ~~818394449~~ | ~~时间轴-全球历史~~ | ~~时间轴-全球历史~~ | ~~时间轴-全球历史~~ | ~~时间轴-全球历史~~ | ~~Timeline - World history~~ | ~~Timeline - World history~~ |
|511|1391571907|Fine修图|Fine修圖|Fine修圖|Fine修圖|Fine - Photo Editor|Fine - Photo Editor|
|512|6499125531|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|完蛋！我被美女包围了！|
|513| ~~1485101937~~ | ~~Juice Watch~~ | ~~Juice Watch~~ | ~~Juice Watch~~ | ~~Juice Watch~~ | ~~Juice Watch~~ | ~~Juice Watch~~ |
|514|703265535|FocusDots · 专注于当下|FocusDots · 專注於當下|FocusDots · 專注於當下|FocusDots · 專注於當下|FocusDots · Focus What Matters|FocusDots · Focus What Matters|
|515|6479307181|灵体侦测器|靈體偵測器|靈體偵測器|靈體偵測器|Ghostly Detector|Ghostly Detector|
|516| ~~488674899~~ | ~~雨雷達-實時天氣圖。 亞洲和中國。°~~ | ~~雨雷達 ° -實時天氣圖~~ | ~~雨雷達 ° -實時天氣圖~~ | ~~雨雷達 ° -實時天氣圖~~ | ~~RAIN RADAR °- sky weather NOAA~~ | ~~RAIN RADAR ° live weather maps~~ |
|517|1636719674|锁屏启动 - 万能桌面小组件&灵动岛一键快捷指令手机捷径布局|鎖屏啟動 - 個人化桌面小工具＆靈動動畫，一鍵美化主螢幕佈局|鎖屏啟動 - 個人化桌面小工具＆靈動動畫，一鍵美化主螢幕佈局|鎖屏啟動 - 個人化桌面小工具＆靈動動畫，一鍵美化主螢幕佈局|Lock Launcher - Screen Widgets|Lock Launcher - Screen Widgets|
|518|1543163106|末剑二|❌|❌|❌|❌|❌|
|519|6443812780|我的水世界求生|❌|❌|❌|❌|❌|
|520|1344655035|蜡烛人|❌|❌|❌|❌|❌|
|521|6446614518|画中世界|❌|❌|❌|❌|❌|
|522|1159700098|去月球-To the Moon|去月球-To the Moon|去月球-To the Moon|去月球-To the Moon|To the Moon|To the Moon|
|523|1271620263|艾希 - ICEY|ICEY|ICEY|ICEY|ICEY|ICEY|
|524|1361473095|喵斯快跑|MuseDash|MuseDash|MuseDash|MuseDash|MuseDash|
|525|6476010032|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|拦截猫-垃圾短信电话拦截|
|526|510249014|水平仪 HD|水準管 HD|水準管 HD|水準管 HD|Level HD.|Level HD.|
|527|904237743|Things 3|Things 3|Things 3|Things 3|Things 3|Things 3|
|528|1622341132|iSleeper - 梦话鼾声记录与睡眠监测|iSleeper - 夢話鼾聲記錄與睡眠監測|iSleeper - 夢話鼾聲記錄與睡眠監測|iSleeper - 夢話鼾聲記錄與睡眠監測|iSleeper: Sleep Tracker|iSleeper: Sleep Tracker|
|529|900833042|Fliqlo|Fliqlo|Fliqlo|Fliqlo|Fliqlo|Fliqlo|
|530|1467880680|LEDot|LEDot|LEDot|LEDot|LEDot|LEDot - Realistic Portable LED|
|531|1455055663|皮皮虾专业版|❌|❌|❌|❌|❌|
|532|1595901138|NES 模拟器 - 吞食天地|Handheld Game - NES Emulator|Handheld Game - NES Emulator|Handheld Game - NES Emulator|Handheld Game - NES Emulator|Handheld Game - NES Emulator|
|533|1163515895|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账Pro-3秒钟快速记账|鲨鱼记账本Pro-管家理财必备工具|鲨鱼记账本Pro-管家理财必备工具|
|534|754105884|NightCap相机|NightCap相機|NightCap相機|NightCap相機|NightCap Camera|NightCap Camera|
|535|1642364007|海拔指南针|海拔指南针|海拔指南针|海拔指南针|Altitude Compass|Altitude Compass|
|536|1522215205|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|拒之-骚扰电话批量拦截助手|
|537|1484181693|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|截图超人 - 微商专用的营销助手截图神器|
|538|1117998129|2025人体解剖学图谱|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|Human Anatomy Atlas 2025|
|539|6444824570|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|ClashX - 服务监控面板|
|540|469338840|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|飞常准PRO-全球航班查询机票酒店预订|
|541|1197275827|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|金十数据专业版-为交易而生|
|542|578665578|Threema。安全的通讯工具|《Threema》- 安全即時通訊工具|《Threema》- 安全即時通訊工具|《Threema》- 安全即時通訊工具|Threema. The Secure Messenger|Threema. The Secure Messenger|
|543|1547418803|Incredibox - 好玩的音乐盒|❌|❌|❌|❌|❌|
|544|1210251567|SleepTown 睡眠小镇|SleepTown 睡眠小鎮|SleepTown 睡眠小鎮|SleepTown 睡眠小鎮|SleepTown|SleepTown|
|545|1080235640|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|CNU - 顶尖视觉精选|
|546|1658579911|小特钥匙 - 特斯拉蓝牙手表钥匙|小特钥匙 - 特斯拉蓝牙手表钥匙|小特钥匙 - 特斯拉蓝牙手表钥匙|小特钥匙 - 特斯拉蓝牙手表钥匙|XIAOTE - Tesla BLE Watch key|XIAOTE - Tesla BLE Watch key|
|547|1152396902|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|凤凰新闻(专业版)-头条新闻阅读平台|
|548|1633366918|Instant Lines|Instant Lines|Instant Lines|Instant Lines|Instant Lines|Instant Lines|
|549|6480159520|转录大师 - 录音转文字、实时离线转录|Whisper Pen - 語音轉文字|Whisper Pen - 語音轉文字|Whisper Pen - 語音轉文字|Whisper Pen - Speech to Text|Whisper Pen - Speech to Text|
|550|966489322|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|生辰 — 桌面时间小组件|
|551|898876435|Planit巧摄专业版：风光摄影计划神器|Planit巧攝專業版：风光攝影計劃神器|Planit巧攝專業版：风光攝影計劃神器|Planit巧攝專業版：风光攝影計劃神器|Planit Pro: Photo Planner|Planit Pro: Photo Planner|
|552|1062745479|HeartWatch: 心脏和活动监测器|HeartWatch: 監測心率|HeartWatch: 監測心率|HeartWatch: 監測心率|HeartWatch: Heart Rate Tracker|HeartWatch: Heart Rate Tracker|
|553|6476963352|万能生成器|万能生成器|万能生成器|万能生成器|万能生成器|万能生成器|
|554|1459076631|隐形守护者|隐形守护者|隐形守护者|❌|隐形守护者|❌|
|555|1660014964|飞越13号房|❌|❌|❌|❌|❌|
|556|730712409|ProCam - 专业相机|ProCam - 專業相機|ProCam - 專業相機|ProCam - 專業相機|ProCam - Pro Camera|ProCam - Pro Camera|
|557|6451239549|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|全网短剧大全-热门短剧抢先看|
|558|1633865171|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|獬豸 · 民法典 - 法律/司法解释/指导案例|
|559|1492395549|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|爱美剧-人人美剧天堂社区|❌|
|560|1661419573|atvTools|atvTools|atvTools|atvTools|atvTools|atvTools|
|561|6479683928|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|AMood - 你的健康生活好伙伴|
|562|6443798663|敲木鱼 - 打节拍敲音效解压神器|敲木魚|敲木魚|敲木魚|MuYu|MuYu|
|563|373454750|随手记Pro–个人家庭生意记账|隨手記Pro–個人家庭生意記帳|隨手記Pro–個人家庭生意記帳|隨手記Pro–個人家庭生意記帳|随手记Pro|随手记Pro–记账财务管理软件|
|564|916366645|Procreate Pocket|Procreate Pocket|Procreate Pocket|Procreate Pocket|Procreate Pocket|Procreate Pocket|
|565|1164801111|AutoSleep - 通过手表自动追踪睡眠|AutoSleep – 在手錶上追蹤睡眠|AutoSleep – 在手錶上追蹤睡眠|AutoSleep – 在手錶上追蹤睡眠|AutoSleep Track Sleep on Watch|AutoSleep Track Sleep on Watch|
|566|1625289361|空气投篮|AirBasketball - AuditoryAR|AirBasketball - AuditoryAR|AirBasketball - AuditoryAR|AirBasketball - AuditoryAR|AirBasketball - AuditoryAR|
|567|1261944766|Alook浏览器 - 8倍速|Alook瀏覽器 - 8倍速|Alook瀏覽器 - 8倍速|Alook瀏覽器 - 8倍速|Alook Browser - 8x Speed|Alook Browser - 8x Speed|
|568|866450515|Forest 专注森林 - 番茄钟学习计时器|Forest 專注森林 - 讀書專注番茄鐘|Forest 專注森林 - 讀書專注番茄鐘|Forest 專注森林 - 讀書專注番茄鐘|Forest: Focus for Productivity|Forest: Focus for Productivity|
|569|1600873673|炭炭背单词｜四六级考研等英语单词学习|炭炭背单词｜四六级考研等英语单词学习|炭炭背单词｜四六级考研等英语单词学习|❌|❌|❌|
|570|388624839|扫描全能王 - 官方出品1元畅用版，扫描PDF文件，文字识别|CamScanner+|CamScanner+|CamScanner+|CamScanner + | OCR Scanner|CamScanner + | PDF Scanner|
|571|768160271|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|航旅纵横PRO-官方机票、值机火车票接送机免税酒店|
|572|1439723850|时间规划局 - 倒计时与提醒事项|Countdown! Reminders and Timer|Countdown! Reminders and Timer|Countdown! Reminders and Timer|Countdown! Reminders and Timer|Countdown! Reminders and Timer|
|573|6447023668|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|爱韩剧 - 韩剧TV大全|
|574|6468843723|❌|GTA III – Definitive|GTA III – Definitive|GTA III – Definitive|GTA III – Definitive|GTA III – Definitive|
|575|6468845173|❌|GTA: Vice City – Definitive|GTA: Vice City – Definitive|GTA: Vice City – Definitive|GTA: Vice City – Definitive|GTA: Vice City – Definitive|
|576|6468845068|❌|GTA: San Andreas – 最終版|GTA: San Andreas – 最終版|GTA: San Andreas – 最終版|GTA: San Andreas – Definitive|GTA: San Andreas – Definitive|
|577|1631331207|❌|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|Hitman: Blood Money — Reprisal|
|578|1598130789|❌|Company of Heroes Collection|Company of Heroes Collection|Company of Heroes Collection|Company of Heroes Collection|Company of Heroes Collection|
|579|1085114709|Parallels Desktop|Parallels Desktop|Parallels Desktop|Parallels Desktop|Parallels Desktop|Parallels Desktop|
|580|6450262949|Longshot - 截图 & OCR文字识别|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|Longshot - Screenshot & OCR|
|581|6451498949|❌|Stray|Stray|Stray|Stray|Stray|
|582|1630403500|APTV|APTV|APTV|APTV|APTV|APTV|
|583|1552536109|PasteNow - 剪贴板工具|PasteNow - 剪貼簿工具|PasteNow - 剪貼簿工具|PasteNow - 剪貼簿工具|PasteNow - Instant Clipboard|PasteNow - Instant Clipboard|
|584|1558391784|Filebar|Filebar|Filebar|Filebar|Filebar - media player|Filebar - media player|
|585|1548711022|Barbee - 清理您的菜单栏图标|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|Barbee - Hide Menu Bar Items|
|586|1575588022|MenubarX - 强大的菜单栏浏览器|MenubarX - 強大的選單列瀏覽器|MenubarX - 強大的選單列瀏覽器|MenubarX - 強大的選單列瀏覽器|MenubarX - Floating Browser|MenubarX - Floating Browser|
|587|1630034110|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|Bob - 翻译和 OCR 工具|
|588|1009747025|zFuse - 影音播放器|zFuse - 影片播放器|zFuse - 影片播放器|zFuse - 影片播放器|zFuse - Video Player|zFuse - Video Player|
|589|1054505347|zFuse - 视频播放器|zFuse - 視頻播放器|zFuse - 視頻播放器|zFuse - 視頻播放器|zFuse - Media Player|zFuse - Media Player|
|590|1659622164|VidHub - 高清影片视频播放器，快速播放云盘网盘|VidHub -Video Library & Player|VidHub -Video Library & Player|VidHub -Video Library & Player|VidHub -Video Library & Player|VidHub -Video Library & Player|
|591|1136220934|Infuse - 智能视频播放器|Infuse - 智能視頻播放器|Infuse - 智能視頻播放器|Infuse - 智能視頻播放器|Infuse • Video Player|Infuse • Video Player|
|592|1476649036|帕斯卡契约|Pascal's Wager|Pascal's Wager|Pascal's Wager|Pascal's Wager|Pascal's Wager|
|593|1635315427|暖雪|❌|❌|❌|❌|❌|
|594|1523446532|重生细胞|❌|❌|❌|❌|❌|
|595|1389752090|❌|Dead Cells|Dead Cells|Dead Cells|Dead Cells|Dead Cells|
|596|1640627334|❌|Resident Evil Village for Mac|Resident Evil Village for Mac|Resident Evil Village for Mac|Resident Evil Village for Mac|Resident Evil Village for Mac|
|597|6450980545|❌|Resident Evil Village|Resident Evil Village|Resident Evil Village|Resident Evil Village|Resident Evil Village|
|598|6462360082|❌|Resident Evil 4|Resident Evil 4|Resident Evil 4|Resident Evil 4|Resident Evil 4|
|599|1620883955|❌|Little Nightmares|Little Nightmares|Little Nightmares|Little Nightmares|Little Nightmares|
|600|1606703078|❌|槍火重生|槍火重生|槍火重生|Gunfire Reborn|❌|
|601|1373575045|❌|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|
|602|1371965583|❌|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|The Gardens Between|
|603|6450877530|花园之间|❌|❌|❌|❌|❌|
|604|1601446687|❌|Streets of Rage 4|Streets of Rage 4|Streets of Rage 4|Streets of Rage 4|Streets of Rage 4|
|605|1587860402|❌|籠中窺夢|籠中窺夢|籠中窺夢|Moncage|Moncage|
|606|1584313012|笼中窥梦|❌|❌|❌|❌|❌|
|607|1465779286|❌|GRIS|GRIS|GRIS|GRIS|GRIS|
|608|1445379072|❌|GRIS|GRIS|GRIS|GRIS|GRIS|
|609|1521190840|格莉斯的旅程|❌|❌|❌|❌|❌|
|610|728293409|❌|紀念碑谷|紀念碑谷|紀念碑谷|Monument Valley|Monument Valley|
|611|1582832845|纪念碑谷|❌|❌|❌|❌|❌|
|612|1644917705|无处遁形：全网公敌|無處遁形：全網公敵|無處遁形：全網公敵|無處遁形：全網公敵|Cyber Manhunt|Cyber Manhunt|
|613|1369179088|❌|Grimvalor|Grimvalor|Grimvalor|Grimvalor|Grimvalor|
|614|1669723530|原界之罪|❌|❌|❌|❌|❌|
|615|481629890|❌|LIMBO by Playdead|LIMBO by Playdead|LIMBO by Playdead|LIMBO by Playdead|LIMBO by Playdead|
|616|656951157|❌|Playdead's LIMBO|Playdead's LIMBO|Playdead's LIMBO|Playdead's LIMBO|Playdead's LIMBO|
|617|886561127|❌|INSIDE by Playdead|INSIDE by Playdead|INSIDE by Playdead|INSIDE by Playdead|INSIDE by Playdead|
|618|1201642309|❌|Playdead's INSIDE|Playdead's INSIDE|Playdead's INSIDE|Playdead's INSIDE|Playdead's INSIDE|
|619|1529448980|❌|Reeder Classic.|Reeder Classic.|Reeder Classic.|Reeder Classic.|Reeder Classic.|
|620|1529445840|❌|Reeder Classic|Reeder Classic|Reeder Classic|Reeder Classic|Reeder Classic|
|621|1596063349|❌|Stash|Stash|Stash|Stash - Rule Based Proxy|Stash - Rule Based Proxy|
|622|6444029612|❌|Loon Lite|Loon Lite|Loon Lite|Loon Lite|Loon Lite|
|623|1373567447|❌|Loon|Loon|Loon|Loon|Loon|
|624|1442620678|❌|Surge 5|Surge 5|Surge 5|Surge 5|Surge 5|
|625|1443988620|❌|Quantumult X|Quantumult X|Quantumult X|Quantumult X|Quantumult X|
|626|932747118|❌|Shadowrocket|Shadowrocket|Shadowrocket|Shadowrocket|Shadowrocket|
|627|1642682818|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|熊猫吃短信2 - 垃圾短信拦截|
|628|1319191852|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|熊猫吃短信 - 垃圾短信过滤|
|629|1067198688|彩云天气Pro|彩云天气Pro|彩云天气Pro|彩云天气Pro|彩云天气Pro|彩云天气Pro|

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