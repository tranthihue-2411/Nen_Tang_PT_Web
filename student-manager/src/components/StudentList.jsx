import React, { useEffect, useState } from 'react';
import StudentItem from './StudentItem';

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(stored);
  }, []);

  const handleDelete = id => {
    if (window.confirm('Xác nhận xóa sinh viên này?')) {
      const updated = students.filter(s => s.id !== id);
      localStorage.setItem('students', JSON.stringify(updated));
      setStudents(updated);
    }
  };

  return (
    <table className="table table-striped table-hover">
      <thead className="table-primary">
        <tr>
          <th>STT</th>
          <th>MSV</th>
          <th>Họ tên</th>
          <th>Email</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <StudentItem
            key={student.id}
            student={student}
            stt={index + 1}
            onDelete={handleDelete}
          />
        ))}
      </tbody>
    </table>
  );
}
