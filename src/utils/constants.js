const GOOGLE_API_KEY = "AIzaSyDV4rKDDrDUliUI6MJCAm7JhpP_EwxuEgU";

export const YOUTUBE_MOST_POPULAR_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
