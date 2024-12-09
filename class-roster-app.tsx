import React, { useState } from 'react';
import { Table } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ClassRoster = () => {
  // Estado para los datos del encabezado
  const [headerData, setHeaderData] = useState({
    courseName: '',
    rosterNumber: '1',
    sectionNumber: '',
    instructor: '',
    semester: ''
  });

  // Estado para las entradas de la tabla
  const [entries, setEntries] = useState(Array(20).fill({
    studentName: '',
    studentId: '',
    registration: '',
    ninetyDays: '',
    separation: '',
    signature: ''
  }));

  // Estado para el pie de página
  const [footerData, setFooterData] = useState({
    receiveFrom: '',
    date: '',
    by: ''
  });

  // Estado para el índice de la fila que se está editando
  const [currentEditIndex, setCurrentEditIndex] = useState(0);

  // Función para actualizar una entrada específica
  const updateEntry = (index, field, value) => {
    const newEntries = [...entries];
    newEntries[index] = {
      ...newEntries[index],
      [field]: value
    };
    setEntries(newEntries);
  };

  return (
    <div className="flex flex-col p-4 max-w-full bg-white">
      {/* Título */}
      <h1 className="text-xl font-bold text-center mb-4">Transitional Program for College and Career</h1>
      <h2 className="text-lg font-bold text-center mb-6">CLASS ROSTER</h2>

      {/* Información del curso */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex gap-2 items-center">
          <label className="font-semibold">Course Name:</label>
          <input
            type="text"
            value={headerData.courseName}
            onChange={(e) => setHeaderData({...headerData, courseName: e.target.value})}
            className="border p-1 flex-1"
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="font-semibold">Roster #:</label>
          <input
            type="text"
            value={headerData.rosterNumber}
            onChange={(e) => setHeaderData({...headerData, rosterNumber: e.target.value})}
            className="border p-1 w-16"
          />
          <label className="font-semibold ml-4">Section #:</label>
          <input
            type="text"
            value={headerData.sectionNumber}
            onChange={(e) => setHeaderData({...headerData, sectionNumber: e.target.value})}
            className="border p-1 w-16"
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="font-semibold">Instructor:</label>
          <input
            type="text"
            value={headerData.instructor}
            onChange={(e) => setHeaderData({...headerData, instructor: e.target.value})}
            className="border p-1 flex-1"
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="font-semibold">Semester:</label>
          <input
            type="text"
            value={headerData.semester}
            onChange={(e) => setHeaderData({...headerData, semester: e.target.value})}
            className="border p-1 flex-1"
          />
        </div>
      </div>

      {/* Tabla principal */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 w-12">#</th>
              <th className="border p-2">Student Name</th>
              <th className="border p-2">Student ID</th>
              <th className="border p-2">Registration</th>
              <th className="border p-2">90 Days</th>
              <th className="border p-2">Separation</th>
              <th className="border p-2">Student Signature</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2">
                  <input
                    type="text"
                    value={entry.studentName}
                    onChange={(e) => updateEntry(index, 'studentName', e.target.value)}
                    className="w-full p-1"
                    placeholder="Enter name"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="text"
                    value={entry.studentId}
                    onChange={(e) => updateEntry(index, 'studentId', e.target.value)}
                    className="w-full p-1"
                    placeholder="Enter ID"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="date"
                    value={entry.registration}
                    onChange={(e) => updateEntry(index, 'registration', e.target.value)}
                    className="w-full p-1"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="date"
                    value={entry.ninetyDays}
                    onChange={(e) => updateEntry(index, 'ninetyDays', e.target.value)}
                    className="w-full p-1"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="date"
                    value={entry.separation}
                    onChange={(e) => updateEntry(index, 'separation', e.target.value)}
                    className="w-full p-1"
                  />
                </td>
                <td className="border p-2">
                  <div className="flex items-center justify-center">
                    <canvas
                      className="border"
                      width="150"
                      height="40"
                      onClick={() => setCurrentEditIndex(index)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pie de página */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="space-y-2">
          <div className="flex gap-2 items-center">
            <label className="font-semibold">Receive from:</label>
            <input
              type="text"
              value={footerData.receiveFrom}
              onChange={(e) => setFooterData({...footerData, receiveFrom: e.target.value})}
              className="border p-1 flex-1"
            />
          </div>
          <p className="text-sm text-gray-600">Registration: First date attended class</p>
        </div>
        <div className="space-y-2">
          <div className="flex gap-2 items-center">
            <label className="font-semibold">Date:</label>
            <input
              type="date"
              value={footerData.date}
              onChange={(e) => setFooterData({...footerData, date: e.target.value})}
              className="border p-1 flex-1"
            />
          </div>
          <p className="text-sm text-gray-600">90 days: Student has attended BSP class in the last 90 days</p>
        </div>
        <div className="space-y-2">
          <div className="flex gap-2 items-center">
            <label className="font-semibold">By:</label>
            <input
              type="text"
              value={footerData.by}
              onChange={(e) => setFooterData({...footerData, by: e.target.value})}
              className="border p-1 flex-1"
            />
          </div>
          <p className="text-sm text-gray-600">Separation: Last day attended if student has not attended in 90 days</p>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="flex gap-4 justify-end">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Print
        </button>
        <button
          onClick={() => {
            const data = JSON.stringify({headerData, entries, footerData}, null, 2);
            const blob = new Blob([data], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'class-roster.json';
            a.click();
          }}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Export Data
        </button>
      </div>
    </div>
  );
};

export default ClassRoster;
