import React, {Component} from 'react';
import ListComponent from '../ListComponent'
import axios from 'axios'
import UrlComponent from '../UrlComponent'
import Loader from '../Loader'

class FeedComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            items: [], // valore iniziale
            feed: props.url,
            loading: true
        }

        this.aggiornaFeed = this.aggiornaFeed.bind(this)
        this.changeUrl = this.changeUrl.bind(this)
    }

    aggiornaFeed(){

        axios.get(this.state.feed)
            .then( response => {
                setTimeout(()=>{
                    this.setState({ items: response.data , loading: false })
                },2000) // simulo un ritardo
            })
            .catch( error => {
                this.setState({ items: [] , loading: false })
            });

        }

    componentDidMount() {
        this.aggiornaFeed()
    }

    changeUrl(event){
        this.setState({
            feed: event.target.value,
            loading: true,
            items: []
        },
        () =>{
            this.aggiornaFeed()
        })
    }

    render() {
        const {items,feed,loading} = this.state
        const loaderView = (loading) ? <Loader /> : null
        return (
            <div className="feed">
                <UrlComponent value={feed} onChange={this.changeUrl}/>
                {loaderView}
               <ListComponent data={items} />
            </div>
        );
    }
}

export default FeedComponent;