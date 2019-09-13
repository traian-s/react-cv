import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/styles.scss';
import CV from './components/CV';
import {Data} from "./content";
import {Provider} from "react-redux";
import store from "./redux/store";


ReactDOM.render(<Provider store={store}><CV {...Data}/></Provider>, document.getElementById('root'));
