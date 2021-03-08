import { Route, Switch, useRouteMatch } from "react-router-dom";
import AlbumsDetail from "./pages/AlbumDetail";
import AlbumsListPage from "./pages/AlbumList";

function AlbumFeatures(props) {
    const { path } = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={path} component={AlbumsListPage} exact />
                <Route path={`${path}/:todoId`} component={AlbumsDetail} />
            </Switch>
        </div>
    );
}

export default AlbumFeatures;