import {COLORS} from "./colors";
import {StyleSheet} from "react-native";

export const globalContainerStyles = StyleSheet.create({
    liteContainer: {
        backgroundColor: COLORS.backgroundCardDark,
    },

    darkContainer: {
        backgroundColor: COLORS.backgroundCardLite
    }
})