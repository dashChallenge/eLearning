import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Button, Pressable } from "react-native";
// import Icon from "react-native-vector-icons/dist/FontAwesome";

const App = () => {

  const callEvent = () => {
    console.log('Event Fired');
  };

  return (
    <>
      <ScrollView>
        <StatusBar style="auto" backgroundColor="#fff" />
        <View style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.text}>
                Back
              </Text>
              <Text style={styles.label}>
                Aula 01 - Introducao ao Forex
              </Text>
          </View>
          <Text style={styles.text}>
              CC
            </Text>
            {/* <Icon name="heart" size={30} color="danger" /> */}
        </View>
        <View style={styles.main}>
          <View style={styles.video}>
            <View style={styles.video_body}>
              <Pressable style={styles.playerBtn} onPress={callEvent}>
                <Text style={styles.playerBtnText}>Play</Text>
              </Pressable>
            </View>
            <View style={styles.player}>
              <Text style={styles.startTime}>0:00</Text>
              <Text style={styles.endTime}>2:00</Text>
            </View>
          </View>
          <Text style={styles.title}>
            Trading & Analise Tecnica
          </Text>
          <Text style={styles.p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias hic, magni minima, laboriosam sit vero omnis quibusdam ad accusamus inventore deleniti. Sed voluptas perferendis ad?
          </Text>
          <Text style={styles.pmargB}>
            Officiis sunt impedit possimus eaque maxime, exercitationem explicabo odio praesentium dolorem velit nesciunt nostrum
            Aperiam officia placeat, a autem praesentium unde accusamus inventore obcaecati harum aliquam dicta odio debitis.!
          </Text>
          <Pressable style={styles.button} onPress={callEvent}>
            <Text style={styles.btntext}>Comecar Curso por <Text style={styles.textBold}>750</Text>,00</Text>
          </Pressable>
            <View style={styles.status}>
              <View style={styles.info}>
                <Text style={styles.statusText}>15</Text>
                <Text style={styles.statusText}>Videos</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.statusText}>20</Text>
                <Text style={styles.statusText}>Horas</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.statusText}>5</Text>
                <Text style={styles.statusText}>Testes</Text>
              </View>
            </View>     
          <Text style={styles.title}>
            Conteudo
          </Text>     
          <View style={styles.lessons}>
            <View style={styles.subtitle}>
              <Text style={styles.lesson_num}>S 01</Text>
              <Text style={styles.h3}>Apresentacao</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.icon}>Icon</Text>
                <View style={styles.card_content}>
                  <Text style={styles.h4}>Introducao ao Forex</Text>
                  <Text style={styles.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas officiis distinctio autem.</Text>
                </View>
                <Text style={styles.icon}>Icon</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.icon}>Icon</Text>
                <View style={styles.card_content}>
                  <Text style={styles.h4}>Introducao ao Forex</Text>
                  <Text style={styles.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas officiis distinctio autem.</Text>
                </View>
                <Text style={styles.icon}>Icon</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.icon}>Icon</Text>
                <View style={styles.card_content}>
                  <Text style={styles.h4}>Introducao ao Forex</Text>
                  <Text style={styles.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas officiis distinctio autem.</Text>
                </View>
                <Text style={styles.icon}>Icon</Text>
            </View>
          </View>
          <View style={styles.test}>
            <Pressable style={styles.btnTest} onPress={callEvent}>
                <Text style={styles.testBold}>ACS</Text>
                <Text style={styles.testText}>Primeira avaliacao</Text>
            </Pressable>
          </View>
          <View style={styles.lessons}>
            <View style={styles.subtitle}>
              <Text style={styles.lesson_num}>S 02</Text>
              <Text style={styles.h3}>Introducao</Text>
            </View>
            {/* <Text style={styles.h3}>Introducao</Text> */}
            <View style={styles.card}>
                <Text style={styles.icon}>Icon</Text>
                <View style={styles.card_content}>
                  <Text style={styles.h4}>Introducao ao Forex</Text>
                  <Text style={styles.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas officiis distinctio autem.</Text>
                </View>
                <Text style={styles.icon}>Icon</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.icon}>Icon</Text>
                <View style={styles.card_content}>
                  <Text style={styles.h4}>Introducao ao Forex</Text>
                  <Text style={styles.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas officiis distinctio autem.</Text>
                </View>
                <Text style={styles.icon}>Icon</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  // Top bar
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
    padding: 15,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    fontSize: 13,
    color: "#333",
    marginLeft: 15,
  },
  text: {
    fontSize: 15,
    color: "#333",
  },

  //
  video: {
    marginBottom: 20,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    backgroundColor: '#fff',
  },
  video_body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 170,
  },
  player: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  playerBtn: {
    padding: 10,
    // backgroundColor: '#000',
  },
  playerBtnText: {
    color: '#3880ff',
    fontSize: 19,
    fontWeight: 'bold',
  },
  startTime: {
    color: '#666',
    fontSize: 11,
  },
  endTime: {
    color: '#666',
    fontSize: 11,
  },

  // Main
  main: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 25,
    color: "#333",
    fontWeight: "bold",
  },
  p: {
    fontSize: 14,
    color: "#555",
    fontWeight: "normal",
    marginBottom: 5,
  },
  pmargB: {
    fontSize: 14,
    color: "#555",
    fontWeight: "normal",
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: '#3880ff',
  },
  btntext: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'white',
  },
  textBold: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
  },
  
  // 15 videos, 20 Horas, 5 testes
  status: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 25,
  },
  info: {
    flex: 1,
    // alignContent: "space-between",
    alignItems: "center",
    // flexDirection: "row",
    // marginTop: 30,
    marginHorizontal: 5,
    padding: 10,
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "#ccc",
    borderRadius: 15,
    backgroundColor: "#777",
  },
  statusText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  // Lessons
  lessons: {
    borderRadius: 30,
    marginVertical: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  subtitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lesson_num: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 7,
    borderRadius: 15,
    borderColor: '#3870cc',
    borderStyle: 'solid',
    borderWidth: 3,
    marginRight: 10,
    backgroundColor: '#3880ff',
  },
  h3: {
    color: '#3880ff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  // Huge Button Between Cards
  // ACS Primeira avaliacao
  test: {
  },
  btnTest: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#3880ff',
  },
  testText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  },
  testBold: {
    color: '#3880ff',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 7,
    borderRadius: 15,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 3,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  btnTextBold: {
    color: '#3880ff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 40,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 3,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  // Cards
  card: {
    flex: 1,
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    backgroundColor: '#f0f0f0'
  },
  icon: {
    flexGrow: 1,
    display: 'none',
  },
  card_content: {
    flexGrow: 3,
  },
  h4: {
    color: '#444',
    fontWeight: 'bold',
  }
});

export default App;
