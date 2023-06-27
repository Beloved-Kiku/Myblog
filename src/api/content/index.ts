import httpRequest from "../index";
//请求headline
export function getHeadLine() {
  return httpRequest.get("/api/articleheadline");
}
//请求 currentvalue
export function getCurrentDetails(data: any) {
  return httpRequest.get(`/api/articlecurrent/${data}`);
}
//请求分页数据
export function getCurrentPageData(NowPage: number) {
  return httpRequest.get(`/api/markdownCurrentPage/${NowPage}`);
}
