//Hàm chọn đến thẻ bất kì trên giao diện bằng selector
function DOM(selector) {
    return document.querySelector(selector)
}

// Chỉnh lại nút Thêm nhân viên
DOM('#btnThem').onclick = function () {
    DOM('#btnCapNhat').style.display = 'none'
    DOM('#btnThemNV').style.display = 'block'
    DOM('#tknv').disabled = ''
    DOM('#header-title').innerHTML = 'Log In'
    clearForm()
    clearThongBao()
}

// Tạo đối tượng NHANVIEN
function NHANVIEN(tknv, name, email, password, ngayLam, luongCB, chucVu, gioLam) {
    this.tknv = tknv;
    this.name = name;
    this.email = email;
    this.password = password;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
}
// Tạo phương thức tính tổng lương cho đối tượng NHANVIEN
NHANVIEN.prototype.tongLuong = function () {
    var tongLuong = 0;
    if (this.chucVu == 'Sếp') {
        tongLuong = Number(this.luongCB) * 3
    } else if (this.chucVu == 'Trưởng phòng') {
        tongLuong = Number(this.luongCB) * 2
    } else if (this.chucVu == 'Nhân viên') {
        tongLuong = Number(this.luongCB)
    }
    return tongLuong.toLocaleString();
}
// Tạo phương thức tính xếp loại cho đối tượng NHANVIEN
NHANVIEN.prototype.xepLoai = function () {
    var xepLoai = '';
    if (this.gioLam < 160) {
        xepLoai = 'Trung bình'
    } else if (this.gioLam >= 160 && this.gioLam < 176) {
        xepLoai = 'Khá'
    } else if (this.gioLam >= 176 && this.gioLam < 192) {
        xepLoai = 'Giỏi'
    } else if (this.gioLam >= 192) {
        xepLoai = 'Xuất sắc'
    }
    return xepLoai;
}

// Tạo đối tượng DANHSACHNHANVIEN có mảng danhsachNV để chứa các đối tượng NHANVIEN
function DANHSACHNHANVIEN() {
    this.danhsachNV = []
}
// Tạo phương thức thêm NHANVIEN vào mảng danhsachNV cho đối tượng DANHSACHNHANVIEN
DANHSACHNHANVIEN.prototype.themNV = function (nv) {
    this.danhsachNV.push(nv)
}

// Tạo biến DSNV khởi tạo từ hàm DANHSACHNHANVIEN để chứa các nhân viên
var DSNV = new DANHSACHNHANVIEN()
// Tạo biến là mảng chứa các đối tượng nhân viên
var mangDSNV = DSNV.danhsachNV

