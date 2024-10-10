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

Dưới đây là danh sách các mã lỗi HTTP Status Code phổ biến được chia theo các nhóm:

### 1xx: Informational (Thông tin)
- **100 Continue**: Máy chủ đã nhận được tiêu đề yêu cầu và khách hàng có thể tiếp tục gửi phần thân yêu cầu.
- **101 Switching Protocols**: Máy chủ đang chuyển đổi giao thức theo yêu cầu của khách hàng.
- **102 Processing**: Máy chủ đã nhận yêu cầu và đang xử lý, nhưng chưa có phản hồi.

### 2xx: Success (Thành công)
- **200 OK**: Yêu cầu đã thành công.
- **201 Created**: Yêu cầu đã thành công và một tài nguyên mới đã được tạo ra.
- **202 Accepted**: Yêu cầu đã được chấp nhận để xử lý, nhưng xử lý chưa hoàn thành.
- **203 Non-Authoritative Information**: Máy chủ trả về thông tin đã bị sửa đổi từ nguồn gốc.
- **204 No Content**: Yêu cầu đã thành công nhưng không có nội dung nào được trả về.
- **205 Reset Content**: Yêu cầu đã thành công, và yêu cầu khách hàng reset nội dung hiển thị.
- **206 Partial Content**: Máy chủ đang trả về một phần của tài nguyên theo yêu cầu (thường dùng trong tải lại tệp).

### 3xx: Redirection (Chuyển hướng)
- **300 Multiple Choices**: Có nhiều lựa chọn tài nguyên để khách hàng chọn.
- **301 Moved Permanently**: Tài nguyên đã được di chuyển vĩnh viễn đến URL mới.
- **302 Found**: Tài nguyên được tìm thấy tại một URL khác tạm thời.
- **303 See Other**: Khách hàng nên truy vấn tài nguyên ở URL khác bằng phương thức GET.
- **304 Not Modified**: Tài nguyên không thay đổi kể từ lần yêu cầu trước đó.
- **305 Use Proxy**: Tài nguyên chỉ có thể được truy cập thông qua proxy.
- **307 Temporary Redirect**: Tài nguyên tạm thời được di chuyển đến URL khác nhưng vẫn sử dụng phương thức yêu cầu ban đầu.

### 4xx: Client Error (Lỗi phía khách hàng)
- **400 Bad Request**: Yêu cầu không hợp lệ hoặc bị lỗi.
- **401 Unauthorized**: Yêu cầu chưa được xác thực hợp lệ.
- **402 Payment Required**: Mã này dự phòng cho các hệ thống thanh toán trong tương lai.
- **403 Forbidden**: Máy chủ từ chối cung cấp tài nguyên do không có quyền truy cập.
- **404 Not Found**: Tài nguyên được yêu cầu không tìm thấy.
- **405 Method Not Allowed**: Phương thức HTTP không được phép sử dụng với tài nguyên.
- **406 Not Acceptable**: Tài nguyên không hợp với tiêu chuẩn định dạng của khách hàng.
- **407 Proxy Authentication Required**: Yêu cầu phải xác thực với proxy trước khi tiếp tục.
- **408 Request Timeout**: Máy chủ chờ quá lâu và không nhận được yêu cầu đầy đủ.
- **409 Conflict**: Yêu cầu bị xung đột với trạng thái hiện tại của tài nguyên.
- **410 Gone**: Tài nguyên không còn khả dụng và đã bị xóa vĩnh viễn.
- **411 Length Required**: Máy chủ yêu cầu tiêu đề `Content-Length`.
- **412 Precondition Failed**: Điều kiện tiên quyết do khách hàng đưa ra trong yêu cầu không được đáp ứng.
- **413 Payload Too Large**: Dữ liệu yêu cầu lớn hơn mức máy chủ có thể xử lý.
- **414 URI Too Long**: URI của yêu cầu dài hơn mức máy chủ có thể xử lý.
- **415 Unsupported Media Type**: Định dạng dữ liệu của yêu cầu không được máy chủ hỗ trợ.
- **416 Range Not Satisfiable**: Phạm vi yêu cầu không hợp lệ cho tài nguyên.
- **417 Expectation Failed**: Máy chủ không thể đáp ứng được tiêu đề Expect trong yêu cầu.
- **418 I'm a teapot**: Mã này xuất hiện từ trò đùa về "I'm a teapot" trong giao thức Hyper Text Coffee Pot Control.
- **421 Misdirected Request**: Yêu cầu gửi đến máy chủ không thể xử lý yêu cầu này.
- **422 Unprocessable Entity**: Máy chủ hiểu yêu cầu nhưng không thể xử lý nó.
- **423 Locked**: Tài nguyên đang bị khóa.
- **424 Failed Dependency**: Một phụ thuộc của yêu cầu đã thất bại.
- **426 Upgrade Required**: Máy chủ yêu cầu khách hàng nâng cấp lên giao thức khác.
- **428 Precondition Required**: Máy chủ yêu cầu điều kiện tiên quyết để yêu cầu thành công.
- **429 Too Many Requests**: Khách hàng gửi quá nhiều yêu cầu trong một khoảng thời gian ngắn.
- **431 Request Header Fields Too Large**: Tiêu đề của yêu cầu quá lớn.
- **451 Unavailable For Legal Reasons**: Tài nguyên không có sẵn vì lý do pháp lý.

### 5xx: Server Error (Lỗi phía máy chủ)
- **500 Internal Server Error**: Máy chủ gặp lỗi không xác định và không thể hoàn thành yêu cầu.
- **501 Not Implemented**: Máy chủ không hỗ trợ chức năng cần thiết để xử lý yêu cầu.
- **502 Bad Gateway**: Máy chủ hoạt động như một cổng hoặc proxy và nhận được phản hồi không hợp lệ từ máy chủ ngược dòng.
- **503 Service Unavailable**: Máy chủ tạm thời không khả dụng, thường do quá tải hoặc bảo trì.
- **504 Gateway Timeout**: Máy chủ không nhận được phản hồi kịp thời từ máy chủ ngược dòng.
- **505 HTTP Version Not Supported**: Máy chủ không hỗ trợ phiên bản HTTP được sử dụng trong yêu cầu.
- **506 Variant Also Negotiates**: Máy chủ gặp lỗi khi đàm phán nhiều biến thể của tài nguyên.
- **507 Insufficient Storage**: Máy chủ không có đủ không gian lưu trữ để hoàn thành yêu cầu.
- **508 Loop Detected**: Máy chủ phát hiện một vòng lặp vô hạn trong khi xử lý yêu cầu.
- **510 Not Extended**: Phần mở rộng yêu cầu để máy chủ hoàn thành yêu cầu không được cung cấp.
- **511 Network Authentication Required**: Khách hàng phải xác thực để truy cập tài nguyên mạng.
### Tổng hợp các mã thường dùng
- **423 Locked**: Khóa thiết bị.
- **403 Forbidden**: Khóa IP Public, Tài khoản bị khóa, Không có quyền truy cập.
- **400 Bad Request**: Token không đúng cấu trúc.
- **401 Unauthorized**: Hết hạn token.
- **422 Unprocessable Entity**: Dữ liệu không đúng cấu trúc.
- **503 Service Unavailable**: Máy chủ tạm thời không thể xử lý yêu cầu, thường là do các lý do như không có kết nối internet hoặc mất kết nối mạng LAN.
