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

## 制作中に出した指示 原文全件

最初の画像生成4件と、3D制作102件の全106件です。「続けて」などの短い返事や質問への回答も含め、原文のまま時系列で掲載しています。添付画像は記事の冒頭に掲載し、添付ファイルの管理情報は省略しています。日付は日本時間です。

<details>
<summary>ChatGPTで最初の画像生成（4件）</summary>
<ol start="1">
<li>
<blockquote><p>このキャラクターを3D VTuberモデルに起こしたい　そのためにまずは画像生成でリファレンスとなる3D画像を出したい　商業VTuberくらい衣装は豪華で印象は崩さず</p></blockquote>
</li>
<li>
<blockquote><p>両目開けて髪飾りはこれ</p></blockquote>
</li>
<li>
<blockquote><p>これTripoでそのままつかえる？</p></blockquote>
</li>
<li>
<blockquote><p>作って</p></blockquote>
</li>
</ol>
</details>

<details>
<summary>9月23日の制作（10件）</summary>
<ol start="5">
<li>
<blockquote><p>Tripoでこれ使って3D VTuberモデル作りたいな</p></blockquote>
</li>
<li>
<p><small>質問への回答</small></p>
<blockquote><p>VRM</p></blockquote>
</li>
<li>
<p><small>質問への回答</small></p>
<blockquote><p>アカウント作っといて Google SSO使えるなら使って　Gmailは勝手に使って良いよ</p></blockquote>
</li>
<li>
<blockquote><p>今Google ChromeでTripo開いてログインしといた</p></blockquote>
</li>
<li>
<p><small>質問への回答</small></p>
<blockquote><p>Proを自分で契約する（月額3,200円・自動更新／4枚・非公開で制作）</p></blockquote>
</li>
<li>
<blockquote><p>やっといた</p></blockquote>
</li>
<li>
<blockquote><p>やっぱ一回[https://www.tripo3d.ai/ja/blog/gpt-6-astra-3d-character-workflow](https://www.tripo3d.ai/ja/blog/gpt-6-astra-3d-character-workflow)の通りに作りたいかも、さっきの参照画像をボディ、頭部、髪に分解してる？</p></blockquote>
</li>
<li>
<blockquote><p>これ4面なくていいの</p></blockquote>
</li>
<li>
<blockquote><p>一体成形したやつの方が良さそうね、1回目のやつで進めて</p></blockquote>
</li>
<li>
<blockquote><p>髪の動きは自然になるようにね、BlenderはComputer useで細かい作業進めても良いからね</p></blockquote>
</li>
</ol>
</details>

<details>
<summary>9月24日の制作（33件）</summary>
<ol start="15">
<li>
<blockquote><p>髪の一部が顔の色になってるから直してね、髪と顔のポリゴンって分けた方がいいのかな</p></blockquote>
</li>
<li>
<blockquote><p>あと肌の色不健康になってるからどうにかしてね、あとComputer useでBlender確認とか細かいとこ操作とかしていいからね</p></blockquote>
</li>
<li>
<p><small>質問への回答</small></p>
<blockquote><p>ロック解除した</p></blockquote>
</li>
<li>
<blockquote><p>やっぱ3つのパーツで作ったやつ色々やった方がいい気がしてきた　3つのパーツのやつ首長すぎるから画像に合わせて</p></blockquote>
</li>
<li>
<blockquote><p>髪小さくね、元画像と合わせてね</p></blockquote>
</li>
<li>
<blockquote><p>続けて</p></blockquote>
</li>
<li>
<blockquote><p>顔以外にも肌色あるよね</p></blockquote>
</li>
<li>
<blockquote><p>パーツごとに分離して作り込んで完成度上げるとか出来る？</p></blockquote>
</li>
<li>
<blockquote><p>頂点数はさいてきかしつつやってね</p></blockquote>
</li>
<li>
<blockquote><p>続けて</p></blockquote>
</li>
<li>
<blockquote><p>顔周りふっくらして見える気がする、元絵に合わせてね</p></blockquote>
</li>
<li>
<blockquote><p>口開けてる姿をimagegenで作ってそれ参考に口の中作って</p></blockquote>
</li>
<li>
<blockquote><p>顎削りすぎて斜めからみたとき変では</p></blockquote>
</li>
<li>
<blockquote><p>元絵と見比べると髪が若干大きい？</p></blockquote>
</li>
<li>
<blockquote><p>頭と髪と体パーツの大きさとか位置関係とか元絵に合わせてね</p></blockquote>
</li>
<li>
<blockquote><p>3分割生成より頭+髪セットで生成の方がいい？</p></blockquote>
</li>
<li>
<blockquote><p>やってみて、3分割版は目が死んでるから目をいい感じにしてね</p></blockquote>
</li>
<li>
<blockquote><p>2分割の方が良さそうね</p></blockquote>
</li>
<li>
<blockquote><p>続けて、ハートの髪飾りは作り直しといて</p></blockquote>
</li>
<li>
<blockquote><p>完成度あげてね</p></blockquote>
</li>
<li>
<blockquote><p>続けて</p></blockquote>
</li>
<li>
<blockquote><p>続けて</p></blockquote>
</li>
<li>
<blockquote><p>VRM反映は都度しなくてもいいからね</p></blockquote>
</li>
<li>
<blockquote><p>リボンとか服とか独立したかざりは独立したポリゴンあって独立した色だと思うのだけどどう？</p></blockquote>
</li>
<li>
<blockquote><p>形がじゃぎじゃぎしてたりするのだけどimagegenでいい感じにしたのを参考に作り込んでね</p></blockquote>
</li>
<li>
<blockquote><p>独立パーツは取っても周りに違和感ない感じでね</p></blockquote>
</li>
<li>
<blockquote><p>あと色もいい感じに</p></blockquote>
</li>
<li>
<blockquote><p>ごめん1から作るの良くないね、戻して</p></blockquote>
</li>
<li>
<blockquote><p>顔の表情作り込みたい</p></blockquote>
</li>
<li>
<blockquote><p>商業モデル同等の表情差分欲しいな、あと目も動かしたい</p></blockquote>
</li>
<li>
<blockquote><p>表情はimagegen参考にしてね、眉毛崩れてる？</p></blockquote>
</li>
<li>
<blockquote><p>目が閉じてもまつ毛は消えないでね、目の可動はなんか切り取られたところが動かすと真っ白なのが違和感かも、目の範囲広く取って内部で動かすとか</p></blockquote>
</li>
<li>
<blockquote><p>くり抜く範囲せまい、目の範囲もっと横にあるよね</p></blockquote>
</li>
</ol>
</details>

<details>
<summary>9月25日の制作（37件）</summary>
<ol start="48">
<li>
<blockquote><p>目が明るすぎるから目の上の方に半透明で動かないシャドウを足したいかも？目尻ほど深く？</p></blockquote>
</li>
<li>
<blockquote><p>閉じたときにまつ毛細くなってるよね、あと横に長すぎるよね</p></blockquote>
</li>
<li>
<blockquote><p>目細くしたときに目の上と下で段差があるのが気になるな</p></blockquote>
</li>
<li>
<blockquote><p>シャドウの位置合ってる？白目と黒目部分だよ、あと顔の肌に直接影焼き込まれないでね、あと表情一覧ほしい</p></blockquote>
</li>
<li>
<blockquote><p>独立した影パーツは目の中だけだよ</p></blockquote>
</li>
<li>
<blockquote><p>表情一覧は画像で貼って、影の範囲が目尻までいってないよ、めの下半分は明るいよ</p></blockquote>
</li>
<li>
<blockquote><p>下半分はシャドウかからず明るくしてって言った</p></blockquote>
</li>
<li>
<blockquote><p>目の中の上の方明るくなっちゃってるところない？シャドウかかってる？</p></blockquote>
</li>
<li>
<blockquote><p>喜ぶときに上唇そりすぎて怖いかも、怒りと悲しみもっとがんばりたい</p></blockquote>
</li>
<li>
<blockquote><p>マテリアル設定とかできる？</p></blockquote>
</li>
<li>
<p><small>質問への回答</small></p>
<blockquote><p>立体感と布・金属の質感を強める</p></blockquote>
</li>
<li>
<blockquote><p>アニメ調な方が違和感ないな、あと太ももの輪っかが皮膚と境目ギザギザになってるの気になる</p></blockquote>
</li>
<li>
<blockquote><p>全体として肌が顔に比べて暗い、服の白が汚れて見えるのでimagegenで陰影なし生成した色味あててみて</p></blockquote>
</li>
<li>
<blockquote><p>流石にしろすぎ</p></blockquote>
</li>
<li>
<blockquote><p>もうちょい陰影みせてもいいか</p></blockquote>
</li>
<li>
<blockquote><p>VRMモデルVRoid hubにアップロードしといて</p></blockquote>
</li>
<li>
<blockquote><p>Chromeでログインしてたはず</p></blockquote>
</li>
<li>
<blockquote><p>限定効果とか出来るの</p></blockquote>
</li>
<li>
<blockquote><p>公開でいいや</p></blockquote>
</li>
<li>
<p><small>質問への回答</small></p>
<blockquote><p>同意して公開登録してよい</p></blockquote>
</li>
<li>
<blockquote><p>ダウンロードは可にしといて</p></blockquote>
</li>
<li>
<blockquote><p>足動かすとふとももあたり破綻するね、直して</p></blockquote>
</li>
<li>
<blockquote><p>口の中暗いのちょい怖いかも、あと笑ったときとか上唇が下に曲がらず上めに曲がって欲しいかも、あとスカート下の下着あたり破綻してそう</p></blockquote>
</li>
<li>
<blockquote><p>いや下着足覆いすぎ 下半身あたりTripoで独立して生成した方がいい？</p></blockquote>
</li>
<li>
<blockquote><p>じゃやって、下着の模様についてもimagegenで</p></blockquote>
</li>
<li>
<blockquote><p>直接つくるよりやきこみでよくね</p></blockquote>
</li>
<li>
<blockquote><p>投影か</p></blockquote>
</li>
<li>
<blockquote><p>3Dイメージ図生成して投影してって言ってる</p></blockquote>
</li>
<li>
<blockquote><p>ガーターベルト含めて作ってね、肌は元々のやつに馴染ませたい</p></blockquote>
</li>
<li>
<blockquote><p>やっぱ変になるな、Tripoで作って</p></blockquote>
</li>
<li>
<blockquote><p>足まで作っていいよ、靴は今までの使う感じ</p></blockquote>
</li>
<li>
<blockquote><p>なんかデザイン変わってね？</p></blockquote>
</li>
<li>
<blockquote><p>なんか旧部品ついてない？</p></blockquote>
</li>
<li>
<blockquote><p>毎回VRMとかあぷろどしなくていいよ</p></blockquote>
</li>
<li>
<blockquote><p>次はスカートより上の胴から肩周り生成し直したいな、腕は二の腕の肌が出てるところまで　胸元のリボンは分けて生成したいな　画像は4面要るかな</p></blockquote>
</li>
<li>
<blockquote><p>首周りから肩もうちょい合ったよね</p></blockquote>
</li>
<li>
<blockquote><p>もっと前あったよね</p></blockquote>
</li>
</ol>
</details>

<details>
<summary>9月26日の制作（11件）</summary>
<ol start="85">
<li>
<blockquote><p>うでほそすぎかも、前のやつと見比べて</p></blockquote>
</li>
<li>
<blockquote><p>変更前の腕と肩使った方がいいかも？</p></blockquote>
</li>
<li>
<blockquote><p>胸周りのサイズも変わってる？合わせてね</p></blockquote>
</li>
<li>
<blockquote><p>色々無理そうだから胴体取り替えは戻そうか</p></blockquote>
</li>
<li>
<blockquote><p>アップロードしといて</p></blockquote>
</li>
<li>
<blockquote><p>胸元のリボンの下の肌に黒が滲んでるのきになるな、あとまだスカート下の太ももあたり余分なポリゴンない？</p></blockquote>
</li>
<li>
<blockquote><p>やっぱ再度胴作ったやつ縮尺とかぴったり揃えたらつかえない？</p></blockquote>
</li>
<li>
<blockquote><p>腕まで新しいの使っていいよ</p></blockquote>
</li>
<li>
<blockquote><p>それ終わったらスカートも同様に再生成して、リボンは別生成で</p></blockquote>
</li>
<li>
<blockquote><p>やっぱ手まで含めて胴再生成かな、首まで生成して元の首とフィットさせて</p></blockquote>
</li>
<li>
<blockquote><p>絵は元の参照画像から1から作り直してね</p></blockquote>
</li>
</ol>
</details>

<details>
<summary>9月30日の制作（10件）</summary>
<ol start="96">
<li>
<blockquote><p>ちゃんとリグ入ってる？</p></blockquote>
</li>
<li>
<blockquote><p>破綻ない？</p></blockquote>
</li>
<li>
<blockquote><p>tripoってスマートuvとか利トポロジーとかできたっけ</p></blockquote>
</li>
<li>
<blockquote><p>リトぽって生成時より品質上がるの？</p></blockquote>
</li>
<li>
<blockquote><p>スカートとか揺れもの物理演算みたいなんできる？太ももぶつかっても動く的な</p></blockquote>
</li>
<li>
<blockquote><p>**肩・袖**：フリルのギザつきと肌色が混ざる箇所が残っています。これ直して欲しいな</p></blockquote>
</li>
<li>
<blockquote><p>他に滲んでるとこあったりする？</p></blockquote>
</li>
<li>
<blockquote><p>直してね、あと髪とか後ろの飾りも物理演算できる？</p></blockquote>
</li>
<li>
<blockquote><p>色合い胴が少し違っちゃって見えるかも</p></blockquote>
</li>
<li>
<blockquote><p>終わったらアップロードしてね</p></blockquote>
</li>
</ol>
</details>

<details>
<summary>10月1日の制作（1件）</summary>
<ol start="106">
<li>
<blockquote><p>クレジット表記設定ONにしといて、アバター名姫希ひめでついったー@himeki_princessURL載せといて</p></blockquote>
</li>
</ol>
</details>

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
