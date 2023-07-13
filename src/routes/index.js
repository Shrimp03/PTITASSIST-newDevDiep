import routesConfig from "~/config/routes";

import Home from "~/pages/Home";
import LogIn from "~/pages/LogIn";
import SignUp from "~/pages/SignUp";
import aboutPage from "~/pages/MainPage/AboutPage";
import DocumentPage from "~/pages/MainPage/DocumentPage";
import forumPage from "~/pages/MainPage/ForumPage";
import NotificationPage from "~/pages/MainPage/NotificationPage";
import supportPage from "~/pages/MainPage/SupportPage";
import yourquestion from "~/pages/MainPage/YourQuestionPage";

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.login, component: LogIn, layout: null },
  { path: routesConfig.signup, component: SignUp, layout: null },
  { path: routesConfig.notification, component: NotificationPage },
  { path: routesConfig.forumPage, component: forumPage },
  { path: routesConfig.document, component: DocumentPage },
  { path: routesConfig.supportPage, component: supportPage },
  { path: routesConfig.yourquestion, component: yourquestion },
  { path: routesConfig.aboutPage, component: aboutPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
