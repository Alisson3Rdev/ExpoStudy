import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { styles } from "./styles"
import { useState } from 'react';

import {ptBR} from "../../utils/configLocal"

LocaleConfig.locales["pr-br"]=ptBR
LocaleConfig.defaultLocale="pr-br"

export function Home() {
    const[day,setDay] = useState<DateData>() //atualiza o status do dia
    return (
    <View style = {styles.container}>
        <Calendar
        style = {styles.calendar}
            headerStyle = {{
                borderBottomWidth: 0.5,
                borderBottomColor:"e8e8e8",
                paddingBottom: 10,
                marginBottom: 10
            }}
            theme={{
                textMonthFontSize: 18,
                monthTextColor:"#e8e8e8",
                todayTextColor:"#64CC4F",
                selectedDayBackgroundColor: "#64CC4F",
                selectedDayTextColor: "#e0e0e0",
                calendarBackground: "transparent",
                textDayStyle: {color: "#e8e8e8"},
                textDisabledColor: "#717171",
            }}
            //não deixar marcar dias anteriores
            //mudar o estado

            minDate= {new Date().toDateString()}
            hideExtraDays ={true} //prop boolean
            onDayPress={setDay} //seleciona o dia
            markedDates={day && {[day.dateString] : {selected:true},}}
            

        />


    </View>
);
}
