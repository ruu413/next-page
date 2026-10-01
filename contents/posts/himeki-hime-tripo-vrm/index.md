---
date: "2026-10-01"
title: "AstraとTripoで作った姫希ひめの3Dモデル"
tags: ["3D", "VTuber", "Blender", "Tripo"]
---

ChatGPTで作った姫希ひめの参照画像から、TripoとBlenderで3Dモデルを作りました。CodexのAstraと一緒に生成・修正を繰り返し、表情と揺れを付けてVRoid Hubで公開しています。

全身参照を作り、部品ごとに3D化して、表情や揺れを調整しました。制作の流れを画像で追い、失敗した試作は最後にまとめています。

[VRoid Hubで姫希ひめを見る](https://hub.vroid.com/characters/2964447268666891023/models/3762699592295630385) · [Xの @himeki_princess](https://x.com/himeki_princess)

<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/full-body.png"><img src="/images/posts/himeki-hime-tripo-vrm/full-body.png" width="1000" height="1400" alt="胴の白い布の色合わせまで反映したBlender編集版。"></a>
  <figcaption>胴の白い布の色合わせまで反映したBlender編集版。</figcaption>
</figure>

「元画像」は最初に渡したイラスト、「生成画像」「入力」は画像生成の出力、それ以外は実際の3Dモデルのレンダーです。タップすると拡大できます。

## ChatGPTで最初の全身参照を作る

出発点は[最初の画像生成の会話](https://chatgpt.com/share/6abe2ae1-e9b0-83e8-8647-5d0128468bbe)。元のキャラクターの印象を保ち、衣装を豪華にした3D風の参照画像をChatGPTで作りました。

<div class="article-gallery">
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/original-character.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/original-character.jpg" width="400" height="400" alt="元画像：最初に渡した姫希ひめのイラスト。"></a>
  <figcaption>元画像：最初に渡した姫希ひめのイラスト。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/original-hairclip.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/original-hairclip.jpg" width="1280" height="1280" alt="元画像：形を指定したハートと羽の髪飾り。"></a>
  <figcaption>元画像：形を指定したハートと羽の髪飾り。</figcaption>
</figure>
</div>

両目を開け、髪飾りを指定画像に合わせて調整。その後、Tripo用に正面・左右・背面を別々の画像で用意しました。この4枚を、以後のデザインの基準にしています。

<div class="article-gallery">
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/original-front.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/original-front.jpg" width="960" height="1280" alt="生成画像：最初の全身参照・正面。"></a>
  <figcaption>生成画像：最初の全身参照・正面。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/original-left.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/original-left.jpg" width="960" height="1280" alt="生成画像：画面左を向いた側面。"></a>
  <figcaption>生成画像：画面左を向いた側面。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/original-back.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/original-back.jpg" width="960" height="1280" alt="生成画像：背面。"></a>
  <figcaption>生成画像：背面。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/original-right.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/original-right.jpg" width="960" height="1280" alt="生成画像：画面右を向いた側面。"></a>
  <figcaption>生成画像：画面右を向いた側面。</figcaption>
</figure>
</div>

## Imagegenの出力をTripoの入力にする

**ChatGPTで全身参照 → Imagegenで部品別の入力画像 → Tripoで3D化 → Blenderで調整。**

パーツごとに必要な形だけを描き分け、頭や上半身は4方向、下半身は前後、リボンは正面・側面をTripoへ入力しました。髪の長さや手の向きがずれたときは、入力画像の段階から直しています。

## ベースは「体＋頭と髪」に

頭と髪をまとめた4方向の画像をImagegenで作り、髪の長さを直してTripoへ入力しました。

<div class="article-gallery">
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/input-headhair-front.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/input-headhair-front.jpg" width="1254" height="1254" alt="入力：頭と髪をまとめた正面。"></a>
  <figcaption>入力：頭と髪をまとめた正面。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/input-headhair-left.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/input-headhair-left.jpg" width="1254" height="1254" alt="入力：頭と髪の左側。"></a>
  <figcaption>入力：頭と髪の左側。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/input-headhair-right.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/input-headhair-right.jpg" width="1254" height="1254" alt="入力：頭と髪の右側。"></a>
  <figcaption>入力：頭と髪の右側。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/input-headhair-back.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/input-headhair-back.jpg" width="1254" height="1254" alt="入力：頭と髪の背面。"></a>
  <figcaption>入力：頭と髪の背面。</figcaption>
</figure>
</div>

3D化後はBlenderで顔・毛束・飾りに分けました。下は体と組み合わせた実モデルです。

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

## 下半身を腰から足先まで再生成する

下半身はImagegenで前後2枚の参照を作り、Tripoで腰から足先までを別パーツとして生成しました。左右で異なるストッキングの高さ、片側のハート付きバンド、黒いリボンを指定。元絵ではスカートに隠れた腰回りは、画像生成で補っています。

<div class="article-gallery">
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/input-lower-body-front.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/input-lower-body-front.jpg" width="1086" height="1448" alt="入力：下半身の正面。左右非対称の脚衣装を維持。"></a>
  <figcaption>入力：下半身の正面。左右非対称の脚衣装を維持。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/input-lower-body-back.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/input-lower-body-back.jpg" width="1086" height="1448" alt="入力：下半身の背面。前後2枚をTripoへ渡した。"></a>
  <figcaption>入力：下半身の背面。前後2枚をTripoへ渡した。</figcaption>
</figure>
</div>

出力した3Dを股関節・膝・足首に合わせ、元の靴と足首の飾りを再利用。肌と白い布の色を合わせ、ストッキングの不要な黒線を消しました。腰から脚のウェイトをつなぎ、5種類のポーズで確認しています。

<div class="article-gallery">
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/lower-body-fitted.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/lower-body-fitted.jpg" width="1000" height="1400" alt="新しい下半身を組み込んだ段階。胴・スカートの再生成前。"></a>
  <figcaption>新しい下半身を組み込んだ段階。胴・スカートの再生成前。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/lower-body-step.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/lower-body-step.jpg" width="1000" height="1050" alt="脚を上げて、腰・太もも・飾りの変形を確認。"></a>
  <figcaption>脚を上げて、腰・太もも・飾りの変形を確認。</figcaption>
</figure>
</div>

## 上半身とスカートを作り直す

上半身は元の4枚に戻り、Imagegenで首から手先までの参照を作り直しました。左右の参照は手の向きもそろえてから使っています。

<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/input-upper-body.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/input-upper-body.jpg" width="1774" height="887" alt="入力：元の4枚から作り直した上半身の正面。今度は袖・腕・手先まで含めた。"></a>
  <figcaption>入力：元の4枚から作り直した上半身の正面。今度は袖・腕・手先まで含めた。</figcaption>
</figure>

Tripoで再生成し、30本の指ボーンを合わせ直しました。腕上げや指曲げなど、17状態で変形を確認しています。

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

スカートとエプロン、前後の大きなリボンも、Imagegenの参照から別々に3D化しました。

<div class="article-gallery">
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/input-skirt.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/input-skirt.jpg" width="1254" height="1254" alt="入力：リボンを外したスカートとエプロン。"></a>
  <figcaption>入力：リボンを外したスカートとエプロン。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/input-rear-bow.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/input-rear-bow.jpg" width="1086" height="1448" alt="入力：別パーツとして作る後ろリボン。"></a>
  <figcaption>入力：別パーツとして作る後ろリボン。</figcaption>
</figure>
</div>

Blenderで組み込み、脚が通るよう不要な面を取り除いた状態です。

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

## 髪・スカート・リボンに揺れを付ける

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

## VRMで公開

色補正と目の影をVRMで使える形へ変換し、表情・視線・揺れを再読み込みとブラウザで確認。最新の公開モデルはVRM 1.0です。

部品のつなぎ目と、動かしたときの破綻に一番手がかかりました。極端なポーズ、配信アプリでの追従や負荷、ARKitの52チャンネル対応はまだ確認が残っています。

[姫希ひめの3Dモデルはこちら](https://hub.vroid.com/characters/2964447268666891023/models/3762699592295630385)。記事公開時点ではダウンロード可・クレジット必須、他の人のアバター利用と再配布は不可です。利用時はモデルページの最新条件を確認してください。

## 制作中に出した指示（原文抜粋）

実際にChatGPTとAstraへ送った指示の一部です。表記はそのまま載せています。

**最初の画像生成**

> このキャラクターを3D VTuberモデルに起こしたい　そのためにまずは画像生成でリファレンスとなる3D画像を出したい　商業VTuberくらい衣装は豪華で印象は崩さず

**Tripoで制作開始**

> Tripoでこれ使って3D VTuberモデル作りたいな

**頭と髪の組み合わせ**

> 3分割生成より頭+髪セットで生成の方がいい？

**口の中も画像生成を参考に**

> 口開けてる姿をimagegenで作ってそれ参考に口の中作って

**下半身を作り直す範囲**

> 足まで作っていいよ、靴は今までの使う感じ

**上半身と参照画像を作り直す**

> やっぱ手まで含めて胴再生成かな、首まで生成して元の首とフィットさせて

> 絵は元の参照画像から1から作り直してね

**スカートとリボンを分ける**

> それ終わったらスカートも同様に再生成して、リボンは別生成で

**揺れと脚の当たり判定**

> スカートとか揺れもの物理演算みたいなんできる？太ももぶつかっても動く的な

## 失敗したところまとめ

### 全身を一回で作る

全身の一体生成から始めましたが、髪に肌色が混ざったり、肌が不健康に見えたりしました。顔・髪・体の分離、色の補正、表情付けは別に必要で、今回は最終モデルへの採用を見送りました。

<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/monolithic-trial.png"><img src="/images/posts/himeki-hime-tripo-vrm/monolithic-trial.png" width="900" height="900" alt="一体版で分離と表情付けを試していた頃。公開版とは顔や髪の質感が違います。"></a>
  <figcaption>一体版で分離と表情付けを試していた頃。公開版とは顔や髪の質感が違います。</figcaption>
</figure>

### 顔と髪を分ける

まずImagegenで頭と髪を分けた参照画像を作り、それぞれをTripoで3D化しました。

<div class="article-gallery">
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/input-head.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/input-head.jpg" width="1230" height="1278" alt="入力：髪を除いた頭部の正面。"></a>
  <figcaption>入力：髪を除いた頭部の正面。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/input-hair.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/input-hair.jpg" width="1206" height="1305" alt="入力：顔と体を除いた髪の正面。"></a>
  <figcaption>入力：顔と体を除いた髪の正面。</figcaption>
</figure>
</div>

体・頭・髪を組み合わせると、首が長く、髪は小さくなりました。飾りの重複や後頭部の頭皮も見つかり、寸法合わせに手間がかかりました。

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

胴中心の参照もImagegenで用意し、Tripoへ渡しました。

<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/input-torso.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/input-torso.jpg" width="1254" height="1254" alt="入力：胴中心の正面。肩と短い上腕を含み、袖・前腕・手は除外。"></a>
  <figcaption>入力：胴中心の正面。肩と短い上腕を含み、袖・前腕・手は除外。</figcaption>
</figure>

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

### 下半身の試作と古いパーツの取り残し

長めのインナーは太ももを覆いすぎたため取り消し。短い下着をBlenderで補う案も採用せず、Tripoで下半身を作り直しました。入力画像が左右対称の花柄やおそろいの太ももバンドに寄った案も、元の衣装と違うため作り直しています。

さらに、古い下半身の断片を裏地と取り違えて残していました。脚を動かすとその場に残るのを見つけ、1,128頂点を削除しました。

<div class="article-gallery">
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/lower-body-remnants-before.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/lower-body-remnants-before.jpg" width="1000" height="1000" alt="修正前：新しい脚の後ろに古いパーツが残る。"></a>
  <figcaption>修正前：新しい脚の後ろに古いパーツが残る。</figcaption>
</figure>
<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/lower-body-remnants-after.jpg"><img src="/images/posts/himeki-hime-tripo-vrm/lower-body-remnants-after.jpg" width="1000" height="1000" alt="修正後：残骸を除去。新しい脚と元の靴は保持。"></a>
  <figcaption>修正後：残骸を除去。新しい脚と元の靴は保持。</figcaption>
</figure>
</div>

### 衣装・色・書き出しでもやり直した

- **衣装を一から作り直す案**は撤回。元の形を活かし、必要な部分から直しました。
- **白さや光沢の強めすぎ**で布の陰影が消えました。白の混合を90%から62%へ下げ、柔らかいアニメ調に戻しました。

<figure>
  <a href="/images/posts/himeki-hime-tripo-vrm/white-rebalance.png"><img src="/images/posts/himeki-hime-tripo-vrm/white-rebalance.png" width="1430" height="1062" alt="左：白を強めた試作。右：陰影を戻した状態。9月25日の比較で、衣装と「VRM未更新」の表示は当時のもの。"></a>
  <figcaption>左：白を強めた試作。右：陰影を戻した状態。9月25日の比較で、衣装と「VRM未更新」の表示は当時のもの。</figcaption>
</figure>

- **Blenderで動く口内が、途中のVRM 0.xでは無効に**。書き出し用シーンのドライバーを外して修正し、再読み込みでも確認しました。

### 大きく脚を上げると貫通が残った

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
