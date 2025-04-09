"use client";
import React from 'react';

export async function getData(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/attractions/${id}/`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const Page = async ({ params }: { params: { id: string } }) => {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    return null;
  }

  const id = params.id;
  const data = await getData(id);

  return (
    <div className="container mx-auto p-4 mt-8">
      {data.length > 0 && (
        <div className="bg-white border rounded-lg shadow-lg">
          <div className="p-4">
            <h5 className="text-2xl font-semibold">{data[0].name}</h5>
          </div>
          <img
            src={data[0].coverimage}
            alt={data[0].name}
            className="w-full h-96 object-cover"
          />
          <div className="p-4">
            <p className="text-sm text-gray-600">{data[0].detail}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
