import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Suspense, memo, useCallback } from 'react'
import { AppRouteProps, routeConfig } from '../shared/routerConfig'

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {

        const element = (
            <Suspense fallback={<div>...</div>}>
                    <div>
                        {route.element}
                    </div>
            </Suspense>
        )

        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
        )
    }, [])

    return (
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    )
}

export default memo(AppRouter)
