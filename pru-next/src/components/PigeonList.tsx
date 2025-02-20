"use client";

import Image from "next/image";
import { GiShoppingCart } from "react-icons/gi";
import { useEffect, useState } from "react";

export default function PigeonList() {
  const [pigeons, setPigeons] = useState([]);

  useEffect(() => {
    async function fetchPigeons() {
      const res = await fetch("/api/pigeons");
      const data = await res.json();
      setPigeons(data);
    }
    fetchPigeons();
  }, []);

  return (
    <div className="pigeons-list">
      {pigeons.map((pigeon) => (
        <a
          key={pigeon.id}
          href={`/pigeon/${pigeon.id}`}
          className="pigeon border p-4 rounded-sm shadow"
        >
          <Image
            src={pigeon.image_path || "/default-pigeon.jpg"}
            alt={pigeon.pigeon_name || "pigeon"}
            width={200}
            height={0}
            objectFit="contain"
            className="pigeon-img object-scale-down rounded-sm"
          />
          <h5>{pigeon.pigeon_name || "Unknown"}</h5>
          <p className="flex justify-between items-center">
            Price: R$ {pigeon.price || "N/A"} | Name: {pigeon.name || "Unknown"}
            <a href="/login" className="btn">
              <GiShoppingCart />
            </a>
          </p>
        </a>
      ))}
    </div>
  );
}
