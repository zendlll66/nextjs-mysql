"use client";
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!process.env.NEXT_PUBLIC_API_URL) {
                    throw new Error('API URL is not defined');
                }

                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/attractions`);
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }

                const json = await res.json();
                setData(json);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p className="text-gray-500">Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;

    return (
        <div className="container mx-auto p-4">
            <h5 className="text-xl font-semibold mb-4">Attractions</h5>
            <div className="flex flex-wrap gap-4">
                {data.map((attraction) => (
                    <div key={attraction.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                        <div className="bg-white border rounded-lg shadow-md overflow-hidden">
                            <img
                                src={attraction.coverimage}
                                alt={attraction.name}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h6 className="text-lg font-medium">{attraction.name}</h6>
                                <p className="text-sm text-gray-600 truncate">{attraction.detail}</p>
                            </div>
                            <div className="p-4">
                                <a
                                    href={`/attractions/${attraction.id}`}
                                    className="text-blue-500 hover:text-blue-700 text-sm"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
