import {
  books,
  borrowDetails,
  borrowTickets,
  classes,
  libraryCards,
  readers,
  reservations,
  returnTickets,
} from "@/data/libraryData";

export function getDeleteConstraintMessage(row) {
  if (row.MaSach && row.TenSach) {
    const borrowed = borrowDetails.some((detail) => detail.MaSach === row.MaSach);
    const reserved = reservations.some((reservation) => reservation.MaSach === row.MaSach);

    if (borrowed || reserved) {
      return `Không thể xóa sách "${row.TenSach}" vì sách đang được liên kết với phiếu mượn hoặc phiếu đặt.`;
    }
  }

  if (row.MaDG && row.TenDG) {
    const hasBorrowTicket = borrowTickets.some((ticket) => ticket.MaDG === row.MaDG);
    const hasReservation = reservations.some((reservation) => reservation.MaDG === row.MaDG);
    const hasLibraryCard = libraryCards.some((card) => card.MaDG === row.MaDG);

    if (hasBorrowTicket || hasReservation || hasLibraryCard) {
      return `Không thể xóa độc giả "${row.TenDG}" vì độc giả đang có thẻ thư viện, phiếu mượn hoặc phiếu đặt liên quan.`;
    }
  }

  if (row.MaNV && row.TenNV && borrowTickets.some((ticket) => ticket.MaNV === row.MaNV)) {
    return `Không thể xóa nhân viên "${row.TenNV}" vì nhân viên đang được liên kết với phiếu mượn trả.`;
  }

  if (row.MaMT && row.NgayMuon) {
    const hasDetails = borrowDetails.some((detail) => detail.MaMT === row.MaMT);
    const hasReturnTicket = returnTickets.some((ticket) => ticket.MaMT === row.MaMT);

    if (hasDetails || hasReturnTicket) {
      return `Không thể xóa phiếu mượn "${row.MaMT}" vì phiếu đang có chi tiết sách hoặc phiếu trả liên quan.`;
    }
  }

  if (row.MaTG && row.TenTG && books.some((book) => book.MaTG === row.MaTG)) {
    return `Không thể xóa tác giả "${row.TenTG}" vì vẫn còn sách thuộc tác giả này.`;
  }

  if (row.MaNXB && row.TenNXB && books.some((book) => book.MaNXB === row.MaNXB)) {
    return `Không thể xóa nhà xuất bản "${row.TenNXB}" vì vẫn còn sách thuộc nhà xuất bản này.`;
  }

  if (row.MaTL && row.TenTL && books.some((book) => book.MaTL === row.MaTL)) {
    return `Không thể xóa thể loại "${row.TenTL}" vì vẫn còn sách thuộc thể loại này.`;
  }

  if (row.MaNN && row.TenNN && books.some((book) => book.MaNN === row.MaNN)) {
    return `Không thể xóa ngôn ngữ "${row.TenNN}" vì vẫn còn sách sử dụng ngôn ngữ này.`;
  }

  if (row.MaViTri && row.TenKe && books.some((book) => book.MaViTri === row.MaViTri)) {
    return `Không thể xóa kệ sách "${row.TenKe}" vì vẫn còn sách được xếp tại kệ này.`;
  }

  if (row.MaKhoa && row.TenKhoa) {
    const hasReaders = readers.some((reader) => reader.MaKhoa === row.MaKhoa);
    const hasClasses = classes.some((classItem) => classItem.MaKhoa === row.MaKhoa);

    if (hasReaders || hasClasses) {
      return `Không thể xóa khoa "${row.TenKhoa}" vì khoa đang có lớp hoặc độc giả liên quan.`;
    }
  }

  if (row.MaLop && row.TenLop && readers.some((reader) => reader.MaLop === row.MaLop)) {
    return `Không thể xóa lớp "${row.TenLop}" vì lớp đang có độc giả liên quan.`;
  }

  return null;
}
