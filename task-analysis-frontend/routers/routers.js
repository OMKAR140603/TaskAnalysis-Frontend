import SignInComponent from "@/components/authentication/SignInComponent.vue";
import AdminDashbordComponent from "../src/components/admin/AdminDashbordComponent.vue"
import AdminUserDashbord from "../src/components/admin/AdminUserDashbord.vue"
import TasksComponent from "../src/components/admin/admininvestigations/TasksComponent.vue"
import AdminAddUser from "@/components/admin/AdminAddUser.vue";
import AdminUsersUpdate from  "../src/components/admin/AdminUserUpdate.vue"
import AdminUsersDelete from "../src/components/admin/UserDeleted.vue"
import {createRouter,createWebHistory} from "vue-router"
const routes=[
    
    {
        //this route is the root path for the log in
        name:"SignIn",
        component:SignInComponent,
        path:"/"
    },
    {
        //this route is for the admin page immediately after the log in page
        name:"Admin",
        component:AdminDashbordComponent,
        path:"/admin",
        beforeEnter: (to, from, next) => {
            // ...
            const acc_tkn = sessionStorage.getItem("access_token")
            if(acc_tkn){
                // User is authenticated, allow access to the route
                next()
            }
            else{
                // User is not authenticated, redirect to the login page
                next("/")
            }
        }
    },
    {
        //this route is for the showing the users data to admin 
        name:"employees",
        component:AdminUserDashbord,
        path:"/employees",
        beforeEnter: (to, from, next) => {
            // ...
            const acc_tkn = sessionStorage.getItem("access_token")
            if(acc_tkn){
                // User is authenticated, allow access to the route
                next()
            }
            else{
                // User is not authenticated, redirect to the login page
                next("/")
            }
        }
    },
    {
        //this route is for the showing the users data to admin 
        name:"addemployees",
        component:AdminAddUser,
        path:"/employees/addUser",
        beforeEnter: (to, from, next) => {
            // ...
            const acc_tkn = sessionStorage.getItem("access_token")
            if(acc_tkn){
                // User is authenticated, allow access to the route
                next()
            }
            else{
                // User is not authenticated, redirect to the login page
                next("/")
            }
        }
    },
    {
        //this route is for the showing the users data to admin 
        name:"invistigations",
        component:TasksComponent,
        path:"/invistigations",
        beforeEnter: (to, from, next) => {
            // ...
            const acc_tkn = sessionStorage.getItem("access_token")
            if(acc_tkn){
                // User is authenticated, allow access to the route
                next()
            }
            else{
                // User is not authenticated, redirect to the login page
                next("/")
            }
        }
    },
    {
        //this route is for the admin to update the users information
        name:"adminusersinfoupdate",
        component:AdminUsersUpdate,
        path:"/employees/:id",
        beforeEnter: (to, from, next) => {
            // ...
            const acc_tkn = sessionStorage.getItem("access_token")
            if(acc_tkn){
                // User is authenticated, allow access to the route
                next()
            }
            else{
                // User is not authenticated, redirect to the login page
                next("/")
            }
        }
    },
    {
        //this route is for the admin to update the users information
        name:"adminusersinfodelete",
        component:AdminUsersDelete,
        path:"/employee/:id",
        beforeEnter: (to, from, next) => {
            // ...
            const acc_tkn = sessionStorage.getItem("access_token")
            if(acc_tkn){
                // User is authenticated, allow access to the route
                next()
            }
            else{
                // User is not authenticated, redirect to the login page
                next("/")
            }
        }
    }
];

const router =createRouter(
    {
        history:createWebHistory(),
        routes
    }
)
export default router
