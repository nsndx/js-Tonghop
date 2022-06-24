var title = document.querySelectorAll('.title')
var iconUp = document.querySelectorAll('.title .fa-angle-up')
var iconDown = document.querySelectorAll('.title .fa-angle-down')
var main = document.querySelectorAll('.main')
function list(index) {
    if (main[index].style.display == 'block') {
        for (i = 0; i < title.length; i++) {
            main[i].style.display = 'none'
        }
        title[index].style.backgroundColor = '#fff'
        iconUp[index].style.display = 'none'
        iconDown[index].style.display = 'block'

    } else {
        for (i = 0; i < title.length; i++) {
            main[i].style.display = 'none'
            iconUp[i].style.display = 'none'
            iconDown[i].style.display = 'block'
            title[i].style.backgroundColor = '#fff'
        }
        main[index].style.display = 'block'
        iconUp[index].style.display = 'block'
        iconDown[index].style.display = 'none'
        title[index].style.backgroundColor = '#51ccf1'
    }
}
title[0].onclick = function () {
    list(0)
}
title[1].onclick = function () {
    list(1)
}
title[2].onclick = function () {
    list(2)
}
title[3].onclick = function () {
    list(3)
}
title[4].onclick = function () {
    list(4)
}
title[5].onclick = function () {
    list(5)
}
title[6].onclick = function () {
    list(6)
}
title[7].onclick = function () {
    list(7)
}
title[8].onclick = function () {
    list(8)
}
title[9].onclick = function () {
    list(9)
}

var myArray = []
document.querySelector('.top button').onclick = function () {
    var soN = document.querySelector('.top input').value
    if (soN == '') { } else {
        myArray.push(' ' + Number(soN))
        document.querySelector('.top input').value = ''
    }
    document.querySelector('.top .soThem').innerHTML = myArray
}

//bài 1: Tổng các số dương trong mảng.
document.getElementById('btn_bai1').onclick = function () {
    var kqBai1 = 0;
    if (myArray == '') {
        kqBai1 = 'Mảng rỗng'
    } else {
        for (i = 0; i < myArray.length; i++) {
            if (myArray[i] > 0) {
                kqBai1 += Number(myArray[i])
            }
        }
        kqBai1 = 'Tổng các số dương bằng: ' + kqBai1
    }
    document.querySelector('.main .kqBai1').innerHTML = kqBai1
}

// Bài 2: Đếm có bao nhiêu số dương trong mảng.
document.getElementById('btn_bai2').onclick = function () {
    var kqBai2 = 0;
    if (myArray == '') {
        kqBai2 = 'Mảng rỗng'
    } else {
        for (i = 0; i < myArray.length; i++) {
            if (myArray[i] > 0) {
                kqBai2++
            }
        }
        kqBai2 = 'Số số dương trong mảng là: ' + kqBai2
    }
    document.querySelector('.main .kqBai2').innerHTML = kqBai2
}

//bài 3: Tìm số nhỏ nhất trong mảng.
document.getElementById('btn_bai3').onclick = function () {
    var kqBai3 = 0;
    if (myArray == '') {
        kqBai3 = 'Mảng rỗng'
    } else {
        for (i = 0; i < myArray.length; i++) {
            var checkSNN = true
            for (j = 0; j < myArray.length; j++) {
                if (myArray[i] - myArray[j] > 0) {
                    checkSNN = false
                }
            }
            if (checkSNN) {
                kqBai3 = myArray[i]
                break;
            }
        }
        kqBai3 = 'Số nhỏ nhất là: ' + kqBai3
    }
    document.querySelector('.main .kqBai3').innerHTML = kqBai3
}

// Bài 4: Tìm số dương nhỏ nhất trong mảng.
document.getElementById('btn_bai4').onclick = function () {
    var kqBai4 = 0;
    if (myArray == '') {
        kqBai4 = 'Mảng rỗng'
    } else {
        var myArray1 = []
        for (i = 0; i < myArray.length; i++) {
            if (myArray[i] > 0) {
                myArray1.push(myArray[i])
            }
        }
        for (i = 0; i < myArray1.length; i++) {
            var checkSNN = true
            for (j = 0; j < myArray1.length; j++) {
                if (myArray1[i] - myArray1[j] > 0) {
                    checkSNN = false
                    break
                }
            }
            if (checkSNN) {
                kqBai4 = myArray1[i]
                break;
            }
        }
        kqBai4 = 'Số dương nhỏ nhất là: ' + kqBai4
    }
    document.querySelector('.main .kqBai4').innerHTML = kqBai4
}

