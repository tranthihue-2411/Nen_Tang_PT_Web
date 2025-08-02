$(document).ready(function(){
  const form = $('#addModal form')
  form.on("submit", function(e){
    e.preventDefault;
    let errors = [];
    const khachHang = $("#khachHang").val().trim();
    const nhanVien = $("#nhanVien").val().trim();
    const soTien = $("#soTien").val().trim();
    const ngayMua = $("#ngayMua").val().trim();
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


