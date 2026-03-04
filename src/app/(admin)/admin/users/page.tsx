"use client";
import { useState } from "react";

export default function UsersPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          User Master
        </h1>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search users..."
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            onClick={() => setShowModal(true)}
            className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            + Add User
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="text-gray-700 divide-y">
            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Anita Sharma</td>
              <td className="px-6 py-4">anita@mail.com</td>
              <td className="px-6 py-4">Editor</td>
              <td className="px-6 py-4 text-center space-x-2">
                <button className="bg-primary text-white px-3 py-1 rounded-md hover:bg-blue-700 transition">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
                  Delete
                </button>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4">2</td>
              <td className="px-6 py-4">Ravi Kumar</td>
              <td className="px-6 py-4">ravi@mail.com</td>
              <td className="px-6 py-4">Manager</td>
              <td className="px-6 py-4 text-center space-x-2">
                <button className="bg-primary text-white px-3 py-1 rounded-md hover:bg-blue-700 transition">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl shadow-lg w-[400px] p-6 animate-fadeIn">
            
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Add New User
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-red-500 text-lg"
              >
                ✖
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1 text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-600">
                  Role
                </label>
                <select className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Admin</option>
                  <option>Manager</option>
                  <option>Editor</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Save User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}