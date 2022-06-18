// Bài 1: Tính diện tích chu vi hình chữ nhật
document.getElementById('btn_bai1').onclick = function () {
    kqBai1 = chuViDienTichHCN('b1_chieuDai', 'b1_chieuRong')
    document.querySelector('.content .kqBai1').innerHTML = kqBai1
}
/**
 * Hàm tính chu vi, diện tích hình chữ nhật
 * @param {*} so1 id cạnh 1 nhập vào
 * @param {*} so2 id cạnh 2 nhập vào
 * @returns chu vi, diện tích HCN
 */
function chuViDienTichHCN(so1, so2) {
    // input: number
    var canh1 = Number(document.getElementById(so1).value)
    var canh2 = Number(document.getElementById(so2).value)
    // output: number
    var ketqua = 0;
    // progress
    var ChuVi = (canh1 + canh2) * 2
    var dienTich = canh1 * canh2
    if (canh1 <= 0 || canh2 <= 0) {
        ketqua = 'Cạnh HCN phải lớn hơn 0'
    } else {
        ketqua = 'Chu vi: ' + ChuVi + ', diện tích: ' + dienTich
    }
    return ketqua
}

// Bài 2: Tính tổng các ký số của số nhỏ hơn 4 chữ số
document.getElementById('btn_bai2').onclick = function () {
    kqBai2 = tong3KySo('b2_so')
    document.querySelector('.content .kqBai2').innerHTML = kqBai2
}
/**
 * Hàm tính tổng các ký số của số nhỏ hơn 4 chữ số
 * @param {*} id id số nhập vào
 * @returns tổng 3 ký số
 */
function tong3KySo(id) {
    // input: number
    var so = Number(document.getElementById(id).value)
    // output: number
    var ketqua = 0;
    //progress
    var hangTram = Math.floor(so / 100)
    var hangChuc = Math.floor((so % 100) / 10)
    var hangDV = so % 10
    if (so > 999 || so < 0) {
        ketqua = 'Số nhập sai'
    } else {
        ketqua = 'Tổng các ký số bằng: ' + (hangTram + hangChuc + hangDV)
    }
    return ketqua
}

// Bài 3: Sắp xếp 3 số nguyên tăng dần
document.getElementById('btn_bai3').onclick = function () {
    kqBai3 = sapXep3SoNguyenTangDan('b3_soThu1', 'b3_soThu2', 'b3_soThu3')
    document.querySelector('.content .kqBai3').innerHTML = kqBai3
}
/**
 * Hàm sắp xếp 3 số theo thứ tự tăng dần
 */
function sapXep3SoNguyenTangDan(id1, id2, id3) {
    // input: number
    var so1 = Number(document.getElementById(id1).value)
    var so2 = Number(document.getElementById(id2).value)
    var so3 = Number(document.getElementById(id3).value)
    // output: string
    var ketqua = '';
    // progress
    if (so1 > so2) {
        if (so2 > so3) {
            ketqua = so3 + ' < ' + so2 + ' < ' + so1
        } else if (so3 > so1) {
            ketqua = so2 + ' < ' + so1 + ' < ' + so3
        } else {
            ketqua = so2 + ' < ' + so3 + ' < ' + so1
        }
    } else {
        if (so2 < so3) {
            ketqua = so1 + ' < ' + so2 + ' < ' + so3
        } else if (so3 < so1) {
            ketqua = so3 + ' < ' + so1 + ' < ' + so2
        } else {
            ketqua = so1 + ' < ' + so3 + ' < ' + so2
        }
    }
    return ketqua
}

// Bài 4: Chương trình chào hỏi
document.getElementById('btn_bai4').onclick = function () {
    var cacThanhVien = document.getElementById('b4_cacThanhVien').value
    var kqBai4 = '';
    if (cacThanhVien == 'bo') {
        kqBai4 = 'Xin chào Bố!'
    } else if (cacThanhVien == 'me') {
        kqBai4 = 'Xin chào Mẹ!'
    } else if (cacThanhVien == 'anhTrai') {
        kqBai4 = 'Xin chào Anh Trai!'
    } else if (cacThanhVien == 'emGai') {
        kqBai4 = 'Xin chào Em Gái!'
    } else {
        kqBai4 = 'Xin chào Người lạ ơi!'
    }
    document.querySelector('.content .kqBai4').innerHTML = kqBai4
}

