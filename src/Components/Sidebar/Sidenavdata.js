import House from "../Assets/house.png" 
import Bell from "../Assets/bell.png";
import AssignedWork from "../Assets/assignment.png";
import Cv from "../Assets/cv.png";
import WorkFromHome from "../Assets/home.png";
import Logout from "../Assets/log-out.png";
import Profiles from "../Assets/profiles.png";
import Ticket from "../Assets/ticket.png";
import Holiday from "../Assets/trekking.png";
import Attendance from "../Assets/immigration.png";

const Sidenavdata = [
  {
    name: "Dashboard",
    icon: <img src={House} alt="Girl in a jacket" style={{width:"100%",height:"100%"}}/>,
    link:"/"
  },
  {
    name: "Notification",
    icon:<img src={Bell} alt="Girl in a jacket" style={{width:"100%",height:"100%"}}/>,
    link:"/notification",
    submenu:[
      {
        name: "approved cv",
        icon:<img src={AssignedWork} alt="Girl in a jacket" style={{width:"100%",height:"100%"}}/>,
        link:"/approved",
      },
      {
        name: "changed cv",
        icon:<img src={AssignedWork} alt="Girl in a jacket" style={{width:"100%",height:"100%"}}/>,
        link:"/approvedcvto",
      },
    ]
  },
  {
    name: "Work From Home",
    icon:<img src={WorkFromHome} alt="Girl in a jacket" style={{width:"100%",height:"100%"}}/>,
    link:"/work from home"
  },
  {
    name: "Attendance",
    icon:<img src={Attendance} alt="Girl in a jacket" style={{width:"100%",height:"100%"}}/>,
    link:"/attendance"
  },
  {
    name: "Assigned Work",
    icon:<img src={AssignedWork} alt="Girl in a jacket" style={{width:"100%",height:"100%"}}/>,
    link:"/assigned work",
    submenu:[
      {
        name: "Training programs assigned",
        icon:<img src={AssignedWork} alt="Girl in a jacket" style={{width:"100%",height:"100%"}}/>,
        link:"/assigned",
      },
      {
        name: "Training programs assigned as trainer",
        icon:<img src={AssignedWork} alt="Girl in a jacket" style={{width:"100%",height:"100%"}}/>,
        link:"/assignedto",
      },
    ]
   
  },
  {
    name: "CV",
    icon:<img src={Cv} alt="Girl in a jacket" style={{width:"100%",height:"100%"}}/>,
    link:"/cv",
    submenu:[
      {
        name: "approved cv",
        icon:<img src={AssignedWork} alt="Girl in a jacket" style={{width:"100%",height:"100%"}}/>,
        link:"/approved",
      },
      {
        name: "changed cv",
        icon:<img src={AssignedWork} alt="Girl in a jacket" style={{width:"100%",height:"100%"}}/>,
        link:"/approvedcvto",
      },
    ]
  },
  {
    name: "Holiday List",
    icon:<img src={Holiday} alt="Girl in a jacket" style={{width:"100%",height:"100%"}}/>,
    link:"/holiday list"
  },
  {
    name: "Leave Application",
    icon:<img src={Profiles} alt="Girl in a jacket" style={{width:"100%",height:"100%"}}/>,
    link:"/leave application"
  },
  {
    name: "Variable Payout",
    icon:<img src={Profiles} alt="Girl in a jacket" style={{width:"100%",height:"100%"}}/>,
    link:"/variable payout"
  },
  {
    name: "Travel Allownce",
    icon:<img src={Profiles} alt="Girl in a jacket" style={{width:"100%",height:"100%"}}/>,
    link:"/allowance"
  },
  {
    name: "Tickets",
    icon:<img src={Ticket} alt="Girl in a jacket" style={{width:"100%",height:"100%"}}/>,
    link:"/ticket"
  },
  {
    name: "Refer A Buddy",
    icon:<img src={WorkFromHome} alt="Girl in a jacket" style={{width:"100%",height:"100%"}}/>,
    link:"/refer a buddy"
  },
  {
    name: "Logout",
    icon:<img src={Logout} alt="Girl in a jacket" style={{width:"100%",height:"100%"}}/>,
    link:"/logout"
  }
];

export default Sidenavdata