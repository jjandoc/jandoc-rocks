import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';

const getAllPosts = () => {
  try {
    return fs.readdirSync('static/_posts/').map((fileName) => {
      const post = fs.readFileSync(
        path.resolve('static/_posts', fileName),
        'utf-8',
      );
      return {
        ...grayMatter(post).data,
        slug: path.basename(fileName, '.md'),
      };
    });
  } catch (e) {
    return [];
  }
};

export function get(_, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  const posts = getAllPosts();
  res.end(JSON.stringify(posts));
}
