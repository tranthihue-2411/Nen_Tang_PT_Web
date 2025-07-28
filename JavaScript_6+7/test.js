// document.getElementById("btnThem").addEventListener("click", function (event) {
//     event.preventDefault();  //Ngăn form reload
//     alert("Đã nhấn nút Thêm");
// });

let selectedRow = null; //Thêm biến toàn cục để lưu dòng đang sửa
document.getElementById("btnThem").addEventListener("click", function (event) {
  event.preventDefault();

  let maSV = document.getElementById("msv").value.trim();
  let hoTen = document.getElementById("hoten").value.trim();
  let email = document.getElementById("email").value.trim();
  let gioiTinh = document.querySelector('input[name="gioiTinh"]:checked').value;
  let ngaySinh = document.getElementById("ngaysinh").value; 
  let table = document.getElementById("bangSinhVien").getElementsByTagName("tbody")[0];
  

  //validation
  if(maSV == ""){
    alert("Mã sinh viên không được để trống");
    return;
  }
  if(hoTen == ""){
    alert("Họ tên không được để trống");
    return;
  }
  if(email == ""){
    alert("Email không được để trống");
    return;
  }
  let regexEmail = /^\S+@\S+\.\S+$/;
  if (!regexEmail.test(email)) {
    alert("Email không hợp lệ");
    return;
  }

  if(selectedRow){
    selectedRow.cells[1].innerText = maSV;
    selectedRow.cells[2].innerText = hoTen;
    selectedRow.cells[3].innerText = email;
    selectedRow.cells[4].innerText = gioiTinh;
    selectedRow.cells[5].innerText = ngaySinh;
    let thongBao = document.getElementById("thongBao");
    thongBao.innerText = "Cập nhật sinh viên thành công!";
    thongBao.className = "alert alert-info text-center";
    thongBao.style.display = "block";
    setTimeout(() => {
      thongBao.style.display = "none";
    }, 3000);
    selectedRow = null;
    document.getElementById("btnThem").value = "Thêm sinh viên"; // đặt lại giao diện nút về trạng thái ban đầu sau khi cập nhật xong 
    document.querySelector("form").reset();
    return;
  }

  let newRow = table.insertRow();
  let stt = table.rows.length; // Tự tăng STT
  newRow.insertCell(0).innerText = stt;
  newRow.insertCell(1).innerText = maSV;
  newRow.insertCell(2).innerText = hoTen;
  newRow.insertCell(3).innerText = email;
  newRow.insertCell(4).innerText = gioiTinh;
  newRow.insertCell(5).innerText = ngaySinh;
  newRow.insertCell(6).innerHTML =
      '<a href="#" class="btn btn-sm btn-warning btn-custom" onclick="suaDong(this)">Sửa</a> ' +
      '<a href="#" class="btn btn-sm btn-danger btn-custom" onclick="xoaDong(this)">Xóa</a>';

  let thongBao = document.getElementById("thongBao");
  thongBao.innerText = "Thêm sinh viên thành công!";
  thongBao.className = "alert alert-success text-center";
  thongBao.style.display = "block";
  //Biến mất sau 3s
  setTimeout(() => {
    thongBao.style.display = "none";
  }, 3000);
  document.querySelector("form").reset();
});


function xoaDong(button) {
  if (confirm("Bạn có chắc muốn xóa?")) {
    let row = button.parentElement.parentElement;
    row.remove();
    let thongBao = document.getElementById("thongBao");
    thongBao.innerText = "Xóa sinh viên thành công!";
    thongBao.className = "alert alert-danger text-center";
    thongBao.style.display = "block";
    setTimeout(() => {
      thongBao.style.display = "none";
    }, 3000);
  }
}
function suaDong(button) {
    selectedRow = button.parentElement.parentElement;
    document.getElementById("msv").value = selectedRow.cells[1].innerText;
    document.getElementById("hoten").value = selectedRow.cells[2].innerText;
    document.getElementById("email").value = selectedRow.cells[3].innerText;
    document.querySelector(`input[name="gioiTinh"][value="${selectedRow.cells[4].innerText}"]`).checked = true;
    document.getElementById("ngaysinh").value = selectedRow.cells[5].innerText;
    document.getElementById("btnThem").value = "Cập nhật"; //Đổi nút "Thêm" thành "Cập nhật"
  }
