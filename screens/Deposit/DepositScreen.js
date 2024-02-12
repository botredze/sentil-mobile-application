import {View} from "react-native";
import AmountSelect from "./AmountSelect";
import ConfirmTransaction from "../ConfirmTransaction/ConfirmTransaction";
import {useSelector} from "react-redux";
import { selectTransactionStep} from "../../redux/slieces/depositSilce";



export default function DepositScreen (){

    const currentStep = useSelector(selectTransactionStep)

    const renderComponents = () => {
        switch (currentStep) {
            case 1:
                return (
                    <AmountSelect/>
                )
            case 2:
                return (
                    <ConfirmTransaction/>
                )
            default:
                return null;
        }
    }

    return (
      <View>
          {renderComponents()}
      </View>
    )
}