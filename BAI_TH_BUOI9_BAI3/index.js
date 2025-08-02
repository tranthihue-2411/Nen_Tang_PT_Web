$(document).ready(function(){
  const form = $('#addModal form')
  form.on("submit", function(e){
    e.preventDefault;
    let errors = [];
    const ten = $("#ten").val().trim();
    const hoDem = $("#hoDem").val().trim();
    const diaChi = $("#diaChi").val().trim();
    if(!ten || !hoDem || !diaChi){
      alert("Vui lòng nhập đầy đủ tất cả các trường!");
      return false;
    }
    if (ten.length > 15) {
      alert("Tên không được vượt quá 15 ký tự!");
      return false;
    }
    if(hoDem.length > 20){
      alert("Họ đệm không được vượt quá 20 ký tự!");
      return false;
    }
    if(diaChi.length > 50){
      alert("Địa chỉ không được vượt quá 50 ký tự!");
      return false;
    }
    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Dữ liệu hợp lệ. Bạn có thể gửi form hoặc xử lý tiếp.");
    }
  });
});


