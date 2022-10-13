import HomePage from "../containers/HomePage/HomePage";
import PeoplePage from "../containers/PeoplePage/PeoplePage";
import PersonPage from "../containers/PersonPage/PersonPage";
import NotFoundPage from "../containers/NotFoundPage/NotFoundPage";
import FavoritePage from "../containers/FavoritePage/FavoritePage";
import SearchPage from "../containers/SearchPage/SearchPage";

const routesConfig = [
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/people",
		element: <PeoplePage />,
	},
	{
		path: "/people/:id",
		element: <PersonPage />,
	},
	{
		path: "/search",
		element: <SearchPage />,
	},
	{
		path: "/favorites",
		element: <FavoritePage />,
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
	{
		path: "/not-found",
		element: <NotFoundPage />,
	},
];

export default routesConfig;
