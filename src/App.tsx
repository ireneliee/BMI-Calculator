import React, { useRef, useState } from "react";
import {
  IonApp,
  IonHeader,
  IonContent,
  IonTitle,
  IonToolbar,
  IonCol,
  IonItem,
  IonLabel,
  IonRow,
  IonInput,
 
} from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";
import BmiControls from './components/BmiControls';
import BmiResult from './components/BmiResult';

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";


/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  const [calculatedBmi, setCalculatedBmi] = useState<number>();
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);

  const calculateBMI = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;

    if (!enteredHeight || !enteredWeight || +enteredWeight <= 0 || +enteredHeight <= 0) {
      return;
    }

    const bmi = +enteredWeight / (+enteredHeight * +enteredHeight);
    setCalculatedBmi(bmi);
  };
  const resetInputs = () => {
    weightInputRef.current!.value = "";
    heightInputRef.current!.value = "";
  };
  return (
    <IonApp>
      <IonApp>
        <IonHeader>
          <IonToolbar color = "primary">
            <IonTitle> BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Height</IonLabel>
                <IonInput type = "number">ref = {heightInputRef}</IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Weight</IonLabel>
                <IonInput type = "number">ref = {weightInputRef} </IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <BmiControls onCalculate = {calculateBMI} onReset = {resetInputs}/>
          {calculatedBmi && (
            <BmiResult result = {calculatedBmi}/>
          )}
        </IonContent>
      </IonApp>
    </IonApp>
  );
};

export default App;
