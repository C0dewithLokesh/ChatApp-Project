import { Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import {
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";

import { home } from "ionicons/icons";
import Tab3 from "../../pages/Tab3";
import Home from "../home/Home";
import Chatbot from "../home/Chatbot";
import { FaRegUser } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";

const Tabs = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/chatbot">
            <Chatbot />
          </Route>
          <Route exact path="/tab3">
            <Tab3 />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom" className="tabs-container bg-white">
          <IonTabButton tab="tab1" href="/home">
            <IonIcon aria-hidden="true" icon={home}  />
          </IonTabButton>
          <IonTabButton tab="tab2" href="/chatbot">
            <BsRobot aria-hidden="true" size={'24px'} />
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <FaRegUser aria-hidden="true" size={'24px'} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Tabs;
