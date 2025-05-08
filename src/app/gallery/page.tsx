import Gallery from '@/components/Gallery';
export const metadata = {
  title: 'Galerie – Fotograf',
  description: 'Eine Auswahl meiner besten Fotografien.',
};

/* export default function GalleryPage() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Galerie</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((id) => (
          <div key={id} className="bg-gray-200 h-48 rounded-md" />
          
        ))}
      </div>
    </div>
  );
}
 */
export default function GalleryPage() {
  const images = [
    { src: '/images/photo1.jpg', alt: 'Foto 1' },
    { src: '/images/photo2.jpg', alt: 'Foto 2' },
    { src: '/images/photo3.jpg', alt: 'Foto 3' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Galerie</h2>
      <Gallery images={images} />
    </div>
  );
}