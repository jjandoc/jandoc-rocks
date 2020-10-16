const getYouTubeId = (url) => new URL(url).searchParams.get('v');

export default getYouTubeId;
