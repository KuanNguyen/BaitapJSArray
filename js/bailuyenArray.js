var nums = [];

function themSo() {
    var num = Number(document.querySelector("#formNum input").value);

    nums.push(num);

    document.getElementById("alert1").innerHTML = nums;

}
document.querySelector("#formNum button").onclick = themSo;

// BÀI TẬP 1: tổng số dương
function tongSoDuong() {
    var sum = 0;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            // số chẵn 
            sum += nums[i];
        }
    }
    document.getElementById("alert2").innerHTML = sum;

}
document.querySelector("#collapseOne button").onclick = tongSoDuong;

// Bài tập 2: đếm số dương
function demSoDuong() {

    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            count++
        }
    }
    console.log(count)
    document.getElementById("alert3").innerHTML = count;

}


document.querySelector("#collapseTwo button").onclick = demSoDuong;

// Bài tập 3: tìm số nhỏ nhất
function timMin() {
    var viTri = 0;
    var min = nums[0];

    for (var i = 1; i < nums.length; i++) {
        if (min > nums[i]) {

            min = nums[i];
            viTri = i;
        }
    }
   
    document.querySelector("#alert4").innerHTML = min;

}

document.querySelector("#collapseThree button").onclick = timMin;




// bài tập 4: tìm số duong nhỏ nhất
function timSoDuong() {
    var duong = [];
    console.log(duong);
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            duong.push(nums[i])
        }
    }
    var min = duong[0];
    var viTri = 0;


    if (duong = !undefined) {

        for (var j = 1; j < duong.length; j++) {
            if (min > duong[i]) {
                min = duong[i];
                viTri = i;
            }
        }

        document.getElementById("alert5").innerHTML = min;
    } else {
        document.getElementById("alert5").innerHTML = "mang khong co so duong";
    }

}
document.querySelector("#collapseFour button").onclick = timSoDuong;


// bài tập 5: tìm số chãn cuối cùng
function lastChan() {
    var last = 0;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            last = nums[i];
            console.log(last)
        } else {
            document.getElementById("alert6").innerHTML = "không có số chãn";
        }
    }
    document.getElementById("alert6").innerHTML = last;

}
document.querySelector("#collapseFive button").onclick = lastChan;

// bài tập 6: đổi chỗ hai số
function doiCho() {
    var viTri1 = document.getElementById("soThuNhat").value;
    var viTri2 = document.getElementById("soThuHai").value;
    var temp = nums[viTri1];

    nums[viTri1] = nums[viTri2];
    nums[viTri2] = temp;

    console.log(nums)
    document.getElementById("alert7").innerHTML = nums;
}

document.querySelector("#collapseSix button").onclick = doiCho;


// bài tập 7: sáp xếp theo thú tụ tăng dần
function sapXepTang() {
    var nums2 = []
    for (var i = 0; i < nums.length; i++) {
        nums2.push(nums[i]);
    }


    for (var i = 0; i < nums2.length - 1; i++) {
        for (j = 0; j < nums2.length; j++) {
            if (nums[j] > nums[j + 1]) {
                var temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }

    document.getElementById("alert8").innerHTML = nums;


}

document.querySelector("#collapseSeven button").onclick = sapXepTang;



// bài tập 8: in số nguyên tố đầu tiên
function isprime(n) {


    let flag = 1;

    if (n < 2) return flag = 0; 
    let i = 2;
    while (i < n) {
        if (n % i == 0) {
            flag = 0;
            break; 
        }
        i++;
    }

    return flag;
}

function inSoNguyenTo() {
    for (let i = 0; i < nums.length; i++) {
        if (isprime(nums[i]) == 1) {
            document.getElementById("alert9").innerHTML = nums[i];
            break;
        }
        
    }
}
document.querySelector("#collapseEight button").onclick = inSoNguyenTo;


// bài tập 9 : đếm số nguyên
function demSoNguyen(){
    var count = 0;
    
    for(i = 0; i < nums.length; i++){
        if(Number.isInteger(nums[i]) == true){
            count++;
        }
        console.log(count);
        document.getElementById("alert10").innerHTML = count;
    }

}
document.querySelector("#collapseNine button").onclick = demSoNguyen;

// bài tập 10: so sánh số âm và số dương
function soSanhAD(){
    var countAm = 0;
    var countDuong = 0;

    for(i = 0 ; i < nums.length ; i++){
        if(nums[i] > 0 ){
            countDuong++
        }else{
            countAm ++
        }
    }

    if(countDuong > countAm){
        document.getElementById("alert11").innerHTML = "Số dương nhiều hon số âm";
    }else{
        document.getElementById("alert11").innerHTML = "Số âm nhiều hon số dương";
    }
}

document.querySelector("#collapseTen button").onclick = soSanhAD;