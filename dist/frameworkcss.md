
# Cấu trúc class theo framework
```text
[<MQ>:][layer:]<Thuộc tính>[selector]
```
- & Liên kết thuộc tính với nhau
- ; Thay cho dấu cách của các giá trị, và selector

## 1. Diễn giải
-  **[ < MQ > : ]: xs, sm, md, lg, xl, 2xl**
	  + xs: max-width: 575px
	  + sm: min-width: 576px
	  + md: min-width: 768px
	  + lg: min-width: 992px
	  + xl: min-width: 1200px
	  + 2xl: min-width: 1400px

-  [layer:] <số> Trong đó số: 1-19, số càng cao sự ưu càng lớn. VD: 1c#000 => layer = 1

-  <Thuộc tính> Bắt buộc, Được định nghĩa theo cấu trúc:    

    ```text
    <Viết tắt tên thuộc tính>[Sự ưu tiên]<Giá trị>
    ```
	+  <Viết tắt tên thuộc tính>: là ký  thường được quy ước 
	+ [Sự ưu tiên>] !
	+ <Giá trị>    
		=> #<mã màu>   
		=> --<Tên biến>   
		=> {<Biểu thức>}    
		=> Chuỗi ký tự (Có một ký tự đầu Viết Hoa), đại diện cho từ tắt của giá trị hoặc đầy đủ (Phải tên không có ký tự -, dấu cách).      
		Ví dụ:    
		 - dF => d: display, F: flex => dF {display: flex;}
		 - d!F => d: display, F: flex, ! ưu tiên => d!F {display: flex!importan;}
		 - dFlex => d: display, Flex : flex => dFlex{display: flex}

## 2. Các biến màu

```css
   --c-black: #303030;
    --c-dgreen: #043C39;
    --c-lgreen: #9BCE39;
    --c-blue: #1062E5;
    --c-yellow: #FBBC05;
    --c-red: #EA4335;
    --c-white: #FFFFFF;
    --c-s-black: #565656;
    --c-s-dgreen: #33605E;
    --c-s-lgreen: #BDDB84;
    --c-s-blue: #3C7EE8;
    --c-t-black: #1A1A1A;
    --c-t-dgreen: #002A28;
    --c-t-lgreen: #7DBE01;
    --c-t-blue: #004BC2;
    --c-q-black: #C9C9CF;
    --c-q-dgreen: #C0CCD1;
    --c-q-lgreen: #DFE9D1;
    --c-q-blue: #C3D3F4;
    --c-black-rgba: 48, 48, 48, 1;
    --c-dgreen-rgba: 4, 60, 57, 1;
    --c-lgreen-rgba: 155, 206, 57, 1;
    --c-blue-rgba: 16, 98, 229, 1;
    --c-yellow-rgba: 251, 188, 5, 1;
    --c-red-rgba: 234, 67, 53, 1;
    --c-white-rgba: 255, 255, 255, 1;
    --c-s-black-rgba: 86, 86, 86, 1;
    --c-s-dgreen-rgba: 51, 96, 94, 1;
    --c-s-lgreen-rgba: 189, 219, 132, 1;
    --c-s-blue-rgba: 60, 126, 232, 1;
    --c-t-black-rgba: 26, 26, 26, 1;
    --c-t-dgreen-rgba: 0, 42, 40, 1;
    --c-t-lgreen-rgba: 125, 190, 1, 1;
    --c-t-blue-rgba: 0, 75, 194, 1;
    --c-q-black-rgba: 201, 201, 207, 1;
    --c-q-dgreen-rgba: 192, 204, 209, 1 ;
    --c-q-lgreen-rgba: 223, 233, 209, 1;
    --c-q-blue-rgba: 195, 211, 244, 1;
    --fs-4xl: 48px;
   --fs-3xl: 40px;
   --fs-2xl: 32px;
   --fs-xl: 24px;
   --fs-lg: 20px;
   --fs-m: 16px;
   --fs-s: 13px;

```
## 3. Định nghĩa các thuộc tính
- **wlc** Viết tắt cho thuộc tính: **-webkit-line-clamp**  một số class mặc định:

```css
   + wlc{-webkit-line-clamp:3;}
```
        
- **wtfc** Viết tắt cho thuộc tính: **-webkit-text-fill-color** 

- **wts** Viết tắt cho thuộc tính: **-webkit-text-stroke** 

- **wtsc** Viết tắt cho thuộc tính: **-webkit-text-stroke-color** 

- **wtsw** Viết tắt cho thuộc tính: **-webkit-text-stroke-width**  một số class mặc định:

```css
   + wtsw{-webkit-text-stroke-width:thin;}
   + wtswM{-webkit-text-stroke-width:medium;}
   + wtswT{-webkit-text-stroke-width:thick;}
```
        
- **acc** Viết tắt cho thuộc tính: **accent-color**  một số class mặc định:

```css
   + acc{accent-color:auto;}
   + accU{accent-color:unset;}
```
        
- **ac** Viết tắt cho thuộc tính: **align-content**  một số class mặc định:

```css
   + ac{align-content:center;}
   + acS{align-content:start;}
   + acE{align-content:end;}
   + acFs{align-content:flex-start;}
   + acFe{align-content:flex-end;}
   + acN{align-content:normal;}
   + acB{align-content:baseline;}
   + acFb{align-content:first baseline;}
   + acLb{align-content:last baseline;}
   + acSp{align-content:space-between;}
   + acSa{align-content:space-around;}
   + acSe{align-content:space-evenly;}
   + acSt{align-content:stretch;}
   + acSc{align-content:safe center;}
   + acUc{align-content:unsafe center;}
```
        
- **ai** Viết tắt cho thuộc tính: **align-items**  một số class mặc định:

```css
   + ai{align-items:stretch;}
   + aiN{align-items:normal;}
   + aiC{align-items:center;}
   + aiS{align-items:start;}
   + aiE{align-items:end;}
   + aiFs{align-items:flex-start;}
   + aiFe{align-items:flex-end;}
   + aiSs{align-items:self-start;}
   + aiSe{align-items:self-end;}
   + aiB{align-items:baseline;}
   + aiFb{align-items:first baseline;}
   + aiLb{align-items:last baseline;}
   + aiSc{align-items:safe center;}
   + aiUc{align-items:unsafe center;}
```
        
- **as** Viết tắt cho thuộc tính: **align-self**  một số class mặc định:

```css
   + as{align-self:auto;}
   + asN{align-self:normal;}
   + asC{align-self:center;}
   + asS{align-self:start;}
   + asE{align-self:end;}
   + asSs{align-self:self-start;}
   + asSe{align-self:self-end;}
   + asFs{align-self:flex-start;}
   + asFe{align-self:flex-end;}
   + asB{align-self:baseline;}
   + asFb{align-self:first baseline;}
   + asLb{align-self:last baseline;}
   + asSt{align-self:stretch;}
   + asSc{align-self:safe center;}
   + asUc{align-self:unsafe center;}
```
        
- **a** Viết tắt cho thuộc tính: **all** 

- **ani** Viết tắt cho thuộc tính: **animation** 

- **anic** Viết tắt cho thuộc tính: **animation-composition**  một số class mặc định:

```css
   + anic{animation-composition:replace;}
   + anicR{animation-composition:replace;}
   + anicA{animation-composition:add;}
   + anicAc{animation-composition:accumulate;}
   + anicRa{animation-composition:replace, add;}
   + anicAac{animation-composition:add, accumulate;}
   + anicRaac{animation-composition:replace, add, accumulate;}
```
        
- **anide** Viết tắt cho thuộc tính: **animation-delay**  một số class mặc định:

```css
   + anide{animation-delay:250ms;}
```
        
- **anidi** Viết tắt cho thuộc tính: **animation-direction**  một số class mặc định:

```css
   + anidi{animation-direction:normal;}
   + anidiR{animation-direction:reverse;}
   + anidiA{animation-direction:alternate;}
   + anidiAr{animation-direction:alternate-reverse;}
   + anidiNr{animation-direction:normal, reverse;}
   + anidiArn{animation-direction:alternate, reverse, normal;}
```
        
- **anidu** Viết tắt cho thuộc tính: **animation-duration**  một số class mặc định:

```css
   + anidu{animation-duration:750ms;}
```
        
- **anifm** Viết tắt cho thuộc tính: **animation-fill-mode**  một số class mặc định:

```css
   + anifm{animation-fill-mode:both;}
   + anifmN{animation-fill-mode:none;}
   + anifmF{animation-fill-mode:forwards;}
   + anifmB{animation-fill-mode:backwards;}
   + anifmNb{animation-fill-mode:none, backwards;}
   + anifmFbn{animation-fill-mode:both, forwards, none;}
```
        
- **aniic** Viết tắt cho thuộc tính: **animation-iteration-count**  một số class mặc định:

```css
   + aniic{animation-iteration-count:infinite;}
```
        
- **anin** Viết tắt cho thuộc tính: **animation-name**  một số class mặc định:

```css
   + anin{animation-name:bounce;}
   + aninN{animation-name:None;}
   + aninS{animation-name:slide;}
```
        
- **anips** Viết tắt cho thuộc tính: **animation-play-state**  một số class mặc định:

```css
   + anipsP{animation-play-state:paused;}
   + anipsR{animation-play-state:running;}
```
        
- **anitf** Viết tắt cho thuộc tính: **animation-timing-function**  một số class mặc định:

```css
   + anitf{animation-timing-function:ease;}
   + anitfEi{animation-timing-function:ease-in;}
   + anitfEo{animation-timing-function:ease-out;}
   + anitfEio{animation-timing-function:ease-in-out;}
   + anitfL{animation-timing-function:linear;}
   + anitfSs{animation-timing-function:step-start;}
   + anitfSe{animation-timing-function:step-end;}
```
        
- **ap** Viết tắt cho thuộc tính: **appearance**  một số class mặc định:

```css
   + ap{appearance:auto;}
   + apN{appearance:none;}
   + apMb{appearance:menulist-button;}
   + apTf{appearance:textfield;}
   + apB{appearance:button;}
   + apC{appearance:checkbox;}
```
        
- **ar** Viết tắt cho thuộc tính: **aspect-ratio**  một số class mặc định:

```css
   + ar{aspect-ratio:auto;}
   + arA{aspect-ratio:auto;}
   + arS{aspect-ratio:1 / 1;}
   + arV{aspect-ratio:16 / 9;}
```
        
- **bkdf** Viết tắt cho thuộc tính: **backdrop-filter**  một số class mặc định:

```css
   + bkdf{backdrop-filter:none;}
```
        
- **bkfv** Viết tắt cho thuộc tính: **backface-visibility**  một số class mặc định:

```css
   + bkfv{backface-visibility:visible;}
   + bkfvH{backface-visibility:hidden;}
```
        
- **bg** Viết tắt cho thuộc tính: **background** 

- **bga** Viết tắt cho thuộc tính: **background-attachment**  một số class mặc định:

```css
   + bga{background-attachment:scroll;}
   + bgaS{background-attachment:scroll;}
   + bgaF{background-attachment:fixed;}
   + bgaL{background-attachment:local;}
```
        
- **bgbm** Viết tắt cho thuộc tính: **background-blend-mode**  một số class mặc định:

```css
   + bgbm{background-blend-mode:normal;}
   + bgbmN{background-blend-mode:normal;}
   + bgbmM{background-blend-mode:multiply;}
   + bgbmS{background-blend-mode:screen;}
   + bgbmO{background-blend-mode:overlay;}
   + bgbmD{background-blend-mode:darken;}
   + bgbmL{background-blend-mode:lighten;}
   + bgbmCd{background-blend-mode:color-dodge;}
   + bgbmI{background-blend-mode:color-burn;}
   + bgbmHl{background-blend-mode:hard-light;}
   + bgbmSl{background-blend-mode:soft-light;}
   + bgbmDi{background-blend-mode:difference;}
   + bgbmE{background-blend-mode:exclusion;}
   + bgbmH{background-blend-mode:hue;}
   + bgbmSa{background-blend-mode:saturation;}
   + bgbmC{background-blend-mode:color;}
   + bgbmLu{background-blend-mode:luminosity;}
```
        
- **bgcl** Viết tắt cho thuộc tính: **background-clip**  một số class mặc định:

```css
   + bgcl{background-clip:border-box;}
   + bgclBb{background-clip:border-box;}
   + bgclPb{background-clip:padding-box;}
   + bgclCb{background-clip:content-box;}
   + bgclT{background-clip:text;}
```
        
- **bgc** Viết tắt cho thuộc tính: **background-color**  một số class mặc định:

```css
   + bgc{background-color:transparent;}
   + bgcT{background-color:transparent;}
   + bgcC{background-color:currentcolor;}
```
        
- **bgi** Viết tắt cho thuộc tính: **background-image**  một số class mặc định:

```css
   + bgiN{background-image:none;}
```
        
- **bgo** Viết tắt cho thuộc tính: **background-origin**  một số class mặc định:

```css
   + bgo{background-origin:padding-box;}
   + bgoBb{background-origin:border-box;}
   + bgoPb{background-origin:padding-box;}
   + bgoCb{background-origin:content-box;}
```
        
- **bgp** Viết tắt cho thuộc tính: **background-position**  một số class mặc định:

```css
   + bgp{background-position:0% 0%;}
   + bgpT{background-position:top;}
   + bgpB{background-position:bottom;}
   + bgpL{background-position:left;}
   + bgpR{background-position:right;}
   + bgpC{background-position:center;}
   + bgpLt{background-position:left top;}
   + bgpCt{background-position:center top;}
   + bgpRt{background-position:right top;}
   + bgpLc{background-position:left center;}
   + bgpCc{background-position:center center;}
   + bgpRc{background-position:right center;}
   + bgpLb{background-position:left bottom;}
   + bgpCb{background-position:center bottom;}
   + bgpRb{background-position:right bottom;}
```
        
- **bgpx** Viết tắt cho thuộc tính: **background-position-x**  một số class mặc định:

```css
   + bgpx{background-position-x:center;}
   + bgpxL{background-position-x:left;}
   + bgpxR{background-position-x:right;}
   + bgpxC{background-position-x:center;}
```
        
- **bgpy** Viết tắt cho thuộc tính: **background-position-y**  một số class mặc định:

```css
   + bgpy{background-position-y:center;}
   + bgpyT{background-position-y:top;}
   + bgpyB{background-position-y:bottom;}
   + bgpyC{background-position-y:center;}
```
        
- **bgr** Viết tắt cho thuộc tính: **background-repeat**  một số class mặc định:

```css
   + bgr{background-repeat:repeat;}
   + bgrR{background-repeat:repeat;}
   + bgrX{background-repeat:repeat-x;}
   + bgrY{background-repeat:repeat-y;}
   + bgrS{background-repeat:space;}
   + bgrRn{background-repeat:round;}
   + bgrN{background-repeat:no-repeat;}
   + bgrRs{background-repeat: repeat space;}
   + bgrRr{background-repeat:repeat repeat;}
   + bgrNr{background-repeat:no-repeat round;}
```
        
- **bgs** Viết tắt cho thuộc tính: **background-size**  một số class mặc định:

```css
   + bgs{background-size:cover;}
   + bgsA{background-size:auto;}
   + bgsC{background-size:contain;}
```
        
- **blks** Viết tắt cho thuộc tính: **block-size** 

- **bd** Viết tắt cho thuộc tính: **border**  một số class mặc định:

```css
   + bd{border:solid;}
   + bdN{border:none;}
   + bdH{border:hidden;}
   + bdD{border:dotted;}
   + bdDs{border:dashed;}
   + bdDb{border:double;}
   + bdG{border:groove;}
   + bdR{border:ridge;}
   + bdI{border:inset;}
   + bdO{border:outset;}
```
        
- **bdblk** Viết tắt cho thuộc tính: **border-block** 

- **bdblc** Viết tắt cho thuộc tính: **border-block-color** 

- **bdble** Viết tắt cho thuộc tính: **border-block-end** 

- **bdblec** Viết tắt cho thuộc tính: **border-block-end-color** 

- **bdbles** Viết tắt cho thuộc tính: **border-block-end-style**  một số class mặc định:

```css
   + bdbles{border-block-end-style:solid;}
   + bdblesN{border-block-end-style:none;}
   + bdblesH{border-block-end-style:hidden;}
   + bdblesD{border-block-end-style:dotted;}
   + bdblesDs{border-block-end-style:dashed;}
   + bdblesDb{border-block-end-style:double;}
   + bdblesG{border-block-end-style:groove;}
   + bdblesR{border-block-end-style:ridge;}
   + bdblesI{border-block-end-style:inset;}
   + bdblesO{border-block-end-style:outset;}
```
        
- **bdblew** Viết tắt cho thuộc tính: **border-block-end-width** 

- **bdbls** Viết tắt cho thuộc tính: **border-block-start** 

- **bdblsc** Viết tắt cho thuộc tính: **border-block-start-color** 

- **bdblss** Viết tắt cho thuộc tính: **border-block-start-style**  một số class mặc định:

```css
   + bdblss{border-block-start-style:solid;}
   + bdblssN{border-block-start-style:none;}
   + bdblssH{border-block-start-style:hidden;}
   + bdblssD{border-block-start-style:dotted;}
   + bdblssDs{border-block-start-style:dashed;}
   + bdblssDb{border-block-start-style:double;}
   + bdblssG{border-block-start-style:groove;}
   + bdblssR{border-block-start-style:ridge;}
   + bdblssI{border-block-start-style:inset;}
   + bdblssO{border-block-start-style:outset;}
```
        
- **bdblsw** Viết tắt cho thuộc tính: **border-block-start-width** 

- **bdblst** Viết tắt cho thuộc tính: **border-block-style**  một số class mặc định:

```css
   + bdblst{border-block-style:solid;}
   + bdblstN{border-block-style:none;}
   + bdblstH{border-block-style:hidden;}
   + bdblstD{border-block-style:dotted;}
   + bdblstDs{border-block-style:dashed;}
   + bdblstDb{border-block-style:double;}
   + bdblstG{border-block-style:groove;}
   + bdblstR{border-block-style:ridge;}
   + bdblstI{border-block-style:inset;}
   + bdblstO{border-block-style:outset;}
```
        
- **bdblwi** Viết tắt cho thuộc tính: **border-block-width** 

- **bdb** Viết tắt cho thuộc tính: **border-bottom** 

- **bdbc** Viết tắt cho thuộc tính: **border-bottom-color** 

- **bdblr** Viết tắt cho thuộc tính: **border-bottom-left-radius** 

- **bdbrr** Viết tắt cho thuộc tính: **border-bottom-right-radius** 

- **bdbst** Viết tắt cho thuộc tính: **border-bottom-style**  một số class mặc định:

```css
   + bdbst{border-bottom-style:solid;}
   + bdbstN{border-bottom-style:none;}
   + bdbstH{border-bottom-style:hidden;}
   + bdbstD{border-bottom-style:dotted;}
   + bdbstDs{border-bottom-style:dashed;}
   + bdbstDb{border-bottom-style:double;}
   + bdbstG{border-bottom-style:groove;}
   + bdbstR{border-bottom-style:ridge;}
   + bdbstI{border-bottom-style:inset;}
   + bdbstO{border-bottom-style:outset;}
```
        
- **bdbw** Viết tắt cho thuộc tính: **border-bottom-width**  một số class mặc định:

```css
   + bdbw{border-bottom-width:medium;}
   + bdbwT{border-bottom-width:thin;}
   + bdbwM{border-bottom-width:medium;}
   + bdbwTh{border-bottom-width:thick;}
```
        
- **bdcl** Viết tắt cho thuộc tính: **border-collapse**  một số class mặc định:

```css
   + bdcl{border-collapse:collapse;}
   + bdclS{border-collapse:separate;}
   + bdclC{border-collapse:collapse;}
```
        
- **bdc** Viết tắt cho thuộc tính: **border-color** 

- **bdeer** Viết tắt cho thuộc tính: **border-end-end-radius** 

- **bdesr** Viết tắt cho thuộc tính: **border-end-start-radius** 

- **bdimg** Viết tắt cho thuộc tính: **border-image** 

- **bdio** Viết tắt cho thuộc tính: **border-image-outset** 

- **bdir** Viết tắt cho thuộc tính: **border-image-repeat**  một số class mặc định:

```css
   + bdir{border-image-repeat:stretch;}
   + bdirSt{border-image-repeat:stretch;}
   + bdirR{border-image-repeat:repeat;}
   + bdirRn{border-image-repeat:round;}
   + bdirS{border-image-repeat:space;}
```
        
- **bdis** Viết tắt cho thuộc tính: **border-image-slice** 

- **bdisrc** Viết tắt cho thuộc tính: **border-image-source** 

- **bdiw** Viết tắt cho thuộc tính: **border-image-width** 

- **bdi** Viết tắt cho thuộc tính: **border-inline** 

- **bdic** Viết tắt cho thuộc tính: **border-inline-color** 

- **bdie** Viết tắt cho thuộc tính: **border-inline-end** 

- **bdiec** Viết tắt cho thuộc tính: **border-inline-end-color** 

- **bdies** Viết tắt cho thuộc tính: **border-inline-end-style** 

- **bdiew** Viết tắt cho thuộc tính: **border-inline-end-width** 

- **bdista** Viết tắt cho thuộc tính: **border-inline-start** 

- **bdisc** Viết tắt cho thuộc tính: **border-inline-start-color** 

- **bdiss** Viết tắt cho thuộc tính: **border-inline-start-style** 

- **bdisw** Viết tắt cho thuộc tính: **border-inline-start-width** 

- **bdistl** Viết tắt cho thuộc tính: **border-inline-style** 

- **bdinw** Viết tắt cho thuộc tính: **border-inline-width** 

- **bdl** Viết tắt cho thuộc tính: **border-left**  một số class mặc định:

```css
   + bdl{border-left:solid;}
   + bdlN{border-left:none;}
```
        
- **bdlc** Viết tắt cho thuộc tính: **border-left-color** 

- **bdls** Viết tắt cho thuộc tính: **border-left-style** 

- **bdlw** Viết tắt cho thuộc tính: **border-left-width**  một số class mặc định:

```css
   + bdlw{border-left-width:medium;}
   + bdlwT{border-left-width:thin;}
   + bdlwM{border-left-width:medium;}
   + bdlwTh{border-left-width:thick;}
```
        
- **bda** Viết tắt cho thuộc tính: **border-radius** 

- **bdr** Viết tắt cho thuộc tính: **border-right**  một số class mặc định:

```css
   + bdr{border-right:solid;}
   + bdrN{border-right:none;}
```
        
- **bdrc** Viết tắt cho thuộc tính: **border-right-color** 

- **bdrs** Viết tắt cho thuộc tính: **border-right-style**  một số class mặc định:

```css
   + bdrs{border-right-style:solid;}
   + bdrsN{border-right-style:none;}
   + bdrsH{border-right-style:hidden;}
   + bdrsDt{border-right-style:dotted;}
   + bdrsDs{border-right-style:dashed;}
   + bdrsS{border-right-style:solid;}
   + bdrsDb{border-right-style:double;}
   + bdrsG{border-right-style:groove;}
   + bdrsR{border-right-style:ridge;}
   + bdrsIn{border-right-style:inset;}
   + bdrsOut{border-right-style:outset;}
```
        
- **bdrw** Viết tắt cho thuộc tính: **border-right-width**  một số class mặc định:

```css
   + bdrw{border-right-width:medium;}
   + bdrwT{border-right-width:thin;}
   + bdrwM{border-right-width:medium;}
   + bdrwTh{border-right-width:thick;}
```
        
- **bdsp** Viết tắt cho thuộc tính: **border-spacing** 

- **bdser** Viết tắt cho thuộc tính: **border-start-end-radius** 

- **bdssr** Viết tắt cho thuộc tính: **border-start-start-radius** 

- **bds** Viết tắt cho thuộc tính: **border-style**  một số class mặc định:

```css
   + bds{border-style:solid;}
   + bdsN{border-style:none;}
   + bdsH{border-style:hidden;}
   + bdsDt{border-style:dotted;}
   + bdsDs{border-style:dashed;}
   + bdsS{border-style:solid;}
   + bdsDb{border-style:double;}
   + bdsG{border-style:groove;}
   + bdsR{border-style:ridge;}
   + bdsIn{border-style:inset;}
   + bdsOut{border-style:outset;}
```
        
- **bdt** Viết tắt cho thuộc tính: **border-top**  một số class mặc định:

```css
   + bdt{border-top:solid;}
   + bdtN{border-top:none;}
```
        
- **bdtc** Viết tắt cho thuộc tính: **border-top-color** 

- **bdtlr** Viết tắt cho thuộc tính: **border-top-left-radius** 

- **bdtrr** Viết tắt cho thuộc tính: **border-top-right-radius** 

- **bdts** Viết tắt cho thuộc tính: **border-top-style**  một số class mặc định:

```css
   + bdts{border-top-style:solid;}
   + bdtsN{border-top-style:none;}
   + bdtsH{border-top-style:hidden;}
   + bdtsDt{border-top-style:dotted;}
   + bdtsDs{border-top-style:dashed;}
   + bdtsS{border-top-style:solid;}
   + bdtsDb{border-top-style:double;}
   + bdtsG{border-top-style:groove;}
   + bdtsR{border-top-style:ridge;}
   + bdtsIn{border-top-style:inset;}
   + bdtsOut{border-top-style:outset;}
```
        
- **bdtw** Viết tắt cho thuộc tính: **border-top-width**  một số class mặc định:

```css
   + bdtw{border-top-width:medium;}
   + bdtwT{border-top-width:thin;}
   + bdtwM{border-top-width:medium;}
   + bdtwTh{border-top-width:thick;}
```
        
- **bdw** Viết tắt cho thuộc tính: **border-width**  một số class mặc định:

```css
   + bdw{border-width:medium;}
   + bdwT{border-width:thin;}
   + bdwM{border-width:medium;}
   + bdwTh{border-width:thick;}
```
        
- **b** Viết tắt cho thuộc tính: **bottom**  một số class mặc định:

```css
   + b{bottom:0px;}
   + bA{bottom:auto;}
```
        
- **bdbr** Viết tắt cho thuộc tính: **box-decoration-break**  một số class mặc định:

```css
   + bdbr{box-decoration-break:clone;}
   + bdbrC{box-decoration-break:clone;}
   + bdbrS{box-decoration-break:slice;}
```
        
- **bxshd** Viết tắt cho thuộc tính: **box-shadow** 

- **bxsz** Viết tắt cho thuộc tính: **box-sizing** 

- **brka** Viết tắt cho thuộc tính: **break-after** 

- **brkb** Viết tắt cho thuộc tính: **break-before** 

- **brki** Viết tắt cho thuộc tính: **break-inside** 

- **caps** Viết tắt cho thuộc tính: **caption-side** 

- **crtc** Viết tắt cho thuộc tính: **caret-color** 

- **clr** Viết tắt cho thuộc tính: **clear** 

- **clpp** Viết tắt cho thuộc tính: **clip-path** 

- **c** Viết tắt cho thuộc tính: **color**  một số class mặc định:

```css
   + cI{color:inherit;}
   + cC{color:currentColor;}
   + cT{color:transparent;}
```
        
- **cip** Viết tắt cho thuộc tính: **color-interpolation** 

- **csch** Viết tắt cho thuộc tính: **color-scheme** 

- **colc** Viết tắt cho thuộc tính: **column-count** 

- **colf** Viết tắt cho thuộc tính: **column-fill** 

- **colg** Viết tắt cho thuộc tính: **column-gap** 

- **colr** Viết tắt cho thuộc tính: **column-rule** 

- **colrc** Viết tắt cho thuộc tính: **column-rule-color** 

- **colrs** Viết tắt cho thuộc tính: **column-rule-style** 

- **colrw** Viết tắt cho thuộc tính: **column-rule-width** 

- **cols** Viết tắt cho thuộc tính: **column-span** 

- **colw** Viết tắt cho thuộc tính: **column-width** 

- **col** Viết tắt cho thuộc tính: **columns**  một số class mặc định:

```css
   + col{columns:auto;}
   + colA{columns:auto;}
```
        