// Cài đặt nút Thêm người dùng - In ra giao diện từ dữ liệu người dùng nhập vào form
DOM('#btnThemNV').onclick = function () {
    // input
    var tknv = DOM('#tknv').value
    var name = DOM('#name').value
    var email = DOM('#email').value
    var password = DOM('#password').value
    var ngayLam = DOM('#datepicker').value
    var luongCB = DOM('#luongCB').value
    var chucVu = DOM('#chucvu').value
    var gioLam = DOM('#gioLam').value
    // output
    if (kiemTraNhap(tknv, name, email, password, ngayLam, luongCB, chucVu, gioLam)) {
        var nhanVien = new NHANVIEN(tknv, name, email, password, ngayLam, luongCB, chucVu, gioLam)
        DSNV.themNV(nhanVien)
        render(mangDSNV)
        clearForm()
    }
}
//Hàm xoá nhân viên
function xoaNhanVien(x) {
    var length = mangDSNV.length
    for (i = 0; i < length; i++) {
        if (mangDSNV[i].tknv == x) {
            mangDSNV.splice(i, 1)
            break;
        }
    }
    render(mangDSNV)
}
// Hàm sửa nhân viên
function suaNhanVien(x) {
    clearThongBao()
    DOM('#btnThemNV').style.display = 'none'
    DOM('#btnCapNhat').style.display = 'block'
    var length = mangDSNV.length
    for (i = 0; i < length; i++) {
        if (mangDSNV[i].tknv == x) {
            DOM('#header-title').innerHTML = 'Cập nhật TK: ' + mangDSNV[i].tknv
            DOM('#tknv').value = mangDSNV[i].tknv
            DOM('#tknv').disabled = 'true'
            DOM('#name').value = mangDSNV[i].name
            DOM('#email').value = mangDSNV[i].email
            DOM('#password').value = mangDSNV[i].password
            DOM('#datepicker').value = mangDSNV[i].ngayLam
            DOM('#luongCB').value = mangDSNV[i].luongCB
            DOM('#chucvu').value = mangDSNV[i].chucVu
            DOM('#gioLam').value = mangDSNV[i].gioLam
        }
    }
}
// Cài đặt nút Cập nhật - In ra giao diện từ dữ liệu người dùng sửa vào form
DOM('#btnCapNhat').onclick = function () {
    var tknv = DOM('#tknv').value
    var name = DOM('#name').value
    var email = DOM('#email').value
    var password = DOM('#password').value
    var ngayLam = DOM('#datepicker').value
    var luongCB = DOM('#luongCB').value
    var chucVu = DOM('#chucvu').value
    var gioLam = DOM('#gioLam').value
    var length = mangDSNV.length
    if (kiemTraNhap(undefined, name, email, password, ngayLam, luongCB, chucVu, gioLam)) {
        for (i = 0; i < length; i++) {
            if (mangDSNV[i].tknv == tknv) {
                mangDSNV[i].name = name
                mangDSNV[i].email = email
                mangDSNV[i].password = password
                mangDSNV[i].ngayLam = ngayLam
                mangDSNV[i].luongCB = luongCB
                mangDSNV[i].chucVu = chucVu
                mangDSNV[i].gioLam = gioLam
            }
        }
        DOM('#header-title').innerHTML = 'Cập nhật xong TK: ' + tknv
        render(mangDSNV)
    } else {
        DOM('#header-title').innerHTML = 'Cập nhật TK: ' + tknv
    }
}
// Hàm in ra giao diện các đối tượng trong danhsachNV
function render(Array) {
    var table = ''
    var lengthArr = Array.length
    for (i = 0; i < lengthArr; i++) {
        table += `<tr>
                    <td>${Array[i].tknv}</td>
                    <td>${Array[i].name}</td>
                    <td>${Array[i].email}</td>
                    <td>${Array[i].ngayLam}</td>
                    <td>${Array[i].chucVu}</td>
                    <td>${Array[i].tongLuong()}</td>
                    <td>${Array[i].xepLoai()}</td>					
                    <td>
                        <button class="btn btn-success" data-toggle="modal"	data-target="#myModal" onclick = "suaNhanVien(${Array[i].tknv})">Sửa</button>
                        <button class="btn btn-danger" onclick = "xoaNhanVien(${Array[i].tknv})">Xoá</button>
                    </td>									
                </tr>`
    }
    DOM('#tableDanhSach').innerHTML = table
}
// Hàm reset lại form
function clearForm() {
    DOM('#tknv').value = ''
    DOM('#name').value = ''
    DOM('#email').value = ''
    DOM('#password').value = ''
    DOM('#datepicker').value = ''
    DOM('#luongCB').value = ''
    DOM('#chucvu').value = 'Chọn chức vụ'
    DOM('#gioLam').value = ''
}
// Hàm reset lại thông báo
function clearThongBao() {
    DOM('#tbTKNV').style.display = 'none'
    DOM('#tbTen').style.display = 'none'
    DOM('#tbEmail').style.display = 'none'
    DOM('#tbMatKhau').style.display = 'none'
    DOM('#tbNgay').style.display = 'none'
    DOM('#tbLuongCB').style.display = 'none'
    DOM('#tbChucVu').style.display = 'none'
    DOM('#tbGiolam').style.display = 'none'
}
// Hàm kiểm tra tất cả dữ liệu nhập vào từ form
function kiemTraNhap(tknv, name, email, password, ngayLam, luongCB, chucVu, gioLam) {
    var x = true
    if (tknv == undefined) {
        x = true
    } else if (!KTtknv(tknv)) {
        x = false
    }
    if (!KTten(name)) {
        x = false
    }
    if (!KTemail(email)) {
        x = false
    }
    if (!KTmatKhau(password)) {
        x = false
    }
    if (!KTngayLam(ngayLam)) {
        x = false
    }
    if (!KTluongCB(luongCB)) {
        x = false
    }
    if (!KTChucVu(chucVu)) {
        x = false
    }
    if (!KTgioLam(gioLam)) {
        x = false
    }
    return x
}
// Hàm kiểm tra người dùng nhập tài khoản
function KTtknv(tknv) {
    var tb = DOM('#tbTKNV')
    var x = true
    var tknvTest = /^[0-9]+$/
    if (tknv == '') {
        tb.style.display = 'block'
        tb.innerHTML = 'Không để trống'
        x = false
    } else if (!tknvTest.test(tknv)) {
        tb.style.display = 'block'
        tb.innerHTML = 'Tài khoản phải là số'
        x = false
    } else if (tknv.length < 4 || tknv.length > 6) {
        tb.style.display = 'block'
        tb.innerHTML = 'Tài khoản cần 4 -6 số'
        x = false
    } else if (!KTTaiKhoanTrungNhau(tknv)) {
        x = false
    } else {
        tb.style.display = 'none'
    }
    return x
}
function KTTaiKhoanTrungNhau(tknv) {
    var tb = DOM('#tbTKNV')
    var x = true
    var length = mangDSNV.length
    for (i = 0; i < length; i++) {
        if (mangDSNV[i].tknv == tknv) {
            tb.style.display = 'block'
            tb.innerHTML = 'Tài khoản đã tồn tại'
            x = false
            break
        }
    }
    return x
}
// Hàm kiểm tra người dùng nhập họ tên
function KTten(name) {
    var tb = DOM('#tbTen')
    var x = true
    var nameTest = /^[a-zA-Z ]{1,}$/g
    if (name == '') {
        tb.style.display = 'block'
        tb.innerHTML = 'Không để trống'
        x = false
    } else if (!nameTest.test(removeAscent(name))) {
        tb.style.display = 'block'
        tb.innerHTML = 'Tên phải là chữ'
        x = false
    } else {
        tb.style.display = 'none'
    }
    return x
}
function removeAscent(str) {
    if (str === null || str === undefined) return str;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    return str;
}
// Hàm kiểm tra người dùng nhập email
function KTemail(email) {
    var tb = DOM('#tbEmail')
    var x = true
    var emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (email == '') {
        tb.style.display = 'block'
        tb.innerHTML = 'Không để trống'
        x = false
    } else if (!emailTest.test(email)) {
        tb.style.display = 'block'
        tb.innerHTML = 'Không đúng định dạng email'
        x = false
    } else {
        tb.style.display = 'none'
    }
    return x
}
// Hàm kiểm tra người dùng nhập mật khẩu
function KTmatKhau(password) {
    var tb = DOM('#tbMatKhau')
    var testMK = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/
    var x = true
    if (password == '') {
        tb.style.display = 'block'
        tb.innerHTML = 'Không để trống'
        x = false
    } else if (password.length < 6 || password.length > 10) {
        tb.style.display = 'block'
        tb.innerHTML = 'Mật khẩu từ 6-10 ký tự'
        x = false
    } else if (!testMK.test(password)) {
        tb.style.display = 'block'
        tb.innerHTML = 'Mật khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt'
        x = false
    }
    else (
        tb.style.display = 'none'
    )
    return x
}
// Hàm kiểm tra người dùng nhập ngày làm
function KTngayLam(ngayLam) {
    var tb = DOM('#tbNgay')
    var testNgayLam = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/ //mm/dd/yyyy or mm-dd-yyyy
    var x = true
    if (ngayLam == '') {
        tb.style.display = 'block'
        tb.innerHTML = 'Không để trống'
        x = false
    } else if (!testNgayLam.test(ngayLam)) {
        tb.style.display = 'block'
        tb.innerHTML = 'Ngày không đúng định dạng mm/dd/yyyy'
        x = false
    } else {
        tb.style.display = 'none'
    }
    return x
}
// Hàm kiểm tra người dùng nhập lương cơ bản
function KTluongCB(luongCB) {
    var tb = DOM('#tbLuongCB')
    var x = true
    if (luongCB == '') {
        tb.style.display = 'block'
        tb.innerHTML = 'Không để trống'
        x = false
    } else if (luongCB < 1000000 || luongCB > 20000000) {
        tb.style.display = 'block'
        tb.innerHTML = 'Lương cơ bản từ 1.000.000 - 20.000.000'
        x = false
    } else {
        tb.style.display = 'none'
    }
    return x
}
// Hàm kiểm tra người dùng nhập chức vụ
function KTChucVu(chucVu) {
    var tb = DOM('#tbChucVu')
    var x = true
    if (chucVu == 'Chọn chức vụ') {
        tb.style.display = 'block'
        tb.innerHTML = 'Chọn chức vụ'
        x = false
    } else {
        tb.style.display = 'none'
    }
    return x
}
// Hàm kiểm tra người dùng nhập giờ làm
function KTgioLam(gioLam) {
    var tb = DOM('#tbGiolam')
    var x = true
    if (gioLam == '') {
        tb.style.display = 'block'
        tb.innerHTML = 'Không để trống'
        x = false
    } else if (gioLam < 80 || gioLam > 200) {
        tb.style.display = 'block'
        tb.innerHTML = 'Giờ làm từ 80 - 200'
        x = false
    } else {
        tb.style.display = 'none'
    }
    return x
}