// Bài 5: Đếm số chẵn, số lẻ
document.getElementById('btn_bai5').onclick = function () {
    var soThu1 = Number(document.getElementById('b5_soThu1').value)
    var soThu2 = Number(document.getElementById('b5_soThu2').value)
    var soThu3 = Number(document.getElementById('b5_soThu3').value)
    var kqBai3 = 0;
    if (soThu1 % 2 == 0) {
        kqBai3++
    }
    if (soThu2 % 2 == 0) {
        kqBai3++
    }
    if (soThu3 % 2 == 0) {
        kqBai3++
    }
    document.querySelector('.content .kqBai5').innerHTML = 'có ' + kqBai3 + ' số chẵn' + ', ' + (3 - kqBai3) + ' số lẻ'
}

// Bài 6: Nhận biết tam giác
document.getElementById('btn_bai6').onclick = function () {
    kqBai6 = nhanBietTamGiac('b6_canh1', 'b6_canh2', 'b6_canh3')
    document.querySelector('.content .kqBai6').innerHTML = kqBai6
}
/**
 * Hàm nhận biết tam giác
 */
function nhanBietTamGiac(id1, id2, id3) {
    // input: number
    var canh1 = Number(document.getElementById(id1).value)
    var canh2 = Number(document.getElementById(id2).value)
    var canh3 = Number(document.getElementById(id3).value)
    // output: string
    var ketqua = '';
    // progress
    var canh1Bp = canh1 * canh1
    var canh2Bp = canh2 * canh2
    var canh3Bp = canh3 * canh3
    if (canh1 == canh2 && canh1 == canh3 && canh2 == canh3) {
        ketqua = 'Tam giác đều'
    } else if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3) {
        ketqua = 'Tam giác cân'
    } else if (canh1Bp == canh2Bp + canh3Bp || canh2Bp == canh1Bp + canh3Bp || canh3Bp == canh1Bp + canh2Bp) {
        ketqua = 'Tam giác vuông'
    } else {
        ketqua = 'Tam giác nào đó'
    }
    return ketqua
}

// Bài 7: Tìm ngày tháng
document.getElementById('btn_bai71').onclick = function () {
    kqBai7 = timNgayHomQua('b7_ngay', 'b7_thang', 'b7_nam')
    document.querySelector('.content .kqBai7').innerHTML = kqBai7
}
document.getElementById('btn_bai72').onclick = function () {
    kqBai7 = timNgayMai('b7_ngay', 'b7_thang', 'b7_nam')
    document.querySelector('.content .kqBai7').innerHTML = kqBai7
}
/**
 * Hàm tìm ngày hôm qua
 */
function timNgayHomQua(id1, id2, id3) {
    // input
    var ngay = Number(document.getElementById(id1).value)
    var thang = Number(document.getElementById(id2).value)
    var nam = Number(document.getElementById(id3).value)
    // output
    var ketqua = '';
    // progress
    if (thang < 1 || thang > 12 || nam < 1) {
        ketqua = 'Không tồn tại ngày'
    } else if ((thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10) && (ngay < 1 || ngay > 31)) {
        ketqua = 'Không tồn tại ngày'
    } else if ((thang == 4 || thang == 6 || thang == 9 || thang == 11) && (ngay < 1 || ngay > 30)) {
        ketqua = 'Không tồn tại ngày'
    } else if (thang == 2 && nam % 4 == 0 && (ngay < 1 || ngay > 29)) {
        ketqua = 'Không tồn tại ngày'
    } else if (thang == 2 && nam % 4 != 0 && (ngay < 1 || ngay > 28)) {
        ketqua = 'Không tồn tại ngày'
    } else if (ngay == 1 && thang == 1 && nam == 1) {
        ketqua = 'Lịch bắt đầu từ 1/1/1'
    } else if (ngay == 1 && thang == 1) {
        ketqua = 'ngày 31 tháng 12 năm  ' + (nam - 1)
    } else if (ngay == 1 && (thang == 5 || thang == 7 || thang == 10 || thang == 12)) {
        ketqua = 'ngày 30 tháng ' + (thang - 1) + ' năm ' + nam
    } else if (ngay == 1 && thang == 3 && nam % 4 == 0) {
        ketqua = 'ngày 29 tháng 2 ' + ' năm ' + nam
    } else if (ngay == 1 && thang == 3) {
        ketqua = 'ngày 28 tháng 2 ' + ' năm ' + nam
    } else if (ngay == 1 && (thang == 2 || thang == 4 || thang == 6 || thang == 8 || thang == 9 || thang || 11)) {
        ketqua = 'ngày 31 tháng ' + (thang - 1) + ' năm ' + nam
    } else {
        ketqua = 'ngày ' + (ngay - 1) + ' tháng ' + thang + ' năm ' + nam
    }
    return ketqua
}
/**
 * Hàm tìm ngày mai
 */