- **cnt** Viết tắt cho thuộc tính: **contain** 

- **cntibs** Viết tắt cho thuộc tính: **contain-intrinsic-block-size** 

- **cntih** Viết tắt cho thuộc tính: **contain-intrinsic-height** 

- **cntiis** Viết tắt cho thuộc tính: **contain-intrinsic-inline-size** 

- **cntis** Viết tắt cho thuộc tính: **contain-intrinsic-size** 

- **ciw** Viết tắt cho thuộc tính: **contain-intrinsic-width** 

- **ctr** Viết tắt cho thuộc tính: **container** 

- **ctrn** Viết tắt cho thuộc tính: **container-name** 

- **ctrt** Viết tắt cho thuộc tính: **container-type** 

- **ctt** Viết tắt cho thuộc tính: **content** 

- **cntri** Viết tắt cho thuộc tính: **counter-increment** 

- **cntrr** Viết tắt cho thuộc tính: **counter-reset** 

- **cntrs** Viết tắt cho thuộc tính: **counter-set** 

- **cr** Viết tắt cho thuộc tính: **cursor**  một số class mặc định:

```css
   + cr{cursor:pointer;}
   + crA{cursor:auto;}
   + crD{cursor:default;}
   + crN{cursor:none;}
   + crCm{cursor:context-menu;}
   + crH{cursor:help;}
   + crPg{cursor:progress;}
   + crW{cursor:wait;}
   + crC{cursor:cell;}
   + crCr{cursor:crosshair;}
   + crT{cursor:text;}
   + crVt{cursor:vertical-text;}
   + crAl{cursor:alias;}
   + crCp{cursor:copy;}
   + crMo{cursor:move;}
   + crNd{cursor:no-drop;}
   + crNa{cursor:not-allowed;}
   + crGr{cursor:grab;}
   + crGb{cursor:grabbing;}
   + crAs{cursor:all-scroll;}
   + crColr{cursor:col-resize;}
   + crRr{cursor:row-resize;}
   + crNr{cursor:n-resize;}
   + crEr{cursor:e-resize;}
   + crSr{cursor:s-resize;}
   + crWr{cursor:w-resize;}
   + crNer{cursor:ne-resize;}
   + crSer{cursor:se-resize;}
   + crSwr{cursor:sw-resize;}
   + crEwr{cursor:ew-resize;}
   + crNsr{cursor:ns-resize;}
   + crNesw{cursor:nesw-resize;}
   + crNwse{cursor:nwse-resize;}
   + crZi{cursor:zoom-in;}
   + crZo{cursor:zoom-out;}
```
        
- **dir** Viết tắt cho thuộc tính: **direction** 

- **d** Viết tắt cho thuộc tính: **display**  một số class mặc định:

```css
   + d{display:block;}
   + dB{display:block;}
   + dIb{display:inline-block;}
   + dI{display:inline;}
   + dF{display:flex;}
   + dIf{display:inline-flex;}
   + dT{display:table;}
   + dIt{display:inline-table;}
   + dTcp{display:table-caption;}
   + dTcell{display:table-cell;}
   + dTcol{display:table-column;}
   + dTcolg{display:table-column-group;}
   + dTfg{display:table-footer-group;}
   + dThg{display:table-header-group;}
   + dTrg{display:table-row-group;}
   + dTr{display:table-row;}
   + dFr{display:flow-root;}
   + dG{display:grid;}
   + dIg{display:inline-grid;}
   + dC{display:contents;}
   + dLi{display:list-item;}
   + dN{display:none;}
```
        
- **empc** Viết tắt cho thuộc tính: **empty-cells** 

- **flt** Viết tắt cho thuộc tính: **filter**  một số class mặc định:

```css
   + flt{filter:none;}
   + fltN{filter:none;}
```
        
- **fx** Viết tắt cho thuộc tính: **flex**  một số class mặc định:

```css
   + fx{flex:auto;}
   + fx1{flex:1 1 0%;}
   + fxN{flex:none;}
   + fxI{flex:0 1 auto;}
   + fxA{flex:1 1 auto;}
```
        
- **fxb** Viết tắt cho thuộc tính: **flex-basis**  một số class mặc định:

```css
   + fxb{flex-basis:0;}
   + fxbA{flex-basis:auto;}
```
        
- **fxd** Viết tắt cho thuộc tính: **flex-direction**  một số class mặc định:

```css
   + fxd{flex-direction:row;}
   + fxdR{flex-direction:row;}
   + fxdRr{flex-direction:row-reverse;}
   + fxdC{flex-direction:column;}
   + fxdCr{flex-direction:column-reverse;}
```
        
- **fxf** Viết tắt cho thuộc tính: **flex-flow** 

- **fxg** Viết tắt cho thuộc tính: **flex-grow**  một số class mặc định:

```css
   + fxg{flex-grow:1;}
```
        
- **fxs** Viết tắt cho thuộc tính: **flex-shrink**  một số class mặc định:

```css
   + fxs{flex-shrink:0;}
```
        
- **fxw** Viết tắt cho thuộc tính: **flex-wrap**  một số class mặc định:

```css
   + fxw{flex-wrap:wrap;}
   + fxwW{flex-wrap:wrap;}
   + fxwWr{flex-wrap:wrap-reverse;}
   + fxwN{flex-wrap:nowrap;}
```
        
- **fl** Viết tắt cho thuộc tính: **float**  một số class mặc định:

```css
   + fl{float:none;}
   + flIs{float:inline-start;}
   + flIe{float:inline-end;}
   + flR{float:right;}
   + flL{float:left;}
   + flN{float:none;}
```
        
- **fn** Viết tắt cho thuộc tính: **font** 

- **ff** Viết tắt cho thuộc tính: **font-family**  một số class mặc định:

```css
   + ff{font-family:sans-serif;}
   + ffA{font-family:ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';}
   + ffS{font-family:ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;}
   + ffM{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;}
```
        
- **fnfs** Viết tắt cho thuộc tính: **font-feature-settings** 

- **fnk** Viết tắt cho thuộc tính: **font-kerning** 

- **fnlo** Viết tắt cho thuộc tính: **font-language-override** 

- **fnos** Viết tắt cho thuộc tính: **font-optical-sizing** 

- **fnp** Viết tắt cho thuộc tính: **font-palette** 

- **fns** Viết tắt cho thuộc tính: **font-size** 

- **fnsa** Viết tắt cho thuộc tính: **font-size-adjust** 

- **fnstr** Viết tắt cho thuộc tính: **font-stretch** 

- **fnsty** Viết tắt cho thuộc tính: **font-style** 

- **fnsyn** Viết tắt cho thuộc tính: **font-synthesis** 

- **fnsp** Viết tắt cho thuộc tính: **font-synthesis-position** 

- **fnssc** Viết tắt cho thuộc tính: **font-synthesis-small-caps** 

- **fnss** Viết tắt cho thuộc tính: **font-synthesis-style** 

- **fnsw** Viết tắt cho thuộc tính: **font-synthesis-weight** 

- **fnv** Viết tắt cho thuộc tính: **font-variant** 

- **fnva** Viết tắt cho thuộc tính: **font-variant-alternates** 

- **fnvc** Viết tắt cho thuộc tính: **font-variant-caps** 

- **fnvea** Viết tắt cho thuộc tính: **font-variant-east-asian** 

- **fnve** Viết tắt cho thuộc tính: **font-variant-emoji** 

- **fnvl** Viết tắt cho thuộc tính: **font-variant-ligatures** 

- **fnvn** Viết tắt cho thuộc tính: **font-variant-numeric** 

- **fnvp** Viết tắt cho thuộc tính: **font-variant-position** 

- **fnvs** Viết tắt cho thuộc tính: **font-variation-settings** 

- **fw** Viết tắt cho thuộc tính: **font-weight**  một số class mặc định:

```css
   + fw{font-weight:100;}
```
        
- **fca** Viết tắt cho thuộc tính: **forced-color-adjust** 

- **gap** Viết tắt cho thuộc tính: **gap**  một số class mặc định:

```css
   + gap{gap:0px;}
```
        
- **g** Viết tắt cho thuộc tính: **grid** 

- **ga** Viết tắt cho thuộc tính: **grid-area** 

- **gac** Viết tắt cho thuộc tính: **grid-auto-columns**  một số class mặc định:

```css
   + gac{grid-auto-columns:auto;}
   + gacA{grid-auto-columns:auto;}
   + gacMic{grid-auto-columns:min-content;}
   + gacMac{grid-auto-columns:max-content;}
   + gacMm{grid-auto-columns:minmax(0, 1fr);}
```
        
- **gaf** Viết tắt cho thuộc tính: **grid-auto-flow**  một số class mặc định:

```css
   + gaf{grid-auto-flow:row;}
   + gafR{grid-auto-flow:row;}
   + gafC{grid-auto-flow:column;}
   + gafD{grid-auto-flow:dense;}
   + gafRd{grid-auto-flow:row dense;}
   + gafCd{grid-auto-flow:column dense;}
```
        
- **gar** Viết tắt cho thuộc tính: **grid-auto-rows**  một số class mặc định:

```css
   + gar{grid-auto-rows:auto;}
   + garA{grid-auto-rows:auto;}
   + garMic{grid-auto-rows:min-content;}
   + garMac{grid-auto-rows:max-content;}
   + garMm{grid-auto-rows:minmax(0, 1fr);}
```
        
- **gc** Viết tắt cho thuộc tính: **grid-column**  một số class mặc định:

```css
   + gc{grid-column:auto;}
   + gcA{grid-column:auto;}
   + gcF{grid-column:1 / -1;}
```
        
- **gce** Viết tắt cho thuộc tính: **grid-column-end**  một số class mặc định:

```css
   + gce{grid-column-end:auto;}
   + gceA{grid-column-end:auto;}
```
        
- **gcs** Viết tắt cho thuộc tính: **grid-column-start**  một số class mặc định:

```css
   + gcs{grid-column-start:auto;}
   + gcsA{grid-column-start:auto;}
```
        
- **gr** Viết tắt cho thuộc tính: **grid-row**  một số class mặc định:

```css
   + gr{grid-row:auto;}
   + grA{grid-row:auto;}
   + grF{grid-row:1 / -1;}
```
        
- **gre** Viết tắt cho thuộc tính: **grid-row-end**  một số class mặc định:

```css
   + gre{grid-row-end:auto;}
   + greA{grid-row-end:auto;}
```
        
- **grs** Viết tắt cho thuộc tính: **grid-row-start**  một số class mặc định:

```css
   + grs{grid-row-start:auto;}
   + grsA{grid-row-start:auto;}
```
        
- **gt** Viết tắt cho thuộc tính: **grid-template** 

- **gta** Viết tắt cho thuộc tính: **grid-template-areas** 

- **gtc** Viết tắt cho thuộc tính: **grid-template-columns**  một số class mặc định:

```css
   + gtc{grid-template-columns:repeat(12, minmax(0, 1fr));}
   + gtcN{grid-template-columns:none;}
   + gtcS{grid-template-columns:subgrid;}
```
        
- **gtr** Viết tắt cho thuộc tính: **grid-template-rows**  một số class mặc định:

```css
   + gtr{grid-template-rows:repeat(12, minmax(0, 1fr));}
   + gtrN{grid-template-rows:none;}
   + gtrS{grid-template-rows:subgrid;}
```
        
- **hp** Viết tắt cho thuộc tính: **hanging-punctuation** 

- **h** Viết tắt cho thuộc tính: **height**  một số class mặc định:

```css
   + h{height:auto;}
   + hA{height:auto;}
   + hMic{height:min-content;}
   + hMac{height:max-content;}
   + hFc{height:fit-content;}
```
        
- **hc** Viết tắt cho thuộc tính: **hyphenate-character** 

- **hlc** Viết tắt cho thuộc tính: **hyphenate-limit-chars** 

- **hyp** Viết tắt cho thuộc tính: **hyphens**  một số class mặc định:

```css
   + hyp{hyphens:none;}
   + hypA{hyphens:auto;}
   + hypN{hyphens:none;}
   + hypM{hyphens:manual;}
```
        
- **imgo** Viết tắt cho thuộc tính: **image-orientation** 

- **imgr** Viết tắt cho thuộc tính: **image-rendering** 

- **ins** Viết tắt cho thuộc tính: **inline-size** 

- **i** Viết tắt cho thuộc tính: **inset**  một số class mặc định:

```css
   + i{inset:0px;}
```
        
- **iblk** Viết tắt cho thuộc tính: **inset-block** 

- **ibe** Viết tắt cho thuộc tính: **inset-block-end** 

- **ibsta** Viết tắt cho thuộc tính: **inset-block-start** 

- **ii** Viết tắt cho thuộc tính: **inset-inline** 

- **iie** Viết tắt cho thuộc tính: **inset-inline-end**  một số class mặc định:

```css
   + iie{inset-inline-end:0px;}
```
        
- **iis** Viết tắt cho thuộc tính: **inset-inline-start**  một số class mặc định:

```css
   + iis{inset-inline-start:0px;}
```
        
- **is** Viết tắt cho thuộc tính: **isolation**  một số class mặc định:

```css
   + is{isolation:auto;}
   + isI{isolation:isolate;}
   + isA{isolation:auto;}
```
        
- **jc** Viết tắt cho thuộc tính: **justify-content**  một số class mặc định:

```css
   + jc{justify-content:start;}
   + jcC{justify-content:center;}
   + jcS{justify-content:start;}
   + jcE{justify-content:end;}
   + jcFs{justify-content:flex-start;}
   + jcFe{justify-content:flex-end;}
   + jcL{justify-content:left;}
   + jcR{justify-content:right;}
   + jcN{justify-content:normal;}
   + jcSp{justify-content:space-between;}
   + jcSa{justify-content:space-around;}
   + jcSe{justify-content:space-evenly;}
   + jcSt{justify-content:stretch;}
   + jcSc{justify-content:safe center;}
   + jcUc{justify-content:unsafe center;}
```
        
- **ji** Viết tắt cho thuộc tính: **justify-items**  một số class mặc định:

```css
   + ji{justify-items:stretch;}
   + jiN{justify-items:normal;}
   + jiSt{justify-items:stretch;}
   + jiC{justify-items:center;}
   + jiS{justify-items:start;}
   + jiE{justify-items:end;}
   + jiFs{justify-items:flex-start;}
   + jiFe{justify-items:flex-end;}
   + jiSs{justify-items:self-start;}
   + jiSe{justify-items:self-end;}
   + jiL{justify-items:left;}
   + jiR{justify-items:right;}
   + jiB{justify-items:baseline;}
   + jiFb{justify-items:first baseline;}
   + jiLb{justify-items:last baseline;}
   + jiLr{justify-items:legacy right;}
   + jiLl{justify-items:legacy left;}
   + jiLc{justify-items:legacy center;}
   + jiSc{justify-items:safe center;}
   + jiUc{justify-items:unsafe center;}
```
        
- **js** Viết tắt cho thuộc tính: **justify-self**  một số class mặc định:

```css
   + js{justify-self:auto;}
   + jsA{justify-self:auto;}
   + jsN{justify-self:normal;}
   + jsSt{justify-self:stretch;}
   + jsC{justify-self:center;}
   + jsS{justify-self:start;}
   + jsE{justify-self:end;}
   + jsFs{justify-self:flex-start;}
   + jsFe{justify-self:flex-end;}
   + jsSs{justify-self:self-start;}
   + jsSe{justify-self:self-end;}
   + jsL{justify-self:left;}
   + jsR{justify-self:right;}
   + jsB{justify-self:baseline;}
   + jsSc{justify-self:safe center;}
   + jsUc{justify-self:unsafe center;}
```
        
- **l** Viết tắt cho thuộc tính: **left**  một số class mặc định:

```css
   + l{left:0px;}
```
        
- **lts** Viết tắt cho thuộc tính: **letter-spacing**  một số class mặc định:

```css
   + lts{letter-spacing:normal;}
   + ltsN{letter-spacing:normal;}
```
        
- **lbrk** Viết tắt cho thuộc tính: **line-break** 

- **lh** Viết tắt cho thuộc tính: **line-height**  một số class mặc định:

```css
   + lh{line-height:1.5;}
```
        
- **ls** Viết tắt cho thuộc tính: **list-style**  một số class mặc định:

```css
   + ls{list-style:none;}
   + lsI{list-style:inside;}
   + lsDi{list-style:disc;}
   + lsC{list-style:circle;}
   + lsS{list-style:square;}
   + lsDe{list-style:decimal;}
   + lsG{list-style:georgian;}
   + lsTci{list-style:trad-chinese-informal;}
   + lsK{list-style:kannada;}
```
        
- **lsi** Viết tắt cho thuộc tính: **list-style-image** 

- **lisp** Viết tắt cho thuộc tính: **list-style-position**  một số class mặc định:

```css
   + lisp{list-style-position:inside;}
   + lispI{list-style-position:inside;}
   + lispO{list-style-position:outside;}
```
        
- **lst** Viết tắt cho thuộc tính: **list-style-type**  một số class mặc định:

```css
   + lst{list-style-type:none;}
   + lstDi{list-style-type:disc;}
   + lstC{list-style-type:circle;}
   + lstS{list-style-type:square;}
   + lstDe{list-style-type:decimal;}
   + lstG{list-style-type:georgian;}
   + lstTci{list-style-type:trad-chinese-informal;}
   + lstK{list-style-type:kannada;}
```
        
- **m** Viết tắt cho thuộc tính: **margin** 

- **mx** Viết tắt cho thuộc tính: **margin-left;margin-right**  một số class mặc định:

```css
   + mx{margin-left:auto;margin-right:auto;}
   + mxA{margin-left:auto;margin-right:auto;}
```
        
- **my** Viết tắt cho thuộc tính: **margin-top;margin-bottom**  một số class mặc định:

```css
   + my{margin-top:auto;margin-bottom:auto;}
   + myA{margin-top:auto;margin-bottom:auto;}
```
        
- **mblk** Viết tắt cho thuộc tính: **margin-block** 

- **mbe** Viết tắt cho thuộc tính: **margin-block-end** 

- **mbsta** Viết tắt cho thuộc tính: **margin-block-start** 

- **mb** Viết tắt cho thuộc tính: **margin-bottom**  một số class mặc định:

```css
   + mb{margin-bottom:auto;}
   + mbA{margin-bottom:auto;}
```
        
- **min** Viết tắt cho thuộc tính: **margin-inline** 

- **mie** Viết tắt cho thuộc tính: **margin-inline-end** 

- **mista** Viết tắt cho thuộc tính: **margin-inline-start** 

- **ml** Viết tắt cho thuộc tính: **margin-left**  một số class mặc định:

```css
   + ml{margin-left:auto;}
   + mlA{margin-left:auto;}
```
        
- **mr** Viết tắt cho thuộc tính: **margin-right**  một số class mặc định:

```css
   + mr{margin-right:auto;}
   + mrA{margin-right:auto;}
```
        
- **mt** Viết tắt cho thuộc tính: **margin-top**  một số class mặc định:

```css
   + mt{margin-top:auto;}
   + mtA{margin-top:auto;}
```
        
- **msk** Viết tắt cho thuộc tính: **mask** 

- **mskb** Viết tắt cho thuộc tính: **mask-border** 

- **mskbm** Viết tắt cho thuộc tính: **mask-border-mode** 

- **mskbo** Viết tắt cho thuộc tính: **mask-border-outset** 

- **mskbr** Viết tắt cho thuộc tính: **mask-border-repeat** 

- **mskbs** Viết tắt cho thuộc tính: **mask-border-slice** 

- **mskbsrc** Viết tắt cho thuộc tính: **mask-border-source** 

- **mskbw** Viết tắt cho thuộc tính: **mask-border-width** 

- **mskc** Viết tắt cho thuộc tính: **mask-clip** 

- **mskcp** Viết tắt cho thuộc tính: **mask-composite** 

- **mski** Viết tắt cho thuộc tính: **mask-image** 

- **mskm** Viết tắt cho thuộc tính: **mask-mode** 

- **msko** Viết tắt cho thuộc tính: **mask-origin** 

- **mskp** Viết tắt cho thuộc tính: **mask-position** 

- **mskr** Viết tắt cho thuộc tính: **mask-repeat** 

- **msks** Viết tắt cho thuộc tính: **mask-size** 

- **mskt** Viết tắt cho thuộc tính: **mask-type** 

- **mtd** Viết tắt cho thuộc tính: **math-depth** 

- **mts** Viết tắt cho thuộc tính: **math-style** 

- **mbs** Viết tắt cho thuộc tính: **max-block-size** 

- **mh** Viết tắt cho thuộc tính: **max-height** 

- **wh** Viết tắt cho thuộc tính: **width;height**  một số class mặc định:

```css
   + wh{width:0px;height:0px;}
   + whMic{width:min-content;height:min-content;}
   + whMac{width:max-content;height:max-content;}
   + whFc{width:fit-content;height:fit-content;}
```
        
- **mis** Viết tắt cho thuộc tính: **max-inline-size** 

- **mw** Viết tắt cho thuộc tính: **max-width** 

- **mibs** Viết tắt cho thuộc tính: **min-block-size** 

- **mih** Viết tắt cho thuộc tính: **min-height**  một số class mặc định:

```css
   + mih{min-height:auto;}
   + mihA{min-height:auto;}
   + mihF{min-height:100%;}
   + mihMic{min-height:min-content;}
   + mihMac{min-height:max-content;}
   + mihFc{min-height:fit-content;}
```
        
- **misz** Viết tắt cho thuộc tính: **min-inline-size** 

- **miw** Viết tắt cho thuộc tính: **min-width**  một số class mặc định:

```css
   + miw{min-width:100%;}
   + miwF{min-width:100%;}
   + miwMic{min-width:min-content;}
   + miwMac{min-width:max-content;}
   + miwFc{min-width:fit-content;}
```
        
- **mbd** Viết tắt cho thuộc tính: **mix-blend-mode**  một số class mặc định:

```css
   + mbd{mix-blend-mode:darken;}
   + mbdN{mix-blend-mode:normal;}
   + mbdM{mix-blend-mode:multiply;}
   + mbdS{mix-blend-mode:screen;}
   + mbdO{mix-blend-mode:overlay;}
   + mbdD{mix-blend-mode:darken;}
   + mbdL{mix-blend-mode:lighten;}
   + mbdCd{mix-blend-mode:color-dodge;}
   + mbdI{mix-blend-mode:color-burn;}
   + mbdHl{mix-blend-mode:hard-light;}
   + mbdSl{mix-blend-mode:soft-light;}
   + mbdDi{mix-blend-mode:difference;}
   + mbdE{mix-blend-mode:exclusion;}
   + mbdH{mix-blend-mode:hue;}
   + mbdSa{mix-blend-mode:saturation;}
   + mbdC{mix-blend-mode:color;}
   + mbdLu{mix-blend-mode:luminosity;}
```
        
- **of** Viết tắt cho thuộc tính: **object-fit**  một số class mặc định:

```css
   + of{object-fit:contain;}
   + ofC{object-fit:contain;}
   + ofCv{object-fit:cover;}
   + ofF{object-fit:fill;}
   + ofN{object-fit:none;}
   + ofSd{object-fit:scale-down;}
```
        
- **op** Viết tắt cho thuộc tính: **object-position**  một số class mặc định:

```css
   + op{object-position:left;}
   + opB{object-position:bottom;}
   + opC{object-position:center;}
   + opL{object-position:left;}
   + opR{object-position:right;}
   + opT{object-position:top;}
   + opLb{object-position:left bottom;}
   + opLt{object-position:left top;}
   + opRb{object-position:right bottom;}
   + opRt{object-position:right top;}
```
        
- **ofs** Viết tắt cho thuộc tính: **offset** 

- **ofa** Viết tắt cho thuộc tính: **offset-anchor** 

- **ofd** Viết tắt cho thuộc tính: **offset-distance** 

- **ofp** Viết tắt cho thuộc tính: **offset-path** 

- **ofpo** Viết tắt cho thuộc tính: **offset-position** 

- **ofr** Viết tắt cho thuộc tính: **offset-rotate** 

- **opc** Viết tắt cho thuộc tính: **opacity** 

- **ord** Viết tắt cho thuộc tính: **order**  một số class mặc định:

```css
   + ord{order:0;}
```
        
- **orp** Viết tắt cho thuộc tính: **orphans** 

- **oli** Viết tắt cho thuộc tính: **outline** 

- **olc** Viết tắt cho thuộc tính: **outline-color**  một số class mặc định:

```css
   + olc{outline-color:inherit;}
   + olcI{outline-color:inherit;}
   + olcC{outline-color:currentColor;}
   + olcT{outline-color:transparent;}
```
        
- **olo** Viết tắt cho thuộc tính: **outline-offset**  một số class mặc định:

```css
   + olo{outline-offset:0px;}
```
        
- **ols** Viết tắt cho thuộc tính: **outline-style**  một số class mặc định:

```css
   + ols{outline-style:none;}
   + olsN{outline-style:none;}
   + olsH{outline-style:hidden;}
   + olsDt{outline-style:dotted;}
   + olsDs{outline-style:dashed;}
   + olsS{outline-style:solid;}
   + olsDb{outline-style:double;}
   + olsG{outline-style:groove;}
   + olsR{outline-style:ridge;}
   + olsIn{outline-style:inset;}
   + olsOut{outline-style:outset;}
```
        
- **olw** Viết tắt cho thuộc tính: **outline-width**  một số class mặc định:

```css
   + olw{outline-width:medium;}
   + olwT{outline-width:thin;}
   + olwM{outline-width:medium;}
   + olwTh{outline-width:thick;}
```
        
- **ofl** Viết tắt cho thuộc tính: **overflow** 

- **ofla** Viết tắt cho thuộc tính: **overflow-anchor** 

- **oflb** Viết tắt cho thuộc tính: **overflow-block** 

- **oflcm** Viết tắt cho thuộc tính: **overflow-clip-margin** 

- **ofli** Viết tắt cho thuộc tính: **overflow-inline** 

- **oflw** Viết tắt cho thuộc tính: **overflow-wrap**  một số class mặc định:

```css
   + oflw{overflow-wrap:auto;}
   + oflwA{overflow-wrap:auto;}
   + oflwH{overflow-wrap:hidden;}
   + oflwC{overflow-wrap:clip;}
   + oflwV{overflow-wrap:visible;}
   + oflwS{overflow-wrap:scroll;}
```
        
- **oflx** Viết tắt cho thuộc tính: **overflow-x**  một số class mặc định:

```css
   + oflx{overflow-x:auto;}
   + oflxA{overflow-x:auto;}
   + oflxH{overflow-x:hidden;}
   + oflxC{overflow-x:clip;}
   + oflxV{overflow-x:visible;}
   + oflxS{overflow-x:scroll;}
```
        
- **ofly** Viết tắt cho thuộc tính: **overflow-y**  một số class mặc định:

```css
   + ofly{overflow-y:auto;}
   + oflyA{overflow-y:auto;}
   + oflyH{overflow-y:hidden;}
   + oflyC{overflow-y:clip;}
   + oflyV{overflow-y:visible;}
   + oflyS{overflow-y:scroll;}
```
        
- **osrbh** Viết tắt cho thuộc tính: **overscroll-behavior**  một số class mặc định:

```css
   + osrbh{overscroll-behavior:auto;}
   + osrbhA{overscroll-behavior:auto;}
   + osrbhC{overscroll-behavior:contain;}
   + osrbhN{overscroll-behavior:none;}
```
        
- **osrbb** Viết tắt cho thuộc tính: **overscroll-behavior-block**  một số class mặc định:

```css
   + osrbb{overscroll-behavior-block:auto;}
   + osrbbA{overscroll-behavior-block:auto;}
   + osrbbC{overscroll-behavior-block:contain;}
   + osrbbN{overscroll-behavior-block:none;}
```
        
- **osrbi** Viết tắt cho thuộc tính: **overscroll-behavior-inline**  một số class mặc định:

```css
   + osrbi{overscroll-behavior-inline:auto;}
   + osrbiA{overscroll-behavior-inline:auto;}
   + osrbiC{overscroll-behavior-inline:contain;}
   + osrbiN{overscroll-behavior-inline:none;}
```
        
