const CLOUD_NAME = 'de8ovkdiy';

/**
 * Transformation option reference.
 * https://cloudinary.com/documentation/image_transformation_reference
 */
const BASE_OPTIONS = {
  f: 'auto',
  q: 'auto',
  c: 'scale',
};

const optionsToUrlSegment = (options = {}) =>
  Object.entries({
    ...BASE_OPTIONS,
    ...options,
  })
    .map((pair) => pair.join('_'))
    .join(',');

const getFilename = (filename) => {
  const segments = filename.split('/');
  return segments[segments.length - 1];
};

export const getUploadedImage = (filename, options = {}) =>
  [
    'https://res.cloudinary.com',
    CLOUD_NAME,
    'image',
    'upload',
    optionsToUrlSegment(options),
    getFilename(filename),
  ].join('/');

export const getVideoThumbnail = (service, id, options = {}) =>
  [
    'https://res.cloudinary.com',
    CLOUD_NAME,
    'image',
    service,
    optionsToUrlSegment(options),
    `${id}.jpg`,
  ].join('/');

export default {
  getUploadedImage,
  getVideoThumbnail,
};
