import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "ScrollRestoration/Restoration";
import PrivateRoute from "./PrivateRoute";
import SkeletonMainPageCard from "components/Skeleton/SkeletonCard";

function Routing() {
  const Header = React.lazy(() => import("components/Header/Header"));
  const DetailPage = React.lazy(() => import("pages/DetailPage"));
  const MainPageList = React.lazy(() => import("pages/MainPage/MainList"));
  const PostingPage = React.lazy(() => import("pages/Posting"));
  const UserSettion = React.lazy(() => import("pages/UserUpdate/Index"));
  /* 
   MainPageList - 메인페이지 
   PostingPage - 게시글 작성페이지
   PostingPage - 수정페이지
   DetailPage - 상세페이지
   UserSettion - 유저 설정페이지
   */

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<MainPageList />} />
            <Route path="list/:title" element={<DetailPage />} />
            <Route
              path="/setting"
              element={<PrivateRoute component={UserSettion} />}
            />
          </Route>
          <Route
            path="/Posting"
            element={<PrivateRoute component={PostingPage} />}
          />
          <Route
            path="/Posting/:boardNum"
            element={<PrivateRoute component={PostingPage} />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Routing;
