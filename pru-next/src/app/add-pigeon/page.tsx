"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPigeon() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    pigeon_name: "",
    name: "",
    price: "",
    description: "",
    image_path: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/pigeons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push("/");
    } else {
      alert("Error adding pigeon!");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Add a New Pigeon</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="pigeon_name"
          placeholder="Pigeon Name"
          value={formData.pigeon_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Owner Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price (R$)"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="image_path"
          placeholder="Image URL"
          value={formData.image_path}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="btn w-full bg-blue-500 text-white p-2 rounded"
        >
          Add Pigeon
        </button>
      </form>
    </div>
  );
}
