export async function getAttractionData(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/attractions/${id}/`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }
  