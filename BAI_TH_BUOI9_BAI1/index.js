$(document).ready(function () {
  const form = $('#addEmployeeModal form');

  form.on("submit", function (e) {
    e.preventDefault();
    let errors = [];

    // Lấy giá trị lúc người dùng nhấn submit
    const name = $('#name').val().trim();
    const email = $("#email").val().trim();
    const address = $("#address").val().trim();
    const phone = $("#phone").val().trim();

    if (!name || !email || !address || !phone) {
      alert("Vui lòng nhập đầy đủ tất cả các trường!");
      return false;
    }

    if (!/^0\d{9}$/.test(phone)) {
      errors.push("Phone phải bắt đầu bằng số 0 và có đúng 10 ký tự số.");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Dữ liệu hợp lệ. Bạn có thể gửi form hoặc xử lý tiếp.");
    }
  });
});