function timNgayMai(id1, id2, id3) {
    var ngay = Number(document.getElementById(id1).value)
    var thang = Number(document.getElementById(id2).value)
    var nam = Number(document.getElementById(id3).value)
    // output
    var ketqua = '';
    // progress
    if (thang < 1 || thang > 12 || nam < 1) {
        ketqua = 'Không tồn tại ngày'
    } else if ((thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10) && (ngay < 1 || ngay > 31)) {
        ketqua = 'Không tồn tại ngày'
    } else if ((thang == 4 || thang == 6 || thang == 9 || thang == 11) && (ngay < 1 || ngay > 30)) {
        ketqua = 'Không tồn tại ngày'
    } else if (thang == 2 && nam % 4 == 0 && (ngay < 1 || ngay > 29)) {
        ketqua = 'Không tồn tại ngày'
    } else if (thang == 2 && nam % 4 != 0 && (ngay < 1 || ngay > 28)) {
        ketqua = 'Không tồn tại ngày'
    } else if (ngay == 31 && thang == 12) {
        ketqua = 'ngày 1 tháng 1 năm  ' + (nam + 1)
    } else if (ngay == 30 && (thang == 4 || thang == 6 || thang == 9 || thang == 11)) {
        ketqua = 'ngày 1 tháng ' + (thang + 1) + ' năm ' + nam
    } else if (ngay == 29 && thang == 2 && nam % 4 == 0) {
        ketqua = 'ngày 1 tháng 3 ' + ' năm ' + nam
    } else if (ngay == 28 && thang == 2 && nam % 4 != 0) {
        ketqua = 'ngày 1 tháng 3 ' + ' năm ' + nam
    } else if (ngay == 31 && (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10)) {
        ketqua = 'ngày 1 tháng ' + (thang + 1) + ' năm ' + nam
    } else {
        ketqua = 'ngày ' + (ngay + 1) + ' tháng ' + thang + ' năm ' + nam
    }
    return ketqua
}

// Bài 8: Đếm số ngày trong tháng
document.getElementById('btn_bai8').onclick = function () {
    kqBai8 = demNgayTrongThang('b8_thang', 'b8_nam')
    document.querySelector('.content .kqBai8').innerHTML = kqBai8
}
/**
 * Hàm đếm số ngày trong tháng
 */
function demNgayTrongThang(id1, id2) {
    // input: number
    var thang = Number(document.getElementById(id1).value)
    var nam = Number(document.getElementById(id2).value)
    // output: number
    var ketqua = 0;
    // progress
    if (thang < 1 || thang > 12 || nam < 1) {
        ketqua = 'Không tồn tại'
    } else if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
        ketqua = 'Tháng ' + thang + ' năm ' + nam + ' có 31 ngày'
    } else if (thang == 2 && nam % 4 == 0) {
        ketqua = 'Tháng 2' + ' năm ' + nam + ' có 29 ngày'
    } else if (thang == 2 && nam % 4 != 0) {
        ketqua = 'Tháng 2' + ' năm ' + nam + ' có 28 ngày'
    } else {
        ketqua = 'Tháng ' + thang + ' năm ' + nam + ' có 30 ngày'
    }
    return ketqua
}

// Bài 9: Đọc số nhỏ hơn 4 chữ số 
document.getElementById('btn_bai9').onclick = function () {
    kqBai9 = docSoNhoHon4CS('b9_so')
    document.querySelector('.content .kqBai9').innerHTML = kqBai9
}
/**
 * Hàm đọc số nhỏ hơn 4 chữ số
 */
