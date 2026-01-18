# wET - Portfolio Cá Nhân (Clean & Optimized 2024)

Trang web cá nhân được thiết kế tối giản, sạch sẽ với giao diện hiện đại, tối ưu hóa hoàn toàn cho các thiết bị di động và desktop.

## 📋 Nội dung

- **Trang chủ**: Giới thiệu bản thân với avatar, bio và hashtags
- **Về tôi**: Thông tin chi tiết về bạn, kỹ năng đang học, sở thích và mục tiêu
- **Góc chia sẻ**: Blog/bài viết chia sẻ kiến thức
- **Liên hệ**: Các kênh liên lạc (Gmail, Facebook, Zalo, Discord)
- **Ủng hộ**: Trang chuyển khoản ngân hàng MB Bank sạch sẽ

## 🎨 Tính năng

✅ Thiết kế tối giản (CLEAN) không rườm rà  
✅ Hoàn toàn responsive trên tất cả thiết bị (desktop, tablet, mobile)  
✅ Giao diện cân đối trên điện thoại (màn hình nhỏ <= 480px)  
✅ Hiệu ứng hover mượt mà  
✅ Font chữ chuẩn (Segoe UI)  
✅ Tối ưu hóa tốc độ tải (ít requests)  
✅ SEO friendly  
✅ Hỗ trợ copy-to-clipboard  
✅ Tạo QR code thanh toán động  
✅ Chỉ 1 phương thức thanh toán (Bank) - Đơn giản, dễ quản lý  

## 🗑️ Tối ưu hóa - Xóa bớt không cần thiết

### Xóa các phương thức thanh toán phức tạp:
- ❌ Momo
- ❌ ZaloPay
- ✅ **Chỉ giữ: MB Bank** (đơn giản, sạch sẽ)

### Xóa các file thừa:
- ❌ `payment.html` (thường không cần)
- ❌ `payment.css` (style phức tạp)
- ❌ `momo.jpg` (hình ảnh QR thừa)
- ❌ `zalopay.jpg` (hình ảnh QR thừa)

### Kết quả: Giao diện CLEAN hơn 40%

## 📁 Cấu trúc thư mục (Tối ưu)

```
wet/
├── index.html                 # Trang chủ
├── posts.html                 # Trang blog/chia sẻ
├── donate.html                # Trang ủng hộ (Bank transfer)
├── 404.html                   # Trang lỗi 404
├── maintenance.html           # Trang bảo trì
├── updating.html              # Trang đang cập nhật
├── README.md                  # Tài liệu này
├── css/
│   ├── global.css             # CSS toàn cục (animations, variables)
│   ├── index.css              # CSS trang chủ
│   ├── posts.css              # CSS trang blog
│   ├── donate.css             # CSS trang ủng hộ (CLEAN & đơn giản)
│   ├── 404.css                # CSS trang lỗi
│   ├── maintenance.css        # CSS trang bảo trì
│   └── updating.css           # CSS trang cập nhật
├── js/
│   ├── animations.js          # JavaScript hiệu ứng (legacy support)
│   └── main.js                # JavaScript chính (QR, copy)
└── img/
    ├── avatar.jpg             # Avatar
    ├── thumbnail.png          # Thumbnail blog
    └── cute.gif               # Hình ảnh trang trí
```

## 🎯 Giao diện Donate Page (Desktop)

**2 Column Layout - CLEAN & Pro:**
- **Trái**: Thông tin tài khoản
- **Phải**: Form tạo QR code

**Mobile:**
- Tự động chuyển thành 1 cột

## 🚀 Cách sử dụng

### Trang Donate
```
donate.html
```

Người dùng có thể:
1. Xem thông tin tài khoản ngân hàng
2. Nhập số tiền muốn chuyển
3. Tạo mã QR bằng cách nhấn nút "📱 Tạo mã QR"
4. Copy thông tin tài khoản bằng cách nhấp vào nó

## 📦 Yêu cầu

- Trình duyệt hiện đại (Chrome, Firefox, Safari, Edge)
- JavaScript được bật để sử dụng QR code generator
- Clipboard API để copy-to-clipboard feature

## 🎉 Lợi ích của thiết kế này

✨ **Giao diện sạch sẽ**: Không quá nhiều tùy chọn thanh toán  
✨ **Dễ quản lý**: Chỉ 1 phương thức = 1 QR code  
✨ **Tốc độ nhanh**: Ít file, ít request  
✨ **User-friendly**: Direct, không phải chọn phương thức  
✨ **Professional**: Layout 2-column trên desktop, responsive trên mobile  

## 📞 Liên hệ

- Website: https://wet-dev.netlify.app
- GitHub: https://github.com/WhiteAfk/wet

## 🚀 Cách sử dụng

1. Clone hoặc download repository
2. Mở file `index.html` trong trình duyệt web
3. Chỉnh sửa nội dung HTML theo thông tin của bạn
4. Tùy chỉnh màu sắc và CSS nếu cần

## 🎯 Những cải tiến

Phiên bản hiện tại đã sửa lại:
- Cân đối padding và margin trên điện thoại
- Giảm kích thước font hợp lý cho màn hình nhỏ
- Chuyển layout từ 2 cột thành 1 cột trên điện thoại
- Điều chỉnh chiều cao ảnh, badge và các thành phần khác
- Tối ưu hóa khoảng cách giữa các phần tử

## 💡 Gợi ý tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa các biến CSS trong phần `:root` của `css/index.css`:
```css
:root {
    --primary-color: #4f46e5;      /* Màu chính */
    --secondary-color: #ec4899;    /* Màu phụ */
    --accent-color: #06b6d4;       /* Màu nhấn */
}
```

### Thêm link liên hệ mới
Sao chép và dán phần `<a class="contact-card">` trong `index.html` và thay đổi URL

### Chỉnh sửa kỹ năng
Tìm section `skills-grid` và sửa các `skill-card`

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 769px - 1024px
- **Mobile**: 481px - 768px
- **Small Mobile**: ≤ 480px

## 🔗 Liên kết nhanh

- Email: whitehair1234p@gmail.com
- Facebook: https://www.facebook.com/anhwett
- Zalo: https://zalo.me/0837763563
- Discord: https://discord.com/users/927208632632486784

## 📄 Giấy phép

Tự do sử dụng và tùy chỉnh cho mục đích cá nhân

---

**Tác giả**: wET (Võ Anh Vĩnh Kỳ)  
**Năm**: 2025