---
date: "2026-10-01"
title: "TripoとBlenderで姫希ひめの3Dモデルを作った"
tags: ["3D", "VTuber", "Blender", "Tripo"]
---

姫希ひめの4方向の参照画像から、TripoとBlenderで3Dモデルを作りました。Codexと一緒に生成・修正を繰り返し、表情と揺れを付けてVRoid Hubで公開しています。

全身を一回で作る、顔と髪を分ける、腕を残して胴だけ作る。どれも試してやり直しました。その過程を、画像中心に紹介します。

[VRoid Hubで姫希ひめを見る](https://hub.vroid.com/characters/2964447268666891023/models/3762699592295630385) · [Xの @himeki_princess](https://x.com/himeki_princess)

<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/full-body.png"><img src="/images/posts/himeki-hime-tripo-vrm/full-body.png" width="1000" height="1400" alt="胴の白い布の色合わせまで反映したBlender編集版。"></a>
  <figcaption>胴の白い布の色合わせまで反映したBlender編集版。</figcaption>
</figure>

画像はすべて実際の3Dモデルのレンダーです。初期の試作も含みます。タップすると大きく表示できます。

## 最初に失敗した3つの作り方

### 全身を一回で作る

全身の一体生成から始めましたが、髪に肌色が混ざったり、肌が不健康に見えたりしました。顔・髪・体の分離、色の補正、表情付けは別に必要で、今回は最終モデルへの採用を見送りました。

<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/monolithic-trial.png"><img src="/images/posts/himeki-hime-tripo-vrm/monolithic-trial.png" width="900" height="900" alt="一体版で分離と表情付けを試していた頃。公開版とは顔や髪の質感が違います。"></a>
  <figcaption>一体版で分離と表情付けを試していた頃。公開版とは顔や髪の質感が違います。</figcaption>
</figure>

### 顔と髪を分ける

体・頭・髪を別生成したら、首が長く、髪は小さくなりました。飾りの重複や後頭部の頭皮も見つかり、パーツ同士の寸法合わせに手間がかかりました。

<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/three-part-trial.png"><img src="/images/posts/himeki-hime-tripo-vrm/three-part-trial.png" width="1200" height="1200" alt="体・頭・髪を仮組みした3パーツ版。"></a>
  <figcaption>体・頭・髪を仮組みした3パーツ版。</figcaption>
</figure>

<div class="article-gallery">
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/neck-before.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/neck-before.jpg" width="1000" height="1000" alt="修正前：首が長く見える。"></a>
  <figcaption>修正前：首が長く見える。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/neck-after.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/neck-after.jpg" width="1000" height="1000" alt="修正後：頭と髪を約4.2cm下げた。"></a>
  <figcaption>修正後：頭と髪を約4.2cm下げた。</figcaption>
</figure>
</div>

首や髪を直し、動くVRMの試作までは進めましたが、最終的には頭と髪を一緒に生成した版へ切り替えました。

### 腕を残して胴だけ作る

既存の腕や袖につなぐ案も、胸・肩の比率や接続の調整が続き、一度元へ戻しました。胴を合わせ直し、生成した肩と上腕も使う案を経て、最後は袖・腕・手先までまとめて再生成しています。

<div class="article-gallery">
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/torso-original-arms.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/torso-original-arms.jpg" width="1100" height="1100" alt="途中案①：新しい胴を元の腕に合わせる。"></a>
  <figcaption>途中案①：新しい胴を元の腕に合わせる。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/torso-generated-arms.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/torso-generated-arms.jpg" width="1100" height="1100" alt="途中案②：肩と上腕も生成版へ。袖・前腕・手は元のまま。"></a>
  <figcaption>途中案②：肩と上腕も生成版へ。袖・前腕・手は元のまま。</figcaption>
</figure>
</div>

## ベースは「体＋頭と髪」に

頭と髪は一緒に生成し、Blenderで顔・毛束・飾りに分けました。生成時にまとめる単位と、編集するときの分け方は別に考えています。パーツ用の参照画像にはImagegenも使いました。

<div class="article-gallery">
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/two-part-front.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/two-part-front.jpg" width="960" height="1280" alt="2パーツ版の正面。衣装や飾りはこの後も修正。"></a>
  <figcaption>2パーツ版の正面。衣装や飾りはこの後も修正。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/two-part-side.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/two-part-side.jpg" width="960" height="1280" alt="同じ段階の側面。髪と体の位置関係を確認。"></a>
  <figcaption>同じ段階の側面。髪と体の位置関係を確認。</figcaption>
</figure>
</div>

## まばたき・口パク・表情

白目は頭に固定し、虹彩だけを動かす構造にしました。半目の段差や虹彩の飛び出しを直し、閉じたまつ毛も顔の表面に合わせています。

<div class="article-gallery">
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/half-blink.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/half-blink.jpg" width="900" height="900" alt="閉じる途中の半目を確認。"></a>
  <figcaption>閉じる途中の半目を確認。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/blink.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/blink.jpg" width="900" height="900" alt="閉眼時のまぶたとまつ毛を確認。"></a>
  <figcaption>閉眼時のまぶたとまつ毛を確認。</figcaption>
</figure>
</div>

<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/eye-detail.png"><img src="/images/posts/himeki-hime-tripo-vrm/eye-detail.png" width="1200" height="500" alt="目の上半分に影を追加。視線を動かしても影は頭側に固定。"></a>
  <figcaption>目の上半分に影を追加。視線を動かしても影は頭側に固定。</figcaption>
</figure>

口の中には歯と舌を追加。「暗すぎる口内」と「笑顔で下へ曲がる上唇」も直しました。

<div class="article-gallery">
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/mouth-before.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/mouth-before.jpg" width="1000" height="850" alt="修正前：口内が暗く、上唇が下へ曲がる。"></a>
  <figcaption>修正前：口内が暗く、上唇が下へ曲がる。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/mouth-after.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/mouth-after.jpg" width="1000" height="850" alt="修正後：口内を明るくし、上唇の形を調整。"></a>
  <figcaption>修正後：口内を明るくし、上唇の形を調整。</figcaption>
</figure>
</div>

<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/expressions.png"><img src="/images/posts/himeki-hime-tripo-vrm/expressions.png" width="1600" height="1510" alt="通常＋11種類の表情。9月25日時点の確認シートで、「VRM未更新」は当時の状態。後の公開版には反映済み。"></a>
  <figcaption>通常＋11種類の表情。9月25日時点の確認シートで、「VRM未更新」は当時の状態。後の公開版には反映済み。</figcaption>
</figure>

## 上半身とスカートを作り直す

上半身は首から手先まで再生成し、30本の指ボーンを合わせ直しました。腕上げや指曲げなど、17状態で変形を確認しています。

<div class="article-gallery">
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/upper-body.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/upper-body.jpg" width="1400" height="744" alt="腕・袖・手先まで作り直した上半身。"></a>
  <figcaption>腕・袖・手先まで作り直した上半身。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/finger-curl.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/finger-curl.jpg" width="900" height="900" alt="新しい手で指を曲げた確認画像。"></a>
  <figcaption>新しい手で指を曲げた確認画像。</figcaption>
</figure>
</div>

下半身も再生成し、左右で違うストッキングの高さを維持。スカートとエプロン、前後の大きなリボンは別途作り直し、脚が通るよう不要な面を取り除きました。

<div class="article-gallery">
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/skirt-front.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/skirt-front.jpg" width="1100" height="1100" alt="再生成したスカートとエプロンの正面。"></a>
  <figcaption>再生成したスカートとエプロンの正面。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/skirt-back.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/skirt-back.jpg" width="1100" height="1100" alt="背面。大きなリボンは独立したパーツ。"></a>
  <figcaption>背面。大きなリボンは独立したパーツ。</figcaption>
</figure>
</div>

## 飾り・フリル・白い布を整える

髪飾りを薄く整え、袖の角張りを修正。別生成でずれた肌色や布の白も、全身を見ながら合わせました。

<div class="article-gallery">
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/ornament-before.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/ornament-before.jpg" width="1000" height="1000" alt="修正前：厚みのあるハート飾り。"></a>
  <figcaption>修正前：厚みのあるハート飾り。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/ornament-after.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/ornament-after.jpg" width="1000" height="1000" alt="修正後：薄い縁と羽の形に調整。"></a>
  <figcaption>修正後：薄い縁と羽の形に調整。</figcaption>
</figure>
</div>

<div class="article-gallery">
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/sleeve-before.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/sleeve-before.jpg" width="1100" height="900" alt="修正前：袖口のフリルが角張っている。"></a>
  <figcaption>修正前：袖口のフリルが角張っている。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/sleeve-after.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/sleeve-after.jpg" width="1100" height="900" alt="修正後：局所的に頂点を増やして整えた。"></a>
  <figcaption>修正後：局所的に頂点を増やして整えた。</figcaption>
</figure>
</div>

<div class="article-gallery">
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/torso-color-before.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/torso-color-before.jpg" width="1100" height="1200" alt="修正前：胸元と袖が灰紫っぽい。"></a>
  <figcaption>修正前：胸元と袖が灰紫っぽい。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/torso-color-after.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/torso-color-after.jpg" width="1100" height="1200" alt="修正後：しわの陰影を残してスカートの白へ。"></a>
  <figcaption>修正後：しわの陰影を残してスカートの白へ。</figcaption>
</figure>
</div>

## 揺れを付けると、別の問題が見える

髪7系統、スカート12系統、背面リボン4系統のSpringBoneと、12個の当たり判定を設定しました。

<div class="article-gallery">
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/ribbon-rest.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/ribbon-rest.jpg" width="700" height="1000" alt="背面リボンの動作確認：開始時。"></a>
  <figcaption>背面リボンの動作確認：開始時。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/ribbon-motion.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/ribbon-motion.jpg" width="700" height="1000" alt="同じテストの途中。結び目を固定し、垂れた部分を動かす。"></a>
  <figcaption>同じテストの途中。結び目を固定し、垂れた部分を動かす。</figcaption>
</figure>
</div>

普通の脚上げでは改善しましたが、70度まで上げると貫通や引きつれが残りました。骨による簡易的な揺れなので、布全体の衝突を解いているわけではありません。

<div class="article-gallery">
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/high-knee-before.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/high-knee-before.jpg" width="760" height="850" alt="物理なし：脚がスカートを突き抜ける。"></a>
  <figcaption>物理なし：脚がスカートを突き抜ける。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/high-knee-after.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/high-knee-after.jpg" width="760" height="850" alt="物理あり：裾は上がるが、貫通と引きつれは残る。"></a>
  <figcaption>物理あり：裾は上がるが、貫通と引きつれは残る。</figcaption>
</figure>
</div>

## 細部でも失敗して戻した

- **衣装を一から作り直す案**は撤回。元の形を活かし、必要な部分から直しました。
- **長めのインナー**は太ももを覆いすぎたので取り消し。脚の形とウェイトも戻しました。
- **白さや光沢の強めすぎ**で布の陰影が消えました。白の混合を90%から62%へ下げ、柔らかいアニメ調に戻しました。

<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/white-rebalance.png"><img src="/images/posts/himeki-hime-tripo-vrm/white-rebalance.png" width="1430" height="1062" alt="左：白を強めた試作。右：陰影を戻した状態。9月25日の比較で、衣装と「VRM未更新」の表示は当時のもの。"></a>
  <figcaption>左：白を強めた試作。右：陰影を戻した状態。9月25日の比較で、衣装と「VRM未更新」の表示は当時のもの。</figcaption>
</figure>

- **古い下半身の残骸**を裏地と取り違えて残し、新しい脚の後ろに重ねてしまいました。背面と動作を見直し、1,128頂点を削除。
- **Blenderで動く口内が、途中のVRM 0.xでは無効に**。書き出し用シーンのドライバーを外して修正し、再読み込みでも確認しました。

## VRMで公開

色補正と目の影をVRMで使える形へ変換し、表情・視線・揺れを再読み込みとブラウザで確認。最新の公開モデルはVRM 1.0です。

部品のつなぎ目と、動かしたときの破綻に一番手がかかりました。極端なポーズ、配信アプリでの追従や負荷、ARKitの52チャンネル対応はまだ確認が残っています。

[姫希ひめの3Dモデルはこちら](https://hub.vroid.com/characters/2964447268666891023/models/3762699592295630385)。記事公開時点ではダウンロード可・クレジット必須、他の人のアバター利用と再配布は不可です。利用時はモデルページの最新条件を確認してください。
