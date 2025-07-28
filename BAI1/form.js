document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#addEmployeeModal form"); 
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const addressInput = document.querySelector("#address");
  const phoneInput = document.querySelector("#phone");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let errors = [];

    if (!nameInput.value.trim()) {
      errors.push("Name không được để trống.");
    }
    if (!emailInput.value.trim()) {
      errors.push("Email không được để trống.");
    }
    if (!addressInput.value.trim()) {
      errors.push("Address không được để trống.");
    }
    if (!phoneInput.value.trim()) {
      errors.push("Phone không được để trống.");
    } else {
      if (!/^0\d{9}$/.test(phoneInput.value)) {
        errors.push("Phone phải bắt đầu bằng số 0 và có đúng 10 ký tự số.");
      }
    }
    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Dữ liệu hợp lệ. Bạn có thể gửi form hoặc xử lý tiếp.");
    }
  });
});
