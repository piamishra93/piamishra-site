import { fetchSubstackPosts, SubstackPost } from '@/lib/fetchSubstackPosts';

export default async function IdeasPage() {
  const posts: SubstackPost[] = await fetchSubstackPosts('https://productsalon.substack.com/feed');

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-8">Ideas</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.link} className="border-b pb-4">
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <h2 className="text-xl font-semibold hover:underline">{post.title}</h2>
            </a>
            <p className="text-sm text-gray-500">{new Date(post.pubDate).toLocaleDateString()}</p>
            <div
              className="prose prose-sm text-gray-700 mt-2"
              dangerouslySetInnerHTML={{ __html: post.description }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