function docSoNhoHon4CS(id) {
    // input: number
    var so = Number(document.getElementById(id).value)
    // output: string
    var ketqua = '';
    //progress
    var hangTram = Math.floor(so / 100)
    var hangChuc = Math.floor((so % 100) / 10)
    var hangDv = so % 10
    var ketqua1 = '';
    var ketqua2 = '';
    var ketqua3 = '';
    switch (hangTram) {
        case 0: ketqua1 = ''
            break;
        case 1: ketqua1 = 'Một trăm '
            break;
        case 2: ketqua1 = 'Hai trăm '
            break;
        case 3: ketqua1 = 'Ba trăm '
            break;
        case 4: ketqua1 = 'Bốn trăm '
            break;
        case 5: ketqua1 = 'Năm trăm '
            break;
        case 6: ketqua1 = 'Sáu trăm '
            break;
        case 7: ketqua1 = 'Bảy trăm '
            break;
        case 8: ketqua1 = 'Tám trăm '
            break;
        case 9: ketqua1 = 'Chín trăm '
            break;
    }
    switch (hangChuc) {
        case 0: ketqua2 = ''
            break;
        case 1: ketqua2 = 'mười '
            break;
        case 2: ketqua2 = 'hai mươi '
            break;
        case 3: ketqua2 = 'ba mươi '
            break;
        case 4: ketqua2 = 'bốn mươi '
            break;
        case 5: ketqua2 = 'năm mươi '
            break;
        case 6: ketqua2 = 'sáu mươi '
            break;
        case 7: ketqua2 = 'bảy mươi '
            break;
        case 8: ketqua2 = 'tám mươi '
            break;
        case 9: ketqua2 = 'chín mươi '
            break;
    }
    switch (hangDv) {
        case 0: ketqua3 = ''
            break;
        case 1: ketqua3 = 'một'
            break;
        case 2: ketqua3 = 'hai'
            break;
        case 3: ketqua3 = 'ba'
            break;
        case 4: ketqua3 = 'bốn'
            break;
        case 5: ketqua3 = 'năm'
            break;
        case 6: ketqua3 = 'sáu'
            break;
        case 7: ketqua3 = 'bảy'
            break;
        case 8: ketqua3 = 'tám'
            break;
        case 9: ketqua3 = 'chín '
            break;
    }
    if (hangTram == 0 && hangChuc == 0 && hangDv == 0) {
        ketqua1 = 'Không'
    }
    if (hangTram != 0 && hangChuc == 0 && hangDv != 0) {
        ketqua2 = 'linh '
    }
    if (hangChuc != 0 && hangDv == 5) {
        ketqua3 = 'lăm'
    }
    if (hangTram != 0 && hangChuc == 0 && hangDv == 4) {
        ketqua3 = 'tư'
    }
    if (hangChuc > 1 && hangDv == 4) {
        ketqua3 = 'tư'
    }
    if (hangChuc > 1 && hangDv == 1) {
        ketqua3 = 'mốt'
    }
    ketqua = ketqua1 + ketqua2 + ketqua3
    return ketqua
}

// Bài 10: Quản lý tuyển sinh
document.getElementById('btn_bai10').onclick = function () {
    // input: number
    var diemChuan = Number(document.getElementById('b10_diemChuan').value)
    var khuVuc = Number(document.getElementById('b10_khuVuc').value)
    var doiTuong = Number(document.getElementById('b10_doiTuong').value)
    var diemMon1 = Number(document.getElementById('b10_diemMon1').value)
    var diemMon2 = Number(document.getElementById('b10_diemMon2').value)
    var diemMon3 = Number(document.getElementById('b10_diemMon3').value)
    // output: string
    var kqBai10 = '';
    // progress
    var tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong
    if (diemChuan < 0 || diemChuan > 30) {
        kqBai10 = 'Điểm chuẩn sai'
    } else if (diemMon1 < 0 || diemMon1 > 10 || diemMon2 < 0 || diemMon2 > 10 || diemMon3 < 0 || diemMon3 > 10) {
        kqBai10 = 'Điểm môn sai'
    } else if (tongDiem >= diemChuan && diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
        kqBai10 = 'Bạn đã đậu. Tổng điểm: ' + tongDiem.toLocaleString('vn',{minimumFractionDigits:2,maximumFractionDigits:2})
    } else if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
        kqBai10 = 'Bạn đã trượt do có điểm bằng 0'
    } else {
        kqBai10 = 'Bạn đã trượt. Tổng điểm: ' + tongDiem.toLocaleString('vn',{minimumFractionDigits:2,maximumFractionDigits:2})
    }
    document.querySelector('.content .kqBai10').innerHTML = kqBai10
}

