import postsToJSON from '../../util/postsToJSON';

export function get(_, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(postsToJSON('static/_posts'));
}
