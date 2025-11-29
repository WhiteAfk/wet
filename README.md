# wET - Personal Portfolio Website

Trang web cá nhân được thiết kế đẹp mắt với giao diện hiện đại, tối ưu hóa hoàn toàn cho các thiết bị di động.

## 📋 Nội dung

- **Trang chủ**: Giới thiệu bản thân với avatar, bio và hashtags
- **Về tôi**: Thông tin chi tiết về bạn, kỹ năng đang học, sở thích và mục tiêu
- **Góc chia sẻ**: Blog/bài viết chia sẻ kiến thức
- **Liên hệ**: Các kênh liên lạc (Gmail, Facebook, Zalo, Discord)
- **Ủng hộ**: Nút donate để nhận tài trợ

## 🎨 Tính năng

✅ Thiết kế hiện đại với gradient màu sắc  
✅ Hoàn toàn responsive trên tất cả thiết bị (desktop, tablet, mobile)  
✅ Giao diện cân đối trên điện thoại (màn hình nhỏ <= 480px)  
✅ Hiệu ứng hover mượt mà  
✅ Font chữ đẹp (Inter font)  
✅ Tối ưu hóa tốc độ tải  
✅ SEO friendly  

## 📁 Cấu trúc thư mục

```
wet/
├── index.html                 # Trang chủ
├── posts.html                 # Trang blog/chia sẻ
├── donate.html                # Trang donate
├── 404.html                   # Trang lỗi 404
├── bank.html                  # Hướng dẫn chuyển khoản ngân hàng
├── momo.html                  # Hướng dẫn thanh toán Momo
├── zalopay.html               # Hướng dẫn thanh toán Zalopay
├── maintenance.html           # Trang bảo trì
├── updating.html              # Trang đang cập nhật
├── README.md                  # Tài liệu này
├── css/
│   ├── index.css              # CSS cho trang chủ
│   ├── posts.css              # CSS cho trang blog
│   ├── donate.css             # CSS cho trang donate
│   ├── bank.css               # CSS cho trang ngân hàng
│   ├── momo.css               # CSS cho trang Momo
│   ├── zalopay.css            # CSS cho trang Zalopay
│   ├── 404.css                # CSS cho trang lỗi
│   ├── maintenance.css        # CSS cho trang bảo trì
│   ├── updating.css           # CSS cho trang cập nhật
│   ├── animations.css         # CSS animation
│   └── thesieutoc.css         # CSS bổ sung
└── js/
    └── animations.js          # JavaScript cho hiệu ứng
```

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