// Tìm kiếm loại nhân viên
DOM('#btnTimNV').onclick = function () {
    var search = DOM('#searchName').value
    search = search.toLowerCase()
    if (search == 'trung bình') {
        var trungBinh = []
        var length = mangDSNV.length
        for (i = 0; i < length; i++) {
            if (mangDSNV[i].xepLoai() == 'Trung bình') {
                trungBinh.push(mangDSNV[i])
            }
        }
        render(trungBinh)
    } else if (search == 'khá') {
        var kha = []
        var length = mangDSNV.length
        for (i = 0; i < length; i++) {
            if (mangDSNV[i].xepLoai() == 'Khá') {
                kha.push(mangDSNV[i])
            }
        }
        render(kha)
    } else if (search == 'giỏi') {
        var gioi = []
        var length = mangDSNV.length
        for (i = 0; i < length; i++) {
            if (mangDSNV[i].xepLoai() == 'Giỏi') {
                gioi.push(mangDSNV[i])
            }
        }
        render(gioi)
    } else if (search == 'xuất sắc') {
        var xuatSac = []
        var length = mangDSNV.length
        for (i = 0; i < length; i++) {
            if (mangDSNV[i].xepLoai() == 'Xuất sắc') {
                xuatSac.push(mangDSNV[i])
            }
        }
        render(xuatSac)
    } else {
        render('')
    }
}
DOM('#searchName').oninput = function () {
    var search = DOM('#searchName').value
    if (search == '') {
        render(mangDSNV)
    }
}