// Bài 11: Tính tiền điện
document.getElementById('btn_bai11').onclick = function () {
    // input: string, number
    var hoTen = document.getElementById('b11_hoTen').value
    var soKw = Number(document.getElementById('b11_soKw').value)
    // output: number
    var kqBai11 = '';
    // progress
    if (soKw <= 0) {
        kqBai11 = 'Mời nhập số Kw điện'
    } else if (soKw > 0 && soKw <= 50) {
        kqBai11 = 'Họ tên: ' + hoTen + ', Tiền điện: ' + (soKw * 500).toLocaleString('vn',{maximumFractionDigits:0}) + 'đ'
    } else if (soKw > 50 && soKw <= 100) {
        kqBai11 = 'Họ tên: ' + hoTen + ', Tiền điện: ' + (50 * 500 + (soKw - 50) * 650).toLocaleString('vn',{maximumFractionDigits:0}) + 'đ'
    } else if (soKw > 100 && soKw <= 200) {
        kqBai11 = 'Họ tên: ' + hoTen + ', Tiền điện: ' + (50 * 500 + 50 * 650 + (soKw - 100) * 850).toLocaleString('vn',{maximumFractionDigits:0}) + 'đ'
    } else if (soKw > 200 && soKw <= 350) {
        kqBai11 = 'Họ tên: ' + hoTen + ', Tiền điện: ' + (50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100).toLocaleString('vn',{maximumFractionDigits:0}) + 'đ'
    } else {
        kqBai11 = 'Họ tên: ' + hoTen + ', Tiền điện: ' + (50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300).toLocaleString('vn',{maximumFractionDigits:0}) + 'đ'
    }
    document.querySelector('.content .kqBai11').innerHTML = kqBai11
}

// Bài 12: Tính thuế thu nhập cá nhân
document.getElementById('btn_bai12').onclick = function () {
    // input: string, number
    var b3_hoTen = document.getElementById('b12_hoTen').value
    var thuNhapNam = Number(document.getElementById('b12_thuNhapNam').value)
    var soNguoiPhuThuoc = Number(document.getElementById('b12_nguoiPhuThuoc').value)
    // output: number
    var kqBai12 = '';
    // progress
    var thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000
    if (thuNhapNam == '') {
        kqBai12 = 'Nhập tổng thu nhập năm'
    } else if (thuNhapChiuThue <= 0) {
        kqBai12 = 'Họ tên: ' + b3_hoTen + ', Không phải đóng thuế'
    } else if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 60000000) {
        kqBai12 = 'Họ tên: ' + b3_hoTen + ', Thuế thu nhập cá nhân bằng: ' + (thuNhapChiuThue * 0.05).toLocaleString('vn',{maximumFractionDigits:0}) + 'đ'
    } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
        kqBai12 = 'Họ tên: ' + b3_hoTen + ', Thuế thu nhập cá nhân bằng: ' + (60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.1).toLocaleString('vn',{maximumFractionDigits:0}) + 'đ'
    } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
        kqBai12 = 'Họ tên: ' + b3_hoTen + ', Thuế thu nhập cá nhân bằng: ' + (60000000 * 0.05 + 60000000 * 0.1 + (thuNhapChiuThue - 120000000) * 0.15).toLocaleString('vn',{maximumFractionDigits:0}) + 'đ'
    } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
        kqBai12 = 'Họ tên: ' + b3_hoTen + ', Thuế thu nhập cá nhân bằng: ' + (60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + (thuNhapChiuThue - 210000000) * 0.2).toLocaleString('vn',{maximumFractionDigits:0}) + 'đ'
    } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
        kqBai12 = 'Họ tên: ' + b3_hoTen + ', Thuế thu nhập cá nhân bằng: ' + (60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + (thuNhapChiuThue - 384000000) * 0.25).toLocaleString('vn',{maximumFractionDigits:0}) + 'đ'
    } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
        kqBai12 = 'Họ tên: ' + b3_hoTen + ', Thuế thu nhập cá nhân bằng: ' + (60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + (thuNhapChiuThue - 624000000) * 0.3).toLocaleString('vn',{maximumFractionDigits:0}) + 'đ'
    } else {
        kqBai12 = 'Họ tên: ' + b3_hoTen + ', Thuế thu nhập cá nhân bằng: ' + (60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + 336000000 * 0.3 + (thuNhapChiuThue - 960000000) * 0.35).toLocaleString('vn',{maximumFractionDigits:0}) + 'đ'
    }
    document.querySelector('.content .kqBai12').innerHTML = kqBai12
}

