# Hướng dẫn sử dụng API

**1. Hàm kết quả định dạng chung**
```javascript
{
    "data": any|null,
    "status_code": number| Mặc định 500,
    "message": string|null,
}
```
Giải thích mã code: Hãy quan tới mã code, hạn chế theo tham số result, result trong tương lai sẽ bị hủy bỏ. 

Chú ý:  Mã lỗi **400** có thể bao gồm các mã lỗi còn lại nhưng phải có mô tả nội dung.

| STT | mã code | Mô tả |
|---|---|---|---|
| 1 | 200 | Thành công |
| 2 | 201 | Kiểm tra tham số yêu cầu: Bao gồm cấu trúc tham số, tham số giá trị không đúng với quy định,... |
| 3 | 203 | Xác thực: Mã cookies không hợp lệ, không đúng cấu trúc, tự gen ra token,... |
| 4 | 205 | Xác thực: Mã cookies xác thực hết hạn |
| 5 | 207 | Mã cookies hợp lệ, không có quyền truy cập nội dung, dữ liệu |
| 6 | 202 | Khóa thiết bị: nghi ngờ tài khoản bị đánh cắp|
| 7 | 204 | Khóa ip public: nghi ngờ tài khoản bị đánh cắp, bị ddos,..|
| 8 | 206 | Khóa tài khoản: Đăng nhập sai nhiều lần theo quy định, |
| 9 | 400 | Không thành công, có kèm nội dung mô tả, trái ngược với mã lỗi 200 |
| 10 | 402 | Mất kết nối đường truyền: internet, lan,... |
| 11 | 500 | Lỗi không xác định |

