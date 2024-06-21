import { createStackNavigator } from "@react-navigation/stack";
import Perfil from "../pages/Perfil/index";

const { Navigator, Screen } = createStackNavigator();

const StackComponent = () => {
  return (
    <Navigator>
      <Screen name="Meu Perfil" component={Perfil} />
    </Navigator>
  );
};

export default StackComponent;
