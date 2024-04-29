import { TaskManagement } from "../adapters/drivens/task-management"
import { TaskingProxyAdapter } from "../adapters/drivers/tasking-proxy-adapter"
import { DashboardApi } from "./dashboard-api"

const compositionRootMook = () => {

    const forTaskManagement = new TaskManagement()

    const dashboardApi = new DashboardApi(forTaskManagement)

    const dashboardApiProxyAdapter = new TaskingProxyAdapter(dashboardApi)

    return { dashboardApiProxyAdapter }

}

export const { dashboardApiProxyAdapter } = compositionRootMook();