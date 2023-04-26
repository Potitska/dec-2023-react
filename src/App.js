
import {Route, Routes} from "react-router-dom";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={'<MainLayout/>'}>
        <Route path={'todos'} element={<TodosPage/>}/>
        <Route path={'albums'} element={<AlbumsPage/>}/>
        <Route path={'comments'} element={<CommentsPage/>}/>

      </Route>
      <Routes/>
  )
}

export default App;
