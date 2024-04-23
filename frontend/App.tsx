import React, {useEffect, useState} from 'react';
import {StatusBar, Appearance} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// Screens
import Dashboard from './Screens/Dashboard';
import LoginPage from './Screens/LoginPage';
import OTPVerification from './Screens/OTPVerification';
import CourseRegistration from './Screens/CourseRegistration';
import CourseRegistration2 from './Screens/CourseRegistration2';
import Notifications from './Screens/Notifications';
import MyTerms from './Screens/MyTerms';
import MyCourses from './Screens/MyCourses';
import MyCourseDetails from './Screens/MyCourseDetails';
import LessonPlan from './Screens/LessonPlan';
import Assignments from './Screens/Assignments';
import Results from './Screens/Results';
import PaymentHistory from './Screens/PaymentHistory';
import ResultTermWise from './Screens/ResultTermWise';
import Payment from './Screens/Payment';
import CourseFeedback from './Screens/CourseFeedback';
import AssignmentDetails from './Screens/AssignmentDetails';
import LessonPlansDetails from './Screens/LessonPlansDetails';
import NotificationSettings from './Screens/NotificationSettings';
import MyTotalDues from './Screens/MyTotalDues';
import MyProfile from './Screens/MyProfile';
import PaymentHistoryNew from './Screens/PaymentHistoryNew';
import PaymentHistoryNew2 from './Screens/PaymentHistoryNew2';
import MyGradeCard from './Screens/MyGradeCard';
import MyGradeCardTerms from './Screens/MyGradeCardTerms';
import MyAttendance from './Screens/MyAttendance';
import MyAttendanceTermWise from './Screens/MyAttendanceTermWise';
import MyAttendanceCourseWise from './Screens/MyAttendanceCourseWise';
import MyTimeTable from './Screens/MyTimeTable';
import MyTimeTableTermWise from './Screens/MyTimeTableTermWise';
import MyTimeTableCourseWise from './Screens/MyTimeTableCourseWise';
import PaymentToBePaid from './Screens/PaymentToBePaid';
import Schedule from './Screens/Schedule';
import AppPinLock from './Screens/AppPinLock';
import VerifyPinLock from './Screens/VerifyPinLock';
import CurrentCourses from './Screens/CurrentCourses';
import SwitchAccount from './Screens/SwitchAccount';
import ForgotPin from './Screens/ForgotPin';

// Stack Navigator
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Component from './components/Component';

// For parameter types in stack navigation
export type RootStackParamList = {
  Dashboard: {token: string; name: string};
  LoginPage: undefined;
  Notifications: undefined;
  OTPVerification: {Number: string};
  CourseRegistration: undefined;
  CourseRegistration2: undefined;
  MyTerms: undefined;
  MyCourses: undefined;
  MyCourseDetails: undefined;
  LessonPlan: undefined;
  Assignments: undefined;
  Results: undefined;
  PaymentHistory: undefined;
  ResultTermWise: undefined;
  Payment: undefined;
  CourseFeedback: undefined;
  AssignmentDetails: undefined;
  LessonPlansDetails: undefined;
  NotificationSettings: undefined;
  MyTotalDues: undefined;
  MyProfile: undefined;
  PaymentHistoryNew: undefined;
  PaymentHistoryNew2: undefined;
  MyGradeCard: undefined;
  MyGradeCardTerms: undefined;
  MyAttendance: undefined;
  MyAttendanceTermWise: undefined;
  MyAttendanceCourseWise: undefined;
  MyTimeTable: undefined;
  MyTimeTableTermWise: undefined;
  MyTimeTableCourseWise: undefined;
  PaymentToBePaid: undefined;
  Schedule: undefined;
  AppPinLock: undefined;
  VerifyPinLock: undefined;
  CurrentCourses: undefined;
  SwitchAcount: undefined;
  ForgotPin: undefined;
};

// Create stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  useEffect(() => {
    const colorTheme = Appearance.getColorScheme();
    console.log(colorTheme);
    if (theme === 'light') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  });
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={theme === 'light' ? '#eee' : '#0c1319'}
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
      />
      <NavigationContainer style={{fontFamily: 'arial'}}>
        <Stack.Navigator initialRouteName="VerifyPinLock">
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OTPVerification"
            component={OTPVerification}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CourseRegistration"
            component={CourseRegistration}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CourseRegistration2"
            component={CourseRegistration2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Notifications"
            component={Notifications}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyTerms"
            component={MyTerms}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyCourses"
            component={MyCourses}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyCourseDetails"
            component={MyCourseDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LessonPlan"
            component={LessonPlan}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Assignments"
            component={Assignments}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Results"
            component={Results}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PaymentHistory"
            component={PaymentHistory}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ResultTermWise"
            component={ResultTermWise}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CourseFeedback"
            component={CourseFeedback}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AssignmentDetails"
            component={AssignmentDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LessonPlansDetails"
            component={LessonPlansDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NotificationSettings"
            component={NotificationSettings}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyTotalDues"
            component={MyTotalDues}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyProfile"
            component={MyProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PaymentHistoryNew"
            component={PaymentHistoryNew}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PaymentHistoryNew2"
            component={PaymentHistoryNew2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyGradeCard"
            component={MyGradeCard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyGradeCardTerms"
            component={MyGradeCardTerms}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyAttendance"
            component={MyAttendance}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyAttendanceTermWise"
            component={MyAttendanceTermWise}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyAttendanceCourseWise"
            component={MyAttendanceCourseWise}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyTimeTable"
            component={MyTimeTable}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyTimeTableTermWise"
            component={MyTimeTableTermWise}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyTimeTableCourseWise"
            component={MyTimeTableCourseWise}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PaymentToBePaid"
            component={PaymentToBePaid}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Schedule"
            component={Schedule}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AppPinLock"
            component={AppPinLock}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="VerifyPinLock"
            component={VerifyPinLock}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CurrentCourses"
            component={CurrentCourses}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SwitchAccount"
            component={SwitchAccount}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotPin"
            component={ForgotPin}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    // <FileInput/>
  );
};

export default App;
