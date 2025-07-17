import Image from "next/image"

export default function ViewsPage() {
  // Array of mood board image numbers
  const moodBoardImages = Array.from({ length: 16 }, (_, i) => i + 1)

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-sm uppercase tracking-widest mb-16 text-foreground/90">Views</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {moodBoardImages.map((num) => {
            const extension = num === 4 ? 'jpeg' : 'PNG'
            return (
              <div key={num} className="aspect-square relative">
                <Image
                  src={`/mood board ${num}.${extension}`}
                  alt={`Mood board ${num}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
} 