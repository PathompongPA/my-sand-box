import { createBrowserRouter } from "react-router-dom";
import { fetchApi } from "../utility";
import { Chat, Loading } from "../components/ui";
import { ErrorPage, HomePage, LoginPage, NotFoundPage, PageAdminCar } from "../page";
import DemoChangeLanguage from "../demo.change.language";

const carLoader = async () => {
    try {
        const car = await fetchApi.ByJson("GET", "/api/car")
        return { car: car.data }
    } catch (error) {
        console.log(error);
    }
}

let mainRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <LoginPage />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                    // loader: carLoader,
                    hydrateFallbackElement: <Loading />,
                    children: [
                        {
                            path: "/car",
                            element: <PageAdminCar />
                        },
                        {
                            path: "/chat",
                            element: <Chat />
                        },

                    ]
                },

            ]
        },
        {
            path: "/demo",
            loader: carLoader,
            hydrateFallbackElement: <Loading />,
            element: <DemoChangeLanguage />
        },
        {
            path: "*",
            element: <NotFoundPage />
        }

    ]
)

export { mainRouter }