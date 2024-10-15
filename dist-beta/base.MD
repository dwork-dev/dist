# Hướng dẫn sử dụng framework

## 0. Nâng cấp    

- Nâng cấp css: Thêm @ vào bộ luật css


## 1. Cài đặt

```html
 <script src="https://fwui.pages.dev/dist-beta/tfl.min.js"></script>



```
**Chú ý**: Nếu nhúng script thì nên thiết đặt type là modulex => có kiểu là module, text/javascriptx => text/javascript.

## 2.Một số tính năng trên framework js

### **1**. Truyền tham số vào thuộc tính

   {{ Hàm, biểu thức, biến }}
   Ví dụ: class="{{()=>className}}" hoặc onclick="{{()=>data.val+=1}}"
   
### **2**. Truyền tham số vào nội dung

   {{ Hàm, biểu thức, biến }}
   Ví dụ: <div> Phép cộng: {{ ()=> a + b }} </div>

   
### **3**. Khai báo thuộct tính trên thẻ
  + **x-app**: Khai báo ứng dụng ví dụ: <div x-app> </body> => Hệ thống sẽ render từ div có thuộc tính x-app
  + x-script: Bổ sung kịch bản khi các đối tượng trên chưa đáp ứng được
  + x-list: Áp dụng đối với biến <varname>  thuộc  x-reactive.
    Cấu trúc: x-list="item in data" => item: là giá trị duyệt từng phần tử của biến data, data phải là reactive
 + x-include: Tham chiếu tới tệp module html VD: x-include="https://abc.com/test.html"
 + on<sự kiện>: Sự kiện


### **4**. Thẻ script
```html
  <script type="text/javascriptx"> ....</script>
```

### **5**.  Một số hàm cơ bản**
  + $state: Hàm tạo trạng thái một giá trị cụ kiểu như number, string, boolean, null VD: var a = $state(true);
  + $reactive: Hàm tạo trạng thái cho object VD: var ab = $reactive({a:1,b:2})
  + $stateFields: Trạng thái cho stateFields: VD: var f = $stateFields({a:1,b:2})
  + $derive: ý nghĩa gần effects của react luôn gọi lại khi có sự thay đổi của trạng thái có thể trả về kết quả hoặc không. $derive(()=> {.... }
  + $tags: chứa các hàm theo định dạng thẻ: $tags["div"]({Thuộc tính},....); hoặc const {div} = $tags; div({class:"color-red"}, "Màu đỏ") => <div class="color-red"> Màu đỏ</div>
  + $add: Hàm sẽ thêm phần tử vào đối tượng: Ví dụ: $add(document.body, div("abc"))
  + $calc: Hàm định nghĩa tính toán lại var c = $calc(() => a + b);
  + $raw: Tạo bản sao object trạng thái thành object cơ bản: var obj = $raw(objState);
  + $list: Tạo hàm mảng các phần tử: $list(dom, dữ liệu reactive, hàm xử lý )
  + $replace: Hàm thay thế lại dữ liệu reactive
  + $addHtmToElement: Hàm thêm text html tương tự như $add, có cấu trúc dạng $addHtmToElement(dom, kiểu thay thế, textHtml, có lấy thẻ script).
  + $htmlToTjs: Hàm convert txt html sang dạng tjs
  + $domToTjs: Hàm chuyển Dom sang dạng tjs
  + $defineElement: Hàm định nghĩa thẻ tuỳ chỉnh
 

## 3. Framework css

[Tham khảo](https://github.com/dwork-dev/fwkui/blob/main/dist-beta/css-beta.md)


## 4. Các component 
[Tham khảo](https://github.com/dwork-dev/component/blob/main/README.md)


  .
