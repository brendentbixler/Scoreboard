import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View, Text } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function profile() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      {/* User info */}
      <View>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Brenden Bixler</ThemedText>
        </ThemedView>

        <View style={{ marginTop: 16, marginLeft: 12 }}>
          <ThemedText>Joined August 2024</ThemedText>
          <Collapsible title="Expand me!">
            <ThemedText>
              Not bold, <ThemedText type="defaultSemiBold">BOLD</ThemedText> and{" "}
            </ThemedText>
            <ExternalLink href="https://google.com">
              <ThemedText type="link">A link to google</ThemedText>
            </ExternalLink>
          </Collapsible>
        </View>
      </View>

      <View>
        <ThemedView style={{ flexDirection: "row", marginTop: 12 }}>
          <ThemedText type="title">Overview</ThemedText>
        </ThemedView>

        <View style={{ flex: 1, flexDirection: "row", width: "100%" }}>
          <View style={{ marginTop: 12, width: "45%", height: 80 }}>
            <View
              style={{
                height: "100%",
                borderColor: "white",
                borderWidth: 2,
                borderRadius: 14,
              }}
            >
              <Text style={{ color: "white" }}>Text</Text>
            </View>
          </View>

          <View style={{ marginTop: 12, width: "45%", height: 80 }}>
            <View
              style={{
                height: "100%",
                borderColor: "white",
                borderWidth: 2,
                borderRadius: 14,
              }}
            >
              <Text style={{ color: "white" }}>Text</Text>
            </View>
          </View>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    marginBottom: -10,
  },
});
