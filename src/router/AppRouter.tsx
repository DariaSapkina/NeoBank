import { Suspense, type FC } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "./routeConfig";

const AppRouter: FC = () => {
  return (
    <Suspense fallback={"loading..."}>
      <Routes>
        {Object.values(routerConfig).map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Suspense>
  );
};

export { AppRouter };