// Bài 13: Tính tiền cáp
document.getElementById('b13_khachHang').oninput = function () {
    var khachHang = document.getElementById('b13_khachHang').value
    if (khachHang == 2) {
        document.getElementById('b13_soKetNoi').style.display = 'inline-block'
    } else {
        document.getElementById('b13_soKetNoi').style.display = 'none'
    }
}
document.getElementById('btn_bai13').onclick = function () {
    // input: string, number
    var khachHang = document.getElementById('b13_khachHang').value
    var maKhachHang = document.getElementById('b13_maKhachHang').value
    var soKenh = Number(document.getElementById('b13_soKenh').value)
    var soKetNoi = Number(document.getElementById('b13_soKetNoi').value)
    // output: number
    var kqBai13 = '';
    // progress
    if (khachHang == '') {
        kqBai13 = 'Mời chọn loại khách hàng'
    } else if (khachHang == 1) {
        kqBai13 = 'Mã khách hàng: ' + maKhachHang + ', Tiền cáp: ' + (4.5 + 20.5 + 7.5 * soKenh).toLocaleString('vn',{minimumFractionDigits:2, maximumFractionDigits:2}) + '$'
    } else if (khachHang == 2 && soKetNoi <= 10) {
        kqBai13 = 'Mã khách hàng: ' + maKhachHang + ', Tiền cáp: ' + (15 + 75 + 50 * soKenh).toLocaleString('vn',{minimumFractionDigits:2, maximumFractionDigits:2}) + '$'
    } else {
        kqBai13 = 'Mã khách hàng: ' + maKhachHang + ', Tiền cáp: ' + (15 + 75 + 5 * (soKetNoi - 10) + 50 * soKenh).toLocaleString('vn',{minimumFractionDigits:2, maximumFractionDigits:2}) + '$'
    }
    document.querySelector('.content .kqBai13').innerHTML = kqBai13
}

// Bài 14: Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + … + x^n (Sử dụng vòng lặp và hàm)
document.getElementById('btn_bai14').onclick = function () {
    kqBai14 = tinhTong('b14_soX', 'b14_soN')
    document.querySelector('.content .kqBai14').innerHTML = kqBai14
}
/**
 * Hàm tính tổng S(n) = x + x^2 + x^3 + … + x^n
 * @param {*} idsoX id số x 
 * @param {*} idsoN id số n
 * @returns Tổng S(n)
 */
function tinhTong(idsoX, idsoN) {
    // input: number
    var soX = Number(document.getElementById(idsoX).value)
    var soN = Number(document.getElementById(idsoN).value)
    // output: number
    var tong = -1;
    // progress 
    for (var i = 0; i <= soN; i++) {
        tong += (soX ** i)
    }
    return 'Tổng bằng: ' + tong;
}

// Bài 15: Tính giai thừa của số nguyên dương n
document.getElementById('btn_bai15').onclick = function () {
    kqBai15 = tinhGiaiThua('b15_soN')
    document.querySelector('.content .kqBai15').innerHTML = kqBai15
}
/**
 * Hàm tính giai thừa
 * @param {*} id id của số nhập vào
 */
function tinhGiaiThua(id) {
    // input: number
    var so = Number(document.getElementById(id).value)
    // output: number
    var ketqua = 1;
    // progress
    for (var i = 1; i <= so; i++) {
        ketqua *= i
    }
    return so + '! = ' + ketqua
}

// Bài 16 In 10 thẻ div: Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh
document.getElementById('btn_bai16').onclick = function () {
    // output: string
    kqBai16 = '';
    //progress
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            kqBai16 += '<div style="background-color: red">div chẵn</div>'
        } else {
            kqBai16 += '<div style="background-color: blue">div lẻ</div>'
        }
    }
    // in output ra giao diện
    document.querySelector('.content .kqBai16').innerHTML = kqBai16
}

// Bài 17: In các số nguyên tố từ 1 tới n
document.getElementById('btn_bai17').onclick = function () {
    kqBai17 = inSoNguyenTo('b17_soN')
    // in output ra giao diện
    document.querySelector('.content .kqBai17').innerHTML = kqBai17
}
/**
 * Hàm in số nguyên tố từ 1 tới số đó
 * @param {*} id id của số nhập vào
 */
function inSoNguyenTo(id) {
    // input: number
    var so = Number(document.getElementById(id).value)
    // output: string
    var ketqua = '';
    // progress
    for (i = 2; i <= so; i++) {
        var checkSNT = true
        for (j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                checkSNT = false
                break
            }
        }
        if (checkSNT) {
            ketqua += (i + ' ')
        }
    }
    return ketqua;
}