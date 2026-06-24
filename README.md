# Frontend - Hệ thống Quản lý Thư viện

## Giới thiệu

Frontend của **Hệ thống Quản lý Thư viện** được xây dựng bằng **ReactJS** và **Vite**, cung cấp giao diện trực quan cho việc quản lý thư viện. Hệ thống hỗ trợ các chức năng quản lý sách, độc giả, nhân viên, mượn trả sách và các danh mục liên quan.

Frontend có nhiệm vụ hiển thị giao diện người dùng, xử lý thao tác trên trình duyệt và kết nối với Backend thông qua RESTful API để thực hiện các chức năng quản lý dữ liệu.

---

## Công nghệ sử dụng

* ReactJS
* Vite
* Tailwind CSS
* React Router DOM
* Lucide React
* Sonner Toast
* shadcn/ui

---

## Chức năng chính

* Đăng nhập hệ thống
* Phân quyền người dùng (Quản lý, Thủ thư)
* Dashboard tổng quan
* Quản lý sách
* Quản lý độc giả
* Quản lý nhân viên
* Quản lý tác giả
* Quản lý thể loại
* Quản lý nhà xuất bản
* Quản lý kệ sách
* Quản lý khoa
* Quản lý lớp
* Quản lý ngôn ngữ
* Quản lý thẻ thư viện
* Quản lý phiếu mượn
* Quản lý chi tiết mượn trả
* Tìm kiếm dữ liệu
* Thêm, sửa, xóa dữ liệu
* Hiển thị trạng thái và thông báo thao tác

---

## Tài khoản đăng nhập mẫu

### Quản lý

```txt
Username: admin
Password: 123456
```

### Thủ thư

```txt
Username: thuthu
Password: 123456
```

---

## Cấu trúc thư mục

```txt
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
```

---

## Cài đặt và chạy dự án

### Yêu cầu

* Node.js >= 18
* npm >= 9

Kiểm tra phiên bản:

```bash
node -v
npm -v
```

### Clone dự án

```bash
git clone <link-repository>
cd FE_QLTV
```

### Cài đặt thư viện

```bash
npm install
```

### Chạy môi trường phát triển

```bash
npm run dev
```

Sau khi chạy thành công, mở trình duyệt tại:

```txt
http://localhost:5173
```

---

```bash
npm install
npm run dev
```

---

## Nhóm thực hiện

**Nhóm 7 - 74DCHT23**

Dự án được thực hiện phục vụ học phần phát triển ứng dụng web, với mục tiêu xây dựng hệ thống quản lý thư viện hoàn chỉnh theo mô hình Client - Server.
