import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';

const getAllPosts = (directory) => {
  try {
    return fs.readdirSync(directory).map((fileName) => {
      const post = fs.readFileSync(path.resolve(directory, fileName), 'utf-8');
      return {
        ...grayMatter(post).data,
        slug: path.basename(fileName, '.md'),
      };
    });
  } catch (e) {
    return [];
  }
};

export default (directory) => {
  const posts = getAllPosts(directory);
  return JSON.stringify(posts);
};
