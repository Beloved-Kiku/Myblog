import httpRequest from "../index";
export function getVideoListApi() {
  return httpRequest.get("/api/getVideoList");
}
