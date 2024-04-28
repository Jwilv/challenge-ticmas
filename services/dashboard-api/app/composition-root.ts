import { TaskManagementStub } from "../adapters/drivens/task-management-stub"
import { TaskingProxyAdapter } from "../adapters/drivers/tasking-proxy-adapter"
import { DashboardApi } from "./dashboard-api"

const compositionRootMook = () => {

    const forTaskManagement = new TaskManagementStub()

    const dashboardApiMook = new DashboardApi(forTaskManagement)

    const dashboardApiProxyAdapter = new TaskingProxyAdapter(dashboardApiMook)

    return { dashboardApiProxyAdapter }

}

export const { dashboardApiProxyAdapter } = compositionRootMook();

 const result = dashboardApiProxyAdapter.createTask({ description: 'any_description', status: 'any_status', title: 'any_title' })

 console.log(result)