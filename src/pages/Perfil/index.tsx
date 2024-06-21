import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BotaoSecundario } from "../../components/BotoesSecundarios";
import { BotaoPrimario } from "../../components/BotaoPrimario";
import { LinearGradient } from "expo-linear-gradient";

const IconePerfil = require("../../../assets/IconePerfil.png");
const Sino = require("../../../assets/sino.png");
const Xicara = require("../../../assets/xicara.png");
const Relogio = require("../../../assets/relogio.png");
const Som = require("../../../assets/som.png");
const Apito = require("../../../assets/apito.png");
const Plus = require("../../../assets/plus.png");
const Arrow = require("../../../assets/arrow.png");
const Crown = require("../../../assets/crown.png");

const Perfil = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "rgba(197,142,255,1)",
          "rgba(255,148,225,1)",
          "rgba(255,196,185,1)",
        ]}
        style={styles.containerGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      ></LinearGradient>
      <View style={styles.DivDados}>
        <Image source={IconePerfil} style={styles.ImagemIcone} />
        <View style={styles.containerBotao}>
          <BotaoPrimario buttonText="Dados Backup & Restaurar" />
        </View>
        <View style={styles.containerTexto}>
          <Text>Faça login e sincronize seus dados</Text>
        </View>
        <View style={styles.containerMedidas}>
          <View style={styles.infoMedidas}>
            <Text style={{fontWeight: "600"}}>166.0 cm</Text>
            <Text>Altura</Text>
          </View>
          <View style={styles.divisoriaMedidas} />
          <View style={styles.infoMedidas}>
            <Text style={{fontWeight: "600"}}>65.00 kg</Text>
            <Text>Peso</Text>
          </View>
          <View style={styles.divisoriaMedidas} />
          <View style={styles.infoMedidas}>
            <Text style={{fontWeight: "600"}}>23.59</Text>
            <Text>BMI</Text>
          </View>
        </View>
        <View style={styles.containerBotoes}>
          <View>
            <BotaoSecundario buttonText="Gerenciar o Perfil" />
          </View>
          <View>
            <BotaoSecundario buttonText="Sincronizar Dados" />
          </View>
        </View>
      </View>
      <LinearGradient
        colors={[
          'rgba(239,74,139,1)', 'rgba(242,112,165,1)'
        ]}
        style={styles.gradientBackground}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.DivPremium}>
          <View style={styles.Premium1}>
            <Image source={Crown} style={styles.PremiumIcon}/>
          </View>
          <View style={styles.Premium2}>
            <Text style={styles.P2Text}>Seja Premium</Text>
          </View>
          <View style={styles.Premium3}>
            <Text style={styles.P3Text1}>R$2,98</Text>
            <Text style={styles.P3Text2}>por semana</Text>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.DivEx}>
        <Text style={styles.ex}>EXERCÍCIO</Text>
      </View>
      <View style={styles.DivConfigs}>
        <View style={styles.infoConfig}>
          <View style={styles.info1}>
            <Image source={Sino} style={styles.imgConfig} />
          </View>
          <View style={styles.info2}>
            <Text style={styles.infoText}>Lembrete</Text>
          </View>
          <View style={styles.info3}>
            <Text>20:00</Text>
            <Image source={Plus} style={styles.imgIcon} />
          </View>
        </View>
        <View style={styles.divisoriaConfig} />
        <View style={styles.infoConfig}>
          <View style={styles.info1}>
            <Image source={Xicara} style={styles.imgConfig} />
          </View>
          <View style={styles.info2}>
            <Text style={styles.infoText}>Pausas Intermédias</Text>
          </View>
          <View style={styles.info3}>
            <Text style={{color: "#FF69B4"}}>30 segs.</Text>
            <Image source={Arrow} style={styles.imgIcon} />
          </View>
        </View>
        <View style={styles.divisoriaConfig} />
        <View style={styles.infoConfig}>
          <View style={styles.info1}>
            <Image source={Relogio} style={styles.imgConfig} />
          </View>
          <View style={styles.info2}>
            <Text style={styles.infoText}>Contagem Decrescente</Text>
          </View>
          <View style={styles.info3}>
            <Text style={{color: "#FF69B4"}}>15 segs.</Text>
            <Image source={Arrow} style={styles.imgIcon} />
          </View>
        </View>
        <View style={styles.divisoriaConfig} />
        <View style={styles.infoConfig}>
          <View style={styles.info1}>
            <Image source={Som} style={styles.imgConfig} />
          </View>
          <View style={styles.info2}>
            <Text style={styles.infoText}>Opções de Som</Text>
          </View>
          <View style={styles.info3}>
            <Text></Text>
            <Image source={Arrow} style={[styles.imgIcon, {marginRight: "-20%"}]} />
          </View>
        </View>
        <View style={styles.divisoriaConfig} />
        <View style={styles.infoConfig}>
          <View style={styles.info1}>
            <Image source={Apito} style={styles.imgConfig} />
          </View>
          <View style={styles.info2}>
            <Text style={styles.infoText}>Voz do(a) treinador(a)</Text>
          </View>
          <View style={styles.info3}>
            <Text></Text>
            <Image source={Arrow} style={[styles.imgIcon, {marginRight: "-20%"}]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff", // Adicione a cor de fundo desejada para o container principal
  },
  containerGradient: {
    width: "100%",
    height: "20%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  DivImagem: {
    backgroundColor: "green",
    width: "20%",
    height: "10%",
    justifyContent: "center",
    zIndex: 1,
  },
  ImagemIcone: {
    position: "absolute",
    top: -65,
    objectFit: "cover",
    width: "40%",
    height: "50%",
    alignSelf: "center",
  },
  DivDados: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "30%",
    marginTop: "20%",
    top: "-20%",
    borderRadius: 8,
    backgroundColor: "#fff", // Cor de fundo da DivDados
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10, // Adicione um padding para ver o sombreamento melhor
  },
  containerBotao: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    marginTop: "8%",
  },
  containerTexto: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    margin: "1%",
  },
  containerMedidas: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "90%",
  },
  infoMedidas: {
    flex: 10,
    alignItems: "center",
  },
  divisoriaMedidas: {
    flex: 0.1,
    backgroundColor: "#e6e6e6",
    height: "50%",
  },
  containerBotoes: {
    flex: 2.8,
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    flexDirection: "row",
    width: "100%",
  },
  gradientBackground: {
    top: "-20%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "7%",
    marginTop: "5%",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.65,
    shadowRadius: 3.84,
    elevation: 3,
    padding: 16,
  },
  DivPremium: {
    flexDirection: "row",
    width: "100%",
  },
  Premium1: {
    width: "15%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  PremiumIcon:{
    width: "60%",
    height: "60%"
  },
  Premium2: {
    width: "50%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  P2Text: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  Premium3: {
    width: "30%",
    alignItems: "flex-end",
  },
  P3Text1: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  P3Text2: {
    fontSize: 10,
    color: "white",
  },
  DivEx: {
    top: "-20%",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "4%",
    width: "90%",
    height: "3%",
  },
  ex: {
    marginLeft: "2%",
  },
  DivConfigs: {
    top: "-20%",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    width: "90%",
    height: "42%",
    marginTop: "1%",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  imgConfig: {
    width: "50%",
    height: "50%",
    borderRadius: 6,
  },
  divisoriaConfig: {
    flex: 0.1,
    backgroundColor: "#e6e6e6",
    width: "100%",
  },
  infoConfig: {
    flex: 5,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",

    marginLeft: "2%",
  },
  info1: {
    flex: 1,

    justifyContent: "center",
  },
  info2: {
    flex: 3,
    justifyContent: "center",
  },
  infoText:{
    fontSize: 13,
    fontWeight: "700"
  },
  info3: {
    flex: 1.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  imgIcon:{
    width: "15%",
    height: "25%"
  },
});

export default Perfil;
