import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function StudentForm({ editMode }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [student, setStudent] = useState({
    id: "",
    name: "",
    email: "",
    gender: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editMode && id) {
      const students = JSON.parse(localStorage.getItem("students")) || [];
      const found = students.find((s) => s.id === id);
      if (found) setStudent(found);
    }
  }, [editMode, id]);

  const validate = () => {
    const e = {};
    if (!student.id) {
      e.id = "Mã sinh viên không được để trống";
    } else if (!/^SV\d{3,}$/.test(student.id)) {
      e.id = "MSV phải bắt đầu SV và theo sau là ít nhất 3 số, ví dụ SV001";
    }

    if (!student.name || student.name.length > 50) e.name = "Tên không hợp lệ";
    if (!student.email || !/\S+@\S+\.\S+/.test(student.email))
      e.email = "Email không hợp lệ";
    if (
      !student.gender ||
      (student.gender !== "Nam" && student.gender !== "Nữ")
    )
      e.gender = "Giới tính phải là Nam hoặc Nữ";
    if (!student.dob) e.dob = "Ngày sinh không được để trống";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const students = JSON.parse(localStorage.getItem("students")) || [];

    if (editMode) {
      const index = students.findIndex((s) => s.id === id);
      students[index] = student;
    } else {
      // Kiểm tra id trùng
      if (students.some((s) => s.id === student.id)) {
        alert("Mã sinh viên đã tồn tại, vui lòng nhập mã khác");
        return;
      }
      students.push(student);
    }

    localStorage.setItem("students", JSON.stringify(students));
    navigate("/");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }} // chiều cao container gần full màn hình
    >
      <form onSubmit={handleSubmit} style={{ width: "400px" }}>
        <div className="mb-3">
          <label className="form-label">Mã sinh viên (MSV)</label>
          <input
            type="text"
            className="form-control"
            value={student.id}
            disabled={editMode}
            onChange={(e) =>
              setStudent({ ...student, id: e.target.value.toUpperCase() })
            }
            placeholder="Ví dụ: SV001"
          />
          {errors.id && <div className="text-danger small">{errors.id}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Họ tên</label>
          <input
            type="text"
            className="form-control"
            value={student.name}
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
          />
          {errors.name && (
            <div className="text-danger small">{errors.name}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={student.email}
            onChange={(e) => setStudent({ ...student, email: e.target.value })}
          />
          {errors.email && (
            <div className="text-danger small">{errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Giới tính</label>
          <select
            className="form-select"
            value={student.gender}
            onChange={(e) => setStudent({ ...student, gender: e.target.value })}
          >
            <option value="">-- Chọn giới tính --</option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
          </select>
          {errors.gender && (
            <div className="text-danger small">{errors.gender}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Ngày sinh</label>
          <input
            type="date"
            className="form-control"
            value={student.dob}
            onChange={(e) => setStudent({ ...student, dob: e.target.value })}
          />
          {errors.dob && <div className="text-danger small">{errors.dob}</div>}
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success px-5">
            {editMode ? "Cập nhật sinh viên" : "Thêm sinh viên"}
          </button>
        </div>
      </form>
    </div>
  );
}
