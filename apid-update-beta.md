# Hướng dẫn sử dụng API

**1. Hàm kết quả định dạng chung**
```javascript
{
    "data": any|null,
    "code": number| Mặc định 500,
    "message": string|null,
}
```
Giải thích mã code: Hãy quan tới mã code, hạn chế theo tham số result, result trong tương lai sẽ bị hủy bỏ. 

Chú ý:  Mã lỗi **400** có thể bao gồm các mã lỗi còn lại nhưng phải có mô tả nội dung.

| STT | mã code | Mô tả |
|---|---|---|
| 1 | 200 | Thành công |
| 2 | 201 | Cấu trúc không hợp lệ |
| 3 | 202 | Mã xác thực cấu trúc không hợp lệ|
| 4 | 203 | Mã xác thực hết hạn |
| 5 | 204 | Không có quyền|
| 6 | 205 | Thiết bị mobile bị khoá |
| 7 | 206 | Tài khoản bị khoá |
| 8 | 207 | Ip public client bị khoá |
| 9 | 400 | Xử lý thất bại  |
| 10 | 401 | Mất kết nối đường truyền internet, lan,... |
| 11 | 402 | Giới hạn request |
| 12 | 500 | Lỗi không xác định |

