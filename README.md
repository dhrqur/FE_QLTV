# Frontend - Hệ thống Quản lý Thư viện

## 1. Giới thiệu

Đây là phần giao diện của hệ thống Quản lý Thư viện, được xây dựng bằng ReactJS và Vite. Frontend dùng để hiển thị giao diện, xử lý thao tác người dùng và gọi API từ Backend.

## 2. Công nghệ sử dụng

- ReactJS
- Vite
- Tailwind CSS
- React Router
- Lucide React
- Sonner Toast
- shadcn/ui

## 3. Chức năng chính

- Đăng nhập hệ thống
- Phân quyền người dùng
- Dashboard tổng quan
- Quản lý sách
- Quản lý độc giả
- Quản lý nhân viên
- Quản lý tác giả
- Quản lý thể loại
- Quản lý nhà xuất bản
- Quản lý kệ sách
- Quản lý khoa, lớp
- Quản lý ngôn ngữ
- Quản lý thẻ thư viện
- Quản lý mượn trả sách
- Quản lý chi tiết mượn trả
- Tìm kiếm, thêm, sửa, xóa dữ liệu
- Hiển thị thông báo thao tác

## 4. Tài khoản đăng nhập mẫu

```txt
Quản lý:
Username: admin
Password: 123456

Thủ thư:
Username: thuthu
Password: 123456
##5. Cấu trúc thư mục
FE_QLTV/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── routes/
│   ├── utils/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
##6. Cài đặt

Yêu cầu cần có Node.js và npm.

Kiểm tra phiên bản:

node -v
npm -v

Clone project:

git clone <link-repository-frontend>
cd FE_QLTV

Cài thư viện:

npm install
##7. Chạy project

Chạy ở môi trường phát triển:

npm run dev

Sau đó mở trình duyệt tại:

http://localhost:5173
