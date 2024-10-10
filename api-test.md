# Hướng dẫn sử dụng API

**1. Hàm kết quả định dạng chung**
```TypeScript
{
    "result": bool,
    "data": any,
    "code": number,
    "message": string,
}
```
Giải thích mã code: Hãy quan tới mã code, hạn chế theo tham số result, result trong tương lai sẽ bị hủy bỏ. 

Chú ý:  Mã lỗi **400** có thể bao gồm các mã lỗi còn lại nhưng phải có mô tả nội dung.

| STT | mã code | Mô tả | result |
|---|---|---|---|
| 1 | 200 | Thành công | true |
| 2 | 201 | Kiểm tra tham số yêu cầu: Bao gồm cấu trúc tham số, tham số giá trị không đúng với quy định,... | false |
| 3 | 203 | Xác thực: Mã cookies không hợp lệ, không đúng cấu trúc, tự gen ra token,... | false |
| 4 | 205 | Xác thực: Mã cookies xác thực hết hạn | false |
| 5 | 207 | Mã cookies hợp lệ, không có quyền truy cập nội dung, dữ liệu | false |
| 6 | 202 | Khóa thiết bị: nghi ngờ tài khoản bị đánh cắp| false |
| 7 | 204 | Khóa ip public: nghi ngờ tài khoản bị đánh cắp, bị ddos,..| false |
| 8 | 206 | Khóa tài khoản: Đăng nhập sai nhiều lần theo quy định, | false |
| 9 | 400 | Không thành công, có kèm nội dung mô tả, trái ngược với mã lỗi 200 | false |
| 10 | 402 | Mất kết nối đường truyền: internet, lan,... | false |
| 11 | 500 | Lỗi xử lý nghiêm trọng server | false |



2. Cấu trúc tìm kiếm

```TypeScript
    { 
      select: Object,
      where: Object,
      group: Object,
      order: Object,
      limit: Number,
      start: Number
    }
```

**Trong đó:**
   - **Select**: null || {[key:String]: StringFunction|String}
   - **where**: null || {type: String, filterRules: filterItem[]}
     + **type**: Toán tử loại trừ hay gộp có giá trị OR, AND
     + **filterItem**: {field: String, op: String, value: String|Number|boolean} | {type: String, filterRules: filterItem[]}
         * **field**: Tên trường hoặc Hàm xử lý
         * **op**: Toán tử: >, <, >=, <=,....
         * **value**: Giá trị
  - **group**: String[], là Danh sánh mảng field cần group
  - **order**: {[field:String]: ASC|DESC}
  - **limit**: Giới hạn số lượng bản ghi cần lấy
  - **start**: Bắt đầu bản ghi 




## I. Tài khoản
### 1. Đăng nhập
#### 1.1. Đăng nhập theo tên đăng nhập
    Cấu trúc: $http.account.login(obj,cb);
   
    Tham số obj: 
```TypeScript
    {username: string, password: string}

```
    username: Mã vùng + Số điện thoại

#### 1.2. Đăng nhập bằng thiết  bị mobile (qrcode)
##### 1.2.1 Kiểm tra thông tin theo qrcode
    Cấu trúc: $http.checkQrcode.login(obj,cb);
   

##### 1.2.2 Đăng nhập
    Cấu trúc: $http.account.loginQrcode(obj,cb);


### 2. Đăng nhập thông qua qrcode

Quy trình:

#### 2.1 Lẫy mã qrcode, khi hết hạn có thể gọi lại chính nó.
    Cấu trúc: $http.account.generateQrcode(cb);
    Hàm sẽ trả về dạng {result: boolean, data: {zid: "Mã qrcode"}, code: 200}}
Mã zid sẽ là mã tạo ra qrcode

#### 2.2 Dùng thiết bị mobile để quét mã qrcode (zid 2.1) để kiểm tra lại thông tin

$http.account.checkQrcode({id:String mã qrcode quét được },cb)

Chú ý: cb sẽ trả về thông tin của người dùng, cần xác nhận cụ thể thì làm bước tiếp theo

#### 2.3 Trên thiết bị mobile gọi hàm để thực hiện đăng nhập

$http.account.loginQrcode({id: String zid của qrcode},console.log)

Kết quả trả về cb trả về token là token của thiết bị web cần đăng nhập

#### 2.4 Trên Trình duyệt luôn gọi định kỳ để kiểm tra Trên thiết bị đã quét và thực hiện login hay chưa
$http.account.checkScanQrCode({id: String zid của qrcode được tạo},console.log)

