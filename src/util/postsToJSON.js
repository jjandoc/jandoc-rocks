import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import marked from 'marked';

const getAllPosts = (directory, includeBody) => {
  try {
    const renderer = new marked.Renderer();

    return fs
      .readdirSync(directory)
      .map((fileName) => {
        const post = fs.readFileSync(
          path.resolve(directory, fileName),
          'utf-8',
        );
        const { data, content } = grayMatter(post);
        const result = {
          ...data,
          slug: path.basename(fileName, '.md'),
        };
        if (includeBody) {
          result.html = marked(content, { renderer });
        }
        return result;
      })
      .filter((item) => !item.draft);
  } catch (e) {
    return [];
  }
};

export default (directory, includeBody = false) => {
  const posts = getAllPosts(directory, includeBody);
  return JSON.stringify(posts);
};
