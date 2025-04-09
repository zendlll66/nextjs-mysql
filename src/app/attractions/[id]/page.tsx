import { getAttractionData } from '@/lib/getAttractionData';

interface PageProps {
  params: Promise<{ id: string }>; // ใช้ Promise เพราะ Next.js คาดหวังให้ `params` เป็น Promise
}

export default async function Page({ params }: PageProps) {
  // ตรวจสอบว่า params เป็น Promise แล้ว await
  const { id } = await params;  // ต้องใช้ await กับ params

  const data = await getAttractionData(id);

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
}

