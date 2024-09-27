import { QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import {
	createRootRouteWithContext,
	Link,
	Outlet,
} from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
	{
		component: () => (
			<>
				<div className="flex gap-2 p-2">
					<Link to="/" className="[&.active]:font-bold">
						Home
					</Link>
				</div>
				<hr />
				<Outlet />
				<ReactQueryDevtools buttonPosition="top-right" />
				<TanStackRouterDevtools position="bottom-right" />
			</>
		),
	},
)
