import {createStackNavigator} from "react-navigation-stack";
import Home from "./Home";
import {createAppContainer} from "react-navigation";

const StackNavigator = createStackNavigator({
    Home: {
        screen: Home
    }
}, {
    initialRouteName: "Home",
    headerMode: "none",
});

export default createAppContainer(StackNavigator);
