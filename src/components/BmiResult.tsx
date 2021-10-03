import { IonRow, IonCol, IonCard } from '@ionic/react';
import React from 'react';

const BmiResult: React.FC<{result: number | string}> = props => {
    return (
        <IonRow>
            <IonCol>
                <IonCard>
                    <h2>{props.result}</h2>
                </IonCard>
            </IonCol>
        </IonRow>
    );
};

export default BmiResult;