Kết quả trả về thông tin token, mã của cookies, có thể bỏ ko không cần lưu, khi gặp trang này phải load lại trang để chuyển về trang chủ.







### 3. Đăng ký
Quy trình đăng ký: 3.1 -> \[ -> 3.2 (nếu bị hết hạn otp \] -> 3.3 ->

#### 3.1. Gửi thông tin đăng ký

    Cấu trúc: $http.account.register(obj,cb);
    Tham số obj:

```TypeScript
    {
        area_code: string,
        phone_number: string,
        fullname: string,
        password: string
    
    }
```    
    Trả về

```TypeScript
{result: boolean, code: Number, data: {zid: <Mã để áp dụng cho Xác thực mã>}}
```

Trong đó: 
    - data là giá trị cho tham số **id** của mục **3.2. Gửi lại mã xác thực** 
    - data là giá trị cho tham số **id** của mục **3.3. Xác thực đăng ký**

#### 3.2. Gửi lại mã xác thực

    Cấu trúc: $http.account.resendCode(obj,cb);

```TypeScript
{
    id: String
}
```

Trả về: 
```Typescript
    {result: boolean, code: Number, data: {zid: "Mã mới để xác thực"}}
```
Trong đó: 
- data là giá trị cho tham số **id**  cho mục **3.3. Xác thực đăng ký**
- data là giá trị cho tham số **id**  cho mục **3.2. Gửi lại mã xác thực**

#### 3.3. Xác thực đăng ký (Kiểm tra mã và thực hiện login)

    Cấu trúc: $http.account.verifyCode(obj,cb);
    Tham số Xác thực
```TypeScript
    {
        id: string,
        code: string // zid của Gửi lại mã 3.2 hoặc phần đăng ký 3.1
    
    }
```  
Trong đó:
- id: lấy giá trị từ data kết quả trả về của mục  **3.1**  hoặc **3.2**

Kết quả khi xác thực thành công, hệ thống sẽ tự động login.

### 4. Lấy thông tin user

    Cấu trúc: $http.account.profile(cb);
    

### 5. Đổi mật khẩu 
#### 5.1. Kiểm tra mật khẩu 
Cấu trúc: $http.account.checkPassword(obj,cb);
    Tham số:
```TypeScript
{
    password: String
}
```

Trong đó:     
- password là mật khẩu cũ

  
#### 5.2. Đổi mật khẩu 
Cấu trúc: $http.account.changePassword(obj,cb);
    Tham số:
```TypeScript
{
    old_password: String,
    password: String
}
```

Trong đó:     
- old_password là mật khẩu cũ
- password là mật khẩu mới    

### 6. Cập nhật thông tin cá nhân 

    Cấu trúc: $http.account.updateProfile(obj,cb);

```TypeScript
    {
        address: string, birthday: string (yyyy-mm-dd), gender: 0|1|2, avatar: string
    }
```
    


### 7. Quên mật khẩu

    Cấu trúc: $http.account.forgotPassword(obj,cb);

```TypeScript
    {
    phone_number: String,
    area_code: String
    }
```


### 8. Thiết lập mật khẩu mới

    Cấu trúc: $http.account.setNewPassword(obj,cb);

```TypeScript
{
    token: String,
    password: String
}

```


### 9. Duy trình đăng nhập

    Cấu trúc: $http.account.keepOnline(cb);
```
Kết quả:
```TypeScript
{
result: boolean,
data: {token: string, time_expired: Number (giây)}
}
```
### 10. Quên mật khẩu (Quy trình quên mật khẩu)

Quy trình đổi mật khẩu: 10.1 -> 10.2 -> 10.3. Trong trường hợp zid của 10.1 hết hạn thì có thể sử dụng 3.2 để gửi lại mã code.

#### 10.1 Yêu cầu quên mật khẩu

    $http.account.forgotPasswordRequest({area_code: String, phone_number: String}, cb)

#### 10.2 Kiểm tra mã otp 

$http.account.forgotPasswordCheckCode({id: String mã zid của 10.1, code:String lã mã gửi về thiết bị},cb)


#### 10.3 Đổi mật khẩu

$http.account.forgotPasswordSetNewPassword({id: String mã zid của 10.2, password: String là mật khẩu mới},cb)

### 11. Đăng xuất

    Cấu trúc: $http.account.logout(cb);

### 12. Khác
#### 12.1 Check kiểm tra đăng nhập
    $http.account.checkAuth(cb)

#### 12.2 Kiểm tra và yêu cấp quyền truy cập thiết bị
    $http.invokerMobile(args:Array,cb)
- Trong đó: args:
  + args = \["permission", "camera"\] => Response: true/false/null.
  + args = \["permission", "microphone"\] => Response: true/false/null.
  + args=\["deviceId"\] => Response thông tin thiết bị
 
#### 12.3 Check kiểm tra đăng nhập
    $http.account.checkUser({username:"Bao gồm Mã vùng + số điện thoại (bắt đầu 0)"},cb)
#### 12.4 Lấy thông tin theo tên đăng nhập
    $http.account.getProfileUser({"area_code: "", "phone_number": "" },cb)
    hoặc
     $http.business.getProfileUser({"area_code: "", "phone_number": "" },cb)


- Trong đó:

    + area_code: Mã vùng điện thoại
    + phone_number: Số điện thoại bao gồm có số 0 ở đầu
    

## II. Tổ chức

   ### 1.Tạo mới tổ chức
   Cấu trúc: $http.business.create(obj,cb);
   
  obj = {...}, cb: là hàm trả về
  
  ** Ví dụ: **
   
```javascript
    $http.business.create({name: "Tên doanh nghiệp"}, console.log);
```
### 2. Hàm cập nhật, (bổ sung thông tin)
    Cấu trúc: $http.business.update(id, obj,cb);
   
  obj = {...}, cb: là hàm trả về
  ** Ví dụ: **
   
```javascript
    $http.business.update("12345", {mst: "0988777883"}, console.log);
```
    
### 3. Hàm lấy danh sách

    Cấu trúc: $http.business.list(objFilter, cb);
    

   **Ví dụ**
 

```javascript
      $http.business.list({}, console);
```

    Chú ý: Thông tin trả về có field: staff_value có 3 giá trị: true: đã kích hoạt tham gia, false: lời mời tham gia


   ### 4. Hàm lấy thông tin theo mã số thuế
      
      Cấu trúc: $http.business.taxCode(taxString:String, cb:Function);
   ### 5. Hàm lấy danh sách ngân hàng
      
      Cấu trúc: $http.business.banks(cb:Function);


  ### 6. Hàm lấy Danh sách địa chỉ tình thành, quận/huyện, phường/xã.

    Cấu trúc: $http.cates.address_list(objFilter, cb);

    Tên trường cần lưu ý: type: tt: Tình tỉnh, qh: Quận huyện,  px: Phường xã, pid: Mã cấp trên, cấp cha, id: Mặc định là object sau khi khởi tạo

    Ví dụ:

```javascript
    $http2.cates.address_list({select: {id: "meta::id(id)", name: "name", pid: "pid"}, where: {filterRules: [{field:"meta::id(id)", op:"=", value:"001"}]}},console.log)

 ```


 ### 7. Hàm gợi ý địa chỉ

 Cấu trúc: $http.cates.geo_address({address: String}, cb);

 ### 8. Hàm lấy tọa độ theo mã token địa chỉ
  Cấu trúc: $http.cates.geo_detail({place_id: String}, cb);



### 9. Docs
#### 9.1. Thêm mới
    Cấu trúc: $http.business.docs.create(gid: string, type: string, data: object, callback)

Trong đó:
gid: Mã tổ chức
type: Phân loại chức năng ví dụ: phong-ban
data: Thông tin bổ sung cho Chức năng đó

Ví dụ:
```javascript
    $http.business.docs.create("tochuc123', "phong-ban", {name: 'Khối Tài chính"}, console.log)
```


 #### 9.2. Cập nhật
    Cấu trúc: $http.business.docs.update(gid: String, id: string, data: object, callback)
Ví dụ:
```javascript
    $http.business.docs.update("gabc","abce', {name: 'Khối Tài chính"}, console.log)
```
    

 #### 9.3. Xóa
    Cấu trúc: $http.business.docs.delete(gid:String, id: string,callback)

Ví dụ:
```javascript
   $http.business.docs.delete("gabc", "abcef-agdd", console.log)

 ```

 #### 9.4. Danh sách

    Cấu trúc: $http.business.docs.list(gid: String, objFilter, cb);

    Tương tự như: Tổ chức danh sách


 ### 10. Hàm kích hoạt người tham gia
  Cấu trúc: $http.business.active({id: "String: Mã tổ chức"},cb)
