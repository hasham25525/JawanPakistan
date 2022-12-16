var std1 = {
    namee: 'Name: M. Hasham<br>',
    sno: 'Roll no: 0' + 1,
    fname: '<br>FName: Abdullah <br>',
    cnic: 'CNIC:    6874367264'
}

document.getElementById('s1').innerHTML = std1.namee + std1.sno + std1.fname + std1.cnic;

var std2 = {
    namee: 'Name: Anas<br>',
    sno: 'Roll no: 0' + 2,
    fname: '<br>FName: Khan <br>',
    cnic: 'CNIC:    325432423'
}

document.getElementById('s2').innerHTML = std2.namee + std2.sno + std2.fname + std2.cnic;

var std3 = {
    namee: 'Name: Abdul Haseeb<br>',
    sno: 'Roll no: 0' + 3,
    fname: '<br>FName: haneef <br>',
    cnic: 'CNIC:    3474367264'
}

document.getElementById('s3').innerHTML = std3.namee + std3.sno + std3.fname + std3.cnic;

var std4 = {
    namee: 'Name: Kurat-ulain<br>',
    sno: 'Roll no: 0' + 4,
    fname: '<br>FName: Asfaq<br>',
    cnic: 'CNIC:    36874367264'
}

document.getElementById('s4').innerHTML = std4.namee + std4.sno + std4.fname + std4.cnic;

var std5 = {
    namee: 'Name: Areeba<br>',
    sno: 'Roll no: 0' + 5,
    fname: '<br>FName: Khanzadi<br>',
    cnic: 'CNIC:    762754393'
}

document.getElementById('s5').innerHTML = std5.namee + std5.sno + std5.fname + std5.cnic;


var array = [std1,
    std2,
    std3,
    std4,
    std5];
console.log(array);

function search() {

    var val = document.getElementById('roll-no').value;

    var newSno = 'Roll no: 0' + val;

    for (let i = 0; i < array.length; i++) {
        if (newSno == array[i].sno) {
            document.getElementById('status').innerHTML = array[i].namee.substring(6) + ' is present';
        } else if (newSno > array[i].sno) {
            document.getElementById('status').innerHTML = 'Wrong Input';
        }

    }
}