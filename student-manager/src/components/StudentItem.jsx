import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function StudentItem({ student, onDelete, stt }) {
  const navigate = useNavigate();

  return (
    <tr>
      <td>{stt}</td>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.gender}</td>
      <td>{student.dob}</td>
      <td>
        <button
          className="btn btn-sm btn-warning me-2"
          onClick={() => navigate(`/edit/${student.id}`)}
        >
          Sửa
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(student.id)}
        >
          Xóa
        </button>
      </td>
    </tr>
  );
}
