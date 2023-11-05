import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ uri, id}) {
    return (
        <Image key={id} source={{uri: uri}} style={styles.image} />
    );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    margin: 10,
    borderRadius: 18,
  },
});