- **osrbx** Viết tắt cho thuộc tính: **overscroll-behavior-x**  một số class mặc định:

```css
   + osrbx{overscroll-behavior-x:auto;}
   + osrbxA{overscroll-behavior-x:auto;}
   + osrbxC{overscroll-behavior-x:contain;}
   + osrbxN{overscroll-behavior-x:none;}
```
        
- **orsby** Viết tắt cho thuộc tính: **overscroll-behavior-y**  một số class mặc định:

```css
   + orsby{overscroll-behavior-y:auto;}
   + orsbyA{overscroll-behavior-y:auto;}
   + orsbyC{overscroll-behavior-y:contain;}
   + orsbyN{overscroll-behavior-y:none;}
```
        
- **p** Viết tắt cho thuộc tính: **padding** 

- **px** Viết tắt cho thuộc tính: **padding-left;padding-right**  một số class mặc định:

```css
   + px{padding-left:auto;padding-right:auto;}
   + pxA{padding-left:auto;padding-right:auto;}
```
        
- **py** Viết tắt cho thuộc tính: **padding-top;padding-bottom**  một số class mặc định:

```css
   + py{padding-top:auto;padding-bottom:auto;}
   + pyA{padding-top:auto;padding-bottom:auto;}
```
        
- **pblk** Viết tắt cho thuộc tính: **padding-block** 

- **pbe** Viết tắt cho thuộc tính: **padding-block-end** 

- **pbs** Viết tắt cho thuộc tính: **padding-block-start** 

- **pb** Viết tắt cho thuộc tính: **padding-bottom**  một số class mặc định:

```css
   + pb{padding-bottom:auto;}
   + pbA{padding-bottom:auto;}
```
        
- **pi** Viết tắt cho thuộc tính: **padding-inline**  một số class mặc định:

```css
   + pi{padding-inline:start;}
   + piS{padding-inline:start;}
   + piC{padding-inline:center;}
   + piE{padding-inline:end;}
   + piB{padding-inline:baseline;}
   + piSt{padding-inline:stretch;}
```
        
- **pie** Viết tắt cho thuộc tính: **padding-inline-end** 

- **pis** Viết tắt cho thuộc tính: **padding-inline-start** 

- **pl** Viết tắt cho thuộc tính: **padding-left**  một số class mặc định:

```css
   + pl{padding-left:auto;}
   + plA{padding-left:auto;}
```
        
- **pr** Viết tắt cho thuộc tính: **padding-right**  một số class mặc định:

```css
   + pr{padding-right:auto;}
   + prA{padding-right:auto;}
```
        
- **pt** Viết tắt cho thuộc tính: **padding-top**  một số class mặc định:

```css
   + pt{padding-top:auto;}
   + ptA{padding-top:auto;}
```
        
- **pg** Viết tắt cho thuộc tính: **page** 

- **pgba** Viết tắt cho thuộc tính: **page-break-after** 

- **pgbb** Viết tắt cho thuộc tính: **page-break-before** 

- **pgbi** Viết tắt cho thuộc tính: **page-break-inside** 

- **pto** Viết tắt cho thuộc tính: **paint-order** 

- **psp** Viết tắt cho thuộc tính: **perspective** 

- **pso** Viết tắt cho thuộc tính: **perspective-origin** 

- **plc** Viết tắt cho thuộc tính: **place-content** 

- **pli** Viết tắt cho thuộc tính: **place-items** 

- **pls** Viết tắt cho thuộc tính: **place-self** 

- **pe** Viết tắt cho thuộc tính: **pointer-events**  một số class mặc định:

```css
   + pe{pointer-events:auto;}
   + peA{pointer-events:auto;}
   + peN{pointer-events:none;}
```
        
- **pos** Viết tắt cho thuộc tính: **position**  một số class mặc định:

```css
   + pos{position:static;}
   + posS{position:static;}
   + posF{position:fixed;}
   + posA{position:absolute;}
   + posR{position:relative;}
   + posSt{position:sticky;}
```
        
- **prca** Viết tắt cho thuộc tính: **print-color-adjust** 

- **qts** Viết tắt cho thuộc tính: **quotes** 

- **rsz** Viết tắt cho thuộc tính: **resize**  một số class mặc định:

```css
   + rsz{resize:none;}
   + rszN{resize:none;}
   + rszB{resize:both;}
   + rszH{resize:horizontal;}
   + rszV{resize:vertical;}
```
        
- **r** Viết tắt cho thuộc tính: **right**  một số class mặc định:

```css
   + r{right:0px;}
```
        
- **rot** Viết tắt cho thuộc tính: **rotate** 

- **rgap** Viết tắt cho thuộc tính: **row-gap**  một số class mặc định:

```css
   + rgap{row-gap:0px;}
```
        
- **rbp** Viết tắt cho thuộc tính: **ruby-position** 

- **s** Viết tắt cho thuộc tính: **scale** 

- **scrb** Viết tắt cho thuộc tính: **scroll-behavior** 

- **scrm** Viết tắt cho thuộc tính: **scroll-margin** 

- **scrmblk** Viết tắt cho thuộc tính: **scroll-margin-block** 

- **scrmbe** Viết tắt cho thuộc tính: **scroll-margin-block-end** 

- **scrmbs** Viết tắt cho thuộc tính: **scroll-margin-block-start** 

- **scrmb** Viết tắt cho thuộc tính: **scroll-margin-bottom** 

- **scrmi** Viết tắt cho thuộc tính: **scroll-margin-inline** 

- **scrmie** Viết tắt cho thuộc tính: **scroll-margin-inline-end** 

- **scrmis** Viết tắt cho thuộc tính: **scroll-margin-inline-start** 

- **scrml** Viết tắt cho thuộc tính: **scroll-margin-left** 

- **scrmr** Viết tắt cho thuộc tính: **scroll-margin-right** 

- **scrmt** Viết tắt cho thuộc tính: **scroll-margin-top** 

- **scrp** Viết tắt cho thuộc tính: **scroll-padding** 

- **scrpblk** Viết tắt cho thuộc tính: **scroll-padding-block** 

- **srcpbe** Viết tắt cho thuộc tính: **scroll-padding-block-end** 

- **scrpbs** Viết tắt cho thuộc tính: **scroll-padding-block-start** 

- **scrpb** Viết tắt cho thuộc tính: **scroll-padding-bottom** 

- **scrpi** Viết tắt cho thuộc tính: **scroll-padding-inline** 

- **scrpie** Viết tắt cho thuộc tính: **scroll-padding-inline-end** 

- **scrpis** Viết tắt cho thuộc tính: **scroll-padding-inline-start** 

- **scrpl** Viết tắt cho thuộc tính: **scroll-padding-left** 

- **scrpr** Viết tắt cho thuộc tính: **scroll-padding-right** 

- **scrpt** Viết tắt cho thuộc tính: **scroll-padding-top** 

- **scrsa** Viết tắt cho thuộc tính: **scroll-snap-align** 

- **scrss** Viết tắt cho thuộc tính: **scroll-snap-stop** 

- **scrst** Viết tắt cho thuộc tính: **scroll-snap-type** 

- **sbc** Viết tắt cho thuộc tính: **scrollbar-color** 

- **sbg** Viết tắt cho thuộc tính: **scrollbar-gutter** 

- **sbw** Viết tắt cho thuộc tính: **scrollbar-width** 

- **tbs** Viết tắt cho thuộc tính: **tab-size** 

- **shit** Viết tắt cho thuộc tính: **shape-image-threshold** 

- **shm** Viết tắt cho thuộc tính: **shape-margin** 

- **sho** Viết tắt cho thuộc tính: **shape-outside** 

- **tra** Viết tắt cho thuộc tính: **transform** 

- **trab** Viết tắt cho thuộc tính: **transform-box** 

- **trao** Viết tắt cho thuộc tính: **transform-origin** 

- **tras** Viết tắt cho thuộc tính: **transform-style** 

- **tran** Viết tắt cho thuộc tính: **transition** 

- **tranb** Viết tắt cho thuộc tính: **transition-behavior** 

- **trand** Viết tắt cho thuộc tính: **transition-delay** 

- **trandur** Viết tắt cho thuộc tính: **transition-duration** 

- **tranp** Viết tắt cho thuộc tính: **transition-property** 

- **trantf** Viết tắt cho thuộc tính: **transition-timing-function** 

- **tbl** Viết tắt cho thuộc tính: **table-layout** 

- **ta** Viết tắt cho thuộc tính: **text-align**  một số class mặc định:

```css
   + ta{text-align:start;}
   + taS{text-align:start;}
   + taE{text-align:end;}
   + taL{text-align:left;}
   + taR{text-align:right;}
   + taC{text-align:center;}
   + taJ{text-align:justify;}
   + taMp{text-align:match-parent;}
   + taMc{text-align:-moz-center;}
   + taWc{text-align:-webkit-center;}
```
        
- **tal** Viết tắt cho thuộc tính: **text-align-last**  một số class mặc định:

```css
   + tal{text-align-last:auto;}
   + talA{text-align-last:auto;}
   + talS{text-align-last:start;}
   + talE{text-align-last:end;}
   + talL{text-align-last:left;}
   + talR{text-align-last:right;}
   + talC{text-align-last:center;}
   + talJ{text-align-last:justify;}
```
        
- **tcu** Viết tắt cho thuộc tính: **text-combine-upright** 

- **td** Viết tắt cho thuộc tính: **text-decoration**  một số class mặc định:

```css
   + td{text-decoration:none;}
   + tdN{text-decoration:none;}
   + tdU{text-decoration:underline;}
```
        
- **tdc** Viết tắt cho thuộc tính: **text-decoration-color** 

- **tdl** Viết tắt cho thuộc tính: **text-decoration-line**  một số class mặc định:

```css
   + tdl{text-decoration-line:none;}
   + tdlU{text-decoration-line:underline;}
   + tdlO{text-decoration-line:overline;}
   + tdlLt{text-decoration-line:line-through;}
   + tdlB{text-decoration-line:blink;}
```
        
- **tdsi** Viết tắt cho thuộc tính: **text-decoration-skip-ink** 

- **tds** Viết tắt cho thuộc tính: **text-decoration-style**  một số class mặc định:

```css
   + tds{text-decoration-style:solid;}
   + tdsDb{text-decoration-style:double;}
   + tdsDt{text-decoration-style:dotted;}
   + tdsDs{text-decoration-style:dashed;}
   + tdsW{text-decoration-style:wavy;}
```
        
- **tdt** Viết tắt cho thuộc tính: **text-decoration-thickness**  một số class mặc định:

```css
   + tdt{text-decoration-thickness:auto;}
   + tdtFf{text-decoration-thickness:from-font;}
```
        
- **teph** Viết tắt cho thuộc tính: **text-emphasis**  một số class mặc định:

```css
   + teph{text-emphasis:none;}
```
        
- **tec** Viết tắt cho thuộc tính: **text-emphasis-color**  một số class mặc định:

```css
   + tec{text-emphasis-color:currentColor;}
```
        
- **tep** Viết tắt cho thuộc tính: **text-emphasis-position**  một số class mặc định:

```css
   + tep{text-emphasis-position:over right;}
   + tepOr{text-emphasis-position:over right;}
   + tepOl{text-emphasis-position:over left;}
   + tepUr{text-emphasis-position:under right;}
   + tepUl{text-emphasis-position:under left;}
   + tepLo{text-emphasis-position:left over;}
   + tepRu{text-emphasis-position:right under;}
   + tepLu{text-emphasis-position:left under;}
```
        
- **tes** Viết tắt cho thuộc tính: **text-emphasis-style**  một số class mặc định:

```css
   + tesN{text-emphasis-style:none;}
```
        
- **ti** Viết tắt cho thuộc tính: **text-indent**  một số class mặc định:

```css
   + ti{text-indent:0;}
```
        
- **tj** Viết tắt cho thuộc tính: **text-justify**  một số class mặc định:

```css
   + tj{text-justify:auto;}
   + tjN{text-justify:none;}
   + tjA{text-justify:auto;}
   + tjIw{text-justify:inter-word;}
   + tjIc{text-justify:inter-character;}
   + tjD{text-justify:distribute;}
```
        
- **tor** Viết tắt cho thuộc tính: **text-orientation**  một số class mặc định:

```css
   + tor{text-orientation:mixed;}
   + torM{text-orientation:mixed;}
   + torU{text-orientation:upright;}
   + torSr{text-orientation:sideways-right;}
   + torSl{text-orientation:sideways-left;}
   + torS{text-orientation:sideways;}
   + torUgo{text-orientation:use-glyph-orientation;}
```
        
- **tol** Viết tắt cho thuộc tính: **text-overflow**  một số class mặc định:

```css
   + tol{text-overflow:clip;}
   + tolC{text-overflow:clip;}
   + tolE{text-overflow:ellipsis;}
```
        
- **trd** Viết tắt cho thuộc tính: **text-rendering**  một số class mặc định:

```css
   + trd{text-rendering:auto;}
   + trdA{text-rendering:auto;}
   + trdOp{text-rendering:optimizeSpeed;}
   + trdOl{text-rendering:optimizeLegibility;}
   + trdG{text-rendering:geometricPrecision;}
```
        
- **tsh** Viết tắt cho thuộc tính: **text-shadow** 

- **ttr** Viết tắt cho thuộc tính: **text-transform**  một số class mặc định:

```css
   + ttr{text-transform:capitalize;}
   + ttrN{text-transform:none;}
   + ttrC{text-transform:capitalize;}
   + ttrU{text-transform:uppercase;}
   + ttrL{text-transform:lowercase;}
   + ttrFw{text-transform:full-width;}
   + ttrFsk{text-transform:full-size-kana;}
```
        
- **tuo** Viết tắt cho thuộc tính: **text-underline-offset**  một số class mặc định:

```css
   + tuo{text-underline-offset:auto;}
```
        
- **tup** Viết tắt cho thuộc tính: **text-underline-position**  một số class mặc định:

```css
   + tup{text-underline-position:under;}
   + tupA{text-underline-position:auto;}
   + tupU{text-underline-position:under;}
   + tupL{text-underline-position:left;}
   + tupR{text-underline-position:right;}
   + tupUl{text-underline-position:under left;}
   + tupRu{text-underline-position:right under;}
```
        
- **tw** Viết tắt cho thuộc tính: **text-wrap**  một số class mặc định:

```css
   + tw{text-wrap:nowrap;}
   + twW{text-wrap:wrap;}
   + twN{text-wrap:nowrap;}
   + twB{text-wrap:balance;}
   + twP{text-wrap:pretty;}
```
        
- **t** Viết tắt cho thuộc tính: **top**  một số class mặc định:

```css
   + t{top:0px;}
```
        
- **toa** Viết tắt cho thuộc tính: **touch-action**  một số class mặc định:

```css
   + toa{touch-action:auto;}
   + toaA{touch-action:auto;}
   + toaN{touch-action:none;}
   + toaP{touch-action:pan-x;}
   + toaPy{touch-action:pan-y;}
   + toaPm{touch-action:pan-x pan-y;}
   + toaPi{touch-action:pinch-zoom;}
```
        
- **trl** Viết tắt cho thuộc tính: **translate** 

- **unib** Viết tắt cho thuộc tính: **unicode-bidi** 

- **us** Viết tắt cho thuộc tính: **user-select**  một số class mặc định:

```css
   + us{user-select:auto;}
   + usA{user-select:auto;}
   + usN{user-select:none;}
   + usT{user-select:text;}
   + usAll{user-select:all;}
   + usC{user-select:contain;}
```
        
- **va** Viết tắt cho thuộc tính: **vertical-align**  một số class mặc định:

```css
   + va{vertical-align:baseline;}
   + vaBl{vertical-align:baseline;}
   + vaT{vertical-align:top;}
   + vaM{vertical-align:middle;}
   + vaB{vertical-align:bottom;}
   + vaTt{vertical-align:text-top;}
   + vaTb{vertical-align:text-bottom;}
   + vaSb{vertical-align:sub;}
   + vaSp{vertical-align:super;}
```
        
- **v** Viết tắt cho thuộc tính: **visibility**  một số class mặc định:

```css
   + v{visibility:visible;}
   + vV{visibility:visible;}
   + vH{visibility:hidden;}
   + vC{visibility:collapse;}
```
        
- **ws** Viết tắt cho thuộc tính: **white-space** 

- **wsc** Viết tắt cho thuộc tính: **white-space-collapse** 

- **wd** Viết tắt cho thuộc tính: **widows** 

- **w** Viết tắt cho thuộc tính: **width**  một số class mặc định:

```css
   + w{width:100%;}
   + wMic{width:min-content;}
   + wMac{width:max-content;}
   + wFc{width:fit-content;}
   + wF{width:100%;}
```
        
- **wc** Viết tắt cho thuộc tính: **will-change**  một số class mặc định:

```css
   + wc{will-change:auto;}
   + wcA{will-change:auto;}
   + wcSp{will-change:scroll-position;}
   + wcC{will-change:contents;}
   + wcT{will-change:transform;}
```
        
- **wrb** Viết tắt cho thuộc tính: **word-break** 

- **wrs** Viết tắt cho thuộc tính: **word-spacing** 

- **wrtm** Viết tắt cho thuộc tính: **writing-mode** 

- **z** Viết tắt cho thuộc tính: **z-index**  một số class mặc định:

```css
   + z{z-index:-1;}
```
        

## 4. Ví dụ cụ thể
### - xs:1dF
+ **Phân tích**
	MQ: xs =>  @media screen and (max-width: 575px)   
	Layer: 1, => @layer l1 
	Thuộc tính: dF => display: flex;   
+ **Build thành:**
```css
	 @media screen and (max-width: 575px) {
		@play l1 {
		xs:1dF {display: flex;} 
		}
	}
```

### - xs:1cRed:hover;>div

+ ***Phân tích**
	MQ: xs =>  screen and (max-width: 575px)    
	Layer: 1 => layer l1    
	Thuộc tính:  cRed => color: red;   
	Selector: :hover;>div => :hover > div, Trong đó ; là dấu cách.  

+ **Build thành**  
```css
@media screen and (max-width: 575px) {
		@play l1 {
		<Thuộc tính>:hover >div {color: red;}   
		}
	}
```
### - xs:1cRed&bgGreen:hover;>div   

+ **Phân tích**
	MQ: xs =>  screen and (max-width: 575px)     
	Layer: 1 => layer l1    
	Thuộc tính:  cRed&bgGreen => color: red; background: green;   
	Selector: :hover;>div => :hover > div, Trong đó ; là dấu cách.   

+ **Build thành**
```css
@media screen and (max-width: 575px) {
		@play l1 {
		<Thuộc tính>:hover >div {color: red; background: green;} 
		}
	}

```