// Bài 5: Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
document.getElementById('btn_bai5').onclick = function () {
    var kqBai5 = 0;
    if (myArray == '') {
        kqBai5 = 'Mảng rỗng'
    } else {
        for (i = myArray.length - 1; i >= 0; i--) {
            if (myArray[i] % 2 == 0) {
                kqBai5 = 'Số chẵn cuối cùng là: ' + myArray[i]
                break
            } else {
                kqBai5 = -1
            }
        }
    }
    document.querySelector('.main .kqBai5').innerHTML = kqBai5
}

// Bài 6: Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
document.getElementById('btn_bai6').onclick = function () {
    var kqBai6 = []
    var viTri1 = document.getElementById('viTri1').value
    var viTri2 = document.getElementById('viTri2').value
    var x = myArray[viTri1]
    var y = myArray[viTri2]
    if (myArray == '') {
        kqBai6 = 'Mảng rỗng'
    } else if (viTri1 == '' || viTri2 == '') {
        kqBai6 = 'Mời nhập vị trí'
    } else {
        myArray[viTri1] = y
        myArray[viTri2] = x
        kqBai6 = 'Mảng sau khi đổi chỗ: ' + myArray
    }
    document.querySelector('.main .kqBai6').innerHTML = kqBai6
}

// Bài 7. Sắp xếp mảng theo thứ tự tăng dần.
document.getElementById('btn_bai7').onclick = function () {
    var kqBai7 = []
    if (myArray == '') {
        kqBai7 = 'Mảng rỗng'
    } else {
        kqBai7 = myArray.sort(function (a, b) {
            return a - b
        })
        kqBai7 = 'Mảng sau khi sắp xếp: ' + kqBai7
    }
    document.querySelector('.main .kqBai7').innerHTML = kqBai7
}

// Bài 8: Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
document.getElementById('btn_bai8').onclick = function () {
    var kqBai8 = 0
    if (myArray == '') {
        kqBai8 = 'Mảng rỗng'
    } else {
        var soDuong = []
        for (i = 0; i < myArray.length; i++) {
            if (myArray[i] > 1) {
                soDuong.push(myArray[i])
            }
        }
        if (soDuong.length == 0) {
            kqBai8 = -1
        }
        for (k = 0; k < soDuong.length; k++) {
            checkSNT = true
            for (j = 2; j <= soDuong[k] / 2; j++) {
                if (soDuong[k] % j == 0) {
                    checkSNT = false
                    break
                }
            }
            if (checkSNT) {
                kqBai8 = 'Số nguyên tố đầu tiên là: ' + soDuong[k]
                break
            } else {
                kqBai8 = -1
            }
        }
    }
    document.querySelector('.main .kqBai8').innerHTML = kqBai8
}

// Bài 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên.
var myArrayB9 = []
document.getElementById('b9_themSo').onclick = function () {
    var soN_B9 = document.getElementById('b9_nhapSo').value
    if (soN_B9 == '') { } else {
        myArrayB9.push(' ' + Number(soN_B9))
        document.getElementById('b9_nhapSo').value = ''
    }
    document.getElementById('b9_soThem').innerHTML = myArrayB9
}
document.getElementById('btn_bai9').onclick = function () {
    var kqBai9 = 0;
    for (i = 0; i < myArrayB9.length; i++) {
        var soNguyen = Number.isInteger(Number(myArrayB9[i]))
        if (soNguyen) {
            kqBai9++
        }
    }
    kqBai9 = 'Số số nguyên trong mảng là: ' + kqBai9
    document.querySelector('.main .kqBai9').innerHTML = kqBai9
}

// Bài 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
document.getElementById('btn_bai10').onclick = function () {
    var kqBai10 = ''
    if (myArray == '') {
        kqBai10 = 'Mảng rỗng'
    } else {
        var soAm = 0
        var soDuong = 0
        for (i = 0; i < myArray.length; i++) {
            if (myArray[i] > 0) {
                soDuong++
            } 
            if (myArray[i] < 0) {
                soAm++
            }
        }
        if (soAm == soDuong) {
            kqBai10 = 'số dương = số âm'
        } else if (soAm > soDuong) {
            kqBai10 = 'số âm > số dương'
        } else {
            kqBai10 = 'số dương > số âm'
        }
    }
    document.querySelector('.main .kqBai10').innerHTML = kqBai10
}