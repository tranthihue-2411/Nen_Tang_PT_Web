document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#addModal form"); 
    const khachHang = document.getElementById("khachHang").value.trim();
    const nhanVien = document.getElementById("nhanVien").value.trim();
    const soTien = document.getElementById("soTien").value.trim();
    const ngayMua = document.getElementById("ngayMua").value.trim();

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let errors = [];

    if(!khachHang || !nhanVien || !soTien || !ngayMua){
        alert("Vui lòng nhập đầy đủ tất cả các trường!");
        return false;
    }
    if (khachHang.length > 30) {
        alert("Tên khách hàng không được vượt quá 30 ký tự!");
        return false;
    }
    if(nhanVien.length > 30){
        alert("Tên nhân viên không được vượt quá 30 ký tự!");
        return false;
    }
    if (isNaN(soTien) || Number(soTien) <= 0) {
      alert("Số tiền phải là số hợp lệ và lớn hơn 0!");
      return false;
    }
    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Dữ liệu hợp lệ. Bạn có thể gửi form hoặc xử lý tiếp.");
    }
  });
});