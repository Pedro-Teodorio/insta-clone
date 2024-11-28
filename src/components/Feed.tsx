import { Component } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";


interface FeedProps {
    data: {
        id: string,
        nome: string,
        descricao: string,
        imgperfil: string,
        imgPublicacao: string,
        liked: boolean,
        likes: number
    }
}

interface FeedState {
    feed: {
        id: string,
        nome: string,
        descricao: string,
        imgperfil: string,
        imgPublicacao: string,
        liked: boolean,
        likes: number
    }
}
export default class Feed extends Component<FeedProps, FeedState> {
    constructor(props: FeedProps) {
        super(props);
        this.state = {
            feed: this.props.data
        }
        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
        
    }
    mostraLikes(likes:number){
        if(likes > 0){
            return(
                <Text style={styles.likes}>
                    {likes} {likes > 1 ? 'curtidas' : 'curtida'}
                </Text>
            );
        }
    }

    like(){
        let feed = this.state.feed
        if(feed.liked){
            this.setState({
                feed:{
                    ...feed,
                    liked: false,
                    likes: feed.likes - 1
                }
            })
        }else{
            this.setState({
                feed:{
                    ...feed,
                    liked: true,
                    likes: feed.likes + 1
                }
            })
        }
    }
   
    render() {
        return (
            <View >
                <View style={styles.viewPerfil}>
                    <Image
                        source={{ uri: this.state.feed.imgperfil }}
                        style={styles.fotoPerfil}
                    />
                    <Text style={styles.nomeUsuario}> {this.state.feed.nome}</Text>
                </View>
                <Image
                    source={{ uri: this.state.feed.imgPublicacao }}
                    style={styles.fotoPublicacao}
                    resizeMode='cover'
                />
                <View style={styles.viewLike}>
                    <TouchableOpacity onPress={this.like}>
                        <Image
                            source={this.state.feed.liked ? require('../image/likeada.png') : require('../image/like.png')}
                            style={styles.send}

                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={require('../image/send.png')}
                            style={styles.send}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.viewFooter}>
                    <Text style={styles.nomeFooter}>
                        {this.state.feed.nome}
                    </Text>
                    <Text style={styles.descricao}>
                        {this.state.feed.descricao}
                    </Text>
                </View>

                {
                    this.mostraLikes(this.state.feed.likes)
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewPerfil: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8
    },
    fotoPerfil: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    nomeUsuario: {
        paddingLeft: 5,
        fontSize: 16,
        textAlign: 'left'
    },
    fotoPublicacao: {
        width: '100%',
        height: 400,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewLike: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 5
    },
    send: {
        width: 32,
        height: 32
    },
    viewFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    nomeFooter: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    descricao: {
        paddingLeft: 5,
        fontSize: 15,
        color: '#000'
    },
    likes: {
        fontWeight: 'bold',
        marginLeft: 5
    }

})