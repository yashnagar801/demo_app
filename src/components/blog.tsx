import styles from "@/styles/blog.module.css";
import Link from "next/link";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "How to Learn JavaScript Effectively",
      excerpt:
        "Discover practical tips and resources to master JavaScript in less time...",
    },
    {
      id: 2,
      title: "Understanding React Hooks",
      excerpt:
        "Hooks make React more powerful and elegant. Let’s explore how useState and useEffect work...",
    },
    {
      id: 3,
      title: "Getting Started with Next.js",
      excerpt:
        "Next.js is a great React framework for production. Here’s how you can set up your first app...",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Blog</h1>
      <div className={styles.postList}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} className={styles.readMore}>
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
