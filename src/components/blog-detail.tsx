import styles from "@/styles/blog-detail.module.css";

const blogPosts = [
  {
    id: "1",
    title: "How to Learn JavaScript Effectively",
    content: `JavaScript is a powerful language used on the frontend and backend. To learn it effectively, follow these tips:

1. Master the basics (variables, loops, functions).
2. Practice daily with small projects.
3. Understand how the browser runs JS.
4. Use developer tools and debugging techniques.
5. Build something — a to-do app, weather app, etc.

Keep building and reading the documentation.`,
  },
  {
    id: "2",
    title: "Understanding React Hooks",
    content: `React Hooks let you use state and lifecycle features in functional components.

- **useState** lets you manage local state.
- **useEffect** handles side effects like fetching data.
- **useRef**, **useContext**, and custom hooks help manage complex logic.

Hooks simplify your code and encourage reusable logic.`,
  },
  {
    id: "3",
    title: "Getting Started with Next.js",
    content: `Next.js is a React framework for production.

To get started:
1. Run \`npx create-next-app\`
2. Use \`pages\` directory to define routes.
3. Use \`Link\` for client-side routing.
4. Create API routes inside \`pages/api\`

Next.js also supports SSR, SSG, and ISR.`,
  },
];

const BlogDetail = ({ id }: { id: string }) => {
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <p className={styles.loading}>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.content}>{post.content}</p>
    </div>
  );
};

export default BlogDetail